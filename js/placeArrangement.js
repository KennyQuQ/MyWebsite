let student = [];
let number = [];
const specialDesk = [3,4,5]
var studentText = document.getElementById("inputName")


/* const studentName = 
 */
const btnEl = document.querySelector("#btn-el")

// create a student desk array
for (let i=13; i>=1; i--) {
    student.push(document.querySelector("#seat-"+ i +""))
}

// button click event
btnEl.addEventListener("click", generate)

function CSalert() {
    alert("More Coming Soon! :)");
}

// generate students array
function generate() {
    students = studentText.value // var -> DOUBLE BIND
    var studentName = students.split("\n")
    clear()
    for(let i=1; i<=studentName.length; i++) {
        if (studentName !== undefined) {
            number.push(i)
        }
    }

    // pick a random number that wont repeat and pick students
        for (let i=1; i<=parseInt(studentName.length/13)+1; i++) {
            if(studentName.length >13 && number.length <= 3) {break}
                student.forEach(element => {
                        let r = Math.floor(Math.random() * number.length) //random
                        if (studentName[number[r] - 1] !== undefined) {
                                element.textContent += ` ${studentName[number[r] - 1]}` // (${number[r]})
                                element.textContent += "\n"
                                console.log(number)
                            const removed = number.splice(r, 1) // remove specific index in the arrays
                        }
                });
        }
        // pick the remain student to the special desks that contain 3 student
        for (let i=0; i<=3; i++) {
            let r = Math.floor(Math.random() * number.length) //random
                if(studentName[number[r] - 1] !== undefined) {
                    student[specialDesk[i]].textContent += ` ${studentName[number[r] - 1]}` // (${number[r]})
                    student[specialDesk[i]].textContent += "\n"
                    const removed = number.splice(r, 1) // remove specific index in the array
                }
        } 
}

// clear and reset the desk before generate students
function clear () {
    student.forEach(element => {
        element.textContent = " "
}
)}

function saveList () {
    students = studentText.value
    localStorage.setItem("list", students)
}

function loadList () {
    studentText.value = localStorage.getItem("list")
}