// 1) Complete the solution so that the function will break up camel casing, using a space between words.
  // Example camelCasing("camelCasing")  => should return "camel Casing"

function solution(string) {
  let result = ''
  for (let i = 0; i < string.length; i++) {
    let char = string[i]
    if (char === char.toUpperCase()) {
      result += ' '
    }
    result += char
  }
  return result
}

// 2) Implement a function that accepts 3 integer values a, b, c.
// The function should return true if a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a,b,c) {
  return (a + b) > c && (a + c) > b && (c + b) > a;
}

// 3) If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
  let counter = 0
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      counter += i
    }
  }
  return counter
}

// 4) In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
  // Example: filter_list([1,2,'a','b']) == [1,2]

function filter_list(l) {
  const filterredList = []
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === 'number') {
      filterredList.push(l[i])
    }
  }
  return filterredList
}

// 5) In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
  // Example: highAndLow("1 2 3 4 5") -> return "5 1"

function highAndLow(numbers){
  const newList = []
  const nums = numbers.split(' ')
  const max = Math.max(...nums)
  const min = Math.min(...nums)
  newList.push(max, min)
  return newList.join(' ')
}

// 6) Write a function that takes in a string of one or more words, and returns the same string,
// but with all five or more letter words reversed (Just like the name of this Kata).
// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.
  // Example: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"

function spinWords(string){
  const splittedString = string.split(' ')
  let result = ''
  splittedString.map((str, i) => {
    if (str.length >= 5) {
      splittedString[i] = str.split('').reverse().join('')
    } else {
      splittedString[i] = str
    }
    result = splittedString.join(' ')
  })
  return result
}

// 7) Your task is to sort a given string. Each word in the string will contain a single number.
// This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string.
// The words in the input String will only contain valid consecutive numbers.
  // Example: "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"

function order(words) {
  if (!words) {
    return "";
  }

  const wordsArr = words.split(" ");
  const resultArr = Array(wordsArr.length);

  for (let i = 0; i < wordsArr.length; i++) {
    const word = wordsArr[i];
    const position = parseInt(word.split("").find((char) => !isNaN(char))) - 1;
    resultArr[position] = word;
  }

  return resultArr.join(" ");
}


