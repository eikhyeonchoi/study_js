/**
 * ㅡㅡ핵심키워드
 * 클래스, 메서드, constructor, 인스턴스 생성과정, extends, 프로토타입 메서드, 정적 메서드, 수퍼클래스, 서브클래스, this, super
 * 
 * ㅡㅡ개요
 * 
 */

// 클래스(ES6)
// 1. new 연산자를 붙여야만 인스턴스 생성됨(안붙일 시 에러)
// 2. let 처럼 호이스팅 동작함
// 3. 함수다 즉 객체다
// 4. 일급객체임
// 5. 생성자함수다
// 6. 몸체내부에서는 0개이상의 메서드만 선언가능(ES11부터는 프로퍼티도 선언가능)

{ // 메서드
    // 1. constructor
    //    인스턴스를 생성하고 초기화하기 위한 특수 메서드 
    //    생략가능, 최대 1개 정의
    //    메서드로 해석되는게 아닌 클래스가 평가되어 생성한 함수 객체 코드의 일부가 됨
    class Person {
        constructor(name) {
            // 생성자 함수와 마찬가지로 암묵적으로 this인스턴스를 return
            // return문을 생략해야함(만약 원시타입을 return하면 this가 리턴되고 객체를 리턴하면 객체가 리턴됨)
            this.name = name;
        }
    }

    // 2. 프로토타입 메서드 및 정적 메서드
    class Person2 {
        constructor(name) {
            this.name = name;
        }
        // 프로토타입 메서드: 기본적으로 프로토타입 메서드임(모든 인스턴스가 상속받는..)
        // 메서드 축약(function을 안씀)
        // for...in, Object.keys 등 사용 불가 Enumerable이 false라
        // new 연산자와 함께 호출할 수 없다
        sayHi() { 
            console.log(`hi ${this.name}`);
        }

        // 정적 메서드: 상속받은 인스턴스에서 사용 불가
        static sayHello() {
            console.log(`hello ${this.name}`);
        }

        // 프로토타입 메서드와 정적 메서드의 차이
        // 1. 프로토타입 체인이 다름
        // 2. 정적 메서드는 클래스로 호출, 프로토타입 메서드는 인스턴스로 호출
        //    ex. Person2.sayHello();, const p = new Person2(); p.sayHi();
        // 3. 인스턴스 프로퍼티는 프로토타입메서드만 참조가능, 정적메서드에선 참조 불가능
        //    정적메서드에서의 this는 클래스 그 자체를 가리키며
        //    프로토타입메서드에서의 this는 생성할 인스턴스를 가리키는 것이다
    }
}

{ // 프로퍼티
    class Person {
        constructor(name) {
            // 클래스의 프로퍼티는 constructor안에 정의해야한다
            // 여기서의 this는 클래스가 생성한(할) 인스턴스이다
            // name은 인스턴스 프로퍼티 => 즉, 이 클래스가 생성할 객체의 프로퍼티가 된다는 말
            this.name = name;
        }

        // 접근자 프로퍼티도 가능하다
        get fullName() {
            return this.name;
        }
        set fullName(name) {
            this.name = name;
        }

        // 클래스필드
        // 최신버전 브라우저(Chrome 72이상)에서는 아래코드가 가능함
        // 함수도 정의가능
        // 클래스필드는 인스턴스 프로퍼티가됨(모두)
        // name = 'lee';
        // getName = function() {
        //     return this.name;
        // }

        // Chrome 72이상 정적 필드도 가능
        // static name = '123';

        // Chrome 74이상 private가능
        // 반드시 몸체에 정의해야함 xonstructor에 정의하면 에러
        // #name = '';
    }
}

