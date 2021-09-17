/**
 * ㅡㅡ핵심키워드
 * promise, 콜백함수, 콜백헬, 마이크로태스크큐, fetch
 * 
 * ㅡㅡ개요
 */

// 비동기처리를 위한 콜백 패턴의 단점
// 비동기 함수를 호출하면 함수 내부의 비동기로 동작하는 코드가 완료되지 않았다 해도 기다리지 않고 즉시 종료된다
// 즉 비동기 함수 내부의 비동기로 동작하는 코드는 비동기 함수가 종료된 이후에 완료된다
// 따라서 비동기 함수 내부의 비동기로 동작하는 코드에서 처리결과를 외부로 반환하거나 상위스코프 변수에 할당하면 
// 기대처럼 동작하지 않는다
// -> 비동기함수안에 비동기함수가 있으면 먼저 외부 비동기 함수가 끝나고 그 다음 내부 비동기함수가 끝나기 때문에
//    리턴을 기대할 수 없다

// 비동기 함수 자체가 전역 코드 및 명시적으로 호출된 함수를 먼저 수행한 후
// 콜스택이 비어 있으면 이벤트루프가 태스크큐에 저장된 비동기함수를 콜스택에 푸시해서 실행하는 것이라
// 리턴할 수 도 없고, 처리결과를 외부에 리턴할 수 도 없다
// 그래서 비동기처리 결과는 비동기함수내에서 컨트롤하는데 컨트롤을 하기위해 보통 콜백함수를 전달한다
// 콜백함수를 사용하다 보면 콜백헬에 빠질 수 있다
get('url/post/1', ({userId}) => {
    console.log(userId);
    get(`url/user/${userId}`, info=> {
        console.log(info);
    });
});

{ // 해결책 Promise(ES6)
    // 표준빌트인 객체이며, 비동기 처리를 수행할 콜백 함수를 인수로 전달받는다
    // 이 콜백 함수는 resolve와 reject함수를 인수로 전달받느다
    const p = new Promise((resolve, reject) => {
    });

    // 비동기함수인 promiseGet은 함수 내부에서 Promise를 생성하고 리턴함
    // 비동기 처리는 Promise내부의 콜백함수에서 수행한다
    // Promise는 상태정보를 갖는다
    // 상태정보                      의미                                상태변경조건
    // pending                      비동기처리가 아직 수행되지 않음       Promise생성직후
    // fulfilled                    수행성공                            resolve함수 호출
    // rejected                     수행 실패                           reject함수 호출
    // fulfilled, rejected 상태를 settled 상태라고함
    const promiseGet = url => {
        return Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.send();
            xhr.onload = () => {
                (xhr.status === 200) ? resolve(JSON.parse(xhr.response)) : reject(new Error(xhr.status));
            };
        });
    };
    // Promise는 비동기 처리 상태와 처리 결과를 관리하는 객체이다

    // 후속처리
    // Promise.prototype.then(callback1, callback2)
    // callback1 : 성공시(인수는 비동기 처리결과)  
    // callback2 : 실패시(인수는 비동기 처리결과)
    // return : 언제나 Promise return
    
    // Promise.prototype.catch(callback1)
    // then메서드에서 발생한 에러도 catch가 가능함 (권장)
    // callback1 : 실패시에만
    // return : 언제나 Promise return
    
    // Promise.prototype.finally(callback1)
    // callback1 : 성공실패 상관없이 무조건 한번 수행
    // return : 언제나 Promise


    // 정적 메서드
    // Promise.resolve() : 인수로 전달받은 값을 resolve 하는 프로미스 생성
    // Promise.reject() : 인수로 전달받은 값을 reject 하는 프로미스 생성
    
    // Promise.all(이터러블) : 여러개의 비동기 처리를 모두 병렬 처리할 때 사용
    const r1 = new Promise(resolve => setTimeout(()=> resolve(1), 3000));
    const r2 = new Promise(resolve => setTimeout(()=> resolve(2), 2000));
    const r3 = new Promise(resolve => setTimeout(()=> resolve(3), 1000));
    Promise.all([r1,r2,r3]);
    // 인수로 전달된 Promise들이 resolve상태가 되면 결과값을 배열에 저장해 서로운 Promise 리턴
    // 첫 번째 Promise가 가장 나중에 resolve되더라도 차례대로 배열에 저장한다 즉 처리순서가 보장된다
    // 만약 전달된 Promise중 하나라도 reject되면 즉시 종료한다

    // Promise.race(이터러블) : 가장먼저 fulfilled 상태가된 Promise 처리 결과를 resolve하는 새로운 Promise 리턴
    // 만약 전달된 Promise중 하나라도 reject되면 즉시 종료한다

    // Promise.allSettled(이터러블) : resolve, reject 상관없이 모든 Promise 결과가 담긴 Promise를 리턴
    // 각각 리턴된 Promise객체는 (status: fulfilled or rejected, value: 각 비동기 처리결과) 프로퍼티를 갖는다
}

{ // 마이크로 태스크 큐
    // Promise의 후속 처리 메서드는 마이크로 태스크 큐에 저장되기 떄문에 일반 비동기 함수의 콜백 함수보다 높은 우선순위를 갖는다
}

{ // fetch
    // XMLHttpRequest 객체와 마찬가지로 HTTP 요청 전송 기능을 제공하는 클라이언트 사이드 Web API이다
    // fetch 함수는 HTTP Response 객체를 래핑한 Promise객체를 리턴함
    // 때문에 후속처리 then을 통해 Promise가 resolve한 Reponse객체를 받을 수 있음
    // 응답 몸체를 얻으려면 Resposne.protoype.json를 사용하면 된다 -> Resposne 객체에서 HTTp 응답 몸체를 취득해 역직렬화한다
    // const pm = fetch(url [, options]);
    // ex.
    const request = {
        get: function(url) {
            return fetch(url);
        },
        post: function(url, body) {
            return fetch(url, {
                method: 'POST',
                header: {'content-Type':'application/json'},
                body: JSON.stringify(body),
            });
        },
        patch: function(url, body) {
            return fetch(url, {
                method: 'PATCH',
                header: {'content-Type':'application/json'},
                body: JSON.stringify(body),
            });
        },
        delete: function(url) {
            return fetch(url, {method: 'DELETE'});
        },
    };
}

// 정리
// 비동기처리할때 콜백헬에 빠질 수 있는데
// 이 콜백헬 및 외부함수에 결과값을 리턴하거나 외부변수에 결과값을 할당할 수 없다
// 이유는 비동기함수 자체가 콜스택이 비어있을때 이벤트루프가 태스크큐에서 가져와서
// 콜스택에서 수행하는것인데 콜스택에는 전역코드 및 명시적인 함수호출이 있는것 부터
// 먼저 수행하기 때문에 불가능하다 
// 따라서 Promise를 사용해 비동기처리를 쉽게할 수 있다