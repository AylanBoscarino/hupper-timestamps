"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const daily_1 = require("./daily");
const weekly_1 = require("./weekly");
const monthly_1 = require("./monthly");
const basic_1 = require("./basic");
const dateString_1 = require("./dateString");
var daily_2 = require("./daily");
exports.Daily = daily_2.Daily;
var basic_2 = require("./basic");
exports.Basic = basic_2.Basic;
var weekly_2 = require("./weekly");
exports.Weekly = weekly_2.Weekly;
var monthly_2 = require("./monthly");
exports.Monthly = monthly_2.Monthly;
var dateString_2 = require("./dateString");
exports.DateString = dateString_2.DateString;
const HupperTimestamps = {
    daily: daily_1.Daily,
    weekly: weekly_1.Weekly,
    monthly: monthly_1.Monthly,
    basic: basic_1.Basic,
    dateString: dateString_1.DateString,
};
exports.default = HupperTimestamps;
//# sourceMappingURL=index.js.map