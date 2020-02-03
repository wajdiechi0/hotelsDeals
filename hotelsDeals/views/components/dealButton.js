"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var next = require('./../../assets/next.png');
var DealButton = function (props) {
    var showAlert = function (message) {
        react_native_1.Alert.alert(message);
    };
    return (react_1.default.createElement(react_native_1.View, null,
        react_1.default.createElement(react_native_1.View, { style: styles.line }),
        react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: function () { return showAlert(props.text); }, style: styles.dealButton },
            react_1.default.createElement(react_native_1.Text, null, props.text),
            react_1.default.createElement(react_native_1.Image, { source: next, style: styles.imageStyle }))));
};
var styles = react_native_1.StyleSheet.create({
    line: {
        backgroundColor: '#d9d9d9',
        width: '100%',
        height: 1,
    },
    dealButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
    },
    imageStyle: {
        marginLeft: 'auto',
        width: 10,
        height: 10,
    },
});
exports.default = DealButton;
