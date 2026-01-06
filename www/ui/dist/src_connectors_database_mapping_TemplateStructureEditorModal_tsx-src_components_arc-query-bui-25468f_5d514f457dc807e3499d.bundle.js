"use strict";
(self["webpackChunkcdata_arc"] = self["webpackChunkcdata_arc"] || []).push([["src_connectors_database_mapping_TemplateStructureEditorModal_tsx-src_components_arc-query-bui-25468f","src_components_arc-query-builder_index_scss-src_components_arc-tree_index_scss-src_components-c9910e"],{

/***/ 64184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TemplateStructureEditorModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(25615);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(26465);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(44324);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(48032);
/* harmony import */ var react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(89567);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(75056);
/* harmony import */ var _components_dropdown_hacker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4938);
/* harmony import */ var _components_arc_suspense__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20289);
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25337);
/* harmony import */ var _mapping_editor_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97418);
/* harmony import */ var _mapping_editor_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29471);
/* harmony import */ var _mapping_editor_Tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75997);
/* harmony import */ var _mapping_editor_Modals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8627);
/* harmony import */ var _mapping_editor_AutoScrollList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81439);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39371);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10766);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2278);
/* harmony import */ var _mapping_editor_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(76677);
/* harmony import */ var _mapping_editor_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(86227);
/* harmony import */ var _SqlParser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(11726);
/* harmony import */ var _mapping_editor_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(97865);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(21333);
/* harmony import */ var _edi_constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(86755);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
























