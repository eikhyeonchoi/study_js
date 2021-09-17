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

let squareRes = 0;
let callbackRes = 0;

function square(target, func) {
	let res = target ** 2;
    console.log(res);
    func(res);
    return res;
}

squareRes = square(2, function(res) {
    console.log(res);
    callbackRes = res += 10;
});


