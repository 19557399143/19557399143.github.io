const box = document.querySetector('#box')
const div = document.querySetector('#div')
function click() {
    if (box.style.backgroundColor === '#aaa') {
        box.style.backgroundColor =   '#0f0'
        div.style.margin          =   '8mm 1mm 1mm'
    }
    else {
        box.style.backgroundColor =   '#aaa'
        div.style.margin          =   '1mm 1mm 1mm 8mm'
    }
}