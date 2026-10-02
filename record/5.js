// 用 await：从上往下读，像同步代码一样
const content = await file.text();
const data = JSON.parse(content);
console.log(data);