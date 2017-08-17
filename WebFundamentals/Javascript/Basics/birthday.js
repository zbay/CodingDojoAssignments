function birthdayCountdown(daysUntilBirthday){
    // case 0: negative number
    if(daysUntilBirthday < 0){
        console.log("Invalid input!");
        return;
    }
    // case 1: more than 30 days
    if (daysUntilBirthday > 30){
        console.log(daysUntilBirthday + " days until my birthday. Such a long time... :(");
    }
    else{
        // case 2: between 6 and 30
        if(daysUntilBirthday > 5){
            console.log(daysUntilBirthday +  " days until my birthday!");
        }
        else{
            // case 3: between 1 and 5
            if(daysUntilBirthday > 0){
                console.log(daysUntilBirthday + " DAYS UNTIL MY BIRTHDAY!!!!");
            }
            // case 4: exactly your birthday
            else{
                console.log("HAPPY BIRTHDAY!!!!!");
            }
        }
    }
}

birthdayCountdown(-4);
birthdayCountdown(31);
birthdayCountdown(25);
birthdayCountdown(5);
birthdayCountdown(0);
