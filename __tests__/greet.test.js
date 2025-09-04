const { greet } = require('../src/greet');
const date = new Date();

const newFormat = date.toISOString().split('T')[0]; // YYYY-MM-DD
test('returns expected greeting', () => {
expect(greet('Team')).toBe('Hello, Team! Welcome to Agile DevOps.');

console.log(greet('Team'));
console.log("Today's date is: ", newFormat);
});
