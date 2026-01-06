"use strict";
(self["webpackChunkcdata_arc"] = self["webpackChunkcdata_arc"] || []).push([["src_connectors_mapping-editor_components_tsx"],{

/***/ 2580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  EX: () => (/* binding */ ArcQueryBuilder),
  dI: () => (/* binding */ arcControlElements),
  O4: () => (/* binding */ arcOperators),
  fA: () => (/* binding */ arcTranslations),
  UU: () => (/* binding */ getFieldOperators)
});

// UNUSED EXPORTS: arcCombinators, arcControlClassnames

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-querybuilder/dist/react-querybuilder.mjs + 2 modules
var react_querybuilder = __webpack_require__(18149);
// EXTERNAL MODULE: ./node_modules/@react-querybuilder/dnd/dist/react-querybuilder_dnd.mjs
var react_querybuilder_dnd = __webpack_require__(12288);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/index.js + 6 modules
var dist = __webpack_require__(62339);
// EXTERNAL MODULE: ./node_modules/react-dnd-html5-backend/dist/index.js + 13 modules
var react_dnd_html5_backend_dist = __webpack_require__(33631);
;// CONCATENATED MODULE: ./src/components/arc-query-builder/constants.js

var TOKENS = {
  EQUALS: 'Equals',
  NOT_EQUALS: 'Not Equals',
  LESS_THAN: 'Less Than',
  LESS_THAN_OR_EQUALS: 'Less Than or Equal To',
  GREATER_THAN: 'Greater Than',
  GREATER_THAN_OR_EQUALS: 'Greater Than or Equal To',
  CONTAINS: 'Contains',
  BEGINS_WITH: 'Starts With',
  ENDS_WITH: 'Ends With',
  IS_EMPTY: 'Is Empty',
  IS_NOT_EMPTY: 'Is Not Empty',
  IS_NULL: 'Is Null',
  IS_NOT_NULL: 'Is Not Null',
  IN: 'In',
  NOT_IN: 'Not In',
  AND: 'And',
  OR: 'Or',
  REMOVE: 'x',
  REMOVE_RULE: 'Remove rule',
  REMOVE_GROUP: 'Remove group',
  ADD_RULE: 'Add Rule',
  ADD_GROUP: 'Add Group',
  COMBINATORS: 'Combinators',
  NOT: 'NOT',
  INVERT_THIS_GROUP: 'Invert this group',
  DRAG_HANDLE: 'Drag handle',
  VALUE_SOURCE: 'Value source'
};
var TYPE_MAP = {
  "int": "number",
  "integer": "number",
  "long": "number",
  "float": "number",
  "double": "number",
  "decimal": "number",
  "date": "datetime",
  "time": "datetime",
  "fmtime": "datetime",
  "bit": "boolean",
  "bool": "boolean"
};

// EXTERNAL MODULE: external "{}"
var external_ = __webpack_require__(87963);
;// CONCATENATED MODULE: ./src/components/arc-query-builder/index.jsx
var _excluded = ["showCombinatorsBetweenRules", "className"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }









var ArcDragHandle = /*#__PURE__*/react.forwardRef(function (_ref, dragRef) {
  var className = _ref.className,
    title = _ref.title;
  return /*#__PURE__*/react.createElement("span", {
    ref: dragRef,
    className: className,
    title: title
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa-solid fa-grip-dots-vertical"
  }));
});
var ArcCombinatorSelector = function ArcCombinatorSelector(props) {
  return /*#__PURE__*/react.createElement("div", {
    className: "btn-group combinator ".concat(props.className)
  }, props.options.map(function (option) {
    return /*#__PURE__*/react.createElement("label", {
      key: option.name,
      className: "text-center btn btn-xs ".concat(props.value === option.name ? "btn-primary" : "", " ").concat(props.disabled ? "disabled" : ""),
      onClick: props.handleOnChange.bind(null, option.name)
    }, option.label);
  }));
};
var ArcRemoveRuleActionControlElement = function ArcRemoveRuleActionControlElement(props) {
  return /*#__PURE__*/react.createElement("span", {
    className: props.className,
    onClick: props.handleOnClick
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-trash"
  }));
};
var ArcRemoveGroupActionControlElement = ArcRemoveRuleActionControlElement;
var isMap = function isMap(obj) {
  return _typeof(obj) === "object" && !Array.isArray(obj);
};
var _mergeMaps = function mergeMaps(defMap, preferMap) {
  var merged = _objectSpread({}, defMap);
  for (var _i = 0, _Object$entries = Object.entries(preferMap); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    if (merged[key] && _typeof(isMap(merged[key])) && isMap(value)) {
      merged[key] = _mergeMaps(merged[key], value);
    } else {
      merged[key] = value;
    }
  }
  return merged;
};
var getFieldType = function getFieldType(field) {
  var _field$type, _field$inputType;
  var type = (field === null || field === void 0 || (_field$type = field.type) === null || _field$type === void 0 ? void 0 : _field$type.toLowerCase()) || (field === null || field === void 0 || (_field$inputType = field.inputType) === null || _field$inputType === void 0 ? void 0 : _field$inputType.toLowerCase()) || "string";
  return TYPE_MAP[type] || type;
};
var getFieldOperators = function getFieldOperators(field, operators) {
  var _field$operators;
  if (((_field$operators = field.operators) === null || _field$operators === void 0 ? void 0 : _field$operators.length) > 0) {
    return field.operators;
  }
  var type = getFieldType(field);
  return (operators !== null && operators !== void 0 ? operators : arcOperators).filter(function (operator) {
    return operator.accepts.includes(type);
  });
};
var arcControlElements = _objectSpread(_objectSpread({}, react_querybuilder/* defaultControlElements */.YM), {}, {
  dragHandle: ArcDragHandle,
  combinatorSelector: ArcCombinatorSelector,
  removeRuleAction: ArcRemoveRuleActionControlElement,
  removeGroupAction: ArcRemoveGroupActionControlElement
});
var arcControlClassnames = _objectSpread(_objectSpread({}, react_querybuilder/* defaultControlClassnames */.HI), {}, {
  queryBuilder: "queryBuilder-branches",
  addGroup: "btn btn-outline-secondary btn-sm btn-add",
  addRule: "btn btn-primary btn-sm btn-add",
  removeGroup: "",
  removeRule: "ms-auto",
  fields: "form-select form-select-sm",
  operators: "form-select form-select-sm",
  value: "form-control form-control-sm",
  valueSource: "form-select form-select-sm"
});
var arcOperators = [{
  name: "=",
  label: TOKENS.EQUALS,
  accepts: ["string", "number", "datetime", "boolean"]
}, {
  name: "!=",
  label: TOKENS.NOT_EQUALS,
  accepts: ["string", "number", "datetime", "boolean"]
}, {
  name: "<",
  label: TOKENS.LESS_THAN,
  accepts: ["number", "datetime"]
}, {
  name: "<=",
  label: TOKENS.LESS_THAN_OR_EQUALS,
  accepts: ["number", "datetime"]
}, {
  name: ">",
  label: TOKENS.GREATER_THAN,
  accepts: ["number", "datetime"]
}, {
  name: ">=",
  label: TOKENS.GREATER_THAN_OR_EQUALS,
  accepts: ["number", "datetime"]
}, {
  name: "contains",
  label: TOKENS.CONTAINS,
  accepts: ["string"]
}, {
  name: "beginsWith",
  label: TOKENS.BEGINS_WITH,
  accepts: ["string"]
}, {
  name: "endsWith",
  label: TOKENS.ENDS_WITH,
  accepts: ["string"]
}, {
  name: "isEmpty",
  label: TOKENS.IS_EMPTY,
  accepts: ["string"],
  arity: "unary"
}, {
  name: "isNotEmpty",
  label: TOKENS.IS_NOT_EMPTY,
  accepts: ["string"],
  arity: "unary"
}, {
  name: "null",
  label: TOKENS.IS_NULL,
  accepts: ["string", "number", "datetime", "boolean"],
  arity: "unary"
}, {
  name: "notNull",
  label: TOKENS.IS_NOT_NULL,
  accepts: ["string", "number", "datetime", "boolean"],
  arity: "unary"
}, {
  name: "in",
  label: TOKENS.IN,
  accepts: ["string", "number", "datetime"]
}, {
  name: "notIn",
  label: TOKENS.NOT_IN,
  accepts: ["string", "number", "datetime"]
}];
var arcCombinators = [{
  name: "and",
  label: TOKENS.AND
}, {
  name: "or",
  label: TOKENS.OR
}];
var arcTranslations = _mergeMaps(react_querybuilder/* defaultTranslations */.Cr, {
  removeRule: {
    label: TOKENS.REMOVE,
    title: TOKENS.REMOVE_RULE
  },
  removeGroup: {
    label: TOKENS.REMOVE,
    title: TOKENS.REMOVE_GROUP
  },
  addRule: {
    label: /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("i", {
      className: "fa-solid fa-plus"
    }), " ", TOKENS.ADD_RULE),
    title: TOKENS.ADD_RULE
  },
  addGroup: {
    label: /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("i", {
      className: "fa-solid fa-plus"
    }), " ", TOKENS.ADD_GROUP),
    title: TOKENS.ADD_GROUP
  },
  combinators: {
    title: TOKENS.COMBINATORS
  },
  notToggle: {
    label: TOKENS.NOT,
    title: TOKENS.INVERT_THIS_GROUP
  },
  dragHandle: {
    title: TOKENS.DRAG_HANDLE
  },
  valueSourceSelector: {
    title: TOKENS.VALUE_SOURCE
  }
});
var arcDefaultOptions = {
  showNotToggle: true,
  autoSelectOperator: true,
  operators: arcOperators,
  combinators: arcCombinators,
  translations: arcTranslations
};
var ArcQueryBuilderProvider = (0,react_querybuilder/* getCompatContextProvider */.D7)({
  key: "arc",
  controlClassnames: arcControlClassnames,
  controlElements: arcControlElements,
  translations: arcTranslations
});
var ArcQueryBuilder = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _props$showCombinator = props.showCombinatorsBetweenRules,
    showCombinatorsBetweenRules = _props$showCombinator === void 0 ? true : _props$showCombinator,
    className = props.className,
    qbProps = _objectWithoutProperties(props, _excluded);
  var mergeProps = _mergeMaps(arcDefaultOptions, qbProps);
  mergeProps.fields = react.useMemo(function () {
    var _mergeProps$fields;
    return (_mergeProps$fields = mergeProps.fields) === null || _mergeProps$fields === void 0 ? void 0 : _mergeProps$fields.map(function (field) {
      return _objectSpread(_objectSpread({}, field), {}, {
        operators: getFieldOperators(field, mergeProps.operators)
      });
    });
  }, [mergeProps.fields, mergeProps.operators]);
  if (showCombinatorsBetweenRules) {
    mergeProps.independentCombinators = mergeProps.showCombinatorsBetweenRules = true;
    if ((0,react_querybuilder/* isRuleGroup */.GD)(mergeProps.query) && !(0,react_querybuilder/* isRuleGroupTypeIC */.G$)(mergeProps.query)) {
      mergeProps.query = (0,react_querybuilder/* convertToIC */.vT)(mergeProps.query);
    }
    if (qbProps.onQueryChange) {
      mergeProps.onQueryChange = function (queryIC) {
        return qbProps.onQueryChange((0,react_querybuilder/* convertFromIC */.AP)(queryIC), queryIC);
      };
    }
  }
  return /*#__PURE__*/react.createElement("div", {
    ref: ref,
    className: "arc-query-builder ".concat(className !== null && className !== void 0 ? className : ""),
    onScroll: props.onScroll
  }, /*#__PURE__*/react.createElement(ArcQueryBuilderProvider, null, /*#__PURE__*/react.createElement(react_querybuilder_dnd/* QueryBuilderDnD */.qy, {
    dnd: _objectSpread(_objectSpread({}, dist), react_dnd_html5_backend_dist)
  }, /*#__PURE__*/react.createElement(react_querybuilder/* QueryBuilder */.oS, mergeProps))));
});
ArcQueryBuilder.propTypes = {
  /**
   * The fields.
   */
  fields: (prop_types_default()).array.isRequired,
  /**
   * The query object.
   */
  query: (prop_types_default()).object,
  /**
   * The query changed callback.
   */
  onQueryChange: (prop_types_default()).func,
  /**
   * Enable not group toggle for each rule group.
   *
   * Default: true
   */
  showNotToggle: (prop_types_default()).bool,
  /**
   * Enable drag and drop feature.
   *
   * Default: true
   */
  enableDragAndDrop: (prop_types_default()).bool,
  /**
   * Pass true to render the combinator selector between each child rule/group in the group body instead of in the group header.
   * This can make some queries easier to understand as it encourages a more natural style of reading.
   *
   * Default: true
   */
  showCombinatorsBetweenRules: (prop_types_default()).bool,
  /**
   * Diable the query builder.
   *
   * Default: false
   */
  disabled: (prop_types_default()).bool
};
if (false) {}


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

/***/ 35874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ mapping_editor_MappingConditionEditorModal)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Button.js
var Button = __webpack_require__(25615);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Dropdown.js + 1 modules
var Dropdown = __webpack_require__(26465);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Form.js + 9 modules
var Form = __webpack_require__(44324);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Modal.js + 6 modules
var Modal = __webpack_require__(48032);
// EXTERNAL MODULE: ./src/components/dropdown-hacker/index.jsx
var dropdown_hacker = __webpack_require__(4938);
// EXTERNAL MODULE: ./src/components/arc-suspense/index.jsx
var arc_suspense = __webpack_require__(20289);
// EXTERNAL MODULE: ./src/connectors/mapping-editor/types.ts
var types = __webpack_require__(97418);
// EXTERNAL MODULE: ./src/connectors/mapping-editor/XPathSelector.tsx
var XPathSelector = __webpack_require__(38607);
// EXTERNAL MODULE: ./src/connectors/mapping-editor/constants.js
var constants = __webpack_require__(97865);
;// CONCATENATED MODULE: ./src/connectors/mapping-editor/ActionPanel.tsx






const ActionStatuses = [
    { name: types/* MappingNodeConditionActionStatus */.Iq.Success, label: constants/* TOKENS */.xZ.STATUS_SUCCESS },
    { name: types/* MappingNodeConditionActionStatus */.Iq.Warning, label: constants/* TOKENS */.xZ.STATUS_WARNING },
    { name: types/* MappingNodeConditionActionStatus */.Iq.Error, label: constants/* TOKENS */.xZ.STATUS_ERROR }
];
const ActionTypes = [
    { name: types/* MappingNodeConditionActionType */.AB.Exclude, label: constants/* TOKENS */.xZ.ELSE_EXCLUDE_ELEMENT },
    { name: types/* MappingNodeConditionActionType */.AB.Mapping, label: constants/* TOKENS */.xZ.ELSE_MAP_VALUE },
    { name: types/* MappingNodeConditionActionType */.AB.New, label: constants/* TOKENS */.xZ.ELSE_ASSIGN_A_DIFFERENT_VALUE },
];
function ActionPanel(props) {
    const [showDropdown, setShowDropdown] = react.useState(false);
    const handleChange = react.useCallback((e) => props.onChange(e.target.name, e.target.type === "checkbox" ? e.target.checked : e.target.value), [props.onChange]);
    return (react.createElement("div", { className: "mapping-action-panel d-flex flex-column h-100 p-3" },
        react.createElement("h4", { className: "action-tip pb-1 fs-6 d-flex" },
            react.createElement("span", null, constants/* TOKENS */.xZ.If),
            react.createElement("span", { className: "condition-name d-flex px-2" },
                "[",
                react.createElement("span", { className: "text-truncate" }, props.conditionName || constants/* TOKENS */.xZ.ConditionName),
                "]"),
            react.createElement("span", null, constants/* TOKENS */.xZ.IsSatisfied)),
        react.createElement("label", { className: "fw-bold", htmlFor: "ActionPanel_match_value" }, constants/* TOKENS */.xZ.MapValue),
        react.createElement("span", { className: "map-xpath d-flex" },
            "[",
            react.createElement("span", { className: "text-truncate" }, props.matchXPath || "..."),
            "]"),
        react.createElement("label", { className: "fw-bold mt-3", htmlFor: "ActionPanel_match_status" }, constants/* TOKENS */.xZ.SET_STATUS_TO),
        react.createElement("select", { className: "form-select mb-3", name: "matchStatus", id: "ActionPanel_match_status", value: props.matchStatus || types/* MappingNodeConditionActionStatus */.Iq.Success, onChange: handleChange, disabled: props.disabled }, ActionStatuses.map(status => react.createElement("option", { key: status.name, value: status.name }, status.label))),
        react.createElement("label", { className: "mb-3" },
            react.createElement("input", { type: "checkbox", name: "matchNotify", checked: props.matchNotify === true, onChange: handleChange, disabled: props.disabled }),
            react.createElement("span", { className: "ps-1" }, constants/* TOKENS */.xZ.SEND_A_NOTIFICATION)),
        props.matchNotify === true &&
            react.createElement(react.Fragment, null,
                props.configAlert &&
                    react.createElement("span", null,
                        react.createElement("a", { className: "btn btn-outline-secondary btn-sm mb-3", href: "settings.rst#alertsTab", target: "_blank" },
                            react.createElement("i", { className: "fa fa-cog" }),
                            "\u00A0",
                            constants/* TOKENS */.xZ.CONFIGURE_ALERTS)),
                react.createElement("label", { className: "fw-bold", htmlFor: "ActionPanel_match_notify_to" },
                    constants/* TOKENS */.xZ.NOTIFY_TO,
                    " ",
                    react.createElement("span", { className: "text-danger" }, "*")),
                react.createElement("input", { type: "text", className: "form-control mb-3", name: "matchNotifyTo", id: "ActionPanel_match_notify_to", value: props.matchNotifyTo || props.defaultNotifyTo || "", onChange: handleChange, disabled: props.disabled }),
                react.createElement("label", { className: "fw-bold", htmlFor: "ActionPanel_match_notify_subject" },
                    constants/* TOKENS */.xZ.NOTIFY_SUBJECT,
                    " ",
                    react.createElement("span", { className: "text-danger" }, "*")),
                react.createElement("input", { type: "text", className: "form-control mb-3", name: "matchNotifySubject", id: "ActionPanel_match_notify_subject", value: props.matchNotifySubject || "", onChange: handleChange, disabled: props.disabled })),
        react.createElement("h4", { className: `action-tip pb-1 fs-6 mt-${props.matchNotify === true ? 3 : 5}` }),
        react.createElement("label", { className: "fw-bold", htmlFor: "ActionPanel_value_type" }, constants/* TOKENS */.xZ.ELSE_SET_ACTION_TO),
        react.createElement("select", { className: "form-select", name: "mismatchType", id: "ActionPanel_value_type", value: props.mismatchType || types/* MappingNodeConditionActionType */.AB.Exclude, onChange: handleChange, disabled: props.disabled }, ActionTypes.map(type => react.createElement("option", { key: type.name, value: type.name }, type.label))),
        props.mismatchType === types/* MappingNodeConditionActionType */.AB.New && (props.loopRoot ?
            react.createElement(Dropdown/* default */.A, { className: "mapping-xpath-dropdown", show: showDropdown, onToggle: setShowDropdown },
                react.createElement(dropdown_hacker/* DropdownHacker */.G, null),
                react.createElement(Dropdown/* default */.A.Toggle, { disabled: props.disabled, as: "input", variant: "outline-secondary", className: "form-control mt-2", name: "mismatchXPath", value: props.mismatchXPath, onChange: handleChange, placeholder: constants/* TOKENS */.xZ.SelectInputXML }),
                react.createElement(Dropdown/* default */.A.Menu, { className: "px-2 mt-1 w-100" },
                    react.createElement(XPathSelector/* XPathSelector */.l, { root: props.loopRoot, mode: types/* XPathSelectorMode */.wy.LeafOnly, onSelect: xpath => (xpath.length > 1 && props.onChange("mismatchXPath", xpath.substring(1)), setShowDropdown(false)) })))
            : react.createElement("span", null, constants/* TOKENS */.xZ.ELSE_ASSIGN_A_DIFFERENT_VALUE_TIP)),
        props.mismatchType === types/* MappingNodeConditionActionType */.AB.Mapping && react.createElement("span", { className: "map-xpath d-flex mt-1" },
            "[",
            react.createElement("span", { className: "text-truncate" }, props.matchXPath || "..."),
            "]"),
        react.createElement("label", { className: "fw-bold mt-3", htmlFor: "ActionPanel_mismatch_status" }, constants/* TOKENS */.xZ.SET_STATUS_TO),
        react.createElement("select", { className: "form-select mb-3", name: "mismatchStatus", id: "ActionPanel_mismatch_status", value: props.mismatchStatus || types/* MappingNodeConditionActionStatus */.Iq.Success, onChange: handleChange, disabled: props.disabled }, ActionStatuses.map(status => react.createElement("option", { key: status.name, value: status.name }, status.label))),
        react.createElement("label", { className: "mb-3" },
            react.createElement("input", { type: "checkbox", name: "mismatchNotify", checked: props.mismatchNotify === true, onChange: handleChange, disabled: props.disabled }),
            react.createElement("span", { className: "ps-1" }, constants/* TOKENS */.xZ.SEND_A_NOTIFICATION)),
        props.mismatchNotify === true &&
            react.createElement(react.Fragment, null,
                props.configAlert && props.matchNotify !== true &&
                    react.createElement("span", null,
                        react.createElement("a", { className: "btn btn-outline-secondary btn-sm mb-3", href: "settings.rst#alertsTab", target: "_blank" },
                            react.createElement("i", { className: "fa fa-cog" }),
                            "\u00A0",
                            constants/* TOKENS */.xZ.CONFIGURE_ALERTS)),
                react.createElement("label", { className: "fw-bold", htmlFor: "ActionPanel_mismatch_notify_to" },
                    constants/* TOKENS */.xZ.NOTIFY_TO,
                    " ",
                    react.createElement("span", { className: "text-danger" }, "*")),
                react.createElement("input", { type: "text", className: "form-control mb-3", name: "mismatchNotifyTo", id: "ActionPanel_mismatch_notify_to", value: props.mismatchNotifyTo || props.defaultNotifyTo || "", onChange: handleChange, disabled: props.disabled }),
                react.createElement("label", { className: "fw-bold", htmlFor: "ActionPanel_mismatch_notify_subject" },
                    constants/* TOKENS */.xZ.NOTIFY_SUBJECT,
                    " ",
                    react.createElement("span", { className: "text-danger" }, "*")),
                react.createElement("input", { type: "text", className: "form-control mb-3", name: "mismatchNotifySubject", id: "ActionPanel_mismatch_notify_subject", value: props.mismatchNotifySubject || "", onChange: handleChange, disabled: props.disabled }))));
}

// EXTERNAL MODULE: ./src/connectors/shared/ConditionMappingBuilder.jsx
var ConditionMappingBuilder = __webpack_require__(60219);
// EXTERNAL MODULE: ./src/connectors/mapping-editor/helper.ts
var helper = __webpack_require__(29471);
// EXTERNAL MODULE: ./src/components/utils/index.js + 1 modules
var utils = __webpack_require__(25337);
// EXTERNAL MODULE: ./src/connectors/mapping-editor/components.tsx
var components = __webpack_require__(76677);
// EXTERNAL MODULE: ./src/connectors/mapping-editor/utils.jsx
var mapping_editor_utils = __webpack_require__(49535);
;// CONCATENATED MODULE: ./src/connectors/mapping-editor/MappingConditionEditorModal.jsx
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["designer", "condition", "onChange", "loopXPath", "loopRoot", "headers", "variables", "valid", "onValidateChange", "showGetStarted", "getStartedTip"];
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }

















var RSBCodeMirror = /*#__PURE__*/react.lazy(function () {
  return Promise.all(/* import() */[__webpack_require__.e("react"), __webpack_require__.e("vendors-node_modules_codemirror_autocomplete_dist_index_js-node_modules_codemirror_commands_d-ffc779"), __webpack_require__.e("vendors-node_modules_codemirror_lang-sql_dist_index_js-node_modules_codemirror_dist_index_js"), __webpack_require__.e("src_components_arc-codemirror_CopyCodeButton_jsx-src_components_arc-codemirror_FormatCodeButton_jsx"), __webpack_require__.e("src_connectors_mapping-editor_RSBCodeMirror_jsx")]).then(__webpack_require__.bind(__webpack_require__, 14739));
});
var DEFAULT_QUERY = {
  combinator: "and",
  rules: []
};
var ConditionMappingEditor = function ConditionMappingEditor(props) {
  var designer = props.designer,
    condition = props.condition,
    onChange = props.onChange,
    loopXPath = props.loopXPath,
    loopRoot = props.loopRoot,
    headers = props.headers,
    variables = props.variables,
    valid = props.valid,
    onValidateChange = props.onValidateChange,
    showGetStarted = props.showGetStarted,
    getStartedTip = props.getStartedTip,
    queryProps = _objectWithoutProperties(props, _excluded);
  var refs = (0,react.useRef)({});
  var editorRef = (0,utils/* useClickOutsideCheck */.jn)(function () {
    var _refs$current$hideDro;
    return (_refs$current$hideDro = refs.current.hideDropdown) === null || _refs$current$hideDro === void 0 ? void 0 : _refs$current$hideDro.call(null);
  });
  var builderRef = (0,react.useRef)(null);
  var handleOnChange = (0,react.useCallback)(function (key, val, queryIC) {
    var _refs$current$hideDro2;
    var cond = _objectSpread({}, condition);
    if (key === "query") {
      cond.query = val;
      cond.queryIC = queryIC;
    } else if (key === "custom") {
      cond.custom = val;
    } else {
      return false;
    }
    onChange(cond);
    (_refs$current$hideDro2 = refs.current.hideDropdown) === null || _refs$current$hideDro2 === void 0 || _refs$current$hideDro2.call(null);
  }, [condition, onChange]);
  var renderXPathSelector = react.useCallback(function (props) {
    return /*#__PURE__*/react.createElement(XPathSelector/* XPathSelector */.l, {
      root: loopRoot,
      mode: types/* XPathSelectorMode */.wy.LeafOnly,
      style: props.style,
      onSelect: props.onSelect
    });
  }, [loopRoot]);
  return /*#__PURE__*/react.createElement(ConditionMappingBuilder/* ConditionMappingBuilderContext */.Uc.Provider, {
    value: {
      loopXPath: loopXPath,
      candidateSourceTreeData: loopRoot != null ? [loopRoot] : null,
      renderXPathSelector: renderXPathSelector,
      headers: headers,
      variables: variables,
      refs: refs,
      builderRef: builderRef,
      showGetStarted: showGetStarted,
      getStartedTip: getStartedTip
    }
  }, /*#__PURE__*/react.createElement("div", {
    ref: editorRef,
    className: "xmlmap-basic condition-mapping-editor d-flex flex-column",
    onClick: function onClick() {
      var _refs$current$hideDro3;
      return (_refs$current$hideDro3 = refs.current.hideDropdown) === null || _refs$current$hideDro3 === void 0 ? void 0 : _refs$current$hideDro3.call(null);
    }
  }, designer !== false && /*#__PURE__*/react.createElement(ConditionMappingBuilder/* ConditionMappingBuilder */.hv, _extends({
    ref: builderRef
  }, queryProps, {
    query: condition.queryIC || condition.query,
    onQueryChange: handleOnChange.bind(null, "query"),
    onScroll: function onScroll() {
      var _refs$current$hideDro4;
      return (_refs$current$hideDro4 = refs.current.hideDropdown) === null || _refs$current$hideDro4 === void 0 ? void 0 : _refs$current$hideDro4.call(null);
    }
  })), designer === false && /*#__PURE__*/react.createElement("div", {
    className: "custom-script mb-3 me-3"
  }, /*#__PURE__*/react.createElement("hr", {
    className: "mt-auto divider mb-3"
  }), /*#__PURE__*/react.createElement(arc_suspense/* default */.A, null, /*#__PURE__*/react.createElement(RSBCodeMirror, {
    text: condition.custom || "",
    onChange: handleOnChange.bind(null, "custom"),
    validator: /*#__PURE__*/react.createElement(mapping_editor_utils/* ExpressionValidator */.tV, {
      expression: condition.custom || "",
      valid: valid,
      onValidateChange: onValidateChange
    })
  })))));
};
ConditionMappingEditor.propTypes = {
  /**
   * The condition info {name, query, custom}.
   */
  condition: (prop_types_default()).object.isRequired,
  /**
   * The XPath of the current (destination) node.
   */
  relativeXPath: (prop_types_default()).string,
  /**
   * The XPath of the source node.
   */
  sourceXPath: (prop_types_default()).string,
  /**
   * The default value of the source node.
   */
  sourceDefault: (prop_types_default()).string,
  /**
   * The nearliest  loop XPath of the current (destination) node.
   */
  loopXPath: (prop_types_default()).string,
  /**
   * The nearliest  loop XPath of the current (destination) node.
   */
  loopRoot: (prop_types_default()).object,
  /**
   * The message header names.
   */
  headers: (prop_types_default()).array,
  /**
   * The variable name.
   */
  variables: (prop_types_default()).array,
  /**
   * Event: onChange.
   */
  onChange: (prop_types_default()).func.isRequired
};
var MappingConditionEditorModal = function MappingConditionEditorModal(props) {
  var _props$condition$cust, _props$condition2, _condition$queryIC, _condition$queryIC2, _condition$query2, _condition$custom2, _condition$query3, _condition$custom3;
  var initQuery = (0,react.useMemo)(function () {
    var _props$condition;
    if (props.condition == null) {
      return DEFAULT_QUERY;
    }
    return ((_props$condition = props.condition) === null || _props$condition === void 0 || (_props$condition = _props$condition.custom) === null || _props$condition === void 0 ? void 0 : _props$condition.length) >= 0 ? null : (0,helper/* parseCondition */.zB)(props.condition);
  }, [props.condition]);
  var _useState = (0,react.useState)((initQuery === null || initQuery === void 0 ? void 0 : initQuery.combinator.length) > 0),
    _useState2 = _slicedToArray(_useState, 2),
    designer = _useState2[0],
    setDesigner = _useState2[1];
  var _useState3 = (0,react.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    confirmed = _useState4[0],
    setConfirmed = _useState4[1];
  var _useState5 = (0,react.useState)({
      name: props.conditionName,
      query: initQuery !== null && initQuery !== void 0 ? initQuery : DEFAULT_QUERY,
      custom: (_props$condition$cust = (_props$condition2 = props.condition) === null || _props$condition2 === void 0 ? void 0 : _props$condition2.custom) !== null && _props$condition$cust !== void 0 ? _props$condition$cust : ""
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    condition = _useState6[0],
    setCondition = _useState6[1];
  var _useState7 = (0,react.useState)(props.action || {}),
    _useState8 = _slicedToArray(_useState7, 2),
    action = _useState8[0],
    setAction = _useState8[1];
  var _useState9 = (0,react.useState)(true),
    _useState10 = _slicedToArray(_useState9, 2),
    validScript = _useState10[0],
    setValidScript = _useState10[1];
  var _React$useState = react.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    showDropdown = _React$useState2[0],
    setShowDropdown = _React$useState2[1];
  var getStartedTip = react.useMemo(function () {
    return /*#__PURE__*/react.createElement("div", {
      className: "d-flex flex-column text-center condition-get-started-tip"
    }, /*#__PURE__*/react.createElement("span", {
      className: "tip-icon"
    }, /*#__PURE__*/react.createElement("i", {
      className: "fa-regular fa-filter text-secondary"
    })), /*#__PURE__*/react.createElement("h3", {
      className: "tip-header mt-0 fw-bold"
    }, constants/* TOKENS */.xZ.ConditionGetStartedTip), /*#__PURE__*/react.createElement("span", {
      className: "tip-desc fw-normal"
    }, constants/* TOKENS */.xZ.ConditionGetStartedDesc));
  }, []);
  var saveCondition = function saveCondition() {
    props.onHide();
    var mapping = {
      conditionName: condition.name,
      action: action
    };
    if (designer) {
      mapping.condition = condition.query !== initQuery ? (0,helper/* formatQuery */.OJ)(condition.query) : props.condition;
    } else if (condition.custom.length > 0) {
      mapping.condition = {
        custom: condition.custom
      };
    }
    props.onSave(mapping);
  };
  var handleScriptMode = function handleScriptMode(e) {
    if (!confirmed) return false;
    setDesigner(!e.target.checked);
    if (e.target.checked) {
      var _condition$query;
      setConfirmed(((_condition$query = condition.query) === null || _condition$query === void 0 || (_condition$query = _condition$query.rules) === null || _condition$query === void 0 ? void 0 : _condition$query.length) <= 0);
    } else {
      var _condition$custom;
      setConfirmed((condition === null || condition === void 0 || (_condition$custom = condition.custom) === null || _condition$custom === void 0 ? void 0 : _condition$custom.length) <= 0);
    }
  };
  if (!props.show || (0,utils/* renderReactModalByParent */.wf)("Mapping.ConditionEditorModal", props)) return null;
  return /*#__PURE__*/react.createElement(Modal/* default */.A, {
    className: "react-bootstrap-modal mapping-modal xmlmap-modal condition-mapping-editor-modal modal-xxl ".concat(props.enableAction ? "action" : "", " ").concat((condition === null || condition === void 0 || (_condition$queryIC = condition.queryIC) === null || _condition$queryIC === void 0 || (_condition$queryIC = _condition$queryIC.rules) === null || _condition$queryIC === void 0 ? void 0 : _condition$queryIC.length) > 0 ? "" : "get-started"),
    show: true,
    onHide: props.onHide,
    onEscapeKeyDown: props.onHide,
    backdrop: "static",
    size: "xl"
  }, /*#__PURE__*/react.createElement(Modal/* default */.A.Header, {
    className: "py-0",
    closeButton: true
  }, /*#__PURE__*/react.createElement(Modal/* default */.A.Title, null, props.isConditionNode ? props.editing ? constants/* TOKENS */.xZ.EditConditionNode : constants/* TOKENS */.xZ.AddConditionNode : props.condition != null ? constants/* TOKENS */.xZ.EditMappingConditions : constants/* TOKENS */.xZ.AddMappingConditions), /*#__PURE__*/react.createElement("span", {
    className: "d-flex ms-auto pt-2"
  }, !props.disabled && /*#__PURE__*/react.createElement(Form/* default */.A.Check, {
    id: "xmlmap_condition_mapping_modal_script_mode_switch",
    className: "script-mode-switch d-flex align-items-center",
    type: "switch",
    label: constants/* TOKENS */.xZ.SCRIPT_MODE,
    checked: designer !== confirmed,
    onChange: handleScriptMode
  }), /*#__PURE__*/react.createElement("a", {
    href: "help.rst#MappingConditionEditor",
    target: "_blank",
    rel: "noreferrer",
    className: "mx-3 text-secondary"
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-question-circle-o"
  })))), confirmed ? /*#__PURE__*/react.createElement("div", {
    className: "xpath-container d-flex ps-3 py-2"
  }, (0,helper/* parseXPath */.$A)(props.relativeXPath).slice(0, -1).map(function (ele) {
    return /*#__PURE__*/react.createElement("span", {
      key: ele,
      className: "text-secondary pe-1"
    }, ele, " /");
  }), /*#__PURE__*/react.createElement("span", null, props.name)) : /*#__PURE__*/react.createElement(components/* ConfirmationBanner */.o4, {
    prompt: designer ? constants/* TOKENS */.xZ.SWITCH_DESIGNER_PROMPT : constants/* TOKENS */.xZ.SWITCH_CUSTOM_SCRIPT_PROMPT,
    confirm: designer ? constants/* TOKENS */.xZ.SWITCH_DESIGNER_CONFIRM : constants/* TOKENS */.xZ.SWITCH_CUSTOM_SCRIPT_CONFIRM,
    onConfirm: setConfirmed.bind(null, true),
    onDeny: function onDeny() {
      return setConfirmed(true), setDesigner(function (designer) {
        return !designer;
      });
    }
  }), /*#__PURE__*/react.createElement(Modal/* default */.A.Body, {
    className: "d-flex py-0"
  }, /*#__PURE__*/react.createElement("div", {
    className: props.enableAction ? "condition-designer-w-auto" : "w-100"
  }, /*#__PURE__*/react.createElement("div", {
    className: "d-flex my-3"
  }, !props.isConditionNode && /*#__PURE__*/react.createElement("div", {
    className: "element-container d-flex flex-column col-md-3"
  }, /*#__PURE__*/react.createElement("b", null, constants/* TOKENS */.xZ.ELEMENT), /*#__PURE__*/react.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/react.createElement("span", {
    className: "node-name mapping-basic-element px-2 me-1 text-truncate"
  }, props.title || props.name), props.mappingAble && /*#__PURE__*/react.createElement("span", {
    className: "ms-auto"
  }, "="))), /*#__PURE__*/react.createElement("div", {
    className: "condition-name ms-1 px-2 col-md-".concat(12 - (props.isConditionNode ? 0 : 3) - (props.mappingAble ? 5 : 0))
  }, /*#__PURE__*/react.createElement("b", null, constants/* TOKENS */.xZ.ConditionName), /*#__PURE__*/react.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/react.createElement("input", {
    type: "text",
    className: "form-control",
    id: "ConditionMappingEditor_condition_name",
    value: condition.name || "",
    onChange: function onChange(e) {
      return setCondition(function (cond) {
        return _objectSpread(_objectSpread({}, cond), {}, {
          name: e.target.value
        });
      });
    },
    disabled: props.disabled
  }), props.mappingAble && /*#__PURE__*/react.createElement("span", {
    className: "ms-auto ps-3"
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-arrow-right"
  })))), props.mappingAble && /*#__PURE__*/react.createElement("div", {
    className: "value-container d-flex flex-column col-md-5 ms-2 pe-3"
  }, /*#__PURE__*/react.createElement("b", null, constants/* TOKENS */.xZ.VALUE), /*#__PURE__*/react.createElement(Dropdown/* default */.A, {
    className: "mapping-xpath-dropdown",
    show: showDropdown,
    onToggle: setShowDropdown
  }, /*#__PURE__*/react.createElement(dropdown_hacker/* DropdownHacker */.G, null), /*#__PURE__*/react.createElement(Dropdown/* default */.A.Toggle, {
    disabled: props.disabled,
    as: "input",
    variant: "outline-secondary",
    className: "form-control",
    name: "matchXPath",
    value: action.matchXPath,
    onChange: function onChange(e) {
      return setAction(function (action) {
        return _objectSpread(_objectSpread({}, action), {}, {
          matchXPath: e.target.value
        });
      });
    },
    placeholder: constants/* TOKENS */.xZ.SelectInputXML
  }), /*#__PURE__*/react.createElement(Dropdown/* default */.A.Menu, {
    className: "px-2 mt-1 w-100"
  }, /*#__PURE__*/react.createElement(XPathSelector/* XPathSelector */.l, {
    root: props.loopRoot,
    mode: types/* XPathSelectorMode */.wy.LeafOnly,
    onSelect: function onSelect(xpath) {
      return xpath.length > 1 && setAction(function (action) {
        return _objectSpread(_objectSpread({}, action), {}, {
          matchXPath: xpath.substring(1)
        });
      }), setShowDropdown(false);
    }
  }))))), /*#__PURE__*/react.createElement(ConditionMappingEditor, _extends({}, props, {
    condition: condition,
    onChange: setCondition,
    designer: designer === confirmed,
    valid: validScript,
    onValidateChange: setValidScript,
    showGetStarted: !((condition === null || condition === void 0 || (_condition$queryIC2 = condition.queryIC) === null || _condition$queryIC2 === void 0 || (_condition$queryIC2 = _condition$queryIC2.rules) === null || _condition$queryIC2 === void 0 ? void 0 : _condition$queryIC2.length) > 0),
    disabled: props.disabled,
    getStartedTip: getStartedTip
  }))), props.enableAction && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "vr"
  }), /*#__PURE__*/react.createElement(ActionPanel, _extends({}, action, {
    disabled: props.disabled || designer === confirmed && !(((_condition$query2 = condition.query) === null || _condition$query2 === void 0 || (_condition$query2 = _condition$query2.rules) === null || _condition$query2 === void 0 ? void 0 : _condition$query2.length) > 0) || designer !== confirmed && !(((_condition$custom2 = condition.custom) === null || _condition$custom2 === void 0 ? void 0 : _condition$custom2.length) > 0),
    loopRoot: props.loopRoot,
    conditionName: condition.name,
    onChange: function onChange(name, value) {
      return setAction(function (action) {
        var newAction = _objectSpread({}, action);
        newAction[name] = value;
        return newAction;
      });
    }
  })))), /*#__PURE__*/react.createElement(Modal/* default */.A.Footer, null, /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "outline-secondary",
    className: "border-0",
    onClick: props.onHide
  }, constants/* TOKENS */.xZ.CANCEL), !props.disabled && /*#__PURE__*/react.createElement(Button/* default */.A, {
    disabled: designer === confirmed && (props.isConditionNode && ((_condition$query3 = condition.query) === null || _condition$query3 === void 0 || (_condition$query3 = _condition$query3.rules) === null || _condition$query3 === void 0 ? void 0 : _condition$query3.length) <= 0 || !(0,helper/* validateQuery */.B4)(condition.query)) || designer !== confirmed && (!validScript || props.isConditionNode && (condition === null || condition === void 0 || (_condition$custom3 = condition.custom) === null || _condition$custom3 === void 0 ? void 0 : _condition$custom3.length) <= 0),
    onClick: saveCondition
  }, props.isConditionNode ? props.editing ? constants/* TOKENS */.xZ.EditConditionNode : constants/* TOKENS */.xZ.AddConditionNode : props.condition != null ? constants/* TOKENS */.xZ.APPLY : constants/* TOKENS */.xZ.AddMappingConditions)));
};
MappingConditionEditorModal.propTypes = {
  /**
   * Whether to show the modal.
   */
  show: (prop_types_default()).bool,
  /**
   * Hide the modal.
   */
  onHide: (prop_types_default()).func,
  /**
   * The condition name.
   */
  conditionName: (prop_types_default()).string,
  /**
   * The condition expression.
   */
  condition: (prop_types_default()).object,
  /**
   * The XPath of the current (destination) node.
   */
  relativeXPath: (prop_types_default()).string.isRequired,
  /**
   * The XPath of the source node.
   */
  sourceXPath: (prop_types_default()).string,
  /**
   * The default value of the source node.
   */
  sourceDefault: (prop_types_default()).string,
  /**
   * The nearliest  loop XPath of the current (destination) node.
   */
  loopXPath: (prop_types_default()).string,
  /**
   * The loop root node.
   */
  loopRoot: (prop_types_default()).object,
  /**
   * Is able to mapping?
   */
  mappingAble: (prop_types_default()).bool,
  /**
   * The message header names.
   */
  headers: (prop_types_default()).array,
  /**
   * The variable name.
   */
  variables: (prop_types_default()).array,
  /**
   * Enable action panel. Default: false.
   */
  enableAction: (prop_types_default()).bool,
  /**
   * The action.
   */
  action: (prop_types_default()).object,
  /**
   * Event: onSave.
   */
  onSave: (prop_types_default()).func.isRequired
};
/* harmony default export */ const mapping_editor_MappingConditionEditorModal = (MappingConditionEditorModal);

