import moment from 'moment';
import { DateStr } from './types';
import { Basic } from './basic';
import { dateStringFormat } from './constants';

export class DateString {
  private static format: string = dateStringFormat;

  static getDateStringFormat(): string {
    return this.format;
  }

  static checkValidDateStr(str: string): str is DateStr {
    //TYPE GUARD TO SAFE TEST A DateStr AT RUNTIME
    return str.match(/^\d{4}-\d{2}-\d{2}$/) !== null;
  }

  static toDateStr<T = DateStr>(date: Date | moment.Moment | string): T {
    if (typeof date === 'string') {
      if (this.checkValidDateStr(date)) {
        return <T>(<unknown>date);
      } else {
        throw new Error(`Invalid date string: ${date}`);
      }
    } else {
      const dateString = Basic.getMomentUtcOffset(date).format(this.format);
      if (this.checkValidDateStr(dateString)) {
        return <T>(<unknown>dateString);
      }
    }
    throw new Error(`Shouldn't get here (invalid toDateStr provided): ${date}`);
  }

  static getMomentDateString<T = DateStr>(
    inp?: moment.MomentInput,
    format?: moment.MomentFormatSpecification,
    strict?: boolean,
  ): T {
    return this.toDateStr<T>(Basic.getMomentUtcOffset(inp, format, strict));
  }
}
