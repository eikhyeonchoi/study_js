/**
 * ㅡㅡ핵심키워드
 * 스코프, 동적 스코프, 정적(렉시컬) 스코프
 * 
 * ㅡㅡ개요
 * 모든 식별자는 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효범위가 결정됨
 * 즉 스코프는 식별자가 유효한 범위 + 엔진이 식별자를 검색할 때 사용하는 규칙(식별자 결정)
 */

// 전역 스코프에 x변수가 있고
// foo함수 스코프에도 x변수가 있다
// 서로 다른 메모리이다 즉 다른 변수임
var x = 'static scope';
var foo = function() {
    var x = 'local scope';
    console.log(x); // local scope
};
console.log(x); // static scope

// 아래 예제에서 알수 있 듯 스코프가 계층적으로 이뤄져있다
// inner -> outer -> 전역
// 이를 스코프체인 이라고함
// 엔진은 변수를 참조할 때 해당 변수 위치 스코프에서 올라가면서 찾음
// 위에서 아래로는 절대 불가능함
// 예를들어 4번이라 가정하면 x를 찾게되는데
// x변수는 inner()에 있음 그래서 바로 참조하는거임
// 다시 예를들어 6번의경우는 inner()에 z가없고 outer에 z가 있으니 outer()의 z를 참조
// 7번을보면 x는 inner()에도있지만 현재 스코프가 전역스코프이기때문에 하위스코프로 내려갈 수 없다
// + 전역변수는 어디서든 참조가능
//
var x = 'global x';
var y = 'global y';
function outer() {
    var z = 'outer`s z';
    console.log(x); // global x -- 1
    console.log(y); // global y -- 2
    console.log(z); // outer`s z -- 3

    function inner() {
        var x = 'inner`s x';
        console.log(x); // inner`s x -- 4
        console.log(y); // global y -- 5
        console.log(z); // outer`s z -- 6
    }

    inner();
}
outer();
console.log(x); // global x -- 7
console.log(y); // global y -- 8

// 동적/정적 스코프
// 결과값을 무엇일까
// 동적스코프는 자신이 호출된 시점에서 상위스코프를 결정해야하기 때문에 동적스코프고
// 정적(렉시컬) 스코프는 자신이 선언된(정의된) 스코프에서 상위 스코프가 결정된다
// 함수 객체는 자신이 선언된 위치를 기억한다 왜냐면 호출될때마다 상위스코프를 참조할 필요가 있기때문
// 이 개념을 가지고 예를보면 bar()의 상위스코프는 전역스코프이다
// 따라서 결과는 둘 다 1이다
// foo()의 내부함수로서 bar()를 호출하고 있지만 스코프에서 호출은 아무 의미가 없다
var x = 1;
function foo() {
    var x = 10;
    bar();
}
function bar() {
    console.log(x);
}
foo(); // ??
bar(); // ??