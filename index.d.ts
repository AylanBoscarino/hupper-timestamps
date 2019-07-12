import moment, { Moment } from 'moment';
import Basic from './src/basic';
import Daily from './src/daily';
import Weekly from './src/weekly';
import Monthly from './src/monthly';
import DateString from './src/dateString';

declare class HupperTimestamp {
  static readonly basic: typeof Basic;
  static readonly daily: typeof Daily;
  static readonly weekly: typeof Weekly;
  static readonly monthly: typeof Monthly;
  static readonly dateString: typeof DateString;
}
export default HupperTimestamp;


// export namespace HupperTimestamp {
//   const basic: typeof Basic;
//   const daily: typeof Daily;
//   const weekly: typeof Weekly;
//   const monthly: typeof Monthly;
//   const dateString: typeof DateString;
//   type DateStr = string;

// class Basic {
//   static getMomentUtcOffset(): Moment;
//   static getCurrentUnix(): number;
//   static getStartOff(period: moment.unitOfTime.StartOf): Moment;
//   static getEndOff(period: moment.unitOfTime.StartOf): Moment;
//   static getMoment(): Moment;
// }

// class Daily {
//   static getStartofDayUnix(): number;
//   static getStartofDayISO(): string;
//   static getEndofDayUnix(): number;
//   static getEndofDayISO(): string;
// }

// class DateString {
//   static checkValidDateStr(str: string): str is HupperTimestamp.DateStr;
//   static toDateStr(
//     date: Date | moment.Moment | string,
//   ): HupperTimestamp.DateStr;
// }

// class Monthly {
//   static getStartofMonthUnix(): number;
//   static getStartofMonthISO(): string;
//   static getEndofMonthUnix(): number;
//   static getEndofMonthISO(): string;
// }

// class Weekly {
//   static getStartofWeekUnix(): number;
//   static getStartofWeekISO(): string;
//   static getEndofWeekUnix(): number;
//   static getEndofWeekISO(): string;
// }

// const utcOffset = '-0300';
// const day = 'day';
// const week = 'week';
// const month = 'month';
// }
