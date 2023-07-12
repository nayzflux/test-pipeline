const dayOfTheWeek = (date = new Date()) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return days[date.getDay()];
}

console.log(dayOfTheWeek(new Date()))

const addition = (a, b) => {
    const result = a + b;
    return result;
}

exports.addition = addition;

exports.dayOfTheWeek = dayOfTheWeek;