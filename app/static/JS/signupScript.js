import { SignUpValidations } from "./signupValidations.js"
const validator = new SignUpValidations()

window.addEventListener("DOMContentLoaded", function () {

    // BEGIN - BUTTON GO TO LOGIN
    const goToLogin = document.getElementById('go_to_login')
    const popUpText = document.getElementById('go_login_popup')

    goToLogin.addEventListener('click', function () {
        window.location.href = '/login/'
    })

    goToLogin.addEventListener('mouseover', function () {
        popUpText.style.visibility = 'visible'
        popUpText.style.opacity = 1
    })

    goToLogin.addEventListener('mouseout', function () {
        popUpText.style.visibility = 'hidden'
        popUpText.style.opacity = 0
    })
    // END - BUTTON GO TO LOGIN

    // BEGIN - INPUTS AND WARNINGS
    const inputs = Array.from(document.getElementsByClassName('input'))
    const warnings = Array.from(document.getElementsByClassName('warning'))

    inputs.forEach(function (input, index) {
        input.addEventListener('click', function () {
            if (index >= 0) {
                this.value = ''
                this.style.borderBottomColor = 'rgb(46, 125, 185)'
                if (index == 0) {
                    warnings[0].innerHTML = ''
                } else if (index == 1) {
                    warnings[1].innerHTML = ''
                } else if (index == 2) {
                    warnings[2].innerHTML = ''
                } else if (index == 3) {
                    warnings[3].innerHTML = ''
                } else if (index == 4) {
                    warnings[4].innerHTML = ''
                } else if (index == 5) {
                    warnings[5].innerHTML = ''
                } else if (index == 6) {
                    warnings[6].innerHTML = ''
                } else if (index == 7) {
                    warnings[7].innerHTML = ''
                } else if (index == 8 || index == 9) {
                    warnings[8].innerHTML = ''
                    warnings[10].innerHTML = ''
                }
            }
        })

        input.addEventListener('blur', function () {
            if (index >= 0) {
                this.style.borderBottomColor = ''
            }
        })

        // CUIT AND PHONE NUMBER FORMATS
        input.addEventListener('keyup', function() {
            if (index == 2) {
                let cuitValue = this.value.replace(/\D/g, '')
                if (cuitValue.length >= 11) {
                    let entityType = cuitValue.slice(0, 2)
                    let id_user = cuitValue.slice(2, 10)
                    let checkDigit = cuitValue.slice(10, 11)
                    inputs[2].value = entityType + '-' + id_user + '-' + checkDigit
                }
            } else if (index == 3) {
                let phoneNumberValue = this.value.replace(/\D/g, '')
                if (phoneNumberValue.length >= 10) {
                    let digitsQuantity = phoneNumberValue.slice(0, 10)
                    inputs[3].value = digitsQuantity
                }
            }
        })
    })
    // END - INPUTS AND WARNINGS

    // BEGIN - MULTIPART FORM'S STEPS
    let currentStep = 1

    function showStep(step) {
        document.getElementById("step" + currentStep).style.display = "none"
        document.getElementById("step" + step).style.display = "block"
        currentStep = step
    }

    for (let i = 2; i <= 3; i++) {
        document.getElementById("step" + i).style.display = "none";
    }
    // END - MULTIPART FORM'S STEPS

    // BEGIN - DATA VALIDATION
    const buttons = Array.from(document.getElementsByClassName("buttonStep"))
    const form = document.getElementById("form")

    buttons.forEach(function(button, index) {
        button.addEventListener('click', function () {
            if (index == 0) {
                warnings.forEach(function (warning) {
                    warning.innerHTML = ''
                })
                const validatedFirstName = validator.validateFirstName(inputs[0])
                const validatedLastName = validator.validateLastName(inputs[1])
                const validatedCuit = validator.validateCuit(inputs[2])
                const validatedPhoneNumber = validator.validatePhoneNumber(inputs[3])
                if (validatedFirstName && validatedLastName && validatedCuit && validatedPhoneNumber) {
                    showStep(2)
                }
            } else if (index == 1) {
                showStep(1)
            } else if (index == 2) {
                warnings.forEach(function (warning) {
                    warning.innerHTML = ''
                })
                const validatedEmail = validator.validateEmail(inputs[4])
                const validatedUsername = validator.validateUsername(inputs[5])
                const validatedPassword = validator.validatePassword(inputs[6])
                const validatedRepeatPassword = validator.validateRepeatPassword(inputs[7], inputs[6])
                if (validatedEmail && validatedUsername && validatedPassword && validatedRepeatPassword) {
                    showStep(3)
                }
            } else if (index == 3) {
                showStep(2)
            }
        })
    })

    form.addEventListener("submit", function (event) {
        if (!inputs[8].checked && !inputs[9].checked) {
            warnings[8].innerHTML = 'Seller or Buyer must be checked (or both)'
            warnings[10].innerHTML = 'Seller or Buyer must be checked (or both)'
            event.preventDefault()
        } else {
            form.submit()
        }
    })
    // END - DATA VALIDATION
})