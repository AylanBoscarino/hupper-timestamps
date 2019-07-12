"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var constants_1 = require("./constants");
var Basic = /** @class */ (function () {
    function Basic() {
    }
    Basic.getMomentUtcOffset = function () {
        return moment_1.default().utcOffset(constants_1.utcOffset);
    };
    Basic.getCurrentUnix = function () {
        return this.getMomentUtcOffset().unix();
    };
    Basic.getStartOff = function (period) {
        return this.getMomentUtcOffset().startOf(period);
    };
    Basic.getEndOff = function (period) {
        return this.getMomentUtcOffset().endOf(period);
    };
    Basic.getMoment = function () {
        return moment_1.default();
    };
    return Basic;
}());
exports.default = Basic;
//# sourceMappingURL=basic.js.map