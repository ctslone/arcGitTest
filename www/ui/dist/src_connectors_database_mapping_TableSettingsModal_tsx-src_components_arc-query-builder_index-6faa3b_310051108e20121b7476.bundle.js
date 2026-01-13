"use strict";
(self["webpackChunkcdata_arc"] = self["webpackChunkcdata_arc"] || []).push([["src_connectors_database_mapping_TableSettingsModal_tsx-src_components_arc-query-builder_index-6faa3b","src_components_arc-query-builder_index_scss-src_components_arc-tree_index_scss-src_components-c9910e"],{

/***/ 45315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TableSettingsModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(25615);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(26465);
/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(71461);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(44324);
/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(15192);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(48032);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(75056);
/* harmony import */ var react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(89567);
/* harmony import */ var react_querybuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18149);
/* harmony import */ var _components_arc_query_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2580);
/* harmony import */ var _components_arc_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57491);
/* harmony import */ var _components_arc_suspense__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20289);
/* harmony import */ var _shared_ConditionMappingBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60219);
/* harmony import */ var _mapping_editor_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97418);
/* harmony import */ var _mapping_editor_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29471);
/* harmony import */ var _mapping_editor_Modals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8627);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2278);
/* harmony import */ var _mapping_editor_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(76677);
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25337);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(39371);
/* harmony import */ var _SqlParser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(11726);
/* harmony import */ var _mapping_editor_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(97865);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(21333);
/* harmony import */ var _edi_constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(86755);

























