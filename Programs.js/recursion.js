// function combination(word){
//     let len= word.length;
//     let letters = word.split('');
//     console.log(letters, len);

// }
// combination("car");

// function perm(letters){
    
// }
function permute(str, l, r, pass = 1)
{
    if (l == r)
            document.write(str+"<br>");
        else
        {
            for (let i = l; i <= r; i++)
            {
                str = swap(str, l, i);
                console.log(str, 'str one', pass, l, i);
                permute(str, l + 1, r, pass + 1);
                str = swap(str, l, i);
                console.log(str, 'str two', pass, l, i);
            }
        }
}
 
function swap(a, i, j)
{
    let temp;
let charArray = a.split("");
temp = charArray[i] ;
charArray[i] = charArray[j];
charArray[j] = temp;
return (charArray).join("");
}
 
let str = "ABC";
let n = str.length;
permute(str, 0, n-1);