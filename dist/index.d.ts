import Daily from './daily';
import Basic from './basic';
import Weekly from './weekly';
import Monthly from './monthly';
import DateString from './dateString';
declare namespace HupperTimestamp {
    const basic: typeof Basic;
    const daily: typeof Daily;
    const weekly: typeof Weekly;
    const monthly: typeof Monthly;
    const dateString: typeof DateString;
    type DateStr = string;
}
export default HupperTimestamp;
