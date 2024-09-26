import { HexColor } from '../../src/Validator/HexColor';

describe('HexColor Validator', () => {
    const hexColorValidator = new HexColor();

    test('valid hex colors', () => {
        expect(hexColorValidator.isValid('#FFFFFF')).toBe(true);
        expect(hexColorValidator.isValid('#FFF')).toBe(true);
        expect(hexColorValidator.isValid('#123456')).toBe(true);
    });

    test('invalid hex colors', () => {
        expect(hexColorValidator.isValid('123456')).toBe(false);
        expect(hexColorValidator.isValid('#12345G')).toBe(false);
        expect(hexColorValidator.isValid('invalidColor')).toBe(false);
        expect(hexColorValidator.isValid(null)).toBe(false);
        expect(hexColorValidator.isValid(123)).toBe(false);
    });

    test('description', () => {
        expect(hexColorValidator.getDescription()).toBe('Value must be a valid Hex color code');
    });

    test('type', () => {
        expect(hexColorValidator.getType()).toBe(HexColor.TYPE_STRING);
    });

    test('isArray', () => {
        expect(hexColorValidator.isArray()).toBe(false);
    });
});
