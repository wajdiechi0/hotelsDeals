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
var tabComponents_1 = require("./tabComponents");
var TabPage = function (props) {
    return props.tabN === 0 ? (react_1.default.createElement(tabComponents_1.Description, { deal: props.deal })) : (react_1.default.createElement(tabComponents_1.AvailHotels, { deal: props.deal }));
};
exports.default = TabPage;
