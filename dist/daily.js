"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var basic_1 = __importDefault(require("./basic"));
var constants_1 = require("./constants");
function getStartofDay() {
    return basic_1.default.getStartOff(constants_1.day);
}
function getEndofDay() {
    return basic_1.default.getEndOff(constants_1.day);
}
var Daily = /** @class */ (function () {
    function Daily() {
    }
    Daily.getStartofDayUnix = function () {
        return getStartofDay().unix();
    };
    Daily.getStartofDayISO = function () {
        return getStartofDay().toISOString();
    };
    Daily.getEndofDayUnix = function () {
        return getEndofDay().unix();
    };
    Daily.getEndofDayISO = function () {
        return getEndofDay().toISOString();
    };
    return Daily;
}());
exports.default = Daily;
//# sourceMappingURL=daily.js.map