function printElements(array, step){
    result = array.filter((element, index) => index % step == 0);
    return result;
}

console.log(printElements(['5', '20', '31', '4', '20'], 2));