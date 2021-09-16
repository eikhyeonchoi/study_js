/**
 * ㅡㅡ핵심키워드
 * DOM
 * 
 * ㅡㅡ개요
 * HTML문서의 계층구조 및 정보를 표현하며 이를 제어할 수 있는 API 즉, 프로퍼티와 메서드를 제공하는 트리 자료구조이다
 */

// DOM 이란?
// 브라우저가 HTML을 파싱하면 DOM을 생성한다
// DOM은 HTML문서의 계층적 구조와 정보를 표현하며 이를 제어할 수 있는 API, 즉 프로퍼티와 메서드를 제공하는 트리 자료구조이다
// 

{ // 노드
    // 요소는 HTML문서를 구성하는 개별적인 요소를 의미함
    // 렌더링 엔진에 의해 파싱되어 DOM을 구성하는 요소 노드 객체로 변환됨
    // <div class="greeting">hi</div>
    // div = 요소노드
    // class:"greeting" = 어트리뷰트 노드
    // hi = 텍스트노드
    // 노드 객체들로 구성된 트리 자료구조를 DOM 이라 한다
    // 노드 객체는 종류가 있고 상속 구조를 갖는다 

    // 종류
    // 1. 문서 노드 document
    //    최상위노드(루트노드)이며 전역객체 window에 바인딩되어 있다
    //    HTML문서당 document객체는 유일함, 루트노드이기 때문에 노드에 접근하기 위한 진입점 역할
    // 2. 요소 노드
    //    HMTL요소를 가리키는 노드임
    // 3. 어트리뷰트 노드
    //    HTML요소의 어트리뷰트를 가리키는 객체(요소노드에 연결되어 있음, 요소노드의 형제노드는 아님)
    // 4. 텍스트 노드
    //    HTML요소의 텍스트를 가리키는 객체(요소노드의 자식노드임)
    1;
}

{ // 상속구조
    // 예를 들어 input요소의 상속구조를 살펴본다
    // 해당 상속구조는 프로토타입 체인으로 이어져 있다
    // Object(.prototype)           ->
    // EventTarget(.prototype)      ->
    // Node(.prototype)             ->
    // Element(.prototype)          -> 
    // HTMLElement(.prototype)      ->
    // HTMLInputElement(.prototype) ->
    // input 요소 노드 객체

    // 노드 타입에 따라 필요한 기능을 프로퍼티와 메서드의 집합인 DOM API로 제공함
    // 이를 통해 노드를 조작할 수 있다
    1;
}

{ // 노드 취득
    // Document.prototype.getElementById(id): id를 참조해 하나의 요소노드 리턴, 없으면 null

    // Document(Element).prototype.getElementsByTagName(tagName): 태그네임을 참조해 HTMLCollection 리턴(유사배열객체, 이터러블) 
    // 항상 document.getElemets가 아닐 수 있음
    // document.getElementById(id).getElementsByTagName(tagName) << 이렇게하면 자식들중의 태그네임을 참조함

    // Document(Element).prototype.getElementsByClassName(class): 클래스를 참조해 HTMLCollection 리턴(유사배열객체, 이터러블) 
    // 항상 document.getElemets가 아닐 수 있음
    // document.getElementById(id).getElementsByTagName(class) << 이렇게하면 자식들중의 클래스를 참조함

    // Document(Element).prototype.querySelector(css선택자): 결과값이 많으면 첫 번째만, 없으면 null
    // Document(Element).prototype.querySelectorAll(css선택자): 모든요소, NodeList 리턴(유사배열객체, 이터러블) 

    // getElementById. querySelector 사용 권장

    // 취득할 수 있는지 확인
    // Element.prototype.matched(css선택자) 
}

{ // HTMLCollection
    // DOM API가 여러 개의 결과값을 반환하기 위한 DOM 컬렉션 객체
    // 모두 유사배열객체이면서 이터러블임
    // 라이브객체임
    
    // 라이브객체의 문제점은 
    // HTMLCollection 객체를 사용하지 않고 배열로 변환해서 사용하는 방법이 있음
    const abc = document.getElementsByClassName('abc'); // HTMLCollection 리턴
    // 이터러블이라 스프레드 문법이 가능함
    [...abc].forEach(function(elem, index) {
    });

    // getElementsByClassName 대신 querySelectorAll을 사용 할 수 있다
    // querySelectorAll()이 리턴하는 객체는 NodeList이며 이건 라이브객체가 아님
    // 하지만 childNodes 프로퍼티가 리턴하는 NodeList객체는 라이브객체임

    // 따라서 ... 
    // 배열로 변환해서 사용하는 것이 바람직 하다
    // const array = Array.from(HTMLCollection);
    // const array = [...HTMLCollection];
}

