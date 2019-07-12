"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const basic_1 = __importDefault(require("./basic"));
const constants_1 = require("./constants");
function getStartofMonth() {
    return basic_1.default.getStartOff(constants_1.month);
}
function getEndofMonth() {
    return basic_1.default.getEndOff(constants_1.month);
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
exports.default = Monthly;
//# sourceMappingURL=monthly.js.map