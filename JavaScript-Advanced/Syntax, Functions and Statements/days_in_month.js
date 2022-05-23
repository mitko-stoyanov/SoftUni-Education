function findDays(month, year) {
    let currentDate = new Date(year, month, 0)
    console.log(currentDate.getDate());
}

findDays(1, 2012);
findDays(2, 2021);