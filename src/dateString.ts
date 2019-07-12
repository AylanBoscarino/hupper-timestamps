import moment from 'moment';
import HupperTimestamp from './index'

export default class DateString {
  static checkValidDateStr(str: string): str is HupperTimestamp.DateStr {
    //TYPE GUARD TO SAFE TEST A DateStr AT RUNTIME
    return str.match(/^\d{4}-\d{2}-\d{2}$/) !== null;
  }

  static toDateStr(date: Date | moment.Moment | string): HupperTimestamp.DateStr {
    if (typeof date === 'string') {
      if (this.checkValidDateStr(date)) {
        return date;
      } else {
        throw new Error(`Invalid date string: ${date}`);
      }
    } else {
      const dateString = moment(date).utcOffset('-0300').format('YYYY-MM-DD');
      if (this.checkValidDateStr(dateString)) {
        return dateString;
      }
    }
    throw new Error(`Shouldn't get here (invalid toDateStr provided): ${date}`);
  }
  

}

