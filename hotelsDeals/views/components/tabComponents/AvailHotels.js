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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var hotel_1 = __importDefault(require("../../components/hotel"));
var react_native_iphone_x_helper_1 = require("react-native-iphone-x-helper");
var axios_1 = __importDefault(require("axios"));
var AvailHotels = /** @class */ (function (_super) {
    __extends(AvailHotels, _super);
    function AvailHotels(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hotels: [],
        };
        return _this;
    }
    AvailHotels.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.ScrollView, { style: styles.scrollView }, this.state.hotels.map(function (item) { return (react_1.default.createElement(hotel_1.default, { hotelDetails: item, key: item.id })); })));
    };
    AvailHotels.prototype.componentDidMount = function () {
        var _this = this;
        try {
            axios_1.default('https://valkdigital-api.netlify.com/api/v1/hotels').then(function (response) {
                response.data.data.map(function (item) {
                    if (_this.props.deal.hotels.includes(item.id)) {
                        _this.setState({
                            hotels: __spreadArrays(_this.state.hotels, [item]),
                        });
                    }
                });
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    return AvailHotels;
}(react_1.default.Component));
var styles = react_native_1.StyleSheet.create({
    scrollView: __assign({ marginHorizontal: 20 }, react_native_iphone_x_helper_1.ifIphoneX({
        marginBottom: 20,
    }, {
        marginBottom: 50,
    })),
});
exports.default = AvailHotels;
