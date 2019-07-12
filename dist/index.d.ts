import Daily from './daily';
import Basic from './basic';
import Weekly from './weekly';
import Monthly from './monthly';
import DateString from './dateString';
declare class HupperTimestamp {
    static readonly basic: typeof Basic;
    static readonly daily: typeof Daily;
    static readonly weekly: typeof Weekly;
    static readonly monthly: typeof Monthly;
    static readonly dateString: typeof DateString;
}
export default HupperTimestamp;
