const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];;
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs(){
 let pair = []

 for(let i = 0; i <(students.length / 2); i++){
     pair.push([students[i], students[i + 2]])
    }
    return pair
}


function getThemes() {
    let pairWithThemes = []

    for (let i = 0; i < pairs.length; i++) {
        pairWithThemes.push([pairs[i].join(" та "), themes[i]])
    }
    return pairWithThemes
  }

function getMarks(){
    let result = [];

    for(let i = 0; i < students.length; i++){
        result.push([students[i],marks[i]])
    }
    return result
}

function getRandomMark(N,M){
    let H = M + 1;
    return Math.floor(Math.random() * (H - N) + N);
}

function getRandomMarks(){
    let results = getThemes();

    for(let i = 0; i < results.length; i++){
        results[i].push(getRandomMark(1,5))
    }
    return results;
}



const pairs = getPairs()
console.log(pairs)
const theme = getThemes()
console.log(theme)
const studentsMarks = getMarks()
console.log(studentsMarks)
const points = getRandomMarks()
console.log(points)


