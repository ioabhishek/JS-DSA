// Find the second largest number in an array

function secondLargest(arr) {
  if (arr.length < 2) return "Array should have atleast 2 numbers"
  
  let firstLargest = -Infinity,
    secondLargest = -Infinity


  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest
      firstLargest = arr[i]
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i]
    }
  }

  return secondLargest
}

let arr = [4, 9, 0, 2, 8, 7, 1]
console.log(secondLargest(arr))

// corner cases
// 1. what if array is empty
// 2. what if array has only negative elements
// 3. what if array has only one one Element
// 4. what if array contains same numbers
// 5. what if array has Infinite number