/***/ }),

/***/ 35160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(25615);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44324);
/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(15192);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(48032);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(75056);
/* harmony import */ var react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(89567);
/* harmony import */ var _components_arc_suspense__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20289);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49535);
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25337);
/* harmony import */ var _RSBExpLanguage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7438);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76677);
/* harmony import */ var _XPathSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38607);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97418);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29471);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97865);
/* harmony import */ var _edi_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86755);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }


















var CodeEditor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/* import() */[__webpack_require__.e("react"), __webpack_require__.e("vendors-node_modules_codemirror_autocomplete_dist_index_js-node_modules_codemirror_commands_d-ffc779"), __webpack_require__.e("vendors-node_modules_codemirror_lang-sql_dist_index_js-node_modules_codemirror_dist_index_js"), __webpack_require__.e("src_components_arc-codemirror_CopyCodeButton_jsx-src_components_arc-codemirror_FormatCodeButton_jsx"), __webpack_require__.e("src_connectors_mapping-editor_CodeEditor_tsx-_80190")]).then(__webpack_require__.bind(__webpack_require__, 63625));
});
var RSBCodeMirror = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/* import() */[__webpack_require__.e("react"), __webpack_require__.e("vendors-node_modules_codemirror_autocomplete_dist_index_js-node_modules_codemirror_commands_d-ffc779"), __webpack_require__.e("vendors-node_modules_codemirror_lang-sql_dist_index_js-node_modules_codemirror_dist_index_js"), __webpack_require__.e("src_components_arc-codemirror_CopyCodeButton_jsx-src_components_arc-codemirror_FormatCodeButton_jsx"), __webpack_require__.e("src_connectors_mapping-editor_RSBCodeMirror_jsx")]).then(__webpack_require__.bind(__webpack_require__, 14739));
});
var VariableItemDesc = function VariableItemDesc(_ref) {
  var _mapping$const, _mapping$xpath, _mapping$vault, _mapping$header;
  var mapping = _ref.mapping;
  if (!mapping || _typeof(mapping) !== "object") mapping = mapping || "";else if (((_mapping$const = mapping["const"]) === null || _mapping$const === void 0 ? void 0 : _mapping$const.length) > 0) mapping = mapping["const"];else if (((_mapping$xpath = mapping.xpath) === null || _mapping$xpath === void 0 ? void 0 : _mapping$xpath.length) > 0 || ((_mapping$vault = mapping.vault) === null || _mapping$vault === void 0 ? void 0 : _mapping$vault.length) > 0 || ((_mapping$header = mapping.header) === null || _mapping$header === void 0 ? void 0 : _mapping$header.length) > 0 || /^\[_map.[^\]]+]$/.test(mapping.custom)) {
    var _mapping$xpath2, _mapping$vault2, _mapping$vault3, _mapping$header2, _mapping$formatters;
    var exp = [];
    exp.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      key: exp.length++,
      className: "rsb-exp-open-rsb"
    }, "["));
    if (((_mapping$xpath2 = mapping.xpath) === null || _mapping$xpath2 === void 0 ? void 0 : _mapping$xpath2.length) > 0) {
      exp.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        key: exp.length++,
        className: "rsb-exp-filter"
      }, "xpath"));
      exp.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        key: exp.length++,
        className: "rsb-exp-open-bracket"
      }, "("));
      exp.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        key: exp.length++,
        className: "rsb-exp-xpath"
      }, mapping.xpath));
      exp.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        key: exp.length++,
        className: "rsb-exp-close-bracket"
      }, ")"));
    } else if (((_mapping$vault2 = mapping.vault) === null || _mapping$vault2 === void 0 ? void 0 : _mapping$vault2.length) > 0 || ((_mapping$vault3 = mapping.vault) === null || _mapping$vault3 === void 0 ? void 0 : _mapping$vault3.length) > 0) {
      exp.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        key: exp.length++,
        className: "rsb-exp-filter"
      }, "Vault"));
      exp.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        key: exp.length++,
        className: "rsb-exp-open-bracket"
      }, "("));
      exp.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        key: exp.length++,
        className: "rsb-exp-vault"
      }, mapping.vault));
      exp.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        key: exp.length++,
        className: "rsb-exp-close-bracket"
      }, ")"));
    } else if (((_mapping$header2 = mapping.header) === null || _mapping$header2 === void 0 ? void 0 : _mapping$header2.length) > 0) {
      exp.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        key: exp.length++,
        className: "rsb-exp-filter"
      }, "_message.header:"));
      exp.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        key: exp.length++,
        className: "rsb-exp-source-header"
      }, mapping.header));
    } else {
      exp.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        key: exp.length++,
        className: "rsb-exp-filter"
      }, "_map."));
      exp.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        key: exp.length++,
        className: "rsb-exp-source-variable"
      }, mapping.custom.substring(6, mapping.custom.length - 1).split(/\s*\|\s*/)[0]));
    }
    (_mapping$formatters = mapping.formatters) === null || _mapping$formatters === void 0 || _mapping$formatters.filter(function (formatter) {
      return formatter && formatter !== "def" && formatter.name !== "def";
    }).forEach(function (formatter) {
      var _formatter$arguments;
      exp.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        key: exp.length++,
        className: "rsb-exp-pipe"
      }, " | "));
      exp.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        key: exp.length++,
        className: "rsb-exp-filter"
      }, formatter.name || formatter));
      if ((formatter === null || formatter === void 0 || (_formatter$arguments = formatter.arguments) === null || _formatter$arguments === void 0 ? void 0 : _formatter$arguments.length) > 0) {
        exp.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          key: exp.length++,
          className: "rsb-exp-open-bracket"
        }, "("));
        exp.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          key: exp.length++,
          className: "rsb-exp-string"
        }, formatter === null || formatter === void 0 ? void 0 : formatter.arguments.join(", ")));
        exp.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          key: exp.length++,
          className: "rsb-exp-close-bracket"
        }, ")"));
      }
    });
    exp.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      key: exp.length++,
      className: "rsb-exp-close-rsb"
    }, "]"));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "me-1"
    }, _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.LAST_KNOWN_ASSIGNMENT), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "fst-italic"
    }, exp));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "me-1"
    }, _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.LAST_KNOWN_ASSIGNMENT), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "fst-italic"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-code me-1"
    }), "script"));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "me-1"
  }, _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.SAMPLE_VALUE), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "fst-italic"
  }, mapping));
};
var MESSAGE_HEADER_TABLE_COLUMNS = [{
  id: "name",
  header: _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.COLUMN_NAME,
  accessorKey: "name",
  aggregateCell: function aggregateCell(props, cellMap) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "d-flex"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "mt-1 mb-2"
    }, cellMap.name(props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "add-item-btn btn btn-outline-secondary btn-sm text-center ms-auto py-2 px-3 hover-display"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "d-flex flex-nowrap"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-add pe-2"
    }), _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.ADD)));
  }
}];
var VARIABLE_TABLE_COLUMNS = [{
  id: "name",
  header: _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.COLUMN_NAME,
  accessorKey: "name",
  aggregateCell: function aggregateCell(props, cellMap) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_5__/* .ItemRow */ .G9, {
      name: cellMap.name(props),
      desc: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(VariableItemDesc, {
        mapping: props.row.original.value
      })
    });
  }
}];
var VAULT_TABLE_COLUMNS = [{
  id: "name",
  header: _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.COLUMN_NAME,
  accessorKey: "name",
  aggregateCell: function aggregateCell(props, cellMap) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "d-flex flex-column"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, cellMap.name(props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "text-secondary mt-2"
    }, cellMap.type(props)));
  }
}, {
  id: "type",
  header: _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.COLUMN_TYPE,
  accessorKey: "type",
  headerClassName: "d-none",
  className: "d-none"
}, {
  id: "value",
  header: _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.COLUMN_VALUE,
  accessorKey: "value",
  aggregateCell: function aggregateCell(props, cellMap) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "d-flex"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        paddingTop: "12px"
      }
    }, cellMap.value(props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "add-item-btn btn btn-outline-secondary btn-sm text-center ms-auto mt-2 py-2 px-3 hover-display"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "d-flex flex-nowrap"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-add pe-2"
    }), _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.ADD)));
  }
}];
var escapeParameter = function escapeParameter(param) {
  return "\"" + (param || "").replace(/([[\]"\\])/g, "\\$1") + "\"";
};
var ExpressionEditor = function ExpressionEditor(props) {
  var _props$variables;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.TAB_SOURCE),
    _useState2 = _slicedToArray(_useState, 2),
    key = _useState2[0],
    setKey = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    searchText = _useState4[0],
    setSearchText = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    headerName = _useState6[0],
    setHeaderName = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.headers),
    _useState8 = _slicedToArray(_useState7, 2),
    headers = _useState8[0],
    setHeaders = _useState8[1];
  var vaults = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .useVaults */ .xg)(props.vaults);
  var editorAPI = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  var EditorComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return props.scriptMode ? CodeEditor : RSBCodeMirror;
  }, [props.scriptMode]);
  var handleSelected = function handleSelected(type, value, offset) {
    switch (type === null || type === void 0 ? void 0 : type.toLowerCase()) {
      case "xpath":
        value = "xpath(".concat(escapeParameter(value), ")");
        break;
      case "header":
        value = "_message.header:".concat(value);
        break;
      case "variable":
        value = "_map.".concat(value);
        break;
      case "vault":
        value = "Vault(".concat(escapeParameter(value), ")");
        break;
    }
    editorAPI.current.replace(value);
    offset && editorAPI.current.move(offset);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "xmlmap-basic xmlmap-expression-editor" + (props.scriptMode ? " script-mode" : "")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_arc_suspense__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex m-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "element-container d-flex flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.ELEMENT), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "node-name px-2 py-1 me-1 text-truncate"
  }, props.title || props.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "ms-auto"
  }, "="))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "value-container w-100 ms-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, props.scriptMode ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.SCRIPT_NAME, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "text-danger"
  }, "*")) : _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.VALUE), props.scriptMode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A.Control, {
    className: "script-name mb-3",
    value: props.scriptName,
    onChange: function onChange(e) {
      return props.onChange("scriptName", e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(EditorComponent, {
    key: props.scriptMode,
    text: props.scriptMode ? props.script : props.expression,
    editorAPI: editorAPI,
    onChange: props.onChange.bind(null, props.scriptMode ? "script" : "expression"),
    validator: props.validator,
    footer: !props.scriptMode && props.treatEmptyAsNull !== "Unsupported" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A.Check, {
      id: "xmlmap_expression_modal_script_treat_empty_as_null_switch",
      className: "treat-empty-as-null-switch pt-1 d-flex align-items-center",
      type: "switch",
      label: _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.TREAT_EMPTY_AS_NULL,
      checked: props.treatEmptyAsNull === true,
      onChange: function onChange(e) {
        return props.onChange("treatEmptyAsNull", e.target.checked);
      }
    })
  })))), !props.scriptMode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    className: "mb-3 fw-bold d-flex align-items-end",
    activeKey: key,
    onSelect: function onSelect(key) {
      return setSearchText(""), setKey(key);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    className: "source-tab",
    eventKey: _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.TAB_SOURCE,
    title: _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.TAB_SOURCE
  }, key === _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.TAB_SOURCE && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_XPathSelector__WEBPACK_IMPORTED_MODULE_6__/* .XPathSelector */ .l, {
    root: props.loopRoot || {},
    mode: _types__WEBPACK_IMPORTED_MODULE_7__/* .XPathSelectorMode */ .wy.LeafOnly,
    onSelect: function onSelect(xpath) {
      return xpath.length > 1 && handleSelected("xpath", xpath.substring(1));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    className: "header-tab",
    eventKey: _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.TAB_MESSAGE_HEADERS,
    title: _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.TAB_MESSAGE_HEADERS
  }, (headers === null || headers === void 0 ? void 0 : headers.length) > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_5__/* .SearchBox */ .Gd, {
    searchText: searchText,
    onChanged: setSearchText
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_2__/* .ClientSearchableTable */ .gs, {
    columns: MESSAGE_HEADER_TABLE_COLUMNS,
    data: headers,
    searchText: searchText,
    onRowClick: function onRowClick(row) {
      return handleSelected("header", row.name);
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex flex-column text-center no-data-tip"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "tip-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa-regular fa-layer-group text-secondary mb-4"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.NO_MESSAGE_HEADERS)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    className: "mt-auto divider"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    className: "mb-0 px-3 add-header-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.ADD_MESSAGE_HEADER,
    value: headerName,
    onChange: function onChange(e) {
      return setHeaderName(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    variant: "outline-secondary",
    disabled: headerName.trim().length <= 0 || headers.some(function (header) {
      return header.name.toLowerCase() === headerName.trim().toLowerCase();
    }),
    onClick: function onClick() {
      return props.onAddHeader(headerName.trim()), setHeaders([{
        "name": headerName.trim(),
        value: ""
      }].concat(_toConsumableArray(headers))), setHeaderName("");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-add"
  }), " ", _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.ADD))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    className: "variable-tab",
    eventKey: _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.TAB_VARIABLES,
    title: _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.TAB_VARIABLES
  }, ((_props$variables = props.variables) === null || _props$variables === void 0 ? void 0 : _props$variables.length) > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_5__/* .SearchBox */ .Gd, {
    searchText: searchText,
    onChanged: setSearchText
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_2__/* .ClientSearchableTable */ .gs, {
    columns: VARIABLE_TABLE_COLUMNS,
    data: props.variables,
    searchableKeys: ["name"],
    searchText: searchText,
    onRowClick: function onRowClick(row) {
      return handleSelected("variable", row.name);
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex flex-column text-center no-data-tip"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "tip-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa-regular fa-brackets-curly text-secondary mb-4"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.NO_VARIABLES))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    className: "vault-tab",
    eventKey: _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.TAB_VAULT,
    title: _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.TAB_VAULT
  }, (vaults === null || vaults === void 0 ? void 0 : vaults.length) > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_5__/* .SearchBox */ .Gd, {
    searchText: searchText,
    onChanged: setSearchText
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_2__/* .ClientSearchableTable */ .gs, {
    columns: VAULT_TABLE_COLUMNS,
    data: vaults || [],
    searchableKeys: ["name", "value"],
    searchText: searchText,
    onRowClick: function onRowClick(row) {
      return handleSelected("vault", row.name);
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex flex-column text-center no-data-tip"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "tip-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa-regular fa-binary-lock text-secondary mb-4"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.NO_VAULT_ITEMS))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    className: "formatter-tab",
    eventKey: _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.TAB_FORMATTERS,
    title: _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.TAB_FORMATTERS
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_5__/* .ArcScriptFormatterList */ .qR, {
    formatters: props.formatters,
    searchText: searchText,
    onSearchTextChange: setSearchText,
    onSelected: function onSelected(formatter) {
      var _formatter$args, _formatter$args2;
      return handleSelected("formatter", ((_formatter$args = formatter.args) === null || _formatter$args === void 0 ? void 0 : _formatter$args.length) > 0 ? "".concat(formatter.name, "()") : formatter.name, ((_formatter$args2 = formatter.args) === null || _formatter$args2 === void 0 ? void 0 : _formatter$args2.length) > 0 ? -1 : 0);
    }
  }))));
};
var MappingExpressionEditorModal = function MappingExpressionEditorModal(props) {
  var _props$script;
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(((_props$script = props.script) === null || _props$script === void 0 ? void 0 : _props$script.length) > 0),
    _useState10 = _slicedToArray(_useState9, 2),
    scriptMode = _useState10[0],
    setScriptMode = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      expression: props.expression || "[]",
      script: props.script || "",
      scriptName: props.scriptName || "",
      treatEmptyAsNull: props.treatEmptyAsNull
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    state = _useState12[0],
    setState = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState14 = _slicedToArray(_useState13, 2),
    valid = _useState14[0],
    setValid = _useState14[1];
  if (!props.show || (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .renderReactModalByParent */ .wf)("Mapping.ExpressionEditorModal", props)) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    className: "react-bootstrap-modal mapping-modal xmlmap-modal xmlmap-expression-editor-modal new-styles",
    show: true,
    onHide: props.onHide,
    onEscapeKeyDown: props.onHide,
    backdrop: "static"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A.Header, {
    className: "py-0",
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A.Title, null, _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.EDIT_NODE_VALUE), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "d-flex align-items-center gap-3 ms-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A.Check, {
    id: "xmlmap_expression_modal_script_mode_switch",
    className: "script-mode-switch d-flex align-items-center",
    type: "switch",
    label: _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.SCRIPT_MODE,
    checked: scriptMode,
    onChange: function onChange(e) {
      return setScriptMode(e.target.checked);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    "data-tooltip-id": "reactTooltip",
    "data-tooltip-content": _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.TOOLTIP_ARC_SCRIPT_DOCUMENT,
    href: "help.rst#MappingNodeValueEditor|" + (scriptMode ? _edi_constants__WEBPACK_IMPORTED_MODULE_10__/* .LinkTokens */ .z.ScriptMode : _edi_constants__WEBPACK_IMPORTED_MODULE_10__/* .LinkTokens */ .z.UsingNodeValueEditor),
    rel: "noreferrer",
    target: "_blank",
    className: "me-3 text-secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-question-circle-o"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "xpath-container d-flex ps-3 py-2 mb-3"
  }, (0,_helper__WEBPACK_IMPORTED_MODULE_8__/* .parseXPath */ .$A)(props.relativeXPath).slice(0, -1).map(function (ele) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      key: ele,
      className: "text-secondary pe-1"
    }, ele, " /");
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, props.title || props.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A.Body, {
    className: "p-0 pb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "text-secondary ps-3"
  }, scriptMode ? _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.ARC_SCRIPT_DESC : _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.EXPRESSION_DESC), scriptMode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "text-secondary ps-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "text-danger"
  }, "*"), " ", _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.INDICATES_REQUIRED), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ExpressionEditor, _extends({}, props, state, {
    headers: props.headers,
    variables: props.variables,
    onChange: function onChange(name, value) {
      return setState(function (state) {
        state = _objectSpread({}, state);
        state[name] = value;
        return state;
      });
    },
    validator: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_2__/* .ExpressionValidator */ .tV, {
      expression: state.expression,
      valid: valid,
      onValidateChange: setValid
    }),
    scriptMode: scriptMode
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    variant: "outline-secondary",
    className: "border-0",
    onClick: props.onHide
  }, " ", _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.CANCEL), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    className: "border-0",
    disabled: !valid || scriptMode && state.scriptName.length <= 0,
    onClick: function onClick() {
      var _props$onSave;
      return (_props$onSave = props.onSave) !== null && _props$onSave !== void 0 && _props$onSave.call(null, _objectSpread(_objectSpread({}, state), {}, {
        expression: (0,_RSBExpLanguage__WEBPACK_IMPORTED_MODULE_4__/* .textToExp */ .Ey)(state.expression)
      }), scriptMode), props.onHide();
    }
  }, _constants__WEBPACK_IMPORTED_MODULE_9__/* .TOKENS */ .xZ.APPLY)));
};
var sharedPropTypes = {
  /**
   * The expression.
   */
  expression: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().string),
  /**
   * Whether treat empty as null?
   */
  treatEmptyAsNull: prop_types__WEBPACK_IMPORTED_MODULE_17___default().oneOf([true, false, "Unsupported"]),
  /**
   * The node name.
   */
  name: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().string).isRequired,
  /**
   * The node title node.
   */
  title: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().node),
  /**
   * The XPath of the current (destination) node.
   */
  relativeXPath: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().string).isRequired,
  /**
   * The loop root node.
   */
  loopRoot: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().object),
  /**
   * The message header names.
   */
  headers: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().array),
  /**
   * The variable name.
   */
  variables: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().array),
  /**
   * The vaults.
   */
  vaults: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().array),
  /**
   * The formatters.
   */
  formatters: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().array).isRequired,
  /**
   * Event: onAddHeader.
   */
  onAddHeader: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().func).isRequired
};
ExpressionEditor.propTypes = _objectSpread(_objectSpread({}, sharedPropTypes), {}, {
  /**
   * Event: onChange.
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().func).isRequired
});
MappingExpressionEditorModal.propTypes = _objectSpread(_objectSpread({}, sharedPropTypes), {}, {
  /**
   * Whether to show the modal.
   */
  show: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().bool),
  /**
   * Hide the modal.
   */
  onHide: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().func),
  /**
   * Event: onSave.
   */
  onSave: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().func).isRequired
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MappingExpressionEditorModal);

/***/ }),

/***/ 7438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ey: () => (/* binding */ textToExp),
/* harmony export */   UY: () => (/* binding */ RSBExpHighlighter),
/* harmony export */   r7: () => (/* binding */ RSBExpLanguage)
/* harmony export */ });
/* harmony import */ var _codemirror_language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15874);
/* harmony import */ var _lezer_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43720);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var baseClasses = ["open-rsb", "filter", "xpath", "vault", "source-header", "source-variable", "pipe", "formatter", "open-bracket", "string", "comma", "close-bracket", "close-rsb"];
var rsbTags = baseClasses.reduce(function (result, name) {
  result[name] = _lezer_highlight__WEBPACK_IMPORTED_MODULE_0__/* .Tag */ .vw.define();
  return result;
}, {});
var rsbExpParser = {
  startState: function startState() {
    return {
      valid: false,
      curState: 0,
      filter: "",
      commaIndex: 0
    };
  },
  token: function token(stream, state) {
    if (stream.sol()) {
      state.valid = stream.string.length > 2 && stream.string[0] === "[" && stream.string[stream.string.length - 1] === "]";
      if (state.valid) {
        stream.next();
        state.curState = 1;
        return "open-rsb";
      } else {
        stream.skipToEnd();
        return "string";
      }
    }
    var ch = null;
    stream.eatSpace();
    if (state.curState === 1) {
      var isXPath = stream.match("xpath");
      if (isXPath || stream.match("Vault")) {
        stream.eatSpace();
        if (stream.next() === '(') {
          stream.backUp(1);
          state.filter = isXPath ? "xpath" : "vault";
          state.curState = 2;
          return "filter";
        }
      } else if (stream.match("_message.header:")) {
        state.filter = "source-header";
        state.curState = 10;
        return "filter";
      } else if (stream.match("_map.")) {
        state.filter = "source-variable";
        state.curState = 10;
        return "filter";
      }
      state.valid = false;
    } else if (state.curState === 2) {
      ch = stream.next();
      if (ch === '(') {
        state.curState = 3;
        return "open-bracket";
      } else if (ch === '|') {
        state.curState = 4;
        return "pipe";
      } else if (ch === ']') {
        state.curState = 5;
        return "close-rsb";
      } else {
        state.valid = false;
      }
    } else if (state.curState === 3) {
      ch = stream.next();
      if (ch === ')') {
        state.curState = 6;
        return "close-bracket";
      } else if (ch === '[') {
        state.curState = 1;
        return "open-rsb";
      }
      stream.backUp(1);
    } else if (state.curState === 5) {
      ch = stream.next();
      if (ch === ')') {
        state.curState = 6;
        return "close-bracket";
      } else if (ch === ',') {
        state.curState = 7;
        return "comma";
      } else {
        state.valid = false;
      }
    } else if (state.curState === 6) {
      state.filter = "";
      ch = stream.next();
      if (ch === '|') {
        state.curState = 4;
        return "pipe";
      } else if (ch === ']') {
        state.curState = 5;
        return "close-rsb";
      } else {
        state.valid = false;
      }
    } else if (state.curState === 7) {
      ch = stream.next();
      if (ch === ',') {
        state.curState = 7;
        return "comma";
      } else if (ch === ')') {
        state.curState = 6;
        return "close-bracket";
      } else {
        stream.backUp(1);
      }
    } else if (state.curState === 8 || state.curState === 9) {
      ch = stream.next();
      if (state.curState === 9 && ch === ',') {
        state.curState = 7;
        return "comma";
      } else if (ch === ')') {
        state.curState = 6;
        return "close-bracket";
      } else {
        state.valid = false;
      }
    } else if (state.curState === 10) {
      if (stream.match(/[^'"|\]\s]+/)) {
        state.curState = 6;
        return state.filter;
      } else {
        state.valid = false;
      }
    }
    if (!state.valid) {
      stream.skipToEnd();
      return "string";
    }
    var isParameter = state.curState === 3 || state.curState === 7;
    if (isParameter) {
      var curPos = stream.pos;
      ch = stream.next();
      if (ch === "'" || ch === '"') {
        while (!stream.eol()) {
          var nextCh = stream.next();
          if (nextCh === ch) {
            if (!!state.filter) {
              state.curState = 7;
              return state.filter;
            } else {
              state.curState = 9;
              return "string";
            }
          } else if (nextCh === '\\') {
            stream.next();
          } else if (nextCh === '[') {
            break;
          }
        }
        state.valid = false;
        stream.skipToEnd();
        return "string";
      }
      stream.backUp(stream.pos - curPos);
    }
    var isEscape = false;
    var formatter = "";
    do {
      ch = stream.next();
      if (!isEscape && isParameter && /[,)]/.test(ch)) {
        stream.backUp(1);
        if (!!state.filter) {
          state.curState = 7;
          return state.filter;
        } else {
          state.curState = 9;
          return "string";
        }
      } else if (!isParameter) {
        if (!isEscape && /[(|\]]/.test(ch)) {
          if (!!formatter) {
            stream.backUp(1);
            state.curState = 2;
            return "filter";
          } else {
            state.valid = false;
            break;
          }
        } else {
          formatter += ch;
        }
      }
      isEscape = ch === '\\';
    } while (!stream.eol());
    stream.skipToEnd();
    return "string";
  }
};
var unescape = function unescape(text) {
  text = text.replace(/\\([\[\]\\()|,'"])/g, "$1");
  if (text.length > 1 && (text[0] === "'" || text[0] === '"') && text[0] === text[text.length - 1]) {
    text = text.substring(1, text.length - 1);
  }
  return text;
};
var escapeArg = function escapeArg(arg) {
  return "\"" + (arg || "").replace(/([[\]"\\])/g, "\\$1") + "\"";
};
var nextToken = function nextToken(stream, state) {
  stream.eatSpace();
  var startPos = stream.pos;
  var type = rsbExpParser.token(stream, state);
  return [stream.string.substring(startPos, stream.pos).trimEnd(), type];
};
var textToExp = function textToExp(rsb) {
  if (!rsb || rsb === "[]") return "";else if (rsb.length <= 2 || !/\[[^\[\]]+]|<\s*(rsb|arc|api):\w+[^>]*>/.test(rsb)) return unescape(rsb);
  var stream = new _codemirror_language__WEBPACK_IMPORTED_MODULE_1__/* .StringStream */ .Kw(rsb, 2, 2);
  var state = rsbExpParser.startState();
  var _parseEntry = function parseEntry() {
    if (state.curState === 0 && rsbExpParser.token(stream, state) !== "open-rsb") return null;
    if (rsbExpParser.token(stream, state) !== "filter") return null;
    var type = state.filter;
    var hasBracket = ["xpath", "vault"].includes(type);
    if (!hasBracket && !["source-header", "source-variable"].includes(type)) return null;
    if (hasBracket && rsbExpParser.token(stream, state) !== "open-bracket") return null;
    var source = unescape(nextToken(stream, state)[0]);
    if (!state.valid) return null;
    var exp = {};
    var isVariable = type === "source-variable";
    if (isVariable) {
      exp.custom = "[_map.".concat(source, " | def]");
    } else {
      exp[type !== "source-header" ? type : "header"] = source;
    }
    if (!state.valid) return null;
    if (hasBracket && rsbExpParser.token(stream, state) !== "close-bracket") return null;
    do {
      type = rsbExpParser.token(stream, state);
      if (type === "close-rsb") {
        var _exp$formatters;
        if (isVariable && ((_exp$formatters = exp.formatters) === null || _exp$formatters === void 0 || (_exp$formatters = _exp$formatters[0]) === null || _exp$formatters === void 0 ? void 0 : _exp$formatters.name) === "def") {
          var _exp$formatters$0$arg;
          if (((_exp$formatters$0$arg = exp.formatters[0].arguments) === null || _exp$formatters$0$arg === void 0 || (_exp$formatters$0$arg = _exp$formatters$0$arg[0]) === null || _exp$formatters$0$arg === void 0 ? void 0 : _exp$formatters$0$arg.length) > 0) exp.custom = "[_map.".concat(source, " | def(").concat(escapeArg(exp.formatters[0].arguments[0]), ")]");
          exp.formatters = exp.formatters.length > 1 ? exp.formatters.slice(1) : null;
        }
        return exp;
      }
      if (type !== "pipe") return null;
      var formatter = {
        name: nextToken(stream, state)[0]
      };
      if (!state.valid) return null;
      stream.eatSpace();
      if (stream.match("(")) {
        stream.backUp(1);
        rsbExpParser.token(stream, state);
        var token = nextToken(stream, state);
        var preToken = null;
        while (state.valid && !stream.eol() && token[1] !== "close-bracket") {
          if (!formatter.arguments) formatter.arguments = [];
          if (token[1] === "open-rsb") {
            var arg = _parseEntry();
            if (state.valid && arg) {
              formatter.arguments.push(arg);
            } else {
              return null;
            }
          } else if (token[1] === "comma") {
            formatter.arguments.push("");
            preToken = token[1];
            token = nextToken(stream, state);
            continue;
          } else if (token[1] === "string") {
            formatter.arguments.push(unescape(token[0]));
          } else {
            return null;
          }
          token = nextToken(stream, state);
          preToken = token[1];
          if (token[1] === "comma") {
            token = nextToken(stream, state);
          }
        }
        if (preToken === "comma") formatter.arguments.push("");
      }
      if (!exp.formatters) exp.formatters = [];
      exp.formatters.push(formatter);
    } while (state.valid && !stream.eol());
    return null;
  };
  var exp = _parseEntry();
  return exp && state.valid && stream.eol() ? exp : {
    custom: rsb
  };
};
var RSBExpHighlighter = (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_1__/* .syntaxHighlighting */ .y9)((0,_lezer_highlight__WEBPACK_IMPORTED_MODULE_0__/* .tagHighlighter */ .az)(baseClasses.map(function (name) {
  return {
    tag: rsbTags[name],
    "class": "rsb-exp-".concat(name)
  };
})));
var RSBExpLanguage = _codemirror_language__WEBPACK_IMPORTED_MODULE_1__/* .StreamLanguage */ .Tg.define(_objectSpread(_objectSpread({
  name: "rsb-exp"
}, rsbExpParser), {}, {
  tokenTable: rsbTags
}));


/***/ }),

/***/ 50683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dI: () => (/* binding */ toNodeHtml),
/* harmony export */   qg: () => (/* binding */ parse)
/* harmony export */ });
/* unused harmony exports getExpType, isNull, getConstValue, updateXPath, checkSubtractXPath, escape, unescape */
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97418);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29471);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }


