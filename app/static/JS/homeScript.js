window.addEventListener('DOMContentLoaded', function () {

    /* BEGIN - PROFILE IMAGE */
    const profileImage = Array.from(document.getElementsByClassName('left_side_navbar_img'))

    /* POPUP TEXT VISIBILITY */
    profileImage.forEach(function(image) {
        image.addEventListener('mouseover', function () {
            popupsText[0].style.visibility = 'visible'
            popupsText[0].style.opacity = 1
        })
    
        image.addEventListener('mouseout', function () {
            popupsText[0].style.visibility = 'hidden'
            popupsText[0].style.opacity = 0
        })

    })
    /* END - PROFILE IMAGE */

    /* BEGIN - NAVBAR BUTTONS */
    const homeButtons = Array.from(document.getElementsByClassName('left_side_navbar_button'))
    const popupsText = Array.from(document.getElementsByClassName('popup_text'))

    homeButtons.forEach(function (buttons, index) {
        /* REDIRECTIONS */
        buttons.addEventListener('click', function () {
            if (index == 0) {
                window.location.href = '/home/'
            } else if (index == 1) {
                window.location.href = '/home/products/'
            } else if (index == 2) {
                window.location.href = '/home/cart/'
            } else if (index == 3) {
                window.location.href = '/home/messages/'
            } else if (index == 4) {
                window.location.href = '/home/favourites/'
            }
        })

        /* POPUPS TEXT VISIBILITY */
        buttons.addEventListener('mouseover', function () {
            if (index == 0) {
                popupsText[1].style.visibility = 'visible'
                popupsText[1].style.opacity = 1
            } else if (index == 1) {
                popupsText[2].style.visibility = 'visible'
                popupsText[2].style.opacity = 1
            } else if (index == 2) {
                popupsText[3].style.visibility = 'visible'
                popupsText[3].style.opacity = 1
            } else if (index == 3) {
                popupsText[4].style.visibility = 'visible'
                popupsText[4].style.opacity = 1
            } else if (index == 4) {
                popupsText[5].style.visibility = 'visible'
                popupsText[5].style.opacity = 1
            }
        })

        buttons.addEventListener('mouseout', function () {
            if (index == 0) {
                popupsText[1].style.visibility = 'hidden'
                popupsText[1].style.opacity = 0
            } else if (index == 1) {
                popupsText[2].style.visibility = 'hidden'
                popupsText[2].style.opacity = 0
            } else if (index == 2) {
                popupsText[3].style.visibility = 'hidden'
                popupsText[3].style.opacity = 0
            } else if (index == 3) {
                popupsText[4].style.visibility = 'hidden'
                popupsText[4].style.opacity = 0
            } else if (index == 4) {
                popupsText[5].style.visibility = 'hidden'
                popupsText[5].style.opacity = 0
            }
        })
    })
    /* END - NAVBAR BUTTONS */

    /* BEGIN - CHANGE ICON ACCORDING TO PATHNAME */
    if (window.location.pathname === '/home/products/') {
        $('.icon_home').removeClass('bi bi-house-fill').addClass('bi bi-house')
        $('.icon_products').removeClass('bi bi-box2').addClass('bi bi-box2-fill')
    }
    /* END - CHANGE ICON ACCORDING TO PATHNAME */

    /* BEGIN - SEARCH BAR */
    const searchBar = document.getElementById('search_bar')

    searchBar.addEventListener('focus', function () {
        this.style.borderBottomColor = '02307C'
    })

    searchBar.addEventListener('blur', function () {
        this.style.borderBottomColor = ''
    })
    /* END - SEARCH BAR */

})