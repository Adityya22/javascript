/*const arr = [
    'xoxxx',
    'xxxox',
    'xxxxx',
    'xxoxx',
    'xxxxx'
]

const output = [
    'x5xxx',
    'xxx8x',
    'xxxxx',
    'xx8xx',
    'xxxxx'
]*/
const arr1 = [
    'xoxxx',
    'xxxox',
    'xxxxx',
    'xxoxx',
    'xxxxx'
]

let arr2 = arr1.map((e) => e.split(''));

// for(i=0; i<arr1.length;i++) {
//     arr2[i] = arr1[i].split('')
// }
//console.log(arr2)

for(let i=0;i<arr2.length;i++){
    for(let j=0;j<arr2[i].length;j++){
         //console.log(arr2[i])
        if(arr2[i][j]=='o'){
            count = 0;
            for (let k = i - 1; k <= i + 1; k++) {
                for (let l = j - 1; l <= j + 1; l++) {
                    if (!(i == k && j == l) && arr2[k] && arr2[k][l] == 'x') {
                        count++;
                    } 
                }
            }
            arr2[i][j] = count;
        //let count=0;
        //     console.log(i,j)
        //     if(i!=0){
        //         let count=0;
        //         if(arr2[i-1][j-1]=='x'){
        //             count++
        //         }
        //         if(arr2[i-1][j]=='x'){
        //             count++
        //         }
        //         if(arr2[i-1][j+1]=='x'){
        //             count++
        //         }
        //         if(arr2[i][j-1]=='x'){
        //             count++
        //         }
        //         if(arr2[i][j+1]=='x'){
        //             count++
        //         }
        //         if(arr2[i+1][j-1]=='x'){
        //             count++
        //         }
        //         if(arr2[i+1][j]=='x'){
        //             count++
        //         }
        //         if(arr2[i+1][j+1]=='x'){
        //             count++
        //         }
        //         arr2[i][j] = count;
        //     }
        //     if(i==0){
        //         let count=0;
        //         if(arr2[i][j-1]=='x'){
        //             count++
        //         }
        //         if(arr2[i][j+1]=='x'){
        //             count++
        //         }
        //         if(arr2[i+1][j-1]=='x'){
        //             count++
        //         }
        //         if(arr2[i+1][j]=='x'){
        //             count++
        //         }
        //         if(arr2[i+1][j+1]=='x'){
        //             count++
        //         }
        //         arr2[i][j] = count;
        //     }
        //     if(i==arr2.length - 1){
        //         let count=0;
        //         if(arr2[i-1][j-1]=='x'){
        //             count++
        //         }
        //         if(arr2[i-1][j]=='x'){
        //             count++
        //         }
        //         if(arr2[i-1][j+1]=='x'){
        //             count++
        //         }
        //         if(arr2[i][j-1]=='x'){
        //             count++
        //         }
        //         if(arr2[i][j+1]=='x'){
        //             count++
        //         }
        //         arr2[i][j] = count;
        //     }    
        }
    }
}

console.log(arr2);
