/**
 * ㅡㅡ핵심키워드
 * 객체, 프로퍼티, 메서드, pass by value, pass by reference
 * 
 * ㅡㅡ개요
 * 원시값은 변경불가능하며
 * 객체는 변경 가능한값이다
 */

{ // 객체

    // 객체는 0개이상의 프로퍼티로 구성된 집합 key/value
    // js에서의 모든 값은 프로퍼티 값이 될 수 있음
    // 함수도 1급객체이므로 프로퍼티값으로 사용가능 만약 함수가 프로퍼티값이라면 일반함수와 구분짓기 위해 메서드라 부름

    // 객체 생성방법
    // 1. 객체리터럴(가장많이씀)
    var obj = {}; 
    // 2. object 생성자함수
    // 3. 생성자함수
    // 4. Object.create 메서드
    // 5. 클래스(ES6)

    // 원시타입과 객체의 비교
    // 1. 원시값은 변경 불가능, 객체는 변경가능
    // 2, 원시값을 변수에 할당 시 변수에는 실제 값이 저장되지만 객체는 참조 값이 저장됨
    // 3. 원시값을 갖는 변수를 다른 변수에 할당하면 원시값이 복사됨(값에 의한 전달 pass by value)
    //    반면 객체변수를 다른 변수에 할당하면 참조 값이 복사됨(참조에 의한 전달 pass by reference)

    // 이렇게 선언해도 메모리셀 총 3개를 사용한거임 -> 그래서 원시값을 변경불가라는것(불변성)
    // undefined, 10, 20 각기 다른 셀에 저장됨
    var o = 10;
    o = 20;

    // 문자열의 불변성
    // 이렇게 할당하면 총 6글자이기때문에 메모리셀 6개를 할당함 한셋트임
    // 그래서 변경하려고 해도 변경이 되지않음 (재할당하지 않는이상)
    var str = 'string';
    console.log(str[0]); // s
    str[0] = 'S';
    console.log(str); // string(변하지않음)

    // 객체를 선언하면 메모리셀에 참조값을 저장함
    // 원시값도 알고보면 주소를 저장하는건데 객체는 주소의 주소를 저장함
    // 객체는 변경가능한값임 그래서 동적으로 추가, 삭제, 갱신이 되는 것
    var person = {
        name: 'lee'
    };

    var copy = person;
    console.log(copy === person); // true
    copy.name = 'choi';
    copy.age = 12;

    console.log(copy); // {name: 'choi', age: 12}
    console.log(person); // {name: 'choi', age: 12}

    // 결론
    // pass by value, pass by reference는 변수가 기억하는 메모리공간에 저장되어 있는 값을 복사해서 전달하는거임
    // pass by value는 원시값을 복사전달하겠고 pass by reference는 참조값을 복사전달 할 것임
    // 따라서 참조에 의한 전달은 존재하지 않고 값에 의한 전달만이 존재함
}

{ // 프로퍼티

    // 객체는 프로퍼티 집합이며 프로퍼티는 key/value로 구분
    // 식별자 네이밍 규칙을 정의하지 않으면 ''로 묶어야함
    var person = {
        firstName: '',
        'last-name': '',
    };

    // ES6 계산된 프로퍼티 이름
    var obj = {[key]: 'world'};
    var obj = {[`key-${key}`]: 'world'};

    // 메서드
    var circle = {
        radius: 5,
        // 함수도 프로퍼티가 가능하다
        getDiameter: function() {
            // 여기서의 this는 객체 circle 자기자신을 가리킨다
            return this.radius * 2;
        },
        // ES6 메서드 축약표현
        getDiameter2() {
            return this.radius * 2;
        },
    };

    // 프로퍼티 접근
    var person = {
        name: 'lee',
        1: 123,
    };
    console.log(person.name);
    // 대괄호 사용시 따옴표로 묶어야함
    console.log(person['name']); 
    console.log(person['abc']); // undefined
    // 만약 key가 숫자면?
    console.log(person.1); // SyntaxError: Unexpected number
    console.log(person[1]); // 123

    // 프로퍼티 갱신
    person.name = 'kim';

    // 프로퍼티 동적생성
    person.age = '22';
    person['phone'] = '123';
    
    // 프로퍼티 삭제
    delete person.age;
    // 없는거 삭제해도 에러안뜸
    delete person.aabbcc;

    // ES6 프로퍼티 축약표현
    var x = 1, y = 2;
    var obj = {
        x,y
    };
}




