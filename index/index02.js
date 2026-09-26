let input = document.getElementById('input')
function href(href) {
    let dehref = window.location.href
    let dhref = href
    let open = window.open(`${dehref}/${dhref}`)
}
function openpa() {
    href(input.value)
}
key(evt) {
    if (evt.key === 'a') {
        window.open('https://19557399143.github.io/index/index03.html')
    }
} 