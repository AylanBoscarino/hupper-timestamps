"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var daily_1 = __importDefault(require("./daily"));
var basic_1 = __importDefault(require("./basic"));
var weekly_1 = __importDefault(require("./weekly"));
var monthly_1 = __importDefault(require("./monthly"));
var dateString_1 = __importDefault(require("./dateString"));
var HupperTimestamp;
(function (HupperTimestamp) {
    HupperTimestamp.basic = basic_1.default;
    HupperTimestamp.daily = daily_1.default;
    HupperTimestamp.weekly = weekly_1.default;
    HupperTimestamp.monthly = monthly_1.default;
    HupperTimestamp.dateString = dateString_1.default;
})(HupperTimestamp || (HupperTimestamp = {}));
exports.default = HupperTimestamp;
//# sourceMappingURL=index.js.map