/*
* This is a helper class for parsing expressions.
* Comes from rsb.xmlMapSettings.ExprHelper in rsb.xmlMapSettings.
* Should be upgraded to typeScript later.
 */

var _htmlEncode = function _htmlEncode(value) {
  var div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
};
var _trimStr = function _trimStr(str) {
  return str.replace(/^\s+|\s+$/gm, "");
};
var _escape = function _escape(code) {
  return "\"" + (code || "").replace(/([[\]"\\])/g, "\\$1") + "\"";
};
var _unescape = function _unescape(code) {
  code = (code || "").replace(/\\(.)/g, "$1");
  if (code.length > 1 && (code[0] === "'" || code[0] === "\"") && code[0] === code[code.length - 1]) {
    code = code.substring(1, code.length - 1);
  }
  return code;
};
var _parseExp2 = function _parseExp($expression, $isRoot, $rawMode, $xpathCallback, $expCallback, $realType) {
  var exp = "";
  var type = $realType || _getExpType($expression);
  if ($expression && $expression.operator && $expression.params && $expression.params.length && $expression.params[0].xpath && type == "operator" && ["isnull", "isnotnull", "in", "notin"].indexOf($expression.operator) >= 0) {
    type = "xpath";
    $expression = {
      xpath: $expression.params[0].xpath,
      formatters: [{
        name: $expression.operator.toUpperCase(),
        arguments: $expression.params.slice(1)
      }]
    };
  }
  if (type == "const") {
    exp = _getConstValue2($expression) || "";
    exp = $isRoot && $rawMode ? exp : $rawMode ? _escape(exp) : _htmlEncode(exp);
  } else if (type === "variable") {
    var _$expression$formatte;
    exp = $rawMode ? "[" : "";
    var parts = $expression.custom.substring(6, $expression.custom.length - 1).split(/\s*\|\s*/);
    var varName = parts[0];
    exp += $rawMode ? "_map." + varName : "<span class=\"pill variable-name px-2 text-nowrap text-truncate\"><i class=\"fa fa-brackets-square me-1\"></i>" + _htmlEncode(varName) + "</span>";
    if (parts.length > 2 || !/^\[def\s*(\(\s*\)\s*)?]$/.test(parts[1])) exp += " | " + $expression.custom.substring($expression.custom.indexOf("|") + 1).slice(0, -1);
    if (((_$expression$formatte = $expression.formatters) === null || _$expression$formatte === void 0 ? void 0 : _$expression$formatte.length) > 0) {
      $expression.formatters.forEach(function (formatter) {
        exp += " | " + _parseExp2(formatter, false, $rawMode, $xpathCallback, $expCallback, "formatter");
      });
    }
    exp += $rawMode ? "]" : "";
  } else if (type == "custom" || type == "script") {
    exp = $expression[type];
    exp = $rawMode ? exp : _htmlEncode(exp);
  } else if (type == "formatter") {
    var _$expression$argument;
    var formatterName = _trimStr($expression.name || $expression);
    exp += $rawMode ? formatterName : _htmlEncode(formatterName);
    if (((_$expression$argument = $expression.arguments) === null || _$expression$argument === void 0 ? void 0 : _$expression$argument.length) > 0) {
      exp += "(";
      $expression.arguments.forEach(function (argument, index) {
        index && (exp += ", ");
        exp += _parseExp2(argument, false, $rawMode, $xpathCallback, $expCallback) || "\"\"";
      });
      exp += ")";
    }
  } else if (type == "xpath") {
    var _$expression$formatte2;
    exp = "[";
    var xpath = $rawMode ? _escape($expression.xpath) : _htmlEncode($expression.xpath);
    exp += $rawMode ? $xpathCallback && $xpathCallback(xpath) || xpath : "<span class='xpath'>" + xpath + "</span>";
    if (((_$expression$formatte2 = $expression.formatters) === null || _$expression$formatte2 === void 0 ? void 0 : _$expression$formatte2.length) > 0) {
      $expression.formatters.forEach(function (formatter) {
        exp += " | " + _parseExp2(formatter, false, $rawMode, $xpathCallback, $expCallback, "formatter");
      });
    }
    exp += "]";
  } else if (type == "header") {
    var _$expression$formatte3;
    exp = "[";
    var header = $rawMode ? $expression.header : _htmlEncode($expression.header);
    exp += "_message.header:" + header;
    if (((_$expression$formatte3 = $expression.formatters) === null || _$expression$formatte3 === void 0 ? void 0 : _$expression$formatte3.length) > 0) {
      $expression.formatters.forEach(function (formatter) {
        exp += " | " + _parseExp2(formatter, false, $rawMode, $xpathCallback, $expCallback, "formatter");
      });
    }
    exp += "]";
  } else if (type == "occurrence") {
    var _$expression$formatte4;
    exp = "[";
    var _xpath = $rawMode ? _escape($expression.occurrence) : _htmlEncode($expression.occurrence);
    exp += "occurrence(" + _xpath + ")";
    if (((_$expression$formatte4 = $expression.formatters) === null || _$expression$formatte4 === void 0 ? void 0 : _$expression$formatte4.length) > 0) {
      $expression.formatters.forEach(function (formatter) {
        exp += " | " + _parseExp2(formatter, false, $rawMode, $xpathCallback, $expCallback, "formatter");
      });
    }
    exp += "]";
  } else if (type == "vault") {
    var _$expression$formatte5;
    exp = "[";
    var vault = $rawMode ? _escape($expression.vault) : _htmlEncode($expression.vault);
    exp += "Vault(" + vault + ")";
    if (((_$expression$formatte5 = $expression.formatters) === null || _$expression$formatte5 === void 0 ? void 0 : _$expression$formatte5.length) > 0) {
      $expression.formatters.forEach(function (formatter) {
        exp += " | " + _parseExp2(formatter, false, $rawMode, $xpathCallback, $expCallback, "formatter");
      });
    }
    exp += "]";
  } else if (type == "operator") {
    var operator = _getOperator($expression.operator);
    var useGroup = operator == "!" || operator == "||";
    if (operator == "!" || operator == "~" || operator == "-" && $expression.params.length == 1) {
      exp += operator;
      operator = "&&";
    }
    useGroup && (exp += "(");
    operator = " " + operator + " ";
    $expression.params.forEach(function (operand, index) {
      index && (exp += operator);
      exp += _parseExp2(operand, false, $rawMode, $xpathCallback, $expCallback);
    });
    useGroup && (exp += ")");
  }
  exp = $expCallback ? $expCallback($realType || type, exp) : exp;
  return exp;
};
var EXP_XPATH_ARG_KEYS = {
  formatter: "arguments",
  xpath: "formatters",
  operator: "value"
};
var _visitXPath2 = function _visitXPath($expression, $callBack) {
  var type = _getExpType($expression);
  if (type == "formatter" || type == "xpath" || type == "operator") {
    var _$expression$key;
    $callBack && type == "xpath" && $callBack && $callBack($expression, $expression.xpath);
    var key = EXP_XPATH_ARG_KEYS[type];
    if (((_$expression$key = $expression[key]) === null || _$expression$key === void 0 ? void 0 : _$expression$key.length) > 0) {
      $expression[key].forEach(function (item) {
        _visitXPath2(item, $callBack);
      });
    }
  }
};
var _getOperator = function _getOperator($op) {
  $op = ($op || "").toLowerCase();
  if ($op == "@and") {
    return "&&";
  } else if ($op == "@or") {
    return "||";
  } else if ($op == "@not") {
    return "!";
  } else {
    return $op || "&&";
  }
};
var _isNull = function _isNull($exp) {
  return typeof $exp === "undefined" || $exp == null;
};
var _getExpType = function _getExpType($exp) {
  var _$exp$params;
  if (_isNull($exp)) return null;
  if (_typeof($exp) != "object") return "const";
  if ($exp.xpath) return "xpath";
  if ($exp.header) return "header";
  if ($exp.occurrence) return "occurrence";
  if ($exp.custom) return /^\[_map.[^\s]+\s*\|\s*def\s*(\(.*\)\s*)?]$/.test($exp.custom) ? "variable" : "custom";
  if ($exp.script) return "script";
  if ($exp.vault) return "vault";
  if ($exp.operator && ((_$exp$params = $exp.params) === null || _$exp$params === void 0 ? void 0 : _$exp$params.length) > 0) return "operator";
  if ($exp.name) return "formatter";
  return "const";
};
var _getConstValue2 = function _getConstValue($exp) {
  return _isNull($exp) ? "" : "" + (Array.isArray($exp) || _typeof($exp) != "object" ? $exp : _getConstValue2($exp["const"]));
};
function parse($expression, $rawMode, $xpathCallback) {
  return _parseExp2($expression, true, $rawMode, $xpathCallback);
}
function getExpType($exp) {
  return _getExpType($exp);
}
function isNull($exp) {
  return _isNull($exp);
}
function getConstValue($exp) {
  return _getConstValue2($exp);
}
function toNodeHtml($node) {
  var html = "";
  if (!!$node.data.value && $node.type !== _types__WEBPACK_IMPORTED_MODULE_0__/* .NodeType */ .Z6.Script) {
    var type = null;
    html = _parseExp2($node.data.value, true, false, null, function ($type, $exp) {
      if ($type === "const") {
        $exp = $exp ? "<span class='const'>" + $exp + "</span>" : "";
      } else if ($type === "script" || $node.data.isVirtual && $type === "custom" && !!$node.data.scriptName) {
        $exp = "<span class='pill script-name px-2 text-nowrap text-truncate'><i class='fa fa-code me-1'></i>" + _htmlEncode($node.data.scriptName || "script") + "</span>";
      } else if ($type === "custom") {
        $exp = "<i>" + $exp + "</i>";
      }
      type = $type;
      return $exp;
    });
    type === "xpath" && (html = "<span class='expression'>" + html + "</span>");
  }
  return html;
}
function updateXPath($expression, $baseXPath, $append) {
  _visitXPath2($expression, function ($exp, $xpath) {
    if ($xpath && $append) {
      $exp.xpath = xpathCombine($baseXPath, $xpath);
    } else if ($xpath && $xpath.startsWith($baseXPath)) {
      $exp.xpath = $xpath.substring($baseXPath.length);
    } else if ($xpath && $xpath + "/" == $baseXPath) {
      delete $exp.xpath;
    }
  });
  return $expression;
}
function checkSubtractXPath($expression, $subtractXPath) {
  var invalidXPath = null;
  _visitXPath2($expression, function ($exp, $xpath) {
    if (invalidXPath) return false;
    if ($xpath && $xpath.charAt(0) != "/" && !$xpath.startsWith($subtractXPath)) {
      invalidXPath = $xpath;
    }
  });
  return invalidXPath;
}
function escape(code) {
  return _escape(code);
}
function unescape(code) {
  return _unescape(code);
}

/***/ }),

/***/ 60219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Uc: () => (/* binding */ ConditionMappingBuilderContext),
/* harmony export */   dQ: () => (/* binding */ ConditionMappingOperatorSelector),
/* harmony export */   hv: () => (/* binding */ ConditionMappingBuilder),
/* harmony export */   vv: () => (/* binding */ ConditionMappingNotToggle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26465);
/* harmony import */ var _components_arc_query_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2580);
/* harmony import */ var _XPathSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85534);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98044);
/* harmony import */ var _components_dropdown_hacker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4938);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







var ConditionMappingBuilderContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
var useConditionMappingBuilderContext = function useConditionMappingBuilderContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ConditionMappingBuilderContext);
};
var FieldCandidateSourceTree = function FieldCandidateSourceTree() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    show = _React$useState2[0],
    setShow = _React$useState2[1];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      drop: "down",
      position: {}
    }),
    _useState2 = _slicedToArray(_useState, 2),
    meta = _useState2[0],
    setMeta = _useState2[1];
  var treeAPI = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  var ctx = useConditionMappingBuilderContext();
  if (!ctx.candidateSourceTreeData || ctx.candidateSourceTreeData.length <= 0) {
    return null;
  }
  ctx.refs.current.hideDropdown = function () {
    var _treeAPI$current$setS;
    (_treeAPI$current$setS = treeAPI.current.setSearchText) === null || _treeAPI$current$setS === void 0 || _treeAPI$current$setS.call(null, "");
    setShow(false);
  };
  ctx.refs.current.showDropdown = function (childRect) {
    var builderRect = ctx.builderRef.current.getBoundingClientRect();
    var meta = {
      drop: "down",
      position: {
        left: childRect.left - builderRect.left + "px"
      }
    };
    var top = childRect.bottom - builderRect.top;
    if (top > (Math.min(builderRect.bottom - builderRect.top, 760) >> 1) - 30) {
      meta.drop = "up";
      var height = Math.max(Math.min(childRect.top - builderRect.top - 20, (window.innerHeight >> 1) - 40), 200);
      meta.position.top = childRect.top - builderRect.top - height - 24 + "px";
      meta.style = {
        maxHeight: height + "px",
        minHeight: height + "px"
      };
    } else {
      meta.position.top = top + "px";
      meta.style = {
        maxHeight: Math.min(window.innerHeight - childRect.bottom - 30, 450) + "px"
      };
    }
    meta.style.minWidth = Math.min(Math.max(childRect.right - childRect.left, 300), Math.min(builderRect.right - childRect.left, 600));
    setMeta(meta);
    setShow(true);
    ctx.refs.current.hideDropdown = null;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    show: show,
    className: "candidate-dropdown",
    drop: meta.drop,
    style: meta.position
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_dropdown_hacker__WEBPACK_IMPORTED_MODULE_4__/* .DropdownHacker */ .G, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.Menu, {
    className: "p-2 mt-1"
  }, ctx.renderXPathSelector ? ctx.renderXPathSelector({
    style: meta.style,
    data: ctx.candidateSourceTreeData,
    onSelect: function onSelect(xpath, event) {
      var _ctx$refs$current$han;
      (_ctx$refs$current$han = ctx.refs.current.handleFieldChange) === null || _ctx$refs$current$han === void 0 || _ctx$refs$current$han.call(null, xpath, false, null, event);
      ctx.refs.current.hideDropdown();
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_XPathSelector__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    style: meta.style,
    xmlTree: ctx.candidateSourceTreeData,
    onChange: function onChange(xpath, isParent, node, e) {
      var _ctx$refs$current$han2;
      (_ctx$refs$current$han2 = ctx.refs.current.handleFieldChange) === null || _ctx$refs$current$han2 === void 0 || _ctx$refs$current$han2.call(null, xpath, isParent, node, e);
      ctx.refs.current.hideDropdown();
    }
  })));
};
var ConditionMappingFieldSelector = function ConditionMappingFieldSelector(props) {
  var _props$value, _ctx$candidateSourceT, _ctx$headers, _ctx$variables, _ctx$ruleFieldsClassn, _ctx$returnAbsoluteXP, _ctx$variables3, _ctx$loopXPath;
  var ctx = useConditionMappingBuilderContext();
  var fieldRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var field = _typeof(props.value) === "object" ? props.value : {
    source: _constants__WEBPACK_IMPORTED_MODULE_3__/* .FIELD_SOURCES */ ._x.INPUT_XML,
    type: _constants__WEBPACK_IMPORTED_MODULE_3__/* .FIELD_TYPES */ .bh.VALUE,
    field: (_props$value = props.value) !== null && _props$value !== void 0 ? _props$value : ""
  };
  var enableXMLTree = ((_ctx$candidateSourceT = ctx.candidateSourceTreeData) === null || _ctx$candidateSourceT === void 0 ? void 0 : _ctx$candidateSourceT.length) > 0 && field.source === _constants__WEBPACK_IMPORTED_MODULE_3__/* .FIELD_SOURCES */ ._x.INPUT_XML;
  var showHeaderList = !enableXMLTree && field.source === _constants__WEBPACK_IMPORTED_MODULE_3__/* .FIELD_SOURCES */ ._x.MESSAGE_HEADER && ((_ctx$headers = ctx.headers) === null || _ctx$headers === void 0 ? void 0 : _ctx$headers.length) > 0;
  var showVariableList = !enableXMLTree && field.source === _constants__WEBPACK_IMPORTED_MODULE_3__/* .FIELD_SOURCES */ ._x.VARIABLE && ((_ctx$variables = ctx.variables) === null || _ctx$variables === void 0 ? void 0 : _ctx$variables.length) > 0;
  var fieldClassname = (_ctx$ruleFieldsClassn = ctx.ruleFieldsClassname) !== null && _ctx$ruleFieldsClassn !== void 0 ? _ctx$ruleFieldsClassn : "";
  var returnAbsoluteXPath = (_ctx$returnAbsoluteXP = ctx.returnAbsoluteXPath) !== null && _ctx$returnAbsoluteXP !== void 0 ? _ctx$returnAbsoluteXP : false;
  var changeField = function changeField(name, value) {
    var newField = _objectSpread({}, field);
    newField[name] = value;
    if (name === "source") {
      var _ctx$headers2, _ctx$variables2;
      if (value === _constants__WEBPACK_IMPORTED_MODULE_3__/* .FIELD_SOURCES */ ._x.MESSAGE_HEADER && ((_ctx$headers2 = ctx.headers) === null || _ctx$headers2 === void 0 ? void 0 : _ctx$headers2.length) > 0) {
        newField.field = ctx.headers[0];
      } else if (value === _constants__WEBPACK_IMPORTED_MODULE_3__/* .FIELD_SOURCES */ ._x.VARIABLE && ((_ctx$variables2 = ctx.variables) === null || _ctx$variables2 === void 0 ? void 0 : _ctx$variables2.length) > 0) {
        newField.field = ctx.variables[0];
      } else {
        newField.field = "";
      }
    }
    props.handleOnChange(newField);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: fieldClassname + " rule-fields d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    className: "field-source form-select form-select-sm w-auto",
    value: field.source,
    onChange: function onChange(event) {
      return changeField("source", event.target.value);
    },
    disabled: props.disabled
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: _constants__WEBPACK_IMPORTED_MODULE_3__/* .FIELD_SOURCES */ ._x.INPUT_XML
  }, _constants__WEBPACK_IMPORTED_MODULE_3__/* .TOKENS */ .xZ.INPUT_XML), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: _constants__WEBPACK_IMPORTED_MODULE_3__/* .FIELD_SOURCES */ ._x.MESSAGE_HEADER
  }, _constants__WEBPACK_IMPORTED_MODULE_3__/* .TOKENS */ .xZ.MESSAGE_HEADER), ((_ctx$variables3 = ctx.variables) === null || _ctx$variables3 === void 0 ? void 0 : _ctx$variables3.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: _constants__WEBPACK_IMPORTED_MODULE_3__/* .FIELD_SOURCES */ ._x.VARIABLE
  }, _constants__WEBPACK_IMPORTED_MODULE_3__/* .TOKENS */ .xZ.VARIABLE)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    className: "field-type form-select form-select-sm w-auto ms-2",
    value: field.type,
    onChange: function onChange(event) {
      return changeField("type", event.target.value);
    },
    disabled: props.disabled
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: _constants__WEBPACK_IMPORTED_MODULE_3__/* .FIELD_TYPES */ .bh.VALUE
  }, _constants__WEBPACK_IMPORTED_MODULE_3__/* .TOKENS */ .xZ.VALUE), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: _constants__WEBPACK_IMPORTED_MODULE_3__/* .FIELD_TYPES */ .bh.DATA_TYPE
  }, _constants__WEBPACK_IMPORTED_MODULE_3__/* .TOKENS */ .xZ.DATA_TYPE), field.source === _constants__WEBPACK_IMPORTED_MODULE_3__/* .FIELD_SOURCES */ ._x.INPUT_XML && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: _constants__WEBPACK_IMPORTED_MODULE_3__/* .FIELD_TYPES */ .bh.OCCURRENCES
  }, _constants__WEBPACK_IMPORTED_MODULE_3__/* .TOKENS */ .xZ.OCCURRENCES), field.source === _constants__WEBPACK_IMPORTED_MODULE_3__/* .FIELD_SOURCES */ ._x.INPUT_XML && ((_ctx$loopXPath = ctx.loopXPath) === null || _ctx$loopXPath === void 0 ? void 0 : _ctx$loopXPath.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: _constants__WEBPACK_IMPORTED_MODULE_3__/* .FIELD_TYPES */ .bh.INDEX
  }, _constants__WEBPACK_IMPORTED_MODULE_3__/* .TOKENS */ .xZ.INDEX)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "fw-bold lh-lg px-2"
  }, _constants__WEBPACK_IMPORTED_MODULE_3__/* .TOKENS */ .xZ.OF), !showHeaderList && !showVariableList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    ref: fieldRef,
    type: "text",
    className: "field-field-input form-control form-control-sm w-auto",
    placeholder: field.source,
    value: field.type === _constants__WEBPACK_IMPORTED_MODULE_3__/* .FIELD_TYPES */ .bh.INDEX ? ctx.loopXPath : field.field,
    disabled: props.disabled || field.type === _constants__WEBPACK_IMPORTED_MODULE_3__/* .FIELD_TYPES */ .bh.INDEX,
    onChange: function onChange(event) {
      return changeField("field", event.target.value);
    },
    onClick: !enableXMLTree ? null : function () {
      var _ctx$refs$current$sho;
      ctx.refs.current.handleFieldChange = function (xpath) {
        return (xpath === null || xpath === void 0 ? void 0 : xpath.length) > 1 && changeField("field", returnAbsoluteXPath ? xpath : xpath.substring(1));
      };
      (_ctx$refs$current$sho = ctx.refs.current.showDropdown) === null || _ctx$refs$current$sho === void 0 || _ctx$refs$current$sho.call(null, fieldRef.current.getBoundingClientRect());
    }
  }), showHeaderList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    className: "field-field-select form-select form-select-sm w-auto",
    value: field.field,
    onChange: function onChange(event) {
      return changeField("field", event.target.value);
    },
    disabled: props.disabled
  }, field.field.length > 0 && !ctx.headers.includes(field.field) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    key: field.field,
    value: field.field
  }, field.field), ctx.headers.map(function (header) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: header,
      value: header
    }, header);
  })), showVariableList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    className: "field-field-select form-select form-select-sm w-auto",
    value: field.field,
    onChange: function onChange(event) {
      return changeField("field", event.target.value);
    },
    disabled: props.disabled
  }, field.field.length > 0 && !ctx.variables.includes(field.field) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    key: field.field,
    value: field.field
  }, field.field), ctx.variables.map(function (variable) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: variable,
      value: variable
    }, variable);
  })));
};
var ConditionMappingOperatorSelector = function ConditionMappingOperatorSelector(props) {
  var _props$options;
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      drop: "down"
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    meta = _useState4[0],
    setMeta = _useState4[1];
  var dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  var ctx = useConditionMappingBuilderContext();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    className: "rule-operators fw-bold",
    show: !props.disabled ? undefined : false,
    drop: meta.drop,
    onToggle: function onToggle(nextShow) {
      if (nextShow && props.disabled) {
        var builderRect = ctx.builderRef.current.getBoundingClientRect();
        var dropdownRect = dropdownRef.current.parentNode.getBoundingClientRect();
        var _meta = {
          drop: "down"
        };
        if ((dropdownRect.bottom - builderRect.top) * 1.8 > builderRect.height) {
          _meta.drop = "up";
          _meta.maxHeight = dropdownRect.bottom - builderRect.top - Math.ceil(dropdownRef.current.parentNode.parentNode.clientHeight / 2);
        } else {
          _meta.maxHeight = builderRect.bottom - dropdownRect.bottom - Math.ceil(dropdownRef.current.parentNode.parentNode.clientHeight / 2);
        }
        setMeta(_meta);
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_dropdown_hacker__WEBPACK_IMPORTED_MODULE_4__/* .DropdownHacker */ .G, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.Toggle, {
    as: "span",
    ref: dropdownRef
  }, (props.options.find(function (operator) {
    return operator.name === props.value;
  }) || props.options[0]).label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.Menu, {
    style: {
      maxHeight: meta.maxHeight
    }
  }, (_props$options = props.options) === null || _props$options === void 0 ? void 0 : _props$options.map(function (operator) {
    var _operator$label;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.Item, {
      key: operator.name,
      onClick: props.handleOnChange.bind(null, operator.name)
    }, (_operator$label = operator.label) !== null && _operator$label !== void 0 ? _operator$label : operator.name);
  })));
};
var ConditionMappingValueSelector = function ConditionMappingValueSelector(props) {
  var _props$field;
  if (((_props$field = props.field) === null || _props$field === void 0 ? void 0 : _props$field.type) === _constants__WEBPACK_IMPORTED_MODULE_3__/* .FIELD_TYPES */ .bh.DATA_TYPE) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
      className: "rule-value form-select form-select-sm w-auto ".concat(props.className),
      value: props.value || "String",
      onChange: function onChange(event) {
        return props.handleOnChange(event.target.value);
      },
      disabled: props.disabled
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: "String"
    }, _constants__WEBPACK_IMPORTED_MODULE_3__/* .TOKENS */ .xZ.STRING), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: "Number"
    }, _constants__WEBPACK_IMPORTED_MODULE_3__/* .TOKENS */ .xZ.NUMBER), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: "DateTime"
    }, _constants__WEBPACK_IMPORTED_MODULE_3__/* .TOKENS */ .xZ.DATETIME));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_arc_query_builder__WEBPACK_IMPORTED_MODULE_1__/* .arcControlElements */ .dI.valueEditor, props);
};
var ConditionMappingNotToggle = function ConditionMappingNotToggle(_ref) {
  var className = _ref.className,
    handleOnChange = _ref.handleOnChange,
    title = _ref.title,
    label = _ref.label,
    checked = _ref.checked,
    disabled = _ref.disabled;
  var id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
  var ctx = useConditionMappingBuilderContext();
  if ((ctx === null || ctx === void 0 ? void 0 : ctx.showGetStarted) === true) {
    var tip = _constants__WEBPACK_IMPORTED_MODULE_3__/* .TOKENS */ .xZ.CONDITION_MAPPING_GET_STARTED_TIP;
    if (ctx !== null && ctx !== void 0 && ctx.getStartedTip) {
      tip = ctx.getStartedTip;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "get-started-tip w-100 mb-2"
    }, tip);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-switch ".concat(className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: id,
    className: "form-check-input",
    type: "checkbox",
    onChange: function onChange(e) {
      return handleOnChange(e.target.checked);
    },
    checked: !!checked,
    disabled: disabled
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    title: title,
    htmlFor: id,
    className: "form-check-label"
  }, label));
};
var operators = [].concat(_toConsumableArray(_components_arc_query_builder__WEBPACK_IMPORTED_MODULE_1__/* .arcOperators */ .O4.map(function (operator) {
  return _objectSpread(_objectSpread({}, operator), {}, {
    label: _constants__WEBPACK_IMPORTED_MODULE_3__/* .OPERATOR_LABEL_MAP */ .DB[operator.name]
  });
})), [{
  name: "glob",
  label: _constants__WEBPACK_IMPORTED_MODULE_3__/* .TOKENS */ .xZ.OP_MATCHES_GLOB,
  accepts: ["string"]
}, {
  name: "regex",
  label: _constants__WEBPACK_IMPORTED_MODULE_3__/* .TOKENS */ .xZ.OP_MATCHES_REGEXP,
  accepts: ["string"]
}]);
var dataTypeOperators = operators.filter(function (operator) {
  return ["=", "!="].includes(operator.name);
});
var numberOperators = (0,_components_arc_query_builder__WEBPACK_IMPORTED_MODULE_1__/* .getFieldOperators */ .UU)({
  type: "number"
}, operators).filter(function (operator) {
  return !["null", "notNull"].includes(operator.name);
});
var fixedProps = {
  fields: [],
  operators: operators,
  controlElements: {
    fieldSelector: ConditionMappingFieldSelector,
    operatorSelector: ConditionMappingOperatorSelector,
    valueEditor: ConditionMappingValueSelector,
    notToggle: ConditionMappingNotToggle
  },
  getInputType: function getInputType(field) {
    return (field === null || field === void 0 ? void 0 : field.type) === _constants__WEBPACK_IMPORTED_MODULE_3__/* .FIELD_TYPES */ .bh.OCCURRENCES || (field === null || field === void 0 ? void 0 : field.type) === _constants__WEBPACK_IMPORTED_MODULE_3__/* .FIELD_TYPES */ .bh.INDEX ? "number" : "text";
  },
  getDefaultValue: function getDefaultValue(rule) {
    var _rule$field, _rule$field2, _rule$field3;
    if (((_rule$field = rule.field) === null || _rule$field === void 0 ? void 0 : _rule$field.type) === _constants__WEBPACK_IMPORTED_MODULE_3__/* .FIELD_TYPES */ .bh.DATA_TYPE) {
      return "String";
    } else if (((_rule$field2 = rule.field) === null || _rule$field2 === void 0 ? void 0 : _rule$field2.type) === _constants__WEBPACK_IMPORTED_MODULE_3__/* .FIELD_TYPES */ .bh.OCCURRENCES || ((_rule$field3 = rule.field) === null || _rule$field3 === void 0 ? void 0 : _rule$field3.type) === _constants__WEBPACK_IMPORTED_MODULE_3__/* .FIELD_TYPES */ .bh.INDEX) {
      return 1;
    } else {
      return "";
    }
  },
  getOperators: function getOperators(field) {
    if ((field === null || field === void 0 ? void 0 : field.type) === _constants__WEBPACK_IMPORTED_MODULE_3__/* .FIELD_TYPES */ .bh.DATA_TYPE) {
      return dataTypeOperators;
    } else if ((field === null || field === void 0 ? void 0 : field.type) === _constants__WEBPACK_IMPORTED_MODULE_3__/* .FIELD_TYPES */ .bh.OCCURRENCES || (field === null || field === void 0 ? void 0 : field.type) === _constants__WEBPACK_IMPORTED_MODULE_3__/* .FIELD_TYPES */ .bh.INDEX) {
      return numberOperators;
    } else {
      return operators;
    }
  }
};
var ConditionMappingBuilder = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, builderRef) {
  var ctx = useConditionMappingBuilderContext();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ConditionMappingBuilderContext.Provider, {
    value: _objectSpread({
      builderRef: builderRef
    }, ctx)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: builderRef,
    className: "condition-mapping-builder " + (ctx !== null && ctx !== void 0 && ctx.showGetStarted ? "get-started" : "")
  }, !props.disabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FieldCandidateSourceTree, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_arc_query_builder__WEBPACK_IMPORTED_MODULE_1__/* .ArcQueryBuilder */ .EX, _extends({}, fixedProps, props))));
});


/***/ }),

/***/ 85534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ shared_XPathSelector)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/rc-tree/es/index.js + 91 modules
var es = __webpack_require__(75803);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Fade.js
var Fade = __webpack_require__(7285);
;// CONCATENATED MODULE: ./src/components/arc-tree/constants.js

var TOKENS = {
  SEARCH: 'Search',
  NO_RESULTS_FOUND: 'No Results found'
};

