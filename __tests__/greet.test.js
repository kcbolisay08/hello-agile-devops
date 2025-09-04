const { greeeeeeeeeeeeeet } = require('../src/greet');
test('returns expected greeting', () => {
expect(greet('Team')).toBe('Hello, Team! Welcome to Agile DevOps.');
});
