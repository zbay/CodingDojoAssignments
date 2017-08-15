// chapter 1: fundamentals

function setAndSwap(){
	var myNumber = 42;
	var myName = "Zach";
	var temp = myNumber;
	myName = temp;
	myNumber = myName;
}

function printNums(){
	for(var i = -52; i <= 1066; i += 1){
		console.log(i);
	}
}

function beCheerful(){
	for(var i = 0; i < 98; i++){
		console.log("good morning!");
	}
}

function multiplesOfThree(){
	for(var i = -300; i <= 0; i += 1){
		if((i % 3 === 0) && (i !== -3) && (i !== -6)){
			console.log(i);
		}
	}
}

function printInts(){
	var i = 2000
	while(i <= 5280){
		console.log(i);
		i += 1;
	}
}

function sayBirthday(num1, num2){
	var birthMonth = 7;
	var birthDay = 11;
	if((num1 === birthMonth && num2 === birthDay) || (num2 === birthMonth && num1 === birthDay)){
		console.log("How did you know?");
	}
	else{
		console.log("Just another day....");
	}
}

function leapYear(){
	
}

function printAndCount(){
	
}

function multiplesOfSix(){
	
}

function countingDojo(){
	
}

function hugeSucker(){
	
} 

function countdownByFours(){
	
}

function flexibleCountdown(){
	
}

function finalCountdown(){
	
}
// pg. 16