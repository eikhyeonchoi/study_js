/**
 * ㅡㅡ핵심키워드
 * 이벤트, 이벤트 전파, 이벤트 위임
 * 
 * ㅡㅡ개요
 */

{ // 이벤트 등록방식
    // <button type='button'>asd</button>
    
    // 1. 이벤트 핸들러 어트리뷰트 방식
    // 어트리뷰트 방식에서의 this는 window를 가리킨다
    // <button type='button' onclick='sayHi("lee")'>asd</button>
    function sayHi(name) {
        console.log(name);
    }

    // 2. 이벤트 핸들러 프로퍼티 방식
    // 프로퍼티방식에서의 this는 이벤트를 바인딩한 DOM요소를 가리킨다
    // 이벤트 중복 등록이 불가능함
    const $button = document.querySelector('button');
    $button.onclick(() => console.log(1));

    // 3. addEventListener 메서드방식
    // addEventListener의 this는 이벤트를 바인딩한 DOM요소를 가리킨다
    // EventTarget.prototype.addEventListener 메서드를 사용해 이벤트 핸들러 등록이 가능
    // 이벤트 중복 등록이 가능 단 참조하는 함수가 같다면 한개만 등록됨
    const buttonClick = () => console.log('button click');
    $button.addEventListener('clcik', ()=> console.log(1));
    $button.addEventListener('clcik', buttonClick);

    // 4. 화살표함수
    // 화살표함수로 정의한 이벤트 핸들러 내부의 this는 상위 스코프의 this를 가리킨다

    // 이벤트를 제거하려면 
    // 단 addEventListener과 인수가 동일해야함
    // 단 이벤트 핸들러 프로퍼티 방식으로 할당한 이벤트는 제거할 수 없다
    $button.removeEventListener('click', buttonClick);
}

{ // 이벤트 객체
    // 이벤트 핸들러의 첫번째 인수로 이벤트 객체가 전달됨
    // 이벤트 객체의 공통 프로퍼티
    // type             : 이벤트 타입
    // target           : 이벤트를 발생시킨 요소
    // currentTarget    : 이벤트 핸들러가 바인딩된 요소
    // eventPhase       : 이벤트 전파 단계
    // bubbles          : 버블링 전파 여부
    // cancelable       : preventDefault 메서드를 호출해 이벤트의 기본동작 취소할 수 있는지 여부
    // defaultPrevented : preventDefault 메서드를 호출해 이벤트를 취소했는지 여부
    // isTrusted        : 사용자 행위에 의해 발생한 이벤트인지 여부
    // timeStamp        : 이벤트가 발생한 시각
}

{ // 이벤트 전파
    // <ul id='fruits'>
    //     <li id="apple">apple</li>
    //     <li id="banana">banana</li>
    //     <li id="orange">orange</li>
    // </ul>
    // 이런 상태에서 li요소를 클릭하면 클릭이벤트가 발생한다
    // 생성된 이벤트 객체는 이벤트를 발생시킨 DOM요소인 이벤트 타겟을 중심으로 DOM트리를 통해 전파된다
    
    // ul에 click이벤트르 바인딩하고 ul의 하위요소인 li요소를 클릭하여 이벤트를 발생시키면
    // 이벤트 타겟은 li요소이고 currentTarget은 ul요소임
    // 이때 클릭 이벤트 객체는 window에서 시작해서 이벤트 타겟(li)로 전파된다 -> 캡처링 단계(캡처링 단계를 캐치하려면 addEventListener를 사용함과 동시에 3번째 파라미터를 true로 설정해야한다)
    // 이 후 이벤트 객체는 이벤트 타겟(li)에 도달한다 -> 타겟 단계
    // 이 후 이벤트 객체는 이벤트 타겟에서 시작해서 window 방향으로 전파됨 -> 버블링단계

    // 만약 li 클릭시 클릭된 li만 class로 active를 추가하고 나머지는 active를 없애는 이벤트는 어떻게 구현할까 
    // li마다 click이벤트를 바인딩 하는 것은 좋지 않다
    // 따라서 ul에 이벤트 핸들러를 할당해서 버블링을 유도하는게 바람직함
    // 이것이 바로 이벤트 위임이다
    const $fruits = document.getElementById('fruits');
    function active({target}) {
        // 이벤트에 반응이 필요한 DOM요소에 한정해서 이벤트 핸들러가 실행되도록 예외처리를 해주는게 좋다
        if(!target.matches('$fruits > li')) return;
        [...$fruits.children].forEach(function(f) {
            f.classList.toggle('active', f === target);
        });
    }
}

{ // DOM 요소의 기본동작 조작
    // 1. 기본 동작 중단
    // event.preventDefault()
    document.querySelectorAll('a').onclick(e=> e.preventDefault());

    // 2. 이벤트 전파 방지
    // event.stopPropagation();
    document.querySelectorAll('button').onclick(e=> e.stopPropagation());
}