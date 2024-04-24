const { dayOfTheWeek } = require('./app');
const { monthOfTheYear } = require('./app');


test('getDay returns the long-format day of the week', () => {
    const day = dayOfTheWeek( new Date('11/3/2020') );
    expect( day ).toBe('Wednesday');
});
test('getMonth returns the month of the year', () => {
    const month = monthOfTheYear( new Date('11/3/2020') );
    expect( month ).toBe('November');
});
