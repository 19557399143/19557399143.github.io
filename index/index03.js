const hf1 = 'https://19557399143.github.io/index/index03.html?indexx'
const indexx = qs('#indexx')
const aix = qs('#aix')
const img = qs('#img')
if (location.search === '') {
    location.search = 'indexx'
}
function qs(n) {
    return document.querySelector(n)
}
function op1() {
    location.search = 'indexx-in'
}
function op2() {
    location.search = 'aix-in'
}
// while (true) {
//     if (location.href !== h) {
//         indexx.style.display = 'none'
//         indexx.style.display = 'none'
//     }
// }
indexx.addEventListener('dblclick',op1)
aix.addEventListener('dblclick',op2)