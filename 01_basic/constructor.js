/**
 * ㅡㅡ핵심키워드
 * 생성자함수, this, call, construct, new.target
 * 
 * ㅡㅡ개요
 * 생성자함수로 객체를 생성할 수 있다
 */

// 객체생성함수 종류
// 1. new Object()
// 2. new String()
// 3. new Number()
// 4. new Boolean()
// 5. new Function()
// 6. new Array()
// 7. new RegExp()
// 7. new Date()

// 객체 리터럴에 의한 객체생성과 문제점
const circle1 = {  
    r: 1,
    getDiameter() {
        return 2 * this.r;
    }
};

console.log(circle1.getDiameter());
circle1.r = 30;
console.log(circle1);
console.log(circle1.getDiameter());
// r을 바꾸고 싶다면?
// 다시정의해야함
const circle2 = {  
    r: 1,
    getDiameter() {
        return 2 * this.r;
    }
};
console.log(circle2.getDiameter());


// 생성자 함수에 의한 객체생성
// 객체리터럴로 하는것보다 유연하게 작성할 수 있다
// 근데 이게 그냥 프로퍼티값 바꾼다음에 하면되는거아닌가 싶음
// 추가지식
// 기본적으로 functiob circle() 하게되면
// 엔진이 암묵적으로 식별자를 선언함
// 그 식별자로 선언하게되면 해당함수는 전역객체의 프로퍼티의 소속됨
// 개인적으로는 선언형보다는 표현식이 좋을듯?
// 다른곳에서도 쓸라면 선언형으로 해도 되긴함
let circle = function(r) {
    // 인스턴스 초기화
    // 이것은 circle.r = r 이랑 동등함
    // 여기서의 this는 circle{}임
    this.r = r;
    this.getDiameter = function() {
        return 2 * this.r;
    };
    
    // 리턴 코드가 없다
    // 하지만 new연산자를 쓰면 암묵적으로 인스턴스를 생성하고 초기화 한 후 인스턴스를 return함
    // 빈객체이긴하지만 이 인스턴스는 this에 바인딩됨
    // 즉 암묵적으로 return this임
    // 명시적으로 빈객체 {}를 반환하면 진짜 빈객체임
    // 단 원시값을 명시적으로 반환할시 this가 반환됨
    // return 문은 반드시 생략하는걸 권장한다
};
// 인스턴스 생성
const c = new circle(2);
console.log(c.getDiameter());

// this의 의미
// 일반 함수에서의 this: 전역객체
// 메서드(프로퍼티값이 함수)의 this: 메서드를 호출한 객체(마침표 앞 객체)
// 생성자 함수로서의 호출의 this: 생성자함수가 생성할 인스턴스

var foo = function() {
    console.log(this);
}
foo(); // window
const abc = {
    foo
};
abc.foo(); // abc

// 함수도 객체라 프로퍼티를 가질 수 있다
// 하지만 함수는 특별하게 call(호출)할 수 있다
// 일반 함수로서 호출되면 함수객체의 내부메서드 [[call]]이 호출되고
// 생성자 함수로서 호출되면 내부메서드 [[construct]]가 호출된다
// 모든 함수는 [[call]]을 가지고 있어 callable이라 하지만
// 모든 함수가 [[construct]]를 가지고있진 않아 construct 또는 non-construct이다
// construct와 non-construct를 어떻게 구분해야할까
// construct: 함수 선언문, 표현식, 클래스, 축약이 아닌 객체 프로퍼티 함수
// non-construct: 메서드(ES6 축약표현), 화살표함수
// 추가지식 
// 메서드란 ES6의 메서드 축약표현만 메서드로 인정함

// new.target(ES6)
// 생성자 함수로 써야하는 함수의 경우 new를 빼먹을 수 있음
// 그 빼먹는걸 방지하기위해 보안된 기능임
function circle3(r) {
    if(!new.target) {
        return new circle3(r);
    }

    // 위 코드와 동일
    // if(!(this instanceof circle3)) {
    //     return new circle3(r);
    // }

    this.r = r;
    this.getDiameter = function() {
        return 2 * this.r;
    };
}

const instanceCircle = circle3(123);
console.log(instanceCircle);


const str = new String(123);
console.log(str);
console.log(typeof str);