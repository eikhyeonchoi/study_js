/**
 * ㅡㅡ핵심키워드
 * 프로토타입, 객체지향, 프로토타입 체인, 내부슬롯, Obejct.prototype
 * 
 * ㅡㅡ개요
 * js의 거의 모든것은 객체이다
 * 객체지향형 프로그래밍이다
 */

// 객체는 상태와 동작을 하나의 논리적인 단위로 묶은 복합적인 자료구조임
// 아래코드를 보면 getArea()는 기능이 돌일하지만 중복소유해서 메모리낭비임
function Circle(r) {
    this.r = r;
    this.getArea = function() {
        return Math.PI * this.r ** 2;
    };
}
const c1 = new Circle(1);
const c2 = new Circle(2);
console.log(c1.getArea === c2.getArea); // false 아래코드 주석해야 false

// js는 프로토타입 기반으로 상속을 구현한다
// 생성자함수 construct는 고유 프로퍼티로 prototype을 갖는다
// 때문에 prototype에 함수를 등록해놓으면 모든 함수가 상속받는다
// 즉 호출될때 생성자 함수가 생성할 인스턴스의 프로토타입 객체를 가리킴
function Circle(r) {
    this.r = r;
}
Circle.prototype.getArea = function() {
    return Math.PI * this.r ** 2;
};
console.log(Circle.prototype);

// 모든 객체는 하나의 프로토타입갖는다
// 모든 객체는 [[Prototype]]이라는 내부 슬롯을 갖는다
// 이 내부슬롯을 직접 접근할 순 없고 __proto__접근자 프로퍼티를 통해 접근해야한다
// 만약 객체를 생성하더라도 이 __proto__는 그 객체의 고유 프로퍼티가 아니라 상속을 통해 사용된다
const person = {name: 'lee'};
person.hasOwnProperty('__proto__'); // false
// __proto__ 프로퍼티는 모든 객체의 프로토타입 객체인 Object.prototype의 접근자 프로퍼티임
Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');
// 쉽게 말해 Object.prototype이 최상위 객체이다

// __proto__의 직접사용은 권장하지 않음
// __proto__접근자 프로퍼티 대신 프로토타입의 참조를 취득하고 싶다면
// Object.getPropertyOf(객체);
// 프로토타입을 교체하고 싶다면
// Obejct.setPropertyOf(객체);

// 추가지식 - Obejct.prototype
// 모든 객체는 프로토타입의 계층 구조인 프로토타입 체인에 묶여있음
// 엔진은 객체의 프로퍼티에 접근하려 할 때 해당 객체에 접근하려는 프로퍼티가 없다면
// __proto__ 접근자 프로퍼티가 가리키는 참조를 따라 자신의 부모역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색함
// 최상위 객체는 Object.prototype이면서 이 객체의 프로퍼티와 메서드는 모든객체에 상속됨

// 함수객체의 prototype프로퍼티
// 함수 객체만이 소유하는 prototype 프로퍼티는 생성자 함수가생성할 인스턴스의 프로토타입을 가리킨다(new ***()의 부모를 가리킨다는말)
// 즉, 모든 객체가 가지는 __proto__접근자 프로퍼티와 함수객체만이 가지는 prototype 프로퍼티는 결국 동일한 프로토타입을 가리킨다

// 이 경우를 보면
// Person 생성자함수는 함수라 함수 고유의 프로퍼티인 prototype을 가진다
// 그리고 이 prototype은 결국 me의 __proto__가 가리키는 객체와 동일한 객체를 가리킨다
// 더불어 이 Person의 __proto__는 Function.prototype이다
// me의 __proto__는 Person.prototype이다 (생성자함수라)
// 그럼 결국 Person의 prototype은 Person.prototype이다
// 그리고 Person.prototype의 __proto__는 Object.prototype임 프로토타입 체인에 의해
// + 모든 프로토타입은(**.prototype) constructor 프로퍼티를 가짐 
//   이 constructor 프로퍼티는 자신을 참조하고있는 생성자 함수를 가리킨다
//   프로토타입과 생성자함수는 단독으로 존재할 수 없다 무조건 쌍임
function Person(name) {
    this.name = name;
}
const me = new Person('lee');
console.log(me.hasOwnProperty('name'));

let arr = [];
console.log(Object.getPrototypeOf(arr));

// 정리하면
// 단순 객체의 __proto__는 [[Prototype]] 내부슬롯을 직접접근할 수 없어 사용하는 접근자 프로퍼티이다
// [[Prototype]] 내부슬롯이 가리키는 객체는 Object.prototype이다
// 그럼 __proto__는 Object.prototype을 가리킨다고 볼수 있다
// 그럼 __proto__는 모든 객체의 부모를 가리키네?
// 모든객체는 상속이 있음
// 모든객체는 생성자 함수와 연결되있음
// 위 예제를 보더라도 me의 부모는 Person.prototype임 프로토타입과 생성자 함수는 쌍으로 존재해야하기 때문에
// Person.prototype의 constructor는 Person임
// 더불어 Person.protoype의 __proto__는 즉 부모는 Object.prototype임 Object.prototype의 constructor는 Object겠지

// 프로토타입은 생성자 함수가 생성되는 시점에 더불어 생성된다
// 생성자 함수 선언하고 실행컨텍스트에 의해 평가단계를 실행할때 프로토타입도 만들어 지는듯?
function ab() {this.name=1;}
const abab = new ab();
console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
console.log(ab.prototype);
console.log(me.__proto__);

// js의 모든객체는 생성자 함수에 의해 만들어진다
// 모든 객체는 부모가있다
// 프로토타입은 생성자 함수가 생성되는 시점에 더불어 생성된다
// 생성자 함수가 생성된 후 바로 프로토타입 객체가 만들어짐
// 표준 빌트인 객체는 전역 객체가 생성되는 시점에 생성됨
// 객체가 생성되기 이전에 생성자 함수와 프로토타입은 이미 객체화되어 존재함
// 이후 객체를 생성하면 프로토타입은 생성된 객체의 내부슬롯에 할당됨