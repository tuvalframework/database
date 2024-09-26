import { Domain } from '../../src/Validator/Domain';

describe('Domain Validator', () => {
    const domainValidator = new Domain();

    test('valid domains', () => {
        expect(domainValidator.isValid('example.com')).toBe(true);
        expect(domainValidator.isValid('sub.domain.org')).toBe(true);
    });

    test('invalid domains', () => {
        expect(domainValidator.isValid('invalid_domain')).toBe(false);
        expect(domainValidator.isValid('123.456')).toBe(false);
        expect(domainValidator.isValid(null)).toBe(false);
        expect(domainValidator.isValid(123)).toBe(false);
    });

    test('description', () => {
        expect(domainValidator.getDescription()).toBe('Value must be a valid domain');
    });

    test('type', () => {
        expect(domainValidator.getType()).toBe(Domain.TYPE_STRING);
    });

    test('isArray', () => {
        expect(domainValidator.isArray()).toBe(false);
    });
});
