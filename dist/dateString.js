"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const basic_1 = require("./basic");
const constants_1 = require("./constants");
class DateString {
    static getDateStringFormat() {
        return this.format;
    }
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
            const dateString = basic_1.Basic.getMomentUtcOffset(date).format(this.format);
            if (this.checkValidDateStr(dateString)) {
                return dateString;
            }
        }
        throw new Error(`Shouldn't get here (invalid toDateStr provided): ${date}`);
    }
    static getMomentDateString(inp, format, strict) {
        return this.toDateStr(basic_1.Basic.getMomentUtcOffset(inp, format, strict));
    }
}
DateString.format = constants_1.dateStringFormat;
exports.DateString = DateString;
//# sourceMappingURL=dateString.js.map