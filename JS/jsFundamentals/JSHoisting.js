// 1
console.log(hello);
var hello = 'world';


//Result: 
//undefined;

// 2
var needle = 'haystack';
test();


function test(){
	var needle = 'magnet';
	console.log(needle);
}

// Result:
var needle;
test();

function test(){
    var needle;
	var needle = 'magnet';
	console.log(needle);
}
var needle = 'haystack';

// 3
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

// Result:

var brendan;
function print(){
    var brendan;
	brendan = 'only okay';
	console.log(brendan);
}
var brendan = 'super cool';
console.log(brendan);

//4

var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = ‘gone’;
}

// Result:

var food;
console.log(food);
eat();
function eat(){
    var food;
	food = 'half-chicken';
	console.log(food);
	var food = ‘gone’;
}
var food = 'chicken';

//5
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

//result:
// "mean is not a function"

//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

//result:
var genre;
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    var genre;
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

//result: learn is not a function
var dojo;
function learn() {
    var dojo;
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
learn();
dojo = "san jose";
console.log(dojo);

