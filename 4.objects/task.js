function Student(name, gender, age) {
  this.name = name,
    this.gender = gender,
    this.age = age,
    this.marks = []
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName
}

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty('marks')) {
    this.marks.push(...marks);
  }


}

Student.prototype.getAverage = function () {
  if (this.hasOwnProperty('marks') && this.marks.length !== 0) {
    let average = this.marks.reduce((accumulator, items) => {
      return accumulator + items / this.marks.length;
    }, 0)
    return average;
  } else {
    return 0
  }
}

Student.prototype.exclude = function (reason) {

}
