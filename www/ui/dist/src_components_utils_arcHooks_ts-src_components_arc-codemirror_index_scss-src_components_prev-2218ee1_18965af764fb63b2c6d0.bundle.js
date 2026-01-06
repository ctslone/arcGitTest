"use strict";
(self["webpackChunkcdata_arc"] = self["webpackChunkcdata_arc"] || []).push([["src_components_utils_arcHooks_ts-src_components_arc-codemirror_index_scss-src_components_prev-2218ee1","src_components_arc-codemirror_index_scss-src_components_preview-message_index_scss-_da33-_b8c80","src_components_utils_arcHooks_ts-src_components_arc-codemirror_index_scss-src_components_prev-2218ee0","src_components_arc-codemirror_index_scss-src_components_preview-message_index_scss-_da33-_b8c81"],{

/***/ 17518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BJ: () => (/* binding */ useLicenseTier),
/* harmony export */   D6: () => (/* binding */ useEnv),
/* harmony export */   FC: () => (/* binding */ useNodeId),
/* harmony export */   II: () => (/* binding */ useProdName),
/* harmony export */   J5: () => (/* binding */ useIsSupport),
/* harmony export */   Mo: () => (/* binding */ useFlowSnapshotConnectorThreshold),
/* harmony export */   Ol: () => (/* binding */ useLicDeprecatedOthers),
/* harmony export */   Rz: () => (/* binding */ useServerTimeZoneOffset),
/* harmony export */   VH: () => (/* binding */ useIsEnableMFA),
/* harmony export */   WU: () => (/* binding */ useDiskUsage),
/* harmony export */   Xv: () => (/* binding */ useServerTimeZoneId),
/* harmony export */   ey: () => (/* binding */ usePubUrl),
/* harmony export */   h7: () => (/* binding */ useIsAdmin),
/* harmony export */   h_: () => (/* binding */ useAppVersion),
/* harmony export */   iZ: () => (/* binding */ useCurrentUser),
/* harmony export */   jq: () => (/* binding */ useIsAdminOrStandard),
/* harmony export */   ok: () => (/* binding */ useLanguage),
/* harmony export */   rC: () => (/* binding */ useAllowUnmaskedPasswords),
/* harmony export */   rL: () => (/* binding */ useIsCloud),
/* harmony export */   s$: () => (/* binding */ useIsNotifyReady)
/* harmony export */ });
/* unused harmony exports useIsStandard, useTimeFormat */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);

function useCurrentUser() {
    var _a, _b;
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => { var _a, _b; return (_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.currentUser; }, [(_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.currentUser]);
}
function useIsAdmin() {
    var _a, _b;
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => { var _a, _b; return (_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.isAdmin; }, [(_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.isAdmin]);
}
function useIsStandard() {
    var _a, _b;
    return React.useMemo(() => { var _a, _b; return (_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.isStandard; }, [(_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.isStandard]);
}
function useIsAdminOrStandard() {
    var _a, _b, _c, _d;
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => { var _a, _b, _c, _d; return ((_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.isAdmin) || ((_d = (_c = window === null || window === void 0 ? void 0 : window.arc) === null || _c === void 0 ? void 0 : _c.hooks) === null || _d === void 0 ? void 0 : _d.isStandard); }, [(_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.isAdmin, (_d = (_c = window === null || window === void 0 ? void 0 : window.arc) === null || _c === void 0 ? void 0 : _c.hooks) === null || _d === void 0 ? void 0 : _d.isStandard]);
}
function useIsSupport() {
    var _a, _b;
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => { var _a, _b; return (_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.isSupport; }, [(_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.isSupport]);
}
function usePubUrl() {
    var _a, _b;
    const pubUrl = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => { var _a, _b; return (_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.pubUrl; }, [(_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.pubUrl]);
    let canParse = false;
    if ("canParse" in URL) { // Only support in Chrome 120+
        canParse = URL.canParse(pubUrl);
    }
    else {
        try {
            new window.URL(pubUrl);
            canParse = true;
        }
        catch (e) {
            // ignore
        }
    }
    if (!canParse) {
        if (!pubUrl.toLowerCase().startsWith("http://") && !pubUrl.toLowerCase().startsWith("https://")) {
            return `${window.location.protocol}//${pubUrl}${pubUrl.endsWith("/") ? "" : "/"}`;
        }
    }
    return pubUrl.endsWith("/") ? pubUrl : `${pubUrl}/`;
}
function useNodeId() {
    var _a, _b;
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => { var _a, _b; return (_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.nodeId; }, [(_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.nodeId]);
}
function useIsCloud() {
    var _a, _b;
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => { var _a, _b; return (_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.isCloud; }, [(_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.isCloud]);
}
/**
* @deprecated Use `useLicenseStore` instead
*/
function useLicenseTier() {
    var _a, _b;
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => { var _a, _b; return (_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.licenseTier; }, [(_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.licenseTier]);
}
function useFlowSnapshotConnectorThreshold() {
    var _a, _b;
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => { var _a, _b; return (_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.flowSnapshotConnectorThreshold; }, [(_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.flowSnapshotConnectorThreshold]);
}
function useLicDeprecatedOthers() {
    var _a, _b;
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => { var _a, _b; return (_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.licDeprecatedOthers; }, [(_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.licDeprecatedOthers]);
}
function useIsEnableMFA() {
    var _a, _b;
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => { var _a, _b; return (_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.isenablemfa; }, [(_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.isenablemfa]);
}
function useTimeFormat() {
    var _a, _b;
    return React.useMemo(() => { var _a, _b; return (_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.timeFormat; }, [(_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.timeFormat]);
}
function useServerTimeZoneId() {
    var _a, _b;
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => { var _a, _b; return (_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.timeZoneId; }, [(_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.timeZoneId]);
}
function useServerTimeZoneOffset() {
    var _a, _b;
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => { var _a, _b; return (_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.timeZoneOffset; }, [(_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.timeZoneOffset]);
}
function useAppVersion() {
    var _a, _b;
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => { var _a, _b; return (_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.appVersion; }, [(_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.appVersion]);
}
function useAllowUnmaskedPasswords() {
    var _a, _b;
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => { var _a, _b; return (_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.allowUnmaskedPasswords; }, [(_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.allowUnmaskedPasswords]);
}
function useProdName() {
    var _a, _b;
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => { var _a, _b; return (_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.prodName; }, [(_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.prodName]);
}
function useIsNotifyReady() {
    var _a, _b;
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => { var _a, _b; return (_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.isNotifyReady; }, [(_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.isNotifyReady]);
}
function useLanguage() {
    var _a, _b;
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => { var _a, _b; return (_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.language; }, [(_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.language]);
}
function useDiskUsage() {
    var _a, _b;
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => { var _a, _b; return (_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.diskUsage; }, [(_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.diskUsage]);
}
function useEnv() {
    var _a, _b;
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => { var _a, _b; return (_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.env; }, [(_b = (_a = window === null || window === void 0 ? void 0 : window.arc) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.env]);
}


/***/ })

}]);