"use strict";
(self["webpackChunkcdata_arc"] = self["webpackChunkcdata_arc"] || []).push([["legacyFlows"],{

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

/***/ 97357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var Chip = function Chip(_ref) {
  var index = _ref.index,
    chip = _ref.chip,
    onClick = _ref.onClick,
    onRemove = _ref.onRemove,
    disabled = _ref.disabled;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "chip d-flex me-1",
    onClick: disabled ? undefined : onClick === null || onClick === void 0 ? void 0 : onClick.bind(null, chip)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "pe-2 text-truncate"
  }, chip), onRemove && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "pe-2",
    onClick: function onClick(e) {
      return e.stopPropagation(), !disabled && onRemove.call(null, chip, index);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-remove"
  })));
};
var ChipList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var _props$chips;
  var onClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return props.onClick == null ? undefined : function (chip, e) {
      return e.stopPropagation(), props.onClick.call(null, chip);
    };
  }, [props.onClick]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: ref,
    className: "chip-list row row-cols-auto gap-2 d-flex m-0 py-1 " + (props.className || "") + (props.disabled ? " disabled" : ""),
    "data-readonly": props.onListClick == null && props.onClick == null && props.onRemove == null,
    onClick: props.onListClick
  }, (_props$chips = props.chips) === null || _props$chips === void 0 ? void 0 : _props$chips.map(function (chip, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Chip, {
      key: index,
      index: index,
      chip: chip,
      onClick: onClick,
      onRemove: props.onRemove,
      disabled: props.disabled
    });
  }), props.plugins);
});
ChipList.propTypes = {
  /**
   * Whether to show the modal?
   */
  chips: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  /**
   * Event for ChipList: onListClick.
   */
  onListClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  /**
   * Event for Chip: onClick.
   */
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  /**
   * Event for Chip: onRemove.
   */
  onRemove: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChipList);

/***/ }),

/***/ 63557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25337);
/* harmony import */ var _ChipList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97357);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["separator", "onChipsChanged"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }






var EditableSpan = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (_ref, ref) {
  var className = _ref.className,
    text = _ref.text,
    onClick = _ref.onClick,
    onChange = _ref.onChange,
    onKeyDown = _ref.onKeyDown,
    onBlur = _ref.onBlur;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (ref !== null && ref !== void 0 && ref.current) {
      var range = document.createRange();
      var selection = window.getSelection();
      range.selectNodeContents(ref.current);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }, [text]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    ref: ref,
    contentEditable: true,
    suppressContentEditableWarning: true,
    className: className,
    onClick: onClick,
    onInput: function onInput(e) {
      return onChange(e.target.textContent);
    },
    onKeyDown: onKeyDown,
    onBlur: onBlur
  }, text);
});
var EditableChipList = function EditableChipList(_ref2) {
  var _ref2$separator = _ref2.separator,
    separator = _ref2$separator === void 0 ? "," : _ref2$separator,
    onChipsChanged = _ref2.onChipsChanged,
    props = _objectWithoutProperties(_ref2, _excluded);
  var ref = (0,_components_utils__WEBPACK_IMPORTED_MODULE_1__/* .useClickOutsideCheck */ .jn)(handleStopEditing);
  var editorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    editing = _useState2[0],
    setEditing = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    text = _useState4[0],
    setText = _useState4[1];
  var chips = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (props.chips.length <= 0 || !editing || text.length <= 0 || text !== props.chips[props.chips.length - 1]) return props.chips;else return props.chips.slice(0, props.chips.length - 1);
  }, [props.chips, editing, text]);
  var handleTextChanged = function handleTextChanged(text) {
    var items = text.split(new RegExp((0,_components_utils__WEBPACK_IMPORTED_MODULE_1__/* .escapeRegExp */ .Nt)(separator), "g")).map(function (item) {
      return item.trim();
    }).filter(function (item) {
      return item.length > 0;
    });
    if (items.length > 0 && text.endsWith(separator)) items.push("");
    setText(items.length > 0 ? items[items.length - 1] : "");
    if (items.length > 1) items.splice(items.length - 1);
    onChipsChanged([].concat(_toConsumableArray(chips), _toConsumableArray(items)));
  };
  var handleStopEditing = function handleStopEditing(ignoreValue) {
    text.length > 0 && handleTextChanged(ignoreValue === true ? "" : text);
    setEditing(false);
    setText("");
  };
  var handleRemoveChip = function handleRemoveChip(_, index) {
    var items = chips.slice();
    items.splice(index, 1);
    onChipsChanged(items);
  };
  var renderEditor = function renderEditor() {
    if (props.disabled) return null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(EditableSpan, {
      ref: editorRef,
      key: "editor",
      className: "editor p-0",
      onClick: function onClick() {
        return setEditing(true);
      },
      text: text,
      onChange: handleTextChanged,
      onKeyDown: function onKeyDown(e) {
        !editing && setEditing(true);
        if (e.key === "Enter") {
          text.length > 0 && handleTextChanged(text + separator);
          e.preventDefault();
        } else if (e.key === "Escape") {
          handleStopEditing(true);
        } else if (text.length === 0 && chips.length > 0 && e.key === "Backspace") {
          handleRemoveChip(chips[chips.length - 1], chips.length - 1);
        }
      },
      onBlur: handleStopEditing
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _editorRef$current;
    editing && ((_editorRef$current = editorRef.current) === null || _editorRef$current === void 0 ? void 0 : _editorRef$current.focus());
  }, [editing]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: ref,
    className: "rsb-form-nosubmit editable-chip-list form-control p-0" + (props.disabled ? " disabled" : "") + (editing ? " editing" : "")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ChipList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, _extends({}, props, {
    className: "px-2",
    chips: chips,
    onListClick: props.disabled ? undefined : setEditing.bind(null, true),
    onRemove: handleRemoveChip,
    plugins: renderEditor()
  })));
};
EditableChipList.propTypes = _objectSpread(_objectSpread({}, _ChipList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.propTypes), {}, {
  /**
   * Event for chips changed: onChipsChanged.
   */
  onChipsChanged: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  /**
   * The separator of the chip.
   */
  separator: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditableChipList);

/***/ }),

/***/ 69404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EX: () => (/* binding */ CustomizeSettingsTab),
/* harmony export */   GY: () => (/* binding */ ImportCustomConflictResolutionWorkspacesTab),
/* harmony export */   as: () => (/* binding */ ImportCustomConflictResolutionEDITab),
/* harmony export */   dF: () => (/* binding */ CustomizeEDITab),
/* harmony export */   dK: () => (/* binding */ ImportCustomConflictResolutionSettingsTab),
/* harmony export */   le: () => (/* binding */ CustomizeWorkspacesTab),
/* harmony export */   zM: () => (/* binding */ CustomizeFlowTab)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19967);
/* harmony import */ var _searchbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58447);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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






var ImportCustomConflictResolutionWorkspacesTab = /*#__PURE__*/function (_React$Component) {
  function ImportCustomConflictResolutionWorkspacesTab(props) {
    var _this;
    _classCallCheck(this, ImportCustomConflictResolutionWorkspacesTab);
    _this = _callSuper(this, ImportCustomConflictResolutionWorkspacesTab, [props]);
    _defineProperty(_this, "handleSearchTextChange", function (text) {
      _this.setState({
        searchText: text
      });
    });
    _defineProperty(_this, "handleWorkspaceItemCollapse", function (workspaceId, collapsed) {
      var workspacesCollapsed = _utils__WEBPACK_IMPORTED_MODULE_1__/* .ImportUtils */ .P.Clone(_this.state.workspacesCollapsed);
      workspacesCollapsed[workspaceId] = collapsed;
      if (collapsed) {
        Object.keys(workspacesCollapsed).forEach(function (key) {
          if (key != workspaceId) {
            workspacesCollapsed[key] = false;
          }
        });
      }
      _this.setState({
        workspacesCollapsed: workspacesCollapsed
      });
    });
    _this.state = {
      searchText: null,
      workspacesCollapsed: {}
    };
    return _this;
  }
  _inherits(ImportCustomConflictResolutionWorkspacesTab, _React$Component);
  return _createClass(ImportCustomConflictResolutionWorkspacesTab, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var searchText = this.state.searchText && this.state.searchText.toLowerCase();
      var displayingWorkspaces = [];
      Object.values(this.props.workspacesInfo).forEach(function (workspaceInfo) {
        var hasDisplayingConnector = false;
        var hasDisplayingAPI = false;
        if (workspaceInfo.connectors) {
          hasDisplayingConnector = Object.values(workspaceInfo.connectors).some(function (connectorInfo) {
            return connectorInfo.existing && connectorInfo.action != "ignore" && (!searchText || connectorInfo.id.toLowerCase().includes(searchText));
          });
        }
        if (workspaceInfo.apis) {
          hasDisplayingAPI = Object.values(workspaceInfo.apis).some(function (apiInfo) {
            return apiInfo.existing && apiInfo.action != "ignore" && (!searchText || apiInfo.name.toLowerCase().includes(searchText));
          });
        }
        if (hasDisplayingConnector || hasDisplayingAPI) {
          displayingWorkspaces.push(workspaceInfo);
        }
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_searchbox__WEBPACK_IMPORTED_MODULE_2__/* .SearchBox */ .G, {
        searchText: this.state.searchText,
        onChanged: this.handleSearchTextChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Review the workspace import conflicts. Workspaces that share a name with imported workspaces will have the imported workspace's connectors added to it."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "alert alert-warning",
        role: "alert"
      }, "If existing flow APIs or connectors are set to be replaced, the current ones will be removed from their respective workspaces and added to the imported workspace instead. Please note, this may cause existing flows to no longer function. When replacing flow APIs associated connectors that are not replaced will be orphaned within their workspace."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, displayingWorkspaces.map(function (info) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ImportCustomConflictResolutionWorkspacesItem, {
          key: info.id,
          workspaceInfo: info,
          searchText: searchText,
          onWorkspaceActionChange: _this2.props.onWorkspaceActionChange,
          onConnectorActionChange: _this2.props.onConnectorActionChange,
          onAPIActionChange: _this2.props.onAPIActionChange,
          collapsed: _this2.state.workspacesCollapsed[info.id],
          onWorkspaceCollapseChanged: _this2.handleWorkspaceItemCollapse,
          isFlow: _this2.props.isFlow
        });
      })));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
var ImportCustomConflictResolutionSettingsTab = /*#__PURE__*/function (_React$Component2) {
  function ImportCustomConflictResolutionSettingsTab(props) {
    var _this3;
    _classCallCheck(this, ImportCustomConflictResolutionSettingsTab);
    _this3 = _callSuper(this, ImportCustomConflictResolutionSettingsTab, [props]);
    _defineProperty(_this3, "handleSectionItemCollapse", function (section, collapsed) {
      var sectionsCollapsed = _utils__WEBPACK_IMPORTED_MODULE_1__/* .ImportUtils */ .P.Clone(_this3.state.sectionsCollapsed);
      sectionsCollapsed[section] = collapsed;
      if (collapsed) {
        Object.keys(sectionsCollapsed).forEach(function (key) {
          if (key != section) {
            sectionsCollapsed[key] = false;
          }
        });
      }
      _this3.setState({
        sectionsCollapsed: sectionsCollapsed
      });
    });
    _this3.state = {
      sectionsCollapsed: {}
    };
    return _this3;
  }
  _inherits(ImportCustomConflictResolutionSettingsTab, _React$Component2);
  return _createClass(ImportCustomConflictResolutionSettingsTab, [{
    key: "render",
    value: function render() {
      var _this4 = this;
      var displaySections = [];
      if (this.props.settingsInfo.profiles) {
        var profileInfo = {};
        profileInfo.name = "profiles";
        profileInfo.insideNames = {};
        for (var _i = 0, _Object$values = Object.values(this.props.settingsInfo.profiles); _i < _Object$values.length; _i++) {
          var nameInfo = _Object$values[_i];
          if (nameInfo.action != "ignore") {
            profileInfo.insideNames[nameInfo.name] = nameInfo;
          }
        }
        if (Object.keys(profileInfo.insideNames).length > 0) {
          displaySections.push(profileInfo);
        }
      }
      if (this.props.settingsInfo.settings) {
        for (var _i2 = 0, _Object$values2 = Object.values(this.props.settingsInfo.settings); _i2 < _Object$values2.length; _i2++) {
          var info = _Object$values2[_i2];
          if (info.action != "ignore") {
            displaySections.push(info);
          }
        }
      }
      if (this.props.settingsInfo.users) {
        var userInfo = {};
        userInfo.name = "users";
        userInfo.insideNames = {};
        for (var _i3 = 0, _Object$values3 = Object.values(this.props.settingsInfo.users); _i3 < _Object$values3.length; _i3++) {
          var _nameInfo = _Object$values3[_i3];
          if (_nameInfo.existing && _nameInfo.action != "ignore") {
            userInfo.insideNames[_nameInfo.name] = _nameInfo;
          }
        }
        if (Object.keys(userInfo.insideNames).length > 0) {
          displaySections.push(userInfo);
        }
      }
      if (this.props.settingsInfo.roles) {
        var roleInfo = {};
        roleInfo.name = "roles";
        roleInfo.insideNames = {};
        for (var _i4 = 0, _Object$values4 = Object.values(this.props.settingsInfo.roles); _i4 < _Object$values4.length; _i4++) {
          var _nameInfo2 = _Object$values4[_i4];
          if (_nameInfo2.existing && _nameInfo2.action != "ignore") {
            roleInfo.insideNames[_nameInfo2.id] = _nameInfo2;
          }
        }
        if (Object.keys(roleInfo.insideNames).length > 0) {
          displaySections.push(roleInfo);
        }
      }
      if (this.props.settingsInfo.certificates) {
        var certificateInfo = {};
        certificateInfo.name = "certificates";
        certificateInfo.insideNames = {};
        for (var _i5 = 0, _Object$values5 = Object.values(this.props.settingsInfo.certificates); _i5 < _Object$values5.length; _i5++) {
          var _nameInfo3 = _Object$values5[_i5];
          if (_nameInfo3.existing && _nameInfo3.action != "ignore") {
            certificateInfo.insideNames[_nameInfo3.name] = _nameInfo3;
          }
        }
        if (Object.keys(certificateInfo.insideNames).length > 0) {
          displaySections.push(certificateInfo);
        }
      }
      if (this.props.settingsInfo.connections) {
        var connInfo = {};
        connInfo.name = "connections";
        connInfo.insideNames = {};
        for (var _i6 = 0, _Object$values6 = Object.values(this.props.settingsInfo.connections); _i6 < _Object$values6.length; _i6++) {
          var _nameInfo4 = _Object$values6[_i6];
          if (_nameInfo4.existing && _nameInfo4.action != "ignore") {
            connInfo.insideNames[_nameInfo4.category + ":" + _nameInfo4.name] = _nameInfo4;
          }
        }
        if (Object.keys(connInfo.insideNames).length > 0) {
          displaySections.push(connInfo);
        }
      }
      if (this.props.settingsInfo.vaults) {
        var vaultInfo = {};
        vaultInfo.name = "vaults";
        vaultInfo.insideNames = {};
        for (var _i7 = 0, _Object$values7 = Object.values(this.props.settingsInfo.vaults); _i7 < _Object$values7.length; _i7++) {
          var _nameInfo5 = _Object$values7[_i7];
          if (_nameInfo5.existing && _nameInfo5.action != "ignore") {
            vaultInfo.insideNames[_nameInfo5.id] = _nameInfo5;
          }
        }
        if (Object.keys(vaultInfo.insideNames).length > 0) {
          displaySections.push(vaultInfo);
        }
      }
      if (this.props.settingsInfo.reports) {
        var reportInfo = {};
        reportInfo.name = "reports";
        reportInfo.insideNames = {};
        for (var _i8 = 0, _Object$values8 = Object.values(this.props.settingsInfo.reports); _i8 < _Object$values8.length; _i8++) {
          var _nameInfo6 = _Object$values8[_i8];
          if (_nameInfo6.existing && _nameInfo6.action != "ignore") {
            reportInfo.insideNames[_nameInfo6.name] = _nameInfo6;
          }
        }
        if (Object.keys(reportInfo.insideNames).length > 0) {
          displaySections.push(reportInfo);
        }
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Review the settings import conflict."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "alert alert-warning",
        role: "alert"
      }, "Replacing existing settings may cause existing flows to no longer function. Also, not importing settings may cause imported flows to not function."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, Object.values(displaySections).map(function (info) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ImportCustomConflictResolutionSectionItem, {
          key: info.name.toLowerCase(),
          name: info.name,
          sectionInfo: info,
          onSectionActionChange: _this4.props.onSectionActionChange,
          onNameActionChange: _this4.props.onNameActionChange,
          collapsed: _this4.state.sectionsCollapsed[info.name],
          onSectionCollapseChanged: _this4.handleSectionItemCollapse
        });
      })));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
var ImportCustomConflictResolutionEDITab = /*#__PURE__*/function (_React$Component3) {
  function ImportCustomConflictResolutionEDITab(props) {
    var _this5;
    _classCallCheck(this, ImportCustomConflictResolutionEDITab);
    _this5 = _callSuper(this, ImportCustomConflictResolutionEDITab, [props]);
    _this5.state = {};
    return _this5;
  }
  _inherits(ImportCustomConflictResolutionEDITab, _React$Component3);
  return _createClass(ImportCustomConflictResolutionEDITab, [{
    key: "render",
    value: function render() {
      var _this6 = this;
      var partnerInfos = [];
      var documentInfos = [];
      if (this.props.settingsInfo.partners) {
        for (var _i9 = 0, _Object$values9 = Object.values(this.props.settingsInfo.partners); _i9 < _Object$values9.length; _i9++) {
          var partnerInfo = _Object$values9[_i9];
          if (partnerInfo.existing && partnerInfo.action != "ignore") {
            partnerInfos.push(partnerInfo);
          }
        }
      }
      if (this.props.settingsInfo.documents) {
        for (var _i10 = 0, _Object$values10 = Object.values(this.props.settingsInfo.documents); _i10 < _Object$values10.length; _i10++) {
          var documentInfo = _Object$values10[_i10];
          if (documentInfo.existing && documentInfo.action != "ignore") {
            documentInfos.push(documentInfo);
          }
        }
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Review the Partner and Document workspace import conflicts below."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "alert alert-warning",
        role: "alert"
      }, "Replacing existing Partner/Document may cause existing workflows to no longer function. Also, not importing Partner/Document may cause imported workflows to not function."), partnerInfos && partnerInfos.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "Partners:"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, partnerInfos.map(function (info) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ImportCustomConflictResolutionEDIItem, {
          key: info.id.toLowerCase(),
          info: info,
          type: "partner",
          onPartnerActionChange: _this6.props.onPartnerActionChange,
          onDocumentActionChange: _this6.props.onDocumentActionChange
        });
      }))), documentInfos && documentInfos.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "Documents:"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, documentInfos.map(function (info) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ImportCustomConflictResolutionEDIItem, {
          key: info.id.toLowerCase(),
          info: info,
          type: "document",
          onPartnerActionChange: _this6.props.onPartnerActionChange,
          onDocumentActionChange: _this6.props.onDocumentActionChange
        });
      }))));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
var CustomizeSettingsTab = /*#__PURE__*/function (_React$Component4) {
  function CustomizeSettingsTab(props) {
    var _this7;
    _classCallCheck(this, CustomizeSettingsTab);
    _this7 = _callSuper(this, CustomizeSettingsTab, [props]);
    _defineProperty(_this7, "handleSelectAllClick", function () {
      var nameActions = _this7.state.nameActions;
      var nameActionChangeHandler = _this7.props.onNameActionChange;
      Object.keys(nameActions).forEach(function (key) {
        if (nameActions[key] != "skip" && nameActionChangeHandler) {
          nameActionChangeHandler(key, "skip");
        }
        nameActions[key].action = "skip";
      });
      _this7.setState({
        nameActions: nameActions
      });
    });
    _defineProperty(_this7, "handleDeselectAllClick", function () {
      var nameActions = _this7.state.nameActions;
      var nameActionChangeHandler = _this7.props.onNameActionChange;
      Object.keys(nameActions).forEach(function (key) {
        if (nameActions[key] != "ignore" && nameActionChangeHandler) {
          nameActionChangeHandler(key, "ignore");
        }
        nameActions[key].action = "ignore";
      });
      _this7.setState({
        nameActions: nameActions
      });
    });
    _defineProperty(_this7, "handleSettingsItemCheck", function (event) {
      var nameActions = _this7.state.nameActions;
      var nameActionChangeHandler = _this7.props.onNameActionChange;
      var action = event.target.checked ? "skip" : "ignore";
      var section = event.target.dataset.section;
      if (nameActionChangeHandler && nameActions[section] != action) {
        nameActionChangeHandler(section, action);
      }
      nameActions[section].action = action;
      _this7.setState({
        nameActions: nameActions
      });
    });
    var _nameActions = {};
    if (props.settingsInfo.profiles) {
      var action = "ignore";
      Object.values(props.settingsInfo.profiles).forEach(function (info) {
        if (info.action != "ignore") {
          action = "skip";
        }
      });
      _nameActions.profiles = {
        action: action
      };
    }
    if (props.settingsInfo.settings) {
      var _action = "ignore";
      Object.values(props.settingsInfo.settings).forEach(function (info) {
        _action = "ignore";
        if (info.action != "ignore") {
          _action = "skip";
        }
        _nameActions[info.name] = {
          action: _action
        };
      });
    }
    if (props.settingsInfo.users) {
      var _action2 = "ignore";
      Object.values(props.settingsInfo.users).forEach(function (info) {
        _action2 = "ignore";
        if (info.action != "ignore") {
          _action2 = "skip";
        }
      });
      _nameActions.users = {
        action: _action2
      };
    }
    if (props.settingsInfo.roles) {
      var _action3 = "ignore";
      Object.values(props.settingsInfo.roles).forEach(function (info) {
        _action3 = "ignore";
        if (info.action != "ignore") {
          _action3 = "skip";
        }
      });
      _nameActions.roles = {
        action: _action3
      };
    }
    if (props.settingsInfo.certificates) {
      var _action4 = "ignore";
      Object.values(props.settingsInfo.certificates).forEach(function (info) {
        _action4 = "ignore";
        if (info.action != "ignore") {
          _action4 = "skip";
        }
      });
      _nameActions.certificates = {
        action: _action4
      };
    }
    if (props.settingsInfo.connections) {
      var _action5 = "ignore";
      Object.values(props.settingsInfo.connections).forEach(function (info) {
        _action5 = "ignore";
        if (info.action != "ignore") {
          _action5 = "skip";
        }
      });
      _nameActions.connections = {
        action: _action5
      };
    }
    if (props.settingsInfo.vaults) {
      var _action6 = "ignore";
      Object.values(props.settingsInfo.vaults).forEach(function (info) {
        _action6 = "ignore";
        if (info.action != "ignore") {
          _action6 = "skip";
        }
      });
      _nameActions.vaults = {
        action: _action6
      };
    }
    if (props.settingsInfo.reports) {
      var _action7 = "ignore";
      Object.values(props.settingsInfo.reports).forEach(function (info) {
        _action7 = "ignore";
        if (info.action != "ignore") {
          _action7 = "skip";
        }
      });
      _nameActions.reports = {
        action: _action7
      };
    }
    _this7.state = {
      nameActions: _nameActions
    }; // from props
    return _this7;
  }
  _inherits(CustomizeSettingsTab, _React$Component4);
  return _createClass(CustomizeSettingsTab, [{
    key: "render",
    value: function render() {
      var nameActions = this.state.nameActions;
      var itemClickHandler = this.handleSettingsItemCheck;
      var sectionItems = Object.keys(nameActions).map(function (name) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "customize-item checkbox",
          key: name
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
          className: "w-100"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
          type: "checkbox",
          className: "form-check-input",
          checked: nameActions[name].action != "ignore",
          onChange: itemClickHandler,
          "data-section": name
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, _DisplayMap._[name.toLowerCase()] || name)));
      });
      var notSelectAll = Object.keys(nameActions).find(function (name) {
        return nameActions[name].action === "ignore";
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
        className: "form-horizontal form-settings",
        role: "form",
        autoComplete: "off",
        noValidate: "novalidate"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, this.props.isImport ? "Select the settings you want to import." : "Select the settings you want to export."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "alert alert-warning ".concat(notSelectAll ? "" : "hidden"),
        role: "alert"
      }, this.props.isImport ? "Not importing all settings may cause some flows to no longer function." : "Not exporting all settings may cause some flows to no longer function."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "form-group row mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "migration-select-text",
        onClick: this.handleSelectAllClick
      }, "Select all"), "|", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "migration-select-text",
        onClick: this.handleDeselectAllClick
      }, "Deselect all")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "settings-content"
      }, sectionItems));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
var _DisplayMap = {
  _: {
    "profiles": "Profiles",
    "reports": "Reports",
    "users": "Users",
    "roles": "Roles",
    "certificates": "Certificates",
    "alerts": "Alerts",
    "adminapi": "Admin API",
    "connections": "Connections",
    "vaults": "Vaults",
    "sso": "SSO",
    "advanced": "Advanced"
  }
};
var CustomizeFlowTab = /*#__PURE__*/function (_React$Component5) {
  function CustomizeFlowTab(props) {
    var _this8;
    _classCallCheck(this, CustomizeFlowTab);
    _this8 = _callSuper(this, CustomizeFlowTab, [props]);
    _defineProperty(_this8, "handleSearchTextChange", function (text) {
      _this8.setState({
        searchText: text
      });
    });
    _defineProperty(_this8, "handleSelectAllClick", function () {
      var connectorActions = _this8.state.connectorActions;
      var apiActions = _this8.state.apiActions;
      var connectorActionChangeHandler = _this8.props.onConnectorActionChange;
      var apiActionChangeHandler = _this8.props.onAPIActionChange;
      Object.keys(connectorActions).forEach(function (key) {
        if (connectorActions[key] != "skip" && connectorActionChangeHandler) {
          connectorActionChangeHandler(_this8.props.workspaceInfo.id, key, "skip");
        }
        connectorActions[key] = "skip";
      });
      Object.keys(apiActions).forEach(function (key) {
        if (apiActions[key] != "skip" && apiActionChangeHandler) {
          apiActionChangeHandler(_this8.props.workspaceInfo.id, key, "skip");
        }
        apiActions[key] = "skip";
      });
      _this8.setState({
        connectorActions: connectorActions,
        apiActions: apiActions
      });
    });
    _defineProperty(_this8, "handleDeselectAllClick", function () {
      var connectorActions = _this8.state.connectorActions;
      var apiActions = _this8.state.apiActions;
      var connectorActionChangeHandler = _this8.props.onConnectorActionChange;
      var apiActionChangeHandler = _this8.props.onAPIActionChange;
      Object.keys(connectorActions).forEach(function (key) {
        if (connectorActions[key] != "ignore" && connectorActionChangeHandler) {
          connectorActionChangeHandler(_this8.props.workspaceInfo.id, key, "ignore");
        }
        connectorActions[key] = "ignore";
      });
      Object.keys(apiActions).forEach(function (key) {
        if (apiActions[key] != "ignore" && apiActionChangeHandler) {
          apiActionChangeHandler(_this8.props.workspaceInfo.id, key, "ignore");
        }
        apiActions[key] = "ignore";
      });
      _this8.setState({
        connectorActions: connectorActions,
        apiActions: apiActions
      });
    });
    _defineProperty(_this8, "handleConnectorItemCheck", function (event) {
      var connectorId = event.target.dataset.connectorid;
      var action = event.target.checked ? "skip" : "ignore";
      var connectorActionChangeHandler = _this8.props.onConnectorActionChange;
      var connectorActions = _this8.state.connectorActions;
      if (connectorActions[connectorId] != action && connectorActionChangeHandler) {
        connectorActionChangeHandler(_this8.props.workspaceInfo.id, connectorId, action);
      }
      connectorActions[connectorId] = action;
      _this8.setState({
        connectorActions: connectorActions
      });
    });
    _defineProperty(_this8, "handleAPIConnectorItemCheck", function (event) {
      var connectorId = event.target.dataset.connectorid;
      var apiId = event.target.dataset.apiid;
      var action = event.target.checked ? "skip" : "ignore";
      var connectorActionChangeHandler = _this8.props.onConnectorActionChange;
      var connectorActions = _this8.state.connectorActions;
      var apiActionChangeHandler = _this8.props.onAPIActionChange;
      var apiActions = _this8.state.apiActions;
      if (connectorActions[connectorId] != action && connectorActionChangeHandler) {
        connectorActionChangeHandler(_this8.props.workspaceInfo.id, connectorId, action);
      }
      connectorActions[connectorId] = action;
      if (action == "ignore" && apiActions[apiId].action != "ignore" && apiActionChangeHandler) {
        apiActionChangeHandler(_this8.props.workspaceInfo.id, apiId, "ignore");
        apiActions[apiId] = "ignore";
      }
      _this8.setState({
        connectorActions: connectorActions,
        apiActions: apiActions
      });
    });
    _defineProperty(_this8, "handleAPIItemCheck", function (event) {
      var _this8$props$workspac;
      var apiId = event.target.dataset.apiid.toLowerCase();
      var action = event.target.checked ? "skip" : "ignore";
      var apiActionChangeHandler = _this8.props.onAPIActionChange;
      var apiActions = _this8.state.apiActions;
      var connectorActionChangeHandler = _this8.props.onConnectorActionChange;
      var connectorActions = _this8.state.connectorActions;
      if (apiActions[apiId] != action && apiActionChangeHandler) {
        apiActionChangeHandler(_this8.props.workspaceInfo.id, apiId, action);
      }
      apiActions[apiId] = action;
      if ((_this8$props$workspac = _this8.props.workspaceInfo) !== null && _this8$props$workspac !== void 0 && (_this8$props$workspac = _this8$props$workspac.flow) !== null && _this8$props$workspac !== void 0 && _this8$props$workspac.apis) {
        var apiInfo = _this8.props.workspaceInfo.flow.apis[apiId];
        if (apiInfo) {
          var connectorIds = apiInfo.connectorIds;
          connectorIds === null || connectorIds === void 0 || connectorIds.map(function (connectorId) {
            if (connectorActions[connectorId] != action && connectorActionChangeHandler) {
              connectorActionChangeHandler(_this8.props.workspaceInfo.id, connectorId, action);
            }
            connectorActions[connectorId] = action;
          });
        }
      }
      _this8.setState({
        connectorActions: connectorActions,
        apiActions: apiActions
      });
    });
    _defineProperty(_this8, "handleCollapseHideClick", function (event) {
      var collapsedList = _utils__WEBPACK_IMPORTED_MODULE_1__/* .ImportUtils */ .P.Clone(_this8.state.collapsedList);
      var apiId = event.target.dataset.apiid;
      collapsedList[apiId] = false;
      _this8.setState({
        collapsedList: collapsedList
      });
    });
    _defineProperty(_this8, "handleCollapseShowClick", function (event) {
      var collapsedList = _utils__WEBPACK_IMPORTED_MODULE_1__/* .ImportUtils */ .P.Clone(_this8.state.collapsedList);
      var apiId = event.target.dataset.apiid;
      collapsedList[apiId] = true;
      _this8.setState({
        collapsedList: collapsedList
      });
    });
    _defineProperty(_this8, "handleIncludeWorkspaceSettingsChange", function (event) {
      _this8.props.onIncludeWorkspaceSettingsChange(event.target.checked);
      _this8.setState({
        includeWorkspaceSettings: event.target.checked
      });
    });
    _defineProperty(_this8, "handleIncludeNotesChange", function (event) {
      _this8.props.onIncludeNotesChange(event.target.checked);
      _this8.setState({
        includeNotes: event.target.checked
      });
    });
    var _connectorActions = {};
    var _apiActions = {};
    var _collapsedList = {};
    if (props.workspaceInfo) {
      if (props.workspaceInfo.connectors) {
        Object.values(props.workspaceInfo.connectors).forEach(function (connectorInfo) {
          var _connectorInfo$action;
          _connectorActions[connectorInfo.id] = (_connectorInfo$action = connectorInfo.action) !== null && _connectorInfo$action !== void 0 ? _connectorInfo$action : "skip";
        });
      }
      if (props.workspaceInfo.flow && props.workspaceInfo.flow.apis) {
        Object.values(props.workspaceInfo.flow.apis).forEach(function (apiInfo) {
          var _apiInfo$action;
          var apiId = (apiInfo.name + apiInfo.method).toLowerCase();
          _apiActions[apiId] = (_apiInfo$action = apiInfo.action) !== null && _apiInfo$action !== void 0 ? _apiInfo$action : "skip";
        });
      }
    }
    _this8.state = {
      searchText: null,
      selectState: 0,
      connectorActions: _connectorActions,
      apiActions: _apiActions,
      collapsedList: _collapsedList,
      includeWorkspaceSettings: !!_this8.props.includeWorkspaceSettings,
      includeNotes: !!_this8.props.includeNotes
    }; // from props
    return _this8;
  }
  _inherits(CustomizeFlowTab, _React$Component5);
  return _createClass(CustomizeFlowTab, [{
    key: "render",
    value: function render() {
      var _this9 = this;
      var searchText = this.state.searchText;
      var connectorActions = this.state.connectorActions;
      var apiActions = this.state.apiActions;
      var apiItemClickHanlder = this.handleAPIItemCheck;
      var apiConnectorItemClickHanlder = this.handleAPIConnectorItemCheck;
      var connectorItemClickHanlder = this.handleConnectorItemCheck;
      var hasFlowAPI = false;
      var hasConnector = false;
      var apiConnectorIds = {};
      var flowAPIItems = Object.keys(apiActions).map(function (name) {
        var method = "";
        var apiInfo = null;
        apiConnectorIds[name] = [];
        if (!searchText || name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0) {
          var _this9$props$workspac;
          if ((_this9$props$workspac = _this9.props.workspaceInfo) !== null && _this9$props$workspac !== void 0 && (_this9$props$workspac = _this9$props$workspac.flow) !== null && _this9$props$workspac !== void 0 && _this9$props$workspac.apis) {
            apiInfo = _this9.props.workspaceInfo.flow.apis[name];
            method = apiInfo.method.toUpperCase();
            if (apiInfo) {
              var _apiInfo$connectorIds;
              (_apiInfo$connectorIds = apiInfo.connectorIds) === null || _apiInfo$connectorIds === void 0 || _apiInfo$connectorIds.map(function (connectorId) {
                if (!searchText || connectorId.toLowerCase().indexOf(searchText.toLowerCase()) >= 0) {
                  apiConnectorIds[name].push(connectorId);
                }
              });
            }
          }
          hasFlowAPI = true;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            key: name,
            className: "migration-api-group"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            className: "customize-item checkbox"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
            className: "w-100"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
            type: "checkbox",
            className: "form-check-input",
            checked: apiActions[name] != "ignore",
            onChange: apiItemClickHanlder,
            "data-apiid": name
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            className: "api-method " + method
          }, method), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, apiInfo.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            className: "migration-collapse-icon"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
            className: "fa fa-minus-circle " + (_this9.state.collapsedList[name] ? "" : "hidden"),
            "data-apiid": name,
            onClick: _this9.handleCollapseHideClick
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
            className: "fa fa-plus-circle " + (_this9.state.collapsedList[name] ? "hidden" : ""),
            "data-apiid": name,
            onClick: _this9.handleCollapseShowClick
          }))), _this9.state.collapsedList[name] && apiConnectorIds[name].map(function (connectorName) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
              key: connectorName,
              className: "customize-item migration-api-connector checkbox"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
              className: "w-100"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
              type: "checkbox",
              className: "form-check-input",
              checked: connectorActions[connectorName] != "ignore",
              "data-apiid": name,
              "data-connectorid": connectorName,
              onChange: apiConnectorItemClickHanlder
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
              className: "app-icon app-icon-" + _this9.props.workspaceInfo.connectors[connectorName].type.toLowerCase().replace(/^cdata(.+)$/, "$1")
            }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, connectorName)));
          }));
        } else {
          return null;
        }
      });
      var connectorItems = Object.keys(connectorActions).map(function (name) {
        var included = false;
        if (!searchText || name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0) {
          included = !Object.values(apiConnectorIds).some(function (apiConnectorList) {
            return apiConnectorList.includes(name);
          });
        }
        if (included) {
          hasConnector = true;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            className: "customize-item checkbox",
            key: name
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
            className: "w-100"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
            type: "checkbox",
            className: "form-check-input",
            checked: connectorActions[name] != "ignore",
            onChange: connectorItemClickHanlder,
            "data-connectorid": name
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            className: "app-icon app-icon-" + _this9.props.workspaceInfo.connectors[name].type.toLowerCase().replace(/^cdata(.+)$/, "$1")
          }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, name)));
        } else {
          return null;
        }
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
        className: "form-horizontal form-settings",
        role: "form",
        autoComplete: "off",
        noValidate: "novalidate"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_searchbox__WEBPACK_IMPORTED_MODULE_2__/* .SearchBox */ .G, {
        searchText: this.state.searchText,
        onChanged: this.handleSearchTextChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, this.props.isImport ? "Select the items you want to import." : "Select the items you want to export."), (this.props.onIncludeWorkspaceSettingsChange || this.props.onIncludeNotesChange) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mb-2 ms-0 checkbox"
      }, this.props.onIncludeWorkspaceSettingsChange && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        className: "ps-0 col-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "checkbox",
        checked: this.state.includeWorkspaceSettings,
        onChange: this.handleIncludeWorkspaceSettingsChange,
        className: "form-check-input"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Include workspace settings")), this.props.onIncludeNotesChange && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        className: "ps-0 col-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "checkbox",
        checked: this.state.includeNotes,
        onChange: this.handleIncludeNotesChange,
        className: "form-check-input"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Include notes"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "migration-select-text",
        onClick: this.handleSelectAllClick
      }, "Select all"), "|", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "migration-select-text",
        onClick: this.handleDeselectAllClick
      }, "Deselect all")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "workspace-content"
      }, hasFlowAPI && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
        className: "migration-madal-title"
      }, "Flow APIs"), hasFlowAPI && Object.values(flowAPIItems).map(function (apiItem) {
        return apiItem;
      }), hasConnector && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
        className: "migration-madal-title"
      }, "Connectors"), hasConnector && Object.values(connectorItems).map(function (connectorItem) {
        return connectorItem;
      })));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
var CustomizeWorkspacesTab = /*#__PURE__*/function (_React$Component6) {
  function CustomizeWorkspacesTab(props) {
    var _this10;
    _classCallCheck(this, CustomizeWorkspacesTab);
    _this10 = _callSuper(this, CustomizeWorkspacesTab, [props]);
    _defineProperty(_this10, "handleSearchTextChange", function (text) {
      _this10.setState({
        searchText: text
      });
    });
    _defineProperty(_this10, "handleSelectAllClick", function () {
      var workspaceActions = _this10.state.workspaceActions;
      var workspaceActionChangeHandler = _this10.props.onActionChange;
      Object.keys(workspaceActions).forEach(function (key) {
        if (workspaceActions[key] != "skip" && workspaceActionChangeHandler) {
          workspaceActionChangeHandler(key, "skip");
        }
        workspaceActions[key] = "skip";
      });
      _this10.setState({
        workspaceActions: workspaceActions
      });
    });
    _defineProperty(_this10, "handleDeselectAllClick", function () {
      var workspaceActions = _this10.state.workspaceActions;
      var workspaceActionChangeHandler = _this10.props.onActionChange;
      Object.keys(workspaceActions).forEach(function (key) {
        if (workspaceActions[key] != "ignore" && workspaceActionChangeHandler) {
          workspaceActionChangeHandler(key, "ignore");
        }
        workspaceActions[key] = "ignore";
      });
      _this10.setState({
        workspaceActions: workspaceActions
      });
    });
    _defineProperty(_this10, "handleWorkspaceItemCheck", function (event) {
      var workspaceId = event.target.dataset.arcWorkspaceId;
      var action = event.target.checked ? "skip" : "ignore";
      var workspaceActionChangeHandler = _this10.props.onActionChange;
      var workspaceActions = _this10.state.workspaceActions;
      if (workspaceActions[workspaceId] != action && workspaceActionChangeHandler) {
        workspaceActionChangeHandler(workspaceId, action);
      }
      workspaceActions[workspaceId] = action;
      _this10.setState({
        workspaceActions: workspaceActions
      });
    });
    _defineProperty(_this10, "handleIncludeWorkspaceSettingsChange", function (event) {
      _this10.props.onIncludeWorkspaceSettingsChange(event.target.checked);
      _this10.setState({
        includeWorkspaceSettings: event.target.checked
      });
    });
    _defineProperty(_this10, "handleIncludeNotesChange", function (event) {
      _this10.props.onIncludeNotesChange(event.target.checked);
      _this10.setState({
        includeNotes: event.target.checked
      });
    });
    var _workspaceActions = {};
    if (props.workspacesInfo) {
      Object.values(props.workspacesInfo).forEach(function (info) {
        var action = "ignore";
        if (info.connectors && Object.values(info.connectors).some(function (connectorInfo) {
          return connectorInfo.action != "ignore";
        })) {
          action = "skip";
        }
        _workspaceActions[info.id] = action;
      });
    }
    _this10.state = {
      searchText: null,
      selectState: 0,
      workspaceActions: _workspaceActions,
      includeWorkspaceSettings: !!_this10.props.includeWorkspaceSettings,
      includeNotes: !!_this10.props.includeNotes
    }; // from props
    return _this10;
  }
  _inherits(CustomizeWorkspacesTab, _React$Component6);
  return _createClass(CustomizeWorkspacesTab, [{
    key: "render",
    value: function render() {
      var searchText = this.state.searchText;
      var workspaceActions = this.state.workspaceActions;
      var itemClickHandler = this.handleWorkspaceItemCheck;
      var workspaceItems = Object.keys(workspaceActions).map(function (name) {
        if (!searchText || name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            className: "customize-item checkbox",
            key: name
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
            className: "w-100"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
            type: "checkbox",
            className: "form-check-input",
            checked: workspaceActions[name] != "ignore",
            onChange: itemClickHandler,
            "data-arc-workspace-id": name
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, name)));
        } else {
          return null;
        }
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
        className: "form-horizontal form-settings",
        role: "form",
        autoComplete: "off",
        noValidate: "novalidate"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_searchbox__WEBPACK_IMPORTED_MODULE_2__/* .SearchBox */ .G, {
        searchText: this.state.searchText,
        onChanged: this.handleSearchTextChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, this.props.isImport ? "Select the workspaces you want to import." : "Select the workspaces you want to export."), (this.props.onIncludeWorkspaceSettingsChange || this.props.onIncludeNotesChange) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mb-2 ms-0 checkbox"
      }, this.props.onIncludeWorkspaceSettingsChange && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        className: "ps-0 col-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "checkbox",
        checked: this.state.includeWorkspaceSettings,
        onChange: this.handleIncludeWorkspaceSettingsChange,
        className: "form-check-input"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Include workspace settings")), this.props.onIncludeNotesChange && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        className: "ps-0 col-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "checkbox",
        checked: this.state.includeNotes,
        onChange: this.handleIncludeNotesChange,
        className: "form-check-input"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Include notes"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "migration-select-text",
        onClick: this.handleSelectAllClick
      }, "Select all"), "|", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "migration-select-text",
        onClick: this.handleDeselectAllClick
      }, "Deselect all")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "workspace-content"
      }, workspaceItems));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
var CustomizeEDITab = /*#__PURE__*/function (_React$Component7) {
  function CustomizeEDITab(props) {
    var _props$settingsInfo, _props$settingsInfo2;
    var _this11;
    _classCallCheck(this, CustomizeEDITab);
    _this11 = _callSuper(this, CustomizeEDITab, [props]);
    _defineProperty(_this11, "handleSelectAllClick", function () {
      var partnerActions = _this11.state.partnerActions;
      var documentActions = _this11.state.documentActions;
      var partnerActionChangeHandler = _this11.props.onPartnerActionChange;
      var documentActionChangeHandler = _this11.props.onDocumentActionChange;
      Object.keys(partnerActions).forEach(function (key) {
        if (partnerActions[key] != "skip" && partnerActionChangeHandler) {
          partnerActionChangeHandler(key, "skip");
        }
        partnerActions[key] = "skip";
      });
      Object.keys(documentActions).forEach(function (key) {
        if (documentActions[key] != "skip" && documentActionChangeHandler) {
          documentActionChangeHandler(key, "skip");
        }
        documentActions[key] = "skip";
      });
      _this11.setState({
        partnerActions: partnerActions,
        documentActions: documentActions
      });
    });
    _defineProperty(_this11, "handleDeselectAllClick", function () {
      var partnerActions = _this11.state.partnerActions;
      var documentActions = _this11.state.documentActions;
      var partnerActionChangeHandler = _this11.props.onPartnerActionChange;
      var documentActionChangeHandler = _this11.props.onDocumentActionChange;
      Object.keys(partnerActions).forEach(function (key) {
        if (partnerActions[key] != "ignore" && partnerActionChangeHandler) {
          partnerActionChangeHandler(key, "ignore");
        }
        partnerActions[key] = "ignore";
      });
      Object.keys(documentActions).forEach(function (key) {
        if (documentActions[key] != "ignore" && documentActionChangeHandler) {
          documentActionChangeHandler(key, "ignore");
        }
        documentActions[key] = "ignore";
      });
      _this11.setState({
        partnerActions: partnerActions,
        documentActions: documentActions
      });
    });
    _defineProperty(_this11, "handlePartnerItemCheck", function (event) {
      var partnerId = event.target.dataset.arcPartnerId;
      var action = event.target.checked ? "skip" : "ignore";
      var partnerActionChangeHandler = _this11.props.onPartnerActionChange;
      var partnerActions = _this11.state.partnerActions;
      if (partnerActions[partnerId] != action && partnerActionChangeHandler) {
        partnerActionChangeHandler(partnerId, action);
      }
      partnerActions[partnerId] = action;
      _this11.setState({
        partnerActions: partnerActions
      });
    });
    _defineProperty(_this11, "handleDocumentItemCheck", function (event) {
      var documentId = event.target.dataset.arcDocumentId;
      var action = event.target.checked ? "skip" : "ignore";
      var documentActionChangeHandler = _this11.props.onDocumentActionChange;
      var documentActions = _this11.state.documentActions;
      if (documentActions[documentId] != action && documentActionChangeHandler) {
        documentActionChangeHandler(documentId, action);
      }
      documentActions[documentId] = action;
      _this11.setState({
        documentActions: documentActions
      });
    });
    var _partnerActions = {};
    var _documentActions = {};
    if ((_props$settingsInfo = props.settingsInfo) !== null && _props$settingsInfo !== void 0 && _props$settingsInfo.partners) {
      Object.values(props.settingsInfo.partners).forEach(function (info) {
        var action = "ignore";
        if (info.action != "ignore") {
          action = "skip";
        }
        _partnerActions[info.id] = action;
      });
    }
    if ((_props$settingsInfo2 = props.settingsInfo) !== null && _props$settingsInfo2 !== void 0 && _props$settingsInfo2.documents) {
      Object.values(props.settingsInfo.documents).forEach(function (info) {
        var action = "ignore";
        if (info.action != "ignore") {
          action = "skip";
        }
        _documentActions[info.id] = action;
      });
    }
    _this11.state = {
      partnerActions: _partnerActions,
      documentActions: _documentActions
    };
    return _this11;
  }
  _inherits(CustomizeEDITab, _React$Component7);
  return _createClass(CustomizeEDITab, [{
    key: "render",
    value: function render() {
      var partnerActions = this.state.partnerActions;
      var documentActions = this.state.documentActions;
      var partnerClickHandler = this.handlePartnerItemCheck;
      var documentClickHandler = this.handleDocumentItemCheck;
      var partnerItems = Object.keys(partnerActions).map(function (name) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "customize-item checkbox",
          key: name
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
          className: "w-100"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
          type: "checkbox",
          className: "form-check-input",
          checked: partnerActions[name] != "ignore",
          onChange: partnerClickHandler,
          "data-arc-partner-id": name
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, name)));
      });
      var documentItems = Object.keys(documentActions).map(function (name) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "customize-item checkbox",
          key: name
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
          className: "w-100"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
          type: "checkbox",
          className: "form-check-input",
          checked: documentActions[name] != "ignore",
          onChange: documentClickHandler,
          "data-arc-document-id": name
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, name)));
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
        className: "form-horizontal form-settings",
        role: "form",
        autoComplete: "off",
        noValidate: "novalidate"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, this.props.isImport ? "Select the partners and documents you want to import." : "Select the partners and documents you want to export."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "migration-select-text",
        onClick: this.handleSelectAllClick
      }, "Select all"), "|", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "migration-select-text",
        onClick: this.handleDeselectAllClick
      }, "Deselect all")), partnerItems && partnerItems.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "Partners:"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "workspace-content mb-3"
      }, partnerItems)), documentItems && documentItems.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "Documents:"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "workspace-content"
      }, documentItems)));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
var ImportCustomConflictResolutionWorkspacesItem = /*#__PURE__*/function (_React$Component8) {
  function ImportCustomConflictResolutionWorkspacesItem(_props) {
    var _this12;
    _classCallCheck(this, ImportCustomConflictResolutionWorkspacesItem);
    _this12 = _callSuper(this, ImportCustomConflictResolutionWorkspacesItem, [_props]);
    _defineProperty(_this12, "handleWorkspaceActionChange", function (action) {
      _this12.props.onWorkspaceActionChange(_this12.props.workspaceInfo.id, action);
    });
    _defineProperty(_this12, "handleCollapseShowClick", function () {
      _this12.props.onWorkspaceCollapseChanged(_this12.props.workspaceInfo.id, true);
    });
    _defineProperty(_this12, "handleCollapseHideClick", function () {
      _this12.props.onWorkspaceCollapseChanged(_this12.props.workspaceInfo.id, false);
    });
    _defineProperty(_this12, "handleAPIActionChange", function (action, props) {
      _this12.props.onAPIActionChange(_this12.props.workspaceInfo.id, props.apiKey, action);
    });
    return _this12;
  }
  _inherits(ImportCustomConflictResolutionWorkspacesItem, _React$Component8);
  return _createClass(ImportCustomConflictResolutionWorkspacesItem, [{
    key: "render",
    value: function render() {
      var _this$props$workspace,
        _this13 = this;
      var searchText = this.props.searchText && this.props.searchText.toLowerCase();
      var connectors = this.props.workspaceInfo.connectors;
      var apis = (_this$props$workspace = this.props.workspaceInfo) === null || _this$props$workspace === void 0 || (_this$props$workspace = _this$props$workspace.flow) === null || _this$props$workspace === void 0 ? void 0 : _this$props$workspace.apis;
      var action;
      var connectorIds = [];
      var hasAPIs = false;
      var apiObjMap = [];
      if (connectors) {
        for (var _i11 = 0, _Object$values11 = Object.values(connectors); _i11 < _Object$values11.length; _i11++) {
          var connectorInfo = _Object$values11[_i11];
          if (connectorInfo.existing && connectorInfo.action != "ignore") {
            var _connectorInfo$action2;
            connectorIds.push(connectorInfo.id);
            if (action === undefined) {
              action = connectorInfo.action;
            } else if (action != ((_connectorInfo$action2 = connectorInfo.action) !== null && _connectorInfo$action2 !== void 0 ? _connectorInfo$action2 : "skip")) {
              action = _CustomActionText._;
            }
          }
        }
      }
      if (apis) {
        for (var _i12 = 0, _Object$values12 = Object.values(apis); _i12 < _Object$values12.length; _i12++) {
          var apiInfo = _Object$values12[_i12];
          if (apiInfo.existing && apiInfo.action != "ignore") {
            var _apiInfo$action2;
            if (action === undefined) {
              action = apiInfo.action;
            } else if (action != ((_apiInfo$action2 = apiInfo.action) !== null && _apiInfo$action2 !== void 0 ? _apiInfo$action2 : "skip")) {
              action = _CustomActionText._;
            }
            if (!searchText || apiInfo.name.toLowerCase().includes(searchText)) {
              var _apiInfoItem$action, _apiInfo$connectorIds2;
              var apiInfoItem = _utils__WEBPACK_IMPORTED_MODULE_1__/* .ImportUtils */ .P.Clone(apiInfo);
              apiInfoItem.isAPI = true;
              apiInfoItem.action = (_apiInfoItem$action = apiInfoItem.action) !== null && _apiInfoItem$action !== void 0 ? _apiInfoItem$action : "skip";
              apiObjMap.push(apiInfoItem);
              (_apiInfo$connectorIds2 = apiInfo.connectorIds) === null || _apiInfo$connectorIds2 === void 0 || _apiInfo$connectorIds2.map(function (connectorId) {
                if (connectors !== null && connectors !== void 0 && connectors[connectorId] && connectors[connectorId].existing && connectors[connectorId].action != "ignore") {
                  var _connectorItem$action;
                  var index = connectorIds.indexOf(connectorId);
                  if (index > -1) {
                    connectorIds.splice(index, 1);
                  }
                  var connectorItem = _utils__WEBPACK_IMPORTED_MODULE_1__/* .ImportUtils */ .P.Clone(connectors[connectorId]);
                  connectorItem.isAPI = false;
                  connectorItem.action = (_connectorItem$action = connectorItem.action) !== null && _connectorItem$action !== void 0 ? _connectorItem$action : "skip";
                  if (!searchText || connectorItem.id.toLowerCase().includes(searchText)) {
                    apiObjMap.push(connectorItem);
                  }
                }
              });
              hasAPIs = true;
            }
          }
        }
      }
      action !== null && action !== void 0 ? action : action = "skip";
      var hasConnector = connectorIds.length > 0;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "migration-table-group"
      }, !this.props.isFlow && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "customize-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, this.props.workspaceInfo.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_1__/* .ImportDropdown */ .H, {
        options: _DropdownOptions._,
        style: _DropdownStyle._,
        value: action,
        onChange: this.handleWorkspaceActionChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "migration-collapse-icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fa fa-minus-circle " + (this.props.collapsed ? "" : "hidden"),
        onClick: this.handleCollapseHideClick
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fa fa-plus-circle " + (this.props.collapsed ? "hidden" : ""),
        onClick: this.handleCollapseShowClick
      }))), (this.props.isFlow || this.props.collapsed) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
        className: "table migration-import-table " + (this.props.isFlow ? "" : "migration-import-multiple-table")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Import"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
        className: "table-header-confilct"
      }, "Conflict Setting"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
        className: "table-header-existing"
      }, "Existing"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, hasAPIs && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
        className: "migration-table-inside-row  migration-table-flowapi"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        colSpan: "3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Flow APIs"))), hasAPIs && apiObjMap.map(function (info) {
        if (info.isAPI) {
          var _info$action;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
            key: info.name + info.method
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            className: "migration-import-item"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            className: "api-method " + info.method.toUpperCase()
          }, info.method.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            className: "migration-import-text"
          }, info.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
            className: "migration-conflict-item"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            className: "d-flex"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_1__/* .ImportDropdown */ .H, {
            className: "p-2 w-100",
            options: _DropdownOptions._,
            value: (_info$action = info.action) !== null && _info$action !== void 0 ? _info$action : "skip",
            apiKey: (info.name + info.method).toLowerCase(),
            onChange: _this13.handleAPIActionChange
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            className: "migration-conflict-icon p-2 flex-shrink-1"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
            className: "far fa-arrow-right migration-conflict-replace-icon " + (info.action == "replace" ? "" : "hidden")
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
            className: "fa fa-times-circle migration-conflict-skip-icon " + (info.action == "skip" ? "" : "hidden")
          })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            className: "migration-existing-item"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            className: "api-method " + info.method.toUpperCase()
          }, info.method.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            className: "migration-existing-text"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, info.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            className: "migration-existing-workspace"
          }, _this13.props.workspaceInfo.id)))));
        } else {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ImportCustomConflictResolutionConnectorItem, {
            key: info.id,
            workspaceId: _this13.props.workspaceInfo.id,
            isAPIConnector: true,
            connectorInfo: info,
            onConnectorActionChange: _this13.props.onConnectorActionChange
          });
        }
      }), hasConnector && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
        className: "migration-table-inside-row  migration-table-connectors"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        colSpan: "3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Connectors"))), hasConnector && this.props.workspaceInfo.connectors && Object.values(this.props.workspaceInfo.connectors).map(function (info) {
        if (connectorIds.includes(info.id) && info.existing && info.action != "ignore" && (!searchText || info.id.toLowerCase().includes(searchText))) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ImportCustomConflictResolutionConnectorItem, {
            key: info.id,
            workspaceId: _this13.props.workspaceInfo.id,
            isAPIConnector: false,
            connectorInfo: info,
            onConnectorActionChange: _this13.props.onConnectorActionChange
          });
        } else {
          return null;
        }
      }))));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
var _DropdownOptions = {
  _: [{
    "value": "skip",
    "name": "Don't Import"
  }, {
    "value": "replace",
    "name": "Replace"
  }]
};
var _DropdownStyle = {
  _: {
    "position": "absolute",
    "top": "9px",
    "right": "23px"
  }
};
var _CustomActionText = {
  _: "Custom"
};
var ImportCustomConflictResolutionConnectorItem = /*#__PURE__*/function (_React$Component9) {
  function ImportCustomConflictResolutionConnectorItem(props) {
    var _this14;
    _classCallCheck(this, ImportCustomConflictResolutionConnectorItem);
    _this14 = _callSuper(this, ImportCustomConflictResolutionConnectorItem, [props]);
    _defineProperty(_this14, "handleConnectorActionChange", function (action) {
      _this14.props.onConnectorActionChange(_this14.props.workspaceId, _this14.props.connectorInfo.id, action);
    });
    return _this14;
  }
  _inherits(ImportCustomConflictResolutionConnectorItem, _React$Component9);
  return _createClass(ImportCustomConflictResolutionConnectorItem, [{
    key: "render",
    value: function render() {
      var _this$props$connector;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "migration-import-item migration-import-api-connector"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "app-icon app-icon-" + this.props.connectorInfo.type.toLowerCase().replace(/^cdata(.+)$/, "$1")
      }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "migration-import-text"
      }, this.props.connectorInfo.id))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "migration-conflict-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "d-flex"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_1__/* .ImportDropdown */ .H, {
        className: "p-2 w-100",
        options: _DropdownOptions2._,
        value: (_this$props$connector = this.props.connectorInfo.action) !== null && _this$props$connector !== void 0 ? _this$props$connector : "skip",
        onChange: this.handleConnectorActionChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "migration-conflict-icon p-2 flex-shrink-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "far fa-arrow-right migration-conflict-replace-icon " + (this.props.connectorInfo.action == "replace" ? "" : "hidden")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fa fa-times-circle migration-conflict-skip-icon " + (this.props.connectorInfo.action == "skip" ? "" : "hidden")
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "migration-existing-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "app-icon app-icon-" + this.props.connectorInfo.existingType.toLowerCase().replace(/^cdata(.+)$/, "$1")
      }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "migration-existing-text"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, this.props.connectorInfo.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "migration-existing-workspace"
      }, this.props.workspaceId)))));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
var _DropdownOptions2 = {
  _: [{
    "value": "skip",
    "name": "Don't Import"
  }, {
    "value": "replace",
    "name": "Replace"
  }]
};
var ImportCustomConflictResolutionSectionItem = /*#__PURE__*/function (_React$Component10) {
  function ImportCustomConflictResolutionSectionItem(props) {
    var _this15;
    _classCallCheck(this, ImportCustomConflictResolutionSectionItem);
    _this15 = _callSuper(this, ImportCustomConflictResolutionSectionItem, [props]);
    _defineProperty(_this15, "handleSectionActionChange", function (action) {
      _this15.props.sectionInfo.insideNames ? _this15.props.onSectionActionChange(_this15.props.name.toLowerCase(), action) : _this15.props.onNameActionChange("settings", _this15.props.name, action);
    });
    _defineProperty(_this15, "handleCollapseShowClick", function () {
      _this15.props.onSectionCollapseChanged(_this15.props.sectionInfo.name, true);
    });
    _defineProperty(_this15, "handleCollapseHideClick", function () {
      _this15.props.onSectionCollapseChanged(_this15.props.sectionInfo.name, false);
    });
    return _this15;
  }
  _inherits(ImportCustomConflictResolutionSectionItem, _React$Component10);
  return _createClass(ImportCustomConflictResolutionSectionItem, [{
    key: "render",
    value: function render() {
      var _this16 = this;
      var action;
      if (this.props.sectionInfo.insideNames) {
        for (var _i13 = 0, _Object$values13 = Object.values(this.props.sectionInfo.insideNames); _i13 < _Object$values13.length; _i13++) {
          var _nameInfo$action2;
          var nameInfo = _Object$values13[_i13];
          if (action === undefined) {
            var _nameInfo$action;
            action = (_nameInfo$action = nameInfo.action) !== null && _nameInfo$action !== void 0 ? _nameInfo$action : "skip";
          } else if (action != ((_nameInfo$action2 = nameInfo.action) !== null && _nameInfo$action2 !== void 0 ? _nameInfo$action2 : "skip")) {
            action = _CustomActionText2._;
            break;
          }
        }
      } else {
        action = this.props.sectionInfo.action;
      }
      action !== null && action !== void 0 ? action : action = "skip";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "migration-table-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "customize-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, _DisplayMap2._[this.props.sectionInfo.name.toLowerCase()]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_1__/* .ImportDropdown */ .H, {
        options: _DropdownOptions3._,
        style: _DropdownStyle2._,
        value: action,
        onChange: this.handleSectionActionChange
      }), this.props.sectionInfo.insideNames && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "migration-collapse-icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fa fa-minus-circle " + (this.props.collapsed ? "" : "hidden"),
        onClick: this.handleCollapseHideClick
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fa fa-plus-circle " + (this.props.collapsed ? "hidden" : ""),
        onClick: this.handleCollapseShowClick
      }))), this.props.sectionInfo.insideNames && this.props.collapsed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
        className: "table migration-import-table migration-import-multiple-table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Import"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
        className: "table-header-confilct"
      }, "Conflict Setting"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, Object.keys(this.props.sectionInfo.insideNames).map(function (key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ImportCustomConflictResolutionNameItem, {
          key: key,
          actionKey: key,
          sectionName: _this16.props.sectionInfo.name,
          nameInfo: _this16.props.sectionInfo.insideNames[key],
          onNameActionChange: _this16.props.onNameActionChange
        });
      }))));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
var _DropdownOptions3 = {
  _: [{
    "value": "skip",
    "name": "Don't Import"
  }, {
    "value": "replace",
    "name": "Replace"
  }]
};
var _DropdownStyle2 = {
  _: {
    "position": "absolute",
    "top": "9px",
    "right": "23px"
  }
};
var _DisplayMap2 = {
  _: {
    "profiles": "Profiles",
    "reports": "Reports",
    "users": "Users",
    "roles": "Roles",
    "certificates": "Certificates",
    "alerts": "Alerts",
    "adminapi": "Admin API",
    "connections": "Connections",
    "vaults": "Vaults",
    "sso": "SSO",
    "advanced": "Advanced"
  }
};
var _CustomActionText2 = {
  _: "Custom"
};
var ImportCustomConflictResolutionNameItem = /*#__PURE__*/function (_React$Component11) {
  function ImportCustomConflictResolutionNameItem(props) {
    var _this17;
    _classCallCheck(this, ImportCustomConflictResolutionNameItem);
    _this17 = _callSuper(this, ImportCustomConflictResolutionNameItem, [props]);
    _defineProperty(_this17, "handleNameActionChange", function (action) {
      _this17.props.onNameActionChange(_this17.props.sectionName.toLowerCase(), _this17.props.actionKey, action);
    });
    return _this17;
  }
  _inherits(ImportCustomConflictResolutionNameItem, _React$Component11);
  return _createClass(ImportCustomConflictResolutionNameItem, [{
    key: "render",
    value: function render() {
      var _this$props$nameInfo$;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "migration-conflict-item-name"
      }, this.props.nameInfo.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "migration-conflict-item dropdown"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "d-flex"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_1__/* .ImportDropdown */ .H, {
        className: "p-2 w-100",
        options: _DropdownOptions4._,
        value: (_this$props$nameInfo$ = this.props.nameInfo.action) !== null && _this$props$nameInfo$ !== void 0 ? _this$props$nameInfo$ : "skip",
        onChange: this.handleNameActionChange
      })))));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
var _DropdownOptions4 = {
  _: [{
    "value": "skip",
    "name": "Don't Import"
  }, {
    "value": "replace",
    "name": "Replace"
  }]
};
var ImportCustomConflictResolutionEDIItem = /*#__PURE__*/function (_React$Component12) {
  function ImportCustomConflictResolutionEDIItem(props) {
    var _this18;
    _classCallCheck(this, ImportCustomConflictResolutionEDIItem);
    _this18 = _callSuper(this, ImportCustomConflictResolutionEDIItem, [props]);
    _defineProperty(_this18, "handleActionChange", function (action) {
      _this18.props.type == "partner" ? _this18.props.onPartnerActionChange(_this18.props.info.id, action) : _this18.props.onDocumentActionChange(_this18.props.info.id, action);
    });
    return _this18;
  }
  _inherits(ImportCustomConflictResolutionEDIItem, _React$Component12);
  return _createClass(ImportCustomConflictResolutionEDIItem, [{
    key: "render",
    value: function render() {
      var _this$props$info$acti;
      var action = (_this$props$info$acti = this.props.info.action) !== null && _this$props$info$acti !== void 0 ? _this$props$info$acti : "skip";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "migration-table-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "customize-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, this.props.info.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_1__/* .ImportDropdown */ .H, {
        options: _DropdownOptions5._,
        style: _DropdownStyle3._,
        value: action,
        onChange: this.handleActionChange
      })));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
var _DropdownOptions5 = {
  _: [{
    "value": "skip",
    "name": "Don't Import"
  }, {
    "value": "replace",
    "name": "Replace"
  }]
};
var _DropdownStyle3 = {
  _: {
    "position": "absolute",
    "top": "9px",
    "right": "23px"
  }
};

/***/ }),

/***/ 29886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  OM: () => (/* binding */ ExportModal),
  zb: () => (/* binding */ ImportModal),
  Bv: () => (/* binding */ ImportSampleFlowModal),
  k8: () => (/* binding */ UpgradeBuildModal)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ../../.react-shared/axios/index.jsx
var axios = __webpack_require__(29029);
// EXTERNAL MODULE: ./src/components/alert/DismissibleAlert.tsx
var DismissibleAlert = __webpack_require__(95631);
;// CONCATENATED MODULE: ./src/components/poor-modal/index.jsx
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }




var _modalRef = /*#__PURE__*/new WeakMap();
var _modal = /*#__PURE__*/new WeakMap();
var Modal = /*#__PURE__*/function (_React$Component) {
  function Modal(props) {
    var _this;
    _classCallCheck(this, Modal);
    _this = _callSuper(this, Modal, [props]);
    _classPrivateFieldInitSpec(_this, _modalRef, null);
    _classPrivateFieldInitSpec(_this, _modal, null);
    _classPrivateFieldSet(_modalRef, _this, /*#__PURE__*/react.createRef());
    return _this;
  }
  _inherits(Modal, _React$Component);
  return _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var elem = _classPrivateFieldGet(_modalRef, this).current;
      var closedHandler = this.props.onClosed;
      var openingHandler = this.props.onOpening;
      var createdHandler = this.props.onModalCreated;
      if (elem != null) {
        // The bootstrap may not be loaded when mounting to DOM tree.
        var id = setInterval(function () {
          var _window;
          if (((_window = window) === null || _window === void 0 || (_window = _window.bootstrap) === null || _window === void 0 ? void 0 : _window.Modal) !== undefined) {
            clearInterval(id);
            _classPrivateFieldSet(_modal, _this2, new window.bootstrap.Modal(elem, {
              backdrop: "static"
            }));
            elem.addEventListener("hide.bs.modal", function () {
              if (closedHandler) {
                closedHandler();
              }
            });
            elem.addEventListener("show.bs.modal", function () {
              if (openingHandler) {
                openingHandler();
              }
            });
            if (createdHandler) {
              createdHandler(_classPrivateFieldGet(_modal, _this2));
            }
          }
        }, 100);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var modalWidth = null;
      switch (this.props.width) {
        case "exlarge":
          modalWidth = "xl";
          break;
        case "large":
          modalWidth = "lg";
          break;
        case "small":
          modalWidth = "sm";
          break;
        default:
          break;
      }
      return /*#__PURE__*/react.createElement("div", {
        className: "modal fade arc-poor-modal",
        id: this.props.id,
        tabIndex: "-1",
        role: "dialog",
        ref: _classPrivateFieldGet(_modalRef, this)
      }, /*#__PURE__*/react.createElement("div", {
        className: "modal-dialog" + (modalWidth ? " modal-" + modalWidth : "")
      }, /*#__PURE__*/react.createElement("div", {
        className: "modal-content"
      }, this.props.children)));
    }
  }]);
}(react.Component);
var ModalHeader = /*#__PURE__*/function (_React$Component2) {
  function ModalHeader(props) {
    _classCallCheck(this, ModalHeader);
    return _callSuper(this, ModalHeader, [props]);
  }
  _inherits(ModalHeader, _React$Component2);
  return _createClass(ModalHeader, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("div", {
        className: "modal-header"
      }, /*#__PURE__*/react.createElement("h4", {
        className: "modal-title",
        id: "{this.props.id}Label"
      }, this.props.title), this.props.children, /*#__PURE__*/react.createElement("button", {
        type: "button",
        className: "btn-close",
        "data-bs-dismiss": "modal"
      }));
    }
  }]);
}(react.Component);
var ModalBody = /*#__PURE__*/function (_React$Component3) {
  function ModalBody(props) {
    _classCallCheck(this, ModalBody);
    return _callSuper(this, ModalBody, [props]);
  }
  _inherits(ModalBody, _React$Component3);
  return _createClass(ModalBody, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("div", {
        className: "modal-body"
      }, this.props.children);
    }
  }]);
}(react.Component);
var ModalFooter = /*#__PURE__*/function (_React$Component4) {
  function ModalFooter(props) {
    _classCallCheck(this, ModalFooter);
    return _callSuper(this, ModalFooter, [props]);
  }
  _inherits(ModalFooter, _React$Component4);
  return _createClass(ModalFooter, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("div", {
        className: "modal-footer"
      }, this.props.children);
    }
  }]);
}(react.Component);
var _nextPage = /*#__PURE__*/new WeakMap();
var _prevPages = /*#__PURE__*/new WeakMap();
var _onNextPage = /*#__PURE__*/new WeakMap();
var _modal2 = /*#__PURE__*/new WeakMap();
var _resetLoadingState = /*#__PURE__*/new WeakMap();
var _getPageProps = /*#__PURE__*/new WeakMap();
var _setNextPage = /*#__PURE__*/new WeakMap();
var _setLoadingText = /*#__PURE__*/new WeakMap();
var _setHelpLink = /*#__PURE__*/new WeakMap();
var ProgressModal = /*#__PURE__*/function (_React$Component5) {
  function ProgressModal(_props) {
    var _this3;
    _classCallCheck(this, ProgressModal);
    _this3 = _callSuper(this, ProgressModal, [_props]);
    _classPrivateFieldInitSpec(_this3, _nextPage, null);
    _classPrivateFieldInitSpec(_this3, _prevPages, []);
    _classPrivateFieldInitSpec(_this3, _onNextPage, null);
    _classPrivateFieldInitSpec(_this3, _modal2, null);
    _classPrivateFieldInitSpec(_this3, _resetLoadingState, {});
    _classPrivateFieldInitSpec(_this3, _getPageProps, function () {
      var pageProps = _objectSpread(_objectSpread({}, _this3.state.pageProps), {}, {
        setTitle: function setTitle(t) {
          return _this3.setState({
            title: t
          });
        },
        setNextPage: _classPrivateFieldGet(_setNextPage, _this3),
        setPageWidth: function setPageWidth(w) {
          return _this3.setState({
            pageWidth: w
          });
        },
        enablePrev: function enablePrev(ep) {
          return _this3.setState({
            enablePrev: ep
          });
        },
        enableNext: function enableNext(en) {
          return _this3.setState({
            enableNext: en
          });
        },
        setLoadingText: _classPrivateFieldGet(_setLoadingText, _this3),
        setHelpLink: _classPrivateFieldGet(_setHelpLink, _this3),
        setIsFinalPage: function setIsFinalPage(f) {
          return _this3.setState({
            isFinalPage: f
          });
        },
        setError: function setError(e) {
          return _this3.setState({
            errorMessage: e
          });
        },
        onNextPage: function onNextPage(f) {
          return _classPrivateFieldSet(_onNextPage, _this3, f);
        },
        close: _this3.handleClose
      });
      return pageProps;
    });
    _classPrivateFieldInitSpec(_this3, _setNextPage, function (type, props) {
      _classPrivateFieldSet(_nextPage, _this3, {
        type: type,
        props: props
      });
      _classPrivateFieldGet(_prevPages, _this3).push({
        type: _this3.state.pageType,
        props: _this3.state.pageProps
      });
      _classPrivateFieldSet(_onNextPage, _this3, null);
      _this3.setState(_objectSpread(_objectSpread({}, _DefaultStates._), {}, {
        pageType: _classPrivateFieldGet(_nextPage, _this3).type,
        pageProps: _classPrivateFieldGet(_nextPage, _this3).props,
        enablePrev: _classPrivateFieldGet(_prevPages, _this3).length > 0
      }));
    });
    _classPrivateFieldInitSpec(_this3, _setLoadingText, function (text) {
      if (text) {
        _classPrivateFieldSet(_resetLoadingState, _this3, {
          enableNext: _this3.state.enableNext,
          enablePrev: _this3.state.enablePrev
        });
        _this3.setState({
          loadingText: text,
          enableNext: false,
          enablePrev: false
        });
      } else {
        _this3.setState(_objectSpread({
          loadingText: text
        }, _classPrivateFieldGet(_resetLoadingState, _this3)));
      }
    });
    _classPrivateFieldInitSpec(_this3, _setHelpLink, function (url, text) {
      _this3.setState({
        helpText: text,
        helpUrl: url
      });
    });
    _defineProperty(_this3, "tryNext", function () {
      _classPrivateFieldSet(_nextPage, _this3, null);
      if (_classPrivateFieldGet(_onNextPage, _this3)) {
        _classPrivateFieldGet(_onNextPage, _this3).call(_this3);
      }
    });
    _defineProperty(_this3, "tryPrev", function () {
      if (_classPrivateFieldGet(_prevPages, _this3).length > 0) {
        var prevPage = _classPrivateFieldGet(_prevPages, _this3).pop();
        _this3.setState(_objectSpread(_objectSpread({}, _DefaultStates._), {}, {
          pageType: prevPage.type,
          pageProps: prevPage.props,
          enablePrev: _classPrivateFieldGet(_prevPages, _this3).length > 0
        }));
      }
    });
    _defineProperty(_this3, "handleModalCreated", function (modal) {
      _classPrivateFieldSet(_modal2, _this3, modal);
    });
    _defineProperty(_this3, "handleModalClosed", function () {
      _this3.setState(_objectSpread(_objectSpread({}, _DefaultStates._), {}, {
        pageType: null,
        pageProps: null,
        errorMessage: null
      }));
      _classPrivateFieldSet(_prevPages, _this3, []);
    });
    _defineProperty(_this3, "handleModalOpening", function () {
      _this3.setState(_objectSpread(_objectSpread({}, _DefaultStates._), {}, {
        pageType: _this3.props.initialPageType,
        pageProps: _this3.props.initialPageProps
      }));
    });
    _defineProperty(_this3, "handleClose", function () {
      if (_classPrivateFieldGet(_modal2, _this3)) {
        _classPrivateFieldGet(_modal2, _this3).hide();
      }
    });
    _defineProperty(_this3, "handleOpen", function () {
      if (_classPrivateFieldGet(_modal2, _this3)) {
        _classPrivateFieldGet(_modal2, _this3).show();
      }
    });
    _this3.state = _objectSpread(_objectSpread({}, _DefaultStates._), {}, {
      pageType: null,
      pageProps: null,
      errorMessage: null
    });
    return _this3;
  }
  _inherits(ProgressModal, _React$Component5);
  return _createClass(ProgressModal, [{
    key: "render",
    value: function render() {
      var _this$props$finishBut,
        _this$props$finishBut2,
        _this4 = this,
        _this$state$helpText;
      if (this.props.externalRef) {
        this.props.externalRef.current.show = this.handleOpen;
        this.props.externalRef.current.hide = this.handleClose;
      }
      var page = this.state.pageType ? /*#__PURE__*/react.createElement(this.state.pageType, _classPrivateFieldGet(_getPageProps, this).call(this)) : null;
      var leftButton = /*#__PURE__*/react.createElement("button", {
        type: "button",
        className: "btn btn-outline-secondary",
        disabled: !this.state.enablePrev
      }, /*#__PURE__*/react.createElement("i", {
        className: "fa fa-arrow-left"
      }), " ", "Back");
      var rightButton = this.state.isFinalPage ? /*#__PURE__*/react.createElement("button", {
        type: "button",
        className: "btn btn-primary",
        disabled: !this.state.enableNext
      }, /*#__PURE__*/react.createElement("i", {
        className: (_this$props$finishBut = this.props.finishButtonIcon) !== null && _this$props$finishBut !== void 0 ? _this$props$finishBut : "far fa-check"
      }), " ", (_this$props$finishBut2 = this.props.finishButtonText) !== null && _this$props$finishBut2 !== void 0 ? _this$props$finishBut2 : "Finish") : /*#__PURE__*/react.createElement("button", {
        type: "button",
        className: "btn btn-primary",
        disabled: !this.state.enableNext
      }, "Next", " ", /*#__PURE__*/react.createElement("i", {
        className: "far fa-arrow-right"
      }));
      return /*#__PURE__*/react.createElement(Modal, {
        id: this.props.id,
        width: this.state.pageWidth,
        onModalCreated: this.handleModalCreated,
        onClosed: this.handleModalClosed,
        onOpening: this.handleModalOpening
      }, /*#__PURE__*/react.createElement(ModalHeader, {
        id: this.props.id,
        title: this.state.title
      }), /*#__PURE__*/react.createElement(ModalBody, null, /*#__PURE__*/react.createElement(DismissibleAlert/* default */.A, {
        type: "error",
        message: this.state.errorMessage,
        onClose: function onClose() {
          return _this4.setState({
            errorMessage: null
          });
        }
      }), page), /*#__PURE__*/react.createElement(ModalFooter, null, /*#__PURE__*/react.createElement("span", {
        className: "me-auto"
      }, /*#__PURE__*/react.createElement("a", {
        href: this.state.helpUrl,
        target: "_blank",
        rel: "noreferrer"
      }, (_this$state$helpText = this.state.helpText) !== null && _this$state$helpText !== void 0 ? _this$state$helpText : "View Documentation", "\xA0", /*#__PURE__*/react.createElement("i", {
        className: "fa fa-regular fa-arrow-up-right-from-square"
      }))), this.state.loadingText && /*#__PURE__*/react.createElement("span", {
        className: "me-auto"
      }, /*#__PURE__*/react.createElement("i", {
        className: "fad fa-spinner fa-spin"
      }), "\xA0", this.state.loadingText), /*#__PURE__*/react.cloneElement(leftButton, {
        onClick: this.tryPrev
      }), /*#__PURE__*/react.cloneElement(rightButton, {
        onClick: this.tryNext
      })));
    }
  }]);
}(react.Component);
var _DefaultStates = {
  _: {
    title: "",
    pageWidth: null,
    enablePrev: false,
    enableNext: true,
    loadingText: "",
    isFinalPage: false
  }
};
// EXTERNAL MODULE: ./src/components/migration/utils.jsx
var utils = __webpack_require__(19967);
// EXTERNAL MODULE: ./src/components/utils/index.js + 1 modules
var components_utils = __webpack_require__(25337);
// EXTERNAL MODULE: ./src/components/migration/MigrationTabs.jsx
var MigrationTabs = __webpack_require__(69404);
;// CONCATENATED MODULE: ./src/components/migration/index.jsx
function migration_typeof(o) { "@babel/helpers - typeof"; return migration_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, migration_typeof(o); }
function migration_classPrivateFieldInitSpec(e, t, a) { migration_checkPrivateRedeclaration(e, t), t.set(e, a); }
function migration_checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function migration_classPrivateFieldGet(s, a) { return s.get(migration_assertClassBrand(s, a)); }
function migration_classPrivateFieldSet(s, a, r) { return s.set(migration_assertClassBrand(s, a), r), r; }
function migration_assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
function migration_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function migration_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, migration_toPropertyKey(o.key), o); } }
function migration_createClass(e, r, t) { return r && migration_defineProperties(e.prototype, r), t && migration_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function migration_callSuper(t, o, e) { return o = migration_getPrototypeOf(o), migration_possibleConstructorReturn(t, migration_isNativeReflectConstruct() ? Reflect.construct(o, e || [], migration_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function migration_possibleConstructorReturn(t, e) { if (e && ("object" == migration_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return migration_assertThisInitialized(t); }
function migration_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function migration_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (migration_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function migration_getPrototypeOf(t) { return migration_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, migration_getPrototypeOf(t); }
function migration_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && migration_setPrototypeOf(t, e); }
function migration_setPrototypeOf(t, e) { return migration_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, migration_setPrototypeOf(t, e); }
function migration_defineProperty(e, r, t) { return (r = migration_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function migration_toPropertyKey(t) { var i = migration_toPrimitive(t, "string"); return "symbol" == migration_typeof(i) ? i : i + ""; }
function migration_toPrimitive(t, r) { if ("object" != migration_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != migration_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }









var ImportUploadPage = /*#__PURE__*/function (_React$Component) {
  function ImportUploadPage(props) {
    var _this;
    migration_classCallCheck(this, ImportUploadPage);
    _this = migration_callSuper(this, ImportUploadPage, [props]);
    migration_defineProperty(_this, "handleNextPage", function () {
      var _window;
      _this.props.setLoadingText("Uploading File...");
      _this.props.setError(null);
      var filename = _this.props.isFlowConnectors ? (_window = window) === null || _window === void 0 || (_window = _window.rsb) === null || _window === void 0 || (_window = _window.workflow) === null || _window === void 0 || (_window = _window.currentFile) === null || _window === void 0 ? void 0 : _window.name : _this.fileInput.current.files[0].name;
      if (_this.props.isFlow && filename.endsWith(".arc")) {
        _this.props.setError("This file appears to be a global export (.arc). Please navigate to the Migration tab within the Settings page to import it.");
        _this.props.setLoadingText(null);
      } else if (!_this.props.isFlow && filename.endsWith(".arcflow")) {
        _this.props.setError("This file appears to be a flow or workspace export (.arcflow). Please navigate to the workspace where you would like these resources to reside and import from there.");
        _this.props.setLoadingText(null);
      } else {
        var _window3;
        var formData = new FormData();
        var fileObj = null;
        if (_this.props.isFlowConnectors) {
          var _window2;
          fileObj = (_window2 = window) === null || _window2 === void 0 || (_window2 = _window2.rsb) === null || _window2 === void 0 || (_window2 = _window2.workflow) === null || _window2 === void 0 ? void 0 : _window2.currentFile;
        } else {
          fileObj = _this.fileInput.current.files[0];
        }
        formData.append("arcflow", fileObj);
        var workspaceId = (_window3 = window) === null || _window3 === void 0 || (_window3 = _window3.rsb) === null || _window3 === void 0 || (_window3 = _window3.workflow) === null || _window3 === void 0 ? void 0 : _window3.currentWorkspaceId;
        if (_this.props.externalRef) {
          workspaceId = _this.props.externalRef.current.workspaceId;
        }
        axios/* default */.A.post("src/standard/migrationRead.rsb?@json&InputName=arcflow" + (_this.props.isFlow ? "&WorkspaceId=" + encodeURIComponent(workspaceId) : ""), formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then(function (response) {
          _this.props.setLoadingText(null);
          var data = response.data;
          var errMsg = (0,components_utils/* getResultErrorMessage */.hz)(data.items);
          if (errMsg) {
            _this.props.setError(errMsg);
          } else {
            var settingsInfo = data.items && data.items[0] && data.items[0].settingsinfo;
            var fileHandle = data.items && data.items[0] && data.items[0].handle;
            if (settingsInfo && fileHandle) {
              var settingsInfoObj = JSON.parse(settingsInfo);
              if (settingsInfoObj.workspaces) {
                Object.keys(settingsInfoObj.workspaces).forEach(function (key) {
                  if (key && _this.props.isFlow) {
                    _this.props.setError("This file appears to be a global export (.arc). Please navigate to the Migration tab within the Settings page to import it.");
                    _this.props.setLoadingText(null);
                    return;
                  } else if (key == "" && !_this.props.isFlow) {
                    _this.props.setError("This file appears to be a flow or workspace export (.arcflow). Please navigate to the workspace where you would like these resources to reside and import from there.");
                    _this.props.setLoadingText(null);
                    return;
                  }
                });
              }
              var nextPageType = ImportProcessedPage;
              _this.props.setNextPage(nextPageType, {
                fileName: filename,
                settingsInfo: settingsInfoObj,
                fileHandle: fileHandle,
                "import": _this.props["import"],
                isFlow: _this.props.isFlow,
                isFlowConnectors: _this.props.isFlowConnectors,
                workspaceId: workspaceId
              });
            } else {
              _this.props.setError("No SettingsInfo or Handle.");
            }
          }
        });
      }
    });
    migration_defineProperty(_this, "handleSelectedFile", function () {
      var selectedFile = _this.fileInput.current.files.length > 0;
      _this.props.enableNext(selectedFile);
      _this.setState({
        selectedFile: selectedFile
      });
    });
    _this.props.setTitle(_this.props.isFlow ? _this.props.isFlowConnectors ? "Flow Import" : "Workspace Import" : "Application Settings Import");
    _this.props.enablePrev(false);
    _this.props.enableNext(_this.props.isFlowConnectors ? true : false);
    _this.props.onNextPage(_this.handleNextPage);
    _this.props.setHelpLink("help.rst#Importing-Exporting-Flows");
    _this.fileInput = /*#__PURE__*/react.createRef();
    _this.state = {
      selectedFile: _this.props.isFlowConnectors ? true : false
    };
    return _this;
  }
  migration_inherits(ImportUploadPage, _React$Component);
  return migration_createClass(ImportUploadPage, [{
    key: "render",
    value: function render() {
      var _window4;
      var currentFilename = (_window4 = window) === null || _window4 === void 0 || (_window4 = _window4.rsb) === null || _window4 === void 0 || (_window4 = _window4.workflow) === null || _window4 === void 0 || (_window4 = _window4.currentFile) === null || _window4 === void 0 ? void 0 : _window4.name;
      return /*#__PURE__*/react.createElement("form", {
        className: "form-horizontal form-settings",
        role: "form",
        method: "POST",
        autoComplete: "off",
        noValidate: "novalidate"
      }, /*#__PURE__*/react.createElement("p", null, this.props.isFlow ? "Choose an .arcflow file to be imported." : "Choose an .arc file to be imported."), /*#__PURE__*/react.createElement("div", {
        className: "form-group row mb-3"
      }, /*#__PURE__*/react.createElement("label", {
        htmlFor: "migrationImportModal_file",
        className: "col-md-5 control-label col-form-label"
      }, "File"), /*#__PURE__*/react.createElement("div", {
        className: "col-md-6"
      }, this.props.isFlowConnectors && /*#__PURE__*/react.createElement("div", {
        className: "settings-text"
      }, currentFilename), !this.props.isFlowConnectors && /*#__PURE__*/react.createElement("input", {
        className: "form-control",
        type: "file",
        size: "15",
        name: "file",
        accept: this.props.isFlow ? ".arcflow" : ".arc",
        onChange: this.handleSelectedFile,
        ref: this.fileInput
      }))));
    }
  }]);
}(react.Component);
var _hasConflict = /*#__PURE__*/new WeakMap();
var ImportProcessedPage = /*#__PURE__*/function (_React$Component2) {
  function ImportProcessedPage(props) {
    var _this2;
    migration_classCallCheck(this, ImportProcessedPage);
    _this2 = migration_callSuper(this, ImportProcessedPage, [props]);
    migration_classPrivateFieldInitSpec(_this2, _hasConflict, false);
    migration_defineProperty(_this2, "handleNextPage", function () {
      var password = _this2.state.importSensitive ? _this2.state.password : null;
      var doNext = function doNext(handle, settingInfo) {
        if (_this2.state.importType != "all") {
          _this2.props.setNextPage(ImportCustomizePage, {
            settingsInfo: settingInfo,
            hasConflict: migration_classPrivateFieldGet(_hasConflict, _this2),
            "import": _this2.props["import"],
            fileHandle: handle,
            password: password,
            isFlow: _this2.props.isFlow,
            isFlowConnectors: _this2.props.isFlowConnectors
          });
        } else if (migration_classPrivateFieldGet(_hasConflict, _this2)) {
          _this2.props.setNextPage(ImportConflictResolutionPage, {
            settingsInfo: settingInfo,
            "import": _this2.props["import"],
            fileHandle: handle,
            password: password,
            isFlow: _this2.props.isFlow,
            isFlowConnectors: _this2.props.isFlowConnectors
          });
        } else {
          _this2.props["import"](handle, password, settingInfo, _this2);
        }
      };
      if (password) {
        _this2.props.setLoadingText("Decrypting File...");
        _this2.props.setError(null);
        var params = new URLSearchParams();
        if (_this2.props.isFlow) {
          params.append("WorkspaceId", _this2.props.workspaceId);
        }
        params.append("Password", password);
        params.append("Handle", _this2.props.fileHandle);
        axios/* default */.A.post("src/standard/migrationRead.rsb?@json", params).then(function (response) {
          _this2.props.setLoadingText(null);
          var data = response.data;
          var errMsg = (0,components_utils/* getResultErrorMessage */.hz)(data.items);
          if (errMsg) {
            _this2.props.setError(errMsg);
          } else {
            var settingsInfoStr = data.items && data.items[0] && data.items[0].settingsinfo;
            var fileHandle = data.items && data.items[0] && data.items[0].handle;
            if (settingsInfoStr && fileHandle) {
              var settingsInfo = JSON.parse(settingsInfoStr);
              migration_classPrivateFieldSet(_hasConflict, _this2, _HasConflict.call(ImportProcessedPage, settingsInfo));
              doNext(fileHandle, settingsInfo);
            } else {
              _this2.props.setError("No SettingsInfo or Handle.");
            }
          }
        });
      } else {
        doNext(_this2.props.fileHandle, _this2.props.settingsInfo);
      }
    });
    migration_defineProperty(_this2, "handleSensitiveChanged", function () {
      var importSensitive = !_this2.state.importSensitive;
      _this2.setState({
        importSensitive: importSensitive
      });
      if (importSensitive) {
        _this2.props.enableNext(_this2.state.password != null && _this2.state.password != "");
      } else {
        _this2.props.enableNext(true);
      }
    });
    migration_defineProperty(_this2, "handleTypeChanged", function (event) {
      _this2.setState({
        importType: event.target.value
      });
      _this2.props.setIsFinalPage(event.target.value == "all" && !migration_classPrivateFieldGet(_hasConflict, _this2));
    });
    migration_defineProperty(_this2, "handlePasswordChanged", function (event) {
      _this2.setState({
        password: event.target.value
      });
      _this2.props.enableNext(event.target.value != "");
    });
    _this2.props.setTitle(_this2.props.isFlow ? _this2.props.isFlowConnectors ? "Flow Import" : "Workspace Import" : "Application Settings Import");
    _this2.props.enablePrev(true);
    _this2.props.enableNext(!_this2.props.settingsInfo.encrypted);
    _this2.props.onNextPage(_this2.handleNextPage);
    _this2.props.setHelpLink("help.rst#Importing-Exporting-Flows");
    _this2.state = {
      importSensitive: true,
      importType: "all",
      password: null
    };
    _this2.customImportLabel = /*#__PURE__*/react.createRef();
    migration_classPrivateFieldSet(_hasConflict, _this2, _HasConflict.call(ImportProcessedPage, _this2.props.settingsInfo));
    if (!migration_classPrivateFieldGet(_hasConflict, _this2)) {
      _this2.props.setIsFinalPage(true);
    }
    return _this2;
  }
  migration_inherits(ImportProcessedPage, _React$Component2);
  return migration_createClass(ImportProcessedPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;
      var elem = this.customImportLabel.current;
      if (elem != null) {
        // The bootstrap may not be loaded when mounting to DOM tree.
        setTimeout(function () {
          new window.bootstrap.Popover(elem, {
            container: "body",
            content: _this3.props.isFlow ? "Custom import allows you to select specific flows and settings within the file to import." : "Custom import allows you to select specific workspaces and settings within the file to import.",
            html: true,
            placement: "top",
            trigger: "hover"
          });
        }, 500);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var hasSensitiveValues = this.props.settingsInfo.encrypted;
      return /*#__PURE__*/react.createElement("form", {
        className: "form-horizontal form-settings",
        role: "form",
        method: "POST",
        autoComplete: "off",
        noValidate: "novalidate"
      }, /*#__PURE__*/react.createElement("input", {
        type: "password",
        name: "no-password",
        className: "rsb-form-nosubmit",
        defaultValue: "",
        autoComplete: "new-password",
        style: {
          display: "none"
        }
      }), /*#__PURE__*/react.createElement("p", null, this.props.isFlow ? "Choose an .arcflow file to be imported." : "Choose an .arc file to be imported."), /*#__PURE__*/react.createElement("div", {
        className: "form-group row mb-3"
      }, /*#__PURE__*/react.createElement("label", {
        className: "col-md-5 control-label col-form-label"
      }, "File"), /*#__PURE__*/react.createElement("div", {
        className: "col-md-6"
      }, /*#__PURE__*/react.createElement("div", {
        className: "settings-text ps-0"
      }, this.props.fileName))), /*#__PURE__*/react.createElement("div", {
        className: "form-group row mb-3"
      }, /*#__PURE__*/react.createElement("label", {
        className: "col-md-5 control-label col-form-label"
      }, "Type"), /*#__PURE__*/react.createElement("div", {
        className: "col-md-6"
      }, /*#__PURE__*/react.createElement("div", {
        className: "radio pt-2"
      }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
        type: "radio",
        className: "form-check-input",
        name: "type",
        value: "all",
        checked: this.state.importType == "all",
        onChange: this.handleTypeChanged
      }), " ", "Import all workspaces and settings")), /*#__PURE__*/react.createElement("div", {
        className: "radio pt-2"
      }, /*#__PURE__*/react.createElement("label", {
        ref: this.customImportLabel
      }, /*#__PURE__*/react.createElement("input", {
        type: "radio",
        className: "form-check-input",
        name: "type",
        value: "custom",
        checked: this.state.importType == "custom",
        onChange: this.handleTypeChanged
      }), " ", "Custom import", "\xA0", /*#__PURE__*/react.createElement("sup", null, /*#__PURE__*/react.createElement("i", {
        className: "fa fa-question-circle"
      })))))), hasSensitiveValues && /*#__PURE__*/react.createElement("div", {
        className: "form-group row mb-3"
      }, /*#__PURE__*/react.createElement("label", {
        htmlFor: "migrationImportProcessedPageSensitive",
        className: "col-md-5 control-label col-form-label"
      }, "Import Sensitive Values"), /*#__PURE__*/react.createElement("div", {
        className: "col-md-6"
      }, /*#__PURE__*/react.createElement("div", {
        className: "checkbox"
      }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
        className: "form-check-input",
        type: "checkbox",
        name: "sensitive",
        id: "migrationImportProcessedPageSensitive",
        onChange: this.handleSensitiveChanged,
        defaultChecked: true
      }), /*#__PURE__*/react.createElement("span", null, "Enable"))))), hasSensitiveValues && /*#__PURE__*/react.createElement("div", {
        className: "form-group row"
      }, /*#__PURE__*/react.createElement("label", {
        htmlFor: "migrationImportProcessedPagePassword",
        className: "col-md-5 control-label col-form-label"
      }, "Password"), /*#__PURE__*/react.createElement("div", {
        className: "col-md-6"
      }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("input", {
        type: "password",
        className: "form-control",
        id: "migrationImportProcessedPagePassword",
        disabled: !this.state.importSensitive,
        onChange: this.handlePasswordChanged
      })), /*#__PURE__*/react.createElement("div", {
        className: "migration-modal-value-text"
      }, /*#__PURE__*/react.createElement("p", null, "A password is required to import sensitive values.")))));
    }
  }]);
}(react.Component);
function _HasConflict(settingsInfo) {
  var hasConflict = false;
  if (settingsInfo.workspaces) {
    hasConflict = Object.values(settingsInfo.workspaces).some(function (workspaceInfo) {
      if (workspaceInfo.settings.existing) return true;
      if (workspaceInfo.connectors) {
        return Object.values(workspaceInfo.connectors).some(function (connectorInfo) {
          return connectorInfo.existing;
        });
      }
      return false;
    });
  }
  if (!hasConflict && settingsInfo.profiles) {
    hasConflict = Object.values(settingsInfo.profiles).length > 0;
  }
  if (!hasConflict && settingsInfo.settings) {
    hasConflict = Object.values(settingsInfo.settings).length > 0;
  }
  if (!hasConflict && settingsInfo.users) {
    hasConflict = Object.values(settingsInfo.users).some(function (userInfo) {
      return userInfo.existing;
    });
  }
  if (!hasConflict && settingsInfo.roles) {
    hasConflict = Object.values(settingsInfo.roles).some(function (roleInfo) {
      return roleInfo.existing;
    });
  }
  if (!hasConflict && settingsInfo.certificates) {
    hasConflict = Object.values(settingsInfo.certificates).some(function (certificateInfo) {
      return certificateInfo.existing;
    });
  }
  if (!hasConflict && settingsInfo.connections) {
    hasConflict = Object.values(settingsInfo.connections).some(function (connInfo) {
      return connInfo.existing;
    });
  }
  if (!hasConflict && settingsInfo.vaults) {
    hasConflict = Object.values(settingsInfo.vaults).some(function (vaultInfo) {
      return vaultInfo.existing;
    });
  }
  if (!hasConflict && settingsInfo.reports) {
    hasConflict = Object.values(settingsInfo.reports).some(function (reportInfo) {
      return reportInfo.existing;
    });
  }
  if (!hasConflict && settingsInfo.partners) {
    hasConflict = Object.values(settingsInfo.partners).some(function (partnerInfo) {
      return partnerInfo.existing;
    });
  }
  if (!hasConflict && settingsInfo.documents) {
    hasConflict = Object.values(settingsInfo.documents).some(function (documentInfo) {
      return documentInfo.existing;
    });
  }
  return hasConflict;
}
var _settingsInfo = /*#__PURE__*/new WeakMap();
var _hasWorkspaceTab = /*#__PURE__*/new WeakMap();
var _hasSettingsTab = /*#__PURE__*/new WeakMap();
var _hasEDITab = /*#__PURE__*/new WeakMap();
var _showIncludeWorkspaceSettings = /*#__PURE__*/new WeakMap();
var _includeWorkspaceSettings = /*#__PURE__*/new WeakMap();
var _workspaceActions = /*#__PURE__*/new WeakMap();
var _getIsFinalPage = /*#__PURE__*/new WeakMap();
var _updateWorkspaceAction = /*#__PURE__*/new WeakMap();
var _updateNameAction = /*#__PURE__*/new WeakMap();
var _updatePartnerAction = /*#__PURE__*/new WeakMap();
var _updateDocumentAction = /*#__PURE__*/new WeakMap();
var _updateAPIAction = /*#__PURE__*/new WeakMap();
var _updateConnectorAction = /*#__PURE__*/new WeakMap();
var ImportCustomizePage = /*#__PURE__*/function (_React$Component3) {
  function ImportCustomizePage(props) {
    var _classPrivateFieldGet4, _classPrivateFieldGet5, _classPrivateFieldGet6, _classPrivateFieldGet7, _classPrivateFieldGet8, _classPrivateFieldGet9, _classPrivateFieldGet10, _classPrivateFieldGet11, _classPrivateFieldGet12;
    var _this4;
    migration_classCallCheck(this, ImportCustomizePage);
    _this4 = migration_callSuper(this, ImportCustomizePage, [props]);
    migration_classPrivateFieldInitSpec(_this4, _settingsInfo, null);
    migration_classPrivateFieldInitSpec(_this4, _hasWorkspaceTab, false);
    migration_classPrivateFieldInitSpec(_this4, _hasSettingsTab, false);
    migration_classPrivateFieldInitSpec(_this4, _hasEDITab, false);
    migration_classPrivateFieldInitSpec(_this4, _showIncludeWorkspaceSettings, false);
    migration_classPrivateFieldInitSpec(_this4, _includeWorkspaceSettings, true);
    migration_classPrivateFieldInitSpec(_this4, _workspaceActions, {});
    migration_defineProperty(_this4, "handleNextPage", function () {
      if (!migration_classPrivateFieldGet(_getIsFinalPage, _this4).call(_this4)) {
        _this4.props.setNextPage(ImportConflictResolutionPage, {
          settingsInfo: migration_classPrivateFieldGet(_settingsInfo, _this4),
          "import": _this4.props["import"],
          fileHandle: _this4.props.fileHandle,
          password: _this4.props.password,
          isFlow: _this4.props.isFlow
        });
      } else {
        _this4.props["import"](_this4.props.fileHandle, _this4.props.password, migration_classPrivateFieldGet(_settingsInfo, _this4), _this4);
      }
    });
    migration_defineProperty(_this4, "handleWorkspacesClicked", function () {
      _this4.setState({
        showingTab: "workspaces"
      });
    });
    migration_defineProperty(_this4, "handleSettingsClicked", function () {
      _this4.setState({
        showingTab: "settings"
      });
    });
    migration_defineProperty(_this4, "handleEDIClicked", function () {
      _this4.setState({
        showingTab: "edi"
      });
    });
    migration_defineProperty(_this4, "handleWorkspaceActionChange", function (workspaceId, action) {
      migration_classPrivateFieldGet(_updateWorkspaceAction, _this4).call(_this4, workspaceId, action);
      _this4.props.setIsFinalPage(migration_classPrivateFieldGet(_getIsFinalPage, _this4).call(_this4));
    });
    migration_defineProperty(_this4, "handleNameActionChange", function (section, action) {
      migration_classPrivateFieldGet(_updateNameAction, _this4).call(_this4, section, action);
      _this4.props.setIsFinalPage(migration_classPrivateFieldGet(_getIsFinalPage, _this4).call(_this4));
    });
    migration_defineProperty(_this4, "handlePartnerActionChange", function (partnerId, action) {
      migration_classPrivateFieldGet(_updatePartnerAction, _this4).call(_this4, partnerId, action);
      _this4.props.setIsFinalPage(migration_classPrivateFieldGet(_getIsFinalPage, _this4).call(_this4));
    });
    migration_defineProperty(_this4, "handleDocumentActionChange", function (documentId, action) {
      migration_classPrivateFieldGet(_updateDocumentAction, _this4).call(_this4, documentId, action);
      _this4.props.setIsFinalPage(migration_classPrivateFieldGet(_getIsFinalPage, _this4).call(_this4));
    });
    migration_defineProperty(_this4, "handleAPIActionChange", function (workspaceId, apiId, action) {
      migration_classPrivateFieldGet(_updateAPIAction, _this4).call(_this4, workspaceId, apiId, action);
      _this4.props.setIsFinalPage(migration_classPrivateFieldGet(_getIsFinalPage, _this4).call(_this4));
    });
    migration_defineProperty(_this4, "handleConnectorActionChange", function (workspaceId, connectorId, action) {
      migration_classPrivateFieldGet(_updateConnectorAction, _this4).call(_this4, workspaceId, connectorId, action);
      _this4.props.setIsFinalPage(migration_classPrivateFieldGet(_getIsFinalPage, _this4).call(_this4));
    });
    migration_defineProperty(_this4, "handleIncludeWorkspaceSettingsChange", function (enable) {
      migration_classPrivateFieldSet(_includeWorkspaceSettings, _this4, enable);
      migration_classPrivateFieldGet(_showIncludeWorkspaceSettings, _this4) && Object.values(migration_classPrivateFieldGet(_settingsInfo, _this4).workspaces).forEach(function (workspaceInfo) {
        workspaceInfo.settings.action = enable && migration_classPrivateFieldGet(_workspaceActions, _this4)[workspaceInfo.id] !== "ignore" ? "skip" : "ignore";
      });
    });
    migration_classPrivateFieldInitSpec(_this4, _getIsFinalPage, function () {
      var importingConflicts = false;
      if (migration_classPrivateFieldGet(_settingsInfo, _this4).workspaces) {
        for (var _i = 0, _Object$values = Object.values(migration_classPrivateFieldGet(_settingsInfo, _this4).workspaces); _i < _Object$values.length; _i++) {
          var workspaceInfo = _Object$values[_i];
          if (workspaceInfo.connectors) {
            for (var _i2 = 0, _Object$values2 = Object.values(workspaceInfo.connectors); _i2 < _Object$values2.length; _i2++) {
              var connectorInfo = _Object$values2[_i2];
              if (connectorInfo.existing && connectorInfo.action != "ignore") {
                importingConflicts = true;
                break;
              }
            }
          }
          if (!importingConflicts && workspaceInfo.apis) {
            for (var _i3 = 0, _Object$values3 = Object.values(workspaceInfo.apis); _i3 < _Object$values3.length; _i3++) {
              var apiInfo = _Object$values3[_i3];
              if (apiInfo.existing && apiInfo.action != "ignore") {
                importingConflicts = true;
                break;
              }
            }
          }
          if (importingConflicts) {
            break;
          }
        }
      }
      if (!importingConflicts && migration_classPrivateFieldGet(_settingsInfo, _this4).profiles) {
        for (var _i4 = 0, _Object$values4 = Object.values(migration_classPrivateFieldGet(_settingsInfo, _this4).profiles); _i4 < _Object$values4.length; _i4++) {
          var profileInfo = _Object$values4[_i4];
          if (profileInfo.action != "ignore") {
            importingConflicts = true;
            break;
          }
        }
      }
      if (!importingConflicts && migration_classPrivateFieldGet(_settingsInfo, _this4).settings) {
        for (var _i5 = 0, _Object$values5 = Object.values(migration_classPrivateFieldGet(_settingsInfo, _this4).settings); _i5 < _Object$values5.length; _i5++) {
          var settingInfo = _Object$values5[_i5];
          if (settingInfo.action != "ignore") {
            importingConflicts = true;
            break;
          }
        }
      }
      if (!importingConflicts && migration_classPrivateFieldGet(_settingsInfo, _this4).users) {
        for (var _i6 = 0, _Object$values6 = Object.values(migration_classPrivateFieldGet(_settingsInfo, _this4).users); _i6 < _Object$values6.length; _i6++) {
          var userInfo = _Object$values6[_i6];
          if (userInfo.existing && userInfo.action != "ignore") {
            importingConflicts = true;
            break;
          }
        }
      }
      if (!importingConflicts && migration_classPrivateFieldGet(_settingsInfo, _this4).roles) {
        for (var _i7 = 0, _Object$values7 = Object.values(migration_classPrivateFieldGet(_settingsInfo, _this4).roles); _i7 < _Object$values7.length; _i7++) {
          var roleInfo = _Object$values7[_i7];
          if (roleInfo.existing && roleInfo.action != "ignore") {
            importingConflicts = true;
            break;
          }
        }
      }
      if (!importingConflicts && migration_classPrivateFieldGet(_settingsInfo, _this4).certificates) {
        for (var _i8 = 0, _Object$values8 = Object.values(migration_classPrivateFieldGet(_settingsInfo, _this4).certificates); _i8 < _Object$values8.length; _i8++) {
          var certificateInfo = _Object$values8[_i8];
          if (certificateInfo.existing && certificateInfo.action != "ignore") {
            importingConflicts = true;
            break;
          }
        }
      }
      if (!importingConflicts && migration_classPrivateFieldGet(_settingsInfo, _this4).connections) {
        for (var _i9 = 0, _Object$values9 = Object.values(migration_classPrivateFieldGet(_settingsInfo, _this4).connections); _i9 < _Object$values9.length; _i9++) {
          var connInfo = _Object$values9[_i9];
          if (connInfo.existing && connInfo.action != "ignore") {
            importingConflicts = true;
            break;
          }
        }
      }
      if (!importingConflicts && migration_classPrivateFieldGet(_settingsInfo, _this4).vaults) {
        for (var _i10 = 0, _Object$values10 = Object.values(migration_classPrivateFieldGet(_settingsInfo, _this4).vaults); _i10 < _Object$values10.length; _i10++) {
          var vaultInfo = _Object$values10[_i10];
          if (vaultInfo.existing && vaultInfo.action != "ignore") {
            importingConflicts = true;
            break;
          }
        }
      }
      if (!importingConflicts && migration_classPrivateFieldGet(_settingsInfo, _this4).reports) {
        for (var _i11 = 0, _Object$values11 = Object.values(migration_classPrivateFieldGet(_settingsInfo, _this4).reports); _i11 < _Object$values11.length; _i11++) {
          var reportInfo = _Object$values11[_i11];
          if (reportInfo.existing && reportInfo.action != "ignore") {
            importingConflicts = true;
            break;
          }
        }
      }
      if (!importingConflicts && migration_classPrivateFieldGet(_settingsInfo, _this4).partners) {
        for (var _i12 = 0, _Object$values12 = Object.values(migration_classPrivateFieldGet(_settingsInfo, _this4).partners); _i12 < _Object$values12.length; _i12++) {
          var partnerInfo = _Object$values12[_i12];
          if (partnerInfo.existing && partnerInfo.action != "ignore") {
            importingConflicts = true;
            break;
          }
        }
      }
      if (!importingConflicts && migration_classPrivateFieldGet(_settingsInfo, _this4).documents) {
        for (var _i13 = 0, _Object$values13 = Object.values(migration_classPrivateFieldGet(_settingsInfo, _this4).documents); _i13 < _Object$values13.length; _i13++) {
          var documentInfo = _Object$values13[_i13];
          if (documentInfo.existing && documentInfo.action != "ignore") {
            importingConflicts = true;
            break;
          }
        }
      }
      return !importingConflicts;
    });
    migration_classPrivateFieldInitSpec(_this4, _updateWorkspaceAction, function (workspaceId, action) {
      if (migration_classPrivateFieldGet(_settingsInfo, _this4).workspaces) {
        var workspaceInfo = migration_classPrivateFieldGet(_settingsInfo, _this4).workspaces[workspaceId];
        if (workspaceInfo) {
          migration_classPrivateFieldGet(_workspaceActions, _this4)[workspaceInfo.id] = action;
          if (workspaceInfo.connectors) {
            Object.values(workspaceInfo.connectors).forEach(function (connectorInfo) {
              connectorInfo.action = action;
            });
          }
          if (workspaceInfo.flow) {
            if (workspaceInfo.flow.elements) {
              Object.values(workspaceInfo.flow.elements).forEach(function (elementInfo) {
                elementInfo.action = action;
              });
            }
            if (workspaceInfo.flow.views) {
              Object.values(workspaceInfo.flow.views).forEach(function (viewInfo) {
                viewInfo.action = action;
              });
            }
            if (workspaceInfo.flow.apis) {
              Object.values(workspaceInfo.flow.apis).forEach(function (apiInfo) {
                apiInfo.action = action;
              });
            }
          }
          if (workspaceInfo.apis) {
            Object.values(workspaceInfo.apis).forEach(function (apiInfo) {
              apiInfo.action = action;
            });
          }
          if (workspaceInfo.settings && action) workspaceInfo.settings.action = !migration_classPrivateFieldGet(_includeWorkspaceSettings, _this4) ? "ignore" : action;
        }
      }
    });
    migration_classPrivateFieldInitSpec(_this4, _updateNameAction, function (section, action) {
      if (migration_classPrivateFieldGet(_settingsInfo, _this4)[section]) {
        Object.values(migration_classPrivateFieldGet(_settingsInfo, _this4)[section]).forEach(function (nameInfo) {
          nameInfo.action = action;
        });
      } else if (migration_classPrivateFieldGet(_settingsInfo, _this4).settings && migration_classPrivateFieldGet(_settingsInfo, _this4).settings[section]) {
        var settingInfo = migration_classPrivateFieldGet(_settingsInfo, _this4).settings[section];
        if (settingInfo) {
          settingInfo.action = action;
        }
      }
    });
    migration_classPrivateFieldInitSpec(_this4, _updatePartnerAction, function (partnerId, action) {
      var _classPrivateFieldGet2;
      if ((_classPrivateFieldGet2 = migration_classPrivateFieldGet(_settingsInfo, _this4)) !== null && _classPrivateFieldGet2 !== void 0 && (_classPrivateFieldGet2 = _classPrivateFieldGet2.partners) !== null && _classPrivateFieldGet2 !== void 0 && _classPrivateFieldGet2[partnerId]) {
        migration_classPrivateFieldGet(_settingsInfo, _this4).partners[partnerId].action = action;
      }
    });
    migration_classPrivateFieldInitSpec(_this4, _updateDocumentAction, function (documentId, action) {
      var _classPrivateFieldGet3;
      if ((_classPrivateFieldGet3 = migration_classPrivateFieldGet(_settingsInfo, _this4)) !== null && _classPrivateFieldGet3 !== void 0 && (_classPrivateFieldGet3 = _classPrivateFieldGet3.documents) !== null && _classPrivateFieldGet3 !== void 0 && _classPrivateFieldGet3[documentId]) {
        migration_classPrivateFieldGet(_settingsInfo, _this4).documents[documentId].action = action;
      }
    });
    migration_classPrivateFieldInitSpec(_this4, _updateAPIAction, function (workspaceId, apiId, action) {
      var _workspaceInfo, _workspaceInfo2;
      var workspaceInfo = null;
      Object.values(migration_classPrivateFieldGet(_settingsInfo, _this4).workspaces).forEach(function (info) {
        workspaceInfo = info;
      });
      if ((_workspaceInfo = workspaceInfo) !== null && _workspaceInfo !== void 0 && _workspaceInfo.apis) {
        var apiInfo = workspaceInfo.apis[apiId.toLowerCase()];
        if (apiInfo) {
          apiInfo.action = action;
        }
      }
      if ((_workspaceInfo2 = workspaceInfo) !== null && _workspaceInfo2 !== void 0 && (_workspaceInfo2 = _workspaceInfo2.flow) !== null && _workspaceInfo2 !== void 0 && _workspaceInfo2.apis) {
        var flowAPIInfo = workspaceInfo.flow.apis[apiId.toLowerCase()];
        if (flowAPIInfo) {
          flowAPIInfo.action = action;
        }
      }
    });
    migration_classPrivateFieldInitSpec(_this4, _updateConnectorAction, function (workspaceId, connectorId, action) {
      var _workspaceInfo3, _workspaceInfo4;
      var workspaceInfo = null;
      Object.values(migration_classPrivateFieldGet(_settingsInfo, _this4).workspaces).forEach(function (info) {
        workspaceInfo = info;
      });
      if ((_workspaceInfo3 = workspaceInfo) !== null && _workspaceInfo3 !== void 0 && _workspaceInfo3.connectors) {
        var connectorInfo = workspaceInfo.connectors[connectorId];
        if (connectorInfo) {
          connectorInfo.action = action;
        }
      }
      if ((_workspaceInfo4 = workspaceInfo) !== null && _workspaceInfo4 !== void 0 && (_workspaceInfo4 = _workspaceInfo4.flow) !== null && _workspaceInfo4 !== void 0 && _workspaceInfo4.elements) {
        var elementInfo = workspaceInfo.flow.elements[connectorId];
        if (elementInfo) {
          elementInfo.action = action;
        }
      }
    });
    _this4.props.setTitle(_this4.props.isFlow ? _this4.props.isFlowConnectors ? "Customize Flow Import" : "Customize Workspace Import" : "Customize Application Settings Import");
    _this4.props.onNextPage(_this4.handleNextPage);
    _this4.props.setHelpLink("help.rst#Importing-Exporting-Flows");
    migration_classPrivateFieldSet(_settingsInfo, _this4, _this4.props.settingsInfo);
    migration_classPrivateFieldSet(_showIncludeWorkspaceSettings, _this4, Object.values(migration_classPrivateFieldGet(_settingsInfo, _this4).workspaces || {}).find(function (workspaceInfo) {
      var _workspaceInfo$settin;
      return (_workspaceInfo$settin = workspaceInfo.settings) === null || _workspaceInfo$settin === void 0 ? void 0 : _workspaceInfo$settin.existing;
    }) != null);
    if (migration_classPrivateFieldGet(_settingsInfo, _this4).workspaces) {
      Object.values(migration_classPrivateFieldGet(_settingsInfo, _this4).workspaces).forEach(function (workspaceInfo) {
        if (workspaceInfo.connectors) {
          Object.values(workspaceInfo.connectors).forEach(function (connectorInfo) {
            connectorInfo.action = "skip";
            migration_classPrivateFieldSet(_hasWorkspaceTab, _this4, true);
          });
        }
      });
    }
    if ((_classPrivateFieldGet4 = migration_classPrivateFieldGet(_settingsInfo, _this4)) !== null && _classPrivateFieldGet4 !== void 0 && _classPrivateFieldGet4.profiles || (_classPrivateFieldGet5 = migration_classPrivateFieldGet(_settingsInfo, _this4)) !== null && _classPrivateFieldGet5 !== void 0 && (_classPrivateFieldGet5 = _classPrivateFieldGet5.settings) !== null && _classPrivateFieldGet5 !== void 0 && _classPrivateFieldGet5.Alerts || (_classPrivateFieldGet6 = migration_classPrivateFieldGet(_settingsInfo, _this4)) !== null && _classPrivateFieldGet6 !== void 0 && (_classPrivateFieldGet6 = _classPrivateFieldGet6.settings) !== null && _classPrivateFieldGet6 !== void 0 && _classPrivateFieldGet6.AdminAPI || (_classPrivateFieldGet7 = migration_classPrivateFieldGet(_settingsInfo, _this4)) !== null && _classPrivateFieldGet7 !== void 0 && _classPrivateFieldGet7.users || (_classPrivateFieldGet8 = migration_classPrivateFieldGet(_settingsInfo, _this4)) !== null && _classPrivateFieldGet8 !== void 0 && _classPrivateFieldGet8.roles || (_classPrivateFieldGet9 = migration_classPrivateFieldGet(_settingsInfo, _this4)) !== null && _classPrivateFieldGet9 !== void 0 && _classPrivateFieldGet9.connections || (_classPrivateFieldGet10 = migration_classPrivateFieldGet(_settingsInfo, _this4)) !== null && _classPrivateFieldGet10 !== void 0 && _classPrivateFieldGet10.certificates || (_classPrivateFieldGet11 = migration_classPrivateFieldGet(_settingsInfo, _this4)) !== null && _classPrivateFieldGet11 !== void 0 && _classPrivateFieldGet11.vaults || (_classPrivateFieldGet12 = migration_classPrivateFieldGet(_settingsInfo, _this4)) !== null && _classPrivateFieldGet12 !== void 0 && _classPrivateFieldGet12.reports) {
      migration_classPrivateFieldSet(_hasSettingsTab, _this4, true);
    }
    if (migration_classPrivateFieldGet(_settingsInfo, _this4).partners || migration_classPrivateFieldGet(_settingsInfo, _this4).documents) {
      migration_classPrivateFieldSet(_hasEDITab, _this4, true);
    }
    _this4.state = {
      showingTab: migration_classPrivateFieldGet(_hasWorkspaceTab, _this4) ? "workspaces" : migration_classPrivateFieldGet(_hasEDITab, _this4) ? "edi" : migration_classPrivateFieldGet(_hasSettingsTab, _this4) ? "settings" : ""
    };
    _this4.props.setIsFinalPage(migration_classPrivateFieldGet(_getIsFinalPage, _this4).call(_this4));
    return _this4;
  }
  migration_inherits(ImportCustomizePage, _React$Component3);
  return migration_createClass(ImportCustomizePage, [{
    key: "render",
    value: function render() {
      var showingTab = null;
      switch (this.state.showingTab) {
        case "workspaces":
          if (migration_classPrivateFieldGet(_hasWorkspaceTab, this)) {
            if (this.props.isFlow) {
              showingTab = /*#__PURE__*/react.createElement(MigrationTabs/* CustomizeFlowTab */.zM, {
                isImport: true,
                workspaceInfo: migration_classPrivateFieldGet(_settingsInfo, this).workspaces[""],
                onAPIActionChange: this.handleAPIActionChange,
                onConnectorActionChange: this.handleConnectorActionChange,
                includeWorkspaceSettings: migration_classPrivateFieldGet(_includeWorkspaceSettings, this),
                onIncludeWorkspaceSettingsChange: migration_classPrivateFieldGet(_showIncludeWorkspaceSettings, this) ? this.handleIncludeWorkspaceSettingsChange : undefined
              });
            } else {
              showingTab = /*#__PURE__*/react.createElement(MigrationTabs/* CustomizeWorkspacesTab */.le, {
                isImport: true,
                workspacesInfo: migration_classPrivateFieldGet(_settingsInfo, this).workspaces,
                onActionChange: this.handleWorkspaceActionChange,
                includeWorkspaceSettings: migration_classPrivateFieldGet(_includeWorkspaceSettings, this),
                onIncludeWorkspaceSettingsChange: migration_classPrivateFieldGet(_showIncludeWorkspaceSettings, this) ? this.handleIncludeWorkspaceSettingsChange : undefined
              });
            }
          }
          break;
        case "edi":
          if (migration_classPrivateFieldGet(_hasEDITab, this)) {
            showingTab = /*#__PURE__*/react.createElement(MigrationTabs/* CustomizeEDITab */.dF, {
              isImport: true,
              settingsInfo: migration_classPrivateFieldGet(_settingsInfo, this),
              onPartnerActionChange: this.handlePartnerActionChange,
              onDocumentActionChange: this.handleDocumentActionChange
            });
          }
          break;
        case "settings":
          if (migration_classPrivateFieldGet(_hasSettingsTab, this)) {
            showingTab = /*#__PURE__*/react.createElement(MigrationTabs/* CustomizeSettingsTab */.EX, {
              isImport: true,
              settingsInfo: migration_classPrivateFieldGet(_settingsInfo, this),
              onNameActionChange: this.handleNameActionChange
            });
          }
          break;
        default:
          showingTab = /*#__PURE__*/react.createElement("div", {
            className: "alert alert-warning",
            role: "alert"
          }, "The importing file is empty.");
          break;
      }
      return /*#__PURE__*/react.createElement("div", null, (migration_classPrivateFieldGet(_hasSettingsTab, this) || migration_classPrivateFieldGet(_hasWorkspaceTab, this) || migration_classPrivateFieldGet(_hasEDITab, this)) && /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("ul", {
        className: "nav nav-tabs tab-underline",
        role: "tablist"
      }, migration_classPrivateFieldGet(_hasWorkspaceTab, this) && /*#__PURE__*/react.createElement("li", {
        className: "nav-item",
        role: "presentation"
      }, /*#__PURE__*/react.createElement("a", {
        className: "nav-link " + (this.state.showingTab == "workspaces" ? "active" : ""),
        onClick: this.handleWorkspacesClicked
      }, "Workspaces")), migration_classPrivateFieldGet(_hasEDITab, this) && /*#__PURE__*/react.createElement("li", {
        className: "nav-item",
        role: "presentation"
      }, /*#__PURE__*/react.createElement("a", {
        className: "nav-link " + (this.state.showingTab == "edi" ? "active" : ""),
        onClick: this.handleEDIClicked
      }, "EDI")), migration_classPrivateFieldGet(_hasSettingsTab, this) && /*#__PURE__*/react.createElement("li", {
        className: "nav-item",
        role: "presentation"
      }, /*#__PURE__*/react.createElement("a", {
        className: "nav-link " + (this.state.showingTab == "settings" ? "active" : ""),
        onClick: this.handleSettingsClicked
      }, "Settings")))), /*#__PURE__*/react.createElement("div", {
        className: "tab-content"
      }, /*#__PURE__*/react.createElement("div", {
        className: "tab-pane active show",
        role: "tabpanel"
      }, showingTab)));
    }
  }]);
}(react.Component);
var ImportConflictResolutionPage = /*#__PURE__*/function (_React$Component4) {
  function ImportConflictResolutionPage(props) {
    var _this5;
    migration_classCallCheck(this, ImportConflictResolutionPage);
    _this5 = migration_callSuper(this, ImportConflictResolutionPage, [props]);
    migration_defineProperty(_this5, "handleNextPage", function () {
      var resolution = _this5.state.resolution;
      var action = resolution == "manual" ? "skip" : resolution;
      var settingsInfo = _this5.props.settingsInfo;
      var hasWorkspaceTab = false;
      var hasSettingsTab = false;
      var hasEDITab = false;
      if (settingsInfo.workspaces) {
        Object.values(settingsInfo.workspaces).forEach(function (workspaceInfo) {
          if (workspaceInfo.connectors) {
            Object.values(workspaceInfo.connectors).forEach(function (connectorInfo) {
              if (connectorInfo.action != "ignore") {
                connectorInfo.action = action;
                hasWorkspaceTab = true;
              }
            });
          }
          if (workspaceInfo.flow) {
            if (workspaceInfo.flow.elements) {
              Object.values(workspaceInfo.flow.elements).forEach(function (elementInfo) {
                if (elementInfo.action != "ignore") {
                  elementInfo.action = action;
                  hasWorkspaceTab = true;
                }
              });
            }
            if (workspaceInfo.flow.views) {
              Object.values(workspaceInfo.flow.views).forEach(function (viewInfo) {
                if (viewInfo.action != "ignore") {
                  viewInfo.action = action;
                  hasWorkspaceTab = true;
                }
              });
            }
            if (workspaceInfo.flow.apis) {
              Object.values(workspaceInfo.flow.apis).forEach(function (apiInfo) {
                if (apiInfo.action != "ignore") {
                  apiInfo.action = action;
                  hasWorkspaceTab = true;
                }
              });
            }
          }
          if (workspaceInfo.apis) {
            Object.values(workspaceInfo.apis).forEach(function (apiInfo) {
              if (apiInfo.action != "ignore") {
                apiInfo.action = action;
                hasWorkspaceTab = true;
              }
            });
          }
        });
      }
      if (settingsInfo.profiles) {
        Object.values(settingsInfo.profiles).forEach(function (profileInfo) {
          if (profileInfo.action != "ignore") {
            profileInfo.action = action;
            hasSettingsTab = true;
          }
        });
      }
      if (settingsInfo.settings) {
        Object.values(settingsInfo.settings).forEach(function (settingInfo) {
          if (settingInfo.action != "ignore") {
            settingInfo.action = action;
            hasSettingsTab = true;
          }
        });
      }
      if (settingsInfo.users) {
        Object.values(settingsInfo.users).forEach(function (userInfo) {
          if (userInfo.action != "ignore") {
            userInfo.action = action;
            hasSettingsTab = true;
          }
        });
      }
      if (settingsInfo.roles) {
        Object.values(settingsInfo.roles).forEach(function (roleInfo) {
          if (roleInfo.action != "ignore") {
            roleInfo.action = action;
            hasSettingsTab = true;
          }
        });
      }
      if (settingsInfo.certificates) {
        Object.values(settingsInfo.certificates).forEach(function (certificateInfo) {
          if (certificateInfo.action != "ignore") {
            certificateInfo.action = action;
            hasSettingsTab = true;
          }
        });
      }
      if (settingsInfo.connections) {
        Object.values(settingsInfo.connections).forEach(function (connInfo) {
          if (connInfo.action != "ignore") {
            connInfo.action = action;
            hasSettingsTab = true;
          }
        });
      }
      if (settingsInfo.vaults) {
        Object.values(settingsInfo.vaults).forEach(function (vaultInfo) {
          if (vaultInfo.action != "ignore") {
            vaultInfo.action = action;
            hasSettingsTab = true;
          }
        });
      }
      if (settingsInfo.reports) {
        Object.values(settingsInfo.reports).forEach(function (reportInfo) {
          if (reportInfo.action != "ignore") {
            reportInfo.action = action;
            hasSettingsTab = true;
          }
        });
      }
      if (settingsInfo.partners) {
        Object.values(settingsInfo.partners).forEach(function (partnerInfo) {
          if (partnerInfo.action != "ignore") {
            partnerInfo.action = action;
            hasEDITab = true;
          }
        });
      }
      if (settingsInfo.documents) {
        Object.values(settingsInfo.documents).forEach(function (documentInfo) {
          if (documentInfo.action != "ignore") {
            documentInfo.action = action;
            hasEDITab = true;
          }
        });
      }
      if (resolution == "manual") {
        var nextPagetype = ImportCustomConflictResolutionPage;
        _this5.props.setNextPage(nextPagetype, {
          settingsInfo: _this5.props.settingsInfo,
          "import": _this5.props["import"],
          fileHandle: _this5.props.fileHandle,
          password: _this5.props.password,
          isFlow: _this5.props.isFlow,
          hasWorkspaceTab: hasWorkspaceTab,
          hasSettingsTab: hasSettingsTab,
          hasEDITab: hasEDITab
        });
      } else {
        _this5.props["import"](_this5.props.fileHandle, _this5.props.password, settingsInfo, _this5);
      }
    });
    migration_defineProperty(_this5, "handleResolutionSelect", function (event) {
      var value = event.target.value;
      _this5.setState({
        resolution: value
      });
      _this5.props.setIsFinalPage(value != "manual");
    });
    _this5.props.setTitle("Resolve Import Conflicts");
    _this5.props.onNextPage(_this5.handleNextPage);
    _this5.state = {
      resolution: "skip"
    };
    _this5.props.setIsFinalPage(true);
    _this5.props.setHelpLink("help.rst#Importing-Exporting-Flows");
    var conflictsNum = 0;
    if (_this5.props.settingsInfo.workspaces) {
      Object.values(_this5.props.settingsInfo.workspaces).forEach(function (workspaceInfo) {
        if (workspaceInfo.connectors) {
          Object.values(workspaceInfo.connectors).forEach(function (connectorInfo) {
            if (connectorInfo.action != "ignore" && connectorInfo.existing) {
              conflictsNum++;
            }
          });
        }
        if (workspaceInfo.apis) {
          Object.values(workspaceInfo.apis).forEach(function (apiInfo) {
            if (apiInfo.action != "ignore" && apiInfo.existing) {
              conflictsNum++;
            }
          });
        }
      });
    }
    if (_this5.props.settingsInfo.profiles) {
      Object.values(_this5.props.settingsInfo.profiles).forEach(function (profileInfo) {
        if (profileInfo.action != "ignore") {
          conflictsNum++;
        }
      });
    }
    if (_this5.props.settingsInfo.settings) {
      Object.values(_this5.props.settingsInfo.settings).forEach(function (settingInfo) {
        if (settingInfo.action != "ignore") {
          conflictsNum++;
        }
      });
    }
    if (_this5.props.settingsInfo.users) {
      Object.values(_this5.props.settingsInfo.users).forEach(function (userInfo) {
        if (userInfo.action != "ignore" && userInfo.existing) {
          conflictsNum++;
        }
      });
    }
    if (_this5.props.settingsInfo.roles) {
      Object.values(_this5.props.settingsInfo.roles).forEach(function (roleInfo) {
        if (roleInfo.action != "ignore" && roleInfo.existing) {
          conflictsNum++;
        }
      });
    }
    if (_this5.props.settingsInfo.certificates) {
      Object.values(_this5.props.settingsInfo.certificates).forEach(function (certificateInfo) {
        if (certificateInfo.action != "ignore" && certificateInfo.existing) {
          conflictsNum++;
        }
      });
    }
    if (_this5.props.settingsInfo.connections) {
      Object.values(_this5.props.settingsInfo.connections).forEach(function (connInfo) {
        if (connInfo.action != "ignore" && connInfo.existing) {
          conflictsNum++;
        }
      });
    }
    if (_this5.props.settingsInfo.vaults) {
      Object.values(_this5.props.settingsInfo.vaults).forEach(function (vaultInfo) {
        if (vaultInfo.action != "ignore" && vaultInfo.existing) {
          conflictsNum++;
        }
      });
    }
    if (_this5.props.settingsInfo.reports) {
      Object.values(_this5.props.settingsInfo.reports).forEach(function (reportInfo) {
        if (reportInfo.action != "ignore" && reportInfo.existing) {
          conflictsNum++;
        }
      });
    }
    if (_this5.props.settingsInfo.partners) {
      Object.values(_this5.props.settingsInfo.partners).forEach(function (partnerInfo) {
        if (partnerInfo.action != "ignore" && partnerInfo.existing) {
          conflictsNum++;
        }
      });
    }
    if (_this5.props.settingsInfo.documents) {
      Object.values(_this5.props.settingsInfo.documents).forEach(function (documentInfo) {
        if (documentInfo.action != "ignore" && documentInfo.existing) {
          conflictsNum++;
        }
      });
    }
    _this5.conflictsNum = conflictsNum;
    return _this5;
  }
  migration_inherits(ImportConflictResolutionPage, _React$Component4);
  return migration_createClass(ImportConflictResolutionPage, [{
    key: "render",
    value: function render() {
      var warning = null;
      if (this.state.resolution == "skip") {
        warning = "Not importing conflicts skips any workspaces and settings that conflict with existing items. This might cause any imported flows to no longer function.";
      } else if (this.state.resolution == "replace") {
        warning = "Replacing all conflicts overrides existing workspaces and settings with imported items. This might change some of your settings and cause existing flows to no longer function.";
      }
      return /*#__PURE__*/react.createElement("form", {
        className: "form-horizontal form-settings",
        role: "form",
        autoComplete: "off",
        noValidate: "novalidate"
      }, /*#__PURE__*/react.createElement("p", null, "There are [#] conflicts with this import.".replace("#", this.conflictsNum)), /*#__PURE__*/react.createElement("div", {
        className: "form-group row mb-3"
      }, /*#__PURE__*/react.createElement("label", {
        className: "col-md-5 control-label col-form-label"
      }, "Conflict Resolution"), /*#__PURE__*/react.createElement("div", {
        className: "col-md-6"
      }, /*#__PURE__*/react.createElement("div", {
        className: "radio pt-2"
      }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
        type: "radio",
        className: "form-check-input",
        name: "conflict",
        onChange: this.handleResolutionSelect,
        checked: this.state.resolution == "skip",
        defaultValue: "skip"
      }), " ", "Don't import any conflicts")), /*#__PURE__*/react.createElement("div", {
        className: "radio pt-2"
      }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
        type: "radio",
        className: "form-check-input",
        name: "conflict",
        onChange: this.handleResolutionSelect,
        checked: this.state.resolution == "replace",
        defaultValue: "replace"
      }), " ", "Replace all conflicts")), /*#__PURE__*/react.createElement("div", {
        className: "radio pt-2"
      }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
        type: "radio",
        className: "form-check-input",
        name: "conflict",
        onChange: this.handleResolutionSelect,
        checked: this.state.resolution == "manual",
        defaultValue: "manual"
      }), " ", "Manually resolve conflicts")))), warning && /*#__PURE__*/react.createElement("div", {
        className: "alert alert-warning",
        role: "alert"
      }, warning));
    }
  }]);
}(react.Component);
var ImportCustomConflictResolutionPage = /*#__PURE__*/function (_React$Component5) {
  function ImportCustomConflictResolutionPage(props) {
    var _this6;
    migration_classCallCheck(this, ImportCustomConflictResolutionPage);
    _this6 = migration_callSuper(this, ImportCustomConflictResolutionPage, [props]);
    migration_defineProperty(_this6, "handleNextPage", function () {
      _this6.props["import"](_this6.props.fileHandle, _this6.props.password, _this6.state.settingsInfo, _this6);
    });
    migration_defineProperty(_this6, "handleWorkspacesClicked", function () {
      _this6.setState({
        showingTab: "workspaces"
      });
    });
    migration_defineProperty(_this6, "handleSettingsClicked", function () {
      _this6.setState({
        showingTab: "settings"
      });
    });
    migration_defineProperty(_this6, "handleEDIClicked", function () {
      _this6.setState({
        showingTab: "edi"
      });
    });
    migration_defineProperty(_this6, "handleWorkspacesTabActionChange", function (action) {
      var settingsInfo = utils/* ImportUtils */.P.Clone(_this6.state.settingsInfo);
      if (action == "skip" || action == "replace") {
        _UpdateWorkspacesTabAction._.call(ImportCustomConflictResolutionPage, settingsInfo, action);
      }
      _this6.setState({
        workspacesTabAction: action,
        settingsInfo: settingsInfo
      });
    });
    migration_defineProperty(_this6, "handleSettingsTabActionChange", function (action) {
      var settingsInfo = utils/* ImportUtils */.P.Clone(_this6.state.settingsInfo);
      if (action == "skip" || action == "replace") {
        _UpdateSettingsTabAction._.call(ImportCustomConflictResolutionPage, settingsInfo, action);
      }
      _this6.setState({
        settingsTabAction: action,
        settingsInfo: settingsInfo
      });
    });
    migration_defineProperty(_this6, "handleEDITabActionChange", function (action) {
      var settingsInfo = utils/* ImportUtils */.P.Clone(_this6.state.settingsInfo);
      if (action == "skip" || action == "replace") {
        _UpdateEDITabAction._.call(ImportCustomConflictResolutionPage, settingsInfo, action);
      }
      _this6.setState({
        ediTabAction: action,
        settingsInfo: settingsInfo
      });
    });
    migration_defineProperty(_this6, "handleWorkspaceActionChange", function (workspaceId, action) {
      var settingsInfo = utils/* ImportUtils */.P.Clone(_this6.state.settingsInfo);
      if (action == "skip" || action == "replace") {
        _UpdateWorkspaceAction._.call(ImportCustomConflictResolutionPage, settingsInfo, workspaceId, action);
      }
      _this6.setState({
        workspacesTabAction: _GetWorkspacesTabAction._.call(ImportCustomConflictResolutionPage, settingsInfo),
        settingsInfo: settingsInfo
      });
    });
    migration_defineProperty(_this6, "handleAPIActionChange", function (workspaceId, apiKey, action) {
      var settingsInfo = utils/* ImportUtils */.P.Clone(_this6.state.settingsInfo);
      if (action == "skip" || action == "replace") {
        _UpdateAPIAction._.call(ImportCustomConflictResolutionPage, settingsInfo, workspaceId, apiKey, action);
      }
      _this6.setState({
        workspacesTabAction: _GetWorkspacesTabAction._.call(ImportCustomConflictResolutionPage, settingsInfo),
        settingsInfo: settingsInfo
      });
    });
    migration_defineProperty(_this6, "handleConnectorActionChange", function (workspaceId, connectorId, action) {
      var settingsInfo = utils/* ImportUtils */.P.Clone(_this6.state.settingsInfo);
      if (action == "skip" || action == "replace") {
        _UpdateConnectorAction._.call(ImportCustomConflictResolutionPage, settingsInfo, workspaceId, connectorId, action);
      }
      _this6.setState({
        workspacesTabAction: _GetWorkspacesTabAction._.call(ImportCustomConflictResolutionPage, settingsInfo),
        settingsInfo: settingsInfo
      });
    });
    migration_defineProperty(_this6, "handleSectionActionChange", function (section, action) {
      var settingsInfo = utils/* ImportUtils */.P.Clone(_this6.state.settingsInfo);
      if (action == "skip" || action == "replace") {
        _UpdateSectionAction._.call(ImportCustomConflictResolutionPage, settingsInfo, section, action);
      }
      _this6.setState({
        settingsTabAction: _GetSettingsTabAction._.call(ImportCustomConflictResolutionPage, settingsInfo),
        settingsInfo: settingsInfo
      });
    });
    migration_defineProperty(_this6, "handleNameActionChange", function (section, name, action) {
      var settingsInfo = utils/* ImportUtils */.P.Clone(_this6.state.settingsInfo);
      if (action == "skip" || action == "replace") {
        _UpdateNameAction._.call(ImportCustomConflictResolutionPage, settingsInfo, section, name, action);
      }
      _this6.setState({
        settingsTabAction: _GetSettingsTabAction._.call(ImportCustomConflictResolutionPage, settingsInfo),
        settingsInfo: settingsInfo
      });
    });
    migration_defineProperty(_this6, "handlePartnerActionChange", function (partnerId, action) {
      var settingsInfo = utils/* ImportUtils */.P.Clone(_this6.state.settingsInfo);
      if (action == "skip" || action == "replace") {
        _UpdatePartnerAction._.call(ImportCustomConflictResolutionPage, settingsInfo, partnerId, action);
      }
      _this6.setState({
        ediTabAction: _GetEDITabAction._.call(ImportCustomConflictResolutionPage, settingsInfo),
        settingsInfo: settingsInfo
      });
    });
    migration_defineProperty(_this6, "handleDocumentActionChange", function (documentId, action) {
      var settingsInfo = utils/* ImportUtils */.P.Clone(_this6.state.settingsInfo);
      if (action == "skip" || action == "replace") {
        _UpdateDocumentAction._.call(ImportCustomConflictResolutionPage, settingsInfo, documentId, action);
      }
      _this6.setState({
        ediTabAction: _GetEDITabAction._.call(ImportCustomConflictResolutionPage, settingsInfo),
        settingsInfo: settingsInfo
      });
    });
    _this6.state = {
      showingTab: _this6.props.hasWorkspaceTab ? "workspaces" : _this6.props.hasEDITab ? "edi" : _this6.props.hasSettingsTab ? "settings" : "",
      workspacesTabAction: _GetWorkspacesTabAction._.call(ImportCustomConflictResolutionPage, props.settingsInfo),
      settingsTabAction: _GetSettingsTabAction._.call(ImportCustomConflictResolutionPage, props.settingsInfo),
      ediTabAction: _GetEDITabAction._.call(ImportCustomConflictResolutionPage, props.settingsInfo),
      settingsInfo: _this6.props.settingsInfo
    };
    _this6.props.setPageWidth("large");
    _this6.props.setTitle(_this6.props.isFlow ? _this6.props.isFlowConnectors ? "Review Workspace Import Conflicts" : "Review Flow Import Conflicts" : "Review Application Settings Import Conflicts");
    _this6.props.setIsFinalPage(true);
    _this6.props.onNextPage(_this6.handleNextPage);
    _this6.props.setHelpLink("help.rst#Importing-Exporting-Flows");
    return _this6;
  }
  migration_inherits(ImportCustomConflictResolutionPage, _React$Component5);
  return migration_createClass(ImportCustomConflictResolutionPage, [{
    key: "render",
    value: function render() {
      var showingTab = null;
      var dropdownValue = null;
      var dropdownChangeHandler = null;
      switch (this.state.showingTab) {
        case "workspaces":
          if (this.props.hasWorkspaceTab) {
            showingTab = /*#__PURE__*/react.createElement(MigrationTabs/* ImportCustomConflictResolutionWorkspacesTab */.GY, {
              workspacesInfo: this.state.settingsInfo.workspaces,
              onWorkspaceActionChange: this.handleWorkspaceActionChange,
              onConnectorActionChange: this.handleConnectorActionChange,
              onAPIActionChange: this.handleAPIActionChange,
              isFlow: this.props.isFlow
            });
            dropdownValue = this.state.workspacesTabAction;
            dropdownChangeHandler = this.handleWorkspacesTabActionChange;
          }
          break;
        case "edi":
          if (this.props.hasEDITab) {
            showingTab = /*#__PURE__*/react.createElement(MigrationTabs/* ImportCustomConflictResolutionEDITab */.as, {
              settingsInfo: this.state.settingsInfo,
              onPartnerActionChange: this.handlePartnerActionChange,
              onDocumentActionChange: this.handleDocumentActionChange
            });
            dropdownValue = this.state.ediTabAction;
            dropdownChangeHandler = this.handleEDITabActionChange;
          }
          break;
        case "settings":
          if (this.props.hasSettingsTab) {
            showingTab = /*#__PURE__*/react.createElement(MigrationTabs/* ImportCustomConflictResolutionSettingsTab */.dK, {
              settingsInfo: this.state.settingsInfo,
              onSectionActionChange: this.handleSectionActionChange,
              onNameActionChange: this.handleNameActionChange
            });
            dropdownValue = this.state.settingsTabAction;
            dropdownChangeHandler = this.handleSettingsTabActionChange;
          }
          break;
        default:
          break;
      }
      return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
        className: "migration-nav-bar"
      }, /*#__PURE__*/react.createElement("ul", {
        className: "nav nav-tabs tab-underline",
        role: "tablist"
      }, this.props.hasWorkspaceTab && /*#__PURE__*/react.createElement("li", {
        className: "nav-item",
        role: "presentation"
      }, /*#__PURE__*/react.createElement("button", {
        className: "nav-link " + (this.state.showingTab == "workspaces" ? "active" : ""),
        onClick: this.handleWorkspacesClicked
      }, "Workspaces")), this.props.hasEDITab && /*#__PURE__*/react.createElement("li", {
        className: "nav-item",
        role: "presentation"
      }, /*#__PURE__*/react.createElement("button", {
        className: "nav-link " + (this.state.showingTab == "edi" ? "active" : ""),
        onClick: this.handleEDIClicked
      }, "EDI")), this.props.hasSettingsTab && /*#__PURE__*/react.createElement("li", {
        className: "nav-item",
        role: "presentation"
      }, /*#__PURE__*/react.createElement("button", {
        className: "nav-link " + (this.state.showingTab == "settings" ? "active" : ""),
        onClick: this.handleSettingsClicked
      }, "Settings"))), /*#__PURE__*/react.createElement(utils/* ImportDropdown */.H, {
        options: _DropdownOptions._,
        style: _DropdownStyle._,
        value: dropdownValue,
        onChange: dropdownChangeHandler
      })), /*#__PURE__*/react.createElement("div", {
        className: "tab-content"
      }, /*#__PURE__*/react.createElement("div", {
        className: "tab-pane active show",
        role: "tabpanel"
      }, showingTab)));
    }
  }]);
}(react.Component);
var _DropdownOptions = {
  _: [{
    "value": "skip",
    "name": "Don't Import"
  }, {
    "value": "replace",
    "name": "Replace"
  }]
};
var _DropdownStyle = {
  _: {
    "marginTop": "-30px",
    "float": "right"
  }
};
var _CustomActionText = {
  _: "Custom"
};
var _GetWorkspacesTabAction = {
  _: function _(settingsInfo) {
    var action;
    if (settingsInfo.workspaces) {
      for (var _i14 = 0, _Object$values14 = Object.values(settingsInfo.workspaces); _i14 < _Object$values14.length; _i14++) {
        var workspaceInfo = _Object$values14[_i14];
        if (workspaceInfo.connectors && action != "custom") {
          for (var _i15 = 0, _Object$values15 = Object.values(workspaceInfo.connectors); _i15 < _Object$values15.length; _i15++) {
            var connectorInfo = _Object$values15[_i15];
            if (connectorInfo.action != "ignore") {
              var _connectorInfo$action;
              if (action === undefined) {
                action = connectorInfo.action;
              } else if (action != ((_connectorInfo$action = connectorInfo.action) !== null && _connectorInfo$action !== void 0 ? _connectorInfo$action : "skip")) {
                action = _CustomActionText._;
                break;
              }
            }
          }
        }
        if (workspaceInfo.apis && action != "custom") {
          for (var _i16 = 0, _Object$values16 = Object.values(workspaceInfo.apis); _i16 < _Object$values16.length; _i16++) {
            var apiInfo = _Object$values16[_i16];
            if (apiInfo.action != "ignore") {
              var _apiInfo$action;
              if (action === undefined) {
                action = apiInfo.action;
              } else if (action != ((_apiInfo$action = apiInfo.action) !== null && _apiInfo$action !== void 0 ? _apiInfo$action : "skip")) {
                action = _CustomActionText._;
                break;
              }
            }
          }
        }
      }
    }
    return action !== null && action !== void 0 ? action : "skip";
  }
};
var _GetSettingsTabAction = {
  _: function _(settingsInfo) {
    var action;
    if (settingsInfo.profiles && action != "custom") {
      for (var _i17 = 0, _Object$values17 = Object.values(settingsInfo.profiles); _i17 < _Object$values17.length; _i17++) {
        var profileInfo = _Object$values17[_i17];
        if (profileInfo.action != "ignore") {
          var _profileInfo$action;
          if (action === undefined) {
            action = profileInfo.action;
          } else if (action != ((_profileInfo$action = profileInfo.action) !== null && _profileInfo$action !== void 0 ? _profileInfo$action : "skip")) {
            action = _CustomActionText._;
            break;
          }
        }
      }
    }
    if (settingsInfo.settings && action != "custom") {
      for (var _i18 = 0, _Object$values18 = Object.values(settingsInfo.settings); _i18 < _Object$values18.length; _i18++) {
        var settingInfo = _Object$values18[_i18];
        if (settingInfo.action != "ignore") {
          var _settingInfo$action;
          if (action === undefined) {
            action = settingInfo.action;
          } else if (action != ((_settingInfo$action = settingInfo.action) !== null && _settingInfo$action !== void 0 ? _settingInfo$action : "skip")) {
            action = _CustomActionText._;
            break;
          }
        }
      }
    }
    if (settingsInfo.users && action != "custom") {
      for (var _i19 = 0, _Object$values19 = Object.values(settingsInfo.users); _i19 < _Object$values19.length; _i19++) {
        var userInfo = _Object$values19[_i19];
        if (userInfo.action != "ignore") {
          var _userInfo$action;
          if (action === undefined) {
            action = userInfo.action;
          } else if (action != ((_userInfo$action = userInfo.action) !== null && _userInfo$action !== void 0 ? _userInfo$action : "skip")) {
            action = _CustomActionText._;
            break;
          }
        }
      }
    }
    if (settingsInfo.roles && action != "custom") {
      for (var _i20 = 0, _Object$values20 = Object.values(settingsInfo.roles); _i20 < _Object$values20.length; _i20++) {
        var roleInfo = _Object$values20[_i20];
        if (roleInfo.action != "ignore") {
          var _roleInfo$action;
          if (action === undefined) {
            action = roleInfo.action;
          } else if (action != ((_roleInfo$action = roleInfo.action) !== null && _roleInfo$action !== void 0 ? _roleInfo$action : "skip")) {
            action = _CustomActionText._;
            break;
          }
        }
      }
    }
    if (settingsInfo.certificates && action != "custom") {
      for (var _i21 = 0, _Object$values21 = Object.values(settingsInfo.certificates); _i21 < _Object$values21.length; _i21++) {
        var certificateInfo = _Object$values21[_i21];
        if (certificateInfo.action != "ignore") {
          var _certificateInfo$acti;
          if (action === undefined) {
            action = certificateInfo.action;
          } else if (action != ((_certificateInfo$acti = certificateInfo.action) !== null && _certificateInfo$acti !== void 0 ? _certificateInfo$acti : "skip")) {
            action = _CustomActionText._;
            break;
          }
        }
      }
    }
    if (settingsInfo.connections && action != "custom") {
      for (var _i22 = 0, _Object$values22 = Object.values(settingsInfo.connections); _i22 < _Object$values22.length; _i22++) {
        var connInfo = _Object$values22[_i22];
        if (connInfo.action != "ignore") {
          var _connInfo$action;
          if (action === undefined) {
            action = connInfo.action;
          } else if (action != ((_connInfo$action = connInfo.action) !== null && _connInfo$action !== void 0 ? _connInfo$action : "skip")) {
            action = _CustomActionText._;
            break;
          }
        }
      }
    }
    if (settingsInfo.vaults && action != "custom") {
      for (var _i23 = 0, _Object$values23 = Object.values(settingsInfo.vaults); _i23 < _Object$values23.length; _i23++) {
        var vaultInfo = _Object$values23[_i23];
        if (vaultInfo.action != "ignore") {
          var _vaultInfo$action;
          if (action === undefined) {
            action = vaultInfo.action;
          } else if (action != ((_vaultInfo$action = vaultInfo.action) !== null && _vaultInfo$action !== void 0 ? _vaultInfo$action : "skip")) {
            action = _CustomActionText._;
            break;
          }
        }
      }
    }
    if (settingsInfo.reports && action != "custom") {
      for (var _i24 = 0, _Object$values24 = Object.values(settingsInfo.reports); _i24 < _Object$values24.length; _i24++) {
        var reportInfo = _Object$values24[_i24];
        if (reportInfo.action != "ignore") {
          var _reportInfo$action;
          if (action === undefined) {
            action = reportInfo.action;
          } else if (action != ((_reportInfo$action = reportInfo.action) !== null && _reportInfo$action !== void 0 ? _reportInfo$action : "skip")) {
            action = _CustomActionText._;
            break;
          }
        }
      }
    }
    return action !== null && action !== void 0 ? action : "skip";
  }
};
var _GetEDITabAction = {
  _: function _(settingsInfo) {
    var action;
    if (settingsInfo.partners && action != "custom") {
      for (var _i25 = 0, _Object$values25 = Object.values(settingsInfo.partners); _i25 < _Object$values25.length; _i25++) {
        var partnerInfo = _Object$values25[_i25];
        if (partnerInfo.action != "ignore") {
          var _partnerInfo$action;
          if (action === undefined) {
            action = partnerInfo.action;
          } else if (action != ((_partnerInfo$action = partnerInfo.action) !== null && _partnerInfo$action !== void 0 ? _partnerInfo$action : "skip")) {
            action = _CustomActionText._;
            break;
          }
        }
      }
    }
    if (settingsInfo.documents && action != "custom") {
      for (var _i26 = 0, _Object$values26 = Object.values(settingsInfo.documents); _i26 < _Object$values26.length; _i26++) {
        var documentInfo = _Object$values26[_i26];
        if (documentInfo.action != "ignore") {
          var _documentInfo$action;
          if (action === undefined) {
            action = documentInfo.action;
          } else if (action != ((_documentInfo$action = documentInfo.action) !== null && _documentInfo$action !== void 0 ? _documentInfo$action : "skip")) {
            action = _CustomActionText._;
            break;
          }
        }
      }
    }
    return action !== null && action !== void 0 ? action : "skip";
  }
};
var _UpdateWorkspacesTabAction = {
  _: function _(settingsInfo, action) {
    if (settingsInfo.workspaces) {
      var updateWorkspaceAction = _UpdateWorkspaceAction._;
      Object.keys(settingsInfo.workspaces).forEach(function (key) {
        updateWorkspaceAction(settingsInfo, key, action);
      });
    }
  }
};
var _UpdateSettingsTabAction = {
  _: function _(settingsInfo, action) {
    if (settingsInfo.profiles) {
      var updateSectionAction = _UpdateSectionAction._;
      updateSectionAction(settingsInfo, "profiles", action);
    }
    if (settingsInfo.settings) {
      var updateSettingAction = _UpdateNameAction._;
      Object.keys(settingsInfo.settings).forEach(function (key) {
        updateSettingAction(settingsInfo, "settings", key, action);
      });
    }
    if (settingsInfo.users) {
      var _updateSectionAction = _UpdateSectionAction._;
      _updateSectionAction(settingsInfo, "users", action);
    }
    if (settingsInfo.roles) {
      var _updateSectionAction2 = _UpdateSectionAction._;
      _updateSectionAction2(settingsInfo, "roles", action);
    }
    if (settingsInfo.certificates) {
      var _updateSectionAction3 = _UpdateSectionAction._;
      _updateSectionAction3(settingsInfo, "certificates", action);
    }
    if (settingsInfo.connections) {
      var _updateSectionAction4 = _UpdateSectionAction._;
      _updateSectionAction4(settingsInfo, "connections", action);
    }
    if (settingsInfo.vaults) {
      var _updateSectionAction5 = _UpdateSectionAction._;
      _updateSectionAction5(settingsInfo, "vaults", action);
    }
    if (settingsInfo.reports) {
      var _updateSectionAction6 = _UpdateSectionAction._;
      _updateSectionAction6(settingsInfo, "reports", action);
    }
  }
};
var _UpdateWorkspaceAction = {
  _: function _(settingsInfo, workspaceId, action) {
    if (settingsInfo.workspaces) {
      var workspaceInfo = settingsInfo.workspaces[workspaceId];
      var updateConnectorAction = _UpdateConnectorAction._;
      var updateAPIAction = _UpdateAPIAction._;
      if (workspaceInfo) {
        if (workspaceInfo.connectors) {
          Object.keys(workspaceInfo.connectors).forEach(function (connetorId) {
            updateConnectorAction(settingsInfo, workspaceId, connetorId, action);
          });
        }
        if (workspaceInfo.flow) {
          if (workspaceInfo.flow.views) {
            Object.values(workspaceInfo.flow.views).forEach(function (viewInfo) {
              viewInfo.action = action;
            });
          }
          if (workspaceInfo.flow.apis) {
            Object.keys(workspaceInfo.flow.apis).forEach(function (apiKey) {
              updateAPIAction(settingsInfo, workspaceId, apiKey, action);
            });
          }
        }
      }
    }
  }
};
var _UpdateAPIAction = {
  _: function _(settingsInfo, workspaceId, apiKey, action) {
    if (settingsInfo.workspaces) {
      var _workspaceInfo$flow5;
      var workspaceInfo = settingsInfo.workspaces[workspaceId];
      if (workspaceInfo !== null && workspaceInfo !== void 0 && (_workspaceInfo$flow5 = workspaceInfo.flow) !== null && _workspaceInfo$flow5 !== void 0 && _workspaceInfo$flow5.apis) {
        var apiInfo = workspaceInfo.flow.apis[apiKey.toLowerCase()];
        if (apiInfo) {
          apiInfo.action = action;
        }
      }
      if (workspaceInfo.apis) {
        var apiElement = workspaceInfo.apis[apiKey.toLowerCase()];
        if (apiElement) {
          apiElement.action = action;
        }
      }
    }
  }
};
var _UpdateConnectorAction = {
  _: function _(settingsInfo, workspaceId, connectorId, action) {
    if (settingsInfo.workspaces) {
      var workspaceInfo = settingsInfo.workspaces[workspaceId];
      if (workspaceInfo) {
        if (workspaceInfo.connectors) {
          var connectorInfo = workspaceInfo.connectors[connectorId];
          if (connectorInfo) {
            connectorInfo.action = action;
          }
        }
        if (workspaceInfo.flow) {
          if (workspaceInfo.flow.elements) {
            var elementInfo = workspaceInfo.flow.elements[connectorId];
            if (elementInfo) {
              elementInfo.action = action;
            }
          }
        }
      }
    }
  }
};
var _UpdateSectionAction = {
  _: function _(settingsInfo, section, action) {
    if (settingsInfo[section]) {
      var updateNameAction = _UpdateNameAction._;
      Object.keys(settingsInfo[section]).forEach(function (key) {
        updateNameAction(settingsInfo, section, key, action);
      });
    }
  }
};
var _UpdateNameAction = {
  _: function _(settingsInfo, section, key, action) {
    if (settingsInfo[section]) {
      var nameInfo = settingsInfo[section][key];
      if (nameInfo) {
        nameInfo.action = action;
      }
    }
  }
};
var _UpdateEDITabAction = {
  _: function _(settingsInfo, action) {
    if (settingsInfo.partners) {
      var updatePartnerAction = _UpdatePartnerAction._;
      Object.keys(settingsInfo.partners).forEach(function (partnerId) {
        if (settingsInfo.partners[partnerId].action != "ignore") {
          updatePartnerAction(settingsInfo, partnerId, action);
        }
      });
    }
    if (settingsInfo.documents) {
      var updateDocumentAction = _UpdateDocumentAction._;
      Object.keys(settingsInfo.documents).forEach(function (documentId) {
        if (settingsInfo.documents[documentId].action != "ignore") {
          updateDocumentAction(settingsInfo, documentId, action);
        }
      });
    }
  }
};
var _UpdatePartnerAction = {
  _: function _(settingsInfo, partnerId, action) {
    var _settingsInfo$partner;
    if (settingsInfo !== null && settingsInfo !== void 0 && (_settingsInfo$partner = settingsInfo.partners) !== null && _settingsInfo$partner !== void 0 && _settingsInfo$partner[partnerId]) {
      settingsInfo.partners[partnerId].action = action;
    }
  }
};
var _UpdateDocumentAction = {
  _: function _(settingsInfo, documentId, action) {
    var _settingsInfo$documen;
    if (settingsInfo !== null && settingsInfo !== void 0 && (_settingsInfo$documen = settingsInfo.documents) !== null && _settingsInfo$documen !== void 0 && _settingsInfo$documen[documentId]) {
      settingsInfo.documents[documentId].action = action;
    }
  }
};
var _import = /*#__PURE__*/new WeakMap();
var ImportModal = /*#__PURE__*/function (_React$Component6) {
  function ImportModal(props) {
    var _this7;
    migration_classCallCheck(this, ImportModal);
    _this7 = migration_callSuper(this, ImportModal, [props]);
    migration_defineProperty(_this7, "handleError", function (errorMessage) {
      _this7.setState({
        errorMessage: errorMessage
      });
    });
    migration_classPrivateFieldInitSpec(_this7, _import, function (handle, password, settingsInfo, page) {
      var _window5, _settingsInfo$element, _window$rsb$workflow$, _window6;
      page === null || page === void 0 || page.props.setLoadingText("Importing...");
      page === null || page === void 0 || page.props.setError(null);
      var params = new URLSearchParams();
      var currentWorkspaceId = (_window5 = window) === null || _window5 === void 0 || (_window5 = _window5.rsb) === null || _window5 === void 0 || (_window5 = _window5.workflow) === null || _window5 === void 0 ? void 0 : _window5.currentWorkspaceId;
      if (_this7.props.externalRef) {
        currentWorkspaceId = _this7.props.externalRef.current.workspaceId;
      }
      if (_this7.props.isFlow) {
        params.append("WorkspaceId", currentWorkspaceId);
      }
      if (password && password != null) {
        params.append("Password", password);
      }
      var rect = ((_settingsInfo$element = settingsInfo.elementsboundingrect) !== null && _settingsInfo$element !== void 0 ? _settingsInfo$element : "").split(/,/g);
      var position = (_window$rsb$workflow$ = (_window6 = window) === null || _window6 === void 0 || (_window6 = _window6.rsb) === null || _window6 === void 0 || (_window6 = _window6.workflow) === null || _window6 === void 0 ? void 0 : _window6.importPosition) !== null && _window$rsb$workflow$ !== void 0 ? _window$rsb$workflow$ : {};
      if (!!position && !!rect && rect.length == 4 && !Number.isNaN(parseFloat(position.left)) && !Number.isNaN(parseFloat(position.top)) && !Number.isNaN(parseFloat(rect[0])) && !Number.isNaN(parseFloat(rect[1]))) {
        params.append("OffsetX", parseFloat(rect[0]) - parseFloat(position.left));
        params.append("OffsetY", parseFloat(rect[1]) - parseFloat(position.top));
      }
      params.append("Handle", handle);
      params.append("SettingsInfo", JSON.stringify(settingsInfo));
      axios/* default */.A.post("src/standard/migrationImport.rsb?@json", params).then(function (response) {
        if (page) {
          page.props.setLoadingText(null);
          var data = response.data;
          var errMsg = (0,components_utils/* getResultErrorMessage */.hz)(data.items);
          if (errMsg) {
            page.props.setError(errMsg);
          } else {
            page.props.close();
            window.location.reload();
          }
        }
      });
    });
    _this7.state = {
      errorMessage: null
    };
    return _this7;
  }
  migration_inherits(ImportModal, _React$Component6);
  return migration_createClass(ImportModal, [{
    key: "render",
    value: function render() {
      var _this$props$initialPa;
      var modalId = this.props.id ? this.props.id : "migrationImportModal";
      return /*#__PURE__*/react.createElement(ProgressModal, {
        id: modalId,
        externalRef: this.props.externalRef,
        initialPageType: (_this$props$initialPa = this.props.initialPageType) !== null && _this$props$initialPa !== void 0 ? _this$props$initialPa : ImportUploadPage,
        initialPageProps: {
          "import": migration_classPrivateFieldGet(_import, this),
          isFlow: this.props.isFlow,
          isFlowConnectors: this.props.isFlowConnectors,
          externalRef: this.props.externalRef
        },
        finishButtonText: "Import",
        finishButtonIcon: "fas fa-file-import"
      });
    }
  }]);
}(react.Component);
var _customExportLabel = /*#__PURE__*/new WeakMap();
var ExportInitialPage = /*#__PURE__*/function (_React$Component7) {
  function ExportInitialPage(props) {
    var _this8;
    migration_classCallCheck(this, ExportInitialPage);
    _this8 = migration_callSuper(this, ExportInitialPage, [props]);
    migration_classPrivateFieldInitSpec(_this8, _customExportLabel, null);
    migration_defineProperty(_this8, "handleNextPage", function () {
      var params = new URLSearchParams();
      var selectedConnectors = [];
      var selectedGroups = [];
      if (_this8.props.externalRef) {
        if (_this8.props.isFlow && _this8.props.isFlowConnectors) {
          var _this8$props$external, _this8$props$external2;
          selectedGroups = (_this8$props$external = _this8.props.externalRef.current) === null || _this8$props$external === void 0 || (_this8$props$external = _this8$props$external.operationalGroups) === null || _this8$props$external === void 0 ? void 0 : _this8$props$external.map(function (group) {
            return group.toLowerCase();
          });
          if (((_this8$props$external2 = _this8.props.externalRef.current) === null || _this8$props$external2 === void 0 || (_this8$props$external2 = _this8$props$external2.operationalConnectorIds) === null || _this8$props$external2 === void 0 ? void 0 : _this8$props$external2.length) > 0) {
            var _this8$props$external3;
            selectedConnectors = (_this8$props$external3 = _this8.props.externalRef.current) === null || _this8$props$external3 === void 0 ? void 0 : _this8$props$external3.operationalConnectorIds;
            var currentWorkspaceId = _this8.props.externalRef.current.operationalWorkspaceIds[0];
            var ids = selectedConnectors.map(function (elem) {
              return currentWorkspaceId + ":" + elem;
            }).join(";");
            params.append("ConnectorIds", ids);
          }
        } else {
          var _this8$props$external4;
          if (((_this8$props$external4 = _this8.props.externalRef.current) === null || _this8$props$external4 === void 0 || (_this8$props$external4 = _this8$props$external4.operationalWorkspaceIds) === null || _this8$props$external4 === void 0 ? void 0 : _this8$props$external4.length) === 1) {
            params.append("ConnectorIds", _this8.props.externalRef.current.operationalWorkspaceIds[0] + ":*");
          } else {
            var _this8$props$external5;
            var _ids = (_this8$props$external5 = _this8.props.externalRef.current) === null || _this8$props$external5 === void 0 || (_this8$props$external5 = _this8$props$external5.operationalWorkspaceIds) === null || _this8$props$external5 === void 0 ? void 0 : _this8$props$external5.join(":*;");
            params.append("ConnectorIds", _ids + ":*");
          }
        }
      } else {
        var _window$rsb$workflow$2, _window7;
        var _currentWorkspaceId = (_window$rsb$workflow$2 = (_window7 = window) === null || _window7 === void 0 || (_window7 = _window7.rsb) === null || _window7 === void 0 || (_window7 = _window7.workflow) === null || _window7 === void 0 ? void 0 : _window7.currentWorkspaceId) !== null && _window$rsb$workflow$2 !== void 0 ? _window$rsb$workflow$2 : "";
        var initializeConnectorIds = "";
        if (_this8.props.isFlow && _currentWorkspaceId) {
          if (_this8.props.isFlowConnectors) {
            var _window8, _window9;
            selectedGroups = (_window8 = window) === null || _window8 === void 0 || (_window8 = _window8.rsb) === null || _window8 === void 0 || (_window8 = _window8.workflow) === null || _window8 === void 0 ? void 0 : _window8.selectedGroups;
            if ((_window9 = window) !== null && _window9 !== void 0 && (_window9 = _window9.rsb) !== null && _window9 !== void 0 && (_window9 = _window9.workflow) !== null && _window9 !== void 0 && _window9.selectedConnectors) {
              selectedConnectors = window.rsb.workflow.selectedConnectors.split(";");
              initializeConnectorIds = selectedConnectors.map(function (elem) {
                return _currentWorkspaceId + ":" + elem;
              }).join(";");
            }
          } else {
            initializeConnectorIds = _currentWorkspaceId + ":*";
          }
        }
        params.append("ConnectorIds", initializeConnectorIds);
      }
      axios/* default */.A.post("src/standard/migrationInitializeExport.rsb?@json", params).then(function (response) {
        var data = response.data;
        var errMsg = (0,components_utils/* getResultErrorMessage */.hz)(data.items);
        if (errMsg) {
          _this8.props.setError(errMsg);
        } else {
          var settingsInfo = data.items && data.items[0] && data.items[0].settingsinfo;
          if (settingsInfo) {
            var settingsInfoObj = JSON.parse(settingsInfo);
            if (_this8.props.isFlow && _this8.props.isFlowConnectors) {
              if (selectedConnectors) {
                Object.values(settingsInfoObj.workspaces).forEach(function (workspaceInfo) {
                  var _workspaceInfo$flow;
                  if (workspaceInfo.connectors) {
                    Object.values(workspaceInfo.connectors).forEach(function (connectorInfo) {
                      if (!selectedConnectors.includes(connectorInfo.id)) {
                        delete workspaceInfo.connectors[connectorInfo.id];
                      }
                    });
                  }
                  if (workspaceInfo !== null && workspaceInfo !== void 0 && (_workspaceInfo$flow = workspaceInfo.flow) !== null && _workspaceInfo$flow !== void 0 && _workspaceInfo$flow.elements) {
                    Object.values(workspaceInfo.flow.elements).forEach(function (elementInfo) {
                      if (!selectedConnectors.includes(elementInfo.id)) {
                        delete workspaceInfo.flow.elements[elementInfo.id];
                      }
                    });
                  }
                });
              }
              if (selectedGroups) {
                Object.values(settingsInfoObj.workspaces).forEach(function (workspaceInfo) {
                  var _workspaceInfo$flow2;
                  if (workspaceInfo !== null && workspaceInfo !== void 0 && (_workspaceInfo$flow2 = workspaceInfo.flow) !== null && _workspaceInfo$flow2 !== void 0 && _workspaceInfo$flow2.apis) {
                    Object.values(workspaceInfo.flow.apis).forEach(function (apiInfo) {
                      var apiKey = (apiInfo.name + apiInfo.method).toLowerCase();
                      if (!selectedGroups.includes(apiKey)) {
                        delete workspaceInfo.flow.apis[apiKey];
                      }
                    });
                  }
                  if (workspaceInfo.apis) {
                    Object.values(workspaceInfo.apis).forEach(function (apiInfo) {
                      var apiKey = (apiInfo.name + apiInfo.method).toLowerCase();
                      if (!selectedGroups.includes(apiKey)) {
                        delete workspaceInfo.flow.apis[apiKey];
                      }
                    });
                  }
                });
              }
              settingsInfo.workspaces && Object.values(settingsInfo.workspaces).forEach(function (workspaceInfo) {
                workspaceInfo.settings = {
                  existing: "false",
                  action: "ignore"
                };
              });
            }
            if (_this8.state.exportType != "all") {
              var nextPageType = ExportCustomizePage;
              _this8.props.setNextPage(nextPageType, {
                settingsInfo: settingsInfoObj,
                "export": _this8.props["export"],
                filename: _this8.state.filename,
                password: _this8.state.password,
                isFlow: _this8.props.isFlow,
                isFlowConnectors: _this8.props.isFlowConnectors
              });
            } else {
              _this8.props["export"](settingsInfoObj, _this8.state.filename, _this8.state.password, _this8);
            }
          } else {
            _this8.props.setError("No SettingsInfo.");
          }
        }
      });
    });
    migration_defineProperty(_this8, "handleTypeChanged", function (event) {
      _this8.setState({
        exportType: event.target.value
      });
      _this8.props.setIsFinalPage(event.target.value == "all");
    });
    migration_defineProperty(_this8, "handlePasswordChanged", function (event) {
      _this8.setState({
        password: event.target.value
      });
      _this8.props.enableNext(event.target.value != "");
    });
    migration_defineProperty(_this8, "handleFilenameChanged", function (event) {
      var filename = event.target.value + (_this8.props.isFlow ? ".arcflow" : ".arc");
      _this8.setState({
        filename: filename
      });
    });
    migration_defineProperty(_this8, "handleSensitiveChanged", function (event) {
      if (_this8.props.isFlow) {
        _this8.setState({
          exportSensitive: event.target.checked
        });
        if (event.target.checked) {
          _this8.setState({
            password: ""
          });
          _this8.props.enableNext(false);
        } else {
          _this8.props.enableNext(true);
        }
      }
    });
    _this8.props.setTitle(_this8.props.isFlow ? _this8.props.isFlowConnectors ? "Selected Items Export" : "Workspace Export" : "Application Settings Export");
    _this8.props.enablePrev(false);
    _this8.props.setIsFinalPage(true);
    _this8.props.enableNext(false);
    _this8.props.onNextPage(_this8.handleNextPage);
    _this8.props.setHelpLink("help.rst#Importing-Exporting-Flows");
    _this8.state = {
      exportSensitive: true,
      exportType: "all",
      password: null,
      filename: null
    };
    migration_classPrivateFieldSet(_customExportLabel, _this8, /*#__PURE__*/react.createRef());
    return _this8;
  }
  migration_inherits(ExportInitialPage, _React$Component7);
  return migration_createClass(ExportInitialPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this9 = this;
      var elem = migration_classPrivateFieldGet(_customExportLabel, this).current;
      if (elem != null) {
        // The bootstrap may not be loaded when mounting to DOM tree.
        setTimeout(function () {
          new window.bootstrap.Popover(elem, {
            container: "body",
            content: _this9.props.isFlow ? _this9.props.isFlowConnectors ? "Custom export allows you to select specific flows and settings to export" : "Custom export allows you to select specific flows and settings to export." : "Custom export allows you to select specific workspaces and settings to export.",
            html: true,
            placement: "top",
            trigger: "hover"
          });
        }, 500);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("form", {
        className: "form-horizontal form-settings",
        autoComplete: "off",
        noValidate: "novalidate"
      }, /*#__PURE__*/react.createElement("input", {
        type: "password",
        name: "no-password",
        className: "rsb-form-nosubmit",
        defaultValue: "",
        autoComplete: "new-password",
        style: {
          display: "none"
        }
      }), /*#__PURE__*/react.createElement("p", null, this.props.isFlow ? "Application settings are exported as an .arcflow file." : "Application settings are exported as an .arc file."), /*#__PURE__*/react.createElement("div", {
        className: "form-group row mb-3"
      }, /*#__PURE__*/react.createElement("label", {
        htmlFor: "type",
        className: "col-md-5 control-label col-form-label"
      }, "Type"), /*#__PURE__*/react.createElement("div", {
        className: "col-md-6"
      }, /*#__PURE__*/react.createElement("div", {
        className: "radio pt-2"
      }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
        type: "radio",
        className: "form-check-input",
        name: "type",
        value: "all",
        defaultChecked: true,
        onChange: this.handleTypeChanged
      }), " ", this.props.isFlow ? this.props.isFlowConnectors ? "Export all selected items and settings" : "Export all flows and settings" : "Export all workspaces and settings")), /*#__PURE__*/react.createElement("div", {
        className: "radio pt-2"
      }, /*#__PURE__*/react.createElement("label", {
        ref: migration_classPrivateFieldGet(_customExportLabel, this)
      }, /*#__PURE__*/react.createElement("input", {
        type: "radio",
        className: "form-check-input",
        name: "type",
        value: "custom",
        onChange: this.handleTypeChanged
      }), " ", "Custom export", "\xA0", /*#__PURE__*/react.createElement("sup", null, /*#__PURE__*/react.createElement("i", {
        className: "fa fa-question-circle"
      })))))), !this.props.isFlow && /*#__PURE__*/react.createElement("div", {
        className: "form-group row mb-3"
      }, /*#__PURE__*/react.createElement("label", {
        htmlFor: "migrationExportModal_filename",
        className: "col-md-5 control-label col-form-label"
      }, "File Name"), /*#__PURE__*/react.createElement("div", {
        className: "col-md-6"
      }, /*#__PURE__*/react.createElement("div", {
        className: "input-group"
      }, /*#__PURE__*/react.createElement("input", {
        type: "text",
        className: "form-control",
        name: "filename",
        id: "migrationExportModal_filename",
        placeholder: "CDataArc",
        "aria-describedby": "filename-ext",
        onChange: this.handleFilenameChanged
      }), /*#__PURE__*/react.createElement("span", {
        className: "input-group-text",
        id: "filename-ext"
      }, this.props.isFlow ? ".arcflow" : ".arc")))), /*#__PURE__*/react.createElement("div", {
        className: "form-group row mb-3"
      }, /*#__PURE__*/react.createElement("label", {
        htmlFor: "migrationExportModal_sensitive",
        className: "col-md-5 control-label col-form-label"
      }, "Export Sensitive Values"), /*#__PURE__*/react.createElement("div", {
        className: "col-md-6"
      }, /*#__PURE__*/react.createElement("div", {
        className: "checkbox"
      }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
        className: "form-check-input",
        type: "checkbox",
        name: "sensitive",
        id: "migrationExportModal_sensitive",
        onChange: this.handleSensitiveChanged,
        defaultChecked: true,
        disabled: !this.props.isFlow
      }), /*#__PURE__*/react.createElement("span", null, "Enable"))))), this.state.exportSensitive && /*#__PURE__*/react.createElement("div", {
        className: "form-group row"
      }, /*#__PURE__*/react.createElement("label", {
        htmlFor: "migrationExportModalPassword",
        className: "col-md-5 control-label col-form-label"
      }, "Password"), /*#__PURE__*/react.createElement("div", {
        className: "col-md-6"
      }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("input", {
        type: "password",
        className: "form-control",
        name: "password",
        id: "migrationExportModalPassword",
        onChange: this.handlePasswordChanged
      })), /*#__PURE__*/react.createElement("div", {
        className: "migration-modal-value-text"
      }, /*#__PURE__*/react.createElement("p", null, "Create a password to export and encrypt sensitive values.")))));
    }
  }]);
}(react.Component);
var _settingsInfo2 = /*#__PURE__*/new WeakMap();
var _showIncludeWorkspaceSettings2 = /*#__PURE__*/new WeakMap();
var _includeWorkspaceSettings2 = /*#__PURE__*/new WeakMap();
var _workspaceActions2 = /*#__PURE__*/new WeakMap();
var _updateWorkspaceAction2 = /*#__PURE__*/new WeakMap();
var _updateNameAction2 = /*#__PURE__*/new WeakMap();
var _updatePartnerAction2 = /*#__PURE__*/new WeakMap();
var _updateDocumentAction2 = /*#__PURE__*/new WeakMap();
var _updateAPIAction2 = /*#__PURE__*/new WeakMap();
var _updateConnectorAction2 = /*#__PURE__*/new WeakMap();
var ExportCustomizePage = /*#__PURE__*/function (_React$Component8) {
  function ExportCustomizePage(props) {
    var _this10;
    migration_classCallCheck(this, ExportCustomizePage);
    _this10 = migration_callSuper(this, ExportCustomizePage, [props]);
    migration_classPrivateFieldInitSpec(_this10, _settingsInfo2, null);
    migration_classPrivateFieldInitSpec(_this10, _showIncludeWorkspaceSettings2, false);
    migration_classPrivateFieldInitSpec(_this10, _includeWorkspaceSettings2, true);
    migration_classPrivateFieldInitSpec(_this10, _workspaceActions2, {});
    migration_defineProperty(_this10, "handleNextPage", function () {
      _this10.props["export"](migration_classPrivateFieldGet(_settingsInfo2, _this10), _this10.props.filename, _this10.props.password, _this10);
    });
    migration_defineProperty(_this10, "handleWorkspacesClicked", function () {
      _this10.setState({
        showingTab: "workspaces"
      });
    });
    migration_defineProperty(_this10, "handleSettingsClicked", function () {
      _this10.setState({
        showingTab: "settings"
      });
    });
    migration_defineProperty(_this10, "handleEDIClicked", function () {
      _this10.setState({
        showingTab: "edi"
      });
    });
    migration_defineProperty(_this10, "handleWorkspaceActionChange", function (workspaceId, action) {
      migration_classPrivateFieldGet(_updateWorkspaceAction2, _this10).call(_this10, workspaceId, action);
    });
    migration_defineProperty(_this10, "handleNameActionChange", function (section, action) {
      migration_classPrivateFieldGet(_updateNameAction2, _this10).call(_this10, section, action);
    });
    migration_defineProperty(_this10, "handlePartnerActionChange", function (partnerId, action) {
      migration_classPrivateFieldGet(_updatePartnerAction2, _this10).call(_this10, partnerId, action);
    });
    migration_defineProperty(_this10, "handleDocumentActionChange", function (documentId, action) {
      migration_classPrivateFieldGet(_updateDocumentAction2, _this10).call(_this10, documentId, action);
    });
    migration_defineProperty(_this10, "handleAPIActionChange", function (workspaceId, apiId, action) {
      migration_classPrivateFieldGet(_updateAPIAction2, _this10).call(_this10, workspaceId, apiId, action);
    });
    migration_defineProperty(_this10, "handleConnectorActionChange", function (workspaceId, connectorId, action) {
      migration_classPrivateFieldGet(_updateConnectorAction2, _this10).call(_this10, workspaceId, connectorId, action);
    });
    migration_defineProperty(_this10, "handleIncludeWorkspaceSettingsChange", function (enable) {
      migration_classPrivateFieldSet(_includeWorkspaceSettings2, _this10, enable);
      migration_classPrivateFieldGet(_showIncludeWorkspaceSettings2, _this10) && Object.values(migration_classPrivateFieldGet(_settingsInfo2, _this10).workspaces).forEach(function (workspaceInfo) {
        workspaceInfo.settings.action = enable && migration_classPrivateFieldGet(_workspaceActions2, _this10)[workspaceInfo.id] !== "ignore" ? "skip" : "ignore";
      });
    });
    migration_classPrivateFieldInitSpec(_this10, _updateWorkspaceAction2, function (workspaceId, action) {
      if (migration_classPrivateFieldGet(_settingsInfo2, _this10).workspaces) {
        var workspaceInfo = migration_classPrivateFieldGet(_settingsInfo2, _this10).workspaces[workspaceId];
        if (workspaceInfo) {
          migration_classPrivateFieldGet(_workspaceActions2, _this10)[workspaceInfo.id] = action;
          if (workspaceInfo.connectors) {
            Object.values(workspaceInfo.connectors).forEach(function (connectorInfo) {
              connectorInfo.action = action;
            });
          }
          if (workspaceInfo.flow) {
            if (workspaceInfo.flow.elements) {
              Object.values(workspaceInfo.flow.elements).forEach(function (elementInfo) {
                elementInfo.action = action;
              });
            }
            if (workspaceInfo.flow.views) {
              Object.values(workspaceInfo.flow.views).forEach(function (viewInfo) {
                viewInfo.action = action;
              });
            }
            if (workspaceInfo.flow.apis) {
              Object.values(workspaceInfo.flow.apis).forEach(function (apiInfo) {
                apiInfo.action = action;
              });
            }
          }
          if (workspaceInfo.apis) {
            Object.values(workspaceInfo.apis).forEach(function (apiInfo) {
              apiInfo.action = action;
            });
          }
          if (workspaceInfo.settings && action) workspaceInfo.settings.action = !migration_classPrivateFieldGet(_includeWorkspaceSettings2, _this10) ? "ignore" : action;
        }
      }
    });
    migration_classPrivateFieldInitSpec(_this10, _updateNameAction2, function (section, action) {
      if (migration_classPrivateFieldGet(_settingsInfo2, _this10)[section]) {
        Object.values(migration_classPrivateFieldGet(_settingsInfo2, _this10)[section]).forEach(function (nameInfo) {
          nameInfo.action = action;
        });
      } else if (migration_classPrivateFieldGet(_settingsInfo2, _this10).settings && migration_classPrivateFieldGet(_settingsInfo2, _this10).settings[section]) {
        var settingInfo = migration_classPrivateFieldGet(_settingsInfo2, _this10).settings[section];
        if (settingInfo) {
          settingInfo.action = action;
        }
      }
    });
    migration_classPrivateFieldInitSpec(_this10, _updatePartnerAction2, function (partnerId, action) {
      var _classPrivateFieldGet13;
      if ((_classPrivateFieldGet13 = migration_classPrivateFieldGet(_settingsInfo2, _this10)) !== null && _classPrivateFieldGet13 !== void 0 && (_classPrivateFieldGet13 = _classPrivateFieldGet13.partners) !== null && _classPrivateFieldGet13 !== void 0 && _classPrivateFieldGet13[partnerId]) {
        migration_classPrivateFieldGet(_settingsInfo2, _this10).partners[partnerId].action = action;
      }
    });
    migration_classPrivateFieldInitSpec(_this10, _updateDocumentAction2, function (documentId, action) {
      var _classPrivateFieldGet14;
      if ((_classPrivateFieldGet14 = migration_classPrivateFieldGet(_settingsInfo2, _this10)) !== null && _classPrivateFieldGet14 !== void 0 && (_classPrivateFieldGet14 = _classPrivateFieldGet14.documents) !== null && _classPrivateFieldGet14 !== void 0 && _classPrivateFieldGet14[documentId]) {
        migration_classPrivateFieldGet(_settingsInfo2, _this10).documents[documentId].action = action;
      }
    });
    migration_classPrivateFieldInitSpec(_this10, _updateAPIAction2, function (workspaceId, apiId, action) {
      var _classPrivateFieldGet15, _workspaceInfo$flow3;
      var workspaceInfo = (_classPrivateFieldGet15 = migration_classPrivateFieldGet(_settingsInfo2, _this10)) === null || _classPrivateFieldGet15 === void 0 ? void 0 : _classPrivateFieldGet15.workspaces[workspaceId];
      if (workspaceInfo !== null && workspaceInfo !== void 0 && workspaceInfo.apis) {
        var apiInfo = workspaceInfo.apis[apiId.toLowerCase()];
        if (apiInfo) {
          apiInfo.action = action;
        }
      }
      if (workspaceInfo !== null && workspaceInfo !== void 0 && (_workspaceInfo$flow3 = workspaceInfo.flow) !== null && _workspaceInfo$flow3 !== void 0 && _workspaceInfo$flow3.apis) {
        var flowAPIInfo = workspaceInfo.flow.apis[apiId.toLowerCase()];
        if (flowAPIInfo) {
          flowAPIInfo.action = action;
        }
      }
    });
    migration_classPrivateFieldInitSpec(_this10, _updateConnectorAction2, function (workspaceId, connectorId, action) {
      var _classPrivateFieldGet16, _workspaceInfo$flow4;
      var workspaceInfo = (_classPrivateFieldGet16 = migration_classPrivateFieldGet(_settingsInfo2, _this10)) === null || _classPrivateFieldGet16 === void 0 ? void 0 : _classPrivateFieldGet16.workspaces[workspaceId];
      if (workspaceInfo !== null && workspaceInfo !== void 0 && workspaceInfo.connectors) {
        var connectorInfo = workspaceInfo.connectors[connectorId];
        if (connectorInfo) {
          connectorInfo.action = action;
        }
      }
      if (workspaceInfo !== null && workspaceInfo !== void 0 && (_workspaceInfo$flow4 = workspaceInfo.flow) !== null && _workspaceInfo$flow4 !== void 0 && _workspaceInfo$flow4.elements) {
        var elementInfo = workspaceInfo.flow.elements[connectorId];
        if (elementInfo) {
          elementInfo.action = action;
        }
      }
    });
    _this10.props.setTitle(_this10.props.isFlow ? _this10.isFlowConnectors ? "Customize Selected Items Export" : "Customize Workspace Export" : "Customize Application Settings Export");
    _this10.props.onNextPage(_this10.handleNextPage);
    _this10.props.enableNext(true);
    _this10.props.enablePrev(true);
    _this10.props.setIsFinalPage(true);
    _this10.props.setHelpLink("help.rst#Importing-Exporting-Flows");
    _this10.state = {
      showingTab: "workspaces"
    };
    migration_classPrivateFieldSet(_settingsInfo2, _this10, _this10.props.settingsInfo);
    migration_classPrivateFieldSet(_showIncludeWorkspaceSettings2, _this10, Object.values(migration_classPrivateFieldGet(_settingsInfo2, _this10).workspaces || {}).find(function (workspaceInfo) {
      var _workspaceInfo$settin2;
      return (_workspaceInfo$settin2 = workspaceInfo.settings) === null || _workspaceInfo$settin2 === void 0 ? void 0 : _workspaceInfo$settin2.existing;
    }) != null);
    if (migration_classPrivateFieldGet(_settingsInfo2, _this10).workspaces) {
      Object.values(migration_classPrivateFieldGet(_settingsInfo2, _this10).workspaces).forEach(function (workspaceInfo) {
        if (workspaceInfo.connectors) {
          Object.values(workspaceInfo.connectors).forEach(function (connectorInfo) {
            connectorInfo.action = "skip";
          });
        }
      });
    }
    return _this10;
  }
  migration_inherits(ExportCustomizePage, _React$Component8);
  return migration_createClass(ExportCustomizePage, [{
    key: "render",
    value: function render() {
      var showingTab = null;
      switch (this.state.showingTab) {
        case "workspaces":
          if (this.props.isFlow) {
            var workspaceInfo = null;
            if (migration_classPrivateFieldGet(_settingsInfo2, this).workspaces) {
              workspaceInfo = Object.values(migration_classPrivateFieldGet(_settingsInfo2, this).workspaces)[0];
            }
            showingTab = /*#__PURE__*/react.createElement(MigrationTabs/* CustomizeFlowTab */.zM, {
              isImport: false,
              workspaceInfo: workspaceInfo,
              onAPIActionChange: this.handleAPIActionChange,
              onConnectorActionChange: this.handleConnectorActionChange,
              includeWorkspaceSettings: migration_classPrivateFieldGet(_includeWorkspaceSettings2, this),
              onIncludeWorkspaceSettingsChange: migration_classPrivateFieldGet(_showIncludeWorkspaceSettings2, this) ? this.handleIncludeWorkspaceSettingsChange : undefined
            });
          } else {
            showingTab = /*#__PURE__*/react.createElement(MigrationTabs/* CustomizeWorkspacesTab */.le, {
              isImport: false,
              workspacesInfo: migration_classPrivateFieldGet(_settingsInfo2, this).workspaces,
              onActionChange: this.handleWorkspaceActionChange,
              includeWorkspaceSettings: migration_classPrivateFieldGet(_includeWorkspaceSettings2, this),
              onIncludeWorkspaceSettingsChange: migration_classPrivateFieldGet(_showIncludeWorkspaceSettings2, this) ? this.handleIncludeWorkspaceSettingsChange : undefined
            });
          }
          break;
        case "edi":
          showingTab = /*#__PURE__*/react.createElement(MigrationTabs/* CustomizeEDITab */.dF, {
            isImport: false,
            settingsInfo: migration_classPrivateFieldGet(_settingsInfo2, this),
            onPartnerActionChange: this.handlePartnerActionChange,
            onDocumentActionChange: this.handleDocumentActionChange
          });
          break;
        case "settings":
          showingTab = /*#__PURE__*/react.createElement(MigrationTabs/* CustomizeSettingsTab */.EX, {
            isImport: false,
            settingsInfo: migration_classPrivateFieldGet(_settingsInfo2, this),
            onNameActionChange: this.handleNameActionChange
          });
          break;
        default:
          break;
      }
      return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("ul", {
        className: "nav nav-tabs tab-underline",
        role: "tablist"
      }, /*#__PURE__*/react.createElement("li", {
        className: "nav-item",
        role: "presentation"
      }, /*#__PURE__*/react.createElement("a", {
        className: "nav-link " + (this.state.showingTab == "workspaces" ? "active" : ""),
        onClick: this.handleWorkspacesClicked
      }, this.props.isFlow ? "Workspace" : "Workspaces")), !this.props.isFlow && (this.props.settingsInfo.partners || this.props.settingsInfo.documents) && /*#__PURE__*/react.createElement("li", {
        className: "nav-item",
        role: "presentation"
      }, /*#__PURE__*/react.createElement("a", {
        className: "nav-link " + (this.state.showingTab == "edi" ? "active" : ""),
        onClick: this.handleEDIClicked
      }, "EDI")), /*#__PURE__*/react.createElement("li", {
        className: "nav-item",
        role: "presentation"
      }, /*#__PURE__*/react.createElement("a", {
        className: "nav-link " + (this.state.showingTab == "settings" ? "active" : ""),
        onClick: this.handleSettingsClicked
      }, "Settings")))), /*#__PURE__*/react.createElement("div", {
        className: "tab-content"
      }, /*#__PURE__*/react.createElement("div", {
        className: "tab-pane active show",
        role: "tabpanel"
      }, showingTab)));
    }
  }]);
}(react.Component);
var _export = /*#__PURE__*/new WeakMap();
var ExportModal = /*#__PURE__*/function (_React$Component9) {
  function ExportModal(props) {
    var _this11;
    migration_classCallCheck(this, ExportModal);
    _this11 = migration_callSuper(this, ExportModal, [props]);
    migration_defineProperty(_this11, "handleError", function (errorMessage) {
      _this11.setState({
        errorMessage: errorMessage
      });
    });
    migration_classPrivateFieldInitSpec(_this11, _export, function (settingsInfo, filename, password, page) {
      var _window10, _window11;
      var isFlow = _this11.props.isFlow;
      var isFlowConnectors = _this11.props.isFlowConnectors;
      var selectedConnectors = (_window10 = window) === null || _window10 === void 0 || (_window10 = _window10.rsb) === null || _window10 === void 0 || (_window10 = _window10.workflow) === null || _window10 === void 0 ? void 0 : _window10.selectedConnectors;
      var currentWorkspaceId = (_window11 = window) === null || _window11 === void 0 || (_window11 = _window11.rsb) === null || _window11 === void 0 || (_window11 = _window11.workflow) === null || _window11 === void 0 ? void 0 : _window11.currentWorkspaceId;
      if (_this11.props.externalRef) {
        var _this11$props$externa, _this11$props$externa2;
        currentWorkspaceId = (_this11$props$externa = _this11.props.externalRef) === null || _this11$props$externa === void 0 || (_this11$props$externa = _this11$props$externa.current) === null || _this11$props$externa === void 0 ? void 0 : _this11$props$externa.operationalWorkspaceIds[0];
        selectedConnectors = (_this11$props$externa2 = _this11.props.externalRef) === null || _this11$props$externa2 === void 0 || (_this11$props$externa2 = _this11$props$externa2.current) === null || _this11$props$externa2 === void 0 ? void 0 : _this11$props$externa2.operationalConnectorIds;
      }
      var params = new URLSearchParams();
      if (_this11.props.isFlow) {
        params.append("WorkspaceId", currentWorkspaceId);
      }
      if (password) {
        params.append("Password", password);
      }
      params.append("SettingsInfo", JSON.stringify(settingsInfo));
      axios/* default */.A.post("src/standard/migrationExport.rsb?@json", params).then(function (response) {
        var _response$data;
        if (response !== null && response !== void 0 && (_response$data = response.data) !== null && _response$data !== void 0 && _response$data.items) {
          var errorMessage = (0,components_utils/* getResultErrorMessage */.hz)(response.data.items);
          if (errorMessage) {
            page.props.setError(errorMessage);
          } else {
            var byteStr = atob(response.data.items[0].arcflow);
            var ia = new Uint8Array(byteStr.length);
            for (var i = 0; i < byteStr.length; i++) {
              ia[i] = byteStr.charCodeAt(i);
            }
            var dataBlob = new Blob([ia], {
              type: "application/zip"
            });
            var fileReader = new FileReader();
            fileReader.readAsDataURL(dataBlob);
            fileReader.onload = function (e) {
              var a = document.createElement("a");
              if (filename) {
                a.download = filename;
              } else if (isFlow) {
                if (isFlowConnectors && !selectedConnectors.includes(";")) {
                  a.download = selectedConnectors + ".arcflow";
                } else {
                  a.download = currentWorkspaceId + ".arcflow";
                }
              } else {
                a.download = "CDataArc.arc";
              }
              a.href = e.target.result;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
            };
            page.props.close();
          }
        }
      });
    });
    _this11.state = {
      errorMessage: null
    };
    return _this11;
  }
  migration_inherits(ExportModal, _React$Component9);
  return migration_createClass(ExportModal, [{
    key: "render",
    value: function render() {
      var modalId = this.props.id ? this.props.id : "migrationExportModal";
      return /*#__PURE__*/react.createElement(ProgressModal, {
        id: modalId,
        externalRef: this.props.externalRef,
        initialPageType: ExportInitialPage,
        initialPageProps: {
          "export": migration_classPrivateFieldGet(_export, this),
          isFlow: this.props.isFlow,
          isFlowConnectors: this.props.isFlowConnectors,
          externalRef: this.props.externalRef
        },
        finishButtonText: "Export",
        finishButtonIcon: "fas fa-file-export"
      });
    }
  }]);
}(react.Component);
var DownloadSampleFlowPage = /*#__PURE__*/function (_React$Component10) {
  function DownloadSampleFlowPage(props) {
    var _window$rsb$sampleFlo4, _window$rsb5, _window$rsb$sampleFlo5, _window$rsb6;
    var _this12;
    migration_classCallCheck(this, DownloadSampleFlowPage);
    _this12 = migration_callSuper(this, DownloadSampleFlowPage, [props]);
    migration_defineProperty(_this12, "handleNextPage", function () {
      var _window$rsb$sampleFlo, _window$rsb, _window$rsb$sampleFlo2, _window$rsb2, _window$rsb$workflow$3, _window$rsb3;
      _this12.props.setLoadingText("Downloading File...");
      _this12.props.setError(null);
      var params = new URLSearchParams();
      params.append("guid", (_window$rsb$sampleFlo = (_window$rsb = window.rsb) === null || _window$rsb === void 0 || (_window$rsb = _window$rsb.sampleFlow) === null || _window$rsb === void 0 ? void 0 : _window$rsb.guid) !== null && _window$rsb$sampleFlo !== void 0 ? _window$rsb$sampleFlo : "");
      params.append("title", (_window$rsb$sampleFlo2 = (_window$rsb2 = window.rsb) === null || _window$rsb2 === void 0 || (_window$rsb2 = _window$rsb2.sampleFlow) === null || _window$rsb2 === void 0 ? void 0 : _window$rsb2.title) !== null && _window$rsb$sampleFlo2 !== void 0 ? _window$rsb$sampleFlo2 : "");
      params.append("workspaceid", (_window$rsb$workflow$3 = (_window$rsb3 = window.rsb) === null || _window$rsb3 === void 0 || (_window$rsb3 = _window$rsb3.workflow) === null || _window$rsb3 === void 0 ? void 0 : _window$rsb3.currentWorkspaceId) !== null && _window$rsb$workflow$3 !== void 0 ? _window$rsb$workflow$3 : "");
      axios/* default */.A.post("src/downloadSampleFlow.rsb?@json", params).then(function (response) {
        _this12.props.setLoadingText(null);
        var data = response.data;
        var errMsg = (0,components_utils/* getResultErrorMessage */.hz)(data.items);
        if (errMsg) {
          _this12.props.setError(errMsg);
        } else {
          var settingsInfo = data.items && data.items[0] && data.items[0].settingsinfo;
          var fileHandle = data.items && data.items[0] && data.items[0].handle;
          if (settingsInfo && fileHandle) {
            var _window$rsb$sampleFlo3, _window$rsb4, _window12;
            var settingsInfoObj = JSON.parse(settingsInfo);
            if (settingsInfoObj.workspaces) {
              Object.keys(settingsInfoObj.workspaces).forEach(function (key) {
                if (key) {
                  _this12.props.setError("This file appears to be a global export (.arc). Please navigate to the Migration tab within the Settings page to import it.");
                  _this12.props.setLoadingText(null);
                  return;
                }
              });
            }
            var nextPageType = ImportProcessedPage;
            _this12.props.setNextPage(nextPageType, {
              fileName: (_window$rsb$sampleFlo3 = (_window$rsb4 = window.rsb) === null || _window$rsb4 === void 0 || (_window$rsb4 = _window$rsb4.sampleFlow) === null || _window$rsb4 === void 0 ? void 0 : _window$rsb4.title) !== null && _window$rsb$sampleFlo3 !== void 0 ? _window$rsb$sampleFlo3 : "",
              settingsInfo: settingsInfoObj,
              fileHandle: fileHandle,
              "import": _this12.props["import"],
              isFlow: true,
              isFlowConnectors: false,
              workspaceId: (_window12 = window) === null || _window12 === void 0 || (_window12 = _window12.rsb) === null || _window12 === void 0 || (_window12 = _window12.workflow) === null || _window12 === void 0 ? void 0 : _window12.currentWorkspaceId
            });
          } else {
            _this12.props.setError("No SettingsInfo or Handle.");
          }
        }
      });
    });
    migration_defineProperty(_this12, "renderIcons", function (icons) {
      if (!icons) {
        return "";
      }
      var values = icons.split(",");
      var html = [];
      for (var index = 0; index < values.length; index++) {
        if (index > 0) {
          html.push(/*#__PURE__*/react.createElement("i", {
            key: "icon_" + index,
            className: "fa fa-solid fa-arrow-right-long"
          }));
        }
        html.push(/*#__PURE__*/react.createElement("a", {
          key: "link_" + index,
          className: "flow-port-img app-icon app-icon-" + values[index].trim().replace(/^cdata(.+)$/, "$1")
        }));
      }
      return html;
    });
    _this12.props.enablePrev(false);
    _this12.props.enableNext(true);
    _this12.props.onNextPage(_this12.handleNextPage);
    _this12.props.setTitle((_window$rsb$sampleFlo4 = (_window$rsb5 = window.rsb) === null || _window$rsb5 === void 0 || (_window$rsb5 = _window$rsb5.sampleFlow) === null || _window$rsb5 === void 0 ? void 0 : _window$rsb5.title) !== null && _window$rsb$sampleFlo4 !== void 0 ? _window$rsb$sampleFlo4 : "");
    _this12.props.setHelpLink((_window$rsb$sampleFlo5 = (_window$rsb6 = window.rsb) === null || _window$rsb6 === void 0 || (_window$rsb6 = _window$rsb6.sampleFlow) === null || _window$rsb6 === void 0 ? void 0 : _window$rsb6.url) !== null && _window$rsb$sampleFlo5 !== void 0 ? _window$rsb$sampleFlo5 : "", "View Detail");
    return _this12;
  }
  migration_inherits(DownloadSampleFlowPage, _React$Component10);
  return migration_createClass(DownloadSampleFlowPage, [{
    key: "render",
    value: function render() {
      var _window$rsb$sampleFlo6, _window$rsb7, _window$rsb$sampleFlo7, _window$rsb8;
      return /*#__PURE__*/react.createElement("form", {
        className: "form-horizontal form-settings",
        role: "form",
        method: "POST",
        autoComplete: "off",
        noValidate: "novalidate"
      }, /*#__PURE__*/react.createElement("div", {
        className: "form-group",
        "data-icons": ""
      }, this.renderIcons((_window$rsb$sampleFlo6 = (_window$rsb7 = window.rsb) === null || _window$rsb7 === void 0 || (_window$rsb7 = _window$rsb7.sampleFlow) === null || _window$rsb7 === void 0 ? void 0 : _window$rsb7.icons) !== null && _window$rsb$sampleFlo6 !== void 0 ? _window$rsb$sampleFlo6 : "")), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", null, (_window$rsb$sampleFlo7 = (_window$rsb8 = window.rsb) === null || _window$rsb8 === void 0 || (_window$rsb8 = _window$rsb8.sampleFlow) === null || _window$rsb8 === void 0 ? void 0 : _window$rsb8.desc) !== null && _window$rsb$sampleFlo7 !== void 0 ? _window$rsb$sampleFlo7 : "")));
    }
  }]);
}(react.Component);
var ImportSampleFlowModal = /*#__PURE__*/function (_React$Component11) {
  function ImportSampleFlowModal(props) {
    migration_classCallCheck(this, ImportSampleFlowModal);
    return migration_callSuper(this, ImportSampleFlowModal, [props]);
  }
  migration_inherits(ImportSampleFlowModal, _React$Component11);
  return migration_createClass(ImportSampleFlowModal, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement(ImportModal, {
        id: "importSampleflowModal",
        initialPageType: DownloadSampleFlowPage,
        isFlow: true
      });
    }
  }]);
}(react.Component);
var UpgradeBuildModal = /*#__PURE__*/function (_React$Component12) {
  function UpgradeBuildModal(props) {
    var _this13;
    migration_classCallCheck(this, UpgradeBuildModal);
    _this13 = migration_callSuper(this, UpgradeBuildModal, [props]);
    _this13.state = {
      errorMessage: null
    };
    return _this13;
  }
  migration_inherits(UpgradeBuildModal, _React$Component12);
  return migration_createClass(UpgradeBuildModal, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement(Modal, {
        id: "upgradeBuildModal"
      }, /*#__PURE__*/react.createElement(ModalHeader, {
        title: "Upgrade Required"
      }), /*#__PURE__*/react.createElement(ModalBody, null, /*#__PURE__*/react.createElement("p", null, "This flow includes one or more connectors that a new build. To Upgrade your build please go to ", /*#__PURE__*/react.createElement("a", {
        target: "_blank",
        rel: "noreferrer",
        href: "https://arc.cdata.com/"
      }, "arc.cdata.com"))), /*#__PURE__*/react.createElement(ModalFooter, null, /*#__PURE__*/react.createElement("button", {
        type: "button",
        className: "btn btn-outline-secondary",
        "data-bs-dismiss": "modal"
      }, /*#__PURE__*/react.createElement("i", {
        className: "fa fa-close"
      }), "\xA0Cancel")));
    }
  }]);
}(react.Component);

/***/ }),

/***/ 19967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ ImportDropdown),
/* harmony export */   P: () => (/* binding */ ImportUtils)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
var _ImportUtils;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }


var _dropdownRef = /*#__PURE__*/new WeakMap();
var _dropdown = /*#__PURE__*/new WeakMap();
var _options = /*#__PURE__*/new WeakMap();
var _defaultValue = /*#__PURE__*/new WeakMap();
var ImportDropdown = /*#__PURE__*/function (_React$Component) {
  function ImportDropdown(props) {
    var _this;
    _classCallCheck(this, ImportDropdown);
    _this = _callSuper(this, ImportDropdown, [props]);
    _classPrivateFieldInitSpec(_this, _dropdownRef, void 0);
    _classPrivateFieldInitSpec(_this, _dropdown, void 0);
    _classPrivateFieldInitSpec(_this, _options, {});
    _classPrivateFieldInitSpec(_this, _defaultValue, void 0);
    _defineProperty(_this, "handleOptionClick", function (event) {
      var value = event.target.dataset["arcDropdownValue"];
      if (_this.props.onChange) {
        _this.props.onChange(value, _this.props);
      }
    });
    props.options && props.options.forEach(function (option) {
      var _classPrivateFieldGet2;
      (_classPrivateFieldGet2 = _classPrivateFieldGet(_defaultValue, _this)) !== null && _classPrivateFieldGet2 !== void 0 ? _classPrivateFieldGet2 : _classPrivateFieldSet(_defaultValue, _this, option.value);
      _classPrivateFieldGet(_options, _this)[option.value] = option;
    });
    _classPrivateFieldSet(_dropdownRef, _this, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef());
    return _this;
  }
  _inherits(ImportDropdown, _React$Component);
  return _createClass(ImportDropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var elem = _classPrivateFieldGet(_dropdownRef, this).current;
      if (elem != null) {
        _classPrivateFieldSet(_dropdown, this, new window.bootstrap.Dropdown(elem));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$className,
        _selectedOption$name,
        _this2 = this;
      var selectedOption = this.props.value && _classPrivateFieldGet(_options, this)[this.props.value];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "dropdown migration-dropdown-group " + ((_this$props$className = this.props.className) !== null && _this$props$className !== void 0 ? _this$props$className : ""),
        style: this.props.style
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "migration-dropdown-title",
        type: "button",
        "data-bs-toggle": "dropdown",
        ref: _classPrivateFieldGet(_dropdownRef, this)
      }, (_selectedOption$name = selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.name) !== null && _selectedOption$name !== void 0 ? _selectedOption$name : this.props.value, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fa fa-angle-down migration-dropdown-icon"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
        className: "dropdown-menu dropdown-menu-end"
      }, Object.values(_classPrivateFieldGet(_options, this)).map(function (option) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
          key: option.value
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
          className: "dropdown-item",
          "data-arc-dropdown-value": option.value,
          onClick: _this2.handleOptionClick
        }, option.name));
      })));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
var ImportUtils = /*#__PURE__*/_createClass(function ImportUtils() {
  _classCallCheck(this, ImportUtils);
});
_ImportUtils = ImportUtils;
_defineProperty(ImportUtils, "Clone", function (object) {
  var copy = null;
  if (object.constructor === Array) {
    copy = [];
    for (var i = 0; i < object.length; i++) {
      if (_typeof(object[i]) === "object") {
        copy.push(_ImportUtils.Clone(object[i]));
      } else {
        copy.push(object[i]);
      }
    }
  } else {
    copy = {};
    for (var elem in object) {
      if (_typeof(object[elem]) === "object") {
        copy[elem] = _ImportUtils.Clone(object[elem]);
      } else {
        copy[elem] = object[elem];
      }
    }
  }
  return copy;
});

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

/***/ 87267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ workspace_WorkspaceSettingsModal)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ../../.react-shared/axios/index.jsx
var axios = __webpack_require__(29029);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Button.js
var Button = __webpack_require__(25615);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Modal.js + 6 modules
var Modal = __webpack_require__(48032);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(49785);
// EXTERNAL MODULE: ./src/components/alert/DismissibleAlert.tsx
var DismissibleAlert = __webpack_require__(95631);
// EXTERNAL MODULE: ./src/components/chip-list/EditableChipList.jsx
var EditableChipList = __webpack_require__(63557);
// EXTERNAL MODULE: ./src/components/utils/index.js + 1 modules
var utils = __webpack_require__(25337);
;// CONCATENATED MODULE: ./src/components/workspace/constants.js

var TOKENS = {
  OVERRIDE_GLOBAL_SETTINGS: 'Override Global Settings',
  TO: 'To',
  SUBJECT: 'Subject',
  NOTIFY_EMAIL: 'Send an email when an error is encountered',
  MAX_WORKERS_PER_PORT: 'Max Workers per Connector',
  MAX_FILES_PER_PORT: 'Max Files per Connector',
  TYPE: 'Type',
  ARCHIVE_LOGS: 'Archive Logs',
  DELETE_LOGS: 'Delete Logs',
  INTERVAL_DAYS: 'Interval (Days)',
  INTERVAL_DAYS_PLACEHOLDER: 'Task Interval (Days)',
  SENT_FILES: 'Sent Files',
  SEND_FILES: 'Send Files',
  RECEIVE_FILES: 'Receive Files',
  SENT_FILES_LABEL: 'Include files in Sent folders',
  SEND_FILES_LABEL: 'Include files in Send folders',
  RECEIVE_FILES_LABEL: 'Include files in Receive folders',
  OTHER_SETTINGS: 'Other Settings',
  SECTION_ALERTS: 'Alerts',
  SECTION_PERFORMANCE: 'Performance',
  SECTION_CLEANUP_OPTIONS: 'Cleanup Options',
  SECTION_MISCELLANEOUS: 'Miscellaneous',
  WORKSPACE_SETTINGS_SUFFIX: 'Settings',
  ARCHIVE_DESTINATION: 'Archive Destination',
  LOCAL_DISK: 'Local Disk',
  S3: 'S3',
  ARCHIVE_FOLDER: 'Archive Folder',
  BUCKET: 'Bucket',
  ACCESS_KEY: 'Access Key',
  SECRET_KEY: 'Secret Key',
  REGION: 'Region',
  NOT_SPECIFIED: 'Not Specified',
  TEST_CONNECTION: 'Test Connection',
  TEST_CONNECTION_EXECUTING: 'Testing',
  RUN_NOW: 'Run Now',
  RUN_NOW_EXECUTING: 'Running',
  SUCCESS: 'Success',
  CLOSE: 'Close',
  SAVE: 'Save',
  INVALID_EMAIL: 'Please enter a valid email address:',
  FIELD_REQUIRE: 'The field is required.'
};
var S3_REGIONS = [{
  name: "",
  desc: TOKENS.NOT_SPECIFIED
}, {
  name: "NORTHERNVIRGINIA",
  desc: "US East (N. Virginia)"
}, {
  name: "us-east-2",
  desc: "US East (Ohio)"
}, {
  name: "NORTHERNCALIFORNIA",
  desc: "US West (N. California)"
}, {
  name: "OREGON",
  desc: "US West (Oregon)"
}, {
  name: "ap-south-1",
  desc: "Asia Pacific (Mumbai)"
}, {
  name: "SEOUL",
  desc: "Asia Pacific (Seoul)"
}, {
  name: "SINGAPORE",
  desc: "Asia Pacific (Singapore)"
}, {
  name: "SYDNEY",
  desc: "Asia Pacific (Sydney)"
}, {
  name: "TOKYO",
  desc: "Asia Pacific (Tokyo)"
}, {
  name: "ca-central-1",
  desc: "Canada (Central)"
}, {
  name: "NORTHERNCHINA",
  desc: "China (Beijing)"
}, {
  name: "FRANKFURT",
  desc: "EU (Frankfurt)"
}, {
  name: "IRELAND",
  desc: "EU (Ireland)"
}, {
  name: "eu-west-2",
  desc: "EU (London)"
}, {
  name: "SAOPAULO",
  desc: "South America (São Paulo)"
}];
var ACTION = {
  SUBMIT: 1,
  TEST: 2,
  RUN: 3
};
;// CONCATENATED MODULE: ./src/components/workspace/WorkspaceSettingsModal.jsx
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }











var OverrideSection = function OverrideSection(_ref) {
  var sectionName = _ref.sectionName,
    overrideName = _ref.overrideName,
    enableOverride = _ref.enableOverride,
    setEnableOverride = _ref.setEnableOverride,
    disabled = _ref.disabled,
    children = _ref.children;
  return /*#__PURE__*/react.createElement("div", {
    className: "override-section" + (enableOverride ? "" : " rsb-form-nosubmit")
  }, /*#__PURE__*/react.createElement("h4", {
    className: "page-header d-flex mt-4"
  }, sectionName, overrideName && /*#__PURE__*/react.createElement("label", {
    className: "ms-auto fw-normal"
  }, /*#__PURE__*/react.createElement("input", {
    type: "checkbox",
    className: "form-check-input mb-0",
    name: overrideName,
    checked: enableOverride,
    onChange: function onChange(e) {
      return setEnableOverride(e.target.checked);
    },
    disabled: disabled,
    value: "true",
    "data-uncheckvalue": "false"
  }), " ", TOKENS.OVERRIDE_GLOBAL_SETTINGS)), /*#__PURE__*/react.createElement("div", {
    className: "ps-2 pe-2"
  }, children(enableOverride && !disabled)));
};
var ExecuteButton = function ExecuteButton(_ref2) {
  var disabled = _ref2.disabled,
    children = _ref2.children,
    executing = _ref2.executing,
    onClick = _ref2.onClick;
  var _useState = (0,react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    running = _useState2[0],
    setRunning = _useState2[1];
  var handleExecute = function handleExecute() {
    setRunning(true);
    onClick(setRunning.bind(null, false), setRunning.bind(null, false));
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "mb-3 row"
  }, /*#__PURE__*/react.createElement("label", {
    className: "col-md-3 col-form-label"
  }), /*#__PURE__*/react.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "outline-secondary",
    disabled: disabled || running,
    onClick: handleExecute
  }, running ? executing || children : children)));
};
var ArchiveWatch = function ArchiveWatch(_ref3) {
  var _settings$archivedest, _settings$archivedest2;
  var control = _ref3.control,
    register = _ref3.register,
    onTest = _ref3.onTest,
    settings = _ref3.settings,
    enable = _ref3.enable;
  var archiveType = (0,index_esm/* useWatch */.FH)({
    control: control,
    name: "autotasktype"
  });
  var archiveDestination = (0,index_esm/* useWatch */.FH)({
    control: control,
    name: "archivedestination",
    defaultValue: settings.archivedestination
  });
  if ((archiveType === null || archiveType === void 0 ? void 0 : archiveType.toLowerCase()) === "delete") return null;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "mb-3 row"
  }, /*#__PURE__*/react.createElement("label", {
    className: "fw-bold col-sm-3 col-form-label"
  }, TOKENS.ARCHIVE_DESTINATION), /*#__PURE__*/react.createElement("div", {
    className: "col-md-5 d-flex"
  }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", _extends({
    type: "radio",
    className: "form-check-input"
  }, register("archivedestination"), {
    defaultChecked: ((_settings$archivedest = settings.archivedestination) === null || _settings$archivedest === void 0 ? void 0 : _settings$archivedest.toLowerCase()) !== "s3",
    value: "LocalDisk",
    disabled: !enable
  })), " ", TOKENS.LOCAL_DISK, " "), /*#__PURE__*/react.createElement("label", {
    className: "ms-auto"
  }, /*#__PURE__*/react.createElement("input", _extends({
    type: "radio",
    className: "form-check-input"
  }, register("archivedestination"), {
    defaultChecked: ((_settings$archivedest2 = settings.archivedestination) === null || _settings$archivedest2 === void 0 ? void 0 : _settings$archivedest2.toLowerCase()) === "s3",
    value: "S3",
    disabled: !enable
  })), " ", TOKENS.S3))), (archiveDestination === null || archiveDestination === void 0 ? void 0 : archiveDestination.toLowerCase()) !== "s3" ? /*#__PURE__*/react.createElement("div", {
    className: "mb-3 row"
  }, /*#__PURE__*/react.createElement("label", {
    className: "fw-bold col-sm-3 col-form-label"
  }, TOKENS.ARCHIVE_FOLDER), /*#__PURE__*/react.createElement("div", {
    className: "col-md-9"
  }, /*#__PURE__*/react.createElement("input", _extends({
    type: "text",
    className: "form-control",
    disabled: !enable
  }, register("archivefolder", {
    value: settings.archivefolder
  }))))) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "mb-3 row"
  }, /*#__PURE__*/react.createElement("label", {
    className: "fw-bold col-sm-3 col-form-label"
  }, TOKENS.BUCKET), /*#__PURE__*/react.createElement("div", {
    className: "col-md-5"
  }, /*#__PURE__*/react.createElement("input", _extends({
    type: "text",
    className: "form-control",
    disabled: !enable
  }, register("s3bucket", {
    value: settings.s3bucket
  }))))), /*#__PURE__*/react.createElement("div", {
    className: "mb-3 row"
  }, /*#__PURE__*/react.createElement("label", {
    className: "fw-bold col-sm-3 col-form-label"
  }, TOKENS.ACCESS_KEY), /*#__PURE__*/react.createElement("div", {
    className: "col-md-5"
  }, /*#__PURE__*/react.createElement("input", _extends({
    type: "text",
    className: "form-control",
    disabled: !enable
  }, register("s3accesskey", {
    value: settings.s3accesskey
  }))))), /*#__PURE__*/react.createElement("div", {
    className: "mb-3 row"
  }, /*#__PURE__*/react.createElement("label", {
    className: "fw-bold col-sm-3 col-form-label"
  }, TOKENS.SECRET_KEY), /*#__PURE__*/react.createElement("div", {
    className: "col-md-5"
  }, /*#__PURE__*/react.createElement("input", _extends({
    type: "text",
    className: "form-control",
    disabled: !enable
  }, register("s3secretkey", {
    value: settings.s3secretkey
  }))))), /*#__PURE__*/react.createElement("div", {
    className: "mb-3 row"
  }, /*#__PURE__*/react.createElement("label", {
    className: "fw-bold col-sm-3 col-form-label"
  }, TOKENS.REGION), /*#__PURE__*/react.createElement("div", {
    className: "col-md-5"
  }, /*#__PURE__*/react.createElement("select", _extends({
    className: "form-control form-select",
    disabled: !enable
  }, register("s3region", {
    value: settings.s3region
  })), S3_REGIONS.map(function (region) {
    return /*#__PURE__*/react.createElement("option", {
      key: region.name,
      value: region.name
    }, region.desc);
  })))), /*#__PURE__*/react.createElement(ExecuteButton, {
    disabled: !enable,
    onClick: onTest,
    executing: TOKENS.TEST_CONNECTION_EXECUTING
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-exchange"
  }, "\xA0"), TOKENS.TEST_CONNECTION)));
};
var NotifyEmailToWatch = function NotifyEmailToWatch(_ref4) {
  var control = _ref4.control,
    setValue = _ref4.setValue,
    enable = _ref4.enable;
  var notifyEmailTo = (0,index_esm/* useWatch */.FH)({
    control: control,
    name: "notifyemailto"
  });
  return /*#__PURE__*/react.createElement(EditableChipList/* default */.A, {
    chips: (notifyEmailTo || "").split(/,/g).map(function (email) {
      return email.trim();
    }).filter(function (email) {
      return email.length > 0;
    }),
    onChipsChanged: function onChipsChanged(to) {
      return setValue("notifyemailto", to.join(","));
    },
    disabled: !enable
  });
};
var WorkspacesSettingsForm = function WorkspacesSettingsForm(_ref5) {
  var workspaceId = _ref5.workspaceId,
    supportUpdateSettings = _ref5.supportUpdateSettings,
    settings = _ref5.settings,
    onSubmit = _ref5.onSubmit,
    options = _ref5.options;
  var disabled = !supportUpdateSettings || settings == null;
  settings = settings || {};
  options = options || {};
  var _useState3 = (0,react.useState)((0,utils/* getValueAsBool */.CO)(settings.overrideemailsettings, false)),
    _useState4 = _slicedToArray(_useState3, 2),
    overrideAlerts = _useState4[0],
    setOverrideAlerts = _useState4[1];
  var _useState5 = (0,react.useState)((0,utils/* getValueAsBool */.CO)(settings.overrideperformancesettings, false)),
    _useState6 = _slicedToArray(_useState5, 2),
    overridePerf = _useState6[0],
    setOverridePerf = _useState6[1];
  var _useState7 = (0,react.useState)((0,utils/* getValueAsBool */.CO)(settings.overridecleanupoptions, false)),
    _useState8 = _slicedToArray(_useState7, 2),
    overrideCleanup = _useState8[0],
    setOverrideCleanup = _useState8[1];
  var _useForm = (0,index_esm/* useForm */.mN)({
      values: _objectSpread({}, settings)
    }),
    control = _useForm.control,
    register = _useForm.register,
    handleSubmit = _useForm.handleSubmit,
    getValues = _useForm.getValues,
    setValue = _useForm.setValue,
    errors = _useForm.formState.errors;
  var _useState9 = (0,react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    message = _useState10[0],
    setMessage = _useState10[1];

  //From ConnectorPrototype.java line #355
  var overrideSettingsArray = (0,react.useMemo)(function () {
    var settingsArray = [];
    if (overrideAlerts) {
      settingsArray.push("notifyemailto");
      settingsArray.push("notifyemailsubject");
      settingsArray.push("notifyemail");
      settingsArray.push("notifyemailfrom");
      settingsArray.push("smtpauthmechanism");
      settingsArray.push("smtpserver");
      settingsArray.push("smtpuser");
      settingsArray.push("smtppassword");
      settingsArray.push("smtpport");
      settingsArray.push("smtpsslmode");
      settingsArray.push("smtpsslcert");
    }
    if (overridePerf) {
      settingsArray.push("maxworkersperport");
      settingsArray.push("maxfilesperport");
    }
    if (overrideCleanup) {
      settingsArray.push("autotasktype");
      settingsArray.push("autotaskinterval");
      settingsArray.push("cleanupsentfolder");
      settingsArray.push("cleanupsendfolder");
      settingsArray.push("cleanupreceivefolder");
      settingsArray.push("cleanuptransactions");
      settingsArray.push("archivedestination");
      settingsArray.push("archivefolder");
      settingsArray.push("s3url");
      settingsArray.push("s3prefix");
      settingsArray.push("s3bucket");
      settingsArray.push("s3accesskey");
      settingsArray.push("s3secretkey");
      settingsArray.push("s3region");
    }
    if (overrideAlerts || overridePerf || overrideCleanup) {
      settingsArray.push("__other__");
    }
    return settingsArray;
  }, [overrideAlerts, overridePerf, overrideCleanup]);
  var handleAction = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(action, successCallback, failCallback, fieldValues) {
      var data, response, headers, _response, error;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setMessage(null);
            fieldValues = fieldValues !== null && fieldValues !== void 0 ? fieldValues : getValues();
            data = overrideSettingsArray.reduce(function (settings, name) {
              if (fieldValues[name] != null) settings[name] = fieldValues[name];
              return settings;
            }, {});
            data = _objectSpread(_objectSpread({}, data), {}, {
              workspaceId: workspaceId,
              overrideemailsettings: overrideAlerts,
              overrideperformancesettings: overridePerf,
              overridecleanupoptions: overrideCleanup,
              "@json": true
            });
            response = null;
            headers = {
              "Content-Type": "application/x-www-form-urlencoded"
            };
            if (!(action === ACTION.SUBMIT)) {
              _context.next = 12;
              break;
            }
            _context.next = 9;
            return axios/* default */.A.put("api/workspaces.rsd", data, {
              headers: headers
            });
          case 9:
            response = _context.sent;
            _context.next = 28;
            break;
          case 12:
            if (!(action === ACTION.TEST)) {
              _context.next = 18;
              break;
            }
            _context.next = 15;
            return axios/* default */.A.post("src/s3TestConnection.rsb", data, {
              headers: headers
            });
          case 15:
            response = _context.sent;
            _context.next = 28;
            break;
          case 18:
            if (!(action === ACTION.RUN)) {
              _context.next = 28;
              break;
            }
            _context.next = 21;
            return axios/* default */.A.put("api/workspaces.rsd", data, {
              headers: headers
            });
          case 21:
            response = _context.sent;
            if ((0,utils/* getResultErrorMessage */.hz)((_response = response) === null || _response === void 0 || (_response = _response.data) === null || _response === void 0 ? void 0 : _response.items)) {
              _context.next = 28;
              break;
            }
            data.age = fieldValues.autotaskinterval;
            data.folder = fieldValues.archivefolder;
            _context.next = 27;
            return axios/* default */.A.post("api/cleanup.rsb", data, {
              headers: headers
            });
          case 27:
            response = _context.sent;
          case 28:
            error = (0,utils/* getResultErrorMessage */.hz)(response.data.items);
            setMessage(error ? {
              type: "error",
              message: error
            } : {
              type: "success",
              message: TOKENS.SUCCESS
            });
            error && (failCallback === null || failCallback === void 0 ? void 0 : failCallback.call(null, error));
            !error && (successCallback === null || successCallback === void 0 ? void 0 : successCallback.call(null, data));
          case 32:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleAction(_x, _x2, _x3, _x4) {
      return _ref6.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react.createElement("form", {
    id: "react_workspaces_settings_form",
    onSubmit: handleSubmit(handleAction.bind(null, ACTION.SUBMIT, onSubmit, null))
  }, /*#__PURE__*/react.createElement(OverrideSection, {
    sectionName: TOKENS.SECTION_ALERTS,
    overrideName: "overrideemailsettings",
    enableOverride: overrideAlerts,
    setEnableOverride: setOverrideAlerts,
    disabled: disabled
  }, function (enable) {
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
      className: "mb-3 row"
    }, /*#__PURE__*/react.createElement("label", {
      className: "fw-bold col-sm-3 col-form-label"
    }, TOKENS.TO), /*#__PURE__*/react.createElement("div", {
      className: "col-sm-9 " + (errors.notifyemailto ? "has-error" : "")
    }, /*#__PURE__*/react.createElement("input", _extends({
      type: "text",
      autoFocus: true,
      className: "d-none"
    }, register("notifyemailto", {
      value: settings.notifyemailto || "",
      validate: function validate(value) {
        if (!enable) return true;
        var emails = value.split(/,/g).map(function (email) {
          return email.trim();
        }).filter(function (email) {
          return email.length > 0;
        });
        if (emails.length === 0) return TOKENS.FIELD_REQUIRE;
        var invalidEmail = emails.find(function (email) {
          return !(0,utils/* verifyEmailAddress */.GE)(email);
        });
        return (invalidEmail === null || invalidEmail === void 0 ? void 0 : invalidEmail.length) > 0 ? TOKENS.INVALID_EMAIL + invalidEmail : true;
      }
    }))), /*#__PURE__*/react.createElement(NotifyEmailToWatch, {
      control: control,
      setValue: setValue,
      enable: enable
    }), errors.notifyemailto && /*#__PURE__*/react.createElement("label", {
      className: "has-error control-label col-form-label"
    }, errors.notifyemailto.message))), /*#__PURE__*/react.createElement("div", {
      className: "mb-3 row"
    }, /*#__PURE__*/react.createElement("label", {
      className: "fw-bold col-sm-3 col-form-label"
    }, TOKENS.SUBJECT), /*#__PURE__*/react.createElement("div", {
      className: "col-sm-9 " + (errors.notifyemailsubject ? "has-error" : "")
    }, /*#__PURE__*/react.createElement("input", _extends({
      type: "text",
      className: "form-control",
      disabled: !enable
    }, register("notifyemailsubject", {
      value: settings.notifyemailsubject,
      required: enable ? TOKENS.FIELD_REQUIRE : false
    }))), errors.notifyemailsubject && /*#__PURE__*/react.createElement("label", {
      className: "has-error control-label col-form-label"
    }, errors.notifyemailsubject.message))), /*#__PURE__*/react.createElement("div", {
      className: "mb-3 row"
    }, /*#__PURE__*/react.createElement("label", {
      className: "col-sm-3 col-form-label"
    }), /*#__PURE__*/react.createElement("label", {
      className: "col-sm-9 col-form-label"
    }, /*#__PURE__*/react.createElement("input", _extends({
      type: "checkbox",
      className: "form-check-input"
    }, register("notifyemail", {
      value: settings.notifyemail
    }), {
      value: "true",
      "data-uncheckvalue": "false",
      disabled: !enable
    })), " ", TOKENS.NOTIFY_EMAIL)));
  }), /*#__PURE__*/react.createElement(OverrideSection, {
    sectionName: TOKENS.SECTION_PERFORMANCE,
    overrideName: "overrideperformancesettings",
    enableOverride: overridePerf,
    setEnableOverride: setOverridePerf,
    disabled: disabled
  }, function (enable) {
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
      className: "mb-3 row"
    }, /*#__PURE__*/react.createElement("label", {
      className: "fw-bold col-sm-3 col-form-label"
    }, TOKENS.MAX_WORKERS_PER_PORT), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5"
    }, /*#__PURE__*/react.createElement("input", _extends({
      type: "number",
      className: "form-control"
    }, register("maxworkersperport", {
      value: settings.maxworkersperport
    }), {
      disabled: !enable,
      min: 0
    })))), /*#__PURE__*/react.createElement("div", {
      className: "mb-3 row"
    }, /*#__PURE__*/react.createElement("label", {
      className: "fw-bold col-sm-3 col-form-label"
    }, TOKENS.MAX_FILES_PER_PORT), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5"
    }, /*#__PURE__*/react.createElement("input", _extends({
      type: "number",
      className: "form-control"
    }, register("maxfilesperport", {
      value: settings.maxfilesperport
    }), {
      disabled: !enable,
      min: 0
    })))));
  }), /*#__PURE__*/react.createElement(OverrideSection, {
    sectionName: TOKENS.SECTION_CLEANUP_OPTIONS,
    overrideName: "overridecleanupoptions",
    enableOverride: overrideCleanup,
    setEnableOverride: setOverrideCleanup,
    disabled: disabled
  }, function (enable) {
    var _settings$autotasktyp, _settings$autotasktyp2;
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
      className: "mb-3 row"
    }, /*#__PURE__*/react.createElement("label", {
      className: "fw-bold col-sm-3 col-form-label"
    }, TOKENS.TYPE), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 d-flex"
    }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", _extends({
      type: "radio",
      className: "form-check-input"
    }, register("autotasktype"), {
      defaultChecked: ((_settings$autotasktyp = settings.autotasktype) === null || _settings$autotasktyp === void 0 ? void 0 : _settings$autotasktyp.toLowerCase()) !== "delete",
      value: "Archive",
      disabled: !enable
    })), " ", TOKENS.ARCHIVE_LOGS, " "), /*#__PURE__*/react.createElement("label", {
      className: "ms-auto"
    }, /*#__PURE__*/react.createElement("input", _extends({
      type: "radio",
      className: "form-check-input"
    }, register("autotasktype"), {
      defaultChecked: ((_settings$autotasktyp2 = settings.autotasktype) === null || _settings$autotasktyp2 === void 0 ? void 0 : _settings$autotasktyp2.toLowerCase()) === "delete",
      value: "Delete",
      disabled: !enable
    })), " ", TOKENS.DELETE_LOGS))), /*#__PURE__*/react.createElement("div", {
      className: "mb-3 row"
    }, /*#__PURE__*/react.createElement("label", {
      className: "fw-bold col-sm-3 col-form-label"
    }, TOKENS.INTERVAL_DAYS), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5"
    }, /*#__PURE__*/react.createElement("input", _extends({
      type: "number",
      className: "form-control"
    }, register("autotaskinterval", {
      value: settings.autotaskinterval
    }), {
      disabled: !enable,
      placeholder: TOKENS.INTERVAL_DAYS_PLACEHOLDER
    })))), !options.disablesavetosentfolder && /*#__PURE__*/react.createElement("div", {
      className: "mb-3 row"
    }, /*#__PURE__*/react.createElement("label", {
      className: "fw-bold col-sm-3 col-form-label"
    }, TOKENS.SENT_FILES), /*#__PURE__*/react.createElement("label", {
      className: "col-sm-9 col-form-label"
    }, /*#__PURE__*/react.createElement("input", _extends({
      type: "checkbox",
      className: "form-check-input"
    }, register("cleanupsentfolder", {
      value: settings.cleanupsentfolder
    }), {
      value: "true",
      "data-uncheckvalue": "false",
      disabled: !enable
    })), " ", TOKENS.SENT_FILES_LABEL)), /*#__PURE__*/react.createElement("div", {
      className: "mb-3 row"
    }, /*#__PURE__*/react.createElement("label", {
      className: "fw-bold col-sm-3 col-form-label"
    }, TOKENS.SEND_FILES), /*#__PURE__*/react.createElement("label", {
      className: "col-sm-9 col-form-label"
    }, /*#__PURE__*/react.createElement("input", _extends({
      type: "checkbox",
      className: "form-check-input"
    }, register("cleanupsendfolder", {
      value: settings.cleanupsendfolder
    }), {
      value: "true",
      "data-uncheckvalue": "false",
      disabled: !enable
    })), " ", TOKENS.SEND_FILES_LABEL)), /*#__PURE__*/react.createElement("div", {
      className: "mb-3 row"
    }, /*#__PURE__*/react.createElement("label", {
      className: "fw-bold col-sm-3 col-form-label"
    }, TOKENS.RECEIVE_FILES), /*#__PURE__*/react.createElement("label", {
      className: "col-sm-9 col-form-label"
    }, /*#__PURE__*/react.createElement("input", _extends({
      type: "checkbox",
      className: "form-check-input"
    }, register("cleanupreceivefolder", {
      value: settings.cleanupreceivefolder
    }), {
      value: "true",
      "data-uncheckvalue": "false",
      disabled: !enable
    })), " ", TOKENS.RECEIVE_FILES_LABEL)), /*#__PURE__*/react.createElement(ArchiveWatch, {
      control: control,
      register: register,
      settings: settings,
      enable: enable,
      onTest: handleAction.bind(null, ACTION.TEST)
    }), /*#__PURE__*/react.createElement(ExecuteButton, {
      disabled: !enable,
      onClick: handleAction.bind(null, ACTION.RUN),
      executing: TOKENS.RUN_NOW_EXECUTING
    }, /*#__PURE__*/react.createElement("i", {
      className: "fa fa-play"
    }, "\xA0"), TOKENS.RUN_NOW), /*#__PURE__*/react.createElement(DismissibleAlert/* default */.A, _extends({}, message, {
      onClose: setMessage.bind(null, null)
    })));
  }), /*#__PURE__*/react.createElement(OverrideSection, {
    sectionName: TOKENS.SECTION_MISCELLANEOUS,
    enableOverride: overrideAlerts || overridePerf || overrideCleanup,
    disabled: disabled
  }, function (enable) {
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
      className: "mb-3 row"
    }, /*#__PURE__*/react.createElement("label", {
      className: "fw-bold col-sm-3 col-form-label"
    }, TOKENS.OTHER_SETTINGS), /*#__PURE__*/react.createElement("div", {
      className: "col-sm-9"
    }, /*#__PURE__*/react.createElement("textarea", _extends({
      className: "form-control",
      rows: "3"
    }, register("__other__", {
      value: settings.__other__
    }), {
      disabled: !enable
    })))));
  }));
};
var WorkspaceSettingsModal = function WorkspaceSettingsModal(props) {
  var _useState11 = (0,react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    data = _useState12[0],
    setData = _useState12[1];
  (0,react.useEffect)(function () {
    if (!props.workspaceId || !props.show) {
      setData(null);
      return;
    }
    var controller = new AbortController();
    _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _profile$items, _profile$items2, ws, profile, _data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0,utils/* fetchData */.Fd)(controller, "api/workspaces.rsd", {
              "workspaceId": props.workspaceId
            });
          case 3:
            ws = _context2.sent;
            _context2.next = 6;
            return (0,utils/* fetchData */.Fd)(controller, "api/profile.rsd", {
              "type": "Application"
            });
          case 6:
            profile = _context2.sent;
            _data = {
              settings: ws.items[0] || {},
              options: {}
            };
            ((_profile$items = profile.items) === null || _profile$items === void 0 ? void 0 : _profile$items.length) > 0 && Object.keys(_data.settings).forEach(function (key) {
              _data.settings[key] = _data.settings[key] || profile.items[0][key];
            });
            ["notifyemail", "cleanupsentfolder", "cleanupsendfolder", "cleanupreceivefolder"].forEach(function (key) {
              _data.settings[key] = (0,utils/* getValueAsBool */.CO)(_data.settings[key], true);
            });
            delete _data.settings.workspaceid;
            ((_profile$items2 = profile.items) === null || _profile$items2 === void 0 ? void 0 : _profile$items2.length) > 0 && ["disablesavetosentfolder"].forEach(function (key) {
              _data.options[key] = profile.items[0][key];
            });
            setData(_data);
            _context2.next = 18;
            break;
          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](0);
            setData({});
          case 18:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 15]]);
    }))();
    return function () {
      return controller.abort();
    };
  }, [props.workspaceId, props.show]);
  return /*#__PURE__*/react.createElement(Modal/* default */.A, {
    className: "workspace-settings-modal",
    backdrop: "static",
    size: "lg",
    show: props.show,
    onHide: props.onHide,
    scrollable: true
  }, /*#__PURE__*/react.createElement(Modal/* default */.A.Header, {
    className: "py-0",
    closeButton: true
  }, /*#__PURE__*/react.createElement(Modal/* default */.A.Title, {
    className: "d-flex"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-nowrap text-truncate me-2"
  }, props.workspaceId), /*#__PURE__*/react.createElement("span", null, TOKENS.WORKSPACE_SETTINGS_SUFFIX))), /*#__PURE__*/react.createElement(Modal/* default */.A.Body, {
    className: "p-4 pt-0"
  }, /*#__PURE__*/react.createElement(WorkspacesSettingsForm, _extends({
    key: (data === null || data === void 0 ? void 0 : data.settings) != null
  }, data, {
    workspaceId: props.workspaceId,
    supportUpdateSettings: props.supportUpdateSettings,
    onSubmit: props.onHide
  }))), /*#__PURE__*/react.createElement(Modal/* default */.A.Footer, null, /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "outline-secondary",
    onClick: props.onHide
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-close"
  }), " ", TOKENS.CLOSE), /*#__PURE__*/react.createElement(Button/* default */.A, {
    form: "react_workspaces_settings_form",
    type: "submit",
    disabled: !props.supportUpdateSettings
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-save"
  }), " ", TOKENS.SAVE)));
};
WorkspaceSettingsModal.propTypes = {
  /**
   * The workspace id.
   */
  workspaceId: (prop_types_default()).string.isRequired,
  /**
   * Does the current user support updating workspace settings?
   */
  supportUpdateSettings: (prop_types_default()).bool,
  /**
   * Event: onSave.
   */
  onHide: (prop_types_default()).func.isRequired
};
/* harmony default export */ const workspace_WorkspaceSettingsModal = (WorkspaceSettingsModal);

/***/ }),

/***/ 32264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var GRID_WIDTH = 400;
var NODE_HEIGHT = 65;
var layout = function layout(nodes, edges, rect) {
  var nm = Object.create(null);
  nodes = nodes.map(function (node) {
    return nm[node.id] = {
      x: 0,
      y: 0,
      w: Math.ceil(node.h / NODE_HEIGHT),
      d: Math.ceil(node.w / GRID_WIDTH),
      children: [],
      node: node,
      root: true,
      visited: false,
      edgeCount: 0
    };
  });
  edges.forEach(function (edge) {
    if (!nm[edge.source]) return true;
    var target = nm[edge.target];
    if (target && !target.visited) {
      target.visited = true;
      target.root = false;
      target.bottom = edge.bottom;
      nm[edge.source].children.push(target);
    }
    target && nm[edge.source].edgeCount++;
  });
  var sy = 0;
  nodes.forEach(function (node) {
    return node.visited = node.root && node.children.length === 0;
  });
  var orphans = nodes.filter(function (node) {
    return node.visited;
  }).sort(function (lhs, rhs) {
    return nm[lhs.node.id].edgeCount - nm[rhs.node.id].edgeCount || lhs.w - rhs.w;
  });
  var pendingNodes = orphans.length > 0 ? nodes.filter(function (node) {
    return !node.visited;
  }) : nodes;
  while (pendingNodes.length > 0) {
    var roots = pendingNodes.filter(function (node) {
      return node.root;
    });
    if (roots.length <= 0) {
      var root = pendingNodes[pendingNodes.reduce(function (result, node, index) {
        if (node.children.length > 0 && node.children.length < result.count) {
          result.count = node.children.length;
          result.index = index;
        }
        return result;
      }, {
        index: 0,
        count: Number.MAX_SAFE_INTEGER
      }).index];
      root.root = true;
      roots.push(root);
    }
    var area = visitNodes(roots, 0, sy);
    sy += area.w + 1;
    pendingNodes = pendingNodes.filter(function (node) {
      return !node.visited;
    });
  }
  if (orphans.length > 0) {
    var ox = 0,
      oy = 0,
      my = 0;
    if (sy > 0 && orphans[0].w <= sy) {
      var mod = orphans.reduce(function (d, node) {
        return Math.max(d, node.d);
      }, 0);
      var flags = nodes.filter(function (node) {
        return node.y >= 0 && node.x < mod;
      }).reduce(function (flags, node) {
        return flags[Math.max(node.y - 1, 0)] = false, flags.splice.apply(flags, [node.y, node.w + 1].concat(_toConsumableArray(Array(node.w + 1).fill(false)))), flags;
      }, Array(sy + 1).fill(true));
      do {
        var ow = orphans[0].w;
        do {
          if (ow === 1 && flags[oy] || ow > 1 && flags.slice(oy, oy + ow).find(function (flag) {
            return !flag;
          }) == null) {
            var node = orphans.splice(0, 1)[0];
            node.y = oy;
            oy = oy + node.w + 1;
            break;
          }
        } while (++oy <= sy - ow);
      } while (orphans.length > 0 && oy + orphans[0].w <= sy);
    }
    oy = Math.max(oy, sy);
    var mox = Math.ceil(Math.min((rect.ex - rect.sx) / GRID_WIDTH, Math.min(Math.sqrt(orphans.reduce(function (td, node) {
      return td + node.d;
    }, 0)), 6)));
    orphans.sort(function (lhs, rhs) {
      return lhs.w - rhs.w;
    }).forEach(function (node) {
      if (ox > 0 && ox + node.d > mox) {
        ox = 0;
        oy += my + 1;
        my = 0;
      }
      node.x = ox;
      node.y = oy;
      ox += node.d;
      my = Math.max(my, node.w);
    });
  }
  return nodes.map(function (node) {
    return _objectSpread(_objectSpread({}, node.node), {}, {
      x: rect.sx + node.x * GRID_WIDTH,
      y: rect.sy + node.y * NODE_HEIGHT
    });
  });
};
var visitNodes = function visitNodes(nodes, sx, sy) {
  return nodes.reduce(function (ta, node, index) {
    node.x = sx;
    var area = visitNode(node, sy);
    sy += area.w + 1;
    ta.w += area.w + (index > 0 ? 1 : 0);
    ta.d = Math.max(ta.d, area.d);
    return ta;
  }, {
    w: 0,
    d: 0
  });
};
var visitNode = function visitNode(node, sy) {
  node.visited = true;
  node.y = sy;
  var children = node.children.filter(function (child) {
    return !child.root;
  });
  var next = children.filter(function (children) {
    return !children.bottom;
  });
  var dy = next.length > 0 ? Math.max(Math.ceil(Math.max(node.w - next.reduce(function (tw, node) {
    return tw + node.w;
  }, 0), 0) / (next.length + 1)), next.length > 1 ? 1 : 0) : 0;
  var area = visitNodes(next, node.x + node.d, sy + dy);
  area.w = Math.max(dy + area.w, node.w);
  area.d += node.d;
  var bt = visitNodes(children.filter(function (children) {
    return children.bottom;
  }), node.x, node.y + area.w + 1);
  area.w += bt.w + (bt.w > 0 ? 1 : 0);
  area.d = Math.max(area.d, bt.d);
  return area;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (layout);

/***/ }),

/***/ 83340:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5338);
/* harmony import */ var _components_migration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29886);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32264);
/* harmony import */ var _components_workspace_WorkspaceSettingsModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87267);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





var flowImportModalContainer = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(flowImportModalContainer);
var flowImportModalRoot = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(flowImportModalContainer);
flowImportModalRoot.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_migration__WEBPACK_IMPORTED_MODULE_2__/* .ImportModal */ .zb, {
  isFlow: true,
  isFlowConnectors: false,
  id: "flowMigrationImportModal"
}));
var flowExportModalContainer = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(flowExportModalContainer);
var flowExportModalRoot = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(flowExportModalContainer);
flowExportModalRoot.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_migration__WEBPACK_IMPORTED_MODULE_2__/* .ExportModal */ .OM, {
  isFlow: true,
  isFlowConnectors: false,
  id: "flowMigrationExportModal"
}));
var flowConnectorsImportModalContainer = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(flowConnectorsImportModalContainer);
var flowConnectorsImportModalRoot = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(flowConnectorsImportModalContainer);
flowConnectorsImportModalRoot.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_migration__WEBPACK_IMPORTED_MODULE_2__/* .ImportModal */ .zb, {
  isFlow: true,
  isFlowConnectors: true,
  id: "flowConnectorsMigrationImportModal"
}));
var flowConnectorsExportModalContainer = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(flowConnectorsExportModalContainer);
var flowConnectorsExportModalRoot = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(flowConnectorsExportModalContainer);
flowConnectorsExportModalRoot.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_migration__WEBPACK_IMPORTED_MODULE_2__/* .ExportModal */ .OM, {
  isFlow: true,
  isFlowConnectors: true,
  id: "flowConnectorsMigrationExportModal"
}));
var importSampleFlowModalContainer = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(importSampleFlowModalContainer);
var importSampleFlowModalRoot = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(importSampleFlowModalContainer);
importSampleFlowModalRoot.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_migration__WEBPACK_IMPORTED_MODULE_2__/* .ImportSampleFlowModal */ .Bv, null));
var upgradeBuildModalContainer = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(upgradeBuildModalContainer);
var upgradeBuildModalRoot = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(upgradeBuildModalContainer);
upgradeBuildModalRoot.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_migration__WEBPACK_IMPORTED_MODULE_2__/* .UpgradeBuildModal */ .k8, null));
function WorkspaceSettingsModalWrapper(_ref) {
  var callbacks = _ref.callbacks;
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    showModal = _React$useState2[0],
    setShowModal = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(""),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    workspaceId = _React$useState4[0],
    setWorkspaceId = _React$useState4[1];
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    supportUpdateSettings = _React$useState6[0],
    setSupportUpdateSettings = _React$useState6[1];
  callbacks && (callbacks.showWorkspaceSettingsModal = function (workspaceId, supportUpdateSettings) {
    setShowModal(true);
    setWorkspaceId(workspaceId);
    setSupportUpdateSettings(supportUpdateSettings);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_workspace_WorkspaceSettingsModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    show: showModal,
    workspaceId: workspaceId,
    supportUpdateSettings: supportUpdateSettings,
    onHide: function onHide() {
      return setShowModal(false);
    }
  });
}
var workspaceSettingsModalContainer = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(workspaceSettingsModalContainer);
var workspaceSettingsModalRoot = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(workspaceSettingsModalContainer);
workspaceSettingsModalRoot.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(WorkspaceSettingsModalWrapper, {
  callbacks: window.rsb.workflow.flow
}));
window.rsb.workflow.flow.registerLayoutAlgorithm("TREE", _layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A);

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

/***/ }),

/***/ 49785:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FH: () => (/* binding */ useWatch),
/* harmony export */   Op: () => (/* binding */ FormProvider),
/* harmony export */   as: () => (/* binding */ useController),
/* harmony export */   mN: () => (/* binding */ useForm)
/* harmony export */ });
/* unused harmony exports Controller, Form, appendErrors, createFormControl, get, set, useFieldArray, useFormContext, useFormState */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);



var isCheckBoxInput = (element) => element.type === 'checkbox';

var isDateObject = (value) => value instanceof Date;

var isNullOrUndefined = (value) => value == null;

const isObjectType = (value) => typeof value === 'object';
var isObject = (value) => !isNullOrUndefined(value) &&
    !Array.isArray(value) &&
    isObjectType(value) &&
    !isDateObject(value);

var getEventValue = (event) => isObject(event) && event.target
    ? isCheckBoxInput(event.target)
        ? event.target.checked
        : event.target.value
    : event;

var getNodeParentName = (name) => name.substring(0, name.search(/\.\d+(\.|$)/)) || name;

var isNameInFieldArray = (names, name) => names.has(getNodeParentName(name));

var isPlainObject = (tempObject) => {
    const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
    return (isObject(prototypeCopy) && prototypeCopy.hasOwnProperty('isPrototypeOf'));
};

var isWeb = typeof window !== 'undefined' &&
    typeof window.HTMLElement !== 'undefined' &&
    typeof document !== 'undefined';

function cloneObject(data) {
    let copy;
    const isArray = Array.isArray(data);
    const isFileListInstance = typeof FileList !== 'undefined' ? data instanceof FileList : false;
    if (data instanceof Date) {
        copy = new Date(data);
    }
    else if (data instanceof Set) {
        copy = new Set(data);
    }
    else if (!(isWeb && (data instanceof Blob || isFileListInstance)) &&
        (isArray || isObject(data))) {
        copy = isArray ? [] : {};
        if (!isArray && !isPlainObject(data)) {
            copy = data;
        }
        else {
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    copy[key] = cloneObject(data[key]);
                }
            }
        }
    }
    else {
        return data;
    }
    return copy;
}

var compact = (value) => Array.isArray(value) ? value.filter(Boolean) : [];

var isUndefined = (val) => val === undefined;

var get = (object, path, defaultValue) => {
    if (!path || !isObject(object)) {
        return defaultValue;
    }
    const result = compact(path.split(/[,[\].]+?/)).reduce((result, key) => isNullOrUndefined(result) ? result : result[key], object);
    return isUndefined(result) || result === object
        ? isUndefined(object[path])
            ? defaultValue
            : object[path]
        : result;
};

var isBoolean = (value) => typeof value === 'boolean';

var isKey = (value) => /^\w*$/.test(value);

var stringToPath = (input) => compact(input.replace(/["|']|\]/g, '').split(/\.|\[/));

var set = (object, path, value) => {
    let index = -1;
    const tempPath = isKey(path) ? [path] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while (++index < length) {
        const key = tempPath[index];
        let newValue = value;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue =
                isObject(objValue) || Array.isArray(objValue)
                    ? objValue
                    : !isNaN(+tempPath[index + 1])
                        ? []
                        : {};
        }
        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
            return;
        }
        object[key] = newValue;
        object = object[key];
    }
};

const EVENTS = {
    BLUR: 'blur',
    FOCUS_OUT: 'focusout',
    CHANGE: 'change',
};
const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
};
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
};

const HookFormContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
/**
 * This custom hook allows you to access the form context. useFormContext is intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop. To be used with {@link FormProvider}.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @returns return all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */
const useFormContext = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(HookFormContext);
/**
 * A provider component that propagates the `useForm` methods to all children components via [React Context](https://reactjs.org/docs/context.html) API. To be used with {@link useFormContext}.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @param props - all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */
const FormProvider = (props) => {
    const { children, ...data } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(HookFormContext.Provider, { value: data }, children));
};

var getProxyFormState = (formState, control, localProxyFormState, isRoot = true) => {
    const result = {
        defaultValues: control._defaultValues,
    };
    for (const key in formState) {
        Object.defineProperty(result, key, {
            get: () => {
                const _key = key;
                if (control._proxyFormState[_key] !== VALIDATION_MODE.all) {
                    control._proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
                }
                localProxyFormState && (localProxyFormState[_key] = true);
                return formState[_key];
            },
        });
    }
    return result;
};

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

/**
 * This custom hook allows you to subscribe to each form state, and isolate the re-render at the custom hook level. It has its scope in terms of form state subscription, so it would not affect other useFormState and useForm. Using this hook can reduce the re-render impact on large and complex form application.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformstate) • [Demo](https://codesandbox.io/s/useformstate-75xly)
 *
 * @param props - include options on specify fields to subscribe. {@link UseFormStateReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, control } = useForm({
 *     defaultValues: {
 *     firstName: "firstName"
 *   }});
 *   const { dirtyFields } = useFormState({
 *     control
 *   });
 *   const onSubmit = (data) => console.log(data);
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input {...register("firstName")} placeholder="First Name" />
 *       {dirtyFields.firstName && <p>Field is dirty.</p>}
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */
function useFormState(props) {
    const methods = useFormContext();
    const { control = methods.control, disabled, name, exact } = props || {};
    const [formState, updateFormState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(control._formState);
    const _localProxyFormState = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
        isDirty: false,
        isLoading: false,
        dirtyFields: false,
        touchedFields: false,
        validatingFields: false,
        isValidating: false,
        isValid: false,
        errors: false,
    });
    useIsomorphicLayoutEffect(() => control._subscribe({
        name: name,
        formState: _localProxyFormState.current,
        exact,
        callback: (formState) => {
            !disabled &&
                updateFormState({
                    ...control._formState,
                    ...formState,
                });
        },
    }), [name, disabled, exact]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        _localProxyFormState.current.isValid && control._setValid(true);
    }, [control]);
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => getProxyFormState(formState, control, _localProxyFormState.current, false), [formState, control]);
}

var isString = (value) => typeof value === 'string';

var generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue) => {
    if (isString(names)) {
        isGlobal && _names.watch.add(names);
        return get(formValues, names, defaultValue);
    }
    if (Array.isArray(names)) {
        return names.map((fieldName) => (isGlobal && _names.watch.add(fieldName), get(formValues, fieldName)));
    }
    isGlobal && (_names.watchAll = true);
    return formValues;
};

/**
 * Custom hook to subscribe to field change and isolate re-rendering at the component level.
 *
 * @remarks
 *
 * [API](https://react-hook-form.com/docs/usewatch) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-usewatch-h9i5e)
 *
 * @example
 * ```tsx
 * const { control } = useForm();
 * const values = useWatch({
 *   name: "fieldName"
 *   control,
 * })
 * ```
 */
function useWatch(props) {
    const methods = useFormContext();
    const { control = methods.control, name, defaultValue, disabled, exact, } = props || {};
    const _defaultValue = react__WEBPACK_IMPORTED_MODULE_0__.useRef(defaultValue);
    const [value, updateValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(control._getWatch(name, _defaultValue.current));
    useIsomorphicLayoutEffect(() => control._subscribe({
        name: name,
        formState: {
            values: true,
        },
        exact,
        callback: (formState) => !disabled &&
            updateValue(generateWatchOutput(name, control._names, formState.values || control._formValues, false, _defaultValue.current)),
    }), [name, control, disabled, exact]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => control._removeUnmounted());
    return value;
}

/**
 * Custom hook to work with controlled component, this function provide you with both form and field level state. Re-render is isolated at the hook level.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usecontroller) • [Demo](https://codesandbox.io/s/usecontroller-0o8px)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns field properties, field and form state. {@link UseControllerReturn}
 *
 * @example
 * ```tsx
 * function Input(props) {
 *   const { field, fieldState, formState } = useController(props);
 *   return (
 *     <div>
 *       <input {...field} placeholder={props.name} />
 *       <p>{fieldState.isTouched && "Touched"}</p>
 *       <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *     </div>
 *   );
 * }
 * ```
 */
function useController(props) {
    const methods = useFormContext();
    const { name, disabled, control = methods.control, shouldUnregister } = props;
    const isArrayField = isNameInFieldArray(control._names.array, name);
    const value = useWatch({
        control,
        name,
        defaultValue: get(control._formValues, name, get(control._defaultValues, name, props.defaultValue)),
        exact: true,
    });
    const formState = useFormState({
        control,
        name,
        exact: true,
    });
    const _props = react__WEBPACK_IMPORTED_MODULE_0__.useRef(props);
    const _registerProps = react__WEBPACK_IMPORTED_MODULE_0__.useRef(control.register(name, {
        ...props.rules,
        value,
        ...(isBoolean(props.disabled) ? { disabled: props.disabled } : {}),
    }));
    const fieldState = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => Object.defineProperties({}, {
        invalid: {
            enumerable: true,
            get: () => !!get(formState.errors, name),
        },
        isDirty: {
            enumerable: true,
            get: () => !!get(formState.dirtyFields, name),
        },
        isTouched: {
            enumerable: true,
            get: () => !!get(formState.touchedFields, name),
        },
        isValidating: {
            enumerable: true,
            get: () => !!get(formState.validatingFields, name),
        },
        error: {
            enumerable: true,
            get: () => get(formState.errors, name),
        },
    }), [formState, name]);
    const onChange = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => _registerProps.current.onChange({
        target: {
            value: getEventValue(event),
            name: name,
        },
        type: EVENTS.CHANGE,
    }), [name]);
    const onBlur = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => _registerProps.current.onBlur({
        target: {
            value: get(control._formValues, name),
            name: name,
        },
        type: EVENTS.BLUR,
    }), [name, control._formValues]);
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((elm) => {
        const field = get(control._fields, name);
        if (field && elm) {
            field._f.ref = {
                focus: () => elm.focus(),
                select: () => elm.select(),
                setCustomValidity: (message) => elm.setCustomValidity(message),
                reportValidity: () => elm.reportValidity(),
            };
        }
    }, [control._fields, name]);
    const field = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
        name,
        value,
        ...(isBoolean(disabled) || formState.disabled
            ? { disabled: formState.disabled || disabled }
            : {}),
        onChange,
        onBlur,
        ref,
    }), [name, disabled, formState.disabled, onChange, onBlur, ref, value]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const _shouldUnregisterField = control._options.shouldUnregister || shouldUnregister;
        control.register(name, {
            ..._props.current.rules,
            ...(isBoolean(_props.current.disabled)
                ? { disabled: _props.current.disabled }
                : {}),
        });
        const updateMounted = (name, value) => {
            const field = get(control._fields, name);
            if (field && field._f) {
                field._f.mount = value;
            }
        };
        updateMounted(name, true);
        if (_shouldUnregisterField) {
            const value = cloneObject(get(control._options.defaultValues, name));
            set(control._defaultValues, name, value);
            if (isUndefined(get(control._formValues, name))) {
                set(control._formValues, name, value);
            }
        }
        !isArrayField && control.register(name);
        return () => {
            (isArrayField
                ? _shouldUnregisterField && !control._state.action
                : _shouldUnregisterField)
                ? control.unregister(name)
                : updateMounted(name, false);
        };
    }, [name, control, isArrayField, shouldUnregister]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        control._setDisabledField({
            disabled,
            name,
        });
    }, [disabled, name, control]);
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
        field,
        formState,
        fieldState,
    }), [field, formState, fieldState]);
}

/**
 * Component based on `useController` hook to work with controlled component.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usecontroller/controller) • [Demo](https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw) • [Video](https://www.youtube.com/watch?v=N2UNk_UCVyA)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns provide field handler functions, field and form state.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control } = useForm<FormValues>({
 *     defaultValues: {
 *       test: ""
 *     }
 *   });
 *
 *   return (
 *     <form>
 *       <Controller
 *         control={control}
 *         name="test"
 *         render={({ field: { onChange, onBlur, value, ref }, formState, fieldState }) => (
 *           <>
 *             <input
 *               onChange={onChange} // send value to hook form
 *               onBlur={onBlur} // notify when input is touched
 *               value={value} // return updated value
 *               ref={ref} // set ref for focus management
 *             />
 *             <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *             <p>{fieldState.isTouched ? "touched" : ""}</p>
 *           </>
 *         )}
 *       />
 *     </form>
 *   );
 * }
 * ```
 */
const Controller = (props) => props.render(useController(props));

const flatten = (obj) => {
    const output = {};
    for (const key of Object.keys(obj)) {
        if (isObjectType(obj[key]) && obj[key] !== null) {
            const nested = flatten(obj[key]);
            for (const nestedKey of Object.keys(nested)) {
                output[`${key}.${nestedKey}`] = nested[nestedKey];
            }
        }
        else {
            output[key] = obj[key];
        }
    }
    return output;
};

const POST_REQUEST = 'post';
/**
 * Form component to manage submission.
 *
 * @param props - to setup submission detail. {@link FormProps}
 *
 * @returns form component or headless render prop.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control, formState: { errors } } = useForm();
 *
 *   return (
 *     <Form action="/api" control={control}>
 *       <input {...register("name")} />
 *       <p>{errors?.root?.server && 'Server error'}</p>
 *       <button>Submit</button>
 *     </Form>
 *   );
 * }
 * ```
 */
function Form(props) {
    const methods = useFormContext();
    const [mounted, setMounted] = React__default.useState(false);
    const { control = methods.control, onSubmit, children, action, method = POST_REQUEST, headers, encType, onError, render, onSuccess, validateStatus, ...rest } = props;
    const submit = async (event) => {
        let hasError = false;
        let type = '';
        await control.handleSubmit(async (data) => {
            const formData = new FormData();
            let formDataJson = '';
            try {
                formDataJson = JSON.stringify(data);
            }
            catch (_a) { }
            const flattenFormValues = flatten(control._formValues);
            for (const key in flattenFormValues) {
                formData.append(key, flattenFormValues[key]);
            }
            if (onSubmit) {
                await onSubmit({
                    data,
                    event,
                    method,
                    formData,
                    formDataJson,
                });
            }
            if (action) {
                try {
                    const shouldStringifySubmissionData = [
                        headers && headers['Content-Type'],
                        encType,
                    ].some((value) => value && value.includes('json'));
                    const response = await fetch(String(action), {
                        method,
                        headers: {
                            ...headers,
                            ...(encType ? { 'Content-Type': encType } : {}),
                        },
                        body: shouldStringifySubmissionData ? formDataJson : formData,
                    });
                    if (response &&
                        (validateStatus
                            ? !validateStatus(response.status)
                            : response.status < 200 || response.status >= 300)) {
                        hasError = true;
                        onError && onError({ response });
                        type = String(response.status);
                    }
                    else {
                        onSuccess && onSuccess({ response });
                    }
                }
                catch (error) {
                    hasError = true;
                    onError && onError({ error });
                }
            }
        })(event);
        if (hasError && props.control) {
            props.control._subjects.state.next({
                isSubmitSuccessful: false,
            });
            props.control.setError('root.server', {
                type,
            });
        }
    };
    React__default.useEffect(() => {
        setMounted(true);
    }, []);
    return render ? (React__default.createElement(React__default.Fragment, null, render({
        submit,
    }))) : (React__default.createElement("form", { noValidate: mounted, action: action, method: method, encType: encType, onSubmit: submit, ...rest }, children));
}

var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria
    ? {
        ...errors[name],
        types: {
            ...(errors[name] && errors[name].types ? errors[name].types : {}),
            [type]: message || true,
        },
    }
    : {};

var convertToArrayPayload = (value) => (Array.isArray(value) ? value : [value]);

var createSubject = () => {
    let _observers = [];
    const next = (value) => {
        for (const observer of _observers) {
            observer.next && observer.next(value);
        }
    };
    const subscribe = (observer) => {
        _observers.push(observer);
        return {
            unsubscribe: () => {
                _observers = _observers.filter((o) => o !== observer);
            },
        };
    };
    const unsubscribe = () => {
        _observers = [];
    };
    return {
        get observers() {
            return _observers;
        },
        next,
        subscribe,
        unsubscribe,
    };
};

var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

function deepEqual(object1, object2) {
    if (isPrimitive(object1) || isPrimitive(object2)) {
        return object1 === object2;
    }
    if (isDateObject(object1) && isDateObject(object2)) {
        return object1.getTime() === object2.getTime();
    }
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        const val1 = object1[key];
        if (!keys2.includes(key)) {
            return false;
        }
        if (key !== 'ref') {
            const val2 = object2[key];
            if ((isDateObject(val1) && isDateObject(val2)) ||
                (isObject(val1) && isObject(val2)) ||
                (Array.isArray(val1) && Array.isArray(val2))
                ? !deepEqual(val1, val2)
                : val1 !== val2) {
                return false;
            }
        }
    }
    return true;
}

var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;

var isFileInput = (element) => element.type === 'file';

var isFunction = (value) => typeof value === 'function';

var isHTMLElement = (value) => {
    if (!isWeb) {
        return false;
    }
    const owner = value ? value.ownerDocument : 0;
    return (value instanceof
        (owner && owner.defaultView ? owner.defaultView.HTMLElement : HTMLElement));
};

var isMultipleSelect = (element) => element.type === `select-multiple`;

var isRadioInput = (element) => element.type === 'radio';

var isRadioOrCheckbox = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);

var live = (ref) => isHTMLElement(ref) && ref.isConnected;

function baseGet(object, updatePath) {
    const length = updatePath.slice(0, -1).length;
    let index = 0;
    while (index < length) {
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return object;
}
function isEmptyArray(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && !isUndefined(obj[key])) {
            return false;
        }
    }
    return true;
}
function unset(object, path) {
    const paths = Array.isArray(path)
        ? path
        : isKey(path)
            ? [path]
            : stringToPath(path);
    const childObject = paths.length === 1 ? object : baseGet(object, paths);
    const index = paths.length - 1;
    const key = paths[index];
    if (childObject) {
        delete childObject[key];
    }
    if (index !== 0 &&
        ((isObject(childObject) && isEmptyObject(childObject)) ||
            (Array.isArray(childObject) && isEmptyArray(childObject)))) {
        unset(object, paths.slice(0, -1));
    }
    return object;
}

var objectHasFunction = (data) => {
    for (const key in data) {
        if (isFunction(data[key])) {
            return true;
        }
    }
    return false;
};

function markFieldsDirty(data, fields = {}) {
    const isParentNodeArray = Array.isArray(data);
    if (isObject(data) || isParentNodeArray) {
        for (const key in data) {
            if (Array.isArray(data[key]) ||
                (isObject(data[key]) && !objectHasFunction(data[key]))) {
                fields[key] = Array.isArray(data[key]) ? [] : {};
                markFieldsDirty(data[key], fields[key]);
            }
            else if (!isNullOrUndefined(data[key])) {
                fields[key] = true;
            }
        }
    }
    return fields;
}
function getDirtyFieldsFromDefaultValues(data, formValues, dirtyFieldsFromValues) {
    const isParentNodeArray = Array.isArray(data);
    if (isObject(data) || isParentNodeArray) {
        for (const key in data) {
            if (Array.isArray(data[key]) ||
                (isObject(data[key]) && !objectHasFunction(data[key]))) {
                if (isUndefined(formValues) ||
                    isPrimitive(dirtyFieldsFromValues[key])) {
                    dirtyFieldsFromValues[key] = Array.isArray(data[key])
                        ? markFieldsDirty(data[key], [])
                        : { ...markFieldsDirty(data[key]) };
                }
                else {
                    getDirtyFieldsFromDefaultValues(data[key], isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
                }
            }
            else {
                dirtyFieldsFromValues[key] = !deepEqual(data[key], formValues[key]);
            }
        }
    }
    return dirtyFieldsFromValues;
}
var getDirtyFields = (defaultValues, formValues) => getDirtyFieldsFromDefaultValues(defaultValues, formValues, markFieldsDirty(formValues));

const defaultResult = {
    value: false,
    isValid: false,
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
    if (Array.isArray(options)) {
        if (options.length > 1) {
            const values = options
                .filter((option) => option && option.checked && !option.disabled)
                .map((option) => option.value);
            return { value: values, isValid: !!values.length };
        }
        return options[0].checked && !options[0].disabled
            ? // @ts-expect-error expected to work in the browser
                options[0].attributes && !isUndefined(options[0].attributes.value)
                    ? isUndefined(options[0].value) || options[0].value === ''
                        ? validResult
                        : { value: options[0].value, isValid: true }
                    : validResult
            : defaultResult;
    }
    return defaultResult;
};

var getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => isUndefined(value)
    ? value
    : valueAsNumber
        ? value === ''
            ? NaN
            : value
                ? +value
                : value
        : valueAsDate && isString(value)
            ? new Date(value)
            : setValueAs
                ? setValueAs(value)
                : value;

const defaultReturn = {
    isValid: false,
    value: null,
};
var getRadioValue = (options) => Array.isArray(options)
    ? options.reduce((previous, option) => option && option.checked && !option.disabled
        ? {
            isValid: true,
            value: option.value,
        }
        : previous, defaultReturn)
    : defaultReturn;

function getFieldValue(_f) {
    const ref = _f.ref;
    if (isFileInput(ref)) {
        return ref.files;
    }
    if (isRadioInput(ref)) {
        return getRadioValue(_f.refs).value;
    }
    if (isMultipleSelect(ref)) {
        return [...ref.selectedOptions].map(({ value }) => value);
    }
    if (isCheckBoxInput(ref)) {
        return getCheckboxValue(_f.refs).value;
    }
    return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}

var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation) => {
    const fields = {};
    for (const name of fieldsNames) {
        const field = get(_fields, name);
        field && set(fields, name, field._f);
    }
    return {
        criteriaMode,
        names: [...fieldsNames],
        fields,
        shouldUseNativeValidation,
    };
};

var isRegex = (value) => value instanceof RegExp;

var getRuleValue = (rule) => isUndefined(rule)
    ? rule
    : isRegex(rule)
        ? rule.source
        : isObject(rule)
            ? isRegex(rule.value)
                ? rule.value.source
                : rule.value
            : rule;

var getValidationModes = (mode) => ({
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
    isOnAll: mode === VALIDATION_MODE.all,
    isOnTouch: mode === VALIDATION_MODE.onTouched,
});

const ASYNC_FUNCTION = 'AsyncFunction';
var hasPromiseValidation = (fieldReference) => !!fieldReference &&
    !!fieldReference.validate &&
    !!((isFunction(fieldReference.validate) &&
        fieldReference.validate.constructor.name === ASYNC_FUNCTION) ||
        (isObject(fieldReference.validate) &&
            Object.values(fieldReference.validate).find((validateFunction) => validateFunction.constructor.name === ASYNC_FUNCTION)));

var hasValidation = (options) => options.mount &&
    (options.required ||
        options.min ||
        options.max ||
        options.maxLength ||
        options.minLength ||
        options.pattern ||
        options.validate);

var isWatched = (name, _names, isBlurEvent) => !isBlurEvent &&
    (_names.watchAll ||
        _names.watch.has(name) ||
        [..._names.watch].some((watchName) => name.startsWith(watchName) &&
            /^\.\w+/.test(name.slice(watchName.length))));

const iterateFieldsByAction = (fields, action, fieldsNames, abortEarly) => {
    for (const key of fieldsNames || Object.keys(fields)) {
        const field = get(fields, key);
        if (field) {
            const { _f, ...currentField } = field;
            if (_f) {
                if (_f.refs && _f.refs[0] && action(_f.refs[0], key) && !abortEarly) {
                    return true;
                }
                else if (_f.ref && action(_f.ref, _f.name) && !abortEarly) {
                    return true;
                }
                else {
                    if (iterateFieldsByAction(currentField, action)) {
                        break;
                    }
                }
            }
            else if (isObject(currentField)) {
                if (iterateFieldsByAction(currentField, action)) {
                    break;
                }
            }
        }
    }
    return;
};

function schemaErrorLookup(errors, _fields, name) {
    const error = get(errors, name);
    if (error || isKey(name)) {
        return {
            error,
            name,
        };
    }
    const names = name.split('.');
    while (names.length) {
        const fieldName = names.join('.');
        const field = get(_fields, fieldName);
        const foundError = get(errors, fieldName);
        if (field && !Array.isArray(field) && name !== fieldName) {
            return { name };
        }
        if (foundError && foundError.type) {
            return {
                name: fieldName,
                error: foundError,
            };
        }
        names.pop();
    }
    return {
        name,
    };
}

var shouldRenderFormState = (formStateData, _proxyFormState, updateFormState, isRoot) => {
    updateFormState(formStateData);
    const { name, ...formState } = formStateData;
    return (isEmptyObject(formState) ||
        Object.keys(formState).length >= Object.keys(_proxyFormState).length ||
        Object.keys(formState).find((key) => _proxyFormState[key] ===
            (!isRoot || VALIDATION_MODE.all)));
};

var shouldSubscribeByName = (name, signalName, exact) => !name ||
    !signalName ||
    name === signalName ||
    convertToArrayPayload(name).some((currentName) => currentName &&
        (exact
            ? currentName === signalName
            : currentName.startsWith(signalName) ||
                signalName.startsWith(currentName)));

var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode) => {
    if (mode.isOnAll) {
        return false;
    }
    else if (!isSubmitted && mode.isOnTouch) {
        return !(isTouched || isBlurEvent);
    }
    else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
        return !isBlurEvent;
    }
    else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
        return isBlurEvent;
    }
    return true;
};

var unsetEmptyArray = (ref, name) => !compact(get(ref, name)).length && unset(ref, name);

var updateFieldArrayRootError = (errors, error, name) => {
    const fieldArrayErrors = convertToArrayPayload(get(errors, name));
    set(fieldArrayErrors, 'root', error[name]);
    set(errors, name, fieldArrayErrors);
    return errors;
};

var isMessage = (value) => isString(value);

function getValidateError(result, ref, type = 'validate') {
    if (isMessage(result) ||
        (Array.isArray(result) && result.every(isMessage)) ||
        (isBoolean(result) && !result)) {
        return {
            type,
            message: isMessage(result) ? result : '',
            ref,
        };
    }
}

var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData)
    ? validationData
    : {
        value: validationData,
        message: '',
    };

var validateField = async (field, disabledFieldNames, formValues, validateAllFieldCriteria, shouldUseNativeValidation, isFieldArray) => {
    const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount, } = field._f;
    const inputValue = get(formValues, name);
    if (!mount || disabledFieldNames.has(name)) {
        return {};
    }
    const inputRef = refs ? refs[0] : ref;
    const setCustomValidity = (message) => {
        if (shouldUseNativeValidation && inputRef.reportValidity) {
            inputRef.setCustomValidity(isBoolean(message) ? '' : message || '');
            inputRef.reportValidity();
        }
    };
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = ((valueAsNumber || isFileInput(ref)) &&
        isUndefined(ref.value) &&
        isUndefined(inputValue)) ||
        (isHTMLElement(ref) && ref.value === '') ||
        inputValue === '' ||
        (Array.isArray(inputValue) && !inputValue.length);
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = {
            type: exceedMax ? maxType : minType,
            message,
            ref,
            ...appendErrorsCurry(exceedMax ? maxType : minType, message),
        };
    };
    if (isFieldArray
        ? !Array.isArray(inputValue) || !inputValue.length
        : required &&
            ((!isRadioOrCheckbox && (isEmpty || isNullOrUndefined(inputValue))) ||
                (isBoolean(inputValue) && !inputValue) ||
                (isCheckBox && !getCheckboxValue(refs).isValid) ||
                (isRadio && !getRadioValue(refs).isValid))) {
        const { value, message } = isMessage(required)
            ? { value: !!required, message: required }
            : getValueAndMessage(required);
        if (value) {
            error[name] = {
                type: INPUT_VALIDATION_RULES.required,
                message,
                ref: inputRef,
                ...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message),
            };
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
        let exceedMax;
        let exceedMin;
        const maxOutput = getValueAndMessage(max);
        const minOutput = getValueAndMessage(min);
        if (!isNullOrUndefined(inputValue) && !isNaN(inputValue)) {
            const valueNumber = ref.valueAsNumber ||
                (inputValue ? +inputValue : inputValue);
            if (!isNullOrUndefined(maxOutput.value)) {
                exceedMax = valueNumber > maxOutput.value;
            }
            if (!isNullOrUndefined(minOutput.value)) {
                exceedMin = valueNumber < minOutput.value;
            }
        }
        else {
            const valueDate = ref.valueAsDate || new Date(inputValue);
            const convertTimeToDate = (time) => new Date(new Date().toDateString() + ' ' + time);
            const isTime = ref.type == 'time';
            const isWeek = ref.type == 'week';
            if (isString(maxOutput.value) && inputValue) {
                exceedMax = isTime
                    ? convertTimeToDate(inputValue) > convertTimeToDate(maxOutput.value)
                    : isWeek
                        ? inputValue > maxOutput.value
                        : valueDate > new Date(maxOutput.value);
            }
            if (isString(minOutput.value) && inputValue) {
                exceedMin = isTime
                    ? convertTimeToDate(inputValue) < convertTimeToDate(minOutput.value)
                    : isWeek
                        ? inputValue < minOutput.value
                        : valueDate < new Date(minOutput.value);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if ((maxLength || minLength) &&
        !isEmpty &&
        (isString(inputValue) || (isFieldArray && Array.isArray(inputValue)))) {
        const maxLengthOutput = getValueAndMessage(maxLength);
        const minLengthOutput = getValueAndMessage(minLength);
        const exceedMax = !isNullOrUndefined(maxLengthOutput.value) &&
            inputValue.length > +maxLengthOutput.value;
        const exceedMin = !isNullOrUndefined(minLengthOutput.value) &&
            inputValue.length < +minLengthOutput.value;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if (pattern && !isEmpty && isString(inputValue)) {
        const { value: patternValue, message } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !inputValue.match(patternValue)) {
            error[name] = {
                type: INPUT_VALIDATION_RULES.pattern,
                message,
                ref,
                ...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message),
            };
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (validate) {
        if (isFunction(validate)) {
            const result = await validate(inputValue, formValues);
            const validateError = getValidateError(result, inputRef);
            if (validateError) {
                error[name] = {
                    ...validateError,
                    ...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message),
                };
                if (!validateAllFieldCriteria) {
                    setCustomValidity(validateError.message);
                    return error;
                }
            }
        }
        else if (isObject(validate)) {
            let validationResult = {};
            for (const key in validate) {
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateError = getValidateError(await validate[key](inputValue, formValues), inputRef, key);
                if (validateError) {
                    validationResult = {
                        ...validateError,
                        ...appendErrorsCurry(key, validateError.message),
                    };
                    setCustomValidity(validateError.message);
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = {
                    ref: inputRef,
                    ...validationResult,
                };
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    setCustomValidity(true);
    return error;
};

const defaultOptions = {
    mode: VALIDATION_MODE.onSubmit,
    reValidateMode: VALIDATION_MODE.onChange,
    shouldFocusError: true,
};
function createFormControl(props = {}) {
    let _options = {
        ...defaultOptions,
        ...props,
    };
    let _formState = {
        submitCount: 0,
        isDirty: false,
        isReady: false,
        isLoading: isFunction(_options.defaultValues),
        isValidating: false,
        isSubmitted: false,
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        touchedFields: {},
        dirtyFields: {},
        validatingFields: {},
        errors: _options.errors || {},
        disabled: _options.disabled || false,
    };
    const _fields = {};
    let _defaultValues = isObject(_options.defaultValues) || isObject(_options.values)
        ? cloneObject(_options.defaultValues || _options.values) || {}
        : {};
    let _formValues = _options.shouldUnregister
        ? {}
        : cloneObject(_defaultValues);
    let _state = {
        action: false,
        mount: false,
        watch: false,
    };
    let _names = {
        mount: new Set(),
        disabled: new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
    };
    let delayErrorCallback;
    let timer = 0;
    const _proxyFormState = {
        isDirty: false,
        dirtyFields: false,
        validatingFields: false,
        touchedFields: false,
        isValidating: false,
        isValid: false,
        errors: false,
    };
    let _proxySubscribeFormState = {
        ..._proxyFormState,
    };
    const _subjects = {
        array: createSubject(),
        state: createSubject(),
    };
    const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
    const debounce = (callback) => (wait) => {
        clearTimeout(timer);
        timer = setTimeout(callback, wait);
    };
    const _setValid = async (shouldUpdateValid) => {
        if (!_options.disabled &&
            (_proxyFormState.isValid ||
                _proxySubscribeFormState.isValid ||
                shouldUpdateValid)) {
            const isValid = _options.resolver
                ? isEmptyObject((await _runSchema()).errors)
                : await executeBuiltInValidation(_fields, true);
            if (isValid !== _formState.isValid) {
                _subjects.state.next({
                    isValid,
                });
            }
        }
    };
    const _updateIsValidating = (names, isValidating) => {
        if (!_options.disabled &&
            (_proxyFormState.isValidating ||
                _proxyFormState.validatingFields ||
                _proxySubscribeFormState.isValidating ||
                _proxySubscribeFormState.validatingFields)) {
            (names || Array.from(_names.mount)).forEach((name) => {
                if (name) {
                    isValidating
                        ? set(_formState.validatingFields, name, isValidating)
                        : unset(_formState.validatingFields, name);
                }
            });
            _subjects.state.next({
                validatingFields: _formState.validatingFields,
                isValidating: !isEmptyObject(_formState.validatingFields),
            });
        }
    };
    const _setFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true) => {
        if (args && method && !_options.disabled) {
            _state.action = true;
            if (shouldUpdateFieldsAndState && Array.isArray(get(_fields, name))) {
                const fieldValues = method(get(_fields, name), args.argA, args.argB);
                shouldSetValues && set(_fields, name, fieldValues);
            }
            if (shouldUpdateFieldsAndState &&
                Array.isArray(get(_formState.errors, name))) {
                const errors = method(get(_formState.errors, name), args.argA, args.argB);
                shouldSetValues && set(_formState.errors, name, errors);
                unsetEmptyArray(_formState.errors, name);
            }
            if ((_proxyFormState.touchedFields ||
                _proxySubscribeFormState.touchedFields) &&
                shouldUpdateFieldsAndState &&
                Array.isArray(get(_formState.touchedFields, name))) {
                const touchedFields = method(get(_formState.touchedFields, name), args.argA, args.argB);
                shouldSetValues && set(_formState.touchedFields, name, touchedFields);
            }
            if (_proxyFormState.dirtyFields || _proxySubscribeFormState.dirtyFields) {
                _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
            }
            _subjects.state.next({
                name,
                isDirty: _getDirty(name, values),
                dirtyFields: _formState.dirtyFields,
                errors: _formState.errors,
                isValid: _formState.isValid,
            });
        }
        else {
            set(_formValues, name, values);
        }
    };
    const updateErrors = (name, error) => {
        set(_formState.errors, name, error);
        _subjects.state.next({
            errors: _formState.errors,
        });
    };
    const _setErrors = (errors) => {
        _formState.errors = errors;
        _subjects.state.next({
            errors: _formState.errors,
            isValid: false,
        });
    };
    const updateValidAndValue = (name, shouldSkipSetValueAs, value, ref) => {
        const field = get(_fields, name);
        if (field) {
            const defaultValue = get(_formValues, name, isUndefined(value) ? get(_defaultValues, name) : value);
            isUndefined(defaultValue) ||
                (ref && ref.defaultChecked) ||
                shouldSkipSetValueAs
                ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f))
                : setFieldValue(name, defaultValue);
            _state.mount && _setValid();
        }
    };
    const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender) => {
        let shouldUpdateField = false;
        let isPreviousDirty = false;
        const output = {
            name,
        };
        if (!_options.disabled) {
            if (!isBlurEvent || shouldDirty) {
                if (_proxyFormState.isDirty || _proxySubscribeFormState.isDirty) {
                    isPreviousDirty = _formState.isDirty;
                    _formState.isDirty = output.isDirty = _getDirty();
                    shouldUpdateField = isPreviousDirty !== output.isDirty;
                }
                const isCurrentFieldPristine = deepEqual(get(_defaultValues, name), fieldValue);
                isPreviousDirty = !!get(_formState.dirtyFields, name);
                isCurrentFieldPristine
                    ? unset(_formState.dirtyFields, name)
                    : set(_formState.dirtyFields, name, true);
                output.dirtyFields = _formState.dirtyFields;
                shouldUpdateField =
                    shouldUpdateField ||
                        ((_proxyFormState.dirtyFields ||
                            _proxySubscribeFormState.dirtyFields) &&
                            isPreviousDirty !== !isCurrentFieldPristine);
            }
            if (isBlurEvent) {
                const isPreviousFieldTouched = get(_formState.touchedFields, name);
                if (!isPreviousFieldTouched) {
                    set(_formState.touchedFields, name, isBlurEvent);
                    output.touchedFields = _formState.touchedFields;
                    shouldUpdateField =
                        shouldUpdateField ||
                            ((_proxyFormState.touchedFields ||
                                _proxySubscribeFormState.touchedFields) &&
                                isPreviousFieldTouched !== isBlurEvent);
                }
            }
            shouldUpdateField && shouldRender && _subjects.state.next(output);
        }
        return shouldUpdateField ? output : {};
    };
    const shouldRenderByError = (name, isValid, error, fieldState) => {
        const previousFieldError = get(_formState.errors, name);
        const shouldUpdateValid = (_proxyFormState.isValid || _proxySubscribeFormState.isValid) &&
            isBoolean(isValid) &&
            _formState.isValid !== isValid;
        if (_options.delayError && error) {
            delayErrorCallback = debounce(() => updateErrors(name, error));
            delayErrorCallback(_options.delayError);
        }
        else {
            clearTimeout(timer);
            delayErrorCallback = null;
            error
                ? set(_formState.errors, name, error)
                : unset(_formState.errors, name);
        }
        if ((error ? !deepEqual(previousFieldError, error) : previousFieldError) ||
            !isEmptyObject(fieldState) ||
            shouldUpdateValid) {
            const updatedFormState = {
                ...fieldState,
                ...(shouldUpdateValid && isBoolean(isValid) ? { isValid } : {}),
                errors: _formState.errors,
                name,
            };
            _formState = {
                ..._formState,
                ...updatedFormState,
            };
            _subjects.state.next(updatedFormState);
        }
    };
    const _runSchema = async (name) => {
        _updateIsValidating(name, true);
        const result = await _options.resolver(_formValues, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation));
        _updateIsValidating(name);
        return result;
    };
    const executeSchemaAndUpdateState = async (names) => {
        const { errors } = await _runSchema(names);
        if (names) {
            for (const name of names) {
                const error = get(errors, name);
                error
                    ? set(_formState.errors, name, error)
                    : unset(_formState.errors, name);
            }
        }
        else {
            _formState.errors = errors;
        }
        return errors;
    };
    const executeBuiltInValidation = async (fields, shouldOnlyCheckValid, context = {
        valid: true,
    }) => {
        for (const name in fields) {
            const field = fields[name];
            if (field) {
                const { _f, ...fieldValue } = field;
                if (_f) {
                    const isFieldArrayRoot = _names.array.has(_f.name);
                    const isPromiseFunction = field._f && hasPromiseValidation(field._f);
                    if (isPromiseFunction && _proxyFormState.validatingFields) {
                        _updateIsValidating([name], true);
                    }
                    const fieldError = await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation && !shouldOnlyCheckValid, isFieldArrayRoot);
                    if (isPromiseFunction && _proxyFormState.validatingFields) {
                        _updateIsValidating([name]);
                    }
                    if (fieldError[_f.name]) {
                        context.valid = false;
                        if (shouldOnlyCheckValid) {
                            break;
                        }
                    }
                    !shouldOnlyCheckValid &&
                        (get(fieldError, _f.name)
                            ? isFieldArrayRoot
                                ? updateFieldArrayRootError(_formState.errors, fieldError, _f.name)
                                : set(_formState.errors, _f.name, fieldError[_f.name])
                            : unset(_formState.errors, _f.name));
                }
                !isEmptyObject(fieldValue) &&
                    (await executeBuiltInValidation(fieldValue, shouldOnlyCheckValid, context));
            }
        }
        return context.valid;
    };
    const _removeUnmounted = () => {
        for (const name of _names.unMount) {
            const field = get(_fields, name);
            field &&
                (field._f.refs
                    ? field._f.refs.every((ref) => !live(ref))
                    : !live(field._f.ref)) &&
                unregister(name);
        }
        _names.unMount = new Set();
    };
    const _getDirty = (name, data) => !_options.disabled &&
        (name && data && set(_formValues, name, data),
            !deepEqual(getValues(), _defaultValues));
    const _getWatch = (names, defaultValue, isGlobal) => generateWatchOutput(names, _names, {
        ...(_state.mount
            ? _formValues
            : isUndefined(defaultValue)
                ? _defaultValues
                : isString(names)
                    ? { [names]: defaultValue }
                    : defaultValue),
    }, isGlobal, defaultValue);
    const _getFieldArray = (name) => compact(get(_state.mount ? _formValues : _defaultValues, name, _options.shouldUnregister ? get(_defaultValues, name, []) : []));
    const setFieldValue = (name, value, options = {}) => {
        const field = get(_fields, name);
        let fieldValue = value;
        if (field) {
            const fieldReference = field._f;
            if (fieldReference) {
                !fieldReference.disabled &&
                    set(_formValues, name, getFieldValueAs(value, fieldReference));
                fieldValue =
                    isHTMLElement(fieldReference.ref) && isNullOrUndefined(value)
                        ? ''
                        : value;
                if (isMultipleSelect(fieldReference.ref)) {
                    [...fieldReference.ref.options].forEach((optionRef) => (optionRef.selected = fieldValue.includes(optionRef.value)));
                }
                else if (fieldReference.refs) {
                    if (isCheckBoxInput(fieldReference.ref)) {
                        fieldReference.refs.forEach((checkboxRef) => {
                            if (!checkboxRef.defaultChecked || !checkboxRef.disabled) {
                                if (Array.isArray(fieldValue)) {
                                    checkboxRef.checked = !!fieldValue.find((data) => data === checkboxRef.value);
                                }
                                else {
                                    checkboxRef.checked =
                                        fieldValue === checkboxRef.value || !!fieldValue;
                                }
                            }
                        });
                    }
                    else {
                        fieldReference.refs.forEach((radioRef) => (radioRef.checked = radioRef.value === fieldValue));
                    }
                }
                else if (isFileInput(fieldReference.ref)) {
                    fieldReference.ref.value = '';
                }
                else {
                    fieldReference.ref.value = fieldValue;
                    if (!fieldReference.ref.type) {
                        _subjects.state.next({
                            name,
                            values: cloneObject(_formValues),
                        });
                    }
                }
            }
        }
        (options.shouldDirty || options.shouldTouch) &&
            updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
        options.shouldValidate && trigger(name);
    };
    const setValues = (name, value, options) => {
        for (const fieldKey in value) {
            if (!value.hasOwnProperty(fieldKey)) {
                return;
            }
            const fieldValue = value[fieldKey];
            const fieldName = `${name}.${fieldKey}`;
            const field = get(_fields, fieldName);
            (_names.array.has(name) ||
                isObject(fieldValue) ||
                (field && !field._f)) &&
                !isDateObject(fieldValue)
                ? setValues(fieldName, fieldValue, options)
                : setFieldValue(fieldName, fieldValue, options);
        }
    };
    const setValue = (name, value, options = {}) => {
        const field = get(_fields, name);
        const isFieldArray = _names.array.has(name);
        const cloneValue = cloneObject(value);
        set(_formValues, name, cloneValue);
        if (isFieldArray) {
            _subjects.array.next({
                name,
                values: cloneObject(_formValues),
            });
            if ((_proxyFormState.isDirty ||
                _proxyFormState.dirtyFields ||
                _proxySubscribeFormState.isDirty ||
                _proxySubscribeFormState.dirtyFields) &&
                options.shouldDirty) {
                _subjects.state.next({
                    name,
                    dirtyFields: getDirtyFields(_defaultValues, _formValues),
                    isDirty: _getDirty(name, cloneValue),
                });
            }
        }
        else {
            field && !field._f && !isNullOrUndefined(cloneValue)
                ? setValues(name, cloneValue, options)
                : setFieldValue(name, cloneValue, options);
        }
        isWatched(name, _names) && _subjects.state.next({ ..._formState });
        _subjects.state.next({
            name: _state.mount ? name : undefined,
            values: cloneObject(_formValues),
        });
    };
    const onChange = async (event) => {
        _state.mount = true;
        const target = event.target;
        let name = target.name;
        let isFieldValueUpdated = true;
        const field = get(_fields, name);
        const _updateIsFieldValueUpdated = (fieldValue) => {
            isFieldValueUpdated =
                Number.isNaN(fieldValue) ||
                    (isDateObject(fieldValue) && isNaN(fieldValue.getTime())) ||
                    deepEqual(fieldValue, get(_formValues, name, fieldValue));
        };
        const validationModeBeforeSubmit = getValidationModes(_options.mode);
        const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
        if (field) {
            let error;
            let isValid;
            const fieldValue = target.type
                ? getFieldValue(field._f)
                : getEventValue(event);
            const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
            const shouldSkipValidation = (!hasValidation(field._f) &&
                !_options.resolver &&
                !get(_formState.errors, name) &&
                !field._f.deps) ||
                skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
            const watched = isWatched(name, _names, isBlurEvent);
            set(_formValues, name, fieldValue);
            if (isBlurEvent) {
                field._f.onBlur && field._f.onBlur(event);
                delayErrorCallback && delayErrorCallback(0);
            }
            else if (field._f.onChange) {
                field._f.onChange(event);
            }
            const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent);
            const shouldRender = !isEmptyObject(fieldState) || watched;
            !isBlurEvent &&
                _subjects.state.next({
                    name,
                    type: event.type,
                    values: cloneObject(_formValues),
                });
            if (shouldSkipValidation) {
                if (_proxyFormState.isValid || _proxySubscribeFormState.isValid) {
                    if (_options.mode === 'onBlur') {
                        if (isBlurEvent) {
                            _setValid();
                        }
                    }
                    else if (!isBlurEvent) {
                        _setValid();
                    }
                }
                return (shouldRender &&
                    _subjects.state.next({ name, ...(watched ? {} : fieldState) }));
            }
            !isBlurEvent && watched && _subjects.state.next({ ..._formState });
            if (_options.resolver) {
                const { errors } = await _runSchema([name]);
                _updateIsFieldValueUpdated(fieldValue);
                if (isFieldValueUpdated) {
                    const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
                    const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
                    error = errorLookupResult.error;
                    name = errorLookupResult.name;
                    isValid = isEmptyObject(errors);
                }
            }
            else {
                _updateIsValidating([name], true);
                error = (await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
                _updateIsValidating([name]);
                _updateIsFieldValueUpdated(fieldValue);
                if (isFieldValueUpdated) {
                    if (error) {
                        isValid = false;
                    }
                    else if (_proxyFormState.isValid ||
                        _proxySubscribeFormState.isValid) {
                        isValid = await executeBuiltInValidation(_fields, true);
                    }
                }
            }
            if (isFieldValueUpdated) {
                field._f.deps &&
                    trigger(field._f.deps);
                shouldRenderByError(name, isValid, error, fieldState);
            }
        }
    };
    const _focusInput = (ref, key) => {
        if (get(_formState.errors, key) && ref.focus) {
            ref.focus();
            return 1;
        }
        return;
    };
    const trigger = async (name, options = {}) => {
        let isValid;
        let validationResult;
        const fieldNames = convertToArrayPayload(name);
        if (_options.resolver) {
            const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
            isValid = isEmptyObject(errors);
            validationResult = name
                ? !fieldNames.some((name) => get(errors, name))
                : isValid;
        }
        else if (name) {
            validationResult = (await Promise.all(fieldNames.map(async (fieldName) => {
                const field = get(_fields, fieldName);
                return await executeBuiltInValidation(field && field._f ? { [fieldName]: field } : field);
            }))).every(Boolean);
            !(!validationResult && !_formState.isValid) && _setValid();
        }
        else {
            validationResult = isValid = await executeBuiltInValidation(_fields);
        }
        _subjects.state.next({
            ...(!isString(name) ||
                ((_proxyFormState.isValid || _proxySubscribeFormState.isValid) &&
                    isValid !== _formState.isValid)
                ? {}
                : { name }),
            ...(_options.resolver || !name ? { isValid } : {}),
            errors: _formState.errors,
        });
        options.shouldFocus &&
            !validationResult &&
            iterateFieldsByAction(_fields, _focusInput, name ? fieldNames : _names.mount);
        return validationResult;
    };
    const getValues = (fieldNames) => {
        const values = {
            ...(_state.mount ? _formValues : _defaultValues),
        };
        return isUndefined(fieldNames)
            ? values
            : isString(fieldNames)
                ? get(values, fieldNames)
                : fieldNames.map((name) => get(values, name));
    };
    const getFieldState = (name, formState) => ({
        invalid: !!get((formState || _formState).errors, name),
        isDirty: !!get((formState || _formState).dirtyFields, name),
        error: get((formState || _formState).errors, name),
        isValidating: !!get(_formState.validatingFields, name),
        isTouched: !!get((formState || _formState).touchedFields, name),
    });
    const clearErrors = (name) => {
        name &&
            convertToArrayPayload(name).forEach((inputName) => unset(_formState.errors, inputName));
        _subjects.state.next({
            errors: name ? _formState.errors : {},
        });
    };
    const setError = (name, error, options) => {
        const ref = (get(_fields, name, { _f: {} })._f || {}).ref;
        const currentError = get(_formState.errors, name) || {};
        // Don't override existing error messages elsewhere in the object tree.
        const { ref: currentRef, message, type, ...restOfErrorTree } = currentError;
        set(_formState.errors, name, {
            ...restOfErrorTree,
            ...error,
            ref,
        });
        _subjects.state.next({
            name,
            errors: _formState.errors,
            isValid: false,
        });
        options && options.shouldFocus && ref && ref.focus && ref.focus();
    };
    const watch = (name, defaultValue) => isFunction(name)
        ? _subjects.state.subscribe({
            next: (payload) => name(_getWatch(undefined, defaultValue), payload),
        })
        : _getWatch(name, defaultValue, true);
    const _subscribe = (props) => _subjects.state.subscribe({
        next: (formState) => {
            if (shouldSubscribeByName(props.name, formState.name, props.exact) &&
                shouldRenderFormState(formState, props.formState || _proxyFormState, _setFormState, props.reRenderRoot)) {
                props.callback({
                    values: { ..._formValues },
                    ..._formState,
                    ...formState,
                });
            }
        },
    }).unsubscribe;
    const subscribe = (props) => {
        _state.mount = true;
        _proxySubscribeFormState = {
            ..._proxySubscribeFormState,
            ...props.formState,
        };
        return _subscribe({
            ...props,
            formState: _proxySubscribeFormState,
        });
    };
    const unregister = (name, options = {}) => {
        for (const fieldName of name ? convertToArrayPayload(name) : _names.mount) {
            _names.mount.delete(fieldName);
            _names.array.delete(fieldName);
            if (!options.keepValue) {
                unset(_fields, fieldName);
                unset(_formValues, fieldName);
            }
            !options.keepError && unset(_formState.errors, fieldName);
            !options.keepDirty && unset(_formState.dirtyFields, fieldName);
            !options.keepTouched && unset(_formState.touchedFields, fieldName);
            !options.keepIsValidating &&
                unset(_formState.validatingFields, fieldName);
            !_options.shouldUnregister &&
                !options.keepDefaultValue &&
                unset(_defaultValues, fieldName);
        }
        _subjects.state.next({
            values: cloneObject(_formValues),
        });
        _subjects.state.next({
            ..._formState,
            ...(!options.keepDirty ? {} : { isDirty: _getDirty() }),
        });
        !options.keepIsValid && _setValid();
    };
    const _setDisabledField = ({ disabled, name, }) => {
        if ((isBoolean(disabled) && _state.mount) ||
            !!disabled ||
            _names.disabled.has(name)) {
            disabled ? _names.disabled.add(name) : _names.disabled.delete(name);
        }
    };
    const register = (name, options = {}) => {
        let field = get(_fields, name);
        const disabledIsDefined = isBoolean(options.disabled) || isBoolean(_options.disabled);
        set(_fields, name, {
            ...(field || {}),
            _f: {
                ...(field && field._f ? field._f : { ref: { name } }),
                name,
                mount: true,
                ...options,
            },
        });
        _names.mount.add(name);
        if (field) {
            _setDisabledField({
                disabled: isBoolean(options.disabled)
                    ? options.disabled
                    : _options.disabled,
                name,
            });
        }
        else {
            updateValidAndValue(name, true, options.value);
        }
        return {
            ...(disabledIsDefined
                ? { disabled: options.disabled || _options.disabled }
                : {}),
            ...(_options.progressive
                ? {
                    required: !!options.required,
                    min: getRuleValue(options.min),
                    max: getRuleValue(options.max),
                    minLength: getRuleValue(options.minLength),
                    maxLength: getRuleValue(options.maxLength),
                    pattern: getRuleValue(options.pattern),
                }
                : {}),
            name,
            onChange,
            onBlur: onChange,
            ref: (ref) => {
                if (ref) {
                    register(name, options);
                    field = get(_fields, name);
                    const fieldRef = isUndefined(ref.value)
                        ? ref.querySelectorAll
                            ? ref.querySelectorAll('input,select,textarea')[0] || ref
                            : ref
                        : ref;
                    const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
                    const refs = field._f.refs || [];
                    if (radioOrCheckbox
                        ? refs.find((option) => option === fieldRef)
                        : fieldRef === field._f.ref) {
                        return;
                    }
                    set(_fields, name, {
                        _f: {
                            ...field._f,
                            ...(radioOrCheckbox
                                ? {
                                    refs: [
                                        ...refs.filter(live),
                                        fieldRef,
                                        ...(Array.isArray(get(_defaultValues, name)) ? [{}] : []),
                                    ],
                                    ref: { type: fieldRef.type, name },
                                }
                                : { ref: fieldRef }),
                        },
                    });
                    updateValidAndValue(name, false, undefined, fieldRef);
                }
                else {
                    field = get(_fields, name, {});
                    if (field._f) {
                        field._f.mount = false;
                    }
                    (_options.shouldUnregister || options.shouldUnregister) &&
                        !(isNameInFieldArray(_names.array, name) && _state.action) &&
                        _names.unMount.add(name);
                }
            },
        };
    };
    const _focusError = () => _options.shouldFocusError &&
        iterateFieldsByAction(_fields, _focusInput, _names.mount);
    const _disableForm = (disabled) => {
        if (isBoolean(disabled)) {
            _subjects.state.next({ disabled });
            iterateFieldsByAction(_fields, (ref, name) => {
                const currentField = get(_fields, name);
                if (currentField) {
                    ref.disabled = currentField._f.disabled || disabled;
                    if (Array.isArray(currentField._f.refs)) {
                        currentField._f.refs.forEach((inputRef) => {
                            inputRef.disabled = currentField._f.disabled || disabled;
                        });
                    }
                }
            }, 0, false);
        }
    };
    const handleSubmit = (onValid, onInvalid) => async (e) => {
        let onValidError = undefined;
        if (e) {
            e.preventDefault && e.preventDefault();
            e.persist &&
                e.persist();
        }
        let fieldValues = cloneObject(_formValues);
        _subjects.state.next({
            isSubmitting: true,
        });
        if (_options.resolver) {
            const { errors, values } = await _runSchema();
            _formState.errors = errors;
            fieldValues = values;
        }
        else {
            await executeBuiltInValidation(_fields);
        }
        if (_names.disabled.size) {
            for (const name of _names.disabled) {
                set(fieldValues, name, undefined);
            }
        }
        unset(_formState.errors, 'root');
        if (isEmptyObject(_formState.errors)) {
            _subjects.state.next({
                errors: {},
            });
            try {
                await onValid(fieldValues, e);
            }
            catch (error) {
                onValidError = error;
            }
        }
        else {
            if (onInvalid) {
                await onInvalid({ ..._formState.errors }, e);
            }
            _focusError();
            setTimeout(_focusError);
        }
        _subjects.state.next({
            isSubmitted: true,
            isSubmitting: false,
            isSubmitSuccessful: isEmptyObject(_formState.errors) && !onValidError,
            submitCount: _formState.submitCount + 1,
            errors: _formState.errors,
        });
        if (onValidError) {
            throw onValidError;
        }
    };
    const resetField = (name, options = {}) => {
        if (get(_fields, name)) {
            if (isUndefined(options.defaultValue)) {
                setValue(name, cloneObject(get(_defaultValues, name)));
            }
            else {
                setValue(name, options.defaultValue);
                set(_defaultValues, name, cloneObject(options.defaultValue));
            }
            if (!options.keepTouched) {
                unset(_formState.touchedFields, name);
            }
            if (!options.keepDirty) {
                unset(_formState.dirtyFields, name);
                _formState.isDirty = options.defaultValue
                    ? _getDirty(name, cloneObject(get(_defaultValues, name)))
                    : _getDirty();
            }
            if (!options.keepError) {
                unset(_formState.errors, name);
                _proxyFormState.isValid && _setValid();
            }
            _subjects.state.next({ ..._formState });
        }
    };
    const _reset = (formValues, keepStateOptions = {}) => {
        const updatedValues = formValues ? cloneObject(formValues) : _defaultValues;
        const cloneUpdatedValues = cloneObject(updatedValues);
        const isEmptyResetValues = isEmptyObject(formValues);
        const values = isEmptyResetValues ? _defaultValues : cloneUpdatedValues;
        if (!keepStateOptions.keepDefaultValues) {
            _defaultValues = updatedValues;
        }
        if (!keepStateOptions.keepValues) {
            if (keepStateOptions.keepDirtyValues) {
                const fieldsToCheck = new Set([
                    ..._names.mount,
                    ...Object.keys(getDirtyFields(_defaultValues, _formValues)),
                ]);
                for (const fieldName of Array.from(fieldsToCheck)) {
                    get(_formState.dirtyFields, fieldName)
                        ? set(values, fieldName, get(_formValues, fieldName))
                        : setValue(fieldName, get(values, fieldName));
                }
            }
            else {
                if (isWeb && isUndefined(formValues)) {
                    for (const name of _names.mount) {
                        const field = get(_fields, name);
                        if (field && field._f) {
                            const fieldReference = Array.isArray(field._f.refs)
                                ? field._f.refs[0]
                                : field._f.ref;
                            if (isHTMLElement(fieldReference)) {
                                const form = fieldReference.closest('form');
                                if (form) {
                                    form.reset();
                                    break;
                                }
                            }
                        }
                    }
                }
                for (const fieldName of _names.mount) {
                    setValue(fieldName, get(values, fieldName));
                }
            }
            _formValues = cloneObject(values);
            _subjects.array.next({
                values: { ...values },
            });
            _subjects.state.next({
                values: { ...values },
            });
        }
        _names = {
            mount: keepStateOptions.keepDirtyValues ? _names.mount : new Set(),
            unMount: new Set(),
            array: new Set(),
            disabled: new Set(),
            watch: new Set(),
            watchAll: false,
            focus: '',
        };
        _state.mount =
            !_proxyFormState.isValid ||
                !!keepStateOptions.keepIsValid ||
                !!keepStateOptions.keepDirtyValues;
        _state.watch = !!_options.shouldUnregister;
        _subjects.state.next({
            submitCount: keepStateOptions.keepSubmitCount
                ? _formState.submitCount
                : 0,
            isDirty: isEmptyResetValues
                ? false
                : keepStateOptions.keepDirty
                    ? _formState.isDirty
                    : !!(keepStateOptions.keepDefaultValues &&
                        !deepEqual(formValues, _defaultValues)),
            isSubmitted: keepStateOptions.keepIsSubmitted
                ? _formState.isSubmitted
                : false,
            dirtyFields: isEmptyResetValues
                ? {}
                : keepStateOptions.keepDirtyValues
                    ? keepStateOptions.keepDefaultValues && _formValues
                        ? getDirtyFields(_defaultValues, _formValues)
                        : _formState.dirtyFields
                    : keepStateOptions.keepDefaultValues && formValues
                        ? getDirtyFields(_defaultValues, formValues)
                        : keepStateOptions.keepDirty
                            ? _formState.dirtyFields
                            : {},
            touchedFields: keepStateOptions.keepTouched
                ? _formState.touchedFields
                : {},
            errors: keepStateOptions.keepErrors ? _formState.errors : {},
            isSubmitSuccessful: keepStateOptions.keepIsSubmitSuccessful
                ? _formState.isSubmitSuccessful
                : false,
            isSubmitting: false,
        });
    };
    const reset = (formValues, keepStateOptions) => _reset(isFunction(formValues)
        ? formValues(_formValues)
        : formValues, keepStateOptions);
    const setFocus = (name, options = {}) => {
        const field = get(_fields, name);
        const fieldReference = field && field._f;
        if (fieldReference) {
            const fieldRef = fieldReference.refs
                ? fieldReference.refs[0]
                : fieldReference.ref;
            if (fieldRef.focus) {
                fieldRef.focus();
                options.shouldSelect &&
                    isFunction(fieldRef.select) &&
                    fieldRef.select();
            }
        }
    };
    const _setFormState = (updatedFormState) => {
        _formState = {
            ..._formState,
            ...updatedFormState,
        };
    };
    const _resetDefaultValues = () => isFunction(_options.defaultValues) &&
        _options.defaultValues().then((values) => {
            reset(values, _options.resetOptions);
            _subjects.state.next({
                isLoading: false,
            });
        });
    const methods = {
        control: {
            register,
            unregister,
            getFieldState,
            handleSubmit,
            setError,
            _subscribe,
            _runSchema,
            _getWatch,
            _getDirty,
            _setValid,
            _setFieldArray,
            _setDisabledField,
            _setErrors,
            _getFieldArray,
            _reset,
            _resetDefaultValues,
            _removeUnmounted,
            _disableForm,
            _subjects,
            _proxyFormState,
            get _fields() {
                return _fields;
            },
            get _formValues() {
                return _formValues;
            },
            get _state() {
                return _state;
            },
            set _state(value) {
                _state = value;
            },
            get _defaultValues() {
                return _defaultValues;
            },
            get _names() {
                return _names;
            },
            set _names(value) {
                _names = value;
            },
            get _formState() {
                return _formState;
            },
            get _options() {
                return _options;
            },
            set _options(value) {
                _options = {
                    ..._options,
                    ...value,
                };
            },
        },
        subscribe,
        trigger,
        register,
        handleSubmit,
        watch,
        setValue,
        getValues,
        reset,
        resetField,
        clearErrors,
        unregister,
        setError,
        setFocus,
        getFieldState,
    };
    return {
        ...methods,
        formControl: methods,
    };
}

var generateId = () => {
    const d = typeof performance === 'undefined' ? Date.now() : performance.now() * 1000;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16 + d) % 16 | 0;
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
};

var getFocusFieldName = (name, index, options = {}) => options.shouldFocus || isUndefined(options.shouldFocus)
    ? options.focusName ||
        `${name}.${isUndefined(options.focusIndex) ? index : options.focusIndex}.`
    : '';

var appendAt = (data, value) => [
    ...data,
    ...convertToArrayPayload(value),
];

var fillEmptyArray = (value) => Array.isArray(value) ? value.map(() => undefined) : undefined;

function insert(data, index, value) {
    return [
        ...data.slice(0, index),
        ...convertToArrayPayload(value),
        ...data.slice(index),
    ];
}

var moveArrayAt = (data, from, to) => {
    if (!Array.isArray(data)) {
        return [];
    }
    if (isUndefined(data[to])) {
        data[to] = undefined;
    }
    data.splice(to, 0, data.splice(from, 1)[0]);
    return data;
};

var prependAt = (data, value) => [
    ...convertToArrayPayload(value),
    ...convertToArrayPayload(data),
];

function removeAtIndexes(data, indexes) {
    let i = 0;
    const temp = [...data];
    for (const index of indexes) {
        temp.splice(index - i, 1);
        i++;
    }
    return compact(temp).length ? temp : [];
}
var removeArrayAt = (data, index) => isUndefined(index)
    ? []
    : removeAtIndexes(data, convertToArrayPayload(index).sort((a, b) => a - b));

var swapArrayAt = (data, indexA, indexB) => {
    [data[indexA], data[indexB]] = [data[indexB], data[indexA]];
};

var updateAt = (fieldValues, index, value) => {
    fieldValues[index] = value;
    return fieldValues;
};

/**
 * A custom hook that exposes convenient methods to perform operations with a list of dynamic inputs that need to be appended, updated, removed etc. • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn) • [Video](https://youtu.be/4MrbfGSFY2A)
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usefieldarray) • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn)
 *
 * @param props - useFieldArray props
 *
 * @returns methods - functions to manipulate with the Field Arrays (dynamic inputs) {@link UseFieldArrayReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, control, handleSubmit, reset, trigger, setError } = useForm({
 *     defaultValues: {
 *       test: []
 *     }
 *   });
 *   const { fields, append } = useFieldArray({
 *     control,
 *     name: "test"
 *   });
 *
 *   return (
 *     <form onSubmit={handleSubmit(data => console.log(data))}>
 *       {fields.map((item, index) => (
 *          <input key={item.id} {...register(`test.${index}.firstName`)}  />
 *       ))}
 *       <button type="button" onClick={() => append({ firstName: "bill" })}>
 *         append
 *       </button>
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */
function useFieldArray(props) {
    const methods = useFormContext();
    const { control = methods.control, name, keyName = 'id', shouldUnregister, rules, } = props;
    const [fields, setFields] = React__default.useState(control._getFieldArray(name));
    const ids = React__default.useRef(control._getFieldArray(name).map(generateId));
    const _fieldIds = React__default.useRef(fields);
    const _name = React__default.useRef(name);
    const _actioned = React__default.useRef(false);
    _name.current = name;
    _fieldIds.current = fields;
    control._names.array.add(name);
    rules &&
        control.register(name, rules);
    React__default.useEffect(() => control._subjects.array.subscribe({
        next: ({ values, name: fieldArrayName, }) => {
            if (fieldArrayName === _name.current || !fieldArrayName) {
                const fieldValues = get(values, _name.current);
                if (Array.isArray(fieldValues)) {
                    setFields(fieldValues);
                    ids.current = fieldValues.map(generateId);
                }
            }
        },
    }).unsubscribe, [control]);
    const updateValues = React__default.useCallback((updatedFieldArrayValues) => {
        _actioned.current = true;
        control._setFieldArray(name, updatedFieldArrayValues);
    }, [control, name]);
    const append = (value, options) => {
        const appendValue = convertToArrayPayload(cloneObject(value));
        const updatedFieldArrayValues = appendAt(control._getFieldArray(name), appendValue);
        control._names.focus = getFocusFieldName(name, updatedFieldArrayValues.length - 1, options);
        ids.current = appendAt(ids.current, appendValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, appendAt, {
            argA: fillEmptyArray(value),
        });
    };
    const prepend = (value, options) => {
        const prependValue = convertToArrayPayload(cloneObject(value));
        const updatedFieldArrayValues = prependAt(control._getFieldArray(name), prependValue);
        control._names.focus = getFocusFieldName(name, 0, options);
        ids.current = prependAt(ids.current, prependValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, prependAt, {
            argA: fillEmptyArray(value),
        });
    };
    const remove = (index) => {
        const updatedFieldArrayValues = removeArrayAt(control._getFieldArray(name), index);
        ids.current = removeArrayAt(ids.current, index);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        !Array.isArray(get(control._fields, name)) &&
            set(control._fields, name, undefined);
        control._setFieldArray(name, updatedFieldArrayValues, removeArrayAt, {
            argA: index,
        });
    };
    const insert$1 = (index, value, options) => {
        const insertValue = convertToArrayPayload(cloneObject(value));
        const updatedFieldArrayValues = insert(control._getFieldArray(name), index, insertValue);
        control._names.focus = getFocusFieldName(name, index, options);
        ids.current = insert(ids.current, index, insertValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, insert, {
            argA: index,
            argB: fillEmptyArray(value),
        });
    };
    const swap = (indexA, indexB) => {
        const updatedFieldArrayValues = control._getFieldArray(name);
        swapArrayAt(updatedFieldArrayValues, indexA, indexB);
        swapArrayAt(ids.current, indexA, indexB);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, swapArrayAt, {
            argA: indexA,
            argB: indexB,
        }, false);
    };
    const move = (from, to) => {
        const updatedFieldArrayValues = control._getFieldArray(name);
        moveArrayAt(updatedFieldArrayValues, from, to);
        moveArrayAt(ids.current, from, to);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, moveArrayAt, {
            argA: from,
            argB: to,
        }, false);
    };
    const update = (index, value) => {
        const updateValue = cloneObject(value);
        const updatedFieldArrayValues = updateAt(control._getFieldArray(name), index, updateValue);
        ids.current = [...updatedFieldArrayValues].map((item, i) => !item || i === index ? generateId() : ids.current[i]);
        updateValues(updatedFieldArrayValues);
        setFields([...updatedFieldArrayValues]);
        control._setFieldArray(name, updatedFieldArrayValues, updateAt, {
            argA: index,
            argB: updateValue,
        }, true, false);
    };
    const replace = (value) => {
        const updatedFieldArrayValues = convertToArrayPayload(cloneObject(value));
        ids.current = updatedFieldArrayValues.map(generateId);
        updateValues([...updatedFieldArrayValues]);
        setFields([...updatedFieldArrayValues]);
        control._setFieldArray(name, [...updatedFieldArrayValues], (data) => data, {}, true, false);
    };
    React__default.useEffect(() => {
        control._state.action = false;
        isWatched(name, control._names) &&
            control._subjects.state.next({
                ...control._formState,
            });
        if (_actioned.current &&
            (!getValidationModes(control._options.mode).isOnSubmit ||
                control._formState.isSubmitted) &&
            !getValidationModes(control._options.reValidateMode).isOnSubmit) {
            if (control._options.resolver) {
                control._runSchema([name]).then((result) => {
                    const error = get(result.errors, name);
                    const existingError = get(control._formState.errors, name);
                    if (existingError
                        ? (!error && existingError.type) ||
                            (error &&
                                (existingError.type !== error.type ||
                                    existingError.message !== error.message))
                        : error && error.type) {
                        error
                            ? set(control._formState.errors, name, error)
                            : unset(control._formState.errors, name);
                        control._subjects.state.next({
                            errors: control._formState.errors,
                        });
                    }
                });
            }
            else {
                const field = get(control._fields, name);
                if (field &&
                    field._f &&
                    !(getValidationModes(control._options.reValidateMode).isOnSubmit &&
                        getValidationModes(control._options.mode).isOnSubmit)) {
                    validateField(field, control._names.disabled, control._formValues, control._options.criteriaMode === VALIDATION_MODE.all, control._options.shouldUseNativeValidation, true).then((error) => !isEmptyObject(error) &&
                        control._subjects.state.next({
                            errors: updateFieldArrayRootError(control._formState.errors, error, name),
                        }));
                }
            }
        }
        control._subjects.state.next({
            name,
            values: cloneObject(control._formValues),
        });
        control._names.focus &&
            iterateFieldsByAction(control._fields, (ref, key) => {
                if (control._names.focus &&
                    key.startsWith(control._names.focus) &&
                    ref.focus) {
                    ref.focus();
                    return 1;
                }
                return;
            });
        control._names.focus = '';
        control._setValid();
        _actioned.current = false;
    }, [fields, name, control]);
    React__default.useEffect(() => {
        !get(control._formValues, name) && control._setFieldArray(name);
        return () => {
            const updateMounted = (name, value) => {
                const field = get(control._fields, name);
                if (field && field._f) {
                    field._f.mount = value;
                }
            };
            control._options.shouldUnregister || shouldUnregister
                ? control.unregister(name)
                : updateMounted(name, false);
        };
    }, [name, control, keyName, shouldUnregister]);
    return {
        swap: React__default.useCallback(swap, [updateValues, name, control]),
        move: React__default.useCallback(move, [updateValues, name, control]),
        prepend: React__default.useCallback(prepend, [updateValues, name, control]),
        append: React__default.useCallback(append, [updateValues, name, control]),
        remove: React__default.useCallback(remove, [updateValues, name, control]),
        insert: React__default.useCallback(insert$1, [updateValues, name, control]),
        update: React__default.useCallback(update, [updateValues, name, control]),
        replace: React__default.useCallback(replace, [updateValues, name, control]),
        fields: React__default.useMemo(() => fields.map((field, index) => ({
            ...field,
            [keyName]: ids.current[index] || generateId(),
        })), [fields, keyName]),
    };
}

/**
 * Custom hook to manage the entire form.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useform) • [Demo](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm) • [Video](https://www.youtube.com/watch?v=RkXv4AXXC_4)
 *
 * @param props - form configuration and validation parameters.
 *
 * @returns methods - individual functions to manage the form state. {@link UseFormReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, watch, formState: { errors } } = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   console.log(watch("example"));
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input defaultValue="test" {...register("example")} />
 *       <input {...register("exampleRequired", { required: true })} />
 *       {errors.exampleRequired && <span>This field is required</span>}
 *       <button>Submit</button>
 *     </form>
 *   );
 * }
 * ```
 */
function useForm(props = {}) {
    const _formControl = react__WEBPACK_IMPORTED_MODULE_0__.useRef(undefined);
    const _values = react__WEBPACK_IMPORTED_MODULE_0__.useRef(undefined);
    const [formState, updateFormState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
        isDirty: false,
        isValidating: false,
        isLoading: isFunction(props.defaultValues),
        isSubmitted: false,
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        submitCount: 0,
        dirtyFields: {},
        touchedFields: {},
        validatingFields: {},
        errors: props.errors || {},
        disabled: props.disabled || false,
        isReady: false,
        defaultValues: isFunction(props.defaultValues)
            ? undefined
            : props.defaultValues,
    });
    if (!_formControl.current) {
        _formControl.current = {
            ...(props.formControl ? props.formControl : createFormControl(props)),
            formState,
        };
        if (props.formControl &&
            props.defaultValues &&
            !isFunction(props.defaultValues)) {
            props.formControl.reset(props.defaultValues, props.resetOptions);
        }
    }
    const control = _formControl.current.control;
    control._options = props;
    useIsomorphicLayoutEffect(() => {
        const sub = control._subscribe({
            formState: control._proxyFormState,
            callback: () => updateFormState({ ...control._formState }),
            reRenderRoot: true,
        });
        updateFormState((data) => ({
            ...data,
            isReady: true,
        }));
        control._formState.isReady = true;
        return sub;
    }, [control]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => control._disableForm(props.disabled), [control, props.disabled]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (props.mode) {
            control._options.mode = props.mode;
        }
        if (props.reValidateMode) {
            control._options.reValidateMode = props.reValidateMode;
        }
        if (props.errors && !isEmptyObject(props.errors)) {
            control._setErrors(props.errors);
        }
    }, [control, props.errors, props.mode, props.reValidateMode]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        props.shouldUnregister &&
            control._subjects.state.next({
                values: control._getWatch(),
            });
    }, [control, props.shouldUnregister]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (control._proxyFormState.isDirty) {
            const isDirty = control._getDirty();
            if (isDirty !== formState.isDirty) {
                control._subjects.state.next({
                    isDirty,
                });
            }
        }
    }, [control, formState.isDirty]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (props.values && !deepEqual(props.values, _values.current)) {
            control._reset(props.values, control._options.resetOptions);
            _values.current = props.values;
            updateFormState((state) => ({ ...state }));
        }
        else {
            control._resetDefaultValues();
        }
    }, [control, props.values]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (!control._state.mount) {
            control._setValid();
            control._state.mount = true;
        }
        if (control._state.watch) {
            control._state.watch = false;
            control._subjects.state.next({ ...control._formState });
        }
        control._removeUnmounted();
    });
    _formControl.current.formState = getProxyFormState(formState, control);
    return _formControl.current;
}


//# sourceMappingURL=index.esm.mjs.map


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["react","vendors"], () => (__webpack_exec__(83340)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);