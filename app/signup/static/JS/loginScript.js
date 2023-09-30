import { LoginValidations } from "./loginValidations.js"
const validator = new LoginValidations()

window.addEventListener('DOMContentLoaded', function () {

    // BEGIN - 'GO TO SINGUP' AND 'SHOW PASSWORD' BUTTONS
    const goToSignUp = document.getElementById('go_to_signup')

    goToSignUp.addEventListener('click', function () {
        window.location.href = '/signup/'
    })

    const showPasswordButton = document.getElementById('show_password_button')
    const popUpText = document.getElementById('show_password_popup')
    let clickCount = 0
    const contentPopUpText = ['Show Password', 'Hide Password']

    showPasswordButton.addEventListener('click', function () {
        popUpText.style.visibility = 'hidden'
        popUpText.style.opacity = 0
        clickCount++
        let contentIndex = clickCount % contentPopUpText.length
        popUpText.innerHTML = contentPopUpText[contentIndex]

        if (inputs[1].type === 'password') {
            inputs[1].type = 'text'
            $('.icon').removeClass('bi bi-eye-fill').addClass('bi bi-eye-slash-fill')
        } else {
            inputs[1].type = 'password'
            $('.icon').removeClass('bi bi-eye-slash-fill').addClass('bi bi-eye-fill')
        }
    })

    showPasswordButton.addEventListener('mouseover', function () {
        popUpText.style.visibility = 'visible'
        popUpText.style.opacity = 1
    })

    showPasswordButton.addEventListener('mouseout', function () {
        popUpText.style.visibility = 'hidden'
        popUpText.style.opacity = 0
    })
    // END - 'GO TO SINGUP' AND 'SHOW PASSWORD' BUTTONS

    // BEGIN - INPUTS AND WARNINGS
    const inputs = Array.from(document.getElementsByClassName('input'))
    const warnings = Array.from(document.getElementsByClassName('warning'))

    inputs.forEach(function (input, index) {
        input.addEventListener('click', function () {
            if (index >= 0) {
                this.value = ''
                this.style.borderBottomColor = 'rgb(53, 189, 183)'
                warnings[2].innerHTML = ''
                if (index == 0) {
                    warnings[0].innerHTML = ''
                } else if (index == 1) {
                    warnings[1].innerHTML = ''
                }
            }
        })

        input.addEventListener('blur', function () {
            if (index >= 0) {
                this.style.borderBottomColor = ''
            }
        })
    })
    // END - INPUTS AND WARNINGS

    // BEGIN - DATA VALIDATION
    const logInButton = document.getElementById('log_in_button')
    const form = document.getElementById('form')

    logInButton.addEventListener('click', function (event) {

        const validatedEmail = validator.validateEmail(inputs[0])
        const validatedPassword = validator.validatePassword(inputs[1])

        if (validatedEmail && validatedPassword) {
            form.submit()
        } else {
            event.preventDefault()
            let borderColor = window.getComputedStyle(warnings, null).getPropertyValue('border-bottom-color')
            inputs.style.borderBottomColor = borderColor
        }
    })
    // END - DATA VALIDATION
})