{ // 노드 탐색
    // 브라우저에서 console -> Node.prototype을 확인

    // 자식노드 탐색
    //                                         반환값
    // Node.prototype.childNodes:           NodeList(텍스트노드 포함)
    // Element.prototype.children:          NodeList(텍스트노드 미포함)
    // Node.prototype.firstChild:           Node(요소 또는 텍스트 노드)
    // Node.prototype.lastChild:            Node(요소 또는 텍스트 노드)
    // Element.prototype.firstElementChild: Node(요소 노드)
    // Element.prototype.lastElementChild:  Node(요소 노드)

    // 자식노드 존재확인여부
    // Node.prototype.hasChildNodes:     자식노드 존재확인(텍스트노드 포함)
    // Node.prototype.childElementCount: 자식노드 존재확인(텍스트노 미포함)

    // 부모 노드 탐색
    // Node.prototype.parentNode: 부모노드가 텍스트 노드인 경우는 없다
    
    // 형제 노드 탐색
    // Node.prototype.previousSibling:           이전형제 노드(텍스트일 수 있음)
    // Node.prototype.nextSibling:               다음형제 노드(텍스트일 수 있음)
    // Element.prototype.previousElementSibling: 이전형제 노드(텍스트일 수 없음)
    // Element.prototype.nextElementSibling:     다음형제 노드(텍스트일 수 없음)
}

{ // 노드 정보 취득
    // Node.prototype.nodeType: 상수반환(1-요소 노드, 3-텍스트 노드, 9-문서 노드) 
    // Node.prototype.nodeName: 이름을 문자열로 반환(대문자-요소 노드, #text-텍스트 노드, #document-문서 노드) 
}

{ // 요소 노드의 텍스트 조작
    // nodeValue(getter, setter 모두 존재)
    // nodeValue 프로퍼티를 참조하면 노드 객체의 값을 반환한다.
    // 이 노드 객체의 값이란 텍스트노드의 텍스트임
    // 따라서 문서노드 및 요소노드에 nodeValue 프로퍼티를 참조하면 null임
    // 텍스트 노드의 nodeValue를 참조해야지만 텍스트를 얻을 수 있음
    // ex.
    // <div id='abc'>abc</div>
    // const abc = document.getElementById('abc');
    // abc.nodeValue; -> null
    // firstChild는 텍스트노드까지 포함해서 자식노드를 탐색함
    // abc.firstChild.nodeValue; -> abc
    // setter도 존재하기 때문에 값을 변경할 수 있다
    // abc.firstChild.nodeValue = 'changeAbc';

    // nodeValue(getter, setter 모두 존재)
    // 자식노드들의 텍스트 노드까지 모두 얻음
    // 텍스트만을 리턴함
    // abc.textContent = abc.firstChild.nodeValue 는 동일함 
}

{ // DOM 조작
    // DOM API를 통해 DOM을 조작한다면 리페인트 및 리플로우가 발생함

    // Element.prototype.innerHTML (getter, setter 모두 존재)
    // innerHTML을 참조하면 요소 노드의 컨텐츠 영역내에 포함된 모든 HTML 마크업을 문자열로 반환함
    // XSS에 취약함
    // ex.
    // <ul id='abc'>
    //  <li>apple</li>
    // </ul>
    // const abc = document.getElementById('abc');
    // abc.innerHTML += `<li>banana</li>`;
    // 위 innerHTML을 실행하면 apple뒤에 단순 li를 추가하는게 아니라
    // 처음부터 다시 렌더링한다. apple -> banana 렌더링
    // 그리고 중간에 끼워넣을 수 가 없다 무조건 마지막에 추가해야함

    // Element.prototype.insertAdjacentHTML(position, DOMString)
    // 기존요소를 제거하지 않으면서 새로운 위치에 요소를 삽입
    // ex.
    // :: beforebegin
    // <ul id='abc'>
    // :: afterbegin
    //  <li>apple</li>
    // :: beforeend
    // </ul>
    // :: afterend
    // const abc = document.getElementById('abc');
    // abc.insertAdjacentHTML('afterbegin', '<li>orange</li>');
    // innerHTML 보다 insertAjacnetHTML이 좋다

    // 노드 생성과 추가
    // DOM은 노드를 직접 생성/삽입/삭제/치환하는 메서드를 제공함
    // 1. 요소 노드 생성
    // const li = document.createElement('li');
    // 2. 텍스트 노드 생성
    // const liText = document.createTextNode('한글');
    // 3. 텍스트 노드를 요소 노드의 자식 노드로 추가
    // li.appendChild(liText);
    // 단 li의 자식노드가 아무것도 없을 경우는 li.textContent = '한글'; 이렇게 해도된다
    // 4. 요소노드를 DOM에 추가
    // document.getElementById('abc').appendChild(li);

    // 복수개의 노드 추가
    // ['a','b','c'].forEach(function(elem, index) {
    //      ... 이렇게 일일히 for문을 돌아서 요소를 추가하면
    //      리플로우가 for문 반복횟수만큼 되기 때문에 성능면에서 좋지않다
    // });
    // 해결책
    // document.createDocumentFragment();를 사용함
    // const fragment = document.createDocumentFragment();
    // ['a','b','c'].forEach(function(elem, index) {
    //      fragment.appendChild(document.createElement('li').appendChild(document.createTextNode(elem)));
    // });
    // document.getElementById('abc').appendChild(fragment);

    // 노드 삽입
    // Node.prototype.appendChild:                      마지막 노드로 추가
    // Node.prototype.insertBefore(newNode, childNode): 지정한 위치에 노드 삽입(두 번째 인수로 전달받은 노드 앞에 삽입함)
    //                                                  두번째 인수도 무조건 insertBefore를 호출한 노드의 자식이어야함
    //                                                  null 이라면 마지막 노드로 추가한다

    // 노드복사 
    // Node.prototype.cloneNode([deep: true | false]): 노드의 사본을 생성하여 리턴
    //                                                 true로하면 깊은, false면 얕은(자식노드는 하나도 복사안함(텍스트노드 마저도))

    // 노드 교체
    // Node.prototype.replaceChild(newNode, childNode): childNode를 newNode로 교체함
    //                                                  두번째 인수도 무조건 replaceChild를 호출한 노드의 자식이어야함

    // 노드 교체
    // Node.prototype.removeChild(child): child를 삭제함
    //                                    첫번째 인수도 무조건 removeChild 호출한 노드의 자식이어야함
}

