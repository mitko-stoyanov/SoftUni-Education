function solve(input) {
    let result = [];

    let commands = {
        add: str => result.push(str),
        remove: str => (result = result.filter(a => a !== str)),
        print: () => console.log(result.join(','))
    }

    input.forEach(str => {
        const [command, value] = str.split(' ');
        commands[command](value);
    })
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);