class Student {
    constructor(university, course, fullName,mark){
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.mark = mark;
    this.dismised = false;
    }

    getInfo() {
        return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`
    }

    get marks(){
        if (!this.dismised == true){
            return this.mark
        } else {
            return null
        }
    }

    set marks(mark){
        if (!this.dismised == true){
            return this.marks.push(mark)
        } else {
            return null
        }
    }

    getAverageMark() {
        const sum = this.marks.reduce((el, current) => {
        return el + current;
        });
        return (sum / this.marks.length).toFixed(2);
      }

    dismiss(){
        return this.dismised = true
    }

    recover(){
        return this.dismised = false
    }
}

const student = new Student('ЛНУ', 2, 'Боба Мессі',[4,4,5,5])
console.log(student);
console.log(student.getInfo())
console.log(student.marks);
student.marks = 5;
console.log(student.marks)
console.log(student.getAverageMark());
student.dismiss()
console.log(`Студент виключено?: ${student.dismised}`);
console.log(student.marks)
student.recover()
console.log(`Студета виключено?: ${student.dismised}`);
console.log(student.marks)

//advance

class BudgetStudent extends Student{
    constructor(university, course, fullName,mark){
    super(university, course, fullName,mark)
    setInterval(() => this.getScholarship(), 300000)
    }

    getScholarship(){
    if (!this.dismised && this.getAverageMark() >= 4.0) {
        return console.log(`Ви отримали 1400 грн. стипендії!`)
    } else {
        return null
    }
}

}

const student1 = new BudgetStudent('МАУ', 4, 'Лена Головач',[4,4,5,4,3])
student1.getScholarship()