let x = 7;

for (let i = 1; i <= x-1; i++) {
   console.log(i)
   if(x % i == 0){
      console.log('not prime')
   } else {
      console.log('prime')
   }
}