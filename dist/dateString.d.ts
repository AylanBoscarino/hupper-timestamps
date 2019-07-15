import moment from 'moment';
import { DateStr } from './types';
export declare class DateString {
    private static format;
    static getDateStringFormat(): string;
    static checkValidDateStr(str: string): str is DateStr;
    static toDateStr<T = DateStr>(date: Date | moment.Moment | string): T;
    static getMomentDateString<T = DateStr>(inp?: moment.MomentInput, format?: moment.MomentFormatSpecification, strict?: boolean): T;
}
