const { greet } = require('../src/greet');
test('returns expected greeting', () => {
expect(greet('Team')).toBe('Hello, Team! Welcome to Agile DevOps.');
console.log(greet('Team'));

const date = new Date();
const format = date.toISOString().split('T')[0]; 
console.log('Current date is:', format);
});
