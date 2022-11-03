const formHandler = require('../src/client/js/formHandler');

describe('Testing if formHandler function exists', () => {
    test('It should return true', () => {
        expect(formHandler).toBeDefined();
    });
});
