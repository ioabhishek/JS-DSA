// Given a number XWrite a function to determine whether the Prime number or not?
function isPrime (x) {
   for(let i = 2; i <= x-1; i++) {
      if(x%i == 0) {
         return false
      }
   }
   return true
}
   
isPrime(7)