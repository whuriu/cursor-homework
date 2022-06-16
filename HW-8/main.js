const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];



function getSubjects(subject){
  let obj = subject.subjects
  let res = Object.keys(obj)
  return res.map(n => n[0].toUpperCase() + n.slice(1).split().join(' ').replace(/_/gi, ' '))
}
console.log(getSubjects(students[0]))

function getAverageMark (marks){
  let res = Object.values(marks.subjects).flat()
  return (res.reduce((total, num) => total + num, 0)/res.length).toFixed(2);
}

console.log(getAverageMark(students[0]))

function getStudentInfo(student){
  const info = {
  course: student.course,
  name:student.name,
  averageMark:getAverageMark(student)
}
return info
}

console.log(getStudentInfo(students[2]))

function getStudentsNames(student){
  return student.map(el => el.name).sort()
}

console.log(getStudentsNames(students))

function calculateWordLetters(word){
  let arr = Array.from(word)
  const res = arr.reduce((acc, curr) => {
    if (acc[curr]){
      acc[curr] = acc[curr] + 1;
    } else {
      acc[curr] = 1
    }
    return acc
  },{})
  return res
}

console.log(calculateWordLetters(`test`))