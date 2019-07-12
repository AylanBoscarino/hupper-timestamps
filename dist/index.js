"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const daily_1 = __importDefault(require("./daily"));
const basic_1 = __importDefault(require("./basic"));
const weekly_1 = __importDefault(require("./weekly"));
const monthly_1 = __importDefault(require("./monthly"));
const dateString_1 = __importDefault(require("./dateString"));
// namespace HupperTimestamp {
//   export const basic = Basic;
//   export const daily = Daily;
//   export const weekly = Weekly;
//   export const monthly = Monthly;
//   export const dateString = DateString;
//   export type DateStr = string;
// }
class HupperTimestamp {
}
HupperTimestamp.basic = basic_1.default;
HupperTimestamp.daily = daily_1.default;
HupperTimestamp.weekly = weekly_1.default;
HupperTimestamp.monthly = monthly_1.default;
HupperTimestamp.dateString = dateString_1.default;
exports.default = HupperTimestamp;
//# sourceMappingURL=index.js.map