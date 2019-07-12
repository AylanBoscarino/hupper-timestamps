"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const basic_1 = __importDefault(require("./basic"));
const constants_1 = require("./constants");
function getStartofWeek() {
    return basic_1.default.getStartOff(constants_1.week);
}
function getEndofWeek() {
    return basic_1.default.getEndOff(constants_1.week);
}
class Weekly {
    static getStartofWeekUnix() {
        return getStartofWeek().unix();
    }
    static getStartofWeekISO() {
        return getStartofWeek().toISOString();
    }
    static getEndofWeekUnix() {
        return getEndofWeek().unix();
    }
    static getEndofWeekISO() {
        return getEndofWeek().toISOString();
    }
}
exports.default = Weekly;
//# sourceMappingURL=weekly.js.map