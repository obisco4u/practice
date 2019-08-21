/*function checkDriverAge(age){
    if (Number(age) < 18) {
    var say="fuck off";
} else if (Number(age) > 18) {
    var say="lets go";
} else if (Number(age) === 18) {
    var say="good to go";
}
return say;
}*/

/*var array = ["Banana", "Apples", "Oranges", "Blueberries"];
array.shift();
array.sort();
array.push("Kiwi");
array.shift();
array.reverse();*/


// var database = [
// 	{
// 		username: "obisco",
// 		password: "1234"
// 	},
// 	{
// 		username: "cupcakes",
// 		password: "4321"
// 	},
// 	{
// 		username: "viq",
// 		password: "0000"
// 	}
// ];

// var newsfeed = [
// 	{
// 		username: "obisco",
// 		timeline: "feed1"
// 	},

// 	{
// 		username: "obisc",
// 		timeline: "feed2"
// 	},

// 	{
// 		username: "obis",
// 		timeline: "feed3"
// 	}
// ];

// function isUserValid(username, password){
// 	for(var i=0; i<database.length; i++){
// 		if (database[i].username===username && database[i].password===password){
// 			return true;
// 		}
// 	}
// 	return false;
// }

// function signIn(username, password){
// 	if (isUserValid(username, password)){
// 		console.log(newsfeed);
// 	} else{
// 		console.log("wrong user name");
// 	}
// }

// var userName = prompt("What\'s your username");
// var passWord = prompt("What\'s your password");

// signIn(userName, passWord);
//**** Code to add items to a list*****
// 

var body= document.getElementById('gradient');
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");

const display = () => body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;


color1.addEventListener("input", display);
color2.addEventListener("input", display);