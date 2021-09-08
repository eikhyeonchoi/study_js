/**
 * ㅡㅡ핵심키워드
 * 표현식, 리터럴, 값, 문
 * 
 * ㅡㅡ개요
 * 10 + 20은 평가되어 숫자 값 30을 생성한다
 * (10 + 20) -> 표현식: 값으로 평가될 수 있는 문(statement)
 * (10), (20) -> (숫자)리터럴: 리터럴도 표현식
 * (30) -> 값: 표현식이 평가되어 생선된 결과
 * 문: 프로그램을 구성하는 기본단위이자 최소 실행 단위(변수선언문, 조건문, 반복문, 함수선언문 등)
 */

// var x;는 표현식이 아님
// 1, 2, 1+2, x 모두 표현식임
// (x = 1 + 2)는 표현식이면서 완전한 문
var x;
x = 1 + 2;

// 내가 생각한 정리는
// 값이면 표현식임
// 변수할당이 되면 표현식인 문이고 안되면 표현식이 아닌 문임

// 크롬 개발자도구->console에서
// 표현식이 아닌 문을 입력하면 undefined가 나옴
var a; // undefined
a = 10; // 10
a + 10; // 20



