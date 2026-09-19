let inp1  = document.getElementById('inp1')
let inp2  = document.getElementById('inp2')
let bu1   = document.getElementById('bu1')
let bu2   = document.getElementById('bu2')
let bu3   = document.getElementById('bu3')
let sub   = document.getElementById('sub')
while (true) {
    if (inp1.value !== '' && inp2.value !== '') {
        sub.style.background-color = '#4af307'
    }
}
bu1.onclick {
    let in1a = proment('请输入用户名：')
    LocalStorage.setItem('usern1'in1a)
    let in1b = proment('请输入密码：')
    LocalStorage.setItem('userv1'in1b)
}
bu2.onclick {
    let in2a = proment('请输入用户名：')
    LocalStorage.setItem('usern2'in1a)
    let in2b = proment('请输入密码：')
    LocalStorage.setItem('userv2'in1b)
}
bu3.onclick {
    let in3a = proment('请输入用户名：')
    LocalStorage.setItem('usern3'in1a)
    let in3b = proment('请输入密码：')
    LocalStorage.setItem('userv3'in1b)
}
sub.onclick {
    switch (inp1) {
        case in1a:
            if(inp2 === in1b) {
                alert(`${in1a}登录成功`)
            }
            break;
        case in2a:
            if(inp2 === in2b) {
                alert(`${in2a}登录成功`)
            }
            break;
        case in3a:
            if(inp2 === in3b) {
                alert(`${in3a}登录成功`)
            }
            break;
        default:
            break;
    }
}