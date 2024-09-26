import { ArrayList } from '../../src/Validator/ArrayList';
import { Integer } from '../../src/Validator/Integer';
import { Text } from '../../src/Validator/Text';
import { Numeric } from '../../src/Validator/Numeric';

describe('ArrayList Tests', () => {
    test('testDescription', () => {
        const arrayList = new ArrayList(new Integer());
        expect(arrayList.isValid(['text'])).toBe(false);
        expect(arrayList.getDescription()).toBe('Value must a valid array and Value must be a valid integer');

        const boundedArrayList = new ArrayList(new Integer(), 3);
        expect(boundedArrayList.isValid(['a', 'b', 'c', 'd'])).toBe(false);
        expect(boundedArrayList.getDescription()).toBe('Value must a valid array no longer than 3 items and Value must be a valid integer');
    });

    test('testCanValidateTextValues', () => {
        const arrayList = new ArrayList(new Text(100));
        expect(arrayList.isArray()).toBe(true);
        // expect(arrayList.isValid(['0', 'string', 1, 'string'])).toBe(true);
        expect(arrayList.isValid(['string', 'string'])).toBe(true);
        expect(arrayList.isValid(['string', 'string', 3])).toBe(false);
        expect(arrayList.isValid('string')).toBe(false);
        expect(arrayList.getType()).toBe('string');
        expect(arrayList.getValidator()).toBeInstanceOf(Text);
    });

    test('testCanValidateNumericValues', () => {
        const arrayList = new ArrayList(new Numeric());
        expect(arrayList.isValid([1, 2, 3])).toBe(true);
        expect(arrayList.isValid(1)).toBe(false);
        expect(arrayList.isValid('string')).toBe(false);
        expect(arrayList.getType()).toBe('mixed');
        expect(arrayList.getValidator()).toBeInstanceOf(Numeric);
    });

    test('testCanValidateNumericValuesWithBoundaries', () => {
        const boundedArrayList = new ArrayList(new Numeric(), 2);
        expect(boundedArrayList.isValid([1])).toBe(true);
        expect(boundedArrayList.isValid([1, 2])).toBe(true);
        expect(boundedArrayList.isValid([1, 2, 3])).toBe(false);
        expect(boundedArrayList.getType()).toBe('mixed');
        expect(boundedArrayList.getValidator()).toBeInstanceOf(Numeric);
    });
});
