function regHeroes(array) {
    let result = [];
    
    for(const iterator of array){
        let [name, level, inventory] = iterator.split(' / ');
        level = Number(level);
        currentHero = {
            name: name,
            level: level,
            items: inventory ? inventory.split(', ') : []
        }
        result.push(currentHero);
    }

    console.log(JSON.stringify(result));
}

regHeroes(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);
