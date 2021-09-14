/**
 * ㅡㅡ핵심키워드
 * 일급객체, arguments, Rest Parameter(ES6), 함수의 고유 프로퍼티
 * 
 * ㅡㅡ개요
 */

{ // 다음조건을 만족하면 일급객체임
    // 1. 무명의 리터럴로 생성 가능
    const inc = function(n) {
        return ++n;
    };
    
    const dec = function(n) {
        return ++n;
    };

    // 2. 객체에 저장할 수 있다
    const obj = {inc, dec};

    // 3. 매개변수로 전달가능(콜백)
    // 4. 함수의 return값으로 사용가능
    const makeCounter = function(func) {
        let num = 0;
        return function() {
            num = func(num);
            return num;
        };
    };

    // 이렇게 선언하면 increaser변수에 함수가 들어간 후 return값을 받음
    const increaser = makeCounter(obj.inc);
    console.log(increaser); // function anonymous(무명함수)
    console.log(increaser()); // 

    // 함수의 프로퍼티
    // 함수도 객체기 때문에 프로퍼티를 가질 수 있다
    // 함수 고유의 프로퍼티는
    // arguments, caller length name prototype이 있다
    // 1. arguments(객체)
    // 함수로 전달된 파라미터 정보를 담고있다
    // 파라미터를 프로퍼티값으로 소유하며 키는 인수의 순서이다
    // callee는 함주 자신, length는 파라미터 갯수를 나타냄
    // 유사배열객체라 배열처럼 사용가능(for문 가능)
    // {
    //     0: paramter 1
    //     1: paramter 2
    //     2: paramter 3 ...
    //     callee : f
    //     length: n
    // }
    // 주로 가변인자 함수를 구현할때 유용함
    var sum = function() {
        let res = 0;
        for (let i = 0; i < arguments.length; i++) {
            res += parseInt(arguments[i]);
        }
    };
    // 이런식으로 활용가능...
    sum(1,2,3,4,5);
    sum(1,2,3,4,5,"123123");

    // ES6에서의 개선 Rest파라미터
    var sum = function(...args) {
        return args.reduce(function(pre, cur) {
            return pre + cur;
        }, 0);
    };

    // 2. caller
    // 몰라도됨

    // 3. length
    // 함수.length: 파라미터갯수
    // arguments.length: 인수갯수
    
    // 4. name
    // 함수.name: 함수이름
    var aaa = function bbb() {};
    console.log(aaa.name); // bbb
    var aaa = function() {};
    console.log(aaa.name); // ES5: 빈문자열 ES6: aaa

    // 5. __proto__(접근자 프로퍼티)
    // 모든객체는 [[Prototype]]이라는 내부슬롯을 갖는다
    // __proto__는 [[Prototype]]이 가리키는 내부슬롯을 접근하기위한 프로퍼티임
    const oo = {a:1};
    console.log(oo.__proto__ === Object.prototype); // true
    // hasOwnProperty는 대상객체의 고유한 프로퍼티임을 판별하는 함수인데
    // __proto__는 상속받은 것 이라 false를 return함
    console.log(oo.hasOwnProperty('a')); // true
    console.log(oo.hasOwnProperty('__proto__')); // // fasle

    // 6. prototype
    // 생성자 함수로 호출할 수 있는 함수 객체 construct만이 소유하는 프로퍼티임
    (function() {}).hasOwnProperty('prototype'); // true
    ({}).hasOwnProperty('prototype'); // false
}

