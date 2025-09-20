let num = 388;

let tempNum = num;
let numArr = tempNum.toString().split('').map(Number);

let sum = 0;

while (numArr.length > 2){
   for(let i=0; i<numArr.length; i++) {
      sum += numArr[i]
   }
   numArr = sum
}

console.log(numArr)

// if(numArr.length > 1){
// } else {
//    console.log('this is' + numArr)
// }
