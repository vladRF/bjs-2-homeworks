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
  if (student1.hasOwnProperty('marks')) {
    student1.marks.push(...marks);
  }


}

Student.prototype.getAverage = function () {

}

Student.prototype.exclude = function (reason) {

}
