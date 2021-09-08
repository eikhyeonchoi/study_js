/**
 * ㅡㅡ핵심키워드
 * 데이터타입, 원시타입, 객체타입, 템플릿리터럴, 동적타이핑
 * 
 * ㅡㅡ개요
 * ES6기준 js는 7개의 데이터타입을 가짐
 * 원시타입/객체타입으로 구분지을 수 있다
 * 원시: number, string, boolean, undefined, null, symbol
 * 객체: object, function, array etc..
 */

// number
// js에서 숫자타입은 모두 배정밀도 64비트 부동소수점 형식의 2진수로 저장됨
// 모두 10진수로 해석됨
// 특별한 값 Infinity, -Infinity, NaN(not a number)도 있음

// string
// 벡틱이던 따옴표던 감싸야 string임

// 템플릿 리터럴(ES6)
// 문자열을 벡틱으로 묶는 리터럴
// 따로 개행(\n), 탭(\t)등 할 필요없고 그냥 쓰면됨

// 벡틱 사용x
var template = "<div>\n\t<p>이런식</p>\n</div>";
// 벡틱 사용
var template = `<div>
    <p>이런식</p>
</div>`;

// 중간에 표현식도 삽입가능
var name = `choi`;
var template2 = `hi i am ${name}`; 
console.log(template2); // hi i am choi

// boolean
// true or false

// undefined
// 변수 선언 하면 무조건 undefined로 초기화됨
// 즉 undefined라는것은 따로 개발자가 초기화하지 않음을 뜻함
// 권장하지 않는 변수이며 만약 빈값을 표현하고 싶다면 null을 할당해라

// null
// 의도적부재

// symbol
// 변경 불가능한 원시 타입의 값
// 다른 값과 중복되지 않는 유일무이한 값
// 보통 객체프로퍼티 키 만들때 사용
// 함수호출해서 생성함
var key = Symbol('key');
console.log(typeof key); // symbol

// 객체타입
// 원시타입을 제외한 모든것이 객체임
// js를 이루고 있는 거의 모든것이 객체

// 데이터타입이 필요한 이유
// 1. 저장할때 메모리공간의 크기결정(메모리손실방지)
// 2. 값 참조시 메모리참조할 크기를 알아야함
// 3. 메모리에서 읽은 2진수를 어떻게 해석할지(숫자?, 문자? 등)

// 동적타입
// js는 변수 선언이 아닌 할당에 의해 타입이 결정됨
// 이말인즉슨 재할당할때마다 변수타입이 변경된다는것
