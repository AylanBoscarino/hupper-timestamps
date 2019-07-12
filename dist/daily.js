"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const basic_1 = __importDefault(require("./basic"));
const constants_1 = require("./constants");
function getStartofDay() {
    return basic_1.default.getStartOff(constants_1.day);
}
function getEndofDay() {
    return basic_1.default.getEndOff(constants_1.day);
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
exports.default = Daily;
//# sourceMappingURL=daily.js.map