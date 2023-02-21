
class Exam {
    constructor(subject, student, grade) {
        this.subject = subject;
        this.student = student;
        this.grade = grade;
    }
    examInfo() {
        return `${this.subject.subjectData()} ${this.student.dataStudent()} ${this.grade}`
    }
    hasPassed() {
        if (this.grade <= 5 && this.grade > 0) {
            return false
        }

        else if (this.grade > 5 && this.grade <= 10) {
            return true
        }
        else {
            return  alert('Number is not correct. Please enter again')
        }
        
    }


}

