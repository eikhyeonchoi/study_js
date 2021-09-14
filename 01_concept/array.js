/**
 * ㅡㅡ핵심키워드
 * array
 * 
 * ㅡㅡ개요
 */

// js에서의 배열은 
// 배열의 요소가 하나의 데이터타입으로 통일되어있으며 서로 연속적으로 인접해 있는 밀집배열이 아닌
// 각 배열 요소를 위한 메모리공간은 동일한 크기를 갖지 않아도 되며 연속적이지 않을 수 있는 희소배열이다
// 즉 js에서의 배열은 배열을 흉내낸 객체임(length 프로퍼티를 갖는..)
// 일반 배열보다 요소 접근은 느릴 수 있어도 요소 검색 삽입 삭제는 빠른 속도를 기대할 수 있다
// 희소배열이지만 각 요소의 타입을 연속적으로 맞추려고 하는게 최선임

// Array.of(ES6)
// 전달된 인수를 요소로 갖는 배열 생성
Array.of(1); // [1]
Array.of(1,2,3,4); // [1,2,3,4]

// Array.from()
// 유사배열객체 또는 이터러블객체를 인수로 전달받아 배열로 전환하여 반환한다
function toArr() {
    return Array.from(arguments);

    // 스프레드 문법을 사용해도됨
    return [...arguments];
}

// 요소추가 및 갱신
const arr = [0];
arr[1] = 1;
console.log(arr.length); // 2

// 이렇게하면 희소배열이 되어버림
// 할당하지 않은 요소들은 생성되지 않음
// arr[2] ~ arr[99]는 없음, length만 바뀜
arr[100] = 100;
console.log(arr.length); // 101

// 삭제
// 배열도객체라 객체 프로퍼티 삭제랑 동일함
// 하지만 이렇게하면 희소배열이될 가능성이 큼
delete arr[1];
// 따라서 삭제는 Array.prototype.splice사용
// Array.prototype.splice(삭제시작인덱스, 요소 갯수)

// 배열 메서드
// 프로토타입 메서드와 정적 메서드 모두 있음
// 원본배열을 직접 변경하는 메서드와 새로운 배열을 생성해서 반환하는 메서드로 나뉨
// 1. Array.isArray(판별요소): 배열 판별 - 맞다면 true, 아니면 false
// 2. Array.prototype.indexOf(검색요소): 요소여부 판별 - 있다면 위치인덱스, 없다면 -1
// 3. Array.prototype.includes(검색요소): 요소여부 판별 - 있다면 true, 없다면 false
// 4. Array.prototype.push(값): 요소삽입 - 마지막요소에 추가 및 length 리턴, 원본변경
//    성능+원본배열을 변경하기때문에 잘안쓰고 스프레드문법을 씀
//    const newArray = [...oldArray, 3];
// 5. Array.prototype.pop(): 요소제거 - 마지막요소 제거 및 마지막 요소 리턴, 원본변경
// 6. Array.prototype.unshift(값): 요소추가 - 인수로 전달 받은 모든값을 배열의 선두에 요소로 추가 및 lenght리턴, 원본변경
//    원본뱌열을 변경하기 때문 스프레드 문법 추천 
//    const newArray = [3, ...oldArray];
// 7. Array.prototype.shift(): 요소제거 - 첫번째 요소 제거 후 제거한 요소 리턴, 원본변경
// 8. Array.prototype.concat(값): 요소추가? - 인수 전달된 값을 배열 마지막 요소의 추가 및 새로운 배열을 리턴, 원본변경 x

{ // push, unshift, concat의 차이
    // push, unshift는 원본배열을 변경한다
    // 또 인수로 배열을 받으면 그 배열을 해체하지 않음
    const arr2 = [1];
    arr2.push(1);
    console.log(arr2); // [1,2]
    arr2.unshift(3);
    console.log(arr2); // [3,1,2]
    arr2.push([1,2,3]);
    console.log(arr2); // [3,1,2,[1,2,3]]
    arr2.unshift([3,2,1]);
    console.log(arr2); // [[3,2,1],3,1,2,[1,2,3]]
    // concat은 원본배열을 변경x
    // 인수로 배열을 받으면 해체한뒤 삽입함
    let arr3 = [1];
    arr3.concat(1);
    console.log(arr3); // [1]
    // 쓸라면 변수에 담아서 써야함
    let newArr3 = arr3.concat(1);
    console.log(newArr3); // [1,1]
    newArr3 = newArr3.concat([1,2,3]);
    console.log(newArr3); // [1,1,1,2,3]
    // 결론
    // 배열 요소 추가 시 무조건 스프레드문법 쓸 것
}

