const urlChecker = require('../src/client/js/urlChecker');

describe('Testing if the urlChecker function exists', () => {
    test('It should return true', () => {
        expect(urlChecker).toBeDefined();
    });
});
