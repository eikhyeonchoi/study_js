/**
 * ㅡㅡ핵심키워드
 * 타입캐스팅(명시적, 암묵적), 단축평가, 옵셔널체이닝, null병합, 함수파라미터기본값
 * 
 * ㅡㅡ개요
 * 개발자가 의도적으로 값의 타입을 변경하는것을
 * 명시적 타입변환 / 타입캐스팅이라고하며
 * 의도와 상관없이 엔진이 알아서 타입을 변환하는것을
 * 암묵적 타입 변환 / 타입 강제 변환 이라고함
 */

// 타입변환한다고 해서 기존원시값(x)는 직접 변경하는건 아님
// 원시값을 immutable임 타입변환은 단지 기존원시값을 이용해 다른타입의 새로운 원시값을 생성하는것
var x = 10;
var str = x + '';
console.log(typeof str, str); // string 10

{ // 암묵적 타입 변환 예제
    var a = '10' + 2; // string 102
    var a = 6 * '10'; // number 60

    // string 타입으로 변환
    // + 들어가면 symbol 제외하고 모든 타입을 string으로 만듦

    // number 타입으로 변환
    // 산술연산자와 만나면 number로 암묵적 타입변환
    // 비교연산자와 만나면 number로 암묵적 타입변환 후 boolean 리턴

    // booelan
    // 제어문 또는 삼항 조건 연산자는 boolean으로 암묵적 타입변환함
    if('') console.log('1');
    if('str') console.log('2');
    if(1) console.log('3');
    if(0) console.log('4');
    if(null) console.log('5');
    if(undefined) console.log('6');
    // Falsy로 평가되는 값들
    // false, undefined, 0, -0, NaN, ''
    // 단 빈객체나 빈배열은 모두 true임
    if({}) console.log('7');
    if([]) console.log('8');
}

{ // 명시적 타입 변환 예제

    // string 타입으로 변환
    String(1);
    String(NaN);
    String(undefined);
    (1).toString();
    1 + '';

    // number 타입으로 변환
    Number('1');
    parseInt('1');
    +'1';
    '1' * 1;

    // boolean 타입으로 변환
    Boolean('1');
}

{ // 단축평가
    // true  || anything => true
    // false || anything => anything
    // true  && anything => anything
    // false && anything => false

    // 'cat' || 'dog' => 'cat'
    // false || 'dog' => 'dog'
    // 'cat' || false => 'cat'

    // 'cat' && 'dog' => 'dog'
    // false && 'dog' => false
    // 'cat' && false => false

    // 언제사용?
    // 1. 객체를 가리키기를 기대하는 변수가 null or undefined가 아닌지 확인 후 프로퍼티 참조 시
    var elem = null;
    var value = elem.value; // cannot read property 'value' of null
    // 개선
    var value = elem && elem.value; // null
    // ES6 옵셔널체이닝 개선(좌항이 null or undefined면 undefined 리턴)
    var value = elem?.value; // undefined

    // ES11 null병합
    var foo = '' || 'default'; // 'default'
    var foo = '' ?? 'default'; // ''
    // Falsy 값을 다 무시하고 싶다면 || 
    // null or undefined만 무시하고 싶다면 &&

    // 2. 함수 매개변수 기본값 설정
    function getStringLength(str) {
        var str = str || '';
        return str.length;
    }
    // ES6 개선
    function getStringLength(str='') {
        return str.length;
    }
}
