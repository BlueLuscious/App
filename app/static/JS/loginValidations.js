const warnings = Array.from(document.getElementsByClassName('warning'))

export class LoginValidations {

    validateEmail(emailInput) {
        if (emailInput.value == '') {
            warnings[0].innerHTML = 'The email is empty'
            emailInput.style.borderBottomColor = 'rgb(180, 20, 60)'
            return false
        }
        return true
    } // validate email function

    validatePassword(passwordInput) {
        if (passwordInput.value == '') {
            warnings[1].innerHTML = 'The password is empty'
            passwordInput.style.borderBottomColor = 'rgb(180, 20, 60)'
            return false
        }
        return true
    } // validate password function
}