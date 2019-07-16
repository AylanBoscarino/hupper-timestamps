import moment, { Moment } from 'moment-timezone';
export declare class Basic {
    static getMomentUtcOffset(inp?: moment.MomentInput, format?: moment.MomentFormatSpecification, strict?: boolean): Moment;
    static getCurrentUnix(inp?: moment.MomentInput, format?: moment.MomentFormatSpecification, strict?: boolean): number;
    static getStartOf(period: moment.unitOfTime.StartOf): Moment;
    static getEndOf(period: moment.unitOfTime.StartOf): Moment;
    static getMoment(inp?: moment.MomentInput, format?: moment.MomentFormatSpecification, strict?: boolean): Moment;
}
