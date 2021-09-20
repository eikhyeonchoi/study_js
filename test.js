// 생성자와 일반함수의 차이점은
// new를 붙이냐 안붙이냐의 차이임
// + 생성자함수를 정의할 땐 함수 맨 앞문자를 대문자로 하는게 관례적이다
// + 리턴값을 생략
// function Foo(name) {
//     this.name = name;
// }
// console.log(Foo()); // undeined;

// function bar(name) {
//     return 1;
// }
// console.log(bar()); // undeined;

let value = 0;
const timeout = setTimeout(function() {
    return new Promise((resolve, reject) => {
        resolve(100);
    });
}, 1000);
console.log(timeout);

