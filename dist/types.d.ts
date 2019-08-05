import moment from 'moment';
export declare type DateStr = string;
export declare type duration = 'diario' | 'semanal' | 'mensal' | 'anual';
export declare type daysPeriod = '1 day' | '2 days' | '3 days' | '4 days' | '5 days' | '6 days';
export declare type durationType = moment.unitOfTime.StartOf;
export declare type weeksPeriod = '1 week' | '2 weeks' | '3 weeks';
export declare type monthPeriod = '1 month' | '2 month' | '3 month';
export declare type yearPeriod = '1 year';
export declare type timePeriod = daysPeriod | weeksPeriod | monthPeriod | yearPeriod;
export interface DateOptions<T = string | number> {
    startDate: T;
    endDate: T;
}
