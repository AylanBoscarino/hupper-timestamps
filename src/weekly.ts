import { Basic } from './basic';
import { week } from './constants';

function getStartofWeek() {
  return Basic.getStartOff(week);
}

function getEndofWeek() {
  return Basic.getEndOff(week);
}

export class Weekly {
  static getStartofWeekUnix(): number {
    return getStartofWeek().unix();
  }
  static getStartofWeekISO(): string {
    return getStartofWeek().toISOString();
  }
  static getEndofWeekUnix(): number {
    return getEndofWeek().unix();
  }
  static getEndofWeekISO(): string {
    return getEndofWeek().toISOString();
  }
}