// 9. Array.prototype.splice(시작인덱스, 제거할요소갯수, 넣을값들): 삭제추가 - 원본변경
//    두번째 파라미터 생략 시 시작요소부터 끝까지 모두 제거
// 10. Array.prototype.splice(시작인덱스, 종료인덱스): 복사 - 원본변경x
//     종료인덱스 없으면 시작인덱스 ~ 끝까지
//     시작인덱스가 음수면 끝에서부터임
//     아무 인수도 없다면 배열 통으로 복사
// 11. Array.prototype.join(구분자): array to string - 배열을 문자열(구분자 넣어서)
// 12. Array.prototype.reverse(): 배열 뒤집기 - 반환값이 변경된 배열임, 원본변경
// 13. Array.prototype.fill(값, 시작인덱스, 종료인덱스): 배열 채움 - 모든 요소를 값으로 채움, 원본변경
//     시작인덱스 없으면 모두, 종료인덱스없으면 시작인덱스 부터 끝까지
// 14. Array.prototype.flat(값=1): 배열 평탄화 - 중첩배열 평탄화
// 15. Array.prototype.sort(배열): 요소 정렬 - 오름차순, 원본변경
//     내림차순하려면 sort 후 reverse 
// 16. Array.prototype.sort(빈값 or 함수): 요소 정렬 - 오름차순, 원본변경
//     숫자는 정렬이안됨 기본정렬 순서가 유니코드 코드 포인트 순서를 따르기 때문에
//     sort((a, b) => a - b); // 오름차순
//     sort((a, b) => b - a); // 내림차순
// 17. Array.prototype.foreach(함수, this(콜백함수 내부에서 this로 사용할 객체)): 배열순회 - 콜백함수의 인수는 (요소값, 인덱스, this) 총 3개임
//     foreach문은 언제나 undefined를 반환합니다, for문보다 권장함
// 18. Array.prototype.map(함수, this(콜백함수 내부에서 this로 사용할 객체)): 배열순회 - 콜백함수의 인수는 (요소값, 인덱스, this) 총 3개임, 콜백함수의 반환값으로 새로운배열 리턴, 원본변경x
// 19. Array.prototype.filter(함수, this(콜백함수 내부에서 this로 사용할 객체)): 배열순회 - 콜백함수의 인수는 (요소값, 인덱스, this) 총 3개임, 새로운배열(true인것만 골라서) 리턴, 원본변경x
// 20. Array.prototype.reduce(함수, 초기값): 배열순회 - 콜백함수의 인수는 (초기값 또는 콜백함수의 리턴값, 배열의 요소값, 인덱스, this) 총 3개임, 하나의 결과 값 리턴, 원본변경x
// 21. Array.prototype.some(함수, this(콜백함수 내부에서 this로 사용할 객체)): 배열순회 - 콜백함수의 인수는 (요소값, 인덱스, this) 총 3개임, 하나라도 참이면 true, 모두 거짓이면 false 리턴, 원본변경x
//     빈배열이면 무조건 false
// 22. Array.prototype.every(함수, this(콜백함수 내부에서 this로 사용할 객체)): 배열순회 - 콜백함수의 인수는 (요소값, 인덱스, this) 총 3개임, 모두 참이면 true, 하나라도 거짓이면 false 리턴, 원본변경x
//     빈배열이면 무조건 true
// 22. Array.prototype.find(함수, this(콜백함수 내부에서 this로 사용할 객체)): 배열순회 - 콜백함수의 인수는 (요소값, 인덱스, this) 총 3개임, 콜백함수의 반환값이 true인 첫 번쨰 요소의 값 반환, 원본변경x
// 23. Array.prototype.findIndex(함수, this(콜백함수 내부에서 this로 사용할 객체)): 배열순회 - 콜백함수의 인수는 (요소값, 인덱스, this) 총 3개임, 콜백함수의 반환값이 true인 첫 번쨰 요소의 인덱스 반환, 원본변경x
// 24. Array.prototype.flatMap (함수, this(콜백함수 내부에서 this로 사용할 객체)): 배열순회 - 콜백함수의 인수는 (요소값, 인덱스, this) 총 3개임, map과 flat을 동시에 한 효과, 원본변경x