/**
 * ㅡㅡ핵심키워드
 * 프로토타입, 객체지향, 프로토타입 체인, 내부슬롯, Obejct.prototype
 * 정적프로퍼티/메서드, 프로퍼티 존재 확인, 프로퍼티 열거, 프로퍼티 다루기
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

// 객체 생성 방식과 프로토타입의 결정
// 객체 생성 방식은 다양하지만 공통점은 추상연산 OrdinaryObjectCreate에 의해 생성된다
// 즉 엔진은 객체를 생성할떄 OrdinaryObjectCreate를 호출하고 프로토타입을 파라미터로 던짐
// 1. 객체 리터럴, new Object(); 
//    OrdinaryObjectCreate를 호출하면서 Object.prototype을 파라미터로 던지기 때문에
//    a는 Object.prototype을 프로토타입(부모)로 가지게 되는것
const a = {};
// 2. 생성자함수
//    생성자함수에 의해 생성되는 객체의 프로토타입은 생성자 함수의 prototype 프로퍼티에 바인딩 되있는 객체임
function Person(name) {
    this.name = name;
}
// p의 프로토타입은 Person.prototype이다
const p = new Person('lee');
// 3. Object.create
// 4. 클래스
// 등등


{ // 프토토타입 체인
    function Computer(cpu, ram) {
        this.cpu = cpu;
        this.ram = ram;
        this.add = function(...args) {
            let sum = 0;
            for(let i=0; i<args.length; i++) {
                sum += parseInt(args[i]);
            }
            return sum;
        };
    }
    
    // 위에서 말했듯 
    // 생성자 객체에 의해 생성된 아래 두 객체 amdCom, intelCom은
    // 동일한 프로토타입 Computer.prototype을 갖는다
    // 즉 두 객체의 __proto__ 프로퍼티에 프로토타입 참조가 있다(부모의 주소)
    const amdCom = new Computer('AMD 5600X', '16g');
    const intelCom = new Computer('INTEL i9', '16g');

    // 당연하게도 아래코드는 수행된다
    let amdAdd = amdCom.add(1,2,3,4,5);
    let intelAdd = intelCom.add(1,2);

    console.log(amdAdd); // 15
    console.log(intelAdd); // 3

    // 하나 더 함수를 사용해보자
    console.log(amdCom.hasOwnProperty('graphicCard')); // false
    console.log(intelCom.hasOwnProperty('graphicCard')); // false

    // 위 예제를 보면 amdCom. intelCom 모두 hasOwnProperty를 쓸 수 있다.
    // 부모가 Computer.prototype인데 어떻게 저 Object.prototype함수를 사용할 수 있을까?
    // 답은 모든 객체는 체인으로 연결되어 있기 떄문이다
    // 타고타고 올라가는개념
    // hasOwnProperty를 사용하게되면 우선적으로 amdCom객체에 해당 함수가 있나 찾아보고
    // 없다면 __proto__ 프로퍼티를 이용해 프로토타입(부모)에서 함수를 찾는다.
    // 프로토타입에도 함수가 없다면 프로토타입의 프로토타입에서 함수를 찾는다.
    // 단 Object.prototype이 종점이다.
    // 즉 프로토타입 체인이란 상속과 프로퍼티 검색을 위한 매커니즘이다.

    // 오버라이딩과 섀도잉
    const Person = (function() {
        function Person(name) {
            this.name = name;
        }

        Person.prototype.sayHello = function() {
            console.log(`hello ${this.name}`);
        }

        return Person;
    }());

    const p1 = new Person('lee');
    p1.sayHello = function() {
        console.log(`hi ${this.name}`);
    };

    // 위에서는 Person.prototype에 sayHello를 정의했고
    // 그 다음 p1 객체(인스턴스)에서 sayHello를 재정의함
    // 즉 오버라이딩한건데 그럼 프로토타입의 sayHello는 무시?됨
    // 이것을 프로퍼티가 가려졌다해서 프로퍼티 섀도잉이라함
    
    // 이렇게 하면 Person.prototype.sayHello가 호출됨
    // 프로토타입 체인에 의해
    delete p1.sayHello;
}

{ // 정적 프로퍼티 / 메서드
    const Person = (function(name) {
        // 앞에 this를 붙이면 Person을 상속받은 객체도 사용 가능
        function Person(name) {
            this.name = name;
            this.sayHello = function() {
                console.log(`hello ${this.name}`);
            };

            // this를 빼고 선언하면
            // 생성자함수객체 자체에서만 사용가능함
            // 상속받은 객체에서는 사용 불가능
            staticProp = 'staticProp';
            staticMethod = function() {
                console.log('static method');
            };
        }

        return Person;
    }());

    const p1 = new Person('lee');
    console.log(p1 instanceof Person); // true
    console.log(p1.staticProp); // undefined
    
    // 추가지식 MDN사이트에서 doc볼때
    // Object.prototype 이렇게 접미사가 있으면 그건 일반 객체에서도 사용 가능한거고
    // Object.create 이처럼 prototype이 안붙은건 정적메서드라 그런것
}

{ // 프로퍼티 존재 확인 및 열거
    const a = {
        a: '1',
        b: '1',
    };
    console.log('a' in a); // true
    console.log('b' in a); // true
    console.log('c' in a); // false
    console.log('toString' in a); // true
    //또는
    console.log(a.hasOwnProperty('a')); // true
    // ES6
    console.log(Reflect.has(a, 'a')); 

    // 객체를 열거할떄 for...in
    // 열거하긴 하지만 프로퍼티 어트리뷰트중 Emumerable true인것만 열거함
    // a를 열거하면 a의 프로토타입인 toString()은 열거하지 않는데 이유는
    // toString()의 Emumerable이 false라 그럼
    // 자신의 고유 프로퍼티만 열거하려면 hasOwnProperty()를 사용하자
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
        }
    }
    // 단 배열에는 사용하지 말자
    // 배열에는 for / for...of / Array.prototype.forEach 사용권장

    // 객체 프로퍼티 키를 배열로 얻기
    Object.keys(a);
    // 객체 프로퍼티 값를 배열로 얻기
    Object.values(a);
    // [[key1, value1], [key2, value2] ...]
    Object.entries(a);
}