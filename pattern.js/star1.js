document.write("<br>")

/*
Pattern 1:

*
** 
***
****
*****
*/

document.write("Pattern 1")
document.write("<br>")

for(var i=1;i<=5;i++){
    for(var j=1;j<=i;j++){
    document.write("*" + "<tr>");
    }
   document.write("<br>");
}

/*
Pattern 2":

*****
****
***
**
*
*/

document.write("<br>")

document.write("Pattern 2")
document.write("<br>")

for(var i=5;i>=1;i--){
    for(var j=i;j>=1;j--){
    document.write("*" + "<tr>");
    }
   document.write("<br>");
}

//--------------------------------------------------------------------------

document.write("<br>")

document.write("Pattern 3")
document.write("<br>")

var n = prompt("enter the value");

for(var i=n;i>=1;i--){
    for(var j=i;j>1;j--){
        document.write(" ");
    }
    
    for(var k=1;k<=i;k++){
        document.write("*");
    }

   document.write("<br>");
}

