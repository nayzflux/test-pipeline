const dayOfTheWeek = (date = new Date()) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return days[date.getDay()];
}

console.log(dayOfTheWeek(new Date()))

exports.dayOfTheWeek = dayOfTheWeek;