function findPrices(array) {
    let result = {}

    for (const city of array) {
        [townName, productName, price] = city.split(' | ');
        price = Number(price);

        if(!result.hasOwnProperty(productName)){
            result[productName] = {townName, price};
        } else{
            if(price < result[productName].price){
                result[productName] = {townName, price};
            }
        }
    }
    
    let allNames = Object.keys(result);
    for(let i=0; i<allNames.length; i++){
        const currentName = allNames[i];
        console.log(`${currentName} -> ${result[currentName].price} (${result[currentName].townName})`);
    }
}

findPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);