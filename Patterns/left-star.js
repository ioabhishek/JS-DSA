
function rightStar (num) {
  for (let i = 0; i < num ; i++) {
    let row = ""
    for (let j = 0; j < i+1; j++ ) {
      row = row + "*"
    }
    console.log(row)
  }
}

let output = rightStar(5)