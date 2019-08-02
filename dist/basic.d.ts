import moment, { Moment } from 'moment-timezone';
import { duration } from './types';
export declare class Basic {
    static getMomentUtcOffset(inp?: moment.MomentInput, format?: moment.MomentFormatSpecification, strict?: boolean): Moment;
    static getCurrentUnix(inp?: moment.MomentInput, format?: moment.MomentFormatSpecification, strict?: boolean): number;
    static getStartOf(period: moment.unitOfTime.StartOf): Moment;
    static getEndOf(period: moment.unitOfTime.StartOf): Moment;
    static getMoment(inp?: moment.MomentInput, format?: moment.MomentFormatSpecification, strict?: boolean): Moment;
    static getStartOfByDuration(dur: duration): moment.unitOfTime.StartOf;
    static getUnixTimestampFromDuration: (someDuration: duration) => number;
    static getISOStringFromDuration: (someDuration: duration) => string;
}
