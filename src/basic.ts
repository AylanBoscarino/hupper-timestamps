import moment, { Moment } from 'moment-timezone';
import { utcOffset, timezone } from './constants';
import { duration } from './types';

export class Basic {
  static getMomentUtcOffset(
    inp?: moment.MomentInput,
    format?: moment.MomentFormatSpecification,
    strict?: boolean,
  ): Moment {
    // return moment(inp, format, strict).utcOffset(utcOffset);
    return moment(inp, format, strict).tz(timezone);
  }

  static getCurrentUnix(
    inp?: moment.MomentInput,
    format?: moment.MomentFormatSpecification,
    strict?: boolean,
  ): number {
    return this.getMomentUtcOffset(inp, format, strict).unix();
  }

  static getStartOf(period: moment.unitOfTime.StartOf): Moment {
    return this.getMomentUtcOffset().startOf(period);
  }

  static getEndOf(period: moment.unitOfTime.StartOf): Moment {
    return this.getMomentUtcOffset().endOf(period);
  }

  static getMoment(
    inp?: moment.MomentInput,
    format?: moment.MomentFormatSpecification,
    strict?: boolean,
  ): Moment {
    return moment(inp, format, strict);
  }

  static getStartOfByDuration(dur: duration): moment.unitOfTime.StartOf {
    switch (dur) {
      case 'anual':
        return 'year';
      case 'diario':
        return 'day';
      case 'mensal':
        return 'month';
      case 'semanal':
        return 'week';
    }
  }

  static getUnixTimestampFromDuration = (someDuration: duration): number =>
    Basic.getStartOf(Basic.getStartOfByDuration(someDuration)).unix();

  static getISOStringFromDuration = (someDuration: duration): string =>
    Basic.getStartOf(Basic.getStartOfByDuration(someDuration)).toISOString();
}