const CodeEditor = react__WEBPACK_IMPORTED_MODULE_0__.lazy(() => Promise.all(/* import() */[__webpack_require__.e("react"), __webpack_require__.e("vendors-node_modules_codemirror_autocomplete_dist_index_js-node_modules_codemirror_commands_d-ffc779"), __webpack_require__.e("vendors-node_modules_codemirror_lang-sql_dist_index_js-node_modules_codemirror_dist_index_js"), __webpack_require__.e("src_components_arc-codemirror_CopyCodeButton_jsx-src_components_arc-codemirror_FormatCodeButton_jsx"), __webpack_require__.e("src_connectors_mapping-editor_CodeEditor_tsx-_80192")]).then(__webpack_require__.bind(__webpack_require__, 63625)));
const TemplateStructureEditorContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const xmlToTemplateDef = (document, tableMap) => {
    var _a, _b, _c;
    const templateDef = {
        name: document.tagName,
        table: document.getAttribute("table") || document.tagName,
        excludedInnerTables: (_b = (_a = document.getAttribute("excludedInnerTables")) === null || _a === void 0 ? void 0 : _a.split(/,*/g)) === null || _b === void 0 ? void 0 : _b.filter(t => t.length > 0),
        supportUpsert: true,
        query: document.getAttribute("query"),
        customQuery: true,
        allColumns: (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .getValueAsBool */ .CO)(document.getAttribute("allColumns"), false),
        action: document.getAttribute("action"),
        upsertQuery: document.getAttribute("upsertQuery"),
        processChangesOnly: (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .getValueAsBool */ .CO)(document.getAttribute("processChangesOnly"), false),
        hasTimeCheckColumns: true,
        templateType: _types__WEBPACK_IMPORTED_MODULE_11__/* .TemplateType */ .nY.SINGLE_TABLE,
        children: [],
        columns: [],
    };
    const table = (0,_SqlParser__WEBPACK_IMPORTED_MODULE_14__/* .unescapeIdentifier */ .k0)(templateDef.qualifiedTableName || templateDef.table);
    const rawDef = tableMap.get(table) || templateDef;
    const definedColumns = rawDef.columns.filter(c => c.isDefined).map(c => c.column);
    templateDef.supportUpsert = rawDef.supportUpsert;
    templateDef.hasTimeCheckColumns = rawDef.hasTimeCheckColumns;
    for (let index = 0; index < document.children.length; index++) {
        const child = document.children[index];
        if (((_c = child.getAttribute("table")) === null || _c === void 0 ? void 0 : _c.length) > 0)
            templateDef.children.push(xmlToTemplateDef(child, tableMap));
        else
            templateDef.columns.push({
                name: child.tagName,
                column: child.getAttribute("column") || child.tagName,
                dataType: child.getAttribute("type") || "string",
                columnSize: parseInt(child.getAttribute("columnSize") || "-1"),
                isNullable: (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .getValueAsBool */ .CO)(child.getAttribute("isNullable"), false),
                isKey: (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .getValueAsBool */ .CO)(child.getAttribute("key"), false),
                isAutoIncrement: (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .getValueAsBool */ .CO)(child.getAttribute("isAutoIncrement"), false),
                isReadOnly: (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .getValueAsBool */ .CO)(child.getAttribute("readonly"), false),
                isSelected: true,
                id: child.getAttribute("id"),
                ref: child.getAttribute("ref"),
                direction: child.getAttribute("direction"),
                internalType: child.getAttribute("internalType"),
                foreignKey: null,
                aggregateTable: child.getAttribute("aggregateTable"),
                updateValue: child.getAttribute("updateValue"),
                timeCheck: (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .getValueAsBool */ .CO)(child.getAttribute("timeCheck"), false),
                upsert: child.getAttribute("upsert"),
                lookup: child.getAttribute("lookup"),
                lookupQuery: child.getAttribute("lookupQuery"),
                insertQuery: child.getAttribute("insertQuery"),
                useFirstResult: (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .getValueAsBool */ .CO)(child.getAttribute("useFirstResult"), false),
                insertNullValue: (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .getValueAsBool */ .CO)(child.getAttribute("insertNullValue"), false),
                isDefined: definedColumns.includes(child.getAttribute("column") || child.tagName),
            });
    }
    return templateDef;
};
const TableDropdown = react__WEBPACK_IMPORTED_MODULE_0__.memo(function (props) {
    const menuRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const [tables, setTables] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const [table, setTable] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const [drop, setDrop] = react__WEBPACK_IMPORTED_MODULE_0__.useState("down");
    const [position, setPosition] = react__WEBPACK_IMPORTED_MODULE_0__.useState({ opacity: 0 });
    const tableColumnsCache = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({}), []);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        (0,_store__WEBPACK_IMPORTED_MODULE_10__/* .listTables */ .WS)(null, props.connectorInfo, props.listTablesUrl, props.direction, props.onError).then(setTables);
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (!props.show || props.target == null || menuRef.current == null)
            return;
        const parentRect = menuRef.current.parentElement.parentElement.getBoundingClientRect();
        const targetRect = props.target.getBoundingClientRect();
        const up = targetRect.top - parentRect.top >= menuRef.current.clientHeight && targetRect.bottom + menuRef.current.clientHeight > parentRect.bottom + 40;
        setDrop(up ? "up" : "down");
        setPosition({ top: up ? targetRect.top - parentRect.top - menuRef.current.clientHeight - 8 : targetRect.bottom - parentRect.top, left: targetRect.left - parentRect.left });
    }, [props.show, props.target]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        var _a;
        if (table == null)
            return;
        const onChange = (columns) => {
            tableColumnsCache[table.qualifiedTableName] = columns;
            props.onChange(table, columns);
            setTable(null);
            setDrop("down");
            setPosition({ opacity: 0 });
            props.onHide();
        };
        if (((_a = tableColumnsCache[table.qualifiedTableName]) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            onChange(tableColumnsCache[table.qualifiedTableName]);
            return;
        }
        const controller = new AbortController();
        (0,_store__WEBPACK_IMPORTED_MODULE_10__/* .listColumns */ .Ux)(controller, props.connectorInfo, props.listColumnsUrl, table, props.onError).then(onChange);
        return () => controller.abort();
    }, [table, props.onChange]);
    const getItemKey = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((table) => table.tableName, []);
    const renderItem = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((renderProps) => react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A.Item, { key: renderProps.item.qualifiedTableName, className: `${renderProps.className} px-2`, active: renderProps.active, onClick: setTable.bind(null, renderProps.item) }, getItemKey(renderProps.item)), [setTable]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, { className: "table-dropdown w-100", show: props.show, drop: drop, style: position, onClick: event => event.stopPropagation() },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_dropdown_hacker__WEBPACK_IMPORTED_MODULE_1__/* .DropdownHacker */ .G, null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A.Menu, { className: "px-2 mt-1 w-auto", ref: menuRef }, props.show && tables != null ?
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mapping_editor_AutoScrollList__WEBPACK_IMPORTED_MODULE_8__/* .SearchableAutoScrollList */ .F, { key: props.nodeId, items: tables, paging: 40, renderItem: renderItem, getItemKey: getItemKey, onSelected: setTable, className: "ps-0" }) :
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "loading-status d-flex justify-content-center p-3" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-spinner fa-pulse fa-xl" })))));
});
const TemplateStructureNode = react__WEBPACK_IMPORTED_MODULE_0__.memo((props) => {
    const ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(TemplateStructureEditorContext);
    const nameRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const table = props.data.table || props.data.qualifiedTableName;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (nameRef.current == null || (table === null || table === void 0 ? void 0 : table.length) > 0)
            return;
        nameRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: props.id, className: `${props.className} d-flex align-items-center gap-3 mt-3`, "data-node-id": props.id },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "table-editor d-flex align-items-center dropdown-toggle", ref: nameRef, onClick: (event) => (event.stopPropagation(), ctx.onToggle(nameRef.current)) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "table-icon" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-regular fa-table" })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "text-truncate w-100" }, table || _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.SelectTable)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "ms-auto" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "d-flex align-items-center gap-3" },
                (table === null || table === void 0 ? void 0 : table.length) > 0 && react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-regular fa-arrow-turn-down-left", "data-tooltip-id": "reactTooltip", "data-tooltip-content": _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.AddChildTable, onClick: ctx.onAddChildTable.bind(props, props.id) }),
                props.depth > 1 && react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-regular fa-trash-can", "data-tooltip-id": "reactTooltip", "data-tooltip-content": _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.RemoveTable, onClick: ctx.onRemoveTable.bind(props, props.id) })))));
});
function TemplateStructureEditor(props) {
    const [dropdownInfo, setDropdownInfo] = react__WEBPACK_IMPORTED_MODULE_0__.useState({ show: false });
    const hideDropdown = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => setDropdownInfo({ show: false }), [setDropdownInfo]);
    const ref = (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .useClickOutsideCheck */ .jn)(hideDropdown);
    const handleSaveSampleData = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => (0,_store__WEBPACK_IMPORTED_MODULE_10__/* .saveSampleData */ .YY)(props.connectorInfo, props.direction, props.code), [props.connectorInfo, props.direction, props.code]);
    const { tooltip, handleClick, resetTooltip } = (0,_mapping_editor_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useStatefulTooltip */ .R)(_constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.SaveSampleData, _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.Saving, _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.Saved, handleSaveSampleData);
    const onAddChildTable = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((nodeId) => {
        const node = (0,_mapping_editor_helper__WEBPACK_IMPORTED_MODULE_5__/* .locateToNodeById */ .mN)([props.structure], nodeId);
        if (node == null)
            return false;
        if (node.children == null)
            node.children = [];
        node.children.push({
            id: (0,_mapping_editor_helper__WEBPACK_IMPORTED_MODULE_5__/* .genNodeId */ .K2)(),
            component: "Structure",
            data: { parent: node },
            expand: true
        });
        props.updateStructure(Object.assign({}, props.structure));
    }, [props.structure, props.updateStructure]);
    const onRemoveTable = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((nodeId) => {
        var _a;
        const node = (0,_mapping_editor_helper__WEBPACK_IMPORTED_MODULE_5__/* .locateToNodeById */ .mN)([props.structure], nodeId);
        if (node == null || node.data.parent == null)
            return false;
        node.data.parent.children.splice(node.data.parent.children.indexOf(node), 1);
        node.data.parent.children.length === 0 && delete node.data.parent.children;
        if (((_a = node.data.parent.data.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            node.data.parent.data.children.splice(node.data.parent.data.children.indexOf(node.data), 1);
            node.data.parent.data.children.length === 0 && delete node.data.parent.data.children;
        }
        const mappingNode = node.data.mappingNode;
        if (mappingNode != null && mappingNode.data.parent != null) {
            mappingNode.data.parent.children.splice(mappingNode.data.parent.children.indexOf(mappingNode), 1);
            mappingNode.data.parent.children.length === 0 && delete mappingNode.data.parent.children;
        }
        props.updateStructure(Object.assign({}, props.structure));
    }, [props.structure, props.updateStructure]);
    const onTableChange = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((nodeId, table, columns) => {
        var _a;
        const node = (0,_mapping_editor_helper__WEBPACK_IMPORTED_MODULE_5__/* .locateToNodeById */ .mN)([props.structure], nodeId);
        if (node == null)
            return false;
        let mappingNode = node.data.mappingNode;
        let templateDef = (0,_helper__WEBPACK_IMPORTED_MODULE_9__/* .tableToTemplateDef */ .Bf)(table, columns);
        if (templateDef.table === node.data.table)
            templateDef = (0,_helper__WEBPACK_IMPORTED_MODULE_9__/* .mergeTemplateDef */ .S8)(templateDef, node.data);
        if (((_a = node.data.children) === null || _a === void 0 ? void 0 : _a.length) > 0)
            templateDef.children = [...node.data.children];
        const oldTable = node.data;
        node.data = Object.assign(Object.assign({}, templateDef), { parent: node.data.parent });
        if (node.data.parent != null) {
            if (node.data.parent.data.children == null)
                node.data.parent.data.children = [];
            const index = node.data.parent.data.children.indexOf(oldTable);
            node.data.parent.data.children.splice(index >= 0 ? index : node.data.parent.data.children.length, 1, node.data);
        }
        if (mappingNode == null && node.data.parent != null && node.data.parent.data.mappingNode != null) {
            const parent = node.data.parent.data.mappingNode;
            mappingNode = Object.assign(Object.assign({}, parent), { data: Object.assign(Object.assign({}, parent.data), { parent }), children: null, attributes: null });
            if (parent.children == null)
                parent.children = [];
            parent.children.push(mappingNode);
        }
        if (mappingNode != null && mappingNode.data.parent != null) {
            const newNode = (0,_helper__WEBPACK_IMPORTED_MODULE_9__/* .tableToNode */ .Op)(node.data, "Database", mappingNode.data.parent);
            const index = mappingNode.data.parent.children.indexOf(mappingNode);
            mappingNode.data.parent.children.splice(index >= 0 ? index : mappingNode.data.parent.children.length, 1, newNode);
            node.data.mappingNode = newNode;
        }
        props.updateStructure(Object.assign({}, props.structure));
    }, [props.structure, props.updateStructure]);
    const onToggle = (target) => {
        setDropdownInfo(dropdownInfo => {
            if (target == null || dropdownInfo.target === target)
                return { show: false };
            return { show: true, target: target, nodeId: (0,_mapping_editor_helper__WEBPACK_IMPORTED_MODULE_5__/* .getElementAttr */ ._9)(target, "data-node-id") };
        });
    };
    const render = () => {
        var _a, _b;
        if (props.codeView || props.previewXML) {
            const validator = react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.XML,
                " ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { "data-tooltip-id": "reactTooltip", "data-tooltip-content": props.codeError, className: ((_a = props.codeError) === null || _a === void 0 ? void 0 : _a.length) > 0 ? "fa fa-xmark-circle text-danger" : "fa fa-check-circle text-success" }));
            const controller = props.previewXML ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, { variant: "outline-secondary", size: "sm", className: "border-white d-flex align-items-center justify-content-center", "data-tooltip-id": "reactTooltip", "data-tooltip-content": tooltip, disabled: !(((_b = props.code) === null || _b === void 0 ? void 0 : _b.length) > 0), onClick: handleClick, onMouseLeave: resetTooltip },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-save" })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { "data-tooltip-id": "reactTooltip", "data-tooltip-content": _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.Document, href: props.helpUrl, target: "_blank", rel: "noreferrer", className: "text-secondary d-flex align-items-center justify-content-center" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-question-circle-o" }))) : null;
            const loading = props.previewXML && props.code == null;
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: `template-code-view ${props.previewXML ? "preview" : ""} ${props.previewXML && props.paging != null ? "paging" : ""} ${loading ? "loading" : ""}` },
                loading && react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "loading-status position-absolute w-100 d-flex justify-content-center align-items-center" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-spinner fa-pulse fa-xl" })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_arc_suspense__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null,
                    props.previewXML && react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", { className: "m-0" }, _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.SampleData),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(CodeEditor, { key: "" + props.previewXML, text: props.code, onChange: props.updateCode, validator: validator, controller: controller, footer: props.previewXML ? props.paging : null, readOnly: props.previewXML })));
        }
        else {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "template-designer-editor position-relative", ref: ref, onClick: hideDropdown },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(TableDropdown, Object.assign({}, props, dropdownInfo, { onHide: setDropdownInfo.bind(null, { show: false }), onChange: onTableChange.bind(null, dropdownInfo.nodeId) })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "template-designer-editor-header d-flex align-items-center gap-3 px-4 py-3" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "connector-icon d-flex text-center align-items-center me-2" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { key: "source", className: `app-icon app-icon-${props.connectorInfo.connectorType.toLowerCase().replace(/^cdata(.+)$/, "$1")} h-100 w-100` })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "split-header-body d-flex flex-column gap-1" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", { className: "m-0" }, props.connectorInfo.connectorType.replace(/V\d+$/, "")),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "text-truncate" }, props.connectorInfo.connectionName))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "template-designer-editor-body pt-4 ps-4" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", { className: "d-flex align-items-center gap-2 px-3 m-0" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-regular fa-database" }),
                        props.direction === _mapping_editor_types__WEBPACK_IMPORTED_MODULE_4__/* .ConnectorDirection */ .ZW.Output ? _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.SelectFrom : _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.UpsertTo,
                        ":"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(TemplateStructureEditorContext.Provider, { value: { onAddChildTable, onRemoveTable, onToggle } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mapping_editor_Tree__WEBPACK_IMPORTED_MODULE_6__/* .GeneralTree */ .f, { className: "pb-4 pe-4", nodes: [props.structure], type: "Structure", nodeComponents: { Structure: TemplateStructureNode }, nodeEvents: {} }))));
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "template-structure-editor" }, render()));
}
function TemplateStructureEditorModal(props) {
    const [root, initStructure, initOptions, initCode] = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        var _a, _b;
        const initStructure = { id: (0,_mapping_editor_helper__WEBPACK_IMPORTED_MODULE_5__/* .genNodeId */ .K2)(), component: "Structure", data: {}, expand: true };
        const options = { processChangesOnly: false, updateValue: false };
        if (props.root == null)
            return [null, initStructure, options, null];
        const root = (0,_mapping_editor_helper__WEBPACK_IMPORTED_MODULE_5__/* .cloneNodes */ .Bp)([{ id: "", name: "", component: props.root.component, data: { type: _mapping_editor_types__WEBPACK_IMPORTED_MODULE_4__/* .NodeType */ .Z6.Group }, children: [props.root] }], n => n)[0];
        const structure = (0,_helper__WEBPACK_IMPORTED_MODULE_9__/* .toStructure */ .$P)((0,_mapping_editor_helper__WEBPACK_IMPORTED_MODULE_5__/* .ungroupMapping */ .pe)(root)[0]);
        if (props.direction === _mapping_editor_types__WEBPACK_IMPORTED_MODULE_4__/* .ConnectorDirection */ .ZW.Output && structure != null && ((_a = structure.data.table) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            options.processChangesOnly = structure.data.processChangesOnly;
            options.timeCheckColumn = (_b = structure.data.columns.find(c => c.timeCheck)) === null || _b === void 0 ? void 0 : _b.column;
            const updateColumn = structure.data.columns.find(c => { var _a; return ((_a = c.updateValue) === null || _a === void 0 ? void 0 : _a.length) > 0; });
            if (updateColumn != null) {
                options.updateValue = true;
                options.updateColumnName = updateColumn.column;
                options.updateColumnValue = updateColumn.updateValue;
            }
        }
        return [root, structure !== null && structure !== void 0 ? structure : initStructure, options, structure == null ? "" : (structure.data.templateType === _types__WEBPACK_IMPORTED_MODULE_11__/* .TemplateType */ .nY.COMPLEX ? structure.data.templateContent : null) || (0,_helper__WEBPACK_IMPORTED_MODULE_9__/* .generateTemplateXML */ .rT)(structure.data, props.direction === _mapping_editor_types__WEBPACK_IMPORTED_MODULE_4__/* .ConnectorDirection */ .ZW.Output)];
    }, [props.root, props.action]);
    const [structure, setStructure] = react__WEBPACK_IMPORTED_MODULE_0__.useState(initStructure);
    const [code, setCode] = react__WEBPACK_IMPORTED_MODULE_0__.useState(initCode);
    const [codeView, setCodeView] = react__WEBPACK_IMPORTED_MODULE_0__.useState(structure.data.templateType === _types__WEBPACK_IMPORTED_MODULE_11__/* .TemplateType */ .nY.COMPLEX);
    const [previewXML, setPreviewXML] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const [previewResult, setPreviewResult] = react__WEBPACK_IMPORTED_MODULE_0__.useState({ count: -1, cursor: 0, current: null });
    const [codeError, setCodeError] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const [confirmed, setConfirmed] = react__WEBPACK_IMPORTED_MODULE_0__.useState(true);
    const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const [tab, setTab] = react__WEBPACK_IMPORTED_MODULE_0__.useState(_constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.Tables);
    const [options, setOptions] = react__WEBPACK_IMPORTED_MODULE_0__.useState(initOptions);
    const datetimeColumns = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => { var _a; return (_a = structure.data.columns) === null || _a === void 0 ? void 0 : _a.filter(c => c.isDefined && (0,_helper__WEBPACK_IMPORTED_MODULE_9__/* .toNodeDataType */ .I1)(c) === _mapping_editor_types__WEBPACK_IMPORTED_MODULE_4__/* .NodeDataType */ .zX.DateTime).map(c => c.column); }, [structure.data.columns]);
    const updateColumns = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => { var _a, _b; return !((_a = structure.data.columns) === null || _a === void 0 ? void 0 : _a.some(c => c.isKey && c.isDefined)) ? null : (_b = structure.data.columns) === null || _b === void 0 ? void 0 : _b.filter(c => !c.isKey && c.isDefined).map(c => c.column); }, [structure.data.columns]);
    const handleCodeChange = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((code) => {
        setCode(code);
        const error = (0,_mapping_editor_helper__WEBPACK_IMPORTED_MODULE_5__/* .validateXML */ .KY)(code);
        setCodeError(error);
    }, [setCode, setCodeError]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (!previewXML)
            return;
        const controller = new AbortController();
        (() => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const info = yield (0,_store__WEBPACK_IMPORTED_MODULE_10__/* .previewMapping */ .ze)(controller, props.connectorInfo, props.direction, props.action, props.previewMappingUrl, structure.data.templateContent, previewResult);
            setPreviewResult(Object.assign({}, info));
            ((_a = info.error) === null || _a === void 0 ? void 0 : _a.length) > 0 && setError(info.error);
        }))();
        return () => {
            controller.abort();
        };
    }, [previewXML, previewResult.cursor]);
    if (!props.show || (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .renderReactModalByParent */ .wf)("DatabaseMapping.TemplateStructureEditorModal", props))
        return null;
    const applyOptions = (templateDef) => {
        if (props.direction === _mapping_editor_types__WEBPACK_IMPORTED_MODULE_4__/* .ConnectorDirection */ .ZW.Output && JSON.stringify(options) !== JSON.stringify(initOptions)) {
            templateDef.processChangesOnly = options.processChangesOnly;
            templateDef.columns.forEach(column => {
                column.timeCheck = options.processChangesOnly && column.column === options.timeCheckColumn;
                column.updateValue = options.updateValue && column.column === options.updateColumnName ? options.updateColumnValue : null;
            });
        }
        return templateDef;
    };
    const handleCodeView = (event) => {
        setCodeView(event.target.checked);
        const defCode = (0,_helper__WEBPACK_IMPORTED_MODULE_9__/* .generateTemplateXML */ .rT)(applyOptions(Object.assign(Object.assign({}, structure.data), { templateType: _types__WEBPACK_IMPORTED_MODULE_11__/* .TemplateType */ .nY.SINGLE_TABLE, columns: [...structure.data.columns] })), props.direction === _mapping_editor_types__WEBPACK_IMPORTED_MODULE_4__/* .ConnectorDirection */ .ZW.Output);
        if (event.target.checked) {
            setCode(defCode);
            setCodeError(null);
            setConfirmed(true);
        }
        else if (defCode === code) {
            setCodeError(null);
            setConfirmed(true);
        }
        else {
            setCodeView(true);
            setConfirmed(false);
        }
    };
    const handlePreviewXML = (event) => {
        setPreviewXML(event.target.checked);
        event.target.checked && (structure.data.templateContent = codeView ? code : (0,_helper__WEBPACK_IMPORTED_MODULE_9__/* .generateTemplateXML */ .rT)(applyOptions(Object.assign(Object.assign({}, structure.data), { templateType: _types__WEBPACK_IMPORTED_MODULE_11__/* .TemplateType */ .nY.SINGLE_TABLE, columns: [...structure.data.columns] })), props.direction === _mapping_editor_types__WEBPACK_IMPORTED_MODULE_4__/* .ConnectorDirection */ .ZW.Output));
        setPreviewResult({ count: -1, cursor: 0, current: null });
    };
    const handleSaveChanges = () => {
        applyOptions(structure.data);
        structure.data.templateType = _types__WEBPACK_IMPORTED_MODULE_11__/* .TemplateType */ .nY.SINGLE_TABLE;
        if (root != null && !codeView) {
            (0,_mapping_editor_helper__WEBPACK_IMPORTED_MODULE_5__/* .iterateNodes */ .K$)([structure], node => {
                var _a, _b;
                const mappingNode = node.data.mappingNode;
                if (mappingNode) {
                    if (((_a = node.data.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                        const children = [...(_b = mappingNode.data.tableDef.children) !== null && _b !== void 0 ? _b : []];
                        mappingNode.data.tableDef.children = node.data.children.map(tableDef => {
                            const tableName = tableDef.qualifiedTableName || tableDef.table;
                            return children.find(child => (child.qualifiedTableName || child.table) === tableName) || tableDef;
                        });
                    }
                    else
                        delete mappingNode.data.tableDef.children;
                }
                return true;
            }, false);
            props.onSaveStructure(root.children[0]);
        }
        else if (!codeView || (0,_helper__WEBPACK_IMPORTED_MODULE_9__/* .generateTemplateXML */ .rT)(structure.data, props.direction === _mapping_editor_types__WEBPACK_IMPORTED_MODULE_4__/* .ConnectorDirection */ .ZW.Output) === code) {
            props.onSaveStructure((0,_helper__WEBPACK_IMPORTED_MODULE_9__/* .templateToNode */ .kk)(structure.data, "Database"));
        }
        else {
            let rootElement = (0,_mapping_editor_helper__WEBPACK_IMPORTED_MODULE_5__/* .validateRSBScript */ .TF)(code).document.children[0].children[0];
            if (rootElement.tagName === "Items")
                rootElement = rootElement.children[0];
            const tableMap = new Map();
            (0,_mapping_editor_helper__WEBPACK_IMPORTED_MODULE_5__/* .iterateNodes */ .K$)([structure], node => (tableMap.set((0,_SqlParser__WEBPACK_IMPORTED_MODULE_14__/* .unescapeIdentifier */ .k0)(node.data.qualifiedTableName || node.data.table), node.data), true));
            const templateDef = xmlToTemplateDef(rootElement, tableMap);
            templateDef.templateContent = code;
            structure.data.templateType = templateDef.templateType = _types__WEBPACK_IMPORTED_MODULE_11__/* .TemplateType */ .nY.COMPLEX;
            const mapping = (0,_helper__WEBPACK_IMPORTED_MODULE_9__/* .templateToNode */ .kk)(templateDef, "Database");
            root != null && (0,_mapping_editor_helper__WEBPACK_IMPORTED_MODULE_5__/* .iterateNodes */ .K$)(root.children, node => {
                delete node.data.tableDef;
                delete node.data.columnDef;
                return true;
            });
            props.onSaveStructure(root != null ? (0,_mapping_editor_helper__WEBPACK_IMPORTED_MODULE_5__/* .mergeMapping */ .fQ)(root.children[0], mapping) : mapping);
        }
        props.onHide();
    };
    const renderHeader = () => {
        var _a, _b, _c;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A.Title, { className: "d-flex" }, root == null || !(((_a = structure.data.table) === null || _a === void 0 ? void 0 : _a.length) > 0) ? (props.action === _types__WEBPACK_IMPORTED_MODULE_11__/* .DatabaseAction */ .ut.Select ? _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.AddSourceStructure : _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.AddDestinationStructure) : (props.direction === _mapping_editor_types__WEBPACK_IMPORTED_MODULE_4__/* .ConnectorDirection */ .ZW.Output ? _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.EditSourceStructure : _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.EditDestinationStructure)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "ms-auto d-flex align-items-center gap-3" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A.Check, { disabled: !(((_b = structure.data.table) === null || _b === void 0 ? void 0 : _b.length) > 0) || previewXML || !confirmed, id: "TemplateStructureEditorModel_code_view_switch", className: "script-mode-switch d-flex align-items-center", type: "switch", label: _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.CodeView, checked: codeView, onChange: handleCodeView }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A.Check, { disabled: !(((_c = structure.data.table) === null || _c === void 0 ? void 0 : _c.length) > 0) || !previewXML && (codeError === null || codeError === void 0 ? void 0 : codeError.length) > 0, id: "TemplateStructureEditorModel_preview_xml_switch", className: "script-mode-switch d-flex align-items-center", type: "switch", label: _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.PreviewXML, checked: previewXML, onChange: handlePreviewXML }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { "data-tooltip-id": "reactTooltip", "data-tooltip-content": _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.Document, href: "help.rst#EDI-Mapping|" + _edi_constants__WEBPACK_IMPORTED_MODULE_17__/* .LinkTokens */ .z.UnderstandingSourceDestination, target: "_blank", rel: "noreferrer", className: "me-3 text-secondary" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-question-circle-o" }))));
    };
    const renderExtraHeader = () => confirmed ? null : react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mapping_editor_components__WEBPACK_IMPORTED_MODULE_12__/* .ConfirmationBanner */ .o4, { prompt: _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.ModificationsLostPrompt, confirm: _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.Continue, onConfirm: () => (setCodeView(codeView => !codeView), setConfirmed(true)), onDeny: setConfirmed.bind(null, true) });
    const renderStructureEditor = () => {
        const paging = previewXML && (previewResult === null || previewResult === void 0 ? void 0 : previewResult.count) > 1 ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "paging-controller d-flex align-items-center w-100" },
            previewResult.cursor > 0 && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "d-flex align-items-center gap-2", onClick: () => setPreviewResult(info => (Object.assign(Object.assign({}, info), { cursor: info.cursor - 1 }))) },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-arrow-left" }),
                _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.Back),
            previewResult.cursor < previewResult.count - 1 && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "d-flex align-items-center gap-2 ms-auto", onClick: () => setPreviewResult(info => (Object.assign(Object.assign({}, info), { cursor: info.cursor + 1 }))) },
                _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.Next,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-arrow-right" }))) : null;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TemplateStructureEditor, Object.assign({}, props, { structure: structure, updateStructure: setStructure, codeView: codeView && !previewXML, previewXML: previewXML, paging: paging, code: previewXML ? previewResult.current : code, codeError: paging ? null : codeError, updateCode: previewXML ? () => undefined : handleCodeChange, onError: setError }));
    };
    const renderBody = () => {
        var _a, _b;
        const description = react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "action-description m-0 pb-4" }, previewXML ? _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.CycleThroughAvailableData : (props.direction === _mapping_editor_types__WEBPACK_IMPORTED_MODULE_4__/* .ConnectorDirection */ .ZW.Input ? _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.UPSERTStructureDescription : _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.SelectStructureDescription));
        if (props.direction === _mapping_editor_types__WEBPACK_IMPORTED_MODULE_4__/* .ConnectorDirection */ .ZW.Output) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, { className: `fw-bold d-flex align-items-end ${!codeView && !previewXML && ((_a = structure.data.table) === null || _a === void 0 ? void 0 : _a.length) > 0 ? "show" : "d-none"}`, activeKey: codeView || previewXML ? _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.Tables : tab, onSelect: setTab },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, { className: "tables-tab p-4", eventKey: _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.Tables, title: _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.Tables },
                        description,
                        renderStructureEditor()),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, { className: "options-tab", eventKey: _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.Options, title: _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.Options },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "action-description m-0 pt-4 ps-4" }, _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.SelectOptionsDescription),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "select-options d-flex flex-column p-4 gap-4" },
                            (datetimeColumns === null || datetimeColumns === void 0 ? void 0 : datetimeColumns.length) > 0 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A.Check, { id: "TemplateStructureEditorModal_processChangesOnly", className: "d-flex align-items-center gap-2", label: structure.data.hasTimeCheckColumns && !(((_b = options.timeCheckColumn) === null || _b === void 0 ? void 0 : _b.length) > 0) ? _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.OnlyProcessNewForChangedRecords : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "d-flex align-items-center gap-2" },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.UseColumn),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { disabled: !options.processChangesOnly, className: "form-select time-check-column", value: options.timeCheckColumn || "", onChange: e => setOptions(options => (Object.assign(Object.assign({}, options), { timeCheckColumn: e.target.value }))) }, datetimeColumns.map(column => react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { key: column, value: column }, column))),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "text-truncate" }, _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.ForProcessingNewForChangedRecords))), checked: options.processChangesOnly, onChange: e => setOptions(options => (Object.assign(Object.assign({}, options), { processChangesOnly: e.target.checked }))) })),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A.Check, { disabled: !((updateColumns === null || updateColumns === void 0 ? void 0 : updateColumns.length) > 0), id: "TemplateStructureEditorModal_updateValue", className: "d-flex align-items-center gap-2", label: !((updateColumns === null || updateColumns === void 0 ? void 0 : updateColumns.length) > 0) ? _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.UpdateValueTip : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "d-flex align-items-center gap-2" },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.Update),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { disabled: !options.updateValue, className: "form-select update-column-name", value: options.updateColumnName || "", onChange: e => setOptions(options => (Object.assign(Object.assign({}, options), { updateColumnName: e.target.value }))) }, updateColumns.map(column => react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { key: column, value: column }, column))),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.With),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { disabled: !options.updateValue, className: "form-control update-column-value w-25", type: "text", placeholder: _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.Value, value: options.updateColumnValue || "", onChange: e => setOptions(options => (Object.assign(Object.assign({}, options), { updateColumnValue: e.target.value }))) }),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "text-truncate" }, _constants__WEBPACK_IMPORTED_MODULE_16__/* .MappingTokens */ .B.WhenRowsAreProcessed))), checked: (updateColumns === null || updateColumns === void 0 ? void 0 : updateColumns.length) > 0 && options.updateValue, onChange: e => setOptions(options => (Object.assign(Object.assign({}, options), { updateValue: e.target.checked }))) })))));
        }
        else
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                description,
                renderStructureEditor());
    };
    const renderFooter = () => {
        var _a;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, { variant: "outline-secondary", className: "border-0", onClick: props.onHide },
                " ",
                _mapping_editor_constants__WEBPACK_IMPORTED_MODULE_15__/* .TOKENS */ .xZ.CANCEL),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, { className: "border-0", disabled: (codeError === null || codeError === void 0 ? void 0 : codeError.length) > 0 || !(((_a = structure.data.table) === null || _a === void 0 ? void 0 : _a.length) > 0), onClick: handleSaveChanges }, _mapping_editor_constants__WEBPACK_IMPORTED_MODULE_15__/* .TOKENS */ .xZ.APPLY));
    };
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mapping_editor_Modals__WEBPACK_IMPORTED_MODULE_7__/* .BaseModal */ .dW, Object.assign({}, props, { renderHeader: renderHeader, renderExtraHeader: renderExtraHeader, renderBody: renderBody, renderFooter: renderFooter, alert: { type: "error", message: error, onClose: () => setError(null) }, className: `template-structure-editor-modal ${previewXML ? "preview" : ""}`, bodyClassName: props.direction === _mapping_editor_types__WEBPACK_IMPORTED_MODULE_4__/* .ConnectorDirection */ .ZW.Output ? "p-0" : "p-4" }));
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


/***/ })

}]);