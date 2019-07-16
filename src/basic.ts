import moment, { Moment } from 'moment-timezone';
import { utcOffset, timezone } from './constants';

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
}
