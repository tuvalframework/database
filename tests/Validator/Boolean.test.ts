// Boolean.test.ts
import { Boolean } from '../../src/Validator/Boolean';

describe('BooleanValidator', () => {
    test('validates true as boolean', () => {
        const validator = new Boolean();
        expect(validator.isValid(true)).toBe(true);
    });

    test('validates false as boolean', () => {
        const validator = new Boolean();
        expect(validator.isValid(false)).toBe(true);
    });

    test('validates "true" as loose', () => {
        const validator = new Boolean(true);
        expect(validator.isValid('true')).toBe(true);
    });

    test('validates "false" as loose', () => {
        const validator = new Boolean(true);
        expect(validator.isValid('false')).toBe(true);
    });

    test('validates 1 as loose', () => {
        const validator = new Boolean(true);
        expect(validator.isValid(1)).toBe(true);
    });

    test('validates 0 as loose', () => {
        const validator = new Boolean(true);
        expect(validator.isValid(0)).toBe(true);
    });

    test('invalidates "1" as not loose', () => {
        const validator = new Boolean();
        expect(validator.isValid('1')).toBe(false);
    });

    test('invalidates "0" as not loose', () => {
        const validator = new Boolean();
        expect(validator.isValid('0')).toBe(false);
    });
});
