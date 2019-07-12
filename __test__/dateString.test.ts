import DateString from '../src/dateString';

const testDateStr = '1970-01-18';
const wrongDateStr = '19700118'

test(`checkValidDateStr`, () => {
  expect(DateString.checkValidDateStr(testDateStr)).toBeTruthy();
  expect(DateString.checkValidDateStr(wrongDateStr)).toBeFalsy();
});

test('toDateStr', () => {
  expect(() => DateString.toDateStr(wrongDateStr)).toThrowError(/Invalid/);
  expect(DateString.toDateStr(new Date(1562957480))).toBe(testDateStr);
});