{ // 어트리뷰트
    // 어트리뷰트 노드 & attributes 프로퍼티
    // 요소 노도의 모든 어트리뷰트 노드는 요소 노드의 Element.prototype.attributes 프로퍼티로 얻을 수 있음
    // attributessms 읽기전용 접근자이며, 요소 노드ㅡ의 모든 어트리뷰트 노드의 참조가 담긴 NamedNodeMap 객체를 리턴
    // Element.prototype.getAttribute(attributeName):    값 참조
    // Element.prototype.setAttribute(attributeName):    값 변경
    // Element.prototype.hasAttribute(attributeName):    어트리뷰트 존재확인
    // Element.prototype.removeAttribute(attributeName): 어트리뷰트 삭제
    

    // HTML어트리뷰트 vs DOM 프로퍼티
    // 예를들어 <input id="user" type="text" value="123">가 파싱되면
    // 요소노드객체가 되는데 이 객체에는 어트리뷰트 id,type,value에 대응하는 어트리뷰트이름과 동일한 프로퍼티가 존재함
    // 이 DOM프로퍼티들은 HTML어트리뷰트의 값을 초기값으로 가짐
    // 쉽게말해 input 요소노드에도 프로퍼티로 id, type, value를 가지고 있다는 뜻
    // HTML어트리뷰트는 요소의 초기상태를 의미하며 변하진 않음
    // 만약 저 input에 456를 입력하면 요소의 "상태"가 바뀜(요소는 상태를 가지고 있음)
    // 요소 노드는 2개의 상태, 즉 초기와 최신상태를 관리해야함
    // 초기 상태는 어트리뷰트 노드가, 최신 상태는 DOM프로퍼티가 관리함
    // 단 input처럼 사용자 입력에 의한 상태 변화와 관계있는 DOM 프로퍼티만 최신 상태 값을 관리함
    // 대응관계
    // 1. id 어트리뷰트와 id 프로퍼티는 1:1대응 동일한값
    // 2. input 요소의 value 어트리뷰트는 value 프로퍼티와 1:1대응 하지만 어트리뷰트는 초기상태를 value 프로퍼티는 최신 상태를
    // 3. class 어트리뷰트는 className, classList 프로퍼티와 대응
    // 4. for 어트리뷰트는 htmlFor 프로퍼티와 대응
    // 5. td의 colspan 어트리뷰트는 대응하는 프로퍼티가 없다
    // 6. textContent 프로퍼티는 대응하는 어트리뷰트가 없다
    // 7. 어트리뷰트는 대소문자 구분 없지만 프로퍼티는 카멜케이스를 따름
    // 8. 체크박스의 경우 어트리뷰트는 문자열이지만 .checked는 불리언이다
    
    // 사용자 정의 어트리뷰트
    // 접두사 data- 를 붙인다
    // <div data-id='1'></div> 이런식
    // 이 값을 참조하려면 HTMLElement.dataset 프로퍼티로 취득할 수 있음
    // HTMLElement.dataset은 DOMStringMap 객체를 리턴
}

{ // 스타일
    // HTMLElement.prototype.style 프로퍼티는 setter, getter모두 존재
    // 인라인 스타일을 취득하거나 추가 변경 가능함

    // 클래스 조작
    // Element.prototype.className 프로퍼티는 setter, getter 모두 존재
    // class 어트리뷰트 값을 취득하거나 변경함(문자열로 리턴)
    // Element.prototype.classList 프로퍼티는 class 어트리뷰트의 정보를 담은 DOMTokentList 객체를 반환함
    // 이 리턴된 객체는 이터러블이면 서 유사배열객체임
    // 1. add(...className)         : 클래스 추가
    // 2. remove(...className)      : 클래스 제거
    // 3. item(index)               : index에 해당하는 클래스를 class 어트리뷰트에서 리턴
    // 4. contains(className)       : class어트리뷰트에 포함되어 있는지 확인
    // 5. replace(old, new)         : old -> new
    // 6. toggle(className[, force]): 일치하는 클래스가 존재하면 제거 존재하지 않으면 추가
    //                                두 번째 파라미터가 true면 강제로 className을 class 어트리뷰트로 추가하고
    //                                false면 className을 class어트리뷰트에서 삭제한다
}