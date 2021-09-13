/**
 * ㅡㅡ핵심키워드
 * 빌트인객체, 빌트인객체, 래퍼객체, 전역객체
 * 
 * ㅡㅡ개요
 * 객체는 3개로 분류가능(빌트인, 호스트, 사용자정의)
 */

{ // 빌트인객체
    // 어디서나 사용가능(전역객체 처럼)
    // Object, String, Number, Boolean, Symbol, Date, Math, RegExp, Array, Map/Set, Promise ... 등등
    // Math, Reflect, JSON을 제외한 모든 빌트인객체는 생성자 함수임
    // 위 3개는 정적메서드만 제공함

    // 래퍼객체?
    // 아래 str은 문자열인데 어떻게 객체처럼 마침표기법이 가능할까?
    // 이유는 문자열, 숫자, 불리언값에 대해 객체처럼 접근하면 엔진은 암묵적으로 연관된 임시객체를 생성한 후 접근하고나서 다시 원시값으로 되돌린다
    // 위에서 만든 임시객체를 래퍼객체라 칭한다
    // const str = 'hi';
    // console.log(str.length);

    // 전역객체
    // 제일먼저 생성되고 프로토타입이 없다, 모든 스크립트 코드에서 공유된다
    // 브라우저:window, node: global(사용시 생략가능)
    // ES11 통일: globalThis(사용시 생략가능)
    // 전역객체는 빌트인객체, 호스트객체, var 및 전역함수를 프로퍼티로 갖음(단 let, const로 선언한 변수는 프로퍼티가 아님)
    // 빌트 인 프로퍼티: Infinity, NaN, undefined
    // 빌트 인 전역함수: eval(사용금지), isFinite, isNaN, paseInt, encodeURI, decodeURI, encodeURIComponent, decodeURIComponent
    const url = 'https://google.com';
    console.log(encodeURI(url));
}
