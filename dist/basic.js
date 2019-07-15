"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const constants_1 = require("./constants");
class Basic {
    static getMomentUtcOffset(inp, format, strict) {
        return moment_1.default(inp, format, strict).utcOffset(constants_1.utcOffset);
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
        return moment_1.default(inp, format, strict);
    }
}
exports.Basic = Basic;
//# sourceMappingURL=basic.js.map