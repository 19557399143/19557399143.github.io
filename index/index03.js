const hf1 = 'https://19557399143.github.io/index/index03.html?indexx'
const start = qs('#start')
const lujing = {
    1:'My',
    2:'ai'
}
function qs(n) {
    return document.querySelector(n)
}
function ops(e) {
    location.search = lujing[e]
    start.style.display = 'none'

}
start.addEventListener('dblclick',(e) => {ops(e.target)})