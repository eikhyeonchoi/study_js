/**
 * ㅡㅡ핵심키워드
 * 정규식
 * 
 * ㅡㅡ개요
 */

// /regexp/i
// /가 시작 및 종료기호
// regexp가 정규식
// i가 플래그임

// i는 대소문자 구분 없다는 뜻
const target = 'Is this all there is?';
const regexp = /is/i;
regexp.test(target); // true

{ // RegExp 메서드
    // RegExp.prototype.exec(): 패턴검색 매칭결과를 배열로 리턴
    // RegExp.prototype.test(): 패턴검색 매칭결과를 불리언으로 리턴
    // String.prototype.match(): 대상문자와 인수로 전달받은 정규식의 매칭결과를 배열로 리턴(RegExp.prototype.exec()와 반대)
}

{ // 플래그
    // 종료 / 뒤에 플래그가옴
    // i : 대소문자 구분없이 패턴검색(한번만 검색함)
    // g : 대상 문자열내에서 패턴과 일치하는 모든 문자열을 전역검색
    // m : 문자열의 행이 바뀌더라도 패턴검색을 계속

    // 임의의 문자열 검색
    // /.../플래그
    
    // 반복검색
    // /A{1,2}/플래그
    // {1,2}의 의미는 최소1번 최대2번 이라는 의미임

    // /A{1}/플래그
    // 위와 동일하게 최소1번 최대1번임

    // /A{2,}/플래그
    // 위와 동일하게 최소 2번이상

    // /A+/플래그
    // 위와 동일하게 최소 1번이상 ({1,}과 같다)

    // /A*/플래그
    // 0번이상 반복되는 문자열 ({0,}과 같다)

    // /./플래그
    // 다음 줄 문자(개행 문자)를 제외한 문자열에 매칭됩니다.

    // /A?/플래그
    // 패턴이 최대 한번(0번 포함) 이상 반복되는 문자열 ({0,1}과 같다)

    // /A|B/플래그
    // A또는B

    // /[AB]/플래그
    // []내의 문자는 or동작함

    // /[A-B]/플래그
    // []내의 문자는 or동작하며 범위를 지정하려면 []안에 -를 사용함

    // 대소문자를 구분하지 않고 알파벳 검색하기
    // /[A-Za-z]+/g

    // 숫자검색
    // /[0-9]+/g  ==  /[\d]+/g
    // 패턴 \d는 숫자를 의미 \D는 숫자가 아닌 문자를 의미함
    
    // \w는 알파벳, 숫자, 언더스코어 즉 [A-Za-z0-9_]
    // \W는 \w와 반대로 동작함

    // not
    // [^0-9]는 숫자를 제외한 문자를 의미함 즉 \D임 

    // 시작위치로 검색(%^
    const t = 'https://google.com';
    const r = /^https/; // https로 시작하는지 검색
    r.test(t); // true

    // 마지막위치로검색($)
    const t2 = 'https://google.com';
    const r2 = /com$/; // com으로 끝나는지 검색
    r.test(t); // true

    // 공백은 \s임
    // \s == [\t\r\n\v\f]
}

{ // 자주 쓰는 정규식

    // 특정단어로 시작하는지 검사
    const string = "https://google.com";
    const r = /^https?:\/\//; // http:// 또는 https:// 로 시작하는지 검사함

    // 숫자만으로 이루진지 검사하기
    const string2 = "123123";
    const r2 = /^\d+$/g;

    // 하나이상의 공백으로 시작하는지 검사
    const string3 = ' hi';
    const r3 = /^[\s]+/;

    // 아이디로 사용 가능한지
    // 4~10자리수 알파벳,숫자로 이루어진
    const id = 'abc123';
    const r4 = /^[A-Za-z0-9]{4,10}$/;

    // 핸드폰 검사
    const number = '010-1234-5678';
    const r5 = /^\d{3}-\d{3,4}-\d{4}$/;

    // 특수문자 포함여부
    const string4 = 'abc#123';
    const r6 = /[^A-Za-z0-9]/gi;
}

