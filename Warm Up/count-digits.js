function countDigit(n) {
  if(n == 0) return 1
  
  // convert nagative number into positive
  n = Math.abs(n)
  let count = 0;
  
  while (n > 0) {
    n = Math.floor(n/10)
    console.log(n)
    count ++
  } 

  return count
}

let result = countDigit(2)
console.log(result)