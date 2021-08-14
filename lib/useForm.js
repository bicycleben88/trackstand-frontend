"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
function useForm(initial) {
    if (initial === void 0) { initial = {}; }
    var _a = react_1["default"].useState(initial), inputs = _a[0], setInputs = _a[1];
    var initialValues = Object.values(initial).join('');
    react_1["default"].useEffect(function () {
        setInputs(initial);
    }, [initialValues]);
    var handleChange = function (inputType, e) {
        var _a;
        setInputs(__assign(__assign({}, inputs), (_a = {}, _a[inputType] = e.nativeEvent.text, _a)));
    };
    var resetForm = function () {
        setInputs(initial);
    };
    var clearForm = function () {
        var blankState = Object.fromEntries(Object.entries(inputs).map(function (_a) {
            var key = _a[0], value = _a[1];
            return [key, ''];
        }));
        setInputs(blankState);
    };
    return {
        inputs: inputs,
        handleChange: handleChange,
        resetForm: resetForm,
        clearForm: clearForm
    };
}
exports["default"] = useForm;
