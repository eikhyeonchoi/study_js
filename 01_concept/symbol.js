/**
 * ㅡㅡ핵심키워드
 * Symbol
 * 
 * ㅡㅡ개요
 * 원시타입이며 다른값과 중복되지 않는 유일무이한 값
 * 프로퍼티 키를 만들기위해 사용됨
 */

// new 연산자와 함꼐 호출하지 않는다
// 인수를 줄 수 있는데 이 인수는 단순 설명임(디버깅할때만 보임, 아무 영향도 주지 않는다)
// 심벌도 래퍼객체를 생성한다
const s = Symbol();

{ // 메서드
    // Symbol.for(): 인수로 전달받은문자열을 키로 사용해 해당 키와 일치하는 심벌 값 검색
    // 검색 성공 시 검색된 심벌값 반환
    // 없다면 생성 후 반환
    // for을 사용해야지만 전역 심벌 레지스트리에서 키를 저장관리한다
}


// 언제사용?
// enum
const DIRECTION = Object.freeze({
    LEFT: Symbol('left'),
    RIGHT: Symbol('right'),
});

// 프로퍼티 및 은닉
// 아래 처럼 프로퍼티를 만들면 for...in에도 안보임
// 마찬가지로 Object.keys 해도 안보임
const obj = {
    [Symbol.for('property1')]: 1,
};
obj[Symbol.for('property1')]; // 1


