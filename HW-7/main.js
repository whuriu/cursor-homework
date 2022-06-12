// 1 getRandomArray
function getRandomArray(length, min, max){
  return Array.apply(this, Array(length)).map(function(){
    return Math.floor(Math.random() * (max + 1 - min) + min );
  })
}

console.log(`getRandomArray: ${getRandomArray(15, 1, 100)}`)

// 2  getModa
function getModa(...numbers){
  let arr = Array.from(numbers)
  const res = arr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] = acc[curr] + 1;
    } else {
      acc[curr] = 1;
    }

    return acc;
  }, {});

  console.log(
    Object.keys(res).find((el) => {
      return res[el] === Math.max(...Object.values(res));
    })
  )
  }

  getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)

// 3 getAverage
function getAverage(...numbers){
  const total = numbers.reduce((total, number) => {
    return total + number;
  },0)
  return total / numbers.length
}

console.log(`getAverage from: ${getAverage (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`)

// 4 getMedian
function getMedian(...numbers){
  let sorted = Array.from(numbers).sort((a, b) => a - b)
  let arrLength = Math.floor(sorted.length / 2);
  if(sorted.length % 2 === 0 ){
    return ((sorted[arrLength - 1] + sorted[arrLength]) / 2)
  }
  return sorted[arrLength]
}

console.log(getMedian(1, 2, 3, 4, 5))
console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))
console.log(getMedian(1, 2, 3, 4))

// 5 filterEvenNumbers
function  filterEvenNumbers(...numbers) {
  let arr = Array.from(numbers)
  let result = arr.filter(el => el % 2 !== 0)
  return result
}

console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6))

//6 countPositiveNumbers
function countPositiveNumbers(...numbers){
  let arr = Array.from(numbers)
  let result = arr.filter(el => el > 0 )
  return result.length
}

console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6))

//7 getDividedByFive
function getDividedByFive(...numbers){
  let arr = Array.from(numbers)
  let result = arr.filter(el => el % 5 == 0)
  return result
}

console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))

//8 replaceBadWords
function replaceBadWords(string){
  let str = string.toLowerCase()
  const badWords = ['shit', 'fuck']
  for(let i = 0; i < badWords.length; i++){
    if(str.includes(badWords[i])){
      return str.replace(badWords[i], "****")
    }
  }
  return str
    /*badWords.forEach(badWord => str = str.replace(badWord,"****"))
      return str*/
}

console.log(replaceBadWords('Are you Fucking kidding'))

//9 divideByThree
function divideByThree(word){
  let str = Array.from(word.toLowerCase())
  let result = []
  for(let i = 0; i < str.length; i += 3){
    result.push(str.slice(i, i + 3).join(''));
  }
  return result
}
console.log(divideByThree('Commander'))

//10 generateCombinations
let generateCombinations = (string) => {
  if (!string || typeof string !== "string"){
    return "Please enter a string"
  } else if (string.length < 2 ){
    return string
  }

  let permutationsArray = []

  for (let i = 0; i < string.length; i++){
    let char = string[i]

    let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

    for (let permutation of generateCombinations(remainingChars)){
      permutationsArray.push(char + permutation) }
  }
  return permutationsArray
}

console.log(generateCombinations('abcd'))
