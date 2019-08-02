import moment from 'moment';
import { DateOptions, DateStr, durationType } from './types';
export declare class DateString {
    private static format;
    static getDateStringFormat(): string;
    static checkValidDateStr(str: string): str is DateStr;
    static toDateStr<T = DateStr>(date: Date | moment.Moment | string): T;
    static getMomentDateString<T = DateStr>(inp?: moment.MomentInput, format?: moment.MomentFormatSpecification, strict?: boolean): T;
    static getISODatePeriod(period: durationType): DateOptions<string>;
    static getUnixMilisecondsDatePeriod(period: durationType): DateOptions<number>;
}
