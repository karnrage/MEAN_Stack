var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: [1,2,3,4];
let myObj: {[key:string]: (string | number)} = { name:'Bill'};
var anythingVariable: any = "Hey";
var anythingVariable: any = 25; 
const arrayOne: boolean[] = [true, false, true, true]; 
const arrayTwo: (number | string | boolean)[] = [1, 'abc', true, 2];
myObj= { x: 5, y: 10 };

class MyNode {
    val: number; //need to initialize the variable before using
    _priv:number;
    constructor (val:number) {
        this.val = 0;
        this.val = val;
    }
    doSomething() {
        this._priv = 10;
    };
};
let myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction():void {
    console.log("Hello World" );
    return;
}
function sendingErrors():never {
	throw new Error('Error message');
}
