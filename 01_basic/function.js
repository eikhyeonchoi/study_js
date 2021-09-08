/**
 * ㅡㅡ핵심키워드
 * 함수, 일급객체, 함수 선언과 표현의 차이, 즉시실행함수, 콜백함수, 순수함수
 * 
 * ㅡㅡ개요
 * 함수란 일련의 과정을 문으로구현하고 코드 블록으로 감싸서 하나의 실행 단위로 정의한 것
 * 사용이유 중복코드제거, 가독성, 유지보수 등
 */

{ // 함수 리터럴
    // 함수는 객체다
    var f = function(x, y) {
        return x + y;
    };

    // 함수 정의방식
    // 1. 선언(표현식이 아닌 문)
    function add(x, y) {
        return x + y;
    }
    // 2. 표현식
    var add = function(x,y) {
        return x + y;
    };
    // 3. Function생성자함수
    var add = new Function('x', 'y', 'return x + y');
    // 4. 화살표함수(ES6)
    var add = (x,y) => x + y;

    // 기명함수 선언과 표현(리터럴)의 차이
    // 1,3의 차이는 위에는 선언문이고 아래는 함수리터럴이다
    // 함수리터럴의 특징중 하나는 "함수이름은 함수 몸체 내에서만 참조할 수 있는 식별자다"이다
    // 이는 함 수 몸체 외부에서는 함수이름으로 함수를 참조 할 수 없으므로 외부에서는 호출이 불가능하다는 말이다
    // 즉 식별자가 없다는 말과 동일하기 때문에 bar를 호출 할 수 없다
    // 선언문도 마찬가지로 내부에서만 호출가능하지 않을까라 생각하겠지만
    // 즉 따로 식별자를 선언한 후 호출해야하지만
    // 엔진이 암묵적으로 foo식별자를 생성한다
    // 즉 1번코드와 2번코드는 동일하다
    // ★ 함수는 함수 이름으로 호출하는 것이 아닌 함수 객체를 가리키는 식별자로 호출하는거임
    // ★ 함수는 값처럼 변수에 할당 할 수 있고 프로퍼티 값이 될수 있다, 또 배열의 요소도 될 수 있다 
    //    이러한 성질을 갖는 객체를 "일급객체"라고 한다 즉 함수는 일급객체이다
    // 보통 함수 리터럴은 이름을 생략한다
    function foo() {console.log('foo')}; // -- 1
    var foo  = function foo() {console.log('foo');}; // -- 2
    foo(); // foo
    
    (function bar() {console.log('bar')}); // -- 3
    bar(); // ReferenceError

    // 추가
    // 함수 호이스팅은 변수 호이스팅과 차이가있다
    // 선언문의 경우 실행컨텍스트가 평가하는 시점에서 실행되고
    // 표현식같은 경우는 변수호이스팅과 마찬가지로 평가시점에는
    // 변수가 호이스팅되서 undefined로 초기화한 후 
    // 실행단계에가서야 실행되어 함수 각체가 되는것
    // 표현식을 더 권장함
    console.dir(add); // f add(x,y)
    console.dir(sub); // undefined

    console.log(add(2,5)); // 7
    console.log(sub(2,5)); // sub is not a function

    function add(x,y) {
        return x + y;
    }

    var sub = function(x,y) {
        return x - y;
    };

    // 함수 호출
    var add = function(x,y) {
        return x + y;
    };
    var result = add(2,5); // 7
    // 매개변수를 전달하지 않으면?? NaN
    // 즉 undefined로 감
    var result = add(2); // 7
    // 더 보내도 무시함 하지만, arguments에 저장됨
    var result = add(2,2,3,5); // 7

    // 되도록 한가지 기능만 파라미터 3개이하
    // 매개변수가 많다면 객체로

    // 즉시 실행 함수
    // 오직 한번만 수행
    // 함수를 그룹연산자()로 감싸는 이유는
    // 먼저 함수 리터럴을 평가한 뒤 함수 객체를 생성하기 위해서임
    // 함수객체를 생성한 다음 ()로 호출
    // 보통 함수 호출할때 abc(); 이렇게하듯..
    (function() {
        var a = 3;
        var b = 5;
        return a + b;
    }());

    // 재귀함수 
    // 함수에서 함수를 호출

    // 중첩함수
    // 함수안에 함수

    // 콜백함수
    // 함수는 일급객체이므로 다른함수의 파라미터로 전달될 수 있다
    // higher함수에 callback함수가 전달되었다 
    // 이때 higher은 고차함수, callback은 콜백함수라고 칭한다
    // 즉 고차함수는 콜백함수를 자신의 일부분으로 합성함
    var higher = function(i, f) {
        for (let i = 0; i < 5; i++) {
            f(i);
        }
    };  
    var callback = function(i) {
        console.log(i);
    };
    higher(5, callback);
    // 익명함수 리터럴을 콜백함수로 쓸 수 있음 
    // 단 호출할때마다 생성되기 때문에 자주호출한다면 비추천
    higher(5, function(i) {
        console.log(i);
    });
    // 콜백함수가 파라미터를 가지려면
    // 고차함수에서 파라미터를 넘겨줘야지만 받음
    // 만약 넘겨주지 않았는데 받으면 어차피 undefined라 의미없음

    // 순수 비순수함수
    // 순수함수란 어떤 외부상태에도 의존하지 않고 오직 매개변수를 통해 함수 내부로 전달된 인수에게만 의존해 반환 값을 만듦
    // 예제가 이해하기편하다
    var count = 0;
    // 이건 순수함수다
    function increase(n) {
        return ++n;
    }
    count = increase(count); // 1
    count = increase(count); // 2
    // 이건 비순수함수다
    function increase2() {
        return ++count;
    }
    count = increase(); // 3
    count = increase(); // 4
    // 딱 봐도 비순수함수를 쓰면 오류날 가능성이 매우높음
    // 순수함수 사용 권장

}
