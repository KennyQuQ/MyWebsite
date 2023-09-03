let deskA = [];
let deskB = [];
let deskC = [];
let deskD = [];
let deskE = [];
let deskF = [];
let studentA = [];
let studentB = [];
let studentC = [];
let studentD = [];
let studentE = [];
let studentF = [];
let number = [];
const specialDesk = [4,6,7,8,10]
var studentText = document.getElementById("inputName")

/* const studentName = 
 */
const btnEl = document.querySelector("#btn-el")

// button click event
btnEl.addEventListener("click", fullGenerate)

function fullGenerate() {
    clear()
    generateSetup()
    generateA()
    generateB()
    generateC()
    generateD()
    generateE()
    generateF()

}
// generate students array
function generateSetup() {
    // create a student desk array
for (let i=16; i>=1; i--) {
    deskA.push(document.querySelector("#seat-a"+ i +""))
}
for (let i=15; i>=1; i--) {
    deskB.push(document.querySelector("#seat-b"+ i +""))
}
for (let i=14; i>=1; i--) {
    deskC.push(document.querySelector("#seat-c"+ i +""))
}
for (let i=13; i>=1; i--) {
    deskD.push(document.querySelector("#seat-d"+ i +""))
}
for (let i=14; i>=1; i--) {
    deskE.push(document.querySelector("#seat-e"+ i +""))
}
for (let i=13; i>=1; i--) {
    deskF.push(document.querySelector("#seat-f"+ i +""))
}

    let students = studentText.value // var -> DOUBLE BIND
    var studentName = students.split("\n")
    for(let i=1; i<=studentName.length; i++) {
        if (studentName !== undefined) {
            number.push(i)
        }
    }
    

    // arrange students
    // Class A
    for(let i=1; i<=32; i++) {
        let r = Math.floor(Math.random() * number.length) //random
        studentA.push(studentName[number[r] - 1])
        const removed = number.splice(r, 1) // remove specific index in the arrays
    }

    for(let i=1; i<=30; i++) {
        let r = Math.floor(Math.random() * number.length) //random
        studentB.push(studentName[number[r] - 1])
        const removed = number.splice(r, 1) // remove specific index in the arrays
    }

    for(let i=1; i<=28; i++) {
        let r = Math.floor(Math.random() * number.length) //random
        studentC.push(studentName[number[r] - 1])
        const removed = number.splice(r, 1) // remove specific index in the arrays
    }

    for(let i=1; i<=26; i++) {
        let r = Math.floor(Math.random() * number.length) //random
        studentD.push(studentName[number[r] - 1])
        const removed = number.splice(r, 1) // remove specific index in the arrays
    }

    for(let i=1; i<=28; i++) {
        let r = Math.floor(Math.random() * number.length) //random
        studentE.push(studentName[number[r] - 1])
        const removed = number.splice(r, 1) // remove specific index in the arrays
    }

    for(let i=1; i<=25; i++) {
        let r = Math.floor(Math.random() * number.length) //random
        studentF.push(studentName[number[r] - 1])
        const removed = number.splice(r, 1) // remove specific index in the arrays
    }
}

