import { PrependSign } from "../utils/NumberUtils";

describe('DateUtils Test', () => {
    test('Expected 100 to be parsed as \'+100\'', () => {
        expect(PrependSign(100)).toBe("+100");
    });

    test('Expected 0 to be parsed as \'0\'', () => {
        expect(PrependSign(0)).toBe("0");
    });

    test('Expected -100 to be parsed as \'-100\'', () => {
        expect(PrependSign(-100)).toBe("-100");
    });
});
