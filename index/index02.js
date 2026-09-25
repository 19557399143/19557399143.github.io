let input = document.getElementById('input')
function href(href) {
    let dehref = window.location.href
    let dhref = href
    let open = window.open(`${dehref}/${dhref}`)
}
function openpa() {
    href(input.value)
}