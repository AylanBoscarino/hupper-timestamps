"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
class DateString {
    static checkValidDateStr(str) {
        //TYPE GUARD TO SAFE TEST A DateStr AT RUNTIME
        return str.match(/^\d{4}-\d{2}-\d{2}$/) !== null;
    }
    static toDateStr(date) {
        if (typeof date === 'string') {
            if (this.checkValidDateStr(date)) {
                return date;
            }
            else {
                throw new Error(`Invalid date string: ${date}`);
            }
        }
        else {
            const dateString = moment_1.default(date).utcOffset('-0300').format('YYYY-MM-DD');
            if (this.checkValidDateStr(dateString)) {
                return dateString;
            }
        }
        throw new Error(`Shouldn't get here (invalid toDateStr provided): ${date}`);
    }
}
exports.DateString = DateString;
//# sourceMappingURL=dateString.js.map