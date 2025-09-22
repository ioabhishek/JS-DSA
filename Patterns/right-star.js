
// function rightStar (n) {
//   for (let i = 0; i < n ; i++) {
//     let row = ""
//     for (let j = 0; j < n; j++ ) {
//       if(j < n-(i+1)) {
//         row = row + " "
//       } else {
//         row = row + "*"
//       }
//     }
//     console.log(row)
//   }
// }

// let output = rightStar(5)

// Without if condition
function rightStar (n) {
  for (let i = 0; i < n ; i++) {
    let row = ""
    for (let j = 0; j < n-i+1; j++ ) {
        row = row + " "
    }
    for (let k = 0; k <= i; k++ ) {
        row = row + "*"
    }
    console.log(row)
  }
}

let output = rightStar(5)