// EXTERNAL MODULE: ./src/components/utils/index.js + 1 modules
var utils = __webpack_require__(25337);
// EXTERNAL MODULE: ./src/components/searchbox/index.jsx
var searchbox = __webpack_require__(58447);
;// CONCATENATED MODULE: ./src/components/arc-tree/index.jsx
var _excluded = ["searchable", "treeData", "enableNodeValue", "context", "treeAPI", "defaultExpandDepth", "defaultExpandAll", "style"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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








var ArcTreeContext = /*#__PURE__*/(0,react.createContext)({});
var useArcTreeContext = function useArcTreeContext() {
  return (0,react.useContext)(ArcTreeContext);
};
var getNodesFromPos = function getNodesFromPos(treeData, nodePos) {
  if ((treeData === null || treeData === void 0 ? void 0 : treeData.length) <= 0) {
    return [];
  }
  var indexer = nodePos.split("-").slice(1);
  if (indexer.length <= 0) {
    return [];
  }
  var nodes = [];
  var node = {
    children: treeData
  };
  indexer.forEach(function (index) {
    if (index < node.children.length) {
      nodes.push(node.children[index]);
      node = node.children[index];
    } else {
      nodes.splice(0);
      return false;
    }
  });
  return nodes;
};
var nodesToXPath = function nodesToXPath(nodes) {
  return nodes.reduce(function (res, val) {
    return res += "/" + val.title;
  }, "");
};
var _visitNode = function visitNode(node, depth, callback) {
  var _node$children;
  depth += 1;
  return callback(node, depth - 1) !== false && ((_node$children = node.children) === null || _node$children === void 0 ? void 0 : _node$children.forEach(function (child) {
    return _visitNode(child, depth, callback) !== false;
  }));
};
var highlightTitle = function highlightTitle(title, escape) {
  var parts = [];
  var startIndex = 0;
  title.replace(escape, function (part, index) {
    if (startIndex < index) {
      parts.push(title.substring(startIndex, index));
    }
    parts.push(/*#__PURE__*/react.createElement("b", {
      key: index
    }, part));
    startIndex = index + part.length;
  });
  if (startIndex < title.length) {
    parts.push(title.substring(startIndex));
  }
  return parts;
};
var ArcTreeSwitcher = function ArcTreeSwitcher(_ref) {
  var isLeaf = _ref.isLeaf,
    expanded = _ref.expanded;
  return isLeaf ? null : /*#__PURE__*/react.createElement("i", {
    className: expanded ? "fa fa-minus" : "fa fa-plus"
  });
};
var ArcTreeTitle = function ArcTreeTitle(props) {
  var _props$value;
  var context = useArcTreeContext();
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("span", {
    key: "title",
    className: "arc-tree-node-title"
  }, props.titleElement || props.title), context.enableNodeValue && (!props.children || props.children.length <= 0) && /*#__PURE__*/react.createElement("span", {
    key: "value",
    className: "arc-tree-node-value fst-italic ps-1"
  }, (_props$value = props.value) !== null && _props$value !== void 0 ? _props$value : " "));
};
var arcTreeDefaults = {
  showIcon: false,
  switcherIcon: ArcTreeSwitcher,
  titleRender: function titleRender(props) {
    return /*#__PURE__*/react.createElement(ArcTreeTitle, props);
  },
  title: "ArcTree",
  expandAction: "doubleClick"
};
var ArcTree = function ArcTree(props) {
  var _props$searchable = props.searchable,
    searchable = _props$searchable === void 0 ? true : _props$searchable,
    _props$treeData = props.treeData,
    treeData = _props$treeData === void 0 ? [] : _props$treeData,
    _props$enableNodeValu = props.enableNodeValue,
    enableNodeValue = _props$enableNodeValu === void 0 ? true : _props$enableNodeValu,
    _props$context = props.context,
    context = _props$context === void 0 ? {} : _props$context,
    treeAPI = props.treeAPI,
    defaultExpandDepth = props.defaultExpandDepth,
    defaultExpandAll = props.defaultExpandAll,
    style = props.style,
    treeProps = _objectWithoutProperties(props, _excluded);
  var _useState = (0,react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    searchText = _useState2[0],
    setSearchText = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    searching = _useState4[0],
    setSearching = _useState4[1];
  var treeDataRef = (0,react.useRef)({
    isMatched: treeData.length > 0,
    treeData: treeData
  });
  var defaultExpandedKeys = (0,react.useMemo)(function () {
    var key = 0;
    var defaultExpandedKeys = [];
    _visitNode({
      children: treeData
    }, 0, function (node, depth) {
      var _node$children2;
      node.key = node.key || "key-".concat(key++);
      if (((_node$children2 = node.children) === null || _node$children2 === void 0 ? void 0 : _node$children2.length) > 0 && (defaultExpandAll || defaultExpandDepth >= depth && defaultExpandDepth > 0 && depth > 0)) {
        defaultExpandedKeys.push(node.key);
      }
    });
    return defaultExpandedKeys;
  }, [treeData, defaultExpandDepth, defaultExpandAll]);
  var _useState5 = (0,react.useState)(defaultExpandedKeys),
    _useState6 = _slicedToArray(_useState5, 2),
    expandedKeys = _useState6[0],
    setExpandedKeys = _useState6[1];
  (0,react.useEffect)(function () {
    if (!searchable) {
      return;
    }
    var nodes = searchText.replace(/^\/+|,\/+$/g, "").split(/\/+/g).map(function (value) {
      return value.toLowerCase();
    });
    var reset = nodes.length === 1 && !nodes[0];
    var searchRegExp = reset || (0,utils/* escapeRegExp */.Nt)(nodes.at(-1));
    var matchRegex = reset || new RegExp(searchRegExp, "i");
    var escapeRegex = reset || new RegExp(searchRegExp, "ig");
    treeDataRef.current.isMatched = reset;
    _visitNode({
      children: treeData
    }, 0, function (node, depth) {
      delete node.titleElement;
      node.titleMatched = reset;
      if (depth === 0 || node.titleMatched) {
        return true;
      }
      if (nodes.length === 1 || depth === nodes.length - 1) {
        node.titleMatched = matchRegex.test(node.title);
        if (node.titleMatched) {
          node.titleElement = highlightTitle(node.title, escapeRegex);
          treeDataRef.current.isMatched = true;
        }
      } else if (depth < nodes.length && nodes[depth] === node.title.toLowerCase()) {
        node.titleMatched = true;
        node.titleElement = /*#__PURE__*/react.createElement("b", null, node.title);
        treeDataRef.current.isMatched = true;
      }
    });
    if (!reset && treeDataRef.current.isMatched) {
      var keys = _toConsumableArray(expandedKeys);
      var _adjustMatched = function adjustMatched(node) {
        var _node$children3;
        if (node.titleMatched) {
          return true;
        }
        node.titleMatched = ((_node$children3 = node.children) === null || _node$children3 === void 0 ? void 0 : _node$children3.map(_adjustMatched).includes(true)) === true;
        if (node.titleMatched && node.key && !keys.includes(node.key)) {
          keys.push(node.key);
        }
        return node.titleMatched;
      };
      _adjustMatched({
        children: treeData
      });
      setExpandedKeys(keys);
    }
    treeDataRef.current.treeData = [].concat(treeData);
    setSearching(false);
  }, [searchable, treeData, searchText]);
  var handlerSearchOnChange = function handlerSearchOnChange(text) {
    setSearchText(text);
    setSearching(true);
  };
  if (_typeof(treeAPI) === "object") {
    var ref = _typeof(treeAPI.current) === "object" ? treeAPI.current : treeAPI;
    ref.getNodes = function (node) {
      return getNodesFromPos(treeDataRef.current.treeData, node.pos);
    };
    ref.getNodeXPath = function (node) {
      return nodesToXPath(getNodesFromPos(treeDataRef.current.treeData, node.pos));
    };
    ref.setSearchText = setSearchText;
  }
  return /*#__PURE__*/react.createElement(ArcTreeContext.Provider, {
    value: {
      context: context,
      enableNodeValue: enableNodeValue
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "arc-tree ".concat(enableNodeValue ? "enable-node-value" : "", " ").concat(searching ? "searching" : ""),
    style: style
  }, searchable && /*#__PURE__*/react.createElement(searchbox/* SearchBox */.G, {
    searchText: searchText,
    onChanged: handlerSearchOnChange
  }), /*#__PURE__*/react.createElement(Fade/* default */.A, {
    "in": searchable && !searching && !treeDataRef.current.isMatched,
    appear: true,
    unmountOnExit: true
  }, /*#__PURE__*/react.createElement("span", {
    key: "no-matched",
    className: "w-100 h-75 d-flex justify-content-center align-items-center position-absolute"
  }, TOKENS.NO_RESULTS_FOUND)), /*#__PURE__*/react.createElement(es/* default */.A, _extends({}, arcTreeDefaults, treeProps, {
    treeData: treeDataRef.current.treeData,
    disabled: searchable && searching,
    expandedKeys: expandedKeys,
    onExpand: setExpandedKeys,
    filterTreeNode: function filterTreeNode(node) {
      return !searchable || node.titleMatched !== false;
    }
  }))));
};
ArcTree.propTypes = {
  /**
   * Whether to enable the search box.  Default to true.
   */
  searchable: (prop_types_default()).bool,
  /**
   * The tree data hierarchy.
   */
  treeData: (prop_types_default()).array.isRequired,
  /**
   * Enable node value.  Default to true.
   */
  enableNodeValue: (prop_types_default()).bool,
  /**
   * The Arc tree API for the current component instance.
   */
  treeAPI: (prop_types_default()).object,
  /**
   * The default expand depth.
   */
  defaultExpandDepth: (prop_types_default()).number,
  /**
   * The custom Arc tree context.
   */
  context: (prop_types_default()).object
};

;// CONCATENATED MODULE: ./src/connectors/shared/XPathSelector.jsx
function XPathSelector_typeof(o) { "@babel/helpers - typeof"; return XPathSelector_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, XPathSelector_typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == XPathSelector_typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != XPathSelector_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != XPathSelector_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var XPathSelector_visitNode = function visitNode(node, callback) {
  var _node$children;
  (_node$children = node.children) === null || _node$children === void 0 || _node$children.forEach(function (child, index) {
    node.children[index] = XPathSelector_visitNode(child, callback);
  });
  return callback(node);
};
var XPathSelector = function XPathSelector(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style,
    xmlTree = _ref.xmlTree,
    _ref$mode = _ref.mode,
    mode = _ref$mode === void 0 ? "leafOnly" : _ref$mode,
    onChange = _ref.onChange;
  var treeAPI = (0,react.useRef)({});
  var treeData = (0,react.useMemo)(function () {
    return mode !== "both" ? XPathSelector_visitNode({
      children: xmlTree
    }, function (node) {
      var _node$children2;
      var isParent = (_node$children2 = node.children) === null || _node$children2 === void 0 ? void 0 : _node$children2.some(function (node) {
        return !node.title.startsWith("@");
      });
      node = _objectSpread(_objectSpread({}, node), {}, {
        className: "arc-tree-node-" + (isParent ? "folder" : "leaf")
      });
      if (mode === "parentOnly" && !isParent || mode === "leafOnly" && isParent) {
        return _objectSpread(_objectSpread({}, node), {}, {
          selectable: false,
          disabled: true
        });
      }
      return node;
    }).children : xmlTree;
  }, [xmlTree, mode]);
  return /*#__PURE__*/react.createElement("div", {
    className: "xpath-selector ".concat(className),
    style: style,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/react.createElement(ArcTree, {
    style: style,
    treeData: treeData,
    treeAPI: treeAPI,
    expandAction: mode === "leafOnly" ? "click" : "doubleClick",
    defaultExpandDepth: xmlTree.length > 1 ? 2 : 3,
    onClick: function onClick(e, node) {
      var _node$children3;
      var isParent = (_node$children3 = node.children) === null || _node$children3 === void 0 ? void 0 : _node$children3.some(function (node) {
        return !node.title.startsWith("@");
      });
      if (mode === "parentOnly" && !isParent || mode === "leafOnly" && isParent) {
        e.stopPropagation();
        return false;
      }
      return onChange(treeAPI.current.getNodeXPath(node), isParent, node, e);
    }
  }));
};
XPathSelector.propTypes = {
  /**
   * The class name.
   */
  className: (prop_types_default()).string,
  /**
   * The style.
   */
  style: (prop_types_default()).object,
  /**
   * The XML tree.
   */
  xmlTree: (prop_types_default()).array.isRequired,
  /**
   * The selection mode. Default: leafOnly.
   */
  mode: prop_types_default().oneOf(["leafOnly", "both", "parentOnly"]),
  /**
   * Event: onChange.
   */
  onChange: (prop_types_default()).func.isRequired
};
/* harmony default export */ const shared_XPathSelector = (XPathSelector);

/***/ }),

/***/ 81439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ SearchableAutoScrollList),
/* harmony export */   t: () => (/* binding */ AutoScrollList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56992);
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25337);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97865);




function findScrollableAncestor(element) {
    let parent = element;
    while (parent) {
        if (parent.scrollHeight > parent.clientHeight || parent.scrollWidth > parent.clientWidth || ["auto", "scroll"].includes(getComputedStyle(parent).overflowY)) {
            return parent;
        }
        parent = parent.parentElement;
    }
    return element;
}
function AutoScrollList(props) {
    const [count, setCount] = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.paging);
    const listRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const observerCallback = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const itemLength = react__WEBPACK_IMPORTED_MODULE_0__.useRef(props.items.length);
    observerCallback.current = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((container, itemHeight, entries) => {
        var _a, _b;
        const bottomReachDistance = itemHeight * Math.max(1, (_a = props.bottomReachCount) !== null && _a !== void 0 ? _a : 0);
        const scrollToBottom = container.scrollTop + container.clientHeight + bottomReachDistance >= container.scrollHeight;
        if (!scrollToBottom && !props.onObserved)
            return;
        scrollToBottom && entries.some((entry) => entry.isIntersecting) && setCount(count => Math.min(count + props.paging, props.items.length));
        (_b = props.onObserved) === null || _b === void 0 ? void 0 : _b.call(container, entries);
    }, [props.bottomReachCount, props.onObserved, props.paging, props.items.length, setCount]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (!listRef.current)
            return;
        const scrollableAncestor = findScrollableAncestor(listRef.current);
        let itemHeight = 0;
        const observer = new IntersectionObserver((entries) => observerCallback.current(scrollableAncestor, itemHeight, entries), {
            root: scrollableAncestor,
            threshold: [0, 0.5, 1],
        });
        const items = listRef.current.querySelectorAll(".autoscroll-list-item");
        items.forEach((node) => {
            itemHeight += node.scrollHeight;
            observer.observe(node);
        });
        itemHeight = itemHeight > 0 ? Math.ceil(itemHeight / items.length * 1.5) : 32;
        const mutationObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "childList") {
                    mutation.removedNodes.forEach((node) => {
                        node instanceof HTMLElement && observer.unobserve(node);
                    });
                    mutation.addedNodes.forEach((node) => {
                        node instanceof HTMLElement && node.classList.contains("autoscroll-list-item") && observer.observe(node);
                    });
                }
            });
        });
        mutationObserver.observe(scrollableAncestor, { childList: true, subtree: true });
        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const previousItemCount = itemLength.current;
        setCount(count => Math.min(count + (previousItemCount < props.items.length && (count + (props.paging >> 3) >= previousItemCount) ? props.paging : (count > props.items.length ? -1 : 1)), props.items.length));
        itemLength.current = props.items.length;
    }, [props.paging, props.items.length]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const index = props.activeIndex;
        if (!listRef.current || index < 0 || index == null)
            return;
        const items = listRef.current.querySelectorAll(".autoscroll-list-item");
        if (index > items.length - 1)
            return;
        items[index].scrollIntoView(false);
    }, [props.activeIndex]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: `autoscroll-list w-100 ${props.className || ""}`, ref: listRef }, props.items.slice(0, count).map((item, index) => props.renderItem({ item, index, className: "autoscroll-list-item", active: index === props.activeIndex }))));
}
function SearchableAutoScrollList(props) {
    var _a;
    const [searchText, setSearchText] = react__WEBPACK_IMPORTED_MODULE_0__.useState("");
    const [activeIndex, setActiveIndex] = react__WEBPACK_IMPORTED_MODULE_0__.useState(-1);
    const inputRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const filtered = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        if (searchText.length > 0) {
            const matchRegex = new RegExp((0,_components_utils__WEBPACK_IMPORTED_MODULE_2__/* .escapeRegExp */ .Nt)(searchText), "i");
            return props.items.filter(item => matchRegex.test(props.getItemKey(item)));
        }
        else {
            return props.items;
        }
    }, [props.items, searchText]);
    const handleSearchTextChanged = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((text) => {
        setSearchText(text);
        setActiveIndex(-1);
    }, [setSearchText, setActiveIndex]);
    const handleSearchTextKeyDown = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        switch (event.key) {
            case "Esc":
                setActiveIndex(-1);
                break;
            case "Enter":
            case "Tab":
                setActiveIndex(activeIndex => {
                    var _a;
                    if (activeIndex >= 0) {
                        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
                        props.onSelected(filtered[activeIndex]);
                    }
                    return -1;
                });
                break;
            case "ArrowUp":
                setActiveIndex(activeIndex => Math.max(0, activeIndex - 1));
                break;
            case "ArrowDown":
                setActiveIndex(activeIndex => Math.min(filtered.length - 1, activeIndex + 1));
                break;
        }
    }, [setActiveIndex, filtered, props.onSelected]);
    const highlight = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        if (searchText.length > 0) {
            const escapeRegex = new RegExp((0,_components_utils__WEBPACK_IMPORTED_MODULE_2__/* .escapeRegExp */ .Nt)(searchText), "ig");
            return (text) => (0,_shared_utils__WEBPACK_IMPORTED_MODULE_1__/* .highlightText */ .Sw)(text, escapeRegex);
        }
        else
            return (text) => text;
    }, [searchText]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        props.items.length > 10 &&
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "mapping-search-box app-search-bar form-control mb-2 w-auto d-flex align-items-center" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "search-glass-icon" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-search" })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { ref: inputRef, type: "text", className: "search-input", placeholder: _constants__WEBPACK_IMPORTED_MODULE_3__/* .TOKENS */ .xZ.SEARCH_FOR, value: activeIndex >= 0 ? props.getItemKey(filtered[activeIndex]) : searchText, onChange: e => handleSearchTextChanged(e.target.value), onKeyDown: handleSearchTextKeyDown }),
                (activeIndex >= 0 ? filtered[activeIndex] : searchText) ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "search-clear-icon", onClick: () => handleSearchTextChanged("") },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-times-circle" })) : null),
        props.showDivider && props.items.length > 10 && react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", { className: "mt-auto mb-1 divider" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(AutoScrollList, Object.assign({}, props, { items: filtered, paging: props.paging, renderItem: renderProps => props.renderItem(Object.assign(Object.assign({}, renderProps), { highlight })), activeIndex: activeIndex })), (_a = props.renderFiltered) === null || _a === void 0 ? void 0 :
        _a.call(null, filtered));
}


/***/ }),

/***/ 85266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  kx: () => (/* binding */ MappingContext),
  qm: () => (/* binding */ MappingEditor),
  HM: () => (/* binding */ ModalTypes),
  AC: () => (/* binding */ deleteNode)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/core/DndProvider.js
var DndProvider = __webpack_require__(67782);
// EXTERNAL MODULE: ./node_modules/react-dnd-html5-backend/dist/index.js + 13 modules
var dist = __webpack_require__(33631);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Button.js
var Button = __webpack_require__(25615);
// EXTERNAL MODULE: ./src/components/utils/index.js + 1 modules
var utils = __webpack_require__(25337);
// EXTERNAL MODULE: ./src/connectors/shared/utils.js
var shared_utils = __webpack_require__(56992);
// EXTERNAL MODULE: ./node_modules/zustand/esm/vanilla.mjs
var vanilla = __webpack_require__(97283);
// EXTERNAL MODULE: ./node_modules/zustand/esm/index.mjs
var esm = __webpack_require__(7282);
// EXTERNAL MODULE: ../../.react-shared/axios/index.jsx
var axios = __webpack_require__(29029);
;// CONCATENATED MODULE: ./src/data/ai/store.ts



const nextTaskId = (function () {
    let index = 0;
    return function () {
        return index++;
    };
}());
function startAITask(set, promptId, vars, variant, workspaceId, connectorId) {
    const taskKey = `task_${nextTaskId()}`;
    const taskResult = { taskId: taskKey, status: "Starting", output: [], reason: "", };
    set((state) => ({ tasks: state.tasks.set(taskKey, taskResult) }));
    const params = new URLSearchParams();
    params.append("promptid", promptId);
    Object.entries(vars || {}).forEach(([key, value]) => params.append(`var:${key}`, value));
    if (variant)
        params.append("variant", variant);
    if (workspaceId)
        params.append("workspaceId", workspaceId);
    if (connectorId)
        params.append("connectorId", connectorId);
    params.append("@json", "true");
    axios/* default */.A.post("src/startAITask.rsb", params).then((response) => {
        var _a;
        const error = (0,utils/* getResultErrorMessage */.hz)(response.data.items);
        if (error || !((_a = response.data.items[0]) === null || _a === void 0 ? void 0 : _a.taskid)) {
            taskResult.status = "Failed";
            taskResult.reason = error;
        }
        else {
            taskResult.taskId = response.data.items[0].taskid;
            taskResult.status = "InProcess";
        }
    }).catch((error) => {
        taskResult.status = "Failed";
        taskResult.reason = error.message;
    }).finally(() => {
        set((state) => ({
            tasks: state.tasks.set(taskKey, taskResult),
        }));
    });
    return taskKey;
}
function getAITaskResult(set, get, taskKey) {
    const taskResult = get().tasks.get(taskKey);
    if (taskResult == null || taskResult.status !== "InProcess")
        return new Promise(resolve => resolve(taskResult));
    const urlParams = {
        "@json": true,
        "taskid": taskResult.taskId
    };
    return axios/* default */.A.get("src/getAITaskResult.rsb", { params: urlParams }).then((response) => {
        const error = (0,utils/* getResultErrorMessage */.hz)(response.data.items);
        if (error) {
            taskResult.status = "Failed";
            taskResult.reason = error;
        }
        else {
            taskResult.status = response.data.items[0].status;
            taskResult.output = response.data.items[0].output;
            taskResult.reason = response.data.items[0].reason;
        }
        return taskResult;
    }).catch((error) => {
        taskResult.status = "Failed";
        taskResult.reason = error.message;
        return taskResult;
    }).finally(() => {
        set((state) => ({
            tasks: state.tasks.set(taskKey, Object.assign(Object.assign({}, state.tasks.get(taskKey)), { status: taskResult.status, output: taskResult.output, reason: taskResult.reason }))
        }));
    });
}
function stopAITask(set, get, taskKey) {
    const taskResult = get().tasks.get(taskKey);
    if (taskResult == null || taskResult.status !== "InProcess")
        return;
    taskResult.status = "Stopping";
    set((state) => ({ tasks: state.tasks.set(taskKey, taskResult) }));
    const params = new URLSearchParams();
    params.append("taskid", taskResult.taskId);
    params.append("@json", "true");
    axios/* default */.A.post("src/stopAITask.rsb", params).then((response) => {
        const error = (0,utils/* getResultErrorMessage */.hz)(response.data.items);
        if (error) {
            taskResult.status = "Failed";
            taskResult.reason = error;
        }
        else {
            taskResult.status = "Failed";
            taskResult.reason = "Stopped";
        }
    }).catch((error) => {
        taskResult.status = "Failed";
        taskResult.reason = error.message;
    }).finally(() => {
        set((state) => ({
            tasks: state.tasks.set(taskKey, Object.assign(Object.assign({}, state.tasks.get(taskKey)), { status: taskResult.status, output: taskResult.output, reason: taskResult.reason }))
        }));
    });
}
function deleteAITask(set, taskKey) {
    set((state) => {
        state.tasks.delete(taskKey);
        return { tasks: state.tasks, };
    });
}
function createAITaskStore() {
    return (0,vanilla/* createStore */.y)()((set, get) => ({
        tasks: new Map,
        start: startAITask.bind(null, set),
        getResult: getAITaskResult.bind(null, set, get),
        stop: stopAITask.bind(null, set, get),
        delete: deleteAITask.bind(null, set),
    }));
}
const aiTaskStoreStoreRef = { store: null };
function useAITaskStore(selector) {
    if (aiTaskStoreStoreRef.store == null) {
        aiTaskStoreStoreRef.store = createAITaskStore();
    }
    return (0,esm/* useStore */.Pj)(aiTaskStoreStoreRef.store, selector);
}

;// CONCATENATED MODULE: ./src/data/ai/index.ts


// EXTERNAL MODULE: ./node_modules/d3-selection/src/select.js
var src_select = __webpack_require__(50183);
// EXTERNAL MODULE: ./node_modules/d3-drag/src/drag.js + 2 modules
var drag = __webpack_require__(84833);
// EXTERNAL MODULE: ./src/connectors/mapping-editor/helper.ts
var helper = __webpack_require__(29471);
;// CONCATENATED MODULE: ./src/connectors/mapping-editor/Split.tsx




