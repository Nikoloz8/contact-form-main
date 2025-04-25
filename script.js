let firstName = document.getElementById("first-name")
let lastName = document.getElementById("last-name")

let textarea = document.getElementById("message")

let required = document.querySelectorAll(".required")

let sub = document.getElementById("submit")

let type1 = document.getElementById("enquiry")
let type2 = document.getElementById("request")

let select = document.querySelector(".select")

sub.addEventListener("click", (e) => {
    e.preventDefault()
    function requiredCheck(field, i) {
        if (field.value === "") {
            field.style.border = "1px solid red"
            required[i].style.visibility = "visible"
            return false
        } else {
            field.style.border = "1px solid #7a9f99"
            required[i].style.visibility = "hidden"
            return true
        }
    }

    requiredCheck(firstName, 0)
    requiredCheck(lastName, 1)
    requiredCheck(textarea, 2)

    function radioChecked() {
        if (!type1.checked && !type2.checked) {
            select.style.visibility = "visible"
            return false
        } else {
            select.style.visibility = "hidden"
            return true
        }
    }

    radioChecked()

    let email = document.getElementById("email")
    let validation = document.querySelector(".email-validation")

    function emailValidation(email) {
        let e = email.value
        if (!e.includes("@") || !e.includes(".")) {
            validation.style.visibility = "visible"
            email.style.border = "1px solid red"
            return false
        } else {
            validation.style.visibility = "hidden"
            email.style.border = "1px solid #7a9f99"
            return true
        }
    }

    emailValidation(email)

    let box = document.getElementById("check")
    let submit = document.querySelector(".submit")

    function boxChecked() {
        if (!box.checked) {
            submit.style.visibility = "visible"
            return false
        } else {
            submit.style.visibility = "hidden"
            return true
        }
    }

    boxChecked()


    if (boxChecked() && emailValidation(email) && radioChecked() && requiredCheck(firstName, 0) && requiredCheck(lastName, 1) && requiredCheck(textarea, 2)) {
        alert("asd")
    }

})