/**
 * ㅡㅡ핵심키워드
 * ES6, 화살표함수, rest파라미터
 * 
 * ㅡㅡ개요
 * 함수의 종류에 따라 적절한 곳에 사용해야함
 */

// ES6이전의 함수는 일반함수 및 생성자 함수로써 모두 호출 가능했다
var obj = {
    x:10,
    f: function() {return this.x},
};
console.log(obj.f()); // 10
var bar = obj.f;
console.log(bar()); // undefined
console.log(new obj.f()); // f{}

// ES6에서는 목적에 따라 3가지로 분류함
// 단, ES6에서의 메서드는 축약표현으로 정의된 함수만을 의미함
//                      constructor        prototype        super        arguments
// 일반함수                  o                  o              x              x
// 메서드                    x                  x              o              o
// 화살표함수                x                  x              x              x
// 참고로 빌트인객체가 제공하는 프로토타입 메서드와 정적 메서드 모두 non-constructor임 즉, 메서드임

// 또 메서드는 자신을 바인딩한 객체를 가리키는 내부슬롯 [[HomeObject]]가 있음
// 이 [[HomeObject]]를 통해 super를 참조해서 인스턴스를 만드는 것
// 따라서 메서드는 super와 arguments를 사용할 수 있다
const base = {
    name: 'lee',
    sayHi() {
        return `hi ${this.name}`;
    },
}

const derived = {
    sayHi1() {
        return `${super.sayHi()} aasd`;
    },

    // Super property may only be used within method bodies.
    // 메서드 몸체 내부에서만 사용가능하다
    // sayHi2: function() {
    //     return `${super.sayHi()} aasd`;
    // }
}

{ // 화살표함수
    // 함수정의
    // 파라미터가 여러개면 ()로 감싼다
    const a = (x,y) => {};
    // 하나면 () 생략가능
    const b = x => {};
    // 없으면 생략불가능
    const c = () => {};

    // 몸체정의
    // 몸체가 하나의 표현식인 문이면 {} 생략 가능
    const d = () => 1;
    // 표현식이 아닌 문이면 {} 생략 불가능
    const e = () => const x = 1;
    // 객체리터럴 반환할때 소괄호로 감싼다
    const f = () => ({a:1});
    // 문이 여러개면 {} 생략 불가능
    const g = (a,b) => {
        const res = a+b;
        return res;
    };

    // 특징
    // non-constructor임
    // prototype 프로퍼티없고 프로토타입도 생성하지않음
    // 중복된 파라미터 선언 불가능
    // 함수 자체의 this, arguments, super, new.target 바인딩을 갖지 않음(스코프 체인상에서 가장 가까운 화살표함수가 아닌 함수임)
    // bind, call, apply 안먹힘
    // 화살표 함수내에서 this, super, arguments를 사용한다면 상위스코프의 this, super, arguments를 참조함

    // 예제
    class Prefixer {
        constructor(prefix) {
            this.prefix = prefix;
        }

        add(arr) {
            return arr.map(function(item) {
                // 이 콜백함수에서의 this는 undefined이다 
                // 알반함수에서의 this는 windoow인데 왜 undefined냐면
                // 콜백함수 내부에서는 암묵적으로 strict mode가 활성화되어
                // 함수 내부의 this는 undefined가 되는 것
                // undefined이기 때문에 에러가 발생하는것이다
                return this.prefix + item;
            });
        }

        // 해결방안1
        add2(arr) {
            const that = this;
            return arr.map(function(item) {
                return that.prefix + item;
            });
        }

        // 해결방안2
        add3(arr) {
            return arr.map(function(item) {
                return that.prefix + item;
            }, this);
        }

        // 해결방안3
        add3(arr) {
            return arr.map(function(item) {
                return that.prefix + item;
            }.bind(this));
        }

        // 해결방안4
        // 이게 왜 되냐면 화살표함수는 자체적으로 this를 가지지 않음
        // 화살표함수의 this는 상위스코프(add)의 this랑 똑같다 즉 Prefixer가 되는 것
        // 즉 화살표함수는 bind를 쓴것과 동일하다
        // () => thix.x;
        // (function() {return this.x;}.bind(this));
        add3(arr) {
            return arr.map(item => this.prefix + item);
        }
    }
    const pre = new Prefixer("prefix_word");
    console.log(pre.add(['aaa', 'bbb'])); // Cannot read property 'prefix' of undefined
}

{ // Rest파라미터
    function foo(...rest) {
        console.log(rest); // [1,2,3,4,5]
    }
    foo(1,2,3,4,5);

    // 반드시 마지막에 와야함 + 하나만 선언가능
    function foo(param1, ...rest) {
        console.log(param1); // 1
        console.log(rest); // [2,3,4,5,6]
    }
    foo(1,2,3,4,5,6);


    // arguements vs rest parameter
    // arguments는 유사배열객체임
    function sum() {
        var array = Array.prototype.slice.call(arguments);
        return array.reduce(function(pre,cur) {
            return pre + cur;
        }, 0);
    }
    // rest는 배열객체임 + 기본값도 지정가능
    function sum2(...args = []) {
        return args.reduce(function(pre,cur) {
            return pre + cur;
        }, 0);
    }

    console.log(sum(1,2,3,4,5)); // 15
}