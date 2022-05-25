function solve(num, commandOne, commandTwo, commandThree, commandFour, commandFive){
    let result = Number(num);

    let commandList = [commandOne, commandTwo, commandThree, commandFour, commandFive]

    let chop = x => x / 2;
    let dice = x => Math.sqrt(x);
    let spice = x => ++x;
    let bake = x => x * 3;
    let fillet = x => x - x * 0.2;

    for(let i=0; i<commandList.length; i++){
        switch(commandList[i]){
            case 'chop': result = chop(result); console.log(result); break;
            case 'dice': result = dice(result); console.log(result); break;
            case 'spice': result = spice(result); console.log(result); break;
            case 'bake': result = bake(result); console.log(result); break;
            case 'fillet': result = fillet(result); console.log(result); break;
        }
    }
}


// solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');