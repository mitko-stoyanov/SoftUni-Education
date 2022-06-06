function solve(array) {
    let result = [];
    let number = 0;

    for(let i=0; i<array.length; i++){
        number++;
        let command = array[i];

        if(command == 'add'){
            result.push(number);
        } else{
            result.pop();
        }
    }

    if(result.length == 0){
        console.log('Empty');
    } else{
        console.log(result.join('\n'));
    }
}

solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);