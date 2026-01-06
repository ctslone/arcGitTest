"use strict";
(self["webpackChunkcdata_arc"] = self["webpackChunkcdata_arc"] || []).push([["src_logs_MessageDetail_jsx"],{

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

/***/ 80823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MessageDetail)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ../../.react-shared/axios/index.jsx
var axios = __webpack_require__(29029);
// EXTERNAL MODULE: ./src/components/utils/index.js + 1 modules
var utils = __webpack_require__(25337);
// EXTERNAL MODULE: ./src/components/message-view/MessageViewNav.jsx
var MessageViewNav = __webpack_require__(60208);
// EXTERNAL MODULE: ./src/components/message-view/DetailCardPlaceholder.jsx
var DetailCardPlaceholder = __webpack_require__(16517);
;// CONCATENATED MODULE: ./src/components/message-view/TransactionHistoryItemPlaceholder.jsx


function TransactionHistoryItemPlaceholder() {
  return /*#__PURE__*/react.createElement("ul", {
    className: "list-group transaction-history-item placeholder-glow"
  }, /*#__PURE__*/react.createElement("li", {
    className: "list-group-item transaction-history-line"
  }, /*#__PURE__*/react.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react.createElement("div", {
    className: "col d-flex align-items-center"
  }, /*#__PURE__*/react.createElement("div", {
    className: "placeholder-icon placeholder"
  }), "\xA0", /*#__PURE__*/react.createElement("span", {
    className: "col-3 placeholder"
  })), /*#__PURE__*/react.createElement("div", {
    className: "col-4 ms-auto d-flex align-items-center"
  }, /*#__PURE__*/react.createElement("span", {
    className: "col-12 placeholder"
  })))), /*#__PURE__*/react.createElement("li", {
    className: "list-group-item transaction-history-line"
  }, /*#__PURE__*/react.createElement("div", {
    className: "row text-center"
  }, /*#__PURE__*/react.createElement("div", {
    className: "col-auto"
  }), /*#__PURE__*/react.createElement("div", {
    className: "col text-start"
  }, /*#__PURE__*/react.createElement("span", {
    className: "col-4 placeholder"
  }), /*#__PURE__*/react.createElement("p", {
    className: "mb-0"
  }, /*#__PURE__*/react.createElement("span", {
    className: "col-4 placeholder"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "col-4 text-start"
  }, /*#__PURE__*/react.createElement("span", {
    className: "col-4 placeholder"
  }), /*#__PURE__*/react.createElement("p", {
    className: "mb-0"
  }, /*#__PURE__*/react.createElement("span", {
    className: "col-4 placeholder"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "col-4 text-start"
  }, /*#__PURE__*/react.createElement("span", {
    className: "col-4 placeholder"
  }), /*#__PURE__*/react.createElement("p", {
    className: "mb-0"
  }, /*#__PURE__*/react.createElement("span", {
    className: "col-4 placeholder"
  }))))), /*#__PURE__*/react.createElement("li", {
    className: "list-group-item transaction-history-line"
  }, /*#__PURE__*/react.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react.createElement("div", {
    className: "col-auto"
  }), /*#__PURE__*/react.createElement("div", {
    className: "col-3 d-flex"
  }, /*#__PURE__*/react.createElement("span", {
    className: "col-8 placeholder"
  })))), /*#__PURE__*/react.createElement("li", {
    className: "list-group-item transaction-history-line"
  }, /*#__PURE__*/react.createElement("div", {
    className: "row text-center"
  }, /*#__PURE__*/react.createElement("div", {
    className: "col-auto"
  }), /*#__PURE__*/react.createElement("div", {
    className: "col text-start"
  }, /*#__PURE__*/react.createElement("span", {
    className: "col-4 placeholder"
  }), /*#__PURE__*/react.createElement("p", {
    className: "mb-0"
  }, /*#__PURE__*/react.createElement("span", {
    className: "col-4 placeholder"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "col-4 text-start"
  }, /*#__PURE__*/react.createElement("span", {
    className: "col-4 placeholder"
  }), /*#__PURE__*/react.createElement("p", {
    className: "mb-0"
  }, /*#__PURE__*/react.createElement("span", {
    className: "col-4 placeholder"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "col-4 text-start"
  }, /*#__PURE__*/react.createElement("span", {
    className: "col-4 placeholder"
  }), /*#__PURE__*/react.createElement("p", {
    className: "mb-0"
  }, /*#__PURE__*/react.createElement("span", {
    className: "col-4 placeholder"
  }))))));
}
// EXTERNAL MODULE: ./src/components/message-view/DetailCard.jsx
var DetailCard = __webpack_require__(29272);
// EXTERNAL MODULE: ./src/components/message-view/MessageInfoCard.jsx
var MessageInfoCard = __webpack_require__(49106);
// EXTERNAL MODULE: ./src/components/message-view/TransactionDetailCard.jsx
var TransactionDetailCard = __webpack_require__(24112);
// EXTERNAL MODULE: ./src/logs/Utils.js
var Utils = __webpack_require__(98313);
;// CONCATENATED MODULE: ./src/components/message-view/TransactionHistoryItem.jsx
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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






var PreviewMessageModal = /*#__PURE__*/react.lazy(function () {
  return Promise.all(/* import() */[__webpack_require__.e("react"), __webpack_require__.e("vendors-node_modules_codemirror_lang-sql_dist_index_js-node_modules_codemirror_dist_index_js"), __webpack_require__.e("vendors-node_modules_handlebars_dist_cjs_handlebars_js-node_modules_fast-xml-parser_src_xmlpa-5f70ec"), __webpack_require__.e("src_components_arc-codemirror_CopyCodeButton_jsx-src_components_arc-codemirror_FormatCodeButton_jsx"), __webpack_require__.e("src_components_preview-message_index_jsx"), __webpack_require__.e("vendors"), __webpack_require__.e("src_components_arc-codemirror_index_scss-src_components_preview-message_index_scss-_da33-_b8c81")]).then(__webpack_require__.bind(__webpack_require__, 84925));
});

var messageType = {
  messageId: (prop_types_default()).string.isRequired,
  isBatchGroup: (prop_types_default()).bool,
  batchGroupId: (prop_types_default()).string,
  name: (prop_types_default()).string.isRequired,
  size: (prop_types_default()).number.isRequired,
  status: (prop_types_default()).string.isRequired,
  previousMessageId: (prop_types_default()).string
};
var propsTypes = {
  workspaceId: (prop_types_default()).string.isRequired,
  connectorId: (prop_types_default()).string.isRequired,
  connectorType: (prop_types_default()).string.isRequired,
  messageId: (prop_types_default()).string.isRequired,
  timestamp: prop_types_default().instanceOf(Date).isRequired,
  processingTime: (prop_types_default()).number.isRequired,
  inputMessage: prop_types_default().shape(messageType).isRequired,
  outputMessage: prop_types_default().shape(messageType),
  outputMessageCount: (prop_types_default()).number,
  instanceId: (prop_types_default()).string,
  flowDirection: prop_types_default().oneOf(["up", "down"])
};
function TransactionHistoryItem(_ref) {
  var _window$rsb$connector, _window, _connectorType$toLowe, _connectorList$worksp, _connectorList$worksp2;
  var workspaceId = _ref.workspaceId,
    connectorId = _ref.connectorId,
    connectorType = _ref.connectorType,
    messageId = _ref.messageId,
    timestamp = _ref.timestamp,
    processingTime = _ref.processingTime,
    inputMessage = _ref.inputMessage,
    outputMessage = _ref.outputMessage,
    outputMessageCount = _ref.outputMessageCount,
    instanceId = _ref.instanceId,
    flowDirection = _ref.flowDirection;
  var transactionInfo = {
    workspaceId: workspaceId,
    connectorId: connectorId,
    messageId: messageId,
    instanceId: instanceId
  };
  var _ref2 = flowDirection == "up" // default is 'down'.
    ? [outputMessage, "Receive", inputMessage, "Send"] : [inputMessage, "Send", outputMessage, "Receive"],
    _ref3 = _slicedToArray(_ref2, 4),
    upperMessage = _ref3[0],
    upperMessageDirection = _ref3[1],
    lowerMessage = _ref3[2],
    lowerMessageDirection = _ref3[3];
  var connectorList = (_window$rsb$connector = (_window = window) === null || _window === void 0 || (_window = _window.rsb) === null || _window === void 0 ? void 0 : _window.connectorList) !== null && _window$rsb$connector !== void 0 ? _window$rsb$connector : {};
  return /*#__PURE__*/react.createElement("ul", {
    className: "list-group transaction-history-item"
  }, /*#__PURE__*/react.createElement("li", {
    className: "list-group-item transaction-history-line"
  }, /*#__PURE__*/react.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react.createElement("div", {
    className: "col d-flex align-items-center"
  }, /*#__PURE__*/react.createElement("span", {
    className: "app-icon app-icon-" + ((connectorType === null || connectorType === void 0 || (_connectorType$toLowe = connectorType.toLowerCase()) === null || _connectorType$toLowe === void 0 ? void 0 : _connectorType$toLowe.replace(/^cdata(.+)$/, "$1")) || "") + " me-1"
  }, "\xA0"), /*#__PURE__*/react.createElement("a", {
    className: "transaction-history-connectorid",
    href: (connectorList === null || connectorList === void 0 || (_connectorList$worksp = connectorList[workspaceId.toLowerCase()]) === null || _connectorList$worksp === void 0 ? void 0 : _connectorList$worksp.workspaceType) != "Regular" ? "edi.rst#" + encodeURIComponent(workspaceId) + "|workflow" : "flows.rst#" + encodeURIComponent(workspaceId) + "|" + encodeURIComponent(connectorId) + "|settings"
  }, connectorId)), /*#__PURE__*/react.createElement("div", {
    className: "col-auto ms-auto d-flex align-items-center"
  }, /*#__PURE__*/react.createElement("span", {
    className: "me-3"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-secondary"
  }, "Connector Type:"), " ", connectorType), /*#__PURE__*/react.createElement("span", {
    className: "me-3"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-secondary"
  }, "Workspace:"), " ", /*#__PURE__*/react.createElement("a", {
    href: (connectorList === null || connectorList === void 0 || (_connectorList$worksp2 = connectorList[workspaceId.toLowerCase()]) === null || _connectorList$worksp2 === void 0 ? void 0 : _connectorList$worksp2.workspaceType) != "Regular" ? "edi.rst#" + encodeURIComponent(workspaceId) + "|workflow" : "flows.rst#" + encodeURIComponent(workspaceId),
    rel: "noreferrer"
  }, workspaceId)), /*#__PURE__*/react.createElement("span", {
    className: "me-3"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-secondary"
  }, "Date and Time:"), " ", utils/* FormatTimestamp */.W9(timestamp))))), upperMessage != null ? /*#__PURE__*/react.createElement(MessageInfo, {
    key: workspaceId + ":" + connectorId + "/" + upperMessageDirection,
    transaction: _objectSpread({
      direction: upperMessageDirection
    }, transactionInfo),
    message: upperMessage,
    direction: upperMessageDirection,
    selected: upperMessage.selected
  }) : null, inputMessage != null && outputMessage != null ? /*#__PURE__*/react.createElement("li", {
    className: "list-group-item transaction-history-line" + (!(inputMessage !== null && inputMessage !== void 0 && inputMessage.batchGroupId) && outputMessage !== null && outputMessage !== void 0 && outputMessage.batchGroupId || outputMessageCount > 1 ? " bg-light" : "")
  }, /*#__PURE__*/react.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react.createElement("div", {
    className: "col-auto"
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-clock me-2"
  }), " ", "Processing Time:" + " " + utils/* FormatProcessingTime */._c(processingTime)), !(inputMessage !== null && inputMessage !== void 0 && inputMessage.batchGroupId) && outputMessage !== null && outputMessage !== void 0 && outputMessage.batchGroupId || outputMessageCount > 1 ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "col d-flex align-items-center text-secondary"
  }, /*#__PURE__*/react.createElement("hr", {
    className: "transaction-history-arrow-line flex-grow-1 m-0"
  }), /*#__PURE__*/react.createElement("i", {
    className: "fa-duotone fa-angle-right"
  })), /*#__PURE__*/react.createElement("div", {
    className: "col-auto ms-auto text-secondary"
  }, !(inputMessage !== null && inputMessage !== void 0 && inputMessage.batchGroupId) && outputMessage !== null && outputMessage !== void 0 && outputMessage.batchGroupId ? /*#__PURE__*/react.createElement(react.Fragment, null, "Added to Batch Group", /*#__PURE__*/react.createElement("a", {
    className: "ms-1",
    href: (0,Utils/* BuildBatchGroupDetailLink */.zx)(workspaceId, connectorId, "Receive", outputMessage.batchGroupId, true)
  }, /*#__PURE__*/react.createElement("i", {
    className: "far fa-table"
  }), " ", "Batch Group:" + " " + messageId)) : /*#__PURE__*/react.createElement(react.Fragment, null, outputMessageCount + " " + "Output Messages Created", /*#__PURE__*/react.createElement("a", {
    className: "ms-1",
    href: (0,Utils/* BuildOutputMessagesDetailLink */.XY)(workspaceId, connectorId, outputMessage.previousMessageId)
  }, "View Output Messages")))) : null)) : null, lowerMessage != null ? /*#__PURE__*/react.createElement(MessageInfo, {
    key: workspaceId + ":" + connectorId + "/" + lowerMessageDirection,
    transaction: _objectSpread({
      direction: lowerMessageDirection
    }, transactionInfo),
    message: lowerMessage,
    direction: lowerMessageDirection,
    selected: lowerMessage.selected
  }) : null);
}
TransactionHistoryItem.propsTypes = propsTypes;
function MessageInfo(_ref4) {
  var transaction = _ref4.transaction,
    message = _ref4.message,
    direction = _ref4.direction,
    selected = _ref4.selected;
  var _React$useState = react.useState(selected),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    expanding = _React$useState2[0],
    setExpanding = _React$useState2[1];
  var _React$useState3 = react.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    showMessagePreview = _React$useState4[0],
    setShowMessagePreview = _React$useState4[1];
  var detailCardRef = react.useRef();
  var onDetailLoadComplete = function onDetailLoadComplete() {
    if (detailCardRef.current != null && selected) {
      detailCardRef.current.scrollIntoView();
    }
  };
  react.useEffect(onDetailLoadComplete, [selected]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, showMessagePreview ? /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(PreviewMessageModal, {
    show: showMessagePreview,
    workspaceId: transaction.workspaceId,
    connectorId: transaction.connectorId,
    messageId: message.messageId,
    direction: direction,
    filename: message.messageId + ".eml",
    onHide: function onHide() {
      return setShowMessagePreview(false);
    }
  })) : null, /*#__PURE__*/react.createElement("li", {
    className: "list-group-item transaction-history-line"
  }, /*#__PURE__*/react.createElement("div", {
    className: "row text-center"
  }, /*#__PURE__*/react.createElement("div", {
    className: "col-auto d-flex align-items-center pe-0"
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa " + (expanding ? "fa-minus-circle" : "fa-plus-circle"),
    role: "button",
    onClick: function onClick() {
      return setExpanding(!expanding);
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: "col text-start"
  }, /*#__PURE__*/react.createElement("p", {
    className: "text-secondary mb-2"
  }, (direction == "Send" ? "Input" : "Output") + (message.isBatchGroup ? ": Batch Group" : ": Message")), /*#__PURE__*/react.createElement("p", {
    className: "mb-0"
  }, message.isBatchGroup ? /*#__PURE__*/react.createElement("a", {
    href: (0,Utils/* BuildBatchGroupDetailLink */.zx)(transaction.workspaceId, transaction.connectorId, transaction.direction, transaction.messageId, true)
  }, /*#__PURE__*/react.createElement("i", {
    className: "far fa-table"
  }), " ", "View Batch Messages") : /*#__PURE__*/react.createElement("a", {
    className: "javascript-link",
    onClick: function onClick() {
      return setShowMessagePreview(true);
    }
  }, message.name))), /*#__PURE__*/react.createElement("div", {
    className: "col-4 text-start"
  }, /*#__PURE__*/react.createElement("p", {
    className: "text-secondary mb-2"
  }, "Size:"), /*#__PURE__*/react.createElement("p", {
    className: "mb-0"
  }, utils/* FormatFileSize */.XH(message.size))), /*#__PURE__*/react.createElement("div", {
    className: "col-4 text-start"
  }, /*#__PURE__*/react.createElement("p", {
    className: "text-secondary mb-2"
  }, "Status:"), /*#__PURE__*/react.createElement("p", {
    className: "mb-0"
  }, utils/* FormatStatus */.gn(message.status))))), expanding ? /*#__PURE__*/react.createElement("li", {
    className: "list-group-item transaction-history-line bg-light",
    ref: detailCardRef
  }, /*#__PURE__*/react.createElement("div", {
    className: "row p-2"
  }, /*#__PURE__*/react.createElement(TransactionDetailCard/* default */.A, _extends({}, transaction, {
    otherInfo: [{
      name: "Instance Id:",
      value: transaction.instanceId || ""
    }],
    showDetails: true,
    onComplete: onDetailLoadComplete
  })))) : null);
}
// EXTERNAL MODULE: ./src/components/message-view/Utils.js
var message_view_Utils = __webpack_require__(33566);
;// CONCATENATED MODULE: ./src/logs/MessageDetail.jsx
function MessageDetail_typeof(o) { "@babel/helpers - typeof"; return MessageDetail_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, MessageDetail_typeof(o); }
function MessageDetail_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function MessageDetail_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? MessageDetail_ownKeys(Object(t), !0).forEach(function (r) { MessageDetail_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : MessageDetail_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function MessageDetail_defineProperty(e, r, t) { return (r = MessageDetail_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function MessageDetail_toPropertyKey(t) { var i = MessageDetail_toPrimitive(t, "string"); return "symbol" == MessageDetail_typeof(i) ? i : i + ""; }
function MessageDetail_toPrimitive(t, r) { if ("object" != MessageDetail_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != MessageDetail_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function MessageDetail_extends() { return MessageDetail_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, MessageDetail_extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || MessageDetail_unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return MessageDetail_arrayLikeToArray(r); }
function MessageDetail_slicedToArray(r, e) { return MessageDetail_arrayWithHoles(r) || MessageDetail_iterableToArrayLimit(r, e) || MessageDetail_unsupportedIterableToArray(r, e) || MessageDetail_nonIterableRest(); }
function MessageDetail_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function MessageDetail_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return MessageDetail_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? MessageDetail_arrayLikeToArray(r, a) : void 0; } }
function MessageDetail_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function MessageDetail_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function MessageDetail_arrayWithHoles(r) { if (Array.isArray(r)) return r; }













var MessageDetail_PreviewMessageModal = /*#__PURE__*/react.lazy(function () {
  return Promise.all(/* import() */[__webpack_require__.e("react"), __webpack_require__.e("vendors-node_modules_codemirror_lang-sql_dist_index_js-node_modules_codemirror_dist_index_js"), __webpack_require__.e("vendors-node_modules_handlebars_dist_cjs_handlebars_js-node_modules_fast-xml-parser_src_xmlpa-5f70ec"), __webpack_require__.e("src_components_arc-codemirror_CopyCodeButton_jsx-src_components_arc-codemirror_FormatCodeButton_jsx"), __webpack_require__.e("src_components_preview-message_index_jsx"), __webpack_require__.e("vendors"), __webpack_require__.e("src_components_arc-codemirror_index_scss-src_components_preview-message_index_scss-_da33-_b8c81")]).then(__webpack_require__.bind(__webpack_require__, 84925));
});
var MessageDetail_propsTypes = {
  messageId: (prop_types_default()).string.isRequired,
  batchGroupId: (prop_types_default()).string,
  selectedWorkspaceId: (prop_types_default()).string,
  selectedConnectorId: (prop_types_default()).string,
  selectedDirection: (prop_types_default()).string
};
function MessageDetail(_ref) {
  var _sortedHistories;
  var messageId = _ref.messageId,
    batchGroupId = _ref.batchGroupId,
    selectedWorkspaceId = _ref.selectedWorkspaceId,
    selectedConnectorId = _ref.selectedConnectorId,
    selectedDirection = _ref.selectedDirection;
  /* states */
  var _React$useState = react.useState("desc"),
    _React$useState2 = MessageDetail_slicedToArray(_React$useState, 2),
    historySort = _React$useState2[0],
    setHistorySort = _React$useState2[1];
  var _React$useState3 = react.useState({
      loading: true
    }),
    _React$useState4 = MessageDetail_slicedToArray(_React$useState3, 2),
    messageInfo = _React$useState4[0],
    setMessageInfo = _React$useState4[1];
  var _React$useState5 = react.useState({
      loading: true
    }),
    _React$useState6 = MessageDetail_slicedToArray(_React$useState5, 2),
    histories = _React$useState6[0],
    setHistories = _React$useState6[1];
  var _React$useState7 = react.useState({
      loading: true
    }),
    _React$useState8 = MessageDetail_slicedToArray(_React$useState7, 2),
    lastTransaction = _React$useState8[0],
    setLastTransaction = _React$useState8[1];

  /* callback */
  react.useEffect(function () {
    /* Information */
    getMessageInfo(messageId, setMessageInfo);
    /* Headers */
    getMessageLastTransaction(messageId, setLastTransaction);
    /* Histories */
    getTransactionHistories(messageId, false, histories, setHistories);
  }, []);

  /* members */
  var navItems = [{
    name: "Activity",
    href: "activity.rst"
  }];
  if (batchGroupId != null) {
    navItems.push({
      name: batchGroupId + " " + "Details",
      href: (0,Utils/* BuildMessageDetailLink */.fe)(null, null, null, batchGroupId)
    });
    navItems.push({
      name: utils/* FormatString */.FJ("Batch Messages Processed By {0}", selectedConnectorId != null ? selectedWorkspaceId + ":" + selectedConnectorId : batchGroupId),
      href: (0,Utils/* BuildMessageDetailLink */.fe)(null, null, null, batchGroupId)
    });
  }
  navItems.push({
    name: messageId + " " + "Details",
    href: null
  });
  var sortedHistories = null;
  if (histories.histories != null) {
    sortedHistories = _toConsumableArray(histories.histories);
    sortedHistories.sort(function (a, b) {
      var timeA = new Date(a.timestamp);
      var timeB = new Date(b.timestamp);
      var result = historySort == "asc" ? timeA - timeB : timeB - timeA;
      if (result == 0) {
        result = historySort == "asc" ? a.id - b.id : b.id - a.id;
      }
      return result;
    });
    sortedHistories.forEach(function (history) {
      if (history.workspaceId == selectedWorkspaceId && history.connectorId == selectedConnectorId) {
        if (history.inputMessage != null && (selectedDirection === null || selectedDirection === void 0 ? void 0 : selectedDirection.toLowerCase()) == "send") {
          history.inputMessage.selected = true;
        } else if (history.outputMessage != null && (selectedDirection === null || selectedDirection === void 0 ? void 0 : selectedDirection.toLowerCase()) == "receive") {
          history.outputMessage.selected = true;
        }
      }
    });
  }
  var messageInfoCardProps = function () {
    if (messageInfo.loading) {
      return {
        loading: true
      };
    } else if (batchGroupId != null) {
      return {
        loading: lastTransaction.loading,
        lastWorkspaceId: lastTransaction.workspaceId,
        lastConnectorId: lastTransaction.connectorId,
        messageId: lastTransaction.messageId,
        originatingTimestamp: messageInfo.originatingTimestamp || lastTransaction.timestamp,
        totalProcessingTime: messageInfo.originatingTimestamp != null && lastTransaction.timestamp != null && messageInfo.originatingTimestamp < lastTransaction.timestamp ? lastTransaction.timestamp.getTime() - messageInfo.originatingTimestamp.getTime() : lastTransaction.processingTime,
        lastFileSize: lastTransaction.fileSize,
        lastFilename: lastTransaction.filename,
        lastStatus: lastTransaction.status,
        lastBatchMsgCount: lastTransaction.batchMsgCount
      };
    } else {
      return messageInfo;
    }
  }();
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(MessageViewNav/* default */.A, {
    className: "mt-2",
    items: navItems
  }), /*#__PURE__*/react.createElement("h3", null, messageId), /*#__PURE__*/react.createElement("div", {
    className: "row mb-4"
  }, /*#__PURE__*/react.createElement("div", {
    className: "col"
  }, /*#__PURE__*/react.createElement("h4", null, "Message Information"), /*#__PURE__*/react.createElement("hr", {
    className: "mt-0"
  }), messageInfoCardProps.loading ? /*#__PURE__*/react.createElement(DetailCardPlaceholder/* default */.A, {
    rows: [3, 2]
  }) : messageInfoCardProps.error != null ? /*#__PURE__*/react.createElement(MessageAlert, {
    error: messageInfoCardProps.error
  }) : /*#__PURE__*/react.createElement(MessageDetail_MessageInfoCard, MessageDetail_extends({}, messageInfoCardProps, {
    lastDirection: lastTransaction.loading ? null : lastTransaction.direction,
    lastIsBatchGroup: lastTransaction.loading ? null : lastTransaction.isBatchGroup
  }))), /*#__PURE__*/react.createElement("div", {
    className: "col"
  }, /*#__PURE__*/react.createElement("h4", null, "Headers"), /*#__PURE__*/react.createElement("hr", {
    className: "mt-0"
  }), lastTransaction.loading ? /*#__PURE__*/react.createElement(DetailCardPlaceholder/* default */.A, {
    rows: [2, 2]
  }) : lastTransaction.error != null ? /*#__PURE__*/react.createElement(MessageAlert, {
    error: lastTransaction.error
  }) : /*#__PURE__*/react.createElement(MessageInfoCard/* default */.A, {
    trackedHeaders: lastTransaction.trackedHeaders,
    otherHeaders: lastTransaction.otherHeaders,
    messageAlert: lastTransaction.messageAlert,
    splitHeaders: true,
    showEmpty: true
  }))), /*#__PURE__*/react.createElement("div", {
    className: "row align-items-center"
  }, /*#__PURE__*/react.createElement("div", {
    className: "col"
  }, /*#__PURE__*/react.createElement("h4", null, "Transaction History")), /*#__PURE__*/react.createElement("div", {
    className: "col-auto"
  }, "Sort:", "\xA0", /*#__PURE__*/react.createElement("a", {
    className: "javascript-link",
    onClick: function onClick() {
      return setHistorySort(historySort == "desc" ? "asc" : "desc");
    }
  }, historySort == "desc" ? "Most Recent First" : "Most Recent Last")), /*#__PURE__*/react.createElement("hr", {
    className: "mt-0"
  })), histories.error != null ? /*#__PURE__*/react.createElement(MessageAlert, {
    error: histories.error
  }) : null, histories.loading && historySort == "asc" ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(TransactionHistoryItemPlaceholder, null), /*#__PURE__*/react.createElement(HistorySeperator, {
    direction: "down"
  })) : null, histories.loading && (sortedHistories == null || sortedHistories.length <= 0) ? /*#__PURE__*/react.createElement(TransactionHistoryItemPlaceholder, null) : (_sortedHistories = sortedHistories) === null || _sortedHistories === void 0 ? void 0 : _sortedHistories.map(function (history, index) {
    return /*#__PURE__*/react.createElement("div", {
      key: history.workspaceId + ":" + history.connectorId,
      className: index < sortedHistories.length - 1 ? null : "mb-4"
    }, /*#__PURE__*/react.createElement(TransactionHistoryItem, MessageDetail_extends({}, history, {
      flowDirection: historySort == "desc" ? "up" : "down"
    })), index < sortedHistories.length - 1 ? /*#__PURE__*/react.createElement(HistorySeperator, {
      direction: historySort == "desc" ? "up" : "down"
    }) : null);
  }), histories.loading && historySort == "desc" ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(HistorySeperator, {
    direction: "up"
  }), /*#__PURE__*/react.createElement(TransactionHistoryItemPlaceholder, null)) : null);
}
MessageDetail.propTypes = MessageDetail_propsTypes;
function MessageAlert(_ref2) {
  var error = _ref2.error;
  return /*#__PURE__*/react.createElement("div", {
    className: "alert alert-danger",
    role: "alert"
  }, /*#__PURE__*/react.createElement("b", null, "Error:"), /*#__PURE__*/react.createElement("p", {
    className: "mb-0"
  }, error));
}
function MessageDetail_MessageInfoCard(_ref3) {
  var lastWorkspaceId = _ref3.lastWorkspaceId,
    lastConnectorId = _ref3.lastConnectorId,
    messageId = _ref3.messageId,
    lastDirection = _ref3.lastDirection,
    lastIsBatchGroup = _ref3.lastIsBatchGroup,
    lastBatchMsgCount = _ref3.lastBatchMsgCount,
    originatingTimestamp = _ref3.originatingTimestamp,
    totalProcessingTime = _ref3.totalProcessingTime,
    lastFilename = _ref3.lastFilename,
    lastStatus = _ref3.lastStatus,
    lastFileSize = _ref3.lastFileSize;
  /* states */
  var _React$useState9 = react.useState(false),
    _React$useState10 = MessageDetail_slicedToArray(_React$useState9, 2),
    showMessagePreview = _React$useState10[0],
    setShowMessagePreview = _React$useState10[1];

  /* variables */
  var data = [{
    name: "Message Originating Timestamp:",
    value: utils/* FormatTimestamp */.W9(originatingTimestamp),
    column: 0
  }, {
    name: "Total Processing Time:",
    value: utils/* FormatProcessingTime */._c(totalProcessingTime),
    column: 0
  }, {
    name: "Status:",
    value: utils/* FormatStatus */.gn(lastStatus),
    column: 1
  }];
  if (lastIsBatchGroup != null && lastIsBatchGroup) {
    data.push({
      name: "Most Recent Message:",
      value: /*#__PURE__*/react.createElement("a", {
        href: (0,Utils/* BuildBatchGroupDetailLink */.zx)(lastWorkspaceId, lastConnectorId, lastDirection, messageId, true)
      }, /*#__PURE__*/react.createElement("i", {
        className: "far fa-table"
      }), " ", utils/* FormatString */.FJ("View Batch Messages ({0})", lastBatchMsgCount)),
      column: 0
    });
  } else if (lastFilename != null) {
    data.push({
      name: "Most Recent Message:",
      value: /*#__PURE__*/react.createElement("a", {
        className: "javascript-link",
        onClick: function onClick() {
          return setShowMessagePreview(true);
        }
      }, lastFilename),
      column: 0
    });
  }
  if (lastFileSize != null) {
    data.push({
      name: "Size:",
      value: utils/* FormatFileSize */.XH(lastFileSize),
      column: 1
    });
  }
  return /*#__PURE__*/react.createElement(react.Fragment, null, showMessagePreview ? /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(MessageDetail_PreviewMessageModal, {
    show: showMessagePreview,
    workspaceId: lastWorkspaceId,
    connectorId: lastConnectorId,
    messageId: messageId,
    direction: lastDirection,
    filename: messageId + ".eml",
    onHide: function onHide() {
      return setShowMessagePreview(false);
    }
  })) : null, /*#__PURE__*/react.createElement(DetailCard/* default */.A, {
    data: data
  }));
}
function HistorySeperator(_ref4) {
  var direction = _ref4.direction;
  return /*#__PURE__*/react.createElement("svg", {
    className: "ms-4",
    style: direction == "up" ? {
      transform: "rotate(180deg)"
    } : null,
    width: "6",
    height: "63",
    viewBox: "0 0 6 63",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("path", {
    d: "\r M3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3C0.333333 4.47276 1.52724 5.66667\r 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 \r 3 0.333333ZM3 63L5.88675 58H0.113249L3 63ZM2.5 3L2.5 58.5H3.5L3.5 3H2.5Z",
    fill: "#146DA1"
  }));
}
function getMessageInfo(messageId, setMessageInfo) {
  axios/* default */.A.get("src/messages.rsd", {
    params: {
      "@json": true,
      "$filter": "MessageId eq '" + messageId + "'"
    }
  }).then(function (response) {
    var errorMsg = utils/* getResultErrorMessage */.hz(response.data.items);
    if (errorMsg != null) {
      setMessageInfo({
        loading: false,
        error: errorMsg
      });
    } else if (response.data.items == null || response.data.items[0] == null) {
      setMessageInfo({
        loading: false,
        error: "No message is found."
      });
    } else {
      var log = response.data.items[0];
      setMessageInfo({
        loading: false,
        lastWorkspaceId: log.lastworkspaceid,
        lastConnectorId: log.lastconnectorid,
        messageId: log.messageid,
        originatingTimestamp: new Date(log.starttimestamp),
        totalProcessingTime: parseInt(log.processingtime),
        lastFileSize: parseInt(log.lastfilesize),
        lastFilename: log.lastfilename,
        lastStatus: log.laststatus,
        lastBatchMsgCount: parseInt(log.lastbatchmsgcount)
      });
    }
  });
}
function getMessageLastTransaction(messageId, setLastTransaction) {
  axios/* default */.A.get("api/transactions.rsd", {
    params: {
      "@json": true,
      "$filter": "MessageId eq '" + messageId + "'",
      "$orderby": "Timestamp desc",
      "$top": 2,
      "IncludeHeaders": true
    }
  }).then(function (response) {
    var errorMsg = utils/* getResultErrorMessage */.hz(response.data.items);
    if (errorMsg != null) {
      setLastTransaction({
        loading: false,
        error: errorMsg,
        messageAlert: {
          variant: "error",
          message: errorMsg
        }
      });
    } else if (response.data.items == null || response.data.items[0] == null) {
      setLastTransaction({
        loading: false,
        error: "No transaction log is found.",
        messageAlert: {
          variant: "error",
          message: "No transaction log is found."
        }
      });
    } else {
      var log = null;
      if (response.data.items.length > 1) {
        var log1 = response.data.items[0];
        var log2 = response.data.items[1];
        if (log1.workspace + ":" + log1.connectorid == log2.workspace + ":" + log2.connectorid) {
          if (log1.direction.toLowerCase() == "receive") {
            log = log1;
          } else if (log2.direction.toLowerCase() == "receive") {
            log = log2;
          } else {
            log = new Date(log1.timestamp) > new Date(log2.timestamp) ? log1 : log2;
          }
        } else {
          log = new Date(log1.timestamp) > new Date(log2.timestamp) ? log1 : log2;
        }
      } else {
        log = response.data.items[0];
      }
      var headers = (0,message_view_Utils/* GetHeadersFromTransactionLog */.F)(log);
      var _ParseHeaders = (0,message_view_Utils/* ParseHeaders */.e)(headers),
        trackedHeaders = _ParseHeaders.trackedHeaders,
        otherHeaders = _ParseHeaders.otherHeaders,
        lastStatus = _ParseHeaders.lastStatus,
        lastStatusDesc = _ParseHeaders.lastStatusDesc;
      setLastTransaction({
        loading: false,
        workspaceId: log.workspace,
        connectorId: log.connectorid,
        connectorType: utils/* GetConnectorType */.Gf(log.workspace, log.connectorid),
        messageId: log.messageid,
        direction: log.direction,
        status: log.status,
        filename: log.filename,
        timestamp: new Date(log.timestamp),
        fileSize: parseInt(log.filesize),
        processingTime: parseInt(log.processingtime),
        instanceId: log.instanceid,
        isBatchGroup: log.isbatchgroup.toLowerCase() == "true",
        batchGroupId: log.batchgroupid,
        batchMsgCount: log.batchmsgcount,
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
    }
  });
}
function getTransactionHistories(messageId, allowEmpty, histories, setHistories) {
  var filter = "MessageId eq '" + messageId + "'";
  axios/* default */.A.get("api/transactions.rsd", {
    params: {
      "@json": true,
      "$filter": filter,
      "$orderby": "Timestamp asc"
    }
  }).then(function (response) {
    var errorMsg = utils/* getResultErrorMessage */.hz(response.data.items);
    if (errorMsg != null) {
      setHistories(MessageDetail_objectSpread(MessageDetail_objectSpread({}, histories), {}, {
        loading: false,
        error: errorMsg
      }));
    } else if (response.data.items == null || response.data.items[0] == null) {
      if (!allowEmpty) {
        setHistories(MessageDetail_objectSpread(MessageDetail_objectSpread({}, histories), {}, {
          loading: false,
          error: "No transaction log is found."
        }));
      }
    } else {
      var logs = response.data.items;
      var parsedHistories = [];
      var lastHistory = null;
      var updatePreviousHistories = function updatePreviousHistories(histories, lastHistory) {
        if (histories.histories != null && histories.histories.length > 0) {
          var previousHeadHistory = histories.histories[0];
          if (previousHeadHistory.workspaceId == lastHistory.workspaceId && previousHeadHistory.connectorId == lastHistory.connectorId) {
            if (previousHeadHistory.inputMessage == null) {
              previousHeadHistory.inputMessage = lastHistory.inputMessage;
            }
            return true;
          }
        }
        return false;
      };
      logs.every(function (log) {
        if (lastHistory == null || lastHistory.workspaceId != log.workspace || lastHistory.connectorId != log.connectorid) {
          if (lastHistory != null) {
            var updated = updatePreviousHistories(histories, lastHistory);
            if (updated) {
              return false;
            }
            parsedHistories.push(lastHistory);
          }
          lastHistory = {
            id: parseInt(log.id),
            workspaceId: log.workspace,
            connectorId: log.connectorid,
            connectorType: utils/* GetConnectorType */.Gf(log.workspace, log.connectorid),
            messageId: log.messageid,
            timestamp: new Date(log.timestamp),
            processingTime: parseInt(log.processingtime),
            instanceId: log.instanceid
          };
        }
        if (log.direction == "Send") {
          var inputMessage = {
            messageId: log.messageid,
            isBatchGroup: log.isbatchgroup.toLowerCase() == "true",
            batchGroupId: log.batchgroupid,
            name: log.filename,
            size: parseInt(log.filesize),
            status: log.status
          };
          lastHistory.inputMessage = inputMessage;
        } else if (log.direction == "Receive") {
          var outputMessage = {
            messageId: log.messageid,
            isBatchGroup: log.isbatchgroup.toLowerCase() == "true",
            batchGroupId: log.batchgroupid,
            name: log.filename,
            size: parseInt(log.filesize),
            status: log.status,
            previousMessageId: log.previousmessageid
          };
          lastHistory.outputMessage = outputMessage;
        }
        return true;
      });
      if (lastHistory != null) {
        var updated = updatePreviousHistories(histories, lastHistory);
        if (!updated) {
          parsedHistories.push(lastHistory);
        }
      }
      var previousMessageId = null;
      if (parsedHistories.length > 0 && parsedHistories[0].outputMessage != null) {
        if (parsedHistories[0].outputMessage.previousMessageId != null && parsedHistories[0].outputMessage.previousMessageId != messageId) {
          previousMessageId = parsedHistories[0].outputMessage.previousMessageId;
        }
      }
      var newHistories = MessageDetail_objectSpread(MessageDetail_objectSpread({}, histories), {}, {
        loading: previousMessageId != null,
        histories: histories.histories != null ? parsedHistories.concat(histories.histories) : parsedHistories
      });
      setHistories(newHistories);
      if (parsedHistories.length > 0) {
        getOutputMessageCount(previousMessageId !== null && previousMessageId !== void 0 ? previousMessageId : parsedHistories[0].messageId, newHistories, setHistories);
      }
      if (previousMessageId != null) {
        getTransactionHistories(previousMessageId, true, newHistories, setHistories);
      }
    }
  });
}
function getOutputMessageCount(mesasgeId, histories, setHistories) {
  axios/* default */.A.get("src/groupQueryTransactions.rsb", {
    params: {
      "@json": true,
      "groupBy": "Workspace, ConnectorId",
      "filter": "Direction eq 'Receive' and InputMessageId eq '" + mesasgeId + "'"
    }
  }).then(function (response) {
    var errorMsg = utils/* getResultErrorMessage */.hz(response.data.items);
    if (errorMsg == null && response.data.items != null && response.data.items.length > 0) {
      var newHistory = MessageDetail_objectSpread({}, histories);
      response.data.items.forEach(function (item) {
        histories.histories.forEach(function (history) {
          if (history.workspaceId == item.workspace && history.connectorId == item.connectorid) {
            history.outputMessageCount = parseInt(item.count);
          }
        });
      });
      setHistories(MessageDetail_objectSpread(MessageDetail_objectSpread({}, newHistory), {}, {
        loading: false,
        histories: newHistory.histories.map(function (history) {
          return MessageDetail_objectSpread({}, history);
        })
      }));
    }
  });
}

/***/ })

}]);