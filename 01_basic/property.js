/**
 * ㅡㅡ핵심키워드
 * 프로퍼티, 프로퍼티 어트리뷰트
 * 
 * ㅡㅡ개요
 * 모든 객체는 [[Prototype]]이라는 내부 슬롯(=내부의 공개되지 않은 프로퍼티)을 갖는다
 * 
 * 엔진은 (객체의)프로퍼티를 생성할때 
 * 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동정의함
 * 프로퍼티 어트리뷰트는 내부 상태값인 내부슬롯임
 * 종류가 2가지임
 * 1. 데이터 프로퍼티: 단순히 key/value
 *                      [[value]], [[writable]], [[enumerable]], [[configurable]]
 * 2. 접근자 프로퍼티: 접근자 함수로 구성된 프로퍼티
 *                      [[get]], [[set]], [[enumerable]]. [[configurable]]
 */
const person = {
    firstName: 'choi',
    lastName: 'eikhyeon',

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
};

console.log(person.firstName, person.lastName);
person.fullName = 'hong gildong';
console.log(person); // {firstName: 'hong', lastName: 'gildonf'}
console.log(person.fullName); // hong gildong

// 접근자 프로퍼티 fullName으로 값에 접근시 동작순서
// 키가 유효한지 확인
// 프로퍼티가 있는지 확인
// 데이터 프로퍼티인지 접근자 프로퍼티인지 확인
// 접근자면 [[get]] getter를 호출해 결과반환
let des = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(des);
des = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(des);

// 객체 변경방지 
// 단 객체 내부 객체는 영향받지 않는다
let a = {
    name: 'aa',
};
// 확장금지
// 추가x, 삭제o, 읽기o, 쓰기o, 어트리뷰트 재정의o
Object.preventExtensions(a);
// 밀봉
// 추가x, 삭제x, 읽기o, 쓰기o, 어트리뷰트 재정의x
Object.seal(a);
// 동결
// 추가x, 삭제x, 읽기o, 쓰기x, 어트리뷰트 재정의x
Object.freeze(a);
