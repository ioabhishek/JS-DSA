
// function rightStar (num) {
//   for (let i = 0; i < num ; i++) {
//     let row = ""
//     // j <= i or j < i + 1 both will work the same 
//     for (let j = 0; j < i+1; j++ ) {
//       row = row + "*"
//     }
//     console.log(row)
//   }
// }

// let output = rightStar(5)


function rightNumber101 (num) {
  // let toggle = 1
  for (let i = 0; i < num ; i++) {
    let row = ""
    let toggle = 1
  
    for (let j = 0; j <= i; j++ ) {
      row = row + toggle
      if(toggle === 1) {
        toggle = 0
      } else {
        toggle = 1
      }
    }
    console.log(row)
  }
}

let output = rightNumber101(5)
// We can use either toggle or we can use 
// we can check for even odd index and then accordingly we can add 1,0 in row