import { Basic } from './basic';
import { day } from './constants';

function getStartofDay() {
  return Basic.getStartOf(day);
}

function getEndofDay() {
  return Basic.getEndOf(day);
}

export class Daily {
  static getStartofDayUnix(): number {
    return getStartofDay().unix();
  }
  static getStartofDayISO(): string {
    return getStartofDay().toISOString();
  }
  static getEndofDayUnix(): number {
    return getEndofDay().unix();
  }
  static getEndofDayISO(): string {
    return getEndofDay().toISOString();
  }
}
