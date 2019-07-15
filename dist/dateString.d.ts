import moment from 'moment';
import { DateStr } from './types';
export declare class DateString {
    static checkValidDateStr(str: string): str is DateStr;
    static toDateStr(date: Date | moment.Moment | string): DateStr;
}
