// Pattern 1
// function rightStar (num) {
//   for (let i = 0; i < num ; i++) {
//     let row = ""
//     for (let j = 0; j < i+1; j++ ) {
//       row = row + (j + 1)
//     }
//     console.log(row)
//   }
// }

// let output = rightStar(5)

// Pattern 2
// function rightStar (num) {
//   for (let i = 1; i <= 5 ; i++) {
//     let row = ""
//     for (let j = 0; j < i+1; j++ ) {
//       row = row + i
//     }
//     console.log(row)
//   }
// }

// let output = rightStar(5)

// Pattern 3
function rightTopStar (num) {
  for (let i = 0; i < 5 ; i++) {
    let row = ""
    for (let j = 0; j < num - i; j++ ) {
      row = row + (j+1)
    }
    console.log(row)
  }
}

let output = rightTopStar(5)

