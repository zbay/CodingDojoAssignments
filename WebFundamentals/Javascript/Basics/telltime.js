function tellTime(hour, minute, period){

    // too lazy to do real validation, so here we are
    var modifier = "ERROR";
    var dayPeriod = "ERROR";
    var appropriateHour = "ERROR";

    //set the period of day
    if(period === "AM"){
        dayPeriod = "morning"
    }
    if(period === "PM"){
        if(hour === 12 || hour < 5){
            dayPeriod = "afternoon";
        }
        if(hour !== 12 && hour > 9){
            dayPeriod = "night";
        }
        if(hour >= 5 && hour <= 9){
            dayPeriod = "evening";
        }
    }

    // set the hour and proximity modifier 
    if(minute > 30){
        if(minute === 45){
            modifier = "quarter 'till";
        }
        else{
            modifier = "almost";
        }
        appropriateHour = hour + 1;
    }
    if(minute < 30){
        if(minute === 15){
            modifier = "quarter after";
        }
        else if(minute === 5){
            modifier = "5 after";
        }
        else{
            modifier = "just after";
        }
        appropriateHour = hour;
    }
    if(minute === 30){
        modifier = "half past";
        appropriateHour = hour;
    }

    // if noon or midnight, change the hour to the respective name and get rid of the day period
    if(appropriateHour === 12 && period === "AM"){
        appropriateHour = "midnight";
        dayPeriod = undefined;
    }
    if(appropriateHour === 12 && period === "PM"){
        appropriateHour = "noon";
        dayPeriod = undefined;
    }

    // the first ternary operator gets rid of the modifier if minute === 0
    // the second ternary operator adjusts for an undefined dayPeriod
    return "It's " + (minute === 0 ? "" : modifier + " ") + appropriateHour + (dayPeriod ? " in the " + dayPeriod : ".");
}

//test cases
console.log(tellTime(6, 5, "PM"));
console.log(tellTime(12, 15, "PM"));
console.log(tellTime(12, 30, "AM"));
console.log(tellTime(1, 0, "AM"));
console.log(tellTime(4, 45, "AM"));
console.log(tellTime(6, 10, "AM"));
console.log(tellTime(8, 40, "PM"));
console.log(tellTime(1, 29, "PM"));
console.log(tellTime(11, 45, "AM"));
console.log(tellTime(11, 45, "PM"));
