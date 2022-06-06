//1
function maxDigit(numbers){
let arr = ('' + numbers).split('')
  return Math.max.apply(null, arr)
}

//2
function getDegree(a,n){
    let result = a;
    for (let i = 1; i < n; i++){
        result *= a;
    }
    return result;
}


//3
function getFormat(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}


  //4
function taxesCalculation(salary, tax){
    let a = salary * (tax/100);
    result = salary - a;
    return result
}


//5
function getRandomNumber(N,M){
    let H = M + 1;
    return Math.floor(Math.random() * (H - N) + N);
}


//6
function counterLetter (char, word){
 let result = 0;
 word = word.toLowerCase();
 for(let i = 0; word[i]; i++){
     let str = word[i];
     if(str == char){
         result += 1

     }
 }
 return result
}


//7
function convertCurrency(money){
    if (money.includes('$') ){
        return parseInt(money) * 25 + 'UAH';
    }else if(money.includes('UAH') || money.includes('uah')){
        return parseInt(money) / 25 + '$';
    } else{
        return console.log("Конвертація неможлива")
    }
}


//8
function getRandomPassword(length = 8) {
    let password = '';
    let randomNumber = 0;
    for(let i = 1; i <= length; i++){
      randomNumber = Math.round(Math.random() * (length + 1) );
      password += randomNumber;
     }

     return password;
  }


//9
function deleteLetters (letter, word){
    a = word.replaceAll(letter, '')
    return a
}


//10
function isPalyndrom(word){
    let original = word.toLowerCase().split(' ').join('');
     return original === original.split('').reverse().join('')
}


//11
function deleteDuplicateLetter(word){
    let str = word.toLowerCase().split('').join('');
    for(let i = 0; i < word.length; i++){
        if(counterLetter(word[i], str) > 1){
            str = deleteLetters(word[i], str)
        }
    }
    return str
}

console.log(maxDigit(987))
console.log(getDegree(9,3))
console.log(getFormat(`vLAd`))
console.log(taxesCalculation(1000,19.5))
console.log(getRandomNumber(1, 10))
console.log(counterLetter("а", "Асталавіста"))
console.log(convertCurrency('10uah'))
console.log(getRandomPassword(4));
console.log(deleteLetters('a', 'blalabal'));
console.log(isPalyndrom('Я несу гусеня'));
console.log(deleteDuplicateLetter('Бісквіт був дуже ніжним'))

