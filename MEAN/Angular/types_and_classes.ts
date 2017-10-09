let myNum: number = 5;
let myString: string = "Hello Universe";
let myArr: number[] = [1,2,3,4];
let myObj: Object = { name:'Bill'};
let anythingVariable: any = "Hey";
anythingVariable = 25; 
let arrayOne: boolean[] = [true, false, true, true]; 
let arrayTwo: any[] = [1, 'abc', true, 2];
myObj = { x: 5, y: 10 };
// object constructor
class MyNode {
    val: number;
    constructor(value: number){
        this.val = value;
    }
    doSomething(){
        let _priv: number = 10;
    }
}
let myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction(): void{
    console.log("Hello World");
    return;
}
function sendingErrors(message: string): never{
	throw new Error(message);
}