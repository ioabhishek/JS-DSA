
function findSum (num) {
   let numArr = n => [...`${n}`].map((n) => parseInt(n))
   const arr = numArr(num)

   let sum = 0
   for (let i = 0; i < arr.length ; i++) {
      if (i%2 == 0) {
         sum += arr[i]
      } else {
         sum -= arr[i]
      }
   }
   return sum
}

console.log(findSum(1))