var inputArray = [];
var size=prompt("enter the size of the array"); //Maximum Array size

for(var i=0; i<size; i++) {
	
	//Taking Input from user
	inputArray[i] = prompt(" 'Enter Element ' + (i+1)");
}

//Print the array in the console.
//console.log(inputArray);
document.write("<br><br><br>");
document.write("the user given array is....");
document.write("<br><br><br>");
document.write(inputArray);