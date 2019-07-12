import moment, { Moment } from 'moment';
import { utcOffset } from './constants';

export default class Basic {
  static getMomentUtcOffset(): Moment {
    return moment().utcOffset(utcOffset);
  }

  static getCurrentUnix(): number {
    return this.getMomentUtcOffset().unix();
  }

  static getStartOff(period: moment.unitOfTime.StartOf): Moment {
    return this.getMomentUtcOffset().startOf(period);
  }

  static getEndOff(period: moment.unitOfTime.StartOf): Moment {
    return this.getMomentUtcOffset().endOf(period);
  }

  static getMoment(): Moment {
    return moment();
  }
}
