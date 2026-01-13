"use strict";
(self["webpackChunkcdata_arc"] = self["webpackChunkcdata_arc"] || []).push([["validateConnector","src_components_arc-query-builder_index_scss-src_components_arc-tree_index_scss-src_components-c9910e"],{

/***/ 32017:
/***/ ((module) => {



// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ 75803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ rc_tree_es)
});

// UNUSED EXPORTS: TreeNode

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function typeof_typeof(o) {
  "@babel/helpers - typeof";

  return typeof_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, typeof_typeof(o);
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function toPrimitive(t, r) {
  if ("object" != typeof_typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof_typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == typeof_typeof(i) ? i : i + "";
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function toConsumableArray_toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
var setPrototypeOf = __webpack_require__(63662);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && (0,setPrototypeOf/* default */.A)(t, e);
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof_typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js



function _createSuper(t) {
  var r = _isNativeReflectConstruct();
  return function () {
    var e,
      o = _getPrototypeOf(t);
    if (r) {
      var s = _getPrototypeOf(this).constructor;
      e = Reflect.construct(o, arguments, s);
    } else e = o.apply(this, arguments);
    return _possibleConstructorReturn(this, e);
  };
}

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/KeyCode.js
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */

var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;
    if (e.altKey && !e.ctrlKey || e.metaKey ||
    // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    }

    // The following keys are quite harmless, even in combination with
    // CTRL, ALT or SHIFT.
    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;
      default:
        return true;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }
    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }
    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    }

    // Safari sends zero key code for non-latin characters.
    if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
      return true;
    }
    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;
      default:
        return false;
    }
  }
};
/* harmony default export */ const es_KeyCode = (KeyCode);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/warning.js
/* eslint-disable no-console */
var warned = {};
var preWarningFns = [];

/**
 * Pre warning enable you to parse content before console.error.
 * Modify to null will prevent warning.
 */
var preMessage = function preMessage(fn) {
  preWarningFns.push(fn);
};

/**
 * Warning if condition not match.
 * @param valid Condition
 * @param message Warning message
 * @example
 * ```js
 * warning(false, 'some error'); // print some error
 * warning(true, 'some error'); // print nothing
 * warning(1 === 2, 'some error'); // print some error
 * ```
 */
function warning_warning(valid, message) {
  if (false) { var finalMessage; }
}

/** @see Similar to {@link warning} */
function note(valid, message) {
  if (false) { var finalMessage; }
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}

/** @see Same as {@link warning}, but only warn once for the same message */
function warningOnce(valid, message) {
  call(warning_warning, valid, message);
}

/** @see Same as {@link warning}, but only warn once for the same message */
function noteOnce(valid, message) {
  call(note, valid, message);
}
warningOnce.preMessage = preMessage;
warningOnce.resetWarned = resetWarned;
warningOnce.noteOnce = noteOnce;
/* harmony default export */ const es_warning = (warningOnce);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/pickAttrs.js

var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap";
var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);

/* eslint-enable max-len */
var ariaPrefix = 'aria-';
var dataPrefix = 'data-';
function match(key, prefix) {
  return key.indexOf(prefix) === 0;
}
/**
 * Picker props from exist props with filter
 * @param props Passed props
 * @param ariaOnly boolean | { aria?: boolean; data?: boolean; attr?: boolean; } filter config
 */
function pickAttrs(props) {
  var ariaOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var mergedConfig;
  if (ariaOnly === false) {
    mergedConfig = {
      aria: true,
      data: true,
      attr: true
    };
  } else if (ariaOnly === true) {
    mergedConfig = {
      aria: true
    };
  } else {
    mergedConfig = _objectSpread2({}, ariaOnly);
  }
  var attrs = {};
  Object.keys(props).forEach(function (key) {
    if (
    // Aria
    mergedConfig.aria && (key === 'role' || match(key, ariaPrefix)) ||
    // Data
    mergedConfig.data && match(key, dataPrefix) ||
    // Attr
    mergedConfig.attr && propList.includes(key)) {
      attrs[key] = props[key];
    }
  });
  return attrs;
}
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(46942);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/contextTypes.js
/**
 * Webpack has bug for import loop, which is not the same behavior as ES module.
 * When util.js imports the TreeNode for tree generate will cause treeContextTypes be empty.
 */

var TreeContext = /*#__PURE__*/react.createContext(null);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function objectWithoutProperties_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = (0,objectWithoutPropertiesLoose/* default */.A)(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}

;// CONCATENATED MODULE: ./node_modules/rc-tree/es/Indent.js



var Indent = function Indent(_ref) {
  var prefixCls = _ref.prefixCls,
    level = _ref.level,
    isStart = _ref.isStart,
    isEnd = _ref.isEnd;
  var baseClassName = "".concat(prefixCls, "-indent-unit");
  var list = [];
  for (var i = 0; i < level; i += 1) {
    var _classNames;
    list.push( /*#__PURE__*/react.createElement("span", {
      key: i,
      className: classnames_default()(baseClassName, (_classNames = {}, _defineProperty(_classNames, "".concat(baseClassName, "-start"), isStart[i]), _defineProperty(_classNames, "".concat(baseClassName, "-end"), isEnd[i]), _classNames))
    }));
  }
  return /*#__PURE__*/react.createElement("span", {
    "aria-hidden": "true",
    className: "".concat(prefixCls, "-indent")
  }, list);
};
/* harmony default export */ const es_Indent = (/*#__PURE__*/react.memo(Indent));
;// CONCATENATED MODULE: ./node_modules/rc-util/es/omit.js
function omit(obj, fields) {
  var clone = Object.assign({}, obj);
  if (Array.isArray(fields)) {
    fields.forEach(function (key) {
      delete clone[key];
    });
  }
  return clone;
}
;// CONCATENATED MODULE: ./node_modules/rc-util/es/React/isFragment.js

var REACT_ELEMENT_TYPE_18 = Symbol.for('react.element');
var REACT_ELEMENT_TYPE_19 = Symbol.for('react.transitional.element');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');

/**
 * Compatible with React 18 or 19 to check if node is a Fragment.
 */
function isFragment(object) {
  return (
    // Base object type
    object && typeof_typeof(object) === 'object' && (
    // React Element type
    object.$$typeof === REACT_ELEMENT_TYPE_18 || object.$$typeof === REACT_ELEMENT_TYPE_19) &&
    // React Fragment type
    object.type === REACT_FRAGMENT_TYPE
  );
}
;// CONCATENATED MODULE: ./node_modules/rc-util/es/Children/toArray.js


function toArray(children) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ret = [];
  react.Children.forEach(children, function (child) {
    if ((child === undefined || child === null) && !option.keepEmpty) {
      return;
    }
    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else if (isFragment(child) && child.props) {
      ret = ret.concat(toArray(child.props.children, option));
    } else {
      ret.push(child);
    }
  });
  return ret;
}
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/utils/treeUtil.js




var _excluded = ["children"];




function getKey(key, pos) {
  if (key !== null && key !== undefined) {
    return key;
  }
  return pos;
}
function fillFieldNames(fieldNames) {
  var _ref = fieldNames || {},
    title = _ref.title,
    _title = _ref._title,
    key = _ref.key,
    children = _ref.children;
  var mergedTitle = title || 'title';
  return {
    title: mergedTitle,
    _title: _title || [mergedTitle],
    key: key || 'key',
    children: children || 'children'
  };
}
/**
 * Warning if TreeNode do not provides key
 */
function warningWithoutKey(treeData, fieldNames) {
  var keys = new Map();
  function dig(list) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    (list || []).forEach(function (treeNode) {
      var key = treeNode[fieldNames.key];
      var children = treeNode[fieldNames.children];
      warning(key !== null && key !== undefined, "Tree node must have a certain key: [".concat(path).concat(key, "]"));
      var recordKey = String(key);
      warning(!keys.has(recordKey) || key === null || key === undefined, "Same 'key' exist in the Tree: ".concat(recordKey));
      keys.set(recordKey, true);
      dig(children, "".concat(path).concat(recordKey, " > "));
    });
  }
  dig(treeData);
}
/**
 * Convert `children` of Tree into `treeData` structure.
 */
function convertTreeToData(rootNodes) {
  function dig(node) {
    var treeNodes = toArray(node);
    return treeNodes.map(function (treeNode) {
      // Filter invalidate node
      if (!isTreeNode(treeNode)) {
        es_warning(!treeNode, 'Tree/TreeNode can only accept TreeNode as children.');
        return null;
      }
      var key = treeNode.key;
      var _treeNode$props = treeNode.props,
        children = _treeNode$props.children,
        rest = objectWithoutProperties_objectWithoutProperties(_treeNode$props, _excluded);
      var dataNode = _objectSpread2({
        key: key
      }, rest);
      var parsedChildren = dig(children);
      if (parsedChildren.length) {
        dataNode.children = parsedChildren;
      }
      return dataNode;
    }).filter(function (dataNode) {
      return dataNode;
    });
  }
  return dig(rootNodes);
}
/**
 * Flat nest tree data into flatten list. This is used for virtual list render.
 * @param treeNodeList Origin data node list
 * @param expandedKeys
 * need expanded keys, provides `true` means all expanded (used in `rc-tree-select`).
 */
function flattenTreeData(treeNodeList, expandedKeys, fieldNames) {
  var _fillFieldNames = fillFieldNames(fieldNames),
    fieldTitles = _fillFieldNames._title,
    fieldKey = _fillFieldNames.key,
    fieldChildren = _fillFieldNames.children;
  var expandedKeySet = new Set(expandedKeys === true ? [] : expandedKeys);
  var flattenList = [];
  function dig(list) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return list.map(function (treeNode, index) {
      var pos = getPosition(parent ? parent.pos : '0', index);
      var mergedKey = getKey(treeNode[fieldKey], pos);
      // Pick matched title in field title list
      var mergedTitle;
      for (var i = 0; i < fieldTitles.length; i += 1) {
        var fieldTitle = fieldTitles[i];
        if (treeNode[fieldTitle] !== undefined) {
          mergedTitle = treeNode[fieldTitle];
          break;
        }
      }
      // Add FlattenDataNode into list
      var flattenNode = _objectSpread2(_objectSpread2({}, omit(treeNode, [].concat(toConsumableArray_toConsumableArray(fieldTitles), [fieldKey, fieldChildren]))), {}, {
        title: mergedTitle,
        key: mergedKey,
        parent: parent,
        pos: pos,
        children: null,
        data: treeNode,
        isStart: [].concat(toConsumableArray_toConsumableArray(parent ? parent.isStart : []), [index === 0]),
        isEnd: [].concat(toConsumableArray_toConsumableArray(parent ? parent.isEnd : []), [index === list.length - 1])
      });
      flattenList.push(flattenNode);
      // Loop treeNode children
      if (expandedKeys === true || expandedKeySet.has(mergedKey)) {
        flattenNode.children = dig(treeNode[fieldChildren] || [], flattenNode);
      } else {
        flattenNode.children = [];
      }
      return flattenNode;
    });
  }
  dig(treeNodeList);
  return flattenList;
}
/**
 * Traverse all the data by `treeData`.
 * Please not use it out of the `rc-tree` since we may refactor this code.
 */
function traverseDataNodes(dataNodes, callback,
// To avoid too many params, let use config instead of origin param
config) {
  var mergedConfig = {};
  if (typeof_typeof(config) === 'object') {
    mergedConfig = config;
  } else {
    mergedConfig = {
      externalGetKey: config
    };
  }
  mergedConfig = mergedConfig || {};
  // Init config
  var _mergedConfig = mergedConfig,
    childrenPropName = _mergedConfig.childrenPropName,
    externalGetKey = _mergedConfig.externalGetKey,
    fieldNames = _mergedConfig.fieldNames;
  var _fillFieldNames2 = fillFieldNames(fieldNames),
    fieldKey = _fillFieldNames2.key,
    fieldChildren = _fillFieldNames2.children;
  var mergeChildrenPropName = childrenPropName || fieldChildren;
  // Get keys
  var syntheticGetKey;
  if (externalGetKey) {
    if (typeof externalGetKey === 'string') {
      syntheticGetKey = function syntheticGetKey(node) {
        return node[externalGetKey];
      };
    } else if (typeof externalGetKey === 'function') {
      syntheticGetKey = function syntheticGetKey(node) {
        return externalGetKey(node);
      };
    }
  } else {
    syntheticGetKey = function syntheticGetKey(node, pos) {
      return getKey(node[fieldKey], pos);
    };
  }
  // Process
  function processNode(node, index, parent, pathNodes) {
    var children = node ? node[mergeChildrenPropName] : dataNodes;
    var pos = node ? getPosition(parent.pos, index) : '0';
    var connectNodes = node ? [].concat(toConsumableArray_toConsumableArray(pathNodes), [node]) : [];
    // Process node if is not root
    if (node) {
      var key = syntheticGetKey(node, pos);
      var data = {
        node: node,
        index: index,
        pos: pos,
        key: key,
        parentPos: parent.node ? parent.pos : null,
        level: parent.level + 1,
        nodes: connectNodes
      };
      callback(data);
    }
    // Process children node
    if (children) {
      children.forEach(function (subNode, subIndex) {
        processNode(subNode, subIndex, {
          node: node,
          pos: pos,
          level: parent ? parent.level + 1 : -1
        }, connectNodes);
      });
    }
  }
  processNode(null);
}
/**
 * Convert `treeData` into entity records.
 */
function convertDataToEntities(dataNodes) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    initWrapper = _ref2.initWrapper,
    processEntity = _ref2.processEntity,
    onProcessFinished = _ref2.onProcessFinished,
    externalGetKey = _ref2.externalGetKey,
    childrenPropName = _ref2.childrenPropName,
    fieldNames = _ref2.fieldNames;
  var /** @deprecated Use `config.externalGetKey` instead */
  legacyExternalGetKey = arguments.length > 2 ? arguments[2] : undefined;
  // Init config
  var mergedExternalGetKey = externalGetKey || legacyExternalGetKey;
  var posEntities = {};
  var keyEntities = {};
  var wrapper = {
    posEntities: posEntities,
    keyEntities: keyEntities
  };
  if (initWrapper) {
    wrapper = initWrapper(wrapper) || wrapper;
  }
  traverseDataNodes(dataNodes, function (item) {
    var node = item.node,
      index = item.index,
      pos = item.pos,
      key = item.key,
      parentPos = item.parentPos,
      level = item.level,
      nodes = item.nodes;
    var entity = {
      node: node,
      nodes: nodes,
      index: index,
      key: key,
      pos: pos,
      level: level
    };
    var mergedKey = getKey(key, pos);
    posEntities[pos] = entity;
    keyEntities[mergedKey] = entity;
    // Fill children
    entity.parent = posEntities[parentPos];
    if (entity.parent) {
      entity.parent.children = entity.parent.children || [];
      entity.parent.children.push(entity);
    }
    if (processEntity) {
      processEntity(entity, wrapper);
    }
  }, {
    externalGetKey: mergedExternalGetKey,
    childrenPropName: childrenPropName,
    fieldNames: fieldNames
  });
  if (onProcessFinished) {
    onProcessFinished(wrapper);
  }
  return wrapper;
}
/**
 * Get TreeNode props with Tree props.
 */
function getTreeNodeProps(key, _ref3) {
  var expandedKeys = _ref3.expandedKeys,
    selectedKeys = _ref3.selectedKeys,
    loadedKeys = _ref3.loadedKeys,
    loadingKeys = _ref3.loadingKeys,
    checkedKeys = _ref3.checkedKeys,
    halfCheckedKeys = _ref3.halfCheckedKeys,
    dragOverNodeKey = _ref3.dragOverNodeKey,
    dropPosition = _ref3.dropPosition,
    keyEntities = _ref3.keyEntities;
  var entity = keyEntities[key];
  var treeNodeProps = {
    eventKey: key,
    expanded: expandedKeys.indexOf(key) !== -1,
    selected: selectedKeys.indexOf(key) !== -1,
    loaded: loadedKeys.indexOf(key) !== -1,
    loading: loadingKeys.indexOf(key) !== -1,
    checked: checkedKeys.indexOf(key) !== -1,
    halfChecked: halfCheckedKeys.indexOf(key) !== -1,
    pos: String(entity ? entity.pos : ''),
    // [Legacy] Drag props
    // Since the interaction of drag is changed, the semantic of the props are
    // not accuracy, I think it should be finally removed
    dragOver: dragOverNodeKey === key && dropPosition === 0,
    dragOverGapTop: dragOverNodeKey === key && dropPosition === -1,
    dragOverGapBottom: dragOverNodeKey === key && dropPosition === 1
  };
  return treeNodeProps;
}
function convertNodePropsToEventData(props) {
  var data = props.data,
    expanded = props.expanded,
    selected = props.selected,
    checked = props.checked,
    loaded = props.loaded,
    loading = props.loading,
    halfChecked = props.halfChecked,
    dragOver = props.dragOver,
    dragOverGapTop = props.dragOverGapTop,
    dragOverGapBottom = props.dragOverGapBottom,
    pos = props.pos,
    active = props.active,
    eventKey = props.eventKey;
  var eventData = _objectSpread2(_objectSpread2({}, data), {}, {
    expanded: expanded,
    selected: selected,
    checked: checked,
    loaded: loaded,
    loading: loading,
    halfChecked: halfChecked,
    dragOver: dragOver,
    dragOverGapTop: dragOverGapTop,
    dragOverGapBottom: dragOverGapBottom,
    pos: pos,
    active: active,
    key: eventKey
  });
  if (!('props' in eventData)) {
    Object.defineProperty(eventData, 'props', {
      get: function get() {
        es_warning(false, 'Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`.');
        return props;
      }
    });
  }
  return eventData;
}
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/TreeNode.js









var TreeNode_excluded = ["eventKey", "className", "style", "dragOver", "dragOverGapTop", "dragOverGapBottom", "isLeaf", "isStart", "isEnd", "expanded", "selected", "checked", "halfChecked", "loading", "domRef", "active", "data", "onMouseMove", "selectable"];



// @ts-ignore



var ICON_OPEN = 'open';
var ICON_CLOSE = 'close';
var defaultTitle = '---';
var InternalTreeNode = /*#__PURE__*/function (_React$Component) {
  _inherits(InternalTreeNode, _React$Component);
  var _super = _createSuper(InternalTreeNode);
  function InternalTreeNode() {
    var _this;
    _classCallCheck(this, InternalTreeNode);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      dragNodeHighlight: false
    };
    _this.selectHandle = void 0;
    _this.onSelectorClick = function (e) {
      // Click trigger before select/check operation
      var onNodeClick = _this.props.context.onNodeClick;
      onNodeClick(e, convertNodePropsToEventData(_this.props));
      if (_this.isSelectable()) {
        _this.onSelect(e);
      } else {
        _this.onCheck(e);
      }
    };
    _this.onSelectorDoubleClick = function (e) {
      var onNodeDoubleClick = _this.props.context.onNodeDoubleClick;
      onNodeDoubleClick(e, convertNodePropsToEventData(_this.props));
    };
    _this.onSelect = function (e) {
      if (_this.isDisabled()) return;
      var onNodeSelect = _this.props.context.onNodeSelect;
      e.preventDefault();
      onNodeSelect(e, convertNodePropsToEventData(_this.props));
    };
    _this.onCheck = function (e) {
      if (_this.isDisabled()) return;
      var _this$props = _this.props,
        disableCheckbox = _this$props.disableCheckbox,
        checked = _this$props.checked;
      var onNodeCheck = _this.props.context.onNodeCheck;
      if (!_this.isCheckable() || disableCheckbox) return;
      e.preventDefault();
      var targetChecked = !checked;
      onNodeCheck(e, convertNodePropsToEventData(_this.props), targetChecked);
    };
    _this.onMouseEnter = function (e) {
      var onNodeMouseEnter = _this.props.context.onNodeMouseEnter;
      onNodeMouseEnter(e, convertNodePropsToEventData(_this.props));
    };
    _this.onMouseLeave = function (e) {
      var onNodeMouseLeave = _this.props.context.onNodeMouseLeave;
      onNodeMouseLeave(e, convertNodePropsToEventData(_this.props));
    };
    _this.onContextMenu = function (e) {
      var onNodeContextMenu = _this.props.context.onNodeContextMenu;
      onNodeContextMenu(e, convertNodePropsToEventData(_this.props));
    };
    _this.onDragStart = function (e) {
      var onNodeDragStart = _this.props.context.onNodeDragStart;
      e.stopPropagation();
      _this.setState({
        dragNodeHighlight: true
      });
      onNodeDragStart(e, _assertThisInitialized(_this));
      try {
        // ie throw error
        // firefox-need-it
        e.dataTransfer.setData('text/plain', '');
      } catch (error) {
        // empty
      }
    };
    _this.onDragEnter = function (e) {
      var onNodeDragEnter = _this.props.context.onNodeDragEnter;
      e.preventDefault();
      e.stopPropagation();
      onNodeDragEnter(e, _assertThisInitialized(_this));
    };
    _this.onDragOver = function (e) {
      var onNodeDragOver = _this.props.context.onNodeDragOver;
      e.preventDefault();
      e.stopPropagation();
      onNodeDragOver(e, _assertThisInitialized(_this));
    };
    _this.onDragLeave = function (e) {
      var onNodeDragLeave = _this.props.context.onNodeDragLeave;
      e.stopPropagation();
      onNodeDragLeave(e, _assertThisInitialized(_this));
    };
    _this.onDragEnd = function (e) {
      var onNodeDragEnd = _this.props.context.onNodeDragEnd;
      e.stopPropagation();
      _this.setState({
        dragNodeHighlight: false
      });
      onNodeDragEnd(e, _assertThisInitialized(_this));
    };
    _this.onDrop = function (e) {
      var onNodeDrop = _this.props.context.onNodeDrop;
      e.preventDefault();
      e.stopPropagation();
      _this.setState({
        dragNodeHighlight: false
      });
      onNodeDrop(e, _assertThisInitialized(_this));
    };
    // Disabled item still can be switch
    _this.onExpand = function (e) {
      var _this$props2 = _this.props,
        loading = _this$props2.loading,
        onNodeExpand = _this$props2.context.onNodeExpand;
      if (loading) return;
      onNodeExpand(e, convertNodePropsToEventData(_this.props));
    };
    // Drag usage
    _this.setSelectHandle = function (node) {
      _this.selectHandle = node;
    };
    _this.getNodeState = function () {
      var expanded = _this.props.expanded;
      if (_this.isLeaf()) {
        return null;
      }
      return expanded ? ICON_OPEN : ICON_CLOSE;
    };
    _this.hasChildren = function () {
      var eventKey = _this.props.eventKey;
      var keyEntities = _this.props.context.keyEntities;
      var _ref = keyEntities[eventKey] || {},
        children = _ref.children;
      return !!(children || []).length;
    };
    _this.isLeaf = function () {
      var _this$props3 = _this.props,
        isLeaf = _this$props3.isLeaf,
        loaded = _this$props3.loaded;
      var loadData = _this.props.context.loadData;
      var hasChildren = _this.hasChildren();
      if (isLeaf === false) {
        return false;
      }
      return isLeaf || !loadData && !hasChildren || loadData && loaded && !hasChildren;
    };
    _this.isDisabled = function () {
      var disabled = _this.props.disabled;
      var treeDisabled = _this.props.context.disabled;
      return !!(treeDisabled || disabled);
    };
    _this.isCheckable = function () {
      var checkable = _this.props.checkable;
      var treeCheckable = _this.props.context.checkable;
      // Return false if tree or treeNode is not checkable
      if (!treeCheckable || checkable === false) return false;
      return treeCheckable;
    };
    // Load data to avoid default expanded tree without data
    _this.syncLoadData = function (props) {
      var expanded = props.expanded,
        loading = props.loading,
        loaded = props.loaded;
      var _this$props$context = _this.props.context,
        loadData = _this$props$context.loadData,
        onNodeLoad = _this$props$context.onNodeLoad;
      if (loading) {
        return;
      }
      // read from state to avoid loadData at same time
      if (loadData && expanded && !_this.isLeaf()) {
        // We needn't reload data when has children in sync logic
        // It's only needed in node expanded
        if (!_this.hasChildren() && !loaded) {
          onNodeLoad(convertNodePropsToEventData(_this.props));
        }
      }
    };
    _this.isDraggable = function () {
      var _this$props4 = _this.props,
        data = _this$props4.data,
        draggable = _this$props4.context.draggable;
      return !!(draggable && (!draggable.nodeDraggable || draggable.nodeDraggable(data)));
    };
    // ==================== Render: Drag Handler ====================
    _this.renderDragHandler = function () {
      var _this$props$context2 = _this.props.context,
        draggable = _this$props$context2.draggable,
        prefixCls = _this$props$context2.prefixCls;
      return (draggable === null || draggable === void 0 ? void 0 : draggable.icon) ? /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-draggable-icon")
      }, draggable.icon) : null;
    };
    // ====================== Render: Switcher ======================
    _this.renderSwitcherIconDom = function (isLeaf) {
      var switcherIconFromProps = _this.props.switcherIcon;
      var switcherIconFromCtx = _this.props.context.switcherIcon;
      var switcherIcon = switcherIconFromProps || switcherIconFromCtx;
      // if switcherIconDom is null, no render switcher span
      if (typeof switcherIcon === 'function') {
        return switcherIcon(_objectSpread2(_objectSpread2({}, _this.props), {}, {
          isLeaf: isLeaf
        }));
      }
      return switcherIcon;
    };
    // Switcher
    _this.renderSwitcher = function () {
      var expanded = _this.props.expanded;
      var prefixCls = _this.props.context.prefixCls;
      if (_this.isLeaf()) {
        // if switcherIconDom is null, no render switcher span
        var _switcherIconDom = _this.renderSwitcherIconDom(true);
        return _switcherIconDom !== false ? /*#__PURE__*/react.createElement("span", {
          className: classnames_default()("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher-noop"))
        }, _switcherIconDom) : null;
      }
      var switcherCls = classnames_default()("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher_").concat(expanded ? ICON_OPEN : ICON_CLOSE));
      var switcherIconDom = _this.renderSwitcherIconDom(false);
      return switcherIconDom !== false ? /*#__PURE__*/react.createElement("span", {
        onClick: _this.onExpand,
        className: switcherCls
      }, switcherIconDom) : null;
    };
    // ====================== Render: Checkbox ======================
    // Checkbox
    _this.renderCheckbox = function () {
      var _this$props5 = _this.props,
        checked = _this$props5.checked,
        halfChecked = _this$props5.halfChecked,
        disableCheckbox = _this$props5.disableCheckbox;
      var prefixCls = _this.props.context.prefixCls;
      var disabled = _this.isDisabled();
      var checkable = _this.isCheckable();
      if (!checkable) return null;
      // [Legacy] Custom element should be separate with `checkable` in future
      var $custom = typeof checkable !== 'boolean' ? checkable : null;
      return /*#__PURE__*/react.createElement("span", {
        className: classnames_default()("".concat(prefixCls, "-checkbox"), checked && "".concat(prefixCls, "-checkbox-checked"), !checked && halfChecked && "".concat(prefixCls, "-checkbox-indeterminate"), (disabled || disableCheckbox) && "".concat(prefixCls, "-checkbox-disabled")),
        onClick: _this.onCheck
      }, $custom);
    };
    // ==================== Render: Title + Icon ====================
    _this.renderIcon = function () {
      var loading = _this.props.loading;
      var prefixCls = _this.props.context.prefixCls;
      return /*#__PURE__*/react.createElement("span", {
        className: classnames_default()("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__").concat(_this.getNodeState() || 'docu'), loading && "".concat(prefixCls, "-icon_loading"))
      });
    };
    // Icon + Title
    _this.renderSelector = function () {
      var dragNodeHighlight = _this.state.dragNodeHighlight;
      var _this$props6 = _this.props,
        _this$props6$title = _this$props6.title,
        title = _this$props6$title === void 0 ? defaultTitle : _this$props6$title,
        selected = _this$props6.selected,
        icon = _this$props6.icon,
        loading = _this$props6.loading,
        data = _this$props6.data;
      var _this$props$context3 = _this.props.context,
        prefixCls = _this$props$context3.prefixCls,
        showIcon = _this$props$context3.showIcon,
        treeIcon = _this$props$context3.icon,
        loadData = _this$props$context3.loadData,
        titleRender = _this$props$context3.titleRender;
      var disabled = _this.isDisabled();
      var wrapClass = "".concat(prefixCls, "-node-content-wrapper");
      // Icon - Still show loading icon when loading without showIcon
      var $icon;
      if (showIcon) {
        var currentIcon = icon || treeIcon;
        $icon = currentIcon ? /*#__PURE__*/react.createElement("span", {
          className: classnames_default()("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__customize"))
        }, typeof currentIcon === 'function' ? currentIcon(_this.props) : currentIcon) : _this.renderIcon();
      } else if (loadData && loading) {
        $icon = _this.renderIcon();
      }
      // Title
      var titleNode;
      if (typeof title === 'function') {
        titleNode = title(data);
      } else if (titleRender) {
        titleNode = titleRender(data);
      } else {
        titleNode = title;
      }
      var $title = /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-title")
      }, titleNode);
      return /*#__PURE__*/react.createElement("span", {
        ref: _this.setSelectHandle,
        title: typeof title === 'string' ? title : '',
        className: classnames_default()("".concat(wrapClass), "".concat(wrapClass, "-").concat(_this.getNodeState() || 'normal'), !disabled && (selected || dragNodeHighlight) && "".concat(prefixCls, "-node-selected")),
        onMouseEnter: _this.onMouseEnter,
        onMouseLeave: _this.onMouseLeave,
        onContextMenu: _this.onContextMenu,
        onClick: _this.onSelectorClick,
        onDoubleClick: _this.onSelectorDoubleClick
      }, $icon, $title, _this.renderDropIndicator());
    };
    // =================== Render: Drop Indicator ===================
    _this.renderDropIndicator = function () {
      var _this$props7 = _this.props,
        disabled = _this$props7.disabled,
        eventKey = _this$props7.eventKey;
      var _this$props$context4 = _this.props.context,
        draggable = _this$props$context4.draggable,
        dropLevelOffset = _this$props$context4.dropLevelOffset,
        dropPosition = _this$props$context4.dropPosition,
        prefixCls = _this$props$context4.prefixCls,
        indent = _this$props$context4.indent,
        dropIndicatorRender = _this$props$context4.dropIndicatorRender,
        dragOverNodeKey = _this$props$context4.dragOverNodeKey,
        direction = _this$props$context4.direction;
      var rootDraggable = !!draggable;
      // allowDrop is calculated in Tree.tsx, there is no need for calc it here
      var showIndicator = !disabled && rootDraggable && dragOverNodeKey === eventKey;
      return showIndicator ? dropIndicatorRender({
        dropPosition: dropPosition,
        dropLevelOffset: dropLevelOffset,
        indent: indent,
        prefixCls: prefixCls,
        direction: direction
      }) : null;
    };
    return _this;
  }
  _createClass(InternalTreeNode, [{
    key: "componentDidMount",
    value:
    // Isomorphic needn't load data in server side
    function componentDidMount() {
      this.syncLoadData(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.syncLoadData(this.props);
    }
  }, {
    key: "isSelectable",
    value: function isSelectable() {
      var selectable = this.props.selectable;
      var treeSelectable = this.props.context.selectable;
      // Ignore when selectable is undefined or null
      if (typeof selectable === 'boolean') {
        return selectable;
      }
      return treeSelectable;
    }
  }, {
    key: "render",
    value:
    // =========================== Render ===========================
    function render() {
      var _classNames;
      var _this$props8 = this.props,
        eventKey = _this$props8.eventKey,
        className = _this$props8.className,
        style = _this$props8.style,
        dragOver = _this$props8.dragOver,
        dragOverGapTop = _this$props8.dragOverGapTop,
        dragOverGapBottom = _this$props8.dragOverGapBottom,
        isLeaf = _this$props8.isLeaf,
        isStart = _this$props8.isStart,
        isEnd = _this$props8.isEnd,
        expanded = _this$props8.expanded,
        selected = _this$props8.selected,
        checked = _this$props8.checked,
        halfChecked = _this$props8.halfChecked,
        loading = _this$props8.loading,
        domRef = _this$props8.domRef,
        active = _this$props8.active,
        data = _this$props8.data,
        onMouseMove = _this$props8.onMouseMove,
        selectable = _this$props8.selectable,
        otherProps = objectWithoutProperties_objectWithoutProperties(_this$props8, TreeNode_excluded);
      var _this$props$context5 = this.props.context,
        prefixCls = _this$props$context5.prefixCls,
        filterTreeNode = _this$props$context5.filterTreeNode,
        keyEntities = _this$props$context5.keyEntities,
        dropContainerKey = _this$props$context5.dropContainerKey,
        dropTargetKey = _this$props$context5.dropTargetKey,
        draggingNodeKey = _this$props$context5.draggingNodeKey;
      var disabled = this.isDisabled();
      var dataOrAriaAttributeProps = pickAttrs(otherProps, {
        aria: true,
        data: true
      });
      var _ref2 = keyEntities[eventKey] || {},
        level = _ref2.level;
      var isEndNode = isEnd[isEnd.length - 1];
      var mergedDraggable = this.isDraggable();
      var draggableWithoutDisabled = !disabled && mergedDraggable;
      var dragging = draggingNodeKey === eventKey;
      var ariaSelected = selectable !== undefined ? {
        'aria-selected': !!selectable
      } : undefined;
      return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.A)({
        ref: domRef,
        className: classnames_default()(className, "".concat(prefixCls, "-treenode"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-treenode-disabled"), disabled), _defineProperty(_classNames, "".concat(prefixCls, "-treenode-switcher-").concat(expanded ? 'open' : 'close'), !isLeaf), _defineProperty(_classNames, "".concat(prefixCls, "-treenode-checkbox-checked"), checked), _defineProperty(_classNames, "".concat(prefixCls, "-treenode-checkbox-indeterminate"), halfChecked), _defineProperty(_classNames, "".concat(prefixCls, "-treenode-selected"), selected), _defineProperty(_classNames, "".concat(prefixCls, "-treenode-loading"), loading), _defineProperty(_classNames, "".concat(prefixCls, "-treenode-active"), active), _defineProperty(_classNames, "".concat(prefixCls, "-treenode-leaf-last"), isEndNode), _defineProperty(_classNames, "".concat(prefixCls, "-treenode-draggable"), mergedDraggable), _defineProperty(_classNames, "dragging", dragging), _defineProperty(_classNames, 'drop-target', dropTargetKey === eventKey), _defineProperty(_classNames, 'drop-container', dropContainerKey === eventKey), _defineProperty(_classNames, 'drag-over', !disabled && dragOver), _defineProperty(_classNames, 'drag-over-gap-top', !disabled && dragOverGapTop), _defineProperty(_classNames, 'drag-over-gap-bottom', !disabled && dragOverGapBottom), _defineProperty(_classNames, 'filter-node', filterTreeNode && filterTreeNode(convertNodePropsToEventData(this.props))), _classNames)),
        style: style
        // Draggable config
        ,
        draggable: draggableWithoutDisabled,
        "aria-grabbed": dragging,
        onDragStart: draggableWithoutDisabled ? this.onDragStart : undefined
        // Drop config
        ,
        onDragEnter: mergedDraggable ? this.onDragEnter : undefined,
        onDragOver: mergedDraggable ? this.onDragOver : undefined,
        onDragLeave: mergedDraggable ? this.onDragLeave : undefined,
        onDrop: mergedDraggable ? this.onDrop : undefined,
        onDragEnd: mergedDraggable ? this.onDragEnd : undefined,
        onMouseMove: onMouseMove
      }, ariaSelected, dataOrAriaAttributeProps), /*#__PURE__*/react.createElement(es_Indent, {
        prefixCls: prefixCls,
        level: level,
        isStart: isStart,
        isEnd: isEnd
      }), this.renderDragHandler(), this.renderSwitcher(), this.renderCheckbox(), this.renderSelector());
    }
  }]);
  return InternalTreeNode;
}(react.Component);
var ContextTreeNode = function ContextTreeNode(props) {
  return /*#__PURE__*/react.createElement(TreeContext.Consumer, null, function (context) {
    return /*#__PURE__*/react.createElement(InternalTreeNode, (0,esm_extends/* default */.A)({}, props, {
      context: context
    }));
  });
};
ContextTreeNode.displayName = 'TreeNode';
ContextTreeNode.isTreeNode = 1;

/* harmony default export */ const es_TreeNode = (ContextTreeNode);
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/util.js




var util_excluded = (/* unused pure expression or super */ null && (["children"]));
/* eslint-disable no-lonely-if */
/**
 * Legacy code. Should avoid to use if you are new to import these code.
 */



function arrDel(list, value) {
  if (!list) return [];
  var clone = list.slice();
  var index = clone.indexOf(value);
  if (index >= 0) {
    clone.splice(index, 1);
  }
  return clone;
}
function arrAdd(list, value) {
  var clone = (list || []).slice();
  if (clone.indexOf(value) === -1) {
    clone.push(value);
  }
  return clone;
}
function posToArr(pos) {
  return pos.split('-');
}
function getPosition(level, index) {
  return "".concat(level, "-").concat(index);
}
function isTreeNode(node) {
  return node && node.type && node.type.isTreeNode;
}
function getDragChildrenKeys(dragNodeKey, keyEntities) {
  // not contains self
  // self for left or right drag
  var dragChildrenKeys = [];
  var entity = keyEntities[dragNodeKey];
  function dig() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    list.forEach(function (_ref) {
      var key = _ref.key,
        children = _ref.children;
      dragChildrenKeys.push(key);
      dig(children);
    });
  }
  dig(entity.children);
  return dragChildrenKeys;
}
function isLastChild(treeNodeEntity) {
  if (treeNodeEntity.parent) {
    var posArr = posToArr(treeNodeEntity.pos);
    return Number(posArr[posArr.length - 1]) === treeNodeEntity.parent.children.length - 1;
  }
  return false;
}
function isFirstChild(treeNodeEntity) {
  var posArr = posToArr(treeNodeEntity.pos);
  return Number(posArr[posArr.length - 1]) === 0;
}
// Only used when drag, not affect SSR.
function calcDropPosition(event, dragNode, targetNode, indent, startMousePosition, allowDrop, flattenedNodes, keyEntities, expandKeys, direction) {
  var _abstractDropNodeEnti;
  var clientX = event.clientX,
    clientY = event.clientY;
  var _event$target$getBoun = event.target.getBoundingClientRect(),
    top = _event$target$getBoun.top,
    height = _event$target$getBoun.height;
  // optional chain for testing
  var horizontalMouseOffset = (direction === 'rtl' ? -1 : 1) * (((startMousePosition === null || startMousePosition === void 0 ? void 0 : startMousePosition.x) || 0) - clientX);
  var rawDropLevelOffset = (horizontalMouseOffset - 12) / indent;
  // find abstract drop node by horizontal offset
  var abstractDropNodeEntity = keyEntities[targetNode.props.eventKey];
  if (clientY < top + height / 2) {
    // first half, set abstract drop node to previous node
    var nodeIndex = flattenedNodes.findIndex(function (flattenedNode) {
      return flattenedNode.key === abstractDropNodeEntity.key;
    });
    var prevNodeIndex = nodeIndex <= 0 ? 0 : nodeIndex - 1;
    var prevNodeKey = flattenedNodes[prevNodeIndex].key;
    abstractDropNodeEntity = keyEntities[prevNodeKey];
  }
  var initialAbstractDropNodeKey = abstractDropNodeEntity.key;
  var abstractDragOverEntity = abstractDropNodeEntity;
  var dragOverNodeKey = abstractDropNodeEntity.key;
  var dropPosition = 0;
  var dropLevelOffset = 0;
  // Only allow cross level drop when dragging on a non-expanded node
  if (!expandKeys.includes(initialAbstractDropNodeKey)) {
    for (var i = 0; i < rawDropLevelOffset; i += 1) {
      if (isLastChild(abstractDropNodeEntity)) {
        abstractDropNodeEntity = abstractDropNodeEntity.parent;
        dropLevelOffset += 1;
      } else {
        break;
      }
    }
  }
  var abstractDragDataNode = dragNode.props.data;
  var abstractDropDataNode = abstractDropNodeEntity.node;
  var dropAllowed = true;
  if (isFirstChild(abstractDropNodeEntity) && abstractDropNodeEntity.level === 0 && clientY < top + height / 2 && allowDrop({
    dragNode: abstractDragDataNode,
    dropNode: abstractDropDataNode,
    dropPosition: -1
  }) && abstractDropNodeEntity.key === targetNode.props.eventKey) {
    // first half of first node in first level
    dropPosition = -1;
  } else if ((abstractDragOverEntity.children || []).length && expandKeys.includes(dragOverNodeKey)) {
    // drop on expanded node
    // only allow drop inside
    if (allowDrop({
      dragNode: abstractDragDataNode,
      dropNode: abstractDropDataNode,
      dropPosition: 0
    })) {
      dropPosition = 0;
    } else {
      dropAllowed = false;
    }
  } else if (dropLevelOffset === 0) {
    if (rawDropLevelOffset > -1.5) {
      // | Node     | <- abstractDropNode
      // | -^-===== | <- mousePosition
      // 1. try drop after
      // 2. do not allow drop
      if (allowDrop({
        dragNode: abstractDragDataNode,
        dropNode: abstractDropDataNode,
        dropPosition: 1
      })) {
        dropPosition = 1;
      } else {
        dropAllowed = false;
      }
    } else {
      // | Node     | <- abstractDropNode
      // | ---==^== | <- mousePosition
      // whether it has children or doesn't has children
      // always
      // 1. try drop inside
      // 2. try drop after
      // 3. do not allow drop
      if (allowDrop({
        dragNode: abstractDragDataNode,
        dropNode: abstractDropDataNode,
        dropPosition: 0
      })) {
        dropPosition = 0;
      } else if (allowDrop({
        dragNode: abstractDragDataNode,
        dropNode: abstractDropDataNode,
        dropPosition: 1
      })) {
        dropPosition = 1;
      } else {
        dropAllowed = false;
      }
    }
  } else {
    // | Node1 | <- abstractDropNode
    //      |  Node2  |
    // --^--|----=====| <- mousePosition
    // 1. try insert after Node1
    // 2. do not allow drop
    if (allowDrop({
      dragNode: abstractDragDataNode,
      dropNode: abstractDropDataNode,
      dropPosition: 1
    })) {
      dropPosition = 1;
    } else {
      dropAllowed = false;
    }
  }
  return {
    dropPosition: dropPosition,
    dropLevelOffset: dropLevelOffset,
    dropTargetKey: abstractDropNodeEntity.key,
    dropTargetPos: abstractDropNodeEntity.pos,
    dragOverNodeKey: dragOverNodeKey,
    dropContainerKey: dropPosition === 0 ? null : ((_abstractDropNodeEnti = abstractDropNodeEntity.parent) === null || _abstractDropNodeEnti === void 0 ? void 0 : _abstractDropNodeEnti.key) || null,
    dropAllowed: dropAllowed
  };
}
/**
 * Return selectedKeys according with multiple prop
 * @param selectedKeys
 * @param props
 * @returns [string]
 */
function calcSelectedKeys(selectedKeys, props) {
  if (!selectedKeys) return undefined;
  var multiple = props.multiple;
  if (multiple) {
    return selectedKeys.slice();
  }
  if (selectedKeys.length) {
    return [selectedKeys[0]];
  }
  return selectedKeys;
}
var internalProcessProps = function internalProcessProps(props) {
  return props;
};
function convertDataToTree(treeData, processor) {
  if (!treeData) return [];
  var _ref2 = processor || {},
    _ref2$processProps = _ref2.processProps,
    processProps = _ref2$processProps === void 0 ? internalProcessProps : _ref2$processProps;
  var list = Array.isArray(treeData) ? treeData : [treeData];
  return list.map(function (_ref3) {
    var children = _ref3.children,
      props = _objectWithoutProperties(_ref3, util_excluded);
    var childrenNodes = convertDataToTree(children, processor);
    return /*#__PURE__*/React.createElement(TreeNode, _extends({
      key: props.key
    }, processProps(props)), childrenNodes);
  });
}
/**
 * Parse `checkedKeys` to { checkedKeys, halfCheckedKeys } style
 */
function parseCheckedKeys(keys) {
  if (!keys) {
    return null;
  }
  // Convert keys to object format
  var keyProps;
  if (Array.isArray(keys)) {
    // [Legacy] Follow the api doc
    keyProps = {
      checkedKeys: keys,
      halfCheckedKeys: undefined
    };
  } else if (typeof_typeof(keys) === 'object') {
    keyProps = {
      checkedKeys: keys.checked || undefined,
      halfCheckedKeys: keys.halfChecked || undefined
    };
  } else {
    es_warning(false, '`checkedKeys` is not an array or an object');
    return null;
  }
  return keyProps;
}
/**
 * If user use `autoExpandParent` we should get the list of parent node
 * @param keyList
 * @param keyEntities
 */
function conductExpandParent(keyList, keyEntities) {
  var expandedKeys = new Set();
  function conductUp(key) {
    if (expandedKeys.has(key)) return;
    var entity = keyEntities[key];
    if (!entity) return;
    expandedKeys.add(key);
    var parent = entity.parent,
      node = entity.node;
    if (node.disabled) return;
    if (parent) {
      conductUp(parent.key);
    }
  }
  (keyList || []).forEach(function (key) {
    conductUp(key);
  });
  return toConsumableArray_toConsumableArray(expandedKeys);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js
function _objectDestructuringEmpty(t) {
  if (null == t) throw new TypeError("Cannot destructure " + t);
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function slicedToArray_slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}

;// CONCATENATED MODULE: ./node_modules/rc-util/es/Dom/canUseDom.js
function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}
;// CONCATENATED MODULE: ./node_modules/rc-util/es/hooks/useLayoutEffect.js



/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */
var useInternalLayoutEffect =  true && canUseDom() ? react.useLayoutEffect : react.useEffect;
var useLayoutEffect = function useLayoutEffect(callback, deps) {
  var firstMountRef = react.useRef(true);
  useInternalLayoutEffect(function () {
    return callback(firstMountRef.current);
  }, deps);

  // We tell react that first mount has passed
  useInternalLayoutEffect(function () {
    firstMountRef.current = false;
    return function () {
      firstMountRef.current = true;
    };
  }, []);
};
var useLayoutEffect_useLayoutUpdateEffect = function useLayoutUpdateEffect(callback, deps) {
  useLayoutEffect(function (firstMount) {
    if (!firstMount) {
      return callback();
    }
  }, deps);
};
/* harmony default export */ const hooks_useLayoutEffect = (useLayoutEffect);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(40961);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/Dom/findDOMNode.js



function isDOM(node) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Element
  // Since XULElement is also subclass of Element, we only need HTMLElement and SVGElement
  return node instanceof HTMLElement || node instanceof SVGElement;
}

/**
 * Retrieves a DOM node via a ref, and does not invoke `findDOMNode`.
 */
function getDOM(node) {
  if (node && typeof_typeof(node) === 'object' && isDOM(node.nativeElement)) {
    return node.nativeElement;
  }
  if (isDOM(node)) {
    return node;
  }
  return null;
}

/**
 * Return if a node is a DOM node. Else will return by `findDOMNode`
 */
function findDOMNode(node) {
  var domNode = getDOM(node);
  if (domNode) {
    return domNode;
  }
  if (node instanceof react.Component) {
    var _ReactDOM$findDOMNode;
    return (_ReactDOM$findDOMNode = react_dom.findDOMNode) === null || _ReactDOM$findDOMNode === void 0 ? void 0 : _ReactDOM$findDOMNode.call(react_dom, node);
  }
  return null;
}
// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(44363);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/hooks/useMemo.js

function useMemo(getValue, condition, shouldUpdate) {
  var cacheRef = react.useRef({});
  if (!('value' in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
    cacheRef.current.value = getValue();
    cacheRef.current.condition = condition;
  }
  return cacheRef.current.value;
}
;// CONCATENATED MODULE: ./node_modules/rc-util/es/ref.js





var ReactMajorVersion = Number(react.version.split('.')[0]);
var fillRef = function fillRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else if (typeof_typeof(ref) === 'object' && ref && 'current' in ref) {
    ref.current = node;
  }
};

/**
 * Merge refs into one ref function to support ref passing.
 */
var composeRef = function composeRef() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  var refList = refs.filter(Boolean);
  if (refList.length <= 1) {
    return refList[0];
  }
  return function (node) {
    refs.forEach(function (ref) {
      fillRef(ref, node);
    });
  };
};
var useComposeRef = function useComposeRef() {
  for (var _len2 = arguments.length, refs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    refs[_key2] = arguments[_key2];
  }
  return useMemo(function () {
    return composeRef.apply(void 0, refs);
  }, refs, function (prev, next) {
    return prev.length !== next.length || prev.every(function (ref, i) {
      return ref !== next[i];
    });
  });
};
var supportRef = function supportRef(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;
  if (!nodeOrComponent) {
    return false;
  }

  // React 19 no need `forwardRef` anymore. So just pass if is a React element.
  if (isReactElement(nodeOrComponent) && ReactMajorVersion >= 19) {
    return true;
  }
  var type = (0,react_is.isMemo)(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;

  // Function component node
  if (typeof type === 'function' && !((_type$prototype = type.prototype) !== null && _type$prototype !== void 0 && _type$prototype.render) && type.$$typeof !== react_is.ForwardRef) {
    return false;
  }

  // Class component
  if (typeof nodeOrComponent === 'function' && !((_nodeOrComponent$prot = nodeOrComponent.prototype) !== null && _nodeOrComponent$prot !== void 0 && _nodeOrComponent$prot.render) && nodeOrComponent.$$typeof !== react_is.ForwardRef) {
    return false;
  }
  return true;
};
function isReactElement(node) {
  return /*#__PURE__*/(0,react.isValidElement)(node) && !isFragment(node);
}
var supportNodeRef = function supportNodeRef(node) {
  return isReactElement(node) && supportRef(node);
};

/**
 * In React 19. `ref` is not a property from node.
 * But a property from `props.ref`.
 * To check if `props.ref` exist or fallback to `ref`.
 */
var getNodeRef = function getNodeRef(node) {
  if (node && isReactElement(node)) {
    var ele = node;

    // Source from:
    // https://github.com/mui/material-ui/blob/master/packages/mui-utils/src/getReactNodeRef/getReactNodeRef.ts
    return ele.props.propertyIsEnumerable('ref') ? ele.props.ref : ele.ref;
  }
  return null;
};
;// CONCATENATED MODULE: ./node_modules/rc-resize-observer/es/Collection.js

var CollectionContext = /*#__PURE__*/react.createContext(null);
/**
 * Collect all the resize event from children ResizeObserver
 */
function Collection(_ref) {
  var children = _ref.children,
    onBatchResize = _ref.onBatchResize;
  var resizeIdRef = react.useRef(0);
  var resizeInfosRef = react.useRef([]);
  var onCollectionResize = react.useContext(CollectionContext);
  var onResize = react.useCallback(function (size, element, data) {
    resizeIdRef.current += 1;
    var currentId = resizeIdRef.current;
    resizeInfosRef.current.push({
      size: size,
      element: element,
      data: data
    });
    Promise.resolve().then(function () {
      if (currentId === resizeIdRef.current) {
        onBatchResize === null || onBatchResize === void 0 || onBatchResize(resizeInfosRef.current);
        resizeInfosRef.current = [];
      }
    });

    // Continue bubbling if parent exist
    onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(size, element, data);
  }, [onBatchResize, onCollectionResize]);
  return /*#__PURE__*/react.createElement(CollectionContext.Provider, {
    value: onResize
  }, children);
}
;// CONCATENATED MODULE: ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g.Math === Math) {
        return __webpack_require__.g;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ const ResizeObserver_es = (index);

;// CONCATENATED MODULE: ./node_modules/rc-resize-observer/es/utils/observerUtil.js

// =============================== Const ===============================
var elementListeners = new Map();
function onResize(entities) {
  entities.forEach(function (entity) {
    var _elementListeners$get;
    var target = entity.target;
    (_elementListeners$get = elementListeners.get(target)) === null || _elementListeners$get === void 0 || _elementListeners$get.forEach(function (listener) {
      return listener(target);
    });
  });
}

// Note: ResizeObserver polyfill not support option to measure border-box resize
var resizeObserver = new ResizeObserver_es(onResize);

// Dev env only
var _el = (/* unused pure expression or super */ null && ( false ? 0 : null)); // eslint-disable-line
var _rs = (/* unused pure expression or super */ null && ( false ? 0 : null)); // eslint-disable-line

// ============================== Observe ==============================
function observe(element, callback) {
  if (!elementListeners.has(element)) {
    elementListeners.set(element, new Set());
    resizeObserver.observe(element);
  }
  elementListeners.get(element).add(callback);
}
function unobserve(element, callback) {
  if (elementListeners.has(element)) {
    elementListeners.get(element).delete(callback);
    if (!elementListeners.get(element).size) {
      resizeObserver.unobserve(element);
      elementListeners.delete(element);
    }
  }
}
;// CONCATENATED MODULE: ./node_modules/rc-resize-observer/es/SingleObserver/DomWrapper.js





/**
 * Fallback to findDOMNode if origin ref do not provide any dom element
 */
var DomWrapper = /*#__PURE__*/function (_React$Component) {
  _inherits(DomWrapper, _React$Component);
  var _super = _createSuper(DomWrapper);
  function DomWrapper() {
    _classCallCheck(this, DomWrapper);
    return _super.apply(this, arguments);
  }
  _createClass(DomWrapper, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return DomWrapper;
}(react.Component);

;// CONCATENATED MODULE: ./node_modules/rc-resize-observer/es/SingleObserver/index.js








function SingleObserver(props, ref) {
  var children = props.children,
    disabled = props.disabled;
  var elementRef = react.useRef(null);
  var wrapperRef = react.useRef(null);
  var onCollectionResize = react.useContext(CollectionContext);

  // =========================== Children ===========================
  var isRenderProps = typeof children === 'function';
  var mergedChildren = isRenderProps ? children(elementRef) : children;

  // ============================= Size =============================
  var sizeRef = react.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  });

  // ============================= Ref ==============================
  var canRef = !isRenderProps && /*#__PURE__*/react.isValidElement(mergedChildren) && supportRef(mergedChildren);
  var originRef = canRef ? getNodeRef(mergedChildren) : null;
  var mergedRef = useComposeRef(originRef, elementRef);
  var getDom = function getDom() {
    var _elementRef$current;
    return findDOMNode(elementRef.current) || (
    // Support `nativeElement` format
    elementRef.current && typeof_typeof(elementRef.current) === 'object' ? findDOMNode((_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : _elementRef$current.nativeElement) : null) || findDOMNode(wrapperRef.current);
  };
  react.useImperativeHandle(ref, function () {
    return getDom();
  });

  // =========================== Observe ============================
  var propsRef = react.useRef(props);
  propsRef.current = props;

  // Handler
  var onInternalResize = react.useCallback(function (target) {
    var _propsRef$current = propsRef.current,
      onResize = _propsRef$current.onResize,
      data = _propsRef$current.data;
    var _target$getBoundingCl = target.getBoundingClientRect(),
      width = _target$getBoundingCl.width,
      height = _target$getBoundingCl.height;
    var offsetWidth = target.offsetWidth,
      offsetHeight = target.offsetHeight;

    /**
     * Resize observer trigger when content size changed.
     * In most case we just care about element size,
     * let's use `boundary` instead of `contentRect` here to avoid shaking.
     */
    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);
    if (sizeRef.current.width !== fixedWidth || sizeRef.current.height !== fixedHeight || sizeRef.current.offsetWidth !== offsetWidth || sizeRef.current.offsetHeight !== offsetHeight) {
      var size = {
        width: fixedWidth,
        height: fixedHeight,
        offsetWidth: offsetWidth,
        offsetHeight: offsetHeight
      };
      sizeRef.current = size;

      // IE is strange, right?
      var mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
      var mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;
      var sizeInfo = _objectSpread2(_objectSpread2({}, size), {}, {
        offsetWidth: mergedOffsetWidth,
        offsetHeight: mergedOffsetHeight
      });

      // Let collection know what happened
      onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(sizeInfo, target, data);
      if (onResize) {
        // defer the callback but not defer to next frame
        Promise.resolve().then(function () {
          onResize(sizeInfo, target);
        });
      }
    }
  }, []);

  // Dynamic observe
  react.useEffect(function () {
    var currentElement = getDom();
    if (currentElement && !disabled) {
      observe(currentElement, onInternalResize);
    }
    return function () {
      return unobserve(currentElement, onInternalResize);
    };
  }, [elementRef.current, disabled]);

  // ============================ Render ============================
  return /*#__PURE__*/react.createElement(DomWrapper, {
    ref: wrapperRef
  }, canRef ? /*#__PURE__*/react.cloneElement(mergedChildren, {
    ref: mergedRef
  }) : mergedChildren);
}
var RefSingleObserver = /*#__PURE__*/react.forwardRef(SingleObserver);
if (false) {}
/* harmony default export */ const es_SingleObserver = (RefSingleObserver);
;// CONCATENATED MODULE: ./node_modules/rc-resize-observer/es/index.js






var INTERNAL_PREFIX_KEY = 'rc-observer-key';


function es_ResizeObserver(props, ref) {
  var children = props.children;
  var childNodes = typeof children === 'function' ? [children] : toArray(children);
  if (false) {}
  return childNodes.map(function (child, index) {
    var key = (child === null || child === void 0 ? void 0 : child.key) || "".concat(INTERNAL_PREFIX_KEY, "-").concat(index);
    return /*#__PURE__*/react.createElement(es_SingleObserver, (0,esm_extends/* default */.A)({}, props, {
      key: key,
      ref: index === 0 ? ref : undefined
    }), child);
  });
}
var RefResizeObserver = /*#__PURE__*/react.forwardRef(es_ResizeObserver);
if (false) {}
RefResizeObserver.Collection = Collection;
/* harmony default export */ const es = (RefResizeObserver);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/hooks/useEvent.js

function useEvent_useEvent(callback) {
  var fnRef = react.useRef();
  fnRef.current = callback;
  var memoFn = react.useCallback(function () {
    var _fnRef$current;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
  }, []);
  return memoFn;
}
;// CONCATENATED MODULE: ./node_modules/rc-util/es/hooks/useState.js


/**
 * Same as React.useState but `setState` accept `ignoreDestroy` param to not to setState after destroyed.
 * We do not make this auto is to avoid real memory leak.
 * Developer should confirm it's safe to ignore themselves.
 */
function useSafeState(defaultValue) {
  var destroyRef = react.useRef(false);
  var _React$useState = react.useState(defaultValue),
    _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2),
    value = _React$useState2[0],
    setValue = _React$useState2[1];
  react.useEffect(function () {
    destroyRef.current = false;
    return function () {
      destroyRef.current = true;
    };
  }, []);
  function safeSetState(updater, ignoreDestroy) {
    if (ignoreDestroy && destroyRef.current) {
      return;
    }
    setValue(updater);
  }
  return [value, safeSetState];
}
;// CONCATENATED MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js




/** We only think `undefined` is empty */
function hasValue(value) {
  return value !== undefined;
}

/**
 * Similar to `useState` but will use props value if provided.
 * Note that internal use rc-util `useState` hook.
 */
function useMergedState(defaultStateValue, option) {
  var _ref = option || {},
    defaultValue = _ref.defaultValue,
    value = _ref.value,
    onChange = _ref.onChange,
    postState = _ref.postState;

  // ======================= Init =======================
  var _useState = useState(function () {
      if (hasValue(value)) {
        return value;
      } else if (hasValue(defaultValue)) {
        return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
      } else {
        return typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
      }
    }),
    _useState2 = _slicedToArray(_useState, 2),
    innerValue = _useState2[0],
    setInnerValue = _useState2[1];
  var mergedValue = value !== undefined ? value : innerValue;
  var postMergedValue = postState ? postState(mergedValue) : mergedValue;

  // ====================== Change ======================
  var onChangeFn = useEvent(onChange);
  var _useState3 = useState([mergedValue]),
    _useState4 = _slicedToArray(_useState3, 2),
    prevValue = _useState4[0],
    setPrevValue = _useState4[1];
  useLayoutUpdateEffect(function () {
    var prev = prevValue[0];
    if (innerValue !== prev) {
      onChangeFn(innerValue, prev);
    }
  }, [prevValue]);

  // Sync value back to `undefined` when it from control to un-control
  useLayoutUpdateEffect(function () {
    if (!hasValue(value)) {
      setInnerValue(value);
    }
  }, [value]);

  // ====================== Update ======================
  var triggerChange = useEvent(function (updater, ignoreDestroy) {
    setInnerValue(updater, ignoreDestroy);
    setPrevValue([mergedValue], ignoreDestroy);
  });
  return [postMergedValue, triggerChange];
}
;// CONCATENATED MODULE: ./node_modules/rc-util/es/utils/set.js





function internalSet(entity, paths, value, removeIfUndefined) {
  if (!paths.length) {
    return value;
  }
  var _paths = _toArray(paths),
    path = _paths[0],
    restPath = _paths.slice(1);
  var clone;
  if (!entity && typeof path === 'number') {
    clone = [];
  } else if (Array.isArray(entity)) {
    clone = _toConsumableArray(entity);
  } else {
    clone = _objectSpread({}, entity);
  }

  // Delete prop if `removeIfUndefined` and value is undefined
  if (removeIfUndefined && value === undefined && restPath.length === 1) {
    delete clone[path][restPath[0]];
  } else {
    clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
  }
  return clone;
}
function set(entity, paths, value) {
  var removeIfUndefined = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  // Do nothing if `removeIfUndefined` and parent object not exist
  if (paths.length && removeIfUndefined && value === undefined && !get(entity, paths.slice(0, -1))) {
    return entity;
  }
  return internalSet(entity, paths, value, removeIfUndefined);
}
function isObject(obj) {
  return _typeof(obj) === 'object' && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
}
function createEmpty(source) {
  return Array.isArray(source) ? [] : {};
}
var keys = typeof Reflect === 'undefined' ? Object.keys : Reflect.ownKeys;

/**
 * Merge objects which will create
 */
function merge() {
  for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
    sources[_key] = arguments[_key];
  }
  var clone = createEmpty(sources[0]);
  sources.forEach(function (src) {
    function internalMerge(path, parentLoopSet) {
      var loopSet = new Set(parentLoopSet);
      var value = get(src, path);
      var isArr = Array.isArray(value);
      if (isArr || isObject(value)) {
        // Only add not loop obj
        if (!loopSet.has(value)) {
          loopSet.add(value);
          var originValue = get(clone, path);
          if (isArr) {
            // Array will always be override
            clone = set(clone, path, []);
          } else if (!originValue || _typeof(originValue) !== 'object') {
            // Init container if not exist
            clone = set(clone, path, createEmpty(value));
          }
          keys(value).forEach(function (key) {
            internalMerge([].concat(_toConsumableArray(path), [key]), loopSet);
          });
        }
      } else {
        clone = set(clone, path, value);
      }
    }
    internalMerge([]);
  });
  return clone;
}
;// CONCATENATED MODULE: ./node_modules/rc-util/es/index.js






;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/Filler.js






/**
 * Fill component to provided the scroll content real height.
 */
var Filler = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var height = _ref.height,
    offsetY = _ref.offsetY,
    offsetX = _ref.offsetX,
    children = _ref.children,
    prefixCls = _ref.prefixCls,
    onInnerResize = _ref.onInnerResize,
    innerProps = _ref.innerProps,
    rtl = _ref.rtl,
    extra = _ref.extra;
  var outerStyle = {};
  var innerStyle = {
    display: 'flex',
    flexDirection: 'column'
  };
  if (offsetY !== undefined) {
    // Not set `width` since this will break `sticky: right`
    outerStyle = {
      height: height,
      position: 'relative',
      overflow: 'hidden'
    };
    innerStyle = _objectSpread2(_objectSpread2({}, innerStyle), {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      transform: "translateY(".concat(offsetY, "px)")
    }, rtl ? 'marginRight' : 'marginLeft', -offsetX), "position", 'absolute'), "left", 0), "right", 0), "top", 0));
  }
  return /*#__PURE__*/react.createElement("div", {
    style: outerStyle
  }, /*#__PURE__*/react.createElement(es, {
    onResize: function onResize(_ref2) {
      var offsetHeight = _ref2.offsetHeight;
      if (offsetHeight && onInnerResize) {
        onInnerResize();
      }
    }
  }, /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.A)({
    style: innerStyle,
    className: classnames_default()(_defineProperty({}, "".concat(prefixCls, "-holder-inner"), prefixCls)),
    ref: ref
  }, innerProps), children, extra)));
});
Filler.displayName = 'Filler';
/* harmony default export */ const es_Filler = (Filler);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/Item.js

function Item(_ref) {
  var children = _ref.children,
    setRef = _ref.setRef;
  var refFunc = react.useCallback(function (node) {
    setRef(node);
  }, []);
  return /*#__PURE__*/react.cloneElement(children, {
    ref: refFunc
  });
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useChildren.js


function useChildren(list, startIndex, endIndex, scrollWidth, offsetX, setNodeRef, renderFunc, _ref) {
  var getKey = _ref.getKey;
  return list.slice(startIndex, endIndex + 1).map(function (item, index) {
    var eleIndex = startIndex + index;
    var node = renderFunc(item, eleIndex, {
      style: {
        width: scrollWidth
      },
      offsetX: offsetX
    });
    var key = getKey(item);
    return /*#__PURE__*/react.createElement(Item, {
      key: key,
      setRef: function setRef(ele) {
        return setNodeRef(item, ele);
      }
    }, node);
  });
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/utils/algorithmUtil.js
/**
 * Get index with specific start index one by one. e.g.
 * min: 3, max: 9, start: 6
 *
 * Return index is:
 * [0]: 6
 * [1]: 7
 * [2]: 5
 * [3]: 8
 * [4]: 4
 * [5]: 9
 * [6]: 3
 */
function getIndexByStartLoc(min, max, start, index) {
  var beforeCount = start - min;
  var afterCount = max - start;
  var balanceCount = Math.min(beforeCount, afterCount) * 2;

  // Balance
  if (index <= balanceCount) {
    var stepIndex = Math.floor(index / 2);
    if (index % 2) {
      return start + stepIndex + 1;
    }
    return start - stepIndex;
  }

  // One is out of range
  if (beforeCount > afterCount) {
    return start - (index - afterCount);
  }
  return start + (index - beforeCount);
}

/**
 * We assume that 2 list has only 1 item diff and others keeping the order.
 * So we can use dichotomy algorithm to find changed one.
 */
function findListDiffIndex(originList, targetList, getKey) {
  var originLen = originList.length;
  var targetLen = targetList.length;
  var shortList;
  var longList;
  if (originLen === 0 && targetLen === 0) {
    return null;
  }
  if (originLen < targetLen) {
    shortList = originList;
    longList = targetList;
  } else {
    shortList = targetList;
    longList = originList;
  }
  var notExistKey = {
    __EMPTY_ITEM__: true
  };
  function getItemKey(item) {
    if (item !== undefined) {
      return getKey(item);
    }
    return notExistKey;
  }

  // Loop to find diff one
  var diffIndex = null;
  var multiple = Math.abs(originLen - targetLen) !== 1;
  for (var i = 0; i < longList.length; i += 1) {
    var shortKey = getItemKey(shortList[i]);
    var longKey = getItemKey(longList[i]);
    if (shortKey !== longKey) {
      diffIndex = i;
      multiple = multiple || shortKey !== getItemKey(longList[i + 1]);
      break;
    }
  }
  return diffIndex === null ? null : {
    index: diffIndex,
    multiple: multiple
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useDiffItem.js



function useDiffItem(data, getKey, onDiff) {
  var _React$useState = react.useState(data),
    _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2),
    prevData = _React$useState2[0],
    setPrevData = _React$useState2[1];
  var _React$useState3 = react.useState(null),
    _React$useState4 = slicedToArray_slicedToArray(_React$useState3, 2),
    diffItem = _React$useState4[0],
    setDiffItem = _React$useState4[1];
  react.useEffect(function () {
    var diff = findListDiffIndex(prevData || [], data || [], getKey);
    if ((diff === null || diff === void 0 ? void 0 : diff.index) !== undefined) {
      onDiff === null || onDiff === void 0 || onDiff(diff.index);
      setDiffItem(data[diff.index]);
    }
    setPrevData(data);
  }, [data]);
  return [diffItem];
}
;// CONCATENATED MODULE: ./node_modules/rc-util/es/raf.js
var raf = function raf(callback) {
  return +setTimeout(callback, 16);
};
var caf = function caf(num) {
  return clearTimeout(num);
};
if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
  raf = function raf(callback) {
    return window.requestAnimationFrame(callback);
  };
  caf = function caf(handle) {
    return window.cancelAnimationFrame(handle);
  };
}
var rafUUID = 0;
var rafIds = new Map();
function cleanup(id) {
  rafIds.delete(id);
}
var wrapperRaf = function wrapperRaf(callback) {
  var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  rafUUID += 1;
  var id = rafUUID;
  function callRef(leftTimes) {
    if (leftTimes === 0) {
      // Clean up
      cleanup(id);

      // Trigger
      callback();
    } else {
      // Next raf
      var realId = raf(function () {
        callRef(leftTimes - 1);
      });

      // Bind real raf id
      rafIds.set(id, realId);
    }
  }
  callRef(times);
  return id;
};
wrapperRaf.cancel = function (id) {
  var realId = rafIds.get(id);
  cleanup(id);
  return caf(realId);
};
if (false) {}
/* harmony default export */ const es_raf = (wrapperRaf);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/utils/isFirefox.js

var isFF = (typeof navigator === "undefined" ? "undefined" : typeof_typeof(navigator)) === 'object' && /Firefox/i.test(navigator.userAgent);
/* harmony default export */ const isFirefox = (isFF);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useOriginScroll.js

/* harmony default export */ const useOriginScroll = (function (isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight) {
  // Do lock for a wheel when scrolling
  var lockRef = (0,react.useRef)(false);
  var lockTimeoutRef = (0,react.useRef)(null);
  function lockScroll() {
    clearTimeout(lockTimeoutRef.current);
    lockRef.current = true;
    lockTimeoutRef.current = setTimeout(function () {
      lockRef.current = false;
    }, 50);
  }

  // Pass to ref since global add is in closure
  var scrollPingRef = (0,react.useRef)({
    top: isScrollAtTop,
    bottom: isScrollAtBottom,
    left: isScrollAtLeft,
    right: isScrollAtRight
  });
  scrollPingRef.current.top = isScrollAtTop;
  scrollPingRef.current.bottom = isScrollAtBottom;
  scrollPingRef.current.left = isScrollAtLeft;
  scrollPingRef.current.right = isScrollAtRight;
  return function (isHorizontal, delta) {
    var smoothOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var originScroll = isHorizontal ?
    // Pass origin wheel when on the left
    delta < 0 && scrollPingRef.current.left ||
    // Pass origin wheel when on the right
    delta > 0 && scrollPingRef.current.right // Pass origin wheel when on the top
    : delta < 0 && scrollPingRef.current.top ||
    // Pass origin wheel when on the bottom
    delta > 0 && scrollPingRef.current.bottom;
    if (smoothOffset && originScroll) {
      // No need lock anymore when it's smooth offset from touchMove interval
      clearTimeout(lockTimeoutRef.current);
      lockRef.current = false;
    } else if (!originScroll || lockRef.current) {
      lockScroll();
    }
    return !lockRef.current && originScroll;
  };
});
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useFrameWheel.js




function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight, horizontalScroll,
/***
 * Return `true` when you need to prevent default event
 */
onWheelDelta) {
  var offsetRef = (0,react.useRef)(0);
  var nextFrameRef = (0,react.useRef)(null);

  // Firefox patch
  var wheelValueRef = (0,react.useRef)(null);
  var isMouseScrollRef = (0,react.useRef)(false);

  // Scroll status sync
  var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight);
  function onWheelY(e, deltaY) {
    es_raf.cancel(nextFrameRef.current);

    // Do nothing when scroll at the edge, Skip check when is in scroll
    if (originScroll(false, deltaY)) return;

    // Skip if nest List has handled this event
    var event = e;
    if (!event._virtualHandled) {
      event._virtualHandled = true;
    } else {
      return;
    }
    offsetRef.current += deltaY;
    wheelValueRef.current = deltaY;

    // Proxy of scroll events
    if (!isFirefox) {
      event.preventDefault();
    }
    nextFrameRef.current = es_raf(function () {
      // Patch a multiple for Firefox to fix wheel number too small
      // ref: https://github.com/ant-design/ant-design/issues/26372#issuecomment-679460266
      var patchMultiple = isMouseScrollRef.current ? 10 : 1;
      onWheelDelta(offsetRef.current * patchMultiple, false);
      offsetRef.current = 0;
    });
  }
  function onWheelX(event, deltaX) {
    onWheelDelta(deltaX, true);
    if (!isFirefox) {
      event.preventDefault();
    }
  }

  // Check for which direction does wheel do. `sx` means `shift + wheel`
  var wheelDirectionRef = (0,react.useRef)(null);
  var wheelDirectionCleanRef = (0,react.useRef)(null);
  function onWheel(event) {
    if (!inVirtual) return;

    // Wait for 2 frame to clean direction
    es_raf.cancel(wheelDirectionCleanRef.current);
    wheelDirectionCleanRef.current = es_raf(function () {
      wheelDirectionRef.current = null;
    }, 2);
    var deltaX = event.deltaX,
      deltaY = event.deltaY,
      shiftKey = event.shiftKey;
    var mergedDeltaX = deltaX;
    var mergedDeltaY = deltaY;
    if (wheelDirectionRef.current === 'sx' || !wheelDirectionRef.current && (shiftKey || false) && deltaY && !deltaX) {
      mergedDeltaX = deltaY;
      mergedDeltaY = 0;
      wheelDirectionRef.current = 'sx';
    }
    var absX = Math.abs(mergedDeltaX);
    var absY = Math.abs(mergedDeltaY);
    if (wheelDirectionRef.current === null) {
      wheelDirectionRef.current = horizontalScroll && absX > absY ? 'x' : 'y';
    }
    if (wheelDirectionRef.current === 'y') {
      onWheelY(event, mergedDeltaY);
    } else {
      onWheelX(event, mergedDeltaX);
    }
  }

  // A patch for firefox
  function onFireFoxScroll(event) {
    if (!inVirtual) return;
    isMouseScrollRef.current = event.detail === wheelValueRef.current;
  }
  return [onWheel, onFireFoxScroll];
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useGetSize.js



/**
 * Size info need loop query for the `heights` which will has the perf issue.
 * Let cache result for each render phase.
 */
function useGetSize(mergedData, getKey, heights, itemHeight) {
  var _React$useMemo = react.useMemo(function () {
      return [new Map(), []];
    }, [mergedData, heights.id, itemHeight]),
    _React$useMemo2 = slicedToArray_slicedToArray(_React$useMemo, 2),
    key2Index = _React$useMemo2[0],
    bottomList = _React$useMemo2[1];
  var getSize = function getSize(startKey) {
    var endKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : startKey;
    // Get from cache first
    var startIndex = key2Index.get(startKey);
    var endIndex = key2Index.get(endKey);

    // Loop to fill the cache
    if (startIndex === undefined || endIndex === undefined) {
      var dataLen = mergedData.length;
      for (var i = bottomList.length; i < dataLen; i += 1) {
        var _heights$get;
        var item = mergedData[i];
        var key = getKey(item);
        key2Index.set(key, i);
        var cacheHeight = (_heights$get = heights.get(key)) !== null && _heights$get !== void 0 ? _heights$get : itemHeight;
        bottomList[i] = (bottomList[i - 1] || 0) + cacheHeight;
        if (key === startKey) {
          startIndex = i;
        }
        if (key === endKey) {
          endIndex = i;
        }
        if (startIndex !== undefined && endIndex !== undefined) {
          break;
        }
      }
    }
    return {
      top: bottomList[startIndex - 1] || 0,
      bottom: bottomList[endIndex]
    };
  };
  return getSize;
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/utils/CacheMap.js



// Firefox has low performance of map.
var CacheMap = /*#__PURE__*/function () {
  function CacheMap() {
    _classCallCheck(this, CacheMap);
    _defineProperty(this, "maps", void 0);
    // Used for cache key
    // `useMemo` no need to update if `id` not change
    _defineProperty(this, "id", 0);
    _defineProperty(this, "diffKeys", new Set());
    this.maps = Object.create(null);
  }
  _createClass(CacheMap, [{
    key: "set",
    value: function set(key, value) {
      this.maps[key] = value;
      this.id += 1;
      this.diffKeys.add(key);
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.maps[key];
    }

    /**
     * CacheMap will record the key changed.
     * To help to know what's update in the next render.
     */
  }, {
    key: "resetRecord",
    value: function resetRecord() {
      this.diffKeys.clear();
    }
  }, {
    key: "getRecord",
    value: function getRecord() {
      return this.diffKeys;
    }
  }]);
  return CacheMap;
}();
/* harmony default export */ const utils_CacheMap = (CacheMap);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useHeights.js




function parseNumber(value) {
  var num = parseFloat(value);
  return isNaN(num) ? 0 : num;
}
function useHeights(getKey, onItemAdd, onItemRemove) {
  var _React$useState = react.useState(0),
    _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2),
    updatedMark = _React$useState2[0],
    setUpdatedMark = _React$useState2[1];
  var instanceRef = (0,react.useRef)(new Map());
  var heightsRef = (0,react.useRef)(new utils_CacheMap());
  var promiseIdRef = (0,react.useRef)(0);
  function cancelRaf() {
    promiseIdRef.current += 1;
  }
  function collectHeight() {
    var sync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    cancelRaf();
    var doCollect = function doCollect() {
      var changed = false;
      instanceRef.current.forEach(function (element, key) {
        if (element && element.offsetParent) {
          var offsetHeight = element.offsetHeight;
          var _getComputedStyle = getComputedStyle(element),
            marginTop = _getComputedStyle.marginTop,
            marginBottom = _getComputedStyle.marginBottom;
          var marginTopNum = parseNumber(marginTop);
          var marginBottomNum = parseNumber(marginBottom);
          var totalHeight = offsetHeight + marginTopNum + marginBottomNum;
          if (heightsRef.current.get(key) !== totalHeight) {
            heightsRef.current.set(key, totalHeight);
            changed = true;
          }
        }
      });

      // Always trigger update mark to tell parent that should re-calculate heights when resized
      if (changed) {
        setUpdatedMark(function (c) {
          return c + 1;
        });
      }
    };
    if (sync) {
      doCollect();
    } else {
      promiseIdRef.current += 1;
      var id = promiseIdRef.current;
      Promise.resolve().then(function () {
        if (id === promiseIdRef.current) {
          doCollect();
        }
      });
    }
  }
  function setInstanceRef(item, instance) {
    var key = getKey(item);
    var origin = instanceRef.current.get(key);
    if (instance) {
      instanceRef.current.set(key, instance);
      collectHeight();
    } else {
      instanceRef.current.delete(key);
    }

    // Instance changed
    if (!origin !== !instance) {
      if (instance) {
        onItemAdd === null || onItemAdd === void 0 || onItemAdd(item);
      } else {
        onItemRemove === null || onItemRemove === void 0 || onItemRemove(item);
      }
    }
  }
  (0,react.useEffect)(function () {
    return cancelRaf;
  }, []);
  return [setInstanceRef, collectHeight, heightsRef.current, updatedMark];
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useMobileTouchMove.js


var SMOOTH_PTG = 14 / 15;
function useMobileTouchMove(inVirtual, listRef, callback) {
  var touchedRef = (0,react.useRef)(false);
  var touchXRef = (0,react.useRef)(0);
  var touchYRef = (0,react.useRef)(0);
  var elementRef = (0,react.useRef)(null);

  // Smooth scroll
  var intervalRef = (0,react.useRef)(null);

  /* eslint-disable prefer-const */
  var cleanUpEvents;
  var onTouchMove = function onTouchMove(e) {
    if (touchedRef.current) {
      var currentX = Math.ceil(e.touches[0].pageX);
      var currentY = Math.ceil(e.touches[0].pageY);
      var offsetX = touchXRef.current - currentX;
      var offsetY = touchYRef.current - currentY;
      var _isHorizontal = Math.abs(offsetX) > Math.abs(offsetY);
      if (_isHorizontal) {
        touchXRef.current = currentX;
      } else {
        touchYRef.current = currentY;
      }
      var scrollHandled = callback(_isHorizontal, _isHorizontal ? offsetX : offsetY, false, e);
      if (scrollHandled) {
        e.preventDefault();
      }

      // Smooth interval
      clearInterval(intervalRef.current);
      if (scrollHandled) {
        intervalRef.current = setInterval(function () {
          if (_isHorizontal) {
            offsetX *= SMOOTH_PTG;
          } else {
            offsetY *= SMOOTH_PTG;
          }
          var offset = Math.floor(_isHorizontal ? offsetX : offsetY);
          if (!callback(_isHorizontal, offset, true) || Math.abs(offset) <= 0.1) {
            clearInterval(intervalRef.current);
          }
        }, 16);
      }
    }
  };
  var onTouchEnd = function onTouchEnd() {
    touchedRef.current = false;
    cleanUpEvents();
  };
  var onTouchStart = function onTouchStart(e) {
    cleanUpEvents();
    if (e.touches.length === 1 && !touchedRef.current) {
      touchedRef.current = true;
      touchXRef.current = Math.ceil(e.touches[0].pageX);
      touchYRef.current = Math.ceil(e.touches[0].pageY);
      elementRef.current = e.target;
      elementRef.current.addEventListener('touchmove', onTouchMove, {
        passive: false
      });
      elementRef.current.addEventListener('touchend', onTouchEnd, {
        passive: true
      });
    }
  };
  cleanUpEvents = function cleanUpEvents() {
    if (elementRef.current) {
      elementRef.current.removeEventListener('touchmove', onTouchMove);
      elementRef.current.removeEventListener('touchend', onTouchEnd);
    }
  };
  hooks_useLayoutEffect(function () {
    if (inVirtual) {
      listRef.current.addEventListener('touchstart', onTouchStart, {
        passive: true
      });
    }
    return function () {
      var _listRef$current;
      (_listRef$current = listRef.current) === null || _listRef$current === void 0 || _listRef$current.removeEventListener('touchstart', onTouchStart);
      cleanUpEvents();
      clearInterval(intervalRef.current);
    };
  }, [inVirtual]);
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useScrollDrag.js


function smoothScrollOffset(offset) {
  return Math.floor(Math.pow(offset, 0.5));
}
function getPageXY(e, horizontal) {
  var obj = 'touches' in e ? e.touches[0] : e;
  return obj[horizontal ? 'pageX' : 'pageY'] - window[horizontal ? 'scrollX' : 'scrollY'];
}
function useScrollDrag(inVirtual, componentRef, onScrollOffset) {
  react.useEffect(function () {
    var ele = componentRef.current;
    if (inVirtual && ele) {
      var mouseDownLock = false;
      var rafId;
      var _offset;
      var stopScroll = function stopScroll() {
        es_raf.cancel(rafId);
      };
      var continueScroll = function continueScroll() {
        stopScroll();
        rafId = es_raf(function () {
          onScrollOffset(_offset);
          continueScroll();
        });
      };
      var onMouseDown = function onMouseDown(e) {
        // Skip if element set draggable
        if (e.target.draggable || e.button !== 0) {
          return;
        }
        // Skip if nest List has handled this event
        var event = e;
        if (!event._virtualHandled) {
          event._virtualHandled = true;
          mouseDownLock = true;
        }
      };
      var onMouseUp = function onMouseUp() {
        mouseDownLock = false;
        stopScroll();
      };
      var onMouseMove = function onMouseMove(e) {
        if (mouseDownLock) {
          var mouseY = getPageXY(e, false);
          var _ele$getBoundingClien = ele.getBoundingClientRect(),
            top = _ele$getBoundingClien.top,
            bottom = _ele$getBoundingClien.bottom;
          if (mouseY <= top) {
            var diff = top - mouseY;
            _offset = -smoothScrollOffset(diff);
            continueScroll();
          } else if (mouseY >= bottom) {
            var _diff = mouseY - bottom;
            _offset = smoothScrollOffset(_diff);
            continueScroll();
          } else {
            stopScroll();
          }
        }
      };
      ele.addEventListener('mousedown', onMouseDown);
      ele.ownerDocument.addEventListener('mouseup', onMouseUp);
      ele.ownerDocument.addEventListener('mousemove', onMouseMove);
      return function () {
        ele.removeEventListener('mousedown', onMouseDown);
        ele.ownerDocument.removeEventListener('mouseup', onMouseUp);
        ele.ownerDocument.removeEventListener('mousemove', onMouseMove);
        stopScroll();
      };
    }
  }, [inVirtual]);
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useScrollTo.js



/* eslint-disable no-param-reassign */




var MAX_TIMES = 10;
function useScrollTo(containerRef, data, heights, itemHeight, getKey, collectHeight, syncScrollTop, triggerFlash) {
  var scrollRef = react.useRef();
  var _React$useState = react.useState(null),
    _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2),
    syncState = _React$useState2[0],
    setSyncState = _React$useState2[1];

  // ========================== Sync Scroll ==========================
  hooks_useLayoutEffect(function () {
    if (syncState && syncState.times < MAX_TIMES) {
      // Never reach
      if (!containerRef.current) {
        setSyncState(function (ori) {
          return _objectSpread2({}, ori);
        });
        return;
      }
      collectHeight();
      var targetAlign = syncState.targetAlign,
        originAlign = syncState.originAlign,
        index = syncState.index,
        offset = syncState.offset;
      var height = containerRef.current.clientHeight;
      var needCollectHeight = false;
      var newTargetAlign = targetAlign;
      var targetTop = null;

      // Go to next frame if height not exist
      if (height) {
        var mergedAlign = targetAlign || originAlign;

        // Get top & bottom
        var stackTop = 0;
        var itemTop = 0;
        var itemBottom = 0;
        var maxLen = Math.min(data.length - 1, index);
        for (var i = 0; i <= maxLen; i += 1) {
          var key = getKey(data[i]);
          itemTop = stackTop;
          var cacheHeight = heights.get(key);
          itemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight);
          stackTop = itemBottom;
        }

        // Check if need sync height (visible range has item not record height)
        var leftHeight = mergedAlign === 'top' ? offset : height - offset;
        for (var _i = maxLen; _i >= 0; _i -= 1) {
          var _key = getKey(data[_i]);
          var _cacheHeight = heights.get(_key);
          if (_cacheHeight === undefined) {
            needCollectHeight = true;
            break;
          }
          leftHeight -= _cacheHeight;
          if (leftHeight <= 0) {
            break;
          }
        }

        // Scroll to
        switch (mergedAlign) {
          case 'top':
            targetTop = itemTop - offset;
            break;
          case 'bottom':
            targetTop = itemBottom - height + offset;
            break;
          default:
            {
              var scrollTop = containerRef.current.scrollTop;
              var scrollBottom = scrollTop + height;
              if (itemTop < scrollTop) {
                newTargetAlign = 'top';
              } else if (itemBottom > scrollBottom) {
                newTargetAlign = 'bottom';
              }
            }
        }
        if (targetTop !== null) {
          syncScrollTop(targetTop);
        }

        // One more time for sync
        if (targetTop !== syncState.lastTop) {
          needCollectHeight = true;
        }
      }

      // Trigger next effect
      if (needCollectHeight) {
        setSyncState(_objectSpread2(_objectSpread2({}, syncState), {}, {
          times: syncState.times + 1,
          targetAlign: newTargetAlign,
          lastTop: targetTop
        }));
      }
    } else if (false) {}
  }, [syncState, containerRef.current]);

  // =========================== Scroll To ===========================
  return function (arg) {
    // When not argument provided, we think dev may want to show the scrollbar
    if (arg === null || arg === undefined) {
      triggerFlash();
      return;
    }

    // Normal scroll logic
    es_raf.cancel(scrollRef.current);
    if (typeof arg === 'number') {
      syncScrollTop(arg);
    } else if (arg && typeof_typeof(arg) === 'object') {
      var index;
      var align = arg.align;
      if ('index' in arg) {
        index = arg.index;
      } else {
        index = data.findIndex(function (item) {
          return getKey(item) === arg.key;
        });
      }
      var _arg$offset = arg.offset,
        offset = _arg$offset === void 0 ? 0 : _arg$offset;
      setSyncState({
        times: 0,
        index: index,
        offset: offset,
        originAlign: align
      });
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/ScrollBar.js







var ScrollBar = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    rtl = props.rtl,
    scrollOffset = props.scrollOffset,
    scrollRange = props.scrollRange,
    onStartMove = props.onStartMove,
    onStopMove = props.onStopMove,
    onScroll = props.onScroll,
    horizontal = props.horizontal,
    spinSize = props.spinSize,
    containerSize = props.containerSize,
    style = props.style,
    propsThumbStyle = props.thumbStyle,
    showScrollBar = props.showScrollBar;
  var _React$useState = react.useState(false),
    _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2),
    dragging = _React$useState2[0],
    setDragging = _React$useState2[1];
  var _React$useState3 = react.useState(null),
    _React$useState4 = slicedToArray_slicedToArray(_React$useState3, 2),
    pageXY = _React$useState4[0],
    setPageXY = _React$useState4[1];
  var _React$useState5 = react.useState(null),
    _React$useState6 = slicedToArray_slicedToArray(_React$useState5, 2),
    startTop = _React$useState6[0],
    setStartTop = _React$useState6[1];
  var isLTR = !rtl;

  // ========================= Refs =========================
  var scrollbarRef = react.useRef();
  var thumbRef = react.useRef();

  // ======================= Visible ========================
  var _React$useState7 = react.useState(showScrollBar),
    _React$useState8 = slicedToArray_slicedToArray(_React$useState7, 2),
    visible = _React$useState8[0],
    setVisible = _React$useState8[1];
  var visibleTimeoutRef = react.useRef();
  var delayHidden = function delayHidden() {
    if (showScrollBar === true || showScrollBar === false) return;
    clearTimeout(visibleTimeoutRef.current);
    setVisible(true);
    visibleTimeoutRef.current = setTimeout(function () {
      setVisible(false);
    }, 3000);
  };

  // ======================== Range =========================
  var enableScrollRange = scrollRange - containerSize || 0;
  var enableOffsetRange = containerSize - spinSize || 0;

  // ========================= Top ==========================
  var top = react.useMemo(function () {
    if (scrollOffset === 0 || enableScrollRange === 0) {
      return 0;
    }
    var ptg = scrollOffset / enableScrollRange;
    return ptg * enableOffsetRange;
  }, [scrollOffset, enableScrollRange, enableOffsetRange]);

  // ====================== Container =======================
  var onContainerMouseDown = function onContainerMouseDown(e) {
    e.stopPropagation();
    e.preventDefault();
  };

  // ======================== Thumb =========================
  var stateRef = react.useRef({
    top: top,
    dragging: dragging,
    pageY: pageXY,
    startTop: startTop
  });
  stateRef.current = {
    top: top,
    dragging: dragging,
    pageY: pageXY,
    startTop: startTop
  };
  var onThumbMouseDown = function onThumbMouseDown(e) {
    setDragging(true);
    setPageXY(getPageXY(e, horizontal));
    setStartTop(stateRef.current.top);
    onStartMove();
    e.stopPropagation();
    e.preventDefault();
  };

  // ======================== Effect ========================

  // React make event as passive, but we need to preventDefault
  // Add event on dom directly instead.
  // ref: https://github.com/facebook/react/issues/9809
  react.useEffect(function () {
    var onScrollbarTouchStart = function onScrollbarTouchStart(e) {
      e.preventDefault();
    };
    var scrollbarEle = scrollbarRef.current;
    var thumbEle = thumbRef.current;
    scrollbarEle.addEventListener('touchstart', onScrollbarTouchStart, {
      passive: false
    });
    thumbEle.addEventListener('touchstart', onThumbMouseDown, {
      passive: false
    });
    return function () {
      scrollbarEle.removeEventListener('touchstart', onScrollbarTouchStart);
      thumbEle.removeEventListener('touchstart', onThumbMouseDown);
    };
  }, []);

  // Pass to effect
  var enableScrollRangeRef = react.useRef();
  enableScrollRangeRef.current = enableScrollRange;
  var enableOffsetRangeRef = react.useRef();
  enableOffsetRangeRef.current = enableOffsetRange;
  react.useEffect(function () {
    if (dragging) {
      var moveRafId;
      var onMouseMove = function onMouseMove(e) {
        var _stateRef$current = stateRef.current,
          stateDragging = _stateRef$current.dragging,
          statePageY = _stateRef$current.pageY,
          stateStartTop = _stateRef$current.startTop;
        es_raf.cancel(moveRafId);
        var rect = scrollbarRef.current.getBoundingClientRect();
        var scale = containerSize / (horizontal ? rect.width : rect.height);
        if (stateDragging) {
          var offset = (getPageXY(e, horizontal) - statePageY) * scale;
          var newTop = stateStartTop;
          if (!isLTR && horizontal) {
            newTop -= offset;
          } else {
            newTop += offset;
          }
          var tmpEnableScrollRange = enableScrollRangeRef.current;
          var tmpEnableOffsetRange = enableOffsetRangeRef.current;
          var ptg = tmpEnableOffsetRange ? newTop / tmpEnableOffsetRange : 0;
          var newScrollTop = Math.ceil(ptg * tmpEnableScrollRange);
          newScrollTop = Math.max(newScrollTop, 0);
          newScrollTop = Math.min(newScrollTop, tmpEnableScrollRange);
          moveRafId = es_raf(function () {
            onScroll(newScrollTop, horizontal);
          });
        }
      };
      var onMouseUp = function onMouseUp() {
        setDragging(false);
        onStopMove();
      };
      window.addEventListener('mousemove', onMouseMove, {
        passive: true
      });
      window.addEventListener('touchmove', onMouseMove, {
        passive: true
      });
      window.addEventListener('mouseup', onMouseUp, {
        passive: true
      });
      window.addEventListener('touchend', onMouseUp, {
        passive: true
      });
      return function () {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('touchmove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        window.removeEventListener('touchend', onMouseUp);
        es_raf.cancel(moveRafId);
      };
    }
  }, [dragging]);
  react.useEffect(function () {
    delayHidden();
    return function () {
      clearTimeout(visibleTimeoutRef.current);
    };
  }, [scrollOffset]);

  // ====================== Imperative ======================
  react.useImperativeHandle(ref, function () {
    return {
      delayHidden: delayHidden
    };
  });

  // ======================== Render ========================
  var scrollbarPrefixCls = "".concat(prefixCls, "-scrollbar");
  var containerStyle = {
    position: 'absolute',
    visibility: visible ? null : 'hidden'
  };
  var thumbStyle = {
    position: 'absolute',
    background: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 99,
    cursor: 'pointer',
    userSelect: 'none'
  };
  if (horizontal) {
    // Container
    containerStyle.height = 8;
    containerStyle.left = 0;
    containerStyle.right = 0;
    containerStyle.bottom = 0;

    // Thumb
    thumbStyle.height = '100%';
    thumbStyle.width = spinSize;
    if (isLTR) {
      thumbStyle.left = top;
    } else {
      thumbStyle.right = top;
    }
  } else {
    // Container
    containerStyle.width = 8;
    containerStyle.top = 0;
    containerStyle.bottom = 0;
    if (isLTR) {
      containerStyle.right = 0;
    } else {
      containerStyle.left = 0;
    }

    // Thumb
    thumbStyle.width = '100%';
    thumbStyle.height = spinSize;
    thumbStyle.top = top;
  }
  return /*#__PURE__*/react.createElement("div", {
    ref: scrollbarRef,
    className: classnames_default()(scrollbarPrefixCls, _defineProperty(_defineProperty(_defineProperty({}, "".concat(scrollbarPrefixCls, "-horizontal"), horizontal), "".concat(scrollbarPrefixCls, "-vertical"), !horizontal), "".concat(scrollbarPrefixCls, "-visible"), visible)),
    style: _objectSpread2(_objectSpread2({}, containerStyle), style),
    onMouseDown: onContainerMouseDown,
    onMouseMove: delayHidden
  }, /*#__PURE__*/react.createElement("div", {
    ref: thumbRef,
    className: classnames_default()("".concat(scrollbarPrefixCls, "-thumb"), _defineProperty({}, "".concat(scrollbarPrefixCls, "-thumb-moving"), dragging)),
    style: _objectSpread2(_objectSpread2({}, thumbStyle), propsThumbStyle),
    onMouseDown: onThumbMouseDown
  }));
});
if (false) {}
/* harmony default export */ const es_ScrollBar = (ScrollBar);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/utils/scrollbarUtil.js
var MIN_SIZE = 20;
function getSpinSize() {
  var containerSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var scrollRange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var baseSize = containerSize / scrollRange * containerSize;
  if (isNaN(baseSize)) {
    baseSize = 0;
  }
  baseSize = Math.max(baseSize, MIN_SIZE);
  return Math.floor(baseSize);
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/List.js






var List_excluded = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "scrollWidth", "component", "onScroll", "onVirtualScroll", "onVisibleChange", "innerProps", "extraRender", "styles", "showScrollBar"];



















var EMPTY_DATA = [];
var ScrollStyle = {
  overflowY: 'auto',
  overflowAnchor: 'none'
};
function RawList(props, ref) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-virtual-list' : _props$prefixCls,
    className = props.className,
    height = props.height,
    itemHeight = props.itemHeight,
    _props$fullHeight = props.fullHeight,
    fullHeight = _props$fullHeight === void 0 ? true : _props$fullHeight,
    style = props.style,
    data = props.data,
    children = props.children,
    itemKey = props.itemKey,
    virtual = props.virtual,
    direction = props.direction,
    scrollWidth = props.scrollWidth,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    onScroll = props.onScroll,
    onVirtualScroll = props.onVirtualScroll,
    onVisibleChange = props.onVisibleChange,
    innerProps = props.innerProps,
    extraRender = props.extraRender,
    styles = props.styles,
    _props$showScrollBar = props.showScrollBar,
    showScrollBar = _props$showScrollBar === void 0 ? 'optional' : _props$showScrollBar,
    restProps = objectWithoutProperties_objectWithoutProperties(props, List_excluded);

  // =============================== Item Key ===============================
  var getKey = react.useCallback(function (item) {
    if (typeof itemKey === 'function') {
      return itemKey(item);
    }
    return item === null || item === void 0 ? void 0 : item[itemKey];
  }, [itemKey]);

  // ================================ Height ================================
  var _useHeights = useHeights(getKey, null, null),
    _useHeights2 = slicedToArray_slicedToArray(_useHeights, 4),
    setInstanceRef = _useHeights2[0],
    collectHeight = _useHeights2[1],
    heights = _useHeights2[2],
    heightUpdatedMark = _useHeights2[3];

  // ================================= MISC =================================
  var useVirtual = !!(virtual !== false && height && itemHeight);
  var containerHeight = react.useMemo(function () {
    return Object.values(heights.maps).reduce(function (total, curr) {
      return total + curr;
    }, 0);
  }, [heights.id, heights.maps]);
  var inVirtual = useVirtual && data && (Math.max(itemHeight * data.length, containerHeight) > height || !!scrollWidth);
  var isRTL = direction === 'rtl';
  var mergedClassName = classnames_default()(prefixCls, _defineProperty({}, "".concat(prefixCls, "-rtl"), isRTL), className);
  var mergedData = data || EMPTY_DATA;
  var componentRef = (0,react.useRef)();
  var fillerInnerRef = (0,react.useRef)();
  var containerRef = (0,react.useRef)();

  // =============================== Item Key ===============================

  var _useState = (0,react.useState)(0),
    _useState2 = slicedToArray_slicedToArray(_useState, 2),
    offsetTop = _useState2[0],
    setOffsetTop = _useState2[1];
  var _useState3 = (0,react.useState)(0),
    _useState4 = slicedToArray_slicedToArray(_useState3, 2),
    offsetLeft = _useState4[0],
    setOffsetLeft = _useState4[1];
  var _useState5 = (0,react.useState)(false),
    _useState6 = slicedToArray_slicedToArray(_useState5, 2),
    scrollMoving = _useState6[0],
    setScrollMoving = _useState6[1];
  var onScrollbarStartMove = function onScrollbarStartMove() {
    setScrollMoving(true);
  };
  var onScrollbarStopMove = function onScrollbarStopMove() {
    setScrollMoving(false);
  };
  var sharedConfig = {
    getKey: getKey
  };

  // ================================ Scroll ================================
  function syncScrollTop(newTop) {
    setOffsetTop(function (origin) {
      var value;
      if (typeof newTop === 'function') {
        value = newTop(origin);
      } else {
        value = newTop;
      }
      var alignedTop = keepInRange(value);
      componentRef.current.scrollTop = alignedTop;
      return alignedTop;
    });
  }

  // ================================ Legacy ================================
  // Put ref here since the range is generate by follow
  var rangeRef = (0,react.useRef)({
    start: 0,
    end: mergedData.length
  });
  var diffItemRef = (0,react.useRef)();
  var _useDiffItem = useDiffItem(mergedData, getKey),
    _useDiffItem2 = slicedToArray_slicedToArray(_useDiffItem, 1),
    diffItem = _useDiffItem2[0];
  diffItemRef.current = diffItem;

  // ========================== Visible Calculation =========================
  var _React$useMemo = react.useMemo(function () {
      if (!useVirtual) {
        return {
          scrollHeight: undefined,
          start: 0,
          end: mergedData.length - 1,
          offset: undefined
        };
      }

      // Always use virtual scroll bar in avoid shaking
      if (!inVirtual) {
        var _fillerInnerRef$curre;
        return {
          scrollHeight: ((_fillerInnerRef$curre = fillerInnerRef.current) === null || _fillerInnerRef$curre === void 0 ? void 0 : _fillerInnerRef$curre.offsetHeight) || 0,
          start: 0,
          end: mergedData.length - 1,
          offset: undefined
        };
      }
      var itemTop = 0;
      var startIndex;
      var startOffset;
      var endIndex;
      var dataLen = mergedData.length;
      for (var i = 0; i < dataLen; i += 1) {
        var _item = mergedData[i];
        var key = getKey(_item);
        var cacheHeight = heights.get(key);
        var currentItemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight);

        // Check item top in the range
        if (currentItemBottom >= offsetTop && startIndex === undefined) {
          startIndex = i;
          startOffset = itemTop;
        }

        // Check item bottom in the range. We will render additional one item for motion usage
        if (currentItemBottom > offsetTop + height && endIndex === undefined) {
          endIndex = i;
        }
        itemTop = currentItemBottom;
      }

      // When scrollTop at the end but data cut to small count will reach this
      if (startIndex === undefined) {
        startIndex = 0;
        startOffset = 0;
        endIndex = Math.ceil(height / itemHeight);
      }
      if (endIndex === undefined) {
        endIndex = mergedData.length - 1;
      }

      // Give cache to improve scroll experience
      endIndex = Math.min(endIndex + 1, mergedData.length - 1);
      return {
        scrollHeight: itemTop,
        start: startIndex,
        end: endIndex,
        offset: startOffset
      };
    }, [inVirtual, useVirtual, offsetTop, mergedData, heightUpdatedMark, height]),
    scrollHeight = _React$useMemo.scrollHeight,
    start = _React$useMemo.start,
    end = _React$useMemo.end,
    fillerOffset = _React$useMemo.offset;
  rangeRef.current.start = start;
  rangeRef.current.end = end;

  // When scroll up, first visible item get real height may not same as `itemHeight`,
  // Which will make scroll jump.
  // Let's sync scroll top to avoid jump
  react.useLayoutEffect(function () {
    var changedRecord = heights.getRecord();
    if (changedRecord.size === 1) {
      var recordKey = Array.from(changedRecord)[0];
      // Quick switch data may cause `start` not in `mergedData` anymore
      var startItem = mergedData[start];
      if (startItem) {
        var startIndexKey = getKey(startItem);
        if (startIndexKey === recordKey) {
          var realStartHeight = heights.get(recordKey);
          var diffHeight = realStartHeight - itemHeight;
          syncScrollTop(function (ori) {
            return ori + diffHeight;
          });
        }
      }
    }
    heights.resetRecord();
  }, [scrollHeight]);

  // ================================= Size =================================
  var _React$useState = react.useState({
      width: 0,
      height: height
    }),
    _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2),
    size = _React$useState2[0],
    setSize = _React$useState2[1];
  var onHolderResize = function onHolderResize(sizeInfo) {
    setSize({
      width: sizeInfo.offsetWidth,
      height: sizeInfo.offsetHeight
    });
  };

  // Hack on scrollbar to enable flash call
  var verticalScrollBarRef = (0,react.useRef)();
  var horizontalScrollBarRef = (0,react.useRef)();
  var horizontalScrollBarSpinSize = react.useMemo(function () {
    return getSpinSize(size.width, scrollWidth);
  }, [size.width, scrollWidth]);
  var verticalScrollBarSpinSize = react.useMemo(function () {
    return getSpinSize(size.height, scrollHeight);
  }, [size.height, scrollHeight]);

  // =============================== In Range ===============================
  var maxScrollHeight = scrollHeight - height;
  var maxScrollHeightRef = (0,react.useRef)(maxScrollHeight);
  maxScrollHeightRef.current = maxScrollHeight;
  function keepInRange(newScrollTop) {
    var newTop = newScrollTop;
    if (!Number.isNaN(maxScrollHeightRef.current)) {
      newTop = Math.min(newTop, maxScrollHeightRef.current);
    }
    newTop = Math.max(newTop, 0);
    return newTop;
  }
  var isScrollAtTop = offsetTop <= 0;
  var isScrollAtBottom = offsetTop >= maxScrollHeight;
  var isScrollAtLeft = offsetLeft <= 0;
  var isScrollAtRight = offsetLeft >= scrollWidth;
  var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight);

  // ================================ Scroll ================================
  var getVirtualScrollInfo = function getVirtualScrollInfo() {
    return {
      x: isRTL ? -offsetLeft : offsetLeft,
      y: offsetTop
    };
  };
  var lastVirtualScrollInfoRef = (0,react.useRef)(getVirtualScrollInfo());
  var triggerScroll = useEvent_useEvent(function (params) {
    if (onVirtualScroll) {
      var nextInfo = _objectSpread2(_objectSpread2({}, getVirtualScrollInfo()), params);

      // Trigger when offset changed
      if (lastVirtualScrollInfoRef.current.x !== nextInfo.x || lastVirtualScrollInfoRef.current.y !== nextInfo.y) {
        onVirtualScroll(nextInfo);
        lastVirtualScrollInfoRef.current = nextInfo;
      }
    }
  });
  function onScrollBar(newScrollOffset, horizontal) {
    var newOffset = newScrollOffset;
    if (horizontal) {
      (0,react_dom.flushSync)(function () {
        setOffsetLeft(newOffset);
      });
      triggerScroll();
    } else {
      syncScrollTop(newOffset);
    }
  }

  // When data size reduce. It may trigger native scroll event back to fit scroll position
  function onFallbackScroll(e) {
    var newScrollTop = e.currentTarget.scrollTop;
    if (newScrollTop !== offsetTop) {
      syncScrollTop(newScrollTop);
    }

    // Trigger origin onScroll
    onScroll === null || onScroll === void 0 || onScroll(e);
    triggerScroll();
  }
  var keepInHorizontalRange = function keepInHorizontalRange(nextOffsetLeft) {
    var tmpOffsetLeft = nextOffsetLeft;
    var max = !!scrollWidth ? scrollWidth - size.width : 0;
    tmpOffsetLeft = Math.max(tmpOffsetLeft, 0);
    tmpOffsetLeft = Math.min(tmpOffsetLeft, max);
    return tmpOffsetLeft;
  };
  var onWheelDelta = useEvent_useEvent(function (offsetXY, fromHorizontal) {
    if (fromHorizontal) {
      (0,react_dom.flushSync)(function () {
        setOffsetLeft(function (left) {
          var nextOffsetLeft = left + (isRTL ? -offsetXY : offsetXY);
          return keepInHorizontalRange(nextOffsetLeft);
        });
      });
      triggerScroll();
    } else {
      syncScrollTop(function (top) {
        var newTop = top + offsetXY;
        return newTop;
      });
    }
  });

  // Since this added in global,should use ref to keep update
  var _useFrameWheel = useFrameWheel(useVirtual, isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight, !!scrollWidth, onWheelDelta),
    _useFrameWheel2 = slicedToArray_slicedToArray(_useFrameWheel, 2),
    onRawWheel = _useFrameWheel2[0],
    onFireFoxScroll = _useFrameWheel2[1];

  // Mobile touch move
  useMobileTouchMove(useVirtual, componentRef, function (isHorizontal, delta, smoothOffset, e) {
    var event = e;
    if (originScroll(isHorizontal, delta, smoothOffset)) {
      return false;
    }

    // Fix nest List trigger TouchMove event
    if (!event || !event._virtualHandled) {
      if (event) {
        event._virtualHandled = true;
      }
      onRawWheel({
        preventDefault: function preventDefault() {},
        deltaX: isHorizontal ? delta : 0,
        deltaY: isHorizontal ? 0 : delta
      });
      return true;
    }
    return false;
  });

  // MouseDown drag for scroll
  useScrollDrag(inVirtual, componentRef, function (offset) {
    syncScrollTop(function (top) {
      return top + offset;
    });
  });
  hooks_useLayoutEffect(function () {
    // Firefox only
    function onMozMousePixelScroll(e) {
      // scrolling at top/bottom limit
      var scrollingUpAtTop = isScrollAtTop && e.detail < 0;
      var scrollingDownAtBottom = isScrollAtBottom && e.detail > 0;
      if (useVirtual && !scrollingUpAtTop && !scrollingDownAtBottom) {
        e.preventDefault();
      }
    }
    var componentEle = componentRef.current;
    componentEle.addEventListener('wheel', onRawWheel, {
      passive: false
    });
    componentEle.addEventListener('DOMMouseScroll', onFireFoxScroll, {
      passive: true
    });
    componentEle.addEventListener('MozMousePixelScroll', onMozMousePixelScroll, {
      passive: false
    });
    return function () {
      componentEle.removeEventListener('wheel', onRawWheel);
      componentEle.removeEventListener('DOMMouseScroll', onFireFoxScroll);
      componentEle.removeEventListener('MozMousePixelScroll', onMozMousePixelScroll);
    };
  }, [useVirtual, isScrollAtTop, isScrollAtBottom]);

  // Sync scroll left
  hooks_useLayoutEffect(function () {
    if (scrollWidth) {
      var newOffsetLeft = keepInHorizontalRange(offsetLeft);
      setOffsetLeft(newOffsetLeft);
      triggerScroll({
        x: newOffsetLeft
      });
    }
  }, [size.width, scrollWidth]);

  // ================================= Ref ==================================
  var delayHideScrollBar = function delayHideScrollBar() {
    var _verticalScrollBarRef, _horizontalScrollBarR;
    (_verticalScrollBarRef = verticalScrollBarRef.current) === null || _verticalScrollBarRef === void 0 || _verticalScrollBarRef.delayHidden();
    (_horizontalScrollBarR = horizontalScrollBarRef.current) === null || _horizontalScrollBarR === void 0 || _horizontalScrollBarR.delayHidden();
  };
  var _scrollTo = useScrollTo(componentRef, mergedData, heights, itemHeight, getKey, function () {
    return collectHeight(true);
  }, syncScrollTop, delayHideScrollBar);
  react.useImperativeHandle(ref, function () {
    return {
      nativeElement: containerRef.current,
      getScrollInfo: getVirtualScrollInfo,
      scrollTo: function scrollTo(config) {
        function isPosScroll(arg) {
          return arg && typeof_typeof(arg) === 'object' && ('left' in arg || 'top' in arg);
        }
        if (isPosScroll(config)) {
          // Scroll X
          if (config.left !== undefined) {
            setOffsetLeft(keepInHorizontalRange(config.left));
          }

          // Scroll Y
          _scrollTo(config.top);
        } else {
          _scrollTo(config);
        }
      }
    };
  });

  // ================================ Effect ================================
  /** We need told outside that some list not rendered */
  hooks_useLayoutEffect(function () {
    if (onVisibleChange) {
      var renderList = mergedData.slice(start, end + 1);
      onVisibleChange(renderList, mergedData);
    }
  }, [start, end, mergedData]);

  // ================================ Extra =================================
  var getSize = useGetSize(mergedData, getKey, heights, itemHeight);
  var extraContent = extraRender === null || extraRender === void 0 ? void 0 : extraRender({
    start: start,
    end: end,
    virtual: inVirtual,
    offsetX: offsetLeft,
    offsetY: fillerOffset,
    rtl: isRTL,
    getSize: getSize
  });

  // ================================ Render ================================
  var listChildren = useChildren(mergedData, start, end, scrollWidth, offsetLeft, setInstanceRef, children, sharedConfig);
  var componentStyle = null;
  if (height) {
    componentStyle = _objectSpread2(_defineProperty({}, fullHeight ? 'height' : 'maxHeight', height), ScrollStyle);
    if (useVirtual) {
      componentStyle.overflowY = 'hidden';
      if (scrollWidth) {
        componentStyle.overflowX = 'hidden';
      }
      if (scrollMoving) {
        componentStyle.pointerEvents = 'none';
      }
    }
  }
  var containerProps = {};
  if (isRTL) {
    containerProps.dir = 'rtl';
  }
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.A)({
    ref: containerRef,
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      position: 'relative'
    }),
    className: mergedClassName
  }, containerProps, restProps), /*#__PURE__*/react.createElement(es, {
    onResize: onHolderResize
  }, /*#__PURE__*/react.createElement(Component, {
    className: "".concat(prefixCls, "-holder"),
    style: componentStyle,
    ref: componentRef,
    onScroll: onFallbackScroll,
    onMouseEnter: delayHideScrollBar
  }, /*#__PURE__*/react.createElement(es_Filler, {
    prefixCls: prefixCls,
    height: scrollHeight,
    offsetX: offsetLeft,
    offsetY: fillerOffset,
    scrollWidth: scrollWidth,
    onInnerResize: collectHeight,
    ref: fillerInnerRef,
    innerProps: innerProps,
    rtl: isRTL,
    extra: extraContent
  }, listChildren))), inVirtual && scrollHeight > height && /*#__PURE__*/react.createElement(es_ScrollBar, {
    ref: verticalScrollBarRef,
    prefixCls: prefixCls,
    scrollOffset: offsetTop,
    scrollRange: scrollHeight,
    rtl: isRTL,
    onScroll: onScrollBar,
    onStartMove: onScrollbarStartMove,
    onStopMove: onScrollbarStopMove,
    spinSize: verticalScrollBarSpinSize,
    containerSize: size.height,
    style: styles === null || styles === void 0 ? void 0 : styles.verticalScrollBar,
    thumbStyle: styles === null || styles === void 0 ? void 0 : styles.verticalScrollBarThumb,
    showScrollBar: showScrollBar
  }), inVirtual && scrollWidth > size.width && /*#__PURE__*/react.createElement(es_ScrollBar, {
    ref: horizontalScrollBarRef,
    prefixCls: prefixCls,
    scrollOffset: offsetLeft,
    scrollRange: scrollWidth,
    rtl: isRTL,
    onScroll: onScrollBar,
    onStartMove: onScrollbarStartMove,
    onStopMove: onScrollbarStopMove,
    spinSize: horizontalScrollBarSpinSize,
    containerSize: size.width,
    horizontal: true,
    style: styles === null || styles === void 0 ? void 0 : styles.horizontalScrollBar,
    thumbStyle: styles === null || styles === void 0 ? void 0 : styles.horizontalScrollBarThumb,
    showScrollBar: showScrollBar
  }));
}
var List = /*#__PURE__*/react.forwardRef(RawList);
List.displayName = 'List';
/* harmony default export */ const es_List = (List);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/index.js

/* harmony default export */ const rc_virtual_list_es = (es_List);
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/context.js

var context_excluded = (/* unused pure expression or super */ null && (["children"]));

var Context = /*#__PURE__*/react.createContext({});
function MotionProvider(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, context_excluded);
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: props
  }, children);
}
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/DomWrapper.js





var DomWrapper_DomWrapper = /*#__PURE__*/function (_React$Component) {
  _inherits(DomWrapper, _React$Component);
  var _super = _createSuper(DomWrapper);
  function DomWrapper() {
    _classCallCheck(this, DomWrapper);
    return _super.apply(this, arguments);
  }
  _createClass(DomWrapper, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return DomWrapper;
}(react.Component);
/* harmony default export */ const es_DomWrapper = (DomWrapper_DomWrapper);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/hooks/useSyncState.js



/**
 * Same as React.useState but will always get latest state.
 * This is useful when React merge multiple state updates into one.
 * e.g. onTransitionEnd trigger multiple event at once will be merged state update in React.
 */
function useSyncState(defaultValue) {
  var _React$useReducer = react.useReducer(function (x) {
      return x + 1;
    }, 0),
    _React$useReducer2 = slicedToArray_slicedToArray(_React$useReducer, 2),
    forceUpdate = _React$useReducer2[1];
  var currentValueRef = react.useRef(defaultValue);
  var getValue = useEvent_useEvent(function () {
    return currentValueRef.current;
  });
  var setValue = useEvent_useEvent(function (updater) {
    currentValueRef.current = typeof updater === 'function' ? updater(currentValueRef.current) : updater;
    forceUpdate();
  });
  return [getValue, setValue];
}
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/interface.js
var STATUS_NONE = 'none';
var STATUS_APPEAR = 'appear';
var STATUS_ENTER = 'enter';
var STATUS_LEAVE = 'leave';
var STEP_NONE = 'none';
var STEP_PREPARE = 'prepare';
var STEP_START = 'start';
var STEP_ACTIVE = 'active';
var STEP_ACTIVATED = 'end';
/**
 * Used for disabled motion case.
 * Prepare stage will still work but start & active will be skipped.
 */
var STEP_PREPARED = 'prepared';
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/util/motion.js


// ================= Transition =================
// Event wrapper. Copy from react source code
function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
  prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
  prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
  prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
  return prefixes;
}
function getVendorPrefixes(domSupport, win) {
  var prefixes = {
    animationend: makePrefixMap('Animation', 'AnimationEnd'),
    transitionend: makePrefixMap('Transition', 'TransitionEnd')
  };
  if (domSupport) {
    if (!('AnimationEvent' in win)) {
      delete prefixes.animationend.animation;
    }
    if (!('TransitionEvent' in win)) {
      delete prefixes.transitionend.transition;
    }
  }
  return prefixes;
}
var vendorPrefixes = getVendorPrefixes(canUseDom(), typeof window !== 'undefined' ? window : {});
var style = {};
if (canUseDom()) {
  var _document$createEleme = document.createElement('div');
  style = _document$createEleme.style;
}
var prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }
  var prefixMap = vendorPrefixes[eventName];
  if (prefixMap) {
    var stylePropList = Object.keys(prefixMap);
    var len = stylePropList.length;
    for (var i = 0; i < len; i += 1) {
      var styleProp = stylePropList[i];
      if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
        prefixedEventNames[eventName] = prefixMap[styleProp];
        return prefixedEventNames[eventName];
      }
    }
  }
  return '';
}
var internalAnimationEndName = getVendorPrefixedEventName('animationend');
var internalTransitionEndName = getVendorPrefixedEventName('transitionend');
var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
var animationEndName = internalAnimationEndName || 'animationend';
var transitionEndName = internalTransitionEndName || 'transitionend';
function getTransitionName(transitionName, transitionType) {
  if (!transitionName) return null;
  if (typeof_typeof(transitionName) === 'object') {
    var type = transitionType.replace(/-\w/g, function (match) {
      return match[1].toUpperCase();
    });
    return transitionName[type];
  }
  return "".concat(transitionName, "-").concat(transitionType);
}
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/hooks/useDomMotionEvents.js



/* harmony default export */ const useDomMotionEvents = (function (onInternalMotionEnd) {
  var cacheElementRef = (0,react.useRef)();

  // Remove events
  function removeMotionEvents(element) {
    if (element) {
      element.removeEventListener(transitionEndName, onInternalMotionEnd);
      element.removeEventListener(animationEndName, onInternalMotionEnd);
    }
  }

  // Patch events
  function patchMotionEvents(element) {
    if (cacheElementRef.current && cacheElementRef.current !== element) {
      removeMotionEvents(cacheElementRef.current);
    }
    if (element && element !== cacheElementRef.current) {
      element.addEventListener(transitionEndName, onInternalMotionEnd);
      element.addEventListener(animationEndName, onInternalMotionEnd);

      // Save as cache in case dom removed trigger by `motionDeadline`
      cacheElementRef.current = element;
    }
  }

  // Clean up when removed
  react.useEffect(function () {
    return function () {
      removeMotionEvents(cacheElementRef.current);
    };
  }, []);
  return [patchMotionEvents, removeMotionEvents];
});
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js



// It's safe to use `useLayoutEffect` but the warning is annoying
var useIsomorphicLayoutEffect = canUseDom() ? react.useLayoutEffect : react.useEffect;
/* harmony default export */ const hooks_useIsomorphicLayoutEffect = (useIsomorphicLayoutEffect);
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/hooks/useNextFrame.js


/* harmony default export */ const useNextFrame = (function () {
  var nextFrameRef = react.useRef(null);
  function cancelNextFrame() {
    es_raf.cancel(nextFrameRef.current);
  }
  function nextFrame(callback) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    cancelNextFrame();
    var nextFrameId = es_raf(function () {
      if (delay <= 1) {
        callback({
          isCanceled: function isCanceled() {
            return nextFrameId !== nextFrameRef.current;
          }
        });
      } else {
        nextFrame(callback, delay - 1);
      }
    });
    nextFrameRef.current = nextFrameId;
  }
  react.useEffect(function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [nextFrame, cancelNextFrame];
});
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/hooks/useStepQueue.js






var FULL_STEP_QUEUE = [STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_ACTIVATED];
var SIMPLE_STEP_QUEUE = [STEP_PREPARE, STEP_PREPARED];

/** Skip current step */
var SkipStep = false;
/** Current step should be update in */
var DoStep = true;
function isActive(step) {
  return step === STEP_ACTIVE || step === STEP_ACTIVATED;
}
/* harmony default export */ const useStepQueue = (function (status, prepareOnly, callback) {
  var _useState = useSafeState(STEP_NONE),
    _useState2 = slicedToArray_slicedToArray(_useState, 2),
    step = _useState2[0],
    setStep = _useState2[1];
  var _useNextFrame = useNextFrame(),
    _useNextFrame2 = slicedToArray_slicedToArray(_useNextFrame, 2),
    nextFrame = _useNextFrame2[0],
    cancelNextFrame = _useNextFrame2[1];
  function startQueue() {
    setStep(STEP_PREPARE, true);
  }
  var STEP_QUEUE = prepareOnly ? SIMPLE_STEP_QUEUE : FULL_STEP_QUEUE;
  hooks_useIsomorphicLayoutEffect(function () {
    if (step !== STEP_NONE && step !== STEP_ACTIVATED) {
      var index = STEP_QUEUE.indexOf(step);
      var nextStep = STEP_QUEUE[index + 1];
      var result = callback(step);
      if (result === SkipStep) {
        // Skip when no needed
        setStep(nextStep, true);
      } else if (nextStep) {
        // Do as frame for step update
        nextFrame(function (info) {
          function doNext() {
            // Skip since current queue is ood
            if (info.isCanceled()) return;
            setStep(nextStep, true);
          }
          if (result === true) {
            doNext();
          } else {
            // Only promise should be async
            Promise.resolve(result).then(doNext);
          }
        });
      }
    }
  }, [status, step]);
  react.useEffect(function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [startQueue, step];
});
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/hooks/useStatus.js












function useStatus(supportMotion, visible, getElement, _ref) {
  var _ref$motionEnter = _ref.motionEnter,
    motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter,
    _ref$motionAppear = _ref.motionAppear,
    motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear,
    _ref$motionLeave = _ref.motionLeave,
    motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave,
    motionDeadline = _ref.motionDeadline,
    motionLeaveImmediately = _ref.motionLeaveImmediately,
    onAppearPrepare = _ref.onAppearPrepare,
    onEnterPrepare = _ref.onEnterPrepare,
    onLeavePrepare = _ref.onLeavePrepare,
    onAppearStart = _ref.onAppearStart,
    onEnterStart = _ref.onEnterStart,
    onLeaveStart = _ref.onLeaveStart,
    onAppearActive = _ref.onAppearActive,
    onEnterActive = _ref.onEnterActive,
    onLeaveActive = _ref.onLeaveActive,
    onAppearEnd = _ref.onAppearEnd,
    onEnterEnd = _ref.onEnterEnd,
    onLeaveEnd = _ref.onLeaveEnd,
    onVisibleChanged = _ref.onVisibleChanged;
  // Used for outer render usage to avoid `visible: false & status: none` to render nothing
  var _useState = useSafeState(),
    _useState2 = slicedToArray_slicedToArray(_useState, 2),
    asyncVisible = _useState2[0],
    setAsyncVisible = _useState2[1];
  var _useSyncState = useSyncState(STATUS_NONE),
    _useSyncState2 = slicedToArray_slicedToArray(_useSyncState, 2),
    getStatus = _useSyncState2[0],
    setStatus = _useSyncState2[1];
  var _useState3 = useSafeState(null),
    _useState4 = slicedToArray_slicedToArray(_useState3, 2),
    style = _useState4[0],
    setStyle = _useState4[1];
  var currentStatus = getStatus();
  var mountedRef = (0,react.useRef)(false);
  var deadlineRef = (0,react.useRef)(null);

  // =========================== Dom Node ===========================
  function getDomElement() {
    return getElement();
  }

  // ========================== Motion End ==========================
  var activeRef = (0,react.useRef)(false);

  /**
   * Clean up status & style
   */
  function updateMotionEndStatus() {
    setStatus(STATUS_NONE);
    setStyle(null, true);
  }
  var onInternalMotionEnd = useEvent_useEvent(function (event) {
    var status = getStatus();
    // Do nothing since not in any transition status.
    // This may happen when `motionDeadline` trigger.
    if (status === STATUS_NONE) {
      return;
    }
    var element = getDomElement();
    if (event && !event.deadline && event.target !== element) {
      // event exists
      // not initiated by deadline
      // transitionEnd not fired by inner elements
      return;
    }
    var currentActive = activeRef.current;
    var canEnd;
    if (status === STATUS_APPEAR && currentActive) {
      canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
    } else if (status === STATUS_ENTER && currentActive) {
      canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
    } else if (status === STATUS_LEAVE && currentActive) {
      canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
    }

    // Only update status when `canEnd` and not destroyed
    if (currentActive && canEnd !== false) {
      updateMotionEndStatus();
    }
  });
  var _useDomMotionEvents = useDomMotionEvents(onInternalMotionEnd),
    _useDomMotionEvents2 = slicedToArray_slicedToArray(_useDomMotionEvents, 1),
    patchMotionEvents = _useDomMotionEvents2[0];

  // ============================= Step =============================
  var getEventHandlers = function getEventHandlers(targetStatus) {
    switch (targetStatus) {
      case STATUS_APPEAR:
        return _defineProperty(_defineProperty(_defineProperty({}, STEP_PREPARE, onAppearPrepare), STEP_START, onAppearStart), STEP_ACTIVE, onAppearActive);
      case STATUS_ENTER:
        return _defineProperty(_defineProperty(_defineProperty({}, STEP_PREPARE, onEnterPrepare), STEP_START, onEnterStart), STEP_ACTIVE, onEnterActive);
      case STATUS_LEAVE:
        return _defineProperty(_defineProperty(_defineProperty({}, STEP_PREPARE, onLeavePrepare), STEP_START, onLeaveStart), STEP_ACTIVE, onLeaveActive);
      default:
        return {};
    }
  };
  var eventHandlers = react.useMemo(function () {
    return getEventHandlers(currentStatus);
  }, [currentStatus]);
  var _useStepQueue = useStepQueue(currentStatus, !supportMotion, function (newStep) {
      // Only prepare step can be skip
      if (newStep === STEP_PREPARE) {
        var onPrepare = eventHandlers[STEP_PREPARE];
        if (!onPrepare) {
          return SkipStep;
        }
        return onPrepare(getDomElement());
      }

      // Rest step is sync update
      if (step in eventHandlers) {
        var _eventHandlers$step;
        setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
      }
      if (step === STEP_ACTIVE && currentStatus !== STATUS_NONE) {
        // Patch events when motion needed
        patchMotionEvents(getDomElement());
        if (motionDeadline > 0) {
          clearTimeout(deadlineRef.current);
          deadlineRef.current = setTimeout(function () {
            onInternalMotionEnd({
              deadline: true
            });
          }, motionDeadline);
        }
      }
      if (step === STEP_PREPARED) {
        updateMotionEndStatus();
      }
      return DoStep;
    }),
    _useStepQueue2 = slicedToArray_slicedToArray(_useStepQueue, 2),
    startStep = _useStepQueue2[0],
    step = _useStepQueue2[1];
  var active = isActive(step);
  activeRef.current = active;

  // ============================ Status ============================
  var visibleRef = (0,react.useRef)(null);

  // Update with new status
  hooks_useIsomorphicLayoutEffect(function () {
    // When use Suspense, the `visible` will repeat trigger,
    // But not real change of the `visible`, we need to skip it.
    // https://github.com/ant-design/ant-design/issues/44379
    if (mountedRef.current && visibleRef.current === visible) {
      return;
    }
    setAsyncVisible(visible);
    var isMounted = mountedRef.current;
    mountedRef.current = true;

    // if (!supportMotion) {
    //   return;
    // }

    var nextStatus;

    // Appear
    if (!isMounted && visible && motionAppear) {
      nextStatus = STATUS_APPEAR;
    }

    // Enter
    if (isMounted && visible && motionEnter) {
      nextStatus = STATUS_ENTER;
    }

    // Leave
    if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
      nextStatus = STATUS_LEAVE;
    }
    var nextEventHandlers = getEventHandlers(nextStatus);

    // Update to next status
    if (nextStatus && (supportMotion || nextEventHandlers[STEP_PREPARE])) {
      setStatus(nextStatus);
      startStep();
    } else {
      // Set back in case no motion but prev status has prepare step
      setStatus(STATUS_NONE);
    }
    visibleRef.current = visible;
  }, [visible]);

  // ============================ Effect ============================
  // Reset when motion changed
  (0,react.useEffect)(function () {
    if (
    // Cancel appear
    currentStatus === STATUS_APPEAR && !motionAppear ||
    // Cancel enter
    currentStatus === STATUS_ENTER && !motionEnter ||
    // Cancel leave
    currentStatus === STATUS_LEAVE && !motionLeave) {
      setStatus(STATUS_NONE);
    }
  }, [motionAppear, motionEnter, motionLeave]);
  (0,react.useEffect)(function () {
    return function () {
      mountedRef.current = false;
      clearTimeout(deadlineRef.current);
    };
  }, []);

  // Trigger `onVisibleChanged`
  var firstMountChangeRef = react.useRef(false);
  (0,react.useEffect)(function () {
    // [visible & motion not end] => [!visible & motion end] still need trigger onVisibleChanged
    if (asyncVisible) {
      firstMountChangeRef.current = true;
    }
    if (asyncVisible !== undefined && currentStatus === STATUS_NONE) {
      // Skip first render is invisible since it's nothing changed
      if (firstMountChangeRef.current || asyncVisible) {
        onVisibleChanged === null || onVisibleChanged === void 0 || onVisibleChanged(asyncVisible);
      }
      firstMountChangeRef.current = true;
    }
  }, [asyncVisible, currentStatus]);

  // ============================ Styles ============================
  var mergedStyle = style;
  if (eventHandlers[STEP_PREPARE] && step === STEP_START) {
    mergedStyle = _objectSpread2({
      transition: 'none'
    }, mergedStyle);
  }
  return [currentStatus, step, mergedStyle, asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible];
}
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/CSSMotion.js




/* eslint-disable react/default-props-match-prop-types, react/no-multi-comp, react/prop-types */











/**
 * `transitionSupport` is used for none transition test case.
 * Default we use browser transition event support check.
 */
function genCSSMotion(config) {
  var transitionSupport = config;
  if (typeof_typeof(config) === 'object') {
    transitionSupport = config.transitionSupport;
  }
  function isSupportTransition(props, contextMotion) {
    return !!(props.motionName && transitionSupport && contextMotion !== false);
  }
  var CSSMotion = /*#__PURE__*/react.forwardRef(function (props, ref) {
    var _props$visible = props.visible,
      visible = _props$visible === void 0 ? true : _props$visible,
      _props$removeOnLeave = props.removeOnLeave,
      removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave,
      forceRender = props.forceRender,
      children = props.children,
      motionName = props.motionName,
      leavedClassName = props.leavedClassName,
      eventProps = props.eventProps;
    var _React$useContext = react.useContext(Context),
      contextMotion = _React$useContext.motion;
    var supportMotion = isSupportTransition(props, contextMotion);

    // Ref to the react node, it may be a HTMLElement
    var nodeRef = (0,react.useRef)();
    // Ref to the dom wrapper in case ref can not pass to HTMLElement
    var wrapperNodeRef = (0,react.useRef)();
    function getDomElement() {
      try {
        // Here we're avoiding call for findDOMNode since it's deprecated
        // in strict mode. We're calling it only when node ref is not
        // an instance of DOM HTMLElement. Otherwise use
        // findDOMNode as a final resort
        return nodeRef.current instanceof HTMLElement ? nodeRef.current : findDOMNode(wrapperNodeRef.current);
      } catch (e) {
        // Only happen when `motionDeadline` trigger but element removed.
        return null;
      }
    }
    var _useStatus = useStatus(supportMotion, visible, getDomElement, props),
      _useStatus2 = slicedToArray_slicedToArray(_useStatus, 4),
      status = _useStatus2[0],
      statusStep = _useStatus2[1],
      statusStyle = _useStatus2[2],
      mergedVisible = _useStatus2[3];

    // Record whether content has rendered
    // Will return null for un-rendered even when `removeOnLeave={false}`
    var renderedRef = react.useRef(mergedVisible);
    if (mergedVisible) {
      renderedRef.current = true;
    }

    // ====================== Refs ======================
    var setNodeRef = react.useCallback(function (node) {
      nodeRef.current = node;
      fillRef(ref, node);
    }, [ref]);

    // ===================== Render =====================
    var motionChildren;
    var mergedProps = _objectSpread2(_objectSpread2({}, eventProps), {}, {
      visible: visible
    });
    if (!children) {
      // No children
      motionChildren = null;
    } else if (status === STATUS_NONE) {
      // Stable children
      if (mergedVisible) {
        motionChildren = children(_objectSpread2({}, mergedProps), setNodeRef);
      } else if (!removeOnLeave && renderedRef.current && leavedClassName) {
        motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
          className: leavedClassName
        }), setNodeRef);
      } else if (forceRender || !removeOnLeave && !leavedClassName) {
        motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
          style: {
            display: 'none'
          }
        }), setNodeRef);
      } else {
        motionChildren = null;
      }
    } else {
      // In motion
      var statusSuffix;
      if (statusStep === STEP_PREPARE) {
        statusSuffix = 'prepare';
      } else if (isActive(statusStep)) {
        statusSuffix = 'active';
      } else if (statusStep === STEP_START) {
        statusSuffix = 'start';
      }
      var motionCls = getTransitionName(motionName, "".concat(status, "-").concat(statusSuffix));
      motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
        className: classnames_default()(getTransitionName(motionName, status), _defineProperty(_defineProperty({}, motionCls, motionCls && statusSuffix), motionName, typeof motionName === 'string')),
        style: statusStyle
      }), setNodeRef);
    }

    // Auto inject ref if child node not have `ref` props
    if ( /*#__PURE__*/react.isValidElement(motionChildren) && supportRef(motionChildren)) {
      var originNodeRef = getNodeRef(motionChildren);
      if (!originNodeRef) {
        motionChildren = /*#__PURE__*/react.cloneElement(motionChildren, {
          ref: setNodeRef
        });
      }
    }
    return /*#__PURE__*/react.createElement(es_DomWrapper, {
      ref: wrapperNodeRef
    }, motionChildren);
  });
  CSSMotion.displayName = 'CSSMotion';
  return CSSMotion;
}
/* harmony default export */ const es_CSSMotion = (genCSSMotion(supportTransition));
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/util/diff.js


var STATUS_ADD = 'add';
var STATUS_KEEP = 'keep';
var STATUS_REMOVE = 'remove';
var STATUS_REMOVED = 'removed';
function wrapKeyToObject(key) {
  var keyObj;
  if (key && typeof_typeof(key) === 'object' && 'key' in key) {
    keyObj = key;
  } else {
    keyObj = {
      key: key
    };
  }
  return _objectSpread2(_objectSpread2({}, keyObj), {}, {
    key: String(keyObj.key)
  });
}
function parseKeys() {
  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return keys.map(wrapKeyToObject);
}
function diffKeys() {
  var prevKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var currentKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var list = [];
  var currentIndex = 0;
  var currentLen = currentKeys.length;
  var prevKeyObjects = parseKeys(prevKeys);
  var currentKeyObjects = parseKeys(currentKeys);

  // Check prev keys to insert or keep
  prevKeyObjects.forEach(function (keyObj) {
    var hit = false;
    for (var i = currentIndex; i < currentLen; i += 1) {
      var currentKeyObj = currentKeyObjects[i];
      if (currentKeyObj.key === keyObj.key) {
        // New added keys should add before current key
        if (currentIndex < i) {
          list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function (obj) {
            return _objectSpread2(_objectSpread2({}, obj), {}, {
              status: STATUS_ADD
            });
          }));
          currentIndex = i;
        }
        list.push(_objectSpread2(_objectSpread2({}, currentKeyObj), {}, {
          status: STATUS_KEEP
        }));
        currentIndex += 1;
        hit = true;
        break;
      }
    }

    // If not hit, it means key is removed
    if (!hit) {
      list.push(_objectSpread2(_objectSpread2({}, keyObj), {}, {
        status: STATUS_REMOVE
      }));
    }
  });

  // Add rest to the list
  if (currentIndex < currentLen) {
    list = list.concat(currentKeyObjects.slice(currentIndex).map(function (obj) {
      return _objectSpread2(_objectSpread2({}, obj), {}, {
        status: STATUS_ADD
      });
    }));
  }

  /**
   * Merge same key when it remove and add again:
   *    [1 - add, 2 - keep, 1 - remove] -> [1 - keep, 2 - keep]
   */
  var keys = {};
  list.forEach(function (_ref) {
    var key = _ref.key;
    keys[key] = (keys[key] || 0) + 1;
  });
  var duplicatedKeys = Object.keys(keys).filter(function (key) {
    return keys[key] > 1;
  });
  duplicatedKeys.forEach(function (matchKey) {
    // Remove `STATUS_REMOVE` node.
    list = list.filter(function (_ref2) {
      var key = _ref2.key,
        status = _ref2.status;
      return key !== matchKey || status !== STATUS_REMOVE;
    });

    // Update `STATUS_ADD` to `STATUS_KEEP`
    list.forEach(function (node) {
      if (node.key === matchKey) {
        // eslint-disable-next-line no-param-reassign
        node.status = STATUS_KEEP;
      }
    });
  });
  return list;
}
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/CSSMotionList.js









var CSSMotionList_excluded = ["component", "children", "onVisibleChanged", "onAllRemoved"],
  _excluded2 = ["status"];
/* eslint react/prop-types: 0 */




var MOTION_PROP_NAMES = ['eventProps', 'visible', 'children', 'motionName', 'motionAppear', 'motionEnter', 'motionLeave', 'motionLeaveImmediately', 'motionDeadline', 'removeOnLeave', 'leavedClassName', 'onAppearPrepare', 'onAppearStart', 'onAppearActive', 'onAppearEnd', 'onEnterStart', 'onEnterActive', 'onEnterEnd', 'onLeaveStart', 'onLeaveActive', 'onLeaveEnd'];
/**
 * Generate a CSSMotionList component with config
 * @param transitionSupport No need since CSSMotionList no longer depends on transition support
 * @param CSSMotion CSSMotion component
 */
function genCSSMotionList(transitionSupport) {
  var CSSMotion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : es_CSSMotion;
  var CSSMotionList = /*#__PURE__*/function (_React$Component) {
    _inherits(CSSMotionList, _React$Component);
    var _super = _createSuper(CSSMotionList);
    function CSSMotionList() {
      var _this;
      _classCallCheck(this, CSSMotionList);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "state", {
        keyEntities: []
      });
      // ZombieJ: Return the count of rest keys. It's safe to refactor if need more info.
      _defineProperty(_assertThisInitialized(_this), "removeKey", function (removeKey) {
        _this.setState(function (prevState) {
          var nextKeyEntities = prevState.keyEntities.map(function (entity) {
            if (entity.key !== removeKey) return entity;
            return _objectSpread2(_objectSpread2({}, entity), {}, {
              status: STATUS_REMOVED
            });
          });
          return {
            keyEntities: nextKeyEntities
          };
        }, function () {
          var keyEntities = _this.state.keyEntities;
          var restKeysCount = keyEntities.filter(function (_ref) {
            var status = _ref.status;
            return status !== STATUS_REMOVED;
          }).length;
          if (restKeysCount === 0 && _this.props.onAllRemoved) {
            _this.props.onAllRemoved();
          }
        });
      });
      return _this;
    }
    _createClass(CSSMotionList, [{
      key: "render",
      value: function render() {
        var _this2 = this;
        var keyEntities = this.state.keyEntities;
        var _this$props = this.props,
          component = _this$props.component,
          children = _this$props.children,
          _onVisibleChanged = _this$props.onVisibleChanged,
          onAllRemoved = _this$props.onAllRemoved,
          restProps = objectWithoutProperties_objectWithoutProperties(_this$props, CSSMotionList_excluded);
        var Component = component || react.Fragment;
        var motionProps = {};
        MOTION_PROP_NAMES.forEach(function (prop) {
          motionProps[prop] = restProps[prop];
          delete restProps[prop];
        });
        delete restProps.keys;
        return /*#__PURE__*/react.createElement(Component, restProps, keyEntities.map(function (_ref2, index) {
          var status = _ref2.status,
            eventProps = objectWithoutProperties_objectWithoutProperties(_ref2, _excluded2);
          var visible = status === STATUS_ADD || status === STATUS_KEEP;
          return /*#__PURE__*/react.createElement(CSSMotion, (0,esm_extends/* default */.A)({}, motionProps, {
            key: eventProps.key,
            visible: visible,
            eventProps: eventProps,
            onVisibleChanged: function onVisibleChanged(changedVisible) {
              _onVisibleChanged === null || _onVisibleChanged === void 0 || _onVisibleChanged(changedVisible, {
                key: eventProps.key
              });
              if (!changedVisible) {
                _this2.removeKey(eventProps.key);
              }
            }
          }), function (props, ref) {
            return children(_objectSpread2(_objectSpread2({}, props), {}, {
              index: index
            }), ref);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref3, _ref4) {
        var keys = _ref3.keys;
        var keyEntities = _ref4.keyEntities;
        var parsedKeyObjects = parseKeys(keys);
        var mixedKeyEntities = diffKeys(keyEntities, parsedKeyObjects);
        return {
          keyEntities: mixedKeyEntities.filter(function (entity) {
            var prevEntity = keyEntities.find(function (_ref5) {
              var key = _ref5.key;
              return entity.key === key;
            });

            // Remove if already mark as removed
            if (prevEntity && prevEntity.status === STATUS_REMOVED && entity.status === STATUS_REMOVE) {
              return false;
            }
            return true;
          })
        };
      }
    }]);
    return CSSMotionList;
  }(react.Component);
  _defineProperty(CSSMotionList, "defaultProps", {
    component: 'div'
  });
  return CSSMotionList;
}
/* harmony default export */ const CSSMotionList = (genCSSMotionList(supportTransition));
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/index.js




/* harmony default export */ const rc_motion_es = (es_CSSMotion);
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/MotionTreeNode.js




var MotionTreeNode_excluded = ["className", "style", "motion", "motionNodes", "motionType", "onMotionStart", "onMotionEnd", "active", "treeNodeRequiredProps"];







var MotionTreeNode = function MotionTreeNode(_ref, ref) {
  var className = _ref.className,
    style = _ref.style,
    motion = _ref.motion,
    motionNodes = _ref.motionNodes,
    motionType = _ref.motionType,
    onOriginMotionStart = _ref.onMotionStart,
    onOriginMotionEnd = _ref.onMotionEnd,
    active = _ref.active,
    treeNodeRequiredProps = _ref.treeNodeRequiredProps,
    props = objectWithoutProperties_objectWithoutProperties(_ref, MotionTreeNode_excluded);
  var _React$useState = react.useState(true),
    _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2),
    visible = _React$useState2[0],
    setVisible = _React$useState2[1];
  var _React$useContext = react.useContext(TreeContext),
    prefixCls = _React$useContext.prefixCls;
  var motionedRef = react.useRef(false);
  var onMotionEnd = function onMotionEnd() {
    if (!motionedRef.current) {
      onOriginMotionEnd();
    }
    motionedRef.current = true;
  };
  (0,react.useEffect)(function () {
    if (motionNodes && motionType === 'hide' && visible) {
      setVisible(false);
    }
  }, [motionNodes]);
  var reruningEffectFlag = null;
  (0,react.useEffect)(function () {
    // Trigger motion only when patched
    if (motionNodes) {
      if (reruningEffectFlag === null) {
        onOriginMotionStart();
      } else {
        clearTimeout(reruningEffectFlag);
      }
    }
    return function () {
      if (motionNodes) {
        reruningEffectFlag = setTimeout(onMotionEnd, 0);
      }
    };
  }, []);
  if (motionNodes) {
    return /*#__PURE__*/react.createElement(rc_motion_es, (0,esm_extends/* default */.A)({
      ref: ref,
      visible: visible
    }, motion, {
      motionAppear: motionType === 'show',
      onAppearEnd: onMotionEnd,
      onLeaveEnd: onMotionEnd
    }), function (_ref2, motionRef) {
      var motionClassName = _ref2.className,
        motionStyle = _ref2.style;
      return /*#__PURE__*/react.createElement("div", {
        ref: motionRef,
        className: classnames_default()("".concat(prefixCls, "-treenode-motion"), motionClassName),
        style: motionStyle
      }, motionNodes.map(function (treeNode) {
        var restProps = (0,esm_extends/* default */.A)({}, (_objectDestructuringEmpty(treeNode.data), treeNode.data)),
          title = treeNode.title,
          key = treeNode.key,
          isStart = treeNode.isStart,
          isEnd = treeNode.isEnd;
        delete restProps.children;
        var treeNodeProps = getTreeNodeProps(key, treeNodeRequiredProps);
        return /*#__PURE__*/react.createElement(es_TreeNode, (0,esm_extends/* default */.A)({}, restProps, treeNodeProps, {
          title: title,
          active: active,
          data: treeNode.data,
          key: key,
          isStart: isStart,
          isEnd: isEnd
        }));
      }));
    });
  }
  return /*#__PURE__*/react.createElement(es_TreeNode, (0,esm_extends/* default */.A)({
    domRef: ref,
    className: className,
    style: style
  }, props, {
    active: active
  }));
};
MotionTreeNode.displayName = 'MotionTreeNode';
var RefMotionTreeNode = /*#__PURE__*/react.forwardRef(MotionTreeNode);
/* harmony default export */ const es_MotionTreeNode = (RefMotionTreeNode);
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/utils/diffUtil.js
function findExpandedKeys() {
  var prev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var prevLen = prev.length;
  var nextLen = next.length;
  if (Math.abs(prevLen - nextLen) !== 1) {
    return {
      add: false,
      key: null
    };
  }
  function find(shorter, longer) {
    var cache = new Map();
    shorter.forEach(function (key) {
      cache.set(key, true);
    });
    var keys = longer.filter(function (key) {
      return !cache.has(key);
    });
    return keys.length === 1 ? keys[0] : null;
  }
  if (prevLen < nextLen) {
    return {
      add: true,
      key: find(prev, next)
    };
  }
  return {
    add: false,
    key: find(next, prev)
  };
}
function getExpandRange(shorter, longer, key) {
  var shorterStartIndex = shorter.findIndex(function (data) {
    return data.key === key;
  });
  var shorterEndNode = shorter[shorterStartIndex + 1];
  var longerStartIndex = longer.findIndex(function (data) {
    return data.key === key;
  });
  if (shorterEndNode) {
    var longerEndIndex = longer.findIndex(function (data) {
      return data.key === shorterEndNode.key;
    });
    return longer.slice(longerStartIndex + 1, longerEndIndex);
  }
  return longer.slice(longerStartIndex + 1);
}
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/NodeList.js




var NodeList_excluded = ["prefixCls", "data", "selectable", "checkable", "expandedKeys", "selectedKeys", "checkedKeys", "loadedKeys", "loadingKeys", "halfCheckedKeys", "keyEntities", "disabled", "dragging", "dragOverNodeKey", "dropPosition", "motion", "height", "itemHeight", "virtual", "focusable", "activeItem", "focused", "tabIndex", "onKeyDown", "onFocus", "onBlur", "onActiveChange", "onListChangeStart", "onListChangeEnd"];
/**
 * Handle virtual list of the TreeNodes.
 */






var HIDDEN_STYLE = {
  width: 0,
  height: 0,
  display: 'flex',
  overflow: 'hidden',
  opacity: 0,
  border: 0,
  padding: 0,
  margin: 0
};
var noop = function noop() {};
var MOTION_KEY = "RC_TREE_MOTION_".concat(Math.random());
var MotionNode = {
  key: MOTION_KEY
};
var MotionEntity = {
  key: MOTION_KEY,
  level: 0,
  index: 0,
  pos: '0',
  node: MotionNode,
  nodes: [MotionNode]
};
var MotionFlattenData = {
  parent: null,
  children: [],
  pos: MotionEntity.pos,
  data: MotionNode,
  title: null,
  key: MOTION_KEY,
  /** Hold empty list here since we do not use it */
  isStart: [],
  isEnd: []
};
/**
 * We only need get visible content items to play the animation.
 */
function getMinimumRangeTransitionRange(list, virtual, height, itemHeight) {
  if (virtual === false || !height) {
    return list;
  }
  return list.slice(0, Math.ceil(height / itemHeight) + 1);
}
function itemKey(item) {
  var key = item.key,
    pos = item.pos;
  return getKey(key, pos);
}
function getAccessibilityPath(item) {
  var path = String(item.data.key);
  var current = item;
  while (current.parent) {
    current = current.parent;
    path = "".concat(current.data.key, " > ").concat(path);
  }
  return path;
}
var NodeList = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    data = props.data,
    selectable = props.selectable,
    checkable = props.checkable,
    expandedKeys = props.expandedKeys,
    selectedKeys = props.selectedKeys,
    checkedKeys = props.checkedKeys,
    loadedKeys = props.loadedKeys,
    loadingKeys = props.loadingKeys,
    halfCheckedKeys = props.halfCheckedKeys,
    keyEntities = props.keyEntities,
    disabled = props.disabled,
    dragging = props.dragging,
    dragOverNodeKey = props.dragOverNodeKey,
    dropPosition = props.dropPosition,
    motion = props.motion,
    height = props.height,
    itemHeight = props.itemHeight,
    virtual = props.virtual,
    focusable = props.focusable,
    activeItem = props.activeItem,
    focused = props.focused,
    tabIndex = props.tabIndex,
    onKeyDown = props.onKeyDown,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    onActiveChange = props.onActiveChange,
    onListChangeStart = props.onListChangeStart,
    onListChangeEnd = props.onListChangeEnd,
    domProps = objectWithoutProperties_objectWithoutProperties(props, NodeList_excluded);
  // =============================== Ref ================================
  var listRef = react.useRef(null);
  var indentMeasurerRef = react.useRef(null);
  react.useImperativeHandle(ref, function () {
    return {
      scrollTo: function scrollTo(scroll) {
        listRef.current.scrollTo(scroll);
      },
      getIndentWidth: function getIndentWidth() {
        return indentMeasurerRef.current.offsetWidth;
      }
    };
  });
  // ============================== Motion ==============================
  var _React$useState = react.useState(expandedKeys),
    _React$useState2 = slicedToArray_slicedToArray(_React$useState, 2),
    prevExpandedKeys = _React$useState2[0],
    setPrevExpandedKeys = _React$useState2[1];
  var _React$useState3 = react.useState(data),
    _React$useState4 = slicedToArray_slicedToArray(_React$useState3, 2),
    prevData = _React$useState4[0],
    setPrevData = _React$useState4[1];
  var _React$useState5 = react.useState(data),
    _React$useState6 = slicedToArray_slicedToArray(_React$useState5, 2),
    transitionData = _React$useState6[0],
    setTransitionData = _React$useState6[1];
  var _React$useState7 = react.useState([]),
    _React$useState8 = slicedToArray_slicedToArray(_React$useState7, 2),
    transitionRange = _React$useState8[0],
    setTransitionRange = _React$useState8[1];
  var _React$useState9 = react.useState(null),
    _React$useState10 = slicedToArray_slicedToArray(_React$useState9, 2),
    motionType = _React$useState10[0],
    setMotionType = _React$useState10[1];
  // When motion end but data change, this will makes data back to previous one
  var dataRef = react.useRef(data);
  dataRef.current = data;
  function onMotionEnd() {
    var latestData = dataRef.current;
    setPrevData(latestData);
    setTransitionData(latestData);
    setTransitionRange([]);
    setMotionType(null);
    onListChangeEnd();
  }
  // Do animation if expanded keys changed
  // layoutEffect here to avoid blink of node removing
  hooks_useLayoutEffect(function () {
    setPrevExpandedKeys(expandedKeys);
    var diffExpanded = findExpandedKeys(prevExpandedKeys, expandedKeys);
    if (diffExpanded.key !== null) {
      if (diffExpanded.add) {
        var keyIndex = prevData.findIndex(function (_ref) {
          var key = _ref.key;
          return key === diffExpanded.key;
        });
        var rangeNodes = getMinimumRangeTransitionRange(getExpandRange(prevData, data, diffExpanded.key), virtual, height, itemHeight);
        var newTransitionData = prevData.slice();
        newTransitionData.splice(keyIndex + 1, 0, MotionFlattenData);
        setTransitionData(newTransitionData);
        setTransitionRange(rangeNodes);
        setMotionType('show');
      } else {
        var _keyIndex = data.findIndex(function (_ref2) {
          var key = _ref2.key;
          return key === diffExpanded.key;
        });
        var _rangeNodes = getMinimumRangeTransitionRange(getExpandRange(data, prevData, diffExpanded.key), virtual, height, itemHeight);
        var _newTransitionData = data.slice();
        _newTransitionData.splice(_keyIndex + 1, 0, MotionFlattenData);
        setTransitionData(_newTransitionData);
        setTransitionRange(_rangeNodes);
        setMotionType('hide');
      }
    } else if (prevData !== data) {
      // If whole data changed, we just refresh the list
      setPrevData(data);
      setTransitionData(data);
    }
  }, [expandedKeys, data]);
  // We should clean up motion if is changed by dragging
  react.useEffect(function () {
    if (!dragging) {
      onMotionEnd();
    }
  }, [dragging]);
  var mergedData = motion ? transitionData : data;
  var treeNodeRequiredProps = {
    expandedKeys: expandedKeys,
    selectedKeys: selectedKeys,
    loadedKeys: loadedKeys,
    loadingKeys: loadingKeys,
    checkedKeys: checkedKeys,
    halfCheckedKeys: halfCheckedKeys,
    dragOverNodeKey: dragOverNodeKey,
    dropPosition: dropPosition,
    keyEntities: keyEntities
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, focused && activeItem && /*#__PURE__*/react.createElement("span", {
    style: HIDDEN_STYLE,
    "aria-live": "assertive"
  }, getAccessibilityPath(activeItem)), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("input", {
    style: HIDDEN_STYLE,
    disabled: focusable === false || disabled,
    tabIndex: focusable !== false ? tabIndex : null,
    onKeyDown: onKeyDown,
    onFocus: onFocus,
    onBlur: onBlur,
    value: "",
    onChange: noop,
    "aria-label": "for screen reader"
  })), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-treenode"),
    "aria-hidden": true,
    style: {
      position: 'absolute',
      pointerEvents: 'none',
      visibility: 'hidden',
      height: 0,
      overflow: 'hidden',
      border: 0,
      padding: 0
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-indent")
  }, /*#__PURE__*/react.createElement("div", {
    ref: indentMeasurerRef,
    className: "".concat(prefixCls, "-indent-unit")
  }))), /*#__PURE__*/react.createElement(rc_virtual_list_es, (0,esm_extends/* default */.A)({}, domProps, {
    data: mergedData,
    itemKey: itemKey,
    height: height,
    fullHeight: false,
    virtual: virtual,
    itemHeight: itemHeight,
    prefixCls: "".concat(prefixCls, "-list"),
    ref: listRef,
    onVisibleChange: function onVisibleChange(originList, fullList) {
      var originSet = new Set(originList);
      var restList = fullList.filter(function (item) {
        return !originSet.has(item);
      });
      // Motion node is not render. Skip motion
      if (restList.some(function (item) {
        return itemKey(item) === MOTION_KEY;
      })) {
        onMotionEnd();
      }
    }
  }), function (treeNode) {
    var pos = treeNode.pos,
      restProps = (0,esm_extends/* default */.A)({}, (_objectDestructuringEmpty(treeNode.data), treeNode.data)),
      title = treeNode.title,
      key = treeNode.key,
      isStart = treeNode.isStart,
      isEnd = treeNode.isEnd;
    var mergedKey = getKey(key, pos);
    delete restProps.key;
    delete restProps.children;
    var treeNodeProps = getTreeNodeProps(mergedKey, treeNodeRequiredProps);
    return /*#__PURE__*/react.createElement(es_MotionTreeNode, (0,esm_extends/* default */.A)({}, restProps, treeNodeProps, {
      title: title,
      active: !!activeItem && key === activeItem.key,
      pos: pos,
      data: treeNode.data,
      isStart: isStart,
      isEnd: isEnd,
      motion: motion,
      motionNodes: key === MOTION_KEY ? transitionRange : null,
      motionType: motionType,
      onMotionStart: onListChangeStart,
      onMotionEnd: onMotionEnd,
      treeNodeRequiredProps: treeNodeRequiredProps,
      onMouseMove: function onMouseMove() {
        onActiveChange(null);
      }
    }));
  }));
});
NodeList.displayName = 'NodeList';
/* harmony default export */ const es_NodeList = (NodeList);
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/utils/conductUtil.js

function removeFromCheckedKeys(halfCheckedKeys, checkedKeys) {
  var filteredKeys = new Set();
  halfCheckedKeys.forEach(function (key) {
    if (!checkedKeys.has(key)) {
      filteredKeys.add(key);
    }
  });
  return filteredKeys;
}
function isCheckDisabled(node) {
  var _ref = node || {},
    disabled = _ref.disabled,
    disableCheckbox = _ref.disableCheckbox,
    checkable = _ref.checkable;
  return !!(disabled || disableCheckbox) || checkable === false;
}
// Fill miss keys
function fillConductCheck(keys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
  var checkedKeys = new Set(keys);
  var halfCheckedKeys = new Set();
  // Add checked keys top to bottom
  for (var level = 0; level <= maxLevel; level += 1) {
    var entities = levelEntities.get(level) || new Set();
    entities.forEach(function (entity) {
      var key = entity.key,
        node = entity.node,
        _entity$children = entity.children,
        children = _entity$children === void 0 ? [] : _entity$children;
      if (checkedKeys.has(key) && !syntheticGetCheckDisabled(node)) {
        children.filter(function (childEntity) {
          return !syntheticGetCheckDisabled(childEntity.node);
        }).forEach(function (childEntity) {
          checkedKeys.add(childEntity.key);
        });
      }
    });
  }
  // Add checked keys from bottom to top
  var visitedKeys = new Set();
  for (var _level = maxLevel; _level >= 0; _level -= 1) {
    var _entities = levelEntities.get(_level) || new Set();
    _entities.forEach(function (entity) {
      var parent = entity.parent,
        node = entity.node;
      // Skip if no need to check
      if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) {
        return;
      }
      // Skip if parent is disabled
      if (syntheticGetCheckDisabled(entity.parent.node)) {
        visitedKeys.add(parent.key);
        return;
      }
      var allChecked = true;
      var partialChecked = false;
      (parent.children || []).filter(function (childEntity) {
        return !syntheticGetCheckDisabled(childEntity.node);
      }).forEach(function (_ref2) {
        var key = _ref2.key;
        var checked = checkedKeys.has(key);
        if (allChecked && !checked) {
          allChecked = false;
        }
        if (!partialChecked && (checked || halfCheckedKeys.has(key))) {
          partialChecked = true;
        }
      });
      if (allChecked) {
        checkedKeys.add(parent.key);
      }
      if (partialChecked) {
        halfCheckedKeys.add(parent.key);
      }
      visitedKeys.add(parent.key);
    });
  }
  return {
    checkedKeys: Array.from(checkedKeys),
    halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
  };
}
// Remove useless key
function cleanConductCheck(keys, halfKeys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
  var checkedKeys = new Set(keys);
  var halfCheckedKeys = new Set(halfKeys);
  // Remove checked keys from top to bottom
  for (var level = 0; level <= maxLevel; level += 1) {
    var entities = levelEntities.get(level) || new Set();
    entities.forEach(function (entity) {
      var key = entity.key,
        node = entity.node,
        _entity$children2 = entity.children,
        children = _entity$children2 === void 0 ? [] : _entity$children2;
      if (!checkedKeys.has(key) && !halfCheckedKeys.has(key) && !syntheticGetCheckDisabled(node)) {
        children.filter(function (childEntity) {
          return !syntheticGetCheckDisabled(childEntity.node);
        }).forEach(function (childEntity) {
          checkedKeys.delete(childEntity.key);
        });
      }
    });
  }
  // Remove checked keys form bottom to top
  halfCheckedKeys = new Set();
  var visitedKeys = new Set();
  for (var _level2 = maxLevel; _level2 >= 0; _level2 -= 1) {
    var _entities2 = levelEntities.get(_level2) || new Set();
    _entities2.forEach(function (entity) {
      var parent = entity.parent,
        node = entity.node;
      // Skip if no need to check
      if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) {
        return;
      }
      // Skip if parent is disabled
      if (syntheticGetCheckDisabled(entity.parent.node)) {
        visitedKeys.add(parent.key);
        return;
      }
      var allChecked = true;
      var partialChecked = false;
      (parent.children || []).filter(function (childEntity) {
        return !syntheticGetCheckDisabled(childEntity.node);
      }).forEach(function (_ref3) {
        var key = _ref3.key;
        var checked = checkedKeys.has(key);
        if (allChecked && !checked) {
          allChecked = false;
        }
        if (!partialChecked && (checked || halfCheckedKeys.has(key))) {
          partialChecked = true;
        }
      });
      if (!allChecked) {
        checkedKeys.delete(parent.key);
      }
      if (partialChecked) {
        halfCheckedKeys.add(parent.key);
      }
      visitedKeys.add(parent.key);
    });
  }
  return {
    checkedKeys: Array.from(checkedKeys),
    halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
  };
}
/**
 * Conduct with keys.
 * @param keyList current key list
 * @param keyEntities key - dataEntity map
 * @param mode `fill` to fill missing key, `clean` to remove useless key
 */
function conductCheck(keyList, checked, keyEntities, getCheckDisabled) {
  var warningMissKeys = [];
  var syntheticGetCheckDisabled;
  if (getCheckDisabled) {
    syntheticGetCheckDisabled = getCheckDisabled;
  } else {
    syntheticGetCheckDisabled = isCheckDisabled;
  }
  // We only handle exist keys
  var keys = new Set(keyList.filter(function (key) {
    var hasEntity = !!keyEntities[key];
    if (!hasEntity) {
      warningMissKeys.push(key);
    }
    return hasEntity;
  }));
  var levelEntities = new Map();
  var maxLevel = 0;
  // Convert entities by level for calculation
  Object.keys(keyEntities).forEach(function (key) {
    var entity = keyEntities[key];
    var level = entity.level;
    var levelSet = levelEntities.get(level);
    if (!levelSet) {
      levelSet = new Set();
      levelEntities.set(level, levelSet);
    }
    levelSet.add(entity);
    maxLevel = Math.max(maxLevel, level);
  });
  es_warning(!warningMissKeys.length, "Tree missing follow keys: ".concat(warningMissKeys.slice(0, 100).map(function (key) {
    return "'".concat(key, "'");
  }).join(', ')));
  var result;
  if (checked === true) {
    result = fillConductCheck(keys, levelEntities, maxLevel, syntheticGetCheckDisabled);
  } else {
    result = cleanConductCheck(keys, checked.halfCheckedKeys, levelEntities, maxLevel, syntheticGetCheckDisabled);
  }
  return result;
}
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/DropIndicator.js

function DropIndicator(_ref) {
  var dropPosition = _ref.dropPosition,
    dropLevelOffset = _ref.dropLevelOffset,
    indent = _ref.indent;
  var style = {
    pointerEvents: 'none',
    position: 'absolute',
    right: 0,
    backgroundColor: 'red',
    height: 2
  };
  switch (dropPosition) {
    case -1:
      style.top = 0;
      style.left = -dropLevelOffset * indent;
      break;
    case 1:
      style.bottom = 0;
      style.left = -dropLevelOffset * indent;
      break;
    case 0:
      style.bottom = 0;
      style.left = indent;
      break;
  }
  return /*#__PURE__*/react.createElement("div", {
    style: style
  });
}
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/Tree.js










// TODO: https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/examples/treeview/treeview-2/treeview-2a.html
// Fully accessibility support












var MAX_RETRY_TIMES = 10;
var Tree = /*#__PURE__*/function (_React$Component) {
  _inherits(Tree, _React$Component);
  var _super = _createSuper(Tree);
  function Tree() {
    var _this;
    _classCallCheck(this, Tree);
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(_args));
    _this.destroyed = false;
    _this.delayedDragEnterLogic = void 0;
    _this.loadingRetryTimes = {};
    _this.state = {
      keyEntities: {},
      indent: null,
      selectedKeys: [],
      checkedKeys: [],
      halfCheckedKeys: [],
      loadedKeys: [],
      loadingKeys: [],
      expandedKeys: [],
      draggingNodeKey: null,
      dragChildrenKeys: [],
      // dropTargetKey is the key of abstract-drop-node
      // the abstract-drop-node is the real drop node when drag and drop
      // not the DOM drag over node
      dropTargetKey: null,
      dropPosition: null,
      dropContainerKey: null,
      dropLevelOffset: null,
      dropTargetPos: null,
      dropAllowed: true,
      // the abstract-drag-over-node
      // if mouse is on the bottom of top dom node or no the top of the bottom dom node
      // abstract-drag-over-node is the top node
      dragOverNodeKey: null,
      treeData: [],
      flattenNodes: [],
      focused: false,
      activeKey: null,
      listChanging: false,
      prevProps: null,
      fieldNames: fillFieldNames()
    };
    _this.dragStartMousePosition = null;
    _this.dragNode = void 0;
    _this.currentMouseOverDroppableNodeKey = null;
    _this.listRef = /*#__PURE__*/react.createRef();
    _this.onNodeDragStart = function (event, node) {
      var _this$state = _this.state,
        expandedKeys = _this$state.expandedKeys,
        keyEntities = _this$state.keyEntities;
      var onDragStart = _this.props.onDragStart;
      var eventKey = node.props.eventKey;
      _this.dragNode = node;
      _this.dragStartMousePosition = {
        x: event.clientX,
        y: event.clientY
      };
      var newExpandedKeys = arrDel(expandedKeys, eventKey);
      _this.setState({
        draggingNodeKey: eventKey,
        dragChildrenKeys: getDragChildrenKeys(eventKey, keyEntities),
        indent: _this.listRef.current.getIndentWidth()
      });
      _this.setExpandedKeys(newExpandedKeys);
      window.addEventListener('dragend', _this.onWindowDragEnd);
      onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart({
        event: event,
        node: convertNodePropsToEventData(node.props)
      });
    };
    /**
     * [Legacy] Select handler is smaller than node,
     * so that this will trigger when drag enter node or select handler.
     * This is a little tricky if customize css without padding.
     * Better for use mouse move event to refresh drag state.
     * But let's just keep it to avoid event trigger logic change.
     */
    _this.onNodeDragEnter = function (event, node) {
      var _this$state2 = _this.state,
        expandedKeys = _this$state2.expandedKeys,
        keyEntities = _this$state2.keyEntities,
        dragChildrenKeys = _this$state2.dragChildrenKeys,
        flattenNodes = _this$state2.flattenNodes,
        indent = _this$state2.indent;
      var _this$props = _this.props,
        onDragEnter = _this$props.onDragEnter,
        onExpand = _this$props.onExpand,
        allowDrop = _this$props.allowDrop,
        direction = _this$props.direction;
      var _node$props = node.props,
        pos = _node$props.pos,
        eventKey = _node$props.eventKey;
      var _assertThisInitialize = _assertThisInitialized(_this),
        dragNode = _assertThisInitialize.dragNode;
      // record the key of node which is latest entered, used in dragleave event.
      if (_this.currentMouseOverDroppableNodeKey !== eventKey) {
        _this.currentMouseOverDroppableNodeKey = eventKey;
      }
      if (!dragNode) {
        _this.resetDragState();
        return;
      }
      var _calcDropPosition = calcDropPosition(event, dragNode, node, indent, _this.dragStartMousePosition, allowDrop, flattenNodes, keyEntities, expandedKeys, direction),
        dropPosition = _calcDropPosition.dropPosition,
        dropLevelOffset = _calcDropPosition.dropLevelOffset,
        dropTargetKey = _calcDropPosition.dropTargetKey,
        dropContainerKey = _calcDropPosition.dropContainerKey,
        dropTargetPos = _calcDropPosition.dropTargetPos,
        dropAllowed = _calcDropPosition.dropAllowed,
        dragOverNodeKey = _calcDropPosition.dragOverNodeKey;
      if (
      // don't allow drop inside its children
      dragChildrenKeys.indexOf(dropTargetKey) !== -1 ||
      // don't allow drop when drop is not allowed caculated by calcDropPosition
      !dropAllowed) {
        _this.resetDragState();
        return;
      }
      // Side effect for delay drag
      if (!_this.delayedDragEnterLogic) {
        _this.delayedDragEnterLogic = {};
      }
      Object.keys(_this.delayedDragEnterLogic).forEach(function (key) {
        clearTimeout(_this.delayedDragEnterLogic[key]);
      });
      if (dragNode.props.eventKey !== node.props.eventKey) {
        // hoist expand logic here
        // since if logic is on the bottom
        // it will be blocked by abstract dragover node check
        //   => if you dragenter from top, you mouse will still be consider as in the top node
        event.persist();
        _this.delayedDragEnterLogic[pos] = window.setTimeout(function () {
          if (_this.state.draggingNodeKey === null) return;
          var newExpandedKeys = toConsumableArray_toConsumableArray(expandedKeys);
          var entity = keyEntities[node.props.eventKey];
          if (entity && (entity.children || []).length) {
            newExpandedKeys = arrAdd(expandedKeys, node.props.eventKey);
          }
          if (!('expandedKeys' in _this.props)) {
            _this.setExpandedKeys(newExpandedKeys);
          }
          onExpand === null || onExpand === void 0 ? void 0 : onExpand(newExpandedKeys, {
            node: convertNodePropsToEventData(node.props),
            expanded: true,
            nativeEvent: event.nativeEvent
          });
        }, 800);
      }
      // Skip if drag node is self
      if (dragNode.props.eventKey === dropTargetKey && dropLevelOffset === 0) {
        _this.resetDragState();
        return;
      }
      // Update drag over node and drag state
      _this.setState({
        dragOverNodeKey: dragOverNodeKey,
        dropPosition: dropPosition,
        dropLevelOffset: dropLevelOffset,
        dropTargetKey: dropTargetKey,
        dropContainerKey: dropContainerKey,
        dropTargetPos: dropTargetPos,
        dropAllowed: dropAllowed
      });
      onDragEnter === null || onDragEnter === void 0 ? void 0 : onDragEnter({
        event: event,
        node: convertNodePropsToEventData(node.props),
        expandedKeys: expandedKeys
      });
    };
    _this.onNodeDragOver = function (event, node) {
      var _this$state3 = _this.state,
        dragChildrenKeys = _this$state3.dragChildrenKeys,
        flattenNodes = _this$state3.flattenNodes,
        keyEntities = _this$state3.keyEntities,
        expandedKeys = _this$state3.expandedKeys,
        indent = _this$state3.indent;
      var _this$props2 = _this.props,
        onDragOver = _this$props2.onDragOver,
        allowDrop = _this$props2.allowDrop,
        direction = _this$props2.direction;
      var _assertThisInitialize2 = _assertThisInitialized(_this),
        dragNode = _assertThisInitialize2.dragNode;
      if (!dragNode) {
        return;
      }
      var _calcDropPosition2 = calcDropPosition(event, dragNode, node, indent, _this.dragStartMousePosition, allowDrop, flattenNodes, keyEntities, expandedKeys, direction),
        dropPosition = _calcDropPosition2.dropPosition,
        dropLevelOffset = _calcDropPosition2.dropLevelOffset,
        dropTargetKey = _calcDropPosition2.dropTargetKey,
        dropContainerKey = _calcDropPosition2.dropContainerKey,
        dropAllowed = _calcDropPosition2.dropAllowed,
        dropTargetPos = _calcDropPosition2.dropTargetPos,
        dragOverNodeKey = _calcDropPosition2.dragOverNodeKey;
      if (dragChildrenKeys.indexOf(dropTargetKey) !== -1 || !dropAllowed) {
        // don't allow drop inside its children
        // don't allow drop when drop is not allowed caculated by calcDropPosition
        return;
      }
      // Update drag position
      if (dragNode.props.eventKey === dropTargetKey && dropLevelOffset === 0) {
        if (!(_this.state.dropPosition === null && _this.state.dropLevelOffset === null && _this.state.dropTargetKey === null && _this.state.dropContainerKey === null && _this.state.dropTargetPos === null && _this.state.dropAllowed === false && _this.state.dragOverNodeKey === null)) {
          _this.resetDragState();
        }
      } else if (!(dropPosition === _this.state.dropPosition && dropLevelOffset === _this.state.dropLevelOffset && dropTargetKey === _this.state.dropTargetKey && dropContainerKey === _this.state.dropContainerKey && dropTargetPos === _this.state.dropTargetPos && dropAllowed === _this.state.dropAllowed && dragOverNodeKey === _this.state.dragOverNodeKey)) {
        _this.setState({
          dropPosition: dropPosition,
          dropLevelOffset: dropLevelOffset,
          dropTargetKey: dropTargetKey,
          dropContainerKey: dropContainerKey,
          dropTargetPos: dropTargetPos,
          dropAllowed: dropAllowed,
          dragOverNodeKey: dragOverNodeKey
        });
      }
      onDragOver === null || onDragOver === void 0 ? void 0 : onDragOver({
        event: event,
        node: convertNodePropsToEventData(node.props)
      });
    };
    _this.onNodeDragLeave = function (event, node) {
      // if it is outside the droppable area
      // currentMouseOverDroppableNodeKey will be updated in dragenter event when into another droppable receiver.
      if (_this.currentMouseOverDroppableNodeKey === node.props.eventKey && !event.currentTarget.contains(event.relatedTarget)) {
        _this.resetDragState();
        _this.currentMouseOverDroppableNodeKey = null;
      }
      var onDragLeave = _this.props.onDragLeave;
      onDragLeave === null || onDragLeave === void 0 ? void 0 : onDragLeave({
        event: event,
        node: convertNodePropsToEventData(node.props)
      });
    };
    // since stopPropagation() is called in treeNode
    // if onWindowDrag is called, whice means state is keeped, drag state should be cleared
    _this.onWindowDragEnd = function (event) {
      _this.onNodeDragEnd(event, null, true);
      window.removeEventListener('dragend', _this.onWindowDragEnd);
    };
    // if onNodeDragEnd is called, onWindowDragEnd won't be called since stopPropagation() is called
    _this.onNodeDragEnd = function (event, node) {
      var onDragEnd = _this.props.onDragEnd;
      _this.setState({
        dragOverNodeKey: null
      });
      _this.cleanDragState();
      onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd({
        event: event,
        node: convertNodePropsToEventData(node.props)
      });
      _this.dragNode = null;
      window.removeEventListener('dragend', _this.onWindowDragEnd);
    };
    _this.onNodeDrop = function (event, node) {
      var _this$getActiveItem;
      var outsideTree = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var _this$state4 = _this.state,
        dragChildrenKeys = _this$state4.dragChildrenKeys,
        dropPosition = _this$state4.dropPosition,
        dropTargetKey = _this$state4.dropTargetKey,
        dropTargetPos = _this$state4.dropTargetPos,
        dropAllowed = _this$state4.dropAllowed;
      if (!dropAllowed) return;
      var onDrop = _this.props.onDrop;
      _this.setState({
        dragOverNodeKey: null
      });
      _this.cleanDragState();
      if (dropTargetKey === null) return;
      var abstractDropNodeProps = _objectSpread2(_objectSpread2({}, getTreeNodeProps(dropTargetKey, _this.getTreeNodeRequiredProps())), {}, {
        active: ((_this$getActiveItem = _this.getActiveItem()) === null || _this$getActiveItem === void 0 ? void 0 : _this$getActiveItem.key) === dropTargetKey,
        data: _this.state.keyEntities[dropTargetKey].node
      });
      var dropToChild = dragChildrenKeys.indexOf(dropTargetKey) !== -1;
      es_warning(!dropToChild, "Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.");
      var posArr = posToArr(dropTargetPos);
      var dropResult = {
        event: event,
        node: convertNodePropsToEventData(abstractDropNodeProps),
        dragNode: _this.dragNode ? convertNodePropsToEventData(_this.dragNode.props) : null,
        dragNodesKeys: [_this.dragNode.props.eventKey].concat(dragChildrenKeys),
        dropToGap: dropPosition !== 0,
        dropPosition: dropPosition + Number(posArr[posArr.length - 1])
      };
      if (!outsideTree) {
        onDrop === null || onDrop === void 0 ? void 0 : onDrop(dropResult);
      }
      _this.dragNode = null;
    };
    _this.cleanDragState = function () {
      var draggingNodeKey = _this.state.draggingNodeKey;
      if (draggingNodeKey !== null) {
        _this.setState({
          draggingNodeKey: null,
          dropPosition: null,
          dropContainerKey: null,
          dropTargetKey: null,
          dropLevelOffset: null,
          dropAllowed: true,
          dragOverNodeKey: null
        });
      }
      _this.dragStartMousePosition = null;
      _this.currentMouseOverDroppableNodeKey = null;
    };
    _this.triggerExpandActionExpand = function (e, treeNode) {
      var _this$state5 = _this.state,
        expandedKeys = _this$state5.expandedKeys,
        flattenNodes = _this$state5.flattenNodes;
      var expanded = treeNode.expanded,
        key = treeNode.key,
        isLeaf = treeNode.isLeaf;
      if (isLeaf || e.shiftKey || e.metaKey || e.ctrlKey) {
        return;
      }
      var node = flattenNodes.filter(function (nodeItem) {
        return nodeItem.key === key;
      })[0];
      var eventNode = convertNodePropsToEventData(_objectSpread2(_objectSpread2({}, getTreeNodeProps(key, _this.getTreeNodeRequiredProps())), {}, {
        data: node.data
      }));
      _this.setExpandedKeys(expanded ? arrDel(expandedKeys, key) : arrAdd(expandedKeys, key));
      _this.onNodeExpand(e, eventNode);
    };
    _this.onNodeClick = function (e, treeNode) {
      var _this$props3 = _this.props,
        onClick = _this$props3.onClick,
        expandAction = _this$props3.expandAction;
      if (expandAction === 'click') {
        _this.triggerExpandActionExpand(e, treeNode);
      }
      onClick === null || onClick === void 0 ? void 0 : onClick(e, treeNode);
    };
    _this.onNodeDoubleClick = function (e, treeNode) {
      var _this$props4 = _this.props,
        onDoubleClick = _this$props4.onDoubleClick,
        expandAction = _this$props4.expandAction;
      if (expandAction === 'doubleClick') {
        _this.triggerExpandActionExpand(e, treeNode);
      }
      onDoubleClick === null || onDoubleClick === void 0 ? void 0 : onDoubleClick(e, treeNode);
    };
    _this.onNodeSelect = function (e, treeNode) {
      var selectedKeys = _this.state.selectedKeys;
      var _this$state6 = _this.state,
        keyEntities = _this$state6.keyEntities,
        fieldNames = _this$state6.fieldNames;
      var _this$props5 = _this.props,
        onSelect = _this$props5.onSelect,
        multiple = _this$props5.multiple;
      var selected = treeNode.selected;
      var key = treeNode[fieldNames.key];
      var targetSelected = !selected;
      // Update selected keys
      if (!targetSelected) {
        selectedKeys = arrDel(selectedKeys, key);
      } else if (!multiple) {
        selectedKeys = [key];
      } else {
        selectedKeys = arrAdd(selectedKeys, key);
      }
      // [Legacy] Not found related usage in doc or upper libs
      var selectedNodes = selectedKeys.map(function (selectedKey) {
        var entity = keyEntities[selectedKey];
        if (!entity) return null;
        return entity.node;
      }).filter(function (node) {
        return node;
      });
      _this.setUncontrolledState({
        selectedKeys: selectedKeys
      });
      onSelect === null || onSelect === void 0 ? void 0 : onSelect(selectedKeys, {
        event: 'select',
        selected: targetSelected,
        node: treeNode,
        selectedNodes: selectedNodes,
        nativeEvent: e.nativeEvent
      });
    };
    _this.onNodeCheck = function (e, treeNode, checked) {
      var _this$state7 = _this.state,
        keyEntities = _this$state7.keyEntities,
        oriCheckedKeys = _this$state7.checkedKeys,
        oriHalfCheckedKeys = _this$state7.halfCheckedKeys;
      var _this$props6 = _this.props,
        checkStrictly = _this$props6.checkStrictly,
        onCheck = _this$props6.onCheck;
      var key = treeNode.key;
      // Prepare trigger arguments
      var checkedObj;
      var eventObj = {
        event: 'check',
        node: treeNode,
        checked: checked,
        nativeEvent: e.nativeEvent
      };
      if (checkStrictly) {
        var checkedKeys = checked ? arrAdd(oriCheckedKeys, key) : arrDel(oriCheckedKeys, key);
        var halfCheckedKeys = arrDel(oriHalfCheckedKeys, key);
        checkedObj = {
          checked: checkedKeys,
          halfChecked: halfCheckedKeys
        };
        eventObj.checkedNodes = checkedKeys.map(function (checkedKey) {
          return keyEntities[checkedKey];
        }).filter(function (entity) {
          return entity;
        }).map(function (entity) {
          return entity.node;
        });
        _this.setUncontrolledState({
          checkedKeys: checkedKeys
        });
      } else {
        // Always fill first
        var _conductCheck = conductCheck([].concat(toConsumableArray_toConsumableArray(oriCheckedKeys), [key]), true, keyEntities),
          _checkedKeys = _conductCheck.checkedKeys,
          _halfCheckedKeys = _conductCheck.halfCheckedKeys;
        // If remove, we do it again to correction
        if (!checked) {
          var keySet = new Set(_checkedKeys);
          keySet.delete(key);
          var _conductCheck2 = conductCheck(Array.from(keySet), {
            checked: false,
            halfCheckedKeys: _halfCheckedKeys
          }, keyEntities);
          _checkedKeys = _conductCheck2.checkedKeys;
          _halfCheckedKeys = _conductCheck2.halfCheckedKeys;
        }
        checkedObj = _checkedKeys;
        // [Legacy] This is used for `rc-tree-select`
        eventObj.checkedNodes = [];
        eventObj.checkedNodesPositions = [];
        eventObj.halfCheckedKeys = _halfCheckedKeys;
        _checkedKeys.forEach(function (checkedKey) {
          var entity = keyEntities[checkedKey];
          if (!entity) return;
          var node = entity.node,
            pos = entity.pos;
          eventObj.checkedNodes.push(node);
          eventObj.checkedNodesPositions.push({
            node: node,
            pos: pos
          });
        });
        _this.setUncontrolledState({
          checkedKeys: _checkedKeys
        }, false, {
          halfCheckedKeys: _halfCheckedKeys
        });
      }
      onCheck === null || onCheck === void 0 ? void 0 : onCheck(checkedObj, eventObj);
    };
    _this.onNodeLoad = function (treeNode) {
      var key = treeNode.key;
      var loadPromise = new Promise(function (resolve, reject) {
        // We need to get the latest state of loading/loaded keys
        _this.setState(function (_ref) {
          var _ref$loadedKeys = _ref.loadedKeys,
            loadedKeys = _ref$loadedKeys === void 0 ? [] : _ref$loadedKeys,
            _ref$loadingKeys = _ref.loadingKeys,
            loadingKeys = _ref$loadingKeys === void 0 ? [] : _ref$loadingKeys;
          var _this$props7 = _this.props,
            loadData = _this$props7.loadData,
            onLoad = _this$props7.onLoad;
          if (!loadData || loadedKeys.indexOf(key) !== -1 || loadingKeys.indexOf(key) !== -1) {
            return null;
          }
          // Process load data
          var promise = loadData(treeNode);
          promise.then(function () {
            var currentLoadedKeys = _this.state.loadedKeys;
            var newLoadedKeys = arrAdd(currentLoadedKeys, key);
            // onLoad should trigger before internal setState to avoid `loadData` trigger twice.
            // https://github.com/ant-design/ant-design/issues/12464
            onLoad === null || onLoad === void 0 ? void 0 : onLoad(newLoadedKeys, {
              event: 'load',
              node: treeNode
            });
            _this.setUncontrolledState({
              loadedKeys: newLoadedKeys
            });
            _this.setState(function (prevState) {
              return {
                loadingKeys: arrDel(prevState.loadingKeys, key)
              };
            });
            resolve();
          }).catch(function (e) {
            _this.setState(function (prevState) {
              return {
                loadingKeys: arrDel(prevState.loadingKeys, key)
              };
            });
            // If exceed max retry times, we give up retry
            _this.loadingRetryTimes[key] = (_this.loadingRetryTimes[key] || 0) + 1;
            if (_this.loadingRetryTimes[key] >= MAX_RETRY_TIMES) {
              var currentLoadedKeys = _this.state.loadedKeys;
              es_warning(false, 'Retry for `loadData` many times but still failed. No more retry.');
              _this.setUncontrolledState({
                loadedKeys: arrAdd(currentLoadedKeys, key)
              });
              resolve();
            }
            reject(e);
          });
          return {
            loadingKeys: arrAdd(loadingKeys, key)
          };
        });
      });
      // Not care warning if we ignore this
      loadPromise.catch(function () {});
      return loadPromise;
    };
    _this.onNodeMouseEnter = function (event, node) {
      var onMouseEnter = _this.props.onMouseEnter;
      onMouseEnter === null || onMouseEnter === void 0 ? void 0 : onMouseEnter({
        event: event,
        node: node
      });
    };
    _this.onNodeMouseLeave = function (event, node) {
      var onMouseLeave = _this.props.onMouseLeave;
      onMouseLeave === null || onMouseLeave === void 0 ? void 0 : onMouseLeave({
        event: event,
        node: node
      });
    };
    _this.onNodeContextMenu = function (event, node) {
      var onRightClick = _this.props.onRightClick;
      if (onRightClick) {
        event.preventDefault();
        onRightClick({
          event: event,
          node: node
        });
      }
    };
    _this.onFocus = function () {
      var onFocus = _this.props.onFocus;
      _this.setState({
        focused: true
      });
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      onFocus === null || onFocus === void 0 ? void 0 : onFocus.apply(void 0, args);
    };
    _this.onBlur = function () {
      var onBlur = _this.props.onBlur;
      _this.setState({
        focused: false
      });
      _this.onActiveChange(null);
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      onBlur === null || onBlur === void 0 ? void 0 : onBlur.apply(void 0, args);
    };
    _this.getTreeNodeRequiredProps = function () {
      var _this$state8 = _this.state,
        expandedKeys = _this$state8.expandedKeys,
        selectedKeys = _this$state8.selectedKeys,
        loadedKeys = _this$state8.loadedKeys,
        loadingKeys = _this$state8.loadingKeys,
        checkedKeys = _this$state8.checkedKeys,
        halfCheckedKeys = _this$state8.halfCheckedKeys,
        dragOverNodeKey = _this$state8.dragOverNodeKey,
        dropPosition = _this$state8.dropPosition,
        keyEntities = _this$state8.keyEntities;
      return {
        expandedKeys: expandedKeys || [],
        selectedKeys: selectedKeys || [],
        loadedKeys: loadedKeys || [],
        loadingKeys: loadingKeys || [],
        checkedKeys: checkedKeys || [],
        halfCheckedKeys: halfCheckedKeys || [],
        dragOverNodeKey: dragOverNodeKey,
        dropPosition: dropPosition,
        keyEntities: keyEntities
      };
    };
    // =========================== Expanded ===========================
    /** Set uncontrolled `expandedKeys`. This will also auto update `flattenNodes`. */
    _this.setExpandedKeys = function (expandedKeys) {
      var _this$state9 = _this.state,
        treeData = _this$state9.treeData,
        fieldNames = _this$state9.fieldNames;
      var flattenNodes = flattenTreeData(treeData, expandedKeys, fieldNames);
      _this.setUncontrolledState({
        expandedKeys: expandedKeys,
        flattenNodes: flattenNodes
      }, true);
    };
    _this.onNodeExpand = function (e, treeNode) {
      var expandedKeys = _this.state.expandedKeys;
      var _this$state10 = _this.state,
        listChanging = _this$state10.listChanging,
        fieldNames = _this$state10.fieldNames;
      var _this$props8 = _this.props,
        onExpand = _this$props8.onExpand,
        loadData = _this$props8.loadData;
      var expanded = treeNode.expanded;
      var key = treeNode[fieldNames.key];
      // Do nothing when motion is in progress
      if (listChanging) {
        return;
      }
      // Update selected keys
      var index = expandedKeys.indexOf(key);
      var targetExpanded = !expanded;
      es_warning(expanded && index !== -1 || !expanded && index === -1, 'Expand state not sync with index check');
      if (targetExpanded) {
        expandedKeys = arrAdd(expandedKeys, key);
      } else {
        expandedKeys = arrDel(expandedKeys, key);
      }
      _this.setExpandedKeys(expandedKeys);
      onExpand === null || onExpand === void 0 ? void 0 : onExpand(expandedKeys, {
        node: treeNode,
        expanded: targetExpanded,
        nativeEvent: e.nativeEvent
      });
      // Async Load data
      if (targetExpanded && loadData) {
        var loadPromise = _this.onNodeLoad(treeNode);
        if (loadPromise) {
          loadPromise.then(function () {
            // [Legacy] Refresh logic
            var newFlattenTreeData = flattenTreeData(_this.state.treeData, expandedKeys, fieldNames);
            _this.setUncontrolledState({
              flattenNodes: newFlattenTreeData
            });
          }).catch(function () {
            var currentExpandedKeys = _this.state.expandedKeys;
            var expandedKeysToRestore = arrDel(currentExpandedKeys, key);
            _this.setExpandedKeys(expandedKeysToRestore);
          });
        }
      }
    };
    _this.onListChangeStart = function () {
      _this.setUncontrolledState({
        listChanging: true
      });
    };
    _this.onListChangeEnd = function () {
      setTimeout(function () {
        _this.setUncontrolledState({
          listChanging: false
        });
      });
    };
    // =========================== Keyboard ===========================
    _this.onActiveChange = function (newActiveKey) {
      var activeKey = _this.state.activeKey;
      var onActiveChange = _this.props.onActiveChange;
      if (activeKey === newActiveKey) {
        return;
      }
      _this.setState({
        activeKey: newActiveKey
      });
      if (newActiveKey !== null) {
        _this.scrollTo({
          key: newActiveKey
        });
      }
      onActiveChange === null || onActiveChange === void 0 ? void 0 : onActiveChange(newActiveKey);
    };
    _this.getActiveItem = function () {
      var _this$state11 = _this.state,
        activeKey = _this$state11.activeKey,
        flattenNodes = _this$state11.flattenNodes;
      if (activeKey === null) {
        return null;
      }
      return flattenNodes.find(function (_ref2) {
        var key = _ref2.key;
        return key === activeKey;
      }) || null;
    };
    _this.offsetActiveKey = function (offset) {
      var _this$state12 = _this.state,
        flattenNodes = _this$state12.flattenNodes,
        activeKey = _this$state12.activeKey;
      var index = flattenNodes.findIndex(function (_ref3) {
        var key = _ref3.key;
        return key === activeKey;
      });
      // Align with index
      if (index === -1 && offset < 0) {
        index = flattenNodes.length;
      }
      index = (index + offset + flattenNodes.length) % flattenNodes.length;
      var item = flattenNodes[index];
      if (item) {
        var key = item.key;
        _this.onActiveChange(key);
      } else {
        _this.onActiveChange(null);
      }
    };
    _this.onKeyDown = function (event) {
      var _this$state13 = _this.state,
        activeKey = _this$state13.activeKey,
        expandedKeys = _this$state13.expandedKeys,
        checkedKeys = _this$state13.checkedKeys,
        fieldNames = _this$state13.fieldNames;
      var _this$props9 = _this.props,
        onKeyDown = _this$props9.onKeyDown,
        checkable = _this$props9.checkable,
        selectable = _this$props9.selectable;
      // >>>>>>>>>> Direction
      switch (event.which) {
        case es_KeyCode.UP:
          {
            _this.offsetActiveKey(-1);
            event.preventDefault();
            break;
          }
        case es_KeyCode.DOWN:
          {
            _this.offsetActiveKey(1);
            event.preventDefault();
            break;
          }
      }
      // >>>>>>>>>> Expand & Selection
      var activeItem = _this.getActiveItem();
      if (activeItem && activeItem.data) {
        var treeNodeRequiredProps = _this.getTreeNodeRequiredProps();
        var expandable = activeItem.data.isLeaf === false || !!(activeItem.data[fieldNames.children] || []).length;
        var eventNode = convertNodePropsToEventData(_objectSpread2(_objectSpread2({}, getTreeNodeProps(activeKey, treeNodeRequiredProps)), {}, {
          data: activeItem.data,
          active: true
        }));
        switch (event.which) {
          // >>> Expand
          case es_KeyCode.LEFT:
            {
              // Collapse if possible
              if (expandable && expandedKeys.includes(activeKey)) {
                _this.onNodeExpand({}, eventNode);
              } else if (activeItem.parent) {
                _this.onActiveChange(activeItem.parent.key);
              }
              event.preventDefault();
              break;
            }
          case es_KeyCode.RIGHT:
            {
              // Expand if possible
              if (expandable && !expandedKeys.includes(activeKey)) {
                _this.onNodeExpand({}, eventNode);
              } else if (activeItem.children && activeItem.children.length) {
                _this.onActiveChange(activeItem.children[0].key);
              }
              event.preventDefault();
              break;
            }
          // Selection
          case es_KeyCode.ENTER:
          case es_KeyCode.SPACE:
            {
              if (checkable && !eventNode.disabled && eventNode.checkable !== false && !eventNode.disableCheckbox) {
                _this.onNodeCheck({}, eventNode, !checkedKeys.includes(activeKey));
              } else if (!checkable && selectable && !eventNode.disabled && eventNode.selectable !== false) {
                _this.onNodeSelect({}, eventNode);
              }
              break;
            }
        }
      }
      onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(event);
    };
    /**
     * Only update the value which is not in props
     */
    _this.setUncontrolledState = function (state) {
      var atomic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var forceState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      if (!_this.destroyed) {
        var needSync = false;
        var allPassed = true;
        var newState = {};
        Object.keys(state).forEach(function (name) {
          if (name in _this.props) {
            allPassed = false;
            return;
          }
          needSync = true;
          newState[name] = state[name];
        });
        if (needSync && (!atomic || allPassed)) {
          _this.setState(_objectSpread2(_objectSpread2({}, newState), forceState));
        }
      }
    };
    _this.scrollTo = function (scroll) {
      _this.listRef.current.scrollTo(scroll);
    };
    return _this;
  }
  _createClass(Tree, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.destroyed = false;
      this.onUpdated();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.onUpdated();
    }
  }, {
    key: "onUpdated",
    value: function onUpdated() {
      var activeKey = this.props.activeKey;
      if (activeKey !== undefined && activeKey !== this.state.activeKey) {
        this.setState({
          activeKey: activeKey
        });
        if (activeKey !== null) {
          this.scrollTo({
            key: activeKey
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('dragend', this.onWindowDragEnd);
      this.destroyed = true;
    }
  }, {
    key: "resetDragState",
    value: function resetDragState() {
      this.setState({
        dragOverNodeKey: null,
        dropPosition: null,
        dropLevelOffset: null,
        dropTargetKey: null,
        dropContainerKey: null,
        dropTargetPos: null,
        dropAllowed: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;
      var _this$state14 = this.state,
        focused = _this$state14.focused,
        flattenNodes = _this$state14.flattenNodes,
        keyEntities = _this$state14.keyEntities,
        draggingNodeKey = _this$state14.draggingNodeKey,
        activeKey = _this$state14.activeKey,
        dropLevelOffset = _this$state14.dropLevelOffset,
        dropContainerKey = _this$state14.dropContainerKey,
        dropTargetKey = _this$state14.dropTargetKey,
        dropPosition = _this$state14.dropPosition,
        dragOverNodeKey = _this$state14.dragOverNodeKey,
        indent = _this$state14.indent;
      var _this$props10 = this.props,
        prefixCls = _this$props10.prefixCls,
        className = _this$props10.className,
        style = _this$props10.style,
        showLine = _this$props10.showLine,
        focusable = _this$props10.focusable,
        _this$props10$tabInde = _this$props10.tabIndex,
        tabIndex = _this$props10$tabInde === void 0 ? 0 : _this$props10$tabInde,
        selectable = _this$props10.selectable,
        showIcon = _this$props10.showIcon,
        icon = _this$props10.icon,
        switcherIcon = _this$props10.switcherIcon,
        draggable = _this$props10.draggable,
        checkable = _this$props10.checkable,
        checkStrictly = _this$props10.checkStrictly,
        disabled = _this$props10.disabled,
        motion = _this$props10.motion,
        loadData = _this$props10.loadData,
        filterTreeNode = _this$props10.filterTreeNode,
        height = _this$props10.height,
        itemHeight = _this$props10.itemHeight,
        virtual = _this$props10.virtual,
        titleRender = _this$props10.titleRender,
        dropIndicatorRender = _this$props10.dropIndicatorRender,
        onContextMenu = _this$props10.onContextMenu,
        onScroll = _this$props10.onScroll,
        direction = _this$props10.direction,
        rootClassName = _this$props10.rootClassName,
        rootStyle = _this$props10.rootStyle;
      var domProps = pickAttrs(this.props, {
        aria: true,
        data: true
      });
      // It's better move to hooks but we just simply keep here
      var draggableConfig;
      if (draggable) {
        if (typeof_typeof(draggable) === 'object') {
          draggableConfig = draggable;
        } else if (typeof draggable === 'function') {
          draggableConfig = {
            nodeDraggable: draggable
          };
        } else {
          draggableConfig = {};
        }
      }
      return /*#__PURE__*/react.createElement(TreeContext.Provider, {
        value: {
          prefixCls: prefixCls,
          selectable: selectable,
          showIcon: showIcon,
          icon: icon,
          switcherIcon: switcherIcon,
          draggable: draggableConfig,
          draggingNodeKey: draggingNodeKey,
          checkable: checkable,
          checkStrictly: checkStrictly,
          disabled: disabled,
          keyEntities: keyEntities,
          dropLevelOffset: dropLevelOffset,
          dropContainerKey: dropContainerKey,
          dropTargetKey: dropTargetKey,
          dropPosition: dropPosition,
          dragOverNodeKey: dragOverNodeKey,
          indent: indent,
          direction: direction,
          dropIndicatorRender: dropIndicatorRender,
          loadData: loadData,
          filterTreeNode: filterTreeNode,
          titleRender: titleRender,
          onNodeClick: this.onNodeClick,
          onNodeDoubleClick: this.onNodeDoubleClick,
          onNodeExpand: this.onNodeExpand,
          onNodeSelect: this.onNodeSelect,
          onNodeCheck: this.onNodeCheck,
          onNodeLoad: this.onNodeLoad,
          onNodeMouseEnter: this.onNodeMouseEnter,
          onNodeMouseLeave: this.onNodeMouseLeave,
          onNodeContextMenu: this.onNodeContextMenu,
          onNodeDragStart: this.onNodeDragStart,
          onNodeDragEnter: this.onNodeDragEnter,
          onNodeDragOver: this.onNodeDragOver,
          onNodeDragLeave: this.onNodeDragLeave,
          onNodeDragEnd: this.onNodeDragEnd,
          onNodeDrop: this.onNodeDrop
        }
      }, /*#__PURE__*/react.createElement("div", {
        role: "tree",
        className: classnames_default()(prefixCls, className, rootClassName, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-show-line"), showLine), _defineProperty(_classNames, "".concat(prefixCls, "-focused"), focused), _defineProperty(_classNames, "".concat(prefixCls, "-active-focused"), activeKey !== null), _classNames)),
        style: rootStyle
      }, /*#__PURE__*/react.createElement(es_NodeList, (0,esm_extends/* default */.A)({
        ref: this.listRef,
        prefixCls: prefixCls,
        style: style,
        data: flattenNodes,
        disabled: disabled,
        selectable: selectable,
        checkable: !!checkable,
        motion: motion,
        dragging: draggingNodeKey !== null,
        height: height,
        itemHeight: itemHeight,
        virtual: virtual,
        focusable: focusable,
        focused: focused,
        tabIndex: tabIndex,
        activeItem: this.getActiveItem(),
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onKeyDown: this.onKeyDown,
        onActiveChange: this.onActiveChange,
        onListChangeStart: this.onListChangeStart,
        onListChangeEnd: this.onListChangeEnd,
        onContextMenu: onContextMenu,
        onScroll: onScroll
      }, this.getTreeNodeRequiredProps(), domProps))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, prevState) {
      var prevProps = prevState.prevProps;
      var newState = {
        prevProps: props
      };
      function needSync(name) {
        return !prevProps && name in props || prevProps && prevProps[name] !== props[name];
      }
      // ================== Tree Node ==================
      var treeData;
      // fieldNames
      var fieldNames = prevState.fieldNames;
      if (needSync('fieldNames')) {
        fieldNames = fillFieldNames(props.fieldNames);
        newState.fieldNames = fieldNames;
      }
      // Check if `treeData` or `children` changed and save into the state.
      if (needSync('treeData')) {
        treeData = props.treeData;
      } else if (needSync('children')) {
        es_warning(false, '`children` of Tree is deprecated. Please use `treeData` instead.');
        treeData = convertTreeToData(props.children);
      }
      // Save flatten nodes info and convert `treeData` into keyEntities
      if (treeData) {
        newState.treeData = treeData;
        var entitiesMap = convertDataToEntities(treeData, {
          fieldNames: fieldNames
        });
        newState.keyEntities = _objectSpread2(_defineProperty({}, MOTION_KEY, MotionEntity), entitiesMap.keyEntities);
        // Warning if treeNode not provide key
        if (false) {}
      }
      var keyEntities = newState.keyEntities || prevState.keyEntities;
      // ================ expandedKeys =================
      if (needSync('expandedKeys') || prevProps && needSync('autoExpandParent')) {
        newState.expandedKeys = props.autoExpandParent || !prevProps && props.defaultExpandParent ? conductExpandParent(props.expandedKeys, keyEntities) : props.expandedKeys;
      } else if (!prevProps && props.defaultExpandAll) {
        var cloneKeyEntities = _objectSpread2({}, keyEntities);
        delete cloneKeyEntities[MOTION_KEY];
        newState.expandedKeys = Object.keys(cloneKeyEntities).map(function (key) {
          return cloneKeyEntities[key].key;
        });
      } else if (!prevProps && props.defaultExpandedKeys) {
        newState.expandedKeys = props.autoExpandParent || props.defaultExpandParent ? conductExpandParent(props.defaultExpandedKeys, keyEntities) : props.defaultExpandedKeys;
      }
      if (!newState.expandedKeys) {
        delete newState.expandedKeys;
      }
      // ================ flattenNodes =================
      if (treeData || newState.expandedKeys) {
        var flattenNodes = flattenTreeData(treeData || prevState.treeData, newState.expandedKeys || prevState.expandedKeys, fieldNames);
        newState.flattenNodes = flattenNodes;
      }
      // ================ selectedKeys =================
      if (props.selectable) {
        if (needSync('selectedKeys')) {
          newState.selectedKeys = calcSelectedKeys(props.selectedKeys, props);
        } else if (!prevProps && props.defaultSelectedKeys) {
          newState.selectedKeys = calcSelectedKeys(props.defaultSelectedKeys, props);
        }
      }
      // ================= checkedKeys =================
      if (props.checkable) {
        var checkedKeyEntity;
        if (needSync('checkedKeys')) {
          checkedKeyEntity = parseCheckedKeys(props.checkedKeys) || {};
        } else if (!prevProps && props.defaultCheckedKeys) {
          checkedKeyEntity = parseCheckedKeys(props.defaultCheckedKeys) || {};
        } else if (treeData) {
          // If `treeData` changed, we also need check it
          checkedKeyEntity = parseCheckedKeys(props.checkedKeys) || {
            checkedKeys: prevState.checkedKeys,
            halfCheckedKeys: prevState.halfCheckedKeys
          };
        }
        if (checkedKeyEntity) {
          var _checkedKeyEntity = checkedKeyEntity,
            _checkedKeyEntity$che = _checkedKeyEntity.checkedKeys,
            checkedKeys = _checkedKeyEntity$che === void 0 ? [] : _checkedKeyEntity$che,
            _checkedKeyEntity$hal = _checkedKeyEntity.halfCheckedKeys,
            halfCheckedKeys = _checkedKeyEntity$hal === void 0 ? [] : _checkedKeyEntity$hal;
          if (!props.checkStrictly) {
            var conductKeys = conductCheck(checkedKeys, true, keyEntities);
            checkedKeys = conductKeys.checkedKeys;
            halfCheckedKeys = conductKeys.halfCheckedKeys;
          }
          newState.checkedKeys = checkedKeys;
          newState.halfCheckedKeys = halfCheckedKeys;
        }
      }
      // ================= loadedKeys ==================
      if (needSync('loadedKeys')) {
        newState.loadedKeys = props.loadedKeys;
      }
      return newState;
    }
  }]);
  return Tree;
}(react.Component);
Tree.defaultProps = {
  prefixCls: 'rc-tree',
  showLine: false,
  showIcon: true,
  selectable: true,
  multiple: false,
  checkable: false,
  disabled: false,
  checkStrictly: false,
  draggable: false,
  defaultExpandParent: true,
  autoExpandParent: false,
  defaultExpandAll: false,
  defaultExpandedKeys: [],
  defaultCheckedKeys: [],
  defaultSelectedKeys: [],
  dropIndicatorRender: DropIndicator,
  allowDrop: function allowDrop() {
    return true;
  },
  expandAction: false
};
Tree.TreeNode = es_TreeNode;
/* harmony default export */ const es_Tree = (Tree);
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/index.js



/* harmony default export */ const rc_tree_es = (es_Tree);

/***/ }),

/***/ 22799:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen"),u;u=Symbol.for("react.module.reference");
function v(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type,a){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof,a){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}__webpack_unused_export__=h;__webpack_unused_export__=g;__webpack_unused_export__=b;exports.ForwardRef=l;__webpack_unused_export__=d;__webpack_unused_export__=q;__webpack_unused_export__=p;__webpack_unused_export__=c;__webpack_unused_export__=f;__webpack_unused_export__=e;__webpack_unused_export__=m;
__webpack_unused_export__=n;__webpack_unused_export__=function(){return!1};__webpack_unused_export__=function(){return!1};__webpack_unused_export__=function(a){return v(a)===h};__webpack_unused_export__=function(a){return v(a)===g};__webpack_unused_export__=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===b};__webpack_unused_export__=function(a){return v(a)===l};__webpack_unused_export__=function(a){return v(a)===d};__webpack_unused_export__=function(a){return v(a)===q};exports.isMemo=function(a){return v(a)===p};
__webpack_unused_export__=function(a){return v(a)===c};__webpack_unused_export__=function(a){return v(a)===f};__webpack_unused_export__=function(a){return v(a)===e};__webpack_unused_export__=function(a){return v(a)===m};__webpack_unused_export__=function(a){return v(a)===n};
__webpack_unused_export__=function(a){return"string"===typeof a||"function"===typeof a||a===d||a===f||a===e||a===m||a===n||a===t||"object"===typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===g||a.$$typeof===h||a.$$typeof===l||a.$$typeof===u||void 0!==a.getModuleId)?!0:!1};__webpack_unused_export__=v;


/***/ }),

/***/ 44363:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(22799);
} else {}


/***/ }),

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

/***/ 4938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ DropdownHacker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


// In a page that uses both Bootstrap and ReactBootstrap, if the Dropdown contains an Input and the focus triggers "Esc" within the input, or if the arrow keys up or down are triggered directly in the drop-down menu, Bootstrap's javascript will report an error: "Cannot read properties of undefined (reading 'parentNode')". The toggler element in Bootstrap contains this attribute, but ReactBootstrap's Dropdown component does not. Bootstrap will search for parentNode through the selector [data-bs-toggle="dropdown"], resulting in an error being reported.

// Now, the footer.rst will contain <script src="[page.linkbase]ui/bootstrap/js/bootstrap.bundle.min.js"></script>, causing all React interfaces to encounter this problem.  So, add this hacker for all <Dropdown /> component.
function DropdownHacker() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "data-bs-toggle": "dropdown"
  });
}

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

/***/ 48115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_ButtonGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70616);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25615);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48032);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






var FullScreenContainer = function FullScreenContainer(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    fullScreen = _useState2[0],
    setFullScreen = _useState2[1];
  if (fullScreen) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      className: "full-screen-container",
      show: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.Header, {
      className: "full-screen-header text-bg-secondary py-0",
      closeButton: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.Title, null, props.fullScreenTitle || props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_ButtonGroup__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      className: "ms-auto"
    }, props.controls, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      variant: "secondary",
      onClick: setFullScreen.bind(null, false)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "far fa-compress"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.Body, {
      className: "full-screen-body"
    }, props.children));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "full-screen-container d-flex flex-column"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "full-screen-header d-flex text-bg-secondary"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "ms-3 fw-bold col-form-label"
    }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_ButtonGroup__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      className: "ms-auto me-2"
    }, props.controls, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      variant: "secondary",
      onClick: setFullScreen.bind(null, true)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "far fa-expand"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "full-screen-body"
    }, props.children));
  }
};
FullScreenContainer.propTypes = {
  /**
   * The title.
   */
  title: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string).isRequired,
  /**
   * The title when it is full screen.  Default is {Title}.
   */
  fullScreenTitle: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  /**
   * Children elements.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any).isRequired,
  /**
   * Control elements.
   */
  controls: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FullScreenContainer);

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

/***/ 98044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DB: () => (/* binding */ OPERATOR_LABEL_MAP),
/* harmony export */   R8: () => (/* binding */ FILE_SIZE_THRESHOLD),
/* harmony export */   _x: () => (/* binding */ FIELD_SOURCES),
/* harmony export */   bh: () => (/* binding */ FIELD_TYPES),
/* harmony export */   xZ: () => (/* binding */ TOKENS)
/* harmony export */ });

var TOKENS = {
  CONDITION_MAPPING_GET_STARTED_TIP: 'Get started by adding a rule or group',
  INPUT_XML: 'Input XML',
  MESSAGE_HEADER: 'Message Header',
  VARIABLE: 'Variable',
  VALUE: 'Value',
  DATA_TYPE: 'Data Type',
  OCCURRENCES: 'Occurrences',
  INDEX: 'Index',
  OF: 'of',
  OP_EQUALS: 'is equal to',
  OP_NOT_EQUALS: 'is not equal to',
  OP_LESS_THAN: 'is less than',
  OP_LESS_THAN_OR_EQUALS: 'is less than or equal to',
  OP_GREATER_THAN: 'is greater than',
  OP_GREATER_THAN_OR_EQUALS: 'is greater than or equal to',
  OP_CONTAINS: 'contains',
  OP_BEGINS_WITH: 'starts with',
  OP_ENDS_WITH: 'ends with',
  OP_IS_EMPTY: 'is empty',
  OP_IS_NOT_EMPTY: 'is not empty',
  OP_IS_NULL: 'is null',
  OP_IS_NOT_NULL: 'is not null',
  OP_IN: 'is in',
  OP_NOT_IN: 'is not in',
  OP_MATCHES_GLOB: 'matches glob',
  OP_MATCHES_REGEXP: 'matches regex',
  STRING: 'String',
  NUMBER: 'Number',
  DATETIME: 'Datetime',
  FILE_TOO_LARGE: 'The uploaded XML is too large. The maximum size is 10M.',
  UPLOAD_SAMPLE_FILE: 'Upload Sample File',
  UPLOAD_SAMPLE_FILE_TIP: 'Select a sample file to create your map.',
  SAMPLE_FILE: 'Sample file',
  UPLOAD: 'Upload',
  UPLOADING: 'Uploading',
  SEARCH_FOR: 'Search for...',
  TEST: 'Test',
  TESTING: 'Testing',
  XML: 'XML',
  HEADERS: 'Headers',
  XML_IS_INVALID: 'The XML is invalid:',
  SAVE_SAMPLE_DATA: 'Save Sample Data',
  SAVE_SAMPLE_DATA_TIP: 'Saved sample data is available to any adjacent connectors.',
  SAMPLE_DATA_SAVED: 'Sample data saved',
  CLOSE: 'Close',
  FORM: 'Form',
  CODE: 'Code',
  NO_OUTPUT: 'No output.',
  UPLOAD_SCHEMA: 'Upload Schema',
  UPLOAD_SCHEMA_TIP: 'Select a schema file to upload.',
  UPLOAD_SCHEMA_LABEL: 'Schema File',
  OVERRIDE_SCHEMA_PROMPT: 'There is already a version of this schema installed. Would you like to override it for this connector?',
  SCHEMA_TOO_LARGE: 'The schema file is too large. The maximum size is 10M.',
  OVERRIDE: 'Override',
  CANCEL: 'Cancel',
  DOWNLOAD_LOGS: 'Download Logs',
  UPLOAD_EDI_SCHEMA_TIP: 'Additional document schemas can be downloaded from <a href="https://arc.cdata.com/schemas/" target="_blank">here</a>, or obtained directly from <a href="mailto:arcsupport@cdata.com">arcsupport@cdata.com</a>. Select a schema file to upload.'
};
var FIELD_SOURCES = {
  INPUT_XML: "Input XML",
  MESSAGE_HEADER: "Message Header",
  VARIABLE: "Variable"
};
var FIELD_TYPES = {
  VALUE: "Value",
  DATA_TYPE: "Data Type",
  OCCURRENCES: "Occurrences",
  INDEX: "Index"
};
var OPERATOR_LABEL_MAP = {
  "=": TOKENS.OP_EQUALS,
  "!=": TOKENS.OP_NOT_EQUALS,
  "<": TOKENS.OP_LESS_THAN,
  "<=": TOKENS.OP_LESS_THAN_OR_EQUALS,
  ">": TOKENS.OP_GREATER_THAN,
  ">=": TOKENS.OP_GREATER_THAN_OR_EQUALS,
  "contains": TOKENS.OP_CONTAINS,
  "beginsWith": TOKENS.OP_BEGINS_WITH,
  "endsWith": TOKENS.OP_ENDS_WITH,
  "isEmpty": TOKENS.OP_IS_EMPTY,
  "isNotEmpty": TOKENS.OP_IS_NOT_EMPTY,
  "null": TOKENS.OP_IS_NULL,
  "notNull": TOKENS.OP_IS_NOT_NULL,
  "in": TOKENS.OP_IN,
  "notIn": TOKENS.OP_NOT_IN
};
var FILE_SIZE_THRESHOLD = 10 * 1024 * 1024;


/***/ }),

/***/ 28125:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./src/components/utils/index.js + 1 modules
var utils = __webpack_require__(25337);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./src/components/alert/DismissibleAlert.tsx
var DismissibleAlert = __webpack_require__(95631);
;// CONCATENATED MODULE: ./src/connectors/validate/constants.js

var TOKENS = {
  OP_MATCHES_GLOB: 'matches glob',
  OP_MATCHES_REGEXP: 'matches regex',
  MODAL_TITLE_RULES: 'Validation Rules',
  MODAL_LABEL_RULE: 'Rules',
  FIELD_XPATH: 'XPath',
  FIELD_HEADER: 'Header',
  FIELD_VALUE: 'Value',
  FIELD_DATA_TYPE: 'Data Type',
  FIELD_OCCURRENCES: 'Occurrences',
  FIELD_OF: 'of',
  VALUE_TYPE_STRING: 'String',
  VALUE_TYPE_NUMBER: 'Number',
  VALUE_TYPE_DATE_TIME: 'Datetime'
};
var COMPARISON_TYPES = {
  VALUE: "Value",
  DATA_TYPE: "Data Type",
  OCCURRENCES: "Occurrences"
};
var DATA_TYPES = {
  STRING: "String",
  NUMBER: "Number",
  DATE_TIME: "DateTime"
};
// EXTERNAL MODULE: ./src/connectors/shared/constants.js
var constants = __webpack_require__(98044);
// EXTERNAL MODULE: ./src/connectors/shared/ConditionMappingBuilder.jsx
var ConditionMappingBuilder = __webpack_require__(60219);
// EXTERNAL MODULE: ./src/connectors/shared/FullScreenContainer.jsx
var FullScreenContainer = __webpack_require__(48115);
;// CONCATENATED MODULE: ./src/connectors/validate/ValidateQueryBuilder.jsx
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







var defConditions = new Map([["&&", "and"], ["||", "or"], ["!", "not"]]);
var defOperators = new Set(["==", "!=", "<", ">", "<=", ">=", "=#", "=~", "isnull", "isnotnull", "in", "notin"]);
var defComparisonType = "gettype";

/**
 * The query of React Query Builder is converted to validate.json.
 */
function convertToExp(query) {
  if (query.combinator) {
    return convertToGroup(query);
  } else {
    return convertToRule(query);
  }
}
function convertToGroup(query) {
  var operator = "";
  var params = [];
  if (query.combinator.toLowerCase() === "and") {
    operator = "&&";
  } else if (query.combinator.toLowerCase() === "or") {
    operator = "||";
  } else {
    console.log("Unsupport combinator " + query.combinator);
    return;
  }
  for (var i = 0; i < query.rules.length; i++) {
    var exp = convertToExp(query.rules[i]);
    if (exp) {
      params.push(exp);
    }
  }
  if (query.not) {
    if (params.length > 1) {
      return {
        operator: "!",
        params: [{
          operator: operator,
          params: params
        }]
      };
    } else {
      return {
        operator: "!",
        params: params
      };
    }
  } else {
    if (params.length > 1) {
      return {
        operator: operator,
        params: params
      };
    } else if (params.length === 1) {
      return params[0];
    } else {
      return "";
    }
  }
}
function convertToRule(rule) {
  var operator = "";
  var opExtType = null;
  var params = [];
  var source = rule.field.source;
  var comparisonType = rule.field.type;
  var _convertToFormatters = convertToFormatters(rule.field.field, rule.field.type),
    _convertToFormatters2 = _slicedToArray(_convertToFormatters, 2),
    xpath = _convertToFormatters2[0],
    formatters = _convertToFormatters2[1];
  if (!xpath) {
    return null;
  }
  switch (rule.operator) {
    case "=":
      operator = "==";
      break;
    case "contains":
      operator = "=~";
      params.push(convertToFirstParamObj(source, xpath, false, formatters, comparisonType));
      params.push("*" + rule.value + "*");
      break;
    case "beginsWith":
      operator = "=~";
      params.push(convertToFirstParamObj(source, xpath, false, formatters, comparisonType));
      params.push(rule.value + "*");
      break;
    case "endsWith":
      operator = "=~";
      params.push(convertToFirstParamObj(source, xpath, false, formatters, comparisonType));
      params.push("*" + rule.value);
      break;
    case "glob":
      operator = "=~";
      params.push(convertToFirstParamObj(source, xpath, false, formatters, comparisonType));
      params.push(rule.value);
      break;
    case "isEmpty":
      operator = "==";
      opExtType = "isempty";
      params.push(convertToFirstParamObj(source, xpath, false, formatters, comparisonType));
      params.push("");
      break;
    case "isNotEmpty":
      operator = "!=";
      opExtType = "isnotempty";
      params.push(convertToFirstParamObj(source, xpath, false, formatters, comparisonType));
      params.push("");
      break;
    case "notNull":
      operator = "isnotnull";
      params.push(convertToFirstParamObj(source, xpath, undefined, formatters, comparisonType));
      break;
    case "null":
      operator = "isnull";
      params.push(convertToFirstParamObj(source, xpath, undefined, formatters, comparisonType));
      break;
    case "notIn":
      operator = "notin";
      break;
    case "regex":
      operator = "=#";
      break;
    default:
      operator = rule.operator;
      break;
  }
  if (params.length === 0) {
    params.push(convertToFirstParamObj(source, xpath, false, formatters, comparisonType));
    params.push(rule.value);
  }
  if (opExtType) {
    return {
      operator: operator,
      type: opExtType,
      params: params
    };
  } else {
    return {
      operator: operator,
      params: params
    };
  }
}
function convertToFirstParamObj(source, xpath, ignoreMissingValue, formatters, comparisonType) {
  var obj = {};
  if (xpath && source) {
    if (source === constants/* FIELD_SOURCES */._x.MESSAGE_HEADER) {
      obj.header = xpath;
    } else if (source === constants/* FIELD_SOURCES */._x.INPUT_XML) {
      if (comparisonType === COMPARISON_TYPES.OCCURRENCES) {
        obj.occurrence = xpath;
      } else {
        obj.xpath = xpath;
      }
    }
  }
  if (ignoreMissingValue && !obj.occurrence) {
    obj.ignore_missing_value = ignoreMissingValue.toString();
  }
  if (formatters) {
    obj.formatters = formatters;
  }
  return obj;
}
function convertToFormatters(field, comparisonType) {
  if (!field) {
    return comparisonType ? [field, [comparisonType]] : [field];
  }
  field = field.trim();
  if (field.startsWith("[") && field.endsWith("]")) {
    field = field.substring(1, field.length - 1);
  }
  var formatters = [];
  var formattersStarted = false;
  field.split("|").forEach(function (element) {
    element = element.trim();
    if (!formattersStarted) {
      field = element;
      formattersStarted = true;
    } else {
      var name = element.substring(0, element.indexOf("("));
      element = element.substring(element.indexOf("(") + 1, element.indexOf(")"));
      if (element.length) {
        formatters.push({
          name: name,
          arguments: element.split(",")
        });
      } else {
        formatters.push({
          name: name
        });
      }
    }
  });
  if (comparisonType && comparisonType === COMPARISON_TYPES.DATA_TYPE) {
    formatters.push(defComparisonType);
  }
  return [field, formatters.length > 0 ? formatters : null];
}

/**
 * The validate.json is converted to the query of React Query Builder.
 */
function convertFromExp(obj) {
  var qb = convertFromExpIt(obj);
  if (qb.rules) {
    return qb;
  }
  var newQB = {};
  newQB.combinator = "and";
  newQB.rules = [];
  newQB.rules.push(qb);
  return newQB;
}
function convertFromExpIt(obj) {
  if (defConditions.has(obj.operator)) {
    return convertFromGroup(obj);
  } else if (defOperators.has(obj.operator)) {
    return convertFromRule(obj);
  } else {
    console.log("Unsupported operator " + obj.operator);
  }
}
function convertFromGroup(obj) {
  var rule = {};
  var params = obj.params;
  var condition = defConditions.get(obj.operator);
  if (condition === "not") {
    rule.not = true;
    if (obj.params.length > 0 && defConditions.has(obj.params[0].operator)) {
      params = obj.params[0];
      rule.combinator = defConditions.get(params.operator);
      params = params.params;
    } else {
      // there is only one rule.
      rule.combinator = "and";
    }
  } else {
    rule.combinator = defConditions.get(obj.operator);
  }
  rule.rules = [];
  for (var i = 0; i < params.length; i++) {
    var tmp = convertFromExpIt(params[i]);
    if (tmp) {
      rule.rules.push(tmp);
    }
  }
  return rule;
}
function renderFormatters(data) {
  var res = "";
  var comparisonType = COMPARISON_TYPES.VALUE;
  data.forEach(function (item) {
    var _item$name;
    if (typeof item === "string" && item === defComparisonType) {
      comparisonType = COMPARISON_TYPES.DATA_TYPE;
      return;
    }
    if (((_item$name = item.name) === null || _item$name === void 0 ? void 0 : _item$name.length) > 0) {
      res += " | " + item.name;
      if (Object.prototype.hasOwnProperty.call(item, "arguments")) {
        if (Array.isArray(item.arguments)) {
          var delim = false;
          res += "(";
          item.arguments.forEach(function (arg) {
            res += delim ? "," : "";
            res += arg;
            delim = true;
          });
          res += ")";
        } else {
          res += "(" + item.arguments + ")";
        }
      } else {
        res += "()";
      }
    }
  });
  return [comparisonType, res];
}
function convertFromRule(obj) {
  var source = "";
  var field = "";
  var operator = "";
  var value = "";
  var comparisonType = "";
  //add new rules here
  if (Object.prototype.hasOwnProperty.call(obj.params[0], "xpath")) {
    source = constants/* FIELD_SOURCES */._x.INPUT_XML;
    field = obj.params[0]["xpath"];
    if (Object.prototype.hasOwnProperty.call(obj.params[0], "formatters")) {
      var _renderFormatters = renderFormatters(obj.params[0]["formatters"]),
        _renderFormatters2 = _slicedToArray(_renderFormatters, 2),
        comType = _renderFormatters2[0],
        formatter = _renderFormatters2[1];
      field = field + formatter;
      comparisonType = comType;
    }
  } else if (Object.prototype.hasOwnProperty.call(obj.params[0], "header")) {
    source = constants/* FIELD_SOURCES */._x.MESSAGE_HEADER;
    field = obj.params[0]["header"];
    if (Object.prototype.hasOwnProperty.call(obj.params[0], "formatters")) {
      var _renderFormatters3 = renderFormatters(obj.params[0]["formatters"]),
        _renderFormatters4 = _slicedToArray(_renderFormatters3, 2),
        _comType = _renderFormatters4[0],
        _formatter = _renderFormatters4[1];
      field = field + _formatter;
      comparisonType = _comType;
    }
  } else if (Object.prototype.hasOwnProperty.call(obj.params[0], "occurrence")) {
    source = constants/* FIELD_SOURCES */._x.INPUT_XML;
    field = obj.params[0]["occurrence"];
    comparisonType = COMPARISON_TYPES.OCCURRENCES;
    if (Object.prototype.hasOwnProperty.call(obj.params[0], "formatters")) {
      var _renderFormatters5 = renderFormatters(obj.params[0]["formatters"]),
        _renderFormatters6 = _slicedToArray(_renderFormatters5, 2),
        _formatter2 = _renderFormatters6[1];
      field = field + _formatter2;
    }
  }
  value = obj.params.length > 1 ? obj.params[1] : "";
  switch (obj.operator) {
    case "==":
      if (obj.type && obj.type === "isempty") {
        operator = "isEmpty";
      } else {
        operator = "=";
      }
      break;
    case "!=":
      if (obj.type && obj.type === "isnotempty") {
        operator = "isNotEmpty";
      } else {
        operator = "!=";
      }
      break;
    case "=~":
      if (obj.params[1].startsWith("*") && obj.params[1].endsWith("*")) {
        operator = "contains";
        value = obj.params[1].slice(1);
        value = value.slice(0, -1);
      } else if (obj.params[1].endsWith("*")) {
        operator = "beginsWith";
        value = obj.params[1].slice(0, -1);
      } else if (obj.params[1].startsWith("*")) {
        operator = "endsWith";
        value = obj.params[1].slice(1);
      } else {
        operator = "glob";
      }
      break;
    case "=#":
      operator = "regex";
      break;
    case "isnull":
      operator = "null";
      break;
    case "isnotnull":
      operator = "notNull";
      break;
    case "notin":
      operator = "notIn";
      break;
    default:
      operator = obj.operator;
      break;
  }
  return {
    field: {
      field: field,
      source: source,
      type: comparisonType
    },
    value: value,
    operator: operator
  };
}
function validatorIt(rule) {
  var _rule$field, _rule$field2, _rule$field3;
  if (rule.rules) {
    return validator(rule);
  }
  var result = {};
  if (!((_rule$field = rule.field) !== null && _rule$field !== void 0 && _rule$field.field) || !((_rule$field2 = rule.field) !== null && _rule$field2 !== void 0 && (_rule$field2 = _rule$field2.field) !== null && _rule$field2 !== void 0 && _rule$field2.trim())) {
    result[rule.id] = false;
    return result;
  }
  if (((_rule$field3 = rule.field) === null || _rule$field3 === void 0 ? void 0 : _rule$field3.type) === COMPARISON_TYPES.DATA_TYPE) {
    result[rule.id] = true;
    return result;
  }
  if (rule.field.type === COMPARISON_TYPES.OCCURRENCES) {
    if (!rule.value) {
      result[rule.id] = false;
    } else {
      var number = Number(rule.value);
      result[rule.id] = !isNaN(number);
    }
    return result;
  }

  // The rule.field.type === "" || rule.field.type === COMPARISON_TYPES.VALUE
  switch (rule.operator) {
    case "isEmpty":
    case "isNotEmpty":
    case "notNull":
    case "null":
      result[rule.id] = true;
      break;
    default:
      result[rule.id] = !!rule.value;
      break;
  }
  return result;
}
function validator(query) {
  var result = {};
  query.rules.forEach(function (rule) {
    if (_typeof(rule) === "object") {
      var tmp = validatorIt(rule);
      result = _objectSpread(_objectSpread({}, tmp), result);
    }
  });
  return result;
}
var ValidateQueryBuilder = function ValidateQueryBuilder(_ref) {
  var initQuery = _ref.initQuery,
    onChange = _ref.onChange,
    candidateSourceTreeData = _ref.candidateSourceTreeData,
    disabled = _ref.disabled;
  var _useState = (0,react.useState)(convertFromExp(initQuery)),
    _useState2 = _slicedToArray(_useState, 2),
    query = _useState2[0],
    setQuery = _useState2[1];
  var builderRef = (0,react.useRef)(null);
  var builderTreeRef = (0,react.useRef)({});
  var editorRef = (0,utils/* useClickOutsideCheck */.jn)(function () {
    var _builderTreeRef$curre;
    return (_builderTreeRef$curre = builderTreeRef.current.hideDropdown) === null || _builderTreeRef$curre === void 0 ? void 0 : _builderTreeRef$curre.call(null);
  });
  var onQueryChange = function onQueryChange(query, queryIC) {
    var _builderTreeRef$curre2;
    setQuery(queryIC);
    if (onChange) {
      onChange(convertToExp(query));
    }
    (_builderTreeRef$curre2 = builderTreeRef.current.hideDropdown) === null || _builderTreeRef$curre2 === void 0 || _builderTreeRef$curre2.call(null);
  };
  var renderConditionMappingEditor = function renderConditionMappingEditor(builderRef, treeRef, onHideTree) {
    var ctxProps = {
      ruleFieldsClassname: "row row-cols-auto g-0",
      candidateSourceTreeData: candidateSourceTreeData,
      returnAbsoluteXPath: true,
      refs: treeRef,
      builderRef: builderRef
    };
    return /*#__PURE__*/react.createElement(ConditionMappingBuilder/* ConditionMappingBuilderContext */.Uc.Provider, {
      value: ctxProps
    }, /*#__PURE__*/react.createElement(ConditionMappingBuilder/* ConditionMappingBuilder */.hv, {
      getRuleClassname: function getRuleClassname() {
        return "row row-cols-auto g-0";
      },
      ref: builderRef,
      query: query,
      validator: validator,
      onQueryChange: onQueryChange,
      onScroll: onHideTree,
      disabled: disabled
    }));
  };
  return /*#__PURE__*/react.createElement(FullScreenContainer/* default */.A, {
    title: TOKENS.MODAL_LABEL_RULE,
    fullScreenTitle: TOKENS.MODAL_TITLE_RULES
  }, /*#__PURE__*/react.createElement("div", {
    ref: editorRef,
    onClick: function onClick() {
      var _builderTreeRef$curre3;
      return (_builderTreeRef$curre3 = builderTreeRef.current.hideDropdown) === null || _builderTreeRef$curre3 === void 0 ? void 0 : _builderTreeRef$curre3.call(null);
    },
    className: "validate-query-builder w-100"
  }, renderConditionMappingEditor(builderRef, builderTreeRef, function () {
    var _builderTreeRef$curre4;
    return (_builderTreeRef$curre4 = builderTreeRef.current.hideDropdown) === null || _builderTreeRef$curre4 === void 0 ? void 0 : _builderTreeRef$curre4.call(null);
  })));
};

// EXTERNAL MODULE: ../../.react-shared/axios/index.jsx
var axios = __webpack_require__(29029);
;// CONCATENATED MODULE: ./src/connectors/validate/ValidateSettingSection.jsx
function ValidateSettingSection_typeof(o) { "@babel/helpers - typeof"; return ValidateSettingSection_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, ValidateSettingSection_typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == ValidateSettingSection_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(ValidateSettingSection_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ValidateSettingSection_slicedToArray(r, e) { return ValidateSettingSection_arrayWithHoles(r) || ValidateSettingSection_iterableToArrayLimit(r, e) || ValidateSettingSection_unsupportedIterableToArray(r, e) || ValidateSettingSection_nonIterableRest(); }
function ValidateSettingSection_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ValidateSettingSection_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return ValidateSettingSection_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? ValidateSettingSection_arrayLikeToArray(r, a) : void 0; } }
function ValidateSettingSection_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ValidateSettingSection_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function ValidateSettingSection_arrayWithHoles(r) { if (Array.isArray(r)) return r; }





var DefaultInitQuery = {
  operator: "&&",
  params: []
};
var getQueryFromHTTP = function getQueryFromHTTP(item) {
  if (!item.data) {
    return DefaultInitQuery;
  }
  var queryObj = JSON.parse(item.data);
  if (Object.keys(queryObj).length === 0) {
    return DefaultInitQuery;
  }
  return queryObj;
};
function ValidateSettingSection(_ref) {
  var workspaceId = _ref.workspaceId,
    connectorId = _ref.connectorId,
    onQueryChange = _ref.onQueryChange,
    initQuery = _ref.initQuery,
    sampleName = _ref.sampleName,
    callbacks = _ref.callbacks,
    disabled = _ref.disabled;
  var _useState = (0,react.useState)(initQuery),
    _useState2 = ValidateSettingSection_slicedToArray(_useState, 2),
    query = _useState2[0],
    setQuery = _useState2[1];
  var _useState3 = (0,react.useState)([]),
    _useState4 = ValidateSettingSection_slicedToArray(_useState3, 2),
    sourceTree = _useState4[0],
    setSourceTree = _useState4[1];
  var _useState5 = (0,react.useState)(),
    _useState6 = ValidateSettingSection_slicedToArray(_useState5, 2),
    errorMessage = _useState6[0],
    setErrorMessage = _useState6[1];
  react.useEffect(function () {
    loadConfig();
    loadSourceTree(sampleName);
  }, []);
  var loadConfig = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _data$items, _data2$items;
      var response, data, items, response2, data2, items2, error;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(initQuery && initQuery.length > 2)) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            _context.next = 4;
            return axios/* default */.A.get("src/getObject.rsb", {
              params: {
                "@json": true,
                "nonce": (0,utils/* securityRand */.ct)(),
                "Name": "Config",
                "WorkspaceId": workspaceId,
                "ConnectorId": connectorId
              }
            });
          case 4:
            response = _context.sent;
            data = response.data;
            items = (_data$items = data.items) !== null && _data$items !== void 0 ? _data$items : [];
            if (!(items.length > 0 && items[0].data)) {
              _context.next = 10;
              break;
            }
            try {
              setQuery(getQueryFromHTTP(items[0]));
            } catch (error) {
              setErrorMessage(error.message);
            }
            return _context.abrupt("return");
          case 10:
            _context.next = 12;
            return axios/* default */.A.get("src/getCollectionValue.rsb", {
              params: {
                "@json": true,
                "Name": "Port",
                "nonce": (0,utils/* securityRand */.ct)(),
                "WorkspaceId": workspaceId,
                "ConnectorId": connectorId,
                "Value": "validate.json"
              }
            });
          case 12:
            response2 = _context.sent;
            data2 = response2.data;
            items2 = (_data2$items = data2.items) !== null && _data2$items !== void 0 ? _data2$items : [];
            error = (0,utils/* getResultErrorMessage */.hz)(items2);
            if (error) {
              setErrorMessage(error);
            } else {
              try {
                if (items2.length > 0 && items2[0].data) {
                  setQuery(getQueryFromHTTP(items2[0]));
                } else {
                  setQuery(DefaultInitQuery);
                }
              } catch (error) {
                setErrorMessage(error.message);
              }
            }
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function loadConfig() {
      return _ref2.apply(this, arguments);
    };
  }();
  var loadSourceTree = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(sample) {
      var _data$items2;
      var response, data, items, error, _treeData$title, treeData;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (sample) {
              _context2.next = 4;
              break;
            }
            setErrorMessage(null);
            setSourceTree([]);
            return _context2.abrupt("return");
          case 4:
            _context2.next = 6;
            return axios/* default */.A.get("src/getSampleTree.rsb", {
              params: {
                "@json": true,
                "nonce": (0,utils/* securityRand */.ct)(),
                "Sample": sample,
                "WorkspaceId": workspaceId,
                "ConnectorId": connectorId
              }
            });
          case 6:
            response = _context2.sent;
            data = response.data;
            items = (_data$items2 = data.items) !== null && _data$items2 !== void 0 ? _data$items2 : [];
            error = (0,utils/* getResultErrorMessage */.hz)(items);
            if (!error) {
              _context2.next = 13;
              break;
            }
            setErrorMessage(error);
            return _context2.abrupt("return");
          case 13:
            try {
              if (items.length > 0 && items[0].treedata) {
                treeData = JSON.parse(items[0].treedata);
                if (((_treeData$title = treeData.title) === null || _treeData$title === void 0 ? void 0 : _treeData$title.length) > 0) {
                  setSourceTree([treeData]);
                }
              }
            } catch (error) {
              setErrorMessage(error.message);
            }
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function loadSourceTree(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  callbacks && (callbacks.setSampleName = function (sample) {
    return loadSourceTree(sample);
  });
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(DismissibleAlert/* default */.A, {
    type: "error",
    message: errorMessage,
    onClose: function onClose() {
      return setErrorMessage(null);
    }
  }), query && /*#__PURE__*/react.createElement(ValidateQueryBuilder, {
    initQuery: query,
    onChange: onQueryChange,
    candidateSourceTreeData: sourceTree,
    disabled: disabled
  }));
}
;// CONCATENATED MODULE: ./src/connectors/validate/index.jsx


(0,utils/* RegisterComponent */.dV)(ValidateSettingSection, "Validate.SettingSection");

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

/***/ 79396:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ invariant)
/* harmony export */ });
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */ function invariant(condition, format, ...args) {
    if (isProduction()) {
        if (format === undefined) {
            throw new Error('invariant requires an error message argument');
        }
    }
    if (!condition) {
        let error;
        if (format === undefined) {
            error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
            let argIndex = 0;
            error = new Error(format.replace(/%s/g, function() {
                return args[argIndex++];
            }));
            error.name = 'Invariant Violation';
        }
        error.framesToPop = 1 // we don't care about invariant's own frame
        ;
        throw error;
    }
}
function isProduction() {
    return typeof process !== 'undefined' && "production" === 'production';
}

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 31670:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ shallowEqual)
/* harmony export */ });
function shallowEqual(objA, objB, compare, compareContext) {
    let compareResult = compare ? compare.call(compareContext, objA, objB) : void 0;
    if (compareResult !== void 0) {
        return !!compareResult;
    }
    if (objA === objB) {
        return true;
    }
    if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB) {
        return false;
    }
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // Test for A's keys different from B.
    for(let idx = 0; idx < keysA.length; idx++){
        const key = keysA[idx];
        if (!bHasOwnProperty(key)) {
            return false;
        }
        const valueA = objA[key];
        const valueB = objB[key];
        compareResult = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (compareResult === false || compareResult === void 0 && valueA !== valueB) {
            return false;
        }
    }
    return true;
}

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 12288:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   qy: () => (/* binding */ QueryBuilderDnD)
/* harmony export */ });
/* unused harmony exports InlineCombinatorDnD, QueryBuilderDndWithoutProvider, RuleDnD, RuleGroupDnD */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_querybuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18149);
// src/InlineCombinatorDnD.tsx




// src/hooks/useInlineCombinatorDnD.ts


var useInlineCombinatorDnD = ({
  path,
  independentCombinators,
  useDrop
}) => {
  const dropRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [{ isOver, dropMonitorId }, drop] = useDrop(
    () => ({
      accept: ["rule", "ruleGroup"],
      canDrop: (item) => {
        const parentHoverPath = (0,react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .getParentPath */ ._6)(path);
        const parentItemPath = (0,react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .getParentPath */ ._6)(item.path);
        const hoverIndex = path[path.length - 1];
        const itemIndex = item.path[item.path.length - 1];
        return !((0,react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .isAncestor */ .QX)(item.path, path) || (0,react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .pathsAreEqual */ .P9)(item.path, path) || (0,react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .pathsAreEqual */ .P9)(parentHoverPath, parentItemPath) && hoverIndex - 1 === itemIndex || independentCombinators && (0,react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .pathsAreEqual */ .P9)(parentHoverPath, parentItemPath) && hoverIndex === itemIndex - 1);
      },
      collect: (monitor) => ({
        isOver: monitor.canDrop() && monitor.isOver(),
        dropMonitorId: monitor.getHandlerId() ?? "",
        dropEffect: (monitor.getDropResult() ?? {}).dropEffect
      }),
      drop: () => ({ type: "inlineCombinator", path })
    }),
    [path, independentCombinators]
  );
  drop(dropRef);
  return { dropRef, dropMonitorId, isOver };
};

// src/hooks/useReactDnD.ts


var didWarnEnabledDndWithoutReactDnD = false;
var useReactDnD = (dndParam) => {
  const [dnd, setDnd] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dndParam ?? null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let didCancel = false;
    const getDnD = async () => {
      const [reactDnD, reactDnDHTML5Be] = await Promise.all([
        Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 62339)).catch(() => null),
        Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 33631)).catch(() => null)
      ]);
      if (!didCancel) {
        if (reactDnD && reactDnDHTML5Be) {
          setDnd(() => ({ ...reactDnD, ...reactDnDHTML5Be }));
        } else {
          if (false) {}
        }
      }
    };
    if (!dnd) {
      getDnD();
    }
    return () => {
      didCancel = true;
    };
  }, []);
  return dnd;
};

// src/hooks/useRuleDnD.ts



// src/hooks/useDragCommon.ts

var useDragCommon = ({
  type,
  path,
  disabled,
  moveRule,
  // Unused for now
  // independentCombinators,
  useDrag
}) => useDrag(
  () => ({
    type,
    item: { path },
    canDrag: !disabled,
    collect: (monitor) => ({
      isDragging: !disabled && monitor.isDragging(),
      dragMonitorId: monitor.getHandlerId() ?? ""
    }),
    end(item, monitor) {
      const dropResult = monitor.getDropResult();
      if (!dropResult)
        return;
      const parentHoverPath = (0,react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .getParentPath */ ._6)(dropResult.path);
      const hoverIndex = dropResult.path[dropResult.path.length - 1];
      const destinationPath = dropResult.type === "ruleGroup" ? [...dropResult.path, 0] : dropResult.type === "inlineCombinator" ? [...parentHoverPath, hoverIndex] : [...parentHoverPath, hoverIndex + 1];
      moveRule(item.path, destinationPath, dropResult.dropEffect === "copy");
    }
  }),
  [disabled, path]
);

// src/hooks/useRuleDnD.ts
var useRuleDnD = ({
  path,
  disabled,
  independentCombinators,
  moveRule,
  useDrag,
  useDrop
}) => {
  const dndRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const dragRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [{ isDragging, dragMonitorId }, drag, preview] = useDragCommon({
    type: "rule",
    path,
    disabled,
    independentCombinators,
    moveRule,
    useDrag
  });
  const [{ isOver, dropMonitorId, dropEffect }, drop] = useDrop(
    () => ({
      accept: ["rule", "ruleGroup"],
      canDrop: (item) => {
        const parentHoverPath = (0,react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .getParentPath */ ._6)(path);
        const parentItemPath = (0,react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .getParentPath */ ._6)(item.path);
        const hoverIndex = path[path.length - 1];
        const itemIndex = item.path[item.path.length - 1];
        return !((0,react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .isAncestor */ .QX)(item.path, path) || (0,react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .pathsAreEqual */ .P9)(parentHoverPath, parentItemPath) && (hoverIndex === itemIndex || hoverIndex === itemIndex - 1 || independentCombinators && hoverIndex === itemIndex - 2));
      },
      collect: (monitor) => ({
        isOver: monitor.canDrop() && monitor.isOver(),
        dropMonitorId: monitor.getHandlerId() ?? "",
        dropEffect: (monitor.getDropResult() ?? {}).dropEffect
      }),
      // `dropEffect` gets added automatically to the object returned from `drop`:
      drop: () => ({ type: "rule", path })
    }),
    [disabled, independentCombinators, moveRule, path]
  );
  drag(dragRef);
  preview(drop(dndRef));
  return { isDragging, dragMonitorId, isOver, dropMonitorId, dndRef, dragRef, dropEffect };
};

// src/hooks/useRuleGroupDnD.ts


var useRuleGroupDnD = ({
  disabled,
  path,
  independentCombinators,
  moveRule,
  useDrag,
  useDrop
}) => {
  const previewRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const dragRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const dropRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [{ isDragging, dragMonitorId }, drag, preview] = useDragCommon({
    type: "ruleGroup",
    path,
    disabled,
    independentCombinators,
    moveRule,
    useDrag
  });
  const [{ isOver, dropMonitorId, dropEffect }, drop] = useDrop(
    () => ({
      accept: ["rule", "ruleGroup"],
      canDrop: (item) => {
        if (disabled)
          return false;
        const parentItemPath = (0,react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .getParentPath */ ._6)(item.path);
        const itemIndex = item.path[item.path.length - 1];
        return !((0,react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .isAncestor */ .QX)(item.path, path) || (0,react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .pathsAreEqual */ .P9)(path, parentItemPath) && itemIndex === 0 || (0,react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .pathsAreEqual */ .P9)(path, item.path));
      },
      collect: (monitor) => ({
        isOver: monitor.canDrop() && monitor.isOver(),
        dropMonitorId: monitor.getHandlerId() ?? "",
        dropEffect: (monitor.getDropResult() ?? {}).dropEffect
      }),
      // `dropEffect` gets added automatically to the object returned from `drop`:
      drop: (_item, monitor) => monitor.getDropResult() ?? { type: "ruleGroup", path }
    }),
    [disabled, moveRule, path]
  );
  if (path.length > 0) {
    drag(dragRef);
    preview(previewRef);
  }
  drop(dropRef);
  return {
    isDragging,
    dragMonitorId,
    isOver,
    dropMonitorId,
    previewRef,
    dragRef,
    dropRef,
    dropEffect
  };
};

// src/QueryBuilderDndContext.ts


var { rule, ruleGroup, combinatorSelector } = react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .defaultControlElements */ .YM;
var QueryBuilderDndContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  baseControls: { rule, ruleGroup, combinatorSelector }
});
QueryBuilderDndContext.displayName = "QueryBuilderDndContext";

// src/InlineCombinatorDnD.tsx
var InlineCombinatorDnD = ({
  component: CombinatorSelectorComponent,
  path,
  independentCombinators,
  ...props
}) => {
  const { useDrop } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(QueryBuilderDndContext);
  const { dropRef, dropMonitorId, isOver } = useInlineCombinatorDnD({
    path,
    independentCombinators,
    useDrop
  });
  const dndOver = isOver ? react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .standardClassnames */ .q4.dndOver : "";
  const wrapperClassName = `${react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .standardClassnames */ .q4.betweenRules}${dndOver ? ` ${dndOver}` : ""}`;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      key: "dnd",
      ref: dropRef,
      className: wrapperClassName,
      "data-dropmonitorid": dropMonitorId,
      "data-testid": react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .TestID */ .W.inlineCombinator
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(CombinatorSelectorComponent, { ...props, path, testID: react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .TestID */ .W.combinators })
  );
};
InlineCombinatorDnD.displayName = "InlineCombinatorDnD";

// src/QueryBuilderDnD.tsx




// src/RuleDnD.tsx


var RuleDnD = (props) => {
  const rqbDndContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(QueryBuilderDndContext);
  const { useDrag, useDrop } = rqbDndContext;
  const {
    path,
    disabled: disabledProp,
    parentDisabled,
    actions: { moveRule },
    schema: { independentCombinators }
  } = props;
  const disabled = !!parentDisabled || !!disabledProp;
  const dndRefs = useRuleDnD({
    path,
    disabled,
    independentCombinators,
    moveRule,
    useDrag,
    useDrop
  });
  const { rule: BaseRuleComponent } = rqbDndContext.baseControls;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(QueryBuilderDndContext.Provider, { value: rqbDndContext }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(BaseRuleComponent, { ...props, ...dndRefs }));
};
RuleDnD.displayName = "RuleDnD";

// src/RuleGroupDnD.tsx


var RuleGroupDnD = (props) => {
  const rqbDndContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(QueryBuilderDndContext);
  const { useDrag, useDrop } = rqbDndContext;
  const {
    path,
    disabled: disabledProp,
    parentDisabled,
    actions: { moveRule },
    schema: { independentCombinators }
  } = props;
  const disabled = !!parentDisabled || !!disabledProp;
  const dndRefs = useRuleGroupDnD({
    disabled,
    path,
    independentCombinators,
    moveRule,
    useDrag,
    useDrop
  });
  const { ruleGroup: BaseRuleGroupComponent } = rqbDndContext.baseControls;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(BaseRuleGroupComponent, { ...props, ...dndRefs });
};
RuleGroupDnD.displayName = "RuleGroupDnD";

// src/QueryBuilderDnD.tsx
var QueryBuilderDnD = (props) => {
  const {
    controlClassnames,
    controlElements,
    debugMode,
    enableDragAndDrop: enableDragAndDropProp,
    enableMountQueryChange,
    translations
  } = props;
  const rqbContext = (0,react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .useMergedContext */ .JZ)({
    controlClassnames,
    controlElements,
    debugMode,
    enableDragAndDrop: enableDragAndDropProp ?? true,
    enableMountQueryChange,
    translations: translations ?? {}
  });
  const { enableDragAndDrop } = rqbContext;
  const dnd = useReactDnD(props.dnd);
  const key = enableDragAndDrop && dnd ? "dnd" : "no-dnd";
  if (!enableDragAndDrop || !dnd) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .QueryBuilderContext */ .PD.Provider,
      {
        key,
        value: { ...rqbContext, enableDragAndDrop: false, debugMode }
      },
      props.children
    );
  }
  const { DndProvider, HTML5Backend } = dnd;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DndProvider, { key, backend: HTML5Backend, debugMode }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .QueryBuilderContext */ .PD.Provider,
    {
      key,
      value: { ...rqbContext, enableDragAndDrop, debugMode }
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(QueryBuilderDndWithoutProvider, { dnd }, props.children)
  ));
};
QueryBuilderDnD.displayName = "QueryBuilderDnD";
var QueryBuilderDndWithoutProvider = (props) => {
  const rqbContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .QueryBuilderContext */ .PD);
  const rqbDndContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(QueryBuilderDndContext);
  const dnd = useReactDnD(props.dnd);
  const debugMode = (0,react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .usePreferProp */ .$_)(false, props.debugMode, rqbContext.debugMode);
  const enableDragAndDrop = (0,react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .usePreferProp */ .$_)(
    true,
    props.enableDragAndDrop,
    rqbContext.enableDragAndDrop
  );
  const key = enableDragAndDrop && dnd ? "dnd" : "no-dnd";
  if (!enableDragAndDrop || !dnd) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .QueryBuilderContext */ .PD.Provider,
      {
        key,
        value: { ...rqbContext, enableDragAndDrop: false, debugMode }
      },
      props.children
    );
  }
  const { DndContext, useDrag, useDrop } = dnd;
  const baseControls = {
    rule: props.controlElements?.rule ?? rqbContext.controlElements?.rule ?? rqbDndContext.baseControls.rule,
    ruleGroup: props.controlElements?.ruleGroup ?? rqbContext.controlElements?.ruleGroup ?? rqbDndContext.baseControls.ruleGroup,
    combinatorSelector: props.controlElements?.combinatorSelector ?? rqbContext.controlElements?.combinatorSelector ?? rqbDndContext.baseControls.combinatorSelector
  };
  const newContext = {
    ...rqbContext,
    controlElements: {
      ...rqbContext.controlElements,
      ruleGroup: RuleGroupDnD,
      rule: RuleDnD,
      inlineCombinator: InlineCombinatorDnD
    }
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DndContext.Consumer, { key }, () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_querybuilder__WEBPACK_IMPORTED_MODULE_1__/* .QueryBuilderContext */ .PD.Provider, { key, value: newContext }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(QueryBuilderDndContext.Provider, { value: { useDrag, useDrop, baseControls } }, props.children)));
};
QueryBuilderDndWithoutProvider.displayName = "QueryBuilderDndWithoutProvider";

//# sourceMappingURL=react-querybuilder_dnd.mjs.map

/***/ }),

/***/ 40360:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  b: () => (/* binding */ createDragDropManager)
});

;// CONCATENATED MODULE: ./node_modules/redux/es/redux.js


/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (false) {}

  return typeOfVal;
}

/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error( true ? formatProdErrorMessage(0) : 0);
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(1) : 0);
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error( true ? formatProdErrorMessage(2) : 0);
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(3) : 0);
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error( true ? formatProdErrorMessage(4) : 0);
    }

    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(5) : 0);
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error( true ? formatProdErrorMessage(6) : 0);
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( true ? formatProdErrorMessage(7) : 0);
    }

    if (typeof action.type === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(8) : 0);
    }

    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(9) : 0);
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(10) : 0);
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error( true ? formatProdErrorMessage(11) : 0);
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

var legacy_createStore = (/* unused pure expression or super */ null && (createStore));

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(12) : 0);
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(13) : 0);
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error( true ? formatProdErrorMessage(14) : 0);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error( true ? formatProdErrorMessage(16) : 0);
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error( true ? formatProdErrorMessage(15) : 0);
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread(_objectSpread({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}



// EXTERNAL MODULE: ./node_modules/@react-dnd/invariant/dist/index.js
var dist = __webpack_require__(79396);
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/utils/js_utils.js
// cheap lodash replacements
/**
 * drop-in replacement for _.get
 * @param obj
 * @param path
 * @param defaultValue
 */ function get(obj, path, defaultValue) {
    return path.split('.').reduce((a, c)=>a && a[c] ? a[c] : defaultValue || null
    , obj);
}
/**
 * drop-in replacement for _.without
 */ function without(items, item) {
    return items.filter((i)=>i !== item
    );
}
/**
 * drop-in replacement for _.isString
 * @param input
 */ function isString(input) {
    return typeof input === 'string';
}
/**
 * drop-in replacement for _.isString
 * @param input
 */ function isObject(input) {
    return typeof input === 'object';
}
/**
 * replacement for _.xor
 * @param itemsA
 * @param itemsB
 */ function xor(itemsA, itemsB) {
    const map = new Map();
    const insertItem = (item)=>{
        map.set(item, map.has(item) ? map.get(item) + 1 : 1);
    };
    itemsA.forEach(insertItem);
    itemsB.forEach(insertItem);
    const result = [];
    map.forEach((count, key)=>{
        if (count === 1) {
            result.push(key);
        }
    });
    return result;
}
/**
 * replacement for _.intersection
 * @param itemsA
 * @param itemsB
 */ function intersection(itemsA, itemsB) {
    return itemsA.filter((t)=>itemsB.indexOf(t) > -1
    );
}

//# sourceMappingURL=js_utils.js.map
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/actions/dragDrop/types.js
const INIT_COORDS = 'dnd-core/INIT_COORDS';
const BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
const PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
const HOVER = 'dnd-core/HOVER';
const DROP = 'dnd-core/DROP';
const END_DRAG = 'dnd-core/END_DRAG';

//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/actions/dragDrop/local/setClientOffset.js

function setClientOffset(clientOffset, sourceClientOffset) {
    return {
        type: INIT_COORDS,
        payload: {
            sourceClientOffset: sourceClientOffset || null,
            clientOffset: clientOffset || null
        }
    };
}

//# sourceMappingURL=setClientOffset.js.map
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/actions/dragDrop/beginDrag.js




const ResetCoordinatesAction = {
    type: INIT_COORDS,
    payload: {
        clientOffset: null,
        sourceClientOffset: null
    }
};
function createBeginDrag(manager) {
    return function beginDrag(sourceIds = [], options = {
        publishSource: true
    }) {
        const { publishSource =true , clientOffset , getSourceClientOffset ,  } = options;
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        // Initialize the coordinates using the client offset
        manager.dispatch(setClientOffset(clientOffset));
        verifyInvariants(sourceIds, monitor, registry);
        // Get the draggable source
        const sourceId = getDraggableSource(sourceIds, monitor);
        if (sourceId == null) {
            manager.dispatch(ResetCoordinatesAction);
            return;
        }
        // Get the source client offset
        let sourceClientOffset = null;
        if (clientOffset) {
            if (!getSourceClientOffset) {
                throw new Error('getSourceClientOffset must be defined');
            }
            verifyGetSourceClientOffsetIsFunction(getSourceClientOffset);
            sourceClientOffset = getSourceClientOffset(sourceId);
        }
        // Initialize the full coordinates
        manager.dispatch(setClientOffset(clientOffset, sourceClientOffset));
        const source = registry.getSource(sourceId);
        const item = source.beginDrag(monitor, sourceId);
        // If source.beginDrag returns null, this is an indicator to cancel the drag
        if (item == null) {
            return undefined;
        }
        verifyItemIsObject(item);
        registry.pinSource(sourceId);
        const itemType = registry.getSourceType(sourceId);
        return {
            type: BEGIN_DRAG,
            payload: {
                itemType,
                item,
                sourceId,
                clientOffset: clientOffset || null,
                sourceClientOffset: sourceClientOffset || null,
                isSourcePublic: !!publishSource
            }
        };
    };
}
function verifyInvariants(sourceIds, monitor, registry) {
    (0,dist/* invariant */.V)(!monitor.isDragging(), 'Cannot call beginDrag while dragging.');
    sourceIds.forEach(function(sourceId) {
        (0,dist/* invariant */.V)(registry.getSource(sourceId), 'Expected sourceIds to be registered.');
    });
}
function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset) {
    (0,dist/* invariant */.V)(typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
}
function verifyItemIsObject(item) {
    (0,dist/* invariant */.V)(isObject(item), 'Item must be an object.');
}
function getDraggableSource(sourceIds, monitor) {
    let sourceId = null;
    for(let i = sourceIds.length - 1; i >= 0; i--){
        if (monitor.canDragSource(sourceIds[i])) {
            sourceId = sourceIds[i];
            break;
        }
    }
    return sourceId;
}

//# sourceMappingURL=beginDrag.js.map
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/actions/dragDrop/drop.js
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function drop_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}



function createDrop(manager) {
    return function drop(options = {}) {
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        drop_verifyInvariants(monitor);
        const targetIds = getDroppableTargets(monitor);
        // Multiple actions are dispatched here, which is why this doesn't return an action
        targetIds.forEach((targetId, index)=>{
            const dropResult = determineDropResult(targetId, index, registry, monitor);
            const action = {
                type: DROP,
                payload: {
                    dropResult: drop_objectSpread({}, options, dropResult)
                }
            };
            manager.dispatch(action);
        });
    };
}
function drop_verifyInvariants(monitor) {
    (0,dist/* invariant */.V)(monitor.isDragging(), 'Cannot call drop while not dragging.');
    (0,dist/* invariant */.V)(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');
}
function determineDropResult(targetId, index, registry, monitor) {
    const target = registry.getTarget(targetId);
    let dropResult = target ? target.drop(monitor, targetId) : undefined;
    verifyDropResultType(dropResult);
    if (typeof dropResult === 'undefined') {
        dropResult = index === 0 ? {} : monitor.getDropResult();
    }
    return dropResult;
}
function verifyDropResultType(dropResult) {
    (0,dist/* invariant */.V)(typeof dropResult === 'undefined' || isObject(dropResult), 'Drop result must either be an object or undefined.');
}
function getDroppableTargets(monitor) {
    const targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
    targetIds.reverse();
    return targetIds;
}

//# sourceMappingURL=drop.js.map
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/actions/dragDrop/endDrag.js


function createEndDrag(manager) {
    return function endDrag() {
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        verifyIsDragging(monitor);
        const sourceId = monitor.getSourceId();
        if (sourceId != null) {
            const source = registry.getSource(sourceId, true);
            source.endDrag(monitor, sourceId);
            registry.unpinSource();
        }
        return {
            type: END_DRAG
        };
    };
}
function verifyIsDragging(monitor) {
    (0,dist/* invariant */.V)(monitor.isDragging(), 'Cannot call endDrag while not dragging.');
}

//# sourceMappingURL=endDrag.js.map
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/utils/matchesType.js
function matchesType(targetType, draggedItemType) {
    if (draggedItemType === null) {
        return targetType === null;
    }
    return Array.isArray(targetType) ? targetType.some((t)=>t === draggedItemType
    ) : targetType === draggedItemType;
}

//# sourceMappingURL=matchesType.js.map
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/actions/dragDrop/hover.js



function createHover(manager) {
    return function hover(targetIdsArg, { clientOffset  } = {}) {
        verifyTargetIdsIsArray(targetIdsArg);
        const targetIds = targetIdsArg.slice(0);
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        const draggedItemType = monitor.getItemType();
        removeNonMatchingTargetIds(targetIds, registry, draggedItemType);
        checkInvariants(targetIds, monitor, registry);
        hoverAllTargets(targetIds, monitor, registry);
        return {
            type: HOVER,
            payload: {
                targetIds,
                clientOffset: clientOffset || null
            }
        };
    };
}
function verifyTargetIdsIsArray(targetIdsArg) {
    (0,dist/* invariant */.V)(Array.isArray(targetIdsArg), 'Expected targetIds to be an array.');
}
function checkInvariants(targetIds, monitor, registry) {
    (0,dist/* invariant */.V)(monitor.isDragging(), 'Cannot call hover while not dragging.');
    (0,dist/* invariant */.V)(!monitor.didDrop(), 'Cannot call hover after drop.');
    for(let i = 0; i < targetIds.length; i++){
        const targetId = targetIds[i];
        (0,dist/* invariant */.V)(targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');
        const target = registry.getTarget(targetId);
        (0,dist/* invariant */.V)(target, 'Expected targetIds to be registered.');
    }
}
function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
    // Remove those targetIds that don't match the targetType.  This
    // fixes shallow isOver which would only be non-shallow because of
    // non-matching targets.
    for(let i = targetIds.length - 1; i >= 0; i--){
        const targetId = targetIds[i];
        const targetType = registry.getTargetType(targetId);
        if (!matchesType(targetType, draggedItemType)) {
            targetIds.splice(i, 1);
        }
    }
}
function hoverAllTargets(targetIds, monitor, registry) {
    // Finally call hover on all matching targets.
    targetIds.forEach(function(targetId) {
        const target = registry.getTarget(targetId);
        target.hover(monitor, targetId);
    });
}

//# sourceMappingURL=hover.js.map
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/actions/dragDrop/publishDragSource.js

function createPublishDragSource(manager) {
    return function publishDragSource() {
        const monitor = manager.getMonitor();
        if (monitor.isDragging()) {
            return {
                type: PUBLISH_DRAG_SOURCE
            };
        }
        return;
    };
}

//# sourceMappingURL=publishDragSource.js.map
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/actions/dragDrop/index.js






function createDragDropActions(manager) {
    return {
        beginDrag: createBeginDrag(manager),
        publishDragSource: createPublishDragSource(manager),
        hover: createHover(manager),
        drop: createDrop(manager),
        endDrag: createEndDrag(manager)
    };
}

//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/classes/DragDropManagerImpl.js

class DragDropManagerImpl {
    receiveBackend(backend) {
        this.backend = backend;
    }
    getMonitor() {
        return this.monitor;
    }
    getBackend() {
        return this.backend;
    }
    getRegistry() {
        return this.monitor.registry;
    }
    getActions() {
        /* eslint-disable-next-line @typescript-eslint/no-this-alias */ const manager = this;
        const { dispatch  } = this.store;
        function bindActionCreator(actionCreator) {
            return (...args)=>{
                const action = actionCreator.apply(manager, args);
                if (typeof action !== 'undefined') {
                    dispatch(action);
                }
            };
        }
        const actions = createDragDropActions(this);
        return Object.keys(actions).reduce((boundActions, key)=>{
            const action = actions[key];
            boundActions[key] = bindActionCreator(action);
            return boundActions;
        }, {});
    }
    dispatch(action) {
        this.store.dispatch(action);
    }
    constructor(store, monitor){
        this.isSetUp = false;
        this.handleRefCountChange = ()=>{
            const shouldSetUp = this.store.getState().refCount > 0;
            if (this.backend) {
                if (shouldSetUp && !this.isSetUp) {
                    this.backend.setup();
                    this.isSetUp = true;
                } else if (!shouldSetUp && this.isSetUp) {
                    this.backend.teardown();
                    this.isSetUp = false;
                }
            }
        };
        this.store = store;
        this.monitor = monitor;
        store.subscribe(this.handleRefCountChange);
    }
}

//# sourceMappingURL=DragDropManagerImpl.js.map
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/utils/coords.js
/**
 * Coordinate addition
 * @param a The first coordinate
 * @param b The second coordinate
 */ function add(a, b) {
    return {
        x: a.x + b.x,
        y: a.y + b.y
    };
}
/**
 * Coordinate subtraction
 * @param a The first coordinate
 * @param b The second coordinate
 */ function subtract(a, b) {
    return {
        x: a.x - b.x,
        y: a.y - b.y
    };
}
/**
 * Returns the cartesian distance of the drag source component's position, based on its position
 * at the time when the current drag operation has started, and the movement difference.
 *
 * Returns null if no item is being dragged.
 *
 * @param state The offset state to compute from
 */ function getSourceClientOffset(state) {
    const { clientOffset , initialClientOffset , initialSourceClientOffset  } = state;
    if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
        return null;
    }
    return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
/**
 * Determines the x,y offset between the client offset and the initial client offset
 *
 * @param state The offset state to compute from
 */ function getDifferenceFromInitialOffset(state) {
    const { clientOffset , initialClientOffset  } = state;
    if (!clientOffset || !initialClientOffset) {
        return null;
    }
    return subtract(clientOffset, initialClientOffset);
}

//# sourceMappingURL=coords.js.map
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/utils/dirtiness.js

const NONE = [];
const ALL = [];
NONE.__IS_NONE__ = true;
ALL.__IS_ALL__ = true;
/**
 * Determines if the given handler IDs are dirty or not.
 *
 * @param dirtyIds The set of dirty handler ids
 * @param handlerIds The set of handler ids to check
 */ function areDirty(dirtyIds, handlerIds) {
    if (dirtyIds === NONE) {
        return false;
    }
    if (dirtyIds === ALL || typeof handlerIds === 'undefined') {
        return true;
    }
    const commonIds = intersection(handlerIds, dirtyIds);
    return commonIds.length > 0;
}

//# sourceMappingURL=dirtiness.js.map
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/classes/DragDropMonitorImpl.js




class DragDropMonitorImpl {
    subscribeToStateChange(listener, options = {}) {
        const { handlerIds  } = options;
        (0,dist/* invariant */.V)(typeof listener === 'function', 'listener must be a function.');
        (0,dist/* invariant */.V)(typeof handlerIds === 'undefined' || Array.isArray(handlerIds), 'handlerIds, when specified, must be an array of strings.');
        let prevStateId = this.store.getState().stateId;
        const handleChange = ()=>{
            const state = this.store.getState();
            const currentStateId = state.stateId;
            try {
                const canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !areDirty(state.dirtyHandlerIds, handlerIds);
                if (!canSkipListener) {
                    listener();
                }
            } finally{
                prevStateId = currentStateId;
            }
        };
        return this.store.subscribe(handleChange);
    }
    subscribeToOffsetChange(listener) {
        (0,dist/* invariant */.V)(typeof listener === 'function', 'listener must be a function.');
        let previousState = this.store.getState().dragOffset;
        const handleChange = ()=>{
            const nextState = this.store.getState().dragOffset;
            if (nextState === previousState) {
                return;
            }
            previousState = nextState;
            listener();
        };
        return this.store.subscribe(handleChange);
    }
    canDragSource(sourceId) {
        if (!sourceId) {
            return false;
        }
        const source = this.registry.getSource(sourceId);
        (0,dist/* invariant */.V)(source, `Expected to find a valid source. sourceId=${sourceId}`);
        if (this.isDragging()) {
            return false;
        }
        return source.canDrag(this, sourceId);
    }
    canDropOnTarget(targetId) {
        // undefined on initial render
        if (!targetId) {
            return false;
        }
        const target = this.registry.getTarget(targetId);
        (0,dist/* invariant */.V)(target, `Expected to find a valid target. targetId=${targetId}`);
        if (!this.isDragging() || this.didDrop()) {
            return false;
        }
        const targetType = this.registry.getTargetType(targetId);
        const draggedItemType = this.getItemType();
        return matchesType(targetType, draggedItemType) && target.canDrop(this, targetId);
    }
    isDragging() {
        return Boolean(this.getItemType());
    }
    isDraggingSource(sourceId) {
        // undefined on initial render
        if (!sourceId) {
            return false;
        }
        const source = this.registry.getSource(sourceId, true);
        (0,dist/* invariant */.V)(source, `Expected to find a valid source. sourceId=${sourceId}`);
        if (!this.isDragging() || !this.isSourcePublic()) {
            return false;
        }
        const sourceType = this.registry.getSourceType(sourceId);
        const draggedItemType = this.getItemType();
        if (sourceType !== draggedItemType) {
            return false;
        }
        return source.isDragging(this, sourceId);
    }
    isOverTarget(targetId, options = {
        shallow: false
    }) {
        // undefined on initial render
        if (!targetId) {
            return false;
        }
        const { shallow  } = options;
        if (!this.isDragging()) {
            return false;
        }
        const targetType = this.registry.getTargetType(targetId);
        const draggedItemType = this.getItemType();
        if (draggedItemType && !matchesType(targetType, draggedItemType)) {
            return false;
        }
        const targetIds = this.getTargetIds();
        if (!targetIds.length) {
            return false;
        }
        const index = targetIds.indexOf(targetId);
        if (shallow) {
            return index === targetIds.length - 1;
        } else {
            return index > -1;
        }
    }
    getItemType() {
        return this.store.getState().dragOperation.itemType;
    }
    getItem() {
        return this.store.getState().dragOperation.item;
    }
    getSourceId() {
        return this.store.getState().dragOperation.sourceId;
    }
    getTargetIds() {
        return this.store.getState().dragOperation.targetIds;
    }
    getDropResult() {
        return this.store.getState().dragOperation.dropResult;
    }
    didDrop() {
        return this.store.getState().dragOperation.didDrop;
    }
    isSourcePublic() {
        return Boolean(this.store.getState().dragOperation.isSourcePublic);
    }
    getInitialClientOffset() {
        return this.store.getState().dragOffset.initialClientOffset;
    }
    getInitialSourceClientOffset() {
        return this.store.getState().dragOffset.initialSourceClientOffset;
    }
    getClientOffset() {
        return this.store.getState().dragOffset.clientOffset;
    }
    getSourceClientOffset() {
        return getSourceClientOffset(this.store.getState().dragOffset);
    }
    getDifferenceFromInitialOffset() {
        return getDifferenceFromInitialOffset(this.store.getState().dragOffset);
    }
    constructor(store, registry){
        this.store = store;
        this.registry = registry;
    }
}

//# sourceMappingURL=DragDropMonitorImpl.js.map
;// CONCATENATED MODULE: ./node_modules/@react-dnd/asap/dist/makeRequestCall.js
// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
/* globals self */ const scope = typeof global !== 'undefined' ? global : self;
const BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        const timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        const intervalHandle = setInterval(handleTimer, 50);
        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}
// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    let toggle = 1;
    const observer = new BrowserMutationObserver(callback);
    const node = document.createTextNode('');
    observer.observe(node, {
        characterData: true
    });
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}
const makeRequestCall = typeof BrowserMutationObserver === 'function' ? // reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
makeRequestCallFromMutationObserver : // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.
// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396
// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
makeRequestCallFromTimer;

//# sourceMappingURL=makeRequestCall.js.map
;// CONCATENATED MODULE: ./node_modules/@react-dnd/asap/dist/AsapQueue.js
/* eslint-disable no-restricted-globals, @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars, @typescript-eslint/no-non-null-assertion */ 
class AsapQueue {
    // Use the fastest means possible to execute a task in its own turn, with
    // priority over other events including IO, animation, reflow, and redraw
    // events in browsers.
    //
    // An exception thrown by a task will permanently interrupt the processing of
    // subsequent tasks. The higher level `asap` function ensures that if an
    // exception is thrown by a task, that the task queue will continue flushing as
    // soon as possible, but if you use `rawAsap` directly, you are responsible to
    // either ensure that no exceptions are thrown from your task, or to manually
    // call `rawAsap.requestFlush` if an exception is thrown.
    enqueueTask(task) {
        const { queue: q , requestFlush  } = this;
        if (!q.length) {
            requestFlush();
            this.flushing = true;
        }
        // Equivalent to push, but avoids a function call.
        q[q.length] = task;
    }
    constructor(){
        this.queue = [];
        // We queue errors to ensure they are thrown in right order (FIFO).
        // Array-as-queue is good enough here, since we are just dealing with exceptions.
        this.pendingErrors = [];
        // Once a flush has been requested, no further calls to `requestFlush` are
        // necessary until the next `flush` completes.
        // @ts-ignore
        this.flushing = false;
        // The position of the next task to execute in the task queue. This is
        // preserved between calls to `flush` so that it can be resumed if
        // a task throws an exception.
        this.index = 0;
        // If a task schedules additional tasks recursively, the task queue can grow
        // unbounded. To prevent memory exhaustion, the task queue will periodically
        // truncate already-completed tasks.
        this.capacity = 1024;
        // The flush function processes all tasks that have been scheduled with
        // `rawAsap` unless and until one of those tasks throws an exception.
        // If a task throws an exception, `flush` ensures that its state will remain
        // consistent and will resume where it left off when called again.
        // However, `flush` does not make any arrangements to be called again if an
        // exception is thrown.
        this.flush = ()=>{
            const { queue: q  } = this;
            while(this.index < q.length){
                const currentIndex = this.index;
                // Advance the index before calling the task. This ensures that we will
                // begin flushing on the next task the task throws an error.
                this.index++;
                q[currentIndex].call();
                // Prevent leaking memory for long chains of recursive calls to `asap`.
                // If we call `asap` within tasks scheduled by `asap`, the queue will
                // grow, but to avoid an O(n) walk for every task we execute, we don't
                // shift tasks off the queue after they have been executed.
                // Instead, we periodically shift 1024 tasks off the queue.
                if (this.index > this.capacity) {
                    // Manually shift all values starting at the index back to the
                    // beginning of the queue.
                    for(let scan = 0, newLength = q.length - this.index; scan < newLength; scan++){
                        q[scan] = q[scan + this.index];
                    }
                    q.length -= this.index;
                    this.index = 0;
                }
            }
            q.length = 0;
            this.index = 0;
            this.flushing = false;
        };
        // In a web browser, exceptions are not fatal. However, to avoid
        // slowing down the queue of pending tasks, we rethrow the error in a
        // lower priority turn.
        this.registerPendingError = (err)=>{
            this.pendingErrors.push(err);
            this.requestErrorThrow();
        };
        // `requestFlush` requests that the high priority event queue be flushed as
        // soon as possible.
        // This is useful to prevent an error thrown in a task from stalling the event
        // queue if the exception handled by Node.js’s
        // `process.on("uncaughtException")` or by a domain.
        // `requestFlush` is implemented using a strategy based on data collected from
        // every available SauceLabs Selenium web driver worker at time of writing.
        // https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
        this.requestFlush = makeRequestCall(this.flush);
        this.requestErrorThrow = makeRequestCallFromTimer(()=>{
            // Throw first error
            if (this.pendingErrors.length) {
                throw this.pendingErrors.shift();
            }
        });
    }
} // The message channel technique was discovered by Malte Ubl and was the
 // original foundation for this library.
 // http://www.nonblocking.io/2011/06/windownexttick.html
 // Safari 6.0.5 (at least) intermittently fails to create message ports on a
 // page's first load. Thankfully, this version of Safari supports
 // MutationObservers, so we don't need to fall back in that case.
 // function makeRequestCallFromMessageChannel(callback) {
 //     var channel = new MessageChannel();
 //     channel.port1.onmessage = callback;
 //     return function requestCall() {
 //         channel.port2.postMessage(0);
 //     };
 // }
 // For reasons explained above, we are also unable to use `setImmediate`
 // under any circumstances.
 // Even if we were, there is another bug in Internet Explorer 10.
 // It is not sufficient to assign `setImmediate` to `requestFlush` because
 // `setImmediate` must be called *by name* and therefore must be wrapped in a
 // closure.
 // Never forget.
 // function makeRequestCallFromSetImmediate(callback) {
 //     return function requestCall() {
 //         setImmediate(callback);
 //     };
 // }
 // Safari 6.0 has a problem where timers will get lost while the user is
 // scrolling. This problem does not impact ASAP because Safari 6.0 supports
 // mutation observers, so that implementation is used instead.
 // However, if we ever elect to use timers in Safari, the prevalent work-around
 // is to add a scroll event listener that calls for a flush.
 // `setTimeout` does not call the passed callback if the delay is less than
 // approximately 7 in web workers in Firefox 8 through 18, and sometimes not
 // even then.
 // This is for `asap.js` only.
 // Its name will be periodically randomized to break any code that depends on
 // // its existence.
 // rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer
 // ASAP was originally a nextTick shim included in Q. This was factored out
 // into this ASAP package. It was later adapted to RSVP which made further
 // amendments. These decisions, particularly to marginalize MessageChannel and
 // to capture the MutationObserver implementation in a closure, were integrated
 // back into ASAP proper.
 // https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

//# sourceMappingURL=AsapQueue.js.map
;// CONCATENATED MODULE: ./node_modules/@react-dnd/asap/dist/RawTask.js
// `call`, just like a function.
class RawTask {
    call() {
        try {
            this.task && this.task();
        } catch (error) {
            this.onError(error);
        } finally{
            this.task = null;
            this.release(this);
        }
    }
    constructor(onError, release){
        this.onError = onError;
        this.release = release;
        this.task = null;
    }
}

//# sourceMappingURL=RawTask.js.map
;// CONCATENATED MODULE: ./node_modules/@react-dnd/asap/dist/TaskFactory.js

class TaskFactory {
    create(task) {
        const tasks = this.freeTasks;
        const t1 = tasks.length ? tasks.pop() : new RawTask(this.onError, (t)=>tasks[tasks.length] = t
        );
        t1.task = task;
        return t1;
    }
    constructor(onError){
        this.onError = onError;
        this.freeTasks = [];
    }
}

//# sourceMappingURL=TaskFactory.js.map
;// CONCATENATED MODULE: ./node_modules/@react-dnd/asap/dist/asap.js


const asapQueue = new AsapQueue();
const taskFactory = new TaskFactory(asapQueue.registerPendingError);
/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */ function asap(task) {
    asapQueue.enqueueTask(taskFactory.create(task));
}

//# sourceMappingURL=asap.js.map
;// CONCATENATED MODULE: ./node_modules/@react-dnd/asap/dist/index.js





//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/actions/registry.js
const ADD_SOURCE = 'dnd-core/ADD_SOURCE';
const ADD_TARGET = 'dnd-core/ADD_TARGET';
const REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
const REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';
function addSource(sourceId) {
    return {
        type: ADD_SOURCE,
        payload: {
            sourceId
        }
    };
}
function addTarget(targetId) {
    return {
        type: ADD_TARGET,
        payload: {
            targetId
        }
    };
}
function removeSource(sourceId) {
    return {
        type: REMOVE_SOURCE,
        payload: {
            sourceId
        }
    };
}
function removeTarget(targetId) {
    return {
        type: REMOVE_TARGET,
        payload: {
            targetId
        }
    };
}

//# sourceMappingURL=registry.js.map
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/contracts.js

function validateSourceContract(source) {
    (0,dist/* invariant */.V)(typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
    (0,dist/* invariant */.V)(typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
    (0,dist/* invariant */.V)(typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
}
function validateTargetContract(target) {
    (0,dist/* invariant */.V)(typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
    (0,dist/* invariant */.V)(typeof target.hover === 'function', 'Expected hover to be a function.');
    (0,dist/* invariant */.V)(typeof target.drop === 'function', 'Expected beginDrag to be a function.');
}
function validateType(type, allowArray) {
    if (allowArray && Array.isArray(type)) {
        type.forEach((t)=>validateType(t, false)
        );
        return;
    }
    (0,dist/* invariant */.V)(typeof type === 'string' || typeof type === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
}

//# sourceMappingURL=contracts.js.map
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/interfaces.js
var HandlerRole;
(function(HandlerRole) {
    HandlerRole["SOURCE"] = "SOURCE";
    HandlerRole["TARGET"] = "TARGET";
})(HandlerRole || (HandlerRole = {}));

//# sourceMappingURL=interfaces.js.map
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/utils/getNextUniqueId.js
let nextUniqueId = 0;
function getNextUniqueId() {
    return nextUniqueId++;
}

//# sourceMappingURL=getNextUniqueId.js.map
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/classes/HandlerRegistryImpl.js






function getNextHandlerId(role) {
    const id = getNextUniqueId().toString();
    switch(role){
        case HandlerRole.SOURCE:
            return `S${id}`;
        case HandlerRole.TARGET:
            return `T${id}`;
        default:
            throw new Error(`Unknown Handler Role: ${role}`);
    }
}
function parseRoleFromHandlerId(handlerId) {
    switch(handlerId[0]){
        case 'S':
            return HandlerRole.SOURCE;
        case 'T':
            return HandlerRole.TARGET;
        default:
            throw new Error(`Cannot parse handler ID: ${handlerId}`);
    }
}
function mapContainsValue(map, searchValue) {
    const entries = map.entries();
    let isDone = false;
    do {
        const { done , value: [, value] ,  } = entries.next();
        if (value === searchValue) {
            return true;
        }
        isDone = !!done;
    }while (!isDone)
    return false;
}
class HandlerRegistryImpl {
    addSource(type, source) {
        validateType(type);
        validateSourceContract(source);
        const sourceId = this.addHandler(HandlerRole.SOURCE, type, source);
        this.store.dispatch(addSource(sourceId));
        return sourceId;
    }
    addTarget(type, target) {
        validateType(type, true);
        validateTargetContract(target);
        const targetId = this.addHandler(HandlerRole.TARGET, type, target);
        this.store.dispatch(addTarget(targetId));
        return targetId;
    }
    containsHandler(handler) {
        return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
    }
    getSource(sourceId, includePinned = false) {
        (0,dist/* invariant */.V)(this.isSourceId(sourceId), 'Expected a valid source ID.');
        const isPinned = includePinned && sourceId === this.pinnedSourceId;
        const source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
        return source;
    }
    getTarget(targetId) {
        (0,dist/* invariant */.V)(this.isTargetId(targetId), 'Expected a valid target ID.');
        return this.dropTargets.get(targetId);
    }
    getSourceType(sourceId) {
        (0,dist/* invariant */.V)(this.isSourceId(sourceId), 'Expected a valid source ID.');
        return this.types.get(sourceId);
    }
    getTargetType(targetId) {
        (0,dist/* invariant */.V)(this.isTargetId(targetId), 'Expected a valid target ID.');
        return this.types.get(targetId);
    }
    isSourceId(handlerId) {
        const role = parseRoleFromHandlerId(handlerId);
        return role === HandlerRole.SOURCE;
    }
    isTargetId(handlerId) {
        const role = parseRoleFromHandlerId(handlerId);
        return role === HandlerRole.TARGET;
    }
    removeSource(sourceId) {
        (0,dist/* invariant */.V)(this.getSource(sourceId), 'Expected an existing source.');
        this.store.dispatch(removeSource(sourceId));
        asap(()=>{
            this.dragSources.delete(sourceId);
            this.types.delete(sourceId);
        });
    }
    removeTarget(targetId) {
        (0,dist/* invariant */.V)(this.getTarget(targetId), 'Expected an existing target.');
        this.store.dispatch(removeTarget(targetId));
        this.dropTargets.delete(targetId);
        this.types.delete(targetId);
    }
    pinSource(sourceId) {
        const source = this.getSource(sourceId);
        (0,dist/* invariant */.V)(source, 'Expected an existing source.');
        this.pinnedSourceId = sourceId;
        this.pinnedSource = source;
    }
    unpinSource() {
        (0,dist/* invariant */.V)(this.pinnedSource, 'No source is pinned at the time.');
        this.pinnedSourceId = null;
        this.pinnedSource = null;
    }
    addHandler(role, type, handler) {
        const id = getNextHandlerId(role);
        this.types.set(id, type);
        if (role === HandlerRole.SOURCE) {
            this.dragSources.set(id, handler);
        } else if (role === HandlerRole.TARGET) {
            this.dropTargets.set(id, handler);
        }
        return id;
    }
    constructor(store){
        this.types = new Map();
        this.dragSources = new Map();
        this.dropTargets = new Map();
        this.pinnedSourceId = null;
        this.pinnedSource = null;
        this.store = store;
    }
}

//# sourceMappingURL=HandlerRegistryImpl.js.map
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/utils/equality.js
const strictEquality = (a, b)=>a === b
;
/**
 * Determine if two cartesian coordinate offsets are equal
 * @param offsetA
 * @param offsetB
 */ function areCoordsEqual(offsetA, offsetB) {
    if (!offsetA && !offsetB) {
        return true;
    } else if (!offsetA || !offsetB) {
        return false;
    } else {
        return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
    }
}
/**
 * Determines if two arrays of items are equal
 * @param a The first array of items
 * @param b The second array of items
 */ function areArraysEqual(a, b, isEqual = strictEquality) {
    if (a.length !== b.length) {
        return false;
    }
    for(let i = 0; i < a.length; ++i){
        if (!isEqual(a[i], b[i])) {
            return false;
        }
    }
    return true;
}

//# sourceMappingURL=equality.js.map
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/reducers/dirtyHandlerIds.js





function reduce(// eslint-disable-next-line @typescript-eslint/no-unused-vars
_state = NONE, action) {
    switch(action.type){
        case HOVER:
            break;
        case ADD_SOURCE:
        case ADD_TARGET:
        case REMOVE_TARGET:
        case REMOVE_SOURCE:
            return NONE;
        case BEGIN_DRAG:
        case PUBLISH_DRAG_SOURCE:
        case END_DRAG:
        case DROP:
        default:
            return ALL;
    }
    const { targetIds =[] , prevTargetIds =[]  } = action.payload;
    const result = xor(targetIds, prevTargetIds);
    const didChange = result.length > 0 || !areArraysEqual(targetIds, prevTargetIds);
    if (!didChange) {
        return NONE;
    }
    // Check the target ids at the innermost position. If they are valid, add them
    // to the result
    const prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
    const innermostTargetId = targetIds[targetIds.length - 1];
    if (prevInnermostTargetId !== innermostTargetId) {
        if (prevInnermostTargetId) {
            result.push(prevInnermostTargetId);
        }
        if (innermostTargetId) {
            result.push(innermostTargetId);
        }
    }
    return result;
}

//# sourceMappingURL=dirtyHandlerIds.js.map
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/reducers/dragOffset.js
function dragOffset_defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function dragOffset_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            dragOffset_defineProperty(target, key, source[key]);
        });
    }
    return target;
}


const initialState = {
    initialSourceClientOffset: null,
    initialClientOffset: null,
    clientOffset: null
};
function dragOffset_reduce(state = initialState, action) {
    const { payload  } = action;
    switch(action.type){
        case INIT_COORDS:
        case BEGIN_DRAG:
            return {
                initialSourceClientOffset: payload.sourceClientOffset,
                initialClientOffset: payload.clientOffset,
                clientOffset: payload.clientOffset
            };
        case HOVER:
            if (areCoordsEqual(state.clientOffset, payload.clientOffset)) {
                return state;
            }
            return dragOffset_objectSpread({}, state, {
                clientOffset: payload.clientOffset
            });
        case END_DRAG:
        case DROP:
            return initialState;
        default:
            return state;
    }
}

//# sourceMappingURL=dragOffset.js.map
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/reducers/dragOperation.js
function dragOperation_defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function dragOperation_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            dragOperation_defineProperty(target, key, source[key]);
        });
    }
    return target;
}



const dragOperation_initialState = {
    itemType: null,
    item: null,
    sourceId: null,
    targetIds: [],
    dropResult: null,
    didDrop: false,
    isSourcePublic: null
};
function dragOperation_reduce(state = dragOperation_initialState, action) {
    const { payload  } = action;
    switch(action.type){
        case BEGIN_DRAG:
            return dragOperation_objectSpread({}, state, {
                itemType: payload.itemType,
                item: payload.item,
                sourceId: payload.sourceId,
                isSourcePublic: payload.isSourcePublic,
                dropResult: null,
                didDrop: false
            });
        case PUBLISH_DRAG_SOURCE:
            return dragOperation_objectSpread({}, state, {
                isSourcePublic: true
            });
        case HOVER:
            return dragOperation_objectSpread({}, state, {
                targetIds: payload.targetIds
            });
        case REMOVE_TARGET:
            if (state.targetIds.indexOf(payload.targetId) === -1) {
                return state;
            }
            return dragOperation_objectSpread({}, state, {
                targetIds: without(state.targetIds, payload.targetId)
            });
        case DROP:
            return dragOperation_objectSpread({}, state, {
                dropResult: payload.dropResult,
                didDrop: true,
                targetIds: []
            });
        case END_DRAG:
            return dragOperation_objectSpread({}, state, {
                itemType: null,
                item: null,
                sourceId: null,
                dropResult: null,
                didDrop: false,
                isSourcePublic: null,
                targetIds: []
            });
        default:
            return state;
    }
}

//# sourceMappingURL=dragOperation.js.map
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/reducers/refCount.js

function refCount_reduce(state = 0, action) {
    switch(action.type){
        case ADD_SOURCE:
        case ADD_TARGET:
            return state + 1;
        case REMOVE_SOURCE:
        case REMOVE_TARGET:
            return state - 1;
        default:
            return state;
    }
}

//# sourceMappingURL=refCount.js.map
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/reducers/stateId.js
function stateId_reduce(state = 0) {
    return state + 1;
}

//# sourceMappingURL=stateId.js.map
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/reducers/index.js
function reducers_defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function reducers_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            reducers_defineProperty(target, key, source[key]);
        });
    }
    return target;
}






function reducers_reduce(state = {}, action) {
    return {
        dirtyHandlerIds: reduce(state.dirtyHandlerIds, {
            type: action.type,
            payload: reducers_objectSpread({}, action.payload, {
                prevTargetIds: get(state, 'dragOperation.targetIds', [])
            })
        }),
        dragOffset: dragOffset_reduce(state.dragOffset, action),
        refCount: refCount_reduce(state.refCount, action),
        dragOperation: dragOperation_reduce(state.dragOperation, action),
        stateId: stateId_reduce(state.stateId)
    };
}

//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/createDragDropManager.js





function createDragDropManager(backendFactory, globalContext = undefined, backendOptions = {}, debugMode = false) {
    const store = makeStoreInstance(debugMode);
    const monitor = new DragDropMonitorImpl(store, new HandlerRegistryImpl(store));
    const manager = new DragDropManagerImpl(store, monitor);
    const backend = backendFactory(manager, globalContext, backendOptions);
    manager.receiveBackend(backend);
    return manager;
}
function makeStoreInstance(debugMode) {
    // TODO: if we ever make a react-native version of this,
    // we'll need to consider how to pull off dev-tooling
    const reduxDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__;
    return createStore(reducers_reduce, debugMode && reduxDevTools && reduxDevTools({
        name: 'dnd-core',
        instanceId: 'dnd-core'
    }));
}

//# sourceMappingURL=createDragDropManager.js.map

/***/ }),

/***/ 33631:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  HTML5Backend: () => (/* binding */ HTML5Backend),
  NativeTypes: () => (/* reexport */ NativeTypes_namespaceObject),
  getEmptyImage: () => (/* reexport */ getEmptyImage)
});

// NAMESPACE OBJECT: ./node_modules/react-dnd-html5-backend/dist/NativeTypes.js
var NativeTypes_namespaceObject = {};
__webpack_require__.r(NativeTypes_namespaceObject);
__webpack_require__.d(NativeTypes_namespaceObject, {
  FILE: () => (FILE),
  HTML: () => (HTML),
  TEXT: () => (TEXT),
  URL: () => (URL)
});

;// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/utils/js_utils.js
// cheap lodash replacements
function memoize(fn) {
    let result = null;
    const memoized = ()=>{
        if (result == null) {
            result = fn();
        }
        return result;
    };
    return memoized;
}
/**
 * drop-in replacement for _.without
 */ function without(items, item) {
    return items.filter((i)=>i !== item
    );
}
function union(itemsA, itemsB) {
    const set = new Set();
    const insertItem = (item)=>set.add(item)
    ;
    itemsA.forEach(insertItem);
    itemsB.forEach(insertItem);
    const result = [];
    set.forEach((key)=>result.push(key)
    );
    return result;
}

//# sourceMappingURL=js_utils.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/EnterLeaveCounter.js

class EnterLeaveCounter {
    enter(enteringNode) {
        const previousLength = this.entered.length;
        const isNodeEntered = (node)=>this.isNodeInDocument(node) && (!node.contains || node.contains(enteringNode))
        ;
        this.entered = union(this.entered.filter(isNodeEntered), [
            enteringNode
        ]);
        return previousLength === 0 && this.entered.length > 0;
    }
    leave(leavingNode) {
        const previousLength = this.entered.length;
        this.entered = without(this.entered.filter(this.isNodeInDocument), leavingNode);
        return previousLength > 0 && this.entered.length === 0;
    }
    reset() {
        this.entered = [];
    }
    constructor(isNodeInDocument){
        this.entered = [];
        this.isNodeInDocument = isNodeInDocument;
    }
}

//# sourceMappingURL=EnterLeaveCounter.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/NativeDragSources/NativeDragSource.js
class NativeDragSource {
    initializeExposedProperties() {
        Object.keys(this.config.exposeProperties).forEach((property)=>{
            Object.defineProperty(this.item, property, {
                configurable: true,
                enumerable: true,
                get () {
                    // eslint-disable-next-line no-console
                    console.warn(`Browser doesn't allow reading "${property}" until the drop event.`);
                    return null;
                }
            });
        });
    }
    loadDataTransfer(dataTransfer) {
        if (dataTransfer) {
            const newProperties = {};
            Object.keys(this.config.exposeProperties).forEach((property)=>{
                const propertyFn = this.config.exposeProperties[property];
                if (propertyFn != null) {
                    newProperties[property] = {
                        value: propertyFn(dataTransfer, this.config.matchesTypes),
                        configurable: true,
                        enumerable: true
                    };
                }
            });
            Object.defineProperties(this.item, newProperties);
        }
    }
    canDrag() {
        return true;
    }
    beginDrag() {
        return this.item;
    }
    isDragging(monitor, handle) {
        return handle === monitor.getSourceId();
    }
    endDrag() {
    // empty
    }
    constructor(config){
        this.config = config;
        this.item = {};
        this.initializeExposedProperties();
    }
}

//# sourceMappingURL=NativeDragSource.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/NativeTypes.js
const FILE = '__NATIVE_FILE__';
const URL = '__NATIVE_URL__';
const TEXT = '__NATIVE_TEXT__';
const HTML = '__NATIVE_HTML__';

//# sourceMappingURL=NativeTypes.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/NativeDragSources/getDataFromDataTransfer.js
function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
    const result = typesToTry.reduce((resultSoFar, typeToTry)=>resultSoFar || dataTransfer.getData(typeToTry)
    , '');
    return result != null ? result : defaultValue;
}

//# sourceMappingURL=getDataFromDataTransfer.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/NativeDragSources/nativeTypesConfig.js


const nativeTypesConfig = {
    [FILE]: {
        exposeProperties: {
            files: (dataTransfer)=>Array.prototype.slice.call(dataTransfer.files)
            ,
            items: (dataTransfer)=>dataTransfer.items
            ,
            dataTransfer: (dataTransfer)=>dataTransfer
        },
        matchesTypes: [
            'Files'
        ]
    },
    [HTML]: {
        exposeProperties: {
            html: (dataTransfer, matchesTypes)=>getDataFromDataTransfer(dataTransfer, matchesTypes, '')
            ,
            dataTransfer: (dataTransfer)=>dataTransfer
        },
        matchesTypes: [
            'Html',
            'text/html'
        ]
    },
    [URL]: {
        exposeProperties: {
            urls: (dataTransfer, matchesTypes)=>getDataFromDataTransfer(dataTransfer, matchesTypes, '').split('\n')
            ,
            dataTransfer: (dataTransfer)=>dataTransfer
        },
        matchesTypes: [
            'Url',
            'text/uri-list'
        ]
    },
    [TEXT]: {
        exposeProperties: {
            text: (dataTransfer, matchesTypes)=>getDataFromDataTransfer(dataTransfer, matchesTypes, '')
            ,
            dataTransfer: (dataTransfer)=>dataTransfer
        },
        matchesTypes: [
            'Text',
            'text/plain'
        ]
    }
};

//# sourceMappingURL=nativeTypesConfig.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/NativeDragSources/index.js


function createNativeDragSource(type, dataTransfer) {
    const config = nativeTypesConfig[type];
    if (!config) {
        throw new Error(`native type ${type} has no configuration`);
    }
    const result = new NativeDragSource(config);
    result.loadDataTransfer(dataTransfer);
    return result;
}
function matchNativeItemType(dataTransfer) {
    if (!dataTransfer) {
        return null;
    }
    const dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
    return Object.keys(nativeTypesConfig).filter((nativeItemType)=>{
        const typeConfig = nativeTypesConfig[nativeItemType];
        if (!(typeConfig === null || typeConfig === void 0 ? void 0 : typeConfig.matchesTypes)) {
            return false;
        }
        return typeConfig.matchesTypes.some((t)=>dataTransferTypes.indexOf(t) > -1
        );
    })[0] || null;
}

//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/BrowserDetector.js

const isFirefox = memoize(()=>/firefox/i.test(navigator.userAgent)
);
const isSafari = memoize(()=>Boolean(window.safari)
);

//# sourceMappingURL=BrowserDetector.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/MonotonicInterpolant.js
class MonotonicInterpolant {
    interpolate(x) {
        const { xs , ys , c1s , c2s , c3s  } = this;
        // The rightmost point in the dataset should give an exact result
        let i = xs.length - 1;
        if (x === xs[i]) {
            return ys[i];
        }
        // Search for the interval x is in, returning the corresponding y if x is one of the original xs
        let low = 0;
        let high = c3s.length - 1;
        let mid;
        while(low <= high){
            mid = Math.floor(0.5 * (low + high));
            const xHere = xs[mid];
            if (xHere < x) {
                low = mid + 1;
            } else if (xHere > x) {
                high = mid - 1;
            } else {
                return ys[mid];
            }
        }
        i = Math.max(0, high);
        // Interpolate
        const diff = x - xs[i];
        const diffSq = diff * diff;
        return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
    }
    constructor(xs, ys){
        const { length  } = xs;
        // Rearrange xs and ys so that xs is sorted
        const indexes = [];
        for(let i = 0; i < length; i++){
            indexes.push(i);
        }
        indexes.sort((a, b)=>xs[a] < xs[b] ? -1 : 1
        );
        // Get consecutive differences and slopes
        const dys = [];
        const dxs = [];
        const ms = [];
        let dx;
        let dy;
        for(let i1 = 0; i1 < length - 1; i1++){
            dx = xs[i1 + 1] - xs[i1];
            dy = ys[i1 + 1] - ys[i1];
            dxs.push(dx);
            dys.push(dy);
            ms.push(dy / dx);
        }
        // Get degree-1 coefficients
        const c1s = [
            ms[0]
        ];
        for(let i2 = 0; i2 < dxs.length - 1; i2++){
            const m2 = ms[i2];
            const mNext = ms[i2 + 1];
            if (m2 * mNext <= 0) {
                c1s.push(0);
            } else {
                dx = dxs[i2];
                const dxNext = dxs[i2 + 1];
                const common = dx + dxNext;
                c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));
            }
        }
        c1s.push(ms[ms.length - 1]);
        // Get degree-2 and degree-3 coefficients
        const c2s = [];
        const c3s = [];
        let m;
        for(let i3 = 0; i3 < c1s.length - 1; i3++){
            m = ms[i3];
            const c1 = c1s[i3];
            const invDx = 1 / dxs[i3];
            const common = c1 + c1s[i3 + 1] - m - m;
            c2s.push((m - c1 - common) * invDx);
            c3s.push(common * invDx * invDx);
        }
        this.xs = xs;
        this.ys = ys;
        this.c1s = c1s;
        this.c2s = c2s;
        this.c3s = c3s;
    }
}

//# sourceMappingURL=MonotonicInterpolant.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/OffsetUtils.js


const ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
    const el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
    if (!el) {
        return null;
    }
    const { top , left  } = el.getBoundingClientRect();
    return {
        x: left,
        y: top
    };
}
function getEventClientOffset(e) {
    return {
        x: e.clientX,
        y: e.clientY
    };
}
function isImageNode(node) {
    var ref;
    return node.nodeName === 'IMG' && (isFirefox() || !((ref = document.documentElement) === null || ref === void 0 ? void 0 : ref.contains(node)));
}
function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
    let dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
    let dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;
    // Work around @2x coordinate discrepancies in browsers
    if (isSafari() && isImage) {
        dragPreviewHeight /= window.devicePixelRatio;
        dragPreviewWidth /= window.devicePixelRatio;
    }
    return {
        dragPreviewWidth,
        dragPreviewHeight
    };
}
function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
    // The browsers will use the image intrinsic size under different conditions.
    // Firefox only cares if it's an image, but WebKit also wants it to be detached.
    const isImage = isImageNode(dragPreview);
    const dragPreviewNode = isImage ? sourceNode : dragPreview;
    const dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
    const offsetFromDragPreview = {
        x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
        y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
    };
    const { offsetWidth: sourceWidth , offsetHeight: sourceHeight  } = sourceNode;
    const { anchorX , anchorY  } = anchorPoint;
    const { dragPreviewWidth , dragPreviewHeight  } = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight);
    const calculateYOffset = ()=>{
        const interpolantY = new MonotonicInterpolant([
            0,
            0.5,
            1
        ], [
            // Dock to the top
            offsetFromDragPreview.y,
            // Align at the center
            (offsetFromDragPreview.y / sourceHeight) * dragPreviewHeight,
            // Dock to the bottom
            offsetFromDragPreview.y + dragPreviewHeight - sourceHeight, 
        ]);
        let y = interpolantY.interpolate(anchorY);
        // Work around Safari 8 positioning bug
        if (isSafari() && isImage) {
            // We'll have to wait for @3x to see if this is entirely correct
            y += (window.devicePixelRatio - 1) * dragPreviewHeight;
        }
        return y;
    };
    const calculateXOffset = ()=>{
        // Interpolate coordinates depending on anchor point
        // If you know a simpler way to do this, let me know
        const interpolantX = new MonotonicInterpolant([
            0,
            0.5,
            1
        ], [
            // Dock to the left
            offsetFromDragPreview.x,
            // Align at the center
            (offsetFromDragPreview.x / sourceWidth) * dragPreviewWidth,
            // Dock to the right
            offsetFromDragPreview.x + dragPreviewWidth - sourceWidth, 
        ]);
        return interpolantX.interpolate(anchorX);
    };
    // Force offsets if specified in the options.
    const { offsetX , offsetY  } = offsetPoint;
    const isManualOffsetX = offsetX === 0 || offsetX;
    const isManualOffsetY = offsetY === 0 || offsetY;
    return {
        x: isManualOffsetX ? offsetX : calculateXOffset(),
        y: isManualOffsetY ? offsetY : calculateYOffset()
    };
}

//# sourceMappingURL=OffsetUtils.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/OptionsReader.js
class OptionsReader {
    get window() {
        if (this.globalContext) {
            return this.globalContext;
        } else if (typeof window !== 'undefined') {
            return window;
        }
        return undefined;
    }
    get document() {
        var ref;
        if ((ref = this.globalContext) === null || ref === void 0 ? void 0 : ref.document) {
            return this.globalContext.document;
        } else if (this.window) {
            return this.window.document;
        } else {
            return undefined;
        }
    }
    get rootElement() {
        var ref;
        return ((ref = this.optionsArgs) === null || ref === void 0 ? void 0 : ref.rootElement) || this.window;
    }
    constructor(globalContext, options){
        this.ownerDocument = null;
        this.globalContext = globalContext;
        this.optionsArgs = options;
    }
}

//# sourceMappingURL=OptionsReader.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/HTML5BackendImpl.js
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}





class HTML5BackendImpl {
    /**
	 * Generate profiling statistics for the HTML5Backend.
	 */ profile() {
        var ref, ref1;
        return {
            sourcePreviewNodes: this.sourcePreviewNodes.size,
            sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
            sourceNodeOptions: this.sourceNodeOptions.size,
            sourceNodes: this.sourceNodes.size,
            dragStartSourceIds: ((ref = this.dragStartSourceIds) === null || ref === void 0 ? void 0 : ref.length) || 0,
            dropTargetIds: this.dropTargetIds.length,
            dragEnterTargetIds: this.dragEnterTargetIds.length,
            dragOverTargetIds: ((ref1 = this.dragOverTargetIds) === null || ref1 === void 0 ? void 0 : ref1.length) || 0
        };
    }
    // public for test
    get window() {
        return this.options.window;
    }
    get document() {
        return this.options.document;
    }
    /**
	 * Get the root element to use for event subscriptions
	 */ get rootElement() {
        return this.options.rootElement;
    }
    setup() {
        const root = this.rootElement;
        if (root === undefined) {
            return;
        }
        if (root.__isReactDndBackendSetUp) {
            throw new Error('Cannot have two HTML5 backends at the same time.');
        }
        root.__isReactDndBackendSetUp = true;
        this.addEventListeners(root);
    }
    teardown() {
        const root = this.rootElement;
        if (root === undefined) {
            return;
        }
        root.__isReactDndBackendSetUp = false;
        this.removeEventListeners(this.rootElement);
        this.clearCurrentDragSourceNode();
        if (this.asyncEndDragFrameId) {
            var ref;
            (ref = this.window) === null || ref === void 0 ? void 0 : ref.cancelAnimationFrame(this.asyncEndDragFrameId);
        }
    }
    connectDragPreview(sourceId, node, options) {
        this.sourcePreviewNodeOptions.set(sourceId, options);
        this.sourcePreviewNodes.set(sourceId, node);
        return ()=>{
            this.sourcePreviewNodes.delete(sourceId);
            this.sourcePreviewNodeOptions.delete(sourceId);
        };
    }
    connectDragSource(sourceId, node, options) {
        this.sourceNodes.set(sourceId, node);
        this.sourceNodeOptions.set(sourceId, options);
        const handleDragStart = (e)=>this.handleDragStart(e, sourceId)
        ;
        const handleSelectStart = (e)=>this.handleSelectStart(e)
        ;
        node.setAttribute('draggable', 'true');
        node.addEventListener('dragstart', handleDragStart);
        node.addEventListener('selectstart', handleSelectStart);
        return ()=>{
            this.sourceNodes.delete(sourceId);
            this.sourceNodeOptions.delete(sourceId);
            node.removeEventListener('dragstart', handleDragStart);
            node.removeEventListener('selectstart', handleSelectStart);
            node.setAttribute('draggable', 'false');
        };
    }
    connectDropTarget(targetId, node) {
        const handleDragEnter = (e)=>this.handleDragEnter(e, targetId)
        ;
        const handleDragOver = (e)=>this.handleDragOver(e, targetId)
        ;
        const handleDrop = (e)=>this.handleDrop(e, targetId)
        ;
        node.addEventListener('dragenter', handleDragEnter);
        node.addEventListener('dragover', handleDragOver);
        node.addEventListener('drop', handleDrop);
        return ()=>{
            node.removeEventListener('dragenter', handleDragEnter);
            node.removeEventListener('dragover', handleDragOver);
            node.removeEventListener('drop', handleDrop);
        };
    }
    addEventListeners(target) {
        // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
        if (!target.addEventListener) {
            return;
        }
        target.addEventListener('dragstart', this.handleTopDragStart);
        target.addEventListener('dragstart', this.handleTopDragStartCapture, true);
        target.addEventListener('dragend', this.handleTopDragEndCapture, true);
        target.addEventListener('dragenter', this.handleTopDragEnter);
        target.addEventListener('dragenter', this.handleTopDragEnterCapture, true);
        target.addEventListener('dragleave', this.handleTopDragLeaveCapture, true);
        target.addEventListener('dragover', this.handleTopDragOver);
        target.addEventListener('dragover', this.handleTopDragOverCapture, true);
        target.addEventListener('drop', this.handleTopDrop);
        target.addEventListener('drop', this.handleTopDropCapture, true);
    }
    removeEventListeners(target) {
        // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
        if (!target.removeEventListener) {
            return;
        }
        target.removeEventListener('dragstart', this.handleTopDragStart);
        target.removeEventListener('dragstart', this.handleTopDragStartCapture, true);
        target.removeEventListener('dragend', this.handleTopDragEndCapture, true);
        target.removeEventListener('dragenter', this.handleTopDragEnter);
        target.removeEventListener('dragenter', this.handleTopDragEnterCapture, true);
        target.removeEventListener('dragleave', this.handleTopDragLeaveCapture, true);
        target.removeEventListener('dragover', this.handleTopDragOver);
        target.removeEventListener('dragover', this.handleTopDragOverCapture, true);
        target.removeEventListener('drop', this.handleTopDrop);
        target.removeEventListener('drop', this.handleTopDropCapture, true);
    }
    getCurrentSourceNodeOptions() {
        const sourceId = this.monitor.getSourceId();
        const sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
        return _objectSpread({
            dropEffect: this.altKeyPressed ? 'copy' : 'move'
        }, sourceNodeOptions || {});
    }
    getCurrentDropEffect() {
        if (this.isDraggingNativeItem()) {
            // It makes more sense to default to 'copy' for native resources
            return 'copy';
        }
        return this.getCurrentSourceNodeOptions().dropEffect;
    }
    getCurrentSourcePreviewNodeOptions() {
        const sourceId = this.monitor.getSourceId();
        const sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
        return _objectSpread({
            anchorX: 0.5,
            anchorY: 0.5,
            captureDraggingState: false
        }, sourcePreviewNodeOptions || {});
    }
    isDraggingNativeItem() {
        const itemType = this.monitor.getItemType();
        return Object.keys(NativeTypes_namespaceObject).some((key)=>NativeTypes_namespaceObject[key] === itemType
        );
    }
    beginDragNativeItem(type, dataTransfer) {
        this.clearCurrentDragSourceNode();
        this.currentNativeSource = createNativeDragSource(type, dataTransfer);
        this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
        this.actions.beginDrag([
            this.currentNativeHandle
        ]);
    }
    setCurrentDragSourceNode(node) {
        this.clearCurrentDragSourceNode();
        this.currentDragSourceNode = node;
        // A timeout of > 0 is necessary to resolve Firefox issue referenced
        // See:
        //   * https://github.com/react-dnd/react-dnd/pull/928
        //   * https://github.com/react-dnd/react-dnd/issues/869
        const MOUSE_MOVE_TIMEOUT = 1000;
        // Receiving a mouse event in the middle of a dragging operation
        // means it has ended and the drag source node disappeared from DOM,
        // so the browser didn't dispatch the dragend event.
        //
        // We need to wait before we start listening for mousemove events.
        // This is needed because the drag preview needs to be drawn or else it fires an 'mousemove' event
        // immediately in some browsers.
        //
        // See:
        //   * https://github.com/react-dnd/react-dnd/pull/928
        //   * https://github.com/react-dnd/react-dnd/issues/869
        //
        this.mouseMoveTimeoutTimer = setTimeout(()=>{
            var ref;
            return (ref = this.rootElement) === null || ref === void 0 ? void 0 : ref.addEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
        }, MOUSE_MOVE_TIMEOUT);
    }
    clearCurrentDragSourceNode() {
        if (this.currentDragSourceNode) {
            this.currentDragSourceNode = null;
            if (this.rootElement) {
                var ref;
                (ref = this.window) === null || ref === void 0 ? void 0 : ref.clearTimeout(this.mouseMoveTimeoutTimer || undefined);
                this.rootElement.removeEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
            }
            this.mouseMoveTimeoutTimer = null;
            return true;
        }
        return false;
    }
    handleDragStart(e, sourceId) {
        if (e.defaultPrevented) {
            return;
        }
        if (!this.dragStartSourceIds) {
            this.dragStartSourceIds = [];
        }
        this.dragStartSourceIds.unshift(sourceId);
    }
    handleDragEnter(_e, targetId) {
        this.dragEnterTargetIds.unshift(targetId);
    }
    handleDragOver(_e, targetId) {
        if (this.dragOverTargetIds === null) {
            this.dragOverTargetIds = [];
        }
        this.dragOverTargetIds.unshift(targetId);
    }
    handleDrop(_e, targetId) {
        this.dropTargetIds.unshift(targetId);
    }
    constructor(manager, globalContext, options){
        this.sourcePreviewNodes = new Map();
        this.sourcePreviewNodeOptions = new Map();
        this.sourceNodes = new Map();
        this.sourceNodeOptions = new Map();
        this.dragStartSourceIds = null;
        this.dropTargetIds = [];
        this.dragEnterTargetIds = [];
        this.currentNativeSource = null;
        this.currentNativeHandle = null;
        this.currentDragSourceNode = null;
        this.altKeyPressed = false;
        this.mouseMoveTimeoutTimer = null;
        this.asyncEndDragFrameId = null;
        this.dragOverTargetIds = null;
        this.lastClientOffset = null;
        this.hoverRafId = null;
        this.getSourceClientOffset = (sourceId)=>{
            const source = this.sourceNodes.get(sourceId);
            return source && getNodeClientOffset(source) || null;
        };
        this.endDragNativeItem = ()=>{
            if (!this.isDraggingNativeItem()) {
                return;
            }
            this.actions.endDrag();
            if (this.currentNativeHandle) {
                this.registry.removeSource(this.currentNativeHandle);
            }
            this.currentNativeHandle = null;
            this.currentNativeSource = null;
        };
        this.isNodeInDocument = (node)=>{
            // Check the node either in the main document or in the current context
            return Boolean(node && this.document && this.document.body && this.document.body.contains(node));
        };
        this.endDragIfSourceWasRemovedFromDOM = ()=>{
            const node = this.currentDragSourceNode;
            if (node == null || this.isNodeInDocument(node)) {
                return;
            }
            if (this.clearCurrentDragSourceNode() && this.monitor.isDragging()) {
                this.actions.endDrag();
            }
            this.cancelHover();
        };
        this.scheduleHover = (dragOverTargetIds)=>{
            if (this.hoverRafId === null && typeof requestAnimationFrame !== 'undefined') {
                this.hoverRafId = requestAnimationFrame(()=>{
                    if (this.monitor.isDragging()) {
                        this.actions.hover(dragOverTargetIds || [], {
                            clientOffset: this.lastClientOffset
                        });
                    }
                    this.hoverRafId = null;
                });
            }
        };
        this.cancelHover = ()=>{
            if (this.hoverRafId !== null && typeof cancelAnimationFrame !== 'undefined') {
                cancelAnimationFrame(this.hoverRafId);
                this.hoverRafId = null;
            }
        };
        this.handleTopDragStartCapture = ()=>{
            this.clearCurrentDragSourceNode();
            this.dragStartSourceIds = [];
        };
        this.handleTopDragStart = (e)=>{
            if (e.defaultPrevented) {
                return;
            }
            const { dragStartSourceIds  } = this;
            this.dragStartSourceIds = null;
            const clientOffset = getEventClientOffset(e);
            // Avoid crashing if we missed a drop event or our previous drag died
            if (this.monitor.isDragging()) {
                this.actions.endDrag();
                this.cancelHover();
            }
            // Don't publish the source just yet (see why below)
            this.actions.beginDrag(dragStartSourceIds || [], {
                publishSource: false,
                getSourceClientOffset: this.getSourceClientOffset,
                clientOffset
            });
            const { dataTransfer  } = e;
            const nativeType = matchNativeItemType(dataTransfer);
            if (this.monitor.isDragging()) {
                if (dataTransfer && typeof dataTransfer.setDragImage === 'function') {
                    // Use custom drag image if user specifies it.
                    // If child drag source refuses drag but parent agrees,
                    // use parent's node as drag image. Neither works in IE though.
                    const sourceId = this.monitor.getSourceId();
                    const sourceNode = this.sourceNodes.get(sourceId);
                    const dragPreview = this.sourcePreviewNodes.get(sourceId) || sourceNode;
                    if (dragPreview) {
                        const { anchorX , anchorY , offsetX , offsetY  } = this.getCurrentSourcePreviewNodeOptions();
                        const anchorPoint = {
                            anchorX,
                            anchorY
                        };
                        const offsetPoint = {
                            offsetX,
                            offsetY
                        };
                        const dragPreviewOffset = getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);
                        dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
                    }
                }
                try {
                    // Firefox won't drag without setting data
                    dataTransfer === null || dataTransfer === void 0 ? void 0 : dataTransfer.setData('application/json', {});
                } catch (err) {
                // IE doesn't support MIME types in setData
                }
                // Store drag source node so we can check whether
                // it is removed from DOM and trigger endDrag manually.
                this.setCurrentDragSourceNode(e.target);
                // Now we are ready to publish the drag source.. or are we not?
                const { captureDraggingState  } = this.getCurrentSourcePreviewNodeOptions();
                if (!captureDraggingState) {
                    // Usually we want to publish it in the next tick so that browser
                    // is able to screenshot the current (not yet dragging) state.
                    //
                    // It also neatly avoids a situation where render() returns null
                    // in the same tick for the source element, and browser freaks out.
                    setTimeout(()=>this.actions.publishDragSource()
                    , 0);
                } else {
                    // In some cases the user may want to override this behavior, e.g.
                    // to work around IE not supporting custom drag previews.
                    //
                    // When using a custom drag layer, the only way to prevent
                    // the default drag preview from drawing in IE is to screenshot
                    // the dragging state in which the node itself has zero opacity
                    // and height. In this case, though, returning null from render()
                    // will abruptly end the dragging, which is not obvious.
                    //
                    // This is the reason such behavior is strictly opt-in.
                    this.actions.publishDragSource();
                }
            } else if (nativeType) {
                // A native item (such as URL) dragged from inside the document
                this.beginDragNativeItem(nativeType);
            } else if (dataTransfer && !dataTransfer.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute('draggable'))) {
                // Looks like a Safari bug: dataTransfer.types is null, but there was no draggable.
                // Just let it drag. It's a native type (URL or text) and will be picked up in
                // dragenter handler.
                return;
            } else {
                // If by this time no drag source reacted, tell browser not to drag.
                e.preventDefault();
            }
        };
        this.handleTopDragEndCapture = ()=>{
            if (this.clearCurrentDragSourceNode() && this.monitor.isDragging()) {
                // Firefox can dispatch this event in an infinite loop
                // if dragend handler does something like showing an alert.
                // Only proceed if we have not handled it already.
                this.actions.endDrag();
            }
            this.cancelHover();
        };
        this.handleTopDragEnterCapture = (e)=>{
            this.dragEnterTargetIds = [];
            if (this.isDraggingNativeItem()) {
                var ref;
                (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
            }
            const isFirstEnter = this.enterLeaveCounter.enter(e.target);
            if (!isFirstEnter || this.monitor.isDragging()) {
                return;
            }
            const { dataTransfer  } = e;
            const nativeType = matchNativeItemType(dataTransfer);
            if (nativeType) {
                // A native item (such as file or URL) dragged from outside the document
                this.beginDragNativeItem(nativeType, dataTransfer);
            }
        };
        this.handleTopDragEnter = (e)=>{
            const { dragEnterTargetIds  } = this;
            this.dragEnterTargetIds = [];
            if (!this.monitor.isDragging()) {
                // This is probably a native item type we don't understand.
                return;
            }
            this.altKeyPressed = e.altKey;
            // If the target changes position as the result of `dragenter`, `dragover` might still
            // get dispatched despite target being no longer there. The easy solution is to check
            // whether there actually is a target before firing `hover`.
            if (dragEnterTargetIds.length > 0) {
                this.actions.hover(dragEnterTargetIds, {
                    clientOffset: getEventClientOffset(e)
                });
            }
            const canDrop = dragEnterTargetIds.some((targetId)=>this.monitor.canDropOnTarget(targetId)
            );
            if (canDrop) {
                // IE requires this to fire dragover events
                e.preventDefault();
                if (e.dataTransfer) {
                    e.dataTransfer.dropEffect = this.getCurrentDropEffect();
                }
            }
        };
        this.handleTopDragOverCapture = (e)=>{
            this.dragOverTargetIds = [];
            if (this.isDraggingNativeItem()) {
                var ref;
                (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
            }
        };
        this.handleTopDragOver = (e)=>{
            const { dragOverTargetIds  } = this;
            this.dragOverTargetIds = [];
            if (!this.monitor.isDragging()) {
                // This is probably a native item type we don't understand.
                // Prevent default "drop and blow away the whole document" action.
                e.preventDefault();
                if (e.dataTransfer) {
                    e.dataTransfer.dropEffect = 'none';
                }
                return;
            }
            this.altKeyPressed = e.altKey;
            this.lastClientOffset = getEventClientOffset(e);
            this.scheduleHover(dragOverTargetIds);
            const canDrop = (dragOverTargetIds || []).some((targetId)=>this.monitor.canDropOnTarget(targetId)
            );
            if (canDrop) {
                // Show user-specified drop effect.
                e.preventDefault();
                if (e.dataTransfer) {
                    e.dataTransfer.dropEffect = this.getCurrentDropEffect();
                }
            } else if (this.isDraggingNativeItem()) {
                // Don't show a nice cursor but still prevent default
                // "drop and blow away the whole document" action.
                e.preventDefault();
            } else {
                e.preventDefault();
                if (e.dataTransfer) {
                    e.dataTransfer.dropEffect = 'none';
                }
            }
        };
        this.handleTopDragLeaveCapture = (e)=>{
            if (this.isDraggingNativeItem()) {
                e.preventDefault();
            }
            const isLastLeave = this.enterLeaveCounter.leave(e.target);
            if (!isLastLeave) {
                return;
            }
            if (this.isDraggingNativeItem()) {
                setTimeout(()=>this.endDragNativeItem()
                , 0);
            }
            this.cancelHover();
        };
        this.handleTopDropCapture = (e)=>{
            this.dropTargetIds = [];
            if (this.isDraggingNativeItem()) {
                var ref;
                e.preventDefault();
                (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
            } else if (matchNativeItemType(e.dataTransfer)) {
                // Dragging some elements, like <a> and <img> may still behave like a native drag event,
                // even if the current drag event matches a user-defined type.
                // Stop the default behavior when we're not expecting a native item to be dropped.
                e.preventDefault();
            }
            this.enterLeaveCounter.reset();
        };
        this.handleTopDrop = (e)=>{
            const { dropTargetIds  } = this;
            this.dropTargetIds = [];
            this.actions.hover(dropTargetIds, {
                clientOffset: getEventClientOffset(e)
            });
            this.actions.drop({
                dropEffect: this.getCurrentDropEffect()
            });
            if (this.isDraggingNativeItem()) {
                this.endDragNativeItem();
            } else if (this.monitor.isDragging()) {
                this.actions.endDrag();
            }
            this.cancelHover();
        };
        this.handleSelectStart = (e)=>{
            const target = e.target;
            // Only IE requires us to explicitly say
            // we want drag drop operation to start
            if (typeof target.dragDrop !== 'function') {
                return;
            }
            // Inputs and textareas should be selectable
            if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
                return;
            }
            // For other targets, ask IE
            // to enable drag and drop
            e.preventDefault();
            target.dragDrop();
        };
        this.options = new OptionsReader(globalContext, options);
        this.actions = manager.getActions();
        this.monitor = manager.getMonitor();
        this.registry = manager.getRegistry();
        this.enterLeaveCounter = new EnterLeaveCounter(this.isNodeInDocument);
    }
}

//# sourceMappingURL=HTML5BackendImpl.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/getEmptyImage.js
let emptyImage;
function getEmptyImage() {
    if (!emptyImage) {
        emptyImage = new Image();
        emptyImage.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
    }
    return emptyImage;
}

//# sourceMappingURL=getEmptyImage.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/index.js




const HTML5Backend = function createBackend(manager, context, options) {
    return new HTML5BackendImpl(manager, context, options);
};

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 10912:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ DndContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);

/**
 * Create the React Context
 */ const DndContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    dragDropManager: undefined
});

//# sourceMappingURL=DndContext.js.map

/***/ }),

/***/ 67782:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ DndProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var dnd_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40360);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var _DndContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10912);
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}




let refCount = 0;
const INSTANCE_SYM = Symbol.for('__REACT_DND_CONTEXT_INSTANCE__');
var DndProvider = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function DndProvider(_param) {
    var { children  } = _param, props = _objectWithoutProperties(_param, [
        "children"
    ]);
    const [manager, isGlobalInstance] = getDndContextValue(props) // memoized from props
    ;
    /**
		 * If the global context was used to store the DND context
		 * then where theres no more references to it we should
		 * clean it up to avoid memory leaks
		 */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isGlobalInstance) {
            const context = getGlobalContext();
            ++refCount;
            return ()=>{
                if (--refCount === 0) {
                    context[INSTANCE_SYM] = null;
                }
            };
        }
        return;
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DndContext_js__WEBPACK_IMPORTED_MODULE_2__/* .DndContext */ .M.Provider, {
        value: manager,
        children: children
    });
});
/**
 * A React component that provides the React-DnD context
 */ 
function getDndContextValue(props) {
    if ('manager' in props) {
        const manager = {
            dragDropManager: props.manager
        };
        return [
            manager,
            false
        ];
    }
    const manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode);
    const isGlobalInstance = !props.context;
    return [
        manager,
        isGlobalInstance
    ];
}
function createSingletonDndContext(backend, context = getGlobalContext(), options, debugMode) {
    const ctx = context;
    if (!ctx[INSTANCE_SYM]) {
        ctx[INSTANCE_SYM] = {
            dragDropManager: (0,dnd_core__WEBPACK_IMPORTED_MODULE_3__/* .createDragDropManager */ .b)(backend, context, options, debugMode)
        };
    }
    return ctx[INSTANCE_SYM];
}
function getGlobalContext() {
    return typeof global !== 'undefined' ? global : window;
}

//# sourceMappingURL=DndProvider.js.map

/***/ }),

/***/ 8576:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  j: () => (/* binding */ useCollectedProps)
});

// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useCollector.js
var useCollector = __webpack_require__(6970);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(27727);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/hooks/useMonitorOutput.js


function useMonitorOutput(monitor, collect, onCollect) {
    const [collected, updateCollected] = (0,useCollector/* useCollector */.F)(monitor, collect, onCollect);
    (0,useIsomorphicLayoutEffect/* useIsomorphicLayoutEffect */.E)(function subscribeToMonitorStateChange() {
        const handlerId = monitor.getHandlerId();
        if (handlerId == null) {
            return;
        }
        return monitor.subscribeToStateChange(updateCollected, {
            handlerIds: [
                handlerId
            ]
        });
    }, [
        monitor,
        updateCollected
    ]);
    return collected;
}

//# sourceMappingURL=useMonitorOutput.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/hooks/useCollectedProps.js

function useCollectedProps(collector, monitor, connector) {
    return useMonitorOutput(monitor, collector || (()=>({})
    ), ()=>connector.reconnect()
    );
}

//# sourceMappingURL=useCollectedProps.js.map

/***/ }),

/***/ 6970:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ useCollector)
/* harmony export */ });
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32017);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var _useIsomorphicLayoutEffect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27727);



/**
 *
 * @param monitor The monitor to collect state from
 * @param collect The collecting function
 * @param onUpdate A method to invoke when updates occur
 */ function useCollector(monitor, collect, onUpdate) {
    const [collected, setCollected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>collect(monitor)
    );
    const updateCollected = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const nextValue = collect(monitor);
        // This needs to be a deep-equality check because some monitor-collected values
        // include XYCoord objects that may be equivalent, but do not have instance equality.
        if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__(collected, nextValue)) {
            setCollected(nextValue);
            if (onUpdate) {
                onUpdate();
            }
        }
    }, [
        collected,
        monitor,
        onUpdate
    ]);
    // update the collected properties after react renders.
    // Note that the "Dustbin Stress Test" fails if this is not
    // done when the component updates
    (0,_useIsomorphicLayoutEffect_js__WEBPACK_IMPORTED_MODULE_2__/* .useIsomorphicLayoutEffect */ .E)(updateCollected);
    return [
        collected,
        updateCollected
    ];
}

//# sourceMappingURL=useCollector.js.map

/***/ }),

/***/ 56143:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ useDragDropManager)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79396);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10912);



/**
 * A hook to retrieve the DragDropManager from Context
 */ function useDragDropManager() {
    const { dragDropManager  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_core_index_js__WEBPACK_IMPORTED_MODULE_1__/* .DndContext */ .M);
    (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_2__/* .invariant */ .V)(dragDropManager != null, 'Expected drag drop context');
    return dragDropManager;
}

//# sourceMappingURL=useDragDropManager.js.map

/***/ }),

/***/ 58410:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  i: () => (/* binding */ useDrag)
});

// EXTERNAL MODULE: ./node_modules/@react-dnd/invariant/dist/index.js
var dist = __webpack_require__(79396);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useCollectedProps.js + 1 modules
var useCollectedProps = __webpack_require__(8576);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useOptionalFactory.js
var useOptionalFactory = __webpack_require__(27739);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/hooks/useDrag/connectors.js

function useConnectDragSource(connector) {
    return (0,react.useMemo)(()=>connector.hooks.dragSource()
    , [
        connector
    ]);
}
function useConnectDragPreview(connector) {
    return (0,react.useMemo)(()=>connector.hooks.dragPreview()
    , [
        connector
    ]);
}

//# sourceMappingURL=connectors.js.map
// EXTERNAL MODULE: ./node_modules/@react-dnd/shallowequal/dist/index.js
var shallowequal_dist = __webpack_require__(31670);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/internals/isRef.js
var isRef = __webpack_require__(58853);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/internals/wrapConnectorHooks.js
var wrapConnectorHooks = __webpack_require__(71643);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/internals/SourceConnector.js



class SourceConnector {
    receiveHandlerId(newHandlerId) {
        if (this.handlerId === newHandlerId) {
            return;
        }
        this.handlerId = newHandlerId;
        this.reconnect();
    }
    get connectTarget() {
        return this.dragSource;
    }
    get dragSourceOptions() {
        return this.dragSourceOptionsInternal;
    }
    set dragSourceOptions(options) {
        this.dragSourceOptionsInternal = options;
    }
    get dragPreviewOptions() {
        return this.dragPreviewOptionsInternal;
    }
    set dragPreviewOptions(options) {
        this.dragPreviewOptionsInternal = options;
    }
    reconnect() {
        const didChange = this.reconnectDragSource();
        this.reconnectDragPreview(didChange);
    }
    reconnectDragSource() {
        const dragSource = this.dragSource;
        // if nothing has changed then don't resubscribe
        const didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
        if (didChange) {
            this.disconnectDragSource();
        }
        if (!this.handlerId) {
            return didChange;
        }
        if (!dragSource) {
            this.lastConnectedDragSource = dragSource;
            return didChange;
        }
        if (didChange) {
            this.lastConnectedHandlerId = this.handlerId;
            this.lastConnectedDragSource = dragSource;
            this.lastConnectedDragSourceOptions = this.dragSourceOptions;
            this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions);
        }
        return didChange;
    }
    reconnectDragPreview(forceDidChange = false) {
        const dragPreview = this.dragPreview;
        // if nothing has changed then don't resubscribe
        const didChange = forceDidChange || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
        if (didChange) {
            this.disconnectDragPreview();
        }
        if (!this.handlerId) {
            return;
        }
        if (!dragPreview) {
            this.lastConnectedDragPreview = dragPreview;
            return;
        }
        if (didChange) {
            this.lastConnectedHandlerId = this.handlerId;
            this.lastConnectedDragPreview = dragPreview;
            this.lastConnectedDragPreviewOptions = this.dragPreviewOptions;
            this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions);
        }
    }
    didHandlerIdChange() {
        return this.lastConnectedHandlerId !== this.handlerId;
    }
    didConnectedDragSourceChange() {
        return this.lastConnectedDragSource !== this.dragSource;
    }
    didConnectedDragPreviewChange() {
        return this.lastConnectedDragPreview !== this.dragPreview;
    }
    didDragSourceOptionsChange() {
        return !(0,shallowequal_dist/* shallowEqual */.b)(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
    didDragPreviewOptionsChange() {
        return !(0,shallowequal_dist/* shallowEqual */.b)(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
    }
    disconnectDragSource() {
        if (this.dragSourceUnsubscribe) {
            this.dragSourceUnsubscribe();
            this.dragSourceUnsubscribe = undefined;
        }
    }
    disconnectDragPreview() {
        if (this.dragPreviewUnsubscribe) {
            this.dragPreviewUnsubscribe();
            this.dragPreviewUnsubscribe = undefined;
            this.dragPreviewNode = null;
            this.dragPreviewRef = null;
        }
    }
    get dragSource() {
        return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
    }
    get dragPreview() {
        return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
    }
    clearDragSource() {
        this.dragSourceNode = null;
        this.dragSourceRef = null;
    }
    clearDragPreview() {
        this.dragPreviewNode = null;
        this.dragPreviewRef = null;
    }
    constructor(backend){
        this.hooks = (0,wrapConnectorHooks/* wrapConnectorHooks */.i)({
            dragSource: (node, options)=>{
                this.clearDragSource();
                this.dragSourceOptions = options || null;
                if ((0,isRef/* isRef */.i)(node)) {
                    this.dragSourceRef = node;
                } else {
                    this.dragSourceNode = node;
                }
                this.reconnectDragSource();
            },
            dragPreview: (node, options)=>{
                this.clearDragPreview();
                this.dragPreviewOptions = options || null;
                if ((0,isRef/* isRef */.i)(node)) {
                    this.dragPreviewRef = node;
                } else {
                    this.dragPreviewNode = node;
                }
                this.reconnectDragPreview();
            }
        });
        this.handlerId = null;
        // The drop target may either be attached via ref or connect function
        this.dragSourceRef = null;
        this.dragSourceOptionsInternal = null;
        // The drag preview may either be attached via ref or connect function
        this.dragPreviewRef = null;
        this.dragPreviewOptionsInternal = null;
        this.lastConnectedHandlerId = null;
        this.lastConnectedDragSource = null;
        this.lastConnectedDragSourceOptions = null;
        this.lastConnectedDragPreview = null;
        this.lastConnectedDragPreviewOptions = null;
        this.backend = backend;
    }
}

//# sourceMappingURL=SourceConnector.js.map
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useDragDropManager.js
var useDragDropManager = __webpack_require__(56143);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(27727);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/hooks/useDrag/useDragSourceConnector.js




function useDragSourceConnector(dragSourceOptions, dragPreviewOptions) {
    const manager = (0,useDragDropManager/* useDragDropManager */.u)();
    const connector = (0,react.useMemo)(()=>new SourceConnector(manager.getBackend())
    , [
        manager
    ]);
    (0,useIsomorphicLayoutEffect/* useIsomorphicLayoutEffect */.E)(()=>{
        connector.dragSourceOptions = dragSourceOptions || null;
        connector.reconnect();
        return ()=>connector.disconnectDragSource()
        ;
    }, [
        connector,
        dragSourceOptions
    ]);
    (0,useIsomorphicLayoutEffect/* useIsomorphicLayoutEffect */.E)(()=>{
        connector.dragPreviewOptions = dragPreviewOptions || null;
        connector.reconnect();
        return ()=>connector.disconnectDragPreview()
        ;
    }, [
        connector,
        dragPreviewOptions
    ]);
    return connector;
}

//# sourceMappingURL=useDragSourceConnector.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/internals/DragSourceMonitorImpl.js

let isCallingCanDrag = false;
let isCallingIsDragging = false;
class DragSourceMonitorImpl {
    receiveHandlerId(sourceId) {
        this.sourceId = sourceId;
    }
    getHandlerId() {
        return this.sourceId;
    }
    canDrag() {
        (0,dist/* invariant */.V)(!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');
        try {
            isCallingCanDrag = true;
            return this.internalMonitor.canDragSource(this.sourceId);
        } finally{
            isCallingCanDrag = false;
        }
    }
    isDragging() {
        if (!this.sourceId) {
            return false;
        }
        (0,dist/* invariant */.V)(!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');
        try {
            isCallingIsDragging = true;
            return this.internalMonitor.isDraggingSource(this.sourceId);
        } finally{
            isCallingIsDragging = false;
        }
    }
    subscribeToStateChange(listener, options) {
        return this.internalMonitor.subscribeToStateChange(listener, options);
    }
    isDraggingSource(sourceId) {
        return this.internalMonitor.isDraggingSource(sourceId);
    }
    isOverTarget(targetId, options) {
        return this.internalMonitor.isOverTarget(targetId, options);
    }
    getTargetIds() {
        return this.internalMonitor.getTargetIds();
    }
    isSourcePublic() {
        return this.internalMonitor.isSourcePublic();
    }
    getSourceId() {
        return this.internalMonitor.getSourceId();
    }
    subscribeToOffsetChange(listener) {
        return this.internalMonitor.subscribeToOffsetChange(listener);
    }
    canDragSource(sourceId) {
        return this.internalMonitor.canDragSource(sourceId);
    }
    canDropOnTarget(targetId) {
        return this.internalMonitor.canDropOnTarget(targetId);
    }
    getItemType() {
        return this.internalMonitor.getItemType();
    }
    getItem() {
        return this.internalMonitor.getItem();
    }
    getDropResult() {
        return this.internalMonitor.getDropResult();
    }
    didDrop() {
        return this.internalMonitor.didDrop();
    }
    getInitialClientOffset() {
        return this.internalMonitor.getInitialClientOffset();
    }
    getInitialSourceClientOffset() {
        return this.internalMonitor.getInitialSourceClientOffset();
    }
    getSourceClientOffset() {
        return this.internalMonitor.getSourceClientOffset();
    }
    getClientOffset() {
        return this.internalMonitor.getClientOffset();
    }
    getDifferenceFromInitialOffset() {
        return this.internalMonitor.getDifferenceFromInitialOffset();
    }
    constructor(manager){
        this.sourceId = null;
        this.internalMonitor = manager.getMonitor();
    }
}

//# sourceMappingURL=DragSourceMonitorImpl.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/hooks/useDrag/useDragSourceMonitor.js



function useDragSourceMonitor() {
    const manager = (0,useDragDropManager/* useDragDropManager */.u)();
    return (0,react.useMemo)(()=>new DragSourceMonitorImpl(manager)
    , [
        manager
    ]);
}

//# sourceMappingURL=useDragSourceMonitor.js.map
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/internals/registration.js
var registration = __webpack_require__(85711);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/hooks/useDrag/DragSourceImpl.js
class DragSourceImpl {
    beginDrag() {
        const spec = this.spec;
        const monitor = this.monitor;
        let result = null;
        if (typeof spec.item === 'object') {
            result = spec.item;
        } else if (typeof spec.item === 'function') {
            result = spec.item(monitor);
        } else {
            result = {};
        }
        return result !== null && result !== void 0 ? result : null;
    }
    canDrag() {
        const spec = this.spec;
        const monitor = this.monitor;
        if (typeof spec.canDrag === 'boolean') {
            return spec.canDrag;
        } else if (typeof spec.canDrag === 'function') {
            return spec.canDrag(monitor);
        } else {
            return true;
        }
    }
    isDragging(globalMonitor, target) {
        const spec = this.spec;
        const monitor = this.monitor;
        const { isDragging  } = spec;
        return isDragging ? isDragging(monitor) : target === globalMonitor.getSourceId();
    }
    endDrag() {
        const spec = this.spec;
        const monitor = this.monitor;
        const connector = this.connector;
        const { end  } = spec;
        if (end) {
            end(monitor.getItem(), monitor);
        }
        connector.reconnect();
    }
    constructor(spec, monitor, connector){
        this.spec = spec;
        this.monitor = monitor;
        this.connector = connector;
    }
}

//# sourceMappingURL=DragSourceImpl.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/hooks/useDrag/useDragSource.js


function useDragSource(spec, monitor, connector) {
    const handler = (0,react.useMemo)(()=>new DragSourceImpl(spec, monitor, connector)
    , [
        monitor,
        connector
    ]);
    (0,react.useEffect)(()=>{
        handler.spec = spec;
    }, [
        spec
    ]);
    return handler;
}

//# sourceMappingURL=useDragSource.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/hooks/useDrag/useDragType.js


function useDragType(spec) {
    return (0,react.useMemo)(()=>{
        const result = spec.type;
        (0,dist/* invariant */.V)(result != null, 'spec.type must be defined');
        return result;
    }, [
        spec
    ]);
}

//# sourceMappingURL=useDragType.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/hooks/useDrag/useRegisteredDragSource.js





function useRegisteredDragSource(spec, monitor, connector) {
    const manager = (0,useDragDropManager/* useDragDropManager */.u)();
    const handler = useDragSource(spec, monitor, connector);
    const itemType = useDragType(spec);
    (0,useIsomorphicLayoutEffect/* useIsomorphicLayoutEffect */.E)(function registerDragSource() {
        if (itemType != null) {
            const [handlerId, unregister] = (0,registration/* registerSource */.V)(itemType, handler, manager);
            monitor.receiveHandlerId(handlerId);
            connector.receiveHandlerId(handlerId);
            return unregister;
        }
        return;
    }, [
        manager,
        monitor,
        connector,
        handler,
        itemType
    ]);
}

//# sourceMappingURL=useRegisteredDragSource.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/hooks/useDrag/useDrag.js







/**
 * useDragSource hook
 * @param sourceSpec The drag source specification (object or function, function preferred)
 * @param deps The memoization deps array to use when evaluating spec changes
 */ function useDrag(specArg, deps) {
    const spec = (0,useOptionalFactory/* useOptionalFactory */.I)(specArg, deps);
    (0,dist/* invariant */.V)(!spec.begin, `useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)`);
    const monitor = useDragSourceMonitor();
    const connector = useDragSourceConnector(spec.options, spec.previewOptions);
    useRegisteredDragSource(spec, monitor, connector);
    return [
        (0,useCollectedProps/* useCollectedProps */.j)(spec.collect, monitor, connector),
        useConnectDragSource(connector),
        useConnectDragPreview(connector), 
    ];
}

//# sourceMappingURL=useDrag.js.map

/***/ }),

/***/ 5079:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H: () => (/* binding */ useDrop)
});

// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useCollectedProps.js + 1 modules
var useCollectedProps = __webpack_require__(8576);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useOptionalFactory.js
var useOptionalFactory = __webpack_require__(27739);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/hooks/useDrop/connectors.js

function useConnectDropTarget(connector) {
    return (0,react.useMemo)(()=>connector.hooks.dropTarget()
    , [
        connector
    ]);
}

//# sourceMappingURL=connectors.js.map
// EXTERNAL MODULE: ./node_modules/@react-dnd/shallowequal/dist/index.js
var dist = __webpack_require__(31670);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/internals/isRef.js
var isRef = __webpack_require__(58853);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/internals/wrapConnectorHooks.js
var wrapConnectorHooks = __webpack_require__(71643);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/internals/TargetConnector.js



class TargetConnector {
    get connectTarget() {
        return this.dropTarget;
    }
    reconnect() {
        // if nothing has changed then don't resubscribe
        const didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
        if (didChange) {
            this.disconnectDropTarget();
        }
        const dropTarget = this.dropTarget;
        if (!this.handlerId) {
            return;
        }
        if (!dropTarget) {
            this.lastConnectedDropTarget = dropTarget;
            return;
        }
        if (didChange) {
            this.lastConnectedHandlerId = this.handlerId;
            this.lastConnectedDropTarget = dropTarget;
            this.lastConnectedDropTargetOptions = this.dropTargetOptions;
            this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
        }
    }
    receiveHandlerId(newHandlerId) {
        if (newHandlerId === this.handlerId) {
            return;
        }
        this.handlerId = newHandlerId;
        this.reconnect();
    }
    get dropTargetOptions() {
        return this.dropTargetOptionsInternal;
    }
    set dropTargetOptions(options) {
        this.dropTargetOptionsInternal = options;
    }
    didHandlerIdChange() {
        return this.lastConnectedHandlerId !== this.handlerId;
    }
    didDropTargetChange() {
        return this.lastConnectedDropTarget !== this.dropTarget;
    }
    didOptionsChange() {
        return !(0,dist/* shallowEqual */.b)(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
    }
    disconnectDropTarget() {
        if (this.unsubscribeDropTarget) {
            this.unsubscribeDropTarget();
            this.unsubscribeDropTarget = undefined;
        }
    }
    get dropTarget() {
        return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
    }
    clearDropTarget() {
        this.dropTargetRef = null;
        this.dropTargetNode = null;
    }
    constructor(backend){
        this.hooks = (0,wrapConnectorHooks/* wrapConnectorHooks */.i)({
            dropTarget: (node, options)=>{
                this.clearDropTarget();
                this.dropTargetOptions = options;
                if ((0,isRef/* isRef */.i)(node)) {
                    this.dropTargetRef = node;
                } else {
                    this.dropTargetNode = node;
                }
                this.reconnect();
            }
        });
        this.handlerId = null;
        // The drop target may either be attached via ref or connect function
        this.dropTargetRef = null;
        this.dropTargetOptionsInternal = null;
        this.lastConnectedHandlerId = null;
        this.lastConnectedDropTarget = null;
        this.lastConnectedDropTargetOptions = null;
        this.backend = backend;
    }
}

//# sourceMappingURL=TargetConnector.js.map
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useDragDropManager.js
var useDragDropManager = __webpack_require__(56143);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(27727);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/hooks/useDrop/useDropTargetConnector.js




function useDropTargetConnector(options) {
    const manager = (0,useDragDropManager/* useDragDropManager */.u)();
    const connector = (0,react.useMemo)(()=>new TargetConnector(manager.getBackend())
    , [
        manager
    ]);
    (0,useIsomorphicLayoutEffect/* useIsomorphicLayoutEffect */.E)(()=>{
        connector.dropTargetOptions = options || null;
        connector.reconnect();
        return ()=>connector.disconnectDropTarget()
        ;
    }, [
        options
    ]);
    return connector;
}

//# sourceMappingURL=useDropTargetConnector.js.map
// EXTERNAL MODULE: ./node_modules/@react-dnd/invariant/dist/index.js
var invariant_dist = __webpack_require__(79396);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/internals/DropTargetMonitorImpl.js

let isCallingCanDrop = false;
class DropTargetMonitorImpl {
    receiveHandlerId(targetId) {
        this.targetId = targetId;
    }
    getHandlerId() {
        return this.targetId;
    }
    subscribeToStateChange(listener, options) {
        return this.internalMonitor.subscribeToStateChange(listener, options);
    }
    canDrop() {
        // Cut out early if the target id has not been set. This should prevent errors
        // where the user has an older version of dnd-core like in
        // https://github.com/react-dnd/react-dnd/issues/1310
        if (!this.targetId) {
            return false;
        }
        (0,invariant_dist/* invariant */.V)(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor');
        try {
            isCallingCanDrop = true;
            return this.internalMonitor.canDropOnTarget(this.targetId);
        } finally{
            isCallingCanDrop = false;
        }
    }
    isOver(options) {
        if (!this.targetId) {
            return false;
        }
        return this.internalMonitor.isOverTarget(this.targetId, options);
    }
    getItemType() {
        return this.internalMonitor.getItemType();
    }
    getItem() {
        return this.internalMonitor.getItem();
    }
    getDropResult() {
        return this.internalMonitor.getDropResult();
    }
    didDrop() {
        return this.internalMonitor.didDrop();
    }
    getInitialClientOffset() {
        return this.internalMonitor.getInitialClientOffset();
    }
    getInitialSourceClientOffset() {
        return this.internalMonitor.getInitialSourceClientOffset();
    }
    getSourceClientOffset() {
        return this.internalMonitor.getSourceClientOffset();
    }
    getClientOffset() {
        return this.internalMonitor.getClientOffset();
    }
    getDifferenceFromInitialOffset() {
        return this.internalMonitor.getDifferenceFromInitialOffset();
    }
    constructor(manager){
        this.targetId = null;
        this.internalMonitor = manager.getMonitor();
    }
}

//# sourceMappingURL=DropTargetMonitorImpl.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/hooks/useDrop/useDropTargetMonitor.js



function useDropTargetMonitor() {
    const manager = (0,useDragDropManager/* useDragDropManager */.u)();
    return (0,react.useMemo)(()=>new DropTargetMonitorImpl(manager)
    , [
        manager
    ]);
}

//# sourceMappingURL=useDropTargetMonitor.js.map
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/internals/registration.js
var registration = __webpack_require__(85711);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/hooks/useDrop/useAccept.js


/**
 * Internal utility hook to get an array-version of spec.accept.
 * The main utility here is that we aren't creating a new array on every render if a non-array spec.accept is passed in.
 * @param spec
 */ function useAccept(spec) {
    const { accept  } = spec;
    return (0,react.useMemo)(()=>{
        (0,invariant_dist/* invariant */.V)(spec.accept != null, 'accept must be defined');
        return Array.isArray(accept) ? accept : [
            accept
        ];
    }, [
        accept
    ]);
}

//# sourceMappingURL=useAccept.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/hooks/useDrop/DropTargetImpl.js
class DropTargetImpl {
    canDrop() {
        const spec = this.spec;
        const monitor = this.monitor;
        return spec.canDrop ? spec.canDrop(monitor.getItem(), monitor) : true;
    }
    hover() {
        const spec = this.spec;
        const monitor = this.monitor;
        if (spec.hover) {
            spec.hover(monitor.getItem(), monitor);
        }
    }
    drop() {
        const spec = this.spec;
        const monitor = this.monitor;
        if (spec.drop) {
            return spec.drop(monitor.getItem(), monitor);
        }
        return;
    }
    constructor(spec, monitor){
        this.spec = spec;
        this.monitor = monitor;
    }
}

//# sourceMappingURL=DropTargetImpl.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/hooks/useDrop/useDropTarget.js


function useDropTarget(spec, monitor) {
    const dropTarget = (0,react.useMemo)(()=>new DropTargetImpl(spec, monitor)
    , [
        monitor
    ]);
    (0,react.useEffect)(()=>{
        dropTarget.spec = spec;
    }, [
        spec
    ]);
    return dropTarget;
}

//# sourceMappingURL=useDropTarget.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/hooks/useDrop/useRegisteredDropTarget.js





function useRegisteredDropTarget(spec, monitor, connector) {
    const manager = (0,useDragDropManager/* useDragDropManager */.u)();
    const dropTarget = useDropTarget(spec, monitor);
    const accept = useAccept(spec);
    (0,useIsomorphicLayoutEffect/* useIsomorphicLayoutEffect */.E)(function registerDropTarget() {
        const [handlerId, unregister] = (0,registration/* registerTarget */.l)(accept, dropTarget, manager);
        monitor.receiveHandlerId(handlerId);
        connector.receiveHandlerId(handlerId);
        return unregister;
    }, [
        manager,
        monitor,
        dropTarget,
        connector,
        accept.map((a)=>a.toString()
        ).join('|'), 
    ]);
}

//# sourceMappingURL=useRegisteredDropTarget.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/hooks/useDrop/useDrop.js






/**
 * useDropTarget Hook
 * @param spec The drop target specification (object or function, function preferred)
 * @param deps The memoization deps array to use when evaluating spec changes
 */ function useDrop(specArg, deps) {
    const spec = (0,useOptionalFactory/* useOptionalFactory */.I)(specArg, deps);
    const monitor = useDropTargetMonitor();
    const connector = useDropTargetConnector(spec.options);
    useRegisteredDropTarget(spec, monitor, connector);
    return [
        (0,useCollectedProps/* useCollectedProps */.j)(spec.collect, monitor, connector),
        useConnectDropTarget(connector), 
    ];
}

//# sourceMappingURL=useDrop.js.map

/***/ }),

/***/ 27727:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ useIsomorphicLayoutEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);

// suppress the useLayoutEffect warning on server side.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

//# sourceMappingURL=useIsomorphicLayoutEffect.js.map

/***/ }),

/***/ 27739:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ useOptionalFactory)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);

function useOptionalFactory(arg, deps) {
    const memoDeps = [
        ...deps || []
    ];
    if (deps == null && typeof arg !== 'function') {
        memoDeps.push(arg);
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return typeof arg === 'function' ? arg() : arg;
    }, memoDeps);
}

//# sourceMappingURL=useOptionalFactory.js.map

/***/ }),

/***/ 62339:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DndContext: () => (/* reexport */ DndContext/* DndContext */.M),
  DndProvider: () => (/* reexport */ DndProvider/* DndProvider */.Q),
  DragPreviewImage: () => (/* reexport */ DragPreviewImage),
  useDrag: () => (/* reexport */ useDrag/* useDrag */.i),
  useDragDropManager: () => (/* reexport */ useDragDropManager/* useDragDropManager */.u),
  useDragLayer: () => (/* reexport */ useDragLayer),
  useDrop: () => (/* reexport */ useDrop/* useDrop */.H)
});

// EXTERNAL MODULE: ./node_modules/react-dnd/dist/core/DndContext.js
var DndContext = __webpack_require__(10912);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/core/DndProvider.js
var DndProvider = __webpack_require__(67782);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/core/DragPreviewImage.js

/**
 * A utility for rendering a drag preview image
 */ const DragPreviewImage = (0,react.memo)(function DragPreviewImage({ connect , src  }) {
    (0,react.useEffect)(()=>{
        if (typeof Image === 'undefined') return;
        let connected = false;
        const img = new Image();
        img.src = src;
        img.onload = ()=>{
            connect(img);
            connected = true;
        };
        return ()=>{
            if (connected) {
                connect(null);
            }
        };
    });
    return null;
});

//# sourceMappingURL=DragPreviewImage.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/core/index.js




//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useDrag/useDrag.js + 9 modules
var useDrag = __webpack_require__(58410);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/hooks/useDrag/index.js


//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useDragDropManager.js
var useDragDropManager = __webpack_require__(56143);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useCollector.js
var useCollector = __webpack_require__(6970);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/hooks/useDragLayer.js



/**
 * useDragLayer Hook
 * @param collector The property collector
 */ function useDragLayer(collect) {
    const dragDropManager = (0,useDragDropManager/* useDragDropManager */.u)();
    const monitor = dragDropManager.getMonitor();
    const [collected, updateCollected] = (0,useCollector/* useCollector */.F)(monitor, collect);
    (0,react.useEffect)(()=>monitor.subscribeToOffsetChange(updateCollected)
    );
    (0,react.useEffect)(()=>monitor.subscribeToStateChange(updateCollected)
    );
    return collected;
}

//# sourceMappingURL=useDragLayer.js.map
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useDrop/useDrop.js + 9 modules
var useDrop = __webpack_require__(5079);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/hooks/useDrop/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/hooks/index.js






//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/index.js




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 58853:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ isRef)
/* harmony export */ });
function isRef(obj) {
    return(// eslint-disable-next-line no-prototype-builtins
    obj !== null && typeof obj === 'object' && Object.prototype.hasOwnProperty.call(obj, 'current'));
}

//# sourceMappingURL=isRef.js.map

/***/ }),

/***/ 85711:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ registerSource),
/* harmony export */   l: () => (/* binding */ registerTarget)
/* harmony export */ });
function registerTarget(type, target, manager) {
    const registry = manager.getRegistry();
    const targetId = registry.addTarget(type, target);
    return [
        targetId,
        ()=>registry.removeTarget(targetId)
    ];
}
function registerSource(type, source, manager) {
    const registry = manager.getRegistry();
    const sourceId = registry.addSource(type, source);
    return [
        sourceId,
        ()=>registry.removeSource(sourceId)
    ];
}

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 71643:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ wrapConnectorHooks)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79396);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


function throwIfCompositeComponentElement(element) {
    // Custom components can no longer be wrapped directly in React DnD 2.0
    // so that we don't need to depend on findDOMNode() from react-dom.
    if (typeof element.type === 'string') {
        return;
    }
    const displayName = element.type.displayName || element.type.name || 'the component';
    throw new Error('Only native element nodes can now be passed to React DnD connectors.' + `You can either wrap ${displayName} into a <div>, or turn it into a ` + 'drag source or a drop target itself.');
}
function wrapHookToRecognizeElement(hook) {
    return (elementOrNode = null, options = null)=>{
        // When passed a node, call the hook straight away.
        if (!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(elementOrNode)) {
            const node = elementOrNode;
            hook(node, options);
            // return the node so it can be chained (e.g. when within callback refs
            // <div ref={node => connectDragSource(connectDropTarget(node))}/>
            return node;
        }
        // If passed a ReactElement, clone it and attach this function as a ref.
        // This helps us achieve a neat API where user doesn't even know that refs
        // are being used under the hood.
        const element = elementOrNode;
        throwIfCompositeComponentElement(element);
        // When no options are passed, use the hook directly
        const ref = options ? (node)=>hook(node, options)
         : hook;
        return cloneWithRef(element, ref);
    };
}
function wrapConnectorHooks(hooks) {
    const wrappedHooks = {};
    Object.keys(hooks).forEach((key)=>{
        const hook = hooks[key];
        // ref objects should be passed straight through without wrapping
        if (key.endsWith('Ref')) {
            wrappedHooks[key] = hooks[key];
        } else {
            const wrappedHook = wrapHookToRecognizeElement(hook);
            wrappedHooks[key] = ()=>wrappedHook
            ;
        }
    });
    return wrappedHooks;
}
function setRef(ref, node) {
    if (typeof ref === 'function') {
        ref(node);
    } else {
        ref.current = node;
    }
}
function cloneWithRef(element, newRef) {
    const previousRef = element.ref;
    (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .V)(typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' + 'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' + 'Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs');
    if (!previousRef) {
        // When there is no ref on the element, use the new ref directly
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element, {
            ref: newRef
        });
    } else {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element, {
            ref: (node)=>{
                setRef(previousRef, node);
                setRef(newRef, node);
            }
        });
    }
}

//# sourceMappingURL=wrapConnectorHooks.js.map

/***/ }),

/***/ 18149:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  oS: () => (/* binding */ QueryBuilder),
  PD: () => (/* binding */ QueryBuilderContext),
  W: () => (/* binding */ TestID),
  Pm: () => (/* binding */ ValueEditor),
  AP: () => (/* binding */ convertFromIC),
  vT: () => (/* binding */ convertToIC),
  HI: () => (/* binding */ defaultControlClassnames),
  YM: () => (/* binding */ defaultControlElements),
  Cr: () => (/* binding */ defaultTranslations),
  yJ: () => (/* binding */ defaultValueProcessorByRule),
  OJ: () => (/* binding */ formatQuery),
  ni: () => (/* binding */ generateID),
  D7: () => (/* binding */ getCompatContextProvider),
  _6: () => (/* binding */ getParentPath),
  QX: () => (/* binding */ isAncestor),
  GD: () => (/* binding */ isRuleGroup),
  wS: () => (/* binding */ isRuleGroupType),
  G$: () => (/* binding */ isRuleGroupTypeIC),
  _E: () => (/* binding */ parseSQL),
  P9: () => (/* binding */ pathsAreEqual),
  q4: () => (/* binding */ standardClassnames),
  JZ: () => (/* binding */ useMergedContext),
  $_: () => (/* binding */ usePreferProp)
});

// UNUSED EXPORTS: ActionElement, DragHandle, InlineCombinator, LogType, NotToggle, Rule, RuleComponents, RuleGroup, RuleGroupBodyComponents, RuleGroupHeaderComponents, ValueSelector, add, convertQuery, default, defaultCELValueProcessor, defaultCombinators, defaultCombinatorsExtended, defaultJoinChar, defaultMongoDBValueProcessor, defaultOperatorNegationMap, defaultOperators, defaultPlaceholderFieldGroupLabel, defaultPlaceholderFieldLabel, defaultPlaceholderFieldName, defaultPlaceholderOperatorGroupLabel, defaultPlaceholderOperatorLabel, defaultPlaceholderOperatorName, defaultRuleProcessorCEL, defaultRuleProcessorJsonLogic, defaultRuleProcessorMongoDB, defaultRuleProcessorSQL, defaultRuleProcessorSpEL, defaultSpELValueProcessor, defaultValidator, defaultValueProcessor, defaultValueProcessorCELByRule, defaultValueProcessorMongoDBByRule, defaultValueProcessorSpELByRule, filterFieldsByComparator, findPath, getCommonAncestorPath, getFirstOption, getOption, getValidationClassNames, getValueSourcesUtil, groupInvalidReasons, isOptionGroupArray, isPojo, isRuleOrGroupValid, isValidationResult, joinWith, jsonLogicAdditionalOperators, mergeClassnames, messages, move, nullFreeArray, numericRegex, objectKeys, parseCEL, parseJsonLogic, parseMongoDB, parseNumber, pathIsDisabled, prepareRule, prepareRuleGroup, prepareRuleOrGroup, regenerateID, regenerateIDs, remove, splitBy, toArray, toOptions, transformQuery, trimIfString, uniqByName, uniqOptGroups, update, useControlledOrUncontrolled, useDeprecatedProps, usePrevious, useQueryBuilder, useReactDndWarning, useRule, useRuleGroup, useSelectElementChangeHandler, useValueEditor, useValueSelector

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// CONCATENATED MODULE: ./node_modules/clsx/dist/clsx.m.js
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const clsx_m = (clsx);
;// CONCATENATED MODULE: ./node_modules/immer/dist/immer.mjs
// src/utils/env.ts
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");

// src/utils/errors.ts
var errors =  false ? 0 : [];
function die(error, ...args) {
  if (false) {}
  throw new Error(
    `[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
  );
}

// src/utils/common.ts
var getPrototypeOf = Object.getPrototypeOf;
function isDraft(value) {
  return !!value && !!value[DRAFT_STATE];
}
function isDraftable(value) {
  if (!value)
    return false;
  return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
}
var objectCtorString = Object.prototype.constructor.toString();
function isPlainObject(value) {
  if (!value || typeof value !== "object")
    return false;
  const proto = getPrototypeOf(value);
  if (proto === null) {
    return true;
  }
  const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  if (Ctor === Object)
    return true;
  return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
}
function original(value) {
  if (!isDraft(value))
    die(15, value);
  return value[DRAFT_STATE].base_;
}
function each(obj, iter) {
  if (getArchtype(obj) === 0 /* Object */) {
    Reflect.ownKeys(obj).forEach((key) => {
      iter(key, obj[key], obj);
    });
  } else {
    obj.forEach((entry, index) => iter(index, entry, obj));
  }
}
function getArchtype(thing) {
  const state = thing[DRAFT_STATE];
  return state ? state.type_ : Array.isArray(thing) ? 1 /* Array */ : isMap(thing) ? 2 /* Map */ : isSet(thing) ? 3 /* Set */ : 0 /* Object */;
}
function has(thing, prop) {
  return getArchtype(thing) === 2 /* Map */ ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function get(thing, prop) {
  return getArchtype(thing) === 2 /* Map */ ? thing.get(prop) : thing[prop];
}
function set(thing, propOrOldValue, value) {
  const t = getArchtype(thing);
  if (t === 2 /* Map */)
    thing.set(propOrOldValue, value);
  else if (t === 3 /* Set */) {
    thing.add(value);
  } else
    thing[propOrOldValue] = value;
}
function is(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function isMap(target) {
  return target instanceof Map;
}
function isSet(target) {
  return target instanceof Set;
}
function latest(state) {
  return state.copy_ || state.base_;
}
function shallowCopy(base, strict) {
  if (isMap(base)) {
    return new Map(base);
  }
  if (isSet(base)) {
    return new Set(base);
  }
  if (Array.isArray(base))
    return Array.prototype.slice.call(base);
  const isPlain = isPlainObject(base);
  if (strict === true || strict === "class_only" && !isPlain) {
    const descriptors = Object.getOwnPropertyDescriptors(base);
    delete descriptors[DRAFT_STATE];
    let keys = Reflect.ownKeys(descriptors);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const desc = descriptors[key];
      if (desc.writable === false) {
        desc.writable = true;
        desc.configurable = true;
      }
      if (desc.get || desc.set)
        descriptors[key] = {
          configurable: true,
          writable: true,
          // could live with !!desc.set as well here...
          enumerable: desc.enumerable,
          value: base[key]
        };
    }
    return Object.create(getPrototypeOf(base), descriptors);
  } else {
    const proto = getPrototypeOf(base);
    if (proto !== null && isPlain) {
      return { ...base };
    }
    const obj = Object.create(proto);
    return Object.assign(obj, base);
  }
}
function freeze(obj, deep = false) {
  if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
    return obj;
  if (getArchtype(obj) > 1) {
    obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
  }
  Object.freeze(obj);
  if (deep)
    Object.entries(obj).forEach(([key, value]) => freeze(value, true));
  return obj;
}
function dontMutateFrozenCollections() {
  die(2);
}
function isFrozen(obj) {
  return Object.isFrozen(obj);
}

// src/utils/plugins.ts
var plugins = {};
function getPlugin(pluginKey) {
  const plugin = plugins[pluginKey];
  if (!plugin) {
    die(0, pluginKey);
  }
  return plugin;
}
function loadPlugin(pluginKey, implementation) {
  if (!plugins[pluginKey])
    plugins[pluginKey] = implementation;
}

// src/core/scope.ts
var currentScope;
function getCurrentScope() {
  return currentScope;
}
function createScope(parent_, immer_) {
  return {
    drafts_: [],
    parent_,
    immer_,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0
  };
}
function usePatchesInScope(scope, patchListener) {
  if (patchListener) {
    getPlugin("Patches");
    scope.patches_ = [];
    scope.inversePatches_ = [];
    scope.patchListener_ = patchListener;
  }
}
function revokeScope(scope) {
  leaveScope(scope);
  scope.drafts_.forEach(revokeDraft);
  scope.drafts_ = null;
}
function leaveScope(scope) {
  if (scope === currentScope) {
    currentScope = scope.parent_;
  }
}
function enterScope(immer2) {
  return currentScope = createScope(currentScope, immer2);
}
function revokeDraft(draft) {
  const state = draft[DRAFT_STATE];
  if (state.type_ === 0 /* Object */ || state.type_ === 1 /* Array */)
    state.revoke_();
  else
    state.revoked_ = true;
}

// src/core/finalize.ts
function processResult(result, scope) {
  scope.unfinalizedDrafts_ = scope.drafts_.length;
  const baseDraft = scope.drafts_[0];
  const isReplaced = result !== void 0 && result !== baseDraft;
  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified_) {
      revokeScope(scope);
      die(4);
    }
    if (isDraftable(result)) {
      result = finalize(scope, result);
      if (!scope.parent_)
        maybeFreeze(scope, result);
    }
    if (scope.patches_) {
      getPlugin("Patches").generateReplacementPatches_(
        baseDraft[DRAFT_STATE].base_,
        result,
        scope.patches_,
        scope.inversePatches_
      );
    }
  } else {
    result = finalize(scope, baseDraft, []);
  }
  revokeScope(scope);
  if (scope.patches_) {
    scope.patchListener_(scope.patches_, scope.inversePatches_);
  }
  return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value, path) {
  if (isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  if (!state) {
    each(
      value,
      (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path)
    );
    return value;
  }
  if (state.scope_ !== rootScope)
    return value;
  if (!state.modified_) {
    maybeFreeze(rootScope, state.base_, true);
    return state.base_;
  }
  if (!state.finalized_) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
    const result = state.copy_;
    let resultEach = result;
    let isSet2 = false;
    if (state.type_ === 3 /* Set */) {
      resultEach = new Set(result);
      result.clear();
      isSet2 = true;
    }
    each(
      resultEach,
      (key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path, isSet2)
    );
    maybeFreeze(rootScope, result, false);
    if (path && rootScope.patches_) {
      getPlugin("Patches").generatePatches_(
        state,
        path,
        rootScope.patches_,
        rootScope.inversePatches_
      );
    }
  }
  return state.copy_;
}
function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
  if (false)
    {}
  if (isDraft(childValue)) {
    const path = rootPath && parentState && parentState.type_ !== 3 /* Set */ && // Set objects are atomic since they have no keys.
    !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
    const res = finalize(rootScope, childValue, path);
    set(targetObject, prop, res);
    if (isDraft(res)) {
      rootScope.canAutoFreeze_ = false;
    } else
      return;
  } else if (targetIsSet) {
    targetObject.add(childValue);
  }
  if (isDraftable(childValue) && !isFrozen(childValue)) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
      return;
    }
    finalize(rootScope, childValue);
    if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && Object.prototype.propertyIsEnumerable.call(targetObject, prop))
      maybeFreeze(rootScope, childValue);
  }
}
function maybeFreeze(scope, value, deep = false) {
  if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
    freeze(value, deep);
  }
}

// src/core/proxy.ts
function createProxyProxy(base, parent) {
  const isArray = Array.isArray(base);
  const state = {
    type_: isArray ? 1 /* Array */ : 0 /* Object */,
    // Track which produce call this is associated with.
    scope_: parent ? parent.scope_ : getCurrentScope(),
    // True for both shallow and deep changes.
    modified_: false,
    // Used during finalization.
    finalized_: false,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: parent,
    // The base state.
    base_: base,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: false
  };
  let target = state;
  let traps = objectTraps;
  if (isArray) {
    target = [state];
    traps = arrayTraps;
  }
  const { revoke, proxy } = Proxy.revocable(target, traps);
  state.draft_ = proxy;
  state.revoke_ = revoke;
  return proxy;
}
var objectTraps = {
  get(state, prop) {
    if (prop === DRAFT_STATE)
      return state;
    const source = latest(state);
    if (!has(source, prop)) {
      return readPropFromProto(state, source, prop);
    }
    const value = source[prop];
    if (state.finalized_ || !isDraftable(value)) {
      return value;
    }
    if (value === peek(state.base_, prop)) {
      prepareCopy(state);
      return state.copy_[prop] = createProxy(value, state);
    }
    return value;
  },
  has(state, prop) {
    return prop in latest(state);
  },
  ownKeys(state) {
    return Reflect.ownKeys(latest(state));
  },
  set(state, prop, value) {
    const desc = getDescriptorFromProto(latest(state), prop);
    if (desc?.set) {
      desc.set.call(state.draft_, value);
      return true;
    }
    if (!state.modified_) {
      const current2 = peek(latest(state), prop);
      const currentState = current2?.[DRAFT_STATE];
      if (currentState && currentState.base_ === value) {
        state.copy_[prop] = value;
        state.assigned_[prop] = false;
        return true;
      }
      if (is(value, current2) && (value !== void 0 || has(state.base_, prop)))
        return true;
      prepareCopy(state);
      markChanged(state);
    }
    if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
    (value !== void 0 || prop in state.copy_) || // special case: NaN
    Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
      return true;
    state.copy_[prop] = value;
    state.assigned_[prop] = true;
    return true;
  },
  deleteProperty(state, prop) {
    if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
      state.assigned_[prop] = false;
      prepareCopy(state);
      markChanged(state);
    } else {
      delete state.assigned_[prop];
    }
    if (state.copy_) {
      delete state.copy_[prop];
    }
    return true;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(state, prop) {
    const owner = latest(state);
    const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (!desc)
      return desc;
    return {
      writable: true,
      configurable: state.type_ !== 1 /* Array */ || prop !== "length",
      enumerable: desc.enumerable,
      value: owner[prop]
    };
  },
  defineProperty() {
    die(11);
  },
  getPrototypeOf(state) {
    return getPrototypeOf(state.base_);
  },
  setPrototypeOf() {
    die(12);
  }
};
var arrayTraps = {};
each(objectTraps, (key, fn) => {
  arrayTraps[key] = function() {
    arguments[0] = arguments[0][0];
    return fn.apply(this, arguments);
  };
});
arrayTraps.deleteProperty = function(state, prop) {
  if (false)
    {}
  return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function(state, prop, value) {
  if (false)
    {}
  return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
  const state = draft[DRAFT_STATE];
  const source = state ? latest(state) : draft;
  return source[prop];
}
function readPropFromProto(state, source, prop) {
  const desc = getDescriptorFromProto(source, prop);
  return desc ? `value` in desc ? desc.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    desc.get?.call(state.draft_)
  ) : void 0;
}
function getDescriptorFromProto(source, prop) {
  if (!(prop in source))
    return void 0;
  let proto = getPrototypeOf(source);
  while (proto) {
    const desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (desc)
      return desc;
    proto = getPrototypeOf(proto);
  }
  return void 0;
}
function markChanged(state) {
  if (!state.modified_) {
    state.modified_ = true;
    if (state.parent_) {
      markChanged(state.parent_);
    }
  }
}
function prepareCopy(state) {
  if (!state.copy_) {
    state.copy_ = shallowCopy(
      state.base_,
      state.scope_.immer_.useStrictShallowCopy_
    );
  }
}

// src/core/immerClass.ts
var Immer2 = class {
  constructor(config) {
    this.autoFreeze_ = true;
    this.useStrictShallowCopy_ = false;
    /**
     * The `produce` function takes a value and a "recipe function" (whose
     * return value often depends on the base state). The recipe function is
     * free to mutate its first argument however it wants. All mutations are
     * only ever applied to a __copy__ of the base state.
     *
     * Pass only a function to create a "curried producer" which relieves you
     * from passing the recipe function every time.
     *
     * Only plain objects and arrays are made mutable. All other objects are
     * considered uncopyable.
     *
     * Note: This function is __bound__ to its `Immer` instance.
     *
     * @param {any} base - the initial state
     * @param {Function} recipe - function that receives a proxy of the base state as first argument and which can be freely modified
     * @param {Function} patchListener - optional function that will be called with all the patches produced here
     * @returns {any} a new state, or the initial state if nothing was modified
     */
    this.produce = (base, recipe, patchListener) => {
      if (typeof base === "function" && typeof recipe !== "function") {
        const defaultBase = recipe;
        recipe = base;
        const self = this;
        return function curriedProduce(base2 = defaultBase, ...args) {
          return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
        };
      }
      if (typeof recipe !== "function")
        die(6);
      if (patchListener !== void 0 && typeof patchListener !== "function")
        die(7);
      let result;
      if (isDraftable(base)) {
        const scope = enterScope(this);
        const proxy = createProxy(base, void 0);
        let hasError = true;
        try {
          result = recipe(proxy);
          hasError = false;
        } finally {
          if (hasError)
            revokeScope(scope);
          else
            leaveScope(scope);
        }
        usePatchesInScope(scope, patchListener);
        return processResult(result, scope);
      } else if (!base || typeof base !== "object") {
        result = recipe(base);
        if (result === void 0)
          result = base;
        if (result === NOTHING)
          result = void 0;
        if (this.autoFreeze_)
          freeze(result, true);
        if (patchListener) {
          const p = [];
          const ip = [];
          getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
          patchListener(p, ip);
        }
        return result;
      } else
        die(1, base);
    };
    this.produceWithPatches = (base, recipe) => {
      if (typeof base === "function") {
        return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
      }
      let patches, inversePatches;
      const result = this.produce(base, recipe, (p, ip) => {
        patches = p;
        inversePatches = ip;
      });
      return [result, patches, inversePatches];
    };
    if (typeof config?.autoFreeze === "boolean")
      this.setAutoFreeze(config.autoFreeze);
    if (typeof config?.useStrictShallowCopy === "boolean")
      this.setUseStrictShallowCopy(config.useStrictShallowCopy);
  }
  createDraft(base) {
    if (!isDraftable(base))
      die(8);
    if (isDraft(base))
      base = current(base);
    const scope = enterScope(this);
    const proxy = createProxy(base, void 0);
    proxy[DRAFT_STATE].isManual_ = true;
    leaveScope(scope);
    return proxy;
  }
  finishDraft(draft, patchListener) {
    const state = draft && draft[DRAFT_STATE];
    if (!state || !state.isManual_)
      die(9);
    const { scope_: scope } = state;
    usePatchesInScope(scope, patchListener);
    return processResult(void 0, scope);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(value) {
    this.autoFreeze_ = value;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(value) {
    this.useStrictShallowCopy_ = value;
  }
  applyPatches(base, patches) {
    let i;
    for (i = patches.length - 1; i >= 0; i--) {
      const patch = patches[i];
      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    }
    if (i > -1) {
      patches = patches.slice(i + 1);
    }
    const applyPatchesImpl = getPlugin("Patches").applyPatches_;
    if (isDraft(base)) {
      return applyPatchesImpl(base, patches);
    }
    return this.produce(
      base,
      (draft) => applyPatchesImpl(draft, patches)
    );
  }
};
function createProxy(value, parent) {
  const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
  const scope = parent ? parent.scope_ : getCurrentScope();
  scope.drafts_.push(draft);
  return draft;
}

// src/core/current.ts
function current(value) {
  if (!isDraft(value))
    die(10, value);
  return currentImpl(value);
}
function currentImpl(value) {
  if (!isDraftable(value) || isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  let copy;
  if (state) {
    if (!state.modified_)
      return state.base_;
    state.finalized_ = true;
    copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
  } else {
    copy = shallowCopy(value, true);
  }
  each(copy, (key, childValue) => {
    set(copy, key, currentImpl(childValue));
  });
  if (state) {
    state.finalized_ = false;
  }
  return copy;
}

// src/plugins/patches.ts
function enablePatches() {
  const errorOffset = 16;
  if (false) {}
  const REPLACE = "replace";
  const ADD = "add";
  const REMOVE = "remove";
  function generatePatches_(state, basePath, patches, inversePatches) {
    switch (state.type_) {
      case 0 /* Object */:
      case 2 /* Map */:
        return generatePatchesFromAssigned(
          state,
          basePath,
          patches,
          inversePatches
        );
      case 1 /* Array */:
        return generateArrayPatches(state, basePath, patches, inversePatches);
      case 3 /* Set */:
        return generateSetPatches(
          state,
          basePath,
          patches,
          inversePatches
        );
    }
  }
  function generateArrayPatches(state, basePath, patches, inversePatches) {
    let { base_, assigned_ } = state;
    let copy_ = state.copy_;
    if (copy_.length < base_.length) {
      ;
      [base_, copy_] = [copy_, base_];
      [patches, inversePatches] = [inversePatches, patches];
    }
    for (let i = 0; i < base_.length; i++) {
      if (assigned_[i] && copy_[i] !== base_[i]) {
        const path = basePath.concat([i]);
        patches.push({
          op: REPLACE,
          path,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: clonePatchValueIfNeeded(copy_[i])
        });
        inversePatches.push({
          op: REPLACE,
          path,
          value: clonePatchValueIfNeeded(base_[i])
        });
      }
    }
    for (let i = base_.length; i < copy_.length; i++) {
      const path = basePath.concat([i]);
      patches.push({
        op: ADD,
        path,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: clonePatchValueIfNeeded(copy_[i])
      });
    }
    for (let i = copy_.length - 1; base_.length <= i; --i) {
      const path = basePath.concat([i]);
      inversePatches.push({
        op: REMOVE,
        path
      });
    }
  }
  function generatePatchesFromAssigned(state, basePath, patches, inversePatches) {
    const { base_, copy_ } = state;
    each(state.assigned_, (key, assignedValue) => {
      const origValue = get(base_, key);
      const value = get(copy_, key);
      const op = !assignedValue ? REMOVE : has(base_, key) ? REPLACE : ADD;
      if (origValue === value && op === REPLACE)
        return;
      const path = basePath.concat(key);
      patches.push(op === REMOVE ? { op, path } : { op, path, value });
      inversePatches.push(
        op === ADD ? { op: REMOVE, path } : op === REMOVE ? { op: ADD, path, value: clonePatchValueIfNeeded(origValue) } : { op: REPLACE, path, value: clonePatchValueIfNeeded(origValue) }
      );
    });
  }
  function generateSetPatches(state, basePath, patches, inversePatches) {
    let { base_, copy_ } = state;
    let i = 0;
    base_.forEach((value) => {
      if (!copy_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: REMOVE,
          path,
          value
        });
        inversePatches.unshift({
          op: ADD,
          path,
          value
        });
      }
      i++;
    });
    i = 0;
    copy_.forEach((value) => {
      if (!base_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: ADD,
          path,
          value
        });
        inversePatches.unshift({
          op: REMOVE,
          path,
          value
        });
      }
      i++;
    });
  }
  function generateReplacementPatches_(baseValue, replacement, patches, inversePatches) {
    patches.push({
      op: REPLACE,
      path: [],
      value: replacement === NOTHING ? void 0 : replacement
    });
    inversePatches.push({
      op: REPLACE,
      path: [],
      value: baseValue
    });
  }
  function applyPatches_(draft, patches) {
    patches.forEach((patch) => {
      const { path, op } = patch;
      let base = draft;
      for (let i = 0; i < path.length - 1; i++) {
        const parentType = getArchtype(base);
        let p = path[i];
        if (typeof p !== "string" && typeof p !== "number") {
          p = "" + p;
        }
        if ((parentType === 0 /* Object */ || parentType === 1 /* Array */) && (p === "__proto__" || p === "constructor"))
          die(errorOffset + 3);
        if (typeof base === "function" && p === "prototype")
          die(errorOffset + 3);
        base = get(base, p);
        if (typeof base !== "object")
          die(errorOffset + 2, path.join("/"));
      }
      const type = getArchtype(base);
      const value = deepClonePatchValue(patch.value);
      const key = path[path.length - 1];
      switch (op) {
        case REPLACE:
          switch (type) {
            case 2 /* Map */:
              return base.set(key, value);
            case 3 /* Set */:
              die(errorOffset);
            default:
              return base[key] = value;
          }
        case ADD:
          switch (type) {
            case 1 /* Array */:
              return key === "-" ? base.push(value) : base.splice(key, 0, value);
            case 2 /* Map */:
              return base.set(key, value);
            case 3 /* Set */:
              return base.add(value);
            default:
              return base[key] = value;
          }
        case REMOVE:
          switch (type) {
            case 1 /* Array */:
              return base.splice(key, 1);
            case 2 /* Map */:
              return base.delete(key);
            case 3 /* Set */:
              return base.delete(patch.value);
            default:
              return delete base[key];
          }
        default:
          die(errorOffset + 1, op);
      }
    });
    return draft;
  }
  function deepClonePatchValue(obj) {
    if (!isDraftable(obj))
      return obj;
    if (Array.isArray(obj))
      return obj.map(deepClonePatchValue);
    if (isMap(obj))
      return new Map(
        Array.from(obj.entries()).map(([k, v]) => [k, deepClonePatchValue(v)])
      );
    if (isSet(obj))
      return new Set(Array.from(obj).map(deepClonePatchValue));
    const cloned = Object.create(getPrototypeOf(obj));
    for (const key in obj)
      cloned[key] = deepClonePatchValue(obj[key]);
    if (has(obj, DRAFTABLE))
      cloned[DRAFTABLE] = obj[DRAFTABLE];
    return cloned;
  }
  function clonePatchValueIfNeeded(obj) {
    if (isDraft(obj)) {
      return deepClonePatchValue(obj);
    } else
      return obj;
  }
  loadPlugin("Patches", {
    applyPatches_,
    generatePatches_,
    generateReplacementPatches_
  });
}

// src/plugins/mapset.ts
function enableMapSet() {
  class DraftMap extends Map {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 2 /* Map */,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        assigned_: void 0,
        base_: target,
        draft_: this,
        isManual_: false,
        revoked_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(key) {
      return latest(this[DRAFT_STATE]).has(key);
    }
    set(key, value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!latest(state).has(key) || latest(state).get(key) !== value) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_.set(key, true);
        state.copy_.set(key, value);
        state.assigned_.set(key, true);
      }
      return this;
    }
    delete(key) {
      if (!this.has(key)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareMapCopy(state);
      markChanged(state);
      if (state.base_.has(key)) {
        state.assigned_.set(key, false);
      } else {
        state.assigned_.delete(key);
      }
      state.copy_.delete(key);
      return true;
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_ = /* @__PURE__ */ new Map();
        each(state.base_, (key) => {
          state.assigned_.set(key, false);
        });
        state.copy_.clear();
      }
    }
    forEach(cb, thisArg) {
      const state = this[DRAFT_STATE];
      latest(state).forEach((_value, key, _map) => {
        cb.call(thisArg, this.get(key), key, this);
      });
    }
    get(key) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      const value = latest(state).get(key);
      if (state.finalized_ || !isDraftable(value)) {
        return value;
      }
      if (value !== state.base_.get(key)) {
        return value;
      }
      const draft = createProxy(value, state);
      prepareMapCopy(state);
      state.copy_.set(key, draft);
      return draft;
    }
    keys() {
      return latest(this[DRAFT_STATE]).keys();
    }
    values() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.values(),
        next: () => {
          const r = iterator.next();
          if (r.done)
            return r;
          const value = this.get(r.value);
          return {
            done: false,
            value
          };
        }
      };
    }
    entries() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.entries(),
        next: () => {
          const r = iterator.next();
          if (r.done)
            return r;
          const value = this.get(r.value);
          return {
            done: false,
            value: [r.value, value]
          };
        }
      };
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.entries();
    }
  }
  function proxyMap_(target, parent) {
    return new DraftMap(target, parent);
  }
  function prepareMapCopy(state) {
    if (!state.copy_) {
      state.assigned_ = /* @__PURE__ */ new Map();
      state.copy_ = new Map(state.base_);
    }
  }
  class DraftSet extends Set {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 3 /* Set */,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        base_: target,
        draft_: this,
        drafts_: /* @__PURE__ */ new Map(),
        revoked_: false,
        isManual_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!state.copy_) {
        return state.base_.has(value);
      }
      if (state.copy_.has(value))
        return true;
      if (state.drafts_.has(value) && state.copy_.has(state.drafts_.get(value)))
        return true;
      return false;
    }
    add(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!this.has(value)) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.add(value);
      }
      return this;
    }
    delete(value) {
      if (!this.has(value)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      markChanged(state);
      return state.copy_.delete(value) || (state.drafts_.has(value) ? state.copy_.delete(state.drafts_.get(value)) : (
        /* istanbul ignore next */
        false
      ));
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.clear();
      }
    }
    values() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.values();
    }
    entries() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.entries();
    }
    keys() {
      return this.values();
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.values();
    }
    forEach(cb, thisArg) {
      const iterator = this.values();
      let result = iterator.next();
      while (!result.done) {
        cb.call(thisArg, result.value, result.value, this);
        result = iterator.next();
      }
    }
  }
  function proxySet_(target, parent) {
    return new DraftSet(target, parent);
  }
  function prepareSetCopy(state) {
    if (!state.copy_) {
      state.copy_ = /* @__PURE__ */ new Set();
      state.base_.forEach((value) => {
        if (isDraftable(value)) {
          const draft = createProxy(value, state);
          state.drafts_.set(value, draft);
          state.copy_.add(draft);
        } else {
          state.copy_.add(value);
        }
      });
    }
  }
  function assertUnrevoked(state) {
    if (state.revoked_)
      die(3, JSON.stringify(latest(state)));
  }
  loadPlugin("MapSet", { proxyMap_, proxySet_ });
}

// src/immer.ts
var immer = new Immer2();
var produce = immer.produce;
var produceWithPatches = immer.produceWithPatches.bind(
  immer
);
var setAutoFreeze = immer.setAutoFreeze.bind(immer);
var setUseStrictShallowCopy = immer.setUseStrictShallowCopy.bind(immer);
var applyPatches = immer.applyPatches.bind(immer);
var createDraft = immer.createDraft.bind(immer);
var finishDraft = immer.finishDraft.bind(immer);
function castDraft(value) {
  return value;
}
function castImmutable(value) {
  return value;
}

//# sourceMappingURL=immer.mjs.map
;// CONCATENATED MODULE: ./node_modules/react-querybuilder/dist/react-querybuilder.mjs
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/components/ActionElement.tsx

var ActionElement = ({
  className,
  handleOnClick,
  label,
  title,
  disabled,
  disabledTranslation,
  testID
}) => /* @__PURE__ */ react.createElement(
  "button",
  {
    type: "button",
    "data-testid": testID,
    disabled: disabled && !disabledTranslation,
    className,
    title: disabledTranslation && disabled ? disabledTranslation.title : title,
    onClick: (e) => handleOnClick(e)
  },
  disabledTranslation && disabled ? disabledTranslation.label : label
);
ActionElement.displayName = "ActionElement";

// src/components/DragHandle.tsx


var DragHandle = (0,react.forwardRef)(
  ({ className, label, title, testID }, dragRef) => /* @__PURE__ */ react.createElement("span", { "data-testid": testID, ref: dragRef, className, title }, label)
);
DragHandle.displayName = "DragHandle";

// src/components/InlineCombinator.tsx


// src/defaults.ts
var placeholderName = "~";
var placeholderLabel = "------";
var defaultPlaceholderFieldName = placeholderName;
var defaultPlaceholderFieldLabel = placeholderLabel;
var defaultPlaceholderFieldGroupLabel = placeholderLabel;
var defaultPlaceholderOperatorName = placeholderName;
var defaultPlaceholderOperatorLabel = placeholderLabel;
var defaultPlaceholderOperatorGroupLabel = placeholderLabel;
var defaultJoinChar = ",";
var defaultTranslations = {
  fields: {
    title: "Fields",
    placeholderName: defaultPlaceholderFieldName,
    placeholderLabel: defaultPlaceholderFieldLabel,
    placeholderGroupLabel: defaultPlaceholderFieldGroupLabel
  },
  operators: {
    title: "Operators",
    placeholderName: defaultPlaceholderOperatorName,
    placeholderLabel: defaultPlaceholderOperatorLabel,
    placeholderGroupLabel: defaultPlaceholderOperatorGroupLabel
  },
  value: {
    title: "Value"
  },
  removeRule: {
    label: "x",
    title: "Remove rule"
  },
  removeGroup: {
    label: "x",
    title: "Remove group"
  },
  addRule: {
    label: "+Rule",
    title: "Add rule"
  },
  addGroup: {
    label: "+Group",
    title: "Add group"
  },
  combinators: {
    title: "Combinators"
  },
  notToggle: {
    label: "Not",
    title: "Invert this group"
  },
  cloneRule: {
    label: "\u29C9",
    title: "Clone rule"
  },
  cloneRuleGroup: {
    label: "\u29C9",
    title: "Clone group"
  },
  dragHandle: {
    label: "\u205E\u205E",
    title: "Drag handle"
  },
  lockRule: {
    label: "\u{1F513}",
    title: "Lock rule"
  },
  lockGroup: {
    label: "\u{1F513}",
    title: "Lock group"
  },
  lockRuleDisabled: {
    label: "\u{1F512}",
    title: "Unlock rule"
  },
  lockGroupDisabled: {
    label: "\u{1F512}",
    title: "Unlock group"
  },
  valueSourceSelector: {
    title: "Value source"
  }
};
var defaultOperators = [
  { name: "=", label: "=" },
  { name: "!=", label: "!=" },
  { name: "<", label: "<" },
  { name: ">", label: ">" },
  { name: "<=", label: "<=" },
  { name: ">=", label: ">=" },
  { name: "contains", label: "contains" },
  { name: "beginsWith", label: "begins with" },
  { name: "endsWith", label: "ends with" },
  { name: "doesNotContain", label: "does not contain" },
  { name: "doesNotBeginWith", label: "does not begin with" },
  { name: "doesNotEndWith", label: "does not end with" },
  { name: "null", label: "is null" },
  { name: "notNull", label: "is not null" },
  { name: "in", label: "in" },
  { name: "notIn", label: "not in" },
  { name: "between", label: "between" },
  { name: "notBetween", label: "not between" }
];
var defaultOperatorNegationMap = {
  "=": "!=",
  "!=": "=",
  "<": ">=",
  "<=": ">",
  ">": "<=",
  ">=": "<",
  beginsWith: "doesNotBeginWith",
  doesNotBeginWith: "beginsWith",
  endsWith: "doesNotEndWith",
  doesNotEndWith: "endsWith",
  contains: "doesNotContain",
  doesNotContain: "contains",
  between: "notBetween",
  notBetween: "between",
  in: "notIn",
  notIn: "in",
  notNull: "null",
  null: "notNull"
};
var defaultCombinators = [
  { name: "and", label: "AND" },
  { name: "or", label: "OR" }
];
var defaultCombinatorsExtended = [
  ...defaultCombinators,
  { name: "xor", label: "XOR" }
];
var standardClassnames = {
  queryBuilder: "queryBuilder",
  ruleGroup: "ruleGroup",
  header: "ruleGroup-header",
  body: "ruleGroup-body",
  combinators: "ruleGroup-combinators",
  addRule: "ruleGroup-addRule",
  addGroup: "ruleGroup-addGroup",
  cloneRule: "rule-cloneRule",
  cloneGroup: "ruleGroup-cloneGroup",
  removeGroup: "ruleGroup-remove",
  notToggle: "ruleGroup-notToggle",
  rule: "rule",
  fields: "rule-fields",
  operators: "rule-operators",
  value: "rule-value",
  removeRule: "rule-remove",
  betweenRules: "betweenRules",
  valid: "queryBuilder-valid",
  invalid: "queryBuilder-invalid",
  dndDragging: "dndDragging",
  dndOver: "dndOver",
  dndCopy: "dndCopy",
  dragHandle: "queryBuilder-dragHandle",
  disabled: "queryBuilder-disabled",
  lockRule: "rule-lock",
  lockGroup: "ruleGroup-lock",
  valueSource: "rule-valueSource",
  valueListItem: "rule-value-list-item",
  branches: "queryBuilder-branches"
};
var defaultControlClassnames = {
  queryBuilder: "",
  ruleGroup: "",
  header: "",
  body: "",
  combinators: "",
  addRule: "",
  addGroup: "",
  cloneRule: "",
  cloneGroup: "",
  removeGroup: "",
  notToggle: "",
  rule: "",
  fields: "",
  operators: "",
  value: "",
  removeRule: "",
  dragHandle: "",
  lockRule: "",
  lockGroup: "",
  valueSource: ""
};
var groupInvalidReasons = {
  empty: "empty",
  invalidCombinator: "invalid combinator",
  invalidIndependentCombinators: "invalid independent combinators"
};
var TestID = {
  rule: "rule",
  ruleGroup: "rule-group",
  inlineCombinator: "inline-combinator",
  addGroup: "add-group",
  removeGroup: "remove-group",
  cloneGroup: "clone-group",
  cloneRule: "clone-rule",
  addRule: "add-rule",
  removeRule: "remove-rule",
  combinators: "combinators",
  fields: "fields",
  operators: "operators",
  valueEditor: "value-editor",
  notToggle: "not-toggle",
  dragHandle: "drag-handle",
  lockRule: "lock-rule",
  lockGroup: "lock-group",
  valueSourceSelector: "value-source-selector"
};
var LogType = {
  parentPathDisabled: "action aborted: parent path disabled",
  pathDisabled: "action aborted: path is disabled",
  queryUpdate: "query updated",
  onAddRuleFalse: "onAddRule callback returned false",
  onAddGroupFalse: "onAddGroup callback returned false",
  onRemoveFalse: "onRemove callback returned false",
  add: "rule or group added",
  remove: "rule or group removed",
  update: "rule or group updated",
  move: "rule or group moved"
};

// src/components/InlineCombinator.tsx
var InlineCombinator = ({
  component: CombinatorSelectorComponent,
  independentCombinators: _independentCombinators,
  ...props
}) => /* @__PURE__ */ react.createElement("div", { className: standardClassnames.betweenRules, "data-testid": TestID.inlineCombinator }, /* @__PURE__ */ react.createElement(CombinatorSelectorComponent, { ...props, testID: TestID.combinators }));
InlineCombinator.displayName = "InlineCombinator";

// src/components/NotToggle.tsx

var NotToggle = ({
  className,
  handleOnChange,
  title,
  label,
  checked,
  disabled,
  testID
}) => /* @__PURE__ */ react.createElement("label", { "data-testid": testID, className, title }, /* @__PURE__ */ react.createElement(
  "input",
  {
    type: "checkbox",
    onChange: (e) => handleOnChange(e.target.checked),
    checked: !!checked,
    disabled
  }
), label);
NotToggle.displayName = "NotToggle";

// src/components/Rule.tsx


// src/hooks/useQueryBuilder.ts



// src/utils/arrayUtils.ts
var splitBy = (str, splitChar = defaultJoinChar) => typeof str === "string" ? str.split(`\\${splitChar}`).map((c) => c.split(splitChar)).reduce((prev, curr, idx) => {
  if (idx === 0) {
    return curr;
  }
  return [
    ...prev.slice(0, prev.length - 1),
    `${prev[prev.length - 1]}${splitChar}${curr[0]}`,
    ...curr.slice(1)
  ];
}, []) : [];
var joinWith = (strArr, joinChar = defaultJoinChar) => strArr.map((str) => `${str ?? ""}`.replaceAll(joinChar, `\\${joinChar}`)).join(joinChar);
var trimIfString = (val) => typeof val === "string" ? val.trim() : val;
var toArray = (v) => Array.isArray(v) ? v.map(trimIfString) : typeof v === "string" ? splitBy(v, defaultJoinChar).filter((s) => !/^\s*$/.test(s)).map((s) => s.trim()) : typeof v === "number" ? [v] : [];
var nullFreeArray = (arr) => arr.every(Boolean);

// src/utils/isRuleGroup.ts
var isRuleGroup = (rg) => typeof rg === "object" && "rules" in rg && Array.isArray(rg.rules);
var isRuleGroupType = (rg) => isRuleGroup(rg) && "combinator" in rg;
var isRuleGroupTypeIC = (rg) => isRuleGroup(rg) && !("combinator" in rg);

// src/utils/convertQuery.ts
var processRuleOrStringOrRuleGroupIC = (r) => typeof r === "object" && "rules" in r ? generateRuleGroupICWithConsistentCombinators(r) : r;
var generateRuleGroupICWithConsistentCombinators = (rg) => {
  const returnArray = [];
  const push = (r) => returnArray.push(processRuleOrStringOrRuleGroupIC(r));
  let startIndex = 0;
  for (let i = 0; i < rg.rules.length; i += 2) {
    if (rg.rules.length === 1) {
      push(rg.rules[0]);
    } else if (rg.rules[i + 1] === "and") {
      startIndex = i;
      let j = 1;
      while (rg.rules[startIndex + j] === "and") {
        i += 2;
        j += 2;
      }
      returnArray.push({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error TS can't keep track of odd/even indexes here
        rules: rg.rules.slice(startIndex, i + 1).map(processRuleOrStringOrRuleGroupIC)
      });
      i -= 2;
    } else if (rg.rules[i + 1] === "or") {
      if (i === 0 || i === rg.rules.length - 3) {
        if (i === 0 || rg.rules[i - 1] === "or") {
          push(rg.rules[i]);
        }
        push(rg.rules[i + 1]);
        if (i === rg.rules.length - 3) {
          push(rg.rules[i + 2]);
        }
      } else {
        if (rg.rules[i - 1] === "and") {
          push(rg.rules[i + 1]);
        } else {
          push(rg.rules[i]);
          push(rg.rules[i + 1]);
        }
      }
    }
  }
  if (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error TS still thinks returnArray has length 0
    returnArray.length === 1 && typeof returnArray[0] === "object" && "rules" in returnArray[0]
  ) {
    return { ...rg, ...returnArray[0] };
  }
  return { ...rg, rules: returnArray };
};
var convertFromIC = (rg) => {
  const processedRG = generateRuleGroupICWithConsistentCombinators(rg);
  const rulesAsMixedList = processedRG.rules.map(
    (r) => typeof r === "string" || !("rules" in r) ? r : convertFromIC(r)
  );
  const combinator = rulesAsMixedList.length < 2 ? "and" : rulesAsMixedList[1];
  const rules = rulesAsMixedList.filter((r) => typeof r !== "string");
  return { ...processedRG, combinator, rules };
};
var convertToIC = (rg) => {
  const { combinator, ...queryWithoutCombinator } = rg;
  const rules = [];
  rg.rules.forEach((r, idx, arr) => {
    if ("rules" in r) {
      rules.push(convertToIC(r));
    } else {
      rules.push(r);
    }
    if (idx < arr.length - 1) {
      rules.push(combinator);
    }
  });
  return { ...queryWithoutCombinator, rules };
};
function convertQuery(query) {
  return isRuleGroupTypeIC(query) ? convertFromIC(query) : convertToIC(query);
}

// src/utils/defaultValidator.ts
var defaultValidator = (query) => {
  const result = {};
  const validateRule = (_rule) => {
  };
  const validateGroup = (rg) => {
    const reasons = [];
    if (rg.rules.length === 0) {
      reasons.push(groupInvalidReasons.empty);
    } else if (!("combinator" in rg)) {
      let invalidICs = false;
      for (let i = 0; i < rg.rules.length && !invalidICs; i++) {
        if (i % 2 === 0 && typeof rg.rules[i] === "string" || i % 2 === 1 && typeof rg.rules[i] !== "string" || i % 2 === 1 && typeof rg.rules[i] === "string" && !defaultCombinators.map((c) => c.name).includes(rg.rules[i])) {
          invalidICs = true;
        }
      }
      if (invalidICs) {
        reasons.push(groupInvalidReasons.invalidIndependentCombinators);
      }
    }
    if ("combinator" in rg && !defaultCombinators.map((c) => c.name).includes(rg.combinator) && rg.rules.length > 1) {
      reasons.push(groupInvalidReasons.invalidCombinator);
    }
    if (rg.id) {
      if (reasons.length) {
        result[rg.id] = { valid: false, reasons };
      } else {
        result[rg.id] = true;
      }
    }
    rg.rules.forEach((r) => {
      if (typeof r === "string") {
      } else if ("rules" in r) {
        validateGroup(r);
      } else {
        validateRule(r);
      }
    });
  };
  validateGroup(query);
  return result;
};

// src/utils/optGroupUtils.ts
var isOptionGroupArray = (arr) => Array.isArray(arr) && arr.length > 0 && "options" in arr[0];
var getOption = (arr, name) => (isOptionGroupArray(arr) ? arr.flatMap((og) => og.options) : arr).find((op) => op.name === name);
var getFirstOption = (arr) => !Array.isArray(arr) || arr.length === 0 ? null : isOptionGroupArray(arr) ? arr[0].options[0].name : arr[0].name;

// src/utils/filterFieldsByComparator.ts
var filterFieldsByComparator = (field, fields, operator) => {
  if (!field.comparator) {
    const filterOutSameName = (f) => f.name !== field.name;
    if (isOptionGroupArray(fields)) {
      return fields.map((og) => ({
        ...og,
        options: og.options.filter(filterOutSameName)
      }));
    }
    return fields.filter(filterOutSameName);
  }
  const filterByComparator = (fieldToCompare) => {
    if (field.name === fieldToCompare.name) {
      return false;
    }
    if (typeof field.comparator === "string") {
      return field[field.comparator] === fieldToCompare[field.comparator];
    }
    return field.comparator(fieldToCompare, operator);
  };
  if (isOptionGroupArray(fields)) {
    return fields.map((og) => ({ ...og, options: og.options.filter(filterByComparator) })).filter((og) => og.options.length > 0);
  }
  return fields.filter(filterByComparator);
};

// src/utils/misc.ts
var numericRegex = /^\s*[+-]?(\d+|\d*\.\d+|\d+\.\d*)([Ee][+-]?\d+)?\s*$/;
var isPojo = (obj) => obj === null || typeof obj !== "object" ? false : Object.getPrototypeOf(obj) === Object.prototype;

// src/utils/parseNumber.ts
var parseNumber = (v, { parseNumbers }) => {
  if (typeof v === "bigint" || typeof v === "number") {
    return v;
  }
  return parseNumbers && (parseNumbers === "native" || numericRegex.test(v)) ? parseFloat(v) : v;
};

// src/utils/formatQuery/utils.ts
var mapSQLOperator = (op) => {
  switch (op.toLowerCase()) {
    case "null":
      return "is null";
    case "notnull":
      return "is not null";
    case "notin":
      return "not in";
    case "notbetween":
      return "not between";
    case "contains":
    case "beginswith":
    case "endswith":
      return "like";
    case "doesnotcontain":
    case "doesnotbeginwith":
    case "doesnotendwith":
      return "not like";
    default:
      return op;
  }
};
var mongoOperators = {
  "=": "$eq",
  "!=": "$ne",
  "<": "$lt",
  "<=": "$lte",
  ">": "$gt",
  ">=": "$gte",
  in: "$in",
  notIn: "$nin"
};
var celCombinatorMap = {
  and: "&&",
  or: "||"
};
var jsonLogicAdditionalOperators = {
  startsWith: (a, b) => a.startsWith(b),
  endsWith: (a, b) => a.endsWith(b)
};
var numerifyValues = (rg) => ({
  ...rg,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error TS doesn't keep track of odd/even indexes here
  rules: rg.rules.map((r) => {
    if (typeof r === "string") {
      return r;
    }
    if ("rules" in r) {
      return numerifyValues(r);
    }
    let { value } = r;
    if (typeof value === "string") {
      value = parseNumber(value, { parseNumbers: true });
    }
    return { ...r, value };
  })
});
var isValidValue = (v) => typeof v === "string" && v.length > 0 || typeof v === "number" && !isNaN(v) || typeof v !== "string" && typeof v !== "number";
var shouldRenderAsNumber = (v, parseNumbers) => parseNumbers && (typeof v === "number" || typeof v === "bigint" || typeof v === "string" && numericRegex.test(v));
var isValueProcessorLegacy = (vp) => vp.length >= 3;
var quoteFieldNamesWithArray = (quoteFieldNamesWith = ["", ""]) => Array.isArray(quoteFieldNamesWith) ? quoteFieldNamesWith : typeof quoteFieldNamesWith === "string" ? [quoteFieldNamesWith, quoteFieldNamesWith] : quoteFieldNamesWith ?? ["", ""];

// src/utils/formatQuery/defaultRuleProcessorCEL.ts
var shouldNegate = (op) => /^(does)?not/i.test(op);
var escapeDoubleQuotes = (v, escapeQuotes) => typeof v !== "string" || !escapeQuotes ? v : v.replaceAll(`"`, `\\"`);
var defaultRuleProcessorCEL = ({ field, operator, value, valueSource }, { escapeQuotes, parseNumbers } = {}) => {
  const valueIsField = valueSource === "field";
  const operatorTL = operator.replace(/^=$/, "==");
  const useBareValue = typeof value === "number" || typeof value === "boolean" || typeof value === "bigint" || shouldRenderAsNumber(value, parseNumbers);
  switch (operatorTL) {
    case "<":
    case "<=":
    case "==":
    case "!=":
    case ">":
    case ">=":
      return `${field} ${operatorTL} ${valueIsField || useBareValue ? trimIfString(value) : `"${escapeDoubleQuotes(value, escapeQuotes)}"`}`;
    case "contains":
    case "doesNotContain": {
      const negate = shouldNegate(operatorTL) ? "!" : "";
      return `${negate}${field}.contains(${valueIsField ? trimIfString(value) : `"${escapeDoubleQuotes(value, escapeQuotes)}"`})`;
    }
    case "beginsWith":
    case "doesNotBeginWith": {
      const negate = shouldNegate(operatorTL) ? "!" : "";
      return `${negate}${field}.startsWith(${valueIsField ? trimIfString(value) : `"${escapeDoubleQuotes(value, escapeQuotes)}"`})`;
    }
    case "endsWith":
    case "doesNotEndWith": {
      const negate = shouldNegate(operatorTL) ? "!" : "";
      return `${negate}${field}.endsWith(${valueIsField ? trimIfString(value) : `"${escapeDoubleQuotes(value, escapeQuotes)}"`})`;
    }
    case "null":
      return `${field} == null`;
    case "notNull":
      return `${field} != null`;
    case "in":
    case "notIn": {
      const negate = shouldNegate(operatorTL);
      const valueAsArray = toArray(value);
      if (valueAsArray.length > 0) {
        return `${negate ? "!(" : ""}${field} in [${valueAsArray.map(
          (val) => valueIsField || shouldRenderAsNumber(val, parseNumbers) ? `${trimIfString(val)}` : `"${escapeDoubleQuotes(val, escapeQuotes)}"`
        ).join(", ")}]${negate ? ")" : ""}`;
      } else {
        return "";
      }
    }
    case "between":
    case "notBetween": {
      const valueAsArray = toArray(value);
      if (valueAsArray.length >= 2 && !!valueAsArray[0] && !!valueAsArray[1]) {
        const [first, second] = valueAsArray;
        const firstNum = shouldRenderAsNumber(first, true) ? parseFloat(first) : NaN;
        const secondNum = shouldRenderAsNumber(second, true) ? parseFloat(second) : NaN;
        let firstValue = isNaN(firstNum) ? valueIsField ? `${first}` : `"${escapeDoubleQuotes(first, escapeQuotes)}"` : firstNum;
        let secondValue = isNaN(secondNum) ? valueIsField ? `${second}` : `"${escapeDoubleQuotes(second, escapeQuotes)}"` : secondNum;
        if (firstValue === firstNum && secondValue === secondNum && secondNum < firstNum) {
          const tempNum = secondNum;
          secondValue = firstNum;
          firstValue = tempNum;
        }
        if (operator === "between") {
          return `(${field} >= ${firstValue} && ${field} <= ${secondValue})`;
        } else {
          return `(${field} < ${firstValue} || ${field} > ${secondValue})`;
        }
      } else {
        return "";
      }
    }
  }
  return "";
};

// src/utils/formatQuery/defaultRuleProcessorMongoDB.ts
var escapeDoubleQuotes2 = (v) => typeof v !== "string" ? v : v.replaceAll("\\", "\\\\").replaceAll(`"`, `\\"`);
var defaultRuleProcessorMongoDB = ({ field, operator, value, valueSource }, { parseNumbers } = {}) => {
  const valueIsField = valueSource === "field";
  const useBareValue = typeof value === "number" || typeof value === "boolean" || typeof value === "bigint" || shouldRenderAsNumber(value, parseNumbers);
  if (operator === "=" && !valueIsField) {
    return `{"${field}":${useBareValue ? trimIfString(value) : `"${escapeDoubleQuotes2(value)}"`}}`;
  }
  switch (operator) {
    case "<":
    case "<=":
    case "=":
    case "!=":
    case ">":
    case ">=": {
      const mongoOperator = mongoOperators[operator];
      return valueIsField ? `{"$expr":{"${mongoOperator}":["$${field}","$${value}"]}}` : `{"${field}":{"${mongoOperator}":${useBareValue ? trimIfString(value) : `"${escapeDoubleQuotes2(value)}"`}}}`;
    }
    case "contains":
      return valueIsField ? `{"$where":"this.${field}.includes(this.${value})"}` : `{"${field}":{"$regex":"${escapeDoubleQuotes2(value)}"}}`;
    case "beginsWith":
      return valueIsField ? `{"$where":"this.${field}.startsWith(this.${value})"}` : `{"${field}":{"$regex":"^${escapeDoubleQuotes2(value)}"}}`;
    case "endsWith":
      return valueIsField ? `{"$where":"this.${field}.endsWith(this.${value})"}` : `{"${field}":{"$regex":"${escapeDoubleQuotes2(value)}$"}}`;
    case "doesNotContain":
      return valueIsField ? `{"$where":"!this.${field}.includes(this.${value})"}` : `{"${field}":{"$not":{"$regex":"${escapeDoubleQuotes2(value)}"}}}`;
    case "doesNotBeginWith":
      return valueIsField ? `{"$where":"!this.${field}.startsWith(this.${value})"}` : `{"${field}":{"$not":{"$regex":"^${escapeDoubleQuotes2(value)}"}}}`;
    case "doesNotEndWith":
      return valueIsField ? `{"$where":"!this.${field}.endsWith(this.${value})"}` : `{"${field}":{"$not":{"$regex":"${escapeDoubleQuotes2(value)}$"}}}`;
    case "null":
      return `{"${field}":null}`;
    case "notNull":
      return `{"${field}":{"$ne":null}}`;
    case "in":
    case "notIn": {
      const valueAsArray = toArray(value);
      if (valueAsArray.length > 0) {
        return valueIsField ? `{"$where":"${operator === "notIn" ? "!" : ""}[${valueAsArray.map((val) => `this.${val}`).join(",")}].includes(this.${field})"}` : `{"${field}":{"${mongoOperators[operator]}":[${valueAsArray.map(
          (val) => shouldRenderAsNumber(val, parseNumbers) ? `${trimIfString(val)}` : `"${escapeDoubleQuotes2(val)}"`
        ).join(",")}]}}`;
      } else {
        return "";
      }
    }
    case "between":
    case "notBetween": {
      const valueAsArray = toArray(value);
      if (valueAsArray.length >= 2 && isValidValue(valueAsArray[0]) && isValidValue(valueAsArray[1])) {
        const [first, second] = valueAsArray;
        const firstNum = shouldRenderAsNumber(first, true) ? parseFloat(first) : NaN;
        const secondNum = shouldRenderAsNumber(second, true) ? parseFloat(second) : NaN;
        const firstValue = valueIsField || !isNaN(firstNum) ? `${first}` : `"${escapeDoubleQuotes2(first)}"`;
        const secondValue = valueIsField || !isNaN(secondNum) ? `${second}` : `"${escapeDoubleQuotes2(second)}"`;
        if (operator === "between") {
          return valueIsField ? `{"$and":[{"$expr":{"$gte":["$${field}","$${firstValue}"]}},{"$expr":{"$lte":["$${field}","$${secondValue}"]}}]}` : `{"${field}":{"$gte":${firstValue},"$lte":${secondValue}}}`;
        } else {
          return valueIsField ? `{"$or":[{"$expr":{"$lt":["$${field}","$${firstValue}"]}},{"$expr":{"$gt":["$${field}","$${secondValue}"]}}]}` : `{"$or":[{"${field}":{"$lt":${firstValue}}},{"${field}":{"$gt":${secondValue}}}]}`;
        }
      } else {
        return "";
      }
    }
  }
  return "";
};

// src/utils/formatQuery/defaultRuleProcessorSpEL.ts
var shouldNegate2 = (op) => /^(does)?not/i.test(op);
var wrapInNegation = (clause, negate) => negate ? `!(${clause})` : `${clause}`;
var escapeSingleQuotes = (v, escapeQuotes) => typeof v !== "string" || !escapeQuotes ? v : v.replaceAll(`'`, `\\'`);
var defaultRuleProcessorSpEL = ({ field, operator, value, valueSource }, { escapeQuotes, parseNumbers } = {}) => {
  const valueIsField = valueSource === "field";
  const operatorTL = operator.replace(/^=$/, "==");
  const useBareValue = typeof value === "number" || typeof value === "boolean" || typeof value === "bigint" || shouldRenderAsNumber(value, parseNumbers);
  switch (operatorTL) {
    case "<":
    case "<=":
    case "==":
    case "!=":
    case ">":
    case ">=":
      return `${field} ${operatorTL} ${valueIsField || useBareValue ? trimIfString(value) : `'${escapeSingleQuotes(value, escapeQuotes)}'`}`;
    case "contains":
    case "doesNotContain":
      return wrapInNegation(
        `${field} matches ${valueIsField || useBareValue ? trimIfString(value) : `'${escapeSingleQuotes(value, escapeQuotes)}'`}`,
        shouldNegate2(operatorTL)
      );
    case "beginsWith":
    case "doesNotBeginWith": {
      const valueTL = valueIsField ? `'^'.concat(${trimIfString(value)})` : `'${typeof value === "string" && !value.startsWith("^") || useBareValue ? "^" : ""}${escapeSingleQuotes(value, escapeQuotes)}'`;
      return wrapInNegation(`${field} matches ${valueTL}`, shouldNegate2(operatorTL));
    }
    case "endsWith":
    case "doesNotEndWith": {
      const valueTL = valueIsField ? `${trimIfString(value)}.concat('$')` : `'${escapeSingleQuotes(value, escapeQuotes)}${typeof value === "string" && !value.endsWith("$") || useBareValue ? "$" : ""}'`;
      return wrapInNegation(`${field} matches ${valueTL}`, shouldNegate2(operatorTL));
    }
    case "null":
      return `${field} == null`;
    case "notNull":
      return `${field} != null`;
    case "in":
    case "notIn": {
      const negate = shouldNegate2(operatorTL) ? "!" : "";
      const valueAsArray = toArray(value);
      if (valueAsArray.length > 0) {
        return `${negate}(${valueAsArray.map(
          (val) => `${field} == ${valueIsField || shouldRenderAsNumber(val, parseNumbers) ? `${trimIfString(val)}` : `'${escapeSingleQuotes(val, escapeQuotes)}'`}`
        ).join(" or ")})`;
      } else {
        return "";
      }
    }
    case "between":
    case "notBetween": {
      const valueAsArray = toArray(value);
      if (valueAsArray.length >= 2 && !!valueAsArray[0] && !!valueAsArray[1]) {
        const [first, second] = valueAsArray;
        const firstNum = shouldRenderAsNumber(first, true) ? parseFloat(first) : NaN;
        const secondNum = shouldRenderAsNumber(second, true) ? parseFloat(second) : NaN;
        let firstValue = isNaN(firstNum) ? valueIsField ? `${first}` : `'${escapeSingleQuotes(first, escapeQuotes)}'` : firstNum;
        let secondValue = isNaN(secondNum) ? valueIsField ? `${second}` : `'${escapeSingleQuotes(second, escapeQuotes)}'` : secondNum;
        if (firstValue === firstNum && secondValue === secondNum && secondNum < firstNum) {
          const tempNum = secondNum;
          secondValue = firstNum;
          firstValue = tempNum;
        }
        if (operator === "between") {
          return `(${field} >= ${firstValue} and ${field} <= ${secondValue})`;
        } else {
          return `(${field} < ${firstValue} or ${field} > ${secondValue})`;
        }
      } else {
        return "";
      }
    }
  }
  return "";
};

// src/utils/formatQuery/defaultValueProcessorByRule.ts
var escapeSingleQuotes2 = (v, escapeQuotes) => escapeQuotes && typeof v === "string" ? v.replaceAll(`'`, `''`) : v;
var defaultValueProcessorByRule = ({ operator, value, valueSource }, { escapeQuotes, parseNumbers, quoteFieldNamesWith } = {}) => {
  const valueIsField = valueSource === "field";
  const [qfnwPre, qfnwPost] = quoteFieldNamesWithArray(quoteFieldNamesWith);
  const operatorLowerCase = operator.toLowerCase();
  const wrapFieldName = (f) => `${qfnwPre}${f}${qfnwPost}`;
  switch (operatorLowerCase) {
    case "null":
    case "notnull": {
      return "";
    }
    case "in":
    case "notin": {
      const valueAsArray = toArray(value);
      if (valueAsArray.length > 0) {
        return `(${valueAsArray.map(
          (v) => valueIsField ? wrapFieldName(v) : shouldRenderAsNumber(v, parseNumbers) ? `${trimIfString(v)}` : `'${escapeSingleQuotes2(v, escapeQuotes)}'`
        ).join(", ")})`;
      }
      return "";
    }
    case "between":
    case "notbetween": {
      const valueAsArray = toArray(value);
      if (valueAsArray.length >= 2 && isValidValue(valueAsArray[0]) && isValidValue(valueAsArray[1])) {
        const [first, second] = valueAsArray;
        return valueIsField ? `${wrapFieldName(first)} and ${wrapFieldName(second)}` : shouldRenderAsNumber(first, parseNumbers) && shouldRenderAsNumber(second, parseNumbers) ? `${trimIfString(first)} and ${trimIfString(second)}` : `'${escapeSingleQuotes2(first, escapeQuotes)}' and '${escapeSingleQuotes2(
          second,
          escapeQuotes
        )}'`;
      }
      return "";
    }
    case "contains":
    case "doesnotcontain":
      return valueIsField ? `'%' || ${wrapFieldName(value)} || '%'` : `'%${escapeSingleQuotes2(value, escapeQuotes)}%'`;
    case "beginswith":
    case "doesnotbeginwith":
      return valueIsField ? `${wrapFieldName(value)} || '%'` : `'${escapeSingleQuotes2(value, escapeQuotes)}%'`;
    case "endswith":
    case "doesnotendwith":
      return valueIsField ? `'%' || ${wrapFieldName(value)}` : `'%${escapeSingleQuotes2(value, escapeQuotes)}'`;
  }
  if (typeof value === "boolean") {
    return value ? "TRUE" : "FALSE";
  }
  return valueIsField ? wrapFieldName(value) : shouldRenderAsNumber(value, parseNumbers) ? `${trimIfString(value)}` : `'${escapeSingleQuotes2(value, escapeQuotes)}'`;
};

// src/utils/formatQuery/defaultRuleProcessorJsonLogic.ts
var convertOperator = (op) => op.replace(/^(=)$/, "$1=").replace(/^notNull$/i, "!=").replace(/^null$/i, "==");
var negateIfNotOp = (op, jsonRule) => /^(does)?not/i.test(op) ? { "!": jsonRule } : jsonRule;
var defaultRuleProcessorJsonLogic = ({ field, operator, value, valueSource }, { parseNumbers } = {}) => {
  const valueIsField = valueSource === "field";
  const fieldObject = { var: field };
  const fieldOrNumberRenderer = (v) => valueIsField ? { var: `${v}` } : shouldRenderAsNumber(v, parseNumbers) ? parseFloat(v) : v;
  switch (operator) {
    case "<":
    case "<=":
    case "=":
    case "!=":
    case ">":
    case ">=":
      return {
        [convertOperator(operator)]: [fieldObject, fieldOrNumberRenderer(value)]
      };
    case "null":
    case "notNull": {
      return {
        [`${operator === "notNull" ? "!" : "="}=`]: [fieldObject, null]
      };
    }
    case "in":
    case "notIn": {
      const valueAsArray = toArray(value).map(fieldOrNumberRenderer);
      if (valueAsArray.length > 0) {
        const jsonRule = { in: [fieldObject, valueAsArray] };
        return negateIfNotOp(operator, jsonRule);
      }
      return false;
    }
    case "between":
    case "notBetween": {
      const valueAsArray = toArray(value);
      if (valueAsArray.length >= 2 && isValidValue(valueAsArray[0]) && isValidValue(valueAsArray[1])) {
        let [first, second] = valueAsArray;
        if (!valueIsField && shouldRenderAsNumber(first, true) && shouldRenderAsNumber(second, true)) {
          const firstNum = parseFloat(first);
          const secondNum = parseFloat(second);
          if (secondNum < firstNum) {
            const tempNum = secondNum;
            second = firstNum;
            first = tempNum;
          } else {
            first = firstNum;
            second = secondNum;
          }
        } else if (valueIsField) {
          first = { var: first };
          second = { var: second };
        }
        const jsonRule = { "<=": [first, fieldObject, second] };
        return negateIfNotOp(operator, jsonRule);
      }
      return false;
    }
    case "contains":
    case "doesNotContain": {
      const jsonRule = {
        in: [fieldOrNumberRenderer(value), fieldObject]
      };
      return negateIfNotOp(operator, jsonRule);
    }
    case "beginsWith":
    case "doesNotBeginWith": {
      const jsonRule = {
        startsWith: [fieldObject, fieldOrNumberRenderer(value)]
      };
      return negateIfNotOp(operator, jsonRule);
    }
    case "endsWith":
    case "doesNotEndWith": {
      const jsonRule = {
        endsWith: [fieldObject, fieldOrNumberRenderer(value)]
      };
      return negateIfNotOp(operator, jsonRule);
    }
  }
  return false;
};

// src/utils/formatQuery/defaultRuleProcessorSQL.ts
var defaultRuleProcessorSQL = (rule, {
  parseNumbers,
  escapeQuotes,
  quoteFieldNamesWith = ["", ""],
  valueProcessor = defaultValueProcessorByRule
} = {}) => {
  const value = valueProcessor(rule, { parseNumbers, escapeQuotes, quoteFieldNamesWith });
  const operator = mapSQLOperator(rule.operator);
  const operatorLowerCase = operator.toLowerCase();
  if ((operatorLowerCase === "in" || operatorLowerCase === "not in" || operatorLowerCase === "between" || operatorLowerCase === "not between") && !value) {
    return "";
  }
  const [qFNWpre, qFNWpost] = quoteFieldNamesWithArray(quoteFieldNamesWith);
  return `${qFNWpre}${rule.field}${qFNWpost} ${operator} ${value}`.trim();
};

// src/utils/isRuleOrGroupValid.ts
var isValidationResult = (vr) => isPojo(vr) && typeof vr.valid === "boolean";
var isRuleOrGroupValid = (rg, validationResult, validator) => {
  if (typeof validationResult === "boolean") {
    return validationResult;
  }
  if (isValidationResult(validationResult)) {
    return validationResult.valid;
  }
  if (typeof validator === "function" && !("rules" in rg)) {
    const vr = validator(rg);
    if (typeof vr === "boolean") {
      return vr;
    }
    if (isValidationResult(vr)) {
      return vr.valid;
    }
  }
  return true;
};

// src/utils/uniq.ts
var uniqByName = (originalArray) => {
  const names = /* @__PURE__ */ new Set();
  const newArray = [];
  originalArray.forEach((el) => {
    if (!names.has(el.name)) {
      names.add(el.name);
      newArray.push(el);
    }
  });
  return newArray;
};
var uniqOptGroups = (originalArray) => {
  const labels = /* @__PURE__ */ new Set();
  const names = /* @__PURE__ */ new Set();
  const newArray = [];
  originalArray.forEach((el) => {
    if (!labels.has(el.label)) {
      labels.add(el.label);
      const optionsForThisGroup = [];
      el.options.forEach((opt) => {
        if (!names.has(opt.name)) {
          names.add(opt.name);
          optionsForThisGroup.push(opt);
        }
      });
      newArray.push({ ...el, options: optionsForThisGroup });
    }
  });
  return newArray;
};

// src/utils/formatQuery/formatQuery.ts
function formatQuery(ruleGroup, options = {}) {
  let format = "json";
  let valueProcessorInternal = defaultValueProcessorByRule;
  let ruleProcessorInternal = null;
  let quoteFieldNamesWith = ["", ""];
  let validator = () => true;
  let fields = [];
  let validationMap = {};
  let fallbackExpression = "";
  let paramPrefix = ":";
  let parseNumbers = false;
  let placeholderFieldName = defaultPlaceholderFieldName;
  let placeholderOperatorName = defaultPlaceholderOperatorName;
  if (typeof options === "string") {
    format = options.toLowerCase();
    if (format === "mongodb") {
      ruleProcessorInternal = defaultRuleProcessorMongoDB;
    } else if (format === "cel") {
      ruleProcessorInternal = defaultRuleProcessorCEL;
    } else if (format === "spel") {
      ruleProcessorInternal = defaultRuleProcessorSpEL;
    } else if (format === "jsonlogic") {
      ruleProcessorInternal = defaultRuleProcessorJsonLogic;
    }
  } else {
    format = (options.format ?? "json").toLowerCase();
    const { valueProcessor = null, ruleProcessor = null } = options;
    if (typeof ruleProcessor === "function") {
      ruleProcessorInternal = ruleProcessor;
    }
    valueProcessorInternal = typeof valueProcessor === "function" ? (r, opts) => isValueProcessorLegacy(valueProcessor) ? valueProcessor(r.field, r.operator, r.value, r.valueSource) : valueProcessor(r, opts) : format === "mongodb" ? ruleProcessorInternal ?? defaultRuleProcessorMongoDB : format === "cel" ? ruleProcessorInternal ?? defaultRuleProcessorCEL : format === "spel" ? ruleProcessorInternal ?? defaultRuleProcessorSpEL : format === "jsonlogic" ? ruleProcessorInternal ?? defaultRuleProcessorJsonLogic : defaultValueProcessorByRule;
    quoteFieldNamesWith = quoteFieldNamesWithArray(options.quoteFieldNamesWith);
    validator = options.validator ?? (() => true);
    fields = options.fields ?? [];
    fallbackExpression = options.fallbackExpression ?? "";
    paramPrefix = options.paramPrefix ?? ":";
    parseNumbers = !!options.parseNumbers;
    placeholderFieldName = options.placeholderFieldName ?? defaultPlaceholderFieldName;
    placeholderOperatorName = options.placeholderOperatorName ?? defaultPlaceholderOperatorName;
  }
  if (!fallbackExpression) {
    fallbackExpression = format === "mongodb" ? '"$and":[{"$expr":true}]' : format === "cel" || format === "spel" ? "1 == 1" : "(1 = 1)";
  }
  if (format === "json" || format === "json_without_ids") {
    const rg = parseNumbers ? numerifyValues(ruleGroup) : ruleGroup;
    if (format === "json") {
      return JSON.stringify(rg, null, 2);
    }
    return JSON.stringify(rg, [
      "rules",
      "field",
      "value",
      "operator",
      "combinator",
      "not",
      "valueSource"
    ]);
  }
  if (typeof validator === "function") {
    const validationResult = validator(ruleGroup);
    if (typeof validationResult === "boolean") {
      if (validationResult === false) {
        return format === "parameterized" ? { sql: fallbackExpression, params: [] } : format === "parameterized_named" ? { sql: fallbackExpression, params: {} } : format === "mongodb" ? `{${fallbackExpression}}` : format === "jsonlogic" ? false : fallbackExpression;
      }
    } else {
      validationMap = validationResult;
    }
  }
  const validatorMap = {};
  const uniqueFields = uniqByName(fields);
  uniqueFields.forEach((f) => {
    if (typeof f.validator === "function") {
      validatorMap[f.name] = f.validator;
    }
  });
  const validateRule = (rule) => {
    let validationResult = void 0;
    let fieldValidator = void 0;
    if (rule.id) {
      validationResult = validationMap[rule.id];
    }
    if (fields.length) {
      const fieldArr = fields.filter((f) => f.name === rule.field);
      if (fieldArr.length) {
        const field = fieldArr[0];
        if (typeof field.validator === "function") {
          fieldValidator = field.validator;
        }
      }
    }
    return [validationResult, fieldValidator];
  };
  if (format === "sql") {
    const processRuleGroup = (rg, outermost) => {
      if (!isRuleOrGroupValid(rg, validationMap[rg.id ?? /* istanbul ignore next */
      ""])) {
        return outermost ? fallbackExpression : "";
      }
      const processedRules = rg.rules.map((rule) => {
        if (typeof rule === "string") {
          return rule;
        }
        if ("rules" in rule) {
          return processRuleGroup(rule);
        }
        const [validationResult, fieldValidator] = validateRule(rule);
        if (!isRuleOrGroupValid(rule, validationResult, fieldValidator) || rule.field === placeholderFieldName || rule.operator === placeholderOperatorName) {
          return "";
        }
        const escapeQuotes = (rule.valueSource ?? "value") === "value";
        if (typeof ruleProcessorInternal === "function") {
          return ruleProcessorInternal(rule, { parseNumbers, escapeQuotes, quoteFieldNamesWith });
        }
        return defaultRuleProcessorSQL(rule, {
          parseNumbers,
          escapeQuotes,
          valueProcessor: valueProcessorInternal,
          quoteFieldNamesWith
        });
      });
      if (processedRules.length === 0) {
        return fallbackExpression;
      }
      return `${rg.not ? "NOT " : ""}(${processedRules.filter(Boolean).join("combinator" in rg ? ` ${rg.combinator} ` : " ")})`;
    };
    return processRuleGroup(ruleGroup, true);
  }
  if (format === "parameterized" || format === "parameterized_named") {
    const parameterized = format === "parameterized";
    const params = [];
    const params_named = {};
    const fieldParamIndexes = {};
    const getNextNamedParam = (field) => {
      fieldParamIndexes[field] = (fieldParamIndexes[field] ?? 0) + 1;
      return `${field}_${fieldParamIndexes[field]}`;
    };
    const processRule = (rule) => {
      const [validationResult, fieldValidator] = validateRule(rule);
      if (!isRuleOrGroupValid(rule, validationResult, fieldValidator) || rule.field === placeholderFieldName || rule.operator === placeholderOperatorName) {
        return "";
      }
      const value = valueProcessorInternal(rule, { parseNumbers, quoteFieldNamesWith });
      const operator = mapSQLOperator(rule.operator);
      if ((rule.valueSource ?? "value") === "value") {
        if (operator.toLowerCase() === "is null" || operator.toLowerCase() === "is not null") {
          return `${quoteFieldNamesWith[0]}${rule.field}${quoteFieldNamesWith[1]} ${operator}`;
        } else if (operator.toLowerCase() === "in" || operator.toLowerCase() === "not in") {
          if (value) {
            const splitValue = toArray(rule.value);
            if (parameterized) {
              splitValue.forEach(
                (v) => params.push(shouldRenderAsNumber(v, parseNumbers) ? parseFloat(v) : v)
              );
              return `${quoteFieldNamesWith[0]}${rule.field}${quoteFieldNamesWith[1]} ${operator} (${splitValue.map(() => "?").join(", ")})`;
            }
            const inParams = [];
            splitValue.forEach((v) => {
              const thisParamName = getNextNamedParam(rule.field);
              inParams.push(`${paramPrefix}${thisParamName}`);
              params_named[thisParamName] = shouldRenderAsNumber(v, parseNumbers) ? parseFloat(v) : v;
            });
            return `${quoteFieldNamesWith[0]}${rule.field}${quoteFieldNamesWith[1]} ${operator} (${inParams.join(", ")})`;
          } else {
            return "";
          }
        } else if (operator.toLowerCase() === "between" || operator.toLowerCase() === "not between") {
          if (value) {
            const valueAsArray = toArray(rule.value);
            const [first, second] = valueAsArray.slice(0, 2).map((v) => shouldRenderAsNumber(v, parseNumbers) ? parseFloat(v) : v);
            if (parameterized) {
              params.push(first);
              params.push(second);
              return `${quoteFieldNamesWith[0]}${rule.field}${quoteFieldNamesWith[1]} ${operator} ? and ?`;
            }
            const firstParamName = getNextNamedParam(rule.field);
            const secondParamName = getNextNamedParam(rule.field);
            params_named[firstParamName] = first;
            params_named[secondParamName] = second;
            return `${quoteFieldNamesWith[0]}${rule.field}${quoteFieldNamesWith[1]} ${operator} ${paramPrefix}${firstParamName} and ${paramPrefix}${secondParamName}`;
          } else {
            return "";
          }
        }
        let paramValue = rule.value;
        if (typeof rule.value === "string") {
          if (shouldRenderAsNumber(rule.value, parseNumbers)) {
            paramValue = parseFloat(rule.value);
          } else {
            paramValue = /^'.*'$/g.test(value) ? value.replace(/(^'|'$)/g, "") : (
              /* istanbul ignore next */
              value
            );
          }
        }
        let paramName = "";
        if (parameterized) {
          params.push(paramValue);
        } else {
          paramName = getNextNamedParam(rule.field);
          params_named[paramName] = paramValue;
        }
        return `${quoteFieldNamesWith[0]}${rule.field}${quoteFieldNamesWith[1]} ${operator} ${parameterized ? "?" : `${paramPrefix}${paramName}`}`.trim();
      } else {
        const operatorLowerCase = operator.toLowerCase();
        if ((operatorLowerCase === "in" || operatorLowerCase === "not in" || operatorLowerCase === "between" || operatorLowerCase === "not between") && !value) {
          return "";
        }
      }
      return `${quoteFieldNamesWith[0]}${rule.field}${quoteFieldNamesWith[1]} ${operator} ${value}`.trim();
    };
    const processRuleGroup = (rg, outermost) => {
      if (!isRuleOrGroupValid(rg, validationMap[rg.id ?? /* istanbul ignore next */
      ""])) {
        return outermost ? fallbackExpression : "";
      }
      const processedRules = rg.rules.map((rule) => {
        if (typeof rule === "string") {
          return rule;
        }
        if ("rules" in rule) {
          return processRuleGroup(rule);
        }
        return processRule(rule);
      });
      if (processedRules.length === 0) {
        return fallbackExpression;
      }
      return `${rg.not ? "NOT " : ""}(${processedRules.filter(Boolean).join("combinator" in rg ? ` ${rg.combinator} ` : " ")})`;
    };
    if (parameterized) {
      return { sql: processRuleGroup(ruleGroup, true), params };
    }
    return { sql: processRuleGroup(ruleGroup, true), params: params_named };
  }
  if (format === "mongodb") {
    const processRuleGroup = (rg, outermost) => {
      if (!isRuleOrGroupValid(rg, validationMap[rg.id ?? /* istanbul ignore next */
      ""])) {
        return outermost ? fallbackExpression : "";
      }
      const combinator = `"$${rg.combinator.toLowerCase()}"`;
      let hasChildRules = false;
      const expressions = rg.rules.map((rule) => {
        if ("rules" in rule) {
          const processedRuleGroup = processRuleGroup(rule);
          if (processedRuleGroup) {
            hasChildRules = true;
            return /^\{.+\}$/.test(processedRuleGroup) ? processedRuleGroup : `{${processedRuleGroup}}`;
          }
          return "";
        }
        const [validationResult, fieldValidator] = validateRule(rule);
        if (!isRuleOrGroupValid(rule, validationResult, fieldValidator) || rule.field === placeholderFieldName || rule.operator === placeholderOperatorName) {
          return "";
        }
        return (ruleProcessorInternal ?? valueProcessorInternal)(rule, { parseNumbers });
      }).filter(Boolean);
      return expressions.length > 0 ? expressions.length === 1 && !hasChildRules ? expressions[0] : `${combinator}:[${expressions.join(",")}]` : fallbackExpression;
    };
    const rgStandard = "combinator" in ruleGroup ? ruleGroup : convertFromIC(ruleGroup);
    const processedQuery = processRuleGroup(rgStandard, true);
    return /^\{.+\}$/.test(processedQuery) ? processedQuery : `{${processedQuery}}`;
  }
  if (format === "cel") {
    const processRuleGroup = (rg, outermost) => {
      if (!isRuleOrGroupValid(rg, validationMap[rg.id ?? /* istanbul ignore next */
      ""])) {
        return outermost ? fallbackExpression : "";
      }
      const expression = rg.rules.map((rule) => {
        if (typeof rule === "string") {
          return celCombinatorMap[rule];
        }
        if ("rules" in rule) {
          return processRuleGroup(rule);
        }
        const [validationResult, fieldValidator] = validateRule(rule);
        if (!isRuleOrGroupValid(rule, validationResult, fieldValidator) || rule.field === placeholderFieldName || rule.operator === placeholderOperatorName) {
          return "";
        }
        return (ruleProcessorInternal ?? valueProcessorInternal)(rule, {
          parseNumbers,
          escapeQuotes: (rule.valueSource ?? "value") === "value"
        });
      }).filter(Boolean).join(
        "combinator" in rg ? ` ${celCombinatorMap[rg.combinator]} ` : " "
      );
      const [prefix, suffix] = rg.not || !outermost ? [`${rg.not ? "!" : ""}(`, ")"] : ["", ""];
      return expression ? `${prefix}${expression}${suffix}` : fallbackExpression;
    };
    return processRuleGroup(ruleGroup, true);
  }
  if (format === "spel") {
    const processRuleGroup = (rg, outermost) => {
      if (!isRuleOrGroupValid(rg, validationMap[rg.id ?? /* istanbul ignore next */
      ""])) {
        return outermost ? fallbackExpression : "";
      }
      const expression = rg.rules.map((rule) => {
        if (typeof rule === "string") {
          return rule;
        }
        if ("rules" in rule) {
          return processRuleGroup(rule);
        }
        const [validationResult, fieldValidator] = validateRule(rule);
        if (!isRuleOrGroupValid(rule, validationResult, fieldValidator) || rule.field === placeholderFieldName || rule.operator === placeholderOperatorName) {
          return "";
        }
        return (ruleProcessorInternal ?? valueProcessorInternal)(rule, {
          parseNumbers,
          escapeQuotes: (rule.valueSource ?? "value") === "value"
        });
      }).filter(Boolean).join("combinator" in rg ? ` ${rg.combinator} ` : " ");
      const [prefix, suffix] = rg.not || !outermost ? [`${rg.not ? "!" : ""}(`, ")"] : ["", ""];
      return expression ? `${prefix}${expression}${suffix}` : fallbackExpression;
    };
    return processRuleGroup(ruleGroup, true);
  }
  if (format === "jsonlogic") {
    const query = "combinator" in ruleGroup ? ruleGroup : convertFromIC(ruleGroup);
    const processRuleGroup = (rg) => {
      if (!isRuleOrGroupValid(rg, validationMap[rg.id ?? /* istanbul ignore next */
      ""])) {
        return false;
      }
      const processedRules = rg.rules.map((rule) => {
        if ("rules" in rule) {
          return processRuleGroup(rule);
        }
        const [validationResult, fieldValidator] = validateRule(rule);
        if (!isRuleOrGroupValid(rule, validationResult, fieldValidator) || rule.field === placeholderFieldName || rule.operator === placeholderOperatorName) {
          return false;
        }
        return (ruleProcessorInternal ?? valueProcessorInternal)(rule, { parseNumbers });
      }).filter(Boolean);
      if (processedRules.length === 0) {
        return false;
      }
      const jsonRuleGroup = processedRules.length === 1 ? processedRules[0] : {
        [rg.combinator]: processedRules
      };
      return rg.not ? { "!": jsonRuleGroup } : jsonRuleGroup;
    };
    return processRuleGroup(query);
  }
  return "";
}

// src/utils/formatQuery/index.ts
var internalValueProcessors = {
  default: defaultValueProcessorByRule,
  mongodb: defaultRuleProcessorMongoDB,
  cel: defaultRuleProcessorCEL,
  spel: defaultRuleProcessorSpEL
};
var generateValueProcessor = (format) => (field, operator, value, valueSource) => internalValueProcessors[format](
  { field, operator, value, valueSource },
  { parseNumbers: false }
);
var defaultValueProcessor = generateValueProcessor("default");
var defaultMongoDBValueProcessor = generateValueProcessor("mongodb");
var defaultCELValueProcessor = generateValueProcessor("cel");
var defaultSpELValueProcessor = generateValueProcessor("spel");
var defaultValueProcessorCELByRule = (/* unused pure expression or super */ null && (defaultRuleProcessorCEL));
var defaultValueProcessorMongoDBByRule = (/* unused pure expression or super */ null && (defaultRuleProcessorMongoDB));
var defaultValueProcessorSpELByRule = (/* unused pure expression or super */ null && (defaultRuleProcessorSpEL));

// src/utils/generateID.ts
var cryptoModule = globalThis.crypto;
var generateID = () => "00-0-4-2-000".replace(
  /[^-]/g,
  (s) => ((Math.random() + ~~s) * 65536 >> s).toString(16).padStart(4, "0")
);
if (cryptoModule) {
  if (typeof cryptoModule.randomUUID === "function") {
    generateID = () => cryptoModule.randomUUID();
  } else if (typeof cryptoModule.getRandomValues === "function") {
    const template = [
      "".padEnd(8, "x"),
      "".padEnd(4, "x"),
      // third section starts with the UUID version
      "4".padEnd(4, "x"),
      // First character of fourth section is limited to four specific characters
      "y".padEnd(4, "x"),
      "".padEnd(12, "x")
    ].join("-");
    const position19vals = ["8", "9", "a", "b"];
    const re = /[xy]/g;
    const container = new Uint32Array(32);
    generateID = () => {
      cryptoModule.getRandomValues(container);
      let i = -1;
      return template.replaceAll(re, (char) => {
        i++;
        return char === "y" ? position19vals[container[i] % 4] : (container[i] % 16).toString(16);
      });
    };
  }
}

// src/utils/getCompatContextProvider.tsx



// src/utils/mergeClassnames.ts

var mergeClassnames = (...args) => {
  const joinClassnamesByName = (name) => clsx_m(args.filter(Boolean).map((c) => clsx_m(c[name])));
  return {
    queryBuilder: joinClassnamesByName("queryBuilder"),
    ruleGroup: joinClassnamesByName("ruleGroup"),
    header: joinClassnamesByName("header"),
    body: joinClassnamesByName("body"),
    combinators: joinClassnamesByName("combinators"),
    addRule: joinClassnamesByName("addRule"),
    addGroup: joinClassnamesByName("addGroup"),
    cloneRule: joinClassnamesByName("cloneRule"),
    cloneGroup: joinClassnamesByName("cloneGroup"),
    removeGroup: joinClassnamesByName("removeGroup"),
    rule: joinClassnamesByName("rule"),
    fields: joinClassnamesByName("fields"),
    operators: joinClassnamesByName("operators"),
    value: joinClassnamesByName("value"),
    removeRule: joinClassnamesByName("removeRule"),
    notToggle: joinClassnamesByName("notToggle"),
    dragHandle: joinClassnamesByName("dragHandle"),
    lockRule: joinClassnamesByName("lockRule"),
    lockGroup: joinClassnamesByName("lockGroup"),
    valueSource: joinClassnamesByName("valueSource")
  };
};

// src/utils/getCompatContextProvider.tsx
var getCompatContextProvider = ({
  key,
  controlClassnames: compatClassnames,
  controlElements: compatElements
}) => (props) => {
  const rqbContext = (0,react.useContext)(QueryBuilderContext);
  const classnamesObject = (0,react.useMemo)(
    () => compatClassnames ? {
      controlClassnames: mergeClassnames(
        rqbContext.controlClassnames,
        props.controlClassnames,
        compatClassnames
      )
    } : {},
    [props.controlClassnames, rqbContext.controlClassnames]
  );
  const newContextProps = (0,react.useMemo)(
    () => ({
      ...rqbContext,
      ...classnamesObject,
      controlElements: {
        ...rqbContext.controlElements,
        ...compatElements,
        ...props.controlElements
      }
    }),
    [classnamesObject, props.controlElements, rqbContext]
  );
  return /* @__PURE__ */ react.createElement(QueryBuilderContext.Provider, { value: newContextProps, key }, props.children);
};

// src/utils/getValidationClassNames.ts
var getValidationClassNames = (validationResult) => {
  const valid = typeof validationResult === "boolean" ? validationResult : typeof validationResult === "object" && validationResult !== null ? validationResult.valid : null;
  return typeof valid === "boolean" ? valid ? standardClassnames.valid : standardClassnames.invalid : "";
};

// src/utils/getValueSourcesUtil.ts
var getValueSourcesUtil = (fieldData, operator, getValueSources) => {
  const fd = fieldData ?? /* istanbul ignore else */
  {};
  if (fd.valueSources) {
    if (typeof fd.valueSources === "function") {
      return fd.valueSources(operator);
    }
    return fd.valueSources;
  }
  if (getValueSources) {
    const vals = getValueSources(fd.name, operator);
    if (vals)
      return vals;
  }
  return ["value"];
};

// src/utils/hooks/useControlledOrUncontrolled.ts


// src/messages.ts
var messages_exports = {};
__export(messages_exports, {
  errorBothQueryDefaultQuery: () => errorBothQueryDefaultQuery,
  errorControlledToUncontrolled: () => errorControlledToUncontrolled,
  errorDeprecatedRuleGroupProps: () => errorDeprecatedRuleGroupProps,
  errorDeprecatedRuleProps: () => errorDeprecatedRuleProps,
  errorEnabledDndWithoutReactDnD: () => errorEnabledDndWithoutReactDnD,
  errorUncontrolledToControlled: () => errorUncontrolledToControlled
});
var errorDeprecatedRuleGroupProps = "A custom RuleGroup component has rendered a standard RuleGroup component with deprecated props. The combinator, not, and rules props should not be used. Instead, the full group object should be passed as the ruleGroup prop.";
var errorDeprecatedRuleProps = "A custom RuleGroup component has rendered a standard Rule component with deprecated props. The field, operator, value, and valueSource props should not be used. Instead, the full rule object should be passed as the rule prop.";
var errorBothQueryDefaultQuery = "QueryBuilder was rendered with both query and defaultQuery props. QueryBuilder must be either controlled or uncontrolled (specify either the query prop, or the defaultQuery prop, but not both). Decide between using a controlled or uncontrolled query builder and remove one of these props. More info: https://reactjs.org/link/controlled-components";
var errorUncontrolledToControlled = "QueryBuilder is changing from an uncontrolled component to be controlled. This is likely caused by the query changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled query builder for the lifetime of the component. More info: https://reactjs.org/link/controlled-components";
var errorControlledToUncontrolled = "QueryBuilder is changing from a controlled component to be uncontrolled. This is likely caused by the query changing from defined to undefined, which should not happen. Decide between using a controlled or uncontrolled query builder for the lifetime of the component. More info: https://reactjs.org/link/controlled-components";
var errorEnabledDndWithoutReactDnD = "QueryBuilder was rendered with the enableDragAndDrop prop set to true, but either react-dnd or react-dnd-html5-backend (or both) was not installed. To enable drag-and-drop functionality, install both packages and wrap QueryBuilder in QueryBuilderDnD from @react-querybuilder/dnd.";

// src/utils/hooks/usePrevious.ts

var usePrevious = (value) => {
  const ref = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

// src/utils/hooks/useControlledOrUncontrolled.ts
var didWarnBothQueryDefaultQuery = false;
var didWarnUncontrolledToControlled = false;
var didWarnControlledToUncontrolled = false;
var useControlledOrUncontrolled = ({
  defaultQuery,
  queryProp,
  isFirstRender
}) => {
  const prevQueryPresent = usePrevious(!!queryProp);
  (0,react.useEffect)(() => {
    if (false) {}
  }, [defaultQuery, prevQueryPresent, queryProp, isFirstRender]);
};

// src/utils/hooks/useDeprecatedProps.ts

var didWarnUsingDeprecatedRuleProps = false;
var didWarnUsingDeprecatedRuleGroupProps = false;
var useDeprecatedProps = (type, newPropPresent) => {
  (0,react.useEffect)(() => {
    if (false) {}
    if (false) {}
  }, [newPropPresent, type]);
};

// src/utils/hooks/useMergedContext.ts


// src/utils/objectKeys.ts
var objectKeys = (obj) => Object.keys(obj);

// src/utils/hooks/usePreferProp.ts

var preferPropDefaultTrue = (prop, context) => prop === false ? false : prop ? true : context === false ? false : true;
var preferPropDefaultFalse = (prop, context) => prop ? true : prop === false ? false : context ? true : false;
var preferProp = (def, prop, context) => def ? preferPropDefaultTrue(prop, context) : preferPropDefaultFalse(prop, context);
var usePreferProp = (def, prop, context) => (0,react.useMemo)(() => preferProp(def, prop, context), [context, def, prop]);

// src/utils/hooks/useMergedContext.ts
var useMergedContext = (props) => {
  const rqbContext = (0,react.useContext)(QueryBuilderContext);
  const enableMountQueryChange = usePreferProp(
    true,
    props.enableMountQueryChange,
    rqbContext.enableMountQueryChange
  );
  const enableDragAndDrop = usePreferProp(false, props.enableDragAndDrop, rqbContext.enableDragAndDrop) && rqbContext.enableDragAndDrop !== false;
  const debugMode = usePreferProp(false, props.debugMode, rqbContext.debugMode);
  const controlClassnames = (0,react.useMemo)(
    () => mergeClassnames(
      defaultControlClassnames,
      rqbContext.controlClassnames,
      props.controlClassnames
    ),
    [rqbContext.controlClassnames, props.controlClassnames]
  );
  const controlElements = (0,react.useMemo)(
    () => ({
      ...defaultControlElements,
      ...rqbContext.controlElements,
      ...props.controlElements
    }),
    [props.controlElements, rqbContext.controlElements]
  );
  const translations = (0,react.useMemo)(() => {
    const translationsTemp = {};
    objectKeys(props.translations).forEach((t) => {
      const contextTranslations = rqbContext.translations;
      translationsTemp[t] = {
        ...defaultTranslations[t],
        ...contextTranslations,
        ...props.translations[t]
      };
    });
    return { ...defaultTranslations, ...translationsTemp };
  }, [rqbContext.translations, props.translations]);
  const {
    controlClassnames: _controlClassnames,
    controlElements: _controlElements,
    debugMode: _debugMode,
    enableDragAndDrop: _enableDragAndDrop,
    enableMountQueryChange: _enableMountQueryChange,
    translations: _translations,
    ...otherContext
  } = rqbContext;
  return {
    controlClassnames,
    controlElements,
    debugMode,
    enableDragAndDrop,
    enableMountQueryChange,
    translations,
    ...otherContext
  };
};

// src/utils/hooks/useReactDndWarning.ts

var didWarnEnabledDndWithoutReactDnD = false;
var useReactDndWarning = (enableDragAndDrop, dndRefs) => {
  (0,react.useEffect)(() => {
    if (false) {}
  }, []);
};

// src/utils/parserUtils.ts
var getFieldsArray = (fields) => {
  let fieldsFlat = [];
  const fieldsArray = !fields ? [] : Array.isArray(fields) ? fields : Object.keys(fields).map((fld) => ({ ...fields[fld], name: fld })).sort((a, b) => a.label.localeCompare(b.label));
  if (isOptionGroupArray(fieldsArray)) {
    fieldsFlat = uniqByName(fieldsFlat.concat(...fieldsArray.map((opt) => opt.options)));
  } else {
    fieldsFlat = uniqByName(fieldsArray);
  }
  return fieldsFlat;
};
function fieldIsValidUtil({
  fieldsFlat,
  fieldName,
  operator,
  subordinateFieldName,
  getValueSources
}) {
  if (fieldsFlat.length === 0)
    return true;
  let valid = false;
  const primaryField = fieldsFlat.find((ff) => ff.name === fieldName);
  if (primaryField) {
    if (!subordinateFieldName && operator !== "notNull" && operator !== "null" && !getValueSourcesUtil(primaryField, operator, getValueSources).some((vs) => vs === "value")) {
      valid = false;
    } else {
      valid = true;
    }
    if (valid && !!subordinateFieldName) {
      if (getValueSourcesUtil(primaryField, operator, getValueSources).some((vs) => vs === "field") && fieldName !== subordinateFieldName) {
        const validSubordinateFields = filterFieldsByComparator(
          primaryField,
          fieldsFlat,
          operator
        );
        if (!validSubordinateFields.find((vsf) => vsf.name === subordinateFieldName)) {
          valid = false;
        }
      } else {
        valid = false;
      }
    }
  }
  return valid;
}

// src/utils/parseCEL/celParser.js
var celParser = function() {
  var o = function(k, v, o2, l) {
    for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v)
      ;
    return o2;
  }, $V0 = [1, 27], $V1 = [1, 31], $V2 = [1, 32], $V3 = [1, 28], $V4 = [1, 29], $V5 = [1, 30], $V6 = [1, 33], $V7 = [1, 34], $V8 = [1, 18], $V9 = [1, 26], $Va = [1, 12], $Vb = [1, 13], $Vc = [1, 19], $Vd = [1, 20], $Ve = [1, 40], $Vf = [1, 39], $Vg = [1, 41], $Vh = [1, 42], $Vi = [1, 43], $Vj = [1, 36], $Vk = [1, 37], $Vl = [1, 38], $Vm = [5, 37, 43, 45, 49, 50, 53, 54, 55, 56, 60, 61, 62, 63], $Vn = [1, 44], $Vo = [1, 45], $Vp = [1, 46], $Vq = [5, 23, 24, 25, 26, 27, 28, 31, 37, 40, 43, 44, 45, 46, 49, 50, 53, 54, 55, 56, 60, 61, 62, 63], $Vr = [7, 9, 10, 12, 13, 14, 16, 18, 21, 35, 40, 41, 44, 46], $Vs = [2, 36], $Vt = [1, 85], $Vu = [43, 45, 50], $Vv = [5, 37, 43, 45, 49, 50, 53, 61, 62, 63], $Vw = [5, 37, 43, 45, 49, 50, 53, 54, 55, 56, 61, 62, 63], $Vx = [2, 37], $Vy = [49, 50];
  var parser = {
    trace: function trace() {
    },
    yy: {},
    symbols_: { "error": 2, "main": 3, "expr": 4, "EOF": 5, "string_literal": 6, "STRING_LIT": 7, "bytes_literal": 8, "b": 9, "B": 10, "number_literal": 11, "INT_LIT": 12, "UINT_LIT": 13, "FLOAT_LIT": 14, "boolean_literal": 15, "BOOL_LIT": 16, "null_literal": 17, "NULL_LIT": 18, "literal": 19, "ident": 20, "IDENT": 21, "relop": 22, "==": 23, ">=": 24, ">": 25, "<=": 26, "<": 27, "!=": 28, "relation": 29, "member": 30, "in": 31, "list": 32, "map": 33, "negation": 34, "!": 35, "negative": 36, "-": 37, "unary": 38, "primary": 39, "DOT": 40, "(": 41, "expr_list": 42, ")": 43, "[": 44, "]": 45, "{": 46, "field_inits": 47, "trailing_comma": 48, "}": 49, ",": 50, "map_inits": 51, "math_operation": 52, "+": 53, "*": 54, "/": 55, "%": 56, "conditional_expr": 57, "conditional_and": 58, "conditional_or": 59, "?": 60, ":": 61, "&&": 62, "||": 63, "$accept": 0, "$end": 1 },
    terminals_: { 2: "error", 5: "EOF", 7: "STRING_LIT", 9: "b", 10: "B", 12: "INT_LIT", 13: "UINT_LIT", 14: "FLOAT_LIT", 16: "BOOL_LIT", 18: "NULL_LIT", 21: "IDENT", 23: "==", 24: ">=", 25: ">", 26: "<=", 27: "<", 28: "!=", 31: "in", 35: "!", 37: "-", 40: "DOT", 41: "(", 43: ")", 44: "[", 45: "]", 46: "{", 49: "}", 50: ",", 53: "+", 54: "*", 55: "/", 56: "%", 60: "?", 61: ":", 62: "&&", 63: "||" },
    productions_: [0, [3, 2], [6, 1], [8, 2], [8, 2], [11, 1], [11, 1], [11, 1], [15, 1], [17, 1], [19, 1], [19, 1], [19, 1], [19, 1], [19, 1], [20, 1], [22, 1], [22, 1], [22, 1], [22, 1], [22, 1], [22, 1], [29, 3], [29, 3], [29, 3], [34, 1], [34, 2], [36, 1], [36, 2], [38, 2], [30, 1], [30, 1], [30, 3], [30, 6], [30, 4], [30, 5], [48, 0], [48, 1], [39, 1], [39, 2], [39, 5], [39, 6], [39, 3], [39, 1], [39, 1], [39, 1], [32, 4], [33, 4], [52, 3], [52, 3], [52, 3], [52, 3], [52, 3], [4, 1], [4, 1], [4, 1], [4, 1], [4, 1], [4, 1], [57, 5], [58, 3], [59, 3], [42, 1], [42, 3], [47, 3], [47, 5], [51, 3], [51, 5]],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      var $0 = $$.length - 1;
      switch (yystate) {
        case 1:
          return { nodeType: "Main", value: $$[$0 - 1] };
          break;
        case 2:
          this.$ = { type: "StringLiteral", value: $$[$0] };
          break;
        case 3:
        case 4:
          this.$ = { type: "BytesLiteral", value: $$[$0] };
          break;
        case 5:
          this.$ = { type: "IntegerLiteral", value: parseInt($$[$0], /x/.test($$[$0]) ? 16 : 10) };
          break;
        case 6:
          this.$ = { type: "UnsignedIntegerLiteral", value: parseInt($$[$0].replace(/u$/i, ""), /^0x/.test($$[$0]) ? 16 : 10) };
          break;
        case 7:
          this.$ = { type: "FloatLiteral", value: parseFloat($$[$0]) };
          break;
        case 8:
          this.$ = { type: "BooleanLiteral", value: $$[$0] === "true" };
          break;
        case 9:
          this.$ = { type: "NullLiteral", value: null };
          break;
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 38:
        case 43:
        case 44:
        case 45:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
        case 58:
          this.$ = $$[$0];
          break;
        case 15:
          this.$ = { type: "Identifier", value: $$[$0] };
          break;
        case 22:
        case 23:
        case 24:
          this.$ = { type: "Relation", left: $$[$0 - 2], operator: $$[$0 - 1], right: $$[$0] };
          break;
        case 25:
        case 27:
          this.$ = 1;
          break;
        case 26:
        case 28:
          this.$ = this.$ += 1;
          ;
          break;
        case 29:
          this.$ = { type: "Negation", negations: $$[$0 - 1], value: $$[$0] };
          break;
        case 30:
        case 31:
          this.$ = $$[$0];
          break;
        case 32:
          this.$ = { type: "Member", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 33:
          this.$ = { type: "Member", left: $$[$0 - 5], right: $$[$0 - 3], list: $$[$0 - 1] };
          break;
        case 34:
          this.$ = { type: "DynamicPropertyAccessor", left: $$[$0 - 3], right: $$[$0 - 1] };
          break;
        case 35:
          this.$ = { type: "FieldsObject", left: $$[$0 - 4], list: $$[$0 - 2], trailingComma: $$[$0 - 1] };
          break;
        case 36:
          this.$ = false;
          break;
        case 37:
          this.$ = true;
          break;
        case 39:
          this.$ = { type: "Property", value: $$[$0] };
          break;
        case 40:
          this.$ = { type: "FunctionCall", name: $$[$0 - 4], args: $$[$0 - 2], trailingComma: $$[$0 - 1] };
          break;
        case 41:
          this.$ = { type: "Property", value: $$[$0 - 4], args: $$[$0 - 2], trailingComma: $$[$0 - 1] };
          break;
        case 42:
          this.$ = { type: "ExpressionGroup", value: $$[$0 - 1] };
          break;
        case 46:
          this.$ = { type: "List", value: $$[$0 - 2], trailingComma: $$[$0 - 1] };
          break;
        case 47:
          this.$ = { type: "Map", value: $$[$0 - 2], trailingComma: $$[$0 - 1] };
          break;
        case 48:
          this.$ = { type: "Addition", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 49:
          this.$ = { type: "Subtraction", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 50:
          this.$ = { type: "Multiplication", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 51:
          this.$ = { type: "Division", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 52:
          this.$ = { type: "Modulo", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 59:
          this.$ = { type: "ConditionalExpr", condition: $$[$0 - 4], valueIfTrue: $$[$0 - 2], valueIfFalse: $$[$0] };
          break;
        case 60:
          this.$ = { type: "ConditionalAnd", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 61:
          this.$ = { type: "ConditionalOr", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 62:
          this.$ = { type: "ExpressionList", value: [$$[$0]] };
          break;
        case 63:
          this.$ = $$[$0 - 2];
          this.$.value.push($$[$0]);
          ;
          break;
        case 64:
          this.$ = { type: "FieldInits", value: [{ type: "FieldInit", left: $$[$0 - 2], right: $$[$0] }] };
          break;
        case 65:
          this.$ = $$[$0 - 4];
          this.$.value.push({ type: "FieldInit", left: $$[$0 - 2], right: $$[$0] });
          ;
          break;
        case 66:
          this.$ = { type: "MapInits", value: [{ type: "MapInit", left: $$[$0 - 2], right: $$[$0] }] };
          break;
        case 67:
          this.$ = $$[$0 - 4];
          this.$.value.push({ type: "MapInit", left: $$[$0 - 2], right: $$[$0] });
          ;
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 1: [3] }, { 5: [1, 35], 37: $Ve, 53: $Vf, 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj, 62: $Vk, 63: $Vl }, o($Vm, [2, 53], { 22: 47, 23: [1, 49], 24: [1, 50], 25: [1, 51], 26: [1, 52], 27: [1, 53], 28: [1, 54], 31: [1, 48], 40: $Vn, 44: $Vo, 46: $Vp }), o($Vm, [2, 54]), o($Vm, [2, 55]), o($Vm, [2, 56]), o($Vm, [2, 57]), o($Vm, [2, 58]), o($Vq, [2, 30]), o($Vq, [2, 31]), o($Vq, [2, 38], { 41: [1, 55] }), { 20: 56, 21: $V8 }, { 4: 57, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, o($Vq, [2, 43]), o($Vq, [2, 44]), o($Vq, [2, 45]), { 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 32: 14, 33: 15, 35: [1, 59], 39: 58, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd }, o([5, 23, 24, 25, 26, 27, 28, 31, 37, 40, 41, 43, 44, 45, 46, 49, 50, 53, 54, 55, 56, 60, 61, 62, 63], [2, 15]), { 4: 61, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 42: 60, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 4: 63, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 51: 62, 52: 8, 57: 4, 58: 5, 59: 6 }, o($Vq, [2, 10]), o($Vq, [2, 11]), o($Vq, [2, 12]), o($Vq, [2, 13]), o($Vq, [2, 14]), o($Vr, [2, 25]), o($Vq, [2, 2]), o($Vq, [2, 5]), o($Vq, [2, 6]), o($Vq, [2, 7]), { 6: 64, 7: $V0 }, { 6: 65, 7: $V0 }, o($Vq, [2, 8]), o($Vq, [2, 9]), { 1: [2, 1] }, { 4: 66, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 4: 67, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 4: 68, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 4: 69, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 4: 70, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 4: 71, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 4: 72, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 4: 73, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 20: 74, 21: $V8 }, { 4: 75, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 20: 77, 21: $V8, 47: 76 }, { 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 30: 78, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd }, { 32: 79, 33: 80, 44: $Vc, 46: $Vd }, o($Vr, [2, 16]), o($Vr, [2, 17]), o($Vr, [2, 18]), o($Vr, [2, 19]), o($Vr, [2, 20]), o($Vr, [2, 21]), { 4: 61, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 42: 81, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, o($Vq, [2, 39], { 41: [1, 82] }), { 37: $Ve, 43: [1, 83], 53: $Vf, 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj, 62: $Vk, 63: $Vl }, o($Vq, [2, 29]), o($Vr, [2, 26]), { 45: $Vs, 48: 84, 50: $Vt }, o($Vu, [2, 62], { 37: $Ve, 53: $Vf, 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj, 62: $Vk, 63: $Vl }), { 48: 86, 49: $Vs, 50: [1, 87] }, { 37: $Ve, 53: $Vf, 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj, 61: [1, 88], 62: $Vk, 63: $Vl }, o($Vq, [2, 3]), o($Vq, [2, 4]), { 37: $Ve, 53: $Vf, 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj, 61: [1, 89], 62: $Vk, 63: $Vl }, o([5, 43, 45, 49, 50, 61, 62, 63], [2, 60], { 37: $Ve, 53: $Vf, 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj }), o([5, 43, 45, 49, 50, 61, 63], [2, 61], { 37: $Ve, 53: $Vf, 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj, 62: $Vk }), o($Vv, [2, 48], { 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj }), o($Vv, [2, 49], { 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj }), o($Vw, [2, 50], { 60: $Vj }), o($Vw, [2, 51], { 60: $Vj }), o($Vw, [2, 52], { 60: $Vj }), o($Vq, [2, 32], { 41: [1, 90] }), { 37: $Ve, 45: [1, 91], 53: $Vf, 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj, 62: $Vk, 63: $Vl }, { 48: 92, 49: $Vs, 50: [1, 93] }, { 61: [1, 94] }, o($Vm, [2, 22], { 40: $Vn, 44: $Vo, 46: $Vp }), o($Vm, [2, 23]), o($Vm, [2, 24]), { 43: $Vs, 48: 95, 50: $Vt }, { 4: 61, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 42: 96, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, o($Vq, [2, 42]), { 45: [1, 97] }, o([43, 45], $Vx, { 30: 3, 57: 4, 58: 5, 59: 6, 29: 7, 52: 8, 39: 9, 38: 10, 20: 11, 32: 14, 33: 15, 19: 16, 34: 17, 6: 21, 11: 22, 8: 23, 15: 24, 17: 25, 4: 98, 7: $V0, 9: $V1, 10: $V2, 12: $V3, 13: $V4, 14: $V5, 16: $V6, 18: $V7, 21: $V8, 35: $V9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd }), { 49: [1, 99] }, { 4: 100, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 49: $Vx, 52: 8, 57: 4, 58: 5, 59: 6 }, { 4: 101, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 4: 102, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 4: 61, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 42: 103, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, o($Vq, [2, 34]), { 49: [1, 104] }, { 20: 105, 21: $V8, 49: $Vx }, { 4: 106, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 43: [1, 107] }, { 43: $Vs, 48: 108, 50: $Vt }, o($Vq, [2, 46]), o($Vu, [2, 63], { 37: $Ve, 53: $Vf, 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj, 62: $Vk, 63: $Vl }), o($Vq, [2, 47]), { 37: $Ve, 53: $Vf, 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj, 61: [1, 109], 62: $Vk, 63: $Vl }, o($Vy, [2, 66], { 37: $Ve, 53: $Vf, 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj, 62: $Vk, 63: $Vl }), o($Vm, [2, 59]), { 43: [1, 110], 50: [1, 111] }, o($Vq, [2, 35]), { 61: [1, 112] }, o($Vy, [2, 64], { 37: $Ve, 53: $Vf, 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj, 62: $Vk, 63: $Vl }), o($Vq, [2, 40]), { 43: [1, 113] }, { 4: 114, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, o($Vq, [2, 33]), { 4: 98, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 4: 115, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, o($Vq, [2, 41]), o($Vy, [2, 67], { 37: $Ve, 53: $Vf, 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj, 62: $Vk, 63: $Vl }), o($Vy, [2, 65], { 37: $Ve, 53: $Vf, 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj, 62: $Vk, 63: $Vl })],
    defaultActions: { 35: [2, 1] },
    parseError: function parseError(str, hash) {
      if (hash.recoverable) {
        this.trace(str);
      } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
      }
    },
    parse: function parse(input) {
      var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
      var args = lstack.slice.call(arguments, 1);
      var lexer2 = Object.create(this.lexer);
      var sharedState = { yy: {} };
      for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
          sharedState.yy[k] = this.yy[k];
        }
      }
      lexer2.setInput(input, sharedState.yy);
      sharedState.yy.lexer = lexer2;
      sharedState.yy.parser = this;
      if (typeof lexer2.yylloc == "undefined") {
        lexer2.yylloc = {};
      }
      var yyloc = lexer2.yylloc;
      lstack.push(yyloc);
      var ranges = lexer2.options && lexer2.options.ranges;
      if (typeof sharedState.yy.parseError === "function") {
        this.parseError = sharedState.yy.parseError;
      } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
      }
      function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
      }
      var lex = function() {
        var token;
        token = lexer2.lex() || EOF;
        if (typeof token !== "number") {
          token = self.symbols_[token] || token;
        }
        return token;
      };
      var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
      while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
          action = this.defaultActions[state];
        } else {
          if (symbol === null || typeof symbol == "undefined") {
            symbol = lex();
          }
          action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
          var errStr = "";
          expected = [];
          for (p in table[state]) {
            if (this.terminals_[p] && p > TERROR) {
              expected.push("'" + this.terminals_[p] + "'");
            }
          }
          if (lexer2.showPosition) {
            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + lexer2.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
          } else {
            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == EOF ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
          }
          this.parseError(errStr, {
            text: lexer2.match,
            token: this.terminals_[symbol] || symbol,
            line: lexer2.yylineno,
            loc: yyloc,
            expected
          });
        }
        if (action[0] instanceof Array && action.length > 1) {
          throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
          case 1:
            stack.push(symbol);
            vstack.push(lexer2.yytext);
            lstack.push(lexer2.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
              yyleng = lexer2.yyleng;
              yytext = lexer2.yytext;
              yylineno = lexer2.yylineno;
              yyloc = lexer2.yylloc;
              if (recovering > 0) {
                recovering--;
              }
            } else {
              symbol = preErrorSymbol;
              preErrorSymbol = null;
            }
            break;
          case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
              first_line: lstack[lstack.length - (len || 1)].first_line,
              last_line: lstack[lstack.length - 1].last_line,
              first_column: lstack[lstack.length - (len || 1)].first_column,
              last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
              yyval._$.range = [
                lstack[lstack.length - (len || 1)].range[0],
                lstack[lstack.length - 1].range[1]
              ];
            }
            r = this.performAction.apply(yyval, [
              yytext,
              yyleng,
              yylineno,
              sharedState.yy,
              action[1],
              vstack,
              lstack
            ].concat(args));
            if (typeof r !== "undefined") {
              return r;
            }
            if (len) {
              stack = stack.slice(0, -1 * len * 2);
              vstack = vstack.slice(0, -1 * len);
              lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }
  };
  var lexer = function() {
    var lexer2 = {
      EOF: 1,
      parseError: function parseError(str, hash) {
        if (this.yy.parser) {
          this.yy.parser.parseError(str, hash);
        } else {
          throw new Error(str);
        }
      },
      // resets the lexer, sets new input
      setInput: function(input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = "";
        this.conditionStack = ["INITIAL"];
        this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        };
        if (this.options.ranges) {
          this.yylloc.range = [0, 0];
        }
        this.offset = 0;
        return this;
      },
      // consumes and returns one char from the input
      input: function() {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
          this.yylineno++;
          this.yylloc.last_line++;
        } else {
          this.yylloc.last_column++;
        }
        if (this.options.ranges) {
          this.yylloc.range[1]++;
        }
        this._input = this._input.slice(1);
        return ch;
      },
      // unshifts one char (or a string) into the input
      unput: function(ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);
        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        if (lines.length - 1) {
          this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
        };
        if (this.options.ranges) {
          this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
      },
      // When called from action, caches matched text and appends it on next action
      more: function() {
        this._more = true;
        return this;
      },
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: function() {
        if (this.options.backtrack_lexer) {
          this._backtrack = true;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
        return this;
      },
      // retain first n characters of the match
      less: function(n) {
        this.unput(this.match.slice(n));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var next = this.match;
        if (next.length < 20) {
          next += this._input.substr(0, 20 - next.length);
        }
        return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(match, indexed_rule) {
        var token, lines, backup;
        if (this.options.backtrack_lexer) {
          backup = {
            yylineno: this.yylineno,
            yylloc: {
              first_line: this.yylloc.first_line,
              last_line: this.last_line,
              first_column: this.yylloc.first_column,
              last_column: this.yylloc.last_column
            },
            yytext: this.yytext,
            match: this.match,
            matches: this.matches,
            matched: this.matched,
            yyleng: this.yyleng,
            offset: this.offset,
            _more: this._more,
            _input: this._input,
            yy: this.yy,
            conditionStack: this.conditionStack.slice(0),
            done: this.done
          };
          if (this.options.ranges) {
            backup.yylloc.range = this.yylloc.range.slice(0);
          }
        }
        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
          this.yylineno += lines.length;
        }
        this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
          this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
          this.done = false;
        }
        if (token) {
          return token;
        } else if (this._backtrack) {
          for (var k in backup) {
            this[k] = backup[k];
          }
          return false;
        }
        return false;
      },
      // return next match in input
      next: function() {
        if (this.done) {
          return this.EOF;
        }
        if (!this._input) {
          this.done = true;
        }
        var token, match, tempMatch, index;
        if (!this._more) {
          this.yytext = "";
          this.match = "";
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
          tempMatch = this._input.match(this.rules[rules[i]]);
          if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
            match = tempMatch;
            index = i;
            if (this.options.backtrack_lexer) {
              token = this.test_match(tempMatch, rules[i]);
              if (token !== false) {
                return token;
              } else if (this._backtrack) {
                match = false;
                continue;
              } else {
                return false;
              }
            } else if (!this.options.flex) {
              break;
            }
          }
        }
        if (match) {
          token = this.test_match(match, rules[index]);
          if (token !== false) {
            return token;
          }
          return false;
        }
        if (this._input === "") {
          return this.EOF;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
      },
      // return next match that has a token
      lex: function lex() {
        var r = this.next();
        if (r) {
          return r;
        } else {
          return this.lex();
        }
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function begin(condition) {
        this.conditionStack.push(condition);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
          return this.conditionStack.pop();
        } else {
          return this.conditionStack[0];
        }
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
          return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
          return this.conditions["INITIAL"].rules;
        }
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
          return this.conditionStack[n];
        } else {
          return "INITIAL";
        }
      },
      // alias for begin(condition)
      pushState: function pushState(condition) {
        this.begin(condition);
      },
      // return the number of states currently on the stack
      stateStackSize: function stateStackSize() {
        return this.conditionStack.length;
      },
      options: { "flex": true },
      performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
        var YYSTATE = YY_START;
        switch ($avoiding_name_collisions) {
          case 0:
            break;
          case 1:
            break;
          case 2:
            return 31;
            break;
          case 3:
            return "as";
            break;
          case 4:
            return "break";
            break;
          case 5:
            return "const";
            break;
          case 6:
            return "continue";
            break;
          case 7:
            return "else";
            break;
          case 8:
            return "for";
            break;
          case 9:
            return "function";
            break;
          case 10:
            return "if";
            break;
          case 11:
            return "import";
            break;
          case 12:
            return "let";
            break;
          case 13:
            return "loop";
            break;
          case 14:
            return "package";
            break;
          case 15:
            return "namespace";
            break;
          case 16:
            return "return";
            break;
          case 17:
            return "var";
            break;
          case 18:
            return "void";
            break;
          case 19:
            return "while";
            break;
          case 20:
            return 18;
            break;
          case 21:
            return 16;
            break;
          case 22:
            return 16;
            break;
          case 23:
            return 40;
            break;
          case 24:
            return 60;
            break;
          case 25:
            return 61;
            break;
          case 26:
            return 50;
            break;
          case 27:
            return 44;
            break;
          case 28:
            return 45;
            break;
          case 29:
            return 41;
            break;
          case 30:
            return 43;
            break;
          case 31:
            return 28;
            break;
          case 32:
            return 35;
            break;
          case 33:
            return 53;
            break;
          case 34:
            return 37;
            break;
          case 35:
            return 54;
            break;
          case 36:
            return 55;
            break;
          case 37:
            return 56;
            break;
          case 38:
            return 23;
            break;
          case 39:
            return 24;
            break;
          case 40:
            return 25;
            break;
          case 41:
            return 26;
            break;
          case 42:
            return 27;
            break;
          case 43:
            return 46;
            break;
          case 44:
            return 49;
            break;
          case 45:
            return 62;
            break;
          case 46:
            return 63;
            break;
          case 47:
            return 21;
            break;
          case 48:
            return 7;
            break;
          case 49:
            return 7;
            break;
          case 50:
            return 7;
            break;
          case 51:
            return 7;
            break;
          case 52:
            return 12;
            break;
          case 53:
            return 13;
            break;
          case 54:
            return 14;
            break;
          case 55:
            return 5;
            break;
          case 56:
            return "INVALID";
            break;
          case 57:
            console.log(yy_.yytext);
            break;
        }
      },
      rules: [/^(?:[/][/]\s.*\n)/, /^(?:\s+)/, /^(?:in)/, /^(?:as)/, /^(?:break)/, /^(?:const)/, /^(?:continue)/, /^(?:else)/, /^(?:for)/, /^(?:function)/, /^(?:if)/, /^(?:import)/, /^(?:let)/, /^(?:loop)/, /^(?:package)/, /^(?:namespace)/, /^(?:return)/, /^(?:var)/, /^(?:void)/, /^(?:while)/, /^(?:null)/, /^(?:true)/, /^(?:false)/, /^(?:\.)/, /^(?:\?)/, /^(?::)/, /^(?:,)/, /^(?:\[)/, /^(?:\])/, /^(?:\()/, /^(?:\))/, /^(?:!=)/, /^(?:!)/, /^(?:\+)/, /^(?:-)/, /^(?:\*)/, /^(?:\/)/, /^(?:%)/, /^(?:==)/, /^(?:>=)/, /^(?:>)/, /^(?:<=)/, /^(?:<)/, /^(?:\{)/, /^(?:\})/, /^(?:&&)/, /^(?:\|\|)/, /^(?:[_a-zA-Z][_a-zA-Z0-9]*)/, /^(?:[rR]?['][']['](\.|[^'])*['][']['])/, /^(?:[rR]?["]["]["](\.|[^"])*["]["]["])/, /^(?:[rR]?['](\.|[^'\n\r])*['])/, /^(?:[rR]?["](\.|[^"\n\r])*["])/, /^(?:[-]?([0-9]+|0x[0-9a-fA-F]+))/, /^(?:([0-9]+|0x[0-9a-fA-F]+)[uU])/, /^(?:[-]?[0-9]+(\.[0-9]+)?([eE][+-]?[0-9]+(\.[0-9]+)?)?)/, /^(?:$)/, /^(?:.)/, /^(?:.)/],
      conditions: { "INITIAL": { "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57], "inclusive": true } }
    };
    return lexer2;
  }();
  parser.lexer = lexer;
  function Parser() {
    this.yy = {};
  }
  Parser.prototype = parser;
  parser.Parser = Parser;
  return new Parser();
}();

// src/utils/parseCEL/utils.ts
var isCELExpressionGroup = (expr) => expr.type === "ExpressionGroup";
var isCELConditionalAnd = (expr) => expr.type === "ConditionalAnd";
var isCELConditionalOr = (expr) => expr.type === "ConditionalOr";
var isCELStringLiteral = (expr) => expr.type === "StringLiteral";
var isCELLiteral = (expr) => isCELNumericLiteral(expr) || isCELStringLiteral(expr) || expr.type === "BooleanLiteral" || expr.type === "NullLiteral" || expr.type === "BytesLiteral";
var isCELNumericLiteral = (expr) => expr.type === "FloatLiteral" || expr.type === "IntegerLiteral" || expr.type === "UnsignedIntegerLiteral";
var isCELRelation = (expr) => expr.type === "Relation";
var isCELList = (expr) => expr.type === "List";
var isCELMap = (expr) => expr.type === "Map";
var isCELIdentifier = (expr) => expr.type === "Identifier";
var isCELNegation = (expr) => expr.type === "Negation";
var isCELMember = (expr) => expr.type === "Member";
var isCELIdentifierOrChain = (expr) => isCELIdentifier(expr) || isCELMember(expr) && !!expr.left && !!expr.right && !expr.list && !expr.value && isCELIdentifierOrChain(expr.left) && isCELIdentifier(expr.right);
var isCELLikeExpression = (expr) => isCELMember(expr) && !!expr.left && !!expr.right && !!expr.list && isCELIdentifierOrChain(expr.left) && isCELIdentifier(expr.right) && (expr.right.value === "contains" || expr.right.value === "startsWith" || expr.right.value === "endsWith") && expr.list.value.length === 1 && (isCELStringLiteral(expr.list.value[0]) || isCELIdentifier(expr.list.value[0]));
var getIdentifierFromChain = (expr) => {
  if (isCELIdentifier(expr)) {
    return expr.value;
  }
  return `${getIdentifierFromChain(expr.left)}.${expr.right.value}`;
};
function evalCELLiteralValue(literal) {
  if (literal.type === "StringLiteral") {
    return literal.value.replace(/^((?:'''|"""|'|")?)([\s\S]*?)\1$/gm, "$2");
  } else if (literal.type === "BooleanLiteral") {
    return literal.value;
  } else if (literal.type === "NullLiteral" || literal.type === "BytesLiteral") {
    return null;
  }
  return literal.value;
}
var normalizeCombinator = (c) => c === "||" ? "or" : "and";
var normalizeOperator = (op, flip) => {
  if (flip) {
    if (op === "<")
      return ">";
    if (op === "<=")
      return ">=";
    if (op === ">")
      return "<";
    if (op === ">=")
      return "<=";
  }
  if (op === "==")
    return "=";
  return op;
};
var generateFlatAndOrList = (expr) => {
  const combinator = normalizeCombinator(expr.type === "ConditionalAnd" ? "&&" : "||");
  const { left, right } = expr;
  if (isCELConditionalAnd(left) || isCELConditionalOr(left)) {
    return [...generateFlatAndOrList(left), combinator, right];
  }
  return [left, combinator, right];
};
var generateMixedAndOrList = (expr) => {
  const arr = generateFlatAndOrList(expr);
  const returnArray = [];
  let startIndex = 0;
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i + 1] === "and") {
      startIndex = i;
      let j = 1;
      while (arr[startIndex + j] === "and") {
        i += 2;
        j += 2;
      }
      const tempAndArray = arr.slice(startIndex, i + 1);
      returnArray.push(tempAndArray);
      i -= 2;
    } else if (arr[i + 1] === "or") {
      if (i === 0 || i === arr.length - 3) {
        if (i === 0 || arr[i - 1] === "or") {
          returnArray.push(arr[i]);
        }
        returnArray.push(arr[i + 1]);
        if (i === arr.length - 3) {
          returnArray.push(arr[i + 2]);
        }
      } else {
        if (arr[i - 1] === "and") {
          returnArray.push(arr[i + 1]);
        } else {
          returnArray.push(arr[i]);
          returnArray.push(arr[i + 1]);
        }
      }
    }
  }
  if (returnArray.length === 1 && Array.isArray(returnArray[0])) {
    return returnArray[0];
  }
  return returnArray;
};

// src/utils/parseCEL/parseCEL.ts
function parseCEL(cel, options = {}) {
  const { fields, independentCombinators, listsAsArrays } = options;
  const ic = !!independentCombinators;
  const fieldsFlat = getFieldsArray(fields);
  const fieldIsValid = (fieldName, operator, subordinateFieldName) => fieldIsValidUtil({
    fieldName,
    fieldsFlat,
    operator,
    subordinateFieldName,
    getValueSources: options?.getValueSources
  });
  const emptyQuery = {
    rules: [],
    ...ic ? {} : { combinator: "and" }
  };
  const processCELExpression = (expr, processOpts = {}) => {
    const { forwardNegation: forwardedNegation, groupOnlyIfNecessary } = processOpts;
    if (isCELNegation(expr)) {
      const negate = expr.negations % 2 === 1;
      const negatedExpr = isCELExpressionGroup(expr.value) && isCELLikeExpression(expr.value.value) ? processCELExpression(expr.value.value, { forwardNegation: negate }) : processCELExpression(expr.value, {
        groupOnlyIfNecessary: true,
        forwardNegation: negate
      });
      if (negatedExpr) {
        if (!negate || negate && !("rules" in negatedExpr) && negatedExpr.operator.startsWith("doesNot")) {
          return ic ? { rules: [negatedExpr] } : {
            combinator: "and",
            rules: [negatedExpr]
          };
        }
        return ic ? { rules: [negatedExpr], not: true } : {
          combinator: "and",
          rules: [negatedExpr],
          not: true
        };
      }
    } else if (isCELExpressionGroup(expr)) {
      const rule = processCELExpression(expr.value, {
        groupOnlyIfNecessary: true
      });
      if (rule) {
        if ("rules" in rule || groupOnlyIfNecessary && isCELExpressionGroup(expr.value)) {
          return rule;
        }
        return ic ? { rules: [rule] } : { combinator: "and", rules: [rule] };
      }
    } else if (isCELConditionalAnd(expr) || isCELConditionalOr(expr)) {
      if (ic) {
        const andOrList2 = generateFlatAndOrList(expr);
        const rules2 = andOrList2.map((v) => {
          if (typeof v === "string") {
            return v;
          }
          return processCELExpression(v);
        });
        if (!rules2.every(Boolean)) {
          return null;
        }
        return {
          rules: rules2
        };
      }
      const andOrList = generateMixedAndOrList(expr);
      const combinator = andOrList[1];
      const filteredList = andOrList.filter((v) => Array.isArray(v) || !!v && typeof v !== "string" && "type" in v).map(
        (v) => Array.isArray(v) ? v.filter((vf) => !!v && typeof vf !== "string" && "type" in vf) : v
      );
      const rules = filteredList.map((exp) => {
        if (Array.isArray(exp)) {
          return {
            combinator: "and",
            rules: exp.map((e) => processCELExpression(e)).filter((r) => !!r)
          };
        }
        return processCELExpression(exp);
      }).filter((r) => !!r);
      if (rules.length > 0) {
        return { combinator, rules };
      }
    } else if (isCELLikeExpression(expr)) {
      const field = getIdentifierFromChain(expr.left);
      const func = expr.right.value;
      const operatorPre = func === "startsWith" ? "beginsWith" : func;
      const operator = forwardedNegation ? `doesNot${operatorPre[0].toUpperCase()}${operatorPre.slice(1).replace("s", "")}` : operatorPre;
      const valueObj = expr.list.value[0];
      const value = isCELStringLiteral(valueObj) ? evalCELLiteralValue(valueObj) : valueObj.value;
      const valueSource = expr.list.value[0].type === "Identifier" ? "field" : void 0;
      if (fieldIsValid(field, operator, valueSource === "field" ? value : void 0)) {
        return valueSource ? { field, operator, value, valueSource } : { field, operator, value };
      }
    } else if (isCELRelation(expr)) {
      let field = null;
      let value = void 0;
      let valueSource = void 0;
      let flip = false;
      const { left, right } = expr;
      if (isCELIdentifierOrChain(left)) {
        field = getIdentifierFromChain(left);
        if (isCELIdentifierOrChain(right)) {
          value = getIdentifierFromChain(right);
          valueSource = "field";
        } else if (isCELLiteral(right)) {
          value = evalCELLiteralValue(right);
        }
      } else {
        if (isCELIdentifierOrChain(right) && isCELLiteral(left) && expr.operator !== "in") {
          flip = true;
          field = getIdentifierFromChain(right);
          value = evalCELLiteralValue(left);
        }
      }
      let operator = normalizeOperator(expr.operator, flip);
      if (value === null && (operator === "=" || operator === "!=")) {
        operator = operator === "=" ? "null" : "notNull";
      } else if (operator === "in" && isCELList(right)) {
        if (right.value.value.every(isCELLiteral)) {
          value = right.value.value.map(evalCELLiteralValue);
        } else {
          if (right.value.value.every(isCELIdentifierOrChain)) {
            valueSource = "field";
            value = right.value.value.map((id) => getIdentifierFromChain(id));
          }
        }
        if (value && !listsAsArrays) {
          value = value.map((v) => `${v}`).join(",");
        }
      } else if (operator === "in" && isCELMap(right)) {
        const keys = right.value.value.map((v) => v.left);
        if (keys.every((k) => isCELLiteral(k) || isCELIdentifierOrChain(k))) {
          value = keys.map(
            (k) => isCELLiteral(k) ? evalCELLiteralValue(k) : getIdentifierFromChain(k)
          );
        }
        if (value && !listsAsArrays) {
          value = value.map((v) => `${v}`).join(",");
        }
      }
      if (field && fieldIsValid(field, operator, valueSource === "field" ? value : void 0) && typeof value !== "undefined") {
        return valueSource ? { field, operator, value, valueSource } : { field, operator, value };
      }
    }
    return null;
  };
  let processedCEL;
  try {
    processedCEL = celParser.parse(cel).value;
  } catch (err) {
    return emptyQuery;
  }
  const result = processCELExpression(processedCEL);
  if (result) {
    if ("rules" in result) {
      return result;
    }
    return { rules: [result], ...ic ? {} : { combinator: "and" } };
  }
  return emptyQuery;
}

// src/utils/parseJsonLogic/utils.ts
var isJsonLogicVar = (logic) => isPojo(logic) && "var" in logic;
var isRQBJsonLogicVar = (logic) => isJsonLogicVar(logic) && typeof logic.var === "string";
var isJsonLogicEqual = (logic) => isPojo(logic) && "==" in logic;
var isJsonLogicStrictEqual = (logic) => isPojo(logic) && "===" in logic;
var isJsonLogicNotEqual = (logic) => isPojo(logic) && "!=" in logic;
var isJsonLogicStrictNotEqual = (logic) => isPojo(logic) && "!==" in logic;
var isJsonLogicNegation = (logic) => isPojo(logic) && "!" in logic;
var isJsonLogicDoubleNegation = (logic) => isPojo(logic) && "!!" in logic;
var isJsonLogicOr = (logic) => isPojo(logic) && "or" in logic;
var isJsonLogicAnd = (logic) => isPojo(logic) && "and" in logic;
var isJsonLogicGreaterThan = (logic) => isPojo(logic) && ">" in logic;
var isJsonLogicGreaterThanOrEqual = (logic) => isPojo(logic) && ">=" in logic;
var isJsonLogicLessThan = (logic) => isPojo(logic) && "<" in logic && logic["<"].length === 2;
var isJsonLogicLessThanOrEqual = (logic) => isPojo(logic) && "<=" in logic && logic["<="].length === 2;
var isJsonLogicInArray = (logic) => isPojo(logic) && "in" in logic && Array.isArray(logic.in[1]);
var isJsonLogicInString = (logic) => isPojo(logic) && "in" in logic && !Array.isArray(logic.in[1]);
var isJsonLogicBetweenExclusive = (logic) => isPojo(logic) && "<" in logic && Array.isArray(logic["<"]) && logic["<"].length === 3;
var isJsonLogicBetweenInclusive = (logic) => isPojo(logic) && "<=" in logic && Array.isArray(logic["<="]) && logic["<="].length === 3;
var isRQBJsonLogicStartsWith = (logic) => isPojo(logic) && "startsWith" in logic;
var isRQBJsonLogicEndsWith = (logic) => isPojo(logic) && "endsWith" in logic;

// src/utils/parseJsonLogic/parseJsonLogic.ts
var emptyRuleGroup = { combinator: "and", rules: [] };
function parseJsonLogic(rqbJsonLogic, options = {}) {
  const fieldsFlat = getFieldsArray(options.fields);
  const { getValueSources, listsAsArrays, jsonLogicOperations } = options;
  const fieldIsValid = (fieldName, operator, subordinateFieldName) => fieldIsValidUtil({
    fieldName,
    fieldsFlat,
    operator,
    subordinateFieldName,
    getValueSources
  });
  function processLogic(logic, outermost) {
    if (outermost && !isPojo(logic)) {
      return false;
    }
    const key = Object.keys(logic)[0];
    const keyValue = logic[key];
    if (isJsonLogicAnd(logic)) {
      return {
        combinator: "and",
        rules: logic.and.map((l) => processLogic(l)).filter(Boolean)
      };
    } else if (isJsonLogicOr(logic)) {
      return {
        combinator: "or",
        rules: logic.or.map((l) => processLogic(l)).filter(Boolean)
      };
    } else if (isJsonLogicNegation(logic)) {
      const rule2 = processLogic(logic["!"]);
      if (rule2) {
        if (!isRuleGroupType(rule2) && (rule2.operator === "between" || rule2.operator === "in" || rule2.operator === "contains" || rule2.operator === "beginsWith" || rule2.operator === "endsWith")) {
          const newRule = { ...rule2, operator: defaultOperatorNegationMap[rule2.operator] };
          if (outermost) {
            return { combinator: "and", rules: [newRule] };
          }
          return newRule;
        } else if (isJsonLogicBetweenExclusive(logic["!"]) && isRuleGroupType(rule2)) {
          return { ...rule2, not: true };
        }
        return { combinator: "and", rules: [rule2], not: true };
      }
      return false;
    } else if (isJsonLogicDoubleNegation(logic)) {
      const rule2 = processLogic(logic["!!"]);
      return rule2 || false;
    }
    let rule = false;
    let field = "";
    let operator = "=";
    let value = "";
    let valueSource = void 0;
    if (jsonLogicOperations && objectKeys(jsonLogicOperations).includes(key)) {
      rule = jsonLogicOperations[key](keyValue);
    } else if (
      // Basic boolean operations
      isJsonLogicEqual(logic) || isJsonLogicStrictEqual(logic) || isJsonLogicNotEqual(logic) || isJsonLogicStrictNotEqual(logic) || isJsonLogicGreaterThan(logic) || isJsonLogicGreaterThanOrEqual(logic) || isJsonLogicLessThan(logic) || isJsonLogicLessThanOrEqual(logic) || isJsonLogicInString(logic) || isRQBJsonLogicStartsWith(logic) || isRQBJsonLogicEndsWith(logic)
    ) {
      const [first, second] = keyValue;
      if (isRQBJsonLogicVar(first) && !isPojo(second)) {
        field = first.var;
        value = second;
      } else if (!isPojo(first) && isRQBJsonLogicVar(second)) {
        field = second.var;
        value = first;
      } else if (isRQBJsonLogicVar(first) && isRQBJsonLogicVar(second)) {
        field = first.var;
        value = second.var;
        valueSource = "field";
      } else {
        return false;
      }
      if (isJsonLogicEqual(logic) || isJsonLogicStrictEqual(logic)) {
        operator = value === null ? "null" : "=";
      } else if (isJsonLogicNotEqual(logic) || isJsonLogicStrictNotEqual(logic)) {
        operator = value === null ? "notNull" : "!=";
      } else if (isJsonLogicInString(logic)) {
        operator = "contains";
      } else if (isRQBJsonLogicStartsWith(logic)) {
        operator = "beginsWith";
      } else if (isRQBJsonLogicEndsWith(logic)) {
        operator = "endsWith";
      } else {
        operator = key;
      }
      if (fieldIsValid(field, operator, valueSource === "field" ? value : void 0)) {
        rule = { field, operator, value, valueSource };
      }
    } else if (isJsonLogicBetweenExclusive(logic) && isRQBJsonLogicVar(logic["<"][1])) {
      field = logic["<"][1].var;
      const values = [logic["<"][0], logic["<"][2]];
      if (values.every(isRQBJsonLogicVar) || values.every((el) => typeof el === "string") || values.every((el) => typeof el === "number") || values.every((el) => typeof el === "boolean")) {
        return processLogic({
          and: [{ ">": [{ var: field }, values[0]] }, { "<": [{ var: field }, values[1]] }]
        }) || /* istanbul ignore next */
        false;
      }
    } else if (isJsonLogicBetweenInclusive(logic) && isRQBJsonLogicVar(logic["<="][1])) {
      field = logic["<="][1].var;
      operator = "between";
      const values = [logic["<="][0], logic["<="][2]];
      if (logic["<="].every(isRQBJsonLogicVar)) {
        const vars = values;
        valueSource = "field";
        const fieldList = vars.map((el) => el.var).filter((sf) => fieldIsValid(field, operator, sf));
        value = listsAsArrays ? fieldList : fieldList.join(",");
      } else {
        if (values.every((el) => typeof el === "string") || values.every((el) => typeof el === "number") || values.every((el) => typeof el === "boolean")) {
          value = listsAsArrays ? values : values.map((el) => `${el}`).join(",");
        }
      }
      if (fieldIsValid(field, operator) && value.length >= 2) {
        rule = { field, operator, value, valueSource };
      }
    } else if (isJsonLogicInArray(logic) && isRQBJsonLogicVar(keyValue[0])) {
      field = keyValue[0].var;
      operator = "in";
      if (logic.in[1].every(isRQBJsonLogicVar)) {
        valueSource = "field";
        const fieldList = logic.in[1].map((el) => el.var).filter((sf) => fieldIsValid(field, operator, sf));
        value = listsAsArrays ? fieldList : fieldList.join(",");
      } else {
        if (logic.in[1].every((el) => typeof el === "string") || logic.in[1].every((el) => typeof el === "number") || logic.in[1].every((el) => typeof el === "boolean")) {
          value = listsAsArrays ? logic.in[1] : logic.in[1].map((el) => `${el}`).join(",");
        }
      }
      if (value.length > 0) {
        rule = { field, operator, value, valueSource };
      }
    }
    return !rule ? false : outermost ? { combinator: "and", rules: [rule] } : rule;
  }
  let logicRoot = rqbJsonLogic;
  if (typeof rqbJsonLogic === "string") {
    try {
      logicRoot = JSON.parse(rqbJsonLogic);
    } catch (err) {
      return emptyRuleGroup;
    }
  }
  const result = processLogic(logicRoot, true);
  const finalQuery = !result ? emptyRuleGroup : result;
  return options.independentCombinators ? convertToIC(finalQuery) : finalQuery;
}

// src/utils/parseMongoDB/utils.ts
var getRegExStr = (re) => typeof re === "string" ? re : re.source;
var isPrimitive = (v) => typeof v === "string" || typeof v === "number" || typeof v === "boolean";
var mongoDbToRqbOperatorMap = {
  $eq: "=",
  $ne: "!=",
  $gt: ">",
  $gte: ">=",
  $lt: "<",
  $lte: "<="
};

// src/utils/parseMongoDB/parseMongoDB.ts
var emptyRuleGroup2 = { combinator: "and", rules: [] };
function parseMongoDB(mongoDbRules, options = {}) {
  const listsAsArrays = !!options.listsAsArrays;
  const fieldsFlat = getFieldsArray(options.fields);
  const getValueSources = options.getValueSources;
  const fieldIsValid = (fieldName, operator, subordinateFieldName) => fieldIsValidUtil({
    fieldName,
    fieldsFlat,
    operator,
    subordinateFieldName,
    getValueSources
  });
  function processMongoDbQueryBooleanOperator(field, mdbOperator, keyValue) {
    let operator = "=";
    let value = "";
    if (mdbOperator === "$eq" || mdbOperator === "$ne" || mdbOperator === "$gt" || mdbOperator === "$gte" || mdbOperator === "$lt" || mdbOperator === "$lte") {
      if (mdbOperator === "$ne" && keyValue === null) {
        if (fieldIsValid(field, "notNull")) {
          return { field, operator: "notNull", value: null };
        }
      } else {
        operator = mongoDbToRqbOperatorMap[mdbOperator];
        if (fieldIsValid(field, operator)) {
          return { field, operator, value: keyValue };
        }
      }
    } else if (mdbOperator === "$regex" && /^[^^].*[^$]$/.test(getRegExStr(keyValue))) {
      if (fieldIsValid(field, "contains")) {
        return {
          field,
          operator: "contains",
          value: getRegExStr(keyValue)
        };
      }
    } else if (mdbOperator === "$regex" && /^\^.*[^$]/.test(getRegExStr(keyValue))) {
      if (fieldIsValid(field, "beginsWith")) {
        return {
          field,
          operator: "beginsWith",
          value: getRegExStr(keyValue).replace(/^\^/, "")
        };
      }
    } else if (mdbOperator === "$regex" && /[^^].*\$/.test(getRegExStr(keyValue))) {
      if (fieldIsValid(field, "endsWith")) {
        return {
          field,
          operator: "endsWith",
          value: getRegExStr(keyValue).replace(/\$$/, "")
        };
      }
    } else if (mdbOperator === "$in" && Array.isArray(keyValue)) {
      if (fieldIsValid(field, "in")) {
        if (listsAsArrays) {
          value = keyValue;
        } else {
          value = keyValue.map((v) => `${v}`).join(",");
        }
        return { field, operator: "in", value };
      }
    } else if (mdbOperator === "$nin" && Array.isArray(keyValue)) {
      if (fieldIsValid(field, "notIn")) {
        if (listsAsArrays) {
          value = keyValue;
        } else {
          value = keyValue.map((v) => `${v}`).join(",");
        }
        return { field, operator: "notIn", value };
      }
    }
    return false;
  }
  function processMongoDbQueryObjectKey(key, keyValue) {
    let field = "";
    if (key === "$and") {
      if (!Array.isArray(keyValue) || keyValue.length === 0 || !keyValue.every(isPojo)) {
        return false;
      }
      if (keyValue.length === 2 && keyValue.every((kv) => objectKeys(kv).length === 1)) {
        const [rule1, rule2] = keyValue;
        const [ruleKey1, ruleKey2] = keyValue.map((kv) => objectKeys(kv)[0]);
        if (ruleKey1 === ruleKey2 && isPojo(rule1[ruleKey1]) && objectKeys(rule1[ruleKey1]).length === 1 && isPojo(rule2[ruleKey2]) && objectKeys(rule2[ruleKey2]).length === 1 && ("$gte" in rule1[ruleKey1] && "$lte" in rule2[ruleKey2] && rule2[ruleKey2].$lte >= rule1[ruleKey1].$gte || "$lte" in rule1[ruleKey1] && "$gte" in rule2[ruleKey2] && rule1[ruleKey1].$lte >= rule2[ruleKey2].$gte)) {
          const [val1, val2] = [
            rule1[ruleKey1].$gte ?? rule1[ruleKey1].$lte,
            rule2[ruleKey2].$lte ?? rule2[ruleKey2].$gte
          ];
          let value = listsAsArrays ? [val1, val2] : `${val1},${val2}`;
          if (val1 > val2) {
            value = listsAsArrays ? [val2, val1] : `${val2},${val1}`;
          }
          return { field: ruleKey1, operator: "between", value };
        }
      }
      const rules = keyValue.map((l) => processMongoDbQueryObject(l)).filter(Boolean);
      return rules.length > 0 ? { combinator: "and", rules } : false;
    } else if (key === "$or") {
      if (!Array.isArray(keyValue) || keyValue.length === 0 || !keyValue.every(isPojo)) {
        return false;
      }
      if (keyValue.length === 2 && keyValue.every((kv) => objectKeys(kv).length === 1)) {
        const [rule1, rule2] = keyValue;
        const [ruleKey1, ruleKey2] = keyValue.map((kv) => objectKeys(kv)[0]);
        if (ruleKey1 === ruleKey2 && isPojo(rule1[ruleKey1]) && objectKeys(rule1[ruleKey1]).length === 1 && isPojo(rule2[ruleKey2]) && objectKeys(rule2[ruleKey2]).length === 1 && ("$gt" in rule1[ruleKey1] && "$lt" in rule2[ruleKey2] && rule1[ruleKey1].$gt >= rule2[ruleKey2].$lt || "$lt" in rule1[ruleKey1] && "$gt" in rule2[ruleKey2] && rule2[ruleKey2].$gt >= rule1[ruleKey1].$lt)) {
          const [val1, val2] = [
            rule1[ruleKey1].$gt ?? rule1[ruleKey1].$lt,
            rule2[ruleKey2].$lt ?? rule2[ruleKey2].$gt
          ];
          let value = listsAsArrays ? [val1, val2] : `${val1},${val2}`;
          if (val1 > val2) {
            value = listsAsArrays ? [val2, val1] : `${val2},${val1}`;
          }
          return { field: ruleKey1, operator: "notBetween", value };
        }
      }
      const rules = keyValue.map((l) => processMongoDbQueryObject(l)).filter(Boolean);
      return rules.length > 0 ? { combinator: "or", rules } : false;
    } else if (key === "$not" && isPojo(keyValue)) {
      const rule = processMongoDbQueryObject(keyValue);
      if (rule) {
        if (!isRuleGroupType(rule) && (rule.operator === "between" || rule.operator === "in" || rule.operator === "contains" || rule.operator === "beginsWith" || rule.operator === "endsWith")) {
          return { ...rule, operator: defaultOperatorNegationMap[rule.operator] };
        }
        return { combinator: "and", rules: [rule], not: true };
      }
      return false;
    } else if (key === "$expr") {
      const op = objectKeys(keyValue)[0];
      if (/^\$(eq|gte?|lte?|n?in)$/.test(op)) {
        if (Array.isArray(keyValue[op]) && keyValue[op].length === 2 && typeof keyValue[op][0] === "string" && /^\$/.test(keyValue[op][0])) {
          field = keyValue[op][0].replace(/^\$/, "");
          const val = keyValue[op][1];
          if (typeof val === "string" && /^\$/.test(val) || Array.isArray(val) && val.every((v) => typeof v === "string") && val.every((v) => /^\$/.test(v))) {
            const valForProcessing = Array.isArray(val) ? val.map((v) => v.replace(/^\$/, "")) : val.replace(/^\$/, "");
            const tempRule = processMongoDbQueryBooleanOperator(field, op, valForProcessing);
            if (tempRule) {
              if (typeof tempRule.value === "string" && !fieldIsValid(field, tempRule.operator, tempRule.value)) {
                return false;
              }
              return { ...tempRule, valueSource: "field" };
            }
          }
          return processMongoDbQueryBooleanOperator(field, op, keyValue[op][1]);
        }
      }
    } else if (/^[^$]/.test(key)) {
      field = key;
      if (isPrimitive(keyValue)) {
        if (fieldIsValid(field, "=")) {
          return { field, operator: "=", value: keyValue };
        }
      } else if (keyValue === null) {
        if (fieldIsValid(field, "null")) {
          return { field, operator: "null", value: keyValue };
        }
      } else if (isPojo(keyValue)) {
        let betweenRule = false;
        const operators = objectKeys(keyValue).filter((o) => /^\$(eq|ne|gte?|lte?|n?in|regex)$/.test(o)).sort();
        if (operators.length === 0) {
          return false;
        }
        if ("$gte" in keyValue && "$lte" in keyValue) {
          betweenRule = {
            field,
            operator: "between",
            value: listsAsArrays ? [keyValue.$gte, keyValue.$lte] : `${keyValue.$gte},${keyValue.$lte}`
          };
        }
        const rules = operators.filter((op) => !(betweenRule && (op === "$gte" || op === "$lte"))).map((op) => processMongoDbQueryBooleanOperator(field, op, keyValue[op])).filter(Boolean);
        if (betweenRule) {
          rules.unshift(betweenRule);
        }
        if (rules.length === 0) {
          return false;
        }
        if (rules.length === 1) {
          return rules[0];
        }
        return { combinator: "and", rules };
      }
    }
    return false;
  }
  function processMongoDbQueryObject(mongoDbQueryObject) {
    const rules = objectKeys(mongoDbQueryObject).map((k) => processMongoDbQueryObjectKey(k, mongoDbQueryObject[k])).filter(Boolean);
    return rules.length === 1 ? rules[0] : rules.length > 1 ? { combinator: "and", rules } : false;
  }
  let mongoDbPOJO = mongoDbRules;
  if (typeof mongoDbRules === "string") {
    try {
      mongoDbPOJO = JSON.parse(mongoDbRules);
    } catch (err) {
      return emptyRuleGroup2;
    }
  }
  if (!isPojo(mongoDbPOJO)) {
    return emptyRuleGroup2;
  }
  const result = processMongoDbQueryObject(mongoDbPOJO);
  const finalQuery = result ? isRuleGroupType(result) ? result : { combinator: "and", rules: [result] } : emptyRuleGroup2;
  return options.independentCombinators ? convertToIC(finalQuery) : finalQuery;
}

// src/utils/parseSQL/sqlParser.js
var sqlParser = function() {
  var o = function(k, v, o2, l) {
    for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v)
      ;
    return o2;
  }, $V0 = [1, 8], $V1 = [1, 4], $V2 = [2, 4], $V3 = [1, 11], $V4 = [1, 10], $V5 = [2, 16], $V6 = [1, 14], $V7 = [1, 15], $V8 = [1, 16], $V9 = [6, 8], $Va = [2, 148], $Vb = [1, 19], $Vc = [1, 20], $Vd = [16, 33, 35, 36, 37, 38, 39, 40, 41, 42, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], $Ve = [16, 18, 32, 33, 35, 36, 37, 38, 39, 40, 41, 42, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], $Vf = [2, 162], $Vg = [1, 29], $Vh = [6, 8, 14, 17, 146, 150, 152, 154], $Vi = [1, 42], $Vj = [1, 61], $Vk = [1, 53], $Vl = [1, 60], $Vm = [1, 62], $Vn = [1, 63], $Vo = [1, 64], $Vp = [1, 65], $Vq = [1, 66], $Vr = [1, 59], $Vs = [1, 54], $Vt = [1, 55], $Vu = [1, 56], $Vv = [1, 57], $Vw = [1, 58], $Vx = [1, 43], $Vy = [1, 44], $Vz = [1, 45], $VA = [1, 47], $VB = [1, 34], $VC = [1, 67], $VD = [16, 35, 36, 37, 38, 39, 40, 41, 42, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], $VE = [6, 8, 14, 17, 150, 152, 154], $VF = [2, 145], $VG = [1, 76], $VH = [1, 77], $VI = [6, 8, 14, 17, 43, 133, 138, 144, 146, 150, 152, 154], $VJ = [1, 80], $VK = [1, 79], $VL = [1, 81], $VM = [6, 8, 14, 17, 36, 43, 51, 52, 53, 71, 72, 74, 77, 89, 109, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], $VN = [6, 8, 14, 17, 34, 36, 43, 51, 52, 53, 71, 72, 74, 77, 89, 109, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], $VO = [1, 102], $VP = [1, 100], $VQ = [1, 101], $VR = [1, 96], $VS = [1, 97], $VT = [1, 98], $VU = [1, 99], $VV = [1, 103], $VW = [1, 104], $VX = [1, 105], $VY = [1, 106], $VZ = [1, 107], $V_ = [1, 108], $V$ = [2, 107], $V01 = [6, 8, 14, 17, 34, 36, 43, 45, 51, 52, 53, 71, 72, 74, 77, 79, 81, 89, 93, 94, 95, 96, 97, 98, 99, 100, 101, 103, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], $V11 = [6, 8, 14, 17, 34, 36, 43, 45, 51, 52, 53, 71, 72, 74, 77, 79, 81, 89, 93, 94, 95, 96, 97, 98, 99, 100, 101, 103, 105, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], $V21 = [2, 82], $V31 = [1, 110], $V41 = [1, 109], $V51 = [1, 117], $V61 = [2, 65], $V71 = [1, 119], $V81 = [16, 35, 37, 38, 39, 40, 41, 42, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], $V91 = [16, 29, 35, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 121, 195], $Va1 = [1, 162], $Vb1 = [1, 164], $Vc1 = [17, 43], $Vd1 = [6, 8, 14, 16, 17, 34, 35, 36, 43, 45, 50, 51, 52, 53, 56, 57, 59, 60, 62, 71, 72, 74, 76, 77, 79, 81, 82, 83, 84, 86, 87, 88, 89, 90, 91, 93, 94, 95, 96, 97, 98, 99, 100, 101, 103, 105, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182, 192, 193, 194, 195], $Ve1 = [2, 60], $Vf1 = [1, 174], $Vg1 = [1, 172], $Vh1 = [6, 8, 138, 146], $Vi1 = [16, 35, 38, 39, 40, 41, 42, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], $Vj1 = [6, 8, 14, 17, 138, 144, 146, 150, 152, 154], $Vk1 = [6, 8, 14, 17, 36, 43, 51, 52, 53, 71, 72, 74, 77, 89, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], $Vl1 = [6, 8, 14, 17, 34, 36, 43, 51, 52, 53, 71, 72, 74, 77, 89, 93, 94, 95, 96, 101, 103, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], $Vm1 = [6, 8, 14, 17, 34, 36, 43, 51, 52, 53, 71, 72, 74, 77, 79, 81, 89, 93, 94, 95, 96, 101, 103, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], $Vn1 = [16, 35, 39, 40, 41, 42, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], $Vo1 = [16, 35, 40, 41, 42, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], $Vp1 = [6, 8, 14, 17, 43, 157], $Vq1 = [16, 35, 42, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], $Vr1 = [71, 74, 77], $Vs1 = [16, 35, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], $Vt1 = [1, 239], $Vu1 = [6, 8, 14, 17], $Vv1 = [1, 257], $Vw1 = [1, 253], $Vx1 = [2, 199], $Vy1 = [1, 261], $Vz1 = [1, 262], $VA1 = [6, 8, 14, 17, 43, 129, 135, 138, 144, 146, 150, 152, 154, 182], $VB1 = [1, 264], $VC1 = [1, 267], $VD1 = [1, 268], $VE1 = [1, 269], $VF1 = [1, 270], $VG1 = [2, 176], $VH1 = [1, 266], $VI1 = [6, 8, 14, 17, 36, 43, 89, 129, 135, 138, 144, 146, 150, 152, 154, 164, 165, 167, 168, 173, 177, 179, 180, 182], $VJ1 = [6, 8, 14, 17, 135, 138, 144, 146, 150, 152, 154], $VK1 = [1, 282], $VL1 = [2, 181], $VM1 = [170, 173], $VN1 = [6, 8, 14, 17, 36, 43, 89, 129, 135, 138, 144, 146, 150, 152, 154, 164, 165, 167, 168, 173, 177, 179, 180, 182, 192, 193, 194], $VO1 = [2, 201], $VP1 = [1, 287], $VQ1 = [1, 299], $VR1 = [1, 307], $VS1 = [1, 308], $VT1 = [1, 309], $VU1 = [6, 8, 14, 17, 138, 146, 150, 152, 154], $VV1 = [1, 319], $VW1 = [1, 325], $VX1 = [1, 326], $VY1 = [2, 206], $VZ1 = [1, 337], $V_1 = [16, 152], $V$1 = [6, 8, 14, 17, 152, 154], $V02 = [1, 353];
  var parser = {
    trace: function trace() {
    },
    yy: {},
    symbols_: { "error": 2, "main": 3, "selectClause": 4, "semicolonOpt": 5, "EOF": 6, "unionClause": 7, ";": 8, "unionClauseNotParenthesized": 9, "unionClauseParenthesized": 10, "order_by_opt": 11, "limit_opt": 12, "selectClauseParenthesized": 13, "UNION": 14, "distinctOpt": 15, "(": 16, ")": 17, "SELECT": 18, "highPriorityOpt": 19, "maxStateMentTimeOpt": 20, "straightJoinOpt": 21, "sqlSmallResultOpt": 22, "sqlBigResultOpt": 23, "sqlBufferResultOpt": 24, "sqlCacheOpt": 25, "sqlCalcFoundRowsOpt": 26, "selectExprList": 27, "selectDataSetOpt": 28, "ALL": 29, "DISTINCT": 30, "DISTINCTROW": 31, "HIGH_PRIORITY": 32, "MAX_STATEMENT_TIME": 33, "=": 34, "NUMERIC": 35, "STRAIGHT_JOIN": 36, "SQL_SMALL_RESULT": 37, "SQL_BIG_RESULT": 38, "SQL_BUFFER_RESULT": 39, "SQL_CACHE": 40, "SQL_NO_CACHE": 41, "SQL_CALC_FOUND_ROWS": 42, ",": 43, "selectExpr": 44, "*": 45, "selectExprStar": 46, "expr": 47, "selectExprAliasOpt": 48, "identifier": 49, "DOT": 50, "AS": 51, "IDENTIFIER": 52, "STRING": 53, "string": 54, "number": 55, "EXPONENT_NUMERIC": 56, "HEX_NUMERIC": 57, "boolean": 58, "TRUE": 59, "FALSE": 60, "null": 61, "NULL": 62, "literal": 63, "place_holder": 64, "function_call": 65, "function_call_param_list": 66, "function_call_param": 67, "identifier_list": 68, "case_expr_opt": 69, "when_then_list": 70, "WHEN": 71, "THEN": 72, "case_when_else": 73, "ELSE": 74, "case_when": 75, "CASE": 76, "END": 77, "simple_expr_prefix": 78, "+": 79, "simple_expr": 80, "-": 81, "~": 82, "!": 83, "BINARY": 84, "expr_list": 85, "ROW": 86, "EXISTS": 87, "{": 88, "}": 89, "||": 90, "WILDCARD": 91, "bit_expr": 92, "|": 93, "&": 94, "<<": 95, ">>": 96, "/": 97, "DIV": 98, "MOD": 99, "%": 100, "^": 101, "not_opt": 102, "NOT": 103, "escape_opt": 104, "ESCAPE": 105, "predicate": 106, "IN": 107, "BETWEEN": 108, "AND": 109, "SOUNDS": 110, "LIKE": 111, "REGEXP": 112, "comparison_operator": 113, ">=": 114, ">": 115, "<=": 116, "<": 117, "<>": 118, "!=": 119, "sub_query_data_set_opt": 120, "ANY": 121, "boolean_primary": 122, "IS": 123, "boolean_extra": 124, "UNKNOWN": 125, "OR": 126, "XOR": 127, "where_opt": 128, "WHERE": 129, "group_by_opt": 130, "group_by": 131, "roll_up_opt": 132, "WITH": 133, "ROLLUP": 134, "GROUP_BY": 135, "group_by_order_by_item_list": 136, "order_by": 137, "ORDER_BY": 138, "group_by_order_by_item": 139, "sort_opt": 140, "ASC": 141, "DESC": 142, "having_opt": 143, "HAVING": 144, "limit": 145, "LIMIT": 146, "OFFSET": 147, "procedure_opt": 148, "procedure": 149, "PROCEDURE": 150, "for_update_lock_in_share_mode_opt": 151, "FOR": 152, "UPDATE": 153, "LOCK": 154, "SHARE": 155, "MODE": 156, "FROM": 157, "table_references": 158, "partitionOpt": 159, "escaped_table_reference": 160, "table_reference": 161, "OJ": 162, "join_inner_cross": 163, "INNER": 164, "CROSS": 165, "left_right": 166, "LEFT": 167, "RIGHT": 168, "out_opt": 169, "OUTER": 170, "left_right_out_opt": 171, "join_table": 172, "JOIN": 173, "table_factor": 174, "join_condition": 175, "on_join_condition": 176, "NATURAL": 177, "join_condition_opt": 178, "ON": 179, "USING": 180, "partition_names": 181, "PARTITION": 182, "aliasOpt": 183, "index_or_key": 184, "INDEX": 185, "KEY": 186, "for_opt": 187, "identifier_list_opt": 188, "index_hint_list_opt": 189, "index_hint_list": 190, "index_hint": 191, "USE": 192, "IGNORE": 193, "FORCE": 194, "PLACE_HOLDER": 195, "$accept": 0, "$end": 1 },
    terminals_: { 2: "error", 6: "EOF", 8: ";", 14: "UNION", 16: "(", 17: ")", 18: "SELECT", 29: "ALL", 30: "DISTINCT", 31: "DISTINCTROW", 32: "HIGH_PRIORITY", 33: "MAX_STATEMENT_TIME", 34: "=", 35: "NUMERIC", 36: "STRAIGHT_JOIN", 37: "SQL_SMALL_RESULT", 38: "SQL_BIG_RESULT", 39: "SQL_BUFFER_RESULT", 40: "SQL_CACHE", 41: "SQL_NO_CACHE", 42: "SQL_CALC_FOUND_ROWS", 43: ",", 45: "*", 50: "DOT", 51: "AS", 52: "IDENTIFIER", 53: "STRING", 56: "EXPONENT_NUMERIC", 57: "HEX_NUMERIC", 59: "TRUE", 60: "FALSE", 62: "NULL", 71: "WHEN", 72: "THEN", 74: "ELSE", 76: "CASE", 77: "END", 79: "+", 81: "-", 82: "~", 83: "!", 84: "BINARY", 86: "ROW", 87: "EXISTS", 88: "{", 89: "}", 90: "||", 91: "WILDCARD", 93: "|", 94: "&", 95: "<<", 96: ">>", 97: "/", 98: "DIV", 99: "MOD", 100: "%", 101: "^", 103: "NOT", 105: "ESCAPE", 107: "IN", 108: "BETWEEN", 109: "AND", 110: "SOUNDS", 111: "LIKE", 112: "REGEXP", 114: ">=", 115: ">", 116: "<=", 117: "<", 118: "<>", 119: "!=", 121: "ANY", 123: "IS", 125: "UNKNOWN", 126: "OR", 127: "XOR", 129: "WHERE", 133: "WITH", 134: "ROLLUP", 135: "GROUP_BY", 138: "ORDER_BY", 141: "ASC", 142: "DESC", 144: "HAVING", 146: "LIMIT", 147: "OFFSET", 150: "PROCEDURE", 152: "FOR", 153: "UPDATE", 154: "LOCK", 155: "SHARE", 156: "MODE", 157: "FROM", 162: "OJ", 164: "INNER", 165: "CROSS", 167: "LEFT", 168: "RIGHT", 170: "OUTER", 173: "JOIN", 177: "NATURAL", 179: "ON", 180: "USING", 182: "PARTITION", 185: "INDEX", 186: "KEY", 192: "USE", 193: "IGNORE", 194: "FORCE", 195: "PLACE_HOLDER" },
    productions_: [0, [3, 3], [3, 3], [5, 1], [5, 0], [7, 1], [7, 3], [10, 4], [10, 4], [13, 3], [9, 4], [9, 4], [4, 12], [15, 1], [15, 1], [15, 1], [15, 0], [19, 1], [19, 0], [20, 3], [20, 0], [21, 1], [21, 0], [22, 1], [22, 0], [23, 1], [23, 0], [24, 1], [24, 0], [25, 0], [25, 1], [25, 1], [26, 1], [26, 0], [27, 3], [27, 1], [44, 1], [44, 1], [44, 2], [46, 3], [48, 0], [48, 2], [48, 1], [48, 2], [48, 1], [54, 1], [55, 1], [55, 1], [55, 1], [58, 1], [58, 1], [61, 1], [63, 1], [63, 1], [63, 1], [63, 1], [63, 1], [65, 4], [66, 3], [66, 1], [67, 0], [67, 1], [67, 1], [67, 2], [67, 1], [49, 1], [49, 3], [68, 1], [68, 3], [69, 0], [69, 1], [70, 4], [70, 5], [73, 0], [73, 2], [75, 5], [78, 2], [78, 2], [78, 2], [78, 2], [78, 2], [80, 1], [80, 1], [80, 1], [80, 1], [80, 3], [80, 4], [80, 3], [80, 4], [80, 4], [80, 1], [80, 3], [80, 3], [80, 5], [92, 1], [92, 3], [92, 3], [92, 3], [92, 3], [92, 3], [92, 3], [92, 3], [92, 3], [92, 3], [92, 3], [92, 3], [92, 3], [102, 0], [102, 1], [104, 0], [104, 2], [106, 1], [106, 6], [106, 6], [106, 6], [106, 4], [106, 5], [106, 4], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [120, 1], [120, 1], [122, 1], [122, 4], [122, 3], [122, 6], [124, 1], [124, 1], [47, 1], [47, 4], [47, 2], [47, 3], [47, 3], [47, 3], [85, 1], [85, 3], [128, 0], [128, 2], [130, 0], [130, 1], [132, 0], [132, 2], [131, 3], [11, 0], [11, 1], [137, 3], [136, 1], [136, 3], [139, 2], [140, 0], [140, 1], [140, 1], [143, 0], [143, 2], [145, 2], [145, 4], [145, 4], [12, 0], [12, 1], [148, 0], [148, 1], [149, 2], [151, 0], [151, 2], [151, 4], [28, 0], [28, 10], [158, 1], [158, 3], [160, 1], [160, 4], [163, 0], [163, 1], [163, 1], [166, 1], [166, 1], [169, 0], [169, 1], [171, 0], [171, 2], [172, 4], [172, 5], [172, 4], [172, 6], [172, 5], [178, 0], [178, 1], [176, 2], [175, 1], [175, 4], [161, 1], [161, 1], [181, 1], [181, 3], [159, 0], [159, 4], [183, 0], [183, 2], [183, 1], [184, 1], [184, 1], [187, 0], [187, 2], [187, 2], [187, 2], [188, 0], [188, 1], [189, 0], [189, 1], [190, 1], [190, 3], [191, 6], [191, 6], [191, 6], [174, 4], [174, 4], [174, 3], [64, 1]],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      var $0 = $$.length - 1;
      switch (yystate) {
        case 1:
        case 2:
          return { nodeType: "Main", value: $$[$0 - 2], hasSemicolon: $$[$0 - 1] };
          break;
        case 3:
        case 146:
          this.$ = true;
          break;
        case 4:
          this.$ = false;
          break;
        case 5:
        case 13:
        case 14:
        case 15:
        case 17:
        case 19:
        case 21:
        case 23:
        case 25:
        case 27:
        case 30:
        case 31:
        case 32:
        case 37:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 61:
        case 62:
        case 64:
        case 70:
        case 74:
        case 81:
        case 82:
        case 83:
        case 84:
        case 90:
        case 94:
        case 108:
        case 110:
        case 111:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
        case 123:
        case 124:
        case 125:
        case 126:
        case 127:
        case 131:
        case 133:
        case 142:
        case 144:
        case 149:
        case 155:
        case 156:
        case 158:
        case 163:
        case 165:
        case 166:
        case 177:
        case 178:
        case 179:
        case 180:
        case 182:
        case 191:
        case 193:
        case 195:
        case 196:
        case 204:
        case 205:
        case 211:
        case 213:
          this.$ = $$[$0];
          break;
        case 6:
          this.$ = $$[$0 - 2], this.$.orderBy = $$[$0 - 1], this.$.limit = $$[$0];
          ;
          break;
        case 7:
        case 8:
          this.$ = { type: "Union", left: $$[$0 - 3], distinctOpt: $$[$0 - 1], right: $$[$0] };
          ;
          break;
        case 9:
          this.$ = { type: "SelectParenthesized", value: $$[$0 - 1] };
          ;
          break;
        case 10:
        case 11:
          this.$ = { type: "Union", left: $$[$0 - 3], distinctOpt: $$[$0 - 1], right: $$[$0] };
          break;
        case 12:
          this.$ = {
            type: "Select",
            distinctOpt: $$[$0 - 10],
            highPriorityOpt: $$[$0 - 9],
            maxStateMentTimeOpt: $$[$0 - 8],
            straightJoinOpt: $$[$0 - 7],
            sqlSmallResultOpt: $$[$0 - 6],
            sqlBigResultOpt: $$[$0 - 5],
            sqlBufferResultOpt: $$[$0 - 4],
            sqlCacheOpt: $$[$0 - 3],
            sqlCalcFoundRowsOpt: $$[$0 - 2],
            selectItems: $$[$0 - 1],
            from: $$[$0].from,
            partition: $$[$0].partition,
            where: $$[$0].where,
            groupBy: $$[$0].groupBy,
            having: $$[$0].having,
            orderBy: $$[$0].orderBy,
            limit: $$[$0].limit,
            procedure: $$[$0].procedure,
            updateLockMode: $$[$0].updateLockMode
          };
          break;
        case 16:
        case 18:
        case 20:
        case 22:
        case 24:
        case 26:
        case 28:
        case 29:
        case 33:
        case 60:
        case 69:
        case 73:
        case 107:
        case 109:
        case 141:
        case 143:
        case 145:
        case 148:
        case 154:
        case 157:
        case 162:
        case 164:
        case 167:
        case 176:
        case 181:
        case 190:
        case 199:
        case 206:
        case 210:
        case 212:
          this.$ = null;
          break;
        case 34:
          $$[$0 - 2].value.push($$[$0]);
          break;
        case 35:
          this.$ = { type: "SelectExpr", value: [$$[$0]] };
          break;
        case 36:
        case 65:
          this.$ = { type: "Identifier", value: $$[$0] };
          break;
        case 38:
          this.$ = $$[$0 - 1];
          this.$.alias = $$[$0].alias;
          this.$.hasAs = $$[$0].hasAs;
          ;
          break;
        case 39:
        case 66:
          this.$ = $$[$0 - 2];
          $$[$0 - 2].value += "." + $$[$0];
          break;
        case 40:
        case 201:
          this.$ = { alias: null, hasAs: null };
          break;
        case 41:
        case 43:
          this.$ = { alias: $$[$0], hasAs: true };
          break;
        case 42:
          this.$ = { alias: $$[$0], hasAs: false };
          break;
        case 44:
          this.$ = { alias: $$[$01], hasAs: false };
          break;
        case 45:
          this.$ = { type: "String", value: $$[$0] };
          break;
        case 46:
        case 47:
        case 48:
          this.$ = { type: "Number", value: $$[$0] };
          break;
        case 49:
          this.$ = { type: "Boolean", value: "TRUE" };
          break;
        case 50:
          this.$ = { type: "Boolean", value: "FALSE" };
          break;
        case 51:
          this.$ = { type: "Null", value: "null" };
          break;
        case 57:
          this.$ = { type: "FunctionCall", name: $$[$0 - 3], params: $$[$0 - 1] };
          break;
        case 58:
          $$[$0 - 2].push($$[$0]);
          this.$ = $$[$0 - 2];
          break;
        case 59:
          this.$ = [$$[$0]];
          ;
          break;
        case 63:
          this.$ = { type: "FunctionCallParam", distinctOpt: $$[$0 - 1], value: $$[$0] };
          break;
        case 67:
          this.$ = { type: "IdentifierList", value: [$$[$0]] };
          break;
        case 68:
        case 173:
          this.$ = $$[$0 - 2];
          $$[$0 - 2].value.push($$[$0]);
          ;
          break;
        case 71:
          this.$ = { type: "WhenThenList", value: [{ when: $$[$0 - 2], then: $$[$0] }] };
          ;
          break;
        case 72:
          this.$ = $$[$0 - 4];
          this.$.value.push({ when: $$[$0 - 2], then: $$[$0] });
          ;
          break;
        case 75:
          this.$ = { type: "CaseWhen", caseExprOpt: $$[$0 - 3], whenThenList: $$[$0 - 2], else: $$[$0 - 1] };
          break;
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
          this.$ = { type: "Prefix", prefix: $$[$0 - 1], value: $$[$0] };
          break;
        case 85:
          this.$ = { type: "SimpleExprParentheses", value: $$[$0 - 1] };
          break;
        case 86:
          this.$ = { type: "SimpleExprParentheses", value: $$[$0 - 2], hasRow: true };
          break;
        case 87:
          this.$ = { type: "SubQuery", value: $$[$0 - 1] };
          break;
        case 88:
          this.$ = { type: "SubQuery", value: $$[$0 - 1], hasExists: true };
          break;
        case 89:
          this.$ = { type: "IdentifierExpr", identifier: $$[$0 - 2], value: $$[$0 - 1] };
          break;
        case 91:
          this.$ = { type: "StartsWithExpr", value: $$[$0 - 2] };
          break;
        case 92:
          this.$ = { type: "EndsWithExpr", value: $$[$0] };
          break;
        case 93:
          this.$ = { type: "ContainsExpr", value: $$[$0 - 2] };
          break;
        case 95:
          this.$ = { type: "BitExpression", operator: "|", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 96:
          this.$ = { type: "BitExpression", operator: "&", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 97:
          this.$ = { type: "BitExpression", operator: "<<", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 98:
          this.$ = { type: "BitExpression", operator: ">>", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 99:
          this.$ = { type: "BitExpression", operator: "+", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 100:
          this.$ = { type: "BitExpression", operator: "-", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 101:
          this.$ = { type: "BitExpression", operator: "*", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 102:
          this.$ = { type: "BitExpression", operator: "/", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 103:
          this.$ = { type: "BitExpression", operator: "DIV", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 104:
          this.$ = { type: "BitExpression", operator: "MOD", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 105:
          this.$ = { type: "BitExpression", operator: "%", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 106:
          this.$ = { type: "BitExpression", operator: "^", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 112:
          this.$ = { type: "InSubQueryPredicate", hasNot: $$[$0 - 4], left: $$[$0 - 5], right: $$[$0 - 1] };
          break;
        case 113:
          this.$ = { type: "InExpressionListPredicate", hasNot: $$[$0 - 4], left: $$[$0 - 5], right: $$[$0 - 1] };
          break;
        case 114:
          this.$ = { type: "BetweenPredicate", hasNot: $$[$0 - 4], left: $$[$0 - 5], right: { left: $$[$0 - 2], right: $$[$0] } };
          break;
        case 115:
          this.$ = { type: "SoundsLikePredicate", hasNot: false, left: $$[$0 - 3], right: $$[$0] };
          break;
        case 116:
          this.$ = { type: "LikePredicate", hasNot: $$[$0 - 3], left: $$[$0 - 4], right: $$[$0 - 1], escape: $$[$0] };
          break;
        case 117:
          this.$ = { type: "RegexpPredicate", hasNot: $$[$0 - 2], left: $$[$0 - 3], right: $$[$0] };
          break;
        case 128:
          this.$ = { type: "IsNullBooleanPrimary", hasNot: $$[$0 - 1], value: $$[$0 - 3] };
          break;
        case 129:
          this.$ = { type: "ComparisonBooleanPrimary", left: $$[$0 - 2], operator: $$[$0 - 1], right: $$[$0] };
          break;
        case 130:
          this.$ = { type: "ComparisonSubQueryBooleanPrimary", operator: $$[$0 - 4], subQueryOpt: $$[$0 - 3], left: $$[$0 - 5], right: $$[$0 - 1] };
          break;
        case 132:
          this.$ = { type: "BooleanExtra", value: $$[$0] };
          break;
        case 134:
          this.$ = { type: "IsExpression", hasNot: $$[$0 - 1], left: $$[$0 - 3], right: $$[$0] };
          break;
        case 135:
          this.$ = { type: "NotExpression", value: $$[$0] };
          break;
        case 136:
          this.$ = { type: "OrExpression", operator: $$[$0 - 1], left: $$[$0 - 2], right: $$[$0] };
          break;
        case 137:
          this.$ = { type: "AndExpression", operator: $$[$0 - 1], left: $$[$0 - 2], right: $$[$0] };
          break;
        case 138:
          this.$ = { type: "XorExpression", operator: $$[$0 - 1], left: $$[$0 - 2], right: $$[$0] };
          break;
        case 139:
          this.$ = { type: "ExpressionList", value: [$$[$0]] };
          break;
        case 140:
        case 215:
          this.$ = $$[$0 - 2];
          this.$.value.push($$[$0]);
          ;
          break;
        case 147:
          this.$ = { type: "GroupBy", value: $$[$0 - 1], rollUp: $$[$0] };
          break;
        case 150:
          this.$ = { type: "OrderBy", value: $$[$0 - 1], rollUp: $$[$0] };
          break;
        case 151:
        case 197:
          this.$ = [$$[$0]];
          break;
        case 152:
          this.$ = $$[$0 - 2];
          $$[$0 - 2].push($$[$0]);
          ;
          break;
        case 153:
          this.$ = { type: "GroupByOrderByItem", value: $$[$0 - 1], sortOpt: $$[$0] };
          break;
        case 159:
          this.$ = { type: "Limit", value: [$$[$0]] };
          break;
        case 160:
          this.$ = { type: "Limit", value: [$$[$0 - 2], $$[$0]] };
          break;
        case 161:
          this.$ = { type: "Limit", value: [$$[$0], $$[$0 - 2]], offsetMode: true };
          break;
        case 168:
          this.$ = $$[$0 - 1] + " " + $$[$0];
          break;
        case 169:
          this.$ = $$[$0 - 3] + " " + $$[$0 - 2] + " " + $$[$0 - 1] + " " + $$[$0];
          break;
        case 170:
          this.$ = {};
          break;
        case 171:
          this.$ = { from: $$[$0 - 8], partition: $$[$0 - 7], where: $$[$0 - 6], groupBy: $$[$0 - 5], having: $$[$0 - 4], orderBy: $$[$0 - 3], limit: $$[$0 - 2], procedure: $$[$0 - 1], updateLockMode: $$[$0] };
          break;
        case 172:
          this.$ = { type: "TableReferences", value: [$$[$0]] };
          break;
        case 174:
          this.$ = { type: "TableReference", value: $$[$0] };
          break;
        case 175:
          this.$ = { type: "TableReference", hasOj: true, value: $$[$0 - 1] };
          break;
        case 183:
          this.$ = { leftRight: null, outOpt: null };
          break;
        case 184:
          this.$ = { leftRight: $$[$0 - 1], outOpt: $$[$0] };
          break;
        case 185:
          this.$ = { type: "InnerCrossJoinTable", innerCrossOpt: $$[$0 - 2], left: $$[$0 - 3], right: $$[$0], condition: null };
          break;
        case 186:
          this.$ = { type: "InnerCrossJoinTable", innerCrossOpt: $$[$0 - 3], left: $$[$0 - 4], right: $$[$0 - 1], condition: $$[$0] };
          break;
        case 187:
          this.$ = { type: "StraightJoinTable", left: $$[$0 - 3], right: $$[$0 - 1], condition: $$[$0] };
          break;
        case 188:
          this.$ = { type: "LeftRightJoinTable", leftRight: $$[$0 - 4], outOpt: $$[$0 - 3], left: $$[$0 - 5], right: $$[$0 - 1], condition: $$[$0] };
          break;
        case 189:
          this.$ = { type: "NaturalJoinTable", leftRight: $$[$0 - 2].leftRight, outOpt: $$[$0 - 2].outOpt, left: $$[$0 - 4], right: $$[$0] };
          break;
        case 192:
          this.$ = { type: "OnJoinCondition", value: $$[$0] };
          break;
        case 194:
          this.$ = { type: "UsingJoinCondition", value: $$[$0 - 1] };
          break;
        case 198:
          this.$ = $$[$0 - 2];
          $$[$0 - 2].push($$[$0]);
          break;
        case 200:
          this.$ = { type: "Partitions", value: $$[$0 - 1] };
          break;
        case 202:
          this.$ = { hasAs: true, alias: $$[$0] };
          break;
        case 203:
          this.$ = { hasAs: false, alias: $$[$0] };
          break;
        case 207:
        case 208:
        case 209:
          this.$ = { type: "ForOptIndexHint", value: $$[$0] };
          break;
        case 214:
          this.$ = { type: "IndexHintList", value: [$$[$0]] };
          break;
        case 216:
          this.$ = { type: "UseIndexHint", value: $$[$0 - 1], forOpt: $$[$0 - 3], indexOrKey: $$[$0 - 4] };
          break;
        case 217:
          this.$ = { type: "IgnoreIndexHint", value: $$[$0 - 1], forOpt: $$[$0 - 3], indexOrKey: $$[$0 - 4] };
          break;
        case 218:
          this.$ = { type: "ForceIndexHint", value: $$[$0 - 1], forOpt: $$[$0 - 3], indexOrKey: $$[$0 - 4] };
          break;
        case 219:
          this.$ = { type: "TableFactor", value: $$[$0 - 3], partition: $$[$0 - 2], alias: $$[$0 - 1].alias, hasAs: $$[$0 - 1].hasAs, indexHintOpt: $$[$0] };
          break;
        case 220:
          this.$ = { type: "TableFactor", value: { type: "SubQuery", value: $$[$0 - 2] }, alias: $$[$0].alias, hasAs: $$[$0].hasAs };
          break;
        case 221:
          this.$ = $$[$0 - 1];
          this.$.hasParentheses = true;
          break;
        case 222:
          this.$ = { type: "PlaceHolder", value: $$[$0], param: $$[$0].slice(2, -1) };
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 7: 3, 9: 5, 10: 6, 13: 7, 16: $V0, 18: $V1 }, { 1: [3] }, { 5: 9, 6: $V2, 8: $V3, 14: $V4 }, { 5: 12, 6: $V2, 8: $V3 }, o([16, 32, 33, 35, 36, 37, 38, 39, 40, 41, 42, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], $V5, { 15: 13, 29: $V6, 30: $V7, 31: $V8 }), o($V9, [2, 5]), o([6, 8, 146], $Va, { 11: 17, 137: 18, 138: $Vb }), { 14: $Vc }, { 4: 21, 18: $V1 }, { 6: [1, 22] }, { 15: 23, 18: $V5, 29: $V6, 30: $V7, 31: $V8 }, { 6: [2, 3] }, { 6: [1, 24] }, o($Vd, [2, 18], { 19: 25, 32: [1, 26] }), o($Ve, [2, 13]), o($Ve, [2, 14]), o($Ve, [2, 15]), o($V9, $Vf, { 12: 27, 145: 28, 146: $Vg }), o($Vh, [2, 149]), { 16: $Vi, 35: $Vj, 47: 32, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 136: 30, 139: 31, 195: $VC }, { 15: 68, 16: $V5, 29: $V6, 30: $V7, 31: $V8 }, { 17: [1, 69] }, { 1: [2, 1] }, { 4: 70, 9: 71, 18: $V1 }, { 1: [2, 2] }, o($VD, [2, 20], { 20: 72, 33: [1, 73] }), o($Vd, [2, 17]), o($V9, [2, 6]), o($VE, [2, 163]), { 35: [1, 74] }, o($Vh, $VF, { 132: 75, 43: $VG, 133: $VH }), o($VI, [2, 151]), o($VI, [2, 154], { 140: 78, 109: $VJ, 126: $VK, 127: $VL, 141: [1, 82], 142: [1, 83] }), o($VM, [2, 133], { 113: 85, 34: [1, 86], 114: [1, 87], 115: [1, 88], 116: [1, 89], 117: [1, 90], 118: [1, 91], 119: [1, 92], 123: [1, 84] }), { 16: $Vi, 35: $Vj, 47: 93, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, o($VN, [2, 127]), o($VN, [2, 111], { 102: 94, 45: $VO, 79: $VP, 81: $VQ, 93: $VR, 94: $VS, 95: $VT, 96: $VU, 97: $VV, 98: $VW, 99: $VX, 100: $VY, 101: $VZ, 103: $V_, 107: $V$, 108: $V$, 111: $V$, 112: $V$, 110: [1, 95] }), o($V01, [2, 94]), o($V11, [2, 81]), o($V11, $V21, { 50: $V31, 90: $V41 }), o($V11, [2, 83]), o($V11, [2, 84]), { 4: 112, 16: $Vi, 18: $V1, 35: $Vj, 47: 113, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 85: 111, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, { 16: [1, 114] }, { 16: [1, 115] }, { 49: 116, 52: $V51 }, o($V11, [2, 90]), { 90: [1, 118] }, o($V11, [2, 52]), o($V11, [2, 53]), o($V11, [2, 54]), o($V11, [2, 55]), o($V11, [2, 56]), o([6, 8, 14, 17, 34, 36, 43, 45, 50, 51, 52, 53, 71, 72, 74, 77, 79, 81, 89, 90, 93, 94, 95, 96, 97, 98, 99, 100, 101, 103, 105, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], $V61, { 16: $V71 }), { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 120, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 121, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 122, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 123, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 124, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 195: $VC }, { 16: $Vi, 35: $Vj, 47: 126, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 69: 125, 71: [2, 69], 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, o($V11, [2, 45]), o($V11, [2, 46]), o($V11, [2, 47]), o($V11, [2, 48]), o($V11, [2, 49]), o($V11, [2, 50]), o($V11, [2, 51]), o($V11, [2, 222]), { 10: 128, 13: 127, 16: $V0 }, o([6, 8, 14, 138, 146], [2, 9]), o($V9, [2, 10], { 14: $V4 }), o($V9, [2, 11]), o($V81, [2, 22], { 21: 129, 36: [1, 130] }), { 34: [1, 131] }, o($VE, [2, 159], { 43: [1, 132], 147: [1, 133] }), o($Vh, [2, 150]), { 16: $Vi, 35: $Vj, 47: 32, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 139: 134, 195: $VC }, { 134: [1, 135] }, o($VI, [2, 153]), { 16: $Vi, 35: $Vj, 47: 136, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, { 16: $Vi, 35: $Vj, 47: 137, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, { 16: $Vi, 35: $Vj, 47: 138, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, o($VI, [2, 155]), o($VI, [2, 156]), o([59, 60, 62, 125], $V$, { 102: 139, 103: $V_ }), { 16: $Vi, 29: [1, 142], 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 106: 140, 120: 141, 121: [1, 143], 195: $VC }, o($V91, [2, 118]), o($V91, [2, 119]), o($V91, [2, 120]), o($V91, [2, 121]), o($V91, [2, 122]), o($V91, [2, 123]), o($V91, [2, 124]), o($VM, [2, 135]), { 107: [1, 144], 108: [1, 145], 111: [1, 146], 112: [1, 147] }, { 111: [1, 148] }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 149, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 150, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 151, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 152, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 153, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 154, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 155, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 156, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 157, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 158, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 159, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 160, 195: $VC }, o([59, 60, 62, 107, 108, 111, 112, 125], [2, 108]), { 91: [1, 161] }, { 52: $Va1 }, { 17: [1, 163], 43: $Vb1 }, { 17: [1, 165] }, o($Vc1, [2, 139], { 109: $VJ, 126: $VK, 127: $VL }), { 16: $Vi, 35: $Vj, 47: 113, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 85: 166, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, { 4: 167, 18: $V1 }, { 16: $Vi, 35: $Vj, 47: 168, 49: 39, 50: $V31, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, o($Vd1, $V61), { 49: 169, 52: $V51 }, o($Vc1, $Ve1, { 122: 33, 106: 35, 92: 36, 80: 37, 63: 38, 65: 40, 78: 41, 75: 46, 54: 48, 55: 49, 58: 50, 61: 51, 64: 52, 66: 170, 67: 171, 46: 173, 47: 175, 49: 176, 16: $Vi, 30: $Vf1, 35: $Vj, 45: $Vg1, 52: $Vk, 53: $Vl, 56: $Vm, 57: $Vn, 59: $Vo, 60: $Vp, 62: $Vq, 76: $Vr, 79: $Vs, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 103: $VB, 195: $VC }), o($V11, [2, 76]), o($V11, [2, 77]), o($V11, [2, 78]), o($V11, [2, 79]), o($V11, [2, 80]), { 70: 177, 71: [1, 178] }, { 71: [2, 70], 109: $VJ, 126: $VK, 127: $VL }, o($Vh1, [2, 7], { 14: $Vc }), o($Vh1, [2, 8]), o($Vi1, [2, 24], { 22: 179, 37: [1, 180] }), o($V81, [2, 21]), { 35: [1, 181] }, { 35: [1, 182] }, { 35: [1, 183] }, o($VI, [2, 152]), o($Vj1, [2, 146]), o($Vk1, [2, 136], { 109: $VJ }), o($VM, [2, 137]), o($Vk1, [2, 138], { 109: $VJ }), { 58: 186, 59: $Vo, 60: $Vp, 62: [1, 185], 124: 184, 125: [1, 187] }, o($VN, [2, 129]), { 16: [1, 188] }, { 16: [2, 125] }, { 16: [2, 126] }, { 16: [1, 189] }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 190, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 191, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 192, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 193, 195: $VC }, o([6, 8, 14, 17, 34, 36, 43, 51, 52, 53, 71, 72, 74, 77, 89, 93, 103, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], [2, 95], { 45: $VO, 79: $VP, 81: $VQ, 94: $VS, 95: $VT, 96: $VU, 97: $VV, 98: $VW, 99: $VX, 100: $VY, 101: $VZ }), o([6, 8, 14, 17, 34, 36, 43, 51, 52, 53, 71, 72, 74, 77, 89, 93, 94, 101, 103, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], [2, 96], { 45: $VO, 79: $VP, 81: $VQ, 95: $VT, 96: $VU, 97: $VV, 98: $VW, 99: $VX, 100: $VY }), o($Vl1, [2, 97], { 45: $VO, 79: $VP, 81: $VQ, 97: $VV, 98: $VW, 99: $VX, 100: $VY }), o($Vl1, [2, 98], { 45: $VO, 79: $VP, 81: $VQ, 97: $VV, 98: $VW, 99: $VX, 100: $VY }), o($Vm1, [2, 99], { 45: $VO, 97: $VV, 98: $VW, 99: $VX, 100: $VY }), o($Vm1, [2, 100], { 45: $VO, 97: $VV, 98: $VW, 99: $VX, 100: $VY }), o($V01, [2, 101]), o($V01, [2, 102]), o($V01, [2, 103]), o($V01, [2, 104]), o($V01, [2, 105]), o([6, 8, 14, 17, 34, 36, 43, 51, 52, 53, 71, 72, 74, 77, 89, 93, 101, 103, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], [2, 106], { 45: $VO, 79: $VP, 81: $VQ, 94: $VS, 95: $VT, 96: $VU, 97: $VV, 98: $VW, 99: $VX, 100: $VY }), o($V11, [2, 91]), o($Vd1, [2, 66]), o($V11, [2, 85]), { 16: $Vi, 35: $Vj, 47: 194, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, o($V11, [2, 87]), { 17: [1, 195], 43: $Vb1 }, { 17: [1, 196] }, { 89: [1, 197], 109: $VJ, 126: $VK, 127: $VL }, o($V11, [2, 92], { 50: $V31, 90: [1, 198] }), { 17: [1, 199], 43: [1, 200] }, o($Vc1, [2, 59]), o($Vc1, [2, 61]), o($Vc1, [2, 62]), { 16: $Vi, 35: $Vj, 47: 201, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, o($Vc1, [2, 64], { 109: $VJ, 126: $VK, 127: $VL }), o([6, 8, 14, 17, 34, 43, 45, 51, 52, 53, 79, 81, 93, 94, 95, 96, 97, 98, 99, 100, 101, 103, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 157], $V21, { 50: [1, 202], 90: $V41 }), { 71: [1, 204], 73: 203, 74: [1, 205], 77: [2, 73] }, { 16: $Vi, 35: $Vj, 47: 206, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, o($Vn1, [2, 26], { 23: 207, 38: [1, 208] }), o($Vi1, [2, 23]), o($VD, [2, 19]), o($VE, [2, 160]), o($VE, [2, 161]), o($VM, [2, 134]), o($VN, [2, 128]), o($VM, [2, 131]), o($VM, [2, 132]), { 4: 209, 18: $V1 }, { 4: 210, 16: $Vi, 18: $V1, 35: $Vj, 47: 113, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 85: 211, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, { 45: $VO, 79: $VP, 81: $VQ, 93: $VR, 94: $VS, 95: $VT, 96: $VU, 97: $VV, 98: $VW, 99: $VX, 100: $VY, 101: $VZ, 109: [1, 212] }, o($VN, [2, 109], { 104: 213, 105: [1, 214] }), o($VN, [2, 117], { 45: $VO, 79: $VP, 81: $VQ, 93: $VR, 94: $VS, 95: $VT, 96: $VU, 97: $VV, 98: $VW, 99: $VX, 100: $VY, 101: $VZ }), o($VN, [2, 115], { 45: $VO, 79: $VP, 81: $VQ, 93: $VR, 94: $VS, 95: $VT, 96: $VU, 97: $VV, 98: $VW, 99: $VX, 100: $VY, 101: $VZ }), o($Vc1, [2, 140], { 109: $VJ, 126: $VK, 127: $VL }), o($V11, [2, 86]), o($V11, [2, 88]), o($V11, [2, 89]), { 91: [1, 215] }, o($V11, [2, 57]), o($Vc1, $Ve1, { 122: 33, 106: 35, 92: 36, 80: 37, 63: 38, 65: 40, 78: 41, 75: 46, 54: 48, 55: 49, 58: 50, 61: 51, 64: 52, 46: 173, 47: 175, 49: 176, 67: 216, 16: $Vi, 30: $Vf1, 35: $Vj, 45: $Vg1, 52: $Vk, 53: $Vl, 56: $Vm, 57: $Vn, 59: $Vo, 60: $Vp, 62: $Vq, 76: $Vr, 79: $Vs, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 103: $VB, 195: $VC }), o($Vc1, [2, 63], { 109: $VJ, 126: $VK, 127: $VL }), { 45: [1, 217], 52: $Va1 }, { 77: [1, 218] }, { 16: $Vi, 35: $Vj, 47: 219, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, { 16: $Vi, 35: $Vj, 47: 220, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, { 72: [1, 221], 109: $VJ, 126: $VK, 127: $VL }, o($Vo1, [2, 28], { 24: 222, 39: [1, 223] }), o($Vn1, [2, 25]), { 17: [1, 224] }, { 17: [1, 225] }, { 17: [1, 226], 43: $Vb1 }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 106: 227, 195: $VC }, o($VN, [2, 116]), { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 228, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 195: $VC }, o($V11, [2, 93]), o($Vc1, [2, 58]), o($Vp1, [2, 39]), o($V11, [2, 75]), { 72: [1, 229], 109: $VJ, 126: $VK, 127: $VL }, { 77: [2, 74], 109: $VJ, 126: $VK, 127: $VL }, { 16: $Vi, 35: $Vj, 47: 230, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, o($Vq1, [2, 29], { 25: 231, 40: [1, 232], 41: [1, 233] }), o($Vo1, [2, 27]), o($VN, [2, 130]), o($VN, [2, 112]), o($VN, [2, 113]), o($VN, [2, 114]), o($VN, [2, 110]), { 16: $Vi, 35: $Vj, 47: 234, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, o($Vr1, [2, 71], { 109: $VJ, 126: $VK, 127: $VL }), o($Vs1, [2, 33], { 26: 235, 42: [1, 236] }), o($Vq1, [2, 30]), o($Vq1, [2, 31]), o($Vr1, [2, 72], { 109: $VJ, 126: $VK, 127: $VL }), { 16: $Vi, 27: 237, 35: $Vj, 44: 238, 45: $Vt1, 46: 240, 47: 241, 49: 176, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, o($Vs1, [2, 32]), o($Vu1, [2, 170], { 28: 242, 43: [1, 243], 157: [1, 244] }), o($Vp1, [2, 35]), o($Vp1, [2, 36]), o($Vp1, [2, 37]), o($Vp1, [2, 40], { 48: 245, 51: [1, 246], 52: [1, 247], 53: [1, 248], 109: $VJ, 126: $VK, 127: $VL }), o($Vu1, [2, 12]), { 16: $Vi, 35: $Vj, 44: 249, 45: $Vt1, 46: 240, 47: 241, 49: 176, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, { 16: $Vv1, 49: 256, 52: $V51, 88: $Vw1, 158: 250, 160: 251, 161: 252, 172: 255, 174: 254 }, o($Vp1, [2, 38]), { 52: [1, 258], 53: [1, 259] }, o($Vp1, [2, 42]), o($Vp1, [2, 44]), o($Vp1, [2, 34]), o([6, 8, 14, 17, 129, 135, 138, 144, 146, 150, 152, 154], $Vx1, { 159: 260, 43: $Vy1, 182: $Vz1 }), o($VA1, [2, 172]), o($VA1, [2, 174], { 163: 263, 166: 265, 36: $VB1, 164: $VC1, 165: $VD1, 167: $VE1, 168: $VF1, 173: $VG1, 177: $VH1 }), { 162: [1, 271] }, o($VI1, [2, 195]), o($VI1, [2, 196]), o([6, 8, 14, 17, 36, 43, 51, 52, 89, 129, 135, 138, 144, 146, 150, 152, 154, 164, 165, 167, 168, 173, 177, 179, 180, 192, 193, 194], $Vx1, { 159: 272, 50: $V31, 182: $Vz1 }), { 4: 273, 16: $Vv1, 18: $V1, 49: 256, 52: $V51, 88: $Vw1, 158: 274, 160: 251, 161: 252, 172: 255, 174: 254 }, o($Vp1, [2, 41]), o($Vp1, [2, 43]), o($VJ1, [2, 141], { 128: 275, 129: [1, 276] }), { 16: $Vv1, 49: 256, 52: $V51, 88: $Vw1, 160: 277, 161: 252, 172: 255, 174: 254 }, { 16: [1, 278] }, { 173: [1, 279] }, { 16: $Vv1, 49: 256, 52: $V51, 174: 280 }, { 169: 281, 170: $VK1, 173: $VL1 }, { 166: 284, 167: $VE1, 168: $VF1, 171: 283, 173: [2, 183] }, { 173: [2, 177] }, { 173: [2, 178] }, o($VM1, [2, 179]), o($VM1, [2, 180]), { 16: $Vv1, 49: 256, 52: $V51, 161: 285, 172: 255, 174: 254 }, o($VN1, $VO1, { 183: 286, 49: 288, 51: $VP1, 52: $V51 }), { 17: [1, 289] }, { 17: [1, 290], 43: $Vy1 }, o($Vj1, [2, 143], { 130: 291, 131: 292, 135: [1, 293] }), { 16: $Vi, 35: $Vj, 47: 294, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, o($VA1, [2, 173]), { 49: 296, 52: $V51, 181: 295 }, { 16: $Vv1, 49: 256, 52: $V51, 174: 297 }, { 176: 298, 179: $VQ1 }, { 173: [1, 300] }, { 173: [2, 182] }, { 173: [1, 301] }, { 169: 302, 170: $VK1, 173: $VL1 }, { 36: $VB1, 89: [1, 303], 163: 263, 164: $VC1, 165: $VD1, 166: 265, 167: $VE1, 168: $VF1, 173: $VG1, 177: $VH1 }, o($VI1, [2, 212], { 189: 304, 190: 305, 191: 306, 192: $VR1, 193: $VS1, 194: $VT1 }), { 49: 310, 52: $V51 }, o($VN1, [2, 203], { 50: $V31 }), o($VI1, $VO1, { 49: 288, 183: 311, 51: $VP1, 52: $V51 }), o($VI1, [2, 221]), o($VU1, [2, 157], { 143: 312, 144: [1, 313] }), o($Vj1, [2, 144]), { 16: $Vi, 35: $Vj, 47: 32, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 136: 314, 139: 31, 195: $VC }, o($VJ1, [2, 142], { 109: $VJ, 126: $VK, 127: $VL }), { 17: [1, 315], 43: [1, 316] }, o($Vc1, [2, 197], { 50: $V31 }), o([6, 8, 14, 17, 36, 43, 89, 129, 135, 138, 144, 146, 150, 152, 154, 164, 165, 167, 168, 173, 177, 182], [2, 185], { 175: 317, 176: 318, 179: $VQ1, 180: $VV1 }), o($VI1, [2, 187]), { 16: $Vi, 35: $Vj, 47: 320, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, { 16: $Vv1, 49: 256, 52: $V51, 161: 321, 172: 255, 174: 254 }, { 16: $Vv1, 49: 256, 52: $V51, 174: 322 }, { 173: [2, 184] }, o($VA1, [2, 175]), o($VI1, [2, 219]), o($VI1, [2, 213]), o($VI1, [2, 214]), { 184: 324, 185: $VW1, 186: $VX1 }, { 184: 327, 185: $VW1, 186: $VX1 }, { 184: 328, 185: $VW1, 186: $VX1 }, o($VN1, [2, 202], { 50: $V31 }), o($VI1, [2, 220]), o($Vh, $Va, { 137: 18, 11: 329, 138: $Vb }), { 16: $Vi, 35: $Vj, 47: 330, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, o($Vj1, $VF, { 132: 331, 43: $VG, 133: $VH }), o([6, 8, 14, 17, 36, 43, 51, 52, 89, 129, 135, 138, 144, 146, 150, 152, 154, 164, 165, 167, 168, 173, 177, 179, 180, 182, 192, 193, 194], [2, 200]), { 49: 332, 52: $V51 }, o($VI1, [2, 186]), o($VI1, [2, 193]), { 16: [1, 333] }, o($VI1, [2, 192], { 109: $VJ, 126: $VK, 127: $VL }), { 36: $VB1, 163: 263, 164: $VC1, 165: $VD1, 166: 265, 167: $VE1, 168: $VF1, 173: $VG1, 175: 334, 176: 318, 177: $VH1, 179: $VQ1, 180: $VV1 }, o($VI1, [2, 189]), { 191: 335, 192: $VR1, 193: $VS1, 194: $VT1 }, { 16: $VY1, 152: $VZ1, 187: 336 }, o($V_1, [2, 204]), o($V_1, [2, 205]), { 16: $VY1, 152: $VZ1, 187: 338 }, { 16: $VY1, 152: $VZ1, 187: 339 }, o($VE, $Vf, { 145: 28, 12: 340, 146: $Vg }), o($VU1, [2, 158], { 109: $VJ, 126: $VK, 127: $VL }), o($Vj1, [2, 147]), o($Vc1, [2, 198], { 50: $V31 }), { 49: 342, 52: $V51, 68: 341 }, o($VI1, [2, 188]), o($VI1, [2, 215]), { 16: [1, 343] }, { 135: [1, 346], 138: [1, 345], 173: [1, 344] }, { 16: [1, 347] }, { 16: [1, 348] }, o($V$1, [2, 164], { 148: 349, 149: 350, 150: [1, 351] }), { 17: [1, 352], 43: $V02 }, o($Vc1, [2, 67], { 50: $V31 }), { 17: [2, 210], 49: 342, 52: $V51, 68: 355, 188: 354 }, { 16: [2, 207] }, { 16: [2, 208] }, { 16: [2, 209] }, { 49: 342, 52: $V51, 68: 356 }, { 49: 342, 52: $V51, 68: 357 }, o($Vu1, [2, 167], { 151: 358, 152: [1, 359], 154: [1, 360] }), o($V$1, [2, 165]), { 52: [1, 362], 65: 361 }, o($VI1, [2, 194]), { 49: 363, 52: $V51 }, { 17: [1, 364] }, { 17: [2, 211], 43: $V02 }, { 17: [1, 365], 43: $V02 }, { 17: [1, 366], 43: $V02 }, o($Vu1, [2, 171]), { 153: [1, 367] }, { 107: [1, 368] }, o($V$1, [2, 166]), { 16: $V71 }, o($Vc1, [2, 68], { 50: $V31 }), o($VI1, [2, 216]), o($VI1, [2, 217]), o($VI1, [2, 218]), o($Vu1, [2, 168]), { 155: [1, 369] }, { 156: [1, 370] }, o($Vu1, [2, 169])],
    defaultActions: { 11: [2, 3], 22: [2, 1], 24: [2, 2], 142: [2, 125], 143: [2, 126], 267: [2, 177], 268: [2, 178], 282: [2, 182], 302: [2, 184], 344: [2, 207], 345: [2, 208], 346: [2, 209] },
    parseError: function parseError(str, hash) {
      if (hash.recoverable) {
        this.trace(str);
      } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
      }
    },
    parse: function parse(input) {
      var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
      var args = lstack.slice.call(arguments, 1);
      var lexer2 = Object.create(this.lexer);
      var sharedState = { yy: {} };
      for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
          sharedState.yy[k] = this.yy[k];
        }
      }
      lexer2.setInput(input, sharedState.yy);
      sharedState.yy.lexer = lexer2;
      sharedState.yy.parser = this;
      if (typeof lexer2.yylloc == "undefined") {
        lexer2.yylloc = {};
      }
      var yyloc = lexer2.yylloc;
      lstack.push(yyloc);
      var ranges = lexer2.options && lexer2.options.ranges;
      if (typeof sharedState.yy.parseError === "function") {
        this.parseError = sharedState.yy.parseError;
      } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
      }
      function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
      }
      var lex = function() {
        var token;
        token = lexer2.lex() || EOF;
        if (typeof token !== "number") {
          token = self.symbols_[token] || token;
        }
        return token;
      };
      var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
      while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
          action = this.defaultActions[state];
        } else {
          if (symbol === null || typeof symbol == "undefined") {
            symbol = lex();
          }
          action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
          var errStr = "";
          expected = [];
          for (p in table[state]) {
            if (this.terminals_[p] && p > TERROR) {
              expected.push("'" + this.terminals_[p] + "'");
            }
          }
          if (lexer2.showPosition) {
            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + lexer2.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
          } else {
            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == EOF ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
          }
          this.parseError(errStr, {
            text: lexer2.match,
            token: this.terminals_[symbol] || symbol,
            line: lexer2.yylineno,
            loc: yyloc,
            expected
          });
        }
        if (action[0] instanceof Array && action.length > 1) {
          throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
          case 1:
            stack.push(symbol);
            vstack.push(lexer2.yytext);
            lstack.push(lexer2.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
              yyleng = lexer2.yyleng;
              yytext = lexer2.yytext;
              yylineno = lexer2.yylineno;
              yyloc = lexer2.yylloc;
              if (recovering > 0) {
                recovering--;
              }
            } else {
              symbol = preErrorSymbol;
              preErrorSymbol = null;
            }
            break;
          case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
              first_line: lstack[lstack.length - (len || 1)].first_line,
              last_line: lstack[lstack.length - 1].last_line,
              first_column: lstack[lstack.length - (len || 1)].first_column,
              last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
              yyval._$.range = [
                lstack[lstack.length - (len || 1)].range[0],
                lstack[lstack.length - 1].range[1]
              ];
            }
            r = this.performAction.apply(yyval, [
              yytext,
              yyleng,
              yylineno,
              sharedState.yy,
              action[1],
              vstack,
              lstack
            ].concat(args));
            if (typeof r !== "undefined") {
              return r;
            }
            if (len) {
              stack = stack.slice(0, -1 * len * 2);
              vstack = vstack.slice(0, -1 * len);
              lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }
  };
  var lexer = function() {
    var lexer2 = {
      EOF: 1,
      parseError: function parseError(str, hash) {
        if (this.yy.parser) {
          this.yy.parser.parseError(str, hash);
        } else {
          throw new Error(str);
        }
      },
      // resets the lexer, sets new input
      setInput: function(input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = "";
        this.conditionStack = ["INITIAL"];
        this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        };
        if (this.options.ranges) {
          this.yylloc.range = [0, 0];
        }
        this.offset = 0;
        return this;
      },
      // consumes and returns one char from the input
      input: function() {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
          this.yylineno++;
          this.yylloc.last_line++;
        } else {
          this.yylloc.last_column++;
        }
        if (this.options.ranges) {
          this.yylloc.range[1]++;
        }
        this._input = this._input.slice(1);
        return ch;
      },
      // unshifts one char (or a string) into the input
      unput: function(ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);
        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        if (lines.length - 1) {
          this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
        };
        if (this.options.ranges) {
          this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
      },
      // When called from action, caches matched text and appends it on next action
      more: function() {
        this._more = true;
        return this;
      },
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: function() {
        if (this.options.backtrack_lexer) {
          this._backtrack = true;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
        return this;
      },
      // retain first n characters of the match
      less: function(n) {
        this.unput(this.match.slice(n));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var next = this.match;
        if (next.length < 20) {
          next += this._input.substr(0, 20 - next.length);
        }
        return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(match, indexed_rule) {
        var token, lines, backup;
        if (this.options.backtrack_lexer) {
          backup = {
            yylineno: this.yylineno,
            yylloc: {
              first_line: this.yylloc.first_line,
              last_line: this.last_line,
              first_column: this.yylloc.first_column,
              last_column: this.yylloc.last_column
            },
            yytext: this.yytext,
            match: this.match,
            matches: this.matches,
            matched: this.matched,
            yyleng: this.yyleng,
            offset: this.offset,
            _more: this._more,
            _input: this._input,
            yy: this.yy,
            conditionStack: this.conditionStack.slice(0),
            done: this.done
          };
          if (this.options.ranges) {
            backup.yylloc.range = this.yylloc.range.slice(0);
          }
        }
        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
          this.yylineno += lines.length;
        }
        this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
          this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
          this.done = false;
        }
        if (token) {
          return token;
        } else if (this._backtrack) {
          for (var k in backup) {
            this[k] = backup[k];
          }
          return false;
        }
        return false;
      },
      // return next match in input
      next: function() {
        if (this.done) {
          return this.EOF;
        }
        if (!this._input) {
          this.done = true;
        }
        var token, match, tempMatch, index;
        if (!this._more) {
          this.yytext = "";
          this.match = "";
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
          tempMatch = this._input.match(this.rules[rules[i]]);
          if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
            match = tempMatch;
            index = i;
            if (this.options.backtrack_lexer) {
              token = this.test_match(tempMatch, rules[i]);
              if (token !== false) {
                return token;
              } else if (this._backtrack) {
                match = false;
                continue;
              } else {
                return false;
              }
            } else if (!this.options.flex) {
              break;
            }
          }
        }
        if (match) {
          token = this.test_match(match, rules[index]);
          if (token !== false) {
            return token;
          }
          return false;
        }
        if (this._input === "") {
          return this.EOF;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
      },
      // return next match that has a token
      lex: function lex() {
        var r = this.next();
        if (r) {
          return r;
        } else {
          return this.lex();
        }
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function begin(condition) {
        this.conditionStack.push(condition);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
          return this.conditionStack.pop();
        } else {
          return this.conditionStack[0];
        }
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
          return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
          return this.conditions["INITIAL"].rules;
        }
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
          return this.conditionStack[n];
        } else {
          return "INITIAL";
        }
      },
      // alias for begin(condition)
      pushState: function pushState(condition) {
        this.begin(condition);
      },
      // return the number of states currently on the stack
      stateStackSize: function stateStackSize() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": true },
      performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
        var YYSTATE = YY_START;
        switch ($avoiding_name_collisions) {
          case 0:
            break;
          case 1:
            break;
          case 2:
            break;
          case 3:
            break;
          case 4:
            return 195;
            break;
          case 5:
            return 52;
            break;
          case 6:
            return 52;
            break;
          case 7:
            return 52;
            break;
          case 8:
            return 18;
            break;
          case 9:
            return 29;
            break;
          case 10:
            return 121;
            break;
          case 11:
            return 30;
            break;
          case 12:
            return 31;
            break;
          case 13:
            return 32;
            break;
          case 14:
            return 33;
            break;
          case 15:
            return 36;
            break;
          case 16:
            return 37;
            break;
          case 17:
            return 38;
            break;
          case 18:
            return 39;
            break;
          case 19:
            return 40;
            break;
          case 20:
            return 41;
            break;
          case 21:
            return 42;
            break;
          case 22:
            return 51;
            break;
          case 23:
            return 59;
            break;
          case 24:
            return 60;
            break;
          case 25:
            return 62;
            break;
          case 26:
            return "COLLATE";
            break;
          case 27:
            return 84;
            break;
          case 28:
            return 86;
            break;
          case 29:
            return 87;
            break;
          case 30:
            return 76;
            break;
          case 31:
            return 71;
            break;
          case 32:
            return 72;
            break;
          case 33:
            return 74;
            break;
          case 34:
            return 77;
            break;
          case 35:
            return 98;
            break;
          case 36:
            return 99;
            break;
          case 37:
            return 103;
            break;
          case 38:
            return 108;
            break;
          case 39:
            return 107;
            break;
          case 40:
            return 110;
            break;
          case 41:
            return 111;
            break;
          case 42:
            return 105;
            break;
          case 43:
            return 112;
            break;
          case 44:
            return 123;
            break;
          case 45:
            return 125;
            break;
          case 46:
            return 109;
            break;
          case 47:
            return 126;
            break;
          case 48:
            return 127;
            break;
          case 49:
            return 157;
            break;
          case 50:
            return 182;
            break;
          case 51:
            return 192;
            break;
          case 52:
            return 185;
            break;
          case 53:
            return 186;
            break;
          case 54:
            return 152;
            break;
          case 55:
            return 173;
            break;
          case 56:
            return 138;
            break;
          case 57:
            return 135;
            break;
          case 58:
            return 193;
            break;
          case 59:
            return 194;
            break;
          case 60:
            return 164;
            break;
          case 61:
            return 165;
            break;
          case 62:
            return 179;
            break;
          case 63:
            return 180;
            break;
          case 64:
            return 167;
            break;
          case 65:
            return 168;
            break;
          case 66:
            return 170;
            break;
          case 67:
            return 177;
            break;
          case 68:
            return 129;
            break;
          case 69:
            return 141;
            break;
          case 70:
            return 142;
            break;
          case 71:
            return 133;
            break;
          case 72:
            return 134;
            break;
          case 73:
            return 144;
            break;
          case 74:
            return 147;
            break;
          case 75:
            return 150;
            break;
          case 76:
            return 153;
            break;
          case 77:
            return 154;
            break;
          case 78:
            return 155;
            break;
          case 79:
            return 156;
            break;
          case 80:
            return 162;
            break;
          case 81:
            return 146;
            break;
          case 82:
            return 14;
            break;
          case 83:
            return 43;
            break;
          case 84:
            return 34;
            break;
          case 85:
            return 16;
            break;
          case 86:
            return 17;
            break;
          case 87:
            return 82;
            break;
          case 88:
            return 119;
            break;
          case 89:
            return 83;
            break;
          case 90:
            return 90;
            break;
          case 91:
            return 93;
            break;
          case 92:
            return 94;
            break;
          case 93:
            return 79;
            break;
          case 94:
            return 81;
            break;
          case 95:
            return 45;
            break;
          case 96:
            return 97;
            break;
          case 97:
            return 100;
            break;
          case 98:
            return 101;
            break;
          case 99:
            return 96;
            break;
          case 100:
            return 114;
            break;
          case 101:
            return 115;
            break;
          case 102:
            return 95;
            break;
          case 103:
            return "<=>";
            break;
          case 104:
            return 116;
            break;
          case 105:
            return 118;
            break;
          case 106:
            return 117;
            break;
          case 107:
            return 88;
            break;
          case 108:
            return 89;
            break;
          case 109:
            return 8;
            break;
          case 110:
            return 91;
            break;
          case 111:
            return 53;
            break;
          case 112:
            return 57;
            break;
          case 113:
            return 35;
            break;
          case 114:
            return 56;
            break;
          case 115:
            return 52;
            break;
          case 116:
            return 50;
            break;
          case 117:
            return 52;
            break;
          case 118:
            return 6;
            break;
          case 119:
            return "INVALID";
            break;
        }
      },
      rules: [/^(?:[/][*](.|\n)*?[*][/])/i, /^(?:[-][-]\s.*\n)/i, /^(?:[#]\s.*\n)/i, /^(?:\s+)/i, /^(?:[$][{](.*?)[}])/i, /^(?:([`][^`]+[`])+)/i, /^(?:(["][^"]+["])+)/i, /^(?:[\[]([^\]]|\]\])+[\]])/i, /^(?:SELECT\b)/i, /^(?:ALL\b)/i, /^(?:ANY\b)/i, /^(?:DISTINCT\b)/i, /^(?:DISTINCTROW\b)/i, /^(?:HIGH_PRIORITY\b)/i, /^(?:MAX_STATEMENT_TIME\b)/i, /^(?:STRAIGHT_JOIN\b)/i, /^(?:SQL_SMALL_RESULT\b)/i, /^(?:SQL_BIG_RESULT\b)/i, /^(?:SQL_BUFFER_RESULT\b)/i, /^(?:SQL_CACHE\b)/i, /^(?:SQL_NO_CACHE\b)/i, /^(?:SQL_CALC_FOUND_ROWS\b)/i, /^(?:AS\b)/i, /^(?:TRUE\b)/i, /^(?:FALSE\b)/i, /^(?:NULL\b)/i, /^(?:COLLATE\b)/i, /^(?:BINARY\b)/i, /^(?:ROW\b)/i, /^(?:EXISTS\b)/i, /^(?:CASE\b)/i, /^(?:WHEN\b)/i, /^(?:THEN\b)/i, /^(?:ELSE\b)/i, /^(?:END\b)/i, /^(?:DIV\b)/i, /^(?:MOD\b)/i, /^(?:NOT\b)/i, /^(?:BETWEEN\b)/i, /^(?:IN\b)/i, /^(?:SOUNDS\b)/i, /^(?:LIKE\b)/i, /^(?:ESCAPE\b)/i, /^(?:REGEXP\b)/i, /^(?:IS\b)/i, /^(?:UNKNOWN\b)/i, /^(?:AND\b)/i, /^(?:OR\b)/i, /^(?:XOR\b)/i, /^(?:FROM\b)/i, /^(?:PARTITION\b)/i, /^(?:USE\b)/i, /^(?:INDEX\b)/i, /^(?:KEY\b)/i, /^(?:FOR\b)/i, /^(?:JOIN\b)/i, /^(?:ORDER\s+BY\b)/i, /^(?:GROUP\s+BY\b)/i, /^(?:IGNORE\b)/i, /^(?:FORCE\b)/i, /^(?:INNER\b)/i, /^(?:CROSS\b)/i, /^(?:ON\b)/i, /^(?:USING\b)/i, /^(?:LEFT\b)/i, /^(?:RIGHT\b)/i, /^(?:OUTER\b)/i, /^(?:NATURAL\b)/i, /^(?:WHERE\b)/i, /^(?:ASC\b)/i, /^(?:DESC\b)/i, /^(?:WITH\b)/i, /^(?:ROLLUP\b)/i, /^(?:HAVING\b)/i, /^(?:OFFSET\b)/i, /^(?:PROCEDURE\b)/i, /^(?:UPDATE\b)/i, /^(?:LOCK\b)/i, /^(?:SHARE\b)/i, /^(?:MODE\b)/i, /^(?:OJ\b)/i, /^(?:LIMIT\b)/i, /^(?:UNION\b)/i, /^(?:,)/i, /^(?:=)/i, /^(?:\()/i, /^(?:\))/i, /^(?:~)/i, /^(?:!=)/i, /^(?:!)/i, /^(?:\|\|)/i, /^(?:\|)/i, /^(?:&)/i, /^(?:\+)/i, /^(?:-)/i, /^(?:\*)/i, /^(?:\/)/i, /^(?:%)/i, /^(?:\^)/i, /^(?:>>)/i, /^(?:>=)/i, /^(?:>)/i, /^(?:<<)/i, /^(?:<=>)/i, /^(?:<=)/i, /^(?:<>)/i, /^(?:<)/i, /^(?:\{)/i, /^(?:\})/i, /^(?:;)/i, /^(?:['](%)+['])/i, /^(?:(['][^']*['])+)/i, /^(?:[0][x][0-9a-fA-F]+)/i, /^(?:[-]?[0-9]+(\.[0-9]+)?)/i, /^(?:[-]?[0-9]+(\.[0-9]+)?[eE][-+]?[0-9]+(\.[0-9]+)?)/i, /^(?:[a-zA-Z_@#\uff3f\u4e00-\u9fa5][a-zA-Z0-9_$@#\uff3f\u4e00-\u9fa5]*)/i, /^(?:\.)/i, /^(?:([`])(?:(?=(\\?))\2.)*?\1)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { "INITIAL": { "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119], "inclusive": true } }
    };
    return lexer2;
  }();
  parser.lexer = lexer;
  function Parser() {
    this.yy = {};
  }
  Parser.prototype = parser;
  parser.Parser = Parser;
  return new Parser();
}();

// src/utils/parseSQL/utils.ts
var isSQLLiteralValue = (v) => !!v && (v.type === "String" || v.type === "Number" || v.type === "Boolean");
var isSQLIdentifier = (v) => !!v && v.type === "Identifier";
var getParamString = (param) => {
  switch (typeof param) {
    case "number":
      return `${param}`;
    case "boolean":
      return param ? "TRUE" : "FALSE";
    default:
      return `'${param}'`;
  }
};
var getFieldName = (f) => {
  const fieldName = typeof f === "string" ? f : f.value;
  if (fieldName.startsWith("`") && fieldName.endsWith("`")) {
    return fieldName.replaceAll(/(^`|`$)/g, "").replaceAll("``", "`");
  } else if (fieldName.startsWith('"') && fieldName.endsWith('"')) {
    return fieldName.replaceAll(/(^"|"$)/g, "").replaceAll('""', '"');
  } else if (fieldName.startsWith("[") && fieldName.endsWith("]")) {
    return fieldName.replaceAll(/(^\[|\]$)/g, "").replaceAll("]]", "]");
  }
  return fieldName;
};
var normalizeCombinator2 = (c) => c.replace("&&", "and").replace("||", "or").toLowerCase();
var normalizeOperator2 = (op, flip) => {
  if (flip) {
    if (op === "<")
      return ">";
    if (op === "<=")
      return ">=";
    if (op === ">")
      return "<";
    if (op === ">=")
      return "<=";
  }
  if (op === "<>")
    return "!=";
  return op;
};
var evalSQLLiteralValue = (valueObj) => {
  if (valueObj.type === "String") {
    const valueString = valueObj.value;
    if (valueString.startsWith(`'`) && valueString.endsWith(`'`) || valueString.startsWith(`"`) && valueString.endsWith(`"`)) {
      const innerString = valueString.substring(1, valueString.length - 1);
      return innerString.replaceAll(/''/gm, "'");
    }
    return valueString;
  } else if (valueObj.type === "Boolean") {
    return valueObj.value.toLowerCase() === "true";
  }
  return parseFloat(valueObj.value);
};
var generateFlatAndOrList2 = (expr) => {
  const combinator = normalizeCombinator2(expr.operator);
  if (expr.left.type === "AndExpression" || expr.left.type === "OrExpression" || expr.left.type === "XorExpression") {
    return [...generateFlatAndOrList2(expr.left), combinator, expr.right];
  }
  return [expr.left, combinator, expr.right];
};
var generateMixedAndXorOrList = (expr) => {
  const arr = generateFlatAndOrList2(expr);
  let currentLevel = 0;
  const orArray = { combinator: "or", expressions: [] };
  let xorArray = { combinator: "xor", expressions: [] };
  let andArray = { combinator: "and", expressions: [] };
  for (let i = 0; i < arr.length - 2; i += 2) {
    let levelDelta = 0;
    if (arr[i + 1] === "and") {
      levelDelta = 2 - currentLevel;
    } else if (arr[i + 1] === "xor") {
      levelDelta = 1 - currentLevel;
    } else if (arr[i + 1] === "or") {
      levelDelta = 0 - currentLevel;
    }
    if (levelDelta > 0) {
      for (let d = 0; d < levelDelta; d++) {
        currentLevel += 1;
        if (currentLevel === 1) {
          xorArray = { combinator: "xor", expressions: [] };
          if (levelDelta === 1) {
            xorArray.expressions.push(arr[i]);
            if (i >= arr.length - 3 || arr[i + 3] === "xor") {
              xorArray.expressions.push(arr[i + 2]);
            }
          }
        } else if (currentLevel === 2) {
          andArray = { combinator: "and", expressions: [] };
          andArray.expressions.push(arr[i], arr[i + 2]);
        }
      }
    } else if (levelDelta < 0) {
      for (let d = 0; d > levelDelta; d--) {
        currentLevel -= 1;
        if (currentLevel === 1) {
          xorArray.expressions.push(andArray);
          if (levelDelta === -1) {
            xorArray.expressions.push(arr[i + 2]);
          }
        } else if (currentLevel === 0) {
          orArray.expressions.push(xorArray);
          if (i >= arr.length - 3) {
            orArray.expressions.push(arr[i + 2]);
          }
        }
      }
    } else {
      if (currentLevel === 0) {
        if (i === 0 || i > 3 && arr[i - 3] !== "or") {
          orArray.expressions.push(arr[i]);
        }
        if (i >= arr.length - 3 || arr[i + 3] === "or") {
          orArray.expressions.push(arr[i + 2]);
        }
      } else if (currentLevel === 1) {
        xorArray.expressions.push(arr[i + 2]);
      } else if (currentLevel === 2) {
        andArray.expressions.push(arr[i + 2]);
      }
    }
  }
  if (currentLevel === 2) {
    xorArray.expressions.push(andArray);
    currentLevel -= 1;
  }
  if (currentLevel === 1) {
    orArray.expressions.push(xorArray);
    currentLevel -= 1;
  }
  if (orArray.expressions.length === 1 && "combinator" in orArray.expressions[0]) {
    if (orArray.expressions[0].expressions.length === 1 && "combinator" in orArray.expressions[0].expressions[0]) {
      return orArray.expressions[0].expressions[0];
    } else {
      return orArray.expressions[0];
    }
  }
  const returnArray = { combinator: "or", expressions: [] };
  for (const o of orArray.expressions) {
    if ("combinator" in o) {
      if ("combinator" in o.expressions[0] && o.expressions.length === 1) {
        returnArray.expressions.push(o.expressions[0]);
      } else {
        returnArray.expressions.push(o);
      }
    } else {
      returnArray.expressions.push(o);
    }
  }
  return returnArray;
};

// src/utils/parseSQL/parseSQL.ts
function parseSQL(sql, options = {}) {
  const { params, paramPrefix, independentCombinators, fields, getValueSources } = options;
  let sqlString = /^[ \t\n\r\s]*SELECT\b/i.test(sql) ? sql : /^[ \t\n\r\s]*WHERE\b/i.test(sql) ? `SELECT * FROM t ${sql}` : `SELECT * FROM t WHERE ${sql}`;
  let ic = false;
  const fieldsFlat = getFieldsArray(fields);
  ic = !!independentCombinators;
  if (params) {
    if (Array.isArray(params)) {
      let i = 0;
      sqlString = sqlString.replace(/\?/g, () => {
        const paramString = getParamString(params[i]);
        i++;
        return paramString;
      });
    } else {
      const keys = Object.keys(params);
      const prefix = paramPrefix ?? ":";
      keys.forEach((p) => {
        sqlString = sqlString.replace(
          new RegExp(`\\${prefix}${p}\\b`, "ig"),
          getParamString(params[p])
        );
      });
    }
  }
  const fieldIsValid = (fieldName, operator, subordinateFieldName) => fieldIsValidUtil({
    fieldName,
    fieldsFlat,
    operator,
    subordinateFieldName,
    getValueSources
  });
  const processSQLExpression = (expr) => {
    if (expr.type === "NotExpression") {
      const val = expr.value.type === "SimpleExprParentheses" ? expr.value.value.value[0] : expr.value;
      const rule = processSQLExpression(val);
      if (rule) {
        if ("rules" in rule) {
          return { ...rule, not: true };
        }
        return {
          rules: [rule],
          not: true,
          ...!ic && { combinator: "and" }
        };
      }
    } else if (expr.type === "SimpleExprParentheses") {
      const ex = expr.value.value[0];
      if (ex.type === "AndExpression" || ex.type === "OrExpression" || ex.type === "XorExpression") {
        return processSQLExpression(ex);
      }
      const rule = processSQLExpression(ex);
      return rule ? { rules: [rule], ...ic ? {} : { combinator: "and" } } : null;
    } else if (expr.type === "AndExpression" || expr.type === "OrExpression" || expr.type === "XorExpression") {
      if (ic) {
        const andOrList = generateFlatAndOrList2(expr);
        const rules2 = andOrList.map((v) => {
          if (typeof v === "string") {
            return v;
          }
          return processSQLExpression(v);
        });
        if (rules2.includes(null)) {
          return null;
        }
        return {
          rules: rules2
        };
      }
      const andXorOrList = generateMixedAndXorOrList(expr);
      const { combinator } = andXorOrList;
      const rules = andXorOrList.expressions.map((obj) => {
        if ("combinator" in obj) {
          return {
            combinator: obj.combinator,
            rules: obj.expressions.map((o) => {
              if ("combinator" in o) {
                return {
                  combinator: o.combinator,
                  rules: o.expressions.map((oa) => processSQLExpression(oa)).filter(Boolean)
                };
              } else {
                return processSQLExpression(o);
              }
            }).filter(Boolean)
          };
        }
        return processSQLExpression(obj);
      }).filter(Boolean);
      if (rules.length > 0) {
        return { combinator, rules };
      }
    } else if (expr.type === "IsNullBooleanPrimary") {
      if (isSQLIdentifier(expr.value)) {
        const f = getFieldName(expr.value);
        const operator = expr.hasNot ? "notNull" : "null";
        if (fieldIsValid(f, operator)) {
          return {
            field: f,
            operator,
            value: null
          };
        }
      }
    } else if (expr.type === "ComparisonBooleanPrimary") {
      if (isSQLIdentifier(expr.left) && !isSQLIdentifier(expr.right) || !isSQLIdentifier(expr.left) && isSQLIdentifier(expr.right)) {
        const identifier = isSQLIdentifier(expr.left) ? expr.left.value : expr.right.value;
        const valueObj = [expr.left, expr.right].find((t) => !isSQLIdentifier(t));
        if (isSQLLiteralValue(valueObj)) {
          const f = getFieldName(identifier);
          const operator = normalizeOperator2(expr.operator, isSQLIdentifier(expr.right));
          if (fieldIsValid(f, operator)) {
            return {
              field: f,
              operator,
              value: evalSQLLiteralValue(valueObj)
            };
          }
        }
      } else if (isSQLIdentifier(expr.left) && isSQLIdentifier(expr.right)) {
        const f = getFieldName(expr.left);
        const sf = getFieldName(expr.right);
        const operator = normalizeOperator2(expr.operator);
        if (fieldIsValid(f, operator, sf)) {
          return {
            field: f,
            operator,
            value: sf,
            valueSource: "field"
          };
        }
      }
    } else if (expr.type === "InExpressionListPredicate") {
      if (isSQLIdentifier(expr.left)) {
        const f = getFieldName(expr.left);
        const valueArray = expr.right.value.filter(isSQLLiteralValue).map(evalSQLLiteralValue);
        const operator = expr.hasNot ? "notIn" : "in";
        const fieldArray = expr.right.value.filter(isSQLIdentifier).filter((sf) => fieldIsValid(f, operator, sf.value)).map(getFieldName);
        if (valueArray.length > 0) {
          const value = options?.listsAsArrays ? valueArray : valueArray.join(", ");
          return { field: getFieldName(expr.left), operator, value };
        } else if (fieldArray.length > 0) {
          const value = options?.listsAsArrays ? fieldArray : fieldArray.join(", ");
          return {
            field: getFieldName(expr.left),
            operator,
            value,
            valueSource: "field"
          };
        }
      }
    } else if (expr.type === "BetweenPredicate") {
      if (isSQLIdentifier(expr.left) && isSQLLiteralValue(expr.right.left) && isSQLLiteralValue(expr.right.right)) {
        const valueArray = [expr.right.left, expr.right.right].map(evalSQLLiteralValue);
        const value = options?.listsAsArrays ? valueArray : valueArray.join(", ");
        const operator = expr.hasNot ? "notBetween" : "between";
        return { field: getFieldName(expr.left), operator, value };
      } else if (isSQLIdentifier(expr.left) && isSQLIdentifier(expr.right.left) && isSQLIdentifier(expr.right.right)) {
        const f = getFieldName(expr.left);
        const valueArray = [expr.right.left, expr.right.right].map(getFieldName);
        const operator = expr.hasNot ? "notBetween" : "between";
        if (valueArray.every((sf) => fieldIsValid(f, operator, sf))) {
          const value = options?.listsAsArrays ? valueArray : valueArray.join(", ");
          return { field: f, operator, value, valueSource: "field" };
        }
      }
    } else if (expr.type === "LikePredicate") {
      if (isSQLIdentifier(expr.left) && expr.right.type === "String") {
        const valueWithWildcards = evalSQLLiteralValue(expr.right);
        const valueWithoutWildcards = valueWithWildcards.replace(/(^%)|(%$)/g, "");
        let operator = "=";
        if (/^%.*%$/.test(valueWithWildcards) || valueWithWildcards === "%") {
          operator = expr.hasNot ? "doesNotContain" : "contains";
        } else if (/%$/.test(valueWithWildcards)) {
          operator = expr.hasNot ? "doesNotBeginWith" : "beginsWith";
        } else if (/^%/.test(valueWithWildcards)) {
          operator = expr.hasNot ? "doesNotEndWith" : "endsWith";
        }
        const f = getFieldName(expr.left);
        if (fieldIsValid(f, operator)) {
          return { field: f, operator, value: valueWithoutWildcards };
        }
      } else if (isSQLIdentifier(expr.left) && (expr.right.type === "StartsWithExpr" || expr.right.type === "EndsWithExpr" || expr.right.type === "ContainsExpr")) {
        let subordinateFieldName = "";
        let operator = "=";
        if (isSQLIdentifier(expr.right.value)) {
          subordinateFieldName = getFieldName(expr.right.value);
        }
        if (expr.right.type === "EndsWithExpr") {
          operator = expr.hasNot ? "doesNotEndWith" : "endsWith";
        } else if (expr.right.type === "StartsWithExpr") {
          operator = expr.hasNot ? "doesNotBeginWith" : "beginsWith";
        } else if (expr.right.type === "ContainsExpr") {
          operator = expr.hasNot ? "doesNotContain" : "contains";
        }
        const baseFieldName = getFieldName(expr.left);
        if (operator !== "=" && fieldIsValid(baseFieldName, operator, subordinateFieldName)) {
          return {
            field: baseFieldName,
            operator,
            value: subordinateFieldName,
            valueSource: "field"
          };
        }
      } else if (isSQLIdentifier(expr.left) && isSQLIdentifier(expr.right)) {
        const baseFieldName = getFieldName(expr.left);
        const subordinateFieldName = getFieldName(expr.right);
        const operator = "=";
        if (fieldIsValid(baseFieldName, operator, subordinateFieldName)) {
          return {
            field: baseFieldName,
            operator,
            value: subordinateFieldName,
            valueSource: "field"
          };
        }
      }
    }
    return null;
  };
  const { where } = sqlParser.parse(sqlString).value;
  if (where) {
    const result = processSQLExpression(where);
    if (result) {
      if ("rules" in result) {
        return result;
      }
      return { rules: [result], ...ic ? {} : { combinator: "and" } };
    }
  }
  return { rules: [], ...ic ? {} : { combinator: "and" } };
}

// src/utils/pathUtils.ts
var findPath = (path, query) => {
  let target = query;
  let level = 0;
  while (level < path.length && target && "rules" in target) {
    const t = target.rules[path[level]];
    if (typeof t !== "string") {
      target = t;
    } else {
      target = null;
    }
    level++;
  }
  return target;
};
var getParentPath = (path) => path.slice(0, path.length - 1);
var pathsAreEqual = (path1, path2) => path1.length === path2.length && path1.every((val, idx) => val === path2[idx]);
var isAncestor = (maybeAncestor, path) => maybeAncestor.length < path.length && RegExp(`^${maybeAncestor.join("-")}`).test(path.join("-"));
var getCommonAncestorPath = (path1, path2) => {
  const commonAncestorPath = [];
  const parentPath1 = getParentPath(path1);
  const parentPath2 = getParentPath(path2);
  let i = 0;
  while (i < parentPath1.length && i < parentPath2.length && parentPath1[i] === parentPath2[i]) {
    commonAncestorPath.push(parentPath2[i]);
    i++;
  }
  return commonAncestorPath;
};
var pathIsDisabled = (path, query) => {
  let disabled = !!query.disabled;
  let target = query;
  let level = 0;
  while (level < path.length && !disabled && "rules" in target) {
    const t = target.rules[path[level]];
    if (isPojo(t) && ("rules" in t || "field" in t)) {
      disabled = !!t.disabled;
      target = t;
    }
    level++;
  }
  return disabled;
};

// src/utils/prepareQueryObjects.ts

var prepareRule = (rule, { idGenerator = generateID } = {}) => produce(rule, (draft) => {
  if (!draft.id) {
    draft.id = idGenerator();
  }
});
var prepareRuleGroup = (queryObject, { idGenerator = generateID } = {}) => produce(queryObject, (draft) => {
  if (!draft.id) {
    draft.id = idGenerator();
  }
  draft.rules = draft.rules.map(
    (r) => typeof r === "string" ? r : "rules" in r ? prepareRuleGroup(r, { idGenerator }) : prepareRule(r, { idGenerator })
  );
});
var prepareRuleOrGroup = (rg, { idGenerator = generateID } = {}) => "rules" in rg ? prepareRuleGroup(rg, { idGenerator }) : prepareRule(rg, { idGenerator });

// src/utils/queryTools.ts


// src/utils/regenerateIDs.ts
var regenerateID = (rule, { idGenerator = generateID } = {}) => JSON.parse(JSON.stringify({ ...rule, id: idGenerator() }));
var regenerateIDs = (ruleOrGroup, { idGenerator = generateID } = {}) => {
  if (!isPojo(ruleOrGroup))
    return ruleOrGroup;
  if (!("rules" in ruleOrGroup)) {
    return JSON.parse(JSON.stringify({ ...ruleOrGroup, id: idGenerator() }));
  }
  if ("combinator" in ruleOrGroup) {
    const rules2 = ruleOrGroup.rules.map(
      (r) => isPojo(r) && "rules" in r ? regenerateIDs(r, { idGenerator }) : regenerateID(r, { idGenerator })
    );
    return { ...ruleOrGroup, id: idGenerator(), rules: rules2 };
  }
  const rules = ruleOrGroup.rules.map(
    (r) => typeof r === "string" ? r : isPojo(r) && "rules" in r ? regenerateIDs(r, { idGenerator }) : regenerateID(r, { idGenerator })
  );
  return { ...ruleOrGroup, id: idGenerator(), rules };
};

// src/utils/queryTools.ts
var add = (query, ruleOrGroup, parentPath, {
  combinators = defaultCombinators,
  combinatorPreceding,
  idGenerator = generateID
} = {}) => produce(query, (draft) => {
  const parent = findPath(parentPath, draft);
  if (!parent || !("rules" in parent))
    return;
  if (!("combinator" in parent) && parent.rules.length > 0) {
    const prevCombinator = parent.rules[parent.rules.length - 2];
    parent.rules.push(
      // @ts-expect-error This is technically a type violation until the next push
      // to the rules array, but that happens immediately and unconditionally so
      // there's no significant risk.
      combinatorPreceding ?? (typeof prevCombinator === "string" ? prevCombinator : getFirstOption(combinators))
    );
  }
  parent.rules.push(prepareRuleOrGroup(ruleOrGroup, { idGenerator }));
});
var update = (query, prop, value, path, {
  resetOnFieldChange = true,
  resetOnOperatorChange = false,
  getRuleDefaultOperator = () => "=",
  getValueSources = () => ["value"],
  getRuleDefaultValue = () => ""
} = {}) => produce(query, (draft) => {
  if (prop === "combinator" && !("combinator" in draft)) {
    const parentRules = findPath(getParentPath(path), draft).rules;
    if (path[path.length - 1] % 2 === 1) {
      parentRules[path[path.length - 1]] = value;
    }
    return;
  }
  const ruleOrGroup = findPath(path, draft);
  if (!ruleOrGroup)
    return;
  const isGroup = "rules" in ruleOrGroup;
  if (ruleOrGroup[prop] === value)
    return;
  if (prop !== "valueSource") {
    ruleOrGroup[prop] = value;
  }
  if (isGroup)
    return;
  let resetValueSource = false;
  let resetValue = false;
  if (resetOnFieldChange && prop === "field") {
    ruleOrGroup.operator = getRuleDefaultOperator(value);
    resetValueSource = true;
    resetValue = true;
  }
  if (resetOnOperatorChange && prop === "operator") {
    resetValueSource = true;
    resetValue = true;
  }
  const defaultValueSource = getValueSources(ruleOrGroup.field, ruleOrGroup.operator)[0];
  if (resetValueSource && ruleOrGroup.valueSource && defaultValueSource !== ruleOrGroup.valueSource || prop === "valueSource" && value !== ruleOrGroup.valueSource) {
    resetValue = !!ruleOrGroup.valueSource || !ruleOrGroup.valueSource && value !== defaultValueSource;
    ruleOrGroup.valueSource = resetValueSource ? defaultValueSource : value;
  }
  if (resetValue) {
    ruleOrGroup.value = getRuleDefaultValue(ruleOrGroup);
  }
});
var remove = (query, path) => {
  if (
    // Can't remove the root group
    path.length === 0 || // Can't independently remove independent combinators
    !("combinator" in query) && !findPath(path, query)
  ) {
    return query;
  }
  return produce(query, (draft) => {
    const index = path[path.length - 1];
    const parent = findPath(getParentPath(path), draft);
    if (parent && "rules" in parent) {
      if (!("combinator" in parent) && parent.rules.length > 1) {
        const idxStartDelete = index === 0 ? 0 : index - 1;
        parent.rules.splice(idxStartDelete, 2);
      } else {
        parent.rules.splice(index, 1);
      }
    }
  });
};
var move = (query, oldPath, newPath, { clone = false, combinators = defaultCombinators, idGenerator = generateID } = {}) => {
  if (pathsAreEqual(oldPath, newPath) || !findPath(getParentPath(newPath), query)) {
    return query;
  }
  const ruleOrGroupOriginal = findPath(oldPath, query);
  if (!ruleOrGroupOriginal) {
    return query;
  }
  const ruleOrGroup = clone ? "rules" in ruleOrGroupOriginal ? regenerateIDs(ruleOrGroupOriginal, { idGenerator }) : regenerateID(ruleOrGroupOriginal, { idGenerator }) : ruleOrGroupOriginal;
  return produce(query, (draft) => {
    const independentCombinators = !("combinator" in draft);
    const parentOfRuleToRemove = findPath(getParentPath(oldPath), draft);
    const ruleToRemoveIndex = oldPath[oldPath.length - 1];
    const oldPrevCombinator = independentCombinators && ruleToRemoveIndex > 0 ? parentOfRuleToRemove.rules[ruleToRemoveIndex - 1] : null;
    const oldNextCombinator = independentCombinators && ruleToRemoveIndex < parentOfRuleToRemove.rules.length - 1 ? parentOfRuleToRemove.rules[ruleToRemoveIndex + 1] : null;
    if (!clone) {
      const idxStartDelete = independentCombinators ? Math.max(0, ruleToRemoveIndex - 1) : ruleToRemoveIndex;
      const deleteLength = independentCombinators ? 2 : 1;
      parentOfRuleToRemove.rules.splice(idxStartDelete, deleteLength);
    }
    const newNewPath = [...newPath];
    const commonAncestorPath = getCommonAncestorPath(oldPath, newPath);
    if (!clone && oldPath.length === commonAncestorPath.length + 1 && newPath[commonAncestorPath.length] > oldPath[commonAncestorPath.length]) {
      newNewPath[commonAncestorPath.length] -= independentCombinators ? 2 : 1;
    }
    const newNewParentPath = getParentPath(newNewPath);
    const parentToInsertInto = findPath(newNewParentPath, draft);
    const newIndex = newNewPath[newNewPath.length - 1];
    const insertRuleOrGroup = (...args) => parentToInsertInto.rules.splice(newIndex, 0, ...args);
    if (parentToInsertInto.rules.length === 0 || !independentCombinators) {
      insertRuleOrGroup(ruleOrGroup);
    } else {
      if (newIndex === 0) {
        if (ruleToRemoveIndex === 0 && oldNextCombinator) {
          insertRuleOrGroup(ruleOrGroup, oldNextCombinator);
        } else {
          const newNextCombinator = parentToInsertInto.rules[1] || oldPrevCombinator || getFirstOption(combinators);
          insertRuleOrGroup(ruleOrGroup, newNextCombinator);
        }
      } else {
        if (oldPrevCombinator) {
          insertRuleOrGroup(oldPrevCombinator, ruleOrGroup);
        } else {
          const newPrevCombinator = parentToInsertInto.rules[newIndex - 2] || oldNextCombinator || getFirstOption(combinators);
          insertRuleOrGroup(newPrevCombinator, ruleOrGroup);
        }
      }
    }
  });
};

// src/utils/toOptions.tsx

var toOptions = (arr) => isOptionGroupArray(arr) ? arr.map((og) => /* @__PURE__ */ react.createElement("optgroup", { key: og.label, label: og.label }, og.options.map((opt) => /* @__PURE__ */ react.createElement("option", { key: opt.name, value: opt.name }, opt.label)))) : Array.isArray(arr) ? arr.map((opt) => /* @__PURE__ */ react.createElement("option", { key: opt.name, value: opt.name }, opt.label)) : null;

// src/utils/transformQuery.ts

var remapProperties = (obj, propertyMap, deleteRemappedProperties) => produce3(obj, (draft) => {
  for (const [k, v] of Object.entries(propertyMap)) {
    if (k !== v) {
      draft[v] = draft[k];
      if (deleteRemappedProperties && Object.hasOwn(draft, k)) {
        delete draft[k];
      }
    }
  }
});
function transformQuery(query, options = {}) {
  const {
    ruleProcessor = (r) => r,
    ruleGroupProcessor = (rg) => rg,
    propertyMap = {},
    combinatorMap = {},
    operatorMap = {},
    deleteRemappedProperties = true
  } = options;
  const processGroup = (rg) => ({
    ...ruleGroupProcessor(
      remapProperties(
        {
          ...rg,
          ..."combinator" in rg ? { combinator: combinatorMap[rg.combinator] ?? rg.combinator } : {}
        },
        propertyMap,
        deleteRemappedProperties
      )
    ),
    rules: rg.rules.map((r, idx) => {
      if (typeof r === "string") {
        return combinatorMap[r] ?? r;
      } else if ("rules" in r) {
        return processGroup({ ...r, path: [...rg.path, idx] });
      }
      return ruleProcessor(
        remapProperties(
          {
            ...{ ...r, path: [...rg.path, idx] },
            operator: operatorMap[r.operator] ?? r.operator
          },
          propertyMap,
          deleteRemappedProperties
        )
      );
    })
  });
  return processGroup({ ...query, path: [] });
}

// src/hooks/useQueryBuilder.ts
var noop = () => {
};
var useQueryBuilder = (props) => {
  const {
    defaultQuery,
    query: queryProp,
    fields: fieldsPropOriginal,
    operators = defaultOperators,
    combinators = defaultCombinators,
    translations: translationsProp = defaultTranslations,
    enableMountQueryChange: enableMountQueryChangeProp = true,
    controlClassnames: controlClassnamesProp,
    controlElements: controlElementsProp,
    getDefaultField,
    getDefaultOperator,
    getDefaultValue,
    getOperators,
    getValueEditorType,
    getValueEditorSeparator = () => null,
    getValueSources,
    getInputType,
    getValues,
    getRuleClassname = () => "",
    getRuleGroupClassname = () => "",
    onAddRule = (r) => r,
    onAddGroup = (rg) => rg,
    onRemove = () => true,
    onQueryChange = noop,
    showCombinatorsBetweenRules = false,
    showNotToggle = false,
    showCloneButtons = false,
    showLockButtons = false,
    resetOnFieldChange = true,
    resetOnOperatorChange = false,
    autoSelectField = true,
    autoSelectOperator = true,
    addRuleToNewGroups = false,
    enableDragAndDrop: enableDragAndDropProp,
    independentCombinators,
    listsAsArrays = false,
    parseNumbers = false,
    disabled = false,
    validator,
    debugMode: debugModeProp = false,
    onLog = console.log,
    idGenerator = generateID
  } = props;
  const rqbContext = useMergedContext({
    controlClassnames: controlClassnamesProp,
    controlElements: controlElementsProp,
    debugMode: debugModeProp,
    enableDragAndDrop: enableDragAndDropProp,
    enableMountQueryChange: enableMountQueryChangeProp,
    translations: translationsProp
  });
  const {
    controlClassnames,
    controlElements,
    debugMode,
    enableDragAndDrop,
    enableMountQueryChange,
    translations
  } = rqbContext;
  const defaultField = (0,react.useMemo)(
    () => ({
      id: translations.fields.placeholderName,
      name: translations.fields.placeholderName,
      label: translations.fields.placeholderLabel
    }),
    [translations.fields.placeholderLabel, translations.fields.placeholderName]
  );
  const fieldsProp = (0,react.useMemo)(
    () => fieldsPropOriginal ?? [defaultField],
    [defaultField, fieldsPropOriginal]
  );
  const fields = (0,react.useMemo)(() => {
    const f = Array.isArray(fieldsProp) ? fieldsProp : objectKeys(fieldsProp).map((fld) => ({ ...fieldsProp[fld], name: fld })).sort((a, b) => a.label.localeCompare(b.label));
    if (isOptionGroupArray(f)) {
      if (autoSelectField) {
        return uniqOptGroups(f);
      } else {
        return uniqOptGroups([
          {
            label: translations.fields.placeholderGroupLabel,
            options: [defaultField]
          },
          ...f
        ]);
      }
    } else {
      if (autoSelectField) {
        return uniqByName(f);
      } else {
        return uniqByName([defaultField, ...f]);
      }
    }
  }, [autoSelectField, defaultField, fieldsProp, translations.fields.placeholderGroupLabel]);
  const fieldMap = (0,react.useMemo)(() => {
    if (!Array.isArray(fieldsProp)) {
      const fp = {};
      objectKeys(fieldsProp).forEach((f) => fp[f] = { ...fieldsProp[f], name: f });
      if (autoSelectField) {
        return fp;
      } else {
        return { ...fp, [translations.fields.placeholderName]: defaultField };
      }
    }
    const fm = {};
    if (isOptionGroupArray(fields)) {
      fields.forEach((f) => f.options.forEach((opt) => fm[opt.name] = opt));
    } else {
      fields.forEach((f) => fm[f.name] = f);
    }
    return fm;
  }, [autoSelectField, defaultField, fields, fieldsProp, translations.fields.placeholderName]);
  const defaultOperator = (0,react.useMemo)(
    () => ({
      id: translations.operators.placeholderName,
      name: translations.operators.placeholderName,
      label: translations.operators.placeholderLabel
    }),
    [translations.operators.placeholderLabel, translations.operators.placeholderName]
  );
  const getOperatorsMain = (0,react.useCallback)(
    (field) => {
      const fieldData = fieldMap[field];
      let opsFinal = operators;
      if (fieldData?.operators) {
        opsFinal = fieldData.operators;
      } else if (getOperators) {
        const ops = getOperators(field);
        if (ops) {
          opsFinal = ops;
        }
      }
      if (!autoSelectOperator) {
        if (isOptionGroupArray(opsFinal)) {
          opsFinal = [
            {
              label: translations.operators.placeholderGroupLabel,
              options: [defaultOperator]
            },
            ...opsFinal
          ];
        } else {
          opsFinal = [defaultOperator, ...opsFinal];
        }
      }
      return isOptionGroupArray(opsFinal) ? uniqOptGroups(opsFinal) : uniqByName(opsFinal);
    },
    [
      autoSelectOperator,
      defaultOperator,
      fieldMap,
      getOperators,
      operators,
      translations.operators.placeholderGroupLabel
    ]
  );
  const getRuleDefaultOperator = (0,react.useCallback)(
    (field) => {
      const fieldData = fieldMap[field];
      if (fieldData?.defaultOperator) {
        return fieldData.defaultOperator;
      }
      if (getDefaultOperator) {
        if (typeof getDefaultOperator === "function") {
          return getDefaultOperator(field);
        } else {
          return getDefaultOperator;
        }
      }
      const ops = getOperatorsMain(field) ?? /* istanbul ignore next */
      [];
      return ops.length ? getFirstOption(ops) ?? /* istanbul ignore next */
      "" : (
        /* istanbul ignore next */
        ""
      );
    },
    [fieldMap, getDefaultOperator, getOperatorsMain]
  );
  const getValueEditorTypeMain = (0,react.useCallback)(
    (field, operator) => {
      if (getValueEditorType) {
        const vet = getValueEditorType(field, operator);
        if (vet)
          return vet;
      }
      return "text";
    },
    [getValueEditorType]
  );
  const getValueSourcesMain = (0,react.useCallback)(
    (field, operator) => getValueSourcesUtil(fieldMap[field], operator, getValueSources),
    [fieldMap, getValueSources]
  );
  const getValuesMain = (0,react.useCallback)(
    (field, operator) => {
      const fieldData = fieldMap[field];
      if (fieldData?.values) {
        return fieldData.values;
      }
      if (getValues) {
        const vals = getValues(field, operator);
        if (vals)
          return vals;
      }
      return [];
    },
    [fieldMap, getValues]
  );
  const getRuleDefaultValue = (0,react.useCallback)(
    (rule) => {
      const fieldData = fieldMap[rule.field];
      if (fieldData?.defaultValue !== void 0 && fieldData.defaultValue !== null) {
        return fieldData.defaultValue;
      } else if (getDefaultValue) {
        return getDefaultValue(rule);
      }
      let value = "";
      const values = getValuesMain(rule.field, rule.operator);
      const getFirstOptionsFrom = (opts) => {
        const firstOption = getFirstOption(opts);
        if (rule.operator === "between" || rule.operator === "notBetween") {
          const valueAsArray = [firstOption, firstOption];
          return listsAsArrays ? valueAsArray : joinWith(
            valueAsArray.map((v) => v ?? /* istanbul ignore next */
            ""),
            ","
          );
        } else {
          return firstOption;
        }
      };
      if (rule.valueSource === "field") {
        const filteredFields = filterFieldsByComparator(fieldData, fields, rule.operator);
        if (filteredFields.length > 0) {
          value = getFirstOptionsFrom(filteredFields);
        } else {
          value = "";
        }
      } else if (values.length) {
        value = getFirstOptionsFrom(values);
      } else {
        const editorType = getValueEditorTypeMain(rule.field, rule.operator);
        if (editorType === "checkbox") {
          value = false;
        }
      }
      return value;
    },
    [fieldMap, fields, getDefaultValue, getValueEditorTypeMain, getValuesMain, listsAsArrays]
  );
  const getInputTypeMain = (0,react.useCallback)(
    (field, operator) => {
      if (getInputType) {
        const inputType = getInputType(field, operator);
        if (inputType)
          return inputType;
      }
      return "text";
    },
    [getInputType]
  );
  const createRule = (0,react.useCallback)(() => {
    let field = "";
    if (fields?.length > 0 && fields[0]) {
      field = getFirstOption(fields) ?? /* istanbul ignore next */
      "";
    }
    if (getDefaultField) {
      if (typeof getDefaultField === "function") {
        field = getDefaultField(fields);
      } else {
        field = getDefaultField;
      }
    }
    const operator = getRuleDefaultOperator(field);
    const valueSource = getValueSourcesMain(field, operator)[0] ?? "value";
    const newRule = {
      id: idGenerator(),
      field,
      operator,
      valueSource,
      value: ""
    };
    const value = getRuleDefaultValue(newRule);
    return { ...newRule, value };
  }, [
    fields,
    getDefaultField,
    getRuleDefaultOperator,
    getRuleDefaultValue,
    getValueSourcesMain,
    idGenerator
  ]);
  const createRuleGroup = (0,react.useCallback)(() => {
    if (independentCombinators) {
      return {
        id: idGenerator(),
        rules: addRuleToNewGroups ? [createRule()] : [],
        not: false
      };
    }
    return {
      id: idGenerator(),
      rules: addRuleToNewGroups ? [createRule()] : [],
      combinator: getFirstOption(combinators) ?? /* istanbul ignore next */
      "",
      not: false
    };
  }, [addRuleToNewGroups, combinators, createRule, idGenerator, independentCombinators]);
  const isFirstRender = (0,react.useRef)(true);
  const [queryState, setQueryState] = (0,react.useState)(
    defaultQuery ? prepareRuleGroup(defaultQuery, { idGenerator }) : createRuleGroup()
  );
  const query = queryProp ? isFirstRender.current ? prepareRuleGroup(queryProp, { idGenerator }) : queryProp : queryState;
  useControlledOrUncontrolled({
    defaultQuery,
    queryProp,
    isFirstRender: isFirstRender.current
  });
  isFirstRender.current = false;
  (0,react.useEffect)(() => {
    if (enableMountQueryChange) {
      onQueryChange(query);
    }
  }, []);
  const uncontrolled = !queryProp;
  const dispatch = (0,react.useCallback)(
    (newQuery) => {
      if (uncontrolled) {
        setQueryState(newQuery);
      }
      onQueryChange(newQuery);
    },
    [onQueryChange, uncontrolled]
  );
  const queryDisabled = (0,react.useMemo)(
    () => disabled === true || Array.isArray(disabled) && disabled.some((p) => p.length === 0),
    [disabled]
  );
  const disabledPaths = (0,react.useMemo)(() => Array.isArray(disabled) && disabled || [], [disabled]);
  const onRuleAdd = (rule, parentPath, context) => {
    if (pathIsDisabled(parentPath, query) || queryDisabled) {
      if (debugMode) {
        onLog({ type: LogType.parentPathDisabled, rule, parentPath, query });
      }
      return;
    }
    const newRule = onAddRule(rule, parentPath, query, context);
    if (!newRule) {
      if (debugMode) {
        onLog({ type: LogType.onAddRuleFalse, rule, parentPath, query });
      }
      return;
    }
    const newQuery = add(query, newRule, parentPath, {
      combinators,
      combinatorPreceding: newRule.combinatorPreceding ?? void 0
    });
    if (debugMode) {
      onLog({ type: LogType.add, query, newQuery, newRule, parentPath });
    }
    dispatch(newQuery);
  };
  const onGroupAdd = (ruleGroup, parentPath, context) => {
    if (pathIsDisabled(parentPath, query) || queryDisabled) {
      if (debugMode) {
        onLog({
          type: LogType.parentPathDisabled,
          ruleGroup,
          parentPath,
          query
        });
      }
      return;
    }
    const newGroup = onAddGroup(ruleGroup, parentPath, query, context);
    if (!newGroup) {
      if (debugMode) {
        onLog({ type: LogType.onAddGroupFalse, ruleGroup, parentPath, query });
      }
      return;
    }
    const newQuery = add(query, newGroup, parentPath, {
      combinators,
      combinatorPreceding: newGroup.combinatorPreceding ?? void 0
    });
    if (debugMode) {
      onLog({ type: LogType.add, query, newQuery, newGroup, parentPath });
    }
    dispatch(newQuery);
  };
  const onPropChange = (prop, value, path) => {
    if (pathIsDisabled(path, query) && prop !== "disabled" || queryDisabled) {
      if (debugMode) {
        onLog({ type: LogType.pathDisabled, path, prop, value, query });
      }
      return;
    }
    const newQuery = update(query, prop, value, path, {
      resetOnFieldChange,
      resetOnOperatorChange,
      getRuleDefaultOperator,
      getValueSources: getValueSourcesMain,
      getRuleDefaultValue
    });
    if (debugMode) {
      onLog({ type: LogType.update, query, newQuery, prop, value, path });
    }
    dispatch(newQuery);
  };
  const onRuleOrGroupRemove = (path, context) => {
    if (pathIsDisabled(path, query) || queryDisabled) {
      if (debugMode) {
        onLog({ type: LogType.pathDisabled, path, query });
      }
      return;
    }
    const ruleOrGroup = findPath(path, query);
    if (ruleOrGroup) {
      if (onRemove(ruleOrGroup, path, query, context)) {
        const newQuery = remove(query, path);
        if (debugMode) {
          onLog({ type: LogType.remove, query, newQuery, path, ruleOrGroup });
        }
        dispatch(newQuery);
      } else {
        if (debugMode) {
          onLog({ type: LogType.onRemoveFalse, ruleOrGroup, path, query });
        }
      }
    }
  };
  const moveRule = (oldPath, newPath, clone) => {
    if (pathIsDisabled(oldPath, query) || queryDisabled) {
      if (debugMode) {
        onLog({ type: LogType.pathDisabled, oldPath, newPath, query });
      }
      return;
    }
    const newQuery = move(query, oldPath, newPath, { clone, combinators });
    if (debugMode) {
      onLog({ type: LogType.move, query, newQuery, oldPath, newPath, clone });
    }
    dispatch(newQuery);
  };
  const { validationResult, validationMap } = (0,react.useMemo)(() => {
    const validationResult2 = typeof validator === "function" ? validator(query) : {};
    const validationMap2 = typeof validationResult2 === "object" ? validationResult2 : {};
    return { validationResult: validationResult2, validationMap: validationMap2 };
  }, [query, validator]);
  const schema = (0,react.useMemo)(
    () => ({
      fields,
      fieldMap,
      combinators,
      classNames: controlClassnames,
      createRule,
      createRuleGroup,
      controls: controlElements,
      getOperators: getOperatorsMain,
      getValueEditorType: getValueEditorTypeMain,
      getValueSources: getValueSourcesMain,
      getInputType: getInputTypeMain,
      getValues: getValuesMain,
      getValueEditorSeparator,
      getRuleClassname,
      getRuleGroupClassname,
      showCombinatorsBetweenRules,
      showNotToggle,
      showCloneButtons,
      showLockButtons,
      autoSelectField,
      autoSelectOperator,
      addRuleToNewGroups,
      enableDragAndDrop,
      independentCombinators: !!independentCombinators,
      listsAsArrays,
      parseNumbers,
      validationMap,
      disabledPaths
    }),
    [
      addRuleToNewGroups,
      autoSelectField,
      autoSelectOperator,
      combinators,
      controlClassnames,
      controlElements,
      createRule,
      createRuleGroup,
      disabledPaths,
      enableDragAndDrop,
      fieldMap,
      fields,
      getInputTypeMain,
      getOperatorsMain,
      getRuleClassname,
      getRuleGroupClassname,
      getValueEditorTypeMain,
      getValuesMain,
      getValueSourcesMain,
      getValueEditorSeparator,
      independentCombinators,
      listsAsArrays,
      parseNumbers,
      showCloneButtons,
      showCombinatorsBetweenRules,
      showLockButtons,
      showNotToggle,
      validationMap
    ]
  );
  const actions = {
    onRuleAdd,
    onGroupAdd,
    onRuleRemove: onRuleOrGroupRemove,
    onGroupRemove: onRuleOrGroupRemove,
    onPropChange,
    moveRule
  };
  const wrapperClassName = (0,react.useMemo)(
    () => clsx(standardClassnames.queryBuilder, clsx(controlClassnames.queryBuilder), {
      [standardClassnames.disabled]: query.disabled || queryDisabled,
      [standardClassnames.valid]: typeof validationResult === "boolean" && validationResult,
      [standardClassnames.invalid]: typeof validationResult === "boolean" && !validationResult
    }),
    [controlClassnames.queryBuilder, queryDisabled, query.disabled, validationResult]
  );
  return {
    actions,
    query,
    queryDisabled,
    rqbContext,
    schema,
    translations,
    wrapperClassName
  };
};

// src/hooks/useRule.ts


var useRule = (props) => {
  const {
    id,
    path,
    rule: ruleProp,
    schema,
    actions,
    disabled: disabledProp,
    parentDisabled,
    field: fieldProp,
    operator: operatorProp,
    value: valueProp,
    valueSource: valueSourceProp,
    dragMonitorId = "",
    dropMonitorId = "",
    dndRef = null,
    dragRef = null,
    isDragging = false,
    isOver = false
  } = props;
  const {
    classNames: classNamesProp,
    fields,
    fieldMap,
    getInputType,
    getOperators,
    getValueEditorType,
    getValueEditorSeparator,
    getValueSources,
    getValues,
    validationMap,
    enableDragAndDrop,
    getRuleClassname
  } = schema;
  const { moveRule, onPropChange, onRuleRemove } = actions;
  const disabled = !!parentDisabled || !!disabledProp;
  const rule = ruleProp ? ruleProp : {
    field: fieldProp,
    operator: operatorProp,
    value: valueProp,
    valueSource: valueSourceProp
  };
  const { field, operator, value, valueSource } = rule;
  useDeprecatedProps("rule", !!ruleProp);
  useReactDndWarning(enableDragAndDrop, !!(dragMonitorId || dropMonitorId || dndRef || dragRef));
  const classNames = (0,react.useMemo)(
    () => ({
      dragHandle: clsx(standardClassnames.dragHandle, classNamesProp.dragHandle),
      fields: clsx(standardClassnames.fields, classNamesProp.fields),
      operators: clsx(standardClassnames.operators, classNamesProp.operators),
      valueSource: clsx(standardClassnames.valueSource, classNamesProp.valueSource),
      value: clsx(standardClassnames.value, classNamesProp.value),
      cloneRule: clsx(standardClassnames.cloneRule, classNamesProp.cloneRule),
      lockRule: clsx(standardClassnames.lockRule, classNamesProp.lockRule),
      removeRule: clsx(standardClassnames.removeRule, classNamesProp.removeRule)
    }),
    [
      classNamesProp.dragHandle,
      classNamesProp.fields,
      classNamesProp.operators,
      classNamesProp.valueSource,
      classNamesProp.value,
      classNamesProp.cloneRule,
      classNamesProp.lockRule,
      classNamesProp.removeRule
    ]
  );
  const generateOnChangeHandler = (prop) => (value2) => {
    if (!disabled) {
      onPropChange(prop, value2, path);
    }
  };
  const cloneRule = (_event) => {
    if (!disabled) {
      const newPath = [...getParentPath(path), path[path.length - 1] + 1];
      moveRule(path, newPath, true);
    }
  };
  const toggleLockRule = (_event) => {
    onPropChange("disabled", !disabled, path);
  };
  const removeRule = (_event) => {
    if (!disabled) {
      onRuleRemove(path);
    }
  };
  const fieldData = fieldMap?.[field] ?? { name: field, label: field };
  const inputType = fieldData.inputType ?? getInputType(field, operator);
  const operators = getOperators(field);
  const operatorObject = getOption(operators, operator);
  const arity = operatorObject?.arity;
  const hideValueControls = typeof arity === "string" && arity === "unary" || typeof arity === "number" && arity < 2;
  const valueSources = typeof fieldData.valueSources === "function" ? fieldData.valueSources(operator) : fieldData.valueSources ?? getValueSources(field, operator);
  const valueEditorType = valueSource === "field" ? "select" : (typeof fieldData.valueEditorType === "function" ? fieldData.valueEditorType(operator) : fieldData.valueEditorType) ?? getValueEditorType(field, operator);
  const valueEditorSeparator = getValueEditorSeparator(field, operator);
  const values = valueSource === "field" ? filterFieldsByComparator(fieldData, fields, operator) : fieldData.values ?? getValues(field, operator);
  const valueSourceOptions = valueSources.map((vs) => ({ name: vs, label: vs }));
  const validationResult = validationMap[id ?? /* istanbul ignore next */
  ""] ?? (typeof fieldData.validator === "function" ? fieldData.validator({ id, field, operator, value }) : null);
  const validationClassName = getValidationClassNames(validationResult);
  const fieldBasedClassName = (0,react.useMemo)(() => fieldData?.className ?? "", [fieldData?.className]);
  const operatorBasedClassName = (0,react.useMemo)(
    () => operatorObject?.className ?? "",
    [operatorObject?.className]
  );
  const outerClassName = clsx(
    getRuleClassname(rule),
    fieldBasedClassName,
    operatorBasedClassName,
    standardClassnames.rule,
    classNamesProp.rule,
    {
      [standardClassnames.disabled]: disabled,
      [standardClassnames.dndDragging]: isDragging,
      [standardClassnames.dndOver]: isOver
    },
    validationClassName
  );
  return {
    classNames,
    cloneRule,
    disabled,
    dndRef,
    dragMonitorId,
    dragRef,
    dropMonitorId,
    fieldData,
    generateOnChangeHandler,
    hideValueControls,
    inputType,
    operators,
    outerClassName,
    removeRule,
    rule,
    toggleLockRule,
    validationResult,
    valueEditorSeparator,
    valueEditorType,
    values,
    valueSourceOptions,
    valueSources
  };
};

// src/hooks/useRuleGroup.ts


var useRuleGroup = (props) => {
  const {
    id,
    path,
    ruleGroup: ruleGroupProp,
    schema,
    actions,
    disabled: disabledProp,
    parentDisabled,
    combinator: combinatorProp,
    rules: rulesProp,
    not: notProp,
    // Drag-and-drop
    dragMonitorId = "",
    dropMonitorId = "",
    previewRef = null,
    dragRef = null,
    dropRef = null,
    isDragging = false,
    isOver = false
  } = props;
  const {
    classNames: classNamesProp,
    combinators,
    createRule,
    createRuleGroup,
    independentCombinators,
    validationMap,
    enableDragAndDrop,
    getRuleGroupClassname
  } = schema;
  const { onGroupAdd, onGroupRemove, onPropChange, onRuleAdd, moveRule } = actions;
  const disabled = !!parentDisabled || !!disabledProp;
  const ruleGroup = ruleGroupProp ? { ...ruleGroupProp } : { rules: rulesProp, not: notProp };
  const firstCombinator = getFirstOption(combinators);
  const combinator = ruleGroupProp && "combinator" in ruleGroupProp ? ruleGroupProp.combinator : !ruleGroupProp ? combinatorProp ?? firstCombinator : firstCombinator;
  if (!independentCombinators) {
    ruleGroup.combinator = combinator;
  }
  useDeprecatedProps("ruleGroup", !!ruleGroupProp);
  const classNames = (0,react.useMemo)(
    () => ({
      header: clsx(standardClassnames.header, classNamesProp.header, {
        [standardClassnames.dndOver]: isOver
      }),
      dragHandle: clsx(standardClassnames.dragHandle, classNamesProp.dragHandle),
      combinators: clsx(standardClassnames.combinators, classNamesProp.combinators),
      notToggle: clsx(standardClassnames.notToggle, classNamesProp.notToggle),
      addRule: clsx(standardClassnames.addRule, classNamesProp.addRule),
      addGroup: clsx(standardClassnames.addGroup, classNamesProp.addGroup),
      cloneGroup: clsx(standardClassnames.cloneGroup, classNamesProp.cloneGroup),
      lockGroup: clsx(standardClassnames.lockGroup, classNamesProp.lockGroup),
      removeGroup: clsx(standardClassnames.removeGroup, classNamesProp.removeGroup),
      body: clsx(standardClassnames.body, classNamesProp.body)
    }),
    [
      classNamesProp.addGroup,
      classNamesProp.addRule,
      classNamesProp.body,
      classNamesProp.cloneGroup,
      classNamesProp.combinators,
      classNamesProp.dragHandle,
      classNamesProp.header,
      classNamesProp.lockGroup,
      classNamesProp.notToggle,
      classNamesProp.removeGroup,
      isOver
    ]
  );
  useReactDndWarning(
    enableDragAndDrop,
    !!(dragMonitorId || dropMonitorId || previewRef || dragRef || dropRef)
  );
  const onCombinatorChange = (value) => {
    if (!disabled) {
      onPropChange("combinator", value, path);
    }
  };
  const onIndependentCombinatorChange = (value, index) => {
    if (!disabled) {
      onPropChange("combinator", value, path.concat([index]));
    }
  };
  const onNotToggleChange = (checked) => {
    if (!disabled) {
      onPropChange("not", checked, path);
    }
  };
  const addRule = (_event, context) => {
    if (!disabled) {
      const newRule = createRule();
      onRuleAdd(newRule, path, context);
    }
  };
  const addGroup = (_event, context) => {
    if (!disabled) {
      const newGroup = createRuleGroup();
      onGroupAdd(newGroup, path, context);
    }
  };
  const cloneGroup = (_event) => {
    if (!disabled) {
      const newPath = [...getParentPath(path), path[path.length - 1] + 1];
      moveRule(path, newPath, true);
    }
  };
  const toggleLockGroup = (_event) => {
    onPropChange("disabled", !disabled, path);
  };
  const removeGroup = (_event) => {
    if (!disabled) {
      onGroupRemove(path);
    }
  };
  const validationResult = validationMap[id ?? /* istanbul ignore next */
  ""];
  const validationClassName = getValidationClassNames(validationResult);
  const combinatorBasedClassName = (0,react.useMemo)(
    () => independentCombinators ? null : getOption(combinators, combinator)?.className ?? "",
    [combinator, combinators, independentCombinators]
  );
  const outerClassName = clsx(
    getRuleGroupClassname(ruleGroup),
    combinatorBasedClassName,
    standardClassnames.ruleGroup,
    classNamesProp.ruleGroup,
    {
      [standardClassnames.disabled]: disabled,
      [standardClassnames.dndDragging]: isDragging
    },
    validationClassName
  );
  return {
    addGroup,
    addRule,
    classNames,
    cloneGroup,
    combinator,
    disabled,
    dragMonitorId,
    dragRef,
    dropMonitorId,
    dropRef,
    isDragging,
    isOver,
    onCombinatorChange,
    onGroupAdd,
    onIndependentCombinatorChange,
    onNotToggleChange,
    outerClassName,
    parentDisabled,
    previewRef,
    removeGroup,
    ruleGroup,
    toggleLockGroup,
    validationClassName,
    validationResult
  };
};

// src/hooks/useSelectElementChangeHandler.ts

var useSelectElementChangeHandler = ({
  multiple,
  onChange
}) => {
  const selectElementChangeHandler = (0,react.useMemo)(
    () => multiple ? (e) => onChange(Array.from(e.target.selectedOptions).map((o) => o.value)) : (e) => onChange(e.target.value),
    [multiple, onChange]
  );
  return selectElementChangeHandler;
};

// src/hooks/useValueEditor.ts


var useValueEditor = ({
  handleOnChange,
  inputType,
  operator,
  value,
  listsAsArrays,
  parseNumbers,
  values,
  skipHook
}) => {
  (0,react.useEffect)(() => {
    if (skipHook)
      return;
    if (inputType === "number" && !["between", "notBetween", "in", "notIn"].includes(operator) && (typeof value === "string" && value.includes(",") || Array.isArray(value))) {
      handleOnChange(toArray(value)[0] ?? "");
    }
  }, [handleOnChange, inputType, operator, skipHook, value]);
  const valueAsArray = (0,react.useMemo)(() => toArray(value), [value]);
  const multiValueHandler = (0,react.useCallback)(
    (v, i) => {
      const val = produce(valueAsArray, (va) => {
        va[i] = parseNumber(v, { parseNumbers });
        if (i === 0 && (operator === "between" || operator === "notBetween") && !va[1]) {
          va[1] = getFirstOption(values);
        }
      });
      handleOnChange(listsAsArrays ? val : joinWith(val, ","));
    },
    [handleOnChange, listsAsArrays, operator, parseNumbers, valueAsArray, values]
  );
  return {
    /**
     * Array of values for when the main value represents a list, e.g. when operator
     * is "between" or "in".
     */
    valueAsArray,
    /**
     * A handler for a series of editors, e.g. when operator is "between".
     * @param {string} val The new value for the editor
     * @param {number} idx The index of the editor
     */
    multiValueHandler
  };
};

// src/hooks/useValueSelector.ts

var useValueSelector = ({
  handleOnChange,
  listsAsArrays = false,
  multiple = false,
  value
}) => {
  const onChange = (0,react.useCallback)(
    (v) => {
      if (multiple) {
        const valueAsArray = toArray(v);
        handleOnChange(listsAsArrays ? valueAsArray : joinWith(valueAsArray, ","));
      } else {
        handleOnChange(v);
      }
    },
    [handleOnChange, listsAsArrays, multiple]
  );
  const val = (0,react.useMemo)(() => multiple ? toArray(value) : value, [multiple, value]);
  return {
    /**
     * Memoized change handler for value selectors
     */
    onChange,
    /**
     * The value as provided or, if appropriate, as an array
     */
    val
  };
};

// src/components/Rule.tsx
var Rule = (props) => {
  const r = { ...props, ...useRule(props) };
  const [cloneRule, toggleLockRule, removeRule] = [r.cloneRule, r.toggleLockRule, r.removeRule].map(
    (f) => (event) => {
      event.preventDefault();
      event.stopPropagation();
      f();
    }
  );
  return /* @__PURE__ */ react.createElement(
    "div",
    {
      ref: r.dndRef,
      "data-testid": TestID.rule,
      "data-dragmonitorid": r.dragMonitorId,
      "data-dropmonitorid": r.dropMonitorId,
      className: r.outerClassName,
      "data-rule-id": r.id,
      "data-level": r.path.length,
      "data-path": JSON.stringify(r.path)
    },
    /* @__PURE__ */ react.createElement(RuleComponents, { ...r, ...{ cloneRule, toggleLockRule, removeRule } })
  );
};
Rule.displayName = "Rule";
var RuleComponents = (r) => {
  const {
    schema: {
      controls: {
        dragHandle: DragHandleControlElement,
        fieldSelector: FieldSelectorControlElement,
        operatorSelector: OperatorSelectorControlElement,
        valueSourceSelector: ValueSourceSelectorControlElement,
        valueEditor: ValueEditorControlElement,
        cloneRuleAction: CloneRuleActionControlElement,
        lockRuleAction: LockRuleActionControlElement,
        removeRuleAction: RemoveRuleActionControlElement
      }
    }
  } = r;
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    DragHandleControlElement,
    {
      testID: TestID.dragHandle,
      ref: r.dragRef,
      level: r.path.length,
      path: r.path,
      title: r.translations.dragHandle.title,
      label: r.translations.dragHandle.label,
      className: r.classNames.dragHandle,
      disabled: r.disabled,
      context: r.context,
      validation: r.validationResult,
      schema: r.schema
    }
  ), /* @__PURE__ */ react.createElement(
    FieldSelectorControlElement,
    {
      testID: TestID.fields,
      options: r.schema.fields,
      title: r.translations.fields.title,
      value: r.rule.field,
      operator: r.rule.operator,
      className: r.classNames.fields,
      handleOnChange: r.generateOnChangeHandler("field"),
      level: r.path.length,
      path: r.path,
      disabled: r.disabled,
      context: r.context,
      validation: r.validationResult,
      schema: r.schema
    }
  ), (r.schema.autoSelectField || r.rule.field !== r.translations.fields.placeholderName) && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    OperatorSelectorControlElement,
    {
      testID: TestID.operators,
      field: r.rule.field,
      fieldData: r.fieldData,
      title: r.translations.operators.title,
      options: r.operators,
      value: r.rule.operator,
      className: r.classNames.operators,
      handleOnChange: r.generateOnChangeHandler("operator"),
      level: r.path.length,
      path: r.path,
      disabled: r.disabled,
      context: r.context,
      validation: r.validationResult,
      schema: r.schema
    }
  ), (r.schema.autoSelectOperator || r.rule.operator !== r.translations.operators.placeholderName) && !r.hideValueControls && /* @__PURE__ */ react.createElement(react.Fragment, null, !["null", "notNull"].includes(r.rule.operator) && r.valueSources.length > 1 && /* @__PURE__ */ react.createElement(
    ValueSourceSelectorControlElement,
    {
      testID: TestID.valueSourceSelector,
      field: r.rule.field,
      fieldData: r.fieldData,
      title: r.translations.valueSourceSelector.title,
      options: r.valueSourceOptions,
      value: r.rule.valueSource ?? "value",
      className: r.classNames.valueSource,
      handleOnChange: r.generateOnChangeHandler("valueSource"),
      level: r.path.length,
      path: r.path,
      disabled: r.disabled,
      context: r.context,
      validation: r.validationResult,
      schema: r.schema
    }
  ), /* @__PURE__ */ react.createElement(
    ValueEditorControlElement,
    {
      testID: TestID.valueEditor,
      field: r.rule.field,
      fieldData: r.fieldData,
      title: r.translations.value.title,
      operator: r.rule.operator,
      value: r.rule.value,
      valueSource: r.rule.valueSource ?? "value",
      type: r.valueEditorType,
      inputType: r.inputType,
      values: r.values,
      listsAsArrays: r.schema.listsAsArrays,
      parseNumbers: r.schema.parseNumbers,
      separator: r.valueEditorSeparator,
      className: r.classNames.value,
      handleOnChange: r.generateOnChangeHandler("value"),
      level: r.path.length,
      path: r.path,
      disabled: r.disabled,
      context: r.context,
      validation: r.validationResult,
      schema: r.schema
    }
  ))), r.schema.showCloneButtons && /* @__PURE__ */ react.createElement(
    CloneRuleActionControlElement,
    {
      testID: TestID.cloneRule,
      label: r.translations.cloneRule.label,
      title: r.translations.cloneRule.title,
      className: r.classNames.cloneRule,
      handleOnClick: r.cloneRule,
      level: r.path.length,
      path: r.path,
      disabled: r.disabled,
      context: r.context,
      validation: r.validationResult,
      ruleOrGroup: r.rule,
      schema: r.schema
    }
  ), r.schema.showLockButtons && /* @__PURE__ */ react.createElement(
    LockRuleActionControlElement,
    {
      testID: TestID.lockRule,
      label: r.translations.lockRule.label,
      title: r.translations.lockRule.title,
      className: r.classNames.lockRule,
      handleOnClick: r.toggleLockRule,
      level: r.path.length,
      path: r.path,
      disabled: r.disabled,
      disabledTranslation: r.parentDisabled ? void 0 : r.translations.lockRuleDisabled,
      context: r.context,
      validation: r.validationResult,
      ruleOrGroup: r.rule,
      schema: r.schema
    }
  ), /* @__PURE__ */ react.createElement(
    RemoveRuleActionControlElement,
    {
      testID: TestID.removeRule,
      label: r.translations.removeRule.label,
      title: r.translations.removeRule.title,
      className: r.classNames.removeRule,
      handleOnClick: r.removeRule,
      level: r.path.length,
      path: r.path,
      disabled: r.disabled,
      context: r.context,
      validation: r.validationResult,
      ruleOrGroup: r.rule,
      schema: r.schema
    }
  ));
};

// src/components/RuleGroup.tsx


var RuleGroup = (props) => {
  const rg = { ...props, ...useRuleGroup(props) };
  const [addRule, addGroup, cloneGroup, toggleLockGroup, removeGroup] = [
    rg.addRule,
    rg.addGroup,
    rg.cloneGroup,
    rg.toggleLockGroup,
    rg.removeGroup
  ].map((f) => (event, context) => {
    event.preventDefault();
    event.stopPropagation();
    f(event, context);
  });
  const subComponentProps = { ...rg, addRule, addGroup, cloneGroup, toggleLockGroup, removeGroup };
  return /* @__PURE__ */ react.createElement(
    "div",
    {
      ref: rg.previewRef,
      className: rg.outerClassName,
      "data-testid": TestID.ruleGroup,
      "data-dragmonitorid": rg.dragMonitorId,
      "data-dropmonitorid": rg.dropMonitorId,
      "data-rule-group-id": rg.id,
      "data-level": rg.path.length,
      "data-path": JSON.stringify(rg.path)
    },
    /* @__PURE__ */ react.createElement("div", { ref: rg.dropRef, className: rg.classNames.header }, /* @__PURE__ */ react.createElement(RuleGroupHeaderComponents, { ...subComponentProps })),
    /* @__PURE__ */ react.createElement("div", { className: rg.classNames.body }, /* @__PURE__ */ react.createElement(RuleGroupBodyComponents, { ...subComponentProps }))
  );
};
RuleGroup.displayName = "RuleGroup";
var RuleGroupHeaderComponents = (rg) => {
  const {
    schema: {
      controls: {
        dragHandle: DragHandleControlElement,
        combinatorSelector: CombinatorSelectorControlElement,
        notToggle: NotToggleControlElement,
        addRuleAction: AddRuleActionControlElement,
        addGroupAction: AddGroupActionControlElement,
        cloneGroupAction: CloneGroupActionControlElement,
        lockGroupAction: LockGroupActionControlElement,
        removeGroupAction: RemoveGroupActionControlElement
      }
    }
  } = rg;
  return /* @__PURE__ */ react.createElement(react.Fragment, null, rg.path.length > 0 && /* @__PURE__ */ react.createElement(
    DragHandleControlElement,
    {
      testID: TestID.dragHandle,
      ref: rg.dragRef,
      level: rg.path.length,
      path: rg.path,
      title: rg.translations.dragHandle.title,
      label: rg.translations.dragHandle.label,
      className: rg.classNames.dragHandle,
      disabled: rg.disabled,
      context: rg.context,
      validation: rg.validationResult,
      schema: rg.schema
    }
  ), !rg.schema.showCombinatorsBetweenRules && !rg.schema.independentCombinators && /* @__PURE__ */ react.createElement(
    CombinatorSelectorControlElement,
    {
      testID: TestID.combinators,
      options: rg.schema.combinators,
      value: rg.combinator,
      title: rg.translations.combinators.title,
      className: rg.classNames.combinators,
      handleOnChange: rg.onCombinatorChange,
      rules: rg.ruleGroup.rules,
      level: rg.path.length,
      path: rg.path,
      disabled: rg.disabled,
      context: rg.context,
      validation: rg.validationResult,
      schema: rg.schema
    }
  ), rg.schema.showNotToggle && /* @__PURE__ */ react.createElement(
    NotToggleControlElement,
    {
      testID: TestID.notToggle,
      className: rg.classNames.notToggle,
      title: rg.translations.notToggle.title,
      label: rg.translations.notToggle.label,
      checked: rg.ruleGroup.not,
      handleOnChange: rg.onNotToggleChange,
      level: rg.path.length,
      disabled: rg.disabled,
      path: rg.path,
      context: rg.context,
      validation: rg.validationResult,
      schema: rg.schema
    }
  ), /* @__PURE__ */ react.createElement(
    AddRuleActionControlElement,
    {
      testID: TestID.addRule,
      label: rg.translations.addRule.label,
      title: rg.translations.addRule.title,
      className: rg.classNames.addRule,
      handleOnClick: rg.addRule,
      rules: rg.ruleGroup.rules,
      level: rg.path.length,
      path: rg.path,
      disabled: rg.disabled,
      context: rg.context,
      validation: rg.validationResult,
      ruleOrGroup: rg.ruleGroup,
      schema: rg.schema
    }
  ), /* @__PURE__ */ react.createElement(
    AddGroupActionControlElement,
    {
      testID: TestID.addGroup,
      label: rg.translations.addGroup.label,
      title: rg.translations.addGroup.title,
      className: rg.classNames.addGroup,
      handleOnClick: rg.addGroup,
      rules: rg.ruleGroup.rules,
      level: rg.path.length,
      path: rg.path,
      disabled: rg.disabled,
      context: rg.context,
      validation: rg.validationResult,
      ruleOrGroup: rg.ruleGroup,
      schema: rg.schema
    }
  ), rg.schema.showCloneButtons && rg.path.length >= 1 && /* @__PURE__ */ react.createElement(
    CloneGroupActionControlElement,
    {
      testID: TestID.cloneGroup,
      label: rg.translations.cloneRuleGroup.label,
      title: rg.translations.cloneRuleGroup.title,
      className: rg.classNames.cloneGroup,
      handleOnClick: rg.cloneGroup,
      rules: rg.ruleGroup.rules,
      level: rg.path.length,
      path: rg.path,
      disabled: rg.disabled,
      context: rg.context,
      validation: rg.validationResult,
      ruleOrGroup: rg.ruleGroup,
      schema: rg.schema
    }
  ), rg.schema.showLockButtons && /* @__PURE__ */ react.createElement(
    LockGroupActionControlElement,
    {
      testID: TestID.lockGroup,
      label: rg.translations.lockGroup.label,
      title: rg.translations.lockGroup.title,
      className: rg.classNames.lockGroup,
      handleOnClick: rg.toggleLockGroup,
      rules: rg.ruleGroup.rules,
      level: rg.path.length,
      path: rg.path,
      disabled: rg.disabled,
      disabledTranslation: rg.parentDisabled ? void 0 : rg.translations.lockGroupDisabled,
      context: rg.context,
      validation: rg.validationResult,
      ruleOrGroup: rg.ruleGroup,
      schema: rg.schema
    }
  ), rg.path.length >= 1 && /* @__PURE__ */ react.createElement(
    RemoveGroupActionControlElement,
    {
      testID: TestID.removeGroup,
      label: rg.translations.removeGroup.label,
      title: rg.translations.removeGroup.title,
      className: rg.classNames.removeGroup,
      handleOnClick: rg.removeGroup,
      rules: rg.ruleGroup.rules,
      level: rg.path.length,
      path: rg.path,
      disabled: rg.disabled,
      context: rg.context,
      validation: rg.validationResult,
      ruleOrGroup: rg.ruleGroup,
      schema: rg.schema
    }
  ));
};
var RuleGroupBodyComponents = (rg) => {
  const {
    schema: {
      controls: {
        combinatorSelector: CombinatorSelectorControlElement,
        inlineCombinator: InlineCombinatorControlElement,
        ruleGroup: RuleGroupControlElement,
        rule: RuleControlElement
      }
    }
  } = rg;
  return /* @__PURE__ */ react.createElement(react.Fragment, null, rg.ruleGroup.rules.map((r, idx) => {
    const thisPath = [...rg.path, idx];
    const thisPathDisabled = rg.disabled || typeof r !== "string" && r.disabled || rg.schema.disabledPaths.some((p) => pathsAreEqual(thisPath, p));
    const key = typeof r === "string" ? [...thisPath, r].join("-") : r.id;
    return /* @__PURE__ */ react.createElement(react.Fragment, { key }, idx > 0 && !rg.schema.independentCombinators && rg.schema.showCombinatorsBetweenRules && /* @__PURE__ */ react.createElement(
      InlineCombinatorControlElement,
      {
        options: rg.schema.combinators,
        value: rg.combinator,
        title: rg.translations.combinators.title,
        className: rg.classNames.combinators,
        handleOnChange: rg.onCombinatorChange,
        rules: rg.ruleGroup.rules,
        level: rg.path.length,
        context: rg.context,
        validation: rg.validationResult,
        component: CombinatorSelectorControlElement,
        path: thisPath,
        disabled: rg.disabled,
        independentCombinators: rg.schema.independentCombinators,
        schema: rg.schema
      }
    ), typeof r === "string" ? /* @__PURE__ */ react.createElement(
      InlineCombinatorControlElement,
      {
        options: rg.schema.combinators,
        value: r,
        title: rg.translations.combinators.title,
        className: rg.classNames.combinators,
        handleOnChange: (val) => rg.onIndependentCombinatorChange(val, idx),
        rules: rg.ruleGroup.rules,
        level: rg.path.length,
        context: rg.context,
        validation: rg.validationResult,
        component: CombinatorSelectorControlElement,
        path: thisPath,
        disabled: thisPathDisabled,
        independentCombinators: rg.schema.independentCombinators,
        schema: rg.schema
      }
    ) : "rules" in r ? /* @__PURE__ */ react.createElement(
      RuleGroupControlElement,
      {
        id: r.id,
        schema: rg.schema,
        actions: rg.actions,
        path: thisPath,
        translations: rg.translations,
        ruleGroup: r,
        rules: r.rules,
        combinator: "combinator" in r ? r.combinator : void 0,
        not: !!r.not,
        disabled: thisPathDisabled,
        parentDisabled: rg.parentDisabled || rg.disabled,
        context: rg.context
      }
    ) : /* @__PURE__ */ react.createElement(
      RuleControlElement,
      {
        id: r.id,
        rule: r,
        field: r.field,
        operator: r.operator,
        value: r.value,
        valueSource: r.valueSource,
        schema: rg.schema,
        actions: rg.actions,
        path: thisPath,
        disabled: thisPathDisabled,
        parentDisabled: rg.parentDisabled || rg.disabled,
        translations: rg.translations,
        context: rg.context
      }
    ));
  }));
};

// src/components/ValueEditor.tsx


// src/components/ValueSelector.tsx

var ValueSelector = ({
  className,
  handleOnChange,
  options,
  title,
  value,
  multiple,
  listsAsArrays,
  disabled,
  testID
}) => {
  const { onChange, val } = useValueSelector({ handleOnChange, listsAsArrays, multiple, value });
  const selectElementChangeHandler = useSelectElementChangeHandler({ multiple, onChange });
  return /* @__PURE__ */ react.createElement(
    "select",
    {
      "data-testid": testID,
      className,
      value: val,
      title,
      disabled,
      multiple: !!multiple,
      onChange: selectElementChangeHandler
    },
    toOptions(options)
  );
};
ValueSelector.displayName = "ValueSelector";

// src/components/ValueEditor.tsx
var ValueEditor = ({
  operator,
  value,
  handleOnChange,
  title,
  className,
  type = "text",
  inputType = "text",
  values = [],
  listsAsArrays,
  parseNumbers,
  fieldData,
  disabled,
  separator = null,
  skipHook = false,
  testID,
  selectorComponent: SelectorComponent = ValueSelector,
  ...props
}) => {
  const { valueAsArray, multiValueHandler } = useValueEditor({
    skipHook,
    handleOnChange,
    inputType,
    operator,
    value,
    type,
    listsAsArrays,
    parseNumbers,
    values
  });
  if (operator === "null" || operator === "notNull") {
    return null;
  }
  const placeHolderText = fieldData?.placeholder ?? "";
  const inputTypeCoerced = ["in", "notIn"].includes(operator) ? "text" : inputType || "text";
  if ((operator === "between" || operator === "notBetween") && (type === "select" || type === "text")) {
    const editors = ["from", "to"].map((key, i) => {
      if (type === "text") {
        return /* @__PURE__ */ react.createElement(
          "input",
          {
            key,
            type: inputTypeCoerced,
            placeholder: placeHolderText,
            value: valueAsArray[i] ?? "",
            className: standardClassnames.valueListItem,
            disabled,
            onChange: (e) => multiValueHandler(e.target.value, i)
          }
        );
      }
      return /* @__PURE__ */ react.createElement(
        SelectorComponent,
        {
          ...props,
          key,
          className: standardClassnames.valueListItem,
          handleOnChange: (v) => multiValueHandler(v, i),
          disabled,
          value: valueAsArray[i] ?? getFirstOption(values),
          options: values,
          listsAsArrays
        }
      );
    });
    return /* @__PURE__ */ react.createElement("span", { "data-testid": testID, className, title }, editors[0], separator, editors[1]);
  }
  switch (type) {
    case "select":
    case "multiselect":
      return /* @__PURE__ */ react.createElement(
        SelectorComponent,
        {
          ...props,
          testID,
          className,
          title,
          handleOnChange,
          disabled,
          value,
          options: values,
          multiple: type === "multiselect",
          listsAsArrays
        }
      );
    case "textarea":
      return /* @__PURE__ */ react.createElement(
        "textarea",
        {
          "data-testid": testID,
          placeholder: placeHolderText,
          value,
          title,
          className,
          disabled,
          onChange: (e) => handleOnChange(e.target.value)
        }
      );
    case "switch":
    case "checkbox":
      return /* @__PURE__ */ react.createElement(
        "input",
        {
          "data-testid": testID,
          type: "checkbox",
          className,
          title,
          onChange: (e) => handleOnChange(e.target.checked),
          checked: !!value,
          disabled
        }
      );
    case "radio":
      return /* @__PURE__ */ react.createElement("span", { "data-testid": testID, className, title }, values.map((v) => /* @__PURE__ */ react.createElement("label", { key: v.name }, /* @__PURE__ */ react.createElement(
        "input",
        {
          type: "radio",
          value: v.name,
          disabled,
          checked: value === v.name,
          onChange: (e) => handleOnChange(e.target.value)
        }
      ), v.label)));
  }
  return /* @__PURE__ */ react.createElement(
    "input",
    {
      "data-testid": testID,
      type: inputTypeCoerced,
      placeholder: placeHolderText,
      value,
      title,
      className,
      disabled,
      onChange: (e) => handleOnChange(parseNumber(e.target.value, { parseNumbers }))
    }
  );
};
ValueEditor.displayName = "ValueEditor";

// src/components/defaults.ts
var defaultControlElements = {
  addGroupAction: ActionElement,
  removeGroupAction: ActionElement,
  cloneGroupAction: ActionElement,
  cloneRuleAction: ActionElement,
  addRuleAction: ActionElement,
  removeRuleAction: ActionElement,
  combinatorSelector: ValueSelector,
  inlineCombinator: InlineCombinator,
  fieldSelector: ValueSelector,
  operatorSelector: ValueSelector,
  valueEditor: ValueEditor,
  notToggle: NotToggle,
  ruleGroup: RuleGroup,
  rule: Rule,
  dragHandle: DragHandle,
  lockRuleAction: ActionElement,
  lockGroupAction: ActionElement,
  valueSourceSelector: ValueSelector
};

// src/components/QueryBuilder.tsx


// src/components/QueryBuilderContext.ts

var QueryBuilderContext = (0,react.createContext)({});
QueryBuilderContext.displayName = "QueryBuilderContext";

// src/components/QueryBuilder.tsx
var QueryBuilder = (props) => {
  const qb = { ...props, ...useQueryBuilder(props) };
  const { ruleGroup: RuleGroupControlElement } = qb.schema.controls;
  return /* @__PURE__ */ react.createElement(
    QueryBuilderContext.Provider,
    {
      key: qb.schema.enableDragAndDrop ? "dnd" : "no-dnd",
      value: qb.rqbContext
    },
    /* @__PURE__ */ react.createElement(
      "div",
      {
        className: qb.wrapperClassName,
        "data-dnd": qb.schema.enableDragAndDrop ? "enabled" : "disabled",
        "data-inlinecombinators": qb.schema.independentCombinators || qb.schema.showCombinatorsBetweenRules ? "enabled" : "disabled"
      },
      /* @__PURE__ */ react.createElement(
        RuleGroupControlElement,
        {
          translations: qb.translations,
          ruleGroup: qb.query,
          rules: qb.query.rules,
          combinator: "combinator" in qb.query ? qb.query.combinator : void 0,
          not: !!qb.query.not,
          schema: qb.schema,
          actions: qb.actions,
          id: qb.query.id,
          path: [],
          disabled: !!qb.query.disabled || qb.queryDisabled,
          parentDisabled: qb.queryDisabled,
          context: qb.context
        }
      )
    )
  );
};
QueryBuilder.displayName = "QueryBuilder";

// src/index.ts
var src_default = (/* unused pure expression or super */ null && (QueryBuilder));

//# sourceMappingURL=react-querybuilder.mjs.map

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["react","vendors"], () => (__webpack_exec__(28125)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);