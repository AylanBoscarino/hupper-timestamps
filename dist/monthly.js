"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const basic_1 = require("./basic");
const constants_1 = require("./constants");
function getStartofMonth() {
    return basic_1.Basic.getStartOff(constants_1.month);
}
function getEndofMonth() {
    return basic_1.Basic.getEndOff(constants_1.month);
}
class Monthly {
    static getStartofMonthUnix() {
        return getStartofMonth().unix();
    }
    static getStartofMonthISO() {
        return getStartofMonth().toISOString();
    }
    static getEndofMonthUnix() {
        return getEndofMonth().unix();
    }
    static getEndofMonthISO() {
        return getEndofMonth().toISOString();
    }
}
exports.Monthly = Monthly;
//# sourceMappingURL=monthly.js.map