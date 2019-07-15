import { Daily } from './daily';
import { Weekly } from './weekly';
import { Monthly } from './monthly';
import { Basic } from './basic';
import { DateString } from './dateString';
export { Daily } from './daily';
export { Basic } from './basic';
export { Weekly } from './weekly';
export { Monthly } from './monthly';
export { DateString } from './dateString';

declare const HupperTimestamps: {
    daily: typeof Daily;
    weekly: typeof Weekly;
    monthly: typeof Monthly;
    basic: typeof Basic;
    dateString: typeof DateString;
};
export default HupperTimestamps;
