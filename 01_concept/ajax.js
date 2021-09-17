/**
 * ㅡㅡ핵심키워드
 * ajax, json
 * 
 * ㅡㅡ개요
 */

// ajax 사용하지 않는다면
// 1. 변경하지 않아도될 부분까지 포함된 HTML을 매번 새로 받아야하기 때문에 불필요한 데이터통신 발생
// 2. 다시 렌더링함 -> 깜빡거림
// 3. 클라-서버는 동기처리방식이라 응답있을때까지 블로킹
// ajax 사용한다면
// 1. 필요한 부분만 바꾸기 때문에 불필요한 통신이 없다
// 2. 필요한 부분만 렌더링해서 깜빡거림이 없다
// 3. 비동기라 블로킹 발생하지 않는다

{ // JSON 
    // 클라-서버간 통신을 위한 텍스트 데이터 포맷
    // JSON.stringify : object to json string (직렬화)
    // JSON.parse : json string to object (역직렬화)
}