"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const constants_1 = require("./constants");
class Basic {
    static getMomentUtcOffset() {
        return moment_1.default().utcOffset(constants_1.utcOffset);
    }
    static getCurrentUnix() {
        return this.getMomentUtcOffset().unix();
    }
    static getStartOff(period) {
        return this.getMomentUtcOffset().startOf(period);
    }
    static getEndOff(period) {
        return this.getMomentUtcOffset().endOf(period);
    }
    static getMoment() {
        return moment_1.default();
    }
}
exports.Basic = Basic;
//# sourceMappingURL=basic.js.map