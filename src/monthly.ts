import { Basic } from './basic';
import { month } from './constants';

function getStartofMonth() {
  return Basic.getStartOff(month);
}

function getEndofMonth() {
  return Basic.getEndOff(month);
}

export class Monthly {
  static getStartofMonthUnix(): number {
    return getStartofMonth().unix();
  }
  static getStartofMonthISO(): string {
    return getStartofMonth().toISOString();
  }
  static getEndofMonthUnix(): number {
    return getEndofMonth().unix();
  }
  static getEndofMonthISO(): string {
    return getEndofMonth().toISOString();
  }
}
