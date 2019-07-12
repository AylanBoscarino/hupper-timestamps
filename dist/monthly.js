"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var basic_1 = __importDefault(require("./basic"));
var constants_1 = require("./constants");
function getStartofMonth() {
    return basic_1.default.getStartOff(constants_1.month);
}
function getEndofMonth() {
    return basic_1.default.getEndOff(constants_1.month);
}
var Monthly = /** @class */ (function () {
    function Monthly() {
    }
    Monthly.getStartofMonthUnix = function () {
        return getStartofMonth().unix();
    };
    Monthly.getStartofMonthISO = function () {
        return getStartofMonth().toISOString();
    };
    Monthly.getEndofMonthUnix = function () {
        return getEndofMonth().unix();
    };
    Monthly.getEndofMonthISO = function () {
        return getEndofMonth().toISOString();
    };
    return Monthly;
}());
exports.default = Monthly;
//# sourceMappingURL=monthly.js.map