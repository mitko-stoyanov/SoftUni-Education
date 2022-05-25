function solve(num, commandOne, commandTwo, commandThree, commandFour, commandFive) {
    let commands = [commandOne, commandTwo, commandThree, commandFour, commandFive];
    let result = Number(num);

    commands.forEach(command => {
        switch(command){
            case 'chop': result /= 2; break;
            case 'dice': result = Math.sqrt(result); break;
            case 'spice': result += 1; break;
            case 'bake': result *= 3; break;
            case 'fillet': result -= 0.2 * result; break;
        }

        console.log(result)
    });
} 


// solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');