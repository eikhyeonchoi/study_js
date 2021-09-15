/**
 * ㅡㅡ핵심키워드
 * Number
 * 
 * ㅡㅡ개요
 */

// Number생성자함수에 인수를 전달하지 않고 new 연산자와 함께 호출하면 [[NumberData]] 내부 슬롯에 0을 할당한 래퍼객체가 생성됨
// [[PrimitiveValue]]가 [[NumberData]]의 내부슬롯을 가리킨다
const numberObj = new Number();
console.log(numberObj); // Number {[[PrimitiveValue]]: 0}

// Number도 생성자함수임
// 생성자 함수 안에서 프로퍼티와 함수를 갖음 : 프로퍼티 및 정적메서드
// 자식에게 물려줄 함수도 있음 : 프로토타입 메서드

{ // Number 프로퍼티
    // 부동소수점 산술 연산은 정확한 결과를 기대하기 어려움
    console.log((0.1 + 0.2) === 0.3); // false
    // 때문에 Number.EPSILON을 사용해 부동소수점 연산을 비교함
    function isEqual(a, b) {
        return Math.abs(a - b) < Number.EPSILON;
    }

    // Number.MAX_VALUE: js에서 가장 큰 수 
    // Number.MIN_VALUE: js에서 가장 작은 수
    // Number.MAX_SAFE_INTEGER: js에서 안전하게 표현할 수 있는 가장 큰 정수
    // Number.MIN_SAFE_INTEGER: js에서 안전하게 표현할 수 있는 가장 작은 정수
    // Number.POSITIVE_INTEGER: Infinity
    // Number.NEGATIVE_INTEGER: -Infinity
    // Number.NaN: NaN
}

{ // Number 메서드
    // Number.isFinite(값): 정상적인 유한수면 true, 아니면 false
    // Number.isInteger(값): 정수면 true, 아니면 false
    // Number.isNaN(값): NaN이면 true, 아니면 false
    // Number.isSafeInteger(값): 안전한 정수면 true, 아니면 false

    // Number.prototype.toExpotential(값): 숫자를 지수표기법 후 String 리턴
    // Number.prototype.toFixed(몇번째 자리까지?): 반올림 후 String 리턴
    // Number.prototype.toPrecision(몇번째 자리까지?): 인수로 전달받은 전체 자릿수 까지 우효하도록 나머지 자릿수를 반올림 후 String 리턴
    // Number.prototype.toString(몇번째 자리까지?): Number to String
}