function generateA() {
    // Class A

    // pick a random number that wont repeat and pick students
        for (let i=1; i<=2; i++) {
                deskA.forEach(element => {
                        let r = Math.floor(Math.random() * studentA.length) //random
                        if (studentA[r] !== undefined) {
                                element.textContent += ` ${studentA[r]}` // (${number[r]})
                                element.textContent += "\n"
                            const removed = studentA.splice(r, 1) // remove specific index in the arrays
                        }
                });
        }
        // pick the remain student to the special desks that contain 3 student
        /* for (let i=0; i<=4; i++) {
            let r = Math.floor(Math.random() * number.length) //random
                if(studentName[number[r] - 1] !== undefined) {
                    deskA[specialDesk[i]].textContent += ` ${studentName[number[r] - 1]}` // (${number[r]})
                    deskA[specialDesk[i]].textContent += "\n"
                    const removed = number.splice(r, 1) // remove specific index in the array
                }
        }  */
}
function generateB() {
    // Class B

    // pick a random number that wont repeat and pick students
        for (let i=1; i<=2; i++) {
                deskB.forEach(element => {
                        let r = Math.floor(Math.random() * studentB.length) //random
                        if (studentB[r] !== undefined) {
                                element.textContent += ` ${studentB[r]}` // (${number[r]})
                                element.textContent += "\n"
                            const removed = studentB.splice(r, 1) // remove specific index in the arrays
                        }
                });
        }
        // pick the remain student to the special desks that contain 3 student
        /* for (let i=0; i<=4; i++) {
            let r = Math.floor(Math.random() * number.length) //random
                if(studentName[number[r] - 1] !== undefined) {
                    deskA[specialDesk[i]].textContent += ` ${studentName[number[r] - 1]}` // (${number[r]})
                    deskA[specialDesk[i]].textContent += "\n"
                    const removed = number.splice(r, 1) // remove specific index in the array
                }
        }  */
}
function generateC() {
    // Class C

    // pick a random number that wont repeat and pick students
        for (let i=1; i<=2; i++) {
                deskC.forEach(element => {
                        let r = Math.floor(Math.random() * studentC.length) //random
                        if (studentC[r] !== undefined) {
                                element.textContent += ` ${studentC[r]}` // (${number[r]})
                                element.textContent += "\n"
                            const removed = studentC.splice(r, 1) // remove specific index in the arrays
                        }
                });
        }
        // pick the remain student to the special desks that contain 3 student
        /* for (let i=0; i<=4; i++) {
            let r = Math.floor(Math.random() * number.length) //random
                if(studentName[number[r] - 1] !== undefined) {
                    deskA[specialDesk[i]].textContent += ` ${studentName[number[r] - 1]}` // (${number[r]})
                    deskA[specialDesk[i]].textContent += "\n"
                    const removed = number.splice(r, 1) // remove specific index in the array
                }
        }  */
}
function generateD() {
    // Class D

    // pick a random number that wont repeat and pick students
        for (let i=1; i<=2; i++) {
                deskD.forEach(element => {
                        let r = Math.floor(Math.random() * studentD.length) //random
                        if (studentD[r] !== undefined) {
                                element.textContent += ` ${studentD[r]}` // (${number[r]})
                                element.textContent += "\n"
                            const removed = studentD.splice(r, 1) // remove specific index in the arrays
                        }
                });
        }
        // pick the remain student to the special desks that contain 3 student
              /*      let r = Math.floor(Math.random() * studentD.length) //random
                if(studentD[r] !== undefined) {
                    deskD[4].textContent += ` ${studentD[r]}` // (${number[r]})
                    deskD[4].textContent += "\n"
                    const removed = number.splice(r, 1) // remove specific index in the array
                } */
        } 

function generateE() {
    // Class E

    // pick a random number that wont repeat and pick students
        for (let i=1; i<=2; i++) {
                deskE.forEach(element => {
                        let r = Math.floor(Math.random() * studentE.length) //random
                        if (studentE[r] !== undefined) {
                                element.textContent += ` ${studentE[r]}` // (${number[r]})
                                element.textContent += "\n"
                            const removed = studentE.splice(r, 1) // remove specific index in the arrays
                        }
                });
        }
        // pick the remain student to the special desks that contain 3 student
        /* for (let i=0; i<=4; i++) {
            let r = Math.floor(Math.random() * number.length) //random
                if(studentName[number[r] - 1] !== undefined) {
                    deskA[specialDesk[i]].textContent += ` ${studentName[number[r] - 1]}` // (${number[r]})
                    deskA[specialDesk[i]].textContent += "\n"
                    const removed = number.splice(r, 1) // remove specific index in the array
                }
        }  */
}
function generateF() {
    // Class F

    // pick a random number that wont repeat and pick students
        for (let i=1; i<=2; i++) {
                deskF.forEach(element => {
                        let r = Math.floor(Math.random() * studentF.length) //random
                        if (studentF[r] !== undefined) {
                                element.textContent += ` ${studentF[r]}` // (${number[r]})
                                element.textContent += "\n"
                            const removed = studentF.splice(r, 1) // remove specific index in the arrays
                        }
                });
        }
        // pick the remain student to the special desks that contain 3 student
        /* for (let i=0; i<=4; i++) {
            let r = Math.floor(Math.random() * number.length) //random
                if(studentName[number[r] - 1] !== undefined) {
                    deskA[specialDesk[i]].textContent += ` ${studentName[number[r] - 1]}` // (${number[r]})
                    deskA[specialDesk[i]].textContent += "\n"
                    const removed = number.splice(r, 1) // remove specific index in the array
                }
        }  */
}


// clear and reset the desk before generate students
function clear() {
deskA.forEach(element => {
    element.textContent = " "
})
deskB.forEach(element => {
    element.textContent = " "
})
deskC.forEach(element => {
    element.textContent = " "
})
deskD.forEach(element => {
    element.textContent = " "
})
deskE.forEach(element => {
    element.textContent = " "
})
deskF.forEach(element => {
    element.textContent = " "
})
deskA = [];
deskB = [];
deskC = [];
deskD = [];
deskE = [];
deskF = [];
studentA = [];
studentB = [];
studentC = [];
studentD = [];
studentE = [];
studentF = [];
number = [];
}

function saveList () {
    students = studentText.value
    localStorage.setItem("list", students)
}

function loadList () {
    studentText.value = localStorage.getItem("list")
}