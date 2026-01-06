"use strict";
(self["webpackChunkcdata_arc"] = self["webpackChunkcdata_arc"] || []).push([["src_logs_OutputMessages_jsx"],{

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

/***/ 9645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OutputMessages)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _TransactionLogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97320);
/* harmony import */ var _components_message_view_MessageViewNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60208);
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25337);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98313);






function OutputMessages(_ref) {
  var _window$rsb$connector, _window, _connectorList$worksp;
  var workspaceId = _ref.workspaceId,
    connectorId = _ref.connectorId,
    messageId = _ref.messageId;
  var connectorList = (_window$rsb$connector = (_window = window) === null || _window === void 0 || (_window = _window.rsb) === null || _window === void 0 ? void 0 : _window.connectorList) !== null && _window$rsb$connector !== void 0 ? _window$rsb$connector : {};
  var columns = [{
    id: "timestamp",
    header: "Date/Time",
    accessorKey: "timestamp",
    headerClassName: "hidden-xs d-none d-lg-table-cell",
    className: "hidden-xs d-none d-lg-table-cell",
    size: 180,
    cell: function cell(props) {
      return (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .FormatTimestamp */ .W9)(props.getValue());
    }
  }, {
    id: "filename",
    header: "File Name",
    accessorKey: "filename"
  }, {
    id: "filesize",
    header: "File Size",
    accessorKey: "filesize",
    headerClassName: "hidden-xs d-none d-lg-table-cell",
    className: "hidden-xs d-none d-lg-table-cell",
    size: 90,
    cell: function cell(props) {
      return (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .FormatFileSize */ .XH)(parseInt(props.getValue()));
    }
  }, {
    id: "processingtime",
    header: "Processing Time",
    accessorKey: "processingtime",
    headerClassName: "hidden-xs d-none d-lg-table-cell",
    className: "hidden-xs d-none d-lg-table-cell",
    size: 140,
    cell: function cell(props) {
      return props.getValue() ? (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .FormatProcessingTime */ ._c)(parseInt(props.getValue())) : "";
    }
  }, {
    id: "status",
    header: "Status",
    accessorKey: "status",
    size: 180,
    cell: function cell(props) {
      var _props$row$original;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .FormatStatus */ .gn)(props.getValue()), (_props$row$original = props.row.original) !== null && _props$row$original !== void 0 && _props$row$original.failedcount && parseInt(props.row.original.failedcount) > 0 ? " (" + "Attempts:" + " " + props.row.original.failedcount + ")" : "", props.getValue().toLowerCase() == "unsent" ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "status-details me-2",
        href: (0,_Utils__WEBPACK_IMPORTED_MODULE_4__/* .BuildMessageDetailLink */ .fe)(props.row.original.workspace, props.row.original.connectorid, props.row.original.direction, props.row.original.messageid, props.row.original.batchgoupid)
      }, "View Details"));
    }
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_message_view_MessageViewNav__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    className: "mt-2",
    items: [{
      name: "Activity",
      href: "activity.rst"
    }, {
      name: messageId + " " + "Details",
      href: "activity.rst?messageId=" + encodeURIComponent(messageId)
    }, {
      name: "Output Messages Processed By" + " " + connectorId,
      href: null
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Output Messages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "detail-name"
  }, "Originating Message:", "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "javascript-link",
    href: "activity.rst?messageId=" + encodeURIComponent(messageId)
  }, messageId)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "detail-name"
  }, "Processed by:", "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "app-icon app-icon-" + ((_connectorList$worksp = connectorList[workspaceId.toLowerCase()]) === null || _connectorList$worksp === void 0 || (_connectorList$worksp = _connectorList$worksp.connectors[connectorId.toLowerCase()]) === null || _connectorList$worksp === void 0 || (_connectorList$worksp = _connectorList$worksp.type.toLowerCase()) === null || _connectorList$worksp === void 0 ? void 0 : _connectorList$worksp.replace(/^cdata(.+)$/, "$1")),
    style: {
      width: "22px",
      height: "22px"
    }
  }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "flows.rst#" + encodeURIComponent(workspaceId) + "|" + encodeURIComponent(connectorId) + "|settings",
    rel: "noreferrer"
  }, connectorId)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TransactionLogs__WEBPACK_IMPORTED_MODULE_1__/* .TransactionLogs */ .G, {
    workspaceId: workspaceId,
    connectorId: connectorId,
    direction: "Receive",
    previousmessageid: messageId,
    page: "OutputMessages",
    columnsInput: columns
  }));
}

/***/ })

}]);