const start = qs('#start')
const lujing = {
    1:'?page=My',
    2:'?page=ai',
}
function qs(n) {
    return document.querySelector(n)
}
function ops(e) {
    location.search = lujing[e]
}
if (location.search === '') {
    location.search = '?page=start'
}
if (location.search.get('page') !== 'start') {

}
start.addEventListener('dblclick',(e) => {ops(e.target.closest('[data-list]').dataset.list)})