/**
 * ㅡㅡ핵심키워드
 * this, Function.prototype.(call, apply, bind)
 * 
 * ㅡㅡ개요
 * 자신이 속한 객체 또는 자신이 생상할 인스턴스를 가리키는 자기 참조 변수임
 * this를 통해 프로퍼티나 메서드를 참조할 수 있다
 * 전역함수에서의 this: window(전역객체)
 * 객체내부에서의 this: 자기 자신 객체
 * 생성자함서에서의 this: 생성할 인스턴스
 */

{ // 일반함수에서의 this
    // 브라우저실행
    var value = 100;
    const obj = {
        value: 100,
        foo() {
            console.log(`foo this : ${this}`);
            console.log(`foo vale : ${this.value}`);
            // setTimeout은 일반함수라 this가 전역객체임
            setTimeout(function() {
                console.log(`callback this :`, this);
                console.log(`callback value :`, this.value);
            }, 100);
        },

        // 콜백함수나 중첩함수에 함수프로퍼티의 this와 동일하게 하려면 1
        foo2() {
            const that = this;
            console.log(`foo this : ${this}`);
            console.log(`foo vale : ${this.value}`);

            setTimeout(function() {
                console.log(`callback this :`, that);
                console.log(`callback value :`, that.value);
            }, 100);
        },

        // 콜백함수나 중첩함수에 함수프로퍼티의 this와 동일하게 하려면 2
        // 화살표 함수를 사용함 
        // 화살표함수의 this는 상위 스코프의 this를 가리킴
        foo3() {
            setTimeout(() => {
                console.log(`callback this :`, this);
                console.log(`callback value :`, this.value);
            }, 100);
        },
    };
    obj.foo3();

    // 메서드(함수가 객체의 프로퍼티가 된 것)
    // 메서드는 person의 프로퍼티로 바인딩 되었다 
    const person = {
        name: 'lee',
        getName() {
            return this.name;
        },
    };
    console.log(person.getName()); // lee
    // getName은 person에 포함된것이 아닌 독립적으로 존재하며
    // person.getName에는 객체주소가 있을 뿐이다
    // 따라서 아래 함수도 된다
    const anotherPerson = {
        name: 'choi',
    };
    anotherPerson.getName = person.getName;
    // anotherPerson에서의 this는 choi이다 
    // this는 메서드를 호출한 객체에 바인딩된다
    // anotherPerson이 메서드를 호출한 객체라 this는 anotherPerson이다
    console.log(anotherPerson.getName()); // choi
}

{ // Function.prototype
    // apply, call, binding
    // 모든 함수가 사용가능

    // apply, call
    // 첫번 째 인수를 this로 바꿈
    function getThisBinding() {
        return this;
    }
    const thisArg = {a:1};
    console.log(getThisBinding()); // window
    // 밑 코드를 수행하면 getThisBinding의 this는 전역객체가 아닌 thisArg이다
    console.log(getThisBinding.call(thisArg)); // {a:1}
    // 차이
    // apply와 call의 차이는 다른인수 전달방식이다
    // apply는 배열로써 인수를 전달하고 call은 하나하나 나열한다
    console.log(getThisBinding.apply(thisArg, [1,2,3,4,5]));
    console.log(getThisBinding.call(thisArg, 1, 2, 3, 4, 5));

    // bind
    // 객체만 전달하며 함수를 호출하지 않음
    console.log(getThisBinding.bind(thisArg)); // getThisBinding
    // 호출하려면 명시적으로 호출해줘야함
    console.log(getThisBinding.bind(thisArg)()); // {a:1}

    // 활용
    const person = {
        name: 'lee',
        foo(callback) {
            setTimeout(callback, 100);
        },
    };
    // 아래코드를 수행하면 undefined가 계속 logging됨
    person.foo(function(params) {
        console.log(this.name);
    });

    // 따라서 bind를 사용해 객체 person을 수정할 수 있음
    const person2 = {
        name: 'lee',
        foo(callback) {
            setTimeout(callback.bind(this), 100);
        },
    };
    
    person2.foo(function(params) {
        console.log(this.name);
    });

    // 정리
    // Function.prototype
    // apply, call, bind => 모두 this를 넘기기 위한 함수들
    // apply, call: this 및 인수를 넘기고 + 실행
    // bind       : this만 넘기고 + 실행X
}

