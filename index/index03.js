const start = qs('#start')
const mima = qs('#mima')
const body = qs('body')
const text = qs('#text')
let ee
const lujing = {
    0:'0912'
    1:'?page=My',
    2:'?page=ai',
}
function qs(n) {
    return document.querySelector(n)
}
function ops(e,n) {
    ee = e
    if (e.closest('[data-mm]').dataset.mm === '0' && e.closest('[data-mmm]').dataset.mmm === '') {
        if(n === 1){body.style.backgroundColor = ''}
        location.search = lujing[e.closest('[data-list]').dataset.list]
    }
    else {
        mima.style.display = 'block'
        body.style.backgroundColor = '#00000088'
    }
}
function yanzhen() {
    if(text.value === lujing['0']) {
        ee.dataset.mmm = ''
        ops(ee,1)
    }
}
if (location.search === '') {
    location.search = '?page=start'
}
if (new URLSearchParams(location.search).get('page') !== 'start') {
    start.style.display = 'none'
}
start.addEventListener('dblclick',(e) => {ops(e.target)})
text.addEventListener('blur',)