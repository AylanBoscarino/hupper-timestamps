import moment from 'moment';
import HupperTimestamp from './index';
export default class DateString {
    static checkValidDateStr(str: string): str is HupperTimestamp.DateStr;
    static toDateStr(date: Date | moment.Moment | string): HupperTimestamp.DateStr;
}
