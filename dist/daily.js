"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const basic_1 = require("./basic");
const constants_1 = require("./constants");
function getStartofDay() {
    return basic_1.Basic.getStartOff(constants_1.day);
}
function getEndofDay() {
    return basic_1.Basic.getEndOff(constants_1.day);
}
class Daily {
    static getStartofDayUnix() {
        return getStartofDay().unix();
    }
    static getStartofDayISO() {
        return getStartofDay().toISOString();
    }
    static getEndofDayUnix() {
        return getEndofDay().unix();
    }
    static getEndofDayISO() {
        return getEndofDay().toISOString();
    }
}
exports.Daily = Daily;
//# sourceMappingURL=daily.js.map