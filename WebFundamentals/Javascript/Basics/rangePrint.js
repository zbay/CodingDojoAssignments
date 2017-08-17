function printRange(start, end, skip=1){

    // detect interminable combos of variables
    if((start < end && skip <= 0) || (start > end && skip >= 0) || (start != end && skip === 0)){
        console.log("Infinite loop!");
        return;
    }

    // accommodate a single variable
    if(!end){
        end = start;
        start = 0;
    }

    // if skip is positive, count up
    if(skip > 0){
        for(var i = start; i < end; i += skip){
        console.log(i);
        }
    }
    // if skip is negative, count down
    if(skip < 0){
        for(var i = start; i > end; i += skip){
        console.log(i);
        }
    }
}

console.log("test case 1: 2, 4, 6, 8");
printRange(2, 10, 2);
console.log("test case 2: 4, 5, 6, 7");
printRange(4, 8);
console.log("test case 3: 0, 1, 2, 3");
printRange(4);
console.log("test case 4: infinite loop");
printRange(-5, 10, -1);
console.log("test case 5: infinite loop");
printRange(10, 2, 2);
console.log("test case 6: 10, 8, 6, 4");
printRange(10, 2, -2);