const getTotalWidth = (widths, resizerWidth) => widths.reduce((result, width) => result + width + resizerWidth, -resizerWidth);
const normalizeRatios = (ratios) => {
    if (ratios.length === 0)
        return ratios;
    const total = getTotalWidth(ratios, 0);
    return total > 0 ? ratios.map(ratio => ratio / total) : new Array(ratios.length).fill(1 / ratios.length);
};
const Split = (props) => {
    var _a;
    const minWidth = react.useMemo(() => getTotalWidth(props.minSizes, props.resizerWidth), [props.resizerWidth, props.minSizes]);
    const ratios = react.useMemo(() => normalizeRatios(props.ratios), [props.ratios]);
    const [containerWidth, setContainerWidth] = react.useState(minWidth);
    const [widths, setWidths] = react.useState(props.minSizes);
    const bodyRef = react.useRef();
    const resizeHandleRef = react.useRef();
    const dragHandleRef = react.useRef();
    const resizing = react.useRef(false);
    const adjustWidths = (widths, width) => {
        var _a;
        for (let count = width > minWidth ? widths.length : 0; count > 0; count--) {
            let dw = 0;
            let diffRatios = [...props.ratios];
            widths.forEach((w, index) => {
                if (w <= props.minSizes[index] + 1) {
                    dw += w - props.minSizes[index];
                    widths[index] = props.minSizes[index];
                    diffRatios[index] = 0;
                }
            });
            if (dw > -1)
                break;
            diffRatios = normalizeRatios(diffRatios);
            widths = widths.map((w, index) => w + dw * diffRatios[index]);
        }
        setWidths(width > minWidth ? widths : [...props.minSizes]);
        (_a = props.onResizing) === null || _a === void 0 ? void 0 : _a.call(null);
    };
    resizeHandleRef.current = (width) => {
        setContainerWidth(width);
        width = Math.max(width, bodyRef.current.offsetWidth);
        const dw = width - getTotalWidth(widths, props.resizerWidth);
        adjustWidths(widths.map((w, index) => w + dw * ratios[index]), width);
    };
    dragHandleRef.current = (elementIndex, dx, start, end) => {
        var _a, _b;
        dx = Math.max(Math.min(dx, widths[elementIndex + 1] - props.minSizes[elementIndex + 1]), props.minSizes[elementIndex] - widths[elementIndex]);
        dx !== 0 && adjustWidths(widths.map((width, index) => elementIndex === index ? width + dx : (elementIndex + 1 === index ? width - dx : width)), bodyRef.current.offsetWidth);
        if (start) {
            (_a = props.onResizeStart) === null || _a === void 0 ? void 0 : _a.call(null);
        }
        else if (end) {
            (_b = props.onResizeStop) === null || _b === void 0 ? void 0 : _b.call(null);
        }
    };
    react.useEffect(() => {
        if (props.disabled)
            return;
        const stopDragging = () => {
            resizing.current = false;
        };
        const handleResize = (width) => {
            var _a;
            stopDragging();
            (_a = resizeHandleRef.current) === null || _a === void 0 ? void 0 : _a.call(null, width);
        };
        handleResize(bodyRef.current.offsetWidth);
        document.addEventListener("mouseup", stopDragging);
        const observer = new ResizeObserver(entries => entries.length > 0 && handleResize(entries[0].contentRect.width));
        observer.observe(bodyRef.current.parentElement.parentElement);
        return () => {
            observer.disconnect();
            window.removeEventListener("mouseup", stopDragging);
        };
    }, [props.disabled]);
    const initResizer = react.useCallback((resizer) => {
        if (!resizer)
            return;
        const index = parseInt((0,helper/* getElementAttr */._9)(resizer, "data-split-index"));
        const handleDrag = ((elementIndex, event, start, end) => {
            var _a, _b;
            if (start || end) {
                resizing.current = start;
                (_a = dragHandleRef.current) === null || _a === void 0 ? void 0 : _a.call(null, elementIndex, event.dx, start, end);
                return true;
            }
            if (!resizing.current || event.dx === 0 || Math.abs(event.dx) < 2)
                return false;
            (_b = dragHandleRef.current) === null || _b === void 0 ? void 0 : _b.call(null, elementIndex, event.dx);
        }).bind(resizer, index);
        const selection = (0,src_select/* default */.A)(resizer);
        selection.on(".drag", null);
        const dragHandler = (0,drag/* default */.A)()
            .on("start", (event) => handleDrag(event, true))
            .on("drag", handleDrag)
            .on("end", (event) => handleDrag(event, false, true));
        selection.call(dragHandler);
    }, [dragHandleRef]);
    const horizontal = minWidth <= (containerWidth << 1);
    return (react.createElement("div", { className: "mapping-split-container w-100 d-flex" + (horizontal ? " horizontal" : " vertical") },
        react.createElement("div", { className: "mapping-split-body w-100 d-flex" + (horizontal ? "" : " flex-column") + (((_a = bodyRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth) > containerWidth + 20 ? " mb-3" : ""), ref: bodyRef }, react.Children.map(props.children, (child, index) => react.createElement(react.Fragment, null,
            horizontal && index > 0 && react.createElement("div", { className: "mapping-split-resizer", "data-split-index": index - 1, ref: props.disabled ? undefined : initResizer, style: { width: `${props.resizerWidth}px` } }, props.resizer),
            react.createElement("div", { className: "mapping-split mapping-split-" + index + (!horizontal ? " w-100" : (index === react.Children.count(props.children) - 1 ? " flex-grow-1" : "")), "data-split-horizontal": horizontal, style: { minWidth: !horizontal ? null : `${widths[index]}px` } }, child))))));
};
/* harmony default export */ const mapping_editor_Split = (Split);

// EXTERNAL MODULE: ./src/connectors/mapping-editor/Tree.tsx
var Tree = __webpack_require__(75997);
;// CONCATENATED MODULE: ./src/connectors/mapping-editor/ConnectionPanel.tsx

const getBezierPath = (sourceX, sourceY, targetX, targetY) => {
    const dw = (targetX - sourceX) / 2;
    if (dw < 0)
        return getBezierPath(targetX, targetY, sourceX, sourceY);
    return `M ${sourceX} ${sourceY} L ${sourceX + 10} ${sourceY} C ${sourceX + dw} ${sourceY} ${targetX - dw} ${targetY} ${targetX - 10} ${targetY} L ${targetX} ${targetY}`;
};
const getStraightPath = (sourceX, sourceY, targetX, targetY) => {
    return `M ${sourceX} ${sourceY} L ${targetX} ${targetY}`;
};
const Edge = ({ id, source, target, styles, active, loading }) => {
    const path = Math.abs((source.x - target.x) * (source.y - target.y)) < 100 ? getStraightPath(source.x, source.y, target.x, target.y) : getBezierPath(source.x, source.y, target.x, target.y);
    return react.createElement("path", Object.assign({ id: id, className: `${loading ? "loading " : ""}${active ? "active" : ""}`, stroke: "black", fill: "transparent" }, styles, { d: path }));
};
const ConnectionPanel = react.forwardRef((props, ref) => {
    return (react.createElement("svg", { id: props.id, className: props.className, ref: ref }, props.edges.map(edge => react.createElement(Edge, Object.assign({ key: edge.id }, edge)))));
});


// EXTERNAL MODULE: ./src/connectors/mapping-editor/types.ts
var types = __webpack_require__(97418);
// EXTERNAL MODULE: ./src/connectors/mapping-editor/components.tsx
var components = __webpack_require__(76677);
// EXTERNAL MODULE: ./src/connectors/mapping-editor/MappingExpressionEditorModal.jsx
var MappingExpressionEditorModal = __webpack_require__(35160);
// EXTERNAL MODULE: ./src/connectors/mapping-editor/MappingConditionEditorModal.jsx + 1 modules
var MappingConditionEditorModal = __webpack_require__(35874);
// EXTERNAL MODULE: ./src/connectors/mapping-editor/Modals.tsx
var Modals = __webpack_require__(8627);
// EXTERNAL MODULE: ./src/connectors/mapping-editor/exprHelper.jsx
var exprHelper = __webpack_require__(50683);
// EXTERNAL MODULE: ./src/connectors/mapping-editor/constants.js
var constants = __webpack_require__(97865);
;// CONCATENATED MODULE: ./src/connectors/mapping-editor/MappingEditor.tsx
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



















const DEFAULT_EDGE_PATH_INFO = { source: { x: 0, y: 0 }, target: { x: 0, y: 0 } };
var ModalTypes;
(function (ModalTypes) {
    ModalTypes[ModalTypes["None"] = 0] = "None";
    ModalTypes[ModalTypes["ExpressionEditor"] = 1] = "ExpressionEditor";
    ModalTypes[ModalTypes["ConditionEditor"] = 2] = "ConditionEditor";
    ModalTypes[ModalTypes["CodeScriptEditor"] = 3] = "CodeScriptEditor";
    ModalTypes[ModalTypes["OverrideExistingMapping"] = 4] = "OverrideExistingMapping";
    ModalTypes[ModalTypes["Custom"] = 5] = "Custom";
})(ModalTypes || (ModalTypes = {}));
var AnimationTypes;
(function (AnimationTypes) {
    AnimationTypes["UpdateEdges"] = "UpdateEdges";
    AnimationTypes["ScrollIntoView"] = "ScrollIntoView";
})(AnimationTypes || (AnimationTypes = {}));
function updateEdges(state, edges) {
    const connectedHandleSets = edges.reduce((set, edge) => {
        set.add((0,helper/* getHandleId */.q_)(edge.sourceHandle));
        edge.sourceHandle !== edge.realSource && set.add((0,helper/* getHandleId */.q_)(edge.realSource));
        set.add((0,helper/* getHandleId */.q_)(edge.targetHandle));
        edge.targetHandle !== edge.realTarget && set.add((0,helper/* getHandleId */.q_)(edge.realTarget));
        return set;
    }, new Set);
    const updateConnected = (treeType, isSource, node) => {
        const connected = [connectedHandleSets.has((0,helper/* getHandleId */.q_)({ treeType, nodeId: node.id, index: types/* HandleIndexer */.US.Default })), isSource ? false : connectedHandleSets.has((0,helper/* getHandleId */.q_)({ treeType, nodeId: node.id, index: types/* HandleIndexer */.US.Mismatch }))];
        if (node.data.connected.some((c, index) => c !== connected[index]))
            node.data = Object.assign(Object.assign({}, node.data), { connected });
        return true;
    };
    state = Object.assign(Object.assign({}, state), { edges });
    (0,helper/* iterateNodes */.K$)(state[types/* TreeTypes */.G1.Source].nodes, node => updateConnected(types/* TreeTypes */.G1.Source, true, node));
    (0,helper/* iterateNodes */.K$)(state[types/* TreeTypes */.G1.Destination].nodes, node => updateConnected(types/* TreeTypes */.G1.Destination, false, node));
    return state;
}
function expandNode(node) {
    (0,helper/* iterateParents */.QE)(node, (node) => (node.expand = true, false), true);
}
function initEdges(edges, sourceNodes, nodes, recursive = false) {
    const indexes = [types/* HandleIndexer */.US.Default, types/* HandleIndexer */.US.Mismatch];
    nodes.forEach(node => {
        var _a, _b;
        indexes.forEach(index => {
            const targetHandle = { treeType: types/* TreeTypes */.G1.Destination, nodeId: node.id, index };
            (0,helper/* getNodeReferences */.jX)(node, index).forEach(xpath => {
                const source = (0,helper/* locateToNodeByXPath */.e1)(sourceNodes, xpath);
                if (source != null) {
                    const sourceHandle = { treeType: types/* TreeTypes */.G1.Source, nodeId: source.id, index: types/* HandleIndexer */.US.Default };
                    edges.push(Object.assign(Object.assign({}, DEFAULT_EDGE_PATH_INFO), { id: "", sourceHandle, targetHandle, realSource: sourceHandle, realTarget: targetHandle }));
                }
            });
        });
        recursive && ((_a = node.children) === null || _a === void 0 ? void 0 : _a.length) > 0 && initEdges(edges, sourceNodes, node.children, true);
        recursive && ((_b = node.attributes) === null || _b === void 0 ? void 0 : _b.length) > 0 && initEdges(edges, sourceNodes, node.attributes, true);
    });
    return edges;
}
function deleteNode(state, node, treeType) {
    var _a;
    state[treeType].structureChanged = state[treeType].structureChanged || (0,helper/* locateToNode */.Y)([node], n => n.data.type >= types/* NodeType */.Z6.Basic) != null;
    if (node.data.type === types/* NodeType */.Z6.Attribute)
        node.data.parent.attributes.splice(node.data.parent.attributes.indexOf(node), 1);
    else if (node.data.parent)
        node.data.parent.children.splice(node.data.parent.children.indexOf(node), 1);
    else if (node.data.type === types/* NodeType */.Z6.Condition)
        state[treeType].nodes = (0,helper/* cloneNodes */.Bp)(node.children.map(n => (n.data.condition = n.data.condition || node.data.condition, n)), n => n);
    else if (node.data.type === types/* NodeType */.Z6.Loop)
        state[treeType].nodes = (0,helper/* cloneNodes */.Bp)(node.children.map(n => (n.data.foreach = (0,helper/* xpathCombine */.rF)(node.data.foreach, n.data.foreach), n)), n => n);
    else
        state[treeType].nodes = [];
    const isSource = treeType == types/* TreeTypes */.G1.Source;
    const nodeIds = [];
    (0,helper/* iterateNodes */.K$)([node], node => (nodeIds.push(node.id), true));
    const edges = state.edges.filter(edge => isSource && !nodeIds.includes(edge.sourceHandle.nodeId) || !isSource && !nodeIds.includes(edge.targetHandle.nodeId));
    !isSource && node.data.type === types/* NodeType */.Z6.Attribute && node.data.invalid && (0,helper/* validateNode */.T2)(node.data.parent, ((_a = (0,helper/* getNodeForeach */.Fv)(node.data.parent)) === null || _a === void 0 ? void 0 : _a.length) > 0);
    state = Object.assign(Object.assign({}, state), { edges });
    state[treeType].nodes = [...state[treeType].nodes];
    return state;
}
function initStore(props, version = 0) {
    let edges = [];
    const sourceNodes = props.source.root == null ? [] : (0,helper/* cloneNodes */.Bp)([props.source.root], (node, depth) => { var _a; return (Object.assign(Object.assign({}, node), { id: (((_a = node.id) === null || _a === void 0 ? void 0 : _a.length) > 0 ? node.id : (0,helper/* genNodeId */.K2)()), attributes: node.data.type !== types/* NodeType */.Z6.Attribute ? node.attributes : null, data: Object.assign(Object.assign(Object.assign({}, types/* DefaultMappingNodeData */.G6), node.data), { type: node.data.type !== types/* NodeType */.Z6.Attribute ? types/* NodeType */.Z6.Basic : types/* NodeType */.Z6.Attribute }), expand: depth <= 3 || node.expand === true, active: false, focus: false })); }, 1);
    const destinationNodes = props.destination.root == null ? [] : (0,helper/* cloneNodes */.Bp)([props.destination.root], (node, depth) => {
        var _a, _b, _c;
        node = Object.assign(Object.assign({}, node), { id: (((_a = node.id) === null || _a === void 0 ? void 0 : _a.length) > 0 ? node.id : (0,helper/* genNodeId */.K2)()), data: Object.assign(Object.assign(Object.assign({}, types/* DefaultMappingNodeData */.G6), { type: types/* NodeType */.Z6.Basic }), node.data), expand: depth <= 3 || node.expand == true, active: false, focus: false });
        if (node.data.type === types/* NodeType */.Z6.Script && ((_c = (_b = node.data.value) === null || _b === void 0 ? void 0 : _b.custom) === null || _c === void 0 ? void 0 : _c.length) > 0) {
            const info = (0,helper/* validateRSBScript */.TF)(node.data.value.custom);
            if (!info.valid)
                node.data.invalid = true;
            else
                node.data = Object.assign(Object.assign({}, node.data), (0,helper/* upgradeScriptNode */.M9)(info));
        }
        node.data.type !== types/* NodeType */.Z6.Basic && delete node.attributes;
        edges = initEdges(edges, sourceNodes, [node]);
        return node;
    }, 1);
    const validate = !destinationNodes.map(root => (0,helper/* validateNode */.T2)(root)).some(valid => !valid);
    return updateEdges({
        [types/* TreeTypes */.G1.Source]: {
            treeType: types/* TreeTypes */.G1.Source,
            nodes: sourceNodes,
            scroll: 0,
            breadcrumb: [],
            search: { searchText: "", matchedCount: 0, index: 0 },
            updatedVersion: 0,
            structureChanged: false
        },
        [types/* TreeTypes */.G1.Destination]: {
            treeType: types/* TreeTypes */.G1.Destination,
            nodes: destinationNodes,
            scroll: 0,
            breadcrumb: [],
            search: { searchText: "", matchedCount: 0, index: 0 },
            updatedVersion: 0,
            structureChanged: false
        },
        edges,
        version,
        refreshCount: 0,
        modal: { type: ModalTypes.None },
        preview: null,
        blocking: false,
        toast: props.toast,
        xmlStreaming: !!props.xmlStreaming,
        compactMode: (0,utils/* getValueAsBool */.CO)((0,helper/* getStorageValue */.vx)(props.connectorInfo, "compactMode"), false),
        showAttributes: (0,utils/* getValueAsBool */.CO)((0,helper/* getStorageValue */.vx)(props.connectorInfo, "expandattributes"), true),
        mappingChanged: false,
        validate
    }, edges);
}
function store(state, action) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    if (action.key === "setState")
        return action.value(state);
    const treeState = Object.assign({}, state[action.treeType]);
    let newState = Object.assign(Object.assign({}, state), { [action.treeType]: treeState, refreshCount: state.refreshCount + 1 });
    let node = null;
    let target = null;
    let nodeTitle = null;
    switch (action.key) {
        case "nodeExpand":
            if (!(node = (0,helper/* locateToNodeById */.mN)(treeState.nodes, action.value)))
                return state;
            expandNode(node);
            treeState.updatedVersion++;
            break;
        case "nodeCollapse":
            if (!(node = (0,helper/* locateToNodeById */.mN)(treeState.nodes, action.value)))
                return state;
            node.expand = false;
            treeState.updatedVersion++;
            break;
        case "nodeToggle":
            if (!(node = (0,helper/* locateToNodeById */.mN)(treeState.nodes, action.value)))
                return state;
            node.expand = !node.expand;
            treeState.updatedVersion++;
            break;
        case "expandAll":
            (0,helper/* iterateNodes */.K$)(treeState.nodes, (node) => (node.expand = true));
            treeState.updatedVersion++;
            break;
        case "collapseAll":
            (0,helper/* iterateNodes */.K$)(treeState.nodes, (node) => (node.expand = false, true));
            treeState.breadcrumb = [];
            treeState.updatedVersion++;
            break;
        case "updateBreadcrumb":
            if (treeState.scroll < 64) { // Node row height.
                treeState.breadcrumb = [];
            }
            else if (((_a = action.value) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                const node = (0,helper/* locateToNodeById */.mN)(treeState.nodes, action.value);
                if (!node)
                    return state;
                const parents = [];
                node.data.parent != null && ((_b = node.children) === null || _b === void 0 ? void 0 : _b.length) > 0 && parents.push({ id: node.id, name: node.name });
                (0,helper/* iterateParents */.QE)(node, parent => (parents.push({ id: parent.id, name: parent.name }), false));
                treeState.breadcrumb = parents.filter(parent => { var _a; return ((_a = parent.name) === null || _a === void 0 ? void 0 : _a.length) > 0; }).reverse();
            }
            else {
                return state;
            }
            break;
        case "updateSearchText":
            (() => {
                const searchText = action.value;
                const matchRegex = searchText.length > 0 ? new RegExp((0,utils/* escapeRegExp */.Nt)(searchText), "i") : null;
                let matchedCount = 0;
                let firstMatched = null;
                (0,helper/* iterateNodes */.K$)(treeState.nodes, (node) => {
                    node.focus = false;
                    node.data.matched !== (searchText.length > 0 && matchRegex.test((0,helper/* getNodeTitle */.Nb)(node))) && (node.data = Object.assign(Object.assign({}, node.data), { matched: !node.data.matched }));
                    node.data.matched && (++matchedCount === 1) && (firstMatched = node);
                    return true;
                });
                treeState.search = { searchText, matchedCount, index: 0 };
                if (firstMatched != null) {
                    firstMatched.focus = true;
                    if (!(0,helper/* isNodeVisible */.l)(firstMatched)) {
                        expandNode(firstMatched.data.parent);
                        treeState.updatedVersion++;
                    }
                }
            })();
            break;
        case "updateSearchIndex":
            treeState.search.index = action.value;
            newState.refreshCount = state.refreshCount;
            break;
        case "updateFocusNode":
            (0,helper/* iterateNodes */.K$)(treeState.nodes, (node) => (node.focus = action.value === node.id, true));
            newState.refreshCount = state.refreshCount;
            break;
        case "updatePreviewEdge":
            newState = Object.assign({}, state);
            if (!action.value)
                newState.preview = null;
            else if (((_c = newState.preview) === null || _c === void 0 ? void 0 : _c.id) !== ((_d = action.value) === null || _d === void 0 ? void 0 : _d.id))
                newState.preview = Object.assign({}, action.value);
            (0,helper/* iterateNodes */.K$)(newState[types/* TreeTypes */.G1.Source].nodes, (node) => (node.data.preview !== (newState.preview != null && node.id === newState.preview.sourceHandle.nodeId) && (node.data = Object.assign(Object.assign({}, node.data), { preview: !node.data.preview })), true));
            (0,helper/* iterateNodes */.K$)(newState[types/* TreeTypes */.G1.Destination].nodes, (node) => (node.data.preview !== (newState.preview != null && node.id === newState.preview.targetHandle.nodeId) && (node.data = Object.assign(Object.assign({}, node.data), { preview: !node.data.preview })), true));
            break;
        case "moveNode":
            if (!(node = (0,helper/* locateToNodeById */.mN)(treeState.nodes, action.value.sourceId)))
                return state;
            if (!(target = (0,helper/* locateToNodeById */.mN)(treeState.nodes, action.value.targetId)))
                return state;
            if (action.value.asChild) {
                target.expand = true;
                if ((0,helper/* getNodeForeach */.Fv)(target) !== (0,helper/* getNodeForeach */.Fv)(node.data.parent))
                    newState = deleteNode(newState, node, action.treeType);
                else
                    node.data.parent.children = node.data.parent.children.filter(node => node.id !== action.value.sourceId);
                target.children = (0,helper/* cloneNodes */.Bp)([node], node => node, target.data.depth + 1, target).concat((_e = target.children) !== null && _e !== void 0 ? _e : []);
            }
            else if (target.data.parent) {
                if ((0,helper/* getNodeForeach */.Fv)(target.data.parent) !== (0,helper/* getNodeForeach */.Fv)(node.data.parent))
                    newState = deleteNode(newState, node, action.treeType);
                else
                    node.data.parent.children = node.data.parent.children.filter(node => node.id !== action.value.sourceId);
                target.data.parent.children.splice(target.data.parent.children.indexOf(target) + 1, 0, (0,helper/* cloneNodes */.Bp)([node], node => node, target.data.parent.data.depth + 1, target.data.parent)[0]);
            }
            else {
                treeState.nodes.concat((0,helper/* cloneNodes */.Bp)([node], node => node));
                newState = updateEdges(newState, initEdges([], newState[types/* TreeTypes */.G1.Source].nodes, newState[types/* TreeTypes */.G1.Destination].nodes, true));
            }
            treeState.structureChanged = treeState.structureChanged || (0,helper/* locateToNode */.Y)([node], n => n.data.type >= types/* NodeType */.Z6.Basic) != null;
            treeState.updatedVersion++;
            state.toast((0,utils/* evalTemplate */.Xb)(constants/* TOKENS */.xZ.ElementMoved, { name: (0,helper/* getNodeTitle */.Nb)(node) }));
            break;
        case "nodeContextMenu":
            newState = Object.assign(Object.assign({}, state), { contextMenu: action.value });
            break;
        case "setNodeName":
            if (!(node = (0,helper/* locateToNodeById */.mN)(treeState.nodes, action.value.nodeId)))
                return state;
            nodeTitle = (0,helper/* getNodeTitle */.Nb)(node);
            if (((_f = action.value.name) === null || _f === void 0 ? void 0 : _f.length) > 0 && !(0,helper/* setNodeTitle */.Vh)(node, action.value.name)) {
                state.toast(constants/* TOKENS */.xZ.InvalidNodeName, "error");
                return state;
            }
            if (!(((_g = action.value.name) === null || _g === void 0 ? void 0 : _g.length) > 0)) {
                const children = ((_h = node.data.parent) === null || _h === void 0 ? void 0 : _h.children) || treeState.nodes;
                if (node.data.nodeAction === types/* NodeAction */.t7.New && node.data.type === types/* NodeType */.Z6.Loop) {
                    node.children[0].data = Object.assign(Object.assign({}, node.children[0].data), { foreach: node.data.foreach });
                    children.splice(children.indexOf(node), 1, (0,helper/* cloneNodes */.Bp)(node.children, node => node, node.data.depth, node.data.parent)[0]);
                }
                else if (node.data.nodeAction === types/* NodeAction */.t7.New && node.data.type === types/* NodeType */.Z6.Condition) {
                    node.children[0].data = Object.assign(Object.assign({}, node.children[0].data), { condition: node.data.condition });
                    children.splice(children.indexOf(node), 1, (0,helper/* cloneNodes */.Bp)(node.children, node => node, node.data.depth, node.data.parent)[0]);
                }
                else {
                    newState = deleteNode(newState, node, action.treeType);
                    state.toast(constants/* TOKENS */.xZ.ElementDeleted);
                }
                treeState.updatedVersion++;
            }
            else if (node.data.nodeAction === types/* NodeAction */.t7.New && ((_j = action.value.name) === null || _j === void 0 ? void 0 : _j.length) > 0) {
                treeState.nodes = [...treeState.nodes];
            }
            else {
                newState.refreshCount = state.refreshCount;
            }
            if (((_k = action.value.name) === null || _k === void 0 ? void 0 : _k.length) > 0 && (node.data.nodeAction !== types/* NodeAction */.t7.Rename || action.value.name !== nodeTitle)) {
                treeState.structureChanged = true;
                state.toast(node.data.nodeAction === types/* NodeAction */.t7.New ? (0,utils/* evalTemplate */.Xb)(constants/* TOKENS */.xZ.ElementAdded, { name: action.value.name }) : constants/* TOKENS */.xZ.ElementRenamed);
            }
            node.data = Object.assign(Object.assign({}, node.data), { nodeAction: types/* NodeAction */.t7.None });
            newState = action.value.callback(newState, node, nodeTitle);
            newState.blocking = false;
            break;
        case "setNodeXPath":
            if (!(node = (0,helper/* locateToNodeById */.mN)(treeState.nodes, action.value.nodeId)))
                return state;
            node.data = Object.assign(Object.assign({}, node.data), { nodeAction: types/* NodeAction */.t7.None });
            if (node.data.foreach !== action.value.xpath) {
                const xpath = (0,helper/* xpathCombine */.rF)((0,helper/* getNodeForeach */.Fv)(node.data.parent), action.value.xpath);
                if (!(((_l = action.value.xpath) === null || _l === void 0 ? void 0 : _l.length) > 0) || (0,helper/* locateToNodeByXPath */.e1)(state[types/* TreeTypes */.G1.Source].nodes, xpath)) {
                    (0,helper/* updateNodeForeach */.a7)(node, action.value.xpath);
                    state.toast(constants/* TOKENS */.xZ.XPathChanged);
                }
                else if (((_m = action.value.xpath) === null || _m === void 0 ? void 0 : _m.length) > 0) {
                    state.toast((0,utils/* evalTemplate */.Xb)(constants/* TOKENS */.xZ.NoSourceNodeMatchedXPath, { xpath }), "error");
                }
            }
            else {
                newState.refreshCount = state.refreshCount;
            }
            newState.blocking = false;
            break;
        case "updateModal":
            newState = Object.assign(Object.assign({}, state), { modal: action.value || { type: ModalTypes.None } });
            break;
    }
    return newState;
}
const MappingContext = react.createContext(null);
function MappingEditor(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const [states, dispatch] = react.useReducer(store, props, initStore);
    const [startAITask, getAITaskResult, stopAITask, deleteAITask] = useAITaskStore(state => [state.start, state.getResult, state.stop, state.delete]);
    const data = react.useMemo(() => {
        return {
            [types/* TreeTypes */.G1.Source]: { nodeMap: {} },
            [types/* TreeTypes */.G1.Destination]: { nodeMap: {} },
            animations: { [AnimationTypes.UpdateEdges]: 0, [AnimationTypes.ScrollIntoView]: 0 },
            headers: {},
            variables: {},
            handlePositionCache: {},
            currentState: (treeType) => states[treeType],
            isBlocking: () => false,
            unstableNS: (0,helper/* isNSUnstable */.u1)(states[types/* TreeTypes */.G1.Source].nodes || []),
            scrollSourceToLeft: true
        };
    }, []);
    data.currentState = (treeType) => states[treeType];
    data.isBlocking = () => states.blocking;
    const setState = react.useCallback((updater) => {
        dispatch({ treeType: types/* TreeTypes */.G1.Source, key: "setState", value: updater });
    }, [dispatch]);
    const validateMapping = react.useCallback(() => props.disabled || !states[types/* TreeTypes */.G1.Destination].nodes.some(root => !(0,helper/* validateNode */.T2)(root)), [props.disabled, states[types/* TreeTypes */.G1.Destination]]);
    // Mapping editor API.
    if (props.apiRef) {
        props.apiRef.getSource = () => (0,helper/* toElementNodes */.P3)(states[types/* TreeTypes */.G1.Source].nodes)[0];
        props.apiRef.getMapping = () => (0,helper/* toElementNodes */.P3)(states[types/* TreeTypes */.G1.Destination].nodes)[0];
        props.apiRef.getSourceSample = () => (0,helper/* toSampleXML */.Xu)(states[types/* TreeTypes */.G1.Source].nodes[0]);
        props.apiRef.useXMLStreaming = () => states.xmlStreaming;
        props.apiRef.isMappingChanged = (sourceOnly = false) => {
            return !props.disabled && (sourceOnly ? states[types/* TreeTypes */.G1.Source].structureChanged : states.mappingChanged || states[types/* TreeTypes */.G1.Source].structureChanged || states[types/* TreeTypes */.G1.Destination].structureChanged);
        };
        props.apiRef.resetChanges = () => setState(state => {
            state.mappingChanged = state[types/* TreeTypes */.G1.Source].structureChanged = state[types/* TreeTypes */.G1.Destination].structureChanged = false;
            return Object.assign({}, state);
        });
        props.apiRef.getRoot = (treeType) => states[treeType].nodes[0];
        props.apiRef.getHeaders = () => Object.keys(data.headers);
        props.apiRef.validateMapping = () => validateMapping();
    }
    const getTreeAction = react.useCallback((treeType) => { var _a; return (_a = props[treeType].action) !== null && _a !== void 0 ? _a : types/* TreeActions */.aI.Mapping; }, [props.source.action, props.destination.action]);
    const startAnimationFrame = react.useCallback((animationType, callback) => {
        stopAnimationFrame(animationType);
        data.animations[animationType] = requestAnimationFrame(callback);
    }, [data]);
    const stopAnimationFrame = react.useCallback((animationType) => {
        data.animations[animationType] && cancelAnimationFrame(data.animations[animationType]);
        delete data.animations[animationType];
    }, [data]);
    const initHeadersAndVariables = react.useCallback((node) => {
        var _a, _b, _c, _d, _e, _f, _g;
        if (node.data.type === types/* NodeType */.Z6.Header) {
            data.headers[node.data.header] = node.data.value;
        }
        else if (node.data.type === types/* NodeType */.Z6.Variable) {
            data.variables[node.data.variable] = node.data.value;
        }
        if (((_a = node.data.trackedHeader) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            data.headers[node.data.trackedHeader] = node.data.value;
        }
        if (((_c = (_b = node.data.value) === null || _b === void 0 ? void 0 : _b.header) === null || _c === void 0 ? void 0 : _c.length) > 0) {
            data.headers[node.data.value.header] = data.headers[node.data.value.header] || "";
        }
        else if (((_e = (_d = node.data.value) === null || _d === void 0 ? void 0 : _d.custom) === null || _e === void 0 ? void 0 : _e.length) > 0) {
            Array.from(node.data.value.custom.matchAll(new RegExp("_message\\.header:([^'\"|\\]\\s]+)", "g"))).forEach((match) => {
                !!match[1] && (data.headers[match[1]] = data.headers[match[1]] || "");
            });
            Array.from(node.data.value.custom.matchAll(new RegExp("_map\\.([a-zA-Z0-9_-]+)", "g"))).forEach((match) => {
                !!match[1] && (data.variables[match[1]] = data.variables[match[1]] || "");
            });
        }
        else if (((_g = (_f = node.data.value) === null || _f === void 0 ? void 0 : _f.script) === null || _g === void 0 ? void 0 : _g.length) > 0) {
            Array.from(node.data.value.script.matchAll(new RegExp("_message\\.header:([^'\"|\\]\\s]+)", "g"))).forEach((match) => {
                !!match[1] && (data.headers[match[1]] = data.headers[match[1]] || "");
            });
            Array.from(node.data.value.script.matchAll(new RegExp("_map.([a-zA-Z0-9_-]+)", "g"))).forEach((match) => {
                !!match[1] && (data.variables[match[1]] = data.variables[match[1]] || "");
            });
        }
    }, [data]);
    const getHandlePosition = react.useCallback((rawHandleInfo, svgRect) => {
        const rawHandleId = (0,helper/* getHandleId */.q_)(rawHandleInfo);
        if (data.handlePositionCache[rawHandleId] != null)
            return data.handlePositionCache[rawHandleId];
        let node = data[rawHandleInfo.treeType].nodeMap[(0,helper/* getNodeKey */.EA)(rawHandleInfo.nodeId)];
        if (node == null)
            return null;
        if (!states.showAttributes && node.data.type === types/* NodeType */.Z6.Attribute)
            node = node.data.parent;
        node = (0,helper/* getFallbackNode */.rH)(node);
        if (node == null)
            return null;
        const handleInfo = Object.assign(Object.assign({}, rawHandleInfo), { nodeId: node.id, index: node.id === rawHandleInfo.nodeId ? rawHandleInfo.index : types/* HandleIndexer */.US.Default });
        const handleId = (0,helper/* getHandleId */.q_)(handleInfo);
        if (data.handlePositionCache[handleId] != null)
            return data.handlePositionCache[handleId];
        const handle = document.getElementById(handleId);
        const rect = handle != null ? handle.getBoundingClientRect() : { x: svgRect.x + (handleInfo.treeType === types/* TreeTypes */.G1.Destination ? svgRect.width : 0), y: svgRect.y + svgRect.height + svgRect.height, height: 32, width: 32 };
        return data.handlePositionCache[rawHandleId] = data.handlePositionCache[handleId] = { x: rect.x - svgRect.x, y: rect.y - svgRect.y, height: rect.height, width: rect.width, handleInfo: handle == null ? rawHandleInfo : handleInfo, handleId: handle == null ? `${handleInfo.treeType}-handle-fake` : handleId };
    }, [data, states.showAttributes]);
    const gotoNode = react.useCallback((treeType, nodeId, focus = false) => {
        const tree = data[treeType].element;
        if (!tree)
            return;
        const node = (0,helper/* locateToNodeById */.mN)(data.currentState(treeType).nodes, nodeId);
        if (!node)
            return null;
        node.data.parent != null && !(0,helper/* isNodeVisible */.l)(node) && dispatch({ treeType, key: "nodeExpand", value: node.data.parent.id });
        const scrollToNode = (node, retryCount) => {
            const element = tree.querySelector(`.mapping-node-container[data-node-id='${node.id}']`);
            if (!element) {
                let nodeCount = 0;
                (0,helper/* iterateNodes */.K$)(data.currentState(treeType).nodes, (node) => (nodeCount++, node.id !== nodeId), states.showAttributes);
                data[treeType].element.scrollTo({ top: data[treeType].element.querySelector(".mapping-tree-node").clientHeight * nodeCount + data[treeType].element.clientHeight >> 1, behavior: "instant" });
                retryCount++ < 100 && startAnimationFrame(AnimationTypes.ScrollIntoView, () => scrollToNode(node, retryCount));
                return false;
            }
            const rect = element.getBoundingClientRect();
            const viewpoint = data[treeType].element.getBoundingClientRect();
            if (rect.y < viewpoint.y + 10 || rect.bottom + 10 > viewpoint.bottom) {
                const top = Math.max(data[treeType].element.scrollTop - (viewpoint.top - rect.top + rect.height), 0);
                const left = Math.max(data[treeType].element.scrollLeft - (viewpoint.left - rect.left + (viewpoint.width >> 2)), treeType === types/* TreeTypes */.G1.Source ? -data[treeType].element.querySelector(".mapping-tree-root").clientWidth : 0);
                data[treeType].element.scrollTo({ top, left, behavior: "smooth" });
            }
            else {
                element.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
            }
            focus && node.id === nodeId && dispatch({ treeType, key: "updateFocusNode", value: node.id });
            data.scrollSourceToLeft = treeType === types/* TreeTypes */.G1.Source && node.data.depth <= 3;
            return true;
        };
        startAnimationFrame(AnimationTypes.ScrollIntoView, () => scrollToNode(node, 0));
    }, [dispatch, data, startAnimationFrame]);
    const gotoMatchedNode = react.useCallback((treeType, index) => {
        if (index < 0)
            return;
        const searchNode = (node, count) => {
            if (count.value <= 0)
                return null;
            if (node.data.matched)
                --count.value;
            if (count.value == 0) {
                return node;
            }
            return (node.children || []).map(child => searchNode(child, count)).find(node => node != null);
        };
        const node = searchNode(data.currentState(treeType).nodes[0], { value: index + 1 });
        node != null && gotoNode(treeType, node.id, true);
    }, [data, gotoNode]);
    const onNodeExpand = react.useCallback((treeType, nodeId, event) => {
        if (data.isBlocking())
            return true;
        event.stopPropagation();
        dispatch({ treeType, key: "nodeExpand", value: nodeId });
    }, [dispatch, data]);
    const onNodeCollapse = react.useCallback((treeType, nodeId, event) => {
        if (data.isBlocking())
            return true;
        event.stopPropagation();
        dispatch({ treeType, key: "nodeCollapse", value: nodeId });
    }, [dispatch, data]);
    const onNodeDoubleClick = react.useCallback((treeType, nodeId, event) => {
        if (data.isBlocking())
            return true;
        event.stopPropagation();
        dispatch({ treeType, key: "nodeToggle", value: nodeId });
    }, [dispatch, data]);
    const onNodeContextMenu = react.useCallback((treeType, nodeId, event) => {
        var _a, _b;
        if (data.isBlocking())
            return true;
        event.preventDefault();
        const node = (0,helper/* locateToNodeById */.mN)(data.currentState(treeType).nodes, nodeId);
        if (!node)
            return false;
        const canPaste = ((_a = data.copyNode) === null || _a === void 0 ? void 0 : _a.treeType) === treeType || ((_b = data.cutNode) === null || _b === void 0 ? void 0 : _b.treeType) === treeType;
        dispatch({ treeType, key: "nodeContextMenu", value: { x: event.clientX, y: event.clientY, treeType, treeAction: getTreeAction(treeType), node, canPaste } });
    }, [dispatch, getTreeAction, data, props.source, props.destination]);
    const onNodeClick = react.useCallback((treeType, nodeId, event) => {
        if (data.isBlocking())
            return true;
        event.stopPropagation();
        const isActive = event.currentTarget.classList.contains("active");
        setState((state) => {
            if (isActive)
                return state.contextMenu != null ? Object.assign(Object.assign({}, state), { contextMenu: null }) : state;
            state.contextMenu = null;
            const isSource = treeType === types/* TreeTypes */.G1.Source;
            const sourceIds = isSource ? [nodeId] : [];
            const targetIds = isSource ? [] : [nodeId];
            const activeEdgeIds = [];
            state.edges = state.edges.map(edge => {
                edge.active = (isSource ? edge.realSource.nodeId : edge.realTarget.nodeId) === nodeId;
                if (edge.active) {
                    activeEdgeIds.push(edge.id);
                    if (isSource)
                        targetIds.push(edge.targetHandle.nodeId);
                    else
                        sourceIds.push(edge.sourceHandle.nodeId);
                }
                return edge;
            });
            const edges = activeEdgeIds.some(id => id.length > 0) ? state.edges.map(edge => (edge.active = activeEdgeIds.includes(edge.id), edge)) : state.edges;
            (0,helper/* iterateNodes */.K$)(state[types/* TreeTypes */.G1.Source].nodes, (node) => (node.focus = false, node.active = sourceIds.includes(node.id), true));
            (0,helper/* iterateNodes */.K$)(state[types/* TreeTypes */.G1.Destination].nodes, (node) => (node.focus = false, node.active = targetIds.includes(node.id), true));
            activeEdgeIds.length > 0 && gotoNode(isSource ? types/* TreeTypes */.G1.Destination : types/* TreeTypes */.G1.Source, isSource ? targetIds[(targetIds.length - 1) >> 1] : sourceIds[(sourceIds.length - 1) >> 1]);
            return updateEdges(state, edges);
        });
    }, [setState, data, gotoNode]);
    const onExpandAll = react.useCallback((event) => {
        if (data.isBlocking())
            return true;
        const treeType = (0,helper/* getEventTreeType */.HP)(event) === types/* TreeTypes */.G1.Source ? types/* TreeTypes */.G1.Source : types/* TreeTypes */.G1.Destination;
        dispatch({ treeType, key: "expandAll" });
        data.scrollSourceToLeft = treeType === types/* TreeTypes */.G1.Source;
    }, [dispatch, data]);
    const onCollapseAll = react.useCallback((event) => {
        if (data.isBlocking())
            return true;
        const treeType = (0,helper/* getEventTreeType */.HP)(event) === types/* TreeTypes */.G1.Source ? types/* TreeTypes */.G1.Source : types/* TreeTypes */.G1.Destination;
        dispatch({ treeType, key: "collapseAll" });
        data.scrollSourceToLeft = treeType === types/* TreeTypes */.G1.Source;
    }, [dispatch, data]);
    const handleUpdateEdges = react.useCallback(() => {
        startAnimationFrame(AnimationTypes.UpdateEdges, () => {
            setState((state) => {
                const svgRect = data.svg.getBoundingClientRect();
                data.handlePositionCache = {};
                const edges = state.edges.map((edge) => {
                    edge.id = "";
                    edge.realSource = edge.sourceHandle;
                    edge.realTarget = edge.targetHandle;
                    edge.source = edge.target = null;
                    edge.loading = false;
                    const source = getHandlePosition(edge.sourceHandle, svgRect);
                    if (source == null)
                        return edge;
                    const target = getHandlePosition(edge.targetHandle, svgRect);
                    if (target == null)
                        return edge;
                    edge.realSource = source.handleInfo;
                    edge.realTarget = target.handleInfo;
                    edge.id = `edge-${source.handleId}-${target.handleId}`;
                    edge.source = { x: source.x + source.width, y: source.y + source.height / 2 };
                    edge.target = { x: target.x, y: target.y + target.height / 2 };
                    return edge;
                });
                return updateEdges(state, edges);
            });
        });
    }, [setState, startAnimationFrame, data, getHandlePosition]);
    const handleScroll = react.useCallback((event) => {
        var _a, _b, _c;
        const scrollTop = ((_a = event.target) === null || _a === void 0 ? void 0 : _a.scrollTop) || 0;
        const maximumHeight = scrollTop + ((_c = (_b = event.target) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect()) === null || _c === void 0 ? void 0 : _c.height) + 100;
        const treeType = (0,helper/* getEventTreeType */.HP)(event) === types/* TreeTypes */.G1.Source ? types/* TreeTypes */.G1.Source : types/* TreeTypes */.G1.Destination;
        const pointAttrName = treeType === types/* TreeTypes */.G1.Source ? "source" : "target";
        const fakeHandlePrefix = `-${treeType}-handle-fake`;
        setState(state => {
            state = Object.assign(Object.assign({}, state), { [treeType]: Object.assign({}, state[treeType]), refreshCount: state.refreshCount + 1 });
            const distance = scrollTop - state[treeType].scroll;
            state[treeType].scroll = scrollTop;
            if (scrollTop < 64) { // Node row height.
                state[treeType].breadcrumb = [];
            }
            state.edges = state.edges.map(edge => {
                if (edge.id.indexOf(fakeHandlePrefix) > 0) {
                    return edge;
                }
                edge[pointAttrName].y += distance;
                return Object.assign(Object.assign({}, edge), { loading: edge[pointAttrName].y < maximumHeight });
            });
            handleUpdateEdges();
            return state;
        });
    }, [setState, handleUpdateEdges]);
    const handleResizing = react.useCallback(() => {
        var _a;
        const rect = (_a = data.svg) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        if (!rect || rect.width === 0 || rect.height === 0)
            return false;
        handleUpdateEdges();
    }, [data, handleUpdateEdges]);
    const updateSourceScrollBar = react.useCallback((element) => {
        data[types/* TreeTypes */.G1.Source].element = element;
        if (!element)
            return;
        const toLeft = () => {
            element.scrollLeft = -element.querySelector(".mapping-tree-root").clientWidth;
        };
        toLeft();
        requestAnimationFrame(toLeft);
        setTimeout(toLeft, 100);
    }, [data]);
    const updateDestinationTree = react.useCallback((element) => {
        data[types/* TreeTypes */.G1.Destination].element = element;
    }, [data]);
    const updateBreadcrumb = react.useCallback((treeType, nodeId) => {
        dispatch({ treeType, key: "updateBreadcrumb", value: nodeId });
    }, [dispatch, data]);
    const updateSearchText = react.useCallback((treeType, searchText) => {
        dispatch({ treeType, key: "updateSearchText", value: searchText });
    }, [dispatch]);
    const updateSearchIndex = react.useCallback((treeType, index) => {
        dispatch({ treeType, key: "updateSearchIndex", value: index });
        gotoMatchedNode(treeType, index);
    }, [dispatch, gotoMatchedNode]);
    const toggleCompactMode = react.useCallback(() => {
        setState(state => {
            state = Object.assign(Object.assign({}, state), { compactMode: !state.compactMode });
            (0,helper/* setStorageValue */.Fg)(props.connectorInfo, "compactMode", state.compactMode ? "true" : "false");
            return state;
        });
    }, [props.connectorInfo, setState]);
    const toggleExpandAttributes = react.useCallback(() => {
        setState(state => {
            state = Object.assign(Object.assign({}, state), { showAttributes: !state.showAttributes });
            (0,helper/* setStorageValue */.Fg)(props.connectorInfo, "expandattributes", state.showAttributes ? "true" : "false");
            return state;
        });
    }, [props.connectorInfo, setState]);
    const refreshMapping = react.useCallback(() => __awaiter(this, void 0, void 0, function* () {
        const destination = yield props.refreshMapping(states[types/* TreeTypes */.G1.Destination].nodes[0]);
        if (destination != null) {
            setState((state) => (Object.assign(Object.assign({}, state), { [types/* TreeTypes */.G1.Destination]: Object.assign(Object.assign({}, state[types/* TreeTypes */.G1.Destination]), { nodes: [destination], updatedVersion: state[types/* TreeTypes */.G1.Destination].updatedVersion + 1, structureChanged: true }) })));
            props.toast(constants/* TOKENS */.xZ.MappingRefreshed);
        }
    }), [props.refreshMapping, props.toast, states[types/* TreeTypes */.G1.Destination].nodes, setState]);
    const saveMapping = react.useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!validateMapping()) {
            props.toast(constants/* TOKENS */.xZ.MappingIsInvalid, "error");
        }
        else {
            const error = validateMapping() ? yield props.saveMapping() : constants/* TOKENS */.xZ.MappingIsInvalid;
            if ((error === null || error === void 0 ? void 0 : error.length) > 0)
                props.toast(error, "error");
            else
                props.toast(constants/* TOKENS */.xZ.MappingSaved);
        }
    }), [props.saveMapping, props.toast, setState, validateMapping]);
    // Mapping context related.
    const getNodeName = react.useCallback((treeType, node) => {
        const title = (0,helper/* getNodeTitle */.Nb)(node);
        if (!title)
            return title;
        const searchState = data.currentState(treeType).search;
        if (searchState.matchedCount > 0 && title.length > 0)
            return (0,shared_utils/* highlightText */.Sw)(title, new RegExp((0,utils/* escapeRegExp */.Nt)(searchState.searchText), "ig"));
        return title;
    }, [data]);
    const setNodeName = react.useCallback((treeType, nodeId, name) => {
        dispatch({
            treeType, key: "setNodeName", value: {
                nodeId, name, callback: (state, node, originalName) => {
                    if ((name === null || name === void 0 ? void 0 : name.length) > 0) {
                        if (treeType === types/* TreeTypes */.G1.Destination)
                            initHeadersAndVariables(node);
                        else if (node.data.type >= types/* NodeType */.Z6.Basic && originalName !== name) {
                            if (node.data.type === types/* NodeType */.Z6.Attribute)
                                data.unstableNS = (0,helper/* isNSUnstable */.u1)(state[types/* TreeTypes */.G1.Source].nodes);
                            const originalXPath = (0,helper/* getNodeXPath */.ok)(Object.assign(Object.assign({}, node), { name: originalName }));
                            const newXPath = (0,helper/* getNodeXPath */.ok)(node);
                            if (originalXPath != newXPath) {
                                if (state.edges.filter(edge => edge.sourceHandle.nodeId === node.id).map(edge => {
                                    const target = (0,helper/* locateToNodeById */.mN)(state[types/* TreeTypes */.G1.Destination].nodes, edge.targetHandle.nodeId);
                                    return target != null && (0,helper/* updateSourceNodeXPath */.IV)(target, originalXPath, newXPath);
                                }).some(changed => changed)) {
                                    state[types/* TreeTypes */.G1.Destination].updatedVersion++;
                                }
                            }
                        }
                    }
                    return state;
                }
            }
        });
    }, [dispatch, initHeadersAndVariables, data]);
    const verifyDropping = react.useCallback((treeType, sourceId, targetId) => {
        if (sourceId === targetId)
            return false;
        const node = (0,helper/* locateToNodeById */.mN)(data.currentState(treeType).nodes, targetId);
        if (!node)
            return false;
        return !(0,helper/* iterateParents */.QE)(node, (parent) => parent.id === sourceId);
    }, [data]);
    const updatePreviewEdge = react.useCallback((sourceHandle, targetHandle) => {
        if (!sourceHandle || !targetHandle) {
            dispatch({ treeType: types/* TreeTypes */.G1.Source, key: "updatePreviewEdge", value: null });
            return;
        }
        const svgRect = data.svg.getBoundingClientRect();
        const source = getHandlePosition(sourceHandle, svgRect);
        if (source == null)
            return true;
        const target = getHandlePosition(targetHandle, svgRect);
        if (target == null)
            return true;
        const id = `edge-${source.handleId}-${target.handleId}`;
        const edge = { id, sourceHandle: source.handleInfo, targetHandle: target.handleInfo, source: { x: source.x + source.width, y: source.y + source.height / 2 }, target: { x: target.x, y: target.y + target.height / 2 }, styles: { opacity: 0.25 }, active: true };
        dispatch({ treeType: types/* TreeTypes */.G1.Source, key: "updatePreviewEdge", value: edge });
    }, [dispatch, getHandlePosition]);
    const moveNode = react.useCallback((treeType, sourceId, targetId, asChild) => {
        dispatch({ treeType, key: "moveNode", value: { sourceId, targetId, asChild } });
    }, [dispatch, data]);
    const addMapping = react.useCallback((sourceHandle, targetHandle) => {
        setState((state) => {
            var _a, _b;
            var _c, _d;
            const source = (0,helper/* locateToNodeById */.mN)(state[sourceHandle.treeType].nodes, sourceHandle.nodeId);
            if (!source)
                return state;
            const target = (0,helper/* locateToNodeById */.mN)(state[targetHandle.treeType].nodes, targetHandle.nodeId);
            if (!target || target.data.type === types/* NodeType */.Z6.Condition || target.data.type === types/* NodeType */.Z6.Script)
                return state;
            const isForeach = (0,helper/* isParentNode */.p4)(source) || (0,helper/* isParentNode */.p4)(target);
            const xpath = (0,helper/* getRelativeXPath */.er)(source, isForeach ? target.data.parent : target, data.unstableNS);
            if (!xpath)
                return state;
            if (state.xmlStreaming && xpath.indexOf("..") > -1) {
                state.xmlStreaming = false;
                state.toast(constants/* TOKENS */.xZ.XMLStreamingIsNotAvailable, "error");
            }
            if (isForeach) {
                if (target.data.foreach === xpath)
                    return state;
                (0,helper/* updateNodeForeach */.a7)(target, xpath);
            }
            else if (targetHandle.index === types/* HandleIndexer */.US.Default) {
                target.data.value = { xpath };
                (_c = target.data).invalid || (_c.invalid = !(((_a = (0,helper/* getNodeForeach */.Fv)(target)) === null || _a === void 0 ? void 0 : _a.length) > 0));
                initHeadersAndVariables(target);
            }
            else {
                target.data.action.mismatch.value = { xpath };
                (_d = target.data).invalid || (_d.invalid = !(((_b = (0,helper/* getNodeForeach */.Fv)(target)) === null || _b === void 0 ? void 0 : _b.length) > 0));
            }
            target.data = Object.assign({}, target.data);
            state.edges = initEdges(state.edges.filter(edge => edge.targetHandle.nodeId !== targetHandle.nodeId), state[types/* TreeTypes */.G1.Source].nodes, [target], false);
            state.edges.forEach(edge => edge.active = edge.sourceHandle.nodeId === sourceHandle.nodeId && edge.targetHandle.nodeId === targetHandle.nodeId && edge.targetHandle.index === targetHandle.index);
            state.refreshCount++;
            state.mappingChanged = true;
            state.toast((0,utils/* evalTemplate */.Xb)(constants/* TOKENS */.xZ.MappedTo, { source: source.name, destination: target.name }));
            return updateEdges(state, state.edges);
        });
        handleUpdateEdges();
    }, [setState, handleUpdateEdges, initHeadersAndVariables, data.unstableNS]);
    const handleRemoveMappings = react.useCallback((state, handleInfo, includeFallback) => {
        const node = (0,helper/* locateToNodeById */.mN)(state[handleInfo.treeType].nodes, handleInfo.nodeId);
        if (!node)
            return state;
        const isSource = handleInfo.treeType === types/* TreeTypes */.G1.Source;
        const removedEdges = state.edges.filter(edge => isSource && (includeFallback ? edge.realSource.nodeId : edge.sourceHandle.nodeId) === handleInfo.nodeId || !isSource && (includeFallback ? edge.realTarget.nodeId : edge.targetHandle.nodeId) === handleInfo.nodeId && handleInfo.index === (edge.targetHandle.nodeId !== edge.realTarget.nodeId ? types/* HandleIndexer */.US.Default : edge.targetHandle.index));
        if (removedEdges.length === 0)
            return state;
        const targets = [];
        Array.from(removedEdges.reduce((ids, edge) => (ids.add(edge.targetHandle.nodeId), ids), new Set()).values()).forEach(nodeId => {
            const target = (0,helper/* locateToNodeById */.mN)(state[types/* TreeTypes */.G1.Destination].nodes, nodeId);
            target && targets.push(target);
        });
        if (targets.length === 0)
            return state;
        targets.forEach(target => {
            var _a, _b, _c;
            (0,helper/* clearNodeReferences */.aC)(target, isSource || target.id !== handleInfo.nodeId || ((_a = target.children) === null || _a === void 0 ? void 0 : _a.length) > 0 || handleInfo.index === types/* HandleIndexer */.US.Default && !((_c = (_b = node.data.action) === null || _b === void 0 ? void 0 : _b.mismatch) === null || _c === void 0 ? void 0 : _c.value) ? [types/* HandleIndexer */.US.Default, types/* HandleIndexer */.US.Mismatch] : [handleInfo.index]);
        });
        const edges = state.edges.filter(edge => includeFallback ? !removedEdges.some(removed => removed.id === edge.id) : !removedEdges.includes(edge));
        state.refreshCount++;
        state.mappingChanged = true;
        state.toast((0,utils/* evalTemplate */.Xb)(constants/* TOKENS */.xZ.MappedRemoved, { source: Array.from(removedEdges.reduce((ids, edge) => (ids.add(edge.sourceHandle.nodeId), ids), new Set()).values()).map(nodeId => (0,helper/* locateToNodeById */.mN)(state[types/* TreeTypes */.G1.Source].nodes, nodeId).name).join(", "), destination: targets.map(n => n.name).join(",") }));
        return updateEdges(state, edges);
    }, []);
    const removeMappings = react.useCallback((handleInfo) => {
        setState((state) => handleRemoveMappings(state, handleInfo, true));
    }, [setState, handleRemoveMappings]);
    const setNodeXPath = react.useCallback((treeType, nodeId, xpath) => {
        dispatch({ treeType, key: "setNodeXPath", value: { nodeId, xpath } });
    }, [dispatch]);
    const updateModal = react.useCallback((modal) => dispatch({ treeType: types/* TreeTypes */.G1.Source, key: "updateModal", value: modal }), [dispatch]);
    const hideModal = react.useCallback(() => updateModal(null), [updateModal]);
    const handleAIMappingResult = react.useCallback((mapping) => {
        setState((state) => {
            var _a, _b, _c, _d, _e;
            const currentNode = (_a = state.aiTaskContext) === null || _a === void 0 ? void 0 : _a.node;
            const eventType = ((_b = state.aiTaskContext) === null || _b === void 0 ? void 0 : _b.eventType) || types/* EventTypes */.wf.AIMapNodeAndChildNodes;
            state = Object.assign(Object.assign({}, state), { aiTaskContext: null, blocking: false });
            if (!currentNode || !((_c = mapping === null || mapping === void 0 ? void 0 : mapping.mappings) === null || _c === void 0 ? void 0 : _c.length))
                return state;
            const nodeXPath = (0,helper/* getNodeXPath */.ok)(currentNode);
            const childXPathPrefix = nodeXPath + "/";
            const mappings = mapping.mappings.filter(Boolean).filter(mapping => mapping.src && mapping.dest && (mapping.dest.startsWith(childXPathPrefix) || mapping.dest === nodeXPath));
            if (!mappings.length)
                return state;
            const children = currentNode.children;
            if (eventType !== types/* EventTypes */.wf.AIMapNode && (children === null || children === void 0 ? void 0 : children.length) && (0,helper/* isParentNode */.p4)(currentNode)) {
                currentNode.children = currentNode.children.flatMap(child => (0,helper/* ungroupMapping */.pe)(child, currentNode));
            }
            if (eventType != types/* EventTypes */.wf.AIMapChildNodes)
                currentNode.data = Object.assign(Object.assign({}, currentNode.data), { foreach: (eventType === types/* EventTypes */.wf.AIMapNode && (0,helper/* isParentNode */.p4)(currentNode) ? currentNode.data.foreach : null), value: null, condition: null });
            eventType != types/* EventTypes */.wf.AIMapNode && (0,helper/* iterateNodes */.K$)([...((_d = currentNode.children) !== null && _d !== void 0 ? _d : []), ...((_e = currentNode.attributes) !== null && _e !== void 0 ? _e : [])], node => {
                node.data = Object.assign(Object.assign({}, node.data), { foreach: null, value: null, condition: null });
                return true;
            });
            let mappingChanged = false;
            if (!(0,helper/* getNodeForeach */.Fv)(eventType === types/* EventTypes */.wf.AIMapChildNodes ? currentNode : currentNode.data.parent)) {
                const srcLCXPath = (0,helper/* getLongestCommonPrefix */.SD)(mapping.mappings.map(m => m.src)) || `/${state[types/* TreeTypes */.G1.Source].nodes[0].name}`;
                const destLCXPath = (0,helper/* getLongestCommonPrefix */.SD)(mapping.mappings.map(m => m.dest));
                let rootNode = destLCXPath ? (0,helper/* locateToNodeByXPath */.e1)(state[types/* TreeTypes */.G1.Destination].nodes, destLCXPath) : currentNode;
                if (rootNode && !(0,helper/* isParentNode */.p4)(rootNode))
                    rootNode = rootNode.data.parent;
                if (rootNode) {
                    rootNode.data = Object.assign({}, rootNode.data);
                    (0,helper/* updateNodeForeach */.a7)(rootNode, srcLCXPath);
                    mappingChanged = true;
                }
            }
            mappings.forEach(mapping => {
                var _a;
                const destNode = (0,helper/* locateToNodeByXPath */.e1)(state[types/* TreeTypes */.G1.Destination].nodes, mapping.dest);
                if (!destNode)
                    return true;
                if (eventType === types/* EventTypes */.wf.AIMapNode && currentNode.id !== destNode.id)
                    return true;
                if (eventType === types/* EventTypes */.wf.AIMapChildNodes && currentNode.id === destNode.id)
                    return true;
                const srcNode = (0,helper/* locateToNodeByXPath */.e1)(state[types/* TreeTypes */.G1.Source].nodes, mapping.src);
                if (!srcNode)
                    return true;
                const isFolder = (0,helper/* isParentNode */.p4)(destNode);
                const oldVal = isFolder ? destNode.data.foreach : (_a = destNode.data.value) === null || _a === void 0 ? void 0 : _a.xpath;
                const xpath = destNode.data.parent ? (0,helper/* getRelativeXPath */.er)(srcNode, destNode.data.parent, data.unstableNS, true, mapping.src) : mapping.src;
                if (isFolder && eventType === types/* EventTypes */.wf.AIMapNode)
                    (0,helper/* updateNodeForeach */.a7)(destNode, xpath);
                else if (isFolder)
                    destNode.data.foreach = xpath;
                else
                    destNode.data.value = { xpath };
                mappingChanged = mappingChanged || oldVal !== xpath;
            });
            state.toast(constants/* TOKENS */.xZ.AutoMapSuccess);
            if (mappingChanged) {
                if (currentNode.data.parent != null) {
                    const pos = currentNode.data.parent.children.indexOf(currentNode);
                    currentNode.data.parent.children.splice(pos, 1, Object.assign({}, currentNode));
                    state[types/* TreeTypes */.G1.Destination].nodes = state[types/* TreeTypes */.G1.Destination].nodes.slice();
                }
                else {
                    state[types/* TreeTypes */.G1.Destination].nodes = [currentNode];
                }
                state = Object.assign(Object.assign({}, updateEdges(state, initEdges([], state[types/* TreeTypes */.G1.Source].nodes, state[types/* TreeTypes */.G1.Destination].nodes, true))), { mappingChanged: true });
                handleUpdateEdges();
            }
            else {
                currentNode.children = children;
            }
            return state;
        });
    }, [setState, handleUpdateEdges, data.unstableNS]);
    const startAIAssistedMapping = react.useCallback((node, eventType) => {
        const aiTaskContext = { node, eventType, taskKey: "", textIndex: 0 };
        let root = (0,helper/* ungroupMapping */.pe)(node)[0];
        (0,helper/* iterateParents */.QE)(node, (parent) => {
            if (parent.data.type == types/* NodeType */.Z6.Basic && parent.name) {
                root = { id: (0,helper/* genNodeId */.K2)(), component: parent.component, name: parent.name, expand: true, data: Object.assign(Object.assign({}, types/* DefaultMappingNodeData */.G6), { type: types/* NodeType */.Z6.Basic, depth: parent.data.depth - 1, parent: null }), children: [root] };
            }
            return false;
        });
        const src = (0,helper/* toSampleXML */.Xu)(states[types/* TreeTypes */.G1.Source].nodes[0]);
        const dest = (0,helper/* toSampleXML */.Xu)(root);
        aiTaskContext.taskKey = startAITask("xmlmap-mapping", { src, dest }, "xmlmap", props.connectorInfo.workspaceId, props.connectorInfo.connectorId);
        setState((state) => (Object.assign(Object.assign({}, state), { aiTaskContext, blocking: true })));
    }, [states[types/* TreeTypes */.G1.Source].nodes[0], startAITask, setState, handleAIMappingResult]);
    const applyAIAssistedMapping = react.useCallback(() => __awaiter(this, void 0, void 0, function* () {
        var _j;
        if (!((_j = states.aiTaskContext) === null || _j === void 0 ? void 0 : _j.taskKey))
            return;
        const result = yield getAITaskResult(states.aiTaskContext.taskKey);
        if ((result === null || result === void 0 ? void 0 : result.status) === "Complete") {
            try {
                let mapping = { mappings: [] };
                if (typeof result.output === "string")
                    mapping = JSON.parse(result.output);
                else if (Array.isArray(result.output))
                    mapping = JSON.parse(result.output[0]);
                handleAIMappingResult(mapping);
            }
            catch (ex) {
                states.toast((0,utils/* FormatString */.FJ)(constants/* TOKENS */.xZ.AutoMapFailed, ex), "error");
                setState((state) => (Object.assign(Object.assign({}, state), { aiTaskContext: null, blocking: false })));
            }
            deleteAITask(states.aiTaskContext.taskKey);
        }
        else if ((result === null || result === void 0 ? void 0 : result.status) === "Failed") {
            states.toast((0,utils/* FormatString */.FJ)(constants/* TOKENS */.xZ.AutoMapFailed, result.reason), "error");
            setState((state) => (Object.assign(Object.assign({}, state), { aiTaskContext: null, blocking: false })));
            deleteAITask(states.aiTaskContext.taskKey);
        }
        else {
            states.aiTaskContext.textIndex++;
            setState((state) => (Object.assign({}, state)));
        }
    }), [states.aiTaskContext, getAITaskResult, deleteAITask, handleAIMappingResult, setState, states.toast]);
    const stopAIAssistedMapping = react.useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!states.aiTaskContext)
            return;
        yield stopAITask(states.aiTaskContext.taskKey);
        deleteAITask(states.aiTaskContext.taskKey);
        states.toast(constants/* TOKENS */.xZ.AutoMapStopped, "error");
        setState((state) => (Object.assign(Object.assign({}, state), { aiTaskContext: null, blocking: false })));
    }), [states[types/* TreeTypes */.G1.Source].nodes, states[types/* TreeTypes */.G1.Destination].nodes, states.aiTaskContext, stopAITask, deleteAITask, setState]);
    const aiAssistedMapping = react.useCallback((destination, eventType) => {
        const node = destination || states[types/* TreeTypes */.G1.Destination].nodes[0];
        if (!node)
            return;
        eventType = eventType || types/* EventTypes */.wf.AIMapNodeAndChildNodes;
        if ((0,helper/* iterateNodes */.K$)([node], (node) => { var _a; return (node.data.type == types/* NodeType */.Z6.Basic && !node.data.foreach && !node.data.condition && !((_a = node.data.value) === null || _a === void 0 ? void 0 : _a.xpath)); }, false)) {
            updateModal({
                type: ModalTypes.OverrideExistingMapping,
                props: {
                    title: constants/* TOKENS */.xZ.OverrideExistingMapping,
                    body: constants/* TOKENS */.xZ.OverrideExistingMappingTip,
                    okLabel: constants/* TOKENS */.xZ.OverrideMapping,
                    onOk: () => {
                        hideModal();
                        startAIAssistedMapping(node, eventType);
                    },
                }
            });
        }
        else {
            startAIAssistedMapping(node, eventType);
        }
    }, [states[types/* TreeTypes */.G1.Source].nodes, states[types/* TreeTypes */.G1.Destination].nodes, updateModal, startAIAssistedMapping]);
    const onContextMenuClick = react.useCallback((treeType, nodeId, event, toastMessage) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7;
        const eventType = (0,helper/* getEventEventTypes */.oz)(event);
        const node = (0,helper/* locateToNodeById */.mN)(data.currentState(treeType).nodes, nodeId);
        if (!node)
            return true;
        if (eventType == types/* EventTypes */.wf.EditExpression && node.data.type !== types/* NodeType */.Z6.Script) {
            const indexer = (0,helper/* getEventNodeIndexer */.SM)(event);
            const value = indexer === types/* HandleIndexer */.US.Default ? node.data.value : node.data.action.mismatch.value;
            updateModal({
                type: ModalTypes.ExpressionEditor,
                props: {
                    expression: exprHelper/* parse */.qg(value, true, (xpath) => `xpath(${xpath})`),
                    treatEmptyAsNull: indexer === types/* HandleIndexer */.US.Default && node.data.type === types/* NodeType */.Z6.Basic ? node.data.treatEmptyAsNull : "Unsupported",
                    name: node.name,
                    script: value === null || value === void 0 ? void 0 : value.script,
                    scriptName: indexer === types/* HandleIndexer */.US.Default ? node.data.scriptName : node.data.action.mismatch.scriptName,
                    title: react.createElement("span", { className: "d-flex align-items-center gap-2" },
                        react.createElement(components/* MappingNodePreIcon */.ZT, { type: node.data.type, dataType: types/* NodeDataType */.zX.Unknown }),
                        react.createElement("span", { className: "text-truncate" }, (0,helper/* getNodeTitle */.Nb)(node))),
                    relativeXPath: (0,helper/* getNodeMappingRelativeXPath */.GD)(node) || node.name,
                    loopRoot: (0,helper/* locateToNodeByXPath */.e1)(data.currentState(types/* TreeTypes */.G1.Source).nodes, (0,helper/* getNodeForeach */.Fv)(node)),
                    headers: (0,helper/* toKeyValueList */.__)(data.headers),
                    variables: (0,helper/* toKeyValueList */.__)(data.variables),
                    formatters: props.formatters,
                    onAddHeader: (header) => {
                        data.headers[header] = data.headers[header] || "";
                    },
                    onSave: (expr, scriptMode) => {
                        setState((state) => {
                            var _a;
                            const node = (0,helper/* locateToNodeById */.mN)(state[treeType].nodes, nodeId);
                            node.data.treatEmptyAsNull = node.data.type === types/* NodeType */.Z6.Basic ? expr.treatEmptyAsNull : undefined;
                            let value = typeof expr.expression === "string" ? { const: expr.expression } : expr.expression;
                            if (scriptMode && ((_a = expr.script) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                                value = { script: expr.script };
                                indexer === types/* HandleIndexer */.US.Default ? node.data.scriptName = expr.scriptName : node.data.action.mismatch.scriptName = expr.scriptName;
                            }
                            else {
                                indexer === types/* HandleIndexer */.US.Default ? delete node.data.scriptName : delete node.data.action.mismatch.scriptName;
                            }
                            indexer === types/* HandleIndexer */.US.Default ? node.data.value = value : node.data.action.mismatch.value = value;
                            node.data = Object.assign({}, node.data);
                            treeType === types/* TreeTypes */.G1.Destination && initHeadersAndVariables(node);
                            state.edges = initEdges(state.edges.filter(edge => edge.targetHandle.nodeId !== nodeId), state[types/* TreeTypes */.G1.Source].nodes, [node]);
                            state.refreshCount++;
                            state.mappingChanged = true;
                            state.toast((0,utils/* evalTemplate */.Xb)(constants/* TOKENS */.xZ.ExpressionUpdated, { name: (0,helper/* getNodeTitle */.Nb)(node) }));
                            return state;
                        });
                    }
                }
            });
            return;
        }
        else if (eventType === types/* EventTypes */.wf.EditCondition || eventType === types/* EventTypes */.wf.AddCondition) {
            const enableAction = eventType != types/* EventTypes */.wf.AddCondition && node.data.type === types/* NodeType */.Z6.Basic && !(0,helper/* isParentNode */.p4)(node);
            const actionInfo = enableAction ? {
                matchXPath: (_a = node.data.value) === null || _a === void 0 ? void 0 : _a.xpath,
                matchStatus: (_c = (_b = node.data.action) === null || _b === void 0 ? void 0 : _b.match) === null || _c === void 0 ? void 0 : _c.status,
                matchNotify: (_e = (_d = node.data.action) === null || _d === void 0 ? void 0 : _d.match) === null || _e === void 0 ? void 0 : _e.notify,
                matchNotifyTo: (_g = (_f = node.data.action) === null || _f === void 0 ? void 0 : _f.match) === null || _g === void 0 ? void 0 : _g.notifyTo,
                matchNotifySubject: (_j = (_h = node.data.action) === null || _h === void 0 ? void 0 : _h.match) === null || _j === void 0 ? void 0 : _j.notifySubject,
                mismatchType: (_l = (_k = node.data.action) === null || _k === void 0 ? void 0 : _k.mismatch) === null || _l === void 0 ? void 0 : _l.type,
                mismatchXPath: (_p = (_o = (_m = node.data.action) === null || _m === void 0 ? void 0 : _m.mismatch) === null || _o === void 0 ? void 0 : _o.value) === null || _p === void 0 ? void 0 : _p.xpath,
                mismatchStatus: (_r = (_q = node.data.action) === null || _q === void 0 ? void 0 : _q.mismatch) === null || _r === void 0 ? void 0 : _r.status,
                mismatchNotify: (_t = (_s = node.data.action) === null || _s === void 0 ? void 0 : _s.mismatch) === null || _t === void 0 ? void 0 : _t.notify,
                mismatchNotifyTo: (_v = (_u = node.data.action) === null || _u === void 0 ? void 0 : _u.mismatch) === null || _v === void 0 ? void 0 : _v.notifyTo,
                mismatchNotifySubject: (_x = (_w = node.data.action) === null || _w === void 0 ? void 0 : _w.mismatch) === null || _x === void 0 ? void 0 : _x.notifySubject,
                configAlert: props.configAlert,
                defaultNotifyTo: props.defaultNotifyTo,
            } : {};
            const isConditionNode = eventType === types/* EventTypes */.wf.AddCondition || node.data.type === types/* NodeType */.Z6.Condition;
            updateModal({
                type: ModalTypes.ConditionEditor,
                props: {
                    conditionName: node.data.conditionName,
                    condition: node.data.condition,
                    name: node.name,
                    title: react.createElement("span", { className: "d-flex align-items-center gap-2" },
                        react.createElement(components/* MappingNodePreIcon */.ZT, { type: node.data.type, dataType: types/* NodeDataType */.zX.Unknown }),
                        react.createElement("span", { className: "text-truncate" }, (0,helper/* getNodeTitle */.Nb)(node))),
                    relativeXPath: (0,helper/* getNodeMappingRelativeXPath */.GD)(node) || node.name,
                    sourceXPath: (0,helper/* isParentNode */.p4)(node) ? node.data.foreach : (_y = node.data.value) === null || _y === void 0 ? void 0 : _y.xpath,
                    sourceDefault: !(0,helper/* isParentNode */.p4)(node) && ((_0 = (_z = node.data.value) === null || _z === void 0 ? void 0 : _z.xpath) === null || _0 === void 0 ? void 0 : _0.length) > 0 ? (_4 = (_3 = (_2 = (0,helper/* locateToNodeByXPath */.e1)(data.currentState(types/* TreeTypes */.G1.Source).nodes, (0,helper/* xpathCombine */.rF)((0,helper/* getNodeForeach */.Fv)(node), (_1 = node.data.value) === null || _1 === void 0 ? void 0 : _1.xpath))) === null || _2 === void 0 ? void 0 : _2.data) === null || _3 === void 0 ? void 0 : _3.value) === null || _4 === void 0 ? void 0 : _4.const : "",
                    loopXPath: (0,helper/* getNodeForeach */.Fv)((0,helper/* isParentNode */.p4)(node) ? node : node.data.parent),
                    loopRoot: (0,helper/* locateToNodeByXPath */.e1)(data.currentState(types/* TreeTypes */.G1.Source).nodes, (0,helper/* getNodeForeach */.Fv)(node)),
                    headers: Object.keys(data.headers),
                    variables: Object.keys(data.variables),
                    enableAction: node.data.type === types/* NodeType */.Z6.Basic && eventType === types/* EventTypes */.wf.EditCondition && !(0,helper/* isParentNode */.p4)(node),
                    mappingAble: !isConditionNode && !(0,helper/* isParentNode */.p4)(node),
                    action: actionInfo,
                    editing: eventType === types/* EventTypes */.wf.EditCondition,
                    isConditionNode,
                    onSave: (mapping) => {
                        setState((state) => {
                            let node = (0,helper/* locateToNodeById */.mN)(state[treeType].nodes, nodeId);
                            if (eventType === types/* EventTypes */.wf.AddCondition) {
                                let newNode = { id: (0,helper/* genNodeId */.K2)(), component: node.component, name: "", expand: true, data: Object.assign(Object.assign({}, types/* DefaultMappingNodeData */.G6), { type: types/* NodeType */.Z6.Condition, condition: node.data.condition, depth: node.data.depth, parent: node.data.parent }), children: [Object.assign(Object.assign({}, node), { data: Object.assign(Object.assign({}, node.data), { condition: null, conditionName: null }) })] };
                                newNode = (0,helper/* cloneNodes */.Bp)([newNode], node => node, node.data.depth, node.data.parent)[0];
                                if (node.data.parent != null) {
                                    const pos = node.data.parent.children.indexOf(node);
                                    node.data.parent.children.splice(pos, 1, newNode);
                                }
                                else {
                                    state[treeType].nodes = [newNode];
                                }
                                state[treeType].updatedVersion++;
                                node = newNode;
                            }
                            node.data.condition = mapping.condition;
                            node.data.conditionName = mapping.conditionName;
                            if (enableAction) {
                                node.data.action = node.data.condition && Object.keys(mapping.action).reduce((result, key) => {
                                    if (mapping.action[key] == null)
                                        return result;
                                    if (key === "matchXPath") {
                                        if (actionInfo.matchXPath !== mapping.action[key])
                                            node.data.value = { xpath: mapping.action[key] };
                                        return result;
                                    }
                                    else if (key === "mismatchXPath") {
                                        result.mismatch.value = actionInfo.mismatchXPath !== mapping.action[key] ? { xpath: mapping.action[key] } : node.data.action.mismatch.value;
                                        return result;
                                    }
                                    const parts = key.split(/^((mis)?match)/);
                                    if (parts.length === 4 && parts[1].length > 0 && parts[3].length > 0) {
                                        result[parts[1]][parts[3].substring(0, 1).toLowerCase() + parts[3].substring(1)] = mapping.action[key];
                                    }
                                    return result;
                                }, { match: {}, mismatch: {} });
                            }
                            else {
                                delete node.data.action;
                            }
                            node.data = Object.assign({}, node.data);
                            state.edges = initEdges(state.edges.filter(edge => edge.targetHandle.nodeId !== nodeId), state[types/* TreeTypes */.G1.Source].nodes, eventType !== types/* EventTypes */.wf.AddCondition ? [node] : node.children);
                            state.refreshCount++;
                            state.mappingChanged = true;
                            eventType === types/* EventTypes */.wf.AddCondition && state.toast(constants/* TOKENS */.xZ.ConditionAdded);
                            eventType === types/* EventTypes */.wf.EditCondition && node.data.condition != null && !(0,helper/* isParentNode */.p4)(node) && state.toast((0,utils/* evalTemplate */.Xb)(constants/* TOKENS */.xZ.AddCondition, { name: (0,helper/* getNodeTitle */.Nb)(node) }));
                            return state;
                        });
                    }
                }
            });
            return;
        }
        else if (eventType === types/* EventTypes */.wf.AddCodeScript || eventType == types/* EventTypes */.wf.EditExpression && node.data.type === types/* NodeType */.Z6.Script) {
            updateModal({
                type: ModalTypes.CodeScriptEditor,
                props: {
                    script: eventType === types/* EventTypes */.wf.AddCodeScript ? "" : (((_5 = node.data.value) === null || _5 === void 0 ? void 0 : _5.custom) || ((_6 = node.data.value) === null || _6 === void 0 ? void 0 : _6.const) || ((_7 = node.data.value) === null || _7 === void 0 ? void 0 : _7.script)),
                    scriptName: eventType === types/* EventTypes */.wf.AddCodeScript ? "" : node.data.scriptName,
                    editing: eventType == types/* EventTypes */.wf.EditExpression,
                    relativeXPath: (0,helper/* getNodeMappingRelativeXPath */.GD)(Object.assign(Object.assign({}, node), { name: "" })),
                    onSave: (script, scriptName, valid) => {
                        setState((state) => {
                            let node = (0,helper/* locateToNodeById */.mN)(state[treeType].nodes, nodeId);
                            if (eventType === types/* EventTypes */.wf.AddCodeScript) {
                                const newNode = { id: (0,helper/* genNodeId */.K2)(), component: state[treeType].nodes[0].component, name: "", data: Object.assign(Object.assign({}, types/* DefaultMappingNodeData */.G6), { type: types/* NodeType */.Z6.Script, depth: node.data.depth, parent: node.data.parent }) };
                                node.data.parent.children.splice(node.data.parent.children.indexOf(node) + 1, 0, newNode);
                                state[treeType].updatedVersion++;
                                node = newNode;
                            }
                            node.data = Object.assign(Object.assign({}, node.data), { value: { custom: script }, scriptName, invalid: !valid });
                            treeType === types/* TreeTypes */.G1.Destination && initHeadersAndVariables(node);
                            state.mappingChanged = true;
                            return state;
                        });
                    }
                }
            });
            return;
        }
        setState((state) => {
            var _a, _b, _c, _d, _e, _f, _g;
            const node = (0,helper/* locateToNodeById */.mN)(state[treeType].nodes, nodeId);
            const rawState = state;
            if (!node)
                return rawState;
            let newNode = null;
            state = Object.assign({}, state);
            switch (eventType) {
                case types/* EventTypes */.wf.RenameNode:
                    node.data = Object.assign(Object.assign({}, node.data), { nodeAction: types/* NodeAction */.t7.Rename });
                    state.blocking = true;
                    break;
                case types/* EventTypes */.wf.EditXPath:
                    node.data = Object.assign(Object.assign({}, node.data), { nodeAction: types/* NodeAction */.t7.EditXpath });
                    state.blocking = true;
                    break;
                case types/* EventTypes */.wf.DeleteNode:
                    state = deleteNode(state, node, treeType);
                    state.toast(toastMessage || constants/* TOKENS */.xZ.ElementDeleted);
                    break;
                case types/* EventTypes */.wf.ResetNode:
                    if (node.data.type !== types/* NodeType */.Z6.Loop) {
                        [types/* HandleIndexer */.US.Default, types/* HandleIndexer */.US.Mismatch].forEach((index) => {
                            node.data.connected[index] && (state = handleRemoveMappings(state, { treeType, nodeId: node.id, index }, false));
                        });
                        node.data.loopName = null;
                        node.data.foreach = null;
                    }
                    if (node.data.type !== types/* NodeType */.Z6.Condition) {
                        node.data.conditionName = null;
                        node.data.condition = null;
                    }
                    node.data.value = null;
                    node.data.scriptName = node.data.type !== types/* NodeType */.Z6.Script ? null : node.data.scriptName;
                    node.data.action = null;
                    node.data.trackedHeader = null;
                    node.data.treatEmptyAsNull = false;
                    node.data = Object.assign({}, node.data);
                    state[treeType].nodes = [...state[treeType].nodes];
                    state.refreshCount++;
                    state.mappingChanged = true;
                    state.toast(toastMessage || constants/* TOKENS */.xZ.ElementIsReset);
                    break;
                case types/* EventTypes */.wf.AddSibling:
                    newNode = { id: (0,helper/* genNodeId */.K2)(), component: state[treeType].nodes[0].component, name: "", data: Object.assign(Object.assign({}, types/* DefaultMappingNodeData */.G6), { type: types/* NodeType */.Z6.Basic, nodeAction: types/* NodeAction */.t7.New, depth: node.data.depth, parent: node.data.parent, connected: [false, false], preview: false, invalid: false }) };
                    node.data.parent.children.splice(node.data.parent.children.indexOf(node) + 1, 0, newNode);
                    state[treeType].updatedVersion++;
                    state.blocking = true;
                    break;
                case types/* EventTypes */.wf.AddAttribute:
                    newNode = { id: (0,helper/* genNodeId */.K2)(), component: state[treeType].nodes[0].component, name: "", data: Object.assign(Object.assign({}, types/* DefaultMappingNodeData */.G6), { type: types/* NodeType */.Z6.Attribute, nodeAction: types/* NodeAction */.t7.New, depth: node.data.depth + 1, parent: node }) };
                    node.expand = true;
                    state[treeType].updatedVersion++;
                    node.attributes = [newNode, ...(_a = node.attributes) !== null && _a !== void 0 ? _a : []];
                    state.blocking = true;
                    break;
                case types/* EventTypes */.wf.AddChild:
                    newNode = { id: (0,helper/* genNodeId */.K2)(), component: state[treeType].nodes[0].component, name: "", data: Object.assign(Object.assign({}, types/* DefaultMappingNodeData */.G6), { type: types/* NodeType */.Z6.Basic, nodeAction: types/* NodeAction */.t7.New, depth: node.data.depth + 1, parent: node }) };
                    node.expand = true;
                    state[treeType].updatedVersion++;
                    node.children = [...(_b = node.children) !== null && _b !== void 0 ? _b : [], newNode];
                    state.blocking = true;
                    break;
                case types/* EventTypes */.wf.AddHeader:
                    newNode = { id: (0,helper/* genNodeId */.K2)(), component: state[treeType].nodes[0].component, name: "", data: Object.assign(Object.assign({}, types/* DefaultMappingNodeData */.G6), { type: types/* NodeType */.Z6.Header, nodeAction: types/* NodeAction */.t7.New, depth: node.data.depth, parent: node.data.parent }) };
                    node.data.parent.children.splice(node.data.parent.children.indexOf(node) + 1, 0, newNode);
                    state[treeType].updatedVersion++;
                    state.blocking = true;
                    break;
                case types/* EventTypes */.wf.AddLoop:
                    newNode = { id: (0,helper/* genNodeId */.K2)(), component: node.component, name: "", expand: true, data: Object.assign(Object.assign({}, types/* DefaultMappingNodeData */.G6), { type: types/* NodeType */.Z6.Loop, foreach: node.data.foreach, nodeAction: types/* NodeAction */.t7.New, depth: node.data.depth, parent: node.data.parent }), children: [Object.assign(Object.assign({}, node), { data: Object.assign(Object.assign({}, node.data), { foreach: null }) })] };
                    newNode = (0,helper/* cloneNodes */.Bp)([newNode], node => node, node.data.depth, node.data.parent)[0];
                    if (node.data.parent)
                        node.data.parent.children.splice(node.data.parent.children.indexOf(node), 1, newNode);
                    else
                        state[treeType].nodes = [newNode];
                    state[treeType].updatedVersion++;
                    state.blocking = true;
                    break;
                case types/* EventTypes */.wf.AddVariable:
                    newNode = { id: (0,helper/* genNodeId */.K2)(), component: state[treeType].nodes[0].component, name: "", data: Object.assign(Object.assign({}, types/* DefaultMappingNodeData */.G6), { type: types/* NodeType */.Z6.Variable, nodeAction: types/* NodeAction */.t7.New, depth: node.data.depth, parent: node.data.parent }) };
                    node.data.parent.children.splice(node.data.parent.children.indexOf(node) + 1, 0, newNode);
                    state[treeType].updatedVersion++;
                    state.blocking = true;
                    break;
                case types/* EventTypes */.wf.CutNode:
                    data.copyNode = null;
                    data.cutNode = state.contextMenu;
                    return state;
                case types/* EventTypes */.wf.CopyNode:
                    data.copyNode = state.contextMenu;
                    data.cutNode = null;
                    return state;
                case types/* EventTypes */.wf.PasteAsSiblingAbove:
                case types/* EventTypes */.wf.PasteAsSiblingBelow:
                case types/* EventTypes */.wf.PasteAsChild:
                    if (eventType !== types/* EventTypes */.wf.PasteAsChild && !node.data.parent)
                        return rawState;
                    newNode = ((_c = data.copyNode) === null || _c === void 0 ? void 0 : _c.treeType) === treeType ? data.copyNode.node : (((_d = data.cutNode) === null || _d === void 0 ? void 0 : _d.treeType) === treeType ? data.cutNode.node : null);
                    if (!newNode)
                        return rawState;
                    if (!(newNode = (0,helper/* locateToNodeById */.mN)(state[treeType].nodes, newNode.id)))
                        return rawState;
                    state[treeType].structureChanged = state[treeType].structureChanged || (0,helper/* locateToNode */.Y)([newNode], n => n.data.type >= types/* NodeType */.Z6.Basic) != null;
                    if (eventType === types/* EventTypes */.wf.PasteAsSiblingAbove) {
                        node.data.parent.children.splice(node.data.parent.children.indexOf(node), 0, (0,helper/* cloneNodes */.Bp)([newNode], node => (Object.assign(Object.assign({}, node), { id: (0,helper/* genNodeId */.K2)() })), node.data.depth, node.data.parent)[0]);
                        node.data.parent.children = [...node.data.parent.children];
                    }
                    else if (eventType === types/* EventTypes */.wf.PasteAsSiblingBelow) {
                        node.data.parent.children.splice(node.data.parent.children.indexOf(node) + 1, 0, (0,helper/* cloneNodes */.Bp)([newNode], node => (Object.assign(Object.assign({}, node), { id: (0,helper/* genNodeId */.K2)() })), node.data.depth, node.data.parent)[0]);
                        node.data.parent.children = [...node.data.parent.children];
                    }
                    else {
                        node.children = [...(_e = node.children) !== null && _e !== void 0 ? _e : [], (0,helper/* cloneNodes */.Bp)([newNode], node => (Object.assign(Object.assign({}, node), { id: (0,helper/* genNodeId */.K2)() })), node.data.depth + 1, node)[0]];
                        node.expand = true;
                    }
                    if (((_f = data.cutNode) === null || _f === void 0 ? void 0 : _f.treeType) === treeType)
                        state = deleteNode(state, newNode, treeType);
                    treeType === types/* TreeTypes */.G1.Destination && (state = updateEdges(state, initEdges(state.edges, state[types/* TreeTypes */.G1.Source].nodes, eventType !== types/* EventTypes */.wf.PasteAsChild ? node.data.parent.children : node.children, true)));
                    state[treeType].nodes = [...state[treeType].nodes];
                    break;
                case types/* EventTypes */.wf.AddTracking:
                    node.data = Object.assign(Object.assign({}, node.data), { trackedHeader: node.name });
                    data.headers[node.data.trackedHeader] = (_g = node.data.value) === null || _g === void 0 ? void 0 : _g.const;
                    state.mappingChanged = true;
                    state.toast((0,utils/* evalTemplate */.Xb)(constants/* TOKENS */.xZ.TrackingAdded, { name: node.name }));
                    break;
                case types/* EventTypes */.wf.RemoveTracking:
                    node.data = Object.assign(Object.assign({}, node.data), { trackedHeader: null });
                    state.mappingChanged = true;
                    state.toast((0,utils/* evalTemplate */.Xb)(constants/* TOKENS */.xZ.TrackingRemoved, { name: node.name }));
                    break;
                case types/* EventTypes */.wf.AIMapNode:
                case types/* EventTypes */.wf.AIMapChildNodes:
                case types/* EventTypes */.wf.AIMapNodeAndChildNodes:
                    aiAssistedMapping(node, eventType);
                    break;
            }
            state.contextMenu = null;
            data.copyNode = null;
            data.cutNode = null;
            return state;
        });
    }, [setState, updateModal, handleRemoveMappings, deleteNode, helper/* genNodeId */.K2, helper/* cloneNodes */.Bp, updateEdges, initEdges, initHeadersAndVariables, data, props.formatters, props.configAlert, props.defaultNotifyTo, aiAssistedMapping]);
    const nodeEvents = react.useMemo(() => ({ onNodeExpand, onNodeCollapse, onNodeClick, onNodeDoubleClick, onNodeContextMenu }), [onNodeExpand, onNodeCollapse, onNodeClick, onNodeDoubleClick, onNodeContextMenu]);
    const mappingContext = react.useMemo(() => ({ getNodeTitle: getNodeName, setNodeTitle: setNodeName, verifyDropping, updatePreviewEdge, moveNode, addMapping, removeMappings, setNodeXPath, handleEvent: onContextMenuClick, getTreeAction, toast: props.toast, showAttributes: states.showAttributes }), [getNodeName, setNodeName, verifyDropping, updatePreviewEdge, moveNode, addMapping, removeMappings, setNodeXPath, onContextMenuClick, getTreeAction, props.toast, states.showAttributes]);
    const edges = react.useMemo(() => {
        var _a, _b;
        const edgeMap = new Map();
        const edges = states.edges.filter(edge => { var _a; return edge.id.length > 0 && edge.id !== ((_a = states.preview) === null || _a === void 0 ? void 0 : _a.id); }).reduce((edges, edge) => {
            var _a;
            if (edgeMap.has(edge.id)) {
                (_a = edgeMap.get(edge.id)).active || (_a.active = edge.active);
            }
            else {
                const prop = Object.assign({}, edge);
                edgeMap.set(edge.id, prop);
                edges.push(prop);
            }
            return edges;
        }, []);
        ((_b = (_a = states.preview) === null || _a === void 0 ? void 0 : _a.id) === null || _b === void 0 ? void 0 : _b.length) > 0 && edges.push(states.preview);
        return edges;
    }, [states.edges, states.preview]);
    const sourceNodes = react.useMemo(() => {
        const visibleNodes = [];
        (0,helper/* iterateNodes */.K$)(states[types/* TreeTypes */.G1.Source].nodes, (node) => (visibleNodes.push(node), node.expand || node.data.type === types/* NodeType */.Z6.Attribute || !(0,helper/* isParentNode */.p4)(node, states.showAttributes)), states.showAttributes);
        return visibleNodes;
    }, [states[types/* TreeTypes */.G1.Source].nodes, states[types/* TreeTypes */.G1.Source].updatedVersion, states.showAttributes]);
    const destinationNodes = react.useMemo(() => {
        const visibleNodes = [];
        (0,helper/* iterateNodes */.K$)(states[types/* TreeTypes */.G1.Destination].nodes, (node) => (visibleNodes.push(node), node.expand || node.data.type === types/* NodeType */.Z6.Attribute || !(0,helper/* isParentNode */.p4)(node, states.showAttributes)), states.showAttributes);
        return visibleNodes;
    }, [states[types/* TreeTypes */.G1.Destination].nodes, states[types/* TreeTypes */.G1.Destination].updatedVersion, states.showAttributes]);
    const handlers = react.useMemo(() => {
        return {
            [types/* TreeTypes */.G1.Source]: {
                updateSearchText: updateSearchText.bind(null, types/* TreeTypes */.G1.Source),
                updateSearchIndex: updateSearchIndex.bind(null, types/* TreeTypes */.G1.Source),
                updateBreadcrumb: updateBreadcrumb.bind(null, types/* TreeTypes */.G1.Source),
                gotoNode: gotoNode.bind(null, types/* TreeTypes */.G1.Source),
            },
            [types/* TreeTypes */.G1.Destination]: {
                updateSearchText: updateSearchText.bind(null, types/* TreeTypes */.G1.Destination),
                updateSearchIndex: updateSearchIndex.bind(null, types/* TreeTypes */.G1.Destination),
                updateBreadcrumb: updateBreadcrumb.bind(null, types/* TreeTypes */.G1.Destination),
                gotoNode: gotoNode.bind(null, types/* TreeTypes */.G1.Destination),
            }
        };
    }, [updateSearchText, updateSearchIndex, updateBreadcrumb, gotoNode]);
    //////////////////////////////////
    // Effects
    //////////////////////////////////
    react.useEffect(() => {
        const devicePixelRatio = window.devicePixelRatio || 1;
        document.documentElement.style.setProperty("--window-device-pixel-ratio", devicePixelRatio);
        window.self != window.top && window.top.document.documentElement.style.setProperty("--window-device-pixel-ratio", devicePixelRatio);
    }, []);
    react.useEffect(() => {
        if (!data.scrollSourceToLeft || !data[types/* TreeTypes */.G1.Source].element)
            return;
        updateSourceScrollBar(data[types/* TreeTypes */.G1.Source].element);
    }, [data[types/* TreeTypes */.G1.Source].element, data.scrollSourceToLeft]);
    react.useEffect(() => {
        data[types/* TreeTypes */.G1.Source].element.scrollTop = 0;
        data[types/* TreeTypes */.G1.Destination].element.scrollTop = 0;
        data[types/* TreeTypes */.G1.Source].nodeMap = {};
        data[types/* TreeTypes */.G1.Destination].nodeMap = {};
        data.headers = {};
        data.variables = {};
        updateSourceScrollBar(data[types/* TreeTypes */.G1.Source].element);
        setState((state) => initStore(props, state.version + 1));
    }, [props.source.root, props.destination.root]);
    react.useEffect(() => {
        stopAnimationFrame(AnimationTypes.UpdateEdges);
        data.unstableNS = (0,helper/* isNSUnstable */.u1)(states[types/* TreeTypes */.G1.Source].nodes || []);
        const timer = setTimeout(() => {
            data[types/* TreeTypes */.G1.Source].nodeMap = {};
            (0,helper/* iterateNodes */.K$)(states[types/* TreeTypes */.G1.Source].nodes, (node) => (data[types/* TreeTypes */.G1.Source].nodeMap[(0,helper/* getNodeKey */.EA)(node.id)] = node, true));
            handleUpdateEdges();
        });
        handleUpdateEdges();
        return () => clearTimeout(timer);
    }, [states[types/* TreeTypes */.G1.Source].nodes]);
    react.useEffect(() => {
        stopAnimationFrame(AnimationTypes.UpdateEdges);
        const timer = setTimeout(() => {
            data[types/* TreeTypes */.G1.Destination].nodeMap = {};
            (0,helper/* iterateNodes */.K$)(states[types/* TreeTypes */.G1.Destination].nodes, (node) => {
                data[types/* TreeTypes */.G1.Destination].nodeMap[(0,helper/* getNodeKey */.EA)(node.id)] = node;
                initHeadersAndVariables(node);
                return true;
            });
            handleUpdateEdges();
        });
        handleUpdateEdges();
        return () => clearTimeout(timer);
    }, [states[types/* TreeTypes */.G1.Destination].nodes]);
    react.useEffect(() => {
        stopAnimationFrame(AnimationTypes.UpdateEdges);
        const timer = setTimeout(handleUpdateEdges);
        handleUpdateEdges();
        return () => clearTimeout(timer);
    }, [sourceNodes, destinationNodes]);
    react.useEffect(() => {
        const timer = setTimeout(() => setState(state => (Object.assign(Object.assign({}, state), { validate: validateMapping() }))), 100);
        return () => clearTimeout(timer);
    }, [states[types/* TreeTypes */.G1.Destination].nodes, states[types/* TreeTypes */.G1.Destination].updatedVersion, states.edges]);
    const svgReact = ((_a = data.svg) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) || { x: 0, y: 0, height: 0, width: 0 };
    react.useEffect(() => {
        const timer = setTimeout(handleResizing, 50);
        return () => clearTimeout(timer);
    }, [states[types/* TreeTypes */.G1.Source].scroll, states[types/* TreeTypes */.G1.Destination].scroll, states.version, states.refreshCount, svgReact.x, svgReact.y, svgReact.height, svgReact.width, states.blocking]);
    react.useEffect(() => {
        states[types/* TreeTypes */.G1.Source].search.matchedCount > 0 && gotoMatchedNode(types/* TreeTypes */.G1.Source, 0);
    }, [states[types/* TreeTypes */.G1.Source].search.searchText]);
    react.useEffect(() => {
        states[types/* TreeTypes */.G1.Destination].search.matchedCount > 0 && gotoMatchedNode(types/* TreeTypes */.G1.Destination, 0);
    }, [states[types/* TreeTypes */.G1.Destination].search.searchText]);
    react.useEffect(() => {
        var _a;
        if (!((_a = states.aiTaskContext) === null || _a === void 0 ? void 0 : _a.taskKey))
            return;
        const interval = setInterval(applyAIAssistedMapping, 5000);
        return () => clearInterval(interval);
    }, [states.aiTaskContext, applyAIAssistedMapping]);
    return react.createElement(react.Fragment, null,
        states.modal.type === ModalTypes.ExpressionEditor && react.createElement(MappingExpressionEditorModal["default"], Object.assign({ show: true, onHide: hideModal }, states.modal.props)),
        states.modal.type === ModalTypes.ConditionEditor && react.createElement(MappingConditionEditorModal["default"], Object.assign({ show: true, onHide: hideModal }, states.modal.props)),
        states.modal.type === ModalTypes.CodeScriptEditor && react.createElement(Modals/* CodeScriptEditorModal */.l5, Object.assign({ show: true, onHide: hideModal }, states.modal.props)),
        states.modal.type === ModalTypes.OverrideExistingMapping && react.createElement(Modals/* MappingConfirmModal */.Qn, Object.assign({ show: true, onHide: hideModal, onCancel: hideModal }, states.modal.props)),
        states.modal.type === ModalTypes.Custom && ((_b = states.modal.render) === null || _b === void 0 ? void 0 : _b.call(null)),
        react.createElement(DndProvider/* DndProvider */.Q, { backend: dist.HTML5Backend },
            react.createElement(MappingContext.Provider, { value: mappingContext },
                react.createElement("div", { className: `mapping-editor-container position-relative rsb-form-nosubmit ${(_c = props.className) !== null && _c !== void 0 ? _c : ""} ${props.disabled || ((_d = states.aiTaskContext) === null || _d === void 0 ? void 0 : _d.taskKey) ? "disabled" : ""} ${states.blocking ? "blocking" : ""} ${sourceNodes.length > 0 ? "" : "source-wizard"} ${destinationNodes.length > 0 ? "" : "destination-wizard"} ${states.compactMode ? "mapping-editor-compact-mode" : ""}` },
                    ((_e = states.aiTaskContext) === null || _e === void 0 ? void 0 : _e.taskKey) &&
                        react.createElement("div", { className: "ai-in-process-container w-100" },
                            react.createElement("div", { className: "ai-in-process d-flex align-items-center justify-content-center" },
                                react.createElement("div", { className: "d-flex flex-column text-center ai-basic gap-16" },
                                    react.createElement("span", null,
                                        react.createElement("i", { className: "fa-regular fa-wand-magic-sparkles" }),
                                        " ",
                                        (states.aiTaskContext.textIndex <= 2) ? constants/* TOKENS */.xZ.AIAssistedMappingProcessingSteps[states.aiTaskContext.textIndex] : (constants/* TOKENS */.xZ.AIAssistedMappingProcessingSteps[3] + " .".repeat((states.aiTaskContext.textIndex + 1) % 4))),
                                    react.createElement(Button/* default */.A, { variant: "outline-secondary", size: "sm", className: "d-flex align-items-center gap-2 ms-auto me-auto mt-3 ai-basic", onClick: stopAIAssistedMapping },
                                        react.createElement("i", { className: "fa fa-stop" }),
                                        " ",
                                        constants/* TOKENS */.xZ.Stop)))),
                    react.createElement("div", { className: "mapping-editor-header d-flex align-items-center py-3 ps-4 pe-0" },
                        props.renderHeaderTitle(setState),
                        react.createElement("span", { className: "mapping-editor-header-options ms-auto d-flex align-items-center gap-1 position-sticky end-0 pe-3" },
                            react.createElement("span", { key: "XMLStreaming", className: `d-flex align-items-center justify-content-center ${props.disabled ? "not-allowed" : ""} ${states.xmlStreaming ? "active" : ""}`, "data-tooltip-id": "reactTooltip", "data-tooltip-content": states.xmlStreaming ? constants/* TOKENS */.xZ.DisableXMLStreaming : constants/* TOKENS */.xZ.EnableXMLStreaming, onClick: props.disabled ? undefined : () => setState(state => (Object.assign(Object.assign({}, state), { xmlStreaming: !state.xmlStreaming, mappingChanged: true }))) },
                                react.createElement("i", { className: "fa-regular fa-signal-stream" })),
                            react.createElement("span", { key: "CompactMode", className: `d-flex align-items-center justify-content-center ${states.compactMode ? "active" : ""}`, "data-tooltip-id": "reactTooltip", "data-tooltip-content": states.compactMode ? constants/* TOKENS */.xZ.ChangeToDefaultMappingView : constants/* TOKENS */.xZ.ChangeToCompactMappingView, onClick: toggleCompactMode },
                                react.createElement("i", { className: "fa-regular fa-arrows-to-line" })),
                            react.createElement("span", { key: "ShowAttribute", className: `d-flex align-items-center justify-content-center ${states.showAttributes ? "active" : ""}`, "data-tooltip-id": "reactTooltip", "data-tooltip-content": states.showAttributes ? constants/* TOKENS */.xZ.HideAttributes : constants/* TOKENS */.xZ.ShowAttributes, onClick: toggleExpandAttributes },
                                react.createElement("i", { className: "fa-regular fa-at" })),
                            !props.disabled && react.createElement(Button/* default */.A, { key: "Refresh", variant: "outline-secondary", size: "sm", className: "border-white d-flex align-items-center justify-content-center", "data-tooltip-id": "reactTooltip", "data-tooltip-content": constants/* TOKENS */.xZ.Refresh, disabled: sourceNodes.length === 0 || destinationNodes.length === 0, onClick: refreshMapping },
                                react.createElement("i", { className: "fa-regular fa-refresh" })),
                            !props.disabled &&
                                react.createElement("span", Object.assign({ key: "AI", className: `d-flex align-items-center justify-content-center ai-basic ${(!props.enableAI || sourceNodes.length === 0 || destinationNodes.length === 0) ? "disabled" : ""}`, "data-tooltip-id": "reactTooltip", "data-tooltip-content": props.enableAI ? constants/* TOKENS */.xZ.AIAssistedMapping : constants/* TOKENS */.xZ.AIAssistedMappingDisabled }, (props.enableAI && { onClick: aiAssistedMapping.bind(null, null, types/* EventTypes */.wf.AIMapNodeAndChildNodes) })),
                                    react.createElement("i", { className: "fa-regular fa-wand-magic-sparkles" })),
                            !props.disabled && react.createElement(Button/* default */.A, { key: "Test", disabled: sourceNodes.length === 0 || destinationNodes.length === 0 || edges.length === 0 || !states.validate, variant: "outline-secondary", size: "sm", className: "d-flex align-items-center gap-2 me-1", "data-tooltip-id": "reactTooltip", "data-tooltip-content": constants/* TOKENS */.xZ.TEST_MAPPING, onClick: (_f = props.testMapping) === null || _f === void 0 ? void 0 : _f.bind(null, setState) },
                                react.createElement("i", { className: "fa-regular fa-clipboard-list-check" }),
                                " ",
                                constants/* TOKENS */.xZ.Test),
                            !props.disabled && react.createElement(Button/* default */.A, { key: "Save", disabled: sourceNodes.length === 0 || destinationNodes.length === 0 || edges.length === 0 || !states.validate, variant: "primary", size: "sm", className: "d-flex align-items-center gap-2", "data-tooltip-id": "reactTooltip", "data-tooltip-content": constants/* TOKENS */.xZ.SaveMapping, onClick: saveMapping },
                                react.createElement("i", { className: "fa-regular fa-save" }),
                                " ",
                                constants/* TOKENS */.xZ.Save))),
                    react.createElement(mapping_editor_Split, { ratios: [30, 25, 45], minSizes: [300, 150, 400], resizerWidth: 3, resizer: react.createElement("div", null, "\u00A0"), onResizing: handleResizing, onResizeStop: handleResizing },
                        react.createElement("div", { className: "mapping-source-panel d-flex flex-column w-100" },
                            sourceNodes.length > 0 && ((_g = states.contextMenu) === null || _g === void 0 ? void 0 : _g.treeType) === types/* TreeTypes */.G1.Source && props.renderContextMenu(Object.assign(Object.assign({}, states.contextMenu), { showAttributes: states.showAttributes, enableAI: false, onEvent: onContextMenuClick, onHide: () => dispatch({ treeType: states.contextMenu.treeType, key: "nodeContextMenu", value: null }) }), setState),
                            react.createElement("div", { className: "split-header px-4 py-3 d-flex" },
                                props.source.headerIcon && react.createElement("span", { className: "split-header-icon rounded-circle d-flex text-center align-items-center justify-content-center me-2" }, props.source.headerIcon),
                                react.createElement("div", { className: "split-header-body d-flex flex-column" },
                                    react.createElement("div", { className: "d-flex" },
                                        react.createElement("h4", { className: "m-0" }, constants/* TOKENS */.xZ.SOURCE),
                                        react.createElement("span", { className: "ms-auto split-header-operations" },
                                            react.createElement("span", { className: "text-decoration-underline", "data-tree-type": types/* TreeTypes */.G1.Source, onClick: onExpandAll }, constants/* TOKENS */.xZ.ExpandAll),
                                            react.createElement("span", { className: "text-decoration-underline ms-2", "data-tree-type": types/* TreeTypes */.G1.Source, onClick: onCollapseAll }, constants/* TOKENS */.xZ.CollapseAll))),
                                    props.source.renderTemplateSelector(setState))),
                            sourceNodes.length > 0 &&
                                react.createElement("div", { className: "split-search p-3" },
                                    react.createElement(components/* TreeSearchBox */.I4, Object.assign({}, states[types/* TreeTypes */.G1.Source].search, { onChanged: handlers[types/* TreeTypes */.G1.Source].updateSearchText, onIndexChanged: handlers[types/* TreeTypes */.G1.Source].updateSearchIndex }))),
                            react.createElement(Tree/* AutoTree */.w, { className: "mapping-source-tree", nodes: sourceNodes, nodeComponents: props.nodeComponents, nodeEvents: nodeEvents, disabled: props.disabled, type: types/* TreeTypes */.G1.Source, onScroll: handleScroll, onTopNodeChanged: handlers[types/* TreeTypes */.G1.Source].updateBreadcrumb, ref: updateSourceScrollBar, header: react.createElement(components/* TreeBreadcrumb */.sR, { parents: states[types/* TreeTypes */.G1.Source].breadcrumb, onClick: handlers[types/* TreeTypes */.G1.Source].gotoNode }), indent: states.compactMode ? 24 : 32 }),
                            sourceNodes.length === 0 && props.renderStartWizard(types/* TreeTypes */.G1.Source, setState)),
                        react.createElement("div", { className: "mapping-connection-panel position-relative d-flex flex-column w-100 h-100" },
                            react.createElement("div", { className: "split-header position-relative" },
                                react.createElement("h4", { className: "text-center h-100 m-0" },
                                    react.createElement("i", { className: "fa fa-arrow-right-long" }))),
                            (sourceNodes.length + destinationNodes.length) > 0 && react.createElement("div", { className: "split-search position-relative" },
                                react.createElement("h4", { className: "text-center h-100 m-0" }, "\u00A0")),
                            react.createElement(ConnectionPanel, { edges: edges, className: "mapping-connection-svg position-absolute h-100", ref: svg => data.svg = svg })),
                        react.createElement("div", { className: "mapping-destination-panel d-flex flex-column w-100" },
                            ((_h = states.contextMenu) === null || _h === void 0 ? void 0 : _h.treeType) === types/* TreeTypes */.G1.Destination && props.renderContextMenu(Object.assign(Object.assign({}, states.contextMenu), { showAttributes: states.showAttributes, enableAI: props.enableAI && sourceNodes.length > 0 && destinationNodes.length > 0, onEvent: onContextMenuClick, onHide: () => dispatch({ treeType: states.contextMenu.treeType, key: "nodeContextMenu", value: null }) }), setState),
                            react.createElement("div", { className: "split-header px-4 py-3 d-flex" },
                                props.destination.headerIcon && react.createElement("span", { className: "split-header-icon rounded-circle d-flex text-center align-items-center justify-content-center me-2" }, props.destination.headerIcon),
                                react.createElement("div", { className: "split-header-body d-flex flex-column" },
                                    react.createElement("div", { className: "d-flex" },
                                        react.createElement("h4", { className: "m-0" }, constants/* TOKENS */.xZ.DESTINATION),
                                        react.createElement("span", { className: "ms-auto split-header-operations" },
                                            react.createElement("span", { className: "text-decoration-underline", "data-tree-type": types/* TreeTypes */.G1.Destination, onClick: onExpandAll }, constants/* TOKENS */.xZ.ExpandAll),
                                            react.createElement("span", { className: "text-decoration-underline ms-2", "data-tree-type": types/* TreeTypes */.G1.Destination, onClick: onCollapseAll }, constants/* TOKENS */.xZ.CollapseAll))),
                                    props.destination.renderTemplateSelector(setState))),
                            destinationNodes.length > 0 &&
                                react.createElement("div", { className: "split-search p-3" },
                                    react.createElement(components/* TreeSearchBox */.I4, Object.assign({}, states[types/* TreeTypes */.G1.Destination].search, { onChanged: handlers[types/* TreeTypes */.G1.Destination].updateSearchText, onIndexChanged: handlers[types/* TreeTypes */.G1.Destination].updateSearchIndex }))),
                            react.createElement(Tree/* AutoTree */.w, { className: "mapping-destination-tree", nodes: destinationNodes, nodeComponents: props.nodeComponents, nodeEvents: nodeEvents, disabled: props.disabled, type: types/* TreeTypes */.G1.Destination, onScroll: handleScroll, onTopNodeChanged: handlers[types/* TreeTypes */.G1.Destination].updateBreadcrumb, ref: updateDestinationTree, header: react.createElement(components/* TreeBreadcrumb */.sR, { parents: states[types/* TreeTypes */.G1.Destination].breadcrumb, onClick: handlers[types/* TreeTypes */.G1.Destination].gotoNode }), indent: states.compactMode ? 24 : 32 }),
                            destinationNodes.length === 0 && props.renderStartWizard(types/* TreeTypes */.G1.Destination, setState)))))));
}



