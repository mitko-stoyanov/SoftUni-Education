function greatestDevisor(a, b){
    if(b){
        return greatestDevisor(b, a % b);
    } else{
        console.log(a);
    }
}

greatestDevisor(15, 5);
greatestDevisor(2154, 458);