{ // 상속
    // 수퍼클래스, 부모클래스 등
    class Parent {
        // constructor를 생략하면 빈 constructor가 암묵적으로 생성됨
        // constructor() {}
    }
    // 서브클래스, 자식클래스 등
    class Child extends Parent {
        // 단 서브클래스에서는 생략시 다음과 같은 constructor가 암묵적으로 생성됨
        // constructor(...args) {super(args)}

        // super?
        // 서브클래스의 constructor에서 super를 호출하면 수퍼클래스의 constructor를 호출하는 것
        // 1. 만약 서브클래스에서 constructor를 생략하지 않았다면 무조건 super를 호출해야함
        // 2. super를 호출하기 전 this를 사용할 수 없다
        // 3. 반드시 constructor내에서만 super를 사용해야함
        // 4. 메서드내에서 super를 참조하면 수퍼클래스에 메서드 호출 가능
    }

    class Base {
        constructor(name) {
            this.name = name;
        }

        sayHi() {
            return `Hi! ${this.name}`;
        }
    }
    class Derived extends Base {
        sayHi() {

            // super 참조가 동작하귀 위해서는
            // super를 참조하고 있는 메서드(Derived의 sayHi)가
            // 바인딩 되어있는 객체(Derived.prototype)의 프로토타입(Base.prototype)을 찾을 수 있어야한다
            // 이를 위해서는 메서드의 내부 슬롯[[HomeObject]]를 가지며, 자신을 바인딩하고있는 객체를 가리킨다
            // ES6의 메서드 축약 표현으로 정의된 함수만이 [[HomeObject]]를 갖는다
            // [[HomeObject]]를 가지는 함수만이 super를 참조할 수 있다 즉 축약메서드만 super참조가 가능함
            return `${super.sayHi}. how are you doing?`;

            // super = Object.getPropertyOf([[HomeObject]] == Derived.prototype) 즉 Base.prototype임

            // 만약 call 메서드를 사용하지 않고 sayHi를 호출하면 
            // Base.prototype의 sayHi의 this는 Base.prototype이 되므로 Base.prototype.name은 undefined이다
            // 그래서 call을 사용해 this를 전달하는데 sayHi는 프로토타입 메서드라 this는 Base.prototype이 아닌 인스턴스를 가리켜야함
            // name 프로퍼티는 인스턴스에 존재하기 때문임 (생성자 함수내에서의 this가 생성할 인스턴스임 때문에 call(this)는 인스턴스를 넘기는 것)
            // return `${super.sayHi()}`;
            // return `${super.sayHi.call(this)}`;
        }
    }

    // 인스턴스 생성과정
    // 1. 서브클래스의 super호출
    //    엔진은 클래스 평가시 수퍼/서브 구분을 위해 'base', 'derived' 둘 중 하나의 값을 갖는 내부슬롯[[ConstructorKind]]를 갖는다
    //    수퍼클래스면 base이고 서브클래스이면 derived이다
    //    서브클래스는 자신이 직접 인스턴스를 생성하지 않고 수퍼클래스에게 인스턴스 생성을 위임함
    //    이게 바로 서브클래스 constructor에서 super()를 호출해야 하는 이유이다
    // 2. 수퍼클래스의 인스턴스 생성과 this바인딩
    //    수퍼클래스의 constructor 내부의 코드가 실행되기 이전에 암묵적으로 빈 객체를 생성함
    //    이 빈객체가 바로 클래스가 생성할 인스턴스임 this에 바인딩됨
    //    이 인스턴스는 수퍼클래스가 생성했지만 new 서브클래스명(파라미터); 하기때문에 호출된 클래스는 서브클래스이다
    //    new 연산자와 함께 호출된 함수를 가리키는 new.target은 서브클래스를 가리키기 때문에 인스턴스는 new.target이 가리키는 서브클래스가 생성한 것으로 처리됨
    //    따라서 인스턴스의 프로토타입은 수퍼클래스.prototype이 아닌 서브클래스.prototype이다
    //    때문에 (인스턴스 instanceof 서브클래스) === true 이다
    // 3. 수퍼클래스의 인스턴스 초기화
    //    수퍼클래스에서의 this는 인스턴스임
    // 4. 서브클래스 constructor로의 복귀와 this 바인딩
    //    서브클래스의 constructor -> super가 반환한 인스턴스가 this에 바인딩됨 즉 인스턴스임
    //    서브클래스는 별도의 인스턴스를 생성하진 않고 super가 반환한 인스턴스를 this에 바인딩해 그대로 사용
    //    이처럼 super가 호출되지 않는다면 인스턴스가 없음 this도 없음 이게 super를 호출해야하는 이유임
    // 5. 서브클래스의 인스턴스 초기화 (= 서브클래스의 constructor수행)
    // 6. 인스턴스 반환(this가 암묵적으로 반환)

    // 정리하면
    // 서브클래스는 인스턴스를 생성하지 않음 실제 생성하는건 수퍼클래스인데
    // 수퍼클래스의 constructor는 암묵적으로 빈객체를 생성함(이 빈객체가 인스턴스임)
    // new 연산자를 통해 직접 호출한건 서브클래스라 서브클래스가 생성한것으로 처리되긴함
    // 서브클래스의 constructor에서 super를 호출하면 그 반환값이 인스턴스임(인스턴스를 만들지 않고 그대로 사용) 
    // 때문에 super를 무조건 호출해야함
}
