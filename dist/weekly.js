"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const basic_1 = require("./basic");
const constants_1 = require("./constants");
function getStartofWeek() {
    return basic_1.Basic.getStartOff(constants_1.week);
}
function getEndofWeek() {
    return basic_1.Basic.getEndOff(constants_1.week);
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
exports.Weekly = Weekly;
//# sourceMappingURL=weekly.js.map