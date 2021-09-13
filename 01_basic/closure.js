/**
 * ㅡㅡ핵심키워드
 * 클로저, 렉시컬스코프, Environment
 * 
 * ㅡㅡ개요
 * 클로저는 함수와 그 함수가 선언된 렉시컬 환경과의 조합이다
 */

// 렉시컬스코프?
// 상위스코프를 결정하는것을 렉시컬 스코프라고 한다
// 렉시컬 스코프는 언제정해질까 ?
// 그것은 함수가 선언되고 평가될때에 정해진다(호출이 아닌 선언된 위치에 따라)
// 그럼 그 정보는(렉시컬스코프의 대한 정보 즉 상위 스코프의 대한 정보) 어디에 저장될까 ?
// 블록 레벨 스코프 기준은 렉시컬환경->외부렉시컬환경참조 Outer Lexical Environment Reference에 저장된다

// 함수의 내부슬롯 [[Environment]]
// 객체는 내부슬롯이 있다했다
// 함수의 내부슬롯 중 [[Environment]] 내부슬롯에 상위 스코프를 저장한다

// 클로저
const x = 1;
function outer() {
    const x = 10;
    const inner = function() {console.log(x);};
    return inner;
}
const innerFunc = outer(); // -- 3
innerFunc(); // -- 4 

// 3번수행하면 outer함수는 inner를 반환하고 생명주기 마감, const x도 생명주기 마감
// 4번수행하면 결과 10이다
// 이렇듯 외부 함수보다 중첩 함수가 더 오래 유지되는 경우 중첩 함수는 이미 생명 주기가 종료한 외부함수의 
// 변수를 참조할 수 있음 이러한 중첩함수를 클로저라고 부름
// 클로저가 가능한이유
// outer함수의 렉시컬환경은 inner함수의 [[Environment]] 내부슬롯에 참조되고 있고
// inner함수는 전역변수 innerFunc에 의해 참조되고 있으므로 GB의 대상이 되지 않기 때문에 가능하다(GB는 참조하고 있다면 함부로 메모리를 해제하지 않음)
// 일반적으로 상위 스코프의 식별자를 참조하며 + 외부함수보다 오래 유지될때 클로져라부름
// 클로저함수에서 참조되는 상위스코프 변수를 자유변수라고 부름
// 클로저는 상태가 의도치않게 변경되지 않도록 하기위해 사용함 => 특정함수에게만 상태변경 하게끔
// 클로저 예제 01
function counter() {
    let num = 0;
    return {
        inc() {
            return ++num;
        },
        dec() {
            return --num;
        },
        getNum() {
            return num;
        }
    };
}
const c = counter();

// 클로저 예제 02
var Counter = (function() {
    let num = 0;
    function Counter() {
    };

    Counter.prototype.inc = function() {
        return ++num;
    };
    Counter.prototype.dec = function() {
        return --num;
    };

    return Counter;
}());

// 클로저 예제 03
function counter(callbackFunc) {
    let num = 0;
    return function(callbackFunc) {
        num = callbackFunc(num);
        return num;
    };
}

const increaser = counter(function(n) {
    return ++n;
});