/***/ }),

/***/ 75997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ GeneralTree),
/* harmony export */   w: () => (/* binding */ AutoTree)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _AutoScrollList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81439);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29471);



const getElementNodeId = (element) => (0,_helper__WEBPACK_IMPORTED_MODULE_2__/* .getElementAttr */ ._9)(element, "data-node-id");
const useEventHandlers = (type, nodeEvents, disabled) => react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    const events = {};
    if (disabled)
        return events;
    const getEventNodeId = (event) => getElementNodeId(event.currentTarget);
    nodeEvents.onNodeClick && (events.onClick = (event) => nodeEvents.onNodeClick(type, getEventNodeId(event), event));
    nodeEvents.onNodeDoubleClick && (events.onDoubleClick = (event) => nodeEvents.onNodeDoubleClick(type, getEventNodeId(event), event));
    nodeEvents.onNodeContextMenu && (events.onContextMenu = (event) => nodeEvents.onNodeContextMenu(type, getEventNodeId(event), event));
    nodeEvents.onNodeExpand && (events.onExpand = (event) => nodeEvents.onNodeExpand(type, getEventNodeId(event), event));
    nodeEvents.onNodeCollapse && (events.onCollapse = (event) => nodeEvents.onNodeCollapse(type, getEventNodeId(event), event));
    return events;
}, [type, nodeEvents, disabled]);
const DefaultNodeComponent = react__WEBPACK_IMPORTED_MODULE_0__.memo(function (props) {
    var _a;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { "data-node-id": props.id, className: `${props.className} default-node-component d-flex${props.expand ? " expanded" : ""}`, style: props.style, onClick: props.onClick, onDoubleClick: props.onDoubleClick, onContextMenu: props.onContextMenu },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "node-row text-nowrap d-flex hover w-100" },
            ((_a = props.children) === null || _a === void 0 ? void 0 : _a.length) > 0 && react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "node-icon text-center me-1", onClick: props.expand ? props.onCollapse : props.onExpand },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: props.expand ? "fa-regular fa-circle-chevron-up" : "fa-regular fa-circle-chevron-down" }, "\u00A0")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "node-name px-2 d-flex" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "text-truncate" }, props.name)))));
});
const AutoTree = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
    var _a;
    const eventHandlers = useEventHandlers(props.type, props.nodeEvents, props.disabled);
    const prefixCls = `${props.prefixCls || "mapping"}-tree`;
    const indent = props.indent || 32;
    const handleScroll = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        var _a;
        event.currentTarget.style.setProperty("--mapping-tree-node-translate-y", `-${(event.currentTarget.scrollTop || 0).toFixed(1)}px`);
        (_a = props.onScroll) === null || _a === void 0 ? void 0 : _a.call(null, event);
    }, [props.onScroll]);
    const renderNode = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((itemProps) => {
        var _a, _b, _c;
        const node = itemProps.item;
        const Container = (_a = props.nodeComponents[node.component]) !== null && _a !== void 0 ? _a : DefaultNodeComponent;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { className: `${(_b = node.className) !== null && _b !== void 0 ? _b : ""} ${(_c = itemProps.className) !== null && _c !== void 0 ? _c : ""} ${prefixCls}-node`, key: node.id, "data-node-id": node.id },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(Container, Object.assign({}, eventHandlers, node, { key: node.id, className: `${prefixCls}-node-container mapping-node-container${node.active ? " active" : ""}${node.focus ? " focus" : ""}`, style: { paddingLeft: (node.data.depth - 0.5) * indent }, treeType: props.type, depth: node.data.depth }))));
    }, [eventHandlers, props.nodeComponents, prefixCls, indent]);
    const onObserved = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((entries) => {
        const entry = entries.filter(entry => entry.isIntersecting && entry.boundingClientRect.height > entry.intersectionRect.height + 10 && entry.intersectionRect.y + entry.intersectionRect.height + entry.boundingClientRect.height < entry.rootBounds.y + entry.rootBounds.height).pop();
        props.onTopNodeChanged(entry ? getElementNodeId(entry.target) : null);
    }, [props.onTopNodeChanged]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: `${(_a = props.className) !== null && _a !== void 0 ? _a : ""} ${prefixCls} mapping-tree auto-tree ${prefixCls}-container ${props.disabled ? " disabled" : ""}`, style: props.style, "data-tree-type": props.type, ref: ref, onScroll: handleScroll },
        props.header,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AutoScrollList__WEBPACK_IMPORTED_MODULE_1__/* .AutoScrollList */ .t, { className: "mapping-tree-root auto-tree-tree w-100", items: props.nodes, paging: 40, bottomReachCount: 10, renderItem: renderNode, onObserved: props.onTopNodeChanged ? onObserved : undefined })));
});
const GeneralTreeNode = react__WEBPACK_IMPORTED_MODULE_0__.memo(function ({ node, prefixCls, depth, visible, tree, eventHandlers, indent }) {
    var _a, _b, _c, _d;
    const className = (node.active ? " active" : "") + (node.focus ? " focus" : "") + (node.expand && ((_a = node.children) === null || _a === void 0 ? void 0 : _a.length) > 0 ? " expanded" : "") + (tree.disabled ? " disabled" : "") + (visible ? "" : " d-none");
    const Container = (_b = tree.nodeComponents[node.component]) !== null && _b !== void 0 ? _b : DefaultNodeComponent;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { className: `${(_c = node.className) !== null && _c !== void 0 ? _c : ""} ${prefixCls}-node ${className}`, key: node.id, "data-node-id": node.id },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(Container, Object.assign({}, eventHandlers, node, { key: node.id, className: `${prefixCls}-node-container mapping-node-container${className}`, style: { paddingLeft: (depth - 0.5) * indent }, treeType: tree.type, depth: depth })),
        ((_d = node.children) === null || _d === void 0 ? void 0 : _d.length) > 0 && react__WEBPACK_IMPORTED_MODULE_0__.createElement(GeneralTreeNodeSet, { nodes: node.children, className: node.expand ? "" : " d-none", prefixCls: prefixCls, depth: depth + 1, visible: visible && node.expand, tree: tree, eventHandlers: eventHandlers, indent: indent })));
});
const GeneralTreeNodeSet = react__WEBPACK_IMPORTED_MODULE_0__.memo(function ({ nodes, className, prefixCls, depth, visible, tree, eventHandlers, indent }) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: `${className} ${prefixCls}-children mb-0` }, nodes.map(node => react__WEBPACK_IMPORTED_MODULE_0__.createElement(GeneralTreeNode, { key: node.id, node: node, prefixCls: prefixCls, depth: depth, visible: visible, tree: tree, eventHandlers: eventHandlers, indent: indent }))));
});
const GeneralTree = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
    var _a;
    const eventHandlers = useEventHandlers(props.type, props.nodeEvents, props.disabled);
    const prefixCls = `${props.prefixCls || "mapping"}-tree`;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: `${(_a = props.className) !== null && _a !== void 0 ? _a : ""} ${prefixCls} mapping-tree general-tree ${prefixCls}-container ${props.disabled ? " disabled" : ""}`, "data-tree-type": props.type, ref: ref, onScroll: props.onScroll },
        props.header,
        props.nodes.length > 0 && react__WEBPACK_IMPORTED_MODULE_0__.createElement(GeneralTreeNodeSet, { className: "mapping-tree-root general-tree-root w-100", nodes: props.nodes, prefixCls: prefixCls, depth: 1, tree: props, eventHandlers: eventHandlers, indent: props.indent || 32, visible: true })));
});


