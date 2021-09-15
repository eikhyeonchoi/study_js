/**
 * ㅡㅡ핵심키워드
 * Date
 * 
 * ㅡㅡ개요
 */


// UTC 기준임
{ // 생성자함수
    new Date(); // 금일날짜
    Date(); // "금일날짜"
    // new Date(milliseconds); // UTC 기점으로 인수로 전달된 밀리초만큼 경과한 날짜와 시간 반환
    // new Date(년월일시분초); 
}

{ // 메서드
    // Date.now(): (현재 - UTC)를 밀리초로 반환
    // Date.parse(): UTC기점으로 인수로 전달된 지정 시간까지의 밀리초를 숫자로 반화
    // Date.UTC(): UTC기점으로 인수로 전달된 지정 시간까지의 밀리초를 숫자로 반화
    
    // Date.prototype.getFullYear(): 객체의 연도를 나타내는 정수를 반환
    // Date.prototype.setFullYear(): 객체의 연도를 나타내는 정수를 설정

    // Date.prototype.getMonth(): 객체의 월을 나타내는 정수를 반환(0 ~ 11)
    // Date.prototype.setMonth(): 객체의 월을 나타내는 정수를 설정(0 ~ 11)

    // Date.prototype.getDate(): 객체의 날짜를 나타내는 정수를 반환(1 ~ 31)
    // Date.prototype.setDate(): 객체의 날짜를 나타내는 정수를 설정(1 ~ 31)

    // Date.prototype.getDay(): 객체의 요일을 타내는 정수를 반환(일요일이 0)

    // Date.prototype.getHours(): 객체의 시간을 나타내는 정수를 반환(0 ~ 23)
    // Date.prototype.setHours(): 객체의 시간을 나타내는 정수를 설정(0 ~ 23)

    // Date.prototype.getMinutes(): 객체의 분을 나타내는 정수를 반환(0 ~ 59)
    // Date.prototype.setMinutes(): 객체의 분을 나타내는 정수를 설정(0 ~ 59)

    // Date.prototype.getSeconds(): 객체의 초을 나타내는 정수를 반환(0 ~ 59)
    // Date.prototype.setSeconds(): 객체의 초을 나타내는 정수를 설정(0 ~ 59)

    // Date.prototype.getMilliSeconds(): 객체의 밀리초을 나타내는 정수를 반환(0 ~ 999)
    // Date.prototype.setMilliSeconds(): 객체의 밀리초을 나타내는 정수를 설정(0 ~ 999)

    // Date.prototype.getTime(): 객체의 시간까지 경과된 밀리초를 반환함
    // Date.prototype.setTime(): 객체의 시간까지 경과된 밀리초를 생성 

    // Date.prototype.getTimezoneOffset(): UTC와 Date객체의 지정된 로컬시간과의 차이를 분단위로 변환
    // Date.prototype.toDateString(): 문자열 형식으로 Date객체의 날짜를 반환
    // Date.prototype.toTimeString(): 문자열 형식으로 Date객체의 시간를 반환
    // Date.prototype.toISOString(): ISO 형식으로 Date객체의 날짜와 시간를 반환
    // Date.prototype.toLocaleString(): 인수로 전달한 로컬을 기준으로 Date 객체의 날짜와 시간을 표현한 문자열 반환
    // Date.prototype.toLocaleTimeString(): 인수로 전달한 로컬을 기준으로 Date 객체의 시간을 표현한 문자열 반환
}