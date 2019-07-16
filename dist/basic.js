"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const constants_1 = require("./constants");
class Basic {
    static getMomentUtcOffset(inp, format, strict) {
        // return moment(inp, format, strict).utcOffset(utcOffset);
        return moment_timezone_1.default(inp, format, strict).tz(constants_1.timezone);
    }
    static getCurrentUnix(inp, format, strict) {
        return this.getMomentUtcOffset(inp, format, strict).unix();
    }
    static getStartOf(period) {
        return this.getMomentUtcOffset().startOf(period);
    }
    static getEndOf(period) {
        return this.getMomentUtcOffset().endOf(period);
    }
    static getMoment(inp, format, strict) {
        return moment_timezone_1.default(inp, format, strict);
    }
}
exports.Basic = Basic;
//# sourceMappingURL=basic.js.map