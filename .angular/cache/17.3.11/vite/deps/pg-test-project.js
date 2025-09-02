import {
  require_react_dom
} from "./chunk-U5IBUS45.js";
import {
  require_react
} from "./chunk-LCSVPBTW.js";
import {
  __toESM
} from "./chunk-ASLTLD6L.js";

// node_modules/pg-test-project/lib/index.esm.js
var React = __toESM(require_react());
var import_react = __toESM(require_react());
var ReactDOM = __toESM(require_react_dom());
var import_react_dom = __toESM(require_react_dom());
function styleInject(css, ref) {
  if (ref === void 0)
    ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === "undefined") {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
var css_248z$2 = ".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n";
styleInject(css_248z$2);
var Button$1 = function(_a) {
  var _b = _a.primary, primary = _b === void 0 ? true : _b, backgroundColor = _a.backgroundColor, _c = _a.size, size = _c === void 0 ? "medium" : _c, onClick = _a.onClick, label = _a.label;
  var mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return import_react.default.createElement("button", { type: "button", className: ["storybook-button", "storybook-button--".concat(size), mode].join(" "), style: backgroundColor ? { backgroundColor } : {}, onClick }, label);
};
var extendStatics = function(d2, b2) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
    d3.__proto__ = b3;
  } || function(d3, b3) {
    for (var p2 in b3)
      if (Object.prototype.hasOwnProperty.call(b3, p2))
        d3[p2] = b3[p2];
  };
  return extendStatics(d2, b2);
};
function __extends(d2, b2) {
  if (typeof b2 !== "function" && b2 !== null)
    throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
  extendStatics(d2, b2);
  function __() {
    this.constructor = d2;
  }
  d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t2[p2] = s[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getAugmentedNamespace(n2) {
  if (n2.__esModule)
    return n2;
  var a = Object.defineProperty({}, "__esModule", { value: true });
  Object.keys(n2).forEach(function(k2) {
    var d2 = Object.getOwnPropertyDescriptor(n2, k2);
    Object.defineProperty(a, k2, d2.get ? d2 : {
      enumerable: true,
      get: function() {
        return n2[k2];
      }
    });
  });
  return a;
}
function createCommonjsModule(fn2) {
  var module = { exports: {} };
  return fn2(module, module.exports), module.exports;
}
function commonjsRequire(target) {
  throw new Error('Could not dynamically require "' + target + '". Please configure the dynamicRequireTargets option of @rollup/plugin-commonjs appropriately for this require call to behave properly.');
}
var b = "function" === typeof Symbol && Symbol.for;
var c = b ? Symbol.for("react.element") : 60103;
var d = b ? Symbol.for("react.portal") : 60106;
var e = b ? Symbol.for("react.fragment") : 60107;
var f = b ? Symbol.for("react.strict_mode") : 60108;
var g = b ? Symbol.for("react.profiler") : 60114;
var h = b ? Symbol.for("react.provider") : 60109;
var k = b ? Symbol.for("react.context") : 60110;
var l = b ? Symbol.for("react.async_mode") : 60111;
var m = b ? Symbol.for("react.concurrent_mode") : 60111;
var n = b ? Symbol.for("react.forward_ref") : 60112;
var p = b ? Symbol.for("react.suspense") : 60113;
var q = b ? Symbol.for("react.suspense_list") : 60120;
var r = b ? Symbol.for("react.memo") : 60115;
var t = b ? Symbol.for("react.lazy") : 60116;
var v = b ? Symbol.for("react.block") : 60121;
var w = b ? Symbol.for("react.fundamental") : 60117;
var x = b ? Symbol.for("react.responder") : 60118;
var y = b ? Symbol.for("react.scope") : 60119;
var reactIs_development = createCommonjsModule(function(module, exports) {
  if (true) {
    (function() {
      var hasSymbol = typeof Symbol === "function" && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
      function isValidElementType(type) {
        return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }
      function typeOf(object) {
        if (typeof object === "object" && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;
              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;
                default:
                  var $$typeofType = type && type.$$typeof;
                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
        return void 0;
      }
      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element2 = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment2 = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal2 = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false;
      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true;
            console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement2(object) {
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }
      exports.AsyncMode = AsyncMode;
      exports.ConcurrentMode = ConcurrentMode;
      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element2;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment2;
      exports.Lazy = Lazy;
      exports.Memo = Memo;
      exports.Portal = Portal2;
      exports.Profiler = Profiler;
      exports.StrictMode = StrictMode;
      exports.Suspense = Suspense;
      exports.isAsyncMode = isAsyncMode;
      exports.isConcurrentMode = isConcurrentMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement2;
      exports.isForwardRef = isForwardRef;
      exports.isFragment = isFragment;
      exports.isLazy = isLazy;
      exports.isMemo = isMemo;
      exports.isPortal = isPortal;
      exports.isProfiler = isProfiler;
      exports.isStrictMode = isStrictMode;
      exports.isSuspense = isSuspense;
      exports.isValidElementType = isValidElementType;
      exports.typeOf = typeOf;
    })();
  }
});
var reactIs = createCommonjsModule(function(module) {
  if (false) {
    module.exports = reactIs_production_min;
  } else {
    module.exports = reactIs_development;
  }
});
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
var ReactPropTypesSecret$2 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$2;
var has$2 = Function.call.bind(Object.prototype.hasOwnProperty);
var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
var has$1 = has$2;
var printWarning$2 = function() {
};
if (true) {
  ReactPropTypesSecret = ReactPropTypesSecret$1;
  loggedTypeFailures = {};
  has = has$1;
  printWarning$2 = function(text) {
    var message = "Warning: " + text;
    if (typeof console !== "undefined") {
      console.error(message);
    }
    try {
      throw new Error(message);
    } catch (x2) {
    }
  };
}
var ReactPropTypesSecret;
var loggedTypeFailures;
var has;
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        try {
          if (typeof typeSpecs[typeSpecName] !== "function") {
            var err = Error(
              (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
            );
            err.name = "Invariant Violation";
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$2(
            (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : "";
          printWarning$2(
            "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
          );
        }
      }
    }
  }
}
checkPropTypes$1.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
};
var checkPropTypes_1 = checkPropTypes$1;
var checkPropTypes = checkPropTypes_1;
var printWarning$1 = function() {
};
if (true) {
  printWarning$1 = function(text) {
    var message = "Warning: " + text;
    if (typeof console !== "undefined") {
      console.error(message);
    }
    try {
      throw new Error(message);
    } catch (x2) {
    }
  };
}
function emptyFunctionThatReturnsNull() {
  return null;
}
var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = "@@iterator";
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === "function") {
      return iteratorFn;
    }
  }
  var ANONYMOUS = "<<anonymous>>";
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker("array"),
    bigint: createPrimitiveTypeChecker("bigint"),
    bool: createPrimitiveTypeChecker("boolean"),
    func: createPrimitiveTypeChecker("function"),
    number: createPrimitiveTypeChecker("number"),
    object: createPrimitiveTypeChecker("object"),
    string: createPrimitiveTypeChecker("string"),
    symbol: createPrimitiveTypeChecker("symbol"),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  function is(x2, y2) {
    if (x2 === y2) {
      return x2 !== 0 || 1 / x2 === 1 / y2;
    } else {
      return x2 !== x2 && y2 !== y2;
    }
  }
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === "object" ? data : {};
    this.stack = "";
  }
  PropTypeError.prototype = Error.prototype;
  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;
      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          var err = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
          );
          err.name = "Invariant Violation";
          throw err;
        } else if (typeof console !== "undefined") {
          var cacheKey = componentName + ":" + propName;
          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning$1(
              "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
          }
          return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }
  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        var preciseType = getPreciseType(propValue);
        return new PropTypeError(
          "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
          { expectedType }
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }
  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== "function") {
        return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning$1(
            "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
          );
        } else {
          printWarning$1("Invalid argument supplied to oneOf, expected an array.");
        }
      }
      return emptyFunctionThatReturnsNull;
    }
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }
      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === "symbol") {
          return String(value);
        }
        return value;
      });
      return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
    }
    return createChainableTypeChecker(validate);
  }
  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== "function") {
        return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== "object") {
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      true ? printWarning$1("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
      return emptyFunctionThatReturnsNull;
    }
    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== "function") {
        printWarning$1(
          "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
        );
        return emptyFunctionThatReturnsNull;
      }
    }
    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
        var checker2 = arrayOfTypeCheckers[i2];
        var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has$1(checkerResult.data, "expectedType")) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
      return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
    }
    return createChainableTypeChecker(validate);
  }
  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
    );
  }
  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== "object") {
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== "function") {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== "object") {
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
      }
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has$1(shapeTypes, key) && typeof checker !== "function") {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function isNode(propValue) {
    switch (typeof propValue) {
      case "number":
      case "string":
      case "undefined":
        return true;
      case "boolean":
        return !propValue;
      case "object":
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }
        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }
        return true;
      default:
        return false;
    }
  }
  function isSymbol(propType, propValue) {
    if (propType === "symbol") {
      return true;
    }
    if (!propValue) {
      return false;
    }
    if (propValue["@@toStringTag"] === "Symbol") {
      return true;
    }
    if (typeof Symbol === "function" && propValue instanceof Symbol) {
      return true;
    }
    return false;
  }
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return "array";
    }
    if (propValue instanceof RegExp) {
      return "object";
    }
    if (isSymbol(propType, propValue)) {
      return "symbol";
    }
    return propType;
  }
  function getPreciseType(propValue) {
    if (typeof propValue === "undefined" || propValue === null) {
      return "" + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === "object") {
      if (propValue instanceof Date) {
        return "date";
      } else if (propValue instanceof RegExp) {
        return "regexp";
      }
    }
    return propType;
  }
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case "array":
      case "object":
        return "an " + type;
      case "boolean":
      case "date":
      case "regexp":
        return "a " + type;
      default:
        return type;
    }
  }
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }
  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var require$$1 = factoryWithTypeCheckers;
var propTypes = createCommonjsModule(function(module) {
  if (true) {
    var ReactIs = reactIs;
    var throwOnDirectAccess = true;
    module.exports = require$$1(ReactIs.isElement, throwOnDirectAccess);
  } else {
    module.exports = require$$2();
  }
});
var PropTypes = propTypes;
var classnames = createCommonjsModule(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString === Object.prototype.toString) {
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          } else {
            classes.push(arg.toString());
          }
        }
      }
      return classes.join(" ");
    }
    if (module.exports) {
      classNames.default = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
});
var ManagerReferenceNodeContext = React.createContext();
var ManagerReferenceNodeSetterContext = React.createContext();
function Manager(_ref) {
  var children = _ref.children;
  var _React$useState = React.useState(null), referenceNode = _React$useState[0], setReferenceNode = _React$useState[1];
  var hasUnmounted = React.useRef(false);
  React.useEffect(function() {
    return function() {
      hasUnmounted.current = true;
    };
  }, []);
  var handleSetReferenceNode = React.useCallback(function(node) {
    if (!hasUnmounted.current) {
      setReferenceNode(node);
    }
  }, []);
  return React.createElement(ManagerReferenceNodeContext.Provider, {
    value: referenceNode
  }, React.createElement(ManagerReferenceNodeSetterContext.Provider, {
    value: handleSetReferenceNode
  }, children));
}
var unwrapArray = function unwrapArray2(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
var safeInvoke = function safeInvoke2(fn2) {
  if (typeof fn2 === "function") {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return fn2.apply(void 0, args);
  }
};
var setRef = function setRef2(ref, node) {
  if (typeof ref === "function") {
    return safeInvoke(ref, node);
  } else if (ref != null) {
    ref.current = node;
  }
};
var fromEntries = function fromEntries2(entries) {
  return entries.reduce(function(acc, _ref) {
    var key = _ref[0], value = _ref[1];
    acc[key] = value;
    return acc;
  }, {});
};
var useIsomorphicLayoutEffect = typeof window !== "undefined" && window.document && window.document.createElement ? React.useLayoutEffect : React.useEffect;
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$2,
  requires: ["computeStyles"]
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x2 = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y2 = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y2,
    right: x2 + width,
    bottom: y2 + height,
    left: x2,
    x: x2,
    y: y2
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v2 = within(min2, value, max2);
  return v2 > max2 ? max2 : v2;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (true) {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "));
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
    }
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref) {
  var x2 = _ref.x, y2 = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x2 * dpr) / dpr || 0,
    y: round(y2 * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x2 = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y2 = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x: x2,
    y: y2
  }) : {
    x: x2,
    y: y2
  };
  x2 = _ref3.x;
  y2 = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y2 -= offsetY - popperRect.height;
      y2 *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x2 -= offsetX - popperRect.width;
      x2 *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x2,
    y: y2
  }) : {
    x: x2,
    y: y2
  };
  x2 = _ref4.x;
  y2 = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x2 + "px, " + y2 + "px)" : "translate3d(" + x2 + "px, " + y2 + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y2 + "px" : "", _Object$assign2[sideX] = hasX ? x2 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  if (true) {
    var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || "";
    if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
    }
  }
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x2 = 0;
  var y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x2 = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x2 + getWindowScrollBarX(element),
    y: y2
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x2 = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y2 = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x2 += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
    if (true) {
      console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "));
    }
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b2) {
    return overflows[a] - overflows[b2];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x2 = _data$state$placement.x, y2 = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x2;
    state.modifiersData.popperOffsets.y += y2;
  }
  state.modifiersData[name] = data;
}
var offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return [].concat(args).reduce(function(p2, c2) {
    return p2.replace(/%s/, c2);
  }, str);
}
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function validateModifiers(modifiers) {
  modifiers.forEach(function(modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES).filter(function(value, index, self2) {
      return self2.indexOf(value) === index;
    }).forEach(function(key) {
      switch (key) {
        case "name":
          if (typeof modifier.name !== "string") {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
          }
          break;
        case "enabled":
          if (typeof modifier.enabled !== "boolean") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
          }
          break;
        case "phase":
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(", "), '"' + String(modifier.phase) + '"'));
          }
          break;
        case "fn":
          if (typeof modifier.fn !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "effect":
          if (modifier.effect != null && typeof modifier.effect !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "requires":
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
          }
          break;
        case "requiresIfExists":
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
          }
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
            return '"' + s + '"';
          }).join(", ") + '; but "' + key + '" was provided.');
      }
      modifier.requires && modifier.requires.forEach(function(requirement) {
        if (modifiers.find(function(mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}
function uniqueBy(arr, fn2) {
  var identifiers = /* @__PURE__ */ new Set();
  return arr.filter(function(item) {
    var identifier = fn2(item);
    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m2) {
          return m2.enabled;
        });
        if (true) {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);
          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function(_ref2) {
              var name = _ref2.name;
              return name === "flip";
            });
            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
            }
          }
          var _getComputedStyle = getComputedStyle(popper2), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
          if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
          }
        }
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;
            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect2 = _ref3.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = popperGenerator({
  defaultModifiers
});
var hasElementType = typeof Element !== "undefined";
var hasMap = typeof Map === "function";
var hasSet = typeof Set === "function";
var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
function equal(a, b2) {
  if (a === b2)
    return true;
  if (a && b2 && typeof a == "object" && typeof b2 == "object") {
    if (a.constructor !== b2.constructor)
      return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b2.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!equal(a[i], b2[i]))
          return false;
      return true;
    }
    var it;
    if (hasMap && a instanceof Map && b2 instanceof Map) {
      if (a.size !== b2.size)
        return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b2.has(i.value[0]))
          return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b2.get(i.value[0])))
          return false;
      return true;
    }
    if (hasSet && a instanceof Set && b2 instanceof Set) {
      if (a.size !== b2.size)
        return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b2.has(i.value[0]))
          return false;
      return true;
    }
    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b2)) {
      length = a.length;
      if (length != b2.length)
        return false;
      for (i = length; i-- !== 0; )
        if (a[i] !== b2[i])
          return false;
      return true;
    }
    if (a.constructor === RegExp)
      return a.source === b2.source && a.flags === b2.flags;
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b2.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b2.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b2).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b2, keys[i]))
        return false;
    if (hasElementType && a instanceof Element)
      return false;
    for (i = length; i-- !== 0; ) {
      if ((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) {
        continue;
      }
      if (!equal(a[keys[i]], b2[keys[i]]))
        return false;
    }
    return true;
  }
  return a !== a && b2 !== b2;
}
var reactFastCompare = function isEqual(a, b2) {
  try {
    return equal(a, b2);
  } catch (error) {
    if ((error.message || "").match(/stack|recursion/i)) {
      console.warn("react-fast-compare cannot handle circular refs");
      return false;
    }
    throw error;
  }
};
var EMPTY_MODIFIERS$1 = [];
var usePopper = function usePopper2(referenceElement, popperElement, options) {
  if (options === void 0) {
    options = {};
  }
  var prevOptions = React.useRef(null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || "bottom",
    strategy: options.strategy || "absolute",
    modifiers: options.modifiers || EMPTY_MODIFIERS$1
  };
  var _React$useState = React.useState({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), state = _React$useState[0], setState = _React$useState[1];
  var updateStateModifier = React.useMemo(function() {
    return {
      name: "updateState",
      enabled: true,
      phase: "write",
      fn: function fn2(_ref) {
        var state2 = _ref.state;
        var elements = Object.keys(state2.elements);
        ReactDOM.flushSync(function() {
          setState({
            styles: fromEntries(elements.map(function(element) {
              return [element, state2.styles[element] || {}];
            })),
            attributes: fromEntries(elements.map(function(element) {
              return [element, state2.attributes[element]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []);
  var popperOptions = React.useMemo(function() {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
        name: "applyStyles",
        enabled: false
      }])
    };
    if (reactFastCompare(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    } else {
      prevOptions.current = newOptions;
      return newOptions;
    }
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = React.useRef();
  useIsomorphicLayoutEffect(function() {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  useIsomorphicLayoutEffect(function() {
    if (referenceElement == null || popperElement == null) {
      return;
    }
    var createPopper$1 = options.createPopper || createPopper;
    var popperInstance = createPopper$1(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return function() {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  };
};
var NOOP = function NOOP2() {
  return void 0;
};
var NOOP_PROMISE = function NOOP_PROMISE2() {
  return Promise.resolve(null);
};
var EMPTY_MODIFIERS = [];
function Popper(_ref) {
  var _ref$placement = _ref.placement, placement = _ref$placement === void 0 ? "bottom" : _ref$placement, _ref$strategy = _ref.strategy, strategy = _ref$strategy === void 0 ? "absolute" : _ref$strategy, _ref$modifiers = _ref.modifiers, modifiers = _ref$modifiers === void 0 ? EMPTY_MODIFIERS : _ref$modifiers, referenceElement = _ref.referenceElement, onFirstUpdate = _ref.onFirstUpdate, innerRef = _ref.innerRef, children = _ref.children;
  var referenceNode = React.useContext(ManagerReferenceNodeContext);
  var _React$useState = React.useState(null), popperElement = _React$useState[0], setPopperElement = _React$useState[1];
  var _React$useState2 = React.useState(null), arrowElement = _React$useState2[0], setArrowElement = _React$useState2[1];
  React.useEffect(function() {
    setRef(innerRef, popperElement);
  }, [innerRef, popperElement]);
  var options = React.useMemo(function() {
    return {
      placement,
      strategy,
      onFirstUpdate,
      modifiers: [].concat(modifiers, [{
        name: "arrow",
        enabled: arrowElement != null,
        options: {
          element: arrowElement
        }
      }])
    };
  }, [placement, strategy, onFirstUpdate, modifiers, arrowElement]);
  var _usePopper = usePopper(referenceElement || referenceNode, popperElement, options), state = _usePopper.state, styles = _usePopper.styles, forceUpdate = _usePopper.forceUpdate, update = _usePopper.update;
  var childrenProps = React.useMemo(function() {
    return {
      ref: setPopperElement,
      style: styles.popper,
      placement: state ? state.placement : placement,
      hasPopperEscaped: state && state.modifiersData.hide ? state.modifiersData.hide.hasPopperEscaped : null,
      isReferenceHidden: state && state.modifiersData.hide ? state.modifiersData.hide.isReferenceHidden : null,
      arrowProps: {
        style: styles.arrow,
        ref: setArrowElement
      },
      forceUpdate: forceUpdate || NOOP,
      update: update || NOOP_PROMISE
    };
  }, [setPopperElement, setArrowElement, placement, state, styles, update, forceUpdate]);
  return unwrapArray(children)(childrenProps);
}
var __DEV__ = true;
var warning = function() {
};
if (__DEV__) {
  printWarning = function printWarning2(format2, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = "Warning: " + format2.replace(/%s/g, function() {
      return args[argIndex++];
    });
    if (typeof console !== "undefined") {
      console.error(message);
    }
    try {
      throw new Error(message);
    } catch (x2) {
    }
  };
  warning = function(condition, format2, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format2 === void 0) {
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning message argument"
      );
    }
    if (!condition) {
      printWarning.apply(null, [format2].concat(args));
    }
  };
}
var printWarning;
var warning_1 = warning;
function Reference(_ref) {
  var children = _ref.children, innerRef = _ref.innerRef;
  var setReferenceNode = React.useContext(ManagerReferenceNodeSetterContext);
  var refHandler = React.useCallback(function(node) {
    setRef(innerRef, node);
    safeInvoke(setReferenceNode, node);
  }, [innerRef, setReferenceNode]);
  React.useEffect(function() {
    return function() {
      return setRef(innerRef, null);
    };
  }, []);
  React.useEffect(function() {
    warning_1(Boolean(setReferenceNode), "`Reference` should not be used outside of a `Manager` component.");
  }, [setReferenceNode]);
  return unwrapArray(children)({
    ref: refHandler
  });
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
var config = {
  disabled: false
};
var timeoutsShape = true ? PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
  enter: PropTypes.number,
  exit: PropTypes.number,
  appear: PropTypes.number
}).isRequired]) : null;
true ? PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
  enter: PropTypes.string,
  exit: PropTypes.string,
  active: PropTypes.string
}), PropTypes.shape({
  enter: PropTypes.string,
  enterDone: PropTypes.string,
  enterActive: PropTypes.string,
  exit: PropTypes.string,
  exitDone: PropTypes.string,
  exitActive: PropTypes.string
})]) : null;
var TransitionGroupContext = import_react.default.createContext(null);
var forceReflow = function forceReflow2(node) {
  return node.scrollTop;
};
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
          if (node)
            forceReflow(node);
        }
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [import_react_dom.default.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : import_react_dom.default.findDOMNode(this);
    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children = _this$props.children;
    _this$props.in;
    _this$props.mountOnEnter;
    _this$props.unmountOnExit;
    _this$props.appear;
    _this$props.enter;
    _this$props.exit;
    _this$props.timeout;
    _this$props.addEndListener;
    _this$props.onEnter;
    _this$props.onEntering;
    _this$props.onEntered;
    _this$props.onExit;
    _this$props.onExiting;
    _this$props.onExited;
    _this$props.nodeRef;
    var childProps = _objectWithoutPropertiesLoose$1(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      import_react.default.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === "function" ? children(status, childProps) : import_react.default.cloneElement(import_react.default.Children.only(children), childProps))
    );
  };
  return Transition2;
}(import_react.default.Component);
Transition.contextType = TransitionGroupContext;
Transition.propTypes = true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: PropTypes.shape({
    current: typeof Element === "undefined" ? PropTypes.any : function(propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return PropTypes.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: PropTypes.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener)
      pt = pt.isRequired;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return pt.apply(void 0, [props].concat(args));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func
} : {};
function noop$3() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop$3,
  onEntering: noop$3,
  onEntered: noop$3,
  onExit: noop$3,
  onExiting: noop$3,
  onExited: noop$3
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition$1 = Transition;
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function getScrollbarWidth() {
  let scrollDiv = document.createElement("div");
  scrollDiv.style.position = "absolute";
  scrollDiv.style.top = "-9999px";
  scrollDiv.style.width = "50px";
  scrollDiv.style.height = "50px";
  scrollDiv.style.overflow = "scroll";
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}
function setScrollbarWidth(padding) {
  document.body.style.paddingRight = padding > 0 ? `${padding}px` : null;
}
function isBodyOverflowing() {
  return document.body.clientWidth < window.innerWidth;
}
function getOriginalBodyPadding() {
  const style = window.getComputedStyle(document.body, null);
  return parseInt(style && style.getPropertyValue("padding-right") || 0, 10);
}
function conditionallyUpdateScrollbar() {
  const scrollbarWidth = getScrollbarWidth();
  const fixedContent = document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0];
  const bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;
  if (isBodyOverflowing()) {
    setScrollbarWidth(bodyPadding + scrollbarWidth);
  }
}
var globalCssModule;
function mapToCssModules(className = "", cssModule = globalCssModule) {
  if (!cssModule)
    return className;
  return className.split(" ").map((c2) => cssModule[c2] || c2).join(" ");
}
function omit(obj, omitKeys2) {
  const result = {};
  Object.keys(obj).forEach((key) => {
    if (omitKeys2.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}
function pick(obj, keys) {
  const pickKeys = Array.isArray(keys) ? keys : [keys];
  let {
    length
  } = pickKeys;
  let key;
  const result = {};
  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }
  return result;
}
var warned = {};
function warnOnce(message) {
  if (!warned[message]) {
    if (typeof console !== "undefined") {
      console.error(message);
    }
    warned[message] = true;
  }
}
function deprecated(propType, explanation) {
  return function validate(props, propName, componentName, ...rest) {
    if (props[propName] !== null && typeof props[propName] !== "undefined") {
      warnOnce(`"${propName}" property of "${componentName}" has been deprecated.
${explanation}`);
    }
    return propType(props, propName, componentName, ...rest);
  };
}
var Element$1 = typeof window === "object" && window.Element || function() {
};
function DOMElement(props, propName, componentName) {
  if (!(props[propName] instanceof Element$1)) {
    return new Error("Invalid prop `" + propName + "` supplied to `" + componentName + "`. Expected prop to be an instance of Element. Validation failed.");
  }
}
var targetPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement, PropTypes.shape({
  current: PropTypes.any
})]);
var tagPropType = PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.shape({
  $$typeof: PropTypes.symbol,
  render: PropTypes.func
}), PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.shape({
  $$typeof: PropTypes.symbol,
  render: PropTypes.func
})]))]);
var TransitionTimeouts = {
  Fade: 150,
  // $transition-fade
  Collapse: 350,
  // $transition-collapse
  Modal: 300,
  // $modal-transition
  Carousel: 600,
  // $carousel-transition
  Offcanvas: 300
  // $offcanvas-transition
};
var TransitionPropTypeKeys = ["in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"];
var TransitionStatuses = {
  ENTERING: "entering",
  ENTERED: "entered",
  EXITING: "exiting",
  EXITED: "exited"
};
var keyCodes = {
  esc: 27,
  space: 32,
  enter: 13,
  tab: 9,
  up: 38,
  down: 40,
  home: 36,
  end: 35,
  n: 78,
  p: 80
};
var PopperPlacements = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"];
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function isReactRefObj(target) {
  if (target && typeof target === "object") {
    return "current" in target;
  }
  return false;
}
function getTag(value) {
  if (value == null) {
    return value === void 0 ? "[object Undefined]" : "[object Null]";
  }
  return Object.prototype.toString.call(value);
}
function isObject(value) {
  const type = typeof value;
  return value != null && (type === "object" || type === "function");
}
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  const tag = getTag(value);
  return tag === "[object Function]" || tag === "[object AsyncFunction]" || tag === "[object GeneratorFunction]" || tag === "[object Proxy]";
}
function findDOMElements(target) {
  if (isReactRefObj(target)) {
    return target.current;
  }
  if (isFunction(target)) {
    return target();
  }
  if (typeof target === "string" && canUseDOM) {
    let selection = document.querySelectorAll(target);
    if (!selection.length) {
      selection = document.querySelectorAll(`#${target}`);
    }
    if (!selection.length) {
      throw new Error(`The target '${target}' could not be identified in the dom, tip: check spelling`);
    }
    return selection;
  }
  return target;
}
function isArrayOrNodeList(els) {
  if (els === null) {
    return false;
  }
  return Array.isArray(els) || canUseDOM && typeof els.length === "number";
}
function getTarget(target, allElements) {
  const els = findDOMElements(target);
  if (allElements) {
    if (isArrayOrNodeList(els)) {
      return els;
    }
    if (els === null) {
      return [];
    }
    return [els];
  }
  if (isArrayOrNodeList(els)) {
    return els[0];
  }
  return els;
}
var defaultToggleEvents = ["touchstart", "click"];
function addMultipleEventListeners(_els, handler, _events, useCapture) {
  let els = _els;
  if (!isArrayOrNodeList(els)) {
    els = [els];
  }
  let events = _events;
  if (typeof events === "string") {
    events = events.split(/\s+/);
  }
  if (!isArrayOrNodeList(els) || typeof handler !== "function" || !Array.isArray(events)) {
    throw new Error(`
      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.
      The second must be a function.
      The third is a string or an array of strings that represents DOM events
    `);
  }
  Array.prototype.forEach.call(events, (event) => {
    Array.prototype.forEach.call(els, (el) => {
      el.addEventListener(event, handler, useCapture);
    });
  });
  return function removeEvents() {
    Array.prototype.forEach.call(events, (event) => {
      Array.prototype.forEach.call(els, (el) => {
        el.removeEventListener(event, handler, useCapture);
      });
    });
  };
}
var focusableElements = ["a[href]", "area[href]", "input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "object", "embed", "[tabindex]:not(.modal)", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'];
({
  tag: tagPropType,
  fluid: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
});
var rowColsPropType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
({
  tag: tagPropType,
  noGutters: deprecated(PropTypes.bool, "Please use Bootstrap 5 gutter utility classes. https://getbootstrap.com/docs/5.0/layout/gutters/"),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  xs: rowColsPropType,
  sm: rowColsPropType,
  md: rowColsPropType,
  lg: rowColsPropType,
  xl: rowColsPropType,
  xxl: rowColsPropType,
  widths: PropTypes.array
});
var _excluded$1f = ["className", "cssModule", "widths", "tag"];
var colWidths$1 = ["xs", "sm", "md", "lg", "xl", "xxl"];
var stringOrNumberProp$1 = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
var columnProps$1 = PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string, PropTypes.shape({
  size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
  order: stringOrNumberProp$1,
  offset: stringOrNumberProp$1
})]);
var propTypes$1k = {
  tag: tagPropType,
  xs: columnProps$1,
  sm: columnProps$1,
  md: columnProps$1,
  lg: columnProps$1,
  xl: columnProps$1,
  xxl: columnProps$1,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  widths: PropTypes.array
};
var defaultProps$1i = {
  tag: "div",
  widths: colWidths$1
};
var getColumnSizeClass$1 = (isXs, colWidth, colSize) => {
  if (colSize === true || colSize === "") {
    return isXs ? "col" : `col-${colWidth}`;
  }
  if (colSize === "auto") {
    return isXs ? "col-auto" : `col-${colWidth}-auto`;
  }
  return isXs ? `col-${colSize}` : `col-${colWidth}-${colSize}`;
};
var getColumnClasses = (attributes, cssModule, widths = colWidths$1) => {
  const modifiedAttributes = attributes;
  const colClasses = [];
  widths.forEach((colWidth, i) => {
    let columnProp = modifiedAttributes[colWidth];
    delete modifiedAttributes[colWidth];
    if (!columnProp && columnProp !== "") {
      return;
    }
    const isXs = !i;
    if (isObject(columnProp)) {
      const colSizeInterfix = isXs ? "-" : `-${colWidth}-`;
      const colClass = getColumnSizeClass$1(isXs, colWidth, columnProp.size);
      colClasses.push(mapToCssModules(classnames({
        [colClass]: columnProp.size || columnProp.size === "",
        [`order${colSizeInterfix}${columnProp.order}`]: columnProp.order || columnProp.order === 0,
        [`offset${colSizeInterfix}${columnProp.offset}`]: columnProp.offset || columnProp.offset === 0
      }), cssModule));
    } else {
      const colClass = getColumnSizeClass$1(isXs, colWidth, columnProp);
      colClasses.push(colClass);
    }
  });
  return {
    colClasses,
    modifiedAttributes
  };
};
function Col(props) {
  const {
    className,
    cssModule,
    widths,
    tag: Tag
  } = props, attributes = _objectWithoutProperties(props, _excluded$1f);
  let {
    modifiedAttributes,
    colClasses
  } = getColumnClasses(attributes, cssModule, widths);
  if (!colClasses.length) {
    colClasses.push("col");
  }
  const classes = mapToCssModules(classnames(className, colClasses), cssModule);
  return import_react.default.createElement(Tag, _extends({}, modifiedAttributes, {
    className: classes
  }));
}
Col.propTypes = propTypes$1k;
Col.defaultProps = defaultProps$1i;
({
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Theme the navbar by adding a background color  */
  color: PropTypes.string,
  /** Use any of the responsive containers to change how wide the content in your navbar is presented. */
  container: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** This prop is passed if the background is dark, to make the text lighter */
  dark: PropTypes.bool,
  /** Determine if to show toggler button */
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Make the navbar fixed at the top */
  fixed: PropTypes.string,
  full: PropTypes.bool,
  /** Add `.navbar-light` class */
  light: PropTypes.bool,
  role: PropTypes.string,
  /** Use `position: sticky` which isn't fully supported in every browser */
  sticky: PropTypes.string,
  /** Set a custom element for this component */
  tag: tagPropType
});
({
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType
});
({
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType,
  active: PropTypes.bool
});
({
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType,
  type: PropTypes.string,
  /** Pass children so this component can wrap the child elements */
  children: PropTypes.node
});
({
  /** Adding card prop adds `.card-header-tabs` or `.card-header-pills` class */
  card: PropTypes.bool,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** fills the nav to extend to full available width */
  fill: PropTypes.bool,
  /** Change the horizontal alignment of your nav */
  horizontal: PropTypes.oneOf(["center", "end"]),
  /**  All horizontal space will be occupied by nav links, but unlike the `fill` above, every nav item will be the same width. */
  justified: PropTypes.bool,
  /** Add navbar for a full-height and lightweight navigation */
  navbar: PropTypes.bool,
  /** Make NavItems look like pills */
  pills: PropTypes.bool,
  /** Make NavItems look like tabs */
  tabs: PropTypes.bool,
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Stack your navigation by changing the flex item direction */
  vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
});
({
  /** Add active class to element */
  active: PropTypes.bool,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType
});
var _excluded$18 = ["className", "cssModule", "active", "tag", "innerRef"];
var propTypes$1d = {
  /** Add active class to NavLink */
  active: PropTypes.bool,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Disable the link */
  disabled: PropTypes.bool,
  href: PropTypes.any,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  /** Function to be triggered on click */
  onClick: PropTypes.func,
  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$1b = {
  tag: "a"
};
var NavLink = class extends import_react.default.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(e2) {
    if (this.props.disabled) {
      e2.preventDefault();
      return;
    }
    if (this.props.href === "#") {
      e2.preventDefault();
    }
    if (this.props.onClick) {
      this.props.onClick(e2);
    }
  }
  render() {
    let _this$props = this.props, {
      className,
      cssModule,
      active,
      tag: Tag,
      innerRef
    } = _this$props, attributes = _objectWithoutProperties(_this$props, _excluded$18);
    const classes = mapToCssModules(classnames(className, "nav-link", {
      disabled: attributes.disabled,
      active
    }), cssModule);
    return import_react.default.createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      onClick: this.onClick,
      className: classes
    }));
  }
};
NavLink.propTypes = propTypes$1d;
NavLink.defaultProps = defaultProps$1b;
({
  /** Aria label */
  "aria-label": PropTypes.string,
  /** Pass children so this component can wrap them */
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Change existing className with a new className */
  cssModule: PropTypes.object,
  /** Add custom class to list tag */
  listClassName: PropTypes.string,
  /** Set a custom element for list tag */
  listTag: tagPropType,
  /** Set a custom element for this component */
  tag: tagPropType
});
({
  /** Adds a visual "active" state to a Breadcrumb Item */
  active: PropTypes.bool,
  /** Add custom class to the element */
  className: PropTypes.string,
  /** Change existing className with a new className */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType
});
var _excluded$15 = ["className", "cssModule", "variant", "innerRef"];
var propTypes$1a = {
  /** Disable the button if needed */
  active: PropTypes.bool,
  /** Aria label */
  "aria-label": PropTypes.string,
  /** Function to be triggered on click */
  onClick: PropTypes.func,
  /** Change the variant to white */
  variant: PropTypes.oneOf(["white"]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
};
var defaultProps$18 = {
  "aria-label": "close"
};
function CloseButton(props) {
  const {
    className,
    cssModule,
    variant,
    innerRef
  } = props, attributes = _objectWithoutProperties(props, _excluded$15);
  const classes = mapToCssModules(classnames(className, "btn-close", variant && `btn-close-${variant}`));
  return import_react.default.createElement("button", _extends({
    ref: innerRef,
    type: "button",
    className: classes
  }, attributes));
}
CloseButton.propTypes = propTypes$1a;
CloseButton.defaultProps = defaultProps$18;
var _excluded$14 = ["active", "aria-label", "block", "className", "close", "cssModule", "color", "outline", "size", "tag", "innerRef"];
var propTypes$19 = {
  /** Manually set the visual state of the button to active */
  active: PropTypes.bool,
  /** Aria label */
  "aria-label": PropTypes.string,
  block: PropTypes.bool,
  /** Pass children so this component can wrap them */
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Change existing className with a new className */
  cssModule: PropTypes.object,
  /** Use the button as a close button */
  close: PropTypes.bool,
  /** Change color of Button to one of the available colors */
  color: PropTypes.string,
  /** Disables the button */
  disabled: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  /** Function to be triggered on click */
  onClick: PropTypes.func,
  /** Adds outline to the button */
  outline: PropTypes.bool,
  /** Make the button bigger or smaller */
  size: PropTypes.string,
  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$17 = {
  color: "secondary",
  tag: "button"
};
function Button(props) {
  const onClick = (0, import_react.useCallback)((e2) => {
    if (props.disabled) {
      e2.preventDefault();
      return;
    }
    if (props.onClick) {
      return props.onClick(e2);
    }
  }, [props.onClick, props.disabled]);
  let {
    active,
    "aria-label": ariaLabel,
    block,
    className,
    close,
    cssModule,
    color,
    outline,
    size,
    tag: Tag,
    innerRef
  } = props, attributes = _objectWithoutProperties(props, _excluded$14);
  if (close) {
    return import_react.default.createElement(CloseButton, attributes);
  }
  const btnOutlineColor = `btn${outline ? "-outline" : ""}-${color}`;
  const classes = mapToCssModules(classnames(className, "btn", btnOutlineColor, size ? `btn-${size}` : false, block ? "d-block w-100" : false, {
    active,
    disabled: props.disabled
  }), cssModule);
  if (attributes.href && Tag === "button") {
    Tag = "a";
  }
  return import_react.default.createElement(Tag, _extends({
    type: Tag === "button" && attributes.onClick ? "button" : void 0
  }, attributes, {
    className: classes,
    ref: innerRef,
    onClick,
    "aria-label": ariaLabel
  }));
}
Button.propTypes = propTypes$19;
Button.defaultProps = defaultProps$17;
({
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  defaultValue: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object
});
var DropdownContext = import_react.default.createContext({});
var InputGroupContext = import_react.default.createContext({});
var _excluded$12 = ["className", "cssModule", "direction", "isOpen", "group", "size", "nav", "setActiveFromChild", "active", "tag", "menuRole"];
var propTypes$17 = {
  a11y: PropTypes.bool,
  disabled: PropTypes.bool,
  direction: PropTypes.oneOf(["up", "down", "start", "end", "left", "right"]),
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  nav: PropTypes.bool,
  active: PropTypes.bool,
  size: PropTypes.string,
  tag: tagPropType,
  toggle: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  dropup: PropTypes.bool,
  inNavbar: PropTypes.bool,
  setActiveFromChild: PropTypes.bool,
  menuRole: PropTypes.oneOf(["listbox", "menu"])
};
var defaultProps$15 = {
  a11y: true,
  isOpen: false,
  direction: "down",
  nav: false,
  active: false,
  inNavbar: false,
  setActiveFromChild: false
};
var preventDefaultKeys = [keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down, keyCodes.end, keyCodes.home];
var Dropdown = class extends import_react.default.Component {
  constructor(props) {
    super(props);
    this.addEvents = this.addEvents.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.removeEvents = this.removeEvents.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleMenuRef = this.handleMenuRef.bind(this);
    this.handleToggleRef = this.handleToggleRef.bind(this);
    this.containerRef = import_react.default.createRef();
    this.menuRef = import_react.default.createRef();
    this.toggleRef = import_react.default.createRef();
  }
  componentDidMount() {
    this.handleProps();
  }
  componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.handleProps();
    }
  }
  componentWillUnmount() {
    this.removeEvents();
  }
  handleMenuRef(menuRef) {
    this.menuRef.current = menuRef;
  }
  handleToggleRef(toggleRef) {
    this.toggleRef.current = toggleRef;
  }
  handleDocumentClick(e2) {
    if (e2 && (e2.which === 3 || e2.type === "keyup" && e2.which !== keyCodes.tab))
      return;
    const container = this.getContainer();
    const menu = this.getMenu();
    const toggle = this.getToggle();
    const targetIsToggle = e2.target === toggle;
    const clickIsInMenu = menu && menu.contains(e2.target) && menu !== e2.target;
    let clickIsInInput = false;
    if (container) {
      clickIsInInput = container.classList.contains("input-group") && container.classList.contains("dropdown") && e2.target.tagName === "INPUT";
    }
    if ((targetIsToggle && !clickIsInInput || clickIsInMenu) && (e2.type !== "keyup" || e2.which === keyCodes.tab)) {
      return;
    }
    this.toggle(e2);
  }
  handleKeyDown(e2) {
    const isTargetMenuItem = e2.target.getAttribute("role") === "menuitem" || e2.target.getAttribute("role") === "option";
    const isTargetMenuCtrl = this.getMenuCtrl() === e2.target;
    const isTab = keyCodes.tab === e2.which;
    if (/input|textarea/i.test(e2.target.tagName) || isTab && !this.props.a11y || isTab && !(isTargetMenuItem || isTargetMenuCtrl)) {
      return;
    }
    if (preventDefaultKeys.indexOf(e2.which) !== -1 || e2.which >= 48 && e2.which <= 90) {
      e2.preventDefault();
    }
    if (this.props.disabled)
      return;
    if (isTargetMenuCtrl) {
      if ([keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down].indexOf(e2.which) > -1) {
        if (!this.props.isOpen) {
          this.toggle(e2);
        }
        setTimeout(() => this.getMenuItems()[0].focus());
      } else if (this.props.isOpen && isTab) {
        e2.preventDefault();
        this.getMenuItems()[0].focus();
      } else if (this.props.isOpen && e2.which === keyCodes.esc) {
        this.toggle(e2);
      }
    }
    if (this.props.isOpen && isTargetMenuItem) {
      if ([keyCodes.tab, keyCodes.esc].indexOf(e2.which) > -1) {
        this.toggle(e2);
        this.getMenuCtrl().focus();
      } else if ([keyCodes.space, keyCodes.enter].indexOf(e2.which) > -1) {
        e2.target.click();
        this.getMenuCtrl().focus();
      } else if ([keyCodes.down, keyCodes.up].indexOf(e2.which) > -1 || [keyCodes.n, keyCodes.p].indexOf(e2.which) > -1 && e2.ctrlKey) {
        const $menuitems = this.getMenuItems();
        let index = $menuitems.indexOf(e2.target);
        if (keyCodes.up === e2.which || keyCodes.p === e2.which && e2.ctrlKey) {
          index = index !== 0 ? index - 1 : $menuitems.length - 1;
        } else if (keyCodes.down === e2.which || keyCodes.n === e2.which && e2.ctrlKey) {
          index = index === $menuitems.length - 1 ? 0 : index + 1;
        }
        $menuitems[index].focus();
      } else if (keyCodes.end === e2.which) {
        const $menuitems = this.getMenuItems();
        $menuitems[$menuitems.length - 1].focus();
      } else if (keyCodes.home === e2.which) {
        const $menuitems = this.getMenuItems();
        $menuitems[0].focus();
      } else if (e2.which >= 48 && e2.which <= 90) {
        const $menuitems = this.getMenuItems();
        const charPressed = String.fromCharCode(e2.which).toLowerCase();
        for (let i = 0; i < $menuitems.length; i += 1) {
          const firstLetter = $menuitems[i].textContent && $menuitems[i].textContent[0].toLowerCase();
          if (firstLetter === charPressed) {
            $menuitems[i].focus();
            break;
          }
        }
      }
    }
  }
  handleProps() {
    if (this.props.isOpen) {
      this.addEvents();
    } else {
      this.removeEvents();
    }
  }
  getContextValue() {
    return {
      toggle: this.toggle,
      isOpen: this.props.isOpen,
      direction: this.props.direction === "down" && this.props.dropup ? "up" : this.props.direction,
      inNavbar: this.props.inNavbar,
      disabled: this.props.disabled,
      // Callback that should be called by DropdownMenu to provide a ref to
      // a HTML tag that's used for the DropdownMenu
      onMenuRef: this.handleMenuRef,
      onToggleRef: this.handleToggleRef,
      menuRole: this.props.menuRole
    };
  }
  getContainer() {
    return this.containerRef.current;
  }
  getMenu() {
    return this.menuRef.current;
  }
  getToggle() {
    return this.toggleRef.current;
  }
  getMenuCtrl() {
    if (this._$menuCtrl)
      return this._$menuCtrl;
    this._$menuCtrl = this.getToggle();
    return this._$menuCtrl;
  }
  getItemType() {
    if (this.props.menuRole === "listbox") {
      return "option";
    }
    return "menuitem";
  }
  getMenuItems() {
    const menuContainer = this.getMenu() || this.getContainer();
    return [].slice.call(menuContainer.querySelectorAll(`[role="${this.getItemType()}"]`));
  }
  addEvents() {
    ["click", "touchstart", "keyup"].forEach((event) => document.addEventListener(event, this.handleDocumentClick, true));
  }
  removeEvents() {
    ["click", "touchstart", "keyup"].forEach((event) => document.removeEventListener(event, this.handleDocumentClick, true));
  }
  toggle(e2) {
    if (this.props.disabled) {
      return e2 && e2.preventDefault();
    }
    return this.props.toggle(e2);
  }
  render() {
    const _omit = omit(this.props, ["toggle", "disabled", "inNavbar", "a11y"]), {
      className,
      cssModule,
      direction,
      isOpen,
      group,
      size,
      nav,
      setActiveFromChild,
      active,
      tag,
      menuRole
    } = _omit, attrs = _objectWithoutProperties(_omit, _excluded$12);
    const Tag = tag || (nav ? "li" : "div");
    let subItemIsActive = false;
    if (setActiveFromChild) {
      import_react.default.Children.map(this.props.children[1].props.children, (dropdownItem) => {
        if (dropdownItem && dropdownItem.props.active)
          subItemIsActive = true;
      });
    }
    const classes = mapToCssModules(classnames(className, nav && active ? "active" : false, setActiveFromChild && subItemIsActive ? "active" : false, {
      "btn-group": group,
      [`btn-group-${size}`]: !!size,
      dropdown: !group,
      dropup: direction === "up",
      dropstart: direction === "start" || direction === "left",
      dropend: direction === "end" || direction === "right",
      show: isOpen,
      "nav-item": nav
    }), cssModule);
    if (this.context.insideInputGroup) {
      return import_react.default.createElement(DropdownContext.Provider, {
        value: this.getContextValue()
      }, import_react.default.createElement(Manager, null, import_react.default.Children.map(this.props.children, (child) => import_react.default.cloneElement(child, {
        onKeyDown: this.handleKeyDown
      }))));
    }
    return import_react.default.createElement(DropdownContext.Provider, {
      value: this.getContextValue()
    }, import_react.default.createElement(Manager, null, import_react.default.createElement(Tag, _extends({}, attrs, {
      [typeof Tag === "string" ? "ref" : "innerRef"]: this.containerRef,
      onKeyDown: this.handleKeyDown,
      className: classes
    }))));
  }
};
Dropdown.propTypes = propTypes$17;
Dropdown.defaultProps = defaultProps$15;
Dropdown.contextType = InputGroupContext;
var Dropdown$1 = Dropdown;
var propTypes$16 = {
  children: PropTypes.node
};
function ButtonDropdown(props) {
  return import_react.default.createElement(Dropdown$1, _extends({
    group: true
  }, props));
}
ButtonDropdown.propTypes = propTypes$16;
({
  /** Aria label */
  "aria-label": PropTypes.string,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate role attribute needs to be provided. For button groups, this would be role="group", while toolbars should have a role="toolbar". */
  role: PropTypes.string,
  /** Make the button bigger or smaller */
  size: PropTypes.string,
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Make button group vertical */
  vertical: PropTypes.bool
});
({
  /** Aria label */
  "aria-label": PropTypes.string,
  /** Add custom class */
  className: PropTypes.string,
  /** Change existing className with a new className */
  cssModule: PropTypes.object,
  /** In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate role attribute needs to be provided. For button groups, this would be role="group", while toolbars should have a role="toolbar". */
  role: PropTypes.string,
  /** Set a custom element for this component */
  tag: tagPropType
});
var _excluded$$ = ["className", "cssModule", "divider", "tag", "header", "active", "text"];
var propTypes$13 = {
  children: PropTypes.node,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  divider: PropTypes.bool,
  tag: tagPropType,
  header: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  toggle: PropTypes.bool,
  text: PropTypes.bool
};
var defaultProps$12 = {
  tag: "button",
  toggle: true
};
var DropdownItem = class extends import_react.default.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.getTabIndex = this.getTabIndex.bind(this);
  }
  onClick(e2) {
    const {
      disabled,
      header,
      divider,
      text
    } = this.props;
    if (disabled || header || divider || text) {
      e2.preventDefault();
      return;
    }
    if (this.props.onClick) {
      this.props.onClick(e2);
    }
    if (this.props.toggle) {
      this.context.toggle(e2);
    }
  }
  getRole() {
    if (this.context.menuRole === "listbox") {
      return "option";
    }
    return "menuitem";
  }
  getTabIndex() {
    const {
      disabled,
      header,
      divider,
      text
    } = this.props;
    if (disabled || header || divider || text) {
      return "-1";
    }
    return "0";
  }
  render() {
    const tabIndex = this.getTabIndex();
    const role = tabIndex > -1 ? this.getRole() : void 0;
    let _omit = omit(this.props, ["toggle"]), {
      className,
      cssModule,
      divider,
      tag: Tag,
      header,
      active,
      text
    } = _omit, props = _objectWithoutProperties(_omit, _excluded$$);
    const classes = mapToCssModules(classnames(className, {
      disabled: props.disabled,
      "dropdown-item": !divider && !header && !text,
      active,
      "dropdown-header": header,
      "dropdown-divider": divider,
      "dropdown-item-text": text
    }), cssModule);
    if (Tag === "button") {
      if (header) {
        Tag = "h6";
      } else if (divider) {
        Tag = "div";
      } else if (props.href) {
        Tag = "a";
      } else if (text) {
        Tag = "span";
      }
    }
    return import_react.default.createElement(Tag, _extends({
      type: Tag === "button" && (props.onClick || this.props.toggle) ? "button" : void 0
    }, props, {
      tabIndex,
      role,
      className: classes,
      onClick: this.onClick
    }));
  }
};
DropdownItem.propTypes = propTypes$13;
DropdownItem.defaultProps = defaultProps$12;
DropdownItem.contextType = DropdownContext;
var _excluded$_ = ["className", "cssModule", "dark", "end", "right", "tag", "flip", "modifiers", "persist", "strategy", "container", "updateOnSelect"];
var propTypes$12 = {
  tag: tagPropType,
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool,
  end: PropTypes.bool,
  /** Flips the menu to the opposite side if there is not enough space to fit */
  flip: PropTypes.bool,
  modifiers: PropTypes.array,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  style: PropTypes.object,
  persist: PropTypes.bool,
  strategy: PropTypes.string,
  container: targetPropType,
  /** Update popper layout when a click event comes up. This leverages event bubbling. */
  updateOnSelect: PropTypes.bool,
  right: deprecated(PropTypes.bool, 'Please use "end" instead.')
};
var defaultProps$11 = {
  tag: "div",
  flip: true,
  modifiers: []
};
var directionPositionMap = {
  up: "top",
  left: "left",
  right: "right",
  start: "left",
  end: "right",
  down: "bottom"
};
var DropdownMenu = class extends import_react.default.Component {
  getRole() {
    if (this.context.menuRole === "listbox") {
      return "listbox";
    }
    return "menu";
  }
  render() {
    const _this$props = this.props, {
      className,
      cssModule,
      dark,
      end: end2,
      right: right2,
      tag,
      flip: flip2,
      modifiers,
      persist,
      strategy,
      container,
      updateOnSelect
    } = _this$props, attrs = _objectWithoutProperties(_this$props, _excluded$_);
    const classes = mapToCssModules(classnames(className, "dropdown-menu", {
      "dropdown-menu-dark": dark,
      "dropdown-menu-end": end2 || right2,
      show: this.context.isOpen
    }), cssModule);
    const Tag = tag;
    if (persist || this.context.isOpen && !this.context.inNavbar) {
      const position1 = directionPositionMap[this.context.direction] || "bottom";
      const position2 = end2 || right2 ? "end" : "start";
      const poperPlacement = `${position1}-${position2}`;
      const poperModifiers = [...modifiers, {
        name: "flip",
        enabled: !!flip2
      }];
      const popper2 = import_react.default.createElement(Popper, {
        placement: poperPlacement,
        modifiers: poperModifiers,
        strategy
      }, ({
        ref,
        style,
        placement,
        update
      }) => {
        let combinedStyle = _objectSpread2(_objectSpread2({}, this.props.style), style);
        const handleRef = (tagRef) => {
          ref(tagRef);
          const {
            onMenuRef: onMenuRef2
          } = this.context;
          if (onMenuRef2)
            onMenuRef2(tagRef);
        };
        return import_react.default.createElement(Tag, _extends({
          tabIndex: "-1",
          role: this.getRole(),
          ref: handleRef
        }, attrs, {
          style: combinedStyle,
          "aria-hidden": !this.context.isOpen,
          className: classes,
          "data-popper-placement": placement,
          onClick: () => updateOnSelect && update()
        }));
      });
      if (container) {
        return import_react_dom.default.createPortal(popper2, getTarget(container));
      }
      return popper2;
    }
    const {
      onMenuRef
    } = this.context;
    return import_react.default.createElement(Tag, _extends({
      tabIndex: "-1",
      role: this.getRole()
    }, attrs, {
      ref: onMenuRef,
      "aria-hidden": !this.context.isOpen,
      className: classes,
      "data-popper-placement": attrs.placement
    }));
  }
};
DropdownMenu.propTypes = propTypes$12;
DropdownMenu.defaultProps = defaultProps$11;
DropdownMenu.contextType = DropdownContext;
var _excluded$Z = ["className", "color", "cssModule", "caret", "split", "nav", "tag", "innerRef"];
var propTypes$11 = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  "aria-haspopup": PropTypes.bool,
  split: PropTypes.bool,
  tag: tagPropType,
  nav: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
};
var defaultProps$10 = {
  color: "secondary",
  "aria-haspopup": true
};
var DropdownToggle = class extends import_react.default.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(e2) {
    if (this.props.disabled || this.context.disabled) {
      e2.preventDefault();
      return;
    }
    if (this.props.nav && !this.props.tag) {
      e2.preventDefault();
    }
    if (this.props.onClick) {
      this.props.onClick(e2);
    }
    this.context.toggle(e2);
  }
  getRole() {
    return this.context.menuRole || this.props["aria-haspopup"];
  }
  render() {
    const _this$props = this.props, {
      className,
      color,
      cssModule,
      caret,
      split,
      nav,
      tag,
      innerRef
    } = _this$props, props = _objectWithoutProperties(_this$props, _excluded$Z);
    const ariaLabel = props["aria-label"] || "Toggle Dropdown";
    const classes = mapToCssModules(classnames(className, {
      "dropdown-toggle": caret || split,
      "dropdown-toggle-split": split,
      "nav-link": nav
    }), cssModule);
    const children = typeof props.children !== "undefined" ? props.children : import_react.default.createElement("span", {
      className: "visually-hidden"
    }, ariaLabel);
    let Tag;
    if (nav && !tag) {
      Tag = "a";
      props.href = "#";
    } else if (!tag) {
      Tag = Button;
      props.color = color;
      props.cssModule = cssModule;
    } else {
      Tag = tag;
    }
    if (this.context.inNavbar) {
      return import_react.default.createElement(Tag, _extends({}, props, {
        className: classes,
        onClick: this.onClick,
        ref: this.context.onToggleRef,
        "aria-expanded": this.context.isOpen,
        "aria-haspopup": this.getRole(),
        children
      }));
    }
    return import_react.default.createElement(Reference, {
      innerRef
    }, ({
      ref
    }) => {
      const handleRef = (tagRef) => {
        ref(tagRef);
        const {
          onToggleRef
        } = this.context;
        if (onToggleRef)
          onToggleRef(tagRef);
      };
      return import_react.default.createElement(Tag, _extends({}, props, {
        [typeof Tag === "string" ? "ref" : "innerRef"]: handleRef,
        className: classes,
        onClick: this.onClick,
        "aria-expanded": this.context.isOpen,
        "aria-haspopup": this.getRole(),
        children
      }));
    });
  }
};
DropdownToggle.propTypes = propTypes$11;
DropdownToggle.defaultProps = defaultProps$10;
DropdownToggle.contextType = DropdownContext;
var _excluded$Y = ["tag", "baseClass", "baseClassActive", "className", "cssModule", "children", "innerRef"];
var propTypes$10 = _objectSpread2(_objectSpread2({}, Transition$1.propTypes), {}, {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  tag: tagPropType,
  baseClass: PropTypes.string,
  baseClassActive: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
});
var defaultProps$$ = _objectSpread2(_objectSpread2({}, Transition$1.defaultProps), {}, {
  tag: "div",
  baseClass: "fade",
  baseClassActive: "show",
  timeout: TransitionTimeouts.Fade,
  appear: true,
  enter: true,
  exit: true,
  in: true
});
function Fade(props) {
  const {
    tag: Tag,
    baseClass,
    baseClassActive,
    className,
    cssModule,
    children,
    innerRef
  } = props, otherProps = _objectWithoutProperties(props, _excluded$Y);
  const transitionProps = pick(otherProps, TransitionPropTypeKeys);
  const childProps = omit(otherProps, TransitionPropTypeKeys);
  return import_react.default.createElement(Transition$1, transitionProps, (status) => {
    const isActive = status === "entered";
    const classes = mapToCssModules(classnames(className, baseClass, isActive && baseClassActive), cssModule);
    return import_react.default.createElement(Tag, _extends({
      className: classes
    }, childProps, {
      ref: innerRef
    }), children);
  });
}
Fade.propTypes = propTypes$10;
Fade.defaultProps = defaultProps$$;
import_react.default.createContext({});
({
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Change existing className with a new className */
  cssModule: PropTypes.object,
  /** Render accordions edge-to-edge with their parent container */
  flush: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  /** The current active key that corresponds to the currently expanded card */
  open: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Function that's triggered on clicking `AccordionHeader` */
  toggle: PropTypes.func.isRequired
});
({
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  children: PropTypes.node,
  defaultOpen: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  stayOpen: PropTypes.bool
});
({
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Change existing base class name with a new class name */
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Unique key used to control item's collapse/expand */
  targetId: PropTypes.string.isRequired
});
({
  children: PropTypes.node,
  /** To add custom class */
  className: PropTypes.string,
  /** Change existing base class name with a new class name */
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  /** Set a custom element for this component */
  tag: tagPropType
});
var _excluded$T = ["tag", "horizontal", "isOpen", "className", "navbar", "cssModule", "children", "innerRef"];
var propTypes$X = _objectSpread2(_objectSpread2({}, Transition$1.propTypes), {}, {
  /** Make content animation appear horizontally */
  horizontal: PropTypes.bool,
  /** Set if Collapse is open or closed */
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Add custom class */
  className: PropTypes.node,
  navbar: PropTypes.bool,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  innerRef: PropTypes.shape({
    current: PropTypes.object
  })
});
var defaultProps$W = _objectSpread2(_objectSpread2({}, Transition$1.defaultProps), {}, {
  horizontal: false,
  isOpen: false,
  appear: false,
  enter: true,
  exit: true,
  tag: "div",
  timeout: TransitionTimeouts.Collapse
});
var transitionStatusToClassHash = {
  [TransitionStatuses.ENTERING]: "collapsing",
  [TransitionStatuses.ENTERED]: "collapse show",
  [TransitionStatuses.EXITING]: "collapsing",
  [TransitionStatuses.EXITED]: "collapse"
};
function getTransitionClass(status) {
  return transitionStatusToClassHash[status] || "collapse";
}
var Collapse = class extends import_react.Component {
  constructor(props) {
    super(props);
    this.state = {
      dimension: null
    };
    this.nodeRef = props.innerRef || import_react.default.createRef();
    ["onEntering", "onEntered", "onExit", "onExiting", "onExited"].forEach((name) => {
      this[name] = this[name].bind(this);
    });
  }
  onEntering(_, isAppearing) {
    const node = this.getNode();
    this.setState({
      dimension: this.getDimension(node)
    });
    this.props.onEntering(node, isAppearing);
  }
  onEntered(_, isAppearing) {
    const node = this.getNode();
    this.setState({
      dimension: null
    });
    this.props.onEntered(node, isAppearing);
  }
  onExit() {
    const node = this.getNode();
    this.setState({
      dimension: this.getDimension(node)
    });
    this.props.onExit(node);
  }
  onExiting() {
    const node = this.getNode();
    this.getDimension(node);
    this.setState({
      dimension: 0
    });
    this.props.onExiting(node);
  }
  onExited() {
    const node = this.getNode();
    this.setState({
      dimension: null
    });
    this.props.onExited(node);
  }
  getNode() {
    return this.nodeRef.current;
  }
  getDimension(node) {
    return this.props.horizontal ? node.scrollWidth : node.scrollHeight;
  }
  render() {
    const _this$props = this.props, {
      tag: Tag,
      horizontal,
      isOpen,
      className,
      navbar,
      cssModule,
      children,
      innerRef
    } = _this$props, otherProps = _objectWithoutProperties(_this$props, _excluded$T);
    const {
      dimension
    } = this.state;
    const transitionProps = pick(otherProps, TransitionPropTypeKeys);
    const childProps = omit(otherProps, TransitionPropTypeKeys);
    return import_react.default.createElement(Transition$1, _extends({}, transitionProps, {
      in: isOpen,
      nodeRef: this.nodeRef,
      onEntering: this.onEntering,
      onEntered: this.onEntered,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }), (status) => {
      let collapseClass = getTransitionClass(status);
      const classes = mapToCssModules(classnames(className, horizontal && "collapse-horizontal", collapseClass, navbar && "navbar-collapse"), cssModule);
      const style = dimension === null ? null : {
        [horizontal ? "width" : "height"]: dimension
      };
      return import_react.default.createElement(Tag, _extends({}, childProps, {
        style: _objectSpread2(_objectSpread2({}, childProps.style), style),
        className: classes,
        ref: this.nodeRef
      }), children);
    });
  }
};
Collapse.propTypes = propTypes$X;
Collapse.defaultProps = defaultProps$W;
var Collapse$1 = Collapse;
({
  /** Unique key used to control item's collapse/expand */
  accordionId: PropTypes.string.isRequired,
  /** To add custom class */
  className: PropTypes.string,
  children: PropTypes.node,
  /** Change existing base class name with a new class name */
  cssModule: PropTypes.object,
  /** Pass ref to the component */
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  /** Set a custom element for this component */
  tag: tagPropType
});
({
  /** Pass children so this component can wrap the child elements */
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Change background color of Badge */
  color: PropTypes.string,
  /** Change existing className with a new className */
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  /** Add rounded corners to the Badge */
  pill: PropTypes.bool,
  /** Set a custom element for this component */
  tag: tagPropType
});
({
  /** Toggles card padding using `.card-body` */
  body: PropTypes.bool,
  /** Add custom class */
  className: PropTypes.string,
  /** Change background color of component */
  color: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  /** Inverts the color */
  inverse: PropTypes.bool,
  /** Changes the card to have only outline */
  outline: PropTypes.bool,
  /** Set a custom element for this component */
  tag: tagPropType
});
({
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
});
({
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
});
({
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
});
({
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  /** Set a custom element for this component */
  tag: tagPropType
});
({
  tag: tagPropType,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
});
({
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType
});
({
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType
});
({
  /** Add `bottom` prop if image is at bottom of card */
  bottom: PropTypes.bool,
  /** Add custom class */
  className: PropTypes.string,
  /** Change existing className with a new className */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Add `top` prop if image is at top of card */
  top: PropTypes.bool
});
({
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
});
var CarouselContext = import_react.default.createContext({});
var _excluded$G = ["in", "children", "cssModule", "slide", "tag", "className"];
var CarouselItem = class extends import_react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      startAnimation: false
    };
    this.onEnter = this.onEnter.bind(this);
    this.onEntering = this.onEntering.bind(this);
    this.onExit = this.onExit.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  onEnter(node, isAppearing) {
    this.setState({
      startAnimation: false
    });
    this.props.onEnter(node, isAppearing);
  }
  onEntering(node, isAppearing) {
    const {
      offsetHeight
    } = node;
    this.setState({
      startAnimation: true
    });
    this.props.onEntering(node, isAppearing);
    return offsetHeight;
  }
  onExit(node) {
    this.setState({
      startAnimation: false
    });
    this.props.onExit(node);
  }
  onExiting(node) {
    this.setState({
      startAnimation: true
    });
    node.dispatchEvent(new CustomEvent("slide.bs.carousel"));
    this.props.onExiting(node);
  }
  onExited(node) {
    node.dispatchEvent(new CustomEvent("slid.bs.carousel"));
    this.props.onExited(node);
  }
  render() {
    const _this$props = this.props, {
      in: isIn,
      children,
      cssModule,
      slide,
      tag: Tag,
      className
    } = _this$props, transitionProps = _objectWithoutProperties(_this$props, _excluded$G);
    return import_react.default.createElement(Transition$1, _extends({}, transitionProps, {
      enter: slide,
      exit: slide,
      in: isIn,
      onEnter: this.onEnter,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }), (status) => {
      const {
        direction
      } = this.context;
      const isActive = status === TransitionStatuses.ENTERED || status === TransitionStatuses.EXITING;
      const directionClassName = (status === TransitionStatuses.ENTERING || status === TransitionStatuses.EXITING) && this.state.startAnimation && (direction === "end" ? "carousel-item-start" : "carousel-item-end");
      const orderClassName = status === TransitionStatuses.ENTERING && (direction === "end" ? "carousel-item-next" : "carousel-item-prev");
      const itemClasses = mapToCssModules(classnames(className, "carousel-item", isActive && "active", directionClassName, orderClassName), cssModule);
      return import_react.default.createElement(Tag, {
        className: itemClasses
      }, children);
    });
  }
};
CarouselItem.propTypes = _objectSpread2(_objectSpread2({}, Transition$1.propTypes), {}, {
  /** Set a custom element for this component */
  tag: tagPropType,
  in: PropTypes.bool,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  children: PropTypes.node,
  /** Enable/disable animation */
  slide: PropTypes.bool,
  /** Add custom class */
  className: PropTypes.string
});
CarouselItem.defaultProps = _objectSpread2(_objectSpread2({}, Transition$1.defaultProps), {}, {
  tag: "div",
  timeout: TransitionTimeouts.Carousel,
  slide: true
});
CarouselItem.contextType = CarouselContext;
var CarouselItem$1 = CarouselItem;
var SWIPE_THRESHOLD = 40;
var propTypes$K = {
  /** the current active slide of the carousel */
  activeIndex: PropTypes.number,
  /** a function which should advance the carousel to the next slide (via activeIndex) */
  next: PropTypes.func.isRequired,
  /** a function which should advance the carousel to the previous slide (via activeIndex) */
  previous: PropTypes.func.isRequired,
  /** controls if the left and right arrow keys should control the carousel */
  keyboard: PropTypes.bool,
  /** If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it.
   */
  pause: PropTypes.oneOf(["hover", false]),
  /** Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load. */
  ride: PropTypes.oneOf(["carousel"]),
  /** the interval at which the carousel automatically cycles */
  interval: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  children: PropTypes.array,
  /** called when the mouse enters the Carousel */
  mouseEnter: PropTypes.func,
  /** called when the mouse exits the Carousel */
  mouseLeave: PropTypes.func,
  /** controls whether the slide animation on the Carousel works or not */
  slide: PropTypes.bool,
  /** make the controls, indicators and captions dark on the Carousel */
  dark: PropTypes.bool,
  fade: PropTypes.bool,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Add custom class */
  className: PropTypes.string,
  /** Enable touch support */
  enableTouch: PropTypes.bool
};
var propsToOmit$2 = Object.keys(propTypes$K);
var defaultProps$J = {
  interval: 5e3,
  pause: "hover",
  keyboard: true,
  slide: true,
  enableTouch: true,
  fade: false
};
var Carousel = class extends import_react.default.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.hoverStart = this.hoverStart.bind(this);
    this.hoverEnd = this.hoverEnd.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.state = {
      activeIndex: this.props.activeIndex,
      direction: "end",
      indicatorClicked: false
    };
  }
  componentDidMount() {
    if (this.props.ride === "carousel") {
      this.setInterval();
    }
    document.addEventListener("keyup", this.handleKeyPress);
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    let newState = null;
    let {
      activeIndex,
      direction,
      indicatorClicked
    } = prevState;
    if (nextProps.activeIndex !== activeIndex) {
      if (nextProps.activeIndex === activeIndex + 1) {
        direction = "end";
      } else if (nextProps.activeIndex === activeIndex - 1) {
        direction = "start";
      } else if (nextProps.activeIndex < activeIndex) {
        direction = indicatorClicked ? "start" : "end";
      } else if (nextProps.activeIndex !== activeIndex) {
        direction = indicatorClicked ? "end" : "start";
      }
      newState = {
        activeIndex: nextProps.activeIndex,
        direction,
        indicatorClicked: false
      };
    }
    return newState;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeIndex === this.state.activeIndex)
      return;
    this.setInterval();
  }
  componentWillUnmount() {
    this.clearInterval();
    document.removeEventListener("keyup", this.handleKeyPress);
  }
  handleKeyPress(evt) {
    if (this.props.keyboard) {
      if (evt.keyCode === 37) {
        this.props.previous();
      } else if (evt.keyCode === 39) {
        this.props.next();
      }
    }
  }
  handleTouchStart(e2) {
    if (!this.props.enableTouch) {
      return;
    }
    this.touchStartX = e2.changedTouches[0].screenX;
    this.touchStartY = e2.changedTouches[0].screenY;
  }
  handleTouchEnd(e2) {
    if (!this.props.enableTouch) {
      return;
    }
    const currentX = e2.changedTouches[0].screenX;
    const currentY = e2.changedTouches[0].screenY;
    const diffX = Math.abs(this.touchStartX - currentX);
    const diffY = Math.abs(this.touchStartY - currentY);
    if (diffX < diffY) {
      return;
    }
    if (diffX < SWIPE_THRESHOLD) {
      return;
    }
    if (currentX < this.touchStartX) {
      this.props.next();
    } else {
      this.props.previous();
    }
  }
  getContextValue() {
    return {
      direction: this.state.direction
    };
  }
  setInterval() {
    this.clearInterval();
    if (this.props.interval) {
      this.cycleInterval = setInterval(() => {
        this.props.next();
      }, parseInt(this.props.interval, 10));
    }
  }
  clearInterval() {
    clearInterval(this.cycleInterval);
  }
  hoverStart(...args) {
    if (this.props.pause === "hover") {
      this.clearInterval();
    }
    if (this.props.mouseEnter) {
      this.props.mouseEnter(...args);
    }
  }
  hoverEnd(...args) {
    if (this.props.pause === "hover") {
      this.setInterval();
    }
    if (this.props.mouseLeave) {
      this.props.mouseLeave(...args);
    }
  }
  renderItems(carouselItems, className) {
    const {
      slide
    } = this.props;
    return import_react.default.createElement("div", {
      className
    }, carouselItems.map((item, index) => {
      const isIn = index === this.state.activeIndex;
      return import_react.default.cloneElement(item, {
        in: isIn,
        slide
      });
    }));
  }
  render() {
    const {
      cssModule,
      slide,
      className,
      dark,
      fade
    } = this.props;
    const attributes = omit(this.props, propsToOmit$2);
    const outerClasses = mapToCssModules(classnames(className, "carousel", fade && "carousel-fade", slide && "slide", dark && "carousel-dark"), cssModule);
    const innerClasses = mapToCssModules(classnames("carousel-inner"), cssModule);
    const children = this.props.children.filter((child) => child !== null && child !== void 0 && typeof child !== "boolean");
    const slidesOnly = children.every((child) => child.type === CarouselItem$1);
    if (slidesOnly) {
      return import_react.default.createElement("div", _extends({}, attributes, {
        className: outerClasses,
        onMouseEnter: this.hoverStart,
        onMouseLeave: this.hoverEnd
      }), import_react.default.createElement(CarouselContext.Provider, {
        value: this.getContextValue()
      }, this.renderItems(children, innerClasses)));
    }
    if (children[0] instanceof Array) {
      const _carouselItems = children[0];
      const _controlLeft = children[1];
      const _controlRight = children[2];
      return import_react.default.createElement("div", _extends({}, attributes, {
        className: outerClasses,
        onMouseEnter: this.hoverStart,
        onMouseLeave: this.hoverEnd
      }), import_react.default.createElement(CarouselContext.Provider, {
        value: this.getContextValue()
      }, this.renderItems(_carouselItems, innerClasses), _controlLeft, _controlRight));
    }
    const indicators = children[0];
    const wrappedOnClick = (e2) => {
      if (typeof indicators.props.onClickHandler === "function") {
        this.setState({
          indicatorClicked: true
        }, () => indicators.props.onClickHandler(e2));
      }
    };
    const wrappedIndicators = import_react.default.cloneElement(indicators, {
      onClickHandler: wrappedOnClick
    });
    const carouselItems = children[1];
    const controlLeft = children[2];
    const controlRight = children[3];
    return import_react.default.createElement("div", _extends({}, attributes, {
      className: outerClasses,
      onMouseEnter: this.hoverStart,
      onMouseLeave: this.hoverEnd,
      onTouchStart: this.handleTouchStart,
      onTouchEnd: this.handleTouchEnd
    }), import_react.default.createElement(CarouselContext.Provider, {
      value: this.getContextValue()
    }, wrappedIndicators, this.renderItems(carouselItems, innerClasses), controlLeft, controlRight));
  }
};
Carousel.propTypes = propTypes$K;
Carousel.defaultProps = defaultProps$J;
var Carousel$1 = Carousel;
var _excluded$F = ["direction", "onClickHandler", "cssModule", "directionText", "className"];
function CarouselControl(props) {
  const {
    direction,
    onClickHandler,
    cssModule,
    directionText,
    className
  } = props, attributes = _objectWithoutProperties(props, _excluded$F);
  const anchorClasses = mapToCssModules(classnames(className, `carousel-control-${direction}`), cssModule);
  const iconClasses = mapToCssModules(classnames(`carousel-control-${direction}-icon`), cssModule);
  const screenReaderClasses = mapToCssModules(classnames("visually-hidden"), cssModule);
  return (
    // We need to disable this linting rule to use an `<a>` instead of
    // `<button>` because that's what the Bootstrap examples require:
    // https://getbootstrap.com/docs/4.5/components/carousel/#with-controls
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    import_react.default.createElement("a", _extends({}, attributes, {
      className: anchorClasses,
      style: {
        cursor: "pointer"
      },
      role: "button",
      tabIndex: "0",
      onClick: (e2) => {
        e2.preventDefault();
        onClickHandler();
      }
    }), import_react.default.createElement("span", {
      className: iconClasses,
      "aria-hidden": "true"
    }), import_react.default.createElement("span", {
      className: screenReaderClasses
    }, directionText || direction))
  );
}
CarouselControl.propTypes = {
  /** Set the direction of control button */
  direction: PropTypes.oneOf(["prev", "next"]).isRequired,
  /** Function to be triggered on click */
  onClickHandler: PropTypes.func.isRequired,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Screen reader text */
  directionText: PropTypes.string,
  /** Add custom class */
  className: PropTypes.string
};
var _excluded$E = ["items", "activeIndex", "cssModule", "onClickHandler", "className"];
function CarouselIndicators(props) {
  const {
    items,
    activeIndex,
    cssModule,
    onClickHandler,
    className
  } = props, attributes = _objectWithoutProperties(props, _excluded$E);
  const listClasses = mapToCssModules(classnames(className, "carousel-indicators"), cssModule);
  const indicators = items.map((item, idx) => {
    const indicatorClasses = mapToCssModules(classnames({
      active: activeIndex === idx
    }), cssModule);
    return import_react.default.createElement("button", {
      "aria-label": item.caption,
      "data-bs-target": true,
      type: "button",
      key: `${item.key || Object.values(item).join("")}`,
      onClick: (e2) => {
        e2.preventDefault();
        onClickHandler(idx);
      },
      className: indicatorClasses
    });
  });
  return import_react.default.createElement("div", _extends({
    className: listClasses
  }, attributes), indicators);
}
CarouselIndicators.propTypes = {
  /** The current active index */
  activeIndex: PropTypes.number.isRequired,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Array of items to show */
  items: PropTypes.array.isRequired,
  /** Function to be triggered on click */
  onClickHandler: PropTypes.func.isRequired
};
function CarouselCaption(props) {
  const {
    captionHeader,
    captionText,
    cssModule,
    className
  } = props;
  const classes = mapToCssModules(classnames(className, "carousel-caption", "d-none", "d-md-block"), cssModule);
  return import_react.default.createElement("div", {
    className: classes
  }, import_react.default.createElement("h3", null, captionHeader), import_react.default.createElement("p", null, captionText));
}
CarouselCaption.propTypes = {
  /** Heading for the caption */
  captionHeader: PropTypes.node,
  /** Text for caption */
  captionText: PropTypes.node.isRequired,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object
};
var _excluded$D = ["defaultActiveIndex", "autoPlay", "indicators", "controls", "items", "goToIndex"];
var propTypes$J = {
  items: PropTypes.array.isRequired,
  indicators: PropTypes.bool,
  controls: PropTypes.bool,
  autoPlay: PropTypes.bool,
  defaultActiveIndex: PropTypes.number,
  activeIndex: PropTypes.number,
  next: PropTypes.func,
  previous: PropTypes.func,
  goToIndex: PropTypes.func
};
var UncontrolledCarousel = class extends import_react.Component {
  constructor(props) {
    super(props);
    this.animating = false;
    this.state = {
      activeIndex: props.defaultActiveIndex || 0
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  onExiting() {
    this.animating = true;
  }
  onExited() {
    this.animating = false;
  }
  next() {
    if (this.animating)
      return;
    this.setState((prevState) => {
      const nextIndex = prevState.activeIndex === this.props.items.length - 1 ? 0 : prevState.activeIndex + 1;
      return {
        activeIndex: nextIndex
      };
    });
  }
  previous() {
    if (this.animating)
      return;
    this.setState((prevState) => {
      const nextIndex = prevState.activeIndex === 0 ? this.props.items.length - 1 : prevState.activeIndex - 1;
      return {
        activeIndex: nextIndex
      };
    });
  }
  goToIndex(newIndex) {
    if (this.animating)
      return;
    this.setState({
      activeIndex: newIndex
    });
  }
  render() {
    const _this$props = this.props, {
      defaultActiveIndex,
      autoPlay,
      indicators,
      controls,
      items,
      goToIndex
    } = _this$props, props = _objectWithoutProperties(_this$props, _excluded$D);
    const {
      activeIndex
    } = this.state;
    const slides = items.map((item) => {
      const key = item.key || item.src;
      return import_react.default.createElement(CarouselItem$1, {
        onExiting: this.onExiting,
        onExited: this.onExited,
        key
      }, import_react.default.createElement("img", {
        className: "d-block w-100",
        src: item.src,
        alt: item.altText
      }), import_react.default.createElement(CarouselCaption, {
        captionText: item.caption,
        captionHeader: item.header || item.caption
      }));
    });
    return import_react.default.createElement(Carousel$1, _extends({
      activeIndex,
      next: this.next,
      previous: this.previous,
      ride: autoPlay ? "carousel" : void 0
    }, props), indicators && import_react.default.createElement(CarouselIndicators, {
      items,
      activeIndex: props.activeIndex || activeIndex,
      onClickHandler: goToIndex || this.goToIndex
    }), slides, controls && import_react.default.createElement(CarouselControl, {
      direction: "prev",
      directionText: "Previous",
      onClickHandler: props.previous || this.previous
    }), controls && import_react.default.createElement(CarouselControl, {
      direction: "next",
      directionText: "Next",
      onClickHandler: props.next || this.next
    }));
  }
};
UncontrolledCarousel.propTypes = propTypes$J;
UncontrolledCarousel.defaultProps = {
  controls: true,
  indicators: true,
  autoPlay: true
};
({
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType
});
({
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType
});
({
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType
});
var _excluded$z = ["cssModule", "children", "isOpen", "flip", "target", "offset", "fallbackPlacements", "placementPrefix", "arrowClassName", "hideArrow", "popperClassName", "tag", "container", "modifiers", "strategy", "boundariesElement", "onClosed", "fade", "transition", "placement"];
function noop$2() {
}
var propTypes$F = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  popperClassName: PropTypes.string,
  placement: PropTypes.string,
  placementPrefix: PropTypes.string,
  arrowClassName: PropTypes.string,
  hideArrow: PropTypes.bool,
  tag: tagPropType,
  isOpen: PropTypes.bool,
  cssModule: PropTypes.object,
  offset: PropTypes.arrayOf(PropTypes.number),
  fallbackPlacements: PropTypes.array,
  flip: PropTypes.bool,
  container: targetPropType,
  target: targetPropType.isRequired,
  modifiers: PropTypes.array,
  strategy: PropTypes.string,
  boundariesElement: PropTypes.oneOfType([PropTypes.string, DOMElement]),
  onClosed: PropTypes.func,
  fade: PropTypes.bool,
  transition: PropTypes.shape(Fade.propTypes)
};
var defaultProps$F = {
  boundariesElement: "scrollParent",
  placement: "auto",
  hideArrow: false,
  isOpen: false,
  offset: [0, 0],
  flip: true,
  container: "body",
  modifiers: [],
  onClosed: noop$2,
  fade: true,
  transition: _objectSpread2({}, Fade.defaultProps)
};
var PopperContent = class extends import_react.default.Component {
  constructor(props) {
    super(props);
    this.setTargetNode = this.setTargetNode.bind(this);
    this.getTargetNode = this.getTargetNode.bind(this);
    this.getRef = this.getRef.bind(this);
    this.onClosed = this.onClosed.bind(this);
    this.state = {
      isOpen: props.isOpen
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.isOpen && !state.isOpen) {
      return {
        isOpen: props.isOpen
      };
    }
    return null;
  }
  componentDidUpdate() {
    if (this._element && this._element.childNodes && this._element.childNodes[0] && this._element.childNodes[0].focus) {
      this._element.childNodes[0].focus();
    }
  }
  onClosed() {
    this.props.onClosed();
    this.setState({
      isOpen: false
    });
  }
  getTargetNode() {
    return this.targetNode;
  }
  getContainerNode() {
    return getTarget(this.props.container);
  }
  getRef(ref) {
    this._element = ref;
  }
  setTargetNode(node) {
    this.targetNode = typeof node === "string" ? getTarget(node) : node;
  }
  renderChildren() {
    const _this$props = this.props, {
      cssModule,
      children,
      isOpen,
      flip: flip2,
      target,
      offset: offset2,
      fallbackPlacements,
      placementPrefix,
      arrowClassName: _arrowClassName,
      hideArrow,
      popperClassName: _popperClassName,
      tag,
      container,
      modifiers,
      strategy,
      boundariesElement,
      onClosed,
      fade,
      transition,
      placement
    } = _this$props, attrs = _objectWithoutProperties(_this$props, _excluded$z);
    const arrowClassName = mapToCssModules(classnames("arrow", _arrowClassName), cssModule);
    const popperClassName = mapToCssModules(classnames(_popperClassName, placementPrefix ? `${placementPrefix}-auto` : ""), this.props.cssModule);
    const modifierNames = modifiers.map((m2) => m2.name);
    const baseModifiers = [{
      name: "offset",
      options: {
        offset: offset2
      }
    }, {
      name: "flip",
      enabled: flip2,
      options: {
        fallbackPlacements
      }
    }, {
      name: "preventOverflow",
      options: {
        boundary: boundariesElement
      }
    }].filter((m2) => !modifierNames.includes(m2.name));
    const extendedModifiers = [...baseModifiers, ...modifiers];
    const popperTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), transition), {}, {
      baseClass: fade ? transition.baseClass : "",
      timeout: fade ? transition.timeout : 0
    });
    return import_react.default.createElement(Fade, _extends({}, popperTransition, attrs, {
      in: isOpen,
      onExited: this.onClosed,
      tag
    }), import_react.default.createElement(Popper, {
      referenceElement: this.targetNode,
      modifiers: extendedModifiers,
      placement,
      strategy
    }, ({
      ref,
      style,
      placement: popperPlacement,
      isReferenceHidden,
      arrowProps,
      update
    }) => import_react.default.createElement("div", {
      ref,
      style,
      className: popperClassName,
      "data-popper-placement": popperPlacement,
      "data-popper-reference-hidden": isReferenceHidden ? "true" : void 0
    }, typeof children === "function" ? children({
      update
    }) : children, !hideArrow && import_react.default.createElement("span", {
      ref: arrowProps.ref,
      className: arrowClassName,
      style: arrowProps.style
    }))));
  }
  render() {
    this.setTargetNode(this.props.target);
    if (this.state.isOpen) {
      return this.props.container === "inline" ? this.renderChildren() : import_react_dom.default.createPortal(import_react.default.createElement("div", {
        ref: this.getRef
      }, this.renderChildren()), this.getContainerNode());
    }
    return null;
  }
};
PopperContent.propTypes = propTypes$F;
PopperContent.defaultProps = defaultProps$F;
var PopperContent$1 = PopperContent;
({
  popperManager: PropTypes.object.isRequired
});
({
  target: targetPropType.isRequired
});
var propTypes$E = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  placement: PropTypes.oneOf(PopperPlacements),
  target: targetPropType.isRequired,
  container: targetPropType,
  isOpen: PropTypes.bool,
  disabled: PropTypes.bool,
  hideArrow: PropTypes.bool,
  boundariesElement: PropTypes.oneOfType([PropTypes.string, DOMElement]),
  className: PropTypes.string,
  innerClassName: PropTypes.string,
  arrowClassName: PropTypes.string,
  popperClassName: PropTypes.string,
  cssModule: PropTypes.object,
  toggle: PropTypes.func,
  autohide: PropTypes.bool,
  placementPrefix: PropTypes.string,
  delay: PropTypes.oneOfType([PropTypes.shape({
    show: PropTypes.number,
    hide: PropTypes.number
  }), PropTypes.number]),
  modifiers: PropTypes.array,
  strategy: PropTypes.string,
  offset: PropTypes.arrayOf(PropTypes.number),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object]),
  trigger: PropTypes.string,
  fade: PropTypes.bool,
  flip: PropTypes.bool
};
var DEFAULT_DELAYS = {
  show: 0,
  hide: 50
};
var defaultProps$E = {
  isOpen: false,
  hideArrow: false,
  autohide: false,
  delay: DEFAULT_DELAYS,
  toggle: function() {
  },
  trigger: "click",
  fade: true
};
function isInDOMSubtree(element, subtreeRoot) {
  return subtreeRoot && (element === subtreeRoot || subtreeRoot.contains(element));
}
function isInDOMSubtrees(element, subtreeRoots = []) {
  return subtreeRoots && subtreeRoots.length && subtreeRoots.filter((subTreeRoot) => isInDOMSubtree(element, subTreeRoot))[0];
}
var TooltipPopoverWrapper = class extends import_react.default.Component {
  constructor(props) {
    super(props);
    this._targets = [];
    this.currentTargetElement = null;
    this.addTargetEvents = this.addTargetEvents.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.removeTargetEvents = this.removeTargetEvents.bind(this);
    this.toggle = this.toggle.bind(this);
    this.showWithDelay = this.showWithDelay.bind(this);
    this.hideWithDelay = this.hideWithDelay.bind(this);
    this.onMouseOverTooltipContent = this.onMouseOverTooltipContent.bind(this);
    this.onMouseLeaveTooltipContent = this.onMouseLeaveTooltipContent.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.onEscKeyDown = this.onEscKeyDown.bind(this);
    this.getRef = this.getRef.bind(this);
    this.state = {
      isOpen: props.isOpen
    };
    this._isMounted = false;
  }
  componentDidMount() {
    this._isMounted = true;
    this.updateTarget();
  }
  componentWillUnmount() {
    this._isMounted = false;
    this.removeTargetEvents();
    this._targets = null;
    this.clearShowTimeout();
    this.clearHideTimeout();
  }
  static getDerivedStateFromProps(props, state) {
    if (props.isOpen && !state.isOpen) {
      return {
        isOpen: props.isOpen
      };
    }
    return null;
  }
  handleDocumentClick(e2) {
    const triggers = this.props.trigger.split(" ");
    if (triggers.indexOf("legacy") > -1 && (this.props.isOpen || isInDOMSubtrees(e2.target, this._targets))) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }
      if (this.props.isOpen && !isInDOMSubtree(e2.target, this._popover)) {
        this.hideWithDelay(e2);
      } else if (!this.props.isOpen) {
        this.showWithDelay(e2);
      }
    } else if (triggers.indexOf("click") > -1 && isInDOMSubtrees(e2.target, this._targets)) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }
      if (!this.props.isOpen) {
        this.showWithDelay(e2);
      } else {
        this.hideWithDelay(e2);
      }
    }
  }
  onMouseOverTooltipContent() {
    if (this.props.trigger.indexOf("hover") > -1 && !this.props.autohide) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }
      if (this.state.isOpen && !this.props.isOpen) {
        this.toggle();
      }
    }
  }
  onMouseLeaveTooltipContent(e2) {
    if (this.props.trigger.indexOf("hover") > -1 && !this.props.autohide) {
      if (this._showTimeout) {
        this.clearShowTimeout();
      }
      e2.persist();
      this._hideTimeout = setTimeout(this.hide.bind(this, e2), this.getDelay("hide"));
    }
  }
  onEscKeyDown(e2) {
    if (e2.key === "Escape") {
      this.hide(e2);
    }
  }
  getRef(ref) {
    const {
      innerRef
    } = this.props;
    if (innerRef) {
      if (typeof innerRef === "function") {
        innerRef(ref);
      } else if (typeof innerRef === "object") {
        innerRef.current = ref;
      }
    }
    this._popover = ref;
  }
  getDelay(key) {
    const {
      delay
    } = this.props;
    if (typeof delay === "object") {
      return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
    }
    return delay;
  }
  getCurrentTarget(target) {
    if (!target)
      return null;
    const index = this._targets.indexOf(target);
    if (index >= 0)
      return this._targets[index];
    return this.getCurrentTarget(target.parentElement);
  }
  show(e2) {
    if (!this.props.isOpen) {
      this.clearShowTimeout();
      this.currentTargetElement = e2 ? e2.currentTarget || this.getCurrentTarget(e2.target) : null;
      if (e2 && e2.composedPath && typeof e2.composedPath === "function") {
        const path = e2.composedPath();
        this.currentTargetElement = path && path[0] || this.currentTargetElement;
      }
      this.toggle(e2);
    }
  }
  showWithDelay(e2) {
    if (this._hideTimeout) {
      this.clearHideTimeout();
    }
    this._showTimeout = setTimeout(this.show.bind(this, e2), this.getDelay("show"));
  }
  hide(e2) {
    if (this.props.isOpen) {
      this.clearHideTimeout();
      this.currentTargetElement = null;
      this.toggle(e2);
    }
  }
  hideWithDelay(e2) {
    if (this._showTimeout) {
      this.clearShowTimeout();
    }
    this._hideTimeout = setTimeout(this.hide.bind(this, e2), this.getDelay("hide"));
  }
  clearShowTimeout() {
    clearTimeout(this._showTimeout);
    this._showTimeout = void 0;
  }
  clearHideTimeout() {
    clearTimeout(this._hideTimeout);
    this._hideTimeout = void 0;
  }
  addEventOnTargets(type, handler, isBubble) {
    this._targets.forEach((target) => {
      target.addEventListener(type, handler, isBubble);
    });
  }
  removeEventOnTargets(type, handler, isBubble) {
    this._targets.forEach((target) => {
      target.removeEventListener(type, handler, isBubble);
    });
  }
  addTargetEvents() {
    if (this.props.trigger) {
      let triggers = this.props.trigger.split(" ");
      if (triggers.indexOf("manual") === -1) {
        if (triggers.indexOf("click") > -1 || triggers.indexOf("legacy") > -1) {
          document.addEventListener("click", this.handleDocumentClick, true);
        }
        if (this._targets && this._targets.length) {
          if (triggers.indexOf("hover") > -1) {
            this.addEventOnTargets("mouseover", this.showWithDelay, true);
            this.addEventOnTargets("mouseout", this.hideWithDelay, true);
          }
          if (triggers.indexOf("focus") > -1) {
            this.addEventOnTargets("focusin", this.show, true);
            this.addEventOnTargets("focusout", this.hide, true);
          }
          this.addEventOnTargets("keydown", this.onEscKeyDown, true);
        }
      }
    }
  }
  removeTargetEvents() {
    if (this._targets) {
      this.removeEventOnTargets("mouseover", this.showWithDelay, true);
      this.removeEventOnTargets("mouseout", this.hideWithDelay, true);
      this.removeEventOnTargets("keydown", this.onEscKeyDown, true);
      this.removeEventOnTargets("focusin", this.show, true);
      this.removeEventOnTargets("focusout", this.hide, true);
    }
    document.removeEventListener("click", this.handleDocumentClick, true);
  }
  updateTarget() {
    const newTarget = getTarget(this.props.target, true);
    if (newTarget !== this._targets) {
      this.removeTargetEvents();
      this._targets = newTarget ? Array.from(newTarget) : [];
      this.currentTargetElement = this.currentTargetElement || this._targets[0];
      this.addTargetEvents();
    }
  }
  toggle(e2) {
    if (this.props.disabled || !this._isMounted) {
      return e2 && e2.preventDefault();
    }
    return this.props.toggle(e2);
  }
  render() {
    if (this.props.isOpen) {
      this.updateTarget();
    }
    const target = this.currentTargetElement || this._targets[0];
    if (!target) {
      return null;
    }
    const {
      className,
      cssModule,
      innerClassName,
      isOpen,
      hideArrow,
      boundariesElement,
      placement,
      placementPrefix,
      arrowClassName,
      popperClassName,
      container,
      modifiers,
      strategy,
      offset: offset2,
      fade,
      flip: flip2,
      children
    } = this.props;
    const attributes = omit(this.props, Object.keys(propTypes$E));
    const popperClasses = mapToCssModules(popperClassName, cssModule);
    const classes = mapToCssModules(innerClassName, cssModule);
    return import_react.default.createElement(PopperContent$1, {
      className,
      target,
      isOpen,
      hideArrow,
      boundariesElement,
      placement,
      placementPrefix,
      arrowClassName,
      popperClassName: popperClasses,
      container,
      modifiers,
      strategy,
      offset: offset2,
      cssModule,
      fade,
      flip: flip2
    }, ({
      update
    }) => import_react.default.createElement("div", _extends({}, attributes, {
      ref: this.getRef,
      className: classes,
      role: "tooltip",
      onMouseOver: this.onMouseOverTooltipContent,
      onMouseLeave: this.onMouseLeaveTooltipContent,
      onKeyDown: this.onEscKeyDown
    }), typeof children === "function" ? children({
      update
    }) : children));
  }
};
TooltipPopoverWrapper.propTypes = propTypes$E;
TooltipPopoverWrapper.defaultProps = defaultProps$E;
var TooltipPopoverWrapper$1 = TooltipPopoverWrapper;
var defaultProps$D = {
  placement: "right",
  placementPrefix: "bs-popover",
  trigger: "click",
  offset: [0, 8]
};
function Popover(props) {
  const popperClasses = classnames("popover", "show", props.popperClassName);
  const classes = classnames("popover-inner", props.innerClassName);
  return import_react.default.createElement(TooltipPopoverWrapper$1, _extends({}, props, {
    arrowClassName: "popover-arrow",
    popperClassName: popperClasses,
    innerClassName: classes
  }));
}
Popover.propTypes = propTypes$E;
Popover.defaultProps = defaultProps$D;
var omitKeys$4 = ["defaultOpen"];
var UncontrolledPopover = class extends import_react.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.defaultOpen || false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  }
  render() {
    return import_react.default.createElement(Popover, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys$4)));
  }
};
UncontrolledPopover.propTypes = _objectSpread2({
  defaultOpen: PropTypes.bool
}, Popover.propTypes);
({
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
});
({
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
});
({
  /** Enable animation to bar */
  animated: PropTypes.bool,
  bar: PropTypes.bool,
  barAriaLabelledBy: PropTypes.string,
  barAriaValueText: PropTypes.string,
  barClassName: PropTypes.string,
  barStyle: PropTypes.object,
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Add custom color to the placeholder */
  color: PropTypes.string,
  /** Maximum value of progress */
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Minimum value of progress, defaults to zero */
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  multi: PropTypes.bool,
  /** Add stripes to progress bar */
  striped: PropTypes.bool,
  style: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Current value of progress */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
});
var propTypes$A = {
  children: PropTypes.node.isRequired,
  node: PropTypes.any
};
var Portal = class extends import_react.default.Component {
  componentWillUnmount() {
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode);
    }
    this.defaultNode = null;
  }
  render() {
    if (!canUseDOM) {
      return null;
    }
    if (!this.props.node && !this.defaultNode) {
      this.defaultNode = document.createElement("div");
      document.body.appendChild(this.defaultNode);
    }
    return import_react_dom.default.createPortal(this.props.children, this.props.node || this.defaultNode);
  }
};
Portal.propTypes = propTypes$A;
var Portal$1 = Portal;
function noop$1() {
}
var FadePropTypes$1 = PropTypes.shape(Fade.propTypes);
var propTypes$z = {
  /** */
  autoFocus: PropTypes.bool,
  /** Add backdrop to modal */
  backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["static"])]),
  /** add custom classname to backdrop */
  backdropClassName: PropTypes.string,
  backdropTransition: FadePropTypes$1,
  /** Vertically center the modal */
  centered: PropTypes.bool,
  /** Add children for the modal to wrap */
  children: PropTypes.node,
  /** Add custom className for modal content */
  contentClassName: PropTypes.string,
  className: PropTypes.string,
  container: targetPropType,
  cssModule: PropTypes.object,
  external: PropTypes.node,
  /** Enable/Disable animation */
  fade: PropTypes.bool,
  /** Make the modal fullscreen */
  fullscreen: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["sm", "md", "lg", "xl"])]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  /** The status of the modal, either open or close */
  isOpen: PropTypes.bool,
  /** Allow modal to be closed with escape key. */
  keyboard: PropTypes.bool,
  /** Identifies the element (or elements) that labels the current element. */
  labelledBy: PropTypes.string,
  modalClassName: PropTypes.string,
  modalTransition: FadePropTypes$1,
  /** Function to be triggered on close */
  onClosed: PropTypes.func,
  /** Function to be triggered on enter */
  onEnter: PropTypes.func,
  /** Function to be triggered on exit */
  onExit: PropTypes.func,
  /** Function to be triggered on open */
  onOpened: PropTypes.func,
  /** Returns focus to the element that triggered opening of the modal */
  returnFocusAfterClose: PropTypes.bool,
  /** Accessibility role */
  role: PropTypes.string,
  /** Make the modal scrollable */
  scrollable: PropTypes.bool,
  /** Two optional sizes `lg` and `sm` */
  size: PropTypes.string,
  /** Function to toggle modal visibility */
  toggle: PropTypes.func,
  trapFocus: PropTypes.bool,
  /** Unmounts the modal when modal is closed */
  unmountOnClose: PropTypes.bool,
  wrapClassName: PropTypes.string,
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
var propsToOmit$1 = Object.keys(propTypes$z);
var defaultProps$z = {
  isOpen: false,
  autoFocus: true,
  centered: false,
  scrollable: false,
  role: "dialog",
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  onOpened: noop$1,
  onClosed: noop$1,
  modalTransition: {
    timeout: TransitionTimeouts.Modal
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: TransitionTimeouts.Fade
    // uses standard fade transition
  },
  unmountOnClose: true,
  returnFocusAfterClose: true,
  container: "body",
  trapFocus: false
};
var Modal = class _Modal extends import_react.default.Component {
  constructor(props) {
    super(props);
    this._element = null;
    this._originalBodyPadding = null;
    this._originalBodyOverflow = null;
    this.getFocusableChildren = this.getFocusableChildren.bind(this);
    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.handleBackdropMouseDown = this.handleBackdropMouseDown.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.handleStaticBackdropAnimation = this.handleStaticBackdropAnimation.bind(this);
    this.handleTab = this.handleTab.bind(this);
    this.onOpened = this.onOpened.bind(this);
    this.onClosed = this.onClosed.bind(this);
    this.manageFocusAfterClose = this.manageFocusAfterClose.bind(this);
    this.clearBackdropAnimationTimeout = this.clearBackdropAnimationTimeout.bind(this);
    this.trapFocus = this.trapFocus.bind(this);
    this.state = {
      isOpen: false,
      showStaticBackdropAnimation: false
    };
  }
  componentDidMount() {
    const {
      isOpen,
      autoFocus,
      onEnter
    } = this.props;
    if (isOpen) {
      this.init();
      this.setState({
        isOpen: true
      });
      if (autoFocus) {
        this.setFocus();
      }
    }
    if (onEnter) {
      onEnter();
    }
    document.addEventListener("focus", this.trapFocus, true);
    this._isMounted = true;
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.isOpen && !prevProps.isOpen) {
      this.init();
      this.setState({
        isOpen: true
      });
      return;
    }
    if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
      this.setFocus();
    }
    if (this._element && prevProps.zIndex !== this.props.zIndex) {
      this._element.style.zIndex = this.props.zIndex;
    }
  }
  componentWillUnmount() {
    this.clearBackdropAnimationTimeout();
    if (this.props.onExit) {
      this.props.onExit();
    }
    if (this._element) {
      this.destroy();
      if (this.props.isOpen || this.state.isOpen) {
        this.close();
      }
    }
    document.removeEventListener("focus", this.trapFocus, true);
    this._isMounted = false;
  }
  // not mouseUp because scrollbar fires it, shouldn't close when user scrolls
  handleBackdropClick(e2) {
    if (e2.target === this._mouseDownElement) {
      e2.stopPropagation();
      const backdrop = this._dialog ? this._dialog.parentNode : null;
      if (backdrop && e2.target === backdrop && this.props.backdrop === "static") {
        this.handleStaticBackdropAnimation();
      }
      if (!this.props.isOpen || this.props.backdrop !== true)
        return;
      if (backdrop && e2.target === backdrop && this.props.toggle) {
        this.props.toggle(e2);
      }
    }
  }
  handleTab(e2) {
    if (e2.which !== 9)
      return;
    if (this.modalIndex < _Modal.openCount - 1)
      return;
    const focusableChildren = this.getFocusableChildren();
    const totalFocusable = focusableChildren.length;
    if (totalFocusable === 0)
      return;
    const currentFocus = this.getFocusedChild();
    let focusedIndex = 0;
    for (let i = 0; i < totalFocusable; i += 1) {
      if (focusableChildren[i] === currentFocus) {
        focusedIndex = i;
        break;
      }
    }
    if (e2.shiftKey && focusedIndex === 0) {
      e2.preventDefault();
      focusableChildren[totalFocusable - 1].focus();
    } else if (!e2.shiftKey && focusedIndex === totalFocusable - 1) {
      e2.preventDefault();
      focusableChildren[0].focus();
    }
  }
  handleBackdropMouseDown(e2) {
    this._mouseDownElement = e2.target;
  }
  handleEscape(e2) {
    if (this.props.isOpen && e2.keyCode === keyCodes.esc && this.props.toggle) {
      if (this.props.keyboard) {
        e2.preventDefault();
        e2.stopPropagation();
        this.props.toggle(e2);
      } else if (this.props.backdrop === "static") {
        e2.preventDefault();
        e2.stopPropagation();
        this.handleStaticBackdropAnimation();
      }
    }
  }
  handleStaticBackdropAnimation() {
    this.clearBackdropAnimationTimeout();
    this.setState({
      showStaticBackdropAnimation: true
    });
    this._backdropAnimationTimeout = setTimeout(() => {
      this.setState({
        showStaticBackdropAnimation: false
      });
    }, 100);
  }
  onOpened(node, isAppearing) {
    this.props.onOpened();
    (this.props.modalTransition.onEntered || noop$1)(node, isAppearing);
  }
  onClosed(node) {
    const {
      unmountOnClose
    } = this.props;
    this.props.onClosed();
    (this.props.modalTransition.onExited || noop$1)(node);
    if (unmountOnClose) {
      this.destroy();
    }
    this.close();
    if (this._isMounted) {
      this.setState({
        isOpen: false
      });
    }
  }
  setFocus() {
    if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === "function") {
      this._dialog.parentNode.focus();
    }
  }
  getFocusableChildren() {
    return this._element.querySelectorAll(focusableElements.join(", "));
  }
  getFocusedChild() {
    let currentFocus;
    const focusableChildren = this.getFocusableChildren();
    try {
      currentFocus = document.activeElement;
    } catch (err) {
      currentFocus = focusableChildren[0];
    }
    return currentFocus;
  }
  trapFocus(ev) {
    if (!this.props.trapFocus) {
      return;
    }
    if (!this._element) {
      return;
    }
    if (this._dialog && this._dialog.parentNode === ev.target) {
      return;
    }
    if (this.modalIndex < _Modal.openCount - 1) {
      return;
    }
    const children = this.getFocusableChildren();
    for (let i = 0; i < children.length; i += 1) {
      if (children[i] === ev.target)
        return;
    }
    if (children.length > 0) {
      ev.preventDefault();
      ev.stopPropagation();
      children[0].focus();
    }
  }
  init() {
    try {
      this._triggeringElement = document.activeElement;
    } catch (err) {
      this._triggeringElement = null;
    }
    if (!this._element) {
      this._element = document.createElement("div");
      this._element.setAttribute("tabindex", "-1");
      this._element.style.position = "relative";
      this._element.style.zIndex = this.props.zIndex;
      this._mountContainer = getTarget(this.props.container);
      this._mountContainer.appendChild(this._element);
    }
    this._originalBodyPadding = getOriginalBodyPadding();
    this._originalBodyOverflow = window.getComputedStyle(document.body).overflow;
    conditionallyUpdateScrollbar();
    if (_Modal.openCount === 0) {
      document.body.className = classnames(document.body.className, mapToCssModules("modal-open", this.props.cssModule));
      document.body.style.overflow = "hidden";
    }
    this.modalIndex = _Modal.openCount;
    _Modal.openCount += 1;
  }
  destroy() {
    if (this._element) {
      this._mountContainer.removeChild(this._element);
      this._element = null;
    }
    this.manageFocusAfterClose();
  }
  manageFocusAfterClose() {
    if (this._triggeringElement) {
      const {
        returnFocusAfterClose
      } = this.props;
      if (this._triggeringElement.focus && returnFocusAfterClose)
        this._triggeringElement.focus();
      this._triggeringElement = null;
    }
  }
  close() {
    if (_Modal.openCount <= 1) {
      const modalOpenClassName = mapToCssModules("modal-open", this.props.cssModule);
      const modalOpenClassNameRegex = new RegExp(`(^| )${modalOpenClassName}( |$)`);
      document.body.className = document.body.className.replace(modalOpenClassNameRegex, " ").trim();
      document.body.style.overflow = this._originalBodyOverflow;
    }
    this.manageFocusAfterClose();
    _Modal.openCount = Math.max(0, _Modal.openCount - 1);
    setScrollbarWidth(this._originalBodyPadding);
  }
  clearBackdropAnimationTimeout() {
    if (this._backdropAnimationTimeout) {
      clearTimeout(this._backdropAnimationTimeout);
      this._backdropAnimationTimeout = void 0;
    }
  }
  renderModalDialog() {
    const attributes = omit(this.props, propsToOmit$1);
    const dialogBaseClass = "modal-dialog";
    return import_react.default.createElement("div", _extends({}, attributes, {
      className: mapToCssModules(classnames(dialogBaseClass, this.props.className, {
        [`modal-${this.props.size}`]: this.props.size,
        [`${dialogBaseClass}-centered`]: this.props.centered,
        [`${dialogBaseClass}-scrollable`]: this.props.scrollable,
        "modal-fullscreen": this.props.fullscreen === true,
        [`modal-fullscreen-${this.props.fullscreen}-down`]: typeof this.props.fullscreen === "string"
      }), this.props.cssModule),
      role: "document",
      ref: (c2) => {
        this._dialog = c2;
      }
    }), import_react.default.createElement("div", {
      className: mapToCssModules(classnames("modal-content", this.props.contentClassName), this.props.cssModule)
    }, this.props.children));
  }
  render() {
    const {
      unmountOnClose
    } = this.props;
    if (!!this._element && (this.state.isOpen || !unmountOnClose)) {
      const isModalHidden = !!this._element && !this.state.isOpen && !unmountOnClose;
      this._element.style.display = isModalHidden ? "none" : "block";
      const {
        wrapClassName,
        modalClassName,
        backdropClassName,
        cssModule,
        isOpen,
        backdrop,
        role,
        labelledBy,
        external,
        innerRef
      } = this.props;
      const modalAttributes = {
        onClick: this.handleBackdropClick,
        onMouseDown: this.handleBackdropMouseDown,
        onKeyUp: this.handleEscape,
        onKeyDown: this.handleTab,
        style: {
          display: "block"
        },
        "aria-labelledby": labelledBy,
        role,
        tabIndex: "-1"
      };
      const hasTransition = this.props.fade;
      const modalTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), this.props.modalTransition), {}, {
        baseClass: hasTransition ? this.props.modalTransition.baseClass : "",
        timeout: hasTransition ? this.props.modalTransition.timeout : 0
      });
      const backdropTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), this.props.backdropTransition), {}, {
        baseClass: hasTransition ? this.props.backdropTransition.baseClass : "",
        timeout: hasTransition ? this.props.backdropTransition.timeout : 0
      });
      const Backdrop = backdrop && (hasTransition ? import_react.default.createElement(Fade, _extends({}, backdropTransition, {
        in: isOpen && !!backdrop,
        cssModule,
        className: mapToCssModules(classnames("modal-backdrop", backdropClassName), cssModule)
      })) : import_react.default.createElement("div", {
        className: mapToCssModules(classnames("modal-backdrop", "show", backdropClassName), cssModule)
      }));
      return import_react.default.createElement(Portal$1, {
        node: this._element
      }, import_react.default.createElement("div", {
        className: mapToCssModules(wrapClassName)
      }, import_react.default.createElement(Fade, _extends({}, modalAttributes, modalTransition, {
        in: isOpen,
        onEntered: this.onOpened,
        onExited: this.onClosed,
        cssModule,
        className: mapToCssModules(classnames("modal", modalClassName, this.state.showStaticBackdropAnimation && "modal-static"), cssModule),
        innerRef
      }), external, this.renderModalDialog()), Backdrop));
    }
    return null;
  }
};
Modal.propTypes = propTypes$z;
Modal.defaultProps = defaultProps$z;
Modal.openCount = 0;
var Modal$1 = Modal;
({
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Custom close button */
  close: PropTypes.object,
  closeAriaLabel: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Function to be triggered when close button is clicked */
  toggle: PropTypes.func,
  wrapTag: tagPropType
});
var _excluded$u = ["className", "cssModule", "tag"];
var propTypes$x = {
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$x = {
  tag: "div"
};
function ModalBody(props) {
  const {
    className,
    cssModule,
    tag: Tag
  } = props, attributes = _objectWithoutProperties(props, _excluded$u);
  const classes = mapToCssModules(classnames(className, "modal-body"), cssModule);
  return import_react.default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}
ModalBody.propTypes = propTypes$x;
ModalBody.defaultProps = defaultProps$x;
({
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType
});
var defaultProps$v = {
  placement: "top",
  autohide: true,
  placementPrefix: "bs-tooltip",
  trigger: "hover focus"
};
function Tooltip(props) {
  const popperClasses = classnames("tooltip", "show", props.popperClassName);
  const classes = classnames("tooltip-inner", props.innerClassName);
  return import_react.default.createElement(TooltipPopoverWrapper$1, _extends({}, props, {
    arrowClassName: "tooltip-arrow",
    popperClassName: popperClasses,
    innerClassName: classes
  }));
}
Tooltip.propTypes = propTypes$E;
Tooltip.defaultProps = defaultProps$v;
({
  /** Adds border to all sides of table */
  bordered: PropTypes.bool,
  /** Removes all borders */
  borderless: PropTypes.bool,
  /** Adds custom class name to component */
  className: PropTypes.string,
  /**  */
  cssModule: PropTypes.object,
  /** Makes the table dark */
  dark: PropTypes.bool,
  /** Enables a hover state on the rows within `<tbody>` */
  hover: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object]),
  /** Responsive tables allow tables to be scrolled horizontally with ease */
  responsive: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  responsiveTag: tagPropType,
  /** Make tables more compact by cutting cell padding in half when setting size as sm. */
  size: PropTypes.string,
  /** Adds zebra-striping to any table row within the `<tbody>` */
  striped: PropTypes.bool,
  /** Add custom tag to the component */
  tag: tagPropType
});
({
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Remove borders to make the list appear flush */
  flush: PropTypes.bool,
  /** Make the list horizontal instead of vertical */
  horizontal: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Add number to the ListItems */
  numbered: PropTypes.bool,
  /** Set a custom element for this component */
  tag: tagPropType
});
var _excluded$q = ["className", "cssModule", "tag", "innerRef"];
var propTypes$t = {
  children: PropTypes.node,
  tag: tagPropType,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
};
var defaultProps$s = {
  tag: "form"
};
var Form = class extends import_react.Component {
  constructor(props) {
    super(props);
    this.getRef = this.getRef.bind(this);
    this.submit = this.submit.bind(this);
  }
  getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }
    this.ref = ref;
  }
  submit() {
    if (this.ref) {
      this.ref.submit();
    }
  }
  render() {
    const _this$props = this.props, {
      className,
      cssModule,
      tag: Tag,
      innerRef
    } = _this$props, attributes = _objectWithoutProperties(_this$props, _excluded$q);
    const classes = mapToCssModules(className, cssModule);
    return import_react.default.createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      className: classes
    }));
  }
};
Form.propTypes = propTypes$t;
Form.defaultProps = defaultProps$s;
({
  children: PropTypes.node,
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  valid: PropTypes.bool,
  tooltip: PropTypes.bool
});
({
  children: PropTypes.node,
  row: PropTypes.bool,
  check: PropTypes.bool,
  switch: PropTypes.bool,
  inline: PropTypes.bool,
  floating: PropTypes.bool,
  disabled: PropTypes.bool,
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
});
({
  children: PropTypes.node,
  inline: PropTypes.bool,
  tag: tagPropType,
  color: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object
});
var _excluded$m = ["className", "cssModule", "type", "bsSize", "valid", "invalid", "tag", "addon", "plaintext", "innerRef"];
var propTypes$p = {
  children: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bsSize: PropTypes.string,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  tag: tagPropType,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  plaintext: PropTypes.bool,
  addon: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
var defaultProps$o = {
  type: "text"
};
var Input = class extends import_react.default.Component {
  constructor(props) {
    super(props);
    this.getRef = this.getRef.bind(this);
    this.focus = this.focus.bind(this);
  }
  getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }
    this.ref = ref;
  }
  focus() {
    if (this.ref) {
      this.ref.focus();
    }
  }
  render() {
    let _this$props = this.props, {
      className,
      cssModule,
      type,
      bsSize,
      valid,
      invalid,
      tag,
      addon,
      plaintext,
      innerRef
    } = _this$props, attributes = _objectWithoutProperties(_this$props, _excluded$m);
    const checkInput = ["switch", "radio", "checkbox"].indexOf(type) > -1;
    const isNotaNumber = /\D/g;
    const textareaInput = type === "textarea";
    const selectInput = type === "select";
    const rangeInput = type === "range";
    let Tag = tag || (selectInput || textareaInput ? type : "input");
    let formControlClass = "form-control";
    if (plaintext) {
      formControlClass = `${formControlClass}-plaintext`;
      Tag = tag || "input";
    } else if (rangeInput) {
      formControlClass = "form-range";
    } else if (selectInput) {
      formControlClass = "form-select";
    } else if (checkInput) {
      if (addon) {
        formControlClass = null;
      } else {
        formControlClass = "form-check-input";
      }
    }
    if (attributes.size && isNotaNumber.test(attributes.size)) {
      warnOnce(`Please use the prop "bsSize" instead of the "size" to bootstrap's input sizing.`);
      bsSize = attributes.size;
      delete attributes.size;
    }
    const classes = mapToCssModules(classnames(className, invalid && "is-invalid", valid && "is-valid", bsSize ? selectInput ? `form-select-${bsSize}` : `form-control-${bsSize}` : false, formControlClass), cssModule);
    if (Tag === "input" || tag && typeof tag === "function") {
      attributes.type = type === "switch" ? "checkbox" : type;
    }
    if (attributes.children && !(plaintext || type === "select" || typeof Tag !== "string" || Tag === "select")) {
      warnOnce(`Input with a type of "${type}" cannot have children. Please use "value"/"defaultValue" instead.`);
      delete attributes.children;
    }
    return import_react.default.createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      className: classes,
      "aria-invalid": invalid
    }));
  }
};
Input.propTypes = propTypes$p;
Input.defaultProps = defaultProps$o;
var Input$1 = Input;
({
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Sets size of InputGroup */
  size: PropTypes.string,
  /** Set a custom element for this component */
  tag: tagPropType,
  type: PropTypes.string
});
({
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType
});
var stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
var columnProps = PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number, PropTypes.shape({
  size: stringOrNumberProp,
  order: stringOrNumberProp,
  offset: stringOrNumberProp
})]);
({
  children: PropTypes.node,
  hidden: PropTypes.bool,
  check: PropTypes.bool,
  size: PropTypes.string,
  for: PropTypes.string,
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  xxl: columnProps,
  widths: PropTypes.array
});
({
  body: PropTypes.bool,
  bottom: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  heading: PropTypes.bool,
  left: PropTypes.bool,
  list: PropTypes.bool,
  middle: PropTypes.bool,
  object: PropTypes.bool,
  right: PropTypes.bool,
  tag: tagPropType,
  top: PropTypes.bool
});
function noop() {
}
var FadePropTypes = PropTypes.shape(Fade.propTypes);
var propTypes$k = {
  autoFocus: PropTypes.bool,
  backdrop: PropTypes.bool,
  backdropClassName: PropTypes.string,
  backdropTransition: FadePropTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  container: targetPropType,
  cssModule: PropTypes.object,
  direction: PropTypes.oneOf(["start", "end", "bottom", "top"]),
  fade: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  isOpen: PropTypes.bool,
  keyboard: PropTypes.bool,
  labelledBy: PropTypes.string,
  offcanvasTransition: FadePropTypes,
  onClosed: PropTypes.func,
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
  style: PropTypes.object,
  onOpened: PropTypes.func,
  returnFocusAfterClose: PropTypes.bool,
  role: PropTypes.string,
  scrollable: PropTypes.bool,
  toggle: PropTypes.func,
  trapFocus: PropTypes.bool,
  unmountOnClose: PropTypes.bool,
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
var propsToOmit = Object.keys(propTypes$k);
var defaultProps$k = {
  isOpen: false,
  autoFocus: true,
  direction: "start",
  scrollable: false,
  role: "dialog",
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  onOpened: noop,
  onClosed: noop,
  offcanvasTransition: {
    timeout: TransitionTimeouts.Offcanvas
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: TransitionTimeouts.Fade
    // uses standard fade transition
  },
  unmountOnClose: true,
  returnFocusAfterClose: true,
  container: "body",
  trapFocus: false
};
var Offcanvas = class _Offcanvas extends import_react.default.Component {
  constructor(props) {
    super(props);
    this._element = null;
    this._originalBodyPadding = null;
    this.getFocusableChildren = this.getFocusableChildren.bind(this);
    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.handleBackdropMouseDown = this.handleBackdropMouseDown.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.handleTab = this.handleTab.bind(this);
    this.onOpened = this.onOpened.bind(this);
    this.onClosed = this.onClosed.bind(this);
    this.manageFocusAfterClose = this.manageFocusAfterClose.bind(this);
    this.clearBackdropAnimationTimeout = this.clearBackdropAnimationTimeout.bind(this);
    this.trapFocus = this.trapFocus.bind(this);
    this.state = {
      isOpen: false
    };
  }
  componentDidMount() {
    const {
      isOpen,
      autoFocus,
      onEnter
    } = this.props;
    if (isOpen) {
      this.init();
      this.setState({
        isOpen: true
      });
      if (autoFocus) {
        this.setFocus();
      }
    }
    if (onEnter) {
      onEnter();
    }
    document.addEventListener("focus", this.trapFocus, true);
    this._isMounted = true;
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.isOpen && !prevProps.isOpen) {
      this.init();
      this.setState({
        isOpen: true
      });
      return;
    }
    if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
      this.setFocus();
    }
    if (this._element && prevProps.zIndex !== this.props.zIndex) {
      this._element.style.zIndex = this.props.zIndex;
    }
  }
  componentWillUnmount() {
    this.clearBackdropAnimationTimeout();
    if (this.props.onExit) {
      this.props.onExit();
    }
    if (this._element) {
      this.destroy();
      if (this.props.isOpen || this.state.isOpen) {
        this.close();
      }
    }
    document.removeEventListener("focus", this.trapFocus, true);
    this._isMounted = false;
  }
  // not mouseUp because scrollbar fires it, shouldn't close when user scrolls
  handleBackdropClick(e2) {
    if (e2.target === this._mouseDownElement) {
      e2.stopPropagation();
      const backdrop = this._backdrop;
      if (!this.props.isOpen || this.props.backdrop !== true)
        return;
      if (backdrop && e2.target === backdrop && this.props.toggle) {
        this.props.toggle(e2);
      }
    }
  }
  handleTab(e2) {
    if (e2.which !== 9)
      return;
    if (this.offcanvasIndex < _Offcanvas.openCount - 1)
      return;
    const focusableChildren = this.getFocusableChildren();
    const totalFocusable = focusableChildren.length;
    if (totalFocusable === 0)
      return;
    const currentFocus = this.getFocusedChild();
    let focusedIndex = 0;
    for (let i = 0; i < totalFocusable; i += 1) {
      if (focusableChildren[i] === currentFocus) {
        focusedIndex = i;
        break;
      }
    }
    if (e2.shiftKey && focusedIndex === 0) {
      e2.preventDefault();
      focusableChildren[totalFocusable - 1].focus();
    } else if (!e2.shiftKey && focusedIndex === totalFocusable - 1) {
      e2.preventDefault();
      focusableChildren[0].focus();
    }
  }
  handleBackdropMouseDown(e2) {
    this._mouseDownElement = e2.target;
  }
  handleEscape(e2) {
    if (this.props.isOpen && e2.keyCode === keyCodes.esc && this.props.toggle) {
      if (this.props.keyboard) {
        e2.preventDefault();
        e2.stopPropagation();
        this.props.toggle(e2);
      }
    }
  }
  onOpened(node, isAppearing) {
    this.props.onOpened();
    (this.props.offcanvasTransition.onEntered || noop)(node, isAppearing);
  }
  onClosed(node) {
    const {
      unmountOnClose
    } = this.props;
    this.props.onClosed();
    (this.props.offcanvasTransition.onExited || noop)(node);
    if (unmountOnClose) {
      this.destroy();
    }
    this.close();
    if (this._isMounted) {
      this.setState({
        isOpen: false
      });
    }
  }
  setFocus() {
    if (this._dialog && typeof this._dialog.focus === "function") {
      this._dialog.focus();
    }
  }
  getFocusableChildren() {
    return this._element.querySelectorAll(focusableElements.join(", "));
  }
  getFocusedChild() {
    let currentFocus;
    const focusableChildren = this.getFocusableChildren();
    try {
      currentFocus = document.activeElement;
    } catch (err) {
      currentFocus = focusableChildren[0];
    }
    return currentFocus;
  }
  trapFocus(ev) {
    if (!this.props.trapFocus) {
      return;
    }
    if (!this._element) {
      return;
    }
    if (this._dialog === ev.target) {
      return;
    }
    if (this.offcanvasIndex < _Offcanvas.openCount - 1) {
      return;
    }
    const children = this.getFocusableChildren();
    for (let i = 0; i < children.length; i += 1) {
      if (children[i] === ev.target)
        return;
    }
    if (children.length > 0) {
      ev.preventDefault();
      ev.stopPropagation();
      children[0].focus();
    }
  }
  init() {
    try {
      this._triggeringElement = document.activeElement;
    } catch (err) {
      this._triggeringElement = null;
    }
    if (!this._element) {
      this._element = document.createElement("div");
      this._element.setAttribute("tabindex", "-1");
      this._element.style.position = "relative";
      this._element.style.zIndex = this.props.zIndex;
      this._mountContainer = getTarget(this.props.container);
      this._mountContainer.appendChild(this._element);
    }
    this._originalBodyPadding = getOriginalBodyPadding();
    conditionallyUpdateScrollbar();
    if (_Offcanvas.openCount === 0 && this.props.backdrop && !this.props.scrollable) {
      document.body.style.overflow = "hidden";
    }
    this.offcanvasIndex = _Offcanvas.openCount;
    _Offcanvas.openCount += 1;
  }
  destroy() {
    if (this._element) {
      this._mountContainer.removeChild(this._element);
      this._element = null;
    }
    this.manageFocusAfterClose();
  }
  manageFocusAfterClose() {
    if (this._triggeringElement) {
      const {
        returnFocusAfterClose
      } = this.props;
      if (this._triggeringElement.focus && returnFocusAfterClose)
        this._triggeringElement.focus();
      this._triggeringElement = null;
    }
  }
  close() {
    this.manageFocusAfterClose();
    _Offcanvas.openCount = Math.max(0, _Offcanvas.openCount - 1);
    document.body.style.overflow = null;
    setScrollbarWidth(this._originalBodyPadding);
  }
  clearBackdropAnimationTimeout() {
    if (this._backdropAnimationTimeout) {
      clearTimeout(this._backdropAnimationTimeout);
      this._backdropAnimationTimeout = void 0;
    }
  }
  render() {
    const {
      direction,
      unmountOnClose
    } = this.props;
    if (!!this._element && (this.state.isOpen || !unmountOnClose)) {
      const isOffcanvasHidden = !!this._element && !this.state.isOpen && !unmountOnClose;
      this._element.style.display = isOffcanvasHidden ? "none" : "block";
      const {
        className,
        backdropClassName,
        cssModule,
        isOpen,
        backdrop,
        role,
        labelledBy,
        style
      } = this.props;
      const offcanvasAttributes = {
        onKeyUp: this.handleEscape,
        onKeyDown: this.handleTab,
        "aria-labelledby": labelledBy,
        role,
        tabIndex: "-1"
      };
      const hasTransition = this.props.fade;
      const offcanvasTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), this.props.offcanvasTransition), {}, {
        baseClass: hasTransition ? this.props.offcanvasTransition.baseClass : "",
        timeout: hasTransition ? this.props.offcanvasTransition.timeout : 0
      });
      const backdropTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), this.props.backdropTransition), {}, {
        baseClass: hasTransition ? this.props.backdropTransition.baseClass : "",
        timeout: hasTransition ? this.props.backdropTransition.timeout : 0
      });
      const Backdrop = backdrop && (hasTransition ? import_react.default.createElement(Fade, _extends({}, backdropTransition, {
        in: isOpen && !!backdrop,
        innerRef: (c2) => {
          this._backdrop = c2;
        },
        cssModule,
        className: mapToCssModules(classnames("offcanvas-backdrop", backdropClassName), cssModule),
        onClick: this.handleBackdropClick,
        onMouseDown: this.handleBackdropMouseDown
      })) : import_react.default.createElement("div", {
        className: mapToCssModules(classnames("offcanvas-backdrop", "show", backdropClassName), cssModule),
        onClick: this.handleBackdropClick,
        onMouseDown: this.handleBackdropMouseDown
      }));
      const attributes = omit(this.props, propsToOmit);
      return import_react.default.createElement(Portal$1, {
        node: this._element
      }, import_react.default.createElement(Fade, _extends({}, attributes, offcanvasAttributes, offcanvasTransition, {
        in: isOpen,
        onEntered: this.onOpened,
        onExited: this.onClosed,
        cssModule,
        className: mapToCssModules(classnames("offcanvas", className, `offcanvas-${direction}`), cssModule),
        innerRef: (c2) => {
          this._dialog = c2;
        },
        style: _objectSpread2(_objectSpread2({}, style), {}, {
          visibility: isOpen ? "visible" : "hidden"
        })
      }), this.props.children), Backdrop);
    }
    return null;
  }
};
Offcanvas.propTypes = propTypes$k;
Offcanvas.defaultProps = defaultProps$k;
Offcanvas.openCount = 0;
({
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
});
({
  children: PropTypes.node,
  className: PropTypes.string,
  close: PropTypes.object,
  closeAriaLabel: PropTypes.string,
  cssModule: PropTypes.object,
  tag: tagPropType,
  toggle: PropTypes.func,
  wrapTag: tagPropType
});
({
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Add custom class for list */
  listClassName: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Make the Pagination bigger or smaller  */
  size: PropTypes.string,
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Set a custom element for list component */
  listTag: tagPropType,
  "aria-label": PropTypes.string
});
({
  /** Set item as active */
  active: PropTypes.bool,
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set item as disabled */
  disabled: PropTypes.bool,
  /** Set a custom element for this component */
  tag: tagPropType
});
({
  "aria-label": PropTypes.string,
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Add to next button to add default aria label and icon */
  next: PropTypes.bool,
  /** Add to previous button to add default aria label and icon */
  previous: PropTypes.bool,
  /** Add to first button to add default aria label and icon */
  first: PropTypes.bool,
  /** Add to last button to add default aria label and icon */
  last: PropTypes.bool,
  /** Set a custom element for this component */
  tag: tagPropType
});
var TabContext = import_react.default.createContext({});
var propTypes$e = {
  tag: tagPropType,
  activeTab: PropTypes.any,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
var defaultProps$e = {
  tag: "div"
};
var TabContent = class extends import_react.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.activeTab !== nextProps.activeTab) {
      return {
        activeTab: nextProps.activeTab
      };
    }
    return null;
  }
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.activeTab
    };
  }
  render() {
    const {
      className,
      cssModule,
      tag: Tag
    } = this.props;
    const attributes = omit(this.props, Object.keys(propTypes$e));
    const classes = mapToCssModules(classnames("tab-content", className), cssModule);
    return import_react.default.createElement(TabContext.Provider, {
      value: {
        activeTabId: this.state.activeTab
      }
    }, import_react.default.createElement(Tag, _extends({}, attributes, {
      className: classes
    })));
  }
};
TabContent.propTypes = propTypes$e;
TabContent.defaultProps = defaultProps$e;
({
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  tabId: PropTypes.any
});
({
  /** Pass children so this component can wrap the child elements */
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Add custom class for close button */
  closeClassName: PropTypes.string,
  /** Aria label for close button */
  closeAriaLabel: PropTypes.string,
  /** Change color of alert */
  color: PropTypes.string,
  /** Change existing className with a new className */
  cssModule: PropTypes.object,
  /** Toggle fade animation */
  fade: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  /** Control visibility state of Alert */
  isOpen: PropTypes.bool,
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Function to toggle visibility */
  toggle: PropTypes.func,
  /** Props to be passed to `Fade` to modify transition */
  transition: PropTypes.shape(Fade.propTypes)
});
({
  color: "success",
  isOpen: true,
  tag: "div",
  closeAriaLabel: "Close",
  fade: true,
  transition: _objectSpread2(_objectSpread2({}, Fade.defaultProps), {}, {
    unmountOnExit: true
  })
});
({
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  fade: PropTypes.bool,
  isOpen: PropTypes.bool,
  tag: tagPropType,
  transition: PropTypes.shape(Fade.propTypes),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
});
({
  isOpen: true,
  tag: "div",
  fade: true,
  transition: _objectSpread2(_objectSpread2({}, Fade.defaultProps), {}, {
    unmountOnExit: true
  })
});
({
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
});
({
  tag: tagPropType,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  wrapTag: tagPropType,
  toggle: PropTypes.func,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  closeAriaLabel: PropTypes.string,
  charCode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  close: PropTypes.object,
  tagClassName: PropTypes.string
});
({
  /** Add action prop to give effects while hovering over element */
  action: PropTypes.bool,
  /** Add active prop to make the current selection active */
  active: PropTypes.bool,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Add background colour to the list item */
  color: PropTypes.string,
  /** Make the list item appear disabled */
  disabled: PropTypes.bool,
  /** Set a custom element for this component */
  tag: tagPropType
});
({
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType
});
({
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType
});
var _excluded$4 = ["className", "cssModule", "tag", "type"];
var propTypes$5 = {
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Type of list `unstyled` or `inline` */
  type: PropTypes.string
};
var defaultProps$5 = {
  tag: "ul"
};
var List = (0, import_react.forwardRef)((props, ref) => {
  const {
    className,
    cssModule,
    tag: Tag,
    type
  } = props, attributes = _objectWithoutProperties(props, _excluded$4);
  const classes = mapToCssModules(classnames(className, type ? `list-${type}` : false), cssModule);
  return import_react.default.createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref
  }));
});
List.name = "List";
List.propTypes = propTypes$5;
List.defaultProps = defaultProps$5;
var _excluded$3 = ["className", "cssModule", "tag"];
var propTypes$4 = {
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$4 = {
  tag: "li"
};
var ListInlineItem = (0, import_react.forwardRef)((props, ref) => {
  const {
    className,
    cssModule,
    tag: Tag
  } = props, attributes = _objectWithoutProperties(props, _excluded$3);
  const classes = mapToCssModules(classnames(className, "list-inline-item"), cssModule);
  return import_react.default.createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref
  }));
});
ListInlineItem.name = "ListInlineItem";
ListInlineItem.propTypes = propTypes$4;
ListInlineItem.defaultProps = defaultProps$4;
var omitKeys$3 = ["defaultOpen"];
var UncontrolledButtonDropdown = class extends import_react.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.defaultOpen || false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  }
  render() {
    return import_react.default.createElement(ButtonDropdown, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys$3)));
  }
};
UncontrolledButtonDropdown.propTypes = _objectSpread2({
  defaultOpen: PropTypes.bool
}, ButtonDropdown.propTypes);
var omitKeys$2 = ["toggleEvents", "defaultOpen"];
var propTypes$3 = {
  /** set if Collapse is open by default */
  defaultOpen: PropTypes.bool,
  /** id of the element that should trigger toggle */
  toggler: PropTypes.string.isRequired,
  /** Events that should trigger the toggle */
  toggleEvents: PropTypes.arrayOf(PropTypes.string)
};
var defaultProps$3 = {
  toggleEvents: defaultToggleEvents
};
var UncontrolledCollapse = class extends import_react.Component {
  constructor(props) {
    super(props);
    this.togglers = null;
    this.removeEventListeners = null;
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: props.defaultOpen || false
    };
  }
  componentDidMount() {
    this.togglers = findDOMElements(this.props.toggler);
    if (this.togglers.length) {
      this.removeEventListeners = addMultipleEventListeners(this.togglers, this.toggle, this.props.toggleEvents);
    }
  }
  componentWillUnmount() {
    if (this.togglers.length && this.removeEventListeners) {
      this.removeEventListeners();
    }
  }
  toggle(e2) {
    this.setState(({
      isOpen
    }) => ({
      isOpen: !isOpen
    }));
    e2.preventDefault();
  }
  render() {
    return import_react.default.createElement(Collapse$1, _extends({
      isOpen: this.state.isOpen
    }, omit(this.props, omitKeys$2)));
  }
};
UncontrolledCollapse.propTypes = propTypes$3;
UncontrolledCollapse.defaultProps = defaultProps$3;
var omitKeys$1 = ["defaultOpen"];
var UncontrolledDropdown = class extends import_react.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.defaultOpen || false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle(e2) {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }), () => {
      if (this.props.onToggle) {
        this.props.onToggle(e2, this.state.isOpen);
      }
    });
  }
  render() {
    return import_react.default.createElement(Dropdown$1, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys$1)));
  }
};
UncontrolledDropdown.propTypes = _objectSpread2({
  defaultOpen: PropTypes.bool,
  onToggle: PropTypes.func
}, Dropdown$1.propTypes);
var omitKeys = ["defaultOpen"];
var UncontrolledTooltip = class extends import_react.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.defaultOpen || false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  }
  render() {
    return import_react.default.createElement(Tooltip, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys)));
  }
};
UncontrolledTooltip.propTypes = _objectSpread2({
  defaultOpen: PropTypes.bool
}, Tooltip.propTypes);
({
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Change animation of spinner */
  type: PropTypes.oneOf(["border", "grow"]),
  /** Change size of spinner */
  size: PropTypes.oneOf(["sm"]),
  /** Change color of spinner */
  color: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"]),
  /** Add custom class */
  className: PropTypes.string,
  /** Change existing className with a new className */
  cssModule: PropTypes.object,
  /** Pass children so this component can wrap the child elements */
  children: PropTypes.string
});
_objectSpread2(_objectSpread2({}, Col.propTypes), {}, {
  /** Add custom color to the placeholder */
  color: PropTypes.string,
  /** Add custom tag. */
  tag: tagPropType,
  /** Apply either `glow` or `wave` animation. */
  animation: PropTypes.oneOf(["glow", "wave"]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  /** Make the size larger */
  size: PropTypes.oneOf(["lg", "sm", "xs"])
});
({
  size: PropTypes.string,
  color: PropTypes.string,
  outline: PropTypes.bool,
  className: PropTypes.string,
  tag: tagPropType,
  cssModule: PropTypes.object
});
(() => {
  if (typeof window !== "object" || typeof window.CustomEvent === "function")
    return;
  const CustomEvent2 = (event, params) => {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: null
    };
    let evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  };
  window.CustomEvent = CustomEvent2;
})();
(() => {
  if (typeof Object.values === "function")
    return;
  const values = (O) => Object.keys(O).map((key) => O[key]);
  Object.values = values;
})();
var css_248z$1 = `@charset "UTF-8";
.sabpaisa-css-utils-classes-version-five {
  /*!
   * Bootstrap  v5.2.3 (https://getbootstrap.com/)
   * Copyright 2011-2022 The Bootstrap Authors
   * Copyright 2011-2022 Twitter, Inc.
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   */
  /* rtl:raw:
  [type="tel"],
  [type="url"],
  [type="email"],
  [type="number"] {
    direction: ltr;
  }
  */
  /* rtl:begin:ignore */
  /* rtl:end:ignore */
  /* rtl:begin:ignore */
  /* rtl:end:ignore */
  /* rtl:begin:ignore */
  /* rtl:end:ignore */
  /* rtl:begin:ignore */
  /* rtl:end:ignore */
  /* rtl:options: {
    "autoRename": true,
    "stringMap":[ {
      "name"    : "prev-next",
      "search"  : "prev",
      "replace" : "next"
    } ]
  } */
  /* rtl:begin:remove */
  /* rtl:end:remove */
}
.sabpaisa-css-utils-classes-version-five :root {
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-black: #000;
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-gray-100: #f8f9fa;
  --bs-gray-200: #e9ecef;
  --bs-gray-300: #dee2e6;
  --bs-gray-400: #ced4da;
  --bs-gray-500: #adb5bd;
  --bs-gray-600: #6c757d;
  --bs-gray-700: #495057;
  --bs-gray-800: #343a40;
  --bs-gray-900: #212529;
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
  --bs-primary-rgb: 13, 110, 253;
  --bs-secondary-rgb: 108, 117, 125;
  --bs-success-rgb: 25, 135, 84;
  --bs-info-rgb: 13, 202, 240;
  --bs-warning-rgb: 255, 193, 7;
  --bs-danger-rgb: 220, 53, 69;
  --bs-light-rgb: 248, 249, 250;
  --bs-dark-rgb: 33, 37, 41;
  --bs-white-rgb: 255, 255, 255;
  --bs-black-rgb: 0, 0, 0;
  --bs-body-color-rgb: 33, 37, 41;
  --bs-body-bg-rgb: 255, 255, 255;
  --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
  --bs-body-font-family: var(--bs-font-sans-serif);
  --bs-body-font-size: 1rem;
  --bs-body-font-weight: 400;
  --bs-body-line-height: 1.5;
  --bs-body-color: #212529;
  --bs-body-bg: #fff;
  --bs-border-width: 1px;
  --bs-border-style: solid;
  --bs-border-color: #dee2e6;
  --bs-border-color-translucent: rgba(0, 0, 0, 0.175);
  --bs-border-radius: 0.375rem;
  --bs-border-radius-sm: 0.25rem;
  --bs-border-radius-lg: 0.5rem;
  --bs-border-radius-xl: 1rem;
  --bs-border-radius-2xl: 2rem;
  --bs-border-radius-pill: 50rem;
  --bs-link-color: #0d6efd;
  --bs-link-hover-color: #0a58ca;
  --bs-code-color: #d63384;
  --bs-highlight-bg: #fff3cd;
}
.sabpaisa-css-utils-classes-version-five *,
.sabpaisa-css-utils-classes-version-five *::before,
.sabpaisa-css-utils-classes-version-five *::after {
  box-sizing: border-box;
}
@media (prefers-reduced-motion: no-preference) {
  .sabpaisa-css-utils-classes-version-five :root {
    scroll-behavior: smooth;
  }
}
.sabpaisa-css-utils-classes-version-five body {
  margin: 0;
  font-family: var(--bs-body-font-family);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  line-height: var(--bs-body-line-height);
  color: var(--bs-body-color);
  text-align: var(--bs-body-text-align);
  background-color: var(--bs-body-bg);
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.sabpaisa-css-utils-classes-version-five hr {
  margin: 1rem 0;
  color: inherit;
  border: 0;
  border-top: 1px solid;
  opacity: 0.25;
}

.sabpaisa-css-utils-classes-version-five h1, .sabpaisa-css-utils-classes-version-five .h1 {
  font-size: calc(1.375rem + 1.5vw);
}
@media (min-width: 1200px) {
  .sabpaisa-css-utils-classes-version-five h1, .sabpaisa-css-utils-classes-version-five .h1 {
    font-size: 2.5rem;
  }
}





.sabpaisa-css-utils-classes-version-five abbr[title] {
  text-decoration: underline dotted;
  cursor: help;
  text-decoration-skip-ink: none;
}
.sabpaisa-css-utils-classes-version-five address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}
.sabpaisa-css-utils-classes-version-five ol,
.sabpaisa-css-utils-classes-version-five ul {
  padding-left: 2rem;
}
.sabpaisa-css-utils-classes-version-five ol,
.sabpaisa-css-utils-classes-version-five ul,
.sabpaisa-css-utils-classes-version-five dl {
  margin-top: 0;
  margin-bottom: 1rem;
}
.sabpaisa-css-utils-classes-version-five ol ol,
.sabpaisa-css-utils-classes-version-five ul ul,
.sabpaisa-css-utils-classes-version-five ol ul,
.sabpaisa-css-utils-classes-version-five ul ol {
  margin-bottom: 0;
}
.sabpaisa-css-utils-classes-version-five dt {
  font-weight: 700;
}
.sabpaisa-css-utils-classes-version-five dd {
  margin-bottom: 0.5rem;
  margin-left: 0;
}
.sabpaisa-css-utils-classes-version-five blockquote {
  margin: 0 0 1rem;
}
.sabpaisa-css-utils-classes-version-five b,
.sabpaisa-css-utils-classes-version-five strong {
  font-weight: bolder;
}
.sabpaisa-css-utils-classes-version-five small, .sabpaisa-css-utils-classes-version-five .small {
  font-size: 0.875em;
}
.sabpaisa-css-utils-classes-version-five mark, .sabpaisa-css-utils-classes-version-five .mark {
  padding: 0.1875em;
  background-color: var(--bs-highlight-bg);
}
.sabpaisa-css-utils-classes-version-five sub,
.sabpaisa-css-utils-classes-version-five sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}
.sabpaisa-css-utils-classes-version-five sub {
  bottom: -0.25em;
}
.sabpaisa-css-utils-classes-version-five sup {
  top: -0.5em;
}
.sabpaisa-css-utils-classes-version-five a {
  color: var(--bs-link-color);
  text-decoration: underline;
}
.sabpaisa-css-utils-classes-version-five a:hover {
  color: var(--bs-link-hover-color);
}
.sabpaisa-css-utils-classes-version-five a:not([href]):not([class]), .sabpaisa-css-utils-classes-version-five a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}
.sabpaisa-css-utils-classes-version-five pre,
.sabpaisa-css-utils-classes-version-five code,
.sabpaisa-css-utils-classes-version-five kbd,
.sabpaisa-css-utils-classes-version-five samp {
  font-family: var(--bs-font-monospace);
  font-size: 1em;
}
.sabpaisa-css-utils-classes-version-five pre {
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  font-size: 0.875em;
}
.sabpaisa-css-utils-classes-version-five pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}
.sabpaisa-css-utils-classes-version-five code {
  font-size: 0.875em;
  color: var(--bs-code-color);
  word-wrap: break-word;
}
a > .sabpaisa-css-utils-classes-version-five code {
  color: inherit;
}
.sabpaisa-css-utils-classes-version-five kbd {
  padding: 0.1875rem 0.375rem;
  font-size: 0.875em;
  color: var(--bs-body-bg);
  background-color: var(--bs-body-color);
  border-radius: 0.25rem;
}
.sabpaisa-css-utils-classes-version-five kbd kbd {
  padding: 0;
  font-size: 1em;
}
.sabpaisa-css-utils-classes-version-five figure {
  margin: 0 0 1rem;
}
.sabpaisa-css-utils-classes-version-five img,
.sabpaisa-css-utils-classes-version-five svg {
  vertical-align: middle;
}
.sabpaisa-css-utils-classes-version-five table {
  caption-side: bottom;
  border-collapse: collapse;
}
.sabpaisa-css-utils-classes-version-five caption {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #6c757d;
  text-align: left;
}
.sabpaisa-css-utils-classes-version-five th {
  text-align: inherit;
  text-align: -webkit-match-parent;
}
.sabpaisa-css-utils-classes-version-five thead,
.sabpaisa-css-utils-classes-version-five tbody,
.sabpaisa-css-utils-classes-version-five tfoot,
.sabpaisa-css-utils-classes-version-five tr,
.sabpaisa-css-utils-classes-version-five td,
.sabpaisa-css-utils-classes-version-five th {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}
.sabpaisa-css-utils-classes-version-five label {
  display: inline-block;
}
.sabpaisa-css-utils-classes-version-five button {
  border-radius: 0;
}
.sabpaisa-css-utils-classes-version-five button:focus:not(:focus-visible) {
  outline: 0;
}
.sabpaisa-css-utils-classes-version-five input,
.sabpaisa-css-utils-classes-version-five button,
.sabpaisa-css-utils-classes-version-five select,
.sabpaisa-css-utils-classes-version-five optgroup,
.sabpaisa-css-utils-classes-version-five textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
.sabpaisa-css-utils-classes-version-five button,
.sabpaisa-css-utils-classes-version-five select {
  text-transform: none;
}
.sabpaisa-css-utils-classes-version-five [role=button] {
  cursor: pointer;
}
.sabpaisa-css-utils-classes-version-five select {
  word-wrap: normal;
}
.sabpaisa-css-utils-classes-version-five select:disabled {
  opacity: 1;
}
.sabpaisa-css-utils-classes-version-five [list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator {
  display: none !important;
}
.sabpaisa-css-utils-classes-version-five button,
.sabpaisa-css-utils-classes-version-five [type=button],
.sabpaisa-css-utils-classes-version-five [type=reset],
.sabpaisa-css-utils-classes-version-five [type=submit] {
  -webkit-appearance: button;
}
.sabpaisa-css-utils-classes-version-five button:not(:disabled),
.sabpaisa-css-utils-classes-version-five [type=button]:not(:disabled),
.sabpaisa-css-utils-classes-version-five [type=reset]:not(:disabled),
.sabpaisa-css-utils-classes-version-five [type=submit]:not(:disabled) {
  cursor: pointer;
}
.sabpaisa-css-utils-classes-version-five ::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
.sabpaisa-css-utils-classes-version-five textarea {
  resize: vertical;
}
.sabpaisa-css-utils-classes-version-five fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}
.sabpaisa-css-utils-classes-version-five legend {
  float: left;
  width: 100%;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: calc(1.275rem + 0.3vw);
  line-height: inherit;
}
@media (min-width: 1200px) {
  .sabpaisa-css-utils-classes-version-five legend {
    font-size: 1.5rem;
  }
}
.sabpaisa-css-utils-classes-version-five legend + * {
  clear: left;
}
.sabpaisa-css-utils-classes-version-five ::-webkit-datetime-edit-fields-wrapper,
.sabpaisa-css-utils-classes-version-five ::-webkit-datetime-edit-text,
.sabpaisa-css-utils-classes-version-five ::-webkit-datetime-edit-minute,
.sabpaisa-css-utils-classes-version-five ::-webkit-datetime-edit-hour-field,
.sabpaisa-css-utils-classes-version-five ::-webkit-datetime-edit-day-field,
.sabpaisa-css-utils-classes-version-five ::-webkit-datetime-edit-month-field,
.sabpaisa-css-utils-classes-version-five ::-webkit-datetime-edit-year-field {
  padding: 0;
}
.sabpaisa-css-utils-classes-version-five ::-webkit-inner-spin-button {
  height: auto;
}
.sabpaisa-css-utils-classes-version-five [type=search] {
  outline-offset: -2px;
  -webkit-appearance: textfield;
}
.sabpaisa-css-utils-classes-version-five ::-webkit-search-decoration {
  -webkit-appearance: none;
}
.sabpaisa-css-utils-classes-version-five ::-webkit-color-swatch-wrapper {
  padding: 0;
}
.sabpaisa-css-utils-classes-version-five ::file-selector-button {
  font: inherit;
  -webkit-appearance: button;
}
.sabpaisa-css-utils-classes-version-five output {
  display: inline-block;
}
.sabpaisa-css-utils-classes-version-five iframe {
  border: 0;
}
.sabpaisa-css-utils-classes-version-five summary {
  display: list-item;
  cursor: pointer;
}
.sabpaisa-css-utils-classes-version-five progress {
  vertical-align: baseline;
}
.sabpaisa-css-utils-classes-version-five [hidden] {
  display: none !important;
}
.sabpaisa-css-utils-classes-version-five .lead {
  font-size: 1.25rem;
  font-weight: 300;
}
.sabpaisa-css-utils-classes-version-five .display-1 {
  font-size: calc(1.625rem + 4.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .sabpaisa-css-utils-classes-version-five .display-1 {
    font-size: 5rem;
  }
}
.sabpaisa-css-utils-classes-version-five .display-2 {
  font-size: calc(1.575rem + 3.9vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .sabpaisa-css-utils-classes-version-five .display-2 {
    font-size: 4.5rem;
  }
}
.sabpaisa-css-utils-classes-version-five .display-3 {
  font-size: calc(1.525rem + 3.3vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .sabpaisa-css-utils-classes-version-five .display-3 {
    font-size: 4rem;
  }
}
.sabpaisa-css-utils-classes-version-five .display-4 {
  font-size: calc(1.475rem + 2.7vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .sabpaisa-css-utils-classes-version-five .display-4 {
    font-size: 3.5rem;
  }
}
.sabpaisa-css-utils-classes-version-five .display-5 {
  font-size: calc(1.425rem + 2.1vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .sabpaisa-css-utils-classes-version-five .display-5 {
    font-size: 3rem;
  }
}
.sabpaisa-css-utils-classes-version-five .display-6 {
  font-size: calc(1.375rem + 1.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .sabpaisa-css-utils-classes-version-five .display-6 {
    font-size: 2.5rem;
  }
}
.sabpaisa-css-utils-classes-version-five .list-unstyled {
  padding-left: 0;
  list-style: none;
}
.sabpaisa-css-utils-classes-version-five .list-inline {
  padding-left: 0;
  list-style: none;
}
.sabpaisa-css-utils-classes-version-five .list-inline-item {
  display: inline-block;
}
.sabpaisa-css-utils-classes-version-five .list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}
.sabpaisa-css-utils-classes-version-five .initialism {
  font-size: 0.875em;
  text-transform: uppercase;
}
.sabpaisa-css-utils-classes-version-five .blockquote {
  margin-bottom: 1rem;
  font-size: 1.25rem;
}
.sabpaisa-css-utils-classes-version-five .blockquote > :last-child {
  margin-bottom: 0;
}
.sabpaisa-css-utils-classes-version-five .blockquote-footer {
  margin-top: -1rem;
  margin-bottom: 1rem;
  font-size: 0.875em;
  color: #6c757d;
}
.sabpaisa-css-utils-classes-version-five .blockquote-footer::before {
  content: "— ";
}
.sabpaisa-css-utils-classes-version-five .img-fluid {
  max-width: 100%;
  height: auto;
}
.sabpaisa-css-utils-classes-version-five .img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid var(--bs-border-color);
  border-radius: 0.375rem;
  max-width: 100%;
  height: auto;
}
.sabpaisa-css-utils-classes-version-five .figure {
  display: inline-block;
}
.sabpaisa-css-utils-classes-version-five .figure-img {
  margin-bottom: 0.5rem;
  line-height: 1;
}
.sabpaisa-css-utils-classes-version-five .figure-caption {
  font-size: 0.875em;
  color: #6c757d;
}
.sabpaisa-css-utils-classes-version-five .container,
.sabpaisa-css-utils-classes-version-five .container-fluid,
.sabpaisa-css-utils-classes-version-five .container-xxl,
.sabpaisa-css-utils-classes-version-five .container-xl,
.sabpaisa-css-utils-classes-version-five .container-lg,
.sabpaisa-css-utils-classes-version-five .container-md,
.sabpaisa-css-utils-classes-version-five .container-sm {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 576px) {
  .sabpaisa-css-utils-classes-version-five .container-sm, .sabpaisa-css-utils-classes-version-five .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .sabpaisa-css-utils-classes-version-five .container-md, .sabpaisa-css-utils-classes-version-five .container-sm, .sabpaisa-css-utils-classes-version-five .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .sabpaisa-css-utils-classes-version-five .container-lg, .sabpaisa-css-utils-classes-version-five .container-md, .sabpaisa-css-utils-classes-version-five .container-sm, .sabpaisa-css-utils-classes-version-five .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .sabpaisa-css-utils-classes-version-five .container-xl, .sabpaisa-css-utils-classes-version-five .container-lg, .sabpaisa-css-utils-classes-version-five .container-md, .sabpaisa-css-utils-classes-version-five .container-sm, .sabpaisa-css-utils-classes-version-five .container {
    max-width: 1140px;
  }
}
@media (min-width: 1400px) {
  .sabpaisa-css-utils-classes-version-five .container-xxl, .sabpaisa-css-utils-classes-version-five .container-xl, .sabpaisa-css-utils-classes-version-five .container-lg, .sabpaisa-css-utils-classes-version-five .container-md, .sabpaisa-css-utils-classes-version-five .container-sm, .sabpaisa-css-utils-classes-version-five .container {
    max-width: 1320px;
  }
}
.sabpaisa-css-utils-classes-version-five .row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}
.sabpaisa-css-utils-classes-version-five .row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
}
.sabpaisa-css-utils-classes-version-five .col {
  flex: 1 0 0%;
}
.sabpaisa-css-utils-classes-version-five .row-cols-auto > * {
  flex: 0 0 auto;
  width: auto;
}
.sabpaisa-css-utils-classes-version-five .row-cols-1 > * {
  flex: 0 0 auto;
  width: 100%;
}
.sabpaisa-css-utils-classes-version-five .row-cols-2 > * {
  flex: 0 0 auto;
  width: 50%;
}
.sabpaisa-css-utils-classes-version-five .row-cols-3 > * {
  flex: 0 0 auto;
  width: 33.3333333333%;
}
.sabpaisa-css-utils-classes-version-five .row-cols-4 > * {
  flex: 0 0 auto;
  width: 25%;
}
.sabpaisa-css-utils-classes-version-five .row-cols-5 > * {
  flex: 0 0 auto;
  width: 20%;
}
.sabpaisa-css-utils-classes-version-five .row-cols-6 > * {
  flex: 0 0 auto;
  width: 16.6666666667%;
}
.sabpaisa-css-utils-classes-version-five .col-auto {
  flex: 0 0 auto;
  width: auto;
}
.sabpaisa-css-utils-classes-version-five .col-1 {
  flex: 0 0 auto;
  width: 8.33333333%;
}
.sabpaisa-css-utils-classes-version-five .col-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}
.sabpaisa-css-utils-classes-version-five .col-3 {
  flex: 0 0 auto;
  width: 25%;
}
.sabpaisa-css-utils-classes-version-five .col-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}
.sabpaisa-css-utils-classes-version-five .col-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}
.sabpaisa-css-utils-classes-version-five .col-6 {
  flex: 0 0 auto;
  width: 50%;
}
.sabpaisa-css-utils-classes-version-five .col-7 {
  flex: 0 0 auto;
  width: 58.33333333%;
}
.sabpaisa-css-utils-classes-version-five .col-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
}
.sabpaisa-css-utils-classes-version-five .col-9 {
  flex: 0 0 auto;
  width: 75%;
}
.sabpaisa-css-utils-classes-version-five .col-10 {
  flex: 0 0 auto;
  width: 83.33333333%;
}
.sabpaisa-css-utils-classes-version-five .col-11 {
  flex: 0 0 auto;
  width: 91.66666667%;
}
.sabpaisa-css-utils-classes-version-five .col-12 {
  flex: 0 0 auto;
  width: 100%;
}
.sabpaisa-css-utils-classes-version-five .offset-1 {
  margin-left: 8.33333333%;
}
.sabpaisa-css-utils-classes-version-five .offset-2 {
  margin-left: 16.66666667%;
}
.sabpaisa-css-utils-classes-version-five .offset-3 {
  margin-left: 25%;
}
.sabpaisa-css-utils-classes-version-five .offset-4 {
  margin-left: 33.33333333%;
}
.sabpaisa-css-utils-classes-version-five .offset-5 {
  margin-left: 41.66666667%;
}
.sabpaisa-css-utils-classes-version-five .offset-6 {
  margin-left: 50%;
}
.sabpaisa-css-utils-classes-version-five .offset-7 {
  margin-left: 58.33333333%;
}
.sabpaisa-css-utils-classes-version-five .offset-8 {
  margin-left: 66.66666667%;
}
.sabpaisa-css-utils-classes-version-five .offset-9 {
  margin-left: 75%;
}
.sabpaisa-css-utils-classes-version-five .offset-10 {
  margin-left: 83.33333333%;
}
.sabpaisa-css-utils-classes-version-five .offset-11 {
  margin-left: 91.66666667%;
}
.sabpaisa-css-utils-classes-version-five .g-0,
.sabpaisa-css-utils-classes-version-five .gx-0 {
  --bs-gutter-x: 0;
}
.sabpaisa-css-utils-classes-version-five .g-0,
.sabpaisa-css-utils-classes-version-five .gy-0 {
  --bs-gutter-y: 0;
}
.sabpaisa-css-utils-classes-version-five .g-1,
.sabpaisa-css-utils-classes-version-five .gx-1 {
  --bs-gutter-x: 0.25rem;
}
.sabpaisa-css-utils-classes-version-five .g-1,
.sabpaisa-css-utils-classes-version-five .gy-1 {
  --bs-gutter-y: 0.25rem;
}
.sabpaisa-css-utils-classes-version-five .g-2,
.sabpaisa-css-utils-classes-version-five .gx-2 {
  --bs-gutter-x: 0.5rem;
}
.sabpaisa-css-utils-classes-version-five .g-2,
.sabpaisa-css-utils-classes-version-five .gy-2 {
  --bs-gutter-y: 0.5rem;
}
.sabpaisa-css-utils-classes-version-five .g-3,
.sabpaisa-css-utils-classes-version-five .gx-3 {
  --bs-gutter-x: 1rem;
}
.sabpaisa-css-utils-classes-version-five .g-3,
.sabpaisa-css-utils-classes-version-five .gy-3 {
  --bs-gutter-y: 1rem;
}
.sabpaisa-css-utils-classes-version-five .g-4,
.sabpaisa-css-utils-classes-version-five .gx-4 {
  --bs-gutter-x: 1.5rem;
}
.sabpaisa-css-utils-classes-version-five .g-4,
.sabpaisa-css-utils-classes-version-five .gy-4 {
  --bs-gutter-y: 1.5rem;
}
.sabpaisa-css-utils-classes-version-five .g-5,
.sabpaisa-css-utils-classes-version-five .gx-5 {
  --bs-gutter-x: 3rem;
}
.sabpaisa-css-utils-classes-version-five .g-5,
.sabpaisa-css-utils-classes-version-five .gy-5 {
  --bs-gutter-y: 3rem;
}
@media (min-width: 576px) {
  .sabpaisa-css-utils-classes-version-five .col-sm {
    flex: 1 0 0%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-sm-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-sm-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-sm-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-sm-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-sm-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-sm-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-sm-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .sabpaisa-css-utils-classes-version-five .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .sabpaisa-css-utils-classes-version-five .col-sm-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .col-sm-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .col-sm-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .sabpaisa-css-utils-classes-version-five .col-sm-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .col-sm-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .sabpaisa-css-utils-classes-version-five .col-sm-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .col-sm-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .col-sm-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .sabpaisa-css-utils-classes-version-five .col-sm-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .col-sm-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .col-sm-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-sm-0 {
    margin-left: 0;
  }
  .sabpaisa-css-utils-classes-version-five .offset-sm-1 {
    margin-left: 8.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-sm-2 {
    margin-left: 16.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-sm-3 {
    margin-left: 25%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-sm-4 {
    margin-left: 33.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-sm-5 {
    margin-left: 41.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-sm-6 {
    margin-left: 50%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-sm-7 {
    margin-left: 58.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-sm-8 {
    margin-left: 66.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-sm-9 {
    margin-left: 75%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-sm-10 {
    margin-left: 83.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-sm-11 {
    margin-left: 91.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .g-sm-0,
  .sabpaisa-css-utils-classes-version-five .gx-sm-0 {
    --bs-gutter-x: 0;
  }
  .sabpaisa-css-utils-classes-version-five .g-sm-0,
  .sabpaisa-css-utils-classes-version-five .gy-sm-0 {
    --bs-gutter-y: 0;
  }
  .sabpaisa-css-utils-classes-version-five .g-sm-1,
  .sabpaisa-css-utils-classes-version-five .gx-sm-1 {
    --bs-gutter-x: 0.25rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-sm-1,
  .sabpaisa-css-utils-classes-version-five .gy-sm-1 {
    --bs-gutter-y: 0.25rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-sm-2,
  .sabpaisa-css-utils-classes-version-five .gx-sm-2 {
    --bs-gutter-x: 0.5rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-sm-2,
  .sabpaisa-css-utils-classes-version-five .gy-sm-2 {
    --bs-gutter-y: 0.5rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-sm-3,
  .sabpaisa-css-utils-classes-version-five .gx-sm-3 {
    --bs-gutter-x: 1rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-sm-3,
  .sabpaisa-css-utils-classes-version-five .gy-sm-3 {
    --bs-gutter-y: 1rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-sm-4,
  .sabpaisa-css-utils-classes-version-five .gx-sm-4 {
    --bs-gutter-x: 1.5rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-sm-4,
  .sabpaisa-css-utils-classes-version-five .gy-sm-4 {
    --bs-gutter-y: 1.5rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-sm-5,
  .sabpaisa-css-utils-classes-version-five .gx-sm-5 {
    --bs-gutter-x: 3rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-sm-5,
  .sabpaisa-css-utils-classes-version-five .gy-sm-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 768px) {
  .sabpaisa-css-utils-classes-version-five .col-md {
    flex: 1 0 0%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-md-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-md-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-md-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-md-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-md-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-md-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-md-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .sabpaisa-css-utils-classes-version-five .col-md-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .sabpaisa-css-utils-classes-version-five .col-md-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .col-md-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .col-md-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .sabpaisa-css-utils-classes-version-five .col-md-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .col-md-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .sabpaisa-css-utils-classes-version-five .col-md-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .col-md-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .col-md-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .sabpaisa-css-utils-classes-version-five .col-md-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .col-md-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .col-md-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-md-0 {
    margin-left: 0;
  }
  .sabpaisa-css-utils-classes-version-five .offset-md-1 {
    margin-left: 8.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-md-2 {
    margin-left: 16.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-md-3 {
    margin-left: 25%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-md-4 {
    margin-left: 33.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-md-5 {
    margin-left: 41.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-md-6 {
    margin-left: 50%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-md-7 {
    margin-left: 58.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-md-8 {
    margin-left: 66.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-md-9 {
    margin-left: 75%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-md-10 {
    margin-left: 83.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-md-11 {
    margin-left: 91.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .g-md-0,
  .sabpaisa-css-utils-classes-version-five .gx-md-0 {
    --bs-gutter-x: 0;
  }
  .sabpaisa-css-utils-classes-version-five .g-md-0,
  .sabpaisa-css-utils-classes-version-five .gy-md-0 {
    --bs-gutter-y: 0;
  }
  .sabpaisa-css-utils-classes-version-five .g-md-1,
  .sabpaisa-css-utils-classes-version-five .gx-md-1 {
    --bs-gutter-x: 0.25rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-md-1,
  .sabpaisa-css-utils-classes-version-five .gy-md-1 {
    --bs-gutter-y: 0.25rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-md-2,
  .sabpaisa-css-utils-classes-version-five .gx-md-2 {
    --bs-gutter-x: 0.5rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-md-2,
  .sabpaisa-css-utils-classes-version-five .gy-md-2 {
    --bs-gutter-y: 0.5rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-md-3,
  .sabpaisa-css-utils-classes-version-five .gx-md-3 {
    --bs-gutter-x: 1rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-md-3,
  .sabpaisa-css-utils-classes-version-five .gy-md-3 {
    --bs-gutter-y: 1rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-md-4,
  .sabpaisa-css-utils-classes-version-five .gx-md-4 {
    --bs-gutter-x: 1.5rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-md-4,
  .sabpaisa-css-utils-classes-version-five .gy-md-4 {
    --bs-gutter-y: 1.5rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-md-5,
  .sabpaisa-css-utils-classes-version-five .gx-md-5 {
    --bs-gutter-x: 3rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-md-5,
  .sabpaisa-css-utils-classes-version-five .gy-md-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 992px) {
  .sabpaisa-css-utils-classes-version-five .col-lg {
    flex: 1 0 0%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-lg-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-lg-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-lg-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-lg-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-lg-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-lg-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-lg-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .sabpaisa-css-utils-classes-version-five .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .sabpaisa-css-utils-classes-version-five .col-lg-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .col-lg-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .sabpaisa-css-utils-classes-version-five .col-lg-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .col-lg-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .sabpaisa-css-utils-classes-version-five .col-lg-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .col-lg-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .sabpaisa-css-utils-classes-version-five .col-lg-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .col-lg-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .col-lg-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-lg-0 {
    margin-left: 0;
  }
  .sabpaisa-css-utils-classes-version-five .offset-lg-1 {
    margin-left: 8.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-lg-2 {
    margin-left: 16.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-lg-3 {
    margin-left: 25%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-lg-4 {
    margin-left: 33.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-lg-5 {
    margin-left: 41.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-lg-6 {
    margin-left: 50%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-lg-7 {
    margin-left: 58.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-lg-8 {
    margin-left: 66.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-lg-9 {
    margin-left: 75%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-lg-10 {
    margin-left: 83.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-lg-11 {
    margin-left: 91.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .g-lg-0,
  .sabpaisa-css-utils-classes-version-five .gx-lg-0 {
    --bs-gutter-x: 0;
  }
  .sabpaisa-css-utils-classes-version-five .g-lg-0,
  .sabpaisa-css-utils-classes-version-five .gy-lg-0 {
    --bs-gutter-y: 0;
  }
  .sabpaisa-css-utils-classes-version-five .g-lg-1,
  .sabpaisa-css-utils-classes-version-five .gx-lg-1 {
    --bs-gutter-x: 0.25rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-lg-1,
  .sabpaisa-css-utils-classes-version-five .gy-lg-1 {
    --bs-gutter-y: 0.25rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-lg-2,
  .sabpaisa-css-utils-classes-version-five .gx-lg-2 {
    --bs-gutter-x: 0.5rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-lg-2,
  .sabpaisa-css-utils-classes-version-five .gy-lg-2 {
    --bs-gutter-y: 0.5rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-lg-3,
  .sabpaisa-css-utils-classes-version-five .gx-lg-3 {
    --bs-gutter-x: 1rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-lg-3,
  .sabpaisa-css-utils-classes-version-five .gy-lg-3 {
    --bs-gutter-y: 1rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-lg-4,
  .sabpaisa-css-utils-classes-version-five .gx-lg-4 {
    --bs-gutter-x: 1.5rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-lg-4,
  .sabpaisa-css-utils-classes-version-five .gy-lg-4 {
    --bs-gutter-y: 1.5rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-lg-5,
  .sabpaisa-css-utils-classes-version-five .gx-lg-5 {
    --bs-gutter-x: 3rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-lg-5,
  .sabpaisa-css-utils-classes-version-five .gy-lg-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1200px) {
  .sabpaisa-css-utils-classes-version-five .col-xl {
    flex: 1 0 0%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-xl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-xl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-xl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-xl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-xl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-xl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-xl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .sabpaisa-css-utils-classes-version-five .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .sabpaisa-css-utils-classes-version-five .col-xl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .col-xl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .col-xl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .sabpaisa-css-utils-classes-version-five .col-xl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .col-xl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .col-xl-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .sabpaisa-css-utils-classes-version-five .col-xl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .col-xl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .col-xl-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .sabpaisa-css-utils-classes-version-five .col-xl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .col-xl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .col-xl-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-xl-0 {
    margin-left: 0;
  }
  .sabpaisa-css-utils-classes-version-five .offset-xl-1 {
    margin-left: 8.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-xl-2 {
    margin-left: 16.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-xl-3 {
    margin-left: 25%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-xl-4 {
    margin-left: 33.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-xl-5 {
    margin-left: 41.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-xl-6 {
    margin-left: 50%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-xl-7 {
    margin-left: 58.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-xl-8 {
    margin-left: 66.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-xl-9 {
    margin-left: 75%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-xl-10 {
    margin-left: 83.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-xl-11 {
    margin-left: 91.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .g-xl-0,
  .sabpaisa-css-utils-classes-version-five .gx-xl-0 {
    --bs-gutter-x: 0;
  }
  .sabpaisa-css-utils-classes-version-five .g-xl-0,
  .sabpaisa-css-utils-classes-version-five .gy-xl-0 {
    --bs-gutter-y: 0;
  }
  .sabpaisa-css-utils-classes-version-five .g-xl-1,
  .sabpaisa-css-utils-classes-version-five .gx-xl-1 {
    --bs-gutter-x: 0.25rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-xl-1,
  .sabpaisa-css-utils-classes-version-five .gy-xl-1 {
    --bs-gutter-y: 0.25rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-xl-2,
  .sabpaisa-css-utils-classes-version-five .gx-xl-2 {
    --bs-gutter-x: 0.5rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-xl-2,
  .sabpaisa-css-utils-classes-version-five .gy-xl-2 {
    --bs-gutter-y: 0.5rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-xl-3,
  .sabpaisa-css-utils-classes-version-five .gx-xl-3 {
    --bs-gutter-x: 1rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-xl-3,
  .sabpaisa-css-utils-classes-version-five .gy-xl-3 {
    --bs-gutter-y: 1rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-xl-4,
  .sabpaisa-css-utils-classes-version-five .gx-xl-4 {
    --bs-gutter-x: 1.5rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-xl-4,
  .sabpaisa-css-utils-classes-version-five .gy-xl-4 {
    --bs-gutter-y: 1.5rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-xl-5,
  .sabpaisa-css-utils-classes-version-five .gx-xl-5 {
    --bs-gutter-x: 3rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-xl-5,
  .sabpaisa-css-utils-classes-version-five .gy-xl-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1400px) {
  .sabpaisa-css-utils-classes-version-five .col-xxl {
    flex: 1 0 0%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-xxl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-xxl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-xxl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-xxl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-xxl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-xxl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .sabpaisa-css-utils-classes-version-five .row-cols-xxl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .sabpaisa-css-utils-classes-version-five .col-xxl-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .sabpaisa-css-utils-classes-version-five .col-xxl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .col-xxl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .col-xxl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .sabpaisa-css-utils-classes-version-five .col-xxl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .col-xxl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .col-xxl-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .sabpaisa-css-utils-classes-version-five .col-xxl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .col-xxl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .col-xxl-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .sabpaisa-css-utils-classes-version-five .col-xxl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .col-xxl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .col-xxl-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-xxl-0 {
    margin-left: 0;
  }
  .sabpaisa-css-utils-classes-version-five .offset-xxl-1 {
    margin-left: 8.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-xxl-2 {
    margin-left: 16.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-xxl-3 {
    margin-left: 25%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-xxl-4 {
    margin-left: 33.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-xxl-5 {
    margin-left: 41.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-xxl-6 {
    margin-left: 50%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-xxl-7 {
    margin-left: 58.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-xxl-8 {
    margin-left: 66.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-xxl-9 {
    margin-left: 75%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-xxl-10 {
    margin-left: 83.33333333%;
  }
  .sabpaisa-css-utils-classes-version-five .offset-xxl-11 {
    margin-left: 91.66666667%;
  }
  .sabpaisa-css-utils-classes-version-five .g-xxl-0,
  .sabpaisa-css-utils-classes-version-five .gx-xxl-0 {
    --bs-gutter-x: 0;
  }
  .sabpaisa-css-utils-classes-version-five .g-xxl-0,
  .sabpaisa-css-utils-classes-version-five .gy-xxl-0 {
    --bs-gutter-y: 0;
  }
  .sabpaisa-css-utils-classes-version-five .g-xxl-1,
  .sabpaisa-css-utils-classes-version-five .gx-xxl-1 {
    --bs-gutter-x: 0.25rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-xxl-1,
  .sabpaisa-css-utils-classes-version-five .gy-xxl-1 {
    --bs-gutter-y: 0.25rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-xxl-2,
  .sabpaisa-css-utils-classes-version-five .gx-xxl-2 {
    --bs-gutter-x: 0.5rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-xxl-2,
  .sabpaisa-css-utils-classes-version-five .gy-xxl-2 {
    --bs-gutter-y: 0.5rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-xxl-3,
  .sabpaisa-css-utils-classes-version-five .gx-xxl-3 {
    --bs-gutter-x: 1rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-xxl-3,
  .sabpaisa-css-utils-classes-version-five .gy-xxl-3 {
    --bs-gutter-y: 1rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-xxl-4,
  .sabpaisa-css-utils-classes-version-five .gx-xxl-4 {
    --bs-gutter-x: 1.5rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-xxl-4,
  .sabpaisa-css-utils-classes-version-five .gy-xxl-4 {
    --bs-gutter-y: 1.5rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-xxl-5,
  .sabpaisa-css-utils-classes-version-five .gx-xxl-5 {
    --bs-gutter-x: 3rem;
  }
  .sabpaisa-css-utils-classes-version-five .g-xxl-5,
  .sabpaisa-css-utils-classes-version-five .gy-xxl-5 {
    --bs-gutter-y: 3rem;
  }
}
.sabpaisa-css-utils-classes-version-five .table {
  --bs-table-color: var(--bs-body-color);
  --bs-table-bg: transparent;
  --bs-table-border-color: var(--bs-border-color);
  --bs-table-accent-bg: transparent;
  --bs-table-striped-color: var(--bs-body-color);
  --bs-table-striped-bg: rgba(0, 0, 0, 0.05);
  --bs-table-active-color: var(--bs-body-color);
  --bs-table-active-bg: rgba(0, 0, 0, 0.1);
  --bs-table-hover-color: var(--bs-body-color);
  --bs-table-hover-bg: rgba(0, 0, 0, 0.075);
  width: 100%;
  margin-bottom: 1rem;
  color: var(--bs-table-color);
  vertical-align: top;
  border-color: var(--bs-table-border-color);
}
.sabpaisa-css-utils-classes-version-five .table > :not(caption) > * > * {
  padding: 0.5rem 0.5rem;
  background-color: var(--bs-table-bg);
  border-bottom-width: 1px;
  box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
}
.sabpaisa-css-utils-classes-version-five .table > tbody {
  vertical-align: inherit;
}
.sabpaisa-css-utils-classes-version-five .table > thead {
  vertical-align: bottom;
}
.sabpaisa-css-utils-classes-version-five .table-group-divider {
  border-top: 2px solid currentcolor;
}
.sabpaisa-css-utils-classes-version-five .caption-top {
  caption-side: top;
}
.sabpaisa-css-utils-classes-version-five .table-sm > :not(caption) > * > * {
  padding: 0.25rem 0.25rem;
}
.sabpaisa-css-utils-classes-version-five .table-bordered > :not(caption) > * {
  border-width: 1px 0;
}
.sabpaisa-css-utils-classes-version-five .table-bordered > :not(caption) > * > * {
  border-width: 0 1px;
}
.sabpaisa-css-utils-classes-version-five .table-borderless > :not(caption) > * > * {
  border-bottom-width: 0;
}
.sabpaisa-css-utils-classes-version-five .table-borderless > :not(:first-child) {
  border-top-width: 0;
}
.sabpaisa-css-utils-classes-version-five .table-striped > tbody > tr:nth-of-type(odd) > * {
  --bs-table-accent-bg: var(--bs-table-striped-bg);
  color: var(--bs-table-striped-color);
}
.sabpaisa-css-utils-classes-version-five .table-striped-columns > :not(caption) > tr > :nth-child(even) {
  --bs-table-accent-bg: var(--bs-table-striped-bg);
  color: var(--bs-table-striped-color);
}
.sabpaisa-css-utils-classes-version-five .table-active {
  --bs-table-accent-bg: var(--bs-table-active-bg);
  color: var(--bs-table-active-color);
}
.sabpaisa-css-utils-classes-version-five .table-hover > tbody > tr:hover > * {
  --bs-table-accent-bg: var(--bs-table-hover-bg);
  color: var(--bs-table-hover-color);
}
.sabpaisa-css-utils-classes-version-five .table-primary {
  --bs-table-color: #000;
  --bs-table-bg: #cfe2ff;
  --bs-table-border-color: #bacbe6;
  --bs-table-striped-bg: #c5d7f2;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #bacbe6;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #bfd1ec;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}
.sabpaisa-css-utils-classes-version-five .table-secondary {
  --bs-table-color: #000;
  --bs-table-bg: #e2e3e5;
  --bs-table-border-color: #cbccce;
  --bs-table-striped-bg: #d7d8da;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #cbccce;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #d1d2d4;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}
.sabpaisa-css-utils-classes-version-five .table-success {
  --bs-table-color: #000;
  --bs-table-bg: #d1e7dd;
  --bs-table-border-color: #bcd0c7;
  --bs-table-striped-bg: #c7dbd2;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #bcd0c7;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #c1d6cc;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}
.sabpaisa-css-utils-classes-version-five .table-info {
  --bs-table-color: #000;
  --bs-table-bg: #cff4fc;
  --bs-table-border-color: #badce3;
  --bs-table-striped-bg: #c5e8ef;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #badce3;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #bfe2e9;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}
.sabpaisa-css-utils-classes-version-five .table-warning {
  --bs-table-color: #000;
  --bs-table-bg: #fff3cd;
  --bs-table-border-color: #e6dbb9;
  --bs-table-striped-bg: #f2e7c3;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #e6dbb9;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #ece1be;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}
.sabpaisa-css-utils-classes-version-five .table-danger {
  --bs-table-color: #000;
  --bs-table-bg: #f8d7da;
  --bs-table-border-color: #dfc2c4;
  --bs-table-striped-bg: #eccccf;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #dfc2c4;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #e5c7ca;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}
.sabpaisa-css-utils-classes-version-five .table-light {
  --bs-table-color: #000;
  --bs-table-bg: #f8f9fa;
  --bs-table-border-color: #dfe0e1;
  --bs-table-striped-bg: #ecedee;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #dfe0e1;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #e5e6e7;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}
.sabpaisa-css-utils-classes-version-five .table-dark {
  --bs-table-color: #fff;
  --bs-table-bg: #212529;
  --bs-table-border-color: #373b3e;
  --bs-table-striped-bg: #2c3034;
  --bs-table-striped-color: #fff;
  --bs-table-active-bg: #373b3e;
  --bs-table-active-color: #fff;
  --bs-table-hover-bg: #323539;
  --bs-table-hover-color: #fff;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}
.sabpaisa-css-utils-classes-version-five .table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
@media (max-width: 575.98px) {
  .sabpaisa-css-utils-classes-version-five .table-responsive-sm {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 767.98px) {
  .sabpaisa-css-utils-classes-version-five .table-responsive-md {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 991.98px) {
  .sabpaisa-css-utils-classes-version-five .table-responsive-lg {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1199.98px) {
  .sabpaisa-css-utils-classes-version-five .table-responsive-xl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1399.98px) {
  .sabpaisa-css-utils-classes-version-five .table-responsive-xxl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
.sabpaisa-css-utils-classes-version-five .form-label {
  margin-bottom: 0.5rem;
}
.sabpaisa-css-utils-classes-version-five .col-form-label {
  padding-top: calc(0.375rem + 1px);
  padding-bottom: calc(0.375rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
}
.sabpaisa-css-utils-classes-version-five .col-form-label-lg {
  padding-top: calc(0.5rem + 1px);
  padding-bottom: calc(0.5rem + 1px);
  font-size: 1.25rem;
}
.sabpaisa-css-utils-classes-version-five .col-form-label-sm {
  padding-top: calc(0.25rem + 1px);
  padding-bottom: calc(0.25rem + 1px);
  font-size: 0.875rem;
}
.sabpaisa-css-utils-classes-version-five .form-text {
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #6c757d;
}
.sabpaisa-css-utils-classes-version-five .form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .form-control {
    transition: none;
  }
}
.sabpaisa-css-utils-classes-version-five .form-control[type=file] {
  overflow: hidden;
}
.sabpaisa-css-utils-classes-version-five .form-control[type=file]:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.sabpaisa-css-utils-classes-version-five .form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.sabpaisa-css-utils-classes-version-five .form-control::-webkit-date-and-time-value {
  height: 1.5em;
}
.sabpaisa-css-utils-classes-version-five .form-control::placeholder {
  color: #6c757d;
  opacity: 1;
}
.sabpaisa-css-utils-classes-version-five .form-control:disabled {
  background-color: #e9ecef;
  opacity: 1;
}
.sabpaisa-css-utils-classes-version-five .form-control::file-selector-button {
  padding: 0.375rem 0.75rem;
  margin: -0.375rem -0.75rem;
  margin-inline-end: 0.75rem;
  color: #212529;
  background-color: #e9ecef;
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .form-control::file-selector-button {
    transition: none;
  }
}
.sabpaisa-css-utils-classes-version-five .form-control:hover:not(:disabled):not([readonly])::file-selector-button {
  background-color: #dde0e3;
}
.sabpaisa-css-utils-classes-version-five .form-control-plaintext {
  display: block;
  width: 100%;
  padding: 0.375rem 0;
  margin-bottom: 0;
  line-height: 1.5;
  color: #212529;
  background-color: transparent;
  border: solid transparent;
  border-width: 1px 0;
}
.sabpaisa-css-utils-classes-version-five .form-control-plaintext:focus {
  outline: 0;
}
.sabpaisa-css-utils-classes-version-five .form-control-plaintext.form-control-sm, .sabpaisa-css-utils-classes-version-five .form-control-plaintext.form-control-lg {
  padding-right: 0;
  padding-left: 0;
}
.sabpaisa-css-utils-classes-version-five .form-control-sm {
  min-height: calc(1.5em + 0.5rem + 2px);
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
}
.sabpaisa-css-utils-classes-version-five .form-control-sm::file-selector-button {
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  margin-inline-end: 0.5rem;
}
.sabpaisa-css-utils-classes-version-five .form-control-lg {
  min-height: calc(1.5em + 1rem + 2px);
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.5rem;
}
.sabpaisa-css-utils-classes-version-five .form-control-lg::file-selector-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  margin-inline-end: 1rem;
}
.sabpaisa-css-utils-classes-version-five textarea.form-control {
  min-height: calc(1.5em + 0.75rem + 2px);
}
.sabpaisa-css-utils-classes-version-five textarea.form-control-sm {
  min-height: calc(1.5em + 0.5rem + 2px);
}
.sabpaisa-css-utils-classes-version-five textarea.form-control-lg {
  min-height: calc(1.5em + 1rem + 2px);
}
.sabpaisa-css-utils-classes-version-five .form-control-color {
  width: 3rem;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem;
}
.sabpaisa-css-utils-classes-version-five .form-control-color:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.sabpaisa-css-utils-classes-version-five .form-control-color::-moz-color-swatch {
  border: 0 !important;
  border-radius: 0.375rem;
}
.sabpaisa-css-utils-classes-version-five .form-control-color::-webkit-color-swatch {
  border-radius: 0.375rem;
}
.sabpaisa-css-utils-classes-version-five .form-control-color.form-control-sm {
  height: calc(1.5em + 0.5rem + 2px);
}
.sabpaisa-css-utils-classes-version-five .form-control-color.form-control-lg {
  height: calc(1.5em + 1rem + 2px);
}
.sabpaisa-css-utils-classes-version-five .form-select {
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  -moz-padding-start: calc(0.75rem - 3px);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .form-select {
    transition: none;
  }
}
.sabpaisa-css-utils-classes-version-five .form-select:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.sabpaisa-css-utils-classes-version-five .form-select[multiple], .sabpaisa-css-utils-classes-version-five .form-select[size]:not([size="1"]) {
  padding-right: 0.75rem;
  background-image: none;
}
.sabpaisa-css-utils-classes-version-five .form-select:disabled {
  background-color: #e9ecef;
}
.sabpaisa-css-utils-classes-version-five .form-select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #212529;
}
.sabpaisa-css-utils-classes-version-five .form-select-sm {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
}
.sabpaisa-css-utils-classes-version-five .form-select-lg {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  font-size: 1.25rem;
  border-radius: 0.5rem;
}
.sabpaisa-css-utils-classes-version-five .form-check {
  display: block;
  min-height: 1.5rem;
  padding-left: 1.5em;
  margin-bottom: 0.125rem;
}
.sabpaisa-css-utils-classes-version-five .form-check .form-check-input {
  float: left;
  margin-left: -1.5em;
}
.sabpaisa-css-utils-classes-version-five .form-check-reverse {
  padding-right: 1.5em;
  padding-left: 0;
  text-align: right;
}
.sabpaisa-css-utils-classes-version-five .form-check-reverse .form-check-input {
  float: right;
  margin-right: -1.5em;
  margin-left: 0;
}
.sabpaisa-css-utils-classes-version-five .form-check-input {
  width: 1em;
  height: 1em;
  margin-top: 0.25em;
  vertical-align: top;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid rgba(0, 0, 0, 0.25);
  appearance: none;
  print-color-adjust: exact;
}
.sabpaisa-css-utils-classes-version-five .form-check-input[type=checkbox] {
  border-radius: 0.25em;
}
.sabpaisa-css-utils-classes-version-five .form-check-input[type=radio] {
  border-radius: 50%;
}
.sabpaisa-css-utils-classes-version-five .form-check-input:active {
  filter: brightness(90%);
}
.sabpaisa-css-utils-classes-version-five .form-check-input:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.sabpaisa-css-utils-classes-version-five .form-check-input:checked {
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.sabpaisa-css-utils-classes-version-five .form-check-input:checked[type=checkbox] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
}
.sabpaisa-css-utils-classes-version-five .form-check-input:checked[type=radio] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
}
.sabpaisa-css-utils-classes-version-five .form-check-input[type=checkbox]:indeterminate {
  background-color: #0d6efd;
  border-color: #0d6efd;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
}
.sabpaisa-css-utils-classes-version-five .form-check-input:disabled {
  pointer-events: none;
  filter: none;
  opacity: 0.5;
}
.sabpaisa-css-utils-classes-version-five .form-check-input[disabled] ~ .form-check-label, .sabpaisa-css-utils-classes-version-five .form-check-input:disabled ~ .form-check-label {
  cursor: default;
  opacity: 0.5;
}
.sabpaisa-css-utils-classes-version-five .form-switch {
  padding-left: 2.5em;
}
.sabpaisa-css-utils-classes-version-five .form-switch .form-check-input {
  width: 2em;
  margin-left: -2.5em;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
  background-position: left center;
  border-radius: 2em;
  transition: background-position 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .form-switch .form-check-input {
    transition: none;
  }
}
.sabpaisa-css-utils-classes-version-five .form-switch .form-check-input:focus {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e");
}
.sabpaisa-css-utils-classes-version-five .form-switch .form-check-input:checked {
  background-position: right center;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}
.sabpaisa-css-utils-classes-version-five .form-switch.form-check-reverse {
  padding-right: 2.5em;
  padding-left: 0;
}
.sabpaisa-css-utils-classes-version-five .form-switch.form-check-reverse .form-check-input {
  margin-right: -2.5em;
  margin-left: 0;
}
.sabpaisa-css-utils-classes-version-five .form-check-inline {
  display: inline-block;
  margin-right: 1rem;
}
.sabpaisa-css-utils-classes-version-five .btn-check {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
.sabpaisa-css-utils-classes-version-five .btn-check[disabled] + .btn, .sabpaisa-css-utils-classes-version-five .btn-check:disabled + .btn {
  pointer-events: none;
  filter: none;
  opacity: 0.65;
}
.sabpaisa-css-utils-classes-version-five .form-range {
  width: 100%;
  height: 1.5rem;
  padding: 0;
  background-color: transparent;
  appearance: none;
}
.sabpaisa-css-utils-classes-version-five .form-range:focus {
  outline: 0;
}
.sabpaisa-css-utils-classes-version-five .form-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.sabpaisa-css-utils-classes-version-five .form-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.sabpaisa-css-utils-classes-version-five .form-range::-moz-focus-outer {
  border: 0;
}
.sabpaisa-css-utils-classes-version-five .form-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -0.25rem;
  background-color: #0d6efd;
  border: 0;
  border-radius: 1rem;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .form-range::-webkit-slider-thumb {
    transition: none;
  }
}
.sabpaisa-css-utils-classes-version-five .form-range::-webkit-slider-thumb:active {
  background-color: #b6d4fe;
}
.sabpaisa-css-utils-classes-version-five .form-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}
.sabpaisa-css-utils-classes-version-five .form-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  background-color: #0d6efd;
  border: 0;
  border-radius: 1rem;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .form-range::-moz-range-thumb {
    transition: none;
  }
}
.sabpaisa-css-utils-classes-version-five .form-range::-moz-range-thumb:active {
  background-color: #b6d4fe;
}
.sabpaisa-css-utils-classes-version-five .form-range::-moz-range-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}
.sabpaisa-css-utils-classes-version-five .form-range:disabled {
  pointer-events: none;
}
.sabpaisa-css-utils-classes-version-five .form-range:disabled::-webkit-slider-thumb {
  background-color: #adb5bd;
}
.sabpaisa-css-utils-classes-version-five .form-range:disabled::-moz-range-thumb {
  background-color: #adb5bd;
}
.sabpaisa-css-utils-classes-version-five .form-floating {
  position: relative;
}
.sabpaisa-css-utils-classes-version-five .form-floating > .form-control,
.sabpaisa-css-utils-classes-version-five .form-floating > .form-control-plaintext,
.sabpaisa-css-utils-classes-version-five .form-floating > .form-select {
  height: calc(3.5rem + 2px);
  line-height: 1.25;
}
.sabpaisa-css-utils-classes-version-five .form-floating > label {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1rem 0.75rem;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
  white-space: nowrap;
  pointer-events: none;
  border: 1px solid transparent;
  transform-origin: 0 0;
  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .form-floating > label {
    transition: none;
  }
}
.sabpaisa-css-utils-classes-version-five .form-floating > .form-control,
.sabpaisa-css-utils-classes-version-five .form-floating > .form-control-plaintext {
  padding: 1rem 0.75rem;
}
.sabpaisa-css-utils-classes-version-five .form-floating > .form-control::placeholder,
.sabpaisa-css-utils-classes-version-five .form-floating > .form-control-plaintext::placeholder {
  color: transparent;
}
.sabpaisa-css-utils-classes-version-five .form-floating > .form-control:focus, .sabpaisa-css-utils-classes-version-five .form-floating > .form-control:not(:placeholder-shown),
.sabpaisa-css-utils-classes-version-five .form-floating > .form-control-plaintext:focus,
.sabpaisa-css-utils-classes-version-five .form-floating > .form-control-plaintext:not(:placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.sabpaisa-css-utils-classes-version-five .form-floating > .form-control:-webkit-autofill,
.sabpaisa-css-utils-classes-version-five .form-floating > .form-control-plaintext:-webkit-autofill {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.sabpaisa-css-utils-classes-version-five .form-floating > .form-select {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.sabpaisa-css-utils-classes-version-five .form-floating > .form-control:focus ~ label,
.sabpaisa-css-utils-classes-version-five .form-floating > .form-control:not(:placeholder-shown) ~ label,
.sabpaisa-css-utils-classes-version-five .form-floating > .form-control-plaintext ~ label,
.sabpaisa-css-utils-classes-version-five .form-floating > .form-select ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.sabpaisa-css-utils-classes-version-five .form-floating > .form-control:-webkit-autofill ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.sabpaisa-css-utils-classes-version-five .form-floating > .form-control-plaintext ~ label {
  border-width: 1px 0;
}
.sabpaisa-css-utils-classes-version-five .input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.sabpaisa-css-utils-classes-version-five .input-group > .form-control,
.sabpaisa-css-utils-classes-version-five .input-group > .form-select,
.sabpaisa-css-utils-classes-version-five .input-group > .form-floating {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}
.sabpaisa-css-utils-classes-version-five .input-group > .form-control:focus,
.sabpaisa-css-utils-classes-version-five .input-group > .form-select:focus,
.sabpaisa-css-utils-classes-version-five .input-group > .form-floating:focus-within {
  z-index: 5;
}
.sabpaisa-css-utils-classes-version-five .input-group .btn {
  position: relative;
  z-index: 2;
}
.sabpaisa-css-utils-classes-version-five .input-group .btn:focus {
  z-index: 5;
}
.sabpaisa-css-utils-classes-version-five .input-group-text {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
}
.sabpaisa-css-utils-classes-version-five .input-group-lg > .form-control,
.sabpaisa-css-utils-classes-version-five .input-group-lg > .form-select,
.sabpaisa-css-utils-classes-version-five .input-group-lg > .input-group-text,
.sabpaisa-css-utils-classes-version-five .input-group-lg > .btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.5rem;
}
.sabpaisa-css-utils-classes-version-five .input-group-sm > .form-control,
.sabpaisa-css-utils-classes-version-five .input-group-sm > .form-select,
.sabpaisa-css-utils-classes-version-five .input-group-sm > .input-group-text,
.sabpaisa-css-utils-classes-version-five .input-group-sm > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
}
.sabpaisa-css-utils-classes-version-five .input-group-lg > .form-select,
.sabpaisa-css-utils-classes-version-five .input-group-sm > .form-select {
  padding-right: 3rem;
}
.sabpaisa-css-utils-classes-version-five .input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),
.sabpaisa-css-utils-classes-version-five .input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3),
.sabpaisa-css-utils-classes-version-five .input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-control,
.sabpaisa-css-utils-classes-version-five .input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-select {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.sabpaisa-css-utils-classes-version-five .input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),
.sabpaisa-css-utils-classes-version-five .input-group.has-validation > .dropdown-toggle:nth-last-child(n+4),
.sabpaisa-css-utils-classes-version-five .input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-control,
.sabpaisa-css-utils-classes-version-five .input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-select {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.sabpaisa-css-utils-classes-version-five .input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
  margin-left: -1px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.sabpaisa-css-utils-classes-version-five .input-group > .form-floating:not(:first-child) > .form-control,
.sabpaisa-css-utils-classes-version-five .input-group > .form-floating:not(:first-child) > .form-select {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.sabpaisa-css-utils-classes-version-five .valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #198754;
}
.sabpaisa-css-utils-classes-version-five .valid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.875rem;
  color: #fff;
  background-color: rgba(25, 135, 84, 0.9);
  border-radius: 0.375rem;
}
.was-validated .sabpaisa-css-utils-classes-version-five:valid ~ .valid-feedback,
.was-validated .sabpaisa-css-utils-classes-version-five:valid ~ .valid-tooltip, .sabpaisa-css-utils-classes-version-five.is-valid ~ .valid-feedback,
.sabpaisa-css-utils-classes-version-five.is-valid ~ .valid-tooltip {
  display: block;
}
.was-validated .sabpaisa-css-utils-classes-version-five .form-control:valid, .sabpaisa-css-utils-classes-version-five .form-control.is-valid {
  border-color: #198754;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .sabpaisa-css-utils-classes-version-five .form-control:valid:focus, .sabpaisa-css-utils-classes-version-five .form-control.is-valid:focus {
  border-color: #198754;
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}
.was-validated .sabpaisa-css-utils-classes-version-five textarea.form-control:valid, .sabpaisa-css-utils-classes-version-five textarea.form-control.is-valid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}
.was-validated .sabpaisa-css-utils-classes-version-five .form-select:valid, .sabpaisa-css-utils-classes-version-five .form-select.is-valid {
  border-color: #198754;
}
.was-validated .sabpaisa-css-utils-classes-version-five .form-select:valid:not([multiple]):not([size]), .was-validated .sabpaisa-css-utils-classes-version-five .form-select:valid:not([multiple])[size="1"], .sabpaisa-css-utils-classes-version-five .form-select.is-valid:not([multiple]):not([size]), .sabpaisa-css-utils-classes-version-five .form-select.is-valid:not([multiple])[size="1"] {
  padding-right: 4.125rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-position: right 0.75rem center, center right 2.25rem;
  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .sabpaisa-css-utils-classes-version-five .form-select:valid:focus, .sabpaisa-css-utils-classes-version-five .form-select.is-valid:focus {
  border-color: #198754;
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}
.was-validated .sabpaisa-css-utils-classes-version-five .form-control-color:valid, .sabpaisa-css-utils-classes-version-five .form-control-color.is-valid {
  width: calc(3rem + calc(1.5em + 0.75rem));
}
.was-validated .sabpaisa-css-utils-classes-version-five .form-check-input:valid, .sabpaisa-css-utils-classes-version-five .form-check-input.is-valid {
  border-color: #198754;
}
.was-validated .sabpaisa-css-utils-classes-version-five .form-check-input:valid:checked, .sabpaisa-css-utils-classes-version-five .form-check-input.is-valid:checked {
  background-color: #198754;
}
.was-validated .sabpaisa-css-utils-classes-version-five .form-check-input:valid:focus, .sabpaisa-css-utils-classes-version-five .form-check-input.is-valid:focus {
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}
.was-validated .sabpaisa-css-utils-classes-version-five .form-check-input:valid ~ .form-check-label, .sabpaisa-css-utils-classes-version-five .form-check-input.is-valid ~ .form-check-label {
  color: #198754;
}
.sabpaisa-css-utils-classes-version-five .form-check-inline .form-check-input ~ .valid-feedback {
  margin-left: 0.5em;
}
.was-validated .sabpaisa-css-utils-classes-version-five .input-group > .form-control:not(:focus):valid, .sabpaisa-css-utils-classes-version-five .input-group > .form-control:not(:focus).is-valid,
.was-validated .sabpaisa-css-utils-classes-version-five .input-group > .form-select:not(:focus):valid,
.sabpaisa-css-utils-classes-version-five .input-group > .form-select:not(:focus).is-valid,
.was-validated .sabpaisa-css-utils-classes-version-five .input-group > .form-floating:not(:focus-within):valid,
.sabpaisa-css-utils-classes-version-five .input-group > .form-floating:not(:focus-within).is-valid {
  z-index: 3;
}
.sabpaisa-css-utils-classes-version-five .invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #dc3545;
}
.sabpaisa-css-utils-classes-version-five .invalid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.875rem;
  color: #fff;
  background-color: rgba(220, 53, 69, 0.9);
  border-radius: 0.375rem;
}
.was-validated .sabpaisa-css-utils-classes-version-five:invalid ~ .invalid-feedback,
.was-validated .sabpaisa-css-utils-classes-version-five:invalid ~ .invalid-tooltip, .sabpaisa-css-utils-classes-version-five.is-invalid ~ .invalid-feedback,
.sabpaisa-css-utils-classes-version-five.is-invalid ~ .invalid-tooltip {
  display: block;
}
.was-validated .sabpaisa-css-utils-classes-version-five .form-control:invalid, .sabpaisa-css-utils-classes-version-five .form-control.is-invalid {
  border-color: #dc3545;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .sabpaisa-css-utils-classes-version-five .form-control:invalid:focus, .sabpaisa-css-utils-classes-version-five .form-control.is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}
.was-validated .sabpaisa-css-utils-classes-version-five textarea.form-control:invalid, .sabpaisa-css-utils-classes-version-five textarea.form-control.is-invalid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}
.was-validated .sabpaisa-css-utils-classes-version-five .form-select:invalid, .sabpaisa-css-utils-classes-version-five .form-select.is-invalid {
  border-color: #dc3545;
}
.was-validated .sabpaisa-css-utils-classes-version-five .form-select:invalid:not([multiple]):not([size]), .was-validated .sabpaisa-css-utils-classes-version-five .form-select:invalid:not([multiple])[size="1"], .sabpaisa-css-utils-classes-version-five .form-select.is-invalid:not([multiple]):not([size]), .sabpaisa-css-utils-classes-version-five .form-select.is-invalid:not([multiple])[size="1"] {
  padding-right: 4.125rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-position: right 0.75rem center, center right 2.25rem;
  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .sabpaisa-css-utils-classes-version-five .form-select:invalid:focus, .sabpaisa-css-utils-classes-version-five .form-select.is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}
.was-validated .sabpaisa-css-utils-classes-version-five .form-control-color:invalid, .sabpaisa-css-utils-classes-version-five .form-control-color.is-invalid {
  width: calc(3rem + calc(1.5em + 0.75rem));
}
.was-validated .sabpaisa-css-utils-classes-version-five .form-check-input:invalid, .sabpaisa-css-utils-classes-version-five .form-check-input.is-invalid {
  border-color: #dc3545;
}
.was-validated .sabpaisa-css-utils-classes-version-five .form-check-input:invalid:checked, .sabpaisa-css-utils-classes-version-five .form-check-input.is-invalid:checked {
  background-color: #dc3545;
}
.was-validated .sabpaisa-css-utils-classes-version-five .form-check-input:invalid:focus, .sabpaisa-css-utils-classes-version-five .form-check-input.is-invalid:focus {
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}
.was-validated .sabpaisa-css-utils-classes-version-five .form-check-input:invalid ~ .form-check-label, .sabpaisa-css-utils-classes-version-five .form-check-input.is-invalid ~ .form-check-label {
  color: #dc3545;
}
.sabpaisa-css-utils-classes-version-five .form-check-inline .form-check-input ~ .invalid-feedback {
  margin-left: 0.5em;
}
.was-validated .sabpaisa-css-utils-classes-version-five .input-group > .form-control:not(:focus):invalid, .sabpaisa-css-utils-classes-version-five .input-group > .form-control:not(:focus).is-invalid,
.was-validated .sabpaisa-css-utils-classes-version-five .input-group > .form-select:not(:focus):invalid,
.sabpaisa-css-utils-classes-version-five .input-group > .form-select:not(:focus).is-invalid,
.was-validated .sabpaisa-css-utils-classes-version-five .input-group > .form-floating:not(:focus-within):invalid,
.sabpaisa-css-utils-classes-version-five .input-group > .form-floating:not(:focus-within).is-invalid {
  z-index: 4;
}
.sabpaisa-css-utils-classes-version-five .btn {
  --bs-btn-padding-x: 0.75rem;
  --bs-btn-padding-y: 0.375rem;
  --bs-btn-font-family: ;
  --bs-btn-font-size: 1rem;
  --bs-btn-font-weight: 400;
  --bs-btn-line-height: 1.5;
  --bs-btn-color: #212529;
  --bs-btn-bg: transparent;
  --bs-btn-border-width: 1px;
  --bs-btn-border-color: transparent;
  --bs-btn-border-radius: 0.375rem;
  --bs-btn-hover-border-color: transparent;
  --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
  --bs-btn-disabled-opacity: 0.65;
  --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);
  display: inline-block;
  padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
  font-family: var(--bs-btn-font-family);
  font-size: var(--bs-btn-font-size);
  font-weight: var(--bs-btn-font-weight);
  line-height: var(--bs-btn-line-height);
  color: var(--bs-btn-color);
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
  border-radius: var(--bs-btn-border-radius);
  background-color: var(--bs-btn-bg);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .btn {
    transition: none;
  }
}
.sabpaisa-css-utils-classes-version-five .btn:hover {
  color: var(--bs-btn-hover-color);
  background-color: var(--bs-btn-hover-bg);
  border-color: var(--bs-btn-hover-border-color);
}
.btn-check + .sabpaisa-css-utils-classes-version-five .btn:hover {
  color: var(--bs-btn-color);
  background-color: var(--bs-btn-bg);
  border-color: var(--bs-btn-border-color);
}
.sabpaisa-css-utils-classes-version-five .btn:focus-visible {
  color: var(--bs-btn-hover-color);
  background-color: var(--bs-btn-hover-bg);
  border-color: var(--bs-btn-hover-border-color);
  outline: 0;
  box-shadow: var(--bs-btn-focus-box-shadow);
}
.btn-check:focus-visible + .sabpaisa-css-utils-classes-version-five .btn {
  border-color: var(--bs-btn-hover-border-color);
  outline: 0;
  box-shadow: var(--bs-btn-focus-box-shadow);
}
.btn-check:checked + .sabpaisa-css-utils-classes-version-five .btn, :not(.btn-check) + .sabpaisa-css-utils-classes-version-five .btn:active, .sabpaisa-css-utils-classes-version-five .btn:first-child:active, .sabpaisa-css-utils-classes-version-five .btn.active, .sabpaisa-css-utils-classes-version-five .btn.show {
  color: var(--bs-btn-active-color);
  background-color: var(--bs-btn-active-bg);
  border-color: var(--bs-btn-active-border-color);
}
.btn-check:checked + .sabpaisa-css-utils-classes-version-five .btn:focus-visible, :not(.btn-check) + .sabpaisa-css-utils-classes-version-five .btn:active:focus-visible, .sabpaisa-css-utils-classes-version-five .btn:first-child:active:focus-visible, .sabpaisa-css-utils-classes-version-five .btn.active:focus-visible, .sabpaisa-css-utils-classes-version-five .btn.show:focus-visible {
  box-shadow: var(--bs-btn-focus-box-shadow);
}
.sabpaisa-css-utils-classes-version-five .btn:disabled, .sabpaisa-css-utils-classes-version-five .btn.disabled, fieldset:disabled .sabpaisa-css-utils-classes-version-five .btn {
  color: var(--bs-btn-disabled-color);
  pointer-events: none;
  background-color: var(--bs-btn-disabled-bg);
  border-color: var(--bs-btn-disabled-border-color);
  opacity: var(--bs-btn-disabled-opacity);
}
.sabpaisa-css-utils-classes-version-five .btn-primary {
  --bs-btn-color: #fff;
  --bs-btn-bg: #0d6efd;
  --bs-btn-border-color: #0d6efd;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #0b5ed7;
  --bs-btn-hover-border-color: #0a58ca;
  --bs-btn-focus-shadow-rgb: 49, 132, 253;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #0a58ca;
  --bs-btn-active-border-color: #0a53be;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #0d6efd;
  --bs-btn-disabled-border-color: #0d6efd;
}
.sabpaisa-css-utils-classes-version-five .btn-secondary {
  --bs-btn-color: #fff;
  --bs-btn-bg: #6c757d;
  --bs-btn-border-color: #6c757d;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #5c636a;
  --bs-btn-hover-border-color: #565e64;
  --bs-btn-focus-shadow-rgb: 130, 138, 145;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #565e64;
  --bs-btn-active-border-color: #51585e;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #6c757d;
  --bs-btn-disabled-border-color: #6c757d;
}
.sabpaisa-css-utils-classes-version-five .btn-success {
  --bs-btn-color: #fff;
  --bs-btn-bg: #198754;
  --bs-btn-border-color: #198754;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #157347;
  --bs-btn-hover-border-color: #146c43;
  --bs-btn-focus-shadow-rgb: 60, 153, 110;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #146c43;
  --bs-btn-active-border-color: #13653f;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #198754;
  --bs-btn-disabled-border-color: #198754;
}
.sabpaisa-css-utils-classes-version-five .btn-info {
  --bs-btn-color: #000;
  --bs-btn-bg: #0dcaf0;
  --bs-btn-border-color: #0dcaf0;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #31d2f2;
  --bs-btn-hover-border-color: #25cff2;
  --bs-btn-focus-shadow-rgb: 11, 172, 204;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #3dd5f3;
  --bs-btn-active-border-color: #25cff2;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #000;
  --bs-btn-disabled-bg: #0dcaf0;
  --bs-btn-disabled-border-color: #0dcaf0;
}
.sabpaisa-css-utils-classes-version-five .btn-warning {
  --bs-btn-color: #000;
  --bs-btn-bg: #ffc107;
  --bs-btn-border-color: #ffc107;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #ffca2c;
  --bs-btn-hover-border-color: #ffc720;
  --bs-btn-focus-shadow-rgb: 217, 164, 6;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #ffcd39;
  --bs-btn-active-border-color: #ffc720;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #000;
  --bs-btn-disabled-bg: #ffc107;
  --bs-btn-disabled-border-color: #ffc107;
}
.sabpaisa-css-utils-classes-version-five .btn-danger {
  --bs-btn-color: #fff;
  --bs-btn-bg: #dc3545;
  --bs-btn-border-color: #dc3545;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #bb2d3b;
  --bs-btn-hover-border-color: #b02a37;
  --bs-btn-focus-shadow-rgb: 225, 83, 97;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #b02a37;
  --bs-btn-active-border-color: #a52834;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #dc3545;
  --bs-btn-disabled-border-color: #dc3545;
}
.sabpaisa-css-utils-classes-version-five .btn-light {
  --bs-btn-color: #000;
  --bs-btn-bg: #f8f9fa;
  --bs-btn-border-color: #f8f9fa;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #d3d4d5;
  --bs-btn-hover-border-color: #c6c7c8;
  --bs-btn-focus-shadow-rgb: 211, 212, 213;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #c6c7c8;
  --bs-btn-active-border-color: #babbbc;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #000;
  --bs-btn-disabled-bg: #f8f9fa;
  --bs-btn-disabled-border-color: #f8f9fa;
}
.sabpaisa-css-utils-classes-version-five .btn-dark {
  --bs-btn-color: #fff;
  --bs-btn-bg: #212529;
  --bs-btn-border-color: #212529;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #424649;
  --bs-btn-hover-border-color: #373b3e;
  --bs-btn-focus-shadow-rgb: 66, 70, 73;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #4d5154;
  --bs-btn-active-border-color: #373b3e;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #212529;
  --bs-btn-disabled-border-color: #212529;
}
.sabpaisa-css-utils-classes-version-five .btn-outline-primary {
  --bs-btn-color: #0d6efd;
  --bs-btn-border-color: #0d6efd;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #0d6efd;
  --bs-btn-hover-border-color: #0d6efd;
  --bs-btn-focus-shadow-rgb: 13, 110, 253;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #0d6efd;
  --bs-btn-active-border-color: #0d6efd;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #0d6efd;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #0d6efd;
  --bs-gradient: none;
}
.sabpaisa-css-utils-classes-version-five .btn-outline-secondary {
  --bs-btn-color: #6c757d;
  --bs-btn-border-color: #6c757d;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #6c757d;
  --bs-btn-hover-border-color: #6c757d;
  --bs-btn-focus-shadow-rgb: 108, 117, 125;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #6c757d;
  --bs-btn-active-border-color: #6c757d;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #6c757d;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #6c757d;
  --bs-gradient: none;
}
.sabpaisa-css-utils-classes-version-five .btn-outline-success {
  --bs-btn-color: #198754;
  --bs-btn-border-color: #198754;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #198754;
  --bs-btn-hover-border-color: #198754;
  --bs-btn-focus-shadow-rgb: 25, 135, 84;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #198754;
  --bs-btn-active-border-color: #198754;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #198754;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #198754;
  --bs-gradient: none;
}
.sabpaisa-css-utils-classes-version-five .btn-outline-info {
  --bs-btn-color: #0dcaf0;
  --bs-btn-border-color: #0dcaf0;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #0dcaf0;
  --bs-btn-hover-border-color: #0dcaf0;
  --bs-btn-focus-shadow-rgb: 13, 202, 240;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #0dcaf0;
  --bs-btn-active-border-color: #0dcaf0;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #0dcaf0;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #0dcaf0;
  --bs-gradient: none;
}
.sabpaisa-css-utils-classes-version-five .btn-outline-warning {
  --bs-btn-color: #ffc107;
  --bs-btn-border-color: #ffc107;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #ffc107;
  --bs-btn-hover-border-color: #ffc107;
  --bs-btn-focus-shadow-rgb: 255, 193, 7;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #ffc107;
  --bs-btn-active-border-color: #ffc107;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #ffc107;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #ffc107;
  --bs-gradient: none;
}
.sabpaisa-css-utils-classes-version-five .btn-outline-danger {
  --bs-btn-color: #dc3545;
  --bs-btn-border-color: #dc3545;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #dc3545;
  --bs-btn-hover-border-color: #dc3545;
  --bs-btn-focus-shadow-rgb: 220, 53, 69;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #dc3545;
  --bs-btn-active-border-color: #dc3545;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #dc3545;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #dc3545;
  --bs-gradient: none;
}
.sabpaisa-css-utils-classes-version-five .btn-outline-light {
  --bs-btn-color: #f8f9fa;
  --bs-btn-border-color: #f8f9fa;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #f8f9fa;
  --bs-btn-hover-border-color: #f8f9fa;
  --bs-btn-focus-shadow-rgb: 248, 249, 250;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #f8f9fa;
  --bs-btn-active-border-color: #f8f9fa;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #f8f9fa;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #f8f9fa;
  --bs-gradient: none;
}
.sabpaisa-css-utils-classes-version-five .btn-outline-dark {
  --bs-btn-color: #212529;
  --bs-btn-border-color: #212529;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #212529;
  --bs-btn-hover-border-color: #212529;
  --bs-btn-focus-shadow-rgb: 33, 37, 41;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #212529;
  --bs-btn-active-border-color: #212529;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #212529;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #212529;
  --bs-gradient: none;
}
.sabpaisa-css-utils-classes-version-five .btn-link {
  --bs-btn-font-weight: 400;
  --bs-btn-color: var(--bs-link-color);
  --bs-btn-bg: transparent;
  --bs-btn-border-color: transparent;
  --bs-btn-hover-color: var(--bs-link-hover-color);
  --bs-btn-hover-border-color: transparent;
  --bs-btn-active-color: var(--bs-link-hover-color);
  --bs-btn-active-border-color: transparent;
  --bs-btn-disabled-color: #6c757d;
  --bs-btn-disabled-border-color: transparent;
  --bs-btn-box-shadow: none;
  --bs-btn-focus-shadow-rgb: 49, 132, 253;
  text-decoration: underline;
}
.sabpaisa-css-utils-classes-version-five .btn-link:focus-visible {
  color: var(--bs-btn-color);
}
.sabpaisa-css-utils-classes-version-five .btn-link:hover {
  color: var(--bs-btn-hover-color);
}
.sabpaisa-css-utils-classes-version-five .btn-lg, .sabpaisa-css-utils-classes-version-five .btn-group-lg > .btn {
  --bs-btn-padding-y: 0.5rem;
  --bs-btn-padding-x: 1rem;
  --bs-btn-font-size: 1.25rem;
  --bs-btn-border-radius: 0.5rem;
}
.sabpaisa-css-utils-classes-version-five .btn-sm, .sabpaisa-css-utils-classes-version-five .btn-group-sm > .btn {
  --bs-btn-padding-y: 0.25rem;
  --bs-btn-padding-x: 0.5rem;
  --bs-btn-font-size: 0.875rem;
  --bs-btn-border-radius: 0.25rem;
}
.sabpaisa-css-utils-classes-version-five .fade {
  transition: opacity 0.15s linear;
}
@media (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .fade {
    transition: none;
  }
}
.sabpaisa-css-utils-classes-version-five .fade:not(.show) {
  opacity: 0;
}
.sabpaisa-css-utils-classes-version-five .collapse:not(.show) {
  display: none;
}
.sabpaisa-css-utils-classes-version-five .collapsing {
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .collapsing {
    transition: none;
  }
}
.sabpaisa-css-utils-classes-version-five .collapsing.collapse-horizontal {
  width: 0;
  height: auto;
  transition: width 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .collapsing.collapse-horizontal {
    transition: none;
  }
}
.sabpaisa-css-utils-classes-version-five .dropup,
.sabpaisa-css-utils-classes-version-five .dropend,
.sabpaisa-css-utils-classes-version-five .dropdown,
.sabpaisa-css-utils-classes-version-five .dropstart,
.sabpaisa-css-utils-classes-version-five .dropup-center,
.sabpaisa-css-utils-classes-version-five .dropdown-center {
  position: relative;
}
.sabpaisa-css-utils-classes-version-five .dropdown-toggle {
  white-space: nowrap;
}
.sabpaisa-css-utils-classes-version-five .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
.sabpaisa-css-utils-classes-version-five .dropdown-toggle:empty::after {
  margin-left: 0;
}
.sabpaisa-css-utils-classes-version-five .dropdown-menu {
  --bs-dropdown-zindex: 1000;
  --bs-dropdown-min-width: 10rem;
  --bs-dropdown-padding-x: 0;
  --bs-dropdown-padding-y: 0.5rem;
  --bs-dropdown-spacer: 0.125rem;
  --bs-dropdown-font-size: 1rem;
  --bs-dropdown-color: #212529;
  --bs-dropdown-bg: #fff;
  --bs-dropdown-border-color: var(--bs-border-color-translucent);
  --bs-dropdown-border-radius: 0.375rem;
  --bs-dropdown-border-width: 1px;
  --bs-dropdown-inner-border-radius: calc(0.375rem - 1px);
  --bs-dropdown-divider-bg: var(--bs-border-color-translucent);
  --bs-dropdown-divider-margin-y: 0.5rem;
  --bs-dropdown-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  --bs-dropdown-link-color: #212529;
  --bs-dropdown-link-hover-color: #1e2125;
  --bs-dropdown-link-hover-bg: #e9ecef;
  --bs-dropdown-link-active-color: #fff;
  --bs-dropdown-link-active-bg: #0d6efd;
  --bs-dropdown-link-disabled-color: #adb5bd;
  --bs-dropdown-item-padding-x: 1rem;
  --bs-dropdown-item-padding-y: 0.25rem;
  --bs-dropdown-header-color: #6c757d;
  --bs-dropdown-header-padding-x: 1rem;
  --bs-dropdown-header-padding-y: 0.5rem;
  position: absolute;
  z-index: var(--bs-dropdown-zindex);
  display: none;
  min-width: var(--bs-dropdown-min-width);
  padding: var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);
  margin: 0;
  font-size: var(--bs-dropdown-font-size);
  color: var(--bs-dropdown-color);
  text-align: left;
  list-style: none;
  background-color: var(--bs-dropdown-bg);
  background-clip: padding-box;
  border: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);
  border-radius: var(--bs-dropdown-border-radius);
}
.sabpaisa-css-utils-classes-version-five .dropdown-menu[data-bs-popper] {
  top: 100%;
  left: 0;
  margin-top: var(--bs-dropdown-spacer);
}
.sabpaisa-css-utils-classes-version-five .dropdown-menu-start {
  --bs-position: start;
}
.sabpaisa-css-utils-classes-version-five .dropdown-menu-start[data-bs-popper] {
  right: auto;
  left: 0;
}
.sabpaisa-css-utils-classes-version-five .dropdown-menu-end {
  --bs-position: end;
}
.sabpaisa-css-utils-classes-version-five .dropdown-menu-end[data-bs-popper] {
  right: 0;
  left: auto;
}
@media (min-width: 576px) {
  .sabpaisa-css-utils-classes-version-five .dropdown-menu-sm-start {
    --bs-position: start;
  }
  .sabpaisa-css-utils-classes-version-five .dropdown-menu-sm-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .sabpaisa-css-utils-classes-version-five .dropdown-menu-sm-end {
    --bs-position: end;
  }
  .sabpaisa-css-utils-classes-version-five .dropdown-menu-sm-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 768px) {
  .sabpaisa-css-utils-classes-version-five .dropdown-menu-md-start {
    --bs-position: start;
  }
  .sabpaisa-css-utils-classes-version-five .dropdown-menu-md-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .sabpaisa-css-utils-classes-version-five .dropdown-menu-md-end {
    --bs-position: end;
  }
  .sabpaisa-css-utils-classes-version-five .dropdown-menu-md-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 992px) {
  .sabpaisa-css-utils-classes-version-five .dropdown-menu-lg-start {
    --bs-position: start;
  }
  .sabpaisa-css-utils-classes-version-five .dropdown-menu-lg-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .sabpaisa-css-utils-classes-version-five .dropdown-menu-lg-end {
    --bs-position: end;
  }
  .sabpaisa-css-utils-classes-version-five .dropdown-menu-lg-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1200px) {
  .sabpaisa-css-utils-classes-version-five .dropdown-menu-xl-start {
    --bs-position: start;
  }
  .sabpaisa-css-utils-classes-version-five .dropdown-menu-xl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .sabpaisa-css-utils-classes-version-five .dropdown-menu-xl-end {
    --bs-position: end;
  }
  .sabpaisa-css-utils-classes-version-five .dropdown-menu-xl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1400px) {
  .sabpaisa-css-utils-classes-version-five .dropdown-menu-xxl-start {
    --bs-position: start;
  }
  .sabpaisa-css-utils-classes-version-five .dropdown-menu-xxl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .sabpaisa-css-utils-classes-version-five .dropdown-menu-xxl-end {
    --bs-position: end;
  }
  .sabpaisa-css-utils-classes-version-five .dropdown-menu-xxl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
.sabpaisa-css-utils-classes-version-five .dropup .dropdown-menu[data-bs-popper] {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: var(--bs-dropdown-spacer);
}
.sabpaisa-css-utils-classes-version-five .dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}
.sabpaisa-css-utils-classes-version-five .dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}
.sabpaisa-css-utils-classes-version-five .dropend .dropdown-menu[data-bs-popper] {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: var(--bs-dropdown-spacer);
}
.sabpaisa-css-utils-classes-version-five .dropend .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}
.sabpaisa-css-utils-classes-version-five .dropend .dropdown-toggle:empty::after {
  margin-left: 0;
}
.sabpaisa-css-utils-classes-version-five .dropend .dropdown-toggle::after {
  vertical-align: 0;
}
.sabpaisa-css-utils-classes-version-five .dropstart .dropdown-menu[data-bs-popper] {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: var(--bs-dropdown-spacer);
}
.sabpaisa-css-utils-classes-version-five .dropstart .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
}
.sabpaisa-css-utils-classes-version-five .dropstart .dropdown-toggle::after {
  display: none;
}
.sabpaisa-css-utils-classes-version-five .dropstart .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}
.sabpaisa-css-utils-classes-version-five .dropstart .dropdown-toggle:empty::after {
  margin-left: 0;
}
.sabpaisa-css-utils-classes-version-five .dropstart .dropdown-toggle::before {
  vertical-align: 0;
}
.sabpaisa-css-utils-classes-version-five .dropdown-divider {
  height: 0;
  margin: var(--bs-dropdown-divider-margin-y) 0;
  overflow: hidden;
  border-top: 1px solid var(--bs-dropdown-divider-bg);
  opacity: 1;
}
.sabpaisa-css-utils-classes-version-five .dropdown-item {
  display: block;
  width: 100%;
  padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
  clear: both;
  font-weight: 400;
  color: var(--bs-dropdown-link-color);
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}
.sabpaisa-css-utils-classes-version-five .dropdown-item:hover, .sabpaisa-css-utils-classes-version-five .dropdown-item:focus {
  color: var(--bs-dropdown-link-hover-color);
  background-color: var(--bs-dropdown-link-hover-bg);
}
.sabpaisa-css-utils-classes-version-five .dropdown-item.active, .sabpaisa-css-utils-classes-version-five .dropdown-item:active {
  color: var(--bs-dropdown-link-active-color);
  text-decoration: none;
  background-color: var(--bs-dropdown-link-active-bg);
}
.sabpaisa-css-utils-classes-version-five .dropdown-item.disabled, .sabpaisa-css-utils-classes-version-five .dropdown-item:disabled {
  color: var(--bs-dropdown-link-disabled-color);
  pointer-events: none;
  background-color: transparent;
}
.sabpaisa-css-utils-classes-version-five .dropdown-menu.show {
  display: block;
}
.sabpaisa-css-utils-classes-version-five .dropdown-header {
  display: block;
  padding: var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);
  margin-bottom: 0;
  font-size: 0.875rem;
  color: var(--bs-dropdown-header-color);
  white-space: nowrap;
}
.sabpaisa-css-utils-classes-version-five .dropdown-item-text {
  display: block;
  padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
  color: var(--bs-dropdown-link-color);
}
.sabpaisa-css-utils-classes-version-five .dropdown-menu-dark {
  --bs-dropdown-color: #dee2e6;
  --bs-dropdown-bg: #343a40;
  --bs-dropdown-border-color: var(--bs-border-color-translucent);
  --bs-dropdown-box-shadow: ;
  --bs-dropdown-link-color: #dee2e6;
  --bs-dropdown-link-hover-color: #fff;
  --bs-dropdown-divider-bg: var(--bs-border-color-translucent);
  --bs-dropdown-link-hover-bg: rgba(255, 255, 255, 0.15);
  --bs-dropdown-link-active-color: #fff;
  --bs-dropdown-link-active-bg: #0d6efd;
  --bs-dropdown-link-disabled-color: #adb5bd;
  --bs-dropdown-header-color: #adb5bd;
}
.sabpaisa-css-utils-classes-version-five .btn-group,
.sabpaisa-css-utils-classes-version-five .btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}
.sabpaisa-css-utils-classes-version-five .btn-group > .btn,
.sabpaisa-css-utils-classes-version-five .btn-group-vertical > .btn {
  position: relative;
  flex: 1 1 auto;
}
.sabpaisa-css-utils-classes-version-five .btn-group > .btn-check:checked + .btn,
.sabpaisa-css-utils-classes-version-five .btn-group > .btn-check:focus + .btn,
.sabpaisa-css-utils-classes-version-five .btn-group > .btn:hover,
.sabpaisa-css-utils-classes-version-five .btn-group > .btn:focus,
.sabpaisa-css-utils-classes-version-five .btn-group > .btn:active,
.sabpaisa-css-utils-classes-version-five .btn-group > .btn.active,
.sabpaisa-css-utils-classes-version-five .btn-group-vertical > .btn-check:checked + .btn,
.sabpaisa-css-utils-classes-version-five .btn-group-vertical > .btn-check:focus + .btn,
.sabpaisa-css-utils-classes-version-five .btn-group-vertical > .btn:hover,
.sabpaisa-css-utils-classes-version-five .btn-group-vertical > .btn:focus,
.sabpaisa-css-utils-classes-version-five .btn-group-vertical > .btn:active,
.sabpaisa-css-utils-classes-version-five .btn-group-vertical > .btn.active {
  z-index: 1;
}
.sabpaisa-css-utils-classes-version-five .btn-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.sabpaisa-css-utils-classes-version-five .btn-toolbar .input-group {
  width: auto;
}
.sabpaisa-css-utils-classes-version-five .btn-group {
  border-radius: 0.375rem;
}
.sabpaisa-css-utils-classes-version-five .btn-group > :not(.btn-check:first-child) + .btn,
.sabpaisa-css-utils-classes-version-five .btn-group > .btn-group:not(:first-child) {
  margin-left: -1px;
}
.sabpaisa-css-utils-classes-version-five .btn-group > .btn:not(:last-child):not(.dropdown-toggle),
.sabpaisa-css-utils-classes-version-five .btn-group > .btn.dropdown-toggle-split:first-child,
.sabpaisa-css-utils-classes-version-five .btn-group > .btn-group:not(:last-child) > .btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.sabpaisa-css-utils-classes-version-five .btn-group > .btn:nth-child(n+3),
.sabpaisa-css-utils-classes-version-five .btn-group > :not(.btn-check) + .btn,
.sabpaisa-css-utils-classes-version-five .btn-group > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.sabpaisa-css-utils-classes-version-five .dropdown-toggle-split {
  padding-right: 0.5625rem;
  padding-left: 0.5625rem;
}
.sabpaisa-css-utils-classes-version-five .dropdown-toggle-split::after, .dropup .sabpaisa-css-utils-classes-version-five .dropdown-toggle-split::after, .dropend .sabpaisa-css-utils-classes-version-five .dropdown-toggle-split::after {
  margin-left: 0;
}
.dropstart .sabpaisa-css-utils-classes-version-five .dropdown-toggle-split::before {
  margin-right: 0;
}
.sabpaisa-css-utils-classes-version-five .btn-sm + .dropdown-toggle-split, .sabpaisa-css-utils-classes-version-five .btn-group-sm > .btn + .dropdown-toggle-split {
  padding-right: 0.375rem;
  padding-left: 0.375rem;
}
.sabpaisa-css-utils-classes-version-five .btn-lg + .dropdown-toggle-split, .sabpaisa-css-utils-classes-version-five .btn-group-lg > .btn + .dropdown-toggle-split {
  padding-right: 0.75rem;
  padding-left: 0.75rem;
}
.sabpaisa-css-utils-classes-version-five .btn-group-vertical {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.sabpaisa-css-utils-classes-version-five .btn-group-vertical > .btn,
.sabpaisa-css-utils-classes-version-five .btn-group-vertical > .btn-group {
  width: 100%;
}
.sabpaisa-css-utils-classes-version-five .btn-group-vertical > .btn:not(:first-child),
.sabpaisa-css-utils-classes-version-five .btn-group-vertical > .btn-group:not(:first-child) {
  margin-top: -1px;
}
.sabpaisa-css-utils-classes-version-five .btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),
.sabpaisa-css-utils-classes-version-five .btn-group-vertical > .btn-group:not(:last-child) > .btn {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.sabpaisa-css-utils-classes-version-five .btn-group-vertical > .btn ~ .btn,
.sabpaisa-css-utils-classes-version-five .btn-group-vertical > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.sabpaisa-css-utils-classes-version-five .nav {
  --bs-nav-link-padding-x: 1rem;
  --bs-nav-link-padding-y: 0.5rem;
  --bs-nav-link-font-weight: ;
  --bs-nav-link-color: var(--bs-link-color);
  --bs-nav-link-hover-color: var(--bs-link-hover-color);
  --bs-nav-link-disabled-color: #6c757d;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.sabpaisa-css-utils-classes-version-five .nav-link {
  display: block;
  padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
  font-size: var(--bs-nav-link-font-size);
  font-weight: var(--bs-nav-link-font-weight);
  color: var(--bs-nav-link-color);
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .nav-link {
    transition: none;
  }
}
.sabpaisa-css-utils-classes-version-five .nav-link:hover, .sabpaisa-css-utils-classes-version-five .nav-link:focus {
  color: var(--bs-nav-link-hover-color);
}
.sabpaisa-css-utils-classes-version-five .nav-link.disabled {
  color: var(--bs-nav-link-disabled-color);
  pointer-events: none;
  cursor: default;
}
.sabpaisa-css-utils-classes-version-five .nav-tabs {
  --bs-nav-tabs-border-width: 1px;
  --bs-nav-tabs-border-color: #dee2e6;
  --bs-nav-tabs-border-radius: 0.375rem;
  --bs-nav-tabs-link-hover-border-color: #e9ecef #e9ecef #dee2e6;
  --bs-nav-tabs-link-active-color: #495057;
  --bs-nav-tabs-link-active-bg: #fff;
  --bs-nav-tabs-link-active-border-color: #dee2e6 #dee2e6 #fff;
  border-bottom: var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color);
}
.sabpaisa-css-utils-classes-version-five .nav-tabs .nav-link {
  margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width));
  background: none;
  border: var(--bs-nav-tabs-border-width) solid transparent;
  border-top-left-radius: var(--bs-nav-tabs-border-radius);
  border-top-right-radius: var(--bs-nav-tabs-border-radius);
}
.sabpaisa-css-utils-classes-version-five .nav-tabs .nav-link:hover, .sabpaisa-css-utils-classes-version-five .nav-tabs .nav-link:focus {
  isolation: isolate;
  border-color: var(--bs-nav-tabs-link-hover-border-color);
}
.sabpaisa-css-utils-classes-version-five .nav-tabs .nav-link.disabled, .sabpaisa-css-utils-classes-version-five .nav-tabs .nav-link:disabled {
  color: var(--bs-nav-link-disabled-color);
  background-color: transparent;
  border-color: transparent;
}
.sabpaisa-css-utils-classes-version-five .nav-tabs .nav-link.active,
.sabpaisa-css-utils-classes-version-five .nav-tabs .nav-item.show .nav-link {
  color: var(--bs-nav-tabs-link-active-color);
  background-color: var(--bs-nav-tabs-link-active-bg);
  border-color: var(--bs-nav-tabs-link-active-border-color);
}
.sabpaisa-css-utils-classes-version-five .nav-tabs .dropdown-menu {
  margin-top: calc(-1 * var(--bs-nav-tabs-border-width));
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.sabpaisa-css-utils-classes-version-five .nav-pills {
  --bs-nav-pills-border-radius: 0.375rem;
  --bs-nav-pills-link-active-color: #fff;
  --bs-nav-pills-link-active-bg: #0d6efd;
}
.sabpaisa-css-utils-classes-version-five .nav-pills .nav-link {
  background: none;
  border: 0;
  border-radius: var(--bs-nav-pills-border-radius);
}
.sabpaisa-css-utils-classes-version-five .nav-pills .nav-link:disabled {
  color: var(--bs-nav-link-disabled-color);
  background-color: transparent;
  border-color: transparent;
}
.sabpaisa-css-utils-classes-version-five .nav-pills .nav-link.active,
.sabpaisa-css-utils-classes-version-five .nav-pills .show > .nav-link {
  color: var(--bs-nav-pills-link-active-color);
  background-color: var(--bs-nav-pills-link-active-bg);
}
.sabpaisa-css-utils-classes-version-five .nav-fill > .nav-link,
.sabpaisa-css-utils-classes-version-five .nav-fill .nav-item {
  flex: 1 1 auto;
  text-align: center;
}
.sabpaisa-css-utils-classes-version-five .nav-justified > .nav-link,
.sabpaisa-css-utils-classes-version-five .nav-justified .nav-item {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}
.sabpaisa-css-utils-classes-version-five .nav-fill .nav-item .nav-link,
.sabpaisa-css-utils-classes-version-five .nav-justified .nav-item .nav-link {
  width: 100%;
}
.sabpaisa-css-utils-classes-version-five .tab-content > .tab-pane {
  display: none;
}
.sabpaisa-css-utils-classes-version-five .tab-content > .active {
  display: block;
}
.sabpaisa-css-utils-classes-version-five .navbar {
  --bs-navbar-padding-x: 0;
  --bs-navbar-padding-y: 0.5rem;
  --bs-navbar-color: rgba(0, 0, 0, 0.55);
  --bs-navbar-hover-color: rgba(0, 0, 0, 0.7);
  --bs-navbar-disabled-color: rgba(0, 0, 0, 0.3);
  --bs-navbar-active-color: rgba(0, 0, 0, 0.9);
  --bs-navbar-brand-padding-y: 0.3125rem;
  --bs-navbar-brand-margin-end: 1rem;
  --bs-navbar-brand-font-size: 1.25rem;
  --bs-navbar-brand-color: rgba(0, 0, 0, 0.9);
  --bs-navbar-brand-hover-color: rgba(0, 0, 0, 0.9);
  --bs-navbar-nav-link-padding-x: 0.5rem;
  --bs-navbar-toggler-padding-y: 0.25rem;
  --bs-navbar-toggler-padding-x: 0.75rem;
  --bs-navbar-toggler-font-size: 1.25rem;
  --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  --bs-navbar-toggler-border-color: rgba(0, 0, 0, 0.1);
  --bs-navbar-toggler-border-radius: 0.375rem;
  --bs-navbar-toggler-focus-width: 0.25rem;
  --bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x);
}
.sabpaisa-css-utils-classes-version-five .navbar > .container,
.sabpaisa-css-utils-classes-version-five .navbar > .container-fluid,
.sabpaisa-css-utils-classes-version-five .navbar > .container-sm,
.sabpaisa-css-utils-classes-version-five .navbar > .container-md,
.sabpaisa-css-utils-classes-version-five .navbar > .container-lg,
.sabpaisa-css-utils-classes-version-five .navbar > .container-xl,
.sabpaisa-css-utils-classes-version-five .navbar > .container-xxl {
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
}
.sabpaisa-css-utils-classes-version-five .navbar-brand {
  padding-top: var(--bs-navbar-brand-padding-y);
  padding-bottom: var(--bs-navbar-brand-padding-y);
  margin-right: var(--bs-navbar-brand-margin-end);
  font-size: var(--bs-navbar-brand-font-size);
  color: var(--bs-navbar-brand-color);
  text-decoration: none;
  white-space: nowrap;
}
.sabpaisa-css-utils-classes-version-five .navbar-brand:hover, .sabpaisa-css-utils-classes-version-five .navbar-brand:focus {
  color: var(--bs-navbar-brand-hover-color);
}
.sabpaisa-css-utils-classes-version-five .navbar-nav {
  --bs-nav-link-padding-x: 0;
  --bs-nav-link-padding-y: 0.5rem;
  --bs-nav-link-font-weight: ;
  --bs-nav-link-color: var(--bs-navbar-color);
  --bs-nav-link-hover-color: var(--bs-navbar-hover-color);
  --bs-nav-link-disabled-color: var(--bs-navbar-disabled-color);
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.sabpaisa-css-utils-classes-version-five .navbar-nav .show > .nav-link,
.sabpaisa-css-utils-classes-version-five .navbar-nav .nav-link.active {
  color: var(--bs-navbar-active-color);
}
.sabpaisa-css-utils-classes-version-five .navbar-nav .dropdown-menu {
  position: static;
}
.sabpaisa-css-utils-classes-version-five .navbar-text {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: var(--bs-navbar-color);
}
.sabpaisa-css-utils-classes-version-five .navbar-text a,
.sabpaisa-css-utils-classes-version-five .navbar-text a:hover,
.sabpaisa-css-utils-classes-version-five .navbar-text a:focus {
  color: var(--bs-navbar-active-color);
}
.sabpaisa-css-utils-classes-version-five .navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}
.sabpaisa-css-utils-classes-version-five .navbar-toggler {
  padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);
  font-size: var(--bs-navbar-toggler-font-size);
  line-height: 1;
  color: var(--bs-navbar-color);
  background-color: transparent;
  border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);
  border-radius: var(--bs-navbar-toggler-border-radius);
  transition: var(--bs-navbar-toggler-transition);
}
@media (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .navbar-toggler {
    transition: none;
  }
}
.sabpaisa-css-utils-classes-version-five .navbar-toggler:hover {
  text-decoration: none;
}
.sabpaisa-css-utils-classes-version-five .navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  box-shadow: 0 0 0 var(--bs-navbar-toggler-focus-width);
}
.sabpaisa-css-utils-classes-version-five .navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-image: var(--bs-navbar-toggler-icon-bg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}
.sabpaisa-css-utils-classes-version-five .navbar-nav-scroll {
  max-height: var(--bs-scroll-height, 75vh);
  overflow-y: auto;
}
@media (min-width: 576px) {
  .sabpaisa-css-utils-classes-version-five .navbar-expand-sm {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-sm .navbar-nav {
    flex-direction: row;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-sm .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-sm .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-sm .navbar-nav-scroll {
    overflow: visible;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-sm .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-sm .navbar-toggler {
    display: none;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-sm .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-sm .offcanvas .offcanvas-header {
    display: none;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-sm .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 768px) {
  .sabpaisa-css-utils-classes-version-five .navbar-expand-md {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-md .navbar-nav {
    flex-direction: row;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-md .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-md .navbar-nav-scroll {
    overflow: visible;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-md .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-md .navbar-toggler {
    display: none;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-md .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-md .offcanvas .offcanvas-header {
    display: none;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-md .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 992px) {
  .sabpaisa-css-utils-classes-version-five .navbar-expand-lg {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-lg .navbar-nav {
    flex-direction: row;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-lg .navbar-nav-scroll {
    overflow: visible;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-lg .navbar-toggler {
    display: none;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-lg .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-lg .offcanvas .offcanvas-header {
    display: none;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-lg .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 1200px) {
  .sabpaisa-css-utils-classes-version-five .navbar-expand-xl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-xl .navbar-nav {
    flex-direction: row;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-xl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-xl .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-xl .navbar-nav-scroll {
    overflow: visible;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-xl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-xl .navbar-toggler {
    display: none;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-xl .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-xl .offcanvas .offcanvas-header {
    display: none;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-xl .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 1400px) {
  .sabpaisa-css-utils-classes-version-five .navbar-expand-xxl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-xxl .navbar-nav {
    flex-direction: row;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-xxl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-xxl .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-xxl .navbar-nav-scroll {
    overflow: visible;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-xxl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-xxl .navbar-toggler {
    display: none;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-xxl .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-xxl .offcanvas .offcanvas-header {
    display: none;
  }
  .sabpaisa-css-utils-classes-version-five .navbar-expand-xxl .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
.sabpaisa-css-utils-classes-version-five .navbar-expand {
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.sabpaisa-css-utils-classes-version-five .navbar-expand .navbar-nav {
  flex-direction: row;
}
.sabpaisa-css-utils-classes-version-five .navbar-expand .navbar-nav .dropdown-menu {
  position: absolute;
}
.sabpaisa-css-utils-classes-version-five .navbar-expand .navbar-nav .nav-link {
  padding-right: var(--bs-navbar-nav-link-padding-x);
  padding-left: var(--bs-navbar-nav-link-padding-x);
}
.sabpaisa-css-utils-classes-version-five .navbar-expand .navbar-nav-scroll {
  overflow: visible;
}
.sabpaisa-css-utils-classes-version-five .navbar-expand .navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}
.sabpaisa-css-utils-classes-version-five .navbar-expand .navbar-toggler {
  display: none;
}
.sabpaisa-css-utils-classes-version-five .navbar-expand .offcanvas {
  position: static;
  z-index: auto;
  flex-grow: 1;
  width: auto !important;
  height: auto !important;
  visibility: visible !important;
  background-color: transparent !important;
  border: 0 !important;
  transform: none !important;
  transition: none;
}
.sabpaisa-css-utils-classes-version-five .navbar-expand .offcanvas .offcanvas-header {
  display: none;
}
.sabpaisa-css-utils-classes-version-five .navbar-expand .offcanvas .offcanvas-body {
  display: flex;
  flex-grow: 0;
  padding: 0;
  overflow-y: visible;
}
.sabpaisa-css-utils-classes-version-five .navbar-dark {
  --bs-navbar-color: rgba(255, 255, 255, 0.55);
  --bs-navbar-hover-color: rgba(255, 255, 255, 0.75);
  --bs-navbar-disabled-color: rgba(255, 255, 255, 0.25);
  --bs-navbar-active-color: #fff;
  --bs-navbar-brand-color: #fff;
  --bs-navbar-brand-hover-color: #fff;
  --bs-navbar-toggler-border-color: rgba(255, 255, 255, 0.1);
  --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.sabpaisa-css-utils-classes-version-five .card {
  --bs-card-spacer-y: 1rem;
  --bs-card-spacer-x: 1rem;
  --bs-card-title-spacer-y: 0.5rem;
  --bs-card-border-width: 1px;
  --bs-card-border-color: var(--bs-border-color-translucent);
  --bs-card-border-radius: 0.375rem;
  --bs-card-box-shadow: ;
  --bs-card-inner-border-radius: calc(0.375rem - 1px);
  --bs-card-cap-padding-y: 0.5rem;
  --bs-card-cap-padding-x: 1rem;
  --bs-card-cap-bg: rgba(0, 0, 0, 0.03);
  --bs-card-cap-color: ;
  --bs-card-height: ;
  --bs-card-color: ;
  --bs-card-bg: #fff;
  --bs-card-img-overlay-padding: 1rem;
  --bs-card-group-margin: 0.75rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: var(--bs-card-height);
  word-wrap: break-word;
  background-color: var(--bs-card-bg);
  background-clip: border-box;
  border: var(--bs-card-border-width) solid var(--bs-card-border-color);
  border-radius: var(--bs-card-border-radius);
}
.sabpaisa-css-utils-classes-version-five .card > hr {
  margin-right: 0;
  margin-left: 0;
}
.sabpaisa-css-utils-classes-version-five .card > .list-group {
  border-top: inherit;
  border-bottom: inherit;
}
.sabpaisa-css-utils-classes-version-five .card > .list-group:first-child {
  border-top-width: 0;
  border-top-left-radius: var(--bs-card-inner-border-radius);
  border-top-right-radius: var(--bs-card-inner-border-radius);
}
.sabpaisa-css-utils-classes-version-five .card > .list-group:last-child {
  border-bottom-width: 0;
  border-bottom-right-radius: var(--bs-card-inner-border-radius);
  border-bottom-left-radius: var(--bs-card-inner-border-radius);
}
.sabpaisa-css-utils-classes-version-five .card > .card-header + .list-group,
.sabpaisa-css-utils-classes-version-five .card > .list-group + .card-footer {
  border-top: 0;
}
.sabpaisa-css-utils-classes-version-five .card-body {
  flex: 1 1 auto;
  padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
  color: var(--bs-card-color);
}
.sabpaisa-css-utils-classes-version-five .card-title {
  margin-bottom: var(--bs-card-title-spacer-y);
}
.sabpaisa-css-utils-classes-version-five .card-subtitle {
  margin-top: calc(-0.5 * var(--bs-card-title-spacer-y));
  margin-bottom: 0;
}
.sabpaisa-css-utils-classes-version-five .card-text:last-child {
  margin-bottom: 0;
}
.sabpaisa-css-utils-classes-version-five .card-link + .card-link {
  margin-left: var(--bs-card-spacer-x);
}
.sabpaisa-css-utils-classes-version-five .card-header {
  padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);
  margin-bottom: 0;
  color: var(--bs-card-cap-color);
  background-color: var(--bs-card-cap-bg);
  border-bottom: var(--bs-card-border-width) solid var(--bs-card-border-color);
}
.sabpaisa-css-utils-classes-version-five .card-header:first-child {
  border-radius: var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0;
}
.sabpaisa-css-utils-classes-version-five .card-footer {
  padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);
  color: var(--bs-card-cap-color);
  background-color: var(--bs-card-cap-bg);
  border-top: var(--bs-card-border-width) solid var(--bs-card-border-color);
}
.sabpaisa-css-utils-classes-version-five .card-footer:last-child {
  border-radius: 0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius);
}
.sabpaisa-css-utils-classes-version-five .card-header-tabs {
  margin-right: calc(-0.5 * var(--bs-card-cap-padding-x));
  margin-bottom: calc(-1 * var(--bs-card-cap-padding-y));
  margin-left: calc(-0.5 * var(--bs-card-cap-padding-x));
  border-bottom: 0;
}
.sabpaisa-css-utils-classes-version-five .card-header-tabs .nav-link.active {
  background-color: var(--bs-card-bg);
  border-bottom-color: var(--bs-card-bg);
}
.sabpaisa-css-utils-classes-version-five .card-header-pills {
  margin-right: calc(-0.5 * var(--bs-card-cap-padding-x));
  margin-left: calc(-0.5 * var(--bs-card-cap-padding-x));
}
.sabpaisa-css-utils-classes-version-five .card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: var(--bs-card-img-overlay-padding);
  border-radius: var(--bs-card-inner-border-radius);
}
.sabpaisa-css-utils-classes-version-five .card-img,
.sabpaisa-css-utils-classes-version-five .card-img-top,
.sabpaisa-css-utils-classes-version-five .card-img-bottom {
  width: 100%;
}
.sabpaisa-css-utils-classes-version-five .card-img,
.sabpaisa-css-utils-classes-version-five .card-img-top {
  border-top-left-radius: var(--bs-card-inner-border-radius);
  border-top-right-radius: var(--bs-card-inner-border-radius);
}
.sabpaisa-css-utils-classes-version-five .card-img,
.sabpaisa-css-utils-classes-version-five .card-img-bottom {
  border-bottom-right-radius: var(--bs-card-inner-border-radius);
  border-bottom-left-radius: var(--bs-card-inner-border-radius);
}
.sabpaisa-css-utils-classes-version-five .card-group > .card {
  margin-bottom: var(--bs-card-group-margin);
}
@media (min-width: 576px) {
  .sabpaisa-css-utils-classes-version-five .card-group {
    display: flex;
    flex-flow: row wrap;
  }
  .sabpaisa-css-utils-classes-version-five .card-group > .card {
    flex: 1 0 0%;
    margin-bottom: 0;
  }
  .sabpaisa-css-utils-classes-version-five .card-group > .card + .card {
    margin-left: 0;
    border-left: 0;
  }
  .sabpaisa-css-utils-classes-version-five .card-group > .card:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .sabpaisa-css-utils-classes-version-five .card-group > .card:not(:last-child) .card-img-top,
  .sabpaisa-css-utils-classes-version-five .card-group > .card:not(:last-child) .card-header {
    border-top-right-radius: 0;
  }
  .sabpaisa-css-utils-classes-version-five .card-group > .card:not(:last-child) .card-img-bottom,
  .sabpaisa-css-utils-classes-version-five .card-group > .card:not(:last-child) .card-footer {
    border-bottom-right-radius: 0;
  }
  .sabpaisa-css-utils-classes-version-five .card-group > .card:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .sabpaisa-css-utils-classes-version-five .card-group > .card:not(:first-child) .card-img-top,
  .sabpaisa-css-utils-classes-version-five .card-group > .card:not(:first-child) .card-header {
    border-top-left-radius: 0;
  }
  .sabpaisa-css-utils-classes-version-five .card-group > .card:not(:first-child) .card-img-bottom,
  .sabpaisa-css-utils-classes-version-five .card-group > .card:not(:first-child) .card-footer {
    border-bottom-left-radius: 0;
  }
}
.sabpaisa-css-utils-classes-version-five .accordion {
  --bs-accordion-color: #212529;
  --bs-accordion-bg: #fff;
  --bs-accordion-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;
  --bs-accordion-border-color: var(--bs-border-color);
  --bs-accordion-border-width: 1px;
  --bs-accordion-border-radius: 0.375rem;
  --bs-accordion-inner-border-radius: calc(0.375rem - 1px);
  --bs-accordion-btn-padding-x: 1.25rem;
  --bs-accordion-btn-padding-y: 1rem;
  --bs-accordion-btn-color: #212529;
  --bs-accordion-btn-bg: var(--bs-accordion-bg);
  --bs-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  --bs-accordion-btn-icon-width: 1.25rem;
  --bs-accordion-btn-icon-transform: rotate(-180deg);
  --bs-accordion-btn-icon-transition: transform 0.2s ease-in-out;
  --bs-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  --bs-accordion-btn-focus-border-color: #86b7fe;
  --bs-accordion-btn-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  --bs-accordion-body-padding-x: 1.25rem;
  --bs-accordion-body-padding-y: 1rem;
  --bs-accordion-active-color: #0c63e4;
  --bs-accordion-active-bg: #e7f1ff;
}
.sabpaisa-css-utils-classes-version-five .accordion-button {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);
  font-size: 1rem;
  color: var(--bs-accordion-btn-color);
  text-align: left;
  background-color: var(--bs-accordion-btn-bg);
  border: 0;
  border-radius: 0;
  overflow-anchor: none;
  transition: var(--bs-accordion-transition);
}
@media (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .accordion-button {
    transition: none;
  }
}
.sabpaisa-css-utils-classes-version-five .accordion-button:not(.collapsed) {
  color: var(--bs-accordion-active-color);
  background-color: var(--bs-accordion-active-bg);
  box-shadow: inset 0 calc(-1 * var(--bs-accordion-border-width)) 0 var(--bs-accordion-border-color);
}
.sabpaisa-css-utils-classes-version-five .accordion-button:not(.collapsed)::after {
  background-image: var(--bs-accordion-btn-active-icon);
  transform: var(--bs-accordion-btn-icon-transform);
}
.sabpaisa-css-utils-classes-version-five .accordion-button::after {
  flex-shrink: 0;
  width: var(--bs-accordion-btn-icon-width);
  height: var(--bs-accordion-btn-icon-width);
  margin-left: auto;
  content: "";
  background-image: var(--bs-accordion-btn-icon);
  background-repeat: no-repeat;
  background-size: var(--bs-accordion-btn-icon-width);
  transition: var(--bs-accordion-btn-icon-transition);
}
@media (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .accordion-button::after {
    transition: none;
  }
}
.sabpaisa-css-utils-classes-version-five .accordion-button:hover {
  z-index: 2;
}
.sabpaisa-css-utils-classes-version-five .accordion-button:focus {
  z-index: 3;
  border-color: var(--bs-accordion-btn-focus-border-color);
  outline: 0;
  box-shadow: var(--bs-accordion-btn-focus-box-shadow);
}
.sabpaisa-css-utils-classes-version-five .accordion-header {
  margin-bottom: 0;
}
.sabpaisa-css-utils-classes-version-five .accordion-item {
  color: var(--bs-accordion-color);
  background-color: var(--bs-accordion-bg);
  border: var(--bs-accordion-border-width) solid var(--bs-accordion-border-color);
}
.sabpaisa-css-utils-classes-version-five .accordion-item:first-of-type {
  border-top-left-radius: var(--bs-accordion-border-radius);
  border-top-right-radius: var(--bs-accordion-border-radius);
}
.sabpaisa-css-utils-classes-version-five .accordion-item:first-of-type .accordion-button {
  border-top-left-radius: var(--bs-accordion-inner-border-radius);
  border-top-right-radius: var(--bs-accordion-inner-border-radius);
}
.sabpaisa-css-utils-classes-version-five .accordion-item:not(:first-of-type) {
  border-top: 0;
}
.sabpaisa-css-utils-classes-version-five .accordion-item:last-of-type {
  border-bottom-right-radius: var(--bs-accordion-border-radius);
  border-bottom-left-radius: var(--bs-accordion-border-radius);
}
.sabpaisa-css-utils-classes-version-five .accordion-item:last-of-type .accordion-button.collapsed {
  border-bottom-right-radius: var(--bs-accordion-inner-border-radius);
  border-bottom-left-radius: var(--bs-accordion-inner-border-radius);
}
.sabpaisa-css-utils-classes-version-five .accordion-item:last-of-type .accordion-collapse {
  border-bottom-right-radius: var(--bs-accordion-border-radius);
  border-bottom-left-radius: var(--bs-accordion-border-radius);
}
.sabpaisa-css-utils-classes-version-five .accordion-body {
  padding: var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x);
}
.sabpaisa-css-utils-classes-version-five .accordion-flush .accordion-collapse {
  border-width: 0;
}
.sabpaisa-css-utils-classes-version-five .accordion-flush .accordion-item {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}
.sabpaisa-css-utils-classes-version-five .accordion-flush .accordion-item:first-child {
  border-top: 0;
}
.sabpaisa-css-utils-classes-version-five .accordion-flush .accordion-item:last-child {
  border-bottom: 0;
}
.sabpaisa-css-utils-classes-version-five .accordion-flush .accordion-item .accordion-button, .sabpaisa-css-utils-classes-version-five .accordion-flush .accordion-item .accordion-button.collapsed {
  border-radius: 0;
}
.sabpaisa-css-utils-classes-version-five .breadcrumb {
  --bs-breadcrumb-padding-x: 0;
  --bs-breadcrumb-padding-y: 0;
  --bs-breadcrumb-margin-bottom: 1rem;
  --bs-breadcrumb-bg: ;
  --bs-breadcrumb-border-radius: ;
  --bs-breadcrumb-divider-color: #6c757d;
  --bs-breadcrumb-item-padding-x: 0.5rem;
  --bs-breadcrumb-item-active-color: #6c757d;
  display: flex;
  flex-wrap: wrap;
  padding: var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x);
  margin-bottom: var(--bs-breadcrumb-margin-bottom);
  font-size: var(--bs-breadcrumb-font-size);
  list-style: none;
  background-color: var(--bs-breadcrumb-bg);
  border-radius: var(--bs-breadcrumb-border-radius);
}
.sabpaisa-css-utils-classes-version-five .breadcrumb-item + .breadcrumb-item {
  padding-left: var(--bs-breadcrumb-item-padding-x);
}
.sabpaisa-css-utils-classes-version-five .breadcrumb-item + .breadcrumb-item::before {
  float: left;
  padding-right: var(--bs-breadcrumb-item-padding-x);
  color: var(--bs-breadcrumb-divider-color);
  content: var(--bs-breadcrumb-divider, "/") /* rtl: var(--bs-breadcrumb-divider, "/") */;
}
.sabpaisa-css-utils-classes-version-five .breadcrumb-item.active {
  color: var(--bs-breadcrumb-item-active-color);
}
.sabpaisa-css-utils-classes-version-five .pagination {
  --bs-pagination-padding-x: 0.75rem;
  --bs-pagination-padding-y: 0.375rem;
  --bs-pagination-font-size: 1rem;
  --bs-pagination-color: var(--bs-link-color);
  --bs-pagination-bg: #fff;
  --bs-pagination-border-width: 1px;
  --bs-pagination-border-color: #dee2e6;
  --bs-pagination-border-radius: 0.375rem;
  --bs-pagination-hover-color: var(--bs-link-hover-color);
  --bs-pagination-hover-bg: #e9ecef;
  --bs-pagination-hover-border-color: #dee2e6;
  --bs-pagination-focus-color: var(--bs-link-hover-color);
  --bs-pagination-focus-bg: #e9ecef;
  --bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  --bs-pagination-active-color: #fff;
  --bs-pagination-active-bg: #0d6efd;
  --bs-pagination-active-border-color: #0d6efd;
  --bs-pagination-disabled-color: #6c757d;
  --bs-pagination-disabled-bg: #fff;
  --bs-pagination-disabled-border-color: #dee2e6;
  display: flex;
  padding-left: 0;
  list-style: none;
}
.sabpaisa-css-utils-classes-version-five .page-link {
  position: relative;
  display: block;
  padding: var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);
  font-size: var(--bs-pagination-font-size);
  color: var(--bs-pagination-color);
  text-decoration: none;
  background-color: var(--bs-pagination-bg);
  border: var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .page-link {
    transition: none;
  }
}
.sabpaisa-css-utils-classes-version-five .page-link:hover {
  z-index: 2;
  color: var(--bs-pagination-hover-color);
  background-color: var(--bs-pagination-hover-bg);
  border-color: var(--bs-pagination-hover-border-color);
}
.sabpaisa-css-utils-classes-version-five .page-link:focus {
  z-index: 3;
  color: var(--bs-pagination-focus-color);
  background-color: var(--bs-pagination-focus-bg);
  outline: 0;
  box-shadow: var(--bs-pagination-focus-box-shadow);
}
.sabpaisa-css-utils-classes-version-five .page-link.active, .active > .sabpaisa-css-utils-classes-version-five .page-link {
  z-index: 3;
  color: var(--bs-pagination-active-color);
  background-color: var(--bs-pagination-active-bg);
  border-color: var(--bs-pagination-active-border-color);
}
.sabpaisa-css-utils-classes-version-five .page-link.disabled, .disabled > .sabpaisa-css-utils-classes-version-five .page-link {
  color: var(--bs-pagination-disabled-color);
  pointer-events: none;
  background-color: var(--bs-pagination-disabled-bg);
  border-color: var(--bs-pagination-disabled-border-color);
}
.sabpaisa-css-utils-classes-version-five .page-item:not(:first-child) .page-link {
  margin-left: -1px;
}
.sabpaisa-css-utils-classes-version-five .page-item:first-child .page-link {
  border-top-left-radius: var(--bs-pagination-border-radius);
  border-bottom-left-radius: var(--bs-pagination-border-radius);
}
.sabpaisa-css-utils-classes-version-five .page-item:last-child .page-link {
  border-top-right-radius: var(--bs-pagination-border-radius);
  border-bottom-right-radius: var(--bs-pagination-border-radius);
}
.sabpaisa-css-utils-classes-version-five .pagination-lg {
  --bs-pagination-padding-x: 1.5rem;
  --bs-pagination-padding-y: 0.75rem;
  --bs-pagination-font-size: 1.25rem;
  --bs-pagination-border-radius: 0.5rem;
}
.sabpaisa-css-utils-classes-version-five .pagination-sm {
  --bs-pagination-padding-x: 0.5rem;
  --bs-pagination-padding-y: 0.25rem;
  --bs-pagination-font-size: 0.875rem;
  --bs-pagination-border-radius: 0.25rem;
}
.sabpaisa-css-utils-classes-version-five .badge {
  --bs-badge-padding-x: 0.65em;
  --bs-badge-padding-y: 0.35em;
  --bs-badge-font-size: 0.75em;
  --bs-badge-font-weight: 700;
  --bs-badge-color: #fff;
  --bs-badge-border-radius: 0.375rem;
  display: inline-block;
  padding: var(--bs-badge-padding-y) var(--bs-badge-padding-x);
  font-size: var(--bs-badge-font-size);
  font-weight: var(--bs-badge-font-weight);
  line-height: 1;
  color: var(--bs-badge-color);
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: var(--bs-badge-border-radius);
}
.sabpaisa-css-utils-classes-version-five .badge:empty {
  display: none;
}
.sabpaisa-css-utils-classes-version-five .btn .badge {
  position: relative;
  top: -1px;
}
.sabpaisa-css-utils-classes-version-five .alert {
  --bs-alert-bg: transparent;
  --bs-alert-padding-x: 1rem;
  --bs-alert-padding-y: 1rem;
  --bs-alert-margin-bottom: 1rem;
  --bs-alert-color: inherit;
  --bs-alert-border-color: transparent;
  --bs-alert-border: 1px solid var(--bs-alert-border-color);
  --bs-alert-border-radius: 0.375rem;
  position: relative;
  padding: var(--bs-alert-padding-y) var(--bs-alert-padding-x);
  margin-bottom: var(--bs-alert-margin-bottom);
  color: var(--bs-alert-color);
  background-color: var(--bs-alert-bg);
  border: var(--bs-alert-border);
  border-radius: var(--bs-alert-border-radius);
}
.sabpaisa-css-utils-classes-version-five .alert-heading {
  color: inherit;
}
.sabpaisa-css-utils-classes-version-five .alert-link {
  font-weight: 700;
}
.sabpaisa-css-utils-classes-version-five .alert-dismissible {
  padding-right: 3rem;
}
.sabpaisa-css-utils-classes-version-five .alert-dismissible .btn-close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 1.25rem 1rem;
}
.sabpaisa-css-utils-classes-version-five .alert-primary {
  --bs-alert-color: #084298;
  --bs-alert-bg: #cfe2ff;
  --bs-alert-border-color: #b6d4fe;
}
.sabpaisa-css-utils-classes-version-five .alert-primary .alert-link {
  color: #06357a;
}
.sabpaisa-css-utils-classes-version-five .alert-secondary {
  --bs-alert-color: #41464b;
  --bs-alert-bg: #e2e3e5;
  --bs-alert-border-color: #d3d6d8;
}
.sabpaisa-css-utils-classes-version-five .alert-secondary .alert-link {
  color: #34383c;
}
.sabpaisa-css-utils-classes-version-five .alert-success {
  --bs-alert-color: #0f5132;
  --bs-alert-bg: #d1e7dd;
  --bs-alert-border-color: #badbcc;
}
.sabpaisa-css-utils-classes-version-five .alert-success .alert-link {
  color: #0c4128;
}
.sabpaisa-css-utils-classes-version-five .alert-info {
  --bs-alert-color: #055160;
  --bs-alert-bg: #cff4fc;
  --bs-alert-border-color: #b6effb;
}
.sabpaisa-css-utils-classes-version-five .alert-info .alert-link {
  color: #04414d;
}
.sabpaisa-css-utils-classes-version-five .alert-warning {
  --bs-alert-color: #664d03;
  --bs-alert-bg: #fff3cd;
  --bs-alert-border-color: #ffecb5;
}
.sabpaisa-css-utils-classes-version-five .alert-warning .alert-link {
  color: #523e02;
}
.sabpaisa-css-utils-classes-version-five .alert-danger {
  --bs-alert-color: #842029;
  --bs-alert-bg: #f8d7da;
  --bs-alert-border-color: #f5c2c7;
}
.sabpaisa-css-utils-classes-version-five .alert-danger .alert-link {
  color: #6a1a21;
}
.sabpaisa-css-utils-classes-version-five .alert-light {
  --bs-alert-color: #636464;
  --bs-alert-bg: #fefefe;
  --bs-alert-border-color: #fdfdfe;
}
.sabpaisa-css-utils-classes-version-five .alert-light .alert-link {
  color: #4f5050;
}
.sabpaisa-css-utils-classes-version-five .alert-dark {
  --bs-alert-color: #141619;
  --bs-alert-bg: #d3d3d4;
  --bs-alert-border-color: #bcbebf;
}
.sabpaisa-css-utils-classes-version-five .alert-dark .alert-link {
  color: #101214;
}
@keyframes progress-bar-stripes {
  0% {
    background-position-x: 1rem;
  }
}
.sabpaisa-css-utils-classes-version-five .progress {
  --bs-progress-height: 1rem;
  --bs-progress-font-size: 0.75rem;
  --bs-progress-bg: #e9ecef;
  --bs-progress-border-radius: 0.375rem;
  --bs-progress-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);
  --bs-progress-bar-color: #fff;
  --bs-progress-bar-bg: #0d6efd;
  --bs-progress-bar-transition: width 0.6s ease;
  display: flex;
  height: var(--bs-progress-height);
  overflow: hidden;
  font-size: var(--bs-progress-font-size);
  background-color: var(--bs-progress-bg);
  border-radius: var(--bs-progress-border-radius);
}
.sabpaisa-css-utils-classes-version-five .progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: var(--bs-progress-bar-color);
  text-align: center;
  white-space: nowrap;
  background-color: var(--bs-progress-bar-bg);
  transition: var(--bs-progress-bar-transition);
}
@media (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .progress-bar {
    transition: none;
  }
}
.sabpaisa-css-utils-classes-version-five .progress-bar-striped {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: var(--bs-progress-height) var(--bs-progress-height);
}
.sabpaisa-css-utils-classes-version-five .progress-bar-animated {
  animation: 1s linear infinite progress-bar-stripes;
}
@media (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .progress-bar-animated {
    animation: none;
  }
}
.sabpaisa-css-utils-classes-version-five .list-group {
  --bs-list-group-color: #212529;
  --bs-list-group-bg: #fff;
  --bs-list-group-border-color: rgba(0, 0, 0, 0.125);
  --bs-list-group-border-width: 1px;
  --bs-list-group-border-radius: 0.375rem;
  --bs-list-group-item-padding-x: 1rem;
  --bs-list-group-item-padding-y: 0.5rem;
  --bs-list-group-action-color: #495057;
  --bs-list-group-action-hover-color: #495057;
  --bs-list-group-action-hover-bg: #f8f9fa;
  --bs-list-group-action-active-color: #212529;
  --bs-list-group-action-active-bg: #e9ecef;
  --bs-list-group-disabled-color: #6c757d;
  --bs-list-group-disabled-bg: #fff;
  --bs-list-group-active-color: #fff;
  --bs-list-group-active-bg: #0d6efd;
  --bs-list-group-active-border-color: #0d6efd;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: var(--bs-list-group-border-radius);
}
.sabpaisa-css-utils-classes-version-five .list-group-numbered {
  list-style-type: none;
  counter-reset: section;
}
.sabpaisa-css-utils-classes-version-five .list-group-numbered > .list-group-item::before {
  content: counters(section, ".") ". ";
  counter-increment: section;
}
.sabpaisa-css-utils-classes-version-five .list-group-item-action {
  width: 100%;
  color: var(--bs-list-group-action-color);
  text-align: inherit;
}
.sabpaisa-css-utils-classes-version-five .list-group-item-action:hover, .sabpaisa-css-utils-classes-version-five .list-group-item-action:focus {
  z-index: 1;
  color: var(--bs-list-group-action-hover-color);
  text-decoration: none;
  background-color: var(--bs-list-group-action-hover-bg);
}
.sabpaisa-css-utils-classes-version-five .list-group-item-action:active {
  color: var(--bs-list-group-action-active-color);
  background-color: var(--bs-list-group-action-active-bg);
}
.sabpaisa-css-utils-classes-version-five .list-group-item {
  position: relative;
  display: block;
  padding: var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);
  color: var(--bs-list-group-color);
  text-decoration: none;
  background-color: var(--bs-list-group-bg);
  border: var(--bs-list-group-border-width) solid var(--bs-list-group-border-color);
}
.sabpaisa-css-utils-classes-version-five .list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.sabpaisa-css-utils-classes-version-five .list-group-item:last-child {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.sabpaisa-css-utils-classes-version-five .list-group-item.disabled, .sabpaisa-css-utils-classes-version-five .list-group-item:disabled {
  color: var(--bs-list-group-disabled-color);
  pointer-events: none;
  background-color: var(--bs-list-group-disabled-bg);
}
.sabpaisa-css-utils-classes-version-five .list-group-item.active {
  z-index: 2;
  color: var(--bs-list-group-active-color);
  background-color: var(--bs-list-group-active-bg);
  border-color: var(--bs-list-group-active-border-color);
}
.sabpaisa-css-utils-classes-version-five .list-group-item + .list-group-item {
  border-top-width: 0;
}
.sabpaisa-css-utils-classes-version-five .list-group-item + .list-group-item.active {
  margin-top: calc(-1 * var(--bs-list-group-border-width));
  border-top-width: var(--bs-list-group-border-width);
}
.sabpaisa-css-utils-classes-version-five .list-group-horizontal {
  flex-direction: row;
}
.sabpaisa-css-utils-classes-version-five .list-group-horizontal > .list-group-item:first-child:not(:last-child) {
  border-bottom-left-radius: var(--bs-list-group-border-radius);
  border-top-right-radius: 0;
}
.sabpaisa-css-utils-classes-version-five .list-group-horizontal > .list-group-item:last-child:not(:first-child) {
  border-top-right-radius: var(--bs-list-group-border-radius);
  border-bottom-left-radius: 0;
}
.sabpaisa-css-utils-classes-version-five .list-group-horizontal > .list-group-item.active {
  margin-top: 0;
}
.sabpaisa-css-utils-classes-version-five .list-group-horizontal > .list-group-item + .list-group-item {
  border-top-width: var(--bs-list-group-border-width);
  border-left-width: 0;
}
.sabpaisa-css-utils-classes-version-five .list-group-horizontal > .list-group-item + .list-group-item.active {
  margin-left: calc(-1 * var(--bs-list-group-border-width));
  border-left-width: var(--bs-list-group-border-width);
}
@media (min-width: 576px) {
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-sm {
    flex-direction: row;
  }
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-sm > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-sm > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-sm > .list-group-item.active {
    margin-top: 0;
  }
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-sm > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-sm > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
@media (min-width: 768px) {
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-md {
    flex-direction: row;
  }
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-md > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-md > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-md > .list-group-item.active {
    margin-top: 0;
  }
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-md > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-md > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
@media (min-width: 992px) {
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-lg {
    flex-direction: row;
  }
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-lg > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-lg > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-lg > .list-group-item.active {
    margin-top: 0;
  }
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-lg > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-lg > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
@media (min-width: 1200px) {
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-xl {
    flex-direction: row;
  }
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-xl > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-xl > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-xl > .list-group-item.active {
    margin-top: 0;
  }
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-xl > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-xl > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
@media (min-width: 1400px) {
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-xxl {
    flex-direction: row;
  }
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-xxl > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-xxl > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-xxl > .list-group-item.active {
    margin-top: 0;
  }
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-xxl > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .sabpaisa-css-utils-classes-version-five .list-group-horizontal-xxl > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
.sabpaisa-css-utils-classes-version-five .list-group-flush {
  border-radius: 0;
}
.sabpaisa-css-utils-classes-version-five .list-group-flush > .list-group-item {
  border-width: 0 0 var(--bs-list-group-border-width);
}
.sabpaisa-css-utils-classes-version-five .list-group-flush > .list-group-item:last-child {
  border-bottom-width: 0;
}
.sabpaisa-css-utils-classes-version-five .list-group-item-primary {
  color: #084298;
  background-color: #cfe2ff;
}
.sabpaisa-css-utils-classes-version-five .list-group-item-primary.list-group-item-action:hover, .sabpaisa-css-utils-classes-version-five .list-group-item-primary.list-group-item-action:focus {
  color: #084298;
  background-color: #bacbe6;
}
.sabpaisa-css-utils-classes-version-five .list-group-item-primary.list-group-item-action.active {
  color: #fff;
  background-color: #084298;
  border-color: #084298;
}
.sabpaisa-css-utils-classes-version-five .list-group-item-secondary {
  color: #41464b;
  background-color: #e2e3e5;
}
.sabpaisa-css-utils-classes-version-five .list-group-item-secondary.list-group-item-action:hover, .sabpaisa-css-utils-classes-version-five .list-group-item-secondary.list-group-item-action:focus {
  color: #41464b;
  background-color: #cbccce;
}
.sabpaisa-css-utils-classes-version-five .list-group-item-secondary.list-group-item-action.active {
  color: #fff;
  background-color: #41464b;
  border-color: #41464b;
}
.sabpaisa-css-utils-classes-version-five .list-group-item-success {
  color: #0f5132;
  background-color: #d1e7dd;
}
.sabpaisa-css-utils-classes-version-five .list-group-item-success.list-group-item-action:hover, .sabpaisa-css-utils-classes-version-five .list-group-item-success.list-group-item-action:focus {
  color: #0f5132;
  background-color: #bcd0c7;
}
.sabpaisa-css-utils-classes-version-five .list-group-item-success.list-group-item-action.active {
  color: #fff;
  background-color: #0f5132;
  border-color: #0f5132;
}
.sabpaisa-css-utils-classes-version-five .list-group-item-info {
  color: #055160;
  background-color: #cff4fc;
}
.sabpaisa-css-utils-classes-version-five .list-group-item-info.list-group-item-action:hover, .sabpaisa-css-utils-classes-version-five .list-group-item-info.list-group-item-action:focus {
  color: #055160;
  background-color: #badce3;
}
.sabpaisa-css-utils-classes-version-five .list-group-item-info.list-group-item-action.active {
  color: #fff;
  background-color: #055160;
  border-color: #055160;
}
.sabpaisa-css-utils-classes-version-five .list-group-item-warning {
  color: #664d03;
  background-color: #fff3cd;
}
.sabpaisa-css-utils-classes-version-five .list-group-item-warning.list-group-item-action:hover, .sabpaisa-css-utils-classes-version-five .list-group-item-warning.list-group-item-action:focus {
  color: #664d03;
  background-color: #e6dbb9;
}
.sabpaisa-css-utils-classes-version-five .list-group-item-warning.list-group-item-action.active {
  color: #fff;
  background-color: #664d03;
  border-color: #664d03;
}
.sabpaisa-css-utils-classes-version-five .list-group-item-danger {
  color: #842029;
  background-color: #f8d7da;
}
.sabpaisa-css-utils-classes-version-five .list-group-item-danger.list-group-item-action:hover, .sabpaisa-css-utils-classes-version-five .list-group-item-danger.list-group-item-action:focus {
  color: #842029;
  background-color: #dfc2c4;
}
.sabpaisa-css-utils-classes-version-five .list-group-item-danger.list-group-item-action.active {
  color: #fff;
  background-color: #842029;
  border-color: #842029;
}
.sabpaisa-css-utils-classes-version-five .list-group-item-light {
  color: #636464;
  background-color: #fefefe;
}
.sabpaisa-css-utils-classes-version-five .list-group-item-light.list-group-item-action:hover, .sabpaisa-css-utils-classes-version-five .list-group-item-light.list-group-item-action:focus {
  color: #636464;
  background-color: #e5e5e5;
}
.sabpaisa-css-utils-classes-version-five .list-group-item-light.list-group-item-action.active {
  color: #fff;
  background-color: #636464;
  border-color: #636464;
}
.sabpaisa-css-utils-classes-version-five .list-group-item-dark {
  color: #141619;
  background-color: #d3d3d4;
}
.sabpaisa-css-utils-classes-version-five .list-group-item-dark.list-group-item-action:hover, .sabpaisa-css-utils-classes-version-five .list-group-item-dark.list-group-item-action:focus {
  color: #141619;
  background-color: #bebebf;
}
.sabpaisa-css-utils-classes-version-five .list-group-item-dark.list-group-item-action.active {
  color: #fff;
  background-color: #141619;
  border-color: #141619;
}
.sabpaisa-css-utils-classes-version-five .btn-close {
  box-sizing: content-box;
  width: 1em;
  height: 1em;
  padding: 0.25em 0.25em;
  color: #000;
  background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
  border: 0;
  border-radius: 0.375rem;
  opacity: 0.5;
}
.sabpaisa-css-utils-classes-version-five .btn-close:hover {
  color: #000;
  text-decoration: none;
  opacity: 0.75;
}
.sabpaisa-css-utils-classes-version-five .btn-close:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  opacity: 1;
}
.sabpaisa-css-utils-classes-version-five .btn-close:disabled, .sabpaisa-css-utils-classes-version-five .btn-close.disabled {
  pointer-events: none;
  user-select: none;
  opacity: 0.25;
}
.sabpaisa-css-utils-classes-version-five .btn-close-white {
  filter: invert(1) grayscale(100%) brightness(200%);
}
.sabpaisa-css-utils-classes-version-five .toast {
  --bs-toast-zindex: 1090;
  --bs-toast-padding-x: 0.75rem;
  --bs-toast-padding-y: 0.5rem;
  --bs-toast-spacing: 1.5rem;
  --bs-toast-max-width: 350px;
  --bs-toast-font-size: 0.875rem;
  --bs-toast-color: ;
  --bs-toast-bg: rgba(255, 255, 255, 0.85);
  --bs-toast-border-width: 1px;
  --bs-toast-border-color: var(--bs-border-color-translucent);
  --bs-toast-border-radius: 0.375rem;
  --bs-toast-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  --bs-toast-header-color: #6c757d;
  --bs-toast-header-bg: rgba(255, 255, 255, 0.85);
  --bs-toast-header-border-color: rgba(0, 0, 0, 0.05);
  width: var(--bs-toast-max-width);
  max-width: 100%;
  font-size: var(--bs-toast-font-size);
  color: var(--bs-toast-color);
  pointer-events: auto;
  background-color: var(--bs-toast-bg);
  background-clip: padding-box;
  border: var(--bs-toast-border-width) solid var(--bs-toast-border-color);
  box-shadow: var(--bs-toast-box-shadow);
  border-radius: var(--bs-toast-border-radius);
}
.sabpaisa-css-utils-classes-version-five .toast.showing {
  opacity: 0;
}
.sabpaisa-css-utils-classes-version-five .toast:not(.show) {
  display: none;
}
.sabpaisa-css-utils-classes-version-five .toast-container {
  --bs-toast-zindex: 1090;
  position: absolute;
  z-index: var(--bs-toast-zindex);
  width: max-content;
  max-width: 100%;
  pointer-events: none;
}
.sabpaisa-css-utils-classes-version-five .toast-container > :not(:last-child) {
  margin-bottom: var(--bs-toast-spacing);
}
.sabpaisa-css-utils-classes-version-five .toast-header {
  display: flex;
  align-items: center;
  padding: var(--bs-toast-padding-y) var(--bs-toast-padding-x);
  color: var(--bs-toast-header-color);
  background-color: var(--bs-toast-header-bg);
  background-clip: padding-box;
  border-bottom: var(--bs-toast-border-width) solid var(--bs-toast-header-border-color);
  border-top-left-radius: calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));
  border-top-right-radius: calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));
}
.sabpaisa-css-utils-classes-version-five .toast-header .btn-close {
  margin-right: calc(-0.5 * var(--bs-toast-padding-x));
  margin-left: var(--bs-toast-padding-x);
}
.sabpaisa-css-utils-classes-version-five .toast-body {
  padding: var(--bs-toast-padding-x);
  word-wrap: break-word;
}
.sabpaisa-css-utils-classes-version-five .modal {
  --bs-modal-zindex: 1055;
  --bs-modal-width: 500px;
  --bs-modal-padding: 1rem;
  --bs-modal-margin: 0.5rem;
  --bs-modal-color: ;
  --bs-modal-bg: #fff;
  --bs-modal-border-color: var(--bs-border-color-translucent);
  --bs-modal-border-width: 1px;
  --bs-modal-border-radius: 0.5rem;
  --bs-modal-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  --bs-modal-inner-border-radius: calc(0.5rem - 1px);
  --bs-modal-header-padding-x: 1rem;
  --bs-modal-header-padding-y: 1rem;
  --bs-modal-header-padding: 1rem 1rem;
  --bs-modal-header-border-color: var(--bs-border-color);
  --bs-modal-header-border-width: 1px;
  --bs-modal-title-line-height: 1.5;
  --bs-modal-footer-gap: 0.5rem;
  --bs-modal-footer-bg: ;
  --bs-modal-footer-border-color: var(--bs-border-color);
  --bs-modal-footer-border-width: 1px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--bs-modal-zindex);
  display: none;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}
.sabpaisa-css-utils-classes-version-five .modal-dialog {
  position: relative;
  width: auto;
  margin: var(--bs-modal-margin);
  pointer-events: none;
}
.modal.fade .sabpaisa-css-utils-classes-version-five .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}
@media (prefers-reduced-motion: reduce) {
  .modal.fade .sabpaisa-css-utils-classes-version-five .modal-dialog {
    transition: none;
  }
}
.modal.show .sabpaisa-css-utils-classes-version-five .modal-dialog {
  transform: none;
}
.modal.modal-static .sabpaisa-css-utils-classes-version-five .modal-dialog {
  transform: scale(1.02);
}
.sabpaisa-css-utils-classes-version-five .modal-dialog-scrollable {
  height: calc(100% - var(--bs-modal-margin) * 2);
}
.sabpaisa-css-utils-classes-version-five .modal-dialog-scrollable .modal-content {
  max-height: 100%;
  overflow: hidden;
}
.sabpaisa-css-utils-classes-version-five .modal-dialog-scrollable .modal-body {
  overflow-y: auto;
}
.sabpaisa-css-utils-classes-version-five .modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - var(--bs-modal-margin) * 2);
}
.sabpaisa-css-utils-classes-version-five .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--bs-modal-color);
  pointer-events: auto;
  background-color: var(--bs-modal-bg);
  background-clip: padding-box;
  border: var(--bs-modal-border-width) solid var(--bs-modal-border-color);
  border-radius: var(--bs-modal-border-radius);
  outline: 0;
}
.sabpaisa-css-utils-classes-version-five .modal-backdrop {
  --bs-backdrop-zindex: 1050;
  --bs-backdrop-bg: #000;
  --bs-backdrop-opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--bs-backdrop-zindex);
  width: 100vw;
  height: 100vh;
  background-color: var(--bs-backdrop-bg);
}
.sabpaisa-css-utils-classes-version-five .modal-backdrop.fade {
  opacity: 0;
}
.sabpaisa-css-utils-classes-version-five .modal-backdrop.show {
  opacity: var(--bs-backdrop-opacity);
}
.sabpaisa-css-utils-classes-version-five .modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: var(--bs-modal-header-padding);
  border-bottom: var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);
  border-top-left-radius: var(--bs-modal-inner-border-radius);
  border-top-right-radius: var(--bs-modal-inner-border-radius);
}
.sabpaisa-css-utils-classes-version-five .modal-header .btn-close {
  padding: calc(var(--bs-modal-header-padding-y) * 0.5) calc(var(--bs-modal-header-padding-x) * 0.5);
  margin: calc(-0.5 * var(--bs-modal-header-padding-y)) calc(-0.5 * var(--bs-modal-header-padding-x)) calc(-0.5 * var(--bs-modal-header-padding-y)) auto;
}
.sabpaisa-css-utils-classes-version-five .modal-title {
  margin-bottom: 0;
  line-height: var(--bs-modal-title-line-height);
}
.sabpaisa-css-utils-classes-version-five .modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: var(--bs-modal-padding);
}
.sabpaisa-css-utils-classes-version-five .modal-footer {
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * 0.5);
  background-color: var(--bs-modal-footer-bg);
  border-top: var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);
  border-bottom-right-radius: var(--bs-modal-inner-border-radius);
  border-bottom-left-radius: var(--bs-modal-inner-border-radius);
}
.sabpaisa-css-utils-classes-version-five .modal-footer > * {
  margin: calc(var(--bs-modal-footer-gap) * 0.5);
}
@media (min-width: 576px) {
  .sabpaisa-css-utils-classes-version-five .modal {
    --bs-modal-margin: 1.75rem;
    --bs-modal-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
  .sabpaisa-css-utils-classes-version-five .modal-dialog {
    max-width: var(--bs-modal-width);
    margin-right: auto;
    margin-left: auto;
  }
  .sabpaisa-css-utils-classes-version-five .modal-sm {
    --bs-modal-width: 300px;
  }
}
@media (min-width: 992px) {
  .sabpaisa-css-utils-classes-version-five .modal-lg,
  .sabpaisa-css-utils-classes-version-five .modal-xl {
    --bs-modal-width: 800px;
  }
}
@media (min-width: 1200px) {
  .sabpaisa-css-utils-classes-version-five .modal-xl {
    --bs-modal-width: 1140px;
  }
}
.sabpaisa-css-utils-classes-version-five .modal-fullscreen {
  width: 100vw;
  max-width: none;
  height: 100%;
  margin: 0;
}
.sabpaisa-css-utils-classes-version-five .modal-fullscreen .modal-content {
  height: 100%;
  border: 0;
  border-radius: 0;
}
.sabpaisa-css-utils-classes-version-five .modal-fullscreen .modal-header,
.sabpaisa-css-utils-classes-version-five .modal-fullscreen .modal-footer {
  border-radius: 0;
}
.sabpaisa-css-utils-classes-version-five .modal-fullscreen .modal-body {
  overflow-y: auto;
}
@media (max-width: 575.98px) {
  .sabpaisa-css-utils-classes-version-five .modal-fullscreen-sm-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .sabpaisa-css-utils-classes-version-five .modal-fullscreen-sm-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .sabpaisa-css-utils-classes-version-five .modal-fullscreen-sm-down .modal-header,
  .sabpaisa-css-utils-classes-version-five .modal-fullscreen-sm-down .modal-footer {
    border-radius: 0;
  }
  .sabpaisa-css-utils-classes-version-five .modal-fullscreen-sm-down .modal-body {
    overflow-y: auto;
  }
}
@media (max-width: 767.98px) {
  .sabpaisa-css-utils-classes-version-five .modal-fullscreen-md-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .sabpaisa-css-utils-classes-version-five .modal-fullscreen-md-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .sabpaisa-css-utils-classes-version-five .modal-fullscreen-md-down .modal-header,
  .sabpaisa-css-utils-classes-version-five .modal-fullscreen-md-down .modal-footer {
    border-radius: 0;
  }
  .sabpaisa-css-utils-classes-version-five .modal-fullscreen-md-down .modal-body {
    overflow-y: auto;
  }
}
@media (max-width: 991.98px) {
  .sabpaisa-css-utils-classes-version-five .modal-fullscreen-lg-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .sabpaisa-css-utils-classes-version-five .modal-fullscreen-lg-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .sabpaisa-css-utils-classes-version-five .modal-fullscreen-lg-down .modal-header,
  .sabpaisa-css-utils-classes-version-five .modal-fullscreen-lg-down .modal-footer {
    border-radius: 0;
  }
  .sabpaisa-css-utils-classes-version-five .modal-fullscreen-lg-down .modal-body {
    overflow-y: auto;
  }
}
@media (max-width: 1199.98px) {
  .sabpaisa-css-utils-classes-version-five .modal-fullscreen-xl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .sabpaisa-css-utils-classes-version-five .modal-fullscreen-xl-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .sabpaisa-css-utils-classes-version-five .modal-fullscreen-xl-down .modal-header,
  .sabpaisa-css-utils-classes-version-five .modal-fullscreen-xl-down .modal-footer {
    border-radius: 0;
  }
  .sabpaisa-css-utils-classes-version-five .modal-fullscreen-xl-down .modal-body {
    overflow-y: auto;
  }
}
@media (max-width: 1399.98px) {
  .sabpaisa-css-utils-classes-version-five .modal-fullscreen-xxl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .sabpaisa-css-utils-classes-version-five .modal-fullscreen-xxl-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .sabpaisa-css-utils-classes-version-five .modal-fullscreen-xxl-down .modal-header,
  .sabpaisa-css-utils-classes-version-five .modal-fullscreen-xxl-down .modal-footer {
    border-radius: 0;
  }
  .sabpaisa-css-utils-classes-version-five .modal-fullscreen-xxl-down .modal-body {
    overflow-y: auto;
  }
}
.sabpaisa-css-utils-classes-version-five .tooltip {
  --bs-tooltip-zindex: 1080;
  --bs-tooltip-max-width: 200px;
  --bs-tooltip-padding-x: 0.5rem;
  --bs-tooltip-padding-y: 0.25rem;
  --bs-tooltip-margin: ;
  --bs-tooltip-font-size: 0.875rem;
  --bs-tooltip-color: #fff;
  --bs-tooltip-bg: #000;
  --bs-tooltip-border-radius: 0.375rem;
  --bs-tooltip-opacity: 0.9;
  --bs-tooltip-arrow-width: 0.8rem;
  --bs-tooltip-arrow-height: 0.4rem;
  z-index: var(--bs-tooltip-zindex);
  display: block;
  padding: var(--bs-tooltip-arrow-height);
  margin: var(--bs-tooltip-margin);
  font-family: var(--bs-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  white-space: normal;
  word-spacing: normal;
  line-break: auto;
  font-size: var(--bs-tooltip-font-size);
  word-wrap: break-word;
  opacity: 0;
}
.sabpaisa-css-utils-classes-version-five .tooltip.show {
  opacity: var(--bs-tooltip-opacity);
}
.sabpaisa-css-utils-classes-version-five .tooltip .tooltip-arrow {
  display: block;
  width: var(--bs-tooltip-arrow-width);
  height: var(--bs-tooltip-arrow-height);
}
.sabpaisa-css-utils-classes-version-five .tooltip .tooltip-arrow::before {
  position: absolute;
  content: "";
  border-color: transparent;
  border-style: solid;
}
.sabpaisa-css-utils-classes-version-five .bs-tooltip-top .tooltip-arrow, .sabpaisa-css-utils-classes-version-five .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow {
  bottom: 0;
}
.sabpaisa-css-utils-classes-version-five .bs-tooltip-top .tooltip-arrow::before, .sabpaisa-css-utils-classes-version-five .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before {
  top: -1px;
  border-width: var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0;
  border-top-color: var(--bs-tooltip-bg);
}
.sabpaisa-css-utils-classes-version-five .bs-tooltip-end .tooltip-arrow, .sabpaisa-css-utils-classes-version-five .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow {
  left: 0;
  width: var(--bs-tooltip-arrow-height);
  height: var(--bs-tooltip-arrow-width);
}
.sabpaisa-css-utils-classes-version-five .bs-tooltip-end .tooltip-arrow::before, .sabpaisa-css-utils-classes-version-five .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before {
  right: -1px;
  border-width: calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0;
  border-right-color: var(--bs-tooltip-bg);
}
.sabpaisa-css-utils-classes-version-five .bs-tooltip-bottom .tooltip-arrow, .sabpaisa-css-utils-classes-version-five .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow {
  top: 0;
}
.sabpaisa-css-utils-classes-version-five .bs-tooltip-bottom .tooltip-arrow::before, .sabpaisa-css-utils-classes-version-five .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before {
  bottom: -1px;
  border-width: 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height);
  border-bottom-color: var(--bs-tooltip-bg);
}
.sabpaisa-css-utils-classes-version-five .bs-tooltip-start .tooltip-arrow, .sabpaisa-css-utils-classes-version-five .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow {
  right: 0;
  width: var(--bs-tooltip-arrow-height);
  height: var(--bs-tooltip-arrow-width);
}
.sabpaisa-css-utils-classes-version-five .bs-tooltip-start .tooltip-arrow::before, .sabpaisa-css-utils-classes-version-five .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before {
  left: -1px;
  border-width: calc(var(--bs-tooltip-arrow-width) * 0.5) 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height);
  border-left-color: var(--bs-tooltip-bg);
}
.sabpaisa-css-utils-classes-version-five .tooltip-inner {
  max-width: var(--bs-tooltip-max-width);
  padding: var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x);
  color: var(--bs-tooltip-color);
  text-align: center;
  background-color: var(--bs-tooltip-bg);
  border-radius: var(--bs-tooltip-border-radius);
}
.sabpaisa-css-utils-classes-version-five .popover {
  --bs-popover-zindex: 1070;
  --bs-popover-max-width: 276px;
  --bs-popover-font-size: 0.875rem;
  --bs-popover-bg: #fff;
  --bs-popover-border-width: 1px;
  --bs-popover-border-color: var(--bs-border-color-translucent);
  --bs-popover-border-radius: 0.5rem;
  --bs-popover-inner-border-radius: calc(0.5rem - 1px);
  --bs-popover-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  --bs-popover-header-padding-x: 1rem;
  --bs-popover-header-padding-y: 0.5rem;
  --bs-popover-header-font-size: 1rem;
  --bs-popover-header-color: ;
  --bs-popover-header-bg: #f0f0f0;
  --bs-popover-body-padding-x: 1rem;
  --bs-popover-body-padding-y: 1rem;
  --bs-popover-body-color: #212529;
  --bs-popover-arrow-width: 1rem;
  --bs-popover-arrow-height: 0.5rem;
  --bs-popover-arrow-border: var(--bs-popover-border-color);
  z-index: var(--bs-popover-zindex);
  display: block;
  max-width: var(--bs-popover-max-width);
  font-family: var(--bs-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  white-space: normal;
  word-spacing: normal;
  line-break: auto;
  font-size: var(--bs-popover-font-size);
  word-wrap: break-word;
  background-color: var(--bs-popover-bg);
  background-clip: padding-box;
  border: var(--bs-popover-border-width) solid var(--bs-popover-border-color);
  border-radius: var(--bs-popover-border-radius);
}
.sabpaisa-css-utils-classes-version-five .popover .popover-arrow {
  display: block;
  width: var(--bs-popover-arrow-width);
  height: var(--bs-popover-arrow-height);
}
.sabpaisa-css-utils-classes-version-five .popover .popover-arrow::before, .sabpaisa-css-utils-classes-version-five .popover .popover-arrow::after {
  position: absolute;
  display: block;
  content: "";
  border-color: transparent;
  border-style: solid;
  border-width: 0;
}
.sabpaisa-css-utils-classes-version-five .bs-popover-top > .popover-arrow, .sabpaisa-css-utils-classes-version-five .bs-popover-auto[data-popper-placement^=top] > .popover-arrow {
  bottom: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));
}
.sabpaisa-css-utils-classes-version-five .bs-popover-top > .popover-arrow::before, .sabpaisa-css-utils-classes-version-five .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before, .sabpaisa-css-utils-classes-version-five .bs-popover-top > .popover-arrow::after, .sabpaisa-css-utils-classes-version-five .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {
  border-width: var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0;
}
.sabpaisa-css-utils-classes-version-five .bs-popover-top > .popover-arrow::before, .sabpaisa-css-utils-classes-version-five .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before {
  bottom: 0;
  border-top-color: var(--bs-popover-arrow-border);
}
.sabpaisa-css-utils-classes-version-five .bs-popover-top > .popover-arrow::after, .sabpaisa-css-utils-classes-version-five .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {
  bottom: var(--bs-popover-border-width);
  border-top-color: var(--bs-popover-bg);
}
.sabpaisa-css-utils-classes-version-five .bs-popover-end > .popover-arrow, .sabpaisa-css-utils-classes-version-five .bs-popover-auto[data-popper-placement^=right] > .popover-arrow {
  left: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));
  width: var(--bs-popover-arrow-height);
  height: var(--bs-popover-arrow-width);
}
.sabpaisa-css-utils-classes-version-five .bs-popover-end > .popover-arrow::before, .sabpaisa-css-utils-classes-version-five .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before, .sabpaisa-css-utils-classes-version-five .bs-popover-end > .popover-arrow::after, .sabpaisa-css-utils-classes-version-five .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {
  border-width: calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0;
}
.sabpaisa-css-utils-classes-version-five .bs-popover-end > .popover-arrow::before, .sabpaisa-css-utils-classes-version-five .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before {
  left: 0;
  border-right-color: var(--bs-popover-arrow-border);
}
.sabpaisa-css-utils-classes-version-five .bs-popover-end > .popover-arrow::after, .sabpaisa-css-utils-classes-version-five .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {
  left: var(--bs-popover-border-width);
  border-right-color: var(--bs-popover-bg);
}
.sabpaisa-css-utils-classes-version-five .bs-popover-bottom > .popover-arrow, .sabpaisa-css-utils-classes-version-five .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow {
  top: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));
}
.sabpaisa-css-utils-classes-version-five .bs-popover-bottom > .popover-arrow::before, .sabpaisa-css-utils-classes-version-five .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before, .sabpaisa-css-utils-classes-version-five .bs-popover-bottom > .popover-arrow::after, .sabpaisa-css-utils-classes-version-five .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {
  border-width: 0 calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height);
}
.sabpaisa-css-utils-classes-version-five .bs-popover-bottom > .popover-arrow::before, .sabpaisa-css-utils-classes-version-five .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before {
  top: 0;
  border-bottom-color: var(--bs-popover-arrow-border);
}
.sabpaisa-css-utils-classes-version-five .bs-popover-bottom > .popover-arrow::after, .sabpaisa-css-utils-classes-version-five .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {
  top: var(--bs-popover-border-width);
  border-bottom-color: var(--bs-popover-bg);
}
.sabpaisa-css-utils-classes-version-five .bs-popover-bottom .popover-header::before, .sabpaisa-css-utils-classes-version-five .bs-popover-auto[data-popper-placement^=bottom] .popover-header::before {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: var(--bs-popover-arrow-width);
  margin-left: calc(-0.5 * var(--bs-popover-arrow-width));
  content: "";
  border-bottom: var(--bs-popover-border-width) solid var(--bs-popover-header-bg);
}
.sabpaisa-css-utils-classes-version-five .bs-popover-start > .popover-arrow, .sabpaisa-css-utils-classes-version-five .bs-popover-auto[data-popper-placement^=left] > .popover-arrow {
  right: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));
  width: var(--bs-popover-arrow-height);
  height: var(--bs-popover-arrow-width);
}
.sabpaisa-css-utils-classes-version-five .bs-popover-start > .popover-arrow::before, .sabpaisa-css-utils-classes-version-five .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before, .sabpaisa-css-utils-classes-version-five .bs-popover-start > .popover-arrow::after, .sabpaisa-css-utils-classes-version-five .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {
  border-width: calc(var(--bs-popover-arrow-width) * 0.5) 0 calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height);
}
.sabpaisa-css-utils-classes-version-five .bs-popover-start > .popover-arrow::before, .sabpaisa-css-utils-classes-version-five .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before {
  right: 0;
  border-left-color: var(--bs-popover-arrow-border);
}
.sabpaisa-css-utils-classes-version-five .bs-popover-start > .popover-arrow::after, .sabpaisa-css-utils-classes-version-five .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {
  right: var(--bs-popover-border-width);
  border-left-color: var(--bs-popover-bg);
}
.sabpaisa-css-utils-classes-version-five .popover-header {
  padding: var(--bs-popover-header-padding-y) var(--bs-popover-header-padding-x);
  margin-bottom: 0;
  font-size: var(--bs-popover-header-font-size);
  color: var(--bs-popover-header-color);
  background-color: var(--bs-popover-header-bg);
  border-bottom: var(--bs-popover-border-width) solid var(--bs-popover-border-color);
  border-top-left-radius: var(--bs-popover-inner-border-radius);
  border-top-right-radius: var(--bs-popover-inner-border-radius);
}
.sabpaisa-css-utils-classes-version-five .popover-header:empty {
  display: none;
}
.sabpaisa-css-utils-classes-version-five .popover-body {
  padding: var(--bs-popover-body-padding-y) var(--bs-popover-body-padding-x);
  color: var(--bs-popover-body-color);
}
.sabpaisa-css-utils-classes-version-five .carousel {
  position: relative;
}
.sabpaisa-css-utils-classes-version-five .carousel.pointer-event {
  touch-action: pan-y;
}
.sabpaisa-css-utils-classes-version-five .carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.sabpaisa-css-utils-classes-version-five .carousel-inner::after {
  display: block;
  clear: both;
  content: "";
}
.sabpaisa-css-utils-classes-version-five .carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
  transition: transform 0.6s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .carousel-item {
    transition: none;
  }
}
.sabpaisa-css-utils-classes-version-five .carousel-item.active,
.sabpaisa-css-utils-classes-version-five .carousel-item-next,
.sabpaisa-css-utils-classes-version-five .carousel-item-prev {
  display: block;
}
.sabpaisa-css-utils-classes-version-five .carousel-item-next:not(.carousel-item-start),
.sabpaisa-css-utils-classes-version-five .active.carousel-item-end {
  transform: translateX(100%);
}
.sabpaisa-css-utils-classes-version-five .carousel-item-prev:not(.carousel-item-end),
.sabpaisa-css-utils-classes-version-five .active.carousel-item-start {
  transform: translateX(-100%);
}
.sabpaisa-css-utils-classes-version-five .carousel-fade .carousel-item {
  opacity: 0;
  transition-property: opacity;
  transform: none;
}
.sabpaisa-css-utils-classes-version-five .carousel-fade .carousel-item.active,
.sabpaisa-css-utils-classes-version-five .carousel-fade .carousel-item-next.carousel-item-start,
.sabpaisa-css-utils-classes-version-five .carousel-fade .carousel-item-prev.carousel-item-end {
  z-index: 1;
  opacity: 1;
}
.sabpaisa-css-utils-classes-version-five .carousel-fade .active.carousel-item-start,
.sabpaisa-css-utils-classes-version-five .carousel-fade .active.carousel-item-end {
  z-index: 0;
  opacity: 0;
  transition: opacity 0s 0.6s;
}
@media (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .carousel-fade .active.carousel-item-start,
  .sabpaisa-css-utils-classes-version-five .carousel-fade .active.carousel-item-end {
    transition: none;
  }
}
.sabpaisa-css-utils-classes-version-five .carousel-control-prev,
.sabpaisa-css-utils-classes-version-five .carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  padding: 0;
  color: #fff;
  text-align: center;
  background: none;
  border: 0;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .carousel-control-prev,
  .sabpaisa-css-utils-classes-version-five .carousel-control-next {
    transition: none;
  }
}
.sabpaisa-css-utils-classes-version-five .carousel-control-prev:hover, .sabpaisa-css-utils-classes-version-five .carousel-control-prev:focus,
.sabpaisa-css-utils-classes-version-five .carousel-control-next:hover,
.sabpaisa-css-utils-classes-version-five .carousel-control-next:focus {
  color: #fff;
  text-decoration: none;
  outline: 0;
  opacity: 0.9;
}
.sabpaisa-css-utils-classes-version-five .carousel-control-prev {
  left: 0;
}
.sabpaisa-css-utils-classes-version-five .carousel-control-next {
  right: 0;
}
.sabpaisa-css-utils-classes-version-five .carousel-control-prev-icon,
.sabpaisa-css-utils-classes-version-five .carousel-control-next-icon {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
}
.sabpaisa-css-utils-classes-version-five .carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
}
.sabpaisa-css-utils-classes-version-five .carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
.sabpaisa-css-utils-classes-version-five .carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  padding: 0;
  margin-right: 15%;
  margin-bottom: 1rem;
  margin-left: 15%;
  list-style: none;
}
.sabpaisa-css-utils-classes-version-five .carousel-indicators [data-bs-target] {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  padding: 0;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: 0.5;
  transition: opacity 0.6s ease;
}
@media (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .carousel-indicators [data-bs-target] {
    transition: none;
  }
}
.sabpaisa-css-utils-classes-version-five .carousel-indicators .active {
  opacity: 1;
}
.sabpaisa-css-utils-classes-version-five .carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 1.25rem;
  left: 15%;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  color: #fff;
  text-align: center;
}
.sabpaisa-css-utils-classes-version-five .carousel-dark .carousel-control-prev-icon,
.sabpaisa-css-utils-classes-version-five .carousel-dark .carousel-control-next-icon {
  filter: invert(1) grayscale(100);
}
.sabpaisa-css-utils-classes-version-five .carousel-dark .carousel-indicators [data-bs-target] {
  background-color: #000;
}
.sabpaisa-css-utils-classes-version-five .carousel-dark .carousel-caption {
  color: #000;
}
.sabpaisa-css-utils-classes-version-five .spinner-grow,
.sabpaisa-css-utils-classes-version-five .spinner-border {
  display: inline-block;
  width: var(--bs-spinner-width);
  height: var(--bs-spinner-height);
  vertical-align: var(--bs-spinner-vertical-align);
  border-radius: 50%;
  animation: var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name);
}
@keyframes spinner-border {
  to {
    transform: rotate(360deg) /* rtl:ignore */;
  }
}
.sabpaisa-css-utils-classes-version-five .spinner-border {
  --bs-spinner-width: 2rem;
  --bs-spinner-height: 2rem;
  --bs-spinner-vertical-align: -0.125em;
  --bs-spinner-border-width: 0.25em;
  --bs-spinner-animation-speed: 0.75s;
  --bs-spinner-animation-name: spinner-border;
  border: var(--bs-spinner-border-width) solid currentcolor;
  border-right-color: transparent;
}
.sabpaisa-css-utils-classes-version-five .spinner-border-sm {
  --bs-spinner-width: 1rem;
  --bs-spinner-height: 1rem;
  --bs-spinner-border-width: 0.2em;
}
@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}
.sabpaisa-css-utils-classes-version-five .spinner-grow {
  --bs-spinner-width: 2rem;
  --bs-spinner-height: 2rem;
  --bs-spinner-vertical-align: -0.125em;
  --bs-spinner-animation-speed: 0.75s;
  --bs-spinner-animation-name: spinner-grow;
  background-color: currentcolor;
  opacity: 0;
}
.sabpaisa-css-utils-classes-version-five .spinner-grow-sm {
  --bs-spinner-width: 1rem;
  --bs-spinner-height: 1rem;
}
@media (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .spinner-border,
  .sabpaisa-css-utils-classes-version-five .spinner-grow {
    --bs-spinner-animation-speed: 1.5s;
  }
}
.sabpaisa-css-utils-classes-version-five .offcanvas, .sabpaisa-css-utils-classes-version-five .offcanvas-xxl, .sabpaisa-css-utils-classes-version-five .offcanvas-xl, .sabpaisa-css-utils-classes-version-five .offcanvas-lg, .sabpaisa-css-utils-classes-version-five .offcanvas-md, .sabpaisa-css-utils-classes-version-five .offcanvas-sm {
  --bs-offcanvas-zindex: 1045;
  --bs-offcanvas-width: 400px;
  --bs-offcanvas-height: 30vh;
  --bs-offcanvas-padding-x: 1rem;
  --bs-offcanvas-padding-y: 1rem;
  --bs-offcanvas-color: ;
  --bs-offcanvas-bg: #fff;
  --bs-offcanvas-border-width: 1px;
  --bs-offcanvas-border-color: var(--bs-border-color-translucent);
  --bs-offcanvas-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}
@media (max-width: 575.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-sm {
    position: fixed;
    bottom: 0;
    z-index: var(--bs-offcanvas-zindex);
    display: flex;
    flex-direction: column;
    max-width: 100%;
    color: var(--bs-offcanvas-color);
    visibility: hidden;
    background-color: var(--bs-offcanvas-bg);
    background-clip: padding-box;
    outline: 0;
    transition: transform 0.3s ease-in-out;
  }
}
@media (max-width: 575.98px) and (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-sm {
    transition: none;
  }
}
@media (max-width: 575.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-sm.offcanvas-start {
    top: 0;
    left: 0;
    width: var(--bs-offcanvas-width);
    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(-100%);
  }
}
@media (max-width: 575.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-sm.offcanvas-end {
    top: 0;
    right: 0;
    width: var(--bs-offcanvas-width);
    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(100%);
  }
}
@media (max-width: 575.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-sm.offcanvas-top {
    top: 0;
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(-100%);
  }
}
@media (max-width: 575.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-sm.offcanvas-bottom {
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(100%);
  }
}
@media (max-width: 575.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-sm.showing, .sabpaisa-css-utils-classes-version-five .offcanvas-sm.show:not(.hiding) {
    transform: none;
  }
}
@media (max-width: 575.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-sm.showing, .sabpaisa-css-utils-classes-version-five .offcanvas-sm.hiding, .sabpaisa-css-utils-classes-version-five .offcanvas-sm.show {
    visibility: visible;
  }
}
@media (min-width: 576px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-sm {
    --bs-offcanvas-height: auto;
    --bs-offcanvas-border-width: 0;
    background-color: transparent !important;
  }
  .sabpaisa-css-utils-classes-version-five .offcanvas-sm .offcanvas-header {
    display: none;
  }
  .sabpaisa-css-utils-classes-version-five .offcanvas-sm .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
    background-color: transparent !important;
  }
}
@media (max-width: 767.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-md {
    position: fixed;
    bottom: 0;
    z-index: var(--bs-offcanvas-zindex);
    display: flex;
    flex-direction: column;
    max-width: 100%;
    color: var(--bs-offcanvas-color);
    visibility: hidden;
    background-color: var(--bs-offcanvas-bg);
    background-clip: padding-box;
    outline: 0;
    transition: transform 0.3s ease-in-out;
  }
}
@media (max-width: 767.98px) and (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-md {
    transition: none;
  }
}
@media (max-width: 767.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-md.offcanvas-start {
    top: 0;
    left: 0;
    width: var(--bs-offcanvas-width);
    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(-100%);
  }
}
@media (max-width: 767.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-md.offcanvas-end {
    top: 0;
    right: 0;
    width: var(--bs-offcanvas-width);
    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(100%);
  }
}
@media (max-width: 767.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-md.offcanvas-top {
    top: 0;
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(-100%);
  }
}
@media (max-width: 767.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-md.offcanvas-bottom {
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(100%);
  }
}
@media (max-width: 767.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-md.showing, .sabpaisa-css-utils-classes-version-five .offcanvas-md.show:not(.hiding) {
    transform: none;
  }
}
@media (max-width: 767.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-md.showing, .sabpaisa-css-utils-classes-version-five .offcanvas-md.hiding, .sabpaisa-css-utils-classes-version-five .offcanvas-md.show {
    visibility: visible;
  }
}
@media (min-width: 768px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-md {
    --bs-offcanvas-height: auto;
    --bs-offcanvas-border-width: 0;
    background-color: transparent !important;
  }
  .sabpaisa-css-utils-classes-version-five .offcanvas-md .offcanvas-header {
    display: none;
  }
  .sabpaisa-css-utils-classes-version-five .offcanvas-md .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
    background-color: transparent !important;
  }
}
@media (max-width: 991.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-lg {
    position: fixed;
    bottom: 0;
    z-index: var(--bs-offcanvas-zindex);
    display: flex;
    flex-direction: column;
    max-width: 100%;
    color: var(--bs-offcanvas-color);
    visibility: hidden;
    background-color: var(--bs-offcanvas-bg);
    background-clip: padding-box;
    outline: 0;
    transition: transform 0.3s ease-in-out;
  }
}
@media (max-width: 991.98px) and (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-lg {
    transition: none;
  }
}
@media (max-width: 991.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-lg.offcanvas-start {
    top: 0;
    left: 0;
    width: var(--bs-offcanvas-width);
    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(-100%);
  }
}
@media (max-width: 991.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-lg.offcanvas-end {
    top: 0;
    right: 0;
    width: var(--bs-offcanvas-width);
    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(100%);
  }
}
@media (max-width: 991.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-lg.offcanvas-top {
    top: 0;
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(-100%);
  }
}
@media (max-width: 991.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-lg.offcanvas-bottom {
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(100%);
  }
}
@media (max-width: 991.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-lg.showing, .sabpaisa-css-utils-classes-version-five .offcanvas-lg.show:not(.hiding) {
    transform: none;
  }
}
@media (max-width: 991.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-lg.showing, .sabpaisa-css-utils-classes-version-five .offcanvas-lg.hiding, .sabpaisa-css-utils-classes-version-five .offcanvas-lg.show {
    visibility: visible;
  }
}
@media (min-width: 992px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-lg {
    --bs-offcanvas-height: auto;
    --bs-offcanvas-border-width: 0;
    background-color: transparent !important;
  }
  .sabpaisa-css-utils-classes-version-five .offcanvas-lg .offcanvas-header {
    display: none;
  }
  .sabpaisa-css-utils-classes-version-five .offcanvas-lg .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
    background-color: transparent !important;
  }
}
@media (max-width: 1199.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-xl {
    position: fixed;
    bottom: 0;
    z-index: var(--bs-offcanvas-zindex);
    display: flex;
    flex-direction: column;
    max-width: 100%;
    color: var(--bs-offcanvas-color);
    visibility: hidden;
    background-color: var(--bs-offcanvas-bg);
    background-clip: padding-box;
    outline: 0;
    transition: transform 0.3s ease-in-out;
  }
}
@media (max-width: 1199.98px) and (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-xl {
    transition: none;
  }
}
@media (max-width: 1199.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-xl.offcanvas-start {
    top: 0;
    left: 0;
    width: var(--bs-offcanvas-width);
    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(-100%);
  }
}
@media (max-width: 1199.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-xl.offcanvas-end {
    top: 0;
    right: 0;
    width: var(--bs-offcanvas-width);
    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(100%);
  }
}
@media (max-width: 1199.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-xl.offcanvas-top {
    top: 0;
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(-100%);
  }
}
@media (max-width: 1199.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-xl.offcanvas-bottom {
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(100%);
  }
}
@media (max-width: 1199.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-xl.showing, .sabpaisa-css-utils-classes-version-five .offcanvas-xl.show:not(.hiding) {
    transform: none;
  }
}
@media (max-width: 1199.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-xl.showing, .sabpaisa-css-utils-classes-version-five .offcanvas-xl.hiding, .sabpaisa-css-utils-classes-version-five .offcanvas-xl.show {
    visibility: visible;
  }
}
@media (min-width: 1200px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-xl {
    --bs-offcanvas-height: auto;
    --bs-offcanvas-border-width: 0;
    background-color: transparent !important;
  }
  .sabpaisa-css-utils-classes-version-five .offcanvas-xl .offcanvas-header {
    display: none;
  }
  .sabpaisa-css-utils-classes-version-five .offcanvas-xl .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
    background-color: transparent !important;
  }
}
@media (max-width: 1399.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-xxl {
    position: fixed;
    bottom: 0;
    z-index: var(--bs-offcanvas-zindex);
    display: flex;
    flex-direction: column;
    max-width: 100%;
    color: var(--bs-offcanvas-color);
    visibility: hidden;
    background-color: var(--bs-offcanvas-bg);
    background-clip: padding-box;
    outline: 0;
    transition: transform 0.3s ease-in-out;
  }
}
@media (max-width: 1399.98px) and (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-xxl {
    transition: none;
  }
}
@media (max-width: 1399.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-xxl.offcanvas-start {
    top: 0;
    left: 0;
    width: var(--bs-offcanvas-width);
    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(-100%);
  }
}
@media (max-width: 1399.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-xxl.offcanvas-end {
    top: 0;
    right: 0;
    width: var(--bs-offcanvas-width);
    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(100%);
  }
}
@media (max-width: 1399.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-xxl.offcanvas-top {
    top: 0;
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(-100%);
  }
}
@media (max-width: 1399.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-xxl.offcanvas-bottom {
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(100%);
  }
}
@media (max-width: 1399.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-xxl.showing, .sabpaisa-css-utils-classes-version-five .offcanvas-xxl.show:not(.hiding) {
    transform: none;
  }
}
@media (max-width: 1399.98px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-xxl.showing, .sabpaisa-css-utils-classes-version-five .offcanvas-xxl.hiding, .sabpaisa-css-utils-classes-version-five .offcanvas-xxl.show {
    visibility: visible;
  }
}
@media (min-width: 1400px) {
  .sabpaisa-css-utils-classes-version-five .offcanvas-xxl {
    --bs-offcanvas-height: auto;
    --bs-offcanvas-border-width: 0;
    background-color: transparent !important;
  }
  .sabpaisa-css-utils-classes-version-five .offcanvas-xxl .offcanvas-header {
    display: none;
  }
  .sabpaisa-css-utils-classes-version-five .offcanvas-xxl .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
    background-color: transparent !important;
  }
}
.sabpaisa-css-utils-classes-version-five .offcanvas {
  position: fixed;
  bottom: 0;
  z-index: var(--bs-offcanvas-zindex);
  display: flex;
  flex-direction: column;
  max-width: 100%;
  color: var(--bs-offcanvas-color);
  visibility: hidden;
  background-color: var(--bs-offcanvas-bg);
  background-clip: padding-box;
  outline: 0;
  transition: transform 0.3s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .sabpaisa-css-utils-classes-version-five .offcanvas {
    transition: none;
  }
}
.sabpaisa-css-utils-classes-version-five .offcanvas.offcanvas-start {
  top: 0;
  left: 0;
  width: var(--bs-offcanvas-width);
  border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateX(-100%);
}
.sabpaisa-css-utils-classes-version-five .offcanvas.offcanvas-end {
  top: 0;
  right: 0;
  width: var(--bs-offcanvas-width);
  border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateX(100%);
}
.sabpaisa-css-utils-classes-version-five .offcanvas.offcanvas-top {
  top: 0;
  right: 0;
  left: 0;
  height: var(--bs-offcanvas-height);
  max-height: 100%;
  border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateY(-100%);
}
.sabpaisa-css-utils-classes-version-five .offcanvas.offcanvas-bottom {
  right: 0;
  left: 0;
  height: var(--bs-offcanvas-height);
  max-height: 100%;
  border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateY(100%);
}
.sabpaisa-css-utils-classes-version-five .offcanvas.showing, .sabpaisa-css-utils-classes-version-five .offcanvas.show:not(.hiding) {
  transform: none;
}
.sabpaisa-css-utils-classes-version-five .offcanvas.showing, .sabpaisa-css-utils-classes-version-five .offcanvas.hiding, .sabpaisa-css-utils-classes-version-five .offcanvas.show {
  visibility: visible;
}
.sabpaisa-css-utils-classes-version-five .offcanvas-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
.sabpaisa-css-utils-classes-version-five .offcanvas-backdrop.fade {
  opacity: 0;
}
.sabpaisa-css-utils-classes-version-five .offcanvas-backdrop.show {
  opacity: 0.5;
}
.sabpaisa-css-utils-classes-version-five .offcanvas-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);
}
.sabpaisa-css-utils-classes-version-five .offcanvas-header .btn-close {
  padding: calc(var(--bs-offcanvas-padding-y) * 0.5) calc(var(--bs-offcanvas-padding-x) * 0.5);
  margin-top: calc(-0.5 * var(--bs-offcanvas-padding-y));
  margin-right: calc(-0.5 * var(--bs-offcanvas-padding-x));
  margin-bottom: calc(-0.5 * var(--bs-offcanvas-padding-y));
}
.sabpaisa-css-utils-classes-version-five .offcanvas-title {
  margin-bottom: 0;
  line-height: 1.5;
}
.sabpaisa-css-utils-classes-version-five .offcanvas-body {
  flex-grow: 1;
  padding: var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);
  overflow-y: auto;
}
.sabpaisa-css-utils-classes-version-five .placeholder {
  display: inline-block;
  min-height: 1em;
  vertical-align: middle;
  cursor: wait;
  background-color: currentcolor;
  opacity: 0.5;
}
.sabpaisa-css-utils-classes-version-five .placeholder.btn::before {
  display: inline-block;
  content: "";
}
.sabpaisa-css-utils-classes-version-five .placeholder-xs {
  min-height: 0.6em;
}
.sabpaisa-css-utils-classes-version-five .placeholder-sm {
  min-height: 0.8em;
}
.sabpaisa-css-utils-classes-version-five .placeholder-lg {
  min-height: 1.2em;
}
.sabpaisa-css-utils-classes-version-five .placeholder-glow .placeholder {
  animation: placeholder-glow 2s ease-in-out infinite;
}
@keyframes placeholder-glow {
  50% {
    opacity: 0.2;
  }
}
.sabpaisa-css-utils-classes-version-five .placeholder-wave {
  mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);
  mask-size: 200% 100%;
  animation: placeholder-wave 2s linear infinite;
}
@keyframes placeholder-wave {
  100% {
    mask-position: -200% 0%;
  }
}
.sabpaisa-css-utils-classes-version-five .clearfix::after {
  display: block;
  clear: both;
  content: "";
}
.sabpaisa-css-utils-classes-version-five .text-bg-primary {
  color: #fff !important;
  background-color: RGBA(13, 110, 253, var(--bs-bg-opacity, 1)) !important;
}
.sabpaisa-css-utils-classes-version-five .text-bg-secondary {
  color: #fff !important;
  background-color: RGBA(108, 117, 125, var(--bs-bg-opacity, 1)) !important;
}
.sabpaisa-css-utils-classes-version-five .text-bg-success {
  color: #fff !important;
  background-color: RGBA(25, 135, 84, var(--bs-bg-opacity, 1)) !important;
}
.sabpaisa-css-utils-classes-version-five .text-bg-info {
  color: #000 !important;
  background-color: RGBA(13, 202, 240, var(--bs-bg-opacity, 1)) !important;
}
.sabpaisa-css-utils-classes-version-five .text-bg-warning {
  color: #000 !important;
  background-color: RGBA(255, 193, 7, var(--bs-bg-opacity, 1)) !important;
}
.sabpaisa-css-utils-classes-version-five .text-bg-danger {
  color: #fff !important;
  background-color: RGBA(220, 53, 69, var(--bs-bg-opacity, 1)) !important;
}
.sabpaisa-css-utils-classes-version-five .text-bg-light {
  color: #000 !important;
  background-color: RGBA(248, 249, 250, var(--bs-bg-opacity, 1)) !important;
}
.sabpaisa-css-utils-classes-version-five .text-bg-dark {
  color: #fff !important;
  background-color: RGBA(33, 37, 41, var(--bs-bg-opacity, 1)) !important;
}
.sabpaisa-css-utils-classes-version-five .link-primary {
  color: #0d6efd !important;
}
.sabpaisa-css-utils-classes-version-five .link-primary:hover, .sabpaisa-css-utils-classes-version-five .link-primary:focus {
  color: #0a58ca !important;
}
.sabpaisa-css-utils-classes-version-five .link-secondary {
  color: #6c757d !important;
}
.sabpaisa-css-utils-classes-version-five .link-secondary:hover, .sabpaisa-css-utils-classes-version-five .link-secondary:focus {
  color: #565e64 !important;
}
.sabpaisa-css-utils-classes-version-five .link-success {
  color: #198754 !important;
}
.sabpaisa-css-utils-classes-version-five .link-success:hover, .sabpaisa-css-utils-classes-version-five .link-success:focus {
  color: #146c43 !important;
}
.sabpaisa-css-utils-classes-version-five .link-info {
  color: #0dcaf0 !important;
}
.sabpaisa-css-utils-classes-version-five .link-info:hover, .sabpaisa-css-utils-classes-version-five .link-info:focus {
  color: #3dd5f3 !important;
}
.sabpaisa-css-utils-classes-version-five .link-warning {
  color: #ffc107 !important;
}
.sabpaisa-css-utils-classes-version-five .link-warning:hover, .sabpaisa-css-utils-classes-version-five .link-warning:focus {
  color: #ffcd39 !important;
}
.sabpaisa-css-utils-classes-version-five .link-danger {
  color: #dc3545 !important;
}
.sabpaisa-css-utils-classes-version-five .link-danger:hover, .sabpaisa-css-utils-classes-version-five .link-danger:focus {
  color: #b02a37 !important;
}
.sabpaisa-css-utils-classes-version-five .link-light {
  color: #f8f9fa !important;
}
.sabpaisa-css-utils-classes-version-five .link-light:hover, .sabpaisa-css-utils-classes-version-five .link-light:focus {
  color: #f9fafb !important;
}
.sabpaisa-css-utils-classes-version-five .link-dark {
  color: #212529 !important;
}
.sabpaisa-css-utils-classes-version-five .link-dark:hover, .sabpaisa-css-utils-classes-version-five .link-dark:focus {
  color: #1a1e21 !important;
}
.sabpaisa-css-utils-classes-version-five .ratio {
  position: relative;
  width: 100%;
}
.sabpaisa-css-utils-classes-version-five .ratio::before {
  display: block;
  padding-top: var(--bs-aspect-ratio);
  content: "";
}
.sabpaisa-css-utils-classes-version-five .ratio > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.sabpaisa-css-utils-classes-version-five .ratio-1x1 {
  --bs-aspect-ratio: 100%;
}
.sabpaisa-css-utils-classes-version-five .ratio-4x3 {
  --bs-aspect-ratio: 75%;
}
.sabpaisa-css-utils-classes-version-five .ratio-16x9 {
  --bs-aspect-ratio: 56.25%;
}
.sabpaisa-css-utils-classes-version-five .ratio-21x9 {
  --bs-aspect-ratio: 42.8571428571%;
}
.sabpaisa-css-utils-classes-version-five .fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}
.sabpaisa-css-utils-classes-version-five .fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}
.sabpaisa-css-utils-classes-version-five .sticky-top {
  position: sticky;
  top: 0;
  z-index: 1020;
}
.sabpaisa-css-utils-classes-version-five .sticky-bottom {
  position: sticky;
  bottom: 0;
  z-index: 1020;
}
@media (min-width: 576px) {
  .sabpaisa-css-utils-classes-version-five .sticky-sm-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sabpaisa-css-utils-classes-version-five .sticky-sm-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
@media (min-width: 768px) {
  .sabpaisa-css-utils-classes-version-five .sticky-md-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sabpaisa-css-utils-classes-version-five .sticky-md-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
@media (min-width: 992px) {
  .sabpaisa-css-utils-classes-version-five .sticky-lg-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sabpaisa-css-utils-classes-version-five .sticky-lg-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
@media (min-width: 1200px) {
  .sabpaisa-css-utils-classes-version-five .sticky-xl-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sabpaisa-css-utils-classes-version-five .sticky-xl-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
@media (min-width: 1400px) {
  .sabpaisa-css-utils-classes-version-five .sticky-xxl-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sabpaisa-css-utils-classes-version-five .sticky-xxl-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
.sabpaisa-css-utils-classes-version-five .hstack {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
}
.sabpaisa-css-utils-classes-version-five .vstack {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-self: stretch;
}
.sabpaisa-css-utils-classes-version-five .visually-hidden,
.sabpaisa-css-utils-classes-version-five .visually-hidden-focusable:not(:focus):not(:focus-within) {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  content: "";
}
.sabpaisa-css-utils-classes-version-five .text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.sabpaisa-css-utils-classes-version-five .vr {
  display: inline-block;
  align-self: stretch;
  width: 1px;
  min-height: 1em;
  background-color: currentcolor;
  opacity: 0.25;
}
.sabpaisa-css-utils-classes-version-five .align-baseline {
  vertical-align: baseline !important;
}
.sabpaisa-css-utils-classes-version-five .align-top {
  vertical-align: top !important;
}
.sabpaisa-css-utils-classes-version-five .align-middle {
  vertical-align: middle !important;
}
.sabpaisa-css-utils-classes-version-five .align-bottom {
  vertical-align: bottom !important;
}
.sabpaisa-css-utils-classes-version-five .align-text-bottom {
  vertical-align: text-bottom !important;
}
.sabpaisa-css-utils-classes-version-five .align-text-top {
  vertical-align: text-top !important;
}
.sabpaisa-css-utils-classes-version-five .float-start {
  float: left !important;
}
.sabpaisa-css-utils-classes-version-five .float-end {
  float: right !important;
}
.sabpaisa-css-utils-classes-version-five .float-none {
  float: none !important;
}
.sabpaisa-css-utils-classes-version-five .opacity-0 {
  opacity: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .opacity-25 {
  opacity: 0.25 !important;
}
.sabpaisa-css-utils-classes-version-five .opacity-50 {
  opacity: 0.5 !important;
}
.sabpaisa-css-utils-classes-version-five .opacity-75 {
  opacity: 0.75 !important;
}
.sabpaisa-css-utils-classes-version-five .opacity-100 {
  opacity: 1 !important;
}
.sabpaisa-css-utils-classes-version-five .overflow-auto {
  overflow: auto !important;
}
.sabpaisa-css-utils-classes-version-five .overflow-hidden {
  overflow: hidden !important;
}
.sabpaisa-css-utils-classes-version-five .overflow-visible {
  overflow: visible !important;
}
.sabpaisa-css-utils-classes-version-five .overflow-scroll {
  overflow: scroll !important;
}
.sabpaisa-css-utils-classes-version-five .d-inline {
  display: inline !important;
}
.sabpaisa-css-utils-classes-version-five .d-inline-block {
  display: inline-block !important;
}
.sabpaisa-css-utils-classes-version-five .d-block {
  display: block !important;
}
.sabpaisa-css-utils-classes-version-five .d-grid {
  display: grid !important;
}
.sabpaisa-css-utils-classes-version-five .d-table {
  display: table !important;
}
.sabpaisa-css-utils-classes-version-five .d-table-row {
  display: table-row !important;
}
.sabpaisa-css-utils-classes-version-five .d-table-cell {
  display: table-cell !important;
}
.sabpaisa-css-utils-classes-version-five .d-flex {
  display: flex !important;
}
.sabpaisa-css-utils-classes-version-five .d-inline-flex {
  display: inline-flex !important;
}
.sabpaisa-css-utils-classes-version-five .d-none {
  display: none !important;
}
.sabpaisa-css-utils-classes-version-five .shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
.sabpaisa-css-utils-classes-version-five .shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}
.sabpaisa-css-utils-classes-version-five .shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}
.sabpaisa-css-utils-classes-version-five .shadow-none {
  box-shadow: none !important;
}
.sabpaisa-css-utils-classes-version-five .position-static {
  position: static !important;
}
.sabpaisa-css-utils-classes-version-five .position-relative {
  position: relative !important;
}
.sabpaisa-css-utils-classes-version-five .position-absolute {
  position: absolute !important;
}
.sabpaisa-css-utils-classes-version-five .position-fixed {
  position: fixed !important;
}
.sabpaisa-css-utils-classes-version-five .position-sticky {
  position: sticky !important;
}
.sabpaisa-css-utils-classes-version-five .top-0 {
  top: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .top-50 {
  top: 50% !important;
}
.sabpaisa-css-utils-classes-version-five .top-100 {
  top: 100% !important;
}
.sabpaisa-css-utils-classes-version-five .bottom-0 {
  bottom: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .bottom-50 {
  bottom: 50% !important;
}
.sabpaisa-css-utils-classes-version-five .bottom-100 {
  bottom: 100% !important;
}
.sabpaisa-css-utils-classes-version-five .start-0 {
  left: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .start-50 {
  left: 50% !important;
}
.sabpaisa-css-utils-classes-version-five .start-100 {
  left: 100% !important;
}
.sabpaisa-css-utils-classes-version-five .end-0 {
  right: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .end-50 {
  right: 50% !important;
}
.sabpaisa-css-utils-classes-version-five .end-100 {
  right: 100% !important;
}
.sabpaisa-css-utils-classes-version-five .translate-middle {
  transform: translate(-50%, -50%) !important;
}
.sabpaisa-css-utils-classes-version-five .translate-middle-x {
  transform: translateX(-50%) !important;
}
.sabpaisa-css-utils-classes-version-five .translate-middle-y {
  transform: translateY(-50%) !important;
}
.sabpaisa-css-utils-classes-version-five .border {
  border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}
.sabpaisa-css-utils-classes-version-five .border-0 {
  border: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .border-top {
  border-top: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}
.sabpaisa-css-utils-classes-version-five .border-top-0 {
  border-top: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .border-end {
  border-right: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}
.sabpaisa-css-utils-classes-version-five .border-end-0 {
  border-right: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .border-bottom {
  border-bottom: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}
.sabpaisa-css-utils-classes-version-five .border-bottom-0 {
  border-bottom: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .border-start {
  border-left: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}
.sabpaisa-css-utils-classes-version-five .border-start-0 {
  border-left: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .border-primary {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-primary-rgb), var(--bs-border-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .border-secondary {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-secondary-rgb), var(--bs-border-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .border-success {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-success-rgb), var(--bs-border-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .border-info {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-info-rgb), var(--bs-border-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .border-warning {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-warning-rgb), var(--bs-border-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .border-danger {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-danger-rgb), var(--bs-border-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .border-light {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-light-rgb), var(--bs-border-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .border-dark {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-dark-rgb), var(--bs-border-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .border-white {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-white-rgb), var(--bs-border-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .border-1 {
  --bs-border-width: 1px;
}
.sabpaisa-css-utils-classes-version-five .border-2 {
  --bs-border-width: 2px;
}
.sabpaisa-css-utils-classes-version-five .border-3 {
  --bs-border-width: 3px;
}
.sabpaisa-css-utils-classes-version-five .border-4 {
  --bs-border-width: 4px;
}
.sabpaisa-css-utils-classes-version-five .border-5 {
  --bs-border-width: 5px;
}
.sabpaisa-css-utils-classes-version-five .border-opacity-10 {
  --bs-border-opacity: 0.1;
}
.sabpaisa-css-utils-classes-version-five .border-opacity-25 {
  --bs-border-opacity: 0.25;
}
.sabpaisa-css-utils-classes-version-five .border-opacity-50 {
  --bs-border-opacity: 0.5;
}
.sabpaisa-css-utils-classes-version-five .border-opacity-75 {
  --bs-border-opacity: 0.75;
}
.sabpaisa-css-utils-classes-version-five .border-opacity-100 {
  --bs-border-opacity: 1;
}
.sabpaisa-css-utils-classes-version-five .w-25 {
  width: 25% !important;
}
.sabpaisa-css-utils-classes-version-five .w-50 {
  width: 50% !important;
}
.sabpaisa-css-utils-classes-version-five .w-75 {
  width: 75% !important;
}
.sabpaisa-css-utils-classes-version-five .w-100 {
  width: 100% !important;
}
.sabpaisa-css-utils-classes-version-five .w-auto {
  width: auto !important;
}
.sabpaisa-css-utils-classes-version-five .mw-100 {
  max-width: 100% !important;
}
.sabpaisa-css-utils-classes-version-five .vw-100 {
  width: 100vw !important;
}
.sabpaisa-css-utils-classes-version-five .min-vw-100 {
  min-width: 100vw !important;
}
.sabpaisa-css-utils-classes-version-five .h-25 {
  height: 25% !important;
}
.sabpaisa-css-utils-classes-version-five .h-50 {
  height: 50% !important;
}
.sabpaisa-css-utils-classes-version-five .h-75 {
  height: 75% !important;
}
.sabpaisa-css-utils-classes-version-five .h-100 {
  height: 100% !important;
}
.sabpaisa-css-utils-classes-version-five .h-auto {
  height: auto !important;
}
.sabpaisa-css-utils-classes-version-five .mh-100 {
  max-height: 100% !important;
}
.sabpaisa-css-utils-classes-version-five .vh-100 {
  height: 100vh !important;
}
.sabpaisa-css-utils-classes-version-five .min-vh-100 {
  min-height: 100vh !important;
}
.sabpaisa-css-utils-classes-version-five .flex-fill {
  flex: 1 1 auto !important;
}
.sabpaisa-css-utils-classes-version-five .flex-row {
  flex-direction: row !important;
}
.sabpaisa-css-utils-classes-version-five .flex-column {
  flex-direction: column !important;
}
.sabpaisa-css-utils-classes-version-five .flex-row-reverse {
  flex-direction: row-reverse !important;
}
.sabpaisa-css-utils-classes-version-five .flex-column-reverse {
  flex-direction: column-reverse !important;
}
.sabpaisa-css-utils-classes-version-five .flex-grow-0 {
  flex-grow: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .flex-grow-1 {
  flex-grow: 1 !important;
}
.sabpaisa-css-utils-classes-version-five .flex-shrink-0 {
  flex-shrink: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .flex-shrink-1 {
  flex-shrink: 1 !important;
}
.sabpaisa-css-utils-classes-version-five .flex-wrap {
  flex-wrap: wrap !important;
}
.sabpaisa-css-utils-classes-version-five .flex-nowrap {
  flex-wrap: nowrap !important;
}
.sabpaisa-css-utils-classes-version-five .flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}
.sabpaisa-css-utils-classes-version-five .justify-content-start {
  justify-content: flex-start !important;
}
.sabpaisa-css-utils-classes-version-five .justify-content-end {
  justify-content: flex-end !important;
}
.sabpaisa-css-utils-classes-version-five .justify-content-center {
  justify-content: center !important;
}
.sabpaisa-css-utils-classes-version-five .justify-content-between {
  justify-content: space-between !important;
}
.sabpaisa-css-utils-classes-version-five .justify-content-around {
  justify-content: space-around !important;
}
.sabpaisa-css-utils-classes-version-five .justify-content-evenly {
  justify-content: space-evenly !important;
}
.sabpaisa-css-utils-classes-version-five .align-items-start {
  align-items: flex-start !important;
}
.sabpaisa-css-utils-classes-version-five .align-items-end {
  align-items: flex-end !important;
}
.sabpaisa-css-utils-classes-version-five .align-items-center {
  align-items: center !important;
}
.sabpaisa-css-utils-classes-version-five .align-items-baseline {
  align-items: baseline !important;
}
.sabpaisa-css-utils-classes-version-five .align-items-stretch {
  align-items: stretch !important;
}
.sabpaisa-css-utils-classes-version-five .align-content-start {
  align-content: flex-start !important;
}
.sabpaisa-css-utils-classes-version-five .align-content-end {
  align-content: flex-end !important;
}
.sabpaisa-css-utils-classes-version-five .align-content-center {
  align-content: center !important;
}
.sabpaisa-css-utils-classes-version-five .align-content-between {
  align-content: space-between !important;
}
.sabpaisa-css-utils-classes-version-five .align-content-around {
  align-content: space-around !important;
}
.sabpaisa-css-utils-classes-version-five .align-content-stretch {
  align-content: stretch !important;
}
.sabpaisa-css-utils-classes-version-five .align-self-auto {
  align-self: auto !important;
}
.sabpaisa-css-utils-classes-version-five .align-self-start {
  align-self: flex-start !important;
}
.sabpaisa-css-utils-classes-version-five .align-self-end {
  align-self: flex-end !important;
}
.sabpaisa-css-utils-classes-version-five .align-self-center {
  align-self: center !important;
}
.sabpaisa-css-utils-classes-version-five .align-self-baseline {
  align-self: baseline !important;
}
.sabpaisa-css-utils-classes-version-five .align-self-stretch {
  align-self: stretch !important;
}
.sabpaisa-css-utils-classes-version-five .order-first {
  order: -1 !important;
}
.sabpaisa-css-utils-classes-version-five .order-0 {
  order: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .order-1 {
  order: 1 !important;
}
.sabpaisa-css-utils-classes-version-five .order-2 {
  order: 2 !important;
}
.sabpaisa-css-utils-classes-version-five .order-3 {
  order: 3 !important;
}
.sabpaisa-css-utils-classes-version-five .order-4 {
  order: 4 !important;
}
.sabpaisa-css-utils-classes-version-five .order-5 {
  order: 5 !important;
}
.sabpaisa-css-utils-classes-version-five .order-last {
  order: 6 !important;
}
.sabpaisa-css-utils-classes-version-five .m-0 {
  margin: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .m-1 {
  margin: 0.25rem !important;
}
.sabpaisa-css-utils-classes-version-five .m-2 {
  margin: 0.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .m-3 {
  margin: 1rem !important;
}
.sabpaisa-css-utils-classes-version-five .m-4 {
  margin: 1.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .m-5 {
  margin: 3rem !important;
}
.sabpaisa-css-utils-classes-version-five .m-auto {
  margin: auto !important;
}
.sabpaisa-css-utils-classes-version-five .mx-0 {
  margin-right: 0 !important;
  margin-left: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .mx-1 {
  margin-right: 0.25rem !important;
  margin-left: 0.25rem !important;
}
.sabpaisa-css-utils-classes-version-five .mx-2 {
  margin-right: 0.5rem !important;
  margin-left: 0.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .mx-3 {
  margin-right: 1rem !important;
  margin-left: 1rem !important;
}
.sabpaisa-css-utils-classes-version-five .mx-4 {
  margin-right: 1.5rem !important;
  margin-left: 1.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .mx-5 {
  margin-right: 3rem !important;
  margin-left: 3rem !important;
}
.sabpaisa-css-utils-classes-version-five .mx-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}
.sabpaisa-css-utils-classes-version-five .my-0 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .my-1 {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}
.sabpaisa-css-utils-classes-version-five .my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .my-3 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}
.sabpaisa-css-utils-classes-version-five .my-4 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .my-5 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important;
}
.sabpaisa-css-utils-classes-version-five .my-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
}
.sabpaisa-css-utils-classes-version-five .mt-0 {
  margin-top: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .mt-1 {
  margin-top: 0.25rem !important;
}
.sabpaisa-css-utils-classes-version-five .mt-2 {
  margin-top: 0.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .mt-3 {
  margin-top: 1rem !important;
}
.sabpaisa-css-utils-classes-version-five .mt-4 {
  margin-top: 1.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .mt-5 {
  margin-top: 3rem !important;
}
.sabpaisa-css-utils-classes-version-five .mt-auto {
  margin-top: auto !important;
}
.sabpaisa-css-utils-classes-version-five .me-0 {
  margin-right: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .me-1 {
  margin-right: 0.25rem !important;
}
.sabpaisa-css-utils-classes-version-five .me-2 {
  margin-right: 0.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .me-3 {
  margin-right: 1rem !important;
}
.sabpaisa-css-utils-classes-version-five .me-4 {
  margin-right: 1.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .me-5 {
  margin-right: 3rem !important;
}
.sabpaisa-css-utils-classes-version-five .me-auto {
  margin-right: auto !important;
}
.sabpaisa-css-utils-classes-version-five .mb-0 {
  margin-bottom: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .mb-1 {
  margin-bottom: 0.25rem !important;
}
.sabpaisa-css-utils-classes-version-five .mb-2 {
  margin-bottom: 0.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .mb-3 {
  margin-bottom: 1rem !important;
}
.sabpaisa-css-utils-classes-version-five .mb-4 {
  margin-bottom: 1.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .mb-5 {
  margin-bottom: 3rem !important;
}
.sabpaisa-css-utils-classes-version-five .mb-auto {
  margin-bottom: auto !important;
}
.sabpaisa-css-utils-classes-version-five .ms-0 {
  margin-left: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .ms-1 {
  margin-left: 0.25rem !important;
}
.sabpaisa-css-utils-classes-version-five .ms-2 {
  margin-left: 0.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .ms-3 {
  margin-left: 1rem !important;
}
.sabpaisa-css-utils-classes-version-five .ms-4 {
  margin-left: 1.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .ms-5 {
  margin-left: 3rem !important;
}
.sabpaisa-css-utils-classes-version-five .ms-auto {
  margin-left: auto !important;
}
.sabpaisa-css-utils-classes-version-five .p-0 {
  padding: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .p-1 {
  padding: 0.25rem !important;
}
.sabpaisa-css-utils-classes-version-five .p-2 {
  padding: 0.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .p-3 {
  padding: 1rem !important;
}
.sabpaisa-css-utils-classes-version-five .p-4 {
  padding: 1.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .p-5 {
  padding: 3rem !important;
}
.sabpaisa-css-utils-classes-version-five .px-0 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .px-1 {
  padding-right: 0.25rem !important;
  padding-left: 0.25rem !important;
}
.sabpaisa-css-utils-classes-version-five .px-2 {
  padding-right: 0.5rem !important;
  padding-left: 0.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .px-3 {
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}
.sabpaisa-css-utils-classes-version-five .px-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .px-5 {
  padding-right: 3rem !important;
  padding-left: 3rem !important;
}
.sabpaisa-css-utils-classes-version-five .py-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .py-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
}
.sabpaisa-css-utils-classes-version-five .py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .py-3 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}
.sabpaisa-css-utils-classes-version-five .py-4 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .py-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}
.sabpaisa-css-utils-classes-version-five .pt-0 {
  padding-top: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .pt-1 {
  padding-top: 0.25rem !important;
}
.sabpaisa-css-utils-classes-version-five .pt-2 {
  padding-top: 0.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .pt-3 {
  padding-top: 1rem !important;
}
.sabpaisa-css-utils-classes-version-five .pt-4 {
  padding-top: 1.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .pt-5 {
  padding-top: 3rem !important;
}
.sabpaisa-css-utils-classes-version-five .pe-0 {
  padding-right: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .pe-1 {
  padding-right: 0.25rem !important;
}
.sabpaisa-css-utils-classes-version-five .pe-2 {
  padding-right: 0.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .pe-3 {
  padding-right: 1rem !important;
}
.sabpaisa-css-utils-classes-version-five .pe-4 {
  padding-right: 1.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .pe-5 {
  padding-right: 3rem !important;
}
.sabpaisa-css-utils-classes-version-five .pb-0 {
  padding-bottom: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .pb-1 {
  padding-bottom: 0.25rem !important;
}
.sabpaisa-css-utils-classes-version-five .pb-2 {
  padding-bottom: 0.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .pb-3 {
  padding-bottom: 1rem !important;
}
.sabpaisa-css-utils-classes-version-five .pb-4 {
  padding-bottom: 1.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .pb-5 {
  padding-bottom: 3rem !important;
}
.sabpaisa-css-utils-classes-version-five .ps-0 {
  padding-left: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .ps-1 {
  padding-left: 0.25rem !important;
}
.sabpaisa-css-utils-classes-version-five .ps-2 {
  padding-left: 0.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .ps-3 {
  padding-left: 1rem !important;
}
.sabpaisa-css-utils-classes-version-five .ps-4 {
  padding-left: 1.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .ps-5 {
  padding-left: 3rem !important;
}
.sabpaisa-css-utils-classes-version-five .gap-0 {
  gap: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .gap-1 {
  gap: 0.25rem !important;
}
.sabpaisa-css-utils-classes-version-five .gap-2 {
  gap: 0.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .gap-3 {
  gap: 1rem !important;
}
.sabpaisa-css-utils-classes-version-five .gap-4 {
  gap: 1.5rem !important;
}
.sabpaisa-css-utils-classes-version-five .gap-5 {
  gap: 3rem !important;
}
.sabpaisa-css-utils-classes-version-five .font-monospace {
  font-family: var(--bs-font-monospace) !important;
}
.sabpaisa-css-utils-classes-version-five .fs-1 {
  font-size: calc(1.375rem + 1.5vw) !important;
}
.sabpaisa-css-utils-classes-version-five .fs-2 {
  font-size: calc(1.325rem + 0.9vw) !important;
}
.sabpaisa-css-utils-classes-version-five .fs-3 {
  font-size: calc(1.3rem + 0.6vw) !important;
}
.sabpaisa-css-utils-classes-version-five .fs-4 {
  font-size: calc(1.275rem + 0.3vw) !important;
}
.sabpaisa-css-utils-classes-version-five .fs-5 {
  font-size: 1.25rem !important;
}
.sabpaisa-css-utils-classes-version-five .fs-6 {
  font-size: 1rem !important;
}
.sabpaisa-css-utils-classes-version-five .fst-italic {
  font-style: italic !important;
}
.sabpaisa-css-utils-classes-version-five .fst-normal {
  font-style: normal !important;
}
.sabpaisa-css-utils-classes-version-five .fw-light {
  font-weight: 300 !important;
}
.sabpaisa-css-utils-classes-version-five .fw-lighter {
  font-weight: lighter !important;
}
.sabpaisa-css-utils-classes-version-five .fw-normal {
  font-weight: 400 !important;
}
.sabpaisa-css-utils-classes-version-five .fw-bold {
  font-weight: 700 !important;
}
.sabpaisa-css-utils-classes-version-five .fw-semibold {
  font-weight: 600 !important;
}
.sabpaisa-css-utils-classes-version-five .fw-bolder {
  font-weight: bolder !important;
}
.sabpaisa-css-utils-classes-version-five .lh-1 {
  line-height: 1 !important;
}
.sabpaisa-css-utils-classes-version-five .lh-sm {
  line-height: 1.25 !important;
}
.sabpaisa-css-utils-classes-version-five .lh-base {
  line-height: 1.5 !important;
}
.sabpaisa-css-utils-classes-version-five .lh-lg {
  line-height: 2 !important;
}
.sabpaisa-css-utils-classes-version-five .text-start {
  text-align: left !important;
}
.sabpaisa-css-utils-classes-version-five .text-end {
  text-align: right !important;
}
.sabpaisa-css-utils-classes-version-five .text-center {
  text-align: center !important;
}
.sabpaisa-css-utils-classes-version-five .text-decoration-none {
  text-decoration: none !important;
}
.sabpaisa-css-utils-classes-version-five .text-decoration-underline {
  text-decoration: underline !important;
}
.sabpaisa-css-utils-classes-version-five .text-decoration-line-through {
  text-decoration: line-through !important;
}
.sabpaisa-css-utils-classes-version-five .text-lowercase {
  text-transform: lowercase !important;
}
.sabpaisa-css-utils-classes-version-five .text-uppercase {
  text-transform: uppercase !important;
}
.sabpaisa-css-utils-classes-version-five .text-capitalize {
  text-transform: capitalize !important;
}
.sabpaisa-css-utils-classes-version-five .text-wrap {
  white-space: normal !important;
}
.sabpaisa-css-utils-classes-version-five .text-nowrap {
  white-space: nowrap !important;
}
.sabpaisa-css-utils-classes-version-five .text-break {
  word-wrap: break-word !important;
  word-break: break-word !important;
}
.sabpaisa-css-utils-classes-version-five .text-primary {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .text-secondary {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .text-success {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .text-info {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .text-warning {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .text-danger {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .text-light {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .text-dark {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .text-black {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important;
}

.sabpaisa-css-utils-classes-version-five .text-body {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .text-muted {
  --bs-text-opacity: 1;
  color: #6c757d !important;
}
.sabpaisa-css-utils-classes-version-five .text-black-50 {
  --bs-text-opacity: 1;
  color: rgba(0, 0, 0, 0.5) !important;
}
.sabpaisa-css-utils-classes-version-five .text-white-50 {
  --bs-text-opacity: 1;
  color: rgba(255, 255, 255, 0.5) !important;
}
.sabpaisa-css-utils-classes-version-five .text-reset {
  --bs-text-opacity: 1;
  color: inherit !important;
}
.sabpaisa-css-utils-classes-version-five .text-opacity-25 {
  --bs-text-opacity: 0.25;
}
.sabpaisa-css-utils-classes-version-five .text-opacity-50 {
  --bs-text-opacity: 0.5;
}
.sabpaisa-css-utils-classes-version-five .text-opacity-75 {
  --bs-text-opacity: 0.75;
}
.sabpaisa-css-utils-classes-version-five .text-opacity-100 {
  --bs-text-opacity: 1;
}
.sabpaisa-css-utils-classes-version-five .bg-primary {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .bg-secondary {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .bg-success {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .bg-info {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .bg-warning {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .bg-danger {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .bg-light {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .bg-dark {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .bg-black {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-black-rgb), var(--bs-bg-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .bg-white {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .bg-body {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-body-bg-rgb), var(--bs-bg-opacity)) !important;
}
.sabpaisa-css-utils-classes-version-five .bg-transparent {
  --bs-bg-opacity: 1;
  background-color: transparent !important;
}
.sabpaisa-css-utils-classes-version-five .bg-opacity-10 {
  --bs-bg-opacity: 0.1;
}
.sabpaisa-css-utils-classes-version-five .bg-opacity-25 {
  --bs-bg-opacity: 0.25;
}
.sabpaisa-css-utils-classes-version-five .bg-opacity-50 {
  --bs-bg-opacity: 0.5;
}
.sabpaisa-css-utils-classes-version-five .bg-opacity-75 {
  --bs-bg-opacity: 0.75;
}
.sabpaisa-css-utils-classes-version-five .bg-opacity-100 {
  --bs-bg-opacity: 1;
}
.sabpaisa-css-utils-classes-version-five .bg-gradient {
  background-image: var(--bs-gradient) !important;
}
.sabpaisa-css-utils-classes-version-five .user-select-all {
  user-select: all !important;
}
.sabpaisa-css-utils-classes-version-five .user-select-auto {
  user-select: auto !important;
}
.sabpaisa-css-utils-classes-version-five .user-select-none {
  user-select: none !important;
}
.sabpaisa-css-utils-classes-version-five .pe-none {
  pointer-events: none !important;
}
.sabpaisa-css-utils-classes-version-five .pe-auto {
  pointer-events: auto !important;
}
.sabpaisa-css-utils-classes-version-five .rounded {
  border-radius: var(--bs-border-radius) !important;
}
.sabpaisa-css-utils-classes-version-five .rounded-0 {
  border-radius: 0 !important;
}
.sabpaisa-css-utils-classes-version-five .rounded-1 {
  border-radius: var(--bs-border-radius-sm) !important;
}
.sabpaisa-css-utils-classes-version-five .rounded-2 {
  border-radius: var(--bs-border-radius) !important;
}
.sabpaisa-css-utils-classes-version-five .rounded-3 {
  border-radius: var(--bs-border-radius-lg) !important;
}
.sabpaisa-css-utils-classes-version-five .rounded-4 {
  border-radius: var(--bs-border-radius-xl) !important;
}
.sabpaisa-css-utils-classes-version-five .rounded-5 {
  border-radius: var(--bs-border-radius-2xl) !important;
}
.sabpaisa-css-utils-classes-version-five .rounded-circle {
  border-radius: 50% !important;
}
.sabpaisa-css-utils-classes-version-five .rounded-pill {
  border-radius: var(--bs-border-radius-pill) !important;
}
.sabpaisa-css-utils-classes-version-five .rounded-top {
  border-top-left-radius: var(--bs-border-radius) !important;
  border-top-right-radius: var(--bs-border-radius) !important;
}
.sabpaisa-css-utils-classes-version-five .rounded-end {
  border-top-right-radius: var(--bs-border-radius) !important;
  border-bottom-right-radius: var(--bs-border-radius) !important;
}
.sabpaisa-css-utils-classes-version-five .rounded-bottom {
  border-bottom-right-radius: var(--bs-border-radius) !important;
  border-bottom-left-radius: var(--bs-border-radius) !important;
}
.sabpaisa-css-utils-classes-version-five .rounded-start {
  border-bottom-left-radius: var(--bs-border-radius) !important;
  border-top-left-radius: var(--bs-border-radius) !important;
}
.sabpaisa-css-utils-classes-version-five .visible {
  visibility: visible !important;
}
.sabpaisa-css-utils-classes-version-five .invisible {
  visibility: hidden !important;
}
@media (min-width: 576px) {
  .sabpaisa-css-utils-classes-version-five .float-sm-start {
    float: left !important;
  }
  .sabpaisa-css-utils-classes-version-five .float-sm-end {
    float: right !important;
  }
  .sabpaisa-css-utils-classes-version-five .float-sm-none {
    float: none !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-sm-inline {
    display: inline !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-sm-inline-block {
    display: inline-block !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-sm-block {
    display: block !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-sm-grid {
    display: grid !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-sm-table {
    display: table !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-sm-table-row {
    display: table-row !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-sm-table-cell {
    display: table-cell !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-sm-flex {
    display: flex !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-sm-inline-flex {
    display: inline-flex !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-sm-none {
    display: none !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-sm-fill {
    flex: 1 1 auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-sm-row {
    flex-direction: row !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-sm-column {
    flex-direction: column !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-sm-row-reverse {
    flex-direction: row-reverse !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-sm-column-reverse {
    flex-direction: column-reverse !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-sm-grow-0 {
    flex-grow: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-sm-grow-1 {
    flex-grow: 1 !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-sm-shrink-0 {
    flex-shrink: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-sm-shrink-1 {
    flex-shrink: 1 !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-sm-wrap {
    flex-wrap: wrap !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-sm-nowrap {
    flex-wrap: nowrap !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-sm-start {
    justify-content: flex-start !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-sm-end {
    justify-content: flex-end !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-sm-center {
    justify-content: center !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-sm-between {
    justify-content: space-between !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-sm-around {
    justify-content: space-around !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-sm-evenly {
    justify-content: space-evenly !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-items-sm-start {
    align-items: flex-start !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-items-sm-end {
    align-items: flex-end !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-items-sm-center {
    align-items: center !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-items-sm-baseline {
    align-items: baseline !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-items-sm-stretch {
    align-items: stretch !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-sm-start {
    align-content: flex-start !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-sm-end {
    align-content: flex-end !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-sm-center {
    align-content: center !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-sm-between {
    align-content: space-between !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-sm-around {
    align-content: space-around !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-sm-stretch {
    align-content: stretch !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-sm-auto {
    align-self: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-sm-start {
    align-self: flex-start !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-sm-end {
    align-self: flex-end !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-sm-center {
    align-self: center !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-sm-baseline {
    align-self: baseline !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-sm-stretch {
    align-self: stretch !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-sm-first {
    order: -1 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-sm-0 {
    order: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-sm-1 {
    order: 1 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-sm-2 {
    order: 2 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-sm-3 {
    order: 3 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-sm-4 {
    order: 4 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-sm-5 {
    order: 5 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-sm-last {
    order: 6 !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-sm-0 {
    margin: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-sm-1 {
    margin: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-sm-2 {
    margin: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-sm-3 {
    margin: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-sm-4 {
    margin: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-sm-5 {
    margin: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-sm-auto {
    margin: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-sm-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-sm-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-sm-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-sm-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-sm-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-sm-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-sm-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-sm-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-sm-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-sm-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-sm-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-sm-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-sm-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-sm-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-sm-0 {
    margin-top: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-sm-1 {
    margin-top: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-sm-2 {
    margin-top: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-sm-3 {
    margin-top: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-sm-4 {
    margin-top: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-sm-5 {
    margin-top: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-sm-auto {
    margin-top: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-sm-0 {
    margin-right: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-sm-1 {
    margin-right: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-sm-2 {
    margin-right: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-sm-3 {
    margin-right: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-sm-4 {
    margin-right: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-sm-5 {
    margin-right: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-sm-auto {
    margin-right: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-sm-0 {
    margin-bottom: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-sm-1 {
    margin-bottom: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-sm-2 {
    margin-bottom: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-sm-3 {
    margin-bottom: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-sm-4 {
    margin-bottom: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-sm-5 {
    margin-bottom: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-sm-auto {
    margin-bottom: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-sm-0 {
    margin-left: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-sm-1 {
    margin-left: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-sm-2 {
    margin-left: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-sm-3 {
    margin-left: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-sm-4 {
    margin-left: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-sm-5 {
    margin-left: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-sm-auto {
    margin-left: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-sm-0 {
    padding: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-sm-1 {
    padding: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-sm-2 {
    padding: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-sm-3 {
    padding: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-sm-4 {
    padding: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-sm-5 {
    padding: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-sm-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-sm-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-sm-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-sm-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-sm-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-sm-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-sm-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-sm-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-sm-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-sm-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-sm-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-sm-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-sm-0 {
    padding-top: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-sm-1 {
    padding-top: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-sm-2 {
    padding-top: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-sm-3 {
    padding-top: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-sm-4 {
    padding-top: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-sm-5 {
    padding-top: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-sm-0 {
    padding-right: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-sm-1 {
    padding-right: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-sm-2 {
    padding-right: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-sm-3 {
    padding-right: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-sm-4 {
    padding-right: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-sm-5 {
    padding-right: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-sm-0 {
    padding-bottom: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-sm-1 {
    padding-bottom: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-sm-2 {
    padding-bottom: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-sm-3 {
    padding-bottom: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-sm-4 {
    padding-bottom: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-sm-5 {
    padding-bottom: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-sm-0 {
    padding-left: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-sm-1 {
    padding-left: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-sm-2 {
    padding-left: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-sm-3 {
    padding-left: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-sm-4 {
    padding-left: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-sm-5 {
    padding-left: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-sm-0 {
    gap: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-sm-1 {
    gap: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-sm-2 {
    gap: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-sm-3 {
    gap: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-sm-4 {
    gap: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-sm-5 {
    gap: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .text-sm-start {
    text-align: left !important;
  }
  .sabpaisa-css-utils-classes-version-five .text-sm-end {
    text-align: right !important;
  }
  .sabpaisa-css-utils-classes-version-five .text-sm-center {
    text-align: center !important;
  }
}
@media (min-width: 768px) {
  .sabpaisa-css-utils-classes-version-five .float-md-start {
    float: left !important;
  }
  .sabpaisa-css-utils-classes-version-five .float-md-end {
    float: right !important;
  }
  .sabpaisa-css-utils-classes-version-five .float-md-none {
    float: none !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-md-inline {
    display: inline !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-md-inline-block {
    display: inline-block !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-md-block {
    display: block !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-md-grid {
    display: grid !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-md-table {
    display: table !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-md-table-row {
    display: table-row !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-md-table-cell {
    display: table-cell !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-md-flex {
    display: flex !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-md-inline-flex {
    display: inline-flex !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-md-none {
    display: none !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-md-fill {
    flex: 1 1 auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-md-row {
    flex-direction: row !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-md-column {
    flex-direction: column !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-md-row-reverse {
    flex-direction: row-reverse !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-md-column-reverse {
    flex-direction: column-reverse !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-md-grow-0 {
    flex-grow: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-md-grow-1 {
    flex-grow: 1 !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-md-shrink-0 {
    flex-shrink: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-md-shrink-1 {
    flex-shrink: 1 !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-md-wrap {
    flex-wrap: wrap !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-md-nowrap {
    flex-wrap: nowrap !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-md-start {
    justify-content: flex-start !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-md-end {
    justify-content: flex-end !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-md-center {
    justify-content: center !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-md-between {
    justify-content: space-between !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-md-around {
    justify-content: space-around !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-md-evenly {
    justify-content: space-evenly !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-items-md-start {
    align-items: flex-start !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-items-md-end {
    align-items: flex-end !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-items-md-center {
    align-items: center !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-items-md-baseline {
    align-items: baseline !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-items-md-stretch {
    align-items: stretch !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-md-start {
    align-content: flex-start !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-md-end {
    align-content: flex-end !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-md-center {
    align-content: center !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-md-between {
    align-content: space-between !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-md-around {
    align-content: space-around !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-md-stretch {
    align-content: stretch !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-md-auto {
    align-self: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-md-start {
    align-self: flex-start !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-md-end {
    align-self: flex-end !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-md-center {
    align-self: center !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-md-baseline {
    align-self: baseline !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-md-stretch {
    align-self: stretch !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-md-first {
    order: -1 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-md-0 {
    order: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-md-1 {
    order: 1 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-md-2 {
    order: 2 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-md-3 {
    order: 3 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-md-4 {
    order: 4 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-md-5 {
    order: 5 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-md-last {
    order: 6 !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-md-0 {
    margin: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-md-1 {
    margin: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-md-2 {
    margin: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-md-3 {
    margin: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-md-4 {
    margin: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-md-5 {
    margin: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-md-auto {
    margin: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-md-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-md-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-md-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-md-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-md-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-md-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-md-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-md-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-md-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-md-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-md-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-md-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-md-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-md-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-md-0 {
    margin-top: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-md-1 {
    margin-top: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-md-2 {
    margin-top: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-md-3 {
    margin-top: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-md-4 {
    margin-top: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-md-5 {
    margin-top: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-md-auto {
    margin-top: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-md-0 {
    margin-right: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-md-1 {
    margin-right: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-md-2 {
    margin-right: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-md-3 {
    margin-right: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-md-4 {
    margin-right: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-md-5 {
    margin-right: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-md-auto {
    margin-right: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-md-0 {
    margin-bottom: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-md-1 {
    margin-bottom: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-md-2 {
    margin-bottom: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-md-3 {
    margin-bottom: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-md-4 {
    margin-bottom: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-md-5 {
    margin-bottom: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-md-auto {
    margin-bottom: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-md-0 {
    margin-left: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-md-1 {
    margin-left: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-md-2 {
    margin-left: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-md-3 {
    margin-left: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-md-4 {
    margin-left: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-md-5 {
    margin-left: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-md-auto {
    margin-left: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-md-0 {
    padding: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-md-1 {
    padding: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-md-2 {
    padding: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-md-3 {
    padding: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-md-4 {
    padding: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-md-5 {
    padding: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-md-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-md-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-md-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-md-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-md-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-md-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-md-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-md-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-md-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-md-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-md-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-md-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-md-0 {
    padding-top: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-md-1 {
    padding-top: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-md-2 {
    padding-top: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-md-3 {
    padding-top: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-md-4 {
    padding-top: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-md-5 {
    padding-top: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-md-0 {
    padding-right: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-md-1 {
    padding-right: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-md-2 {
    padding-right: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-md-3 {
    padding-right: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-md-4 {
    padding-right: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-md-5 {
    padding-right: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-md-0 {
    padding-bottom: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-md-1 {
    padding-bottom: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-md-2 {
    padding-bottom: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-md-3 {
    padding-bottom: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-md-4 {
    padding-bottom: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-md-5 {
    padding-bottom: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-md-0 {
    padding-left: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-md-1 {
    padding-left: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-md-2 {
    padding-left: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-md-3 {
    padding-left: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-md-4 {
    padding-left: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-md-5 {
    padding-left: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-md-0 {
    gap: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-md-1 {
    gap: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-md-2 {
    gap: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-md-3 {
    gap: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-md-4 {
    gap: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-md-5 {
    gap: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .text-md-start {
    text-align: left !important;
  }
  .sabpaisa-css-utils-classes-version-five .text-md-end {
    text-align: right !important;
  }
  .sabpaisa-css-utils-classes-version-five .text-md-center {
    text-align: center !important;
  }
}
@media (min-width: 992px) {
  .sabpaisa-css-utils-classes-version-five .float-lg-start {
    float: left !important;
  }
  .sabpaisa-css-utils-classes-version-five .float-lg-end {
    float: right !important;
  }
  .sabpaisa-css-utils-classes-version-five .float-lg-none {
    float: none !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-lg-inline {
    display: inline !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-lg-inline-block {
    display: inline-block !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-lg-block {
    display: block !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-lg-grid {
    display: grid !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-lg-table {
    display: table !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-lg-table-row {
    display: table-row !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-lg-table-cell {
    display: table-cell !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-lg-flex {
    display: flex !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-lg-inline-flex {
    display: inline-flex !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-lg-none {
    display: none !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-lg-fill {
    flex: 1 1 auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-lg-row {
    flex-direction: row !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-lg-column {
    flex-direction: column !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-lg-row-reverse {
    flex-direction: row-reverse !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-lg-column-reverse {
    flex-direction: column-reverse !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-lg-grow-0 {
    flex-grow: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-lg-grow-1 {
    flex-grow: 1 !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-lg-shrink-0 {
    flex-shrink: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-lg-shrink-1 {
    flex-shrink: 1 !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-lg-wrap {
    flex-wrap: wrap !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-lg-nowrap {
    flex-wrap: nowrap !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-lg-start {
    justify-content: flex-start !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-lg-end {
    justify-content: flex-end !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-lg-center {
    justify-content: center !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-lg-between {
    justify-content: space-between !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-lg-around {
    justify-content: space-around !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-lg-evenly {
    justify-content: space-evenly !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-items-lg-start {
    align-items: flex-start !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-items-lg-end {
    align-items: flex-end !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-items-lg-center {
    align-items: center !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-items-lg-baseline {
    align-items: baseline !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-items-lg-stretch {
    align-items: stretch !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-lg-start {
    align-content: flex-start !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-lg-end {
    align-content: flex-end !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-lg-center {
    align-content: center !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-lg-between {
    align-content: space-between !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-lg-around {
    align-content: space-around !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-lg-stretch {
    align-content: stretch !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-lg-auto {
    align-self: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-lg-start {
    align-self: flex-start !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-lg-end {
    align-self: flex-end !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-lg-center {
    align-self: center !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-lg-baseline {
    align-self: baseline !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-lg-stretch {
    align-self: stretch !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-lg-first {
    order: -1 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-lg-0 {
    order: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-lg-1 {
    order: 1 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-lg-2 {
    order: 2 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-lg-3 {
    order: 3 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-lg-4 {
    order: 4 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-lg-5 {
    order: 5 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-lg-last {
    order: 6 !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-lg-0 {
    margin: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-lg-1 {
    margin: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-lg-2 {
    margin: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-lg-3 {
    margin: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-lg-4 {
    margin: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-lg-5 {
    margin: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-lg-auto {
    margin: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-lg-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-lg-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-lg-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-lg-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-lg-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-lg-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-lg-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-lg-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-lg-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-lg-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-lg-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-lg-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-lg-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-lg-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-lg-0 {
    margin-top: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-lg-1 {
    margin-top: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-lg-2 {
    margin-top: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-lg-3 {
    margin-top: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-lg-4 {
    margin-top: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-lg-5 {
    margin-top: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-lg-auto {
    margin-top: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-lg-0 {
    margin-right: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-lg-1 {
    margin-right: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-lg-2 {
    margin-right: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-lg-3 {
    margin-right: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-lg-4 {
    margin-right: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-lg-5 {
    margin-right: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-lg-auto {
    margin-right: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-lg-0 {
    margin-bottom: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-lg-1 {
    margin-bottom: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-lg-2 {
    margin-bottom: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-lg-3 {
    margin-bottom: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-lg-4 {
    margin-bottom: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-lg-5 {
    margin-bottom: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-lg-auto {
    margin-bottom: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-lg-0 {
    margin-left: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-lg-1 {
    margin-left: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-lg-2 {
    margin-left: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-lg-3 {
    margin-left: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-lg-4 {
    margin-left: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-lg-5 {
    margin-left: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-lg-auto {
    margin-left: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-lg-0 {
    padding: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-lg-1 {
    padding: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-lg-2 {
    padding: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-lg-3 {
    padding: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-lg-4 {
    padding: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-lg-5 {
    padding: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-lg-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-lg-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-lg-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-lg-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-lg-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-lg-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-lg-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-lg-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-lg-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-lg-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-lg-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-lg-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-lg-0 {
    padding-top: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-lg-1 {
    padding-top: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-lg-2 {
    padding-top: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-lg-3 {
    padding-top: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-lg-4 {
    padding-top: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-lg-5 {
    padding-top: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-lg-0 {
    padding-right: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-lg-1 {
    padding-right: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-lg-2 {
    padding-right: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-lg-3 {
    padding-right: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-lg-4 {
    padding-right: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-lg-5 {
    padding-right: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-lg-0 {
    padding-bottom: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-lg-1 {
    padding-bottom: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-lg-2 {
    padding-bottom: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-lg-3 {
    padding-bottom: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-lg-4 {
    padding-bottom: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-lg-5 {
    padding-bottom: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-lg-0 {
    padding-left: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-lg-1 {
    padding-left: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-lg-2 {
    padding-left: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-lg-3 {
    padding-left: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-lg-4 {
    padding-left: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-lg-5 {
    padding-left: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-lg-0 {
    gap: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-lg-1 {
    gap: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-lg-2 {
    gap: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-lg-3 {
    gap: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-lg-4 {
    gap: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-lg-5 {
    gap: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .text-lg-start {
    text-align: left !important;
  }
  .sabpaisa-css-utils-classes-version-five .text-lg-end {
    text-align: right !important;
  }
  .sabpaisa-css-utils-classes-version-five .text-lg-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .sabpaisa-css-utils-classes-version-five .float-xl-start {
    float: left !important;
  }
  .sabpaisa-css-utils-classes-version-five .float-xl-end {
    float: right !important;
  }
  .sabpaisa-css-utils-classes-version-five .float-xl-none {
    float: none !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-xl-inline {
    display: inline !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-xl-inline-block {
    display: inline-block !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-xl-block {
    display: block !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-xl-grid {
    display: grid !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-xl-table {
    display: table !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-xl-table-row {
    display: table-row !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-xl-table-cell {
    display: table-cell !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-xl-flex {
    display: flex !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-xl-inline-flex {
    display: inline-flex !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-xl-none {
    display: none !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-xl-fill {
    flex: 1 1 auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-xl-row {
    flex-direction: row !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-xl-column {
    flex-direction: column !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-xl-row-reverse {
    flex-direction: row-reverse !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-xl-column-reverse {
    flex-direction: column-reverse !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-xl-grow-0 {
    flex-grow: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-xl-grow-1 {
    flex-grow: 1 !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-xl-shrink-0 {
    flex-shrink: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-xl-shrink-1 {
    flex-shrink: 1 !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-xl-wrap {
    flex-wrap: wrap !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-xl-nowrap {
    flex-wrap: nowrap !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-xl-start {
    justify-content: flex-start !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-xl-end {
    justify-content: flex-end !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-xl-center {
    justify-content: center !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-xl-between {
    justify-content: space-between !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-xl-around {
    justify-content: space-around !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-xl-evenly {
    justify-content: space-evenly !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-items-xl-start {
    align-items: flex-start !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-items-xl-end {
    align-items: flex-end !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-items-xl-center {
    align-items: center !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-items-xl-baseline {
    align-items: baseline !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-items-xl-stretch {
    align-items: stretch !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-xl-start {
    align-content: flex-start !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-xl-end {
    align-content: flex-end !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-xl-center {
    align-content: center !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-xl-between {
    align-content: space-between !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-xl-around {
    align-content: space-around !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-xl-stretch {
    align-content: stretch !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-xl-auto {
    align-self: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-xl-start {
    align-self: flex-start !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-xl-end {
    align-self: flex-end !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-xl-center {
    align-self: center !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-xl-baseline {
    align-self: baseline !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-xl-stretch {
    align-self: stretch !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-xl-first {
    order: -1 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-xl-0 {
    order: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-xl-1 {
    order: 1 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-xl-2 {
    order: 2 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-xl-3 {
    order: 3 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-xl-4 {
    order: 4 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-xl-5 {
    order: 5 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-xl-last {
    order: 6 !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-xl-0 {
    margin: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-xl-1 {
    margin: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-xl-2 {
    margin: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-xl-3 {
    margin: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-xl-4 {
    margin: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-xl-5 {
    margin: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-xl-auto {
    margin: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-xl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-xl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-xl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-xl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-xl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-xl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-xl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-xl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-xl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-xl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-xl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-xl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-xl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-xl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-xl-0 {
    margin-top: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-xl-1 {
    margin-top: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-xl-2 {
    margin-top: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-xl-3 {
    margin-top: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-xl-4 {
    margin-top: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-xl-5 {
    margin-top: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-xl-auto {
    margin-top: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-xl-0 {
    margin-right: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-xl-1 {
    margin-right: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-xl-2 {
    margin-right: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-xl-3 {
    margin-right: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-xl-4 {
    margin-right: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-xl-5 {
    margin-right: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-xl-auto {
    margin-right: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-xl-0 {
    margin-bottom: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-xl-1 {
    margin-bottom: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-xl-2 {
    margin-bottom: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-xl-3 {
    margin-bottom: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-xl-4 {
    margin-bottom: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-xl-5 {
    margin-bottom: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-xl-auto {
    margin-bottom: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-xl-0 {
    margin-left: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-xl-1 {
    margin-left: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-xl-2 {
    margin-left: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-xl-3 {
    margin-left: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-xl-4 {
    margin-left: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-xl-5 {
    margin-left: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-xl-auto {
    margin-left: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-xl-0 {
    padding: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-xl-1 {
    padding: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-xl-2 {
    padding: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-xl-3 {
    padding: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-xl-4 {
    padding: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-xl-5 {
    padding: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-xl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-xl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-xl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-xl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-xl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-xl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-xl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-xl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-xl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-xl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-xl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-xl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-xl-0 {
    padding-top: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-xl-1 {
    padding-top: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-xl-2 {
    padding-top: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-xl-3 {
    padding-top: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-xl-4 {
    padding-top: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-xl-5 {
    padding-top: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-xl-0 {
    padding-right: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-xl-1 {
    padding-right: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-xl-2 {
    padding-right: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-xl-3 {
    padding-right: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-xl-4 {
    padding-right: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-xl-5 {
    padding-right: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-xl-0 {
    padding-bottom: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-xl-1 {
    padding-bottom: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-xl-2 {
    padding-bottom: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-xl-3 {
    padding-bottom: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-xl-4 {
    padding-bottom: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-xl-5 {
    padding-bottom: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-xl-0 {
    padding-left: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-xl-1 {
    padding-left: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-xl-2 {
    padding-left: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-xl-3 {
    padding-left: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-xl-4 {
    padding-left: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-xl-5 {
    padding-left: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-xl-0 {
    gap: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-xl-1 {
    gap: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-xl-2 {
    gap: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-xl-3 {
    gap: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-xl-4 {
    gap: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-xl-5 {
    gap: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .text-xl-start {
    text-align: left !important;
  }
  .sabpaisa-css-utils-classes-version-five .text-xl-end {
    text-align: right !important;
  }
  .sabpaisa-css-utils-classes-version-five .text-xl-center {
    text-align: center !important;
  }
}
@media (min-width: 1400px) {
  .sabpaisa-css-utils-classes-version-five .float-xxl-start {
    float: left !important;
  }
  .sabpaisa-css-utils-classes-version-five .float-xxl-end {
    float: right !important;
  }
  .sabpaisa-css-utils-classes-version-five .float-xxl-none {
    float: none !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-xxl-inline {
    display: inline !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-xxl-inline-block {
    display: inline-block !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-xxl-block {
    display: block !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-xxl-grid {
    display: grid !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-xxl-table {
    display: table !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-xxl-table-row {
    display: table-row !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-xxl-table-cell {
    display: table-cell !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-xxl-flex {
    display: flex !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-xxl-inline-flex {
    display: inline-flex !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-xxl-none {
    display: none !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-xxl-fill {
    flex: 1 1 auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-xxl-row {
    flex-direction: row !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-xxl-column {
    flex-direction: column !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-xxl-row-reverse {
    flex-direction: row-reverse !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-xxl-column-reverse {
    flex-direction: column-reverse !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-xxl-grow-0 {
    flex-grow: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-xxl-grow-1 {
    flex-grow: 1 !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-xxl-shrink-0 {
    flex-shrink: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-xxl-shrink-1 {
    flex-shrink: 1 !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-xxl-wrap {
    flex-wrap: wrap !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-xxl-nowrap {
    flex-wrap: nowrap !important;
  }
  .sabpaisa-css-utils-classes-version-five .flex-xxl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-xxl-start {
    justify-content: flex-start !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-xxl-end {
    justify-content: flex-end !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-xxl-center {
    justify-content: center !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-xxl-between {
    justify-content: space-between !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-xxl-around {
    justify-content: space-around !important;
  }
  .sabpaisa-css-utils-classes-version-five .justify-content-xxl-evenly {
    justify-content: space-evenly !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-items-xxl-start {
    align-items: flex-start !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-items-xxl-end {
    align-items: flex-end !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-items-xxl-center {
    align-items: center !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-items-xxl-baseline {
    align-items: baseline !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-items-xxl-stretch {
    align-items: stretch !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-xxl-start {
    align-content: flex-start !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-xxl-end {
    align-content: flex-end !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-xxl-center {
    align-content: center !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-xxl-between {
    align-content: space-between !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-xxl-around {
    align-content: space-around !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-content-xxl-stretch {
    align-content: stretch !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-xxl-auto {
    align-self: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-xxl-start {
    align-self: flex-start !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-xxl-end {
    align-self: flex-end !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-xxl-center {
    align-self: center !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-xxl-baseline {
    align-self: baseline !important;
  }
  .sabpaisa-css-utils-classes-version-five .align-self-xxl-stretch {
    align-self: stretch !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-xxl-first {
    order: -1 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-xxl-0 {
    order: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-xxl-1 {
    order: 1 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-xxl-2 {
    order: 2 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-xxl-3 {
    order: 3 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-xxl-4 {
    order: 4 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-xxl-5 {
    order: 5 !important;
  }
  .sabpaisa-css-utils-classes-version-five .order-xxl-last {
    order: 6 !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-xxl-0 {
    margin: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-xxl-1 {
    margin: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-xxl-2 {
    margin: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-xxl-3 {
    margin: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-xxl-4 {
    margin: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-xxl-5 {
    margin: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .m-xxl-auto {
    margin: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-xxl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-xxl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-xxl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-xxl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-xxl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-xxl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mx-xxl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-xxl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-xxl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-xxl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-xxl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-xxl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-xxl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .my-xxl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-xxl-0 {
    margin-top: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-xxl-1 {
    margin-top: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-xxl-2 {
    margin-top: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-xxl-3 {
    margin-top: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-xxl-4 {
    margin-top: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-xxl-5 {
    margin-top: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mt-xxl-auto {
    margin-top: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-xxl-0 {
    margin-right: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-xxl-1 {
    margin-right: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-xxl-2 {
    margin-right: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-xxl-3 {
    margin-right: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-xxl-4 {
    margin-right: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-xxl-5 {
    margin-right: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .me-xxl-auto {
    margin-right: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-xxl-0 {
    margin-bottom: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-xxl-1 {
    margin-bottom: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-xxl-2 {
    margin-bottom: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-xxl-3 {
    margin-bottom: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-xxl-4 {
    margin-bottom: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-xxl-5 {
    margin-bottom: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .mb-xxl-auto {
    margin-bottom: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-xxl-0 {
    margin-left: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-xxl-1 {
    margin-left: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-xxl-2 {
    margin-left: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-xxl-3 {
    margin-left: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-xxl-4 {
    margin-left: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-xxl-5 {
    margin-left: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ms-xxl-auto {
    margin-left: auto !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-xxl-0 {
    padding: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-xxl-1 {
    padding: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-xxl-2 {
    padding: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-xxl-3 {
    padding: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-xxl-4 {
    padding: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .p-xxl-5 {
    padding: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-xxl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-xxl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-xxl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-xxl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-xxl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .px-xxl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-xxl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-xxl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-xxl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-xxl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-xxl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .py-xxl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-xxl-0 {
    padding-top: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-xxl-1 {
    padding-top: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-xxl-2 {
    padding-top: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-xxl-3 {
    padding-top: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-xxl-4 {
    padding-top: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pt-xxl-5 {
    padding-top: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-xxl-0 {
    padding-right: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-xxl-1 {
    padding-right: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-xxl-2 {
    padding-right: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-xxl-3 {
    padding-right: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-xxl-4 {
    padding-right: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pe-xxl-5 {
    padding-right: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-xxl-0 {
    padding-bottom: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-xxl-1 {
    padding-bottom: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-xxl-2 {
    padding-bottom: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-xxl-3 {
    padding-bottom: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-xxl-4 {
    padding-bottom: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .pb-xxl-5 {
    padding-bottom: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-xxl-0 {
    padding-left: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-xxl-1 {
    padding-left: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-xxl-2 {
    padding-left: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-xxl-3 {
    padding-left: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-xxl-4 {
    padding-left: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .ps-xxl-5 {
    padding-left: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-xxl-0 {
    gap: 0 !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-xxl-1 {
    gap: 0.25rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-xxl-2 {
    gap: 0.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-xxl-3 {
    gap: 1rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-xxl-4 {
    gap: 1.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .gap-xxl-5 {
    gap: 3rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .text-xxl-start {
    text-align: left !important;
  }
  .sabpaisa-css-utils-classes-version-five .text-xxl-end {
    text-align: right !important;
  }
  .sabpaisa-css-utils-classes-version-five .text-xxl-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .sabpaisa-css-utils-classes-version-five .fs-1 {
    font-size: 2.5rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .fs-2 {
    font-size: 2rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .fs-3 {
    font-size: 1.75rem !important;
  }
  .sabpaisa-css-utils-classes-version-five .fs-4 {
    font-size: 1.5rem !important;
  }
}
@media print {
  .sabpaisa-css-utils-classes-version-five .d-print-inline {
    display: inline !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-print-inline-block {
    display: inline-block !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-print-block {
    display: block !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-print-grid {
    display: grid !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-print-table {
    display: table !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-print-table-row {
    display: table-row !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-print-table-cell {
    display: table-cell !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-print-flex {
    display: flex !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-print-inline-flex {
    display: inline-flex !important;
  }
  .sabpaisa-css-utils-classes-version-five .d-print-none {
    display: none !important;
  }
}
`;
styleInject(css_248z$1);
var css_248z = `@font-face {
  font-family: "Satoshi-Light";
  src: url("./assets/fonts/Satoshi-Light.woff2") format("woff2"), url("./assets/fonts/Satoshi-Light.woff") format("woff");
  font-weight: 300;
  font-display: swap;
  font-style: normal;
}

@font-face {
  font-family: "Satoshi-Regular";
  src: url("./assets/fonts/Satoshi-Regular.woff2") format("woff2"), url("./assets/fonts/Satoshi-Regular.woff") format("woff");
  font-weight: 400;
  font-display: swap;
  font-style: normal;
}

@font-face {
  font-family: "Satoshi-Medium";
  src: url("./assets/fonts/Satoshi-Medium.woff2") format("woff2"), url("./assets/fonts/Satoshi-Medium.woff") format("woff");
  font-weight: 500;
  font-display: swap;
  font-style: normal;
}

@font-face {
  font-family: "Satoshi-Bold";
  src: url("./assets/fonts/Satoshi-Bold.woff2") format("woff2"), url("./assets/fonts/Satoshi-Bold.woff") format("woff");
  font-weight: 700;
  font-display: swap;
  font-style: normal;
}

#pg-sdk #overlay {
  display: block;
  content: "";
  position: absolute;
  /* -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px); */
  top: 0;
  left: 0;
  z-index: -1;
  /* overflow: scroll; */
}

#pg-sdk #overlay::-webkit-scrollbar {
  width: 0px;
  height: auto;
  background: transparent;
}

#pg-sdk #sdkPopup {
  overflow: auto;
  max-height: 98vh !important;
  border-radius: 10px;
  background: #EDF2F7;
  font-family: "Satoshi-Regular", sans-serif;
  height: auto;
  min-height: 675px;
  width: 430px;
  box-shadow: 0px 0px 25px #aaa;
  /* min-height: 700px; */
  position: relative;
  top: 0px;
  left: calc((100% - 420px) / 2);
  z-index: 111111111;
  /* The switch - the box around the slider */
  /* Hide default HTML checkbox */
  /* The slider */
  /* Rounded sliders */
}

::-webkit-scrollbar {
  width: 0px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #EDF2F7;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {

  background: #555;
}

#sdkPopup h1,
#sdkPopup h2,
#sdkPopup h3,
#sdkPopup h4,
#sdkPopup h5,
#sdkPopup h6,
#sdkPopup p,
#sdkPopup ul,
#sdkPopup ol,
#sdkPopup li,
#sdkPopup input,
#sdkPopup select,
#sdkPopup button {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  font-family: "Satoshi-Regular", sans-serif;
}

#sdkPopup a {
  text-decoration: none;
  color: #1D1C1D;
}

#sdkPopup input:focus,
#sdkPopup input:hover,
#sdkPopup select:focus,
#sdkPopup select:hover {
  outline: none;
  border: none;
}

#sdkPopup .text-white {
  color: #fff;
}

#sdkPopup .text-dark {
  color: #1D1C1D !important;
}

#sdkPopup .text-blue {
  color: #0055B1;
}

#sdkPopup .text-center {
  text-align: center;
}

#sdkPopup .text-small {
  font-size: 0.8rem;
}

#sdkPopup .text-bold {
  font-family: "Satoshi-Bold", sans-serif;
  font-weight: 700;
}

#sdkPopup .text-medium {
  font-family: "Satoshi-Medium", sans-serif;
  font-weight: 600;
}

#sdkPopup .text-black {
  color: #000000;
}

#sdkPopup .text-secondary {
  color: #0055B1;
}

#sdkPopup .warning-text {
  color: #ff0000;
}

#sdkPopup .thin {
  font-family: "Satoshi-Regular", sans-serif;
  font-weight: normal;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 119%;
}

#sdkPopup .textBeforeSection {
  font-size: 0.9rem;
  font-weight: 500;
  margin-left: 10px;
  color: #000;
}

#sdkPopup .flex {
  display: flex;
  align-items: center;
}

#sdkPopup .flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

#sdkPopup .flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#sdkPopup .flex-between .half-input {
  max-width: 185px !important;
}

#sdkPopup .flex-column-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}

#sdkPopup .align-right {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
}

#sdkPopup .inline-image {
  display: inline-block;
}

#sdkPopup .primaryButton {
  padding: 15px 0px;
  background: #1A68CD;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  border-radius: 30px;
  letter-spacing: 0.05rem;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.05em;
  color: #FFFFFF;
}

#sdkPopup .primaryButton:hover {
  transform: scale(0.9);
  transition: 0.5s ease;
  box-shadow: 5px 5px 20px rgba(0, 85, 177, 0.6784313725);
}

#sdkPopup .squareButton {
  padding: 12px 0px;
  background: #1A68CD;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  letter-spacing: 0.05rem;
}

#sdkPopup .squareButton:hover {
  transform: scale(0.9);
  transition: 0.5s ease;
  box-shadow: 5px 5px 20px rgba(0, 85, 177, 0.6784313725);
}

#sdkPopup .inputButton {
  position: absolute;
  right: 11px;
  padding: 11px 24px;
  background: #1A68CD;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  max-width: -webkit-fit-content;
  max-width: -moz-fit-content;
  max-width: fit-content;
  letter-spacing: 0.05rem;
  border: 1px solid #1A68CD;
  border-radius: 0px 7px 7px 0px;
}

#sdkPopup .inputButton:hover {
  transition: 0.5s ease;
  box-shadow: 5px 5px 20px rgba(0, 85, 177, 0.6784313725);
}

#sdkPopup .btnGroup {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 40px auto 20px auto;
}

#sdkPopup .btnGroup .btn {
  color: #fff !important;
  padding: 10px 35px;
  border-radius: 30px;
  font-weight: 600;
}

#sdkPopup .btnGroup .btnPrimary {
  background: #1A68CD;
}

#sdkPopup .btnGroup .btnNeutral {
  background: #EBEAEB;
}

#sdkPopup .errorInput {
  color: #ff0000;
  border: 1px solid #ff0000;
}

#sdkPopup .successInput {
  color: #4BB543;
  border: 1px solid #4BB543;
}

#sdkPopup .input-underline {
  border-bottom: 1px solid #696969;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

#sdkPopup .input-underline input {
  width: 100%;
  background: transparent;
}

#sdkPopup .switch {
  position: relative;
  display: block;
  width: 40px;
  height: 22px;
  margin-right: 10px;
}

#sdkPopup .switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

#sdkPopup .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
}

#sdkPopup .slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 2px;
  bottom: 1.5px;
  background: linear-gradient(270.55deg, #4285F8 -14.11%, #0055B1 95.84%);
  transition: 0.4s;
}

#sdkPopup input:checked+.slider {
  /* background: linear-gradient(270.55deg, #4285F8 -14.11%, #0055B1 95.84%); */
  /* border-radius: 34px;
  border: solid 3px transparent;
  background-image: linear-gradient(270.55deg, #4285F8 -14.11%, #0055B1 95.84%), linear-gradient(101deg, #4285F8, #0055B1);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 100px 1px #fff inset; */
  border-radius: 34px;
  border: solid 3px #0055B1;
  background: #fff;
}

#sdkPopup input:focus+.slider {
  box-shadow: 0 0 1px #2196F3;
}

#sdkPopup input:checked+.slider:before {
  background: linear-gradient(270.55deg, #4285F8 -14.11%, #0055B1 95.84%);
  transform: translateX(17px);
}

#sdkPopup .slider.round {
  border-radius: 34px;
  border: solid 3px #0055B1;
  background: #fff;
  /* background-image: linear-gradient(270.55deg, #4285F8 -14.11%, #0055B1 95.84%), linear-gradient(101deg, #4285F8, #0055B1);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 100px 1px #fff inset; */
}

#sdkPopup .slider.round:before {
  border-radius: 50%;
}

#sdkPopup .customRadio {
  margin-top: -10px;
  /* Hide the browser's default radio button */
  /* Create a custom radio button */
  /* On mouse-over, add a grey background color */
  /* When the radio button is checked, add a blue background */
  /* Create the indicator (the dot/circle - hidden when not checked) */
  /* Show the indicator (dot/circle) when checked */
  /* Style the indicator (dot/circle) */
}

#sdkPopup .customRadio .container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

#sdkPopup .customRadio .container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

#sdkPopup .customRadio .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 21px;
  width: 21px;
  background-color: #f5f5f5;
  border: 1px solid #696969;
  border-radius: 50%;
}

#sdkPopup .customRadio .container:hover input~.checkmark {
  background-color: #f5f5f5;
}

#sdkPopup .customRadio .container input:checked~.checkmark {
  background-color: #1A68CD;
  border: 1px solid #fff;
}

#sdkPopup .customRadio .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

#sdkPopup .customRadio .container input:checked~.checkmark:after {
  display: block;
}

#sdkPopup .customRadio .container .checkmark:after {
  top: 5px;
  left: 5px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: white;
}

#sdkPopup .popupHeader {
  padding: 20px 10px;
  width: 100%;
  text-align: center;
  background: #0055B1;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

#sdkPopup .popupHeader img {
  width: 14px;
  /* width: 59px; */
  height: 18px;
  margin-right: 6px;
}

#sdkPopup .popupHeader span {
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 119%;
  margin-bottom: -2.1px;
}

#sdkPopup .radio {
  margin-top: -30px;
}

#sdkPopup .radio [type=radio]:checked,
#sdkPopup .radio [type=radio]:not(:checked) {
  position: absolute;
  left: -9999px;
}

#sdkPopup .radio [type=radio]:checked+label,
#sdkPopup .radio [type=radio]:not(:checked)+label {
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  line-height: 20px;
  display: inline-block;
  color: #666;
}

#sdkPopup .radio [type=radio]:checked+label:before,
#sdkPopup .radio [type=radio]:not(:checked)+label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 18px;
  height: 18px;
  border: 1px solid #ddd;
  border-radius: 100%;
  background: #fff;
}

#sdkPopup .radio [type=radio]:checked+label:after,
#sdkPopup .radio [type=radio]:not(:checked)+label:after {
  content: "";
  width: 12px;
  height: 12px;
  background: #4BB543;
  position: absolute;
  top: 4px;
  left: 4px;
  border-radius: 100%;
  transition: all 0.2s ease;
}

#sdkPopup .radio [type=radio]:not(:checked)+label:after {
  opacity: 0;
  transform: scale(0);
}

#sdkPopup .radio [type=radio]:checked+label:after {
  opacity: 1;
  transform: scale(1);
}

#sdkPopup .banklogo {
  margin-right: 10px;
}

#sdkPopup .bankname {
  font-size: 0.9rem;
  font-weight: 500;
}

#sdkPopup .popupBody {
  padding: 17px 10px 0px 12px;
  /* min-height: 600px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#sdkPopup .popupBody .sectionHeading-large {
  font-size: 24px;
  font-weight: 600;
  margin-top: 0.5rem;
  margin-bottom: 8px;
}

#sdkPopup .popupBody .clippedCard {
  padding: 20px;
  /* margin-top: 10px; */
  background: linear-gradient(270deg, #4285F8 9.98%, #0055B1 96.75%);
  border-radius: 10px;
  position: relative;
}

#sdkPopup .popupBody .clippedCard::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  top: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  border: 5px solid transparent;
  border-top-color: #EDF2F7;
  border-right-color: #EDF2F7;
  border-radius: 100%;
  pointer-events: none;
  left: 0px;
  background: #EDF2F7;
}

#sdkPopup .popupBody .clippedCard::after {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  top: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  border: 5px solid transparent;
  border-top-color: #EDF2F7;
  border-right-color: #EDF2F7;
  border-radius: 100%;
  pointer-events: none;
  right: -15px;
  background: #EDF2F7;
}

#sdkPopup .popupBody .clippedCard .profileSection {
  display: flex;
}

#sdkPopup .popupBody .clippedCard .profileSection .profilePicture {
  height: auto;
  text-align: center;
  margin-bottom: 10px;
  max-width: 47px;
}

#sdkPopup .popupBody .clippedCard .profileSection .beneficiaryName {
  /* text-align: center; */
  font-size: 20px;
  font-weight: 700;
  text-transform: capitalize;
  line-height: 24.8px;
  margin-left: 24px;
}

#sdkPopup .popupBody .clippedCard .metaSection .partnerName {
  margin-bottom: 0.3rem;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 124%;
}

#pg-sdk .border-right {
  border-right: 1px solid #dee2e6 !important;
}

.clientDetails .border-right h3 {
  margin-bottom: 0.3rem;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 124%;
}

#sdkPopup .popupBody .clippedCard .metaSection {
  margin-left: 24px;
}

#sdkPopup .popupBody .clippedCard .metaSection p {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.6px;
}

#sdkPopup .popupBody .clippedCard .metaSection h3 {
  font-size: 24px !important;
  letter-spacing: 0.6px;
  font-weight: 700;
  margin-top: 18px !important;
}

#sdkPopup .popupBody .clippedCard .metaSection strong {
  font-weight: 600;
}

#sdkPopup .popupBody .clippedCard .metaSection .amount {
  margin-top: 0.8rem;
  font-size: 1.4rem;
}

#sdkPopup .popupBody .clippedCard .metaSection .amount img {
  height: 1.2rem;
  margin-right: 0.4rem;
}

#sdkPopup .popupBody .clippedCard .clientDetails {
  border-bottom: 1px dashed #fff;
  border-top: 1px dashed #fff;
  /* border-bottom: 1px dashed #fff; */
  margin-left: 0px;
  margin-right: 0px;
  padding: 6px 0px;
}


#sdkPopup .popupBody .clippedCard .clientDetails .client {
  padding: 5px 15px 5px 0px;
  width: 100%;
}

#sdkPopup .popupBody .clippedCard .clientDetails .client .partnerName {
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  line-height: 1.8rem;
}

#sdkPopup .popupBody .clippedCard .clientDetails .client h3.thin {
  font-size: 1.2rem;
  margin-bottom: .5rem;
}

#sdkPopup .popupBody .clippedCard .clientDetails .client #clientName {
  font-size: 24px !important;
  font-weight: 600;
  letter-spacing: 0.8px;
}

#sdkPopup .popupBody .clippedCard .clientDetails .clientInfo {
  padding: 5px 0px 5px 15px;
  /* width: 100%; */
}

#sdkPopup .popupBody .clippedCard .clientDetails .clientInfo .field {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 0px;
}

#sdkPopup .popupBody .clippedCard .clientDetails .clientInfo .field .parameter,
#sdkPopup .popupBody .clippedCard .clientDetails .clientInfo .field .value {
  font-weight: 700;
  font-size: 12px;
  line-height: 99.9%;
  letter-spacing: 0.06em;
  color: #FFFFFF;
}

#sdkPopup .popupBody .clippedCard .clientDetails .clientInfo .field .value {
  letter-spacing: 0px;
}

#sdkPopup .popupBody .clippedCard .clientDetails .clientInfo .field {
  margin-bottom: 17px;
}

#sdkPopup .popupBody .clippedCard .clientDetails .clientInfo .field:nth-child(2) {
  margin-bottom: 0;
}


#sdkPopup .popupBody .clippedCard .clientDetails .clientInfo .field .value img {
  letter-spacing: 0px;
  padding-right: 8px;

}


#sdkPopup .popupBody .clippedCard .amountDetails .dataTable {
  width: 100%;
  margin-top: 10px;
  border-bottom: 1px dashed #EBEAEB;
  padding-bottom: 8px
}

#sdkPopup .popupBody .clippedCard .amountDetails .dataTable .field {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 0px;
}

#sdkPopup .popupBody .clippedCard .amountDetails .dataTable .field .parameter,
#sdkPopup .popupBody .clippedCard .amountDetails .dataTable .field .value {
  color: #fff;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
}

#sdkPopup .popupBody .clippedCard .amountDetails .dataTable .field .value {
  letter-spacing: 1px;
}

#sdkPopup .popupBody .clippedCard .totalRow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 18px;
}

#sdkPopup .popupBody .clippedCard .totalRow p {
  font-weight: 700;
  font-size: 18px;
  color: #FFFFFF;
}

#sdkPopup .popupBody .buttonWrapper {
  width: 100%;
  height: 60px;
}

#sdkPopup .popupBody .buttonWrapper .changeMode {
  padding: 8px 24px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  background: #4285F8;
  float: right;
  margin: 20px 10px;
}

#sdkPopup .popupBody .buttonWrapper .changeMode img {
  margin-right: 10px;
}

#sdkPopup .popupBody .buttonWrapper .changeMode span {
  color: #fff;
}

#sdkPopup .popupBody .activity .form .form-header {
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#sdkPopup .popupBody .activity .form .form-header .form-heading {
  font-size: 24px;
  font-weight: 700;
  font-family: "Satoshi-Bold", sans-serif;
  /* margin: 0px auto; */
}


#sdkPopup .popupBody .activity .form .form-header .expandIcon {
  height: 10px;
  margin-right: 5px;
  transform: rotate(180deg);
  cursor: pointer;
}

#sdkPopup .popupBody .activity label {
  font-weight: 700;
  font-size: 15px;
  line-height: 20.25px;
  color: #1D1C1D;
  margin-bottom: 8px;
}

#sdkPopup .form-collapsible-client {
  display: none;
  visibility: hidden;
  font-family: "Satoshi-Medium", sans-serif;
}

#sdkPopup .form-collapsible.showForm {
  display: block;
  visibility: visible;
}

#sdkPopup .popupBody .activity .form .form-header .expandIcon.down {
  transform: rotate(-0deg) !important;
}

#sdkPopup .popupBody .activity .input {
  /* margin-top: 0.4rem; */
  margin-bottom: 0.4rem;
  border: 1px solid #1D1C1D;
  border-radius: 8px;
  background: #fff;
  padding: 15px 20px;
  max-height: 50px;
  height: 58px;
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 406px;
}

#pg-sdk .paddingForm .select__control {
  margin-top: 0.4rem;
  margin-bottom: 1rem;
  border: 1px solid #1D1C1D;
  border-radius: 8px;
  background: #fff;
  padding: 5px 20px;
  max-height: 50px;
  display: flex;
  align-items: center;
  flex-direction: row;
}



#sdkPopup .popupBody .activity .input:focus {
  border: 1px solid #1A68CD;
  flex-direction: row-reverse;
  transition: flex-direction 0.6s ease-in;
}

#sdkPopup .popupBody .activity .input .active {
  border: 1px solid #0055B1;
}

#sdkPopup .popupBody .activity .input img.inputIcon {
  height: 15px !important;
  padding-right: 14px;
}

#sdkPopup .popupBody .activity .input input {
  font-size: 1rem;
  letter-spacing: 0.05rem;
  font-family: "Satoshi-Regular", sans-serif;
  width: 100%;
  margin-left: 15px;
  height: 42px;
  padding-left: 10px;
  margin-right: -17px;
  border-radius: 0px 7px 7px 0px;
}

#sdkPopup .popupBody .activity .input input:focus {
  outline: none;
  flex-direction: row-reverse;
  transition: flex-direction 0.6s ease-in;
}

#sdkPopup .popupBody .activity .leftInput input {
  height: 40px;
  margin-left: -16px;
  margin-right: 20px;
  padding: 10px;
  border-radius: 3px;
}

#sdkPopup .popupBody .activity select {
  padding: 12px 24px;
  border: 1px solid #696969;
  font-family: "Satoshi-Regular", sans-serif;
  width: 100%;
}

#sdkPopup .popupBody .activity .field-bordered {
  border: 1px solid #696969;
  padding: 12px 15px;
  margin-bottom: 20px;
  border-radius: 6px;
}

#sdkPopup .popupBody .activity .savedCard {
  display: flex;
  align-items: center;
  position: relative;
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #696969;
  margin: 10px 0px;
}

#sdkPopup .popupBody .activity .savedCard .cardInfo .text-dark {
  font-size: 0.9rem;
  line-height: 1.2rem;
}

#sdkPopup .popupBody .activity .savedCard .cardInfo .cvv {
  background: #D9D9D9;
  padding: 12px 16px;
  border: 1px solid #696969;
  font-family: "Satoshi-Medium", sans-serif;
  font-size: 0.9rem;
  border-radius: 0px;
  max-width: 100px;
  color: #000000;
  margin: 1rem 0;
}

#sdkPopup .popupBody .activity .savedCard .delete {
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
}

#sdkPopup .popupBody .paymentInProgress h2 {
  margin-top: 4rem;
  margin-bottom: 0.5rem;
}

#sdkPopup .popupBody .paymentInProgress p {
  margin-bottom: 2rem;
}

#sdkPopup .popupBody .paymentInProgress .timer {
  padding: 9px 18px;
  border-radius: 9px;
  background: #ff5523;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  margin: 1rem auto;
  font-weight: 600;
  color: #fff;
}

#sdkPopup .popupBody .paymentInProgress .timer img {
  margin-right: 10px;
}

#sdkPopup .popupBody .paymentInProgress .timer span {
  padding: 0px 2px;
}

#sdkPopup .popupBody .methods .payMethods {
  width: -webkit-max-content;
  width: -moz-max-content;
  width: 95%;
  justify-content: space-between;
  margin: 20px auto;
  padding: 10px 0px 20px 0px;
  padding-top: 0px;
  border-bottom: 1px solid #EBEAEB;
  /* overflow-x: scroll;
  height: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between; */
}

#sdkPopup .popupBody .methods .payMethods::-webkit-scrollbar {
  height: 2px;
}

#sdkPopup .popupBody .methods .payMethods::-webkit-scrollbar-track {
  background: #eee;
  /* border-radius: 1px; */
}

#sdkPopup .popupBody .methods .payMethods::-webkit-scrollbar-thumb {
  background: #1A68CD;
}

#sdkPopup .popupBody .methods .payMethods::-webkit-scrollbar-thumb:hover {
  background: #2196F3;
}

@-webkit-keyframes internal {
  0% {
    stroke-dashoffset: 187;
  }

  25% {
    stroke-dashoffset: 80;
  }

  100% {
    stroke-dashoffset: 187;
    transform: rotate(360deg);
  }
}

@keyframes internal {
  0% {
    stroke-dashoffset: 187;
  }

  25% {
    stroke-dashoffset: 80;
  }

  100% {
    stroke-dashoffset: 187;
    transform: rotate(360deg);
  }
}

@-webkit-keyframes external {
  0% {
    stroke-dashoffset: 312;
    transform: rotate(70deg);
  }

  60% {
    stroke-dashoffset: -312;
  }

  100% {
    stroke-dashoffset: -312;
    transform: rotate(450deg);
  }
}

@keyframes external {
  0% {
    stroke-dashoffset: 312;
    transform: rotate(70deg);
  }

  60% {
    stroke-dashoffset: -312;
  }

  100% {
    stroke-dashoffset: -312;
    transform: rotate(450deg);
  }
}

@-webkit-keyframes bgcolors {
  0% {
    background: #1a87c5;
  }

  25% {
    background: #c51a3a;
  }

  50% {
    background: #e6d121;
  }

  75% {
    background: #22cf76;
  }

  100% {
    background: #1a87c5;
  }
}

@keyframes bgcolors {
  0% {
    background: #1a87c5;
  }

  25% {
    background: #c51a3a;
  }

  50% {
    background: #e6d121;
  }

  75% {
    background: #22cf76;
  }

  100% {
    background: #1a87c5;
  }
}

#sdkPopup #overlayContent {
  position: absolute;
  z-index: 111111111;
  top: 80px;
}

#sdkPopup #overlayContent::before {
  display: block;
  content: "";
  position: absolute;
  height: 1500px;
  width: 104%;
  background: rgba(0, 0, 0, 0.7);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border: none;
  top: -60%;
  left: 0;
  z-index: -1;
  overflow: scroll;
}

#pg-sdk .credit-card__header {
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: auto auto;
  /* border: 1px solid rgba(27, 42, 59, 0.1); */
}

#pg-sdk .credit-card__header span {
  padding: 10px 0;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease-in;
  border: 1px solid rgba(27, 42, 59, 0.1);

  /* border-bottom: 3px solid transparent !important; */
  /* border: 1px solid rgba(27, 42, 59, 0.1); */
}

#pg-sdk .credit-card__header .border-bottom {
  border-bottom: 5px solid rgb(78, 224, 78) !important;
}

#sdkPopup #overlayContent::before::-webkit-scrollbar {
  width: 1px;
  height: auto;
  background: transparent;
}

#sdkPopup #greenLoader {
  border: 8px solid transparent;
  /* Light grey */
  border-top: 8px solid #4BB543;
  /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  margin: 80px auto;
}

@-webkit-keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

#pg-sdk .popupOverlay::-webkit-scrollbar {
  width: 1px;
  height: auto;
  background: transparent;
}

#pg-sdk .modal-content {
  border: none !important;
}

#pg-sdk a {
  cursor: pointer;
}

#pg-sdk .cursor-pointer {
  cursor: pointer;
}

#pg-sdk .modal-dialog {
  margin-top: 0px !important;
}

#pg-sdk .modal-body {
  /* padding-top: 8px !important; */
}


#sdkPopup .popupBody .credits .flex-center p {
  color: #1D1C1D;
  font-weight: 500;
  font-size: 12px;
  margin-left: 10px;
}

#sdkPopup .popupBody .credits p.text-center {
  font-size: 14px;
}

#sdkPopup .popupBody .credits p.text-center a {
  font-weight: 600;
}

#sdkPopup .popupBody .credits .partners {
  margin-bottom: 20px;
}

#sdkPopup .popupBody .credits .partners img {
  -o-object-fit: contain;
  object-fit: contain;
  margin-top: 10px;
}

#sdkPopup .popupBody .credits .clientlogo {
  margin: 1rem .25rem;
}

#pg-sdk .partner-logo {
  margin-left: 40px;
}

#pg-sdk .close {
  position: absolute;
  right: 14px;
  top: 21px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
}

#pg-sdk .close:hover {
  opacity: 1;
}

#pg-sdk .close:before,
#pg-sdk .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 14px;
  width: 2px;
  background-color: #333;
}

#pg-sdk .close:before {
  transform: rotate(45deg);
}

#pg-sdk .close:after {
  transform: rotate(-45deg);
}

#pg-sdk .mt-16 {
  margin-top: 16px;
}`;
styleInject(css_248z);
var devUrl = "https://secure.sabpaisa.in/SabPaisa/sabPaisaInit?v=1";
var stagUrl = "https://stage-securepay.sabpaisa.in/SabPaisa/sabPaisaInit?v=1";
var prodUrl = "https://securepay.sabpaisa.in/SabPaisa/sabPaisaInit?v=1";
var s3Url = "https://icon.sabpaisa.in/sabpaisa/checkout/";
var _nodeResolve_empty = {};
var _nodeResolve_empty$1 = Object.freeze({
  __proto__: null,
  "default": _nodeResolve_empty
});
var require$$0 = getAugmentedNamespace(_nodeResolve_empty$1);
var core = createCommonjsModule(function(module, exports) {
  (function(root, factory) {
    {
      module.exports = factory();
    }
  })(commonjsGlobal, function() {
    var CryptoJS = CryptoJS || function(Math2, undefined$1) {
      var crypto;
      if (typeof window !== "undefined" && window.crypto) {
        crypto = window.crypto;
      }
      if (typeof self !== "undefined" && self.crypto) {
        crypto = self.crypto;
      }
      if (typeof globalThis !== "undefined" && globalThis.crypto) {
        crypto = globalThis.crypto;
      }
      if (!crypto && typeof window !== "undefined" && window.msCrypto) {
        crypto = window.msCrypto;
      }
      if (!crypto && typeof commonjsGlobal !== "undefined" && commonjsGlobal.crypto) {
        crypto = commonjsGlobal.crypto;
      }
      if (!crypto && typeof commonjsRequire === "function") {
        try {
          crypto = require$$0;
        } catch (err) {
        }
      }
      var cryptoSecureRandomInt = function() {
        if (crypto) {
          if (typeof crypto.getRandomValues === "function") {
            try {
              return crypto.getRandomValues(new Uint32Array(1))[0];
            } catch (err) {
            }
          }
          if (typeof crypto.randomBytes === "function") {
            try {
              return crypto.randomBytes(4).readInt32LE();
            } catch (err) {
            }
          }
        }
        throw new Error("Native crypto module could not be used to get secure random number.");
      };
      var create = Object.create || /* @__PURE__ */ function() {
        function F() {
        }
        return function(obj) {
          var subtype;
          F.prototype = obj;
          subtype = new F();
          F.prototype = null;
          return subtype;
        };
      }();
      var C = {};
      var C_lib = C.lib = {};
      var Base = C_lib.Base = /* @__PURE__ */ function() {
        return {
          /**
           * Creates a new object that inherits from this object.
           *
           * @param {Object} overrides Properties to copy into the new object.
           *
           * @return {Object} The new object.
           *
           * @static
           *
           * @example
           *
           *     var MyType = CryptoJS.lib.Base.extend({
           *         field: 'value',
           *
           *         method: function () {
           *         }
           *     });
           */
          extend: function(overrides) {
            var subtype = create(this);
            if (overrides) {
              subtype.mixIn(overrides);
            }
            if (!subtype.hasOwnProperty("init") || this.init === subtype.init) {
              subtype.init = function() {
                subtype.$super.init.apply(this, arguments);
              };
            }
            subtype.init.prototype = subtype;
            subtype.$super = this;
            return subtype;
          },
          /**
           * Extends this object and runs the init method.
           * Arguments to create() will be passed to init().
           *
           * @return {Object} The new object.
           *
           * @static
           *
           * @example
           *
           *     var instance = MyType.create();
           */
          create: function() {
            var instance = this.extend();
            instance.init.apply(instance, arguments);
            return instance;
          },
          /**
           * Initializes a newly created object.
           * Override this method to add some logic when your objects are created.
           *
           * @example
           *
           *     var MyType = CryptoJS.lib.Base.extend({
           *         init: function () {
           *             // ...
           *         }
           *     });
           */
          init: function() {
          },
          /**
           * Copies properties into this object.
           *
           * @param {Object} properties The properties to mix in.
           *
           * @example
           *
           *     MyType.mixIn({
           *         field: 'value'
           *     });
           */
          mixIn: function(properties) {
            for (var propertyName in properties) {
              if (properties.hasOwnProperty(propertyName)) {
                this[propertyName] = properties[propertyName];
              }
            }
            if (properties.hasOwnProperty("toString")) {
              this.toString = properties.toString;
            }
          },
          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = instance.clone();
           */
          clone: function() {
            return this.init.prototype.extend(this);
          }
        };
      }();
      var WordArray = C_lib.WordArray = Base.extend({
        /**
         * Initializes a newly created word array.
         *
         * @param {Array} words (Optional) An array of 32-bit words.
         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
         *
         * @example
         *
         *     var wordArray = CryptoJS.lib.WordArray.create();
         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
         */
        init: function(words, sigBytes) {
          words = this.words = words || [];
          if (sigBytes != undefined$1) {
            this.sigBytes = sigBytes;
          } else {
            this.sigBytes = words.length * 4;
          }
        },
        /**
         * Converts this word array to a string.
         *
         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
         *
         * @return {string} The stringified word array.
         *
         * @example
         *
         *     var string = wordArray + '';
         *     var string = wordArray.toString();
         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
         */
        toString: function(encoder) {
          return (encoder || Hex).stringify(this);
        },
        /**
         * Concatenates a word array to this word array.
         *
         * @param {WordArray} wordArray The word array to append.
         *
         * @return {WordArray} This word array.
         *
         * @example
         *
         *     wordArray1.concat(wordArray2);
         */
        concat: function(wordArray) {
          var thisWords = this.words;
          var thatWords = wordArray.words;
          var thisSigBytes = this.sigBytes;
          var thatSigBytes = wordArray.sigBytes;
          this.clamp();
          if (thisSigBytes % 4) {
            for (var i = 0; i < thatSigBytes; i++) {
              var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
            }
          } else {
            for (var j = 0; j < thatSigBytes; j += 4) {
              thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
            }
          }
          this.sigBytes += thatSigBytes;
          return this;
        },
        /**
         * Removes insignificant bits.
         *
         * @example
         *
         *     wordArray.clamp();
         */
        clamp: function() {
          var words = this.words;
          var sigBytes = this.sigBytes;
          words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
          words.length = Math2.ceil(sigBytes / 4);
        },
        /**
         * Creates a copy of this word array.
         *
         * @return {WordArray} The clone.
         *
         * @example
         *
         *     var clone = wordArray.clone();
         */
        clone: function() {
          var clone = Base.clone.call(this);
          clone.words = this.words.slice(0);
          return clone;
        },
        /**
         * Creates a word array filled with random bytes.
         *
         * @param {number} nBytes The number of random bytes to generate.
         *
         * @return {WordArray} The random word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.lib.WordArray.random(16);
         */
        random: function(nBytes) {
          var words = [];
          for (var i = 0; i < nBytes; i += 4) {
            words.push(cryptoSecureRandomInt());
          }
          return new WordArray.init(words, nBytes);
        }
      });
      var C_enc = C.enc = {};
      var Hex = C_enc.Hex = {
        /**
         * Converts a word array to a hex string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The hex string.
         *
         * @static
         *
         * @example
         *
         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
         */
        stringify: function(wordArray) {
          var words = wordArray.words;
          var sigBytes = wordArray.sigBytes;
          var hexChars = [];
          for (var i = 0; i < sigBytes; i++) {
            var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
            hexChars.push((bite >>> 4).toString(16));
            hexChars.push((bite & 15).toString(16));
          }
          return hexChars.join("");
        },
        /**
         * Converts a hex string to a word array.
         *
         * @param {string} hexStr The hex string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
         */
        parse: function(hexStr) {
          var hexStrLength = hexStr.length;
          var words = [];
          for (var i = 0; i < hexStrLength; i += 2) {
            words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
          }
          return new WordArray.init(words, hexStrLength / 2);
        }
      };
      var Latin1 = C_enc.Latin1 = {
        /**
         * Converts a word array to a Latin1 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The Latin1 string.
         *
         * @static
         *
         * @example
         *
         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
         */
        stringify: function(wordArray) {
          var words = wordArray.words;
          var sigBytes = wordArray.sigBytes;
          var latin1Chars = [];
          for (var i = 0; i < sigBytes; i++) {
            var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
            latin1Chars.push(String.fromCharCode(bite));
          }
          return latin1Chars.join("");
        },
        /**
         * Converts a Latin1 string to a word array.
         *
         * @param {string} latin1Str The Latin1 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
         */
        parse: function(latin1Str) {
          var latin1StrLength = latin1Str.length;
          var words = [];
          for (var i = 0; i < latin1StrLength; i++) {
            words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
          }
          return new WordArray.init(words, latin1StrLength);
        }
      };
      var Utf8 = C_enc.Utf8 = {
        /**
         * Converts a word array to a UTF-8 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The UTF-8 string.
         *
         * @static
         *
         * @example
         *
         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
         */
        stringify: function(wordArray) {
          try {
            return decodeURIComponent(escape(Latin1.stringify(wordArray)));
          } catch (e2) {
            throw new Error("Malformed UTF-8 data");
          }
        },
        /**
         * Converts a UTF-8 string to a word array.
         *
         * @param {string} utf8Str The UTF-8 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
         */
        parse: function(utf8Str) {
          return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
        }
      };
      var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
        /**
         * Resets this block algorithm's data buffer to its initial state.
         *
         * @example
         *
         *     bufferedBlockAlgorithm.reset();
         */
        reset: function() {
          this._data = new WordArray.init();
          this._nDataBytes = 0;
        },
        /**
         * Adds new data to this block algorithm's buffer.
         *
         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
         *
         * @example
         *
         *     bufferedBlockAlgorithm._append('data');
         *     bufferedBlockAlgorithm._append(wordArray);
         */
        _append: function(data) {
          if (typeof data == "string") {
            data = Utf8.parse(data);
          }
          this._data.concat(data);
          this._nDataBytes += data.sigBytes;
        },
        /**
         * Processes available data blocks.
         *
         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
         *
         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
         *
         * @return {WordArray} The processed data.
         *
         * @example
         *
         *     var processedData = bufferedBlockAlgorithm._process();
         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
         */
        _process: function(doFlush) {
          var processedWords;
          var data = this._data;
          var dataWords = data.words;
          var dataSigBytes = data.sigBytes;
          var blockSize = this.blockSize;
          var blockSizeBytes = blockSize * 4;
          var nBlocksReady = dataSigBytes / blockSizeBytes;
          if (doFlush) {
            nBlocksReady = Math2.ceil(nBlocksReady);
          } else {
            nBlocksReady = Math2.max((nBlocksReady | 0) - this._minBufferSize, 0);
          }
          var nWordsReady = nBlocksReady * blockSize;
          var nBytesReady = Math2.min(nWordsReady * 4, dataSigBytes);
          if (nWordsReady) {
            for (var offset2 = 0; offset2 < nWordsReady; offset2 += blockSize) {
              this._doProcessBlock(dataWords, offset2);
            }
            processedWords = dataWords.splice(0, nWordsReady);
            data.sigBytes -= nBytesReady;
          }
          return new WordArray.init(processedWords, nBytesReady);
        },
        /**
         * Creates a copy of this object.
         *
         * @return {Object} The clone.
         *
         * @example
         *
         *     var clone = bufferedBlockAlgorithm.clone();
         */
        clone: function() {
          var clone = Base.clone.call(this);
          clone._data = this._data.clone();
          return clone;
        },
        _minBufferSize: 0
      });
      C_lib.Hasher = BufferedBlockAlgorithm.extend({
        /**
         * Configuration options.
         */
        cfg: Base.extend(),
        /**
         * Initializes a newly created hasher.
         *
         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
         *
         * @example
         *
         *     var hasher = CryptoJS.algo.SHA256.create();
         */
        init: function(cfg) {
          this.cfg = this.cfg.extend(cfg);
          this.reset();
        },
        /**
         * Resets this hasher to its initial state.
         *
         * @example
         *
         *     hasher.reset();
         */
        reset: function() {
          BufferedBlockAlgorithm.reset.call(this);
          this._doReset();
        },
        /**
         * Updates this hasher with a message.
         *
         * @param {WordArray|string} messageUpdate The message to append.
         *
         * @return {Hasher} This hasher.
         *
         * @example
         *
         *     hasher.update('message');
         *     hasher.update(wordArray);
         */
        update: function(messageUpdate) {
          this._append(messageUpdate);
          this._process();
          return this;
        },
        /**
         * Finalizes the hash computation.
         * Note that the finalize operation is effectively a destructive, read-once operation.
         *
         * @param {WordArray|string} messageUpdate (Optional) A final message update.
         *
         * @return {WordArray} The hash.
         *
         * @example
         *
         *     var hash = hasher.finalize();
         *     var hash = hasher.finalize('message');
         *     var hash = hasher.finalize(wordArray);
         */
        finalize: function(messageUpdate) {
          if (messageUpdate) {
            this._append(messageUpdate);
          }
          var hash2 = this._doFinalize();
          return hash2;
        },
        blockSize: 512 / 32,
        /**
         * Creates a shortcut function to a hasher's object interface.
         *
         * @param {Hasher} hasher The hasher to create a helper for.
         *
         * @return {Function} The shortcut function.
         *
         * @static
         *
         * @example
         *
         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
         */
        _createHelper: function(hasher) {
          return function(message, cfg) {
            return new hasher.init(cfg).finalize(message);
          };
        },
        /**
         * Creates a shortcut function to the HMAC's object interface.
         *
         * @param {Hasher} hasher The hasher to use in this HMAC helper.
         *
         * @return {Function} The shortcut function.
         *
         * @static
         *
         * @example
         *
         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
         */
        _createHmacHelper: function(hasher) {
          return function(message, key) {
            return new C_algo.HMAC.init(hasher, key).finalize(message);
          };
        }
      });
      var C_algo = C.algo = {};
      return C;
    }(Math);
    return CryptoJS;
  });
});
var x64Core = createCommonjsModule(function(module, exports) {
  (function(root, factory) {
    {
      module.exports = factory(core);
    }
  })(commonjsGlobal, function(CryptoJS) {
    (function(undefined$1) {
      var C = CryptoJS;
      var C_lib = C.lib;
      var Base = C_lib.Base;
      var X32WordArray = C_lib.WordArray;
      var C_x64 = C.x64 = {};
      C_x64.Word = Base.extend({
        /**
         * Initializes a newly created 64-bit word.
         *
         * @param {number} high The high 32 bits.
         * @param {number} low The low 32 bits.
         *
         * @example
         *
         *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
         */
        init: function(high, low) {
          this.high = high;
          this.low = low;
        }
        /**
         * Bitwise NOTs this word.
         *
         * @return {X64Word} A new x64-Word object after negating.
         *
         * @example
         *
         *     var negated = x64Word.not();
         */
        // not: function () {
        // var high = ~this.high;
        // var low = ~this.low;
        // return X64Word.create(high, low);
        // },
        /**
         * Bitwise ANDs this word with the passed word.
         *
         * @param {X64Word} word The x64-Word to AND with this word.
         *
         * @return {X64Word} A new x64-Word object after ANDing.
         *
         * @example
         *
         *     var anded = x64Word.and(anotherX64Word);
         */
        // and: function (word) {
        // var high = this.high & word.high;
        // var low = this.low & word.low;
        // return X64Word.create(high, low);
        // },
        /**
         * Bitwise ORs this word with the passed word.
         *
         * @param {X64Word} word The x64-Word to OR with this word.
         *
         * @return {X64Word} A new x64-Word object after ORing.
         *
         * @example
         *
         *     var ored = x64Word.or(anotherX64Word);
         */
        // or: function (word) {
        // var high = this.high | word.high;
        // var low = this.low | word.low;
        // return X64Word.create(high, low);
        // },
        /**
         * Bitwise XORs this word with the passed word.
         *
         * @param {X64Word} word The x64-Word to XOR with this word.
         *
         * @return {X64Word} A new x64-Word object after XORing.
         *
         * @example
         *
         *     var xored = x64Word.xor(anotherX64Word);
         */
        // xor: function (word) {
        // var high = this.high ^ word.high;
        // var low = this.low ^ word.low;
        // return X64Word.create(high, low);
        // },
        /**
         * Shifts this word n bits to the left.
         *
         * @param {number} n The number of bits to shift.
         *
         * @return {X64Word} A new x64-Word object after shifting.
         *
         * @example
         *
         *     var shifted = x64Word.shiftL(25);
         */
        // shiftL: function (n) {
        // if (n < 32) {
        // var high = (this.high << n) | (this.low >>> (32 - n));
        // var low = this.low << n;
        // } else {
        // var high = this.low << (n - 32);
        // var low = 0;
        // }
        // return X64Word.create(high, low);
        // },
        /**
         * Shifts this word n bits to the right.
         *
         * @param {number} n The number of bits to shift.
         *
         * @return {X64Word} A new x64-Word object after shifting.
         *
         * @example
         *
         *     var shifted = x64Word.shiftR(7);
         */
        // shiftR: function (n) {
        // if (n < 32) {
        // var low = (this.low >>> n) | (this.high << (32 - n));
        // var high = this.high >>> n;
        // } else {
        // var low = this.high >>> (n - 32);
        // var high = 0;
        // }
        // return X64Word.create(high, low);
        // },
        /**
         * Rotates this word n bits to the left.
         *
         * @param {number} n The number of bits to rotate.
         *
         * @return {X64Word} A new x64-Word object after rotating.
         *
         * @example
         *
         *     var rotated = x64Word.rotL(25);
         */
        // rotL: function (n) {
        // return this.shiftL(n).or(this.shiftR(64 - n));
        // },
        /**
         * Rotates this word n bits to the right.
         *
         * @param {number} n The number of bits to rotate.
         *
         * @return {X64Word} A new x64-Word object after rotating.
         *
         * @example
         *
         *     var rotated = x64Word.rotR(7);
         */
        // rotR: function (n) {
        // return this.shiftR(n).or(this.shiftL(64 - n));
        // },
        /**
         * Adds this word with the passed word.
         *
         * @param {X64Word} word The x64-Word to add with this word.
         *
         * @return {X64Word} A new x64-Word object after adding.
         *
         * @example
         *
         *     var added = x64Word.add(anotherX64Word);
         */
        // add: function (word) {
        // var low = (this.low + word.low) | 0;
        // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
        // var high = (this.high + word.high + carry) | 0;
        // return X64Word.create(high, low);
        // }
      });
      C_x64.WordArray = Base.extend({
        /**
         * Initializes a newly created word array.
         *
         * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
         *
         * @example
         *
         *     var wordArray = CryptoJS.x64.WordArray.create();
         *
         *     var wordArray = CryptoJS.x64.WordArray.create([
         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
         *     ]);
         *
         *     var wordArray = CryptoJS.x64.WordArray.create([
         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
         *     ], 10);
         */
        init: function(words, sigBytes) {
          words = this.words = words || [];
          if (sigBytes != undefined$1) {
            this.sigBytes = sigBytes;
          } else {
            this.sigBytes = words.length * 8;
          }
        },
        /**
         * Converts this 64-bit word array to a 32-bit word array.
         *
         * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
         *
         * @example
         *
         *     var x32WordArray = x64WordArray.toX32();
         */
        toX32: function() {
          var x64Words = this.words;
          var x64WordsLength = x64Words.length;
          var x32Words = [];
          for (var i = 0; i < x64WordsLength; i++) {
            var x64Word = x64Words[i];
            x32Words.push(x64Word.high);
            x32Words.push(x64Word.low);
          }
          return X32WordArray.create(x32Words, this.sigBytes);
        },
        /**
         * Creates a copy of this word array.
         *
         * @return {X64WordArray} The clone.
         *
         * @example
         *
         *     var clone = x64WordArray.clone();
         */
        clone: function() {
          var clone = Base.clone.call(this);
          var words = clone.words = this.words.slice(0);
          var wordsLength = words.length;
          for (var i = 0; i < wordsLength; i++) {
            words[i] = words[i].clone();
          }
          return clone;
        }
      });
    })();
    return CryptoJS;
  });
});
var libTypedarrays = createCommonjsModule(function(module, exports) {
  (function(root, factory) {
    {
      module.exports = factory(core);
    }
  })(commonjsGlobal, function(CryptoJS) {
    (function() {
      if (typeof ArrayBuffer != "function") {
        return;
      }
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var superInit = WordArray.init;
      var subInit = WordArray.init = function(typedArray) {
        if (typedArray instanceof ArrayBuffer) {
          typedArray = new Uint8Array(typedArray);
        }
        if (typedArray instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray || typedArray instanceof Int16Array || typedArray instanceof Uint16Array || typedArray instanceof Int32Array || typedArray instanceof Uint32Array || typedArray instanceof Float32Array || typedArray instanceof Float64Array) {
          typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
        }
        if (typedArray instanceof Uint8Array) {
          var typedArrayByteLength = typedArray.byteLength;
          var words = [];
          for (var i = 0; i < typedArrayByteLength; i++) {
            words[i >>> 2] |= typedArray[i] << 24 - i % 4 * 8;
          }
          superInit.call(this, words, typedArrayByteLength);
        } else {
          superInit.apply(this, arguments);
        }
      };
      subInit.prototype = WordArray;
    })();
    return CryptoJS.lib.WordArray;
  });
});
var encUtf16 = createCommonjsModule(function(module, exports) {
  (function(root, factory) {
    {
      module.exports = factory(core);
    }
  })(commonjsGlobal, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var C_enc = C.enc;
      C_enc.Utf16 = C_enc.Utf16BE = {
        /**
         * Converts a word array to a UTF-16 BE string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The UTF-16 BE string.
         *
         * @static
         *
         * @example
         *
         *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
         */
        stringify: function(wordArray) {
          var words = wordArray.words;
          var sigBytes = wordArray.sigBytes;
          var utf16Chars = [];
          for (var i = 0; i < sigBytes; i += 2) {
            var codePoint = words[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
            utf16Chars.push(String.fromCharCode(codePoint));
          }
          return utf16Chars.join("");
        },
        /**
         * Converts a UTF-16 BE string to a word array.
         *
         * @param {string} utf16Str The UTF-16 BE string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
         */
        parse: function(utf16Str) {
          var utf16StrLength = utf16Str.length;
          var words = [];
          for (var i = 0; i < utf16StrLength; i++) {
            words[i >>> 1] |= utf16Str.charCodeAt(i) << 16 - i % 2 * 16;
          }
          return WordArray.create(words, utf16StrLength * 2);
        }
      };
      C_enc.Utf16LE = {
        /**
         * Converts a word array to a UTF-16 LE string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The UTF-16 LE string.
         *
         * @static
         *
         * @example
         *
         *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
         */
        stringify: function(wordArray) {
          var words = wordArray.words;
          var sigBytes = wordArray.sigBytes;
          var utf16Chars = [];
          for (var i = 0; i < sigBytes; i += 2) {
            var codePoint = swapEndian(words[i >>> 2] >>> 16 - i % 4 * 8 & 65535);
            utf16Chars.push(String.fromCharCode(codePoint));
          }
          return utf16Chars.join("");
        },
        /**
         * Converts a UTF-16 LE string to a word array.
         *
         * @param {string} utf16Str The UTF-16 LE string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
         */
        parse: function(utf16Str) {
          var utf16StrLength = utf16Str.length;
          var words = [];
          for (var i = 0; i < utf16StrLength; i++) {
            words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << 16 - i % 2 * 16);
          }
          return WordArray.create(words, utf16StrLength * 2);
        }
      };
      function swapEndian(word) {
        return word << 8 & 4278255360 | word >>> 8 & 16711935;
      }
    })();
    return CryptoJS.enc.Utf16;
  });
});
var encBase64 = createCommonjsModule(function(module, exports) {
  (function(root, factory) {
    {
      module.exports = factory(core);
    }
  })(commonjsGlobal, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var C_enc = C.enc;
      C_enc.Base64 = {
        /**
         * Converts a word array to a Base64 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The Base64 string.
         *
         * @static
         *
         * @example
         *
         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
         */
        stringify: function(wordArray) {
          var words = wordArray.words;
          var sigBytes = wordArray.sigBytes;
          var map = this._map;
          wordArray.clamp();
          var base64Chars = [];
          for (var i = 0; i < sigBytes; i += 3) {
            var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
            var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
            var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
            var triplet = byte1 << 16 | byte2 << 8 | byte3;
            for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
              base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 63));
            }
          }
          var paddingChar = map.charAt(64);
          if (paddingChar) {
            while (base64Chars.length % 4) {
              base64Chars.push(paddingChar);
            }
          }
          return base64Chars.join("");
        },
        /**
         * Converts a Base64 string to a word array.
         *
         * @param {string} base64Str The Base64 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
         */
        parse: function(base64Str) {
          var base64StrLength = base64Str.length;
          var map = this._map;
          var reverseMap = this._reverseMap;
          if (!reverseMap) {
            reverseMap = this._reverseMap = [];
            for (var j = 0; j < map.length; j++) {
              reverseMap[map.charCodeAt(j)] = j;
            }
          }
          var paddingChar = map.charAt(64);
          if (paddingChar) {
            var paddingIndex = base64Str.indexOf(paddingChar);
            if (paddingIndex !== -1) {
              base64StrLength = paddingIndex;
            }
          }
          return parseLoop(base64Str, base64StrLength, reverseMap);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      };
      function parseLoop(base64Str, base64StrLength, reverseMap) {
        var words = [];
        var nBytes = 0;
        for (var i = 0; i < base64StrLength; i++) {
          if (i % 4) {
            var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
            var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
            var bitsCombined = bits1 | bits2;
            words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
            nBytes++;
          }
        }
        return WordArray.create(words, nBytes);
      }
    })();
    return CryptoJS.enc.Base64;
  });
});
var encBase64url = createCommonjsModule(function(module, exports) {
  (function(root, factory) {
    {
      module.exports = factory(core);
    }
  })(commonjsGlobal, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var C_enc = C.enc;
      C_enc.Base64url = {
        /**
         * Converts a word array to a Base64url string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @param {boolean} urlSafe Whether to use url safe
         *
         * @return {string} The Base64url string.
         *
         * @static
         *
         * @example
         *
         *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
         */
        stringify: function(wordArray, urlSafe = true) {
          var words = wordArray.words;
          var sigBytes = wordArray.sigBytes;
          var map = urlSafe ? this._safe_map : this._map;
          wordArray.clamp();
          var base64Chars = [];
          for (var i = 0; i < sigBytes; i += 3) {
            var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
            var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
            var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
            var triplet = byte1 << 16 | byte2 << 8 | byte3;
            for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
              base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 63));
            }
          }
          var paddingChar = map.charAt(64);
          if (paddingChar) {
            while (base64Chars.length % 4) {
              base64Chars.push(paddingChar);
            }
          }
          return base64Chars.join("");
        },
        /**
         * Converts a Base64url string to a word array.
         *
         * @param {string} base64Str The Base64url string.
         *
         * @param {boolean} urlSafe Whether to use url safe
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
         */
        parse: function(base64Str, urlSafe = true) {
          var base64StrLength = base64Str.length;
          var map = urlSafe ? this._safe_map : this._map;
          var reverseMap = this._reverseMap;
          if (!reverseMap) {
            reverseMap = this._reverseMap = [];
            for (var j = 0; j < map.length; j++) {
              reverseMap[map.charCodeAt(j)] = j;
            }
          }
          var paddingChar = map.charAt(64);
          if (paddingChar) {
            var paddingIndex = base64Str.indexOf(paddingChar);
            if (paddingIndex !== -1) {
              base64StrLength = paddingIndex;
            }
          }
          return parseLoop(base64Str, base64StrLength, reverseMap);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
      };
      function parseLoop(base64Str, base64StrLength, reverseMap) {
        var words = [];
        var nBytes = 0;
        for (var i = 0; i < base64StrLength; i++) {
          if (i % 4) {
            var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
            var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
            var bitsCombined = bits1 | bits2;
            words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
            nBytes++;
          }
        }
        return WordArray.create(words, nBytes);
      }
    })();
    return CryptoJS.enc.Base64url;
  });
});
var md5 = createCommonjsModule(function(module, exports) {
  (function(root, factory) {
    {
      module.exports = factory(core);
    }
  })(commonjsGlobal, function(CryptoJS) {
    (function(Math2) {
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var Hasher = C_lib.Hasher;
      var C_algo = C.algo;
      var T = [];
      (function() {
        for (var i = 0; i < 64; i++) {
          T[i] = Math2.abs(Math2.sin(i + 1)) * 4294967296 | 0;
        }
      })();
      var MD5 = C_algo.MD5 = Hasher.extend({
        _doReset: function() {
          this._hash = new WordArray.init([
            1732584193,
            4023233417,
            2562383102,
            271733878
          ]);
        },
        _doProcessBlock: function(M, offset2) {
          for (var i = 0; i < 16; i++) {
            var offset_i = offset2 + i;
            var M_offset_i = M[offset_i];
            M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
          }
          var H = this._hash.words;
          var M_offset_0 = M[offset2 + 0];
          var M_offset_1 = M[offset2 + 1];
          var M_offset_2 = M[offset2 + 2];
          var M_offset_3 = M[offset2 + 3];
          var M_offset_4 = M[offset2 + 4];
          var M_offset_5 = M[offset2 + 5];
          var M_offset_6 = M[offset2 + 6];
          var M_offset_7 = M[offset2 + 7];
          var M_offset_8 = M[offset2 + 8];
          var M_offset_9 = M[offset2 + 9];
          var M_offset_10 = M[offset2 + 10];
          var M_offset_11 = M[offset2 + 11];
          var M_offset_12 = M[offset2 + 12];
          var M_offset_13 = M[offset2 + 13];
          var M_offset_14 = M[offset2 + 14];
          var M_offset_15 = M[offset2 + 15];
          var a = H[0];
          var b2 = H[1];
          var c2 = H[2];
          var d2 = H[3];
          a = FF(a, b2, c2, d2, M_offset_0, 7, T[0]);
          d2 = FF(d2, a, b2, c2, M_offset_1, 12, T[1]);
          c2 = FF(c2, d2, a, b2, M_offset_2, 17, T[2]);
          b2 = FF(b2, c2, d2, a, M_offset_3, 22, T[3]);
          a = FF(a, b2, c2, d2, M_offset_4, 7, T[4]);
          d2 = FF(d2, a, b2, c2, M_offset_5, 12, T[5]);
          c2 = FF(c2, d2, a, b2, M_offset_6, 17, T[6]);
          b2 = FF(b2, c2, d2, a, M_offset_7, 22, T[7]);
          a = FF(a, b2, c2, d2, M_offset_8, 7, T[8]);
          d2 = FF(d2, a, b2, c2, M_offset_9, 12, T[9]);
          c2 = FF(c2, d2, a, b2, M_offset_10, 17, T[10]);
          b2 = FF(b2, c2, d2, a, M_offset_11, 22, T[11]);
          a = FF(a, b2, c2, d2, M_offset_12, 7, T[12]);
          d2 = FF(d2, a, b2, c2, M_offset_13, 12, T[13]);
          c2 = FF(c2, d2, a, b2, M_offset_14, 17, T[14]);
          b2 = FF(b2, c2, d2, a, M_offset_15, 22, T[15]);
          a = GG(a, b2, c2, d2, M_offset_1, 5, T[16]);
          d2 = GG(d2, a, b2, c2, M_offset_6, 9, T[17]);
          c2 = GG(c2, d2, a, b2, M_offset_11, 14, T[18]);
          b2 = GG(b2, c2, d2, a, M_offset_0, 20, T[19]);
          a = GG(a, b2, c2, d2, M_offset_5, 5, T[20]);
          d2 = GG(d2, a, b2, c2, M_offset_10, 9, T[21]);
          c2 = GG(c2, d2, a, b2, M_offset_15, 14, T[22]);
          b2 = GG(b2, c2, d2, a, M_offset_4, 20, T[23]);
          a = GG(a, b2, c2, d2, M_offset_9, 5, T[24]);
          d2 = GG(d2, a, b2, c2, M_offset_14, 9, T[25]);
          c2 = GG(c2, d2, a, b2, M_offset_3, 14, T[26]);
          b2 = GG(b2, c2, d2, a, M_offset_8, 20, T[27]);
          a = GG(a, b2, c2, d2, M_offset_13, 5, T[28]);
          d2 = GG(d2, a, b2, c2, M_offset_2, 9, T[29]);
          c2 = GG(c2, d2, a, b2, M_offset_7, 14, T[30]);
          b2 = GG(b2, c2, d2, a, M_offset_12, 20, T[31]);
          a = HH(a, b2, c2, d2, M_offset_5, 4, T[32]);
          d2 = HH(d2, a, b2, c2, M_offset_8, 11, T[33]);
          c2 = HH(c2, d2, a, b2, M_offset_11, 16, T[34]);
          b2 = HH(b2, c2, d2, a, M_offset_14, 23, T[35]);
          a = HH(a, b2, c2, d2, M_offset_1, 4, T[36]);
          d2 = HH(d2, a, b2, c2, M_offset_4, 11, T[37]);
          c2 = HH(c2, d2, a, b2, M_offset_7, 16, T[38]);
          b2 = HH(b2, c2, d2, a, M_offset_10, 23, T[39]);
          a = HH(a, b2, c2, d2, M_offset_13, 4, T[40]);
          d2 = HH(d2, a, b2, c2, M_offset_0, 11, T[41]);
          c2 = HH(c2, d2, a, b2, M_offset_3, 16, T[42]);
          b2 = HH(b2, c2, d2, a, M_offset_6, 23, T[43]);
          a = HH(a, b2, c2, d2, M_offset_9, 4, T[44]);
          d2 = HH(d2, a, b2, c2, M_offset_12, 11, T[45]);
          c2 = HH(c2, d2, a, b2, M_offset_15, 16, T[46]);
          b2 = HH(b2, c2, d2, a, M_offset_2, 23, T[47]);
          a = II(a, b2, c2, d2, M_offset_0, 6, T[48]);
          d2 = II(d2, a, b2, c2, M_offset_7, 10, T[49]);
          c2 = II(c2, d2, a, b2, M_offset_14, 15, T[50]);
          b2 = II(b2, c2, d2, a, M_offset_5, 21, T[51]);
          a = II(a, b2, c2, d2, M_offset_12, 6, T[52]);
          d2 = II(d2, a, b2, c2, M_offset_3, 10, T[53]);
          c2 = II(c2, d2, a, b2, M_offset_10, 15, T[54]);
          b2 = II(b2, c2, d2, a, M_offset_1, 21, T[55]);
          a = II(a, b2, c2, d2, M_offset_8, 6, T[56]);
          d2 = II(d2, a, b2, c2, M_offset_15, 10, T[57]);
          c2 = II(c2, d2, a, b2, M_offset_6, 15, T[58]);
          b2 = II(b2, c2, d2, a, M_offset_13, 21, T[59]);
          a = II(a, b2, c2, d2, M_offset_4, 6, T[60]);
          d2 = II(d2, a, b2, c2, M_offset_11, 10, T[61]);
          c2 = II(c2, d2, a, b2, M_offset_2, 15, T[62]);
          b2 = II(b2, c2, d2, a, M_offset_9, 21, T[63]);
          H[0] = H[0] + a | 0;
          H[1] = H[1] + b2 | 0;
          H[2] = H[2] + c2 | 0;
          H[3] = H[3] + d2 | 0;
        },
        _doFinalize: function() {
          var data = this._data;
          var dataWords = data.words;
          var nBitsTotal = this._nDataBytes * 8;
          var nBitsLeft = data.sigBytes * 8;
          dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
          var nBitsTotalH = Math2.floor(nBitsTotal / 4294967296);
          var nBitsTotalL = nBitsTotal;
          dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 16711935 | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 4278255360;
          dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 16711935 | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 4278255360;
          data.sigBytes = (dataWords.length + 1) * 4;
          this._process();
          var hash2 = this._hash;
          var H = hash2.words;
          for (var i = 0; i < 4; i++) {
            var H_i = H[i];
            H[i] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
          }
          return hash2;
        },
        clone: function() {
          var clone = Hasher.clone.call(this);
          clone._hash = this._hash.clone();
          return clone;
        }
      });
      function FF(a, b2, c2, d2, x2, s, t2) {
        var n2 = a + (b2 & c2 | ~b2 & d2) + x2 + t2;
        return (n2 << s | n2 >>> 32 - s) + b2;
      }
      function GG(a, b2, c2, d2, x2, s, t2) {
        var n2 = a + (b2 & d2 | c2 & ~d2) + x2 + t2;
        return (n2 << s | n2 >>> 32 - s) + b2;
      }
      function HH(a, b2, c2, d2, x2, s, t2) {
        var n2 = a + (b2 ^ c2 ^ d2) + x2 + t2;
        return (n2 << s | n2 >>> 32 - s) + b2;
      }
      function II(a, b2, c2, d2, x2, s, t2) {
        var n2 = a + (c2 ^ (b2 | ~d2)) + x2 + t2;
        return (n2 << s | n2 >>> 32 - s) + b2;
      }
      C.MD5 = Hasher._createHelper(MD5);
      C.HmacMD5 = Hasher._createHmacHelper(MD5);
    })(Math);
    return CryptoJS.MD5;
  });
});
var sha1 = createCommonjsModule(function(module, exports) {
  (function(root, factory) {
    {
      module.exports = factory(core);
    }
  })(commonjsGlobal, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var Hasher = C_lib.Hasher;
      var C_algo = C.algo;
      var W = [];
      var SHA1 = C_algo.SHA1 = Hasher.extend({
        _doReset: function() {
          this._hash = new WordArray.init([
            1732584193,
            4023233417,
            2562383102,
            271733878,
            3285377520
          ]);
        },
        _doProcessBlock: function(M, offset2) {
          var H = this._hash.words;
          var a = H[0];
          var b2 = H[1];
          var c2 = H[2];
          var d2 = H[3];
          var e2 = H[4];
          for (var i = 0; i < 80; i++) {
            if (i < 16) {
              W[i] = M[offset2 + i] | 0;
            } else {
              var n2 = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
              W[i] = n2 << 1 | n2 >>> 31;
            }
            var t2 = (a << 5 | a >>> 27) + e2 + W[i];
            if (i < 20) {
              t2 += (b2 & c2 | ~b2 & d2) + 1518500249;
            } else if (i < 40) {
              t2 += (b2 ^ c2 ^ d2) + 1859775393;
            } else if (i < 60) {
              t2 += (b2 & c2 | b2 & d2 | c2 & d2) - 1894007588;
            } else {
              t2 += (b2 ^ c2 ^ d2) - 899497514;
            }
            e2 = d2;
            d2 = c2;
            c2 = b2 << 30 | b2 >>> 2;
            b2 = a;
            a = t2;
          }
          H[0] = H[0] + a | 0;
          H[1] = H[1] + b2 | 0;
          H[2] = H[2] + c2 | 0;
          H[3] = H[3] + d2 | 0;
          H[4] = H[4] + e2 | 0;
        },
        _doFinalize: function() {
          var data = this._data;
          var dataWords = data.words;
          var nBitsTotal = this._nDataBytes * 8;
          var nBitsLeft = data.sigBytes * 8;
          dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
          dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 4294967296);
          dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
          data.sigBytes = dataWords.length * 4;
          this._process();
          return this._hash;
        },
        clone: function() {
          var clone = Hasher.clone.call(this);
          clone._hash = this._hash.clone();
          return clone;
        }
      });
      C.SHA1 = Hasher._createHelper(SHA1);
      C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
    })();
    return CryptoJS.SHA1;
  });
});
var sha256 = createCommonjsModule(function(module, exports) {
  (function(root, factory) {
    {
      module.exports = factory(core);
    }
  })(commonjsGlobal, function(CryptoJS) {
    (function(Math2) {
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var Hasher = C_lib.Hasher;
      var C_algo = C.algo;
      var H = [];
      var K = [];
      (function() {
        function isPrime(n3) {
          var sqrtN = Math2.sqrt(n3);
          for (var factor = 2; factor <= sqrtN; factor++) {
            if (!(n3 % factor)) {
              return false;
            }
          }
          return true;
        }
        function getFractionalBits(n3) {
          return (n3 - (n3 | 0)) * 4294967296 | 0;
        }
        var n2 = 2;
        var nPrime = 0;
        while (nPrime < 64) {
          if (isPrime(n2)) {
            if (nPrime < 8) {
              H[nPrime] = getFractionalBits(Math2.pow(n2, 1 / 2));
            }
            K[nPrime] = getFractionalBits(Math2.pow(n2, 1 / 3));
            nPrime++;
          }
          n2++;
        }
      })();
      var W = [];
      var SHA256 = C_algo.SHA256 = Hasher.extend({
        _doReset: function() {
          this._hash = new WordArray.init(H.slice(0));
        },
        _doProcessBlock: function(M, offset2) {
          var H2 = this._hash.words;
          var a = H2[0];
          var b2 = H2[1];
          var c2 = H2[2];
          var d2 = H2[3];
          var e2 = H2[4];
          var f2 = H2[5];
          var g2 = H2[6];
          var h2 = H2[7];
          for (var i = 0; i < 64; i++) {
            if (i < 16) {
              W[i] = M[offset2 + i] | 0;
            } else {
              var gamma0x = W[i - 15];
              var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
              var gamma1x = W[i - 2];
              var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
              W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
            }
            var ch = e2 & f2 ^ ~e2 & g2;
            var maj = a & b2 ^ a & c2 ^ b2 & c2;
            var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
            var sigma1 = (e2 << 26 | e2 >>> 6) ^ (e2 << 21 | e2 >>> 11) ^ (e2 << 7 | e2 >>> 25);
            var t1 = h2 + sigma1 + ch + K[i] + W[i];
            var t2 = sigma0 + maj;
            h2 = g2;
            g2 = f2;
            f2 = e2;
            e2 = d2 + t1 | 0;
            d2 = c2;
            c2 = b2;
            b2 = a;
            a = t1 + t2 | 0;
          }
          H2[0] = H2[0] + a | 0;
          H2[1] = H2[1] + b2 | 0;
          H2[2] = H2[2] + c2 | 0;
          H2[3] = H2[3] + d2 | 0;
          H2[4] = H2[4] + e2 | 0;
          H2[5] = H2[5] + f2 | 0;
          H2[6] = H2[6] + g2 | 0;
          H2[7] = H2[7] + h2 | 0;
        },
        _doFinalize: function() {
          var data = this._data;
          var dataWords = data.words;
          var nBitsTotal = this._nDataBytes * 8;
          var nBitsLeft = data.sigBytes * 8;
          dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
          dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math2.floor(nBitsTotal / 4294967296);
          dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
          data.sigBytes = dataWords.length * 4;
          this._process();
          return this._hash;
        },
        clone: function() {
          var clone = Hasher.clone.call(this);
          clone._hash = this._hash.clone();
          return clone;
        }
      });
      C.SHA256 = Hasher._createHelper(SHA256);
      C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
    })(Math);
    return CryptoJS.SHA256;
  });
});
var sha224 = createCommonjsModule(function(module, exports) {
  (function(root, factory, undef) {
    {
      module.exports = factory(core, sha256);
    }
  })(commonjsGlobal, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var C_algo = C.algo;
      var SHA256 = C_algo.SHA256;
      var SHA224 = C_algo.SHA224 = SHA256.extend({
        _doReset: function() {
          this._hash = new WordArray.init([
            3238371032,
            914150663,
            812702999,
            4144912697,
            4290775857,
            1750603025,
            1694076839,
            3204075428
          ]);
        },
        _doFinalize: function() {
          var hash2 = SHA256._doFinalize.call(this);
          hash2.sigBytes -= 4;
          return hash2;
        }
      });
      C.SHA224 = SHA256._createHelper(SHA224);
      C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
    })();
    return CryptoJS.SHA224;
  });
});
var sha512 = createCommonjsModule(function(module, exports) {
  (function(root, factory, undef) {
    {
      module.exports = factory(core, x64Core);
    }
  })(commonjsGlobal, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var Hasher = C_lib.Hasher;
      var C_x64 = C.x64;
      var X64Word = C_x64.Word;
      var X64WordArray = C_x64.WordArray;
      var C_algo = C.algo;
      function X64Word_create() {
        return X64Word.create.apply(X64Word, arguments);
      }
      var K = [
        X64Word_create(1116352408, 3609767458),
        X64Word_create(1899447441, 602891725),
        X64Word_create(3049323471, 3964484399),
        X64Word_create(3921009573, 2173295548),
        X64Word_create(961987163, 4081628472),
        X64Word_create(1508970993, 3053834265),
        X64Word_create(2453635748, 2937671579),
        X64Word_create(2870763221, 3664609560),
        X64Word_create(3624381080, 2734883394),
        X64Word_create(310598401, 1164996542),
        X64Word_create(607225278, 1323610764),
        X64Word_create(1426881987, 3590304994),
        X64Word_create(1925078388, 4068182383),
        X64Word_create(2162078206, 991336113),
        X64Word_create(2614888103, 633803317),
        X64Word_create(3248222580, 3479774868),
        X64Word_create(3835390401, 2666613458),
        X64Word_create(4022224774, 944711139),
        X64Word_create(264347078, 2341262773),
        X64Word_create(604807628, 2007800933),
        X64Word_create(770255983, 1495990901),
        X64Word_create(1249150122, 1856431235),
        X64Word_create(1555081692, 3175218132),
        X64Word_create(1996064986, 2198950837),
        X64Word_create(2554220882, 3999719339),
        X64Word_create(2821834349, 766784016),
        X64Word_create(2952996808, 2566594879),
        X64Word_create(3210313671, 3203337956),
        X64Word_create(3336571891, 1034457026),
        X64Word_create(3584528711, 2466948901),
        X64Word_create(113926993, 3758326383),
        X64Word_create(338241895, 168717936),
        X64Word_create(666307205, 1188179964),
        X64Word_create(773529912, 1546045734),
        X64Word_create(1294757372, 1522805485),
        X64Word_create(1396182291, 2643833823),
        X64Word_create(1695183700, 2343527390),
        X64Word_create(1986661051, 1014477480),
        X64Word_create(2177026350, 1206759142),
        X64Word_create(2456956037, 344077627),
        X64Word_create(2730485921, 1290863460),
        X64Word_create(2820302411, 3158454273),
        X64Word_create(3259730800, 3505952657),
        X64Word_create(3345764771, 106217008),
        X64Word_create(3516065817, 3606008344),
        X64Word_create(3600352804, 1432725776),
        X64Word_create(4094571909, 1467031594),
        X64Word_create(275423344, 851169720),
        X64Word_create(430227734, 3100823752),
        X64Word_create(506948616, 1363258195),
        X64Word_create(659060556, 3750685593),
        X64Word_create(883997877, 3785050280),
        X64Word_create(958139571, 3318307427),
        X64Word_create(1322822218, 3812723403),
        X64Word_create(1537002063, 2003034995),
        X64Word_create(1747873779, 3602036899),
        X64Word_create(1955562222, 1575990012),
        X64Word_create(2024104815, 1125592928),
        X64Word_create(2227730452, 2716904306),
        X64Word_create(2361852424, 442776044),
        X64Word_create(2428436474, 593698344),
        X64Word_create(2756734187, 3733110249),
        X64Word_create(3204031479, 2999351573),
        X64Word_create(3329325298, 3815920427),
        X64Word_create(3391569614, 3928383900),
        X64Word_create(3515267271, 566280711),
        X64Word_create(3940187606, 3454069534),
        X64Word_create(4118630271, 4000239992),
        X64Word_create(116418474, 1914138554),
        X64Word_create(174292421, 2731055270),
        X64Word_create(289380356, 3203993006),
        X64Word_create(460393269, 320620315),
        X64Word_create(685471733, 587496836),
        X64Word_create(852142971, 1086792851),
        X64Word_create(1017036298, 365543100),
        X64Word_create(1126000580, 2618297676),
        X64Word_create(1288033470, 3409855158),
        X64Word_create(1501505948, 4234509866),
        X64Word_create(1607167915, 987167468),
        X64Word_create(1816402316, 1246189591)
      ];
      var W = [];
      (function() {
        for (var i = 0; i < 80; i++) {
          W[i] = X64Word_create();
        }
      })();
      var SHA512 = C_algo.SHA512 = Hasher.extend({
        _doReset: function() {
          this._hash = new X64WordArray.init([
            new X64Word.init(1779033703, 4089235720),
            new X64Word.init(3144134277, 2227873595),
            new X64Word.init(1013904242, 4271175723),
            new X64Word.init(2773480762, 1595750129),
            new X64Word.init(1359893119, 2917565137),
            new X64Word.init(2600822924, 725511199),
            new X64Word.init(528734635, 4215389547),
            new X64Word.init(1541459225, 327033209)
          ]);
        },
        _doProcessBlock: function(M, offset2) {
          var H = this._hash.words;
          var H0 = H[0];
          var H1 = H[1];
          var H2 = H[2];
          var H3 = H[3];
          var H4 = H[4];
          var H5 = H[5];
          var H6 = H[6];
          var H7 = H[7];
          var H0h = H0.high;
          var H0l = H0.low;
          var H1h = H1.high;
          var H1l = H1.low;
          var H2h = H2.high;
          var H2l = H2.low;
          var H3h = H3.high;
          var H3l = H3.low;
          var H4h = H4.high;
          var H4l = H4.low;
          var H5h = H5.high;
          var H5l = H5.low;
          var H6h = H6.high;
          var H6l = H6.low;
          var H7h = H7.high;
          var H7l = H7.low;
          var ah = H0h;
          var al = H0l;
          var bh = H1h;
          var bl = H1l;
          var ch = H2h;
          var cl = H2l;
          var dh = H3h;
          var dl = H3l;
          var eh = H4h;
          var el = H4l;
          var fh = H5h;
          var fl = H5l;
          var gh = H6h;
          var gl = H6l;
          var hh = H7h;
          var hl = H7l;
          for (var i = 0; i < 80; i++) {
            var Wil;
            var Wih;
            var Wi = W[i];
            if (i < 16) {
              Wih = Wi.high = M[offset2 + i * 2] | 0;
              Wil = Wi.low = M[offset2 + i * 2 + 1] | 0;
            } else {
              var gamma0x = W[i - 15];
              var gamma0xh = gamma0x.high;
              var gamma0xl = gamma0x.low;
              var gamma0h = (gamma0xh >>> 1 | gamma0xl << 31) ^ (gamma0xh >>> 8 | gamma0xl << 24) ^ gamma0xh >>> 7;
              var gamma0l = (gamma0xl >>> 1 | gamma0xh << 31) ^ (gamma0xl >>> 8 | gamma0xh << 24) ^ (gamma0xl >>> 7 | gamma0xh << 25);
              var gamma1x = W[i - 2];
              var gamma1xh = gamma1x.high;
              var gamma1xl = gamma1x.low;
              var gamma1h = (gamma1xh >>> 19 | gamma1xl << 13) ^ (gamma1xh << 3 | gamma1xl >>> 29) ^ gamma1xh >>> 6;
              var gamma1l = (gamma1xl >>> 19 | gamma1xh << 13) ^ (gamma1xl << 3 | gamma1xh >>> 29) ^ (gamma1xl >>> 6 | gamma1xh << 26);
              var Wi7 = W[i - 7];
              var Wi7h = Wi7.high;
              var Wi7l = Wi7.low;
              var Wi16 = W[i - 16];
              var Wi16h = Wi16.high;
              var Wi16l = Wi16.low;
              Wil = gamma0l + Wi7l;
              Wih = gamma0h + Wi7h + (Wil >>> 0 < gamma0l >>> 0 ? 1 : 0);
              Wil = Wil + gamma1l;
              Wih = Wih + gamma1h + (Wil >>> 0 < gamma1l >>> 0 ? 1 : 0);
              Wil = Wil + Wi16l;
              Wih = Wih + Wi16h + (Wil >>> 0 < Wi16l >>> 0 ? 1 : 0);
              Wi.high = Wih;
              Wi.low = Wil;
            }
            var chh = eh & fh ^ ~eh & gh;
            var chl = el & fl ^ ~el & gl;
            var majh = ah & bh ^ ah & ch ^ bh & ch;
            var majl = al & bl ^ al & cl ^ bl & cl;
            var sigma0h = (ah >>> 28 | al << 4) ^ (ah << 30 | al >>> 2) ^ (ah << 25 | al >>> 7);
            var sigma0l = (al >>> 28 | ah << 4) ^ (al << 30 | ah >>> 2) ^ (al << 25 | ah >>> 7);
            var sigma1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (eh << 23 | el >>> 9);
            var sigma1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (el << 23 | eh >>> 9);
            var Ki = K[i];
            var Kih = Ki.high;
            var Kil = Ki.low;
            var t1l = hl + sigma1l;
            var t1h = hh + sigma1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0);
            var t1l = t1l + chl;
            var t1h = t1h + chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0);
            var t1l = t1l + Kil;
            var t1h = t1h + Kih + (t1l >>> 0 < Kil >>> 0 ? 1 : 0);
            var t1l = t1l + Wil;
            var t1h = t1h + Wih + (t1l >>> 0 < Wil >>> 0 ? 1 : 0);
            var t2l = sigma0l + majl;
            var t2h = sigma0h + majh + (t2l >>> 0 < sigma0l >>> 0 ? 1 : 0);
            hh = gh;
            hl = gl;
            gh = fh;
            gl = fl;
            fh = eh;
            fl = el;
            el = dl + t1l | 0;
            eh = dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0) | 0;
            dh = ch;
            dl = cl;
            ch = bh;
            cl = bl;
            bh = ah;
            bl = al;
            al = t1l + t2l | 0;
            ah = t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0) | 0;
          }
          H0l = H0.low = H0l + al;
          H0.high = H0h + ah + (H0l >>> 0 < al >>> 0 ? 1 : 0);
          H1l = H1.low = H1l + bl;
          H1.high = H1h + bh + (H1l >>> 0 < bl >>> 0 ? 1 : 0);
          H2l = H2.low = H2l + cl;
          H2.high = H2h + ch + (H2l >>> 0 < cl >>> 0 ? 1 : 0);
          H3l = H3.low = H3l + dl;
          H3.high = H3h + dh + (H3l >>> 0 < dl >>> 0 ? 1 : 0);
          H4l = H4.low = H4l + el;
          H4.high = H4h + eh + (H4l >>> 0 < el >>> 0 ? 1 : 0);
          H5l = H5.low = H5l + fl;
          H5.high = H5h + fh + (H5l >>> 0 < fl >>> 0 ? 1 : 0);
          H6l = H6.low = H6l + gl;
          H6.high = H6h + gh + (H6l >>> 0 < gl >>> 0 ? 1 : 0);
          H7l = H7.low = H7l + hl;
          H7.high = H7h + hh + (H7l >>> 0 < hl >>> 0 ? 1 : 0);
        },
        _doFinalize: function() {
          var data = this._data;
          var dataWords = data.words;
          var nBitsTotal = this._nDataBytes * 8;
          var nBitsLeft = data.sigBytes * 8;
          dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
          dataWords[(nBitsLeft + 128 >>> 10 << 5) + 30] = Math.floor(nBitsTotal / 4294967296);
          dataWords[(nBitsLeft + 128 >>> 10 << 5) + 31] = nBitsTotal;
          data.sigBytes = dataWords.length * 4;
          this._process();
          var hash2 = this._hash.toX32();
          return hash2;
        },
        clone: function() {
          var clone = Hasher.clone.call(this);
          clone._hash = this._hash.clone();
          return clone;
        },
        blockSize: 1024 / 32
      });
      C.SHA512 = Hasher._createHelper(SHA512);
      C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
    })();
    return CryptoJS.SHA512;
  });
});
var sha384 = createCommonjsModule(function(module, exports) {
  (function(root, factory, undef) {
    {
      module.exports = factory(core, x64Core, sha512);
    }
  })(commonjsGlobal, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_x64 = C.x64;
      var X64Word = C_x64.Word;
      var X64WordArray = C_x64.WordArray;
      var C_algo = C.algo;
      var SHA512 = C_algo.SHA512;
      var SHA384 = C_algo.SHA384 = SHA512.extend({
        _doReset: function() {
          this._hash = new X64WordArray.init([
            new X64Word.init(3418070365, 3238371032),
            new X64Word.init(1654270250, 914150663),
            new X64Word.init(2438529370, 812702999),
            new X64Word.init(355462360, 4144912697),
            new X64Word.init(1731405415, 4290775857),
            new X64Word.init(2394180231, 1750603025),
            new X64Word.init(3675008525, 1694076839),
            new X64Word.init(1203062813, 3204075428)
          ]);
        },
        _doFinalize: function() {
          var hash2 = SHA512._doFinalize.call(this);
          hash2.sigBytes -= 16;
          return hash2;
        }
      });
      C.SHA384 = SHA512._createHelper(SHA384);
      C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
    })();
    return CryptoJS.SHA384;
  });
});
var sha3 = createCommonjsModule(function(module, exports) {
  (function(root, factory, undef) {
    {
      module.exports = factory(core, x64Core);
    }
  })(commonjsGlobal, function(CryptoJS) {
    (function(Math2) {
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var Hasher = C_lib.Hasher;
      var C_x64 = C.x64;
      var X64Word = C_x64.Word;
      var C_algo = C.algo;
      var RHO_OFFSETS = [];
      var PI_INDEXES = [];
      var ROUND_CONSTANTS = [];
      (function() {
        var x2 = 1, y2 = 0;
        for (var t2 = 0; t2 < 24; t2++) {
          RHO_OFFSETS[x2 + 5 * y2] = (t2 + 1) * (t2 + 2) / 2 % 64;
          var newX = y2 % 5;
          var newY = (2 * x2 + 3 * y2) % 5;
          x2 = newX;
          y2 = newY;
        }
        for (var x2 = 0; x2 < 5; x2++) {
          for (var y2 = 0; y2 < 5; y2++) {
            PI_INDEXES[x2 + 5 * y2] = y2 + (2 * x2 + 3 * y2) % 5 * 5;
          }
        }
        var LFSR = 1;
        for (var i = 0; i < 24; i++) {
          var roundConstantMsw = 0;
          var roundConstantLsw = 0;
          for (var j = 0; j < 7; j++) {
            if (LFSR & 1) {
              var bitPosition = (1 << j) - 1;
              if (bitPosition < 32) {
                roundConstantLsw ^= 1 << bitPosition;
              } else {
                roundConstantMsw ^= 1 << bitPosition - 32;
              }
            }
            if (LFSR & 128) {
              LFSR = LFSR << 1 ^ 113;
            } else {
              LFSR <<= 1;
            }
          }
          ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
        }
      })();
      var T = [];
      (function() {
        for (var i = 0; i < 25; i++) {
          T[i] = X64Word.create();
        }
      })();
      var SHA3 = C_algo.SHA3 = Hasher.extend({
        /**
         * Configuration options.
         *
         * @property {number} outputLength
         *   The desired number of bits in the output hash.
         *   Only values permitted are: 224, 256, 384, 512.
         *   Default: 512
         */
        cfg: Hasher.cfg.extend({
          outputLength: 512
        }),
        _doReset: function() {
          var state = this._state = [];
          for (var i = 0; i < 25; i++) {
            state[i] = new X64Word.init();
          }
          this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
        },
        _doProcessBlock: function(M, offset2) {
          var state = this._state;
          var nBlockSizeLanes = this.blockSize / 2;
          for (var i = 0; i < nBlockSizeLanes; i++) {
            var M2i = M[offset2 + 2 * i];
            var M2i1 = M[offset2 + 2 * i + 1];
            M2i = (M2i << 8 | M2i >>> 24) & 16711935 | (M2i << 24 | M2i >>> 8) & 4278255360;
            M2i1 = (M2i1 << 8 | M2i1 >>> 24) & 16711935 | (M2i1 << 24 | M2i1 >>> 8) & 4278255360;
            var lane = state[i];
            lane.high ^= M2i1;
            lane.low ^= M2i;
          }
          for (var round2 = 0; round2 < 24; round2++) {
            for (var x2 = 0; x2 < 5; x2++) {
              var tMsw = 0, tLsw = 0;
              for (var y2 = 0; y2 < 5; y2++) {
                var lane = state[x2 + 5 * y2];
                tMsw ^= lane.high;
                tLsw ^= lane.low;
              }
              var Tx = T[x2];
              Tx.high = tMsw;
              Tx.low = tLsw;
            }
            for (var x2 = 0; x2 < 5; x2++) {
              var Tx4 = T[(x2 + 4) % 5];
              var Tx1 = T[(x2 + 1) % 5];
              var Tx1Msw = Tx1.high;
              var Tx1Lsw = Tx1.low;
              var tMsw = Tx4.high ^ (Tx1Msw << 1 | Tx1Lsw >>> 31);
              var tLsw = Tx4.low ^ (Tx1Lsw << 1 | Tx1Msw >>> 31);
              for (var y2 = 0; y2 < 5; y2++) {
                var lane = state[x2 + 5 * y2];
                lane.high ^= tMsw;
                lane.low ^= tLsw;
              }
            }
            for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
              var tMsw;
              var tLsw;
              var lane = state[laneIndex];
              var laneMsw = lane.high;
              var laneLsw = lane.low;
              var rhoOffset = RHO_OFFSETS[laneIndex];
              if (rhoOffset < 32) {
                tMsw = laneMsw << rhoOffset | laneLsw >>> 32 - rhoOffset;
                tLsw = laneLsw << rhoOffset | laneMsw >>> 32 - rhoOffset;
              } else {
                tMsw = laneLsw << rhoOffset - 32 | laneMsw >>> 64 - rhoOffset;
                tLsw = laneMsw << rhoOffset - 32 | laneLsw >>> 64 - rhoOffset;
              }
              var TPiLane = T[PI_INDEXES[laneIndex]];
              TPiLane.high = tMsw;
              TPiLane.low = tLsw;
            }
            var T0 = T[0];
            var state0 = state[0];
            T0.high = state0.high;
            T0.low = state0.low;
            for (var x2 = 0; x2 < 5; x2++) {
              for (var y2 = 0; y2 < 5; y2++) {
                var laneIndex = x2 + 5 * y2;
                var lane = state[laneIndex];
                var TLane = T[laneIndex];
                var Tx1Lane = T[(x2 + 1) % 5 + 5 * y2];
                var Tx2Lane = T[(x2 + 2) % 5 + 5 * y2];
                lane.high = TLane.high ^ ~Tx1Lane.high & Tx2Lane.high;
                lane.low = TLane.low ^ ~Tx1Lane.low & Tx2Lane.low;
              }
            }
            var lane = state[0];
            var roundConstant = ROUND_CONSTANTS[round2];
            lane.high ^= roundConstant.high;
            lane.low ^= roundConstant.low;
          }
        },
        _doFinalize: function() {
          var data = this._data;
          var dataWords = data.words;
          this._nDataBytes * 8;
          var nBitsLeft = data.sigBytes * 8;
          var blockSizeBits = this.blockSize * 32;
          dataWords[nBitsLeft >>> 5] |= 1 << 24 - nBitsLeft % 32;
          dataWords[(Math2.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits >>> 5) - 1] |= 128;
          data.sigBytes = dataWords.length * 4;
          this._process();
          var state = this._state;
          var outputLengthBytes = this.cfg.outputLength / 8;
          var outputLengthLanes = outputLengthBytes / 8;
          var hashWords = [];
          for (var i = 0; i < outputLengthLanes; i++) {
            var lane = state[i];
            var laneMsw = lane.high;
            var laneLsw = lane.low;
            laneMsw = (laneMsw << 8 | laneMsw >>> 24) & 16711935 | (laneMsw << 24 | laneMsw >>> 8) & 4278255360;
            laneLsw = (laneLsw << 8 | laneLsw >>> 24) & 16711935 | (laneLsw << 24 | laneLsw >>> 8) & 4278255360;
            hashWords.push(laneLsw);
            hashWords.push(laneMsw);
          }
          return new WordArray.init(hashWords, outputLengthBytes);
        },
        clone: function() {
          var clone = Hasher.clone.call(this);
          var state = clone._state = this._state.slice(0);
          for (var i = 0; i < 25; i++) {
            state[i] = state[i].clone();
          }
          return clone;
        }
      });
      C.SHA3 = Hasher._createHelper(SHA3);
      C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
    })(Math);
    return CryptoJS.SHA3;
  });
});
var ripemd160 = createCommonjsModule(function(module, exports) {
  (function(root, factory) {
    {
      module.exports = factory(core);
    }
  })(commonjsGlobal, function(CryptoJS) {
    (function(Math2) {
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var Hasher = C_lib.Hasher;
      var C_algo = C.algo;
      var _zl = WordArray.create([
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        7,
        4,
        13,
        1,
        10,
        6,
        15,
        3,
        12,
        0,
        9,
        5,
        2,
        14,
        11,
        8,
        3,
        10,
        14,
        4,
        9,
        15,
        8,
        1,
        2,
        7,
        0,
        6,
        13,
        11,
        5,
        12,
        1,
        9,
        11,
        10,
        0,
        8,
        12,
        4,
        13,
        3,
        7,
        15,
        14,
        5,
        6,
        2,
        4,
        0,
        5,
        9,
        7,
        12,
        2,
        10,
        14,
        1,
        3,
        8,
        11,
        6,
        15,
        13
      ]);
      var _zr = WordArray.create([
        5,
        14,
        7,
        0,
        9,
        2,
        11,
        4,
        13,
        6,
        15,
        8,
        1,
        10,
        3,
        12,
        6,
        11,
        3,
        7,
        0,
        13,
        5,
        10,
        14,
        15,
        8,
        12,
        4,
        9,
        1,
        2,
        15,
        5,
        1,
        3,
        7,
        14,
        6,
        9,
        11,
        8,
        12,
        2,
        10,
        0,
        4,
        13,
        8,
        6,
        4,
        1,
        3,
        11,
        15,
        0,
        5,
        12,
        2,
        13,
        9,
        7,
        10,
        14,
        12,
        15,
        10,
        4,
        1,
        5,
        8,
        7,
        6,
        2,
        13,
        14,
        0,
        3,
        9,
        11
      ]);
      var _sl = WordArray.create([
        11,
        14,
        15,
        12,
        5,
        8,
        7,
        9,
        11,
        13,
        14,
        15,
        6,
        7,
        9,
        8,
        7,
        6,
        8,
        13,
        11,
        9,
        7,
        15,
        7,
        12,
        15,
        9,
        11,
        7,
        13,
        12,
        11,
        13,
        6,
        7,
        14,
        9,
        13,
        15,
        14,
        8,
        13,
        6,
        5,
        12,
        7,
        5,
        11,
        12,
        14,
        15,
        14,
        15,
        9,
        8,
        9,
        14,
        5,
        6,
        8,
        6,
        5,
        12,
        9,
        15,
        5,
        11,
        6,
        8,
        13,
        12,
        5,
        12,
        13,
        14,
        11,
        8,
        5,
        6
      ]);
      var _sr = WordArray.create([
        8,
        9,
        9,
        11,
        13,
        15,
        15,
        5,
        7,
        7,
        8,
        11,
        14,
        14,
        12,
        6,
        9,
        13,
        15,
        7,
        12,
        8,
        9,
        11,
        7,
        7,
        12,
        7,
        6,
        15,
        13,
        11,
        9,
        7,
        15,
        11,
        8,
        6,
        6,
        14,
        12,
        13,
        5,
        14,
        13,
        13,
        7,
        5,
        15,
        5,
        8,
        11,
        14,
        14,
        6,
        14,
        6,
        9,
        12,
        9,
        12,
        5,
        15,
        8,
        8,
        5,
        12,
        9,
        12,
        5,
        14,
        6,
        8,
        13,
        6,
        5,
        15,
        13,
        11,
        11
      ]);
      var _hl = WordArray.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
      var _hr = WordArray.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
      var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
        _doReset: function() {
          this._hash = WordArray.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
        },
        _doProcessBlock: function(M, offset2) {
          for (var i = 0; i < 16; i++) {
            var offset_i = offset2 + i;
            var M_offset_i = M[offset_i];
            M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
          }
          var H = this._hash.words;
          var hl = _hl.words;
          var hr = _hr.words;
          var zl = _zl.words;
          var zr = _zr.words;
          var sl = _sl.words;
          var sr = _sr.words;
          var al, bl, cl, dl, el;
          var ar, br, cr, dr, er;
          ar = al = H[0];
          br = bl = H[1];
          cr = cl = H[2];
          dr = dl = H[3];
          er = el = H[4];
          var t2;
          for (var i = 0; i < 80; i += 1) {
            t2 = al + M[offset2 + zl[i]] | 0;
            if (i < 16) {
              t2 += f1(bl, cl, dl) + hl[0];
            } else if (i < 32) {
              t2 += f2(bl, cl, dl) + hl[1];
            } else if (i < 48) {
              t2 += f3(bl, cl, dl) + hl[2];
            } else if (i < 64) {
              t2 += f4(bl, cl, dl) + hl[3];
            } else {
              t2 += f5(bl, cl, dl) + hl[4];
            }
            t2 = t2 | 0;
            t2 = rotl(t2, sl[i]);
            t2 = t2 + el | 0;
            al = el;
            el = dl;
            dl = rotl(cl, 10);
            cl = bl;
            bl = t2;
            t2 = ar + M[offset2 + zr[i]] | 0;
            if (i < 16) {
              t2 += f5(br, cr, dr) + hr[0];
            } else if (i < 32) {
              t2 += f4(br, cr, dr) + hr[1];
            } else if (i < 48) {
              t2 += f3(br, cr, dr) + hr[2];
            } else if (i < 64) {
              t2 += f2(br, cr, dr) + hr[3];
            } else {
              t2 += f1(br, cr, dr) + hr[4];
            }
            t2 = t2 | 0;
            t2 = rotl(t2, sr[i]);
            t2 = t2 + er | 0;
            ar = er;
            er = dr;
            dr = rotl(cr, 10);
            cr = br;
            br = t2;
          }
          t2 = H[1] + cl + dr | 0;
          H[1] = H[2] + dl + er | 0;
          H[2] = H[3] + el + ar | 0;
          H[3] = H[4] + al + br | 0;
          H[4] = H[0] + bl + cr | 0;
          H[0] = t2;
        },
        _doFinalize: function() {
          var data = this._data;
          var dataWords = data.words;
          var nBitsTotal = this._nDataBytes * 8;
          var nBitsLeft = data.sigBytes * 8;
          dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
          dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotal << 8 | nBitsTotal >>> 24) & 16711935 | (nBitsTotal << 24 | nBitsTotal >>> 8) & 4278255360;
          data.sigBytes = (dataWords.length + 1) * 4;
          this._process();
          var hash2 = this._hash;
          var H = hash2.words;
          for (var i = 0; i < 5; i++) {
            var H_i = H[i];
            H[i] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
          }
          return hash2;
        },
        clone: function() {
          var clone = Hasher.clone.call(this);
          clone._hash = this._hash.clone();
          return clone;
        }
      });
      function f1(x2, y2, z) {
        return x2 ^ y2 ^ z;
      }
      function f2(x2, y2, z) {
        return x2 & y2 | ~x2 & z;
      }
      function f3(x2, y2, z) {
        return (x2 | ~y2) ^ z;
      }
      function f4(x2, y2, z) {
        return x2 & z | y2 & ~z;
      }
      function f5(x2, y2, z) {
        return x2 ^ (y2 | ~z);
      }
      function rotl(x2, n2) {
        return x2 << n2 | x2 >>> 32 - n2;
      }
      C.RIPEMD160 = Hasher._createHelper(RIPEMD160);
      C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
    })();
    return CryptoJS.RIPEMD160;
  });
});
var hmac = createCommonjsModule(function(module, exports) {
  (function(root, factory) {
    {
      module.exports = factory(core);
    }
  })(commonjsGlobal, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var Base = C_lib.Base;
      var C_enc = C.enc;
      var Utf8 = C_enc.Utf8;
      var C_algo = C.algo;
      C_algo.HMAC = Base.extend({
        /**
         * Initializes a newly created HMAC.
         *
         * @param {Hasher} hasher The hash algorithm to use.
         * @param {WordArray|string} key The secret key.
         *
         * @example
         *
         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
         */
        init: function(hasher, key) {
          hasher = this._hasher = new hasher.init();
          if (typeof key == "string") {
            key = Utf8.parse(key);
          }
          var hasherBlockSize = hasher.blockSize;
          var hasherBlockSizeBytes = hasherBlockSize * 4;
          if (key.sigBytes > hasherBlockSizeBytes) {
            key = hasher.finalize(key);
          }
          key.clamp();
          var oKey = this._oKey = key.clone();
          var iKey = this._iKey = key.clone();
          var oKeyWords = oKey.words;
          var iKeyWords = iKey.words;
          for (var i = 0; i < hasherBlockSize; i++) {
            oKeyWords[i] ^= 1549556828;
            iKeyWords[i] ^= 909522486;
          }
          oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;
          this.reset();
        },
        /**
         * Resets this HMAC to its initial state.
         *
         * @example
         *
         *     hmacHasher.reset();
         */
        reset: function() {
          var hasher = this._hasher;
          hasher.reset();
          hasher.update(this._iKey);
        },
        /**
         * Updates this HMAC with a message.
         *
         * @param {WordArray|string} messageUpdate The message to append.
         *
         * @return {HMAC} This HMAC instance.
         *
         * @example
         *
         *     hmacHasher.update('message');
         *     hmacHasher.update(wordArray);
         */
        update: function(messageUpdate) {
          this._hasher.update(messageUpdate);
          return this;
        },
        /**
         * Finalizes the HMAC computation.
         * Note that the finalize operation is effectively a destructive, read-once operation.
         *
         * @param {WordArray|string} messageUpdate (Optional) A final message update.
         *
         * @return {WordArray} The HMAC.
         *
         * @example
         *
         *     var hmac = hmacHasher.finalize();
         *     var hmac = hmacHasher.finalize('message');
         *     var hmac = hmacHasher.finalize(wordArray);
         */
        finalize: function(messageUpdate) {
          var hasher = this._hasher;
          var innerHash = hasher.finalize(messageUpdate);
          hasher.reset();
          var hmac2 = hasher.finalize(this._oKey.clone().concat(innerHash));
          return hmac2;
        }
      });
    })();
  });
});
var pbkdf2 = createCommonjsModule(function(module, exports) {
  (function(root, factory, undef) {
    {
      module.exports = factory(core, sha1, hmac);
    }
  })(commonjsGlobal, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var Base = C_lib.Base;
      var WordArray = C_lib.WordArray;
      var C_algo = C.algo;
      var SHA1 = C_algo.SHA1;
      var HMAC = C_algo.HMAC;
      var PBKDF2 = C_algo.PBKDF2 = Base.extend({
        /**
         * Configuration options.
         *
         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
         * @property {Hasher} hasher The hasher to use. Default: SHA1
         * @property {number} iterations The number of iterations to perform. Default: 1
         */
        cfg: Base.extend({
          keySize: 128 / 32,
          hasher: SHA1,
          iterations: 1
        }),
        /**
         * Initializes a newly created key derivation function.
         *
         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
         *
         * @example
         *
         *     var kdf = CryptoJS.algo.PBKDF2.create();
         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
         */
        init: function(cfg) {
          this.cfg = this.cfg.extend(cfg);
        },
        /**
         * Computes the Password-Based Key Derivation Function 2.
         *
         * @param {WordArray|string} password The password.
         * @param {WordArray|string} salt A salt.
         *
         * @return {WordArray} The derived key.
         *
         * @example
         *
         *     var key = kdf.compute(password, salt);
         */
        compute: function(password, salt) {
          var cfg = this.cfg;
          var hmac2 = HMAC.create(cfg.hasher, password);
          var derivedKey = WordArray.create();
          var blockIndex = WordArray.create([1]);
          var derivedKeyWords = derivedKey.words;
          var blockIndexWords = blockIndex.words;
          var keySize = cfg.keySize;
          var iterations = cfg.iterations;
          while (derivedKeyWords.length < keySize) {
            var block = hmac2.update(salt).finalize(blockIndex);
            hmac2.reset();
            var blockWords = block.words;
            var blockWordsLength = blockWords.length;
            var intermediate = block;
            for (var i = 1; i < iterations; i++) {
              intermediate = hmac2.finalize(intermediate);
              hmac2.reset();
              var intermediateWords = intermediate.words;
              for (var j = 0; j < blockWordsLength; j++) {
                blockWords[j] ^= intermediateWords[j];
              }
            }
            derivedKey.concat(block);
            blockIndexWords[0]++;
          }
          derivedKey.sigBytes = keySize * 4;
          return derivedKey;
        }
      });
      C.PBKDF2 = function(password, salt, cfg) {
        return PBKDF2.create(cfg).compute(password, salt);
      };
    })();
    return CryptoJS.PBKDF2;
  });
});
var evpkdf = createCommonjsModule(function(module, exports) {
  (function(root, factory, undef) {
    {
      module.exports = factory(core, sha1, hmac);
    }
  })(commonjsGlobal, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var Base = C_lib.Base;
      var WordArray = C_lib.WordArray;
      var C_algo = C.algo;
      var MD5 = C_algo.MD5;
      var EvpKDF = C_algo.EvpKDF = Base.extend({
        /**
         * Configuration options.
         *
         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
         * @property {Hasher} hasher The hash algorithm to use. Default: MD5
         * @property {number} iterations The number of iterations to perform. Default: 1
         */
        cfg: Base.extend({
          keySize: 128 / 32,
          hasher: MD5,
          iterations: 1
        }),
        /**
         * Initializes a newly created key derivation function.
         *
         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
         *
         * @example
         *
         *     var kdf = CryptoJS.algo.EvpKDF.create();
         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
         */
        init: function(cfg) {
          this.cfg = this.cfg.extend(cfg);
        },
        /**
         * Derives a key from a password.
         *
         * @param {WordArray|string} password The password.
         * @param {WordArray|string} salt A salt.
         *
         * @return {WordArray} The derived key.
         *
         * @example
         *
         *     var key = kdf.compute(password, salt);
         */
        compute: function(password, salt) {
          var block;
          var cfg = this.cfg;
          var hasher = cfg.hasher.create();
          var derivedKey = WordArray.create();
          var derivedKeyWords = derivedKey.words;
          var keySize = cfg.keySize;
          var iterations = cfg.iterations;
          while (derivedKeyWords.length < keySize) {
            if (block) {
              hasher.update(block);
            }
            block = hasher.update(password).finalize(salt);
            hasher.reset();
            for (var i = 1; i < iterations; i++) {
              block = hasher.finalize(block);
              hasher.reset();
            }
            derivedKey.concat(block);
          }
          derivedKey.sigBytes = keySize * 4;
          return derivedKey;
        }
      });
      C.EvpKDF = function(password, salt, cfg) {
        return EvpKDF.create(cfg).compute(password, salt);
      };
    })();
    return CryptoJS.EvpKDF;
  });
});
var cipherCore = createCommonjsModule(function(module, exports) {
  (function(root, factory, undef) {
    {
      module.exports = factory(core, evpkdf);
    }
  })(commonjsGlobal, function(CryptoJS) {
    CryptoJS.lib.Cipher || function(undefined$1) {
      var C = CryptoJS;
      var C_lib = C.lib;
      var Base = C_lib.Base;
      var WordArray = C_lib.WordArray;
      var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
      var C_enc = C.enc;
      C_enc.Utf8;
      var Base64 = C_enc.Base64;
      var C_algo = C.algo;
      var EvpKDF = C_algo.EvpKDF;
      var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
        /**
         * Configuration options.
         *
         * @property {WordArray} iv The IV to use for this operation.
         */
        cfg: Base.extend(),
        /**
         * Creates this cipher in encryption mode.
         *
         * @param {WordArray} key The key.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {Cipher} A cipher instance.
         *
         * @static
         *
         * @example
         *
         *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
         */
        createEncryptor: function(key, cfg) {
          return this.create(this._ENC_XFORM_MODE, key, cfg);
        },
        /**
         * Creates this cipher in decryption mode.
         *
         * @param {WordArray} key The key.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {Cipher} A cipher instance.
         *
         * @static
         *
         * @example
         *
         *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
         */
        createDecryptor: function(key, cfg) {
          return this.create(this._DEC_XFORM_MODE, key, cfg);
        },
        /**
         * Initializes a newly created cipher.
         *
         * @param {number} xformMode Either the encryption or decryption transormation mode constant.
         * @param {WordArray} key The key.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @example
         *
         *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
         */
        init: function(xformMode, key, cfg) {
          this.cfg = this.cfg.extend(cfg);
          this._xformMode = xformMode;
          this._key = key;
          this.reset();
        },
        /**
         * Resets this cipher to its initial state.
         *
         * @example
         *
         *     cipher.reset();
         */
        reset: function() {
          BufferedBlockAlgorithm.reset.call(this);
          this._doReset();
        },
        /**
         * Adds data to be encrypted or decrypted.
         *
         * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
         *
         * @return {WordArray} The data after processing.
         *
         * @example
         *
         *     var encrypted = cipher.process('data');
         *     var encrypted = cipher.process(wordArray);
         */
        process: function(dataUpdate) {
          this._append(dataUpdate);
          return this._process();
        },
        /**
         * Finalizes the encryption or decryption process.
         * Note that the finalize operation is effectively a destructive, read-once operation.
         *
         * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
         *
         * @return {WordArray} The data after final processing.
         *
         * @example
         *
         *     var encrypted = cipher.finalize();
         *     var encrypted = cipher.finalize('data');
         *     var encrypted = cipher.finalize(wordArray);
         */
        finalize: function(dataUpdate) {
          if (dataUpdate) {
            this._append(dataUpdate);
          }
          var finalProcessedData = this._doFinalize();
          return finalProcessedData;
        },
        keySize: 128 / 32,
        ivSize: 128 / 32,
        _ENC_XFORM_MODE: 1,
        _DEC_XFORM_MODE: 2,
        /**
         * Creates shortcut functions to a cipher's object interface.
         *
         * @param {Cipher} cipher The cipher to create a helper for.
         *
         * @return {Object} An object with encrypt and decrypt shortcut functions.
         *
         * @static
         *
         * @example
         *
         *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
         */
        _createHelper: /* @__PURE__ */ function() {
          function selectCipherStrategy(key) {
            if (typeof key == "string") {
              return PasswordBasedCipher;
            } else {
              return SerializableCipher;
            }
          }
          return function(cipher) {
            return {
              encrypt: function(message, key, cfg) {
                return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
              },
              decrypt: function(ciphertext, key, cfg) {
                return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
              }
            };
          };
        }()
      });
      C_lib.StreamCipher = Cipher.extend({
        _doFinalize: function() {
          var finalProcessedBlocks = this._process(true);
          return finalProcessedBlocks;
        },
        blockSize: 1
      });
      var C_mode = C.mode = {};
      var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
        /**
         * Creates this mode for encryption.
         *
         * @param {Cipher} cipher A block cipher instance.
         * @param {Array} iv The IV words.
         *
         * @static
         *
         * @example
         *
         *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
         */
        createEncryptor: function(cipher, iv) {
          return this.Encryptor.create(cipher, iv);
        },
        /**
         * Creates this mode for decryption.
         *
         * @param {Cipher} cipher A block cipher instance.
         * @param {Array} iv The IV words.
         *
         * @static
         *
         * @example
         *
         *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
         */
        createDecryptor: function(cipher, iv) {
          return this.Decryptor.create(cipher, iv);
        },
        /**
         * Initializes a newly created mode.
         *
         * @param {Cipher} cipher A block cipher instance.
         * @param {Array} iv The IV words.
         *
         * @example
         *
         *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
         */
        init: function(cipher, iv) {
          this._cipher = cipher;
          this._iv = iv;
        }
      });
      var CBC = C_mode.CBC = function() {
        var CBC2 = BlockCipherMode.extend();
        CBC2.Encryptor = CBC2.extend({
          /**
           * Processes the data block at offset.
           *
           * @param {Array} words The data words to operate on.
           * @param {number} offset The offset where the block starts.
           *
           * @example
           *
           *     mode.processBlock(data.words, offset);
           */
          processBlock: function(words, offset2) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            xorBlock.call(this, words, offset2, blockSize);
            cipher.encryptBlock(words, offset2);
            this._prevBlock = words.slice(offset2, offset2 + blockSize);
          }
        });
        CBC2.Decryptor = CBC2.extend({
          /**
           * Processes the data block at offset.
           *
           * @param {Array} words The data words to operate on.
           * @param {number} offset The offset where the block starts.
           *
           * @example
           *
           *     mode.processBlock(data.words, offset);
           */
          processBlock: function(words, offset2) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var thisBlock = words.slice(offset2, offset2 + blockSize);
            cipher.decryptBlock(words, offset2);
            xorBlock.call(this, words, offset2, blockSize);
            this._prevBlock = thisBlock;
          }
        });
        function xorBlock(words, offset2, blockSize) {
          var block;
          var iv = this._iv;
          if (iv) {
            block = iv;
            this._iv = undefined$1;
          } else {
            block = this._prevBlock;
          }
          for (var i = 0; i < blockSize; i++) {
            words[offset2 + i] ^= block[i];
          }
        }
        return CBC2;
      }();
      var C_pad = C.pad = {};
      var Pkcs7 = C_pad.Pkcs7 = {
        /**
         * Pads data using the algorithm defined in PKCS #5/7.
         *
         * @param {WordArray} data The data to pad.
         * @param {number} blockSize The multiple that the data should be padded to.
         *
         * @static
         *
         * @example
         *
         *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
         */
        pad: function(data, blockSize) {
          var blockSizeBytes = blockSize * 4;
          var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
          var paddingWord = nPaddingBytes << 24 | nPaddingBytes << 16 | nPaddingBytes << 8 | nPaddingBytes;
          var paddingWords = [];
          for (var i = 0; i < nPaddingBytes; i += 4) {
            paddingWords.push(paddingWord);
          }
          var padding = WordArray.create(paddingWords, nPaddingBytes);
          data.concat(padding);
        },
        /**
         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
         *
         * @param {WordArray} data The data to unpad.
         *
         * @static
         *
         * @example
         *
         *     CryptoJS.pad.Pkcs7.unpad(wordArray);
         */
        unpad: function(data) {
          var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
          data.sigBytes -= nPaddingBytes;
        }
      };
      C_lib.BlockCipher = Cipher.extend({
        /**
         * Configuration options.
         *
         * @property {Mode} mode The block mode to use. Default: CBC
         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
         */
        cfg: Cipher.cfg.extend({
          mode: CBC,
          padding: Pkcs7
        }),
        reset: function() {
          var modeCreator;
          Cipher.reset.call(this);
          var cfg = this.cfg;
          var iv = cfg.iv;
          var mode = cfg.mode;
          if (this._xformMode == this._ENC_XFORM_MODE) {
            modeCreator = mode.createEncryptor;
          } else {
            modeCreator = mode.createDecryptor;
            this._minBufferSize = 1;
          }
          if (this._mode && this._mode.__creator == modeCreator) {
            this._mode.init(this, iv && iv.words);
          } else {
            this._mode = modeCreator.call(mode, this, iv && iv.words);
            this._mode.__creator = modeCreator;
          }
        },
        _doProcessBlock: function(words, offset2) {
          this._mode.processBlock(words, offset2);
        },
        _doFinalize: function() {
          var finalProcessedBlocks;
          var padding = this.cfg.padding;
          if (this._xformMode == this._ENC_XFORM_MODE) {
            padding.pad(this._data, this.blockSize);
            finalProcessedBlocks = this._process(true);
          } else {
            finalProcessedBlocks = this._process(true);
            padding.unpad(finalProcessedBlocks);
          }
          return finalProcessedBlocks;
        },
        blockSize: 128 / 32
      });
      var CipherParams = C_lib.CipherParams = Base.extend({
        /**
         * Initializes a newly created cipher params object.
         *
         * @param {Object} cipherParams An object with any of the possible cipher parameters.
         *
         * @example
         *
         *     var cipherParams = CryptoJS.lib.CipherParams.create({
         *         ciphertext: ciphertextWordArray,
         *         key: keyWordArray,
         *         iv: ivWordArray,
         *         salt: saltWordArray,
         *         algorithm: CryptoJS.algo.AES,
         *         mode: CryptoJS.mode.CBC,
         *         padding: CryptoJS.pad.PKCS7,
         *         blockSize: 4,
         *         formatter: CryptoJS.format.OpenSSL
         *     });
         */
        init: function(cipherParams) {
          this.mixIn(cipherParams);
        },
        /**
         * Converts this cipher params object to a string.
         *
         * @param {Format} formatter (Optional) The formatting strategy to use.
         *
         * @return {string} The stringified cipher params.
         *
         * @throws Error If neither the formatter nor the default formatter is set.
         *
         * @example
         *
         *     var string = cipherParams + '';
         *     var string = cipherParams.toString();
         *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
         */
        toString: function(formatter) {
          return (formatter || this.formatter).stringify(this);
        }
      });
      var C_format = C.format = {};
      var OpenSSLFormatter = C_format.OpenSSL = {
        /**
         * Converts a cipher params object to an OpenSSL-compatible string.
         *
         * @param {CipherParams} cipherParams The cipher params object.
         *
         * @return {string} The OpenSSL-compatible string.
         *
         * @static
         *
         * @example
         *
         *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
         */
        stringify: function(cipherParams) {
          var wordArray;
          var ciphertext = cipherParams.ciphertext;
          var salt = cipherParams.salt;
          if (salt) {
            wordArray = WordArray.create([1398893684, 1701076831]).concat(salt).concat(ciphertext);
          } else {
            wordArray = ciphertext;
          }
          return wordArray.toString(Base64);
        },
        /**
         * Converts an OpenSSL-compatible string to a cipher params object.
         *
         * @param {string} openSSLStr The OpenSSL-compatible string.
         *
         * @return {CipherParams} The cipher params object.
         *
         * @static
         *
         * @example
         *
         *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
         */
        parse: function(openSSLStr) {
          var salt;
          var ciphertext = Base64.parse(openSSLStr);
          var ciphertextWords = ciphertext.words;
          if (ciphertextWords[0] == 1398893684 && ciphertextWords[1] == 1701076831) {
            salt = WordArray.create(ciphertextWords.slice(2, 4));
            ciphertextWords.splice(0, 4);
            ciphertext.sigBytes -= 16;
          }
          return CipherParams.create({ ciphertext, salt });
        }
      };
      var SerializableCipher = C_lib.SerializableCipher = Base.extend({
        /**
         * Configuration options.
         *
         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
         */
        cfg: Base.extend({
          format: OpenSSLFormatter
        }),
        /**
         * Encrypts a message.
         *
         * @param {Cipher} cipher The cipher algorithm to use.
         * @param {WordArray|string} message The message to encrypt.
         * @param {WordArray} key The key.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {CipherParams} A cipher params object.
         *
         * @static
         *
         * @example
         *
         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
         */
        encrypt: function(cipher, message, key, cfg) {
          cfg = this.cfg.extend(cfg);
          var encryptor = cipher.createEncryptor(key, cfg);
          var ciphertext = encryptor.finalize(message);
          var cipherCfg = encryptor.cfg;
          return CipherParams.create({
            ciphertext,
            key,
            iv: cipherCfg.iv,
            algorithm: cipher,
            mode: cipherCfg.mode,
            padding: cipherCfg.padding,
            blockSize: cipher.blockSize,
            formatter: cfg.format
          });
        },
        /**
         * Decrypts serialized ciphertext.
         *
         * @param {Cipher} cipher The cipher algorithm to use.
         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
         * @param {WordArray} key The key.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {WordArray} The plaintext.
         *
         * @static
         *
         * @example
         *
         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
         */
        decrypt: function(cipher, ciphertext, key, cfg) {
          cfg = this.cfg.extend(cfg);
          ciphertext = this._parse(ciphertext, cfg.format);
          var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);
          return plaintext;
        },
        /**
         * Converts serialized ciphertext to CipherParams,
         * else assumed CipherParams already and returns ciphertext unchanged.
         *
         * @param {CipherParams|string} ciphertext The ciphertext.
         * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
         *
         * @return {CipherParams} The unserialized ciphertext.
         *
         * @static
         *
         * @example
         *
         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
         */
        _parse: function(ciphertext, format2) {
          if (typeof ciphertext == "string") {
            return format2.parse(ciphertext, this);
          } else {
            return ciphertext;
          }
        }
      });
      var C_kdf = C.kdf = {};
      var OpenSSLKdf = C_kdf.OpenSSL = {
        /**
         * Derives a key and IV from a password.
         *
         * @param {string} password The password to derive from.
         * @param {number} keySize The size in words of the key to generate.
         * @param {number} ivSize The size in words of the IV to generate.
         * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
         *
         * @return {CipherParams} A cipher params object with the key, IV, and salt.
         *
         * @static
         *
         * @example
         *
         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
         */
        execute: function(password, keySize, ivSize, salt) {
          if (!salt) {
            salt = WordArray.random(64 / 8);
          }
          var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);
          var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
          key.sigBytes = keySize * 4;
          return CipherParams.create({ key, iv, salt });
        }
      };
      var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
        /**
         * Configuration options.
         *
         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
         */
        cfg: SerializableCipher.cfg.extend({
          kdf: OpenSSLKdf
        }),
        /**
         * Encrypts a message using a password.
         *
         * @param {Cipher} cipher The cipher algorithm to use.
         * @param {WordArray|string} message The message to encrypt.
         * @param {string} password The password.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {CipherParams} A cipher params object.
         *
         * @static
         *
         * @example
         *
         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
         */
        encrypt: function(cipher, message, password, cfg) {
          cfg = this.cfg.extend(cfg);
          var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);
          cfg.iv = derivedParams.iv;
          var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);
          ciphertext.mixIn(derivedParams);
          return ciphertext;
        },
        /**
         * Decrypts serialized ciphertext using a password.
         *
         * @param {Cipher} cipher The cipher algorithm to use.
         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
         * @param {string} password The password.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {WordArray} The plaintext.
         *
         * @static
         *
         * @example
         *
         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
         */
        decrypt: function(cipher, ciphertext, password, cfg) {
          cfg = this.cfg.extend(cfg);
          ciphertext = this._parse(ciphertext, cfg.format);
          var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);
          cfg.iv = derivedParams.iv;
          var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);
          return plaintext;
        }
      });
    }();
  });
});
var modeCfb = createCommonjsModule(function(module, exports) {
  (function(root, factory, undef) {
    {
      module.exports = factory(core, cipherCore);
    }
  })(commonjsGlobal, function(CryptoJS) {
    CryptoJS.mode.CFB = function() {
      var CFB = CryptoJS.lib.BlockCipherMode.extend();
      CFB.Encryptor = CFB.extend({
        processBlock: function(words, offset2) {
          var cipher = this._cipher;
          var blockSize = cipher.blockSize;
          generateKeystreamAndEncrypt.call(this, words, offset2, blockSize, cipher);
          this._prevBlock = words.slice(offset2, offset2 + blockSize);
        }
      });
      CFB.Decryptor = CFB.extend({
        processBlock: function(words, offset2) {
          var cipher = this._cipher;
          var blockSize = cipher.blockSize;
          var thisBlock = words.slice(offset2, offset2 + blockSize);
          generateKeystreamAndEncrypt.call(this, words, offset2, blockSize, cipher);
          this._prevBlock = thisBlock;
        }
      });
      function generateKeystreamAndEncrypt(words, offset2, blockSize, cipher) {
        var keystream;
        var iv = this._iv;
        if (iv) {
          keystream = iv.slice(0);
          this._iv = void 0;
        } else {
          keystream = this._prevBlock;
        }
        cipher.encryptBlock(keystream, 0);
        for (var i = 0; i < blockSize; i++) {
          words[offset2 + i] ^= keystream[i];
        }
      }
      return CFB;
    }();
    return CryptoJS.mode.CFB;
  });
});
var modeCtr = createCommonjsModule(function(module, exports) {
  (function(root, factory, undef) {
    {
      module.exports = factory(core, cipherCore);
    }
  })(commonjsGlobal, function(CryptoJS) {
    CryptoJS.mode.CTR = function() {
      var CTR = CryptoJS.lib.BlockCipherMode.extend();
      var Encryptor = CTR.Encryptor = CTR.extend({
        processBlock: function(words, offset2) {
          var cipher = this._cipher;
          var blockSize = cipher.blockSize;
          var iv = this._iv;
          var counter = this._counter;
          if (iv) {
            counter = this._counter = iv.slice(0);
            this._iv = void 0;
          }
          var keystream = counter.slice(0);
          cipher.encryptBlock(keystream, 0);
          counter[blockSize - 1] = counter[blockSize - 1] + 1 | 0;
          for (var i = 0; i < blockSize; i++) {
            words[offset2 + i] ^= keystream[i];
          }
        }
      });
      CTR.Decryptor = Encryptor;
      return CTR;
    }();
    return CryptoJS.mode.CTR;
  });
});
var modeCtrGladman = createCommonjsModule(function(module, exports) {
  (function(root, factory, undef) {
    {
      module.exports = factory(core, cipherCore);
    }
  })(commonjsGlobal, function(CryptoJS) {
    CryptoJS.mode.CTRGladman = function() {
      var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();
      function incWord(word) {
        if ((word >> 24 & 255) === 255) {
          var b1 = word >> 16 & 255;
          var b2 = word >> 8 & 255;
          var b3 = word & 255;
          if (b1 === 255) {
            b1 = 0;
            if (b2 === 255) {
              b2 = 0;
              if (b3 === 255) {
                b3 = 0;
              } else {
                ++b3;
              }
            } else {
              ++b2;
            }
          } else {
            ++b1;
          }
          word = 0;
          word += b1 << 16;
          word += b2 << 8;
          word += b3;
        } else {
          word += 1 << 24;
        }
        return word;
      }
      function incCounter(counter) {
        if ((counter[0] = incWord(counter[0])) === 0) {
          counter[1] = incWord(counter[1]);
        }
        return counter;
      }
      var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
        processBlock: function(words, offset2) {
          var cipher = this._cipher;
          var blockSize = cipher.blockSize;
          var iv = this._iv;
          var counter = this._counter;
          if (iv) {
            counter = this._counter = iv.slice(0);
            this._iv = void 0;
          }
          incCounter(counter);
          var keystream = counter.slice(0);
          cipher.encryptBlock(keystream, 0);
          for (var i = 0; i < blockSize; i++) {
            words[offset2 + i] ^= keystream[i];
          }
        }
      });
      CTRGladman.Decryptor = Encryptor;
      return CTRGladman;
    }();
    return CryptoJS.mode.CTRGladman;
  });
});
var modeOfb = createCommonjsModule(function(module, exports) {
  (function(root, factory, undef) {
    {
      module.exports = factory(core, cipherCore);
    }
  })(commonjsGlobal, function(CryptoJS) {
    CryptoJS.mode.OFB = function() {
      var OFB = CryptoJS.lib.BlockCipherMode.extend();
      var Encryptor = OFB.Encryptor = OFB.extend({
        processBlock: function(words, offset2) {
          var cipher = this._cipher;
          var blockSize = cipher.blockSize;
          var iv = this._iv;
          var keystream = this._keystream;
          if (iv) {
            keystream = this._keystream = iv.slice(0);
            this._iv = void 0;
          }
          cipher.encryptBlock(keystream, 0);
          for (var i = 0; i < blockSize; i++) {
            words[offset2 + i] ^= keystream[i];
          }
        }
      });
      OFB.Decryptor = Encryptor;
      return OFB;
    }();
    return CryptoJS.mode.OFB;
  });
});
var modeEcb = createCommonjsModule(function(module, exports) {
  (function(root, factory, undef) {
    {
      module.exports = factory(core, cipherCore);
    }
  })(commonjsGlobal, function(CryptoJS) {
    CryptoJS.mode.ECB = function() {
      var ECB = CryptoJS.lib.BlockCipherMode.extend();
      ECB.Encryptor = ECB.extend({
        processBlock: function(words, offset2) {
          this._cipher.encryptBlock(words, offset2);
        }
      });
      ECB.Decryptor = ECB.extend({
        processBlock: function(words, offset2) {
          this._cipher.decryptBlock(words, offset2);
        }
      });
      return ECB;
    }();
    return CryptoJS.mode.ECB;
  });
});
var padAnsix923 = createCommonjsModule(function(module, exports) {
  (function(root, factory, undef) {
    {
      module.exports = factory(core, cipherCore);
    }
  })(commonjsGlobal, function(CryptoJS) {
    CryptoJS.pad.AnsiX923 = {
      pad: function(data, blockSize) {
        var dataSigBytes = data.sigBytes;
        var blockSizeBytes = blockSize * 4;
        var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;
        var lastBytePos = dataSigBytes + nPaddingBytes - 1;
        data.clamp();
        data.words[lastBytePos >>> 2] |= nPaddingBytes << 24 - lastBytePos % 4 * 8;
        data.sigBytes += nPaddingBytes;
      },
      unpad: function(data) {
        var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
        data.sigBytes -= nPaddingBytes;
      }
    };
    return CryptoJS.pad.Ansix923;
  });
});
var padIso10126 = createCommonjsModule(function(module, exports) {
  (function(root, factory, undef) {
    {
      module.exports = factory(core, cipherCore);
    }
  })(commonjsGlobal, function(CryptoJS) {
    CryptoJS.pad.Iso10126 = {
      pad: function(data, blockSize) {
        var blockSizeBytes = blockSize * 4;
        var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
        data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
      },
      unpad: function(data) {
        var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
        data.sigBytes -= nPaddingBytes;
      }
    };
    return CryptoJS.pad.Iso10126;
  });
});
var padIso97971 = createCommonjsModule(function(module, exports) {
  (function(root, factory, undef) {
    {
      module.exports = factory(core, cipherCore);
    }
  })(commonjsGlobal, function(CryptoJS) {
    CryptoJS.pad.Iso97971 = {
      pad: function(data, blockSize) {
        data.concat(CryptoJS.lib.WordArray.create([2147483648], 1));
        CryptoJS.pad.ZeroPadding.pad(data, blockSize);
      },
      unpad: function(data) {
        CryptoJS.pad.ZeroPadding.unpad(data);
        data.sigBytes--;
      }
    };
    return CryptoJS.pad.Iso97971;
  });
});
var padZeropadding = createCommonjsModule(function(module, exports) {
  (function(root, factory, undef) {
    {
      module.exports = factory(core, cipherCore);
    }
  })(commonjsGlobal, function(CryptoJS) {
    CryptoJS.pad.ZeroPadding = {
      pad: function(data, blockSize) {
        var blockSizeBytes = blockSize * 4;
        data.clamp();
        data.sigBytes += blockSizeBytes - (data.sigBytes % blockSizeBytes || blockSizeBytes);
      },
      unpad: function(data) {
        var dataWords = data.words;
        var i = data.sigBytes - 1;
        for (var i = data.sigBytes - 1; i >= 0; i--) {
          if (dataWords[i >>> 2] >>> 24 - i % 4 * 8 & 255) {
            data.sigBytes = i + 1;
            break;
          }
        }
      }
    };
    return CryptoJS.pad.ZeroPadding;
  });
});
var padNopadding = createCommonjsModule(function(module, exports) {
  (function(root, factory, undef) {
    {
      module.exports = factory(core, cipherCore);
    }
  })(commonjsGlobal, function(CryptoJS) {
    CryptoJS.pad.NoPadding = {
      pad: function() {
      },
      unpad: function() {
      }
    };
    return CryptoJS.pad.NoPadding;
  });
});
var formatHex = createCommonjsModule(function(module, exports) {
  (function(root, factory, undef) {
    {
      module.exports = factory(core, cipherCore);
    }
  })(commonjsGlobal, function(CryptoJS) {
    (function(undefined$1) {
      var C = CryptoJS;
      var C_lib = C.lib;
      var CipherParams = C_lib.CipherParams;
      var C_enc = C.enc;
      var Hex = C_enc.Hex;
      var C_format = C.format;
      C_format.Hex = {
        /**
         * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
         *
         * @param {CipherParams} cipherParams The cipher params object.
         *
         * @return {string} The hexadecimally encoded string.
         *
         * @static
         *
         * @example
         *
         *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
         */
        stringify: function(cipherParams) {
          return cipherParams.ciphertext.toString(Hex);
        },
        /**
         * Converts a hexadecimally encoded ciphertext string to a cipher params object.
         *
         * @param {string} input The hexadecimally encoded string.
         *
         * @return {CipherParams} The cipher params object.
         *
         * @static
         *
         * @example
         *
         *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
         */
        parse: function(input) {
          var ciphertext = Hex.parse(input);
          return CipherParams.create({ ciphertext });
        }
      };
    })();
    return CryptoJS.format.Hex;
  });
});
var aes = createCommonjsModule(function(module, exports) {
  (function(root, factory, undef) {
    {
      module.exports = factory(core, encBase64, md5, evpkdf, cipherCore);
    }
  })(commonjsGlobal, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var BlockCipher = C_lib.BlockCipher;
      var C_algo = C.algo;
      var SBOX = [];
      var INV_SBOX = [];
      var SUB_MIX_0 = [];
      var SUB_MIX_1 = [];
      var SUB_MIX_2 = [];
      var SUB_MIX_3 = [];
      var INV_SUB_MIX_0 = [];
      var INV_SUB_MIX_1 = [];
      var INV_SUB_MIX_2 = [];
      var INV_SUB_MIX_3 = [];
      (function() {
        var d2 = [];
        for (var i = 0; i < 256; i++) {
          if (i < 128) {
            d2[i] = i << 1;
          } else {
            d2[i] = i << 1 ^ 283;
          }
        }
        var x2 = 0;
        var xi = 0;
        for (var i = 0; i < 256; i++) {
          var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
          sx = sx >>> 8 ^ sx & 255 ^ 99;
          SBOX[x2] = sx;
          INV_SBOX[sx] = x2;
          var x22 = d2[x2];
          var x4 = d2[x22];
          var x8 = d2[x4];
          var t2 = d2[sx] * 257 ^ sx * 16843008;
          SUB_MIX_0[x2] = t2 << 24 | t2 >>> 8;
          SUB_MIX_1[x2] = t2 << 16 | t2 >>> 16;
          SUB_MIX_2[x2] = t2 << 8 | t2 >>> 24;
          SUB_MIX_3[x2] = t2;
          var t2 = x8 * 16843009 ^ x4 * 65537 ^ x22 * 257 ^ x2 * 16843008;
          INV_SUB_MIX_0[sx] = t2 << 24 | t2 >>> 8;
          INV_SUB_MIX_1[sx] = t2 << 16 | t2 >>> 16;
          INV_SUB_MIX_2[sx] = t2 << 8 | t2 >>> 24;
          INV_SUB_MIX_3[sx] = t2;
          if (!x2) {
            x2 = xi = 1;
          } else {
            x2 = x22 ^ d2[d2[d2[x8 ^ x22]]];
            xi ^= d2[d2[xi]];
          }
        }
      })();
      var RCON = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
      var AES = C_algo.AES = BlockCipher.extend({
        _doReset: function() {
          var t2;
          if (this._nRounds && this._keyPriorReset === this._key) {
            return;
          }
          var key = this._keyPriorReset = this._key;
          var keyWords = key.words;
          var keySize = key.sigBytes / 4;
          var nRounds = this._nRounds = keySize + 6;
          var ksRows = (nRounds + 1) * 4;
          var keySchedule = this._keySchedule = [];
          for (var ksRow = 0; ksRow < ksRows; ksRow++) {
            if (ksRow < keySize) {
              keySchedule[ksRow] = keyWords[ksRow];
            } else {
              t2 = keySchedule[ksRow - 1];
              if (!(ksRow % keySize)) {
                t2 = t2 << 8 | t2 >>> 24;
                t2 = SBOX[t2 >>> 24] << 24 | SBOX[t2 >>> 16 & 255] << 16 | SBOX[t2 >>> 8 & 255] << 8 | SBOX[t2 & 255];
                t2 ^= RCON[ksRow / keySize | 0] << 24;
              } else if (keySize > 6 && ksRow % keySize == 4) {
                t2 = SBOX[t2 >>> 24] << 24 | SBOX[t2 >>> 16 & 255] << 16 | SBOX[t2 >>> 8 & 255] << 8 | SBOX[t2 & 255];
              }
              keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t2;
            }
          }
          var invKeySchedule = this._invKeySchedule = [];
          for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
            var ksRow = ksRows - invKsRow;
            if (invKsRow % 4) {
              var t2 = keySchedule[ksRow];
            } else {
              var t2 = keySchedule[ksRow - 4];
            }
            if (invKsRow < 4 || ksRow <= 4) {
              invKeySchedule[invKsRow] = t2;
            } else {
              invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t2 >>> 24]] ^ INV_SUB_MIX_1[SBOX[t2 >>> 16 & 255]] ^ INV_SUB_MIX_2[SBOX[t2 >>> 8 & 255]] ^ INV_SUB_MIX_3[SBOX[t2 & 255]];
            }
          }
        },
        encryptBlock: function(M, offset2) {
          this._doCryptBlock(M, offset2, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
        },
        decryptBlock: function(M, offset2) {
          var t2 = M[offset2 + 1];
          M[offset2 + 1] = M[offset2 + 3];
          M[offset2 + 3] = t2;
          this._doCryptBlock(M, offset2, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);
          var t2 = M[offset2 + 1];
          M[offset2 + 1] = M[offset2 + 3];
          M[offset2 + 3] = t2;
        },
        _doCryptBlock: function(M, offset2, keySchedule, SUB_MIX_02, SUB_MIX_12, SUB_MIX_22, SUB_MIX_32, SBOX2) {
          var nRounds = this._nRounds;
          var s0 = M[offset2] ^ keySchedule[0];
          var s1 = M[offset2 + 1] ^ keySchedule[1];
          var s2 = M[offset2 + 2] ^ keySchedule[2];
          var s3 = M[offset2 + 3] ^ keySchedule[3];
          var ksRow = 4;
          for (var round2 = 1; round2 < nRounds; round2++) {
            var t0 = SUB_MIX_02[s0 >>> 24] ^ SUB_MIX_12[s1 >>> 16 & 255] ^ SUB_MIX_22[s2 >>> 8 & 255] ^ SUB_MIX_32[s3 & 255] ^ keySchedule[ksRow++];
            var t1 = SUB_MIX_02[s1 >>> 24] ^ SUB_MIX_12[s2 >>> 16 & 255] ^ SUB_MIX_22[s3 >>> 8 & 255] ^ SUB_MIX_32[s0 & 255] ^ keySchedule[ksRow++];
            var t2 = SUB_MIX_02[s2 >>> 24] ^ SUB_MIX_12[s3 >>> 16 & 255] ^ SUB_MIX_22[s0 >>> 8 & 255] ^ SUB_MIX_32[s1 & 255] ^ keySchedule[ksRow++];
            var t3 = SUB_MIX_02[s3 >>> 24] ^ SUB_MIX_12[s0 >>> 16 & 255] ^ SUB_MIX_22[s1 >>> 8 & 255] ^ SUB_MIX_32[s2 & 255] ^ keySchedule[ksRow++];
            s0 = t0;
            s1 = t1;
            s2 = t2;
            s3 = t3;
          }
          var t0 = (SBOX2[s0 >>> 24] << 24 | SBOX2[s1 >>> 16 & 255] << 16 | SBOX2[s2 >>> 8 & 255] << 8 | SBOX2[s3 & 255]) ^ keySchedule[ksRow++];
          var t1 = (SBOX2[s1 >>> 24] << 24 | SBOX2[s2 >>> 16 & 255] << 16 | SBOX2[s3 >>> 8 & 255] << 8 | SBOX2[s0 & 255]) ^ keySchedule[ksRow++];
          var t2 = (SBOX2[s2 >>> 24] << 24 | SBOX2[s3 >>> 16 & 255] << 16 | SBOX2[s0 >>> 8 & 255] << 8 | SBOX2[s1 & 255]) ^ keySchedule[ksRow++];
          var t3 = (SBOX2[s3 >>> 24] << 24 | SBOX2[s0 >>> 16 & 255] << 16 | SBOX2[s1 >>> 8 & 255] << 8 | SBOX2[s2 & 255]) ^ keySchedule[ksRow++];
          M[offset2] = t0;
          M[offset2 + 1] = t1;
          M[offset2 + 2] = t2;
          M[offset2 + 3] = t3;
        },
        keySize: 256 / 32
      });
      C.AES = BlockCipher._createHelper(AES);
    })();
    return CryptoJS.AES;
  });
});
var tripledes = createCommonjsModule(function(module, exports) {
  (function(root, factory, undef) {
    {
      module.exports = factory(core, encBase64, md5, evpkdf, cipherCore);
    }
  })(commonjsGlobal, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var BlockCipher = C_lib.BlockCipher;
      var C_algo = C.algo;
      var PC1 = [
        57,
        49,
        41,
        33,
        25,
        17,
        9,
        1,
        58,
        50,
        42,
        34,
        26,
        18,
        10,
        2,
        59,
        51,
        43,
        35,
        27,
        19,
        11,
        3,
        60,
        52,
        44,
        36,
        63,
        55,
        47,
        39,
        31,
        23,
        15,
        7,
        62,
        54,
        46,
        38,
        30,
        22,
        14,
        6,
        61,
        53,
        45,
        37,
        29,
        21,
        13,
        5,
        28,
        20,
        12,
        4
      ];
      var PC2 = [
        14,
        17,
        11,
        24,
        1,
        5,
        3,
        28,
        15,
        6,
        21,
        10,
        23,
        19,
        12,
        4,
        26,
        8,
        16,
        7,
        27,
        20,
        13,
        2,
        41,
        52,
        31,
        37,
        47,
        55,
        30,
        40,
        51,
        45,
        33,
        48,
        44,
        49,
        39,
        56,
        34,
        53,
        46,
        42,
        50,
        36,
        29,
        32
      ];
      var BIT_SHIFTS = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
      var SBOX_P = [
        {
          0: 8421888,
          268435456: 32768,
          536870912: 8421378,
          805306368: 2,
          1073741824: 512,
          1342177280: 8421890,
          1610612736: 8389122,
          1879048192: 8388608,
          2147483648: 514,
          2415919104: 8389120,
          2684354560: 33280,
          2952790016: 8421376,
          3221225472: 32770,
          3489660928: 8388610,
          3758096384: 0,
          4026531840: 33282,
          134217728: 0,
          402653184: 8421890,
          671088640: 33282,
          939524096: 32768,
          1207959552: 8421888,
          1476395008: 512,
          1744830464: 8421378,
          2013265920: 2,
          2281701376: 8389120,
          2550136832: 33280,
          2818572288: 8421376,
          3087007744: 8389122,
          3355443200: 8388610,
          3623878656: 32770,
          3892314112: 514,
          4160749568: 8388608,
          1: 32768,
          268435457: 2,
          536870913: 8421888,
          805306369: 8388608,
          1073741825: 8421378,
          1342177281: 33280,
          1610612737: 512,
          1879048193: 8389122,
          2147483649: 8421890,
          2415919105: 8421376,
          2684354561: 8388610,
          2952790017: 33282,
          3221225473: 514,
          3489660929: 8389120,
          3758096385: 32770,
          4026531841: 0,
          134217729: 8421890,
          402653185: 8421376,
          671088641: 8388608,
          939524097: 512,
          1207959553: 32768,
          1476395009: 8388610,
          1744830465: 2,
          2013265921: 33282,
          2281701377: 32770,
          2550136833: 8389122,
          2818572289: 514,
          3087007745: 8421888,
          3355443201: 8389120,
          3623878657: 0,
          3892314113: 33280,
          4160749569: 8421378
        },
        {
          0: 1074282512,
          16777216: 16384,
          33554432: 524288,
          50331648: 1074266128,
          67108864: 1073741840,
          83886080: 1074282496,
          100663296: 1073758208,
          117440512: 16,
          134217728: 540672,
          150994944: 1073758224,
          167772160: 1073741824,
          184549376: 540688,
          201326592: 524304,
          218103808: 0,
          234881024: 16400,
          251658240: 1074266112,
          8388608: 1073758208,
          25165824: 540688,
          41943040: 16,
          58720256: 1073758224,
          75497472: 1074282512,
          92274688: 1073741824,
          109051904: 524288,
          125829120: 1074266128,
          142606336: 524304,
          159383552: 0,
          176160768: 16384,
          192937984: 1074266112,
          209715200: 1073741840,
          226492416: 540672,
          243269632: 1074282496,
          260046848: 16400,
          268435456: 0,
          285212672: 1074266128,
          301989888: 1073758224,
          318767104: 1074282496,
          335544320: 1074266112,
          352321536: 16,
          369098752: 540688,
          385875968: 16384,
          402653184: 16400,
          419430400: 524288,
          436207616: 524304,
          452984832: 1073741840,
          469762048: 540672,
          486539264: 1073758208,
          503316480: 1073741824,
          520093696: 1074282512,
          276824064: 540688,
          293601280: 524288,
          310378496: 1074266112,
          327155712: 16384,
          343932928: 1073758208,
          360710144: 1074282512,
          377487360: 16,
          394264576: 1073741824,
          411041792: 1074282496,
          427819008: 1073741840,
          444596224: 1073758224,
          461373440: 524304,
          478150656: 0,
          494927872: 16400,
          511705088: 1074266128,
          528482304: 540672
        },
        {
          0: 260,
          1048576: 0,
          2097152: 67109120,
          3145728: 65796,
          4194304: 65540,
          5242880: 67108868,
          6291456: 67174660,
          7340032: 67174400,
          8388608: 67108864,
          9437184: 67174656,
          10485760: 65792,
          11534336: 67174404,
          12582912: 67109124,
          13631488: 65536,
          14680064: 4,
          15728640: 256,
          524288: 67174656,
          1572864: 67174404,
          2621440: 0,
          3670016: 67109120,
          4718592: 67108868,
          5767168: 65536,
          6815744: 65540,
          7864320: 260,
          8912896: 4,
          9961472: 256,
          11010048: 67174400,
          12058624: 65796,
          13107200: 65792,
          14155776: 67109124,
          15204352: 67174660,
          16252928: 67108864,
          16777216: 67174656,
          17825792: 65540,
          18874368: 65536,
          19922944: 67109120,
          20971520: 256,
          22020096: 67174660,
          23068672: 67108868,
          24117248: 0,
          25165824: 67109124,
          26214400: 67108864,
          27262976: 4,
          28311552: 65792,
          29360128: 67174400,
          30408704: 260,
          31457280: 65796,
          32505856: 67174404,
          17301504: 67108864,
          18350080: 260,
          19398656: 67174656,
          20447232: 0,
          21495808: 65540,
          22544384: 67109120,
          23592960: 256,
          24641536: 67174404,
          25690112: 65536,
          26738688: 67174660,
          27787264: 65796,
          28835840: 67108868,
          29884416: 67109124,
          30932992: 67174400,
          31981568: 4,
          33030144: 65792
        },
        {
          0: 2151682048,
          65536: 2147487808,
          131072: 4198464,
          196608: 2151677952,
          262144: 0,
          327680: 4198400,
          393216: 2147483712,
          458752: 4194368,
          524288: 2147483648,
          589824: 4194304,
          655360: 64,
          720896: 2147487744,
          786432: 2151678016,
          851968: 4160,
          917504: 4096,
          983040: 2151682112,
          32768: 2147487808,
          98304: 64,
          163840: 2151678016,
          229376: 2147487744,
          294912: 4198400,
          360448: 2151682112,
          425984: 0,
          491520: 2151677952,
          557056: 4096,
          622592: 2151682048,
          688128: 4194304,
          753664: 4160,
          819200: 2147483648,
          884736: 4194368,
          950272: 4198464,
          1015808: 2147483712,
          1048576: 4194368,
          1114112: 4198400,
          1179648: 2147483712,
          1245184: 0,
          1310720: 4160,
          1376256: 2151678016,
          1441792: 2151682048,
          1507328: 2147487808,
          1572864: 2151682112,
          1638400: 2147483648,
          1703936: 2151677952,
          1769472: 4198464,
          1835008: 2147487744,
          1900544: 4194304,
          1966080: 64,
          2031616: 4096,
          1081344: 2151677952,
          1146880: 2151682112,
          1212416: 0,
          1277952: 4198400,
          1343488: 4194368,
          1409024: 2147483648,
          1474560: 2147487808,
          1540096: 64,
          1605632: 2147483712,
          1671168: 4096,
          1736704: 2147487744,
          1802240: 2151678016,
          1867776: 4160,
          1933312: 2151682048,
          1998848: 4194304,
          2064384: 4198464
        },
        {
          0: 128,
          4096: 17039360,
          8192: 262144,
          12288: 536870912,
          16384: 537133184,
          20480: 16777344,
          24576: 553648256,
          28672: 262272,
          32768: 16777216,
          36864: 537133056,
          40960: 536871040,
          45056: 553910400,
          49152: 553910272,
          53248: 0,
          57344: 17039488,
          61440: 553648128,
          2048: 17039488,
          6144: 553648256,
          10240: 128,
          14336: 17039360,
          18432: 262144,
          22528: 537133184,
          26624: 553910272,
          30720: 536870912,
          34816: 537133056,
          38912: 0,
          43008: 553910400,
          47104: 16777344,
          51200: 536871040,
          55296: 553648128,
          59392: 16777216,
          63488: 262272,
          65536: 262144,
          69632: 128,
          73728: 536870912,
          77824: 553648256,
          81920: 16777344,
          86016: 553910272,
          90112: 537133184,
          94208: 16777216,
          98304: 553910400,
          102400: 553648128,
          106496: 17039360,
          110592: 537133056,
          114688: 262272,
          118784: 536871040,
          122880: 0,
          126976: 17039488,
          67584: 553648256,
          71680: 16777216,
          75776: 17039360,
          79872: 537133184,
          83968: 536870912,
          88064: 17039488,
          92160: 128,
          96256: 553910272,
          100352: 262272,
          104448: 553910400,
          108544: 0,
          112640: 553648128,
          116736: 16777344,
          120832: 262144,
          124928: 537133056,
          129024: 536871040
        },
        {
          0: 268435464,
          256: 8192,
          512: 270532608,
          768: 270540808,
          1024: 268443648,
          1280: 2097152,
          1536: 2097160,
          1792: 268435456,
          2048: 0,
          2304: 268443656,
          2560: 2105344,
          2816: 8,
          3072: 270532616,
          3328: 2105352,
          3584: 8200,
          3840: 270540800,
          128: 270532608,
          384: 270540808,
          640: 8,
          896: 2097152,
          1152: 2105352,
          1408: 268435464,
          1664: 268443648,
          1920: 8200,
          2176: 2097160,
          2432: 8192,
          2688: 268443656,
          2944: 270532616,
          3200: 0,
          3456: 270540800,
          3712: 2105344,
          3968: 268435456,
          4096: 268443648,
          4352: 270532616,
          4608: 270540808,
          4864: 8200,
          5120: 2097152,
          5376: 268435456,
          5632: 268435464,
          5888: 2105344,
          6144: 2105352,
          6400: 0,
          6656: 8,
          6912: 270532608,
          7168: 8192,
          7424: 268443656,
          7680: 270540800,
          7936: 2097160,
          4224: 8,
          4480: 2105344,
          4736: 2097152,
          4992: 268435464,
          5248: 268443648,
          5504: 8200,
          5760: 270540808,
          6016: 270532608,
          6272: 270540800,
          6528: 270532616,
          6784: 8192,
          7040: 2105352,
          7296: 2097160,
          7552: 0,
          7808: 268435456,
          8064: 268443656
        },
        {
          0: 1048576,
          16: 33555457,
          32: 1024,
          48: 1049601,
          64: 34604033,
          80: 0,
          96: 1,
          112: 34603009,
          128: 33555456,
          144: 1048577,
          160: 33554433,
          176: 34604032,
          192: 34603008,
          208: 1025,
          224: 1049600,
          240: 33554432,
          8: 34603009,
          24: 0,
          40: 33555457,
          56: 34604032,
          72: 1048576,
          88: 33554433,
          104: 33554432,
          120: 1025,
          136: 1049601,
          152: 33555456,
          168: 34603008,
          184: 1048577,
          200: 1024,
          216: 34604033,
          232: 1,
          248: 1049600,
          256: 33554432,
          272: 1048576,
          288: 33555457,
          304: 34603009,
          320: 1048577,
          336: 33555456,
          352: 34604032,
          368: 1049601,
          384: 1025,
          400: 34604033,
          416: 1049600,
          432: 1,
          448: 0,
          464: 34603008,
          480: 33554433,
          496: 1024,
          264: 1049600,
          280: 33555457,
          296: 34603009,
          312: 1,
          328: 33554432,
          344: 1048576,
          360: 1025,
          376: 34604032,
          392: 33554433,
          408: 34603008,
          424: 0,
          440: 34604033,
          456: 1049601,
          472: 1024,
          488: 33555456,
          504: 1048577
        },
        {
          0: 134219808,
          1: 131072,
          2: 134217728,
          3: 32,
          4: 131104,
          5: 134350880,
          6: 134350848,
          7: 2048,
          8: 134348800,
          9: 134219776,
          10: 133120,
          11: 134348832,
          12: 2080,
          13: 0,
          14: 134217760,
          15: 133152,
          2147483648: 2048,
          2147483649: 134350880,
          2147483650: 134219808,
          2147483651: 134217728,
          2147483652: 134348800,
          2147483653: 133120,
          2147483654: 133152,
          2147483655: 32,
          2147483656: 134217760,
          2147483657: 2080,
          2147483658: 131104,
          2147483659: 134350848,
          2147483660: 0,
          2147483661: 134348832,
          2147483662: 134219776,
          2147483663: 131072,
          16: 133152,
          17: 134350848,
          18: 32,
          19: 2048,
          20: 134219776,
          21: 134217760,
          22: 134348832,
          23: 131072,
          24: 0,
          25: 131104,
          26: 134348800,
          27: 134219808,
          28: 134350880,
          29: 133120,
          30: 2080,
          31: 134217728,
          2147483664: 131072,
          2147483665: 2048,
          2147483666: 134348832,
          2147483667: 133152,
          2147483668: 32,
          2147483669: 134348800,
          2147483670: 134217728,
          2147483671: 134219808,
          2147483672: 134350880,
          2147483673: 134217760,
          2147483674: 134219776,
          2147483675: 0,
          2147483676: 133120,
          2147483677: 2080,
          2147483678: 131104,
          2147483679: 134350848
        }
      ];
      var SBOX_MASK = [
        4160749569,
        528482304,
        33030144,
        2064384,
        129024,
        8064,
        504,
        2147483679
      ];
      var DES = C_algo.DES = BlockCipher.extend({
        _doReset: function() {
          var key = this._key;
          var keyWords = key.words;
          var keyBits = [];
          for (var i = 0; i < 56; i++) {
            var keyBitPos = PC1[i] - 1;
            keyBits[i] = keyWords[keyBitPos >>> 5] >>> 31 - keyBitPos % 32 & 1;
          }
          var subKeys = this._subKeys = [];
          for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
            var subKey = subKeys[nSubKey] = [];
            var bitShift = BIT_SHIFTS[nSubKey];
            for (var i = 0; i < 24; i++) {
              subKey[i / 6 | 0] |= keyBits[(PC2[i] - 1 + bitShift) % 28] << 31 - i % 6;
              subKey[4 + (i / 6 | 0)] |= keyBits[28 + (PC2[i + 24] - 1 + bitShift) % 28] << 31 - i % 6;
            }
            subKey[0] = subKey[0] << 1 | subKey[0] >>> 31;
            for (var i = 1; i < 7; i++) {
              subKey[i] = subKey[i] >>> (i - 1) * 4 + 3;
            }
            subKey[7] = subKey[7] << 5 | subKey[7] >>> 27;
          }
          var invSubKeys = this._invSubKeys = [];
          for (var i = 0; i < 16; i++) {
            invSubKeys[i] = subKeys[15 - i];
          }
        },
        encryptBlock: function(M, offset2) {
          this._doCryptBlock(M, offset2, this._subKeys);
        },
        decryptBlock: function(M, offset2) {
          this._doCryptBlock(M, offset2, this._invSubKeys);
        },
        _doCryptBlock: function(M, offset2, subKeys) {
          this._lBlock = M[offset2];
          this._rBlock = M[offset2 + 1];
          exchangeLR.call(this, 4, 252645135);
          exchangeLR.call(this, 16, 65535);
          exchangeRL.call(this, 2, 858993459);
          exchangeRL.call(this, 8, 16711935);
          exchangeLR.call(this, 1, 1431655765);
          for (var round2 = 0; round2 < 16; round2++) {
            var subKey = subKeys[round2];
            var lBlock = this._lBlock;
            var rBlock = this._rBlock;
            var f2 = 0;
            for (var i = 0; i < 8; i++) {
              f2 |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
            }
            this._lBlock = rBlock;
            this._rBlock = lBlock ^ f2;
          }
          var t2 = this._lBlock;
          this._lBlock = this._rBlock;
          this._rBlock = t2;
          exchangeLR.call(this, 1, 1431655765);
          exchangeRL.call(this, 8, 16711935);
          exchangeRL.call(this, 2, 858993459);
          exchangeLR.call(this, 16, 65535);
          exchangeLR.call(this, 4, 252645135);
          M[offset2] = this._lBlock;
          M[offset2 + 1] = this._rBlock;
        },
        keySize: 64 / 32,
        ivSize: 64 / 32,
        blockSize: 64 / 32
      });
      function exchangeLR(offset2, mask) {
        var t2 = (this._lBlock >>> offset2 ^ this._rBlock) & mask;
        this._rBlock ^= t2;
        this._lBlock ^= t2 << offset2;
      }
      function exchangeRL(offset2, mask) {
        var t2 = (this._rBlock >>> offset2 ^ this._lBlock) & mask;
        this._lBlock ^= t2;
        this._rBlock ^= t2 << offset2;
      }
      C.DES = BlockCipher._createHelper(DES);
      var TripleDES = C_algo.TripleDES = BlockCipher.extend({
        _doReset: function() {
          var key = this._key;
          var keyWords = key.words;
          if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
            throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
          }
          var key1 = keyWords.slice(0, 2);
          var key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
          var key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);
          this._des1 = DES.createEncryptor(WordArray.create(key1));
          this._des2 = DES.createEncryptor(WordArray.create(key2));
          this._des3 = DES.createEncryptor(WordArray.create(key3));
        },
        encryptBlock: function(M, offset2) {
          this._des1.encryptBlock(M, offset2);
          this._des2.decryptBlock(M, offset2);
          this._des3.encryptBlock(M, offset2);
        },
        decryptBlock: function(M, offset2) {
          this._des3.decryptBlock(M, offset2);
          this._des2.encryptBlock(M, offset2);
          this._des1.decryptBlock(M, offset2);
        },
        keySize: 192 / 32,
        ivSize: 64 / 32,
        blockSize: 64 / 32
      });
      C.TripleDES = BlockCipher._createHelper(TripleDES);
    })();
    return CryptoJS.TripleDES;
  });
});
var rc4 = createCommonjsModule(function(module, exports) {
  (function(root, factory, undef) {
    {
      module.exports = factory(core, encBase64, md5, evpkdf, cipherCore);
    }
  })(commonjsGlobal, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var StreamCipher = C_lib.StreamCipher;
      var C_algo = C.algo;
      var RC4 = C_algo.RC4 = StreamCipher.extend({
        _doReset: function() {
          var key = this._key;
          var keyWords = key.words;
          var keySigBytes = key.sigBytes;
          var S = this._S = [];
          for (var i = 0; i < 256; i++) {
            S[i] = i;
          }
          for (var i = 0, j = 0; i < 256; i++) {
            var keyByteIndex = i % keySigBytes;
            var keyByte = keyWords[keyByteIndex >>> 2] >>> 24 - keyByteIndex % 4 * 8 & 255;
            j = (j + S[i] + keyByte) % 256;
            var t2 = S[i];
            S[i] = S[j];
            S[j] = t2;
          }
          this._i = this._j = 0;
        },
        _doProcessBlock: function(M, offset2) {
          M[offset2] ^= generateKeystreamWord.call(this);
        },
        keySize: 256 / 32,
        ivSize: 0
      });
      function generateKeystreamWord() {
        var S = this._S;
        var i = this._i;
        var j = this._j;
        var keystreamWord = 0;
        for (var n2 = 0; n2 < 4; n2++) {
          i = (i + 1) % 256;
          j = (j + S[i]) % 256;
          var t2 = S[i];
          S[i] = S[j];
          S[j] = t2;
          keystreamWord |= S[(S[i] + S[j]) % 256] << 24 - n2 * 8;
        }
        this._i = i;
        this._j = j;
        return keystreamWord;
      }
      C.RC4 = StreamCipher._createHelper(RC4);
      var RC4Drop = C_algo.RC4Drop = RC4.extend({
        /**
         * Configuration options.
         *
         * @property {number} drop The number of keystream words to drop. Default 192
         */
        cfg: RC4.cfg.extend({
          drop: 192
        }),
        _doReset: function() {
          RC4._doReset.call(this);
          for (var i = this.cfg.drop; i > 0; i--) {
            generateKeystreamWord.call(this);
          }
        }
      });
      C.RC4Drop = StreamCipher._createHelper(RC4Drop);
    })();
    return CryptoJS.RC4;
  });
});
var rabbit = createCommonjsModule(function(module, exports) {
  (function(root, factory, undef) {
    {
      module.exports = factory(core, encBase64, md5, evpkdf, cipherCore);
    }
  })(commonjsGlobal, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var StreamCipher = C_lib.StreamCipher;
      var C_algo = C.algo;
      var S = [];
      var C_ = [];
      var G = [];
      var Rabbit = C_algo.Rabbit = StreamCipher.extend({
        _doReset: function() {
          var K = this._key.words;
          var iv = this.cfg.iv;
          for (var i = 0; i < 4; i++) {
            K[i] = (K[i] << 8 | K[i] >>> 24) & 16711935 | (K[i] << 24 | K[i] >>> 8) & 4278255360;
          }
          var X = this._X = [
            K[0],
            K[3] << 16 | K[2] >>> 16,
            K[1],
            K[0] << 16 | K[3] >>> 16,
            K[2],
            K[1] << 16 | K[0] >>> 16,
            K[3],
            K[2] << 16 | K[1] >>> 16
          ];
          var C2 = this._C = [
            K[2] << 16 | K[2] >>> 16,
            K[0] & 4294901760 | K[1] & 65535,
            K[3] << 16 | K[3] >>> 16,
            K[1] & 4294901760 | K[2] & 65535,
            K[0] << 16 | K[0] >>> 16,
            K[2] & 4294901760 | K[3] & 65535,
            K[1] << 16 | K[1] >>> 16,
            K[3] & 4294901760 | K[0] & 65535
          ];
          this._b = 0;
          for (var i = 0; i < 4; i++) {
            nextState.call(this);
          }
          for (var i = 0; i < 8; i++) {
            C2[i] ^= X[i + 4 & 7];
          }
          if (iv) {
            var IV = iv.words;
            var IV_0 = IV[0];
            var IV_1 = IV[1];
            var i0 = (IV_0 << 8 | IV_0 >>> 24) & 16711935 | (IV_0 << 24 | IV_0 >>> 8) & 4278255360;
            var i2 = (IV_1 << 8 | IV_1 >>> 24) & 16711935 | (IV_1 << 24 | IV_1 >>> 8) & 4278255360;
            var i1 = i0 >>> 16 | i2 & 4294901760;
            var i3 = i2 << 16 | i0 & 65535;
            C2[0] ^= i0;
            C2[1] ^= i1;
            C2[2] ^= i2;
            C2[3] ^= i3;
            C2[4] ^= i0;
            C2[5] ^= i1;
            C2[6] ^= i2;
            C2[7] ^= i3;
            for (var i = 0; i < 4; i++) {
              nextState.call(this);
            }
          }
        },
        _doProcessBlock: function(M, offset2) {
          var X = this._X;
          nextState.call(this);
          S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
          S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
          S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
          S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
          for (var i = 0; i < 4; i++) {
            S[i] = (S[i] << 8 | S[i] >>> 24) & 16711935 | (S[i] << 24 | S[i] >>> 8) & 4278255360;
            M[offset2 + i] ^= S[i];
          }
        },
        blockSize: 128 / 32,
        ivSize: 64 / 32
      });
      function nextState() {
        var X = this._X;
        var C2 = this._C;
        for (var i = 0; i < 8; i++) {
          C_[i] = C2[i];
        }
        C2[0] = C2[0] + 1295307597 + this._b | 0;
        C2[1] = C2[1] + 3545052371 + (C2[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
        C2[2] = C2[2] + 886263092 + (C2[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
        C2[3] = C2[3] + 1295307597 + (C2[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
        C2[4] = C2[4] + 3545052371 + (C2[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
        C2[5] = C2[5] + 886263092 + (C2[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
        C2[6] = C2[6] + 1295307597 + (C2[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
        C2[7] = C2[7] + 3545052371 + (C2[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
        this._b = C2[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
        for (var i = 0; i < 8; i++) {
          var gx = X[i] + C2[i];
          var ga = gx & 65535;
          var gb = gx >>> 16;
          var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
          var gl = ((gx & 4294901760) * gx | 0) + ((gx & 65535) * gx | 0);
          G[i] = gh ^ gl;
        }
        X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
        X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
        X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
        X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
        X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
        X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
        X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
        X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
      }
      C.Rabbit = StreamCipher._createHelper(Rabbit);
    })();
    return CryptoJS.Rabbit;
  });
});
var rabbitLegacy = createCommonjsModule(function(module, exports) {
  (function(root, factory, undef) {
    {
      module.exports = factory(core, encBase64, md5, evpkdf, cipherCore);
    }
  })(commonjsGlobal, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var StreamCipher = C_lib.StreamCipher;
      var C_algo = C.algo;
      var S = [];
      var C_ = [];
      var G = [];
      var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
        _doReset: function() {
          var K = this._key.words;
          var iv = this.cfg.iv;
          var X = this._X = [
            K[0],
            K[3] << 16 | K[2] >>> 16,
            K[1],
            K[0] << 16 | K[3] >>> 16,
            K[2],
            K[1] << 16 | K[0] >>> 16,
            K[3],
            K[2] << 16 | K[1] >>> 16
          ];
          var C2 = this._C = [
            K[2] << 16 | K[2] >>> 16,
            K[0] & 4294901760 | K[1] & 65535,
            K[3] << 16 | K[3] >>> 16,
            K[1] & 4294901760 | K[2] & 65535,
            K[0] << 16 | K[0] >>> 16,
            K[2] & 4294901760 | K[3] & 65535,
            K[1] << 16 | K[1] >>> 16,
            K[3] & 4294901760 | K[0] & 65535
          ];
          this._b = 0;
          for (var i = 0; i < 4; i++) {
            nextState.call(this);
          }
          for (var i = 0; i < 8; i++) {
            C2[i] ^= X[i + 4 & 7];
          }
          if (iv) {
            var IV = iv.words;
            var IV_0 = IV[0];
            var IV_1 = IV[1];
            var i0 = (IV_0 << 8 | IV_0 >>> 24) & 16711935 | (IV_0 << 24 | IV_0 >>> 8) & 4278255360;
            var i2 = (IV_1 << 8 | IV_1 >>> 24) & 16711935 | (IV_1 << 24 | IV_1 >>> 8) & 4278255360;
            var i1 = i0 >>> 16 | i2 & 4294901760;
            var i3 = i2 << 16 | i0 & 65535;
            C2[0] ^= i0;
            C2[1] ^= i1;
            C2[2] ^= i2;
            C2[3] ^= i3;
            C2[4] ^= i0;
            C2[5] ^= i1;
            C2[6] ^= i2;
            C2[7] ^= i3;
            for (var i = 0; i < 4; i++) {
              nextState.call(this);
            }
          }
        },
        _doProcessBlock: function(M, offset2) {
          var X = this._X;
          nextState.call(this);
          S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
          S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
          S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
          S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
          for (var i = 0; i < 4; i++) {
            S[i] = (S[i] << 8 | S[i] >>> 24) & 16711935 | (S[i] << 24 | S[i] >>> 8) & 4278255360;
            M[offset2 + i] ^= S[i];
          }
        },
        blockSize: 128 / 32,
        ivSize: 64 / 32
      });
      function nextState() {
        var X = this._X;
        var C2 = this._C;
        for (var i = 0; i < 8; i++) {
          C_[i] = C2[i];
        }
        C2[0] = C2[0] + 1295307597 + this._b | 0;
        C2[1] = C2[1] + 3545052371 + (C2[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
        C2[2] = C2[2] + 886263092 + (C2[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
        C2[3] = C2[3] + 1295307597 + (C2[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
        C2[4] = C2[4] + 3545052371 + (C2[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
        C2[5] = C2[5] + 886263092 + (C2[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
        C2[6] = C2[6] + 1295307597 + (C2[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
        C2[7] = C2[7] + 3545052371 + (C2[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
        this._b = C2[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
        for (var i = 0; i < 8; i++) {
          var gx = X[i] + C2[i];
          var ga = gx & 65535;
          var gb = gx >>> 16;
          var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
          var gl = ((gx & 4294901760) * gx | 0) + ((gx & 65535) * gx | 0);
          G[i] = gh ^ gl;
        }
        X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
        X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
        X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
        X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
        X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
        X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
        X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
        X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
      }
      C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
    })();
    return CryptoJS.RabbitLegacy;
  });
});
var cryptoJs = createCommonjsModule(function(module, exports) {
  (function(root, factory, undef) {
    {
      module.exports = factory(core, x64Core, libTypedarrays, encUtf16, encBase64, encBase64url, md5, sha1, sha256, sha224, sha512, sha384, sha3, ripemd160, hmac, pbkdf2, evpkdf, cipherCore, modeCfb, modeCtr, modeCtrGladman, modeOfb, modeEcb, padAnsix923, padIso10126, padIso97971, padZeropadding, padNopadding, formatHex, aes, tripledes, rc4, rabbit, rabbitLegacy);
    }
  })(commonjsGlobal, function(CryptoJS) {
    return CryptoJS;
  });
});
function uuid() {
  const hashTable = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ];
  let uuid2 = [];
  for (let i = 0; i < 35; i++) {
    if (i === 7 || i === 12 || i === 17 || i === 22) {
      uuid2[i] = "-";
    } else {
      uuid2[i] = hashTable[Math.floor(Math.random() * hashTable.length - 1)];
    }
  }
  return uuid2.join("");
}
var uuid_1 = uuid;
var encrypt = function(plain_text, secret, ivString) {
  var msg = plain_text;
  var key = cryptoJs.enc.Utf8.parse(secret);
  var iv = cryptoJs.enc.Utf8.parse(ivString);
  var enc = cryptoJs.AES.encrypt(msg, key, {
    iv,
    mode: cryptoJs.mode.CBC
  }).ciphertext.toString(cryptoJs.enc.Base64);
  return enc;
};
var encryptAESString = function(data, authkey, authiv) {
  var encData = encrypt(data, authkey, authiv);
  return encData;
};
var decrypt = function(plain_text, encryptionMethod, secret, ivString) {
  var msg = plain_text;
  var key = cryptoJs.enc.Utf8.parse(secret);
  var iv = cryptoJs.enc.Utf8.parse(ivString);
  var dec = cryptoJs.AES.decrypt(msg, key, {
    iv,
    mode: cryptoJs.mode.CBC
  });
  return dec.toString(cryptoJs.enc.Utf8);
};
var decAESString = function(data, authkey, authiv) {
  var decData = decrypt(data, "aes-128-cbc", authkey, authiv);
  return decData;
};
var getUUID = function() {
  return uuid_1();
};
var getPaymentUrl = function(env) {
  if (env === void 0) {
    env = "";
  }
  var finalUrl = "";
  switch (env) {
    case "dev":
      finalUrl = devUrl;
      break;
    case "stag":
      finalUrl = stagUrl;
      break;
    case "prod":
      finalUrl = prodUrl;
      break;
    default:
      finalUrl = devUrl;
      break;
  }
  return finalUrl;
};
var ClientDetails = (
  /** @class */
  function(_super) {
    __extends(ClientDetails2, _super);
    function ClientDetails2(props) {
      var _this = _super.call(this, props) || this;
      _this.onchangeHandler = function(e2) {
        var _a, _b;
        var _c = e2.target, value = _c.value, name = _c.name;
        if (name === "payerMobile" || name === "amount") {
          var regex = /^\d+$/;
          regex.test(value || "12") && _this.setState((_a = {}, _a[name] = value, _a));
        } else {
          _this.setState((_b = {}, _b[name] = value, _b));
        }
      };
      _this.getEncData = function() {
        var _a = _this.state, payerName = _a.payerName, payerEmail = _a.payerEmail, amount = _a.amount, clientCode = _a.clientCode, clientTxnId = _a.clientTxnId, payerMobile = _a.payerMobile, udf1 = _a.udf1, udf2 = _a.udf2, udf3 = _a.udf3, udf4 = _a.udf4, udf5 = _a.udf5, udf6 = _a.udf6, udf7 = _a.udf7, udf8 = _a.udf8, udf9 = _a.udf9, udf10 = _a.udf10, udf11 = _a.udf11, udf12 = _a.udf12, udf13 = _a.udf13, udf14 = _a.udf14, udf15 = _a.udf15, udf16 = _a.udf16, udf17 = _a.udf17, udf18 = _a.udf18, udf19 = _a.udf19, udf20 = _a.udf20, channelId = _a.channelId, programId = _a.programId, mcc = _a.mcc;
        var _b = _this.props, transUserName = _b.transUserName, transUserPassword = _b.transUserPassword, authkey = _b.authkey, authiv = _b.authiv;
        var callbackUrl = window.location.href;
        var data = "payerName=".concat(payerName, "&payerEmail=").concat(payerEmail, "&payerMobile=").concat(payerMobile, "&clientTxnId=").concat(clientTxnId ? clientTxnId : getUUID(), "&amount=").concat(amount, "&clientCode=").concat(clientCode, "&transUserName=").concat(transUserName, "&transUserPassword=").concat(transUserPassword, "&callbackUrl=").concat(callbackUrl, "&udf1=").concat(udf1, "&udf2=").concat(udf2, "&udf3=").concat(udf3, "&udf4=").concat(udf4, "&udf5=").concat(udf5, "&udf6=").concat(udf6, "&udf7=").concat(udf7, "&udf8=").concat(udf8, "&udf9=").concat(udf9, "&udf10=").concat(udf10, "&udf11=").concat(udf11, "&udf12=").concat(udf12, "&udf13=").concat(udf13, "&udf14=").concat(udf14, "&udf15=").concat(udf15, "&udf16=").concat(udf16, "&udf17=").concat(udf17, "&udf18=").concat(udf18, "&udf19=").concat(udf19, "&udf20=").concat(udf20, "&channelId=").concat(channelId ? channelId : "npm", "&programId=").concat(programId ? programId : "c", "&mcc=").concat(mcc);
        var enc = encryptAESString(data, authkey, authiv);
        return enc;
      };
      _this.state = {
        submitted: false,
        currentState: 0,
        payerMobile: "",
        clientTxnId: "",
        clientCode: "",
        payerName: "",
        payerEmail: "",
        amount: "",
        showFormCD: true,
        showFormPD: true,
        udf1: "",
        udf2: "",
        udf3: "",
        udf4: "",
        udf5: "",
        udf6: "",
        udf7: "",
        udf8: "",
        udf9: "",
        udf10: "",
        udf11: "",
        udf12: "",
        udf13: "",
        udf14: "",
        udf15: "",
        udf16: "",
        udf17: "",
        udf18: "",
        udf19: "",
        udf20: "",
        channelId: "",
        programId: "",
        mcc: ""
      };
      return _this;
    }
    ClientDetails2.prototype.componentDidMount = function() {
      var _this = this;
      this.setState(__assign({}, this.props), function() {
        var _a = _this.state, payerMobile = _a.payerMobile, clientCode = _a.clientCode, payerName = _a.payerName, payerEmail = _a.payerEmail, amount = _a.amount, clientTxnId = _a.clientTxnId;
        var emailRegex = /\S+@\S+\.\S+/;
        var form = document.getElementById("pg-form");
        var disable = !payerMobile || !clientCode || !payerName || !amount || !emailRegex.test(payerEmail) || !clientTxnId;
        if (!disable) {
          form.submit();
        }
      });
    };
    ClientDetails2.prototype.componentDidUpdate = function(prevProps) {
      if (prevProps.isResponsed !== this.props.isResponsed) {
        this.setState(__assign({}, this.props));
      }
    };
    ClientDetails2.prototype.render = function() {
      var _this = this;
      var _a = this.state, showFormCD = _a.showFormCD, showFormPD = _a.showFormPD;
      var _b = this.state, payerMobile = _b.payerMobile, clientCode = _b.clientCode, payerName = _b.payerName, payerEmail = _b.payerEmail, amount = _b.amount;
      var emailRegex = /\S+@\S+\.\S+/;
      var disable = !payerMobile || !clientCode || !payerName || !amount || !emailRegex.test(payerEmail);
      var env = this.props.env;
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "div",
          { id: "sdkPopup" },
          React.createElement(
            "div",
            { className: "popupHeader" },
            React.createElement("img", { src: s3Url + "lock.svg", alt: "" }),
            React.createElement("span", null, "Payment Details"),
            React.createElement("span", { onClick: this.props.toggle, className: "close cursor-pointer" })
          ),
          React.createElement(
            "div",
            { className: "popupBody" },
            React.createElement(
              "form",
              { id: "pg-form", action: getPaymentUrl(env), method: "post" },
              React.createElement(
                "div",
                { className: "activity" },
                React.createElement(Input$1, { type: "hidden", name: "encData", value: !disable ? this.getEncData() : "", id: "frm1" }),
                React.createElement(Input$1, { type: "hidden", name: "clientCode", value: clientCode, id: "frm2" }),
                React.createElement(
                  "div",
                  { className: "form " },
                  React.createElement(
                    "div",
                    { className: "form-header" },
                    React.createElement("h3", { className: "form-heading text-blue" }, "Payment Details:"),
                    React.createElement("img", { src: s3Url + "arrow_drop_down.svg", className: "expandIcon  ".concat(showFormPD && "down"), alt: "arrow up", onClick: function() {
                      _this.setState({ showFormPD: !showFormPD });
                    } })
                  ),
                  React.createElement(
                    "form",
                    { action: "", className: "form-collapsible form-collapsible-client  ".concat(showFormPD && "showForm") },
                    React.createElement("label", null, "Client Code"),
                    React.createElement(
                      "div",
                      { className: "input inputWithIcon" },
                      React.createElement(
                        "span",
                        { className: "inputIcon disabled" },
                        React.createElement("img", { src: s3Url + "sticky_note.svg", alt: "" })
                      ),
                      React.createElement(Input$1, { disabled: true, value: clientCode, required: true })
                    ),
                    React.createElement("label", null, "Full Name"),
                    React.createElement(
                      "div",
                      { className: "input inputWithIcon" },
                      React.createElement(
                        "span",
                        { className: "inputIcon" },
                        React.createElement("img", { src: s3Url + "person_pin.svg", alt: "" })
                      ),
                      React.createElement(Input$1, { required: true, value: payerName, name: "payerName", onChange: this.onchangeHandler })
                    ),
                    React.createElement("label", null, "Amount"),
                    React.createElement(
                      "div",
                      { className: "input inputWithIcon" },
                      React.createElement(
                        "span",
                        { className: "inputIcon" },
                        React.createElement("img", { src: s3Url + "rupee.svg", alt: "" })
                      ),
                      React.createElement(Input$1, { required: true, value: amount, name: "amount", onChange: this.onchangeHandler })
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { className: "form " },
                  React.createElement(
                    "div",
                    { className: "form-header" },
                    React.createElement("h3", { className: "form-heading text-blue" }, "Contact Information:"),
                    React.createElement("img", { src: s3Url + "arrow_drop_down.svg", className: "expandIcon  ".concat(showFormCD && "down"), alt: "arrow up", onClick: function() {
                      _this.setState({ showFormCD: !showFormCD });
                    } })
                  ),
                  React.createElement(
                    "form",
                    { action: "", className: "form-collapsible form-collapsible-client  ".concat(showFormCD && "showForm") },
                    React.createElement("label", null, "Email ID"),
                    React.createElement(
                      "a",
                      { className: "input inputWithIcon" },
                      React.createElement(
                        "span",
                        { className: "inputIcon" },
                        React.createElement("img", { src: s3Url + "mail.svg", alt: "" })
                      ),
                      React.createElement(Input$1, { required: true, value: payerEmail, type: "email", name: "payerEmail", onChange: this.onchangeHandler })
                    ),
                    React.createElement("label", null, "Phone"),
                    React.createElement(
                      "a",
                      { className: "input inputWithIcon" },
                      React.createElement(
                        "span",
                        { className: "inputIcon" },
                        React.createElement("img", { src: s3Url + "settings_phone.svg", alt: "" })
                      ),
                      React.createElement(Input$1, { maxLength: 13, required: true, type: "text", value: payerMobile, name: "payerMobile", onChange: this.onchangeHandler })
                    )
                  )
                )
              ),
              !disable && React.createElement("button", { type: "submit", className: "primaryButton" }, "Continue")
            ),
            React.createElement(
              "div",
              { className: "credits" },
              React.createElement(
                "div",
                { className: "text-center flex-center" },
                React.createElement("img", { src: s3Url + "security.png", alt: "secure" }),
                React.createElement("img", { src: s3Url + "powered-by-sabpaisa.png", alt: "sabpaisa logo", className: "ml-1 clientlogo" })
              ),
              React.createElement(
                "div",
                { className: "partners" },
                React.createElement("img", { src: s3Url + "rbi.png", alt: "partners", className: "partner-logo" }),
                React.createElement("img", { src: s3Url + "master-card.png", alt: "partners", className: "partner-logo" }),
                React.createElement("img", { src: s3Url + "pci-dss.png", alt: "partners", className: "partner-logo" }),
                React.createElement("img", { src: s3Url + "by-visa.png", alt: "partners", className: "partner-logo" })
              )
            )
          )
        )
      );
    };
    return ClientDetails2;
  }(React.Component)
);
var PgModal = (
  /** @class */
  function(_super) {
    __extends(PgModal2, _super);
    function PgModal2(props) {
      var _this = this;
      var _a;
      _this = _super.call(this, props) || this;
      _this.state = {
        submitted: false,
        isOpen: (_a = _this.props.isOpen) !== null && _a !== void 0 ? _a : false,
        currentState: 0,
        paymentData: {},
        activeMappings: [],
        errorMessage: "",
        isResponsed: false
      };
      return _this;
    }
    PgModal2.prototype.componentDidMount = function() {
      var urlParams = new URLSearchParams(window.location.search);
      var encResponse = urlParams.get("encResponse");
      var _a = this.props, authkey = _a.authkey, authiv = _a.authiv;
      if (authkey && authiv && encResponse) {
        var decData = decAESString(encResponse.replaceAll(" ", "+"), authkey, authiv);
        window.location.search = decData;
      }
    };
    PgModal2.prototype.componentDidUpdate = function(prevProps, preState) {
      if (prevProps.isOpen !== this.props.isOpen) {
        this.setState({ isOpen: this.props.isOpen ? true : false });
      }
      if (typeof (Object.keys(preState.paymentData).length || null) !== typeof Object.keys(this.state.paymentData).length && Object.keys(this.state.paymentData).length !== 0) {
        this.setState({ isResponsed: true });
      }
    };
    PgModal2.prototype.render = function() {
      var _a = this.state, isOpen = _a.isOpen, isResponsed = _a.isResponsed;
      var _b = this.props, onToggle = _b.onToggle, additionalClass = _b.additionalClass;
      return import_react.default.createElement(
        "div",
        { id: "pg-sdk" },
        import_react.default.createElement(
          Modal$1,
          { isOpen: isOpen ? true : false, wrapClassName: "sabpaisa-css-utils-classes-version-five", toggle: onToggle, className: additionalClass, id: "pg-sdk" },
          import_react.default.createElement(
            ModalBody,
            { id: "overlay", close: true },
            import_react.default.createElement(ClientDetails, __assign({ isResponsed, toggle: onToggle }, this.props))
          )
        )
      );
    };
    return PgModal2;
  }(import_react.Component)
);
export {
  Button$1 as Button,
  PgModal as PaymentInitModal
};
/*! Bundled license information:

pg-test-project/lib/index.esm.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

pg-test-project/lib/index.esm.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

pg-test-project/lib/index.esm.js:
  (*!
    Copyright (c) 2018 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  *)
  (** @preserve
  	(c) 2012 by Cédric Mesnil. All rights reserved.
  
  	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
  
  	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
  	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
  
  	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  	*)
  (** @preserve
   * Counter block mode compatible with  Dr Brian Gladman fileenc.c
   * derived from CryptoJS.mode.CTR
   * Jan Hruby jhruby.web@gmail.com
   *)
*/
//# sourceMappingURL=pg-test-project.js.map
