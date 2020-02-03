"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var checkmark = require('./../../../assets/checkmark.png');
var react_native_iphone_x_helper_1 = require("react-native-iphone-x-helper");
var Description = function (props) {
    return (react_1.default.createElement(react_native_1.ScrollView, { style: styles.scrollView },
        react_1.default.createElement(react_native_1.Text, { style: styles.title }, "Dit arragement bevat"),
        props.deal.contents.map(function (item) { return (react_1.default.createElement(react_native_1.View, { style: { flexDirection: 'row' }, key: item },
            react_1.default.createElement(react_native_1.Image, { source: checkmark, style: styles.checkmarkStyle }),
            react_1.default.createElement(react_native_1.Text, null, item))); }),
        react_1.default.createElement(react_native_1.Text, { style: styles.title }, "Over dit arragement "),
        react_1.default.createElement(react_native_1.Text, null,
            props.deal.description,
            " "),
        react_1.default.createElement(react_native_1.Text, { style: styles.termsText },
            props.deal.terms,
            " ")));
};
var styles = react_native_1.StyleSheet.create({
    scrollView: __assign({ marginHorizontal: 20 }, react_native_iphone_x_helper_1.ifIphoneX({
        marginBottom: 20,
    }, {
        marginBottom: 50,
    })),
    checkmarkStyle: {
        height: 10,
        width: 10,
        marginRight: 20,
        marginTop: 3,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingVertical: 10,
    },
    termsText: { opacity: 0.5, marginVertical: 20 },
});
exports.default = Description;
