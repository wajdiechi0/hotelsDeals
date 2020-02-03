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
var Hotel = function (props) {
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.HotelContainer },
        react_1.default.createElement(react_native_1.Image, { style: styles.imageStyle, source: {
                uri: props.hotelDetails.photo,
            } }),
        react_1.default.createElement(react_native_1.View, { style: styles.infosContainer },
            react_1.default.createElement(react_native_1.Text, { style: styles.name }, props.hotelDetails.name),
            react_1.default.createElement(react_native_1.Text, { style: styles.description },
                "Vanaf ",
                props.hotelDetails.from.value,
                " Eur per person"))));
};
var styles = react_native_1.StyleSheet.create({
    HotelContainer: {
        borderRadius: 5,
        width: '100%',
        height: 100,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginVertical: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowRadius: 3,
        shadowOpacity: 0.3,
    },
    imageStyle: {
        height: '100%',
        aspectRatio: 1,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    infosContainer: {
        justifyContent: 'space-evenly',
        marginLeft: 10,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    description: {
        fontWeight: '300',
        fontSize: 14,
    },
});
exports.default = Hotel;