const CodeEditor = react__WEBPACK_IMPORTED_MODULE_0__.lazy(() => Promise.all(/* import() */[__webpack_require__.e("react"), __webpack_require__.e("vendors-node_modules_codemirror_lang-sql_dist_index_js-node_modules_codemirror_dist_index_js"), __webpack_require__.e("src_components_arc-codemirror_CopyCodeButton_jsx-src_components_arc-codemirror_FormatCodeButton_jsx"), __webpack_require__.e("src_connectors_mapping-editor_CodeEditor_tsx-_80191")]).then(__webpack_require__.bind(__webpack_require__, 63625)));
var OrderBySortOpt;
(function (OrderBySortOpt) {
    OrderBySortOpt["ASC"] = "ASC";
    OrderBySortOpt["DESC"] = "DESC";
})(OrderBySortOpt || (OrderBySortOpt = {}));
const toSQLOperator = (operator) => {
    switch (operator.toLowerCase()) {
        case "null":
            return "IS NULL";
        case "notnull":
            return "IS NOT NULL";
        case "notin":
            return "NOT IN";
        case "notbetween":
            return "NOT BETWEEN";
        case "contains":
        case "beginswith":
        case "endswith":
            return "LIKE";
        case "doesnotcontain":
        case "doesnotbeginwith":
        case "doesnotendwith":
            return "NOT LIKE";
        case "isempty":
            return "= ''";
        case "isnotempty":
            return "!= ''";
        default:
            return operator;
    }
};
const valueProcessor = (rule, options) => {
    var _a;
    const operatorLowerCase = rule.operator.toLowerCase();
    if (["isempty", "isnotempty"].includes(operatorLowerCase))
        return "";
    let value = (_a = rule.value.value) !== null && _a !== void 0 ? _a : rule.value;
    if (rule.value.reference) {
        value = "${" + rule.value.value + "}";
    }
    else {
        return (0,react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .defaultValueProcessorByRule */ .yJ)(Object.assign(Object.assign({}, rule), { value }), options);
    }
    return ["in", "notin"].includes(operatorLowerCase) ? `(${value})` : value;
};
const ruleProcessor = (rule, options) => {
    var _a;
    const operator = toSQLOperator(rule.operator);
    if (((_a = _components_arc_query_builder__WEBPACK_IMPORTED_MODULE_2__/* .arcOperators */ .O4.find(op => op.name === rule.operator)) === null || _a === void 0 ? void 0 : _a.arity) === "unary") {
        return `${(0,_SqlParser__WEBPACK_IMPORTED_MODULE_13__/* .escapeIdentifier */ .F)(rule.field)} ${operator}`;
    }
    else {
        const value = valueProcessor(rule, options);
        return !value ? "" : `${(0,_SqlParser__WEBPACK_IMPORTED_MODULE_13__/* .escapeIdentifier */ .F)(rule.field)} ${operator} ${value}`.trim();
    }
};
const buildSelectQuery = (tableDef, columns, filter, orderBy, limit, pretty = true) => {
    if (tableDef == null)
        return "";
    return (0,_SqlParser__WEBPACK_IMPORTED_MODULE_13__/* .buildQuery */ .Zq)(tableDef.qualifiedTableName || tableDef.table, columns, filter, orderBy, limit, pretty);
};
const resolveGroup = (group, references) => {
    var _a, _b;
    const id = (0,_components_utils__WEBPACK_IMPORTED_MODULE_11__/* .genElemId */ .Nf)("group");
    if (((_a = group.rules) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        return Object.assign(Object.assign({ id }, group), { rules: group.rules.map((rule) => resolveGroup(rule, references)) });
    }
    else if (((_b = references[group.value]) === null || _b === void 0 ? void 0 : _b.length) > 0) {
        const value = references[group.value];
        return Object.assign(Object.assign({ id }, group), { value: { reference: true, value: value.slice("${".length, value.length - 1) } });
    }
    else if (group.value.length > 0 || !["=", "!="].includes(group.operator)) {
        return Object.assign(Object.assign({ id }, group), { value: { reference: false, value: group.value } });
    }
    else {
        return Object.assign(Object.assign({ id }, group), { value: { reference: false, value: "" }, operator: group.operator === "=" ? "isEmpty" : "isNotEmpty" });
    }
};
const normalizeQueryGroup = (group) => {
    var _a;
    group = Object.assign({}, group);
    group.rules = group.rules.map(rule => (0,react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .isRuleGroupType */ .wS)(rule) ? normalizeQueryGroup(rule) : rule).filter(rule => rule != null);
    return ((_a = group.rules) === null || _a === void 0 ? void 0 : _a.length) > 0 ? group : null;
};
const resolveQuery = (sql, tableDef) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    sql = sql || buildSelectQuery(tableDef, ["*"], null, null, null);
    const queryInfo = {
        sql,
        table: "",
        columns: ["*"],
        orderBy: null,
        limit: null,
        filter: null,
        custom: false,
        query: { rules: [], not: false },
    };
    if (!((sql === null || sql === void 0 ? void 0 : sql.length) > 0))
        return queryInfo;
    queryInfo.custom = true;
    const select = (0,_SqlParser__WEBPACK_IMPORTED_MODULE_13__/* .parseQuery */ .mA)(sql, (normalizedSql, references, filter) => {
        if ((filter === null || filter === void 0 ? void 0 : filter.length) > 0) {
            references = Object.keys(references).reduce((map, key) => (map[key.substring(1, key.length - 1)] = references[key], map), {});
            queryInfo.query = resolveGroup((0,react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .parseSQL */ ._E)(normalizedSql), references);
            queryInfo.filter = filter;
        }
    });
    if (!select || select.type !== "Select" || select.distinctOpt || select.groupBy || select.having || select.partition || select.procedure || select.straightJoinOpt) {
        return queryInfo;
    }
    if (((_a = select.from) === null || _a === void 0 ? void 0 : _a.value) && select.from.value.length === 1) {
        queryInfo.table = (0,_SqlParser__WEBPACK_IMPORTED_MODULE_13__/* .unescapeIdentifier */ .k0)((_d = (_c = (_b = select.from.value[0]) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.value) === null || _d === void 0 ? void 0 : _d.value);
    }
    if (!queryInfo.table || queryInfo.table !== (0,_SqlParser__WEBPACK_IMPORTED_MODULE_13__/* .unescapeIdentifier */ .k0)(tableDef.qualifiedTableName || tableDef.table)) {
        return queryInfo;
    }
    if ((_e = select.selectItems) === null || _e === void 0 ? void 0 : _e.value) {
        if (select.selectItems.value.some((col) => col.type !== "Identifier"))
            return queryInfo;
        queryInfo.columns = select.selectItems.value.map((col) => col.value);
        if (queryInfo.columns.some(colName => colName != "*" && !tableDef.columns.some(col => col.column === colName)))
            return queryInfo;
    }
    if (((_g = (_f = select.orderBy) === null || _f === void 0 ? void 0 : _f.value) === null || _g === void 0 ? void 0 : _g.length) === 1) {
        queryInfo.orderBy = {
            sortOpt: select.orderBy.value[0].sortOpt,
            column: (0,_SqlParser__WEBPACK_IMPORTED_MODULE_13__/* .unescapeIdentifier */ .k0)((_h = select.orderBy.value[0].value) === null || _h === void 0 ? void 0 : _h.value),
        };
    }
    else if (((_k = (_j = select.orderBy) === null || _j === void 0 ? void 0 : _j.value) === null || _k === void 0 ? void 0 : _k.length) > 1) {
        return queryInfo;
    }
    if (((_l = select.limit) === null || _l === void 0 ? void 0 : _l.value) && select.limit.value.length === 1) {
        queryInfo.limit = Number(select.limit.value[0]);
        if (queryInfo.limit > 0)
            return queryInfo;
    }
    queryInfo.custom = false;
    return queryInfo;
};
function TableSettingsModal(props) {
    const [isRoot, tableNode, initColumns, columnNames, filterFields, refMap, initQuery] = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        var _a;
        let query = resolveQuery(null, null);
        if (props.node == null || props.node.data.tableDef == null)
            return [false, null, [], [], [], {}, query];
        const tableNode = (0,_mapping_editor_helper__WEBPACK_IMPORTED_MODULE_7__/* .ungroupMapping */ .pe)(props.node)[0];
        const columns = ((_a = tableNode.children) === null || _a === void 0 ? void 0 : _a.filter(child => child.data.columnDef != null).map(node => (Object.assign(Object.assign({}, node), { columnName: (0,_helper__WEBPACK_IMPORTED_MODULE_12__/* .getColumnDisplayName */ .Q8)(node.data.columnDef), isSelected: true })))) || [];
        const columnNames = columns.map(column => column.columnName);
        const filterFields = columns.map(column => ({ name: column.columnName, label: column.columnName, inputType: column.data.dataType }));
        const defColumns = (0,_helper__WEBPACK_IMPORTED_MODULE_12__/* .tableToNode */ .Op)(tableNode.data.tableDef, props.node.component, tableNode.data.mappingNode.data.parent, false).children.filter(child => child.data.columnDef != null);
        defColumns.forEach(column => !columns.some(c => c.columnName === (0,_helper__WEBPACK_IMPORTED_MODULE_12__/* .getColumnDisplayName */ .Q8)(column.data.columnDef)) && columns.push(Object.assign(Object.assign({}, column), { columnName: (0,_helper__WEBPACK_IMPORTED_MODULE_12__/* .getColumnDisplayName */ .Q8)(column.data.columnDef), isSelected: false })));
        const refColumns = [];
        props.direction === _mapping_editor_types__WEBPACK_IMPORTED_MODULE_6__/* .ConnectorDirection */ .ZW.Output && (0,_mapping_editor_helper__WEBPACK_IMPORTED_MODULE_7__/* .iterateParents */ .QE)(props.node, parent => {
            parent.data.tableDef != null && parent.data.tableDef.columns.forEach(column => !refColumns.some(c => c.column === column.column) && refColumns.push(Object.assign(Object.assign({}, column), { dataType: (0,_helper__WEBPACK_IMPORTED_MODULE_12__/* .toNodeDataType */ .I1)(column) })));
            return false;
        });
        props.direction === _mapping_editor_types__WEBPACK_IMPORTED_MODULE_6__/* .ConnectorDirection */ .ZW.Output && !tableNode.data.tableDef.customQuery && (query = resolveQuery(tableNode.data.tableDef.query, tableNode.data.tableDef));
        const refMap = refColumns.reduce((map, col) => { var _a; return (map[col.dataType] = [...((_a = map[col.dataType]) !== null && _a !== void 0 ? _a : []), col], map); }, {});
        return [!(0,_mapping_editor_helper__WEBPACK_IMPORTED_MODULE_7__/* .iterateParents */ .QE)(props.node, parent => parent.data.tableDef != null && parent.data.columnDef == null), tableNode, columns, columnNames, filterFields, refMap, query];
    }, [props.node, props.direction]);
    const [columns, setColumns] = react__WEBPACK_IMPORTED_MODULE_0__.useState(initColumns);
    const [tab, setTab] = react__WEBPACK_IMPORTED_MODULE_0__.useState(_constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.Columns);
    const [queryInfo, setQueryInfo] = react__WEBPACK_IMPORTED_MODULE_0__.useState(initQuery);
    const [queryView, setQueryView] = react__WEBPACK_IMPORTED_MODULE_0__.useState(queryInfo.custom);
    const builderRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const renderGetStartedTip = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "d-flex flex-column text-center condition-get-started-tip" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "tip-icon" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-regular fa-filter text-secondary" })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", { className: "tip-header mt-0 fw-bold" }, _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.FilterGetStartedTip),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "tip-desc fw-normal" }, _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.FilterGetStartedTip))), []);
    const renderValueEditor = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((props) => {
        var _a;
        const value = (_a = props.value.value) !== null && _a !== void 0 ? _a : props.value;
        const handleOnChange = (reference, value) => props.handleOnChange({ reference, value });
        if (isRoot)
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .ValueEditor */ .Pm, Object.assign({}, props, { value: value, handleOnChange: handleOnChange.bind(null, false) }));
        const refColumns = refMap[(props.fieldData.inputType || _mapping_editor_types__WEBPACK_IMPORTED_MODULE_6__/* .NodeDataType */ .zX.String)];
        if (!((refColumns === null || refColumns === void 0 ? void 0 : refColumns.length) > 0))
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .ValueEditor */ .Pm, Object.assign({}, props, { value: value, handleOnChange: handleOnChange.bind(null, false) }));
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, { className: "rule-value" },
            props.value.reference ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { className: "form-select form-select-sm", value: value, onChange: e => handleOnChange(true, e.target.value) }, refColumns.map(column => react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: column.column, key: column.column }, column.column)))) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .ValueEditor */ .Pm, Object.assign({}, props, { className: "form-control form-control-sm", value: value, handleOnChange: handleOnChange.bind(null, false) })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, { variant: "outline-secondary", title: react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "pe-2" }, props.value.reference ? _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.Ref : _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.Const) },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A.Item, { className: "d-flex flex-column gap-2", onClick: props.value.reference ? handleOnChange.bind(null, false, "") : undefined },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.Const),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "d-flex text-wrap" }, _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.FilterConstDescription)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A.Item, { className: "d-flex flex-column gap-2", onClick: props.value.reference ? undefined : handleOnChange.bind(null, true, refColumns[0].column) },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.Ref),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "d-flex text-wrap" }, _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.FilterRefDescription)))));
    }, [isRoot, refMap]);
    if (!props.show || props.node == null || props.node.data.tableDef == null || (0,_components_utils__WEBPACK_IMPORTED_MODULE_11__/* .renderReactModalByParent */ .wf)("DatabaseMapping.TableSettingsModal", props))
        return null;
    const onRowClick = (event, row) => {
        row.original.isSelected = !row.original.isSelected;
        setColumns([...columns]);
    };
    const getColumnNames = () => !columns.some(col => !col.isSelected) || !columns.some(col => col.isSelected) ? ["*"] : columns.filter(col => col.isSelected).map(col => (0,_helper__WEBPACK_IMPORTED_MODULE_12__/* .getColumnDisplayName */ .Q8)(col.data.columnDef));
    const handleQueryView = (event) => {
        setQueryView(event.target.checked);
        event.target.checked && setQueryInfo(queryInfo => (Object.assign(Object.assign({}, queryInfo), { sql: buildSelectQuery(tableNode.data.tableDef, getColumnNames(), queryInfo.filter, queryInfo.orderBy, queryInfo.limit) })));
    };
    const handleTabChanged = (tab) => {
        setTab(tab);
        tab === _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.Filters && queryView && setQueryInfo(queryInfo => (Object.assign(Object.assign({}, queryInfo), { sql: buildSelectQuery(tableNode.data.tableDef, getColumnNames(), queryInfo.filter, queryInfo.orderBy, queryInfo.limit) })));
    };
    const handleQueryChange = (queryNoIC, query) => {
        queryNoIC = normalizeQueryGroup(queryNoIC);
        setQueryInfo(queryInfo => (Object.assign(Object.assign({}, queryInfo), { query, filter: queryNoIC != null ? (0,react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .formatQuery */ .OJ)((0,react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .convertToIC */ .vT)(queryNoIC), { format: "sql", quoteFieldNamesWith: ["`", "`"], ruleProcessor }) : "" })));
    };
    const onApply = () => {
        const changed = columns.filter(node => node.isSelected !== node.data.columnDef.isSelected);
        changed.forEach(node => node.data.columnDef.isSelected = node.isSelected);
        tableNode.data.tableDef.columns = columns.map(node => node.data.columnDef);
        const deleted = changed.filter(node => !node.isSelected && node.data.mappingNode != null).map(node => node.data.mappingNode);
        const added = changed.filter(node => node.isSelected && node.data.mappingNode == null).map(node => ((0,_helper__WEBPACK_IMPORTED_MODULE_12__/* .applyNodeSample */ .vf)(node, node.data.columnDef.columnSample), node));
        if (props.direction === _mapping_editor_types__WEBPACK_IMPORTED_MODULE_6__/* .ConnectorDirection */ .ZW.Output) {
            const info = queryView ? resolveQuery(queryInfo.sql, tableNode.data.tableDef) : queryInfo;
            const columnNames = getColumnNames();
            const sql = !info.custom ? buildSelectQuery(tableNode.data.tableDef, columnNames, info.filter, info.orderBy, info.limit, false) : info.sql;
            props.node.data.tableDef.customQuery = info.custom;
            props.node.data.tableDef.allColumns = !((columns === null || columns === void 0 ? void 0 : columns.length) > 0) || columnNames.some(col => col === "*");
            props.node.data.tableDef.query = sql;
            props.node.data.tableDef.action = _types__WEBPACK_IMPORTED_MODULE_9__/* .TableAction */ .vh.Default;
        }
        props.onChanged(deleted, added);
    };
    const renderColumnsTable = () => {
        if (!((columns === null || columns === void 0 ? void 0 : columns.length) > 0))
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "d-flex flex-column text-center get-started-tip columns-get-started-tip" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "tip-icon" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-regular fa-columns-3 text-secondary" })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", { className: "tip-header mt-0" }, _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.NoColumnsToDisplay)));
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_arc_table__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, { columns: [{
                    id: "isSelected",
                    header: () => react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "checkbox", className: "ms-1", checked: !columns.some(node => !node.isSelected), onChange: e => setColumns(columns => {
                            columns.forEach(node => node.isSelected = e.target.checked);
                            return [...columns];
                        }), "data-tooltip-id": "reactTooltip", "data-tooltip-content": !columns.some(node => !node.isSelected) ? _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.HideAllColumns : _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.ShowAllColumns }),
                    accessorKey: "isSelected",
                    enableSorting: false,
                    size: 50,
                    cell: (renderProps) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "checkbox", className: "ms-1", checked: renderProps.row.original.isSelected, onChange: e => e.stopPropagation(), "data-tooltip-id": "reactTooltip", "data-tooltip-content": renderProps.row.original.isSelected ? _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.HideColumn : _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.ShowColumn })
                }, {
                    id: "columnName",
                    header: _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.Column_Name,
                    accessorKey: "columnName",
                    cell: (renderProps) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "d-flex align-items-center gap-2" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mapping_editor_components__WEBPACK_IMPORTED_MODULE_10__/* .MappingNodePreIcon */ .ZT, { type: _mapping_editor_types__WEBPACK_IMPORTED_MODULE_6__/* .NodeType */ .Z6.Basic, dataType: renderProps.row.original.data.dataType }),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "col-column-name text-truncate" }, (0,_helper__WEBPACK_IMPORTED_MODULE_12__/* .getColumnDisplayName */ .Q8)(renderProps.row.original.data.columnDef)),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mapping_editor_components__WEBPACK_IMPORTED_MODULE_10__/* .MappingNodePostIcon */ .Ym, Object.assign({}, renderProps.row.original.data, { isSource: props.direction === _mapping_editor_types__WEBPACK_IMPORTED_MODULE_6__/* .ConnectorDirection */ .ZW.Output })))
                }, {
                    id: "columnSize",
                    header: _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.Column_Size,
                    accessorKey: "columnSize",
                    enableSorting: false,
                    size: 150,
                    cell: (renderProps) => renderProps.row.original.data.columnDef.columnSize > 0 ? "" + renderProps.row.original.data.columnDef.columnSize : "-"
                }, {
                    id: "isNullable",
                    header: _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.Column_Nullable,
                    accessorKey: "isNullable",
                    enableSorting: false,
                    size: 100,
                    cell: (renderProps) => renderProps.row.original.data.columnDef.isNullable ? "True" : "False"
                }, {
                    id: "action",
                    header: _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.Column_Action,
                    accessorKey: "action",
                    enableSorting: false,
                    size: 100,
                    headerClassName: props.direction === _mapping_editor_types__WEBPACK_IMPORTED_MODULE_6__/* .ConnectorDirection */ .ZW.Output ? "d-none" : "",
                    className: props.direction === _mapping_editor_types__WEBPACK_IMPORTED_MODULE_6__/* .ConnectorDirection */ .ZW.Output ? "d-none" : "",
                    cell: (renderProps) => { var _a, _b, _c, _d; return (((_a = renderProps.row.original.data.columnDef.ref) === null || _a === void 0 ? void 0 : _a.length) > 0 && !renderProps.row.original.data.columnDef.ref.startsWith("@@") || ((_b = renderProps.row.original.data.columnDef.upsert) === null || _b === void 0 ? void 0 : _b.length) > 0) ? _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.UPSERT : ((((_c = renderProps.row.original.data.columnDef.lookup) === null || _c === void 0 ? void 0 : _c.length) > 0 || ((_d = renderProps.row.original.data.columnDef.lookupQuery) === null || _d === void 0 ? void 0 : _d.length) > 0) ? _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.LOOKUP : "-"); }
                }], paging: false, data: columns, tableBodyRowProps: { className: "table-settings-table-row ", onClick: onRowClick } });
    };
    const renderHeader = () => {
        var _a, _b;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A.Title, { className: "d-flex" }, props.direction === _mapping_editor_types__WEBPACK_IMPORTED_MODULE_6__/* .ConnectorDirection */ .ZW.Output ? (0,_components_utils__WEBPACK_IMPORTED_MODULE_11__/* .evalTemplate */ .Xb)(_constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.EditTableSettings, { table: (0,_SqlParser__WEBPACK_IMPORTED_MODULE_13__/* .unescapeIdentifier */ .k0)((_b = (_a = tableNode === null || tableNode === void 0 ? void 0 : tableNode.data) === null || _a === void 0 ? void 0 : _a.tableDef) === null || _b === void 0 ? void 0 : _b.qualifiedTableName) }) : _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.EditColumns),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "ms-auto d-flex align-items-center gap-3" },
                props.direction === _mapping_editor_types__WEBPACK_IMPORTED_MODULE_6__/* .ConnectorDirection */ .ZW.Output && tab === _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.Filters && react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A.Check, { id: "TableSettingsModal_custom_query_switch", className: "script-mode-switch d-flex align-items-center", type: "switch", label: _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.QueryView, checked: queryView, onChange: handleQueryView }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { "data-tooltip-id": "reactTooltip", "data-tooltip-content": _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.Document, href: "help.rst#EDI-Mapping|" + _edi_constants__WEBPACK_IMPORTED_MODULE_16__/* .LinkTokens */ .z.UnderstandingSourceDestination, target: "_blank", rel: "noreferrer", className: "me-3 text-secondary" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-question-circle-o" }))));
    };
    const renderBody = () => {
        var _a, _b, _c, _d, _e;
        if (props.direction === _mapping_editor_types__WEBPACK_IMPORTED_MODULE_6__/* .ConnectorDirection */ .ZW.Output) {
            const showGetStarted = !(((_a = queryInfo.query.rules) === null || _a === void 0 ? void 0 : _a.length) > 0);
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, { className: "fw-bold d-flex align-items-end", activeKey: tab, onSelect: handleTabChanged },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, { className: "columns-tab", eventKey: _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.Columns, title: _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.Columns },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                        renderColumnsTable(),
                        columnNames.length > 0 &&
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "order-by-container d-flex align-items-center gap-2 mb-3 px-3" },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "control-label col-form-label" }, _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.OrderBy),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, { key: "column", variant: "outline-secondary", title: ((_b = queryInfo.orderBy) === null || _b === void 0 ? void 0 : _b.column) || _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.Undefined }, columnNames.map(column => react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A.Item, { key: column, onClick: () => setQueryInfo(queryInfo => (Object.assign(Object.assign({}, queryInfo), { orderBy: Object.assign(Object.assign({ sortOpt: OrderBySortOpt.ASC }, queryInfo.orderBy), { column }) }))) }, column))),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, { key: "sortOpt", variant: "outline-secondary", title: ((_c = queryInfo.orderBy) === null || _c === void 0 ? void 0 : _c.sortOpt) || OrderBySortOpt.ASC, disabled: !(((_e = (_d = queryInfo.orderBy) === null || _d === void 0 ? void 0 : _d.column) === null || _e === void 0 ? void 0 : _e.length) > 0) },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A.Item, { key: OrderBySortOpt.ASC, onClick: () => setQueryInfo(queryInfo => (Object.assign(Object.assign({}, queryInfo), { orderBy: Object.assign(Object.assign({}, queryInfo.orderBy), { sortOpt: OrderBySortOpt.ASC }) }))) }, OrderBySortOpt.ASC),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A.Item, { key: OrderBySortOpt.DESC, onClick: () => setQueryInfo(queryInfo => (Object.assign(Object.assign({}, queryInfo), { orderBy: Object.assign(Object.assign({}, queryInfo.orderBy), { sortOpt: OrderBySortOpt.DESC }) }))) }, OrderBySortOpt.DESC))))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, { className: "filters-tab", eventKey: _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.Filters, title: _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.Filters }, queryView ?
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_arc_suspense__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "code-editor-container p-4" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "action-description m-0 pb-4" }, (0,_components_utils__WEBPACK_IMPORTED_MODULE_11__/* .evalTemplate */ .Xb)(_constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.SelectQueryViewDescription, { dataSource: props.dataSource })),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(CodeEditor, { language: "SQL", text: queryInfo.sql, onChange: (sql) => setQueryInfo(resolveQuery(sql, tableNode.data.tableDef)), validator: react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                                    _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.SQL,
                                    " ",
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { "data-tooltip-id": "reactTooltip", "data-tooltip-content": queryInfo.custom ? _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.CustomQuery : null, className: queryInfo.custom ? "fa fa-xmark-circle text-danger" : "fa fa-check-circle text-success" })) }))) :
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_ConditionMappingBuilder__WEBPACK_IMPORTED_MODULE_5__/* .ConditionMappingBuilderContext */ .Uc.Provider, { value: { showGetStarted, getStartedTip: renderGetStartedTip } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_ConditionMappingBuilder__WEBPACK_IMPORTED_MODULE_5__/* .ConditionMappingBuilder */ .hv, Object.assign({}, ({
                            fields: filterFields,
                            getRuleClassname: () => "row row-cols-auto g-0",
                            ref: builderRef,
                            query: queryInfo.query,
                            onQueryChange: handleQueryChange,
                            operators: _components_arc_query_builder__WEBPACK_IMPORTED_MODULE_2__/* .arcOperators */ .O4,
                            disabled: false,
                            controlElements: {
                                operatorSelector: _shared_ConditionMappingBuilder__WEBPACK_IMPORTED_MODULE_5__/* .ConditionMappingOperatorSelector */ .dQ,
                                valueEditor: renderValueEditor,
                                notToggle: _shared_ConditionMappingBuilder__WEBPACK_IMPORTED_MODULE_5__/* .ConditionMappingNotToggle */ .vv,
                                addRuleAction: (props) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: `ruleGroup-addRule btn ${showGetStarted ? "btn-primary" : "btn-outline-secondary"} btn-sm btn-add`, onClick: props.handleOnClick },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-solid fa-add pe-2" }),
                                    _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.AddFilter),
                                addGroupAction: (props) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "ruleGroup-addGroup btn btn-outline-secondary btn-sm btn-add", onClick: props.handleOnClick },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-solid fa-add pe-2" }),
                                    showGetStarted ? _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.AddFilterGroup : _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.AddGroup),
                                removeGroupAction: (props) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "ruleGroup-remove btn btn-outline-secondary btn-sm btn-remove", onClick: props.handleOnClick },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-trash pe-2" }),
                                    _constants__WEBPACK_IMPORTED_MODULE_15__/* .MappingTokens */ .B.RemoveGroup)
                            },
                        })))))));
        }
        else
            return renderColumnsTable();
    };
    const renderFooter = () => react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, { variant: "outline-secondary", className: "border-0", onClick: props.onHide },
            " ",
            _mapping_editor_constants__WEBPACK_IMPORTED_MODULE_14__/* .TOKENS */ .xZ.CANCEL),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, { className: "border-0", onClick: onApply }, _mapping_editor_constants__WEBPACK_IMPORTED_MODULE_14__/* .TOKENS */ .xZ.APPLY));
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mapping_editor_Modals__WEBPACK_IMPORTED_MODULE_8__/* .BaseModal */ .dW, Object.assign({}, props, { renderHeader: renderHeader, renderBody: renderBody, renderFooter: renderFooter, className: `table-settings-modal ${props.direction === _mapping_editor_types__WEBPACK_IMPORTED_MODULE_6__/* .ConnectorDirection */ .ZW.Output ? "output" : "input"}`, bodyClassName: "p-0", size: props.direction === _mapping_editor_types__WEBPACK_IMPORTED_MODULE_6__/* .ConnectorDirection */ .ZW.Output ? "xl" : "lg" }));
}


/***/ })

}]);