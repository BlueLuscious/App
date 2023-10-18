const warnings = Array.from(document.getElementsByClassName('warning'))

export class SignUpValidations {

    validateFirstName(firstNameInput) {
        if (firstNameInput.value == '') {
            warnings[0].innerHTML = 'First name is empty'
            firstNameInput.style.borderBottomColor = 'rgb(180, 20, 60)'
            return false
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/.test(firstNameInput.value)) {
            warnings[0].innerHTML = 'First name must have only letters'
            firstNameInput.style.borderBottomColor = 'rgb(180, 20, 60)'
            return false
        } else if (!/^[A-Z]/.test(firstNameInput.value)) {
            warnings[0].innerHTML = 'First name must start with a capital letter'
            firstNameInput.style.borderBottomColor = 'rgb(180, 20, 60)'
            return false
        }
        firstNameInput.style.borderBottomColor = 'rgb(50, 170, 100)'
        return true
    } // validate firstname function

    validateLastName(lastNameInput) {
        if (lastNameInput.value == '') {
            warnings[1].innerHTML = 'Last name is empty'
            lastNameInput.style.borderBottomColor = 'rgb(180, 20, 60)'
            return false
        } else if (!/^([a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+\s)*[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/.test(lastNameInput.value)) {
            warnings[1].innerHTML = 'Last name must have only letters'
            lastNameInput.style.borderBottomColor = 'rgb(180, 20, 60)'
            return false
        } else if (!/^([A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]+\s)*[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]+$/.test(lastNameInput.value)) {
            warnings[1].innerHTML = 'Last name must start with a capital letter (each word)'
            lastNameInput.style.borderBottomColor = 'rgb(180, 20, 60)'
            return false
        }
        lastNameInput.style.borderBottomColor = 'rgb(50, 170, 100)'
        return true
    } // validate lastname function

    validateCuit(cuitInput) {
        if (cuitInput.value == '') {
            warnings[2].innerHTML = 'Cuit is empty'
            cuitInput.style.borderBottomColor = 'rgb(180, 20, 60)'
            return false
        } else if (cuitInput.value.length != 13) {
            warnings[2].innerHTML = 'Cuit must have 13 characters (11 digits, 2 hyphens)'
            cuitInput.style.borderBottomColor = 'rgb(180, 20, 60)'
            return false
        } else if (!/^(\d{2}-\d{8}-\d{1})$/.test(cuitInput.value)) {
            warnings[2].innerHTML = 'Cuit format is wrong (00-00000000-0)'
            cuitInput.style.borderBottomColor = 'rgb(180, 20, 60)'
            return false
        } else if (cuitInput) {
            const entityTypes = [14, 15, 20, 23, 24, 27, 30, 33, 34]
            let isValid = false

            entityTypes.forEach(function (entityType) {
                if (cuitInput.value.startsWith(entityType)) {
                    isValid = true
                }
            })

            if (!isValid) {
                warnings[2].innerHTML = 'Cuit entity type is invalid'
                cuitInput.style.borderBottomColor = 'rgb(180, 20, 60)'
                return false
            }
        }
        cuitInput.style.borderBottomColor = 'rgb(50, 170, 100)'
        return true
    } // validate cuit function

    validatePhoneNumber(phoneNumberInput) {
        if (phoneNumberInput.value == '') {
            warnings[3].innerHTML = 'Phone number is empty'
            phoneNumberInput.style.borderBottomColor = 'rgb(180, 20, 60)'
            return false
        } else if (!/^\d+$/.test(phoneNumberInput.value)) {
            warnings[3].innerHTML = 'Phone number must have only numbers'
            phoneNumberInput.style.borderBottomColor = 'rgb(180, 20, 60)'
            return false
        } else if (phoneNumberInput.value.length != 10) {
            warnings[3].innerHTML = 'Phone number must have 10 digits'
            phoneNumberInput.style.borderBottomColor = 'rgb(180, 20, 60)'
            return false
        }
        phoneNumberInput.style.borderBottomColor = 'rgb(50, 170, 100)'
        return true
    } // validate phone number function
    
    validateEmail(emailInput) {
        if (emailInput.value == '') {
            warnings[4].innerHTML = 'Email is empty'
            emailInput.style.borderBottomColor = 'rgb(180, 20, 60)'
            return false
        } else if (!/^[a-z0-9@.]+$/.test(emailInput.value)) {
            warnings[4].innerHTML = 'Email must have lowercase letters and numbers'
            emailInput.style.borderBottomColor = 'rgb(180, 20, 60)'
            return false
        } else if (emailInput) {
            const domains = ['@gmail.com', '@yahoo.com', '@outlook.com']
            let isValid = false

            domains.forEach(function (domain) {
                if (emailInput.value.endsWith(domain)) {
                    isValid = true
                }
            })

            if (!isValid) {
                warnings[4].innerHTML = 'Email domain is invalid'
                emailInput.style.borderBottomColor = 'rgb(180, 20, 60)'
                return false
            }
        }
        emailInput.style.borderBottomColor = 'rgb(50, 170, 100)'
        return true
    } // validate email function

    validateUsername(usernameInput) {
        if (usernameInput.value == '') {
            warnings[5].innerHTML = 'Username is empty'
            usernameInput.style.borderBottomColor = 'rgb(180, 20, 60)'
            return false
        } else if (usernameInput.value.length < 10 || usernameInput.value.length > 20) {
            warnings[5].innerHTML = 'Username must have between 10 to 20 characters'
            usernameInput.style.borderBottomColor = 'rgb(180, 20, 60)'
            return false
        } else if (!/^[A-Z]/.test(usernameInput.value)) {
            warnings[5].innerHTML = 'Username must start with a capital letter'
            usernameInput.style.borderBottomColor = 'rgb(180, 20, 60)'
            return false
        } else if (!/^[A-Za-z0-9]*$/.test(usernameInput.value)) {
            warnings[5].innerHTML = 'Username must not have a special character'
            usernameInput.style.borderBottomColor = 'rgb(180, 20, 60)'
            return false
        }
        usernameInput.style.borderBottomColor = 'rgb(50, 170, 100)'
        return true
    } // validate username function

    validatePassword(passwordInput) {
        if (passwordInput.value == '') {
            warnings[6].innerHTML = 'Password is empty'
            passwordInput.style.borderBottomColor = 'rgb(180, 20, 60)'
            return false
        } else if (passwordInput.value.length < 6 || passwordInput.value.length > 12) {
            warnings[6].innerHTML = 'Password must have between 6 to 12 characters'
            passwordInput.style.borderBottomColor = 'rgb(180, 20, 60)'
            return false
        } else if (!/[A-Z]/.test(passwordInput.value)) {
            warnings[6].innerHTML = 'Password must have at least one capital letter'
            passwordInput.style.borderBottomColor = 'rgb(180, 20, 60)'
            return false
        } else if (!/\d/.test(passwordInput.value)) {
            warnings[6].innerHTML = 'Password must have at least one number'
            passwordInput.style.borderBottomColor = 'rgb(180, 20, 60)'
            return false
        } else if (!/[^a-zA-Z0-9]/.test(passwordInput.value)) {
            warnings[6].innerHTML = 'Password must have at least one special character'
            passwordInput.style.borderBottomColor = 'rgb(180, 20, 60)'
            return false
        }
        passwordInput.style.borderBottomColor = 'rgb(50, 170, 100)'
        return true
    } // validate password function

    validateRepeatPassword(repeatPasswordInput, passwordInput) {
        if (repeatPasswordInput.value == '') {
            warnings[7].innerHTML = 'Repeated password is empty'
            repeatPasswordInput.style.borderBottomColor = 'rgb(180, 20, 60)'
            return false
        } else if (repeatPasswordInput.value != passwordInput.value) {
            warnings[7].innerHTML = 'Passwords do not match'
            repeatPasswordInput.style.borderBottomColor = 'rgb(180, 20, 60)'
            return false
        }
        repeatPasswordInput.style.borderBottomColor = 'rgb(50, 170, 100)'
        return true
    } // validate repeated password function
}