/***/ }),

/***/ 38607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ XPathSelector)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97418);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29471);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97865);
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25337);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56992);
/* harmony import */ var _Tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75997);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76677);








const XPathSelectorNode = react__WEBPACK_IMPORTED_MODULE_1__.memo(function (props) {
    var _a, _b, _c;
    const isParent = (0,_helper__WEBPACK_IMPORTED_MODULE_2__/* .isParentNode */ .p4)(props, props.treeType !== _types__WEBPACK_IMPORTED_MODULE_0__/* .XPathSelectorMode */ .wy.ParentOnly);
    const isAllowed = (props.treeType === _types__WEBPACK_IMPORTED_MODULE_0__/* .XPathSelectorMode */ .wy.Both || (props.treeType === _types__WEBPACK_IMPORTED_MODULE_0__/* .XPathSelectorMode */ .wy.ParentOnly) === (isParent && (0,_helper__WEBPACK_IMPORTED_MODULE_2__/* .isParentNode */ .p4)(props, false)));
    return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { "data-node-id": props.id, className: `${props.className} xpath-selector-node d-flex${props.expand ? " expanded" : ""}${isAllowed ? "" : " not-allowed"}`, style: props.style, onDoubleClick: !isParent ? null : (props.expand ? props.onCollapse : props.onExpand), onClick: isAllowed ? props.onClick : event => event.stopPropagation() },
        react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { className: "node-row text-nowrap d-flex hover w-100", "data-tooltip-id": isAllowed ? null : "reactTooltip", "data-tooltip-content": props.treeType === _types__WEBPACK_IMPORTED_MODULE_0__/* .XPathSelectorMode */ .wy.ParentOnly ? _constants__WEBPACK_IMPORTED_MODULE_3__/* .TOKENS */ .xZ.OnlyParentNodesCanBeSelected : _constants__WEBPACK_IMPORTED_MODULE_3__/* .TOKENS */ .xZ.OnlyLeafNodesCanBeSelected },
            isParent && react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { className: "node-icon text-center me-1", onClick: props.expand ? props.onCollapse : props.onExpand },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("i", { className: props.expand ? "fa-regular fa-circle-chevron-up" : "fa-regular fa-circle-chevron-down" }, "\u00A0")),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { className: "node-name px-2 d-flex" },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { className: "text-truncate" },
                    props.data.type === _types__WEBPACK_IMPORTED_MODULE_0__/* .NodeType */ .Z6.Attribute ? "@" : "",
                    props.data.highlight || props.name)),
            ((_c = (_b = (_a = props.data) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.const) === null || _c === void 0 ? void 0 : _c.length) > 0 && react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { className: "node-default-value ps-2 d-flex" },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { className: "text-truncate" }, props.data.value.const)),
            isAllowed && react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { className: "add-item-btn btn btn-outline-secondary btn-sm text-center ms-auto mt-1 py-2 px-3 hover-display" },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { className: "d-flex flex-nowrap" },
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("i", { className: "fa fa-add pe-2" }),
                    _constants__WEBPACK_IMPORTED_MODULE_3__/* .TOKENS */ .xZ.ADD)))));
});
const XPathSelector = react__WEBPACK_IMPORTED_MODULE_1__.memo(function (props) {
    const allNodes = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => {
        var _a, _b;
        const nodes = [];
        if (props.root == null)
            return nodes;
        const includeAttributes = props.mode !== _types__WEBPACK_IMPORTED_MODULE_0__/* .XPathSelectorMode */ .wy.ParentOnly;
        (0,_helper__WEBPACK_IMPORTED_MODULE_2__/* .cloneNodes */ .Bp)([{ id: "", name: "", component: "", attributes: [...(_a = props.root.attributes) !== null && _a !== void 0 ? _a : []], children: [...(_b = props.root.children) !== null && _b !== void 0 ? _b : []], data: {} }], (node) => {
            node.component = "XPathSelectorNode";
            node.expand = true;
            node.data.matched = true;
            node.data.highlight = null;
            if (node.data.type === _types__WEBPACK_IMPORTED_MODULE_0__/* .NodeType */ .Z6.Basic || node.data.type === _types__WEBPACK_IMPORTED_MODULE_0__/* .NodeType */ .Z6.Attribute && includeAttributes)
                nodes.push(node);
            return node;
        }, 0, null);
        return nodes;
    }, [props.root, props.mode]);
    const [nodes, setNodes] = react__WEBPACK_IMPORTED_MODULE_1__.useState(allNodes);
    const [searchText, setSearchText] = react__WEBPACK_IMPORTED_MODULE_1__.useState("");
    const handleSearchTextChanged = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((searchText) => {
        setSearchText(searchText);
        const searchRegExp = searchText && (0,_components_utils__WEBPACK_IMPORTED_MODULE_4__/* .escapeRegExp */ .Nt)(searchText);
        const matchRegex = searchText && new RegExp(searchRegExp, "i");
        const escapeRegex = searchText && new RegExp(searchRegExp, "ig");
        allNodes.forEach(node => {
            node.data.matched = !searchText && (0,_helper__WEBPACK_IMPORTED_MODULE_2__/* .isNodeVisible */ .l)(node) || searchText && matchRegex.test(node.name);
            node.data.highlight = null;
            if (node.data.matched && searchText) {
                node.data.highlight = (0,_shared_utils__WEBPACK_IMPORTED_MODULE_5__/* .highlightText */ .Sw)(node.name, escapeRegex);
                (0,_helper__WEBPACK_IMPORTED_MODULE_2__/* .iterateParents */ .QE)(node, (parent) => (parent.data.matched ? false : parent.data.matched = true));
            }
        });
        setNodes(allNodes.filter(node => node.data.matched));
    }, [allNodes, setSearchText, setNodes]);
    const onNodeClick = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((treeType, nodeId, event) => {
        const node = nodes.find(node => node.id === nodeId);
        if (!node) {
            event.stopPropagation();
            return false;
        }
        const xpath = (0,_helper__WEBPACK_IMPORTED_MODULE_2__/* .getNodeXPath */ .ok)(node);
        props.onSelect(xpath, event);
    }, [props.onSelect, nodes]);
    const onNodeExpand = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((treeType, nodeId, event) => {
        event.stopPropagation();
        allNodes.find(node => node.id === nodeId).expand = true;
        setNodes(nodes => ((searchText === null || searchText === void 0 ? void 0 : searchText.length) > 0 ? [...nodes] : allNodes.filter(node => (0,_helper__WEBPACK_IMPORTED_MODULE_2__/* .isNodeVisible */ .l)(node))));
    }, [allNodes, searchText, setNodes]);
    const onNodeCollapse = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((treeType, nodeId, event) => {
        event.stopPropagation();
        allNodes.find(node => node.id === nodeId).expand = false;
        setNodes(nodes => ((searchText === null || searchText === void 0 ? void 0 : searchText.length) > 0 ? [...nodes] : allNodes.filter(node => (0,_helper__WEBPACK_IMPORTED_MODULE_2__/* .isNodeVisible */ .l)(node))));
    }, [allNodes, searchText, setNodes]);
    return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "xpath-selector position-relative", style: props.style },
        allNodes.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_7__/* .SearchBox */ .Gd, { searchText: searchText, onChanged: handleSearchTextChanged, onClick: event => event.stopPropagation() }),
        nodes.length > 0 ?
            react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Tree__WEBPACK_IMPORTED_MODULE_6__/* .AutoTree */ .w, { className: "xpath-selector-tree", style: props.style != null ? Object.assign(Object.assign({}, props.style), { minHeight: props.style.minHeight ? `calc(${props.style.minHeight} - 40px)` : null, maxHeight: props.style.maxHeight ? `calc(${props.style.maxHeight} - 40px)` : null }) : null, nodes: nodes, nodeComponents: { "XPathSelectorNode": XPathSelectorNode }, nodeEvents: { onNodeClick, onNodeExpand, onNodeCollapse }, disabled: props.disabled, type: props.mode }) :
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "no-data-tip" },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", { className: "no-item-display text-center" }, allNodes.length == 0 ? _constants__WEBPACK_IMPORTED_MODULE_3__/* .TOKENS */ .xZ.NoXPathNodesDisplay : _constants__WEBPACK_IMPORTED_MODULE_3__/* .TOKENS */ .xZ.NoXPathNodesMatched))));
});


