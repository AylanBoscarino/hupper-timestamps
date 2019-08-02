export type DateStr = string;
export type duration = 'diario' | 'semanal' | 'mensal' | 'anual';
export type daysPeriod = '1 day' | '2 days' | '3 days' | '4 days' | '5 days' | '6 days';
export type durationType = 'day' | 'week' | 'month' | 'year';
export type weeksPeriod = '1 week' | '2 weeks' | '3 weeks';

export type monthPeriod = '1 month' | '2 month' | '3 month';

export type yearPeriod = '1 year';

export type timePeriod = daysPeriod | weeksPeriod | monthPeriod | yearPeriod;

export interface DateOptions<T = string | number> {
  startDate: T;
  endDate: T;
}
