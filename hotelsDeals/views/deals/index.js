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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var axios_1 = __importDefault(require("axios"));
var react_native_1 = require("react-native");
var scan = require('./../../assets/scan.png');
var user = require('./../../assets/user.png');
var oneDeal_1 = __importDefault(require("./../components/oneDeal"));
var dealButton_1 = __importDefault(require("./../components/dealButton"));
var Deals = /** @class */ (function (_super) {
    __extends(Deals, _super);
    function Deals(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            deals: [],
            dealsButton: [],
        };
        return _this;
    }
    Deals.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(react_native_1.SafeAreaView, null,
            react_1.default.createElement(react_native_1.ScrollView, null,
                react_1.default.createElement(react_native_1.View, { style: styles.header },
                    react_1.default.createElement(react_native_1.Text, { style: { alignSelf: 'center' } }, "Deals"),
                    react_1.default.createElement(react_native_1.View, { style: styles.headerButtons },
                        react_1.default.createElement(react_native_1.TouchableOpacity, null,
                            react_1.default.createElement(react_native_1.Image, { source: scan, style: styles.scanStyle })),
                        react_1.default.createElement(react_native_1.TouchableOpacity, null,
                            react_1.default.createElement(react_native_1.Image, { source: user, style: { width: 20, height: 20 } })))),
                react_1.default.createElement(react_native_1.View, { style: { padding: 10 } },
                    react_1.default.createElement(react_native_1.Text, { style: styles.topDealsText }, "Top Zomer deals"),
                    react_1.default.createElement(react_native_1.ScrollView, { horizontal: true }, this.state.deals.map(function (item) { return (react_1.default.createElement(react_native_1.TouchableOpacity, { key: item.id, onPress: function () {
                            return _this.props.navigation.navigate('Details', { deal: item });
                        } },
                        react_1.default.createElement(oneDeal_1.default, { dealDetails: item }))); })),
                    react_1.default.createElement(react_native_1.Text, { style: styles.alleDealsText }, "Alle Deals"),
                    this.state.dealsButton.map(function (item) { return (react_1.default.createElement(dealButton_1.default, { text: item, key: item })); }),
                    react_1.default.createElement(react_native_1.View, { style: styles.line })))));
    };
    Deals.prototype.componentDidMount = function () {
        var _this = this;
        try {
            axios_1.default
                .get('https://valkdigital-api.netlify.com/api/v1/deals')
                .then(function (response) {
                _this.setState({
                    deals: response.data.data,
                    dealsButton: [
                        'Arrangementen',
                        'Valk Voordeel',
                        'Feestdagen',
                        'Last Minutes',
                        'Non Refundables',
                        'Early Birds',
                    ],
                });
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    return Deals;
}(react_1.default.Component));
var styles = react_native_1.StyleSheet.create({
    header: {
        borderColor: 'rgba(160,160,160,0.35)',
        borderBottomWidth: 1,
        padding: 20,
    },
    headerButtons: {
        position: 'absolute',
        right: 5,
        top: 20,
        flexDirection: 'row',
    },
    scanStyle: { width: 20, height: 20, marginRight: 10 },
    topDealsText: { fontWeight: 'bold', fontSize: 20, marginBottom: 10 },
    alleDealsText: { fontWeight: 'bold', fontSize: 20, marginVertical: 10 },
    line: { backgroundColor: '#d9d9d9', width: '100%', height: 1 },
});
exports.default = Deals;