/***/ }),

/***/ 76677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G9: () => (/* binding */ ItemRow),
/* harmony export */   Gd: () => (/* binding */ SearchBox),
/* harmony export */   HC: () => (/* binding */ generateNodeRows),
/* harmony export */   Hp: () => (/* binding */ AutoTooltipSpan),
/* harmony export */   I4: () => (/* binding */ TreeSearchBox),
/* harmony export */   Pm: () => (/* binding */ ValueEditor),
/* harmony export */   Wj: () => (/* binding */ TestMappingResultLabel),
/* harmony export */   XQ: () => (/* binding */ GeneralMappingNode),
/* harmony export */   Ym: () => (/* binding */ MappingNodePostIcon),
/* harmony export */   ZT: () => (/* binding */ MappingNodePreIcon),
/* harmony export */   eQ: () => (/* binding */ MappingToast),
/* harmony export */   o4: () => (/* binding */ ConfirmationBanner),
/* harmony export */   qR: () => (/* binding */ ArcScriptFormatterList),
/* harmony export */   sR: () => (/* binding */ TreeBreadcrumb)
/* harmony export */ });
/* unused harmony export NodeDataTypeIcon */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(36052);
/* harmony import */ var react_bootstrap_Breadcrumb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44595);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(25615);
/* harmony import */ var react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64874);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(58410);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5079);
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25337);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56992);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97418);
/* harmony import */ var _exprHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50683);
/* harmony import */ var _MappingEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85266);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29471);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97865);













const AutoTooltipSpan = (props) => {
    var _a, _b, _c, _d;
    const [truncated, setTruncated] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        setTruncated(ref.current && ref.current.scrollWidth > ref.current.clientWidth);
    }, [(_a = ref.current) === null || _a === void 0 ? void 0 : _a.scrollWidth, (_b = ref.current) === null || _b === void 0 ? void 0 : _b.clientWidth, (_c = ref.current) === null || _c === void 0 ? void 0 : _c.textContent]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", Object.assign({}, props, { ref: ref, "data-tooltip-id": truncated ? "reactTooltip" : props["data-tooltip-id"], "data-tooltip-content": props["data-tooltip-content"] || ((_d = ref.current) === null || _d === void 0 ? void 0 : _d.textContent) }));
};
const TreeBreadcrumb = react__WEBPACK_IMPORTED_MODULE_0__.memo(({ parents, onClick }) => {
    if (parents.length <= 0)
        return null;
    if (parents.length > 3) {
        const lengths = parents.map(parent => parent.name.length);
        for (let index = 0, totalLength = 0; index < ((parents.length + 1) >> 1); ++index) {
            totalLength += lengths[index];
            if (index != parents.length - index - 1)
                totalLength += lengths[parents.length - index - 1];
            if (index > 0 && totalLength > _constants__WEBPACK_IMPORTED_MODULE_7__/* .MAX_BREADCRUMB_CHARS */ .Nq) {
                parents = parents.slice(0, index).concat([Object.assign(Object.assign({}, parents[parents.length >> 1]), { name: "..." })]).concat(parents.slice(-index));
            }
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Breadcrumb__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, { className: "tree-breadcrumb position-absolute w-100 d-flex px-3 text-truncate fw-bold pt-2", bsPrefix: "d-flex flex-nowrap text-truncate mb-0 breadcrumb" }, parents.map((parent) => react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Breadcrumb__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.Item, { href: "#", className: "text-truncate text-decoration-underline", style: { maxWidth: `${Math.min(100, 150 / parents.length)}%` }, key: parent.id, onClick: onClick.bind(null, parent.id, false) }, parent.name))));
});
const TreeSearchBox = react__WEBPACK_IMPORTED_MODULE_0__.memo((props) => {
    const handleKeyDown = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        let goUp = false;
        if (event.key === "Enter") {
            goUp = event.shiftKey;
        }
        else if (event.key === "ArrowUp" && props.index > 0) {
            goUp = true;
        }
        else if (event.key !== "ArrowDown")
            return false;
        if (goUp && props.index > 0)
            props.onIndexChanged(props.index - 1);
        else if (!goUp && props.index < props.matchedCount - 1)
            props.onIndexChanged(props.index + 1);
    }, [props.onIndexChanged, props.index, props.matchedCount]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: `mapping-search-box tree-search-box app-search-bar form-control py-0 d-flex${props.matchedCount > 0 ? " matched" : ""}` },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "search-glass-icon pt-2" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-search" })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { onKeyDown: handleKeyDown, type: "text", autoFocus: false, className: "search-input py-2", value: props.searchText, onChange: (e) => props.onChanged(e.target.value) }),
        props.matchedCount > 0 && react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "search-indexer text-nowrap px-1 m-2" }, `${props.index + 1} ${_constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .xZ.OF} ${props.matchedCount}`),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: `search-indexer-up text-center pt-2${props.index <= 0 ? " disabled" : ""}`, onClick: props.onIndexChanged.bind(null, props.index - 1) },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-arrow-up" }),
                "\u00A0"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: `search-indexer-down text-center pt-2${props.index >= props.matchedCount - 1 ? " disabled" : ""}`, onClick: props.onIndexChanged.bind(null, props.index + 1) },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-arrow-down" }),
                "\u00A0")),
        props.searchText.length > 0 && props.matchedCount <= 0 && react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "search-clear-icon pt-2", onClick: props.onChanged.bind(null, "") },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-times-circle" }))));
});
const ValueEditor = react__WEBPACK_IMPORTED_MODULE_0__.memo((props) => {
    var _a;
    const ref = (0,_components_utils__WEBPACK_IMPORTED_MODULE_1__/* .useClickOutsideCheck */ .jn)(props.onCancel);
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.value || "");
    const apply = props.onApply.bind(null, value);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: ref, className: "value-editor py-0 ps-1 d-flex align-items-center gap-2" },
        props.preIcon,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "text", className: "value-input", value: value, placeholder: props.desc, onChange: e => setValue(e.target.value), onKeyDown: event => value.length > 0 && event.key === "Enter" && apply(), ref: input => input === null || input === void 0 ? void 0 : input.focus() }),
        props.postIcon,
        props.onCancel && react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "value-icon cancel text-center ps-2", onClick: props.onCancel.bind(null, null), "data-tooltip-id": "reactTooltip", "data-tooltip-content": props.cancelTooltip || _constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .xZ.CANCEL },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-times" }),
            "\u00A0"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: `value-icon apply text-center${value.length > 0 ? "" : " disabled"}`, onClick: apply, "data-tooltip-id": ((_a = props.applyTooltip) === null || _a === void 0 ? void 0 : _a.length) > 0 ? "reactTooltip" : undefined, "data-tooltip-content": props.applyTooltip },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-check" }),
            "\u00A0")));
});
const NodeDataTypeIcon = react__WEBPACK_IMPORTED_MODULE_0__.memo(({ dataType }) => {
    switch (dataType) {
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeDataType */ .zX.String:
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-regular fa-text" });
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeDataType */ .zX.Number:
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-regular fa-hashtag" });
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeDataType */ .zX.Binary:
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-regular fa-binary" });
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeDataType */ .zX.Boolean:
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-regular fa-light-switch-on" });
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeDataType */ .zX.Date:
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-regular fa-calendar" });
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeDataType */ .zX.Time:
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-regular fa-clock" });
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeDataType */ .zX.DateTime:
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-regular fa-calendar-clock" });
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeDataType */ .zX.Aggregate:
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeDataType */ .zX.InnerTable:
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-light fa-diagram-subtask" });
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeDataType */ .zX.Table:
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-regular fa-table" });
        default:
            return null;
    }
});
const MappingNodePreIcon = react__WEBPACK_IMPORTED_MODULE_0__.memo(({ type, dataType }) => {
    switch (type) {
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeType */ .Z6.Group:
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-regular fa-list" });
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeType */ .Z6.Loop:
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-regular fa-redo" });
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeType */ .Z6.Condition:
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-regular fa-filter" });
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeType */ .Z6.Script:
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-regular fa-code" });
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeType */ .Z6.Variable:
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-regular fa-brackets-curly" });
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeType */ .Z6.Header:
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-regular fa-heading" });
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeType */ .Z6.Attribute:
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-regular fa-at" });
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeType */ .Z6.Basic:
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(NodeDataTypeIcon, { dataType: dataType });
        default:
            return null;
    }
});
const MappingNodePostIcon = react__WEBPACK_IMPORTED_MODULE_0__.memo((props) => {
    var _a;
    const icons = [];
    if (props.isKey)
        icons.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { key: "key-icon", className: "fa-regular fa-key" }));
    if (!props.isSource) {
        if (props.autoRef)
            icons.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: "auto-ref-icon", "data-tooltip-id": "reactTooltip", "data-tooltip-content": props.foreignKey },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "auto-ref-icon px-1" }, "REF")));
        else if (props.canLookup)
            icons.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { key: "lookup-icon", className: "fa-regular fa-magnifying-glass hover-active" }));
        else if (props.canUpsert)
            icons.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { key: "upsert-icon", className: "fa-regular fa-up hover-active" }));
    }
    if (((_a = props.trackedHeader) === null || _a === void 0 ? void 0 : _a.length) > 0)
        icons.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { key: "tracked-icon", className: "fa-regular fa-circle-location-arrow tracked-icon" }));
    else if (props.deleted === true)
        icons.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { key: "deleted-icon", className: "fa-regular fa-exclamation-circle text-danger", "data-tooltip-id": "reactTooltip", "data-tooltip-content": _constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .xZ.ElseNotExisted }));
    return icons.length === 0 ? null : react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: "MappingNodePostIcon", className: "d-flex align-items-center gap-2 ms-1" }, icons);
});
const generateNodeRows = (data, isSource, isParent, handleClick, setNodeXPath) => {
    var _a, _b, _c, _d, _e;
    if (data.type == _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeType */ .Z6.Group || data.type === _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeType */ .Z6.Condition || data.type === _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeType */ .Z6.Script)
        return [null];
    const nodeRows = [];
    const nodes = [];
    if (!isSource && ((_a = data.foreach) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        nodes.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: 0, className: "ms-2" }, "FOREACH"));
        if (data.nodeAction === _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeAction */ .t7.EditXpath) {
            nodes.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ValueEditor, { key: "node-foreach", value: data.foreach, onApply: setNodeXPath, onCancel: () => setNodeXPath(data.foreach) }));
        }
        else {
            nodes.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: 1, className: "node-foreach ms-2 px-2 d-flex" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(AutoTooltipSpan, { className: "text-truncate" }, data.foreach)));
        }
    }
    const hasCondition = !isSource && data.condition;
    if (hasCondition) {
        nodes.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: 2, className: "ms-2" }, isParent ? "WHERE" : "= IF"));
        nodes.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: 3, className: "node-condition ms-2 px-2 d-flex align-items-center", "data-event-type": _types__WEBPACK_IMPORTED_MODULE_3__/* .EventTypes */ .wf.EditCondition, onClick: handleClick },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-regular fa-filter me-1" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "text-truncate" }, data.conditionName || "condition")));
        nodeRows.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, nodes.map(n => n)));
        nodes.length = 0;
    }
    if (!isParent) {
        let html = (0,_exprHelper__WEBPACK_IMPORTED_MODULE_4__/* .toNodeHtml */ .dI)({ data });
        if ((html === null || html === void 0 ? void 0 : html.length) > 0 || !isSource && data.type === _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeType */ .Z6.Basic && ((_c = (_b = data.action) === null || _b === void 0 ? void 0 : _b.mismatch) === null || _c === void 0 ? void 0 : _c.type) === _types__WEBPACK_IMPORTED_MODULE_3__/* .MappingNodeConditionActionType */ .AB.New) {
            if (isSource) {
                nodeRows.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(AutoTooltipSpan, { className: "node-default-value text-truncate ms-2 px-2", dangerouslySetInnerHTML: { __html: html } }));
            }
            else {
                nodeRows.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    nodes.map(n => n),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "node-expression-indicator ps-2" }, nodeRows.length === 0 ? "=" : "THEN"),
                    (html === null || html === void 0 ? void 0 : html.length) > 0 && react__WEBPACK_IMPORTED_MODULE_0__.createElement(AutoTooltipSpan, { key: html, className: "node-expression text-truncate ms-2 px-2", dangerouslySetInnerHTML: { __html: html } })));
                nodes.length = 0;
                if (hasCondition && data.type === _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeType */ .Z6.Basic && ((_e = (_d = data.action) === null || _d === void 0 ? void 0 : _d.mismatch) === null || _e === void 0 ? void 0 : _e.type) === _types__WEBPACK_IMPORTED_MODULE_3__/* .MappingNodeConditionActionType */ .AB.New) {
                    html = (0,_exprHelper__WEBPACK_IMPORTED_MODULE_4__/* .toNodeHtml */ .dI)({ data: { value: data.action.mismatch.value } });
                    nodeRows.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "node-expression-indicator ps-2" }, "ELSE"),
                        (html === null || html === void 0 ? void 0 : html.length) > 0 && react__WEBPACK_IMPORTED_MODULE_0__.createElement(AutoTooltipSpan, { className: "node-expression text-truncate ms-2 px-2", dangerouslySetInnerHTML: { __html: html } })));
                }
            }
        }
    }
    if (nodes.length > 0)
        nodeRows.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, nodes));
    return nodeRows.length === 0 ? [null] : nodeRows;
};
const SearchBox = react__WEBPACK_IMPORTED_MODULE_0__.memo((props) => {
    var _a;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: `mapping-search-box app-search-bar form-control py-0 d-flex ${props.className || ""}`, onClick: props.onClick },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "search-glass-icon pt-2" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-search" })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "text", autoFocus: (_a = props.autoFocus) !== null && _a !== void 0 ? _a : true, className: "search-input py-2", value: props.searchText, onChange: (e) => props.onChanged(e.target.value) }),
        props.searchText.length > 0 && react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "search-clear-icon pt-2", onClick: props.onChanged.bind(null, "") },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-times-circle" }))));
});
const MappingToast = react__WEBPACK_IMPORTED_MODULE_0__.memo((props) => {
    var _a;
    const [message, setMessage] = react__WEBPACK_IMPORTED_MODULE_0__.useState({});
    const isError = message.type === "error";
    props.toastApi.current = (message, type = "success") => setTimeout(() => setMessage({ message, type }), 0);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, { className: "mapping-toast position-absolute", onClose: () => setMessage({}), show: ((_a = message.message) === null || _a === void 0 ? void 0 : _a.length) > 0, delay: props.delay || 2000, autohide: true },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A.Body, { className: "d-flex align-items-center py-2 px-3 gap-2" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: `mapping-toast-type ${isError ? "error" : "success"}` },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: `fa fa-circle-${isError ? "exclamation" : "check"}` })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "mapping-toast-message text-truncate" }, message.message),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "ms-auto mapping-toast-close", onClick: () => setMessage({}) },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-times" })))));
});
const GeneralMappingNode = react__WEBPACK_IMPORTED_MODULE_0__.memo((props) => {
    const ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_MappingEditor__WEBPACK_IMPORTED_MODULE_5__/* .MappingContext */ .kx);
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const isSource = props.treeType === _types__WEBPACK_IMPORTED_MODULE_3__/* .TreeTypes */ .G1.Source;
    const treeType = isSource ? _types__WEBPACK_IMPORTED_MODULE_3__/* .TreeTypes */ .G1.Source : _types__WEBPACK_IMPORTED_MODULE_3__/* .TreeTypes */ .G1.Destination;
    const isParent = (0,_helper__WEBPACK_IMPORTED_MODULE_6__/* .isParentNode */ .p4)(props);
    const isFolder = ctx.showAttributes ? (0,_helper__WEBPACK_IMPORTED_MODULE_6__/* .isParentNode */ .p4)(props, true) : isParent;
    const enableDnD = props.data.nodeAction === _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeAction */ .t7.None && !!props.onClick;
    const handleClick = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ctx.handleEvent.bind(null, treeType, props.id), [ctx.handleEvent, treeType, props.id]);
    const setNodeXPath = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ctx.setNodeXPath.bind(null, treeType, props.id), [ctx.setNodeXPath, treeType, props.id]);
    const nodeRows = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => generateNodeRows(props.data, isSource, isParent, handleClick, setNodeXPath), [props.data, isSource, isParent, handleClick, setNodeXPath]);
    const isDropChild = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((isDropOver, item, clientOffset) => {
        let dropChild = (item === null || item === void 0 ? void 0 : item.treeType) !== treeType || props.data.parent == null;
        if (isDropOver && ref.current && !dropChild && ![_types__WEBPACK_IMPORTED_MODULE_3__/* .NodeType */ .Z6.Script, _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeType */ .Z6.Variable, _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeType */ .Z6.Header, _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeType */ .Z6.Attribute].includes(props.data.type) && (isSource || isParent || !props.data.value)) {
            const rect = ref.current.getBoundingClientRect();
            dropChild = (clientOffset.x - rect.x) > Math.min(rect.width / 3, padding + 24);
        }
        return dropChild;
    }, [props.data.parent, props.data.type, props.data.value, isSource, isParent]);
    const getDropIndexer = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((isDropOver, item, clientOffset) => {
        if (isDropOver && ref.current && (item === null || item === void 0 ? void 0 : item.treeType) !== treeType && ref.current.children.length > 1) {
            for (let index = 1; index < ref.current.children.length; index++) {
                const rect = ref.current.children[index].getBoundingClientRect();
                if (clientOffset.y > rect.top && clientOffset.y < rect.bottom)
                    return index - 1;
            }
        }
        return _types__WEBPACK_IMPORTED_MODULE_3__/* .HandleIndexer */ .US.Default;
    }, []);
    const renderNodeHandle = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((index, isDragging) => {
        const handleId = (0,_helper__WEBPACK_IMPORTED_MODULE_6__/* .getHandleId */ .q_)({ treeType, nodeId: props.id, index });
        const removable = !isDragging && props.data.connected[index];
        const removeMappings = (event) => (event.stopPropagation(), removable && ctx.removeMappings({ treeType, nodeId: props.id, index }));
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: `node-handle rounded-circle node-translate-y position-absolute text-center mt-2 ${isSource ? "ms-auto" : "me-1"}`, id: handleId, "data-tooltip-id": "reactTooltip", "data-tooltip-content": removable ? _constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .xZ.RemoveMapping : "", onClick: removeMappings },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-light fa-arrow-right" }),
            removable && react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-light fa-remove hover-display" })));
    }, [isSource, treeType, props.id, props.data.connected, ctx.removeMappings]);
    const [{ isDragging }, drag, preview] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_10__/* .useDrag */ .i)({
        type: _types__WEBPACK_IMPORTED_MODULE_3__/* .MappingNodeTypes */ .qz[treeType],
        item: () => {
            return { nodeId: props.id, treeType, index: 0, nodeType: props.data.type, isParent };
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        }),
        canDrag: (m) => {
            return enableDnD && (isSource || props.data.parent != null && props.data.type != _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeType */ .Z6.Attribute);
        },
        end: () => {
            ctx.updatePreviewEdge(null, null);
        }
    }, [props.id, props.data.parent, props.data.type, isSource, isParent, enableDnD, ctx.updatePreviewEdge]);
    const [{ isOver, canDrop, clientOffset, item }, drop] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_11__/* .useDrop */ .H)({
        accept: isSource ? _types__WEBPACK_IMPORTED_MODULE_3__/* .MappingNodeTypes */ .qz[treeType] : [_types__WEBPACK_IMPORTED_MODULE_3__/* .MappingNodeTypes */ .qz[_types__WEBPACK_IMPORTED_MODULE_3__/* .TreeTypes */ .G1.Source], _types__WEBPACK_IMPORTED_MODULE_3__/* .MappingNodeTypes */ .qz[_types__WEBPACK_IMPORTED_MODULE_3__/* .TreeTypes */ .G1.Destination]],
        collect(monitor) {
            return {
                isOver: !!monitor.isOver({ shallow: true }),
                canDrop: monitor.canDrop(),
                clientOffset: monitor.getClientOffset(),
                item: monitor.getItem(),
            };
        },
        hover(item, monitor) {
            if (item.treeType === treeType || !monitor.canDrop()) {
                ctx.updatePreviewEdge(null, null);
            }
            else if (isSource) {
                ctx.updatePreviewEdge({ nodeId: props.id, treeType, index: 0 }, item);
            }
            else {
                ctx.updatePreviewEdge(item, { nodeId: props.id, treeType, index: getDropIndexer(true, item, monitor.getClientOffset()) });
            }
        },
        canDrop(item, monitor) {
            if (!enableDnD || !monitor.isOver({ shallow: true }))
                return false;
            if (item.nodeId === props.id)
                return true;
            if (item.treeType !== treeType) {
                return props.data.type !== _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeType */ .Z6.Condition && props.data.type !== _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeType */ .Z6.Script && (item.isParent === isParent || !item.isParent || props.data.type !== _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeType */ .Z6.Attribute && !props.data.value);
            }
            else {
                return props.data.type != _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeType */ .Z6.Attribute && item.nodeType !== _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeType */ .Z6.Attribute && ctx.verifyDropping(treeType, item.nodeId, props.id);
            }
        },
        drop(item, monitor) {
            if (item.nodeId === props.id)
                return;
            if (item.treeType === treeType)
                ctx.moveNode(treeType, item.nodeId, props.id, isDropChild(true, item, monitor.getClientOffset()));
            else
                ctx.addMapping(item, { nodeId: props.id, treeType, index: getDropIndexer(true, item, monitor.getClientOffset()) });
        },
    }, [props.id, props.data.type, props.data.value, isSource, isParent, enableDnD, isDropChild, getDropIndexer, ctx.updatePreviewEdge, ctx.moveNode, ctx.addMapping, ctx.verifyDropping]);
    const preIcon = react__WEBPACK_IMPORTED_MODULE_0__.createElement(MappingNodePreIcon, { type: props.data.type, dataType: _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeDataType */ .zX.Unknown });
    const postIcon = react__WEBPACK_IMPORTED_MODULE_0__.createElement(MappingNodePostIcon, Object.assign({}, props.data, { isSource: isSource }));
    const isDropOver = isOver && canDrop && item.nodeId !== props.id;
    const editing = props.data.nodeAction === _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeAction */ .t7.Rename || props.data.nodeAction === _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeAction */ .t7.New;
    const nodeTitle = (0,_helper__WEBPACK_IMPORTED_MODULE_6__/* .getNodeTitle */ .Nb)(props);
    const padding = 24 + props.data.depth * 32;
    const className = `${props.className}${isFolder ? " folder" : " leaf"}${props.expand && isFolder ? " expanded" : ""}${props.data.preview ? " preview" : ""}${isDragging ? " dragging" : ""}${isOver && !canDrop ? " drop-disabled" : ""}${isDropOver ? " drop-over" : ""}${isDropChild(isDropOver, item, clientOffset) ? " drop-child" : ""}${props.data.invalid === true ? " invalid" : ""} ${treeType.toLowerCase()} node-rows-${nodeRows.length} d-flex flex-column hover`;
    const borderImage = !isDropOver || props.data.preview || item && item.treeType !== treeType ? null : `linear-gradient(to right, var(--mapping-drop-indicator-space-color) 0, var(--mapping-drop-indicator-space-color) ${padding}px, var(--mapping-drop-indicator-sibling-color) ${padding}px, var(--mapping-drop-indicator-sibling-color) ${padding + 24}px, var(--mapping-drop-indicator-space-color) ${padding + 24}px, var(--mapping-drop-indicator-space-color) ${padding + 32}px, var(--mapping-drop-indicator-child-color) ${padding + 32}px) 0 0 1 0`;
    const dropIndex = getDropIndexer(isDropOver, item, clientOffset);
    drop(ref);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { ref: ref, key: props.id, className: className, style: Object.assign(Object.assign({}, props.style), { borderImage }), "data-node-id": props.id, "data-depth": props.data.depth, onClick: props.data.nodeAction !== _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeAction */ .t7.None ? undefined : props.onClick, onDoubleClick: props.data.nodeAction !== _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeAction */ .t7.None ? undefined : props.onDoubleClick, onContextMenu: props.data.nodeAction !== _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeAction */ .t7.None ? undefined : props.onContextMenu },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: `node-row node-row-0 text-nowrap d-flex${props.data.connected.some(c => c) ? " connected" : ""}${isDropOver && dropIndex === _types__WEBPACK_IMPORTED_MODULE_3__/* .HandleIndexer */ .US.Default ? " drop-over" : ""}`, key: 0 },
                !isSource && nodeRows.length === 1 && renderNodeHandle(0, isDragging),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "node-icon rounded-circle d-flex align-items-center justify-content-center me-1", onClick: isFolder ? (props.expand ? props.onCollapse : props.onExpand) : undefined }, isFolder && react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: props.expand ? "fa-regular fa-circle-chevron-up" : "fa-regular fa-circle-chevron-down" }, "\u00A0")),
                editing ?
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(ValueEditor, { key: "node-name", value: nodeTitle, preIcon: preIcon, postIcon: postIcon, onApply: ctx.setNodeTitle.bind(null, treeType, props.id), onCancel: ctx.setNodeTitle.bind(null, treeType, props.id, props.data.nodeAction === _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeAction */ .t7.New ? null : nodeTitle), cancelTooltip: props.data.nodeAction === _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeAction */ .t7.New ? _constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .xZ.Menu_DeleteNode : undefined }) :
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "node-name px-2 d-flex align-items-center gap-2", ref: ele => props.data.nodeAction === _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeAction */ .t7.None && drag(preview(ele)), "data-event-type": props.data.type === _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeType */ .Z6.Condition ? _types__WEBPACK_IMPORTED_MODULE_3__/* .EventTypes */ .wf.EditCondition : _types__WEBPACK_IMPORTED_MODULE_3__/* .EventTypes */ .wf.EditExpression, onClick: props.data.type === _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeType */ .Z6.Condition || props.data.type === _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeType */ .Z6.Script ? handleClick : undefined },
                        preIcon,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(AutoTooltipSpan, { className: "text-truncate" }, ctx.getNodeTitle(treeType, props)),
                        postIcon),
                nodeRows[0],
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: `node-operations node-translate-y position-absolute text-center ${props.data.nodeAction === _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeAction */ .t7.None ? "hover-display" : "d-none"}`, onClick: event => event.stopPropagation() },
                    !isSource && !isParent && nodeRows.length < 3 && react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { "data-event-type": _types__WEBPACK_IMPORTED_MODULE_3__/* .EventTypes */ .wf.EditExpression, "data-node-indexer": 0, onClick: handleClick, "data-tooltip-id": "reactTooltip", "data-tooltip-content": _constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .xZ.EditNode },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-regular fa-edit mx-2" })),
                    !isSource && props.data.type !== _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeType */ .Z6.Attribute && react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { "data-event-type": _types__WEBPACK_IMPORTED_MODULE_3__/* .EventTypes */ .wf.EditCondition, onClick: handleClick, "data-tooltip-id": "reactTooltip", "data-tooltip-content": props.data.type === _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeType */ .Z6.Condition ? _constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .xZ.EditConditionNode : (props.data.condition ? _constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .xZ.EditMappingConditions : _constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .xZ.AddMappingConditions) },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-regular fa-filter mx-2" })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { "data-event-type": _types__WEBPACK_IMPORTED_MODULE_3__/* .EventTypes */ .wf.RenameNode, onClick: props.onContextMenu, "data-tooltip-id": "reactTooltip", "data-tooltip-content": _constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .xZ.MoreOptions },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-regular fa-ellipsis mx-2" }))),
                isSource && nodeRows.length === 1 && renderNodeHandle(0, isDragging)),
            nodeRows.slice(1).map((row, index) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: index + 1, className: `node-row node-row-${index + 1} d-flex${props.data.connected[index] ? " connected" : ""}${isDropOver && dropIndex === index ? " drop-over" : ""}` },
                !isSource && renderNodeHandle(index, isDragging),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "node-icon me-1" }),
                row,
                !isSource && !isParent && nodeRows.length >= 3 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: `node-operations node-translate-y position-absolute text-center ${props.data.nodeAction === _types__WEBPACK_IMPORTED_MODULE_3__/* .NodeAction */ .t7.None ? "hover-display" : "d-none"}`, onClick: event => event.stopPropagation() },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { "data-event-type": _types__WEBPACK_IMPORTED_MODULE_3__/* .EventTypes */ .wf.EditExpression, "data-node-indexer": index, onClick: handleClick, "data-tooltip-id": "reactTooltip", "data-tooltip-content": _constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .xZ.EditNode },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-regular fa-edit mx-2" })))),
                isSource && renderNodeHandle(index, isDragging))))));
});
const ConfirmationBanner = react__WEBPACK_IMPORTED_MODULE_0__.memo(function ({ prompt, confirm, onConfirm, onDeny }) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "confirmation-banner d-flex w-100 alert alert-danger py-1 px-2 m-0" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "pt-1" }, prompt),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, { as: "span", variant: "danger", className: "ms-auto btn-sm confirm-btn border-0 d-flex align-items-center", onClick: onConfirm }, confirm),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn-close btn-sm pt-3 ps-3 pe-0", onClick: onDeny })));
});
const TestMappingResultLabel = react__WEBPACK_IMPORTED_MODULE_0__.memo((props) => {
    let badge = null;
    const state = props.isMatched ? props.state : null;
    if (state === "success") {
        badge = react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, { bg: "success", "data-tooltip-id": "reactTooltip", "data-tooltip-content": (0,_components_utils__WEBPACK_IMPORTED_MODULE_1__/* .FormatString */ .FJ)(_constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .xZ.TESTED_SUCCESSFUL_TIP, props.datetime) }, _constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .xZ.TESTED_SUCCESSFUL);
    }
    else if (state === "warning") {
        badge = react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, { bg: "warning", "data-tooltip-id": "reactTooltip", "data-tooltip-content": (0,_components_utils__WEBPACK_IMPORTED_MODULE_1__/* .FormatString */ .FJ)(_constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .xZ.TESTED_WITH_WARNINGS_TIP, props.datetime, props.message) }, _constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .xZ.TESTED_WITH_WARNINGS);
    }
    else if (state === "error") {
        badge = react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, { bg: "danger", "data-tooltip-id": "reactTooltip", "data-tooltip-content": (0,_components_utils__WEBPACK_IMPORTED_MODULE_1__/* .FormatString */ .FJ)(_constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .xZ.TESTED_WITH_ERRORS_TIP, props.datetime, props.message) }, _constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .xZ.TESTED_WITH_ERRORS);
    }
    else {
        badge = react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, { bg: "warning", "data-tooltip-id": "reactTooltip", "data-tooltip-content": _constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .xZ.NOT_TESTED_TIP }, _constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .xZ.NOT_TESTED);
    }
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "test-mapping-result" }, badge);
});
const ItemRow = ({ className, name, nameClassName, desc, descClassName, onClick }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: `${className || ""} item-row d-flex hover`, onClick: onClick },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "d-flex flex-column" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: `item-name ${nameClassName || ""}` }, name),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: `item-desc ${descClassName || ""}` }, desc)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "add-item-btn btn btn-outline-secondary btn-sm text-center ms-auto mt-2 py-2 px-3 hover-display" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "d-flex flex-nowrap" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-add pe-2" }),
                _constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .xZ.ADD))));
};
const FormatterItemRow = (prop) => {
    var _a, _b;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ItemRow, { className: "py-2 px-3", name: prop.usage__element__ || prop.usage, nameClassName: "py-1", desc: react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            prop.desc,
            ((_a = prop.args) === null || _a === void 0 ? void 0 : _a.length) > 0 &&
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: "ps-3 mb-0" }, prop.args.map(arg => react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { key: arg.name },
                    arg.name,
                    ": ",
                    arg.desc)))), descClassName: "ps-2 text-secondary", onClick: (_b = prop.onClick) === null || _b === void 0 ? void 0 : _b.bind(null, prop) });
};
const ArcScriptFormatterList = (props) => {
    const filtered = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => (0,_shared_utils__WEBPACK_IMPORTED_MODULE_2__/* .filterTableData */ .Zu)(props.formatters, ["name", "usage"], props.searchText).filter(formatter => { var _a; return !props.searchText || ((_a = formatter.name__element__) === null || _a === void 0 ? void 0 : _a.length) > 0; }), [props.formatters, props.searchText]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(SearchBox, { searchText: props.searchText, onChanged: props.onSearchTextChange }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "item-list" },
            filtered.map(formatter => react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormatterItemRow, Object.assign({ key: formatter.name }, formatter, { onClick: props.onSelected.bind(null, formatter) }))),
            filtered.length <= 0 && react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, _constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .xZ.NO_MATCHED_EXPRESSION)));
};


/***/ })

}]);