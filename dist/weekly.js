"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var basic_1 = __importDefault(require("./basic"));
var constants_1 = require("./constants");
function getStartofWeek() {
    return basic_1.default.getStartOff(constants_1.week);
}
function getEndofWeek() {
    return basic_1.default.getEndOff(constants_1.week);
}
var Weekly = /** @class */ (function () {
    function Weekly() {
    }
    Weekly.getStartofWeekUnix = function () {
        return getStartofWeek().unix();
    };
    Weekly.getStartofWeekISO = function () {
        return getStartofWeek().toISOString();
    };
    Weekly.getEndofWeekUnix = function () {
        return getEndofWeek().unix();
    };
    Weekly.getEndofWeekISO = function () {
        return getEndofWeek().toISOString();
    };
    return Weekly;
}());
exports.default = Weekly;
//# sourceMappingURL=weekly.js.map