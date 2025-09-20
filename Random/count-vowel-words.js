function vowelChecker(str) { 
   let vowel = ['a', 'e', 'i', 'o', 'u']
   let count = 0;
   const strArr = str.split(' ');
   for(let i=0; i<strArr.length; i++) {
      for(let letter of strArr[i]) {
         if( vowel.includes(letter)){
            count++
         }
        break
      }
   }
   return count
}

let str = 'a a a a a a a this just in the air'
vowelChecker(str)