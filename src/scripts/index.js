let open = document.getElementById('open-menu')
let close = document.getElementById('close-menu')
let menuModal = document.getElementById('menu-modal')
let header = document.getElementById('header')
let logo = document.getElementById('logo')

open.addEventListener('click', function(){
    hideElement(open)
    showElement(close)
    showElement(menuModal)
    addClass(header, "mobile")
    addClass(logo, "mobile")
})

close.addEventListener('click', function(){
    hideElement(close)
    showElement(open)
    hideElement(menuModal)
    removeClass(header, "mobile")
    removeClass(logo, "mobile")
})

function showElement( element ) {
    element.classList.remove('hide')
    element.classList.add('show')
}

function hideElement( element ) {
    element.classList.remove('show')
    element.classList.add('hide')
}

function addClass( element, className ) {
    element.classList.add(className)
}

function removeClass( element, className ) {
    element.classList.remove(className)
}

