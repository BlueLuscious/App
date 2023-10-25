const warnings = Array.from(document.getElementsByClassName('warning'))

export class HomeValidations {

    validateQuantityProduct(input, index) {
        if (input.value == '') {
            input.style.borderBottomColor = 'rgb(180, 20, 60)'
            warnings[index].innerHTML = 'Quantity product is empty'
            return false
        } else if (input.value <= 0) {
            input.style.borderBottomColor = 'rgb(180, 20, 60)'
            warnings[index].innerHTML = 'Quantity must be greater than 0'
            return false
        } else if (!/^[0-9]+$/.test(input.value)) {
            input.style.borderBottomColor = 'rgb(180, 20, 60)'
            warnings[index].innerHTML = 'Quantity must be numbers only'
            return false
        }
        return true
        // validate quantity product function
    }
}