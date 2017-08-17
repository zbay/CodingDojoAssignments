function printFancy(array, symbol="->", reversed=false){
    if(reversed){
        array = array.reverse();
    }
    for(var i = 0; i < array.length; i += 1){
        console.log(i + " " + symbol + " " + array[i]);
    }
}

printFancy(["James", "Jill", "Jane", "Jack"]);
printFancy(["James", "Jill", "Jane", "Jack"], "::");
printFancy(["James", "Jill", "Jane", "Jack"], "-----", true);
