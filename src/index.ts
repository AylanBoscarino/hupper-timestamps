import Daily from './daily';
import Basic from './basic';
import Weekly from './weekly';
import Monthly from './monthly';
import DateString from './dateString';

namespace HupperTimestamp {
  export const basic = Basic;

  export const daily = Daily;
  export const weekly = Weekly;
  export const monthly = Monthly;
  export const dateString = DateString;

  export type DateStr = string;
}

export default HupperTimestamp;