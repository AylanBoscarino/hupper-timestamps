import moment, { Moment } from 'moment';

declare module 'hupper-timestamps' {
  namespace HupperTimestamp {
    const basic: typeof Basic;
    const daily: typeof Daily;
    const weekly: typeof Weekly;
    const monthly: typeof Monthly;
    const dateString: typeof DateString;
    type DateStr = string;
  }

  export class Basic {
    static getMomentUtcOffset(): Moment;
    static getCurrentUnix(): number;
    static getStartOff(period: moment.unitOfTime.StartOf): Moment;
    static getEndOff(period: moment.unitOfTime.StartOf): Moment;
    static getMoment(): Moment;
  }

  export class Daily {
    static getStartofDayUnix(): number;
    static getStartofDayISO(): string;
    static getEndofDayUnix(): number;
    static getEndofDayISO(): string;
  }

  export class DateString {
    static checkValidDateStr(str: string): str is HupperTimestamp.DateStr;
    static toDateStr(
      date: Date | moment.Moment | string,
    ): HupperTimestamp.DateStr;
  }

  export class Monthly {
    static getStartofMonthUnix(): number;
    static getStartofMonthISO(): string;
    static getEndofMonthUnix(): number;
    static getEndofMonthISO(): string;
  }

  export class Weekly {
    static getStartofWeekUnix(): number;
    static getStartofWeekISO(): string;
    static getEndofWeekUnix(): number;
    static getEndofWeekISO(): string;
  }

  export const utcOffset = '-0300';
  export const day = 'day';
  export const week = 'week';
  export const month = 'month';
}
