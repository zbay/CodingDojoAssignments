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

function leapYear(yr){
	if(yr % 400 === 0){
		return true;
	}
	if(yr % 4 === 0 && yr % 100 !== 0){
		return true;
	}
	return false;
}

function printAndCount(){
	var count = 0;
	for(var i = 512; i <= 4096; i += 1){
		if(i % 5 === 0){
			count += 1;
			console.log(i);
		}
	}
	console.log(count);
}

function multiplesOfSix(){
	var counter = 6;
	while(counter <= 60000){
		console.log(counter);
		counter += 6;
	}
}

function countingDojo(){
	for(var i = 1; i <= 100; i += 1){
		console.log(i);
		if(i % 10 === 0){
			console.log("Coding Dojo")
		}
		else{
			if(i % 5 === 0){
				console.log("Coding")
			}
		}
	}
}

function hugeSucker(){
	console.log(0);
} 

function countdownByFours(){
	var year = 2016;
	while(year > 0){
		console.log(year);
	}
}

function flexibleCountdown(lowNum, highNum, mult){
	for(var i = highNum; i >= lowNum; i -= 1){
		if(i % mult === 0){
			console.log(i);
		}
	}
}

function finalCountdown(param1, param2, param3, param4){
	while(param2 <= param3){
		if(param2 % param4 === 0){
			param2 += 1;
			continue;
		}
		else{
			if(param2 % param1 === 0){
				console.log(param2);
			}
			param2 += 1;
		}
	}
}

function countdown(num){
	var arr = [];
	if(num < 0){
		return undefined;
	}
	for(var i = num; i >= 0; i -= 1){
		arr.push(i);
	}
	return arr.length;
}

function printAndReturn(num1, num2){
	console.log(num1);
	return num2;
}

function firstPlusLength(arr){
	var arr0 = arr[0];
	if(typeof arr0 !== Number){
		arr0 = 0;
	}
	return arr.length + arr0;
}

function vgt2(arr){
	var count = 0;
	var compare = arr[1];
	for(var i = 0; i < arr.length; i += 1){
		if(arr[i] > compare){
			console.log(arr[i]);
			count += 1;
		}
	}
	return count;
}

function vgt2g(arr){
	if(arr.length < 2){
		return [];
	}
	var count = 0;
	var compare = arr[1];
	var greater = []''
	for(var i = 0; i < arr.length; i += 1){
		if(arr[i] > compare){
			greater.push(arr, i);
			count += 1;
		}
	}
	console.log(count);
	return greater;
}

function thisLengthThatValue(num1, num2){
	if(num1 === num2){
		console.log("Jinx!");
	}
	var arr = [];
	for(var i = 0; i < num1; i += 1){
		arr.push(num2);
	}
	return arr;
}

function fitFirstValue(arr){
	if(arr[0] > arr.length){
		console.log("Too big!");
	}
	if(arr.length > arr[0]){
		console.log("Too small!");
	}
	console.log("Just right!");
}

function fahrenheitToCelsius(fDegrees){
	return (fDegrees - 32) * 5/9;
}

function celsiusToFahrenheit(cDegrees){
	return cDegrees * 9/5 + 32;
}

// completed: pg. 16, 20, 22

function biggieSize(arr){

}

// resume: 22, 24

//weekend challenge

var questions = ["What is the capital of Virginia?", "Who is the POTUS?", "What is 2 + 3?"];
var answers = ["Richmond", "Donald Trump", "5"];
function fillInTheBlank(){
	var name = prompt("What's your name?");
	var correct = 0;
	for(var i = 0; i < questions.length; i += 1){
		var answer = prompt(questions[i]);
		if(answer === answers[i]){
			correct += 1;
		}
		if(answer === "Q"){
			console.log(name + " answered " + i + (i > 1 ? " questions, " : " question, ") + correct + " correctly");
			return;
		}
	}
	console.log(name + " answered " + questions.length + " questions, " + correct + " correctly");
}

fillInTheBlank();