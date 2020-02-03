"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
Object.defineProperty(exports, "__esModule", { value: true });
var react_navigation_stack_1 = require("react-navigation-stack");
var react_navigation_1 = require("react-navigation");
var views_1 = require("./views");
var stackNav = react_navigation_stack_1.createStackNavigator({
    Deals: {
        screen: views_1.Deals,
    },
    Details: {
        screen: views_1.Details,
    },
}, {
    defaultNavigationOptions: {
        headerShown: false,
    },
});
exports.default = react_navigation_1.createAppContainer(stackNav);
