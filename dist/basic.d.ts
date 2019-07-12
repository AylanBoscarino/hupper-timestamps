import moment, { Moment } from 'moment';
export default class Basic {
    static getMomentUtcOffset(): Moment;
    static getCurrentUnix(): number;
    static getStartOff(period: moment.unitOfTime.StartOf): Moment;
    static getEndOff(period: moment.unitOfTime.StartOf): Moment;
    static getMoment(): Moment;
}
