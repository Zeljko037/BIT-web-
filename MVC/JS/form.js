
function validation(subjectName, studentName, grade) {
    if (subjectName == 'Subject') {
        return 'Please select subject'
    } else if (!studentName || !studentName.includes(' ')) {
        return 'Please enter a valid student name'
    } else if (!grade) {
        return 'Please enter a grade'
    }

    return null;
}

function addStudent() {
    var subjectName = $("#subjectSelect option:selected").val()
    var studentName = $("#student").val();
    var grade = $("#grade").val()
    var validationMessage = validation(subjectName, studentName, grade);
    if(validationMessage) {
        alert(validationMessage);
        return;
    }

    var studentFullName = studentName.split(' ');
    var firstName = studentFullName[0][0].toUpperCase() + studentFullName[0].toLowerCase().substring(1);
    var lastName = studentFullName[1][0].toUpperCase() + studentFullName[1].toLowerCase().substring(1);

    var student = new Student(firstName, lastName)
    var subject = new Subject(subjectName)
    var exam = new Exam(subject, student, grade)
   
    return exam;
}





$(document).ready(function () {

    $("button").click(function (event) {


        var add = addStudent();
        $('#subjectSelect').val('Subject');
        $('#student').val(null);
        $('#grade').val(null);
        if (add.hasPassed() == true) {

            var counter = Number($("#passedNumber").html())
            counter++
            $("#passedNumber").html(counter);
            $('#passedScore').append('<li>' + add.examInfo() + '</li><hr>');
            // $("#passedScore").html(add.examInfo());
            //$('input[name=checkListItem').reset();
        }
        else if (add.hasPassed() == false) {
            var counter = Number($("#failedNumber").html())
            counter++
            $("#failedNumber").html(counter);
            //  $("#failedScore").html(add.examInfo());
            $('#failedScore').append('<li class="d-flex justify-content-between">' + add.examInfo() + '</li><hr>');
            // $("input")[0].reset()

        }
        var faild = Number($("#failedNumber").html());
        var total = faild + Number($("#passedNumber").html());
        var percent = (faild / total * 100).toFixed(1);
        if (isNaN(percent) == false) {
            $("#failedPercent").html(`${percent}%`)

        }

    })
});
