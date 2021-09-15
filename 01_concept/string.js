/**
 * ㅡㅡ핵심키워드
 * String
 * 
 * ㅡㅡ개요
 * String 래퍼객체는 유사배열객체이면서 이터러블이다
 */

// String 생성자 함수의 인수로 문자열을 전달하면서 new 연산자와 함께 호출하면 [[StringData]] 내부 슬롯에
// 인수로 전달받은 문자열을 할당한 String 래퍼 객체를 생성한다
// 배열은 원본배열을 직접변경하는 메서드가 있고, 새로운 배열을 반환하는 메서드도 있다
// 하지만 String은 문자열이다 즉 문자열은 원시값이기 때문에 원본 문자열을 직접변경하는 메서드는 없다(String 래퍼객체는 readOnly 이다)

{ // 메서드 
    // String.prototype.indexOf(문자): 인수로받은 문자를 대상문자열에서 검색한 후 위치(인덱스)를 없으면 -1 리턴

    // String.prototype.search(정규식): 정규식와 일치하는 문자열을 검색함 있으면 인덱스 없으면 -1 리턴

    // String.prototype.includes(문자, 시작인덱스=0): 인수로받은 문자를 대상문자열에서 검색한 후 있다면 true 없다면 false 리턴 (두번째 파라미터로 시작인덱스 지정가능)

    // String.prototype.startsWith(문자): 대상문자열이 인수로 받은 문자열로 시작하면 true 아니면 false 리턴

    // String.prototype.endsWith(문자): 대상문자열이 인수로 받은 문자열로 끝나면 true 아니면 false 리턴

    // String.prototype.charAt(문자): 대상문자열이 인수로 받은 인덱스에 위치한 무자를 검색해서 리턴(대상문자열 범위를 벗어났다면 '' 리턴)

    // String.prototype.subString(시작인덱스, 종료인덱스): 시작인덱스~종료인덱스 까지 자름(종료인덱스 생략하면 끝까지)
    // 1. 시작인덱스 > 종료인덱스면 둘이 바꿈
    // 2. 인수 < 0 이거나 NaN이면 0
    // 3. 인수 > 대상문자열.length면 인수 == 대상문자열.length임

    // String.prototype.slice(시작인덱스, 종료인덱스): 시작인덱스~종료인덱스 까지 자름
    // subString과의 차이는 시작인덱스에 음수가 오면 뒤에서 부터 시작인덱스수 만큼 자름

    // String.prototype.toUpperCase(문자): 대상문자열을 대문자로
    // String.prototype.toLowerCase(문자): 대상문자열을 소문자로

    // String.prototype.trim(문자): 앞뒤 공백문자 제거
    
    // String.prototype.repeat(숫자): 대상문자열을 숫자만큼 반복해 새로운 문자열 리턴

    // String.prototype.replace(검색문자열, 바꿀문자열): 검색문자열을 바꿀문자열로 바꾼 후 리턴(첫 파라미터에 정규식 사용가능)
    
    // String.prototype.split(인수): 인수로 전달한 문자열 또는 정규식으로 대상문자열을 나눈 후 배열로 리턴
}


