// the basic assignment. returns a dollar amount corresponding to the number of days of doubliing
function rewardUncertain(days){
    // case 0: "days" is less than one
    if(days < 1){
        return "Invalid number of days!";
    }

    // reward starts at the value for one day
    var reward = 0.01;

    // double the reward
    while(days > 1){
        reward *= 2;
        days -= 1;
    }
    return reward;
}

// the bonus assignment: returns a number of days needed to reach a certain dollar amount
function rewardFixed(dollars){
    // case 0: "dollars" is less than a penny
    if(dollars < 0.01){
        return "Invalid dollar amount!";
    }

    var days = 1;
    var rewardCounter = 0.01
    // double rewardCounter and increment days until the appropriate number of days is found
    while(rewardCounter < dollars){
        days += 1;
        rewardCounter *= 2;
    }
    return days;
}

console.log(rewardUncertain(0));
console.log(rewardUncertain(1));
console.log(rewardUncertain(2));
console.log(rewardUncertain(3));
console.log(rewardUncertain(4));
console.log(rewardUncertain(5));
console.log(rewardUncertain(6));
console.log(rewardUncertain(30));

console.log(rewardFixed(0));
console.log(rewardFixed(0.01));
console.log(rewardFixed(0.02));
console.log(rewardFixed(10000));
console.log(rewardFixed(1000000000));
console.log(rewardFixed(Infinity));
