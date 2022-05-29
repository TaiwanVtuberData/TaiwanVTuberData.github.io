import { getISODateString } from "../utils/DateTimeUtils";

describe('getISODateString Test', () => {
    test('Expected new Date(\'2022-03-19\') to be parsed as \'2022-03-19\'', () => {
        const date = new Date('2022-03-19'); 
        expect(getISODateString(date, 8)).toBe('2022-03-19');
    });

    test('Expected new Date(\'2022-03-19T16:00:01Z\') to be parsed as \'2022-03-20\'', () => {
        const date = new Date('2022-03-19T16:00:01Z'); 
        expect(getISODateString(date, 8)).toBe('2022-03-20');
    });

    test('Expected new Date(\'2022-03-19T12:37:28+00:00\') to be parsed as \'2022-03-19\'', () => {
        const date = new Date('2022-03-19T12:37:28+00:00'); 
        expect(getISODateString(date, 8)).toBe('2022-03-19');
    });

    test('Expected new Date(\'2022-03-19T07:59:59+08:00\') to be parsed as \'2022-03-19\'', () => {
        const date = new Date('2022-03-19T07:59:59+08:00'); 
        expect(getISODateString(date, 8)).toBe('2022-03-19');
    });
});
