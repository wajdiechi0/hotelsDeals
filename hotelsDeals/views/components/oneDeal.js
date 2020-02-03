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
var react_native_linear_gradient_1 = __importDefault(require("react-native-linear-gradient"));
var OneDeal = function (props) {
    return (react_1.default.createElement(react_native_1.View, { style: styles.dealContainer },
        react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(react_native_1.View, { style: styles.imageCont },
                react_1.default.createElement(react_native_1.Image, { style: styles.imageStyle, source: {
                        uri: props.dealDetails.thumb,
                    } })),
            react_1.default.createElement(react_native_1.View, { style: styles.hotelsAvail },
                react_1.default.createElement(react_native_linear_gradient_1.default, { colors: ['rgba(0,0,0,0.01)', 'rgba(0,0,0,0.13)', 'rgba(2,2,2,0.4)'], locations: [0, 0.2, 0.5] },
                    react_1.default.createElement(react_native_1.Text, { style: styles.bottomImageText },
                        "beschikbaar voo ",
                        props.dealDetails.hotels.length,
                        " hotels")))),
        react_1.default.createElement(react_native_1.View, { style: { paddingLeft: 20, paddingTop: 5 } },
            react_1.default.createElement(react_native_1.Text, { style: { fontWeight: 'bold', fontSize: 14 } }, props.dealDetails.title),
            react_1.default.createElement(react_native_1.Text, { style: styles.subtitleText }, props.dealDetails.subtitle),
            react_1.default.createElement(react_native_1.View, { style: styles.priceCont },
                react_1.default.createElement(react_native_1.Text, { style: styles.vanafText }, "p.p vanaf "),
                react_1.default.createElement(react_native_1.Text, { style: styles.value }, props.dealDetails.from.value))),
        props.dealDetails.popular ? (react_1.default.createElement(react_native_1.View, { style: styles.populaire },
            react_1.default.createElement(react_native_1.Text, { style: styles.populaireText }, "Erg Populair"))) : (react_1.default.createElement(react_native_1.View, null))));
};
var styles = react_native_1.StyleSheet.create({
    dealContainer: {
        elevation: 5,
        borderRadius: 3,
        width: 230,
        margin: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 3,
        shadowOpacity: 0.5,
    },
    imageCont: {
        width: '100%',
        aspectRatio: 1.5,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
    },
    imageStyle: {
        width: '100%',
        aspectRatio: 1.5,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
    },
    populaire: {
        backgroundColor: 'rgb(126,121,221)',
        width: 100,
        borderRadius: 8,
        position: 'absolute',
        right: 3,
        top: 3,
    },
    hotelsAvail: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    bottomImageText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
    subtitleText: { fontWeight: '300', fontSize: 12, paddingVertical: 10 },
    priceCont: {
        flexDirection: 'row',
        paddingTop: 5,
        alignSelf: 'flex-end',
        paddingRight: 5,
    },
    vanafText: { fontWeight: '400', fontSize: 10 },
    value: { fontWeight: 'bold', fontSize: 12 },
    populaireText: { textAlign: 'center', color: 'white' },
});
exports.default = OneDeal;
