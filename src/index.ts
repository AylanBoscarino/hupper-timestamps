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

const HupperTimestamps = {
  daily: Daily,
  weekly: Weekly,
  monthly: Monthly,
  basic: Basic,
  dateString: DateString,
};

export default HupperTimestamps;
