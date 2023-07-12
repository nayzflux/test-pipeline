const { dayOfTheWeek, addition} = require('./app');


test('getDay returns the long-format day of the week', () => {
    const day = dayOfTheWeek( new Date('3/11/2020') );
    expect( day ).toBe('Wednesday');
});

test('addition returns number added', () => {
    const result = addition(23, 10);
    expect(result).toBe(33)
})