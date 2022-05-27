function findPreviousDay(year, month, day) {
    let currentDate = new Date(year, month, day);
    console.log(`${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`);
}

findPreviousDay(2016, 9, 30);
findPreviousDay(2016, 10, 1);