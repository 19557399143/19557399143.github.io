const box = document.getElementById('box');
box.addEventListener('click', function (e) {
  // e.target 就是实际点到的那一个 p
  console.log(e.target); // <p>我是第一个p</p>

  if (e.target.tagName === 'P') {   // 过滤：只有点到 p 才变色
    e.target.style.color = 'red';
  }
});