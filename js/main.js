var myStr = ["Hello", "My", "Friends", "toDay", "THiS"];

//change each string to lowercase, and then add them to a new array
var newArray = [];

for (i=0; i<myStr.length; i++) {
		newArray.push(myStr[i].toLowerCase());
		};

//loop through the new array (all lowercase strings) and log the first and last character of each string to the console

for (i=0; i<newArray.length; i++) {

	console.log(newArray[i].charAt(0));
	console.log(newArray[i].charAt(newArray[i].length-1));
	}

//create a variable and store your name in it
var name = "Ekaterina Diatchenko";
var splitName = name.split("");
//using the split method and a loop, log each letter of your name to the console
for (i=0; i<splitName.length; i++) {

		console.log(splitName[i]);
	};

//using the join method, put your name back together and replace all occurrences of one letter with another
	splitName = splitName.join(" ");
	console.log(splitName.replace(/a/g, "z"));

//create a function that will get the user's input, test it against the standard regular expression for emails, and log the result in the console

function validateEmail() {
  var userEmail = document.getElementById("userEmail");
  var regEx = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,5}$/;

  console.log(regEx.test(userEmail.value));
 };

//make the function "listen" to the button using addEventListener()
document.getElementById("testEmail").addEventListener("click", validateEmail);
	