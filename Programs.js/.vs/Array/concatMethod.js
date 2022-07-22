const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const a=[1,true,'adi']

const children = arr1.concat(arr2).concat(a).concat(true,"false"); 
const ch = arr1.concat(arr2).concat(a).concat(true,"false"); 
document.getElementById("demo").innerHTML =children;
document.getElementById("demo1").innerHTML =ch;

var isArray1=Array.isArray(arr1);
document.write(isArray1 + "<br>")

// --------------------------------------------------------------------------------------------------------------
// array join method

let arrayJoin=children.join("--")
let arrayJoin1=children.join("//")
document.write("<br>")
document.write(arrayJoin);
document.write("<br><br>")
document.write(arrayJoin1);

var newArr=ch;
document.getElementById("demo2").innerHTML =
                        newArr.concat("javascript & react","vue,js",-1).join(">>");

