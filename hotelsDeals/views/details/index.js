"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var SliderBox = require('react-native-image-slider-box').SliderBox;
var backArrow = require('./../../assets/left-arrow.png');
var rightArrow = require('./../../assets/right-arrow.png');
var react_native_iphone_x_helper_1 = require("react-native-iphone-x-helper");
var ScrollableTabView = require('react-native-scrollable-tab-view');
var tabPage_1 = __importDefault(require("./../components/tabPage"));
var Details = /** @class */ (function (_super) {
    __extends(Details, _super);
    function Details(props) {
        return _super.call(this, props) || this;
    }
    Details.prototype.render = function () {
        var _this = this;
        var deal = this.props.navigation.getParam('deal');
        return (react_1.default.createElement(react_native_1.SafeAreaView, { style: { flex: 1 } },
            react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.arrowContainer, onPress: function () { return _this.props.navigation.navigate('Deals'); } },
                react_1.default.createElement(react_native_1.Image, { source: backArrow, style: styles.arrow })),
            react_1.default.createElement(SliderBox, { images: deal.images, dotColor: 'white' }),
            react_1.default.createElement(react_native_1.View, { style: styles.infosCont },
                react_1.default.createElement(react_native_1.Text, { style: styles.titleText }, deal.title),
                react_1.default.createElement(react_native_1.Text, { style: styles.subtitleText }, deal.subtitle),
                react_1.default.createElement(react_native_1.View, { style: {
                        flexDirection: 'row',
                        paddingTop: 5,
                    } },
                    react_1.default.createElement(react_native_1.Text, { style: styles.priceText }, "p.p vanaf "),
                    react_1.default.createElement(react_native_1.Text, { style: styles.priceText }, deal.from.value),
                    react_1.default.createElement(react_native_1.Text, { style: styles.priceText }, " per person "))),
            react_1.default.createElement(react_native_1.View, { style: { flex: 1, marginTop: 20 } },
                react_1.default.createElement(ScrollableTabView, { tabBarUnderlineStyle: { backgroundColor: '#fb9b34' }, tabBarActiveTextColor: '#000' },
                    react_1.default.createElement(tabPage_1.default, { tabLabel: "Beschrijving", tabN: 0, deal: deal }),
                    react_1.default.createElement(tabPage_1.default, { tabLabel: 'Beschikbare hotels (' + deal.hotels.length + ')', tabN: 1, deal: deal }))),
            react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.bookNowCont, onPress: function () { return react_native_1.Alert.alert(deal.title); } },
                react_1.default.createElement(react_native_1.Text, { style: styles.bookNowText }, " Nu Boeken"),
                react_1.default.createElement(react_native_1.Image, { source: rightArrow, style: styles.rightArrow }))));
    };
    return Details;
}(react_1.default.Component));
var styles = react_native_1.StyleSheet.create({
    arrow: {
        height: 20,
        width: 15,
    },
    arrowContainer: __assign(__assign({ shadowColor: 'black', shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.8, elevation: 5, position: 'absolute' }, react_native_iphone_x_helper_1.ifIphoneX({
        top: 70,
    }, {
        top: 30,
    })), { left: 20, zIndex: 99 }),
    priceText: {
        fontWeight: '400',
        fontSize: 18,
    },
    bookNowCont: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#fb9b34',
    },
    rightArrow: {
        position: 'absolute',
        bottom: 15,
        right: 20,
        width: 20,
        height: 20,
    },
    bookNowText: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
    },
    infosCont: { paddingLeft: 20, paddingTop: 5 },
    titleText: { fontWeight: 'bold', fontSize: 20 },
    subtitleText: { fontWeight: '400', fontSize: 16, paddingTop: 5 },
});
exports.default = Details;
