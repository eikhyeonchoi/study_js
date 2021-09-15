/**
 * ㅡㅡ핵심키워드
 * 이터러블, 이터러블 프로토콜, 이터레이터 프로토콜, 스프레드문법, 배열디스트럭처링할당
 * 
 * ㅡㅡ개요
 * 이터레이션 프로토콜은 순회가능한 데이터 컬렉션을 만들기위해 약속 한 규칙임
 * ES6이전에는 배열, 문자열, 유사배열객체, DOM컬렉션 등은 통일 규칙 없이 각자 나름의 구조를 가지고 순회했음
 * ES6에서는 순회 가능한 데이터 컬렉션을 이터레이션 프로토콜을 준수하는 이터러블로 통일해 for...of, 스프레드문법, 배열 디스트럭처링 할당의 대상으로 사용할 수 있도록 일원화함
 */

// 이터러블 프로토콜
// Symbol.iterator 메서드를 호출하면 이터레이터 프로토콜을 준수한 이터레이터를 반환함
// 이러한 규칙을 이터러블 프로토콜이라함, 이터러블 프로토콜을 준수한 객체를 이터러블 객체라함
// 이터러블은 for...of로 순회가능하고 스프레드문법, 배열 디스트럭처링할당이 가능함

// 이터레이터 프로토콜
// 위에 말했듯 Symbol.iterator 메서드를 호출하면 이터레이터를 반환함
// 이 이터레이터는 next 메서드를 소유해 호출하면 순회하며 value, done 프로퍼티를 갖는 이터레이터 리절트 객체를 반환함
// 이러한 규약을 이터레이터 프로토콜이라고 하며 이터레이터 프로토콜을 준수한 객체를 이터레이터라함

// 예를들어 배열은 Array.prototype의 Symbol.iterator 메서드를 상속받는 이터러블이다
const arr = [1,2,3,4];
console.log(Symbol.iterator in arr);

// 스프레드 문법 가능
console.log([...arr]); 

// 배열 디스트럭처링 할당가능
const [a, ...remain] = arr;

{ // 이터레이터 살펴보기
    const array  = [1,2,3,4,5];
    // Symbol.iterator 메서드는 이터레이터를 반환함
    const iterator = array[Symbol.iterator]();
    console.log('next' in iterator); // true

    // next메서드를 호출하면 이터러블을 순회하며 순회 결과를 나타내는 이터레이터 리절트 객체를 반환함
    console.log(iterator.next()); // {value: 1, done: false}
    console.log(iterator.next()); // {value: 2, done: false}
    console.log(iterator.next()); // {value: 3, done: false}
    console.log(iterator.next()); // {value: 4, done: false}
    console.log(iterator.next()); // {value: 5, done: false}
    console.log(iterator.next()); // {value: undefiend, done: true}

    // for...of가 이렇게 구현되어 있는거임
    // for(변수선언문 of 이터러블) {...}
    // for...of 는 아래코드와 같음
    // for...of 문은 내부에서 Symbol.iterator를 호출해서 이터레이터를 얻은 뒤
    // 리턴된 이터레이터를 가지고 next를 호출해 배열을 순회하는 것이다
    // 단순히 next만 호출하는게 아닌 Symbol.iterator를 호출함
    const arr = [1,2,3,4,5];
    const iterator1 = arr[Symbol.iterator]();
    for (;;) {
        const elem = iterator1.next();
        if(elem.done) break;

        console.log(elem.value);
    }

    // 이터러블을 순회하면서 next()호출 시 반환되는
    // 이터레이터 리절트객체의 value값을 i에 할당하고
    // done이 true면 순회를 중단한다
    for (const i of arr) {
        console.log(i);
    }

    // 정리하면 배열은 이터러블임
    // Symbol.iterator 호출하면 이터레이터를 반환하는데
    // 이터레이터는 next() 메서드를 갖고 이터러블을 순회할 수 있음(next메서드가 포인터 역할을 함)
    // next메서드 호출결과는 이터레이터 리절트 객체임 
    // 이 리절트객체에 이터러블의 요소의 정보가 있음
    // 리절트객체: {value: 배열 요소 값, done: 끝 여부?}
    
    // 이터러블과 유사배열객체
    // 유사배열객체는 for문으로 순회할 수 있고
    // 마치 배열 처럼 객체 프로퍼티에 접근할 수 있다
    // 하지만 유사배열 객체는 이터러블이 아니기 때문에 for...of순회를 할 수 없다 
    // 단 arguments, NodeList, HTMLCollection은 유사 배열 객체이면서 이터러블이다
    // 유사 배열 객체를 이터러블로 변환하기
    // Array.from(유사배열객체)
}