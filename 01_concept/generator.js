/**
 * ㅡㅡ핵심키워드
 * 제너레이터, async, await
 * 
 * ㅡㅡ개요
 */

// 제너레이터는 코드블록의 실행을 일시 중지했다가 필요한 시점에 재개할 수 있는 특수한 함수이다
// 1. 제너레이터 함수는 함수 호출자에게 함수 실행의 제어권을 양도할 수 있다
// 일반함수를 실행하면 제어권이 함수에게 넘어가고 함수코드를 일괄 실행한다
// 호출자는 제어할 수 없다. 제너레이터는 함수 호출자가 제어할 수 있다(독점하는 것이 아닌 호출자에게 양도가 가능하다는 뜻
// 2. 제너레이터 함수는 함수 호출자와 함수의 상태를 주고받을 수 있다(쌍방향)
// 3. 제너레이터 함수를 호출하면 제너레이터 객체를 리턴
// 제너레이터 함수를 호출하면 함수 코드를 실행하는게 아닌 이터러블이면서 이터레이터인 제너레이터 객체를 리턴함
function* a(){
    yield 1;
}

// 화살표 함수로 정의할 수 없고 new연산자로 호출할 수 없다
// const a = new a();
// const a = *()=>{};

{ // 제너레이터 객체
    // 제너레이터 함수를 호출하면 코드를 수행하는게 아닌
    // 이터러블이면서 이터레이터인 제너레이터 객체를 리턴한다
    // 더불어 return throw 메서드를 갖느다
    // next 메서드를 호출하면 yield 표현식까지 코드블록을 실행하고 
    // yield된 값을 value 프로퍼티 값으로, false를 done 프로퍼티 값으로 갖는 이터레이터 리절트 객체를 리턴
    // return 메서드를 호출하면 인수로 전달받은 값을 value 프로퍼티 값으로, true를 done프로퍼티 값으로 갖는 이터레이터 리절트 객체 리턴
    function* genFunc() {
        try {
            yield 1;
            yield 2;
            yield 3;
        } catch(e) {
            console.log(e);
        }
    }
    const g = genFunc();
    console.log(g.next); // {value: 1, done: false}
    console.log(g.return('end')); // {value: 'end', done: true}

    // next를 호출하면 yield 표현식 까지 실행되고 일시중지됨 이때 함수의 제어권이 호출자에게로 양도된다
}

{ // async, await(ES8)
    // 제너레이터보다 간단하고 가독성 좋게 비동기 처리를 동기 처리처럼 동작하도록 구현할 수 있는 async/await가 도입되었다
    // await 키워드는 반드시 async함수 내부에서 사용해야함 async함수는 언제나 Promise를 리턴
    // await 키워드는 Promise가 settled가 될 때까지 대기하다가 settled상태가되면 Promise가 resolve한 처리결과를 리턴함
    // 반드시 Promise객체 앞에서 사용해야함
    const getGitUser = async id=> {
        // fetch의 결과값이 올때까지 기다림
        // 비동기를 동기처럼 수행함
        const res = await fetch(`https://api.github.com/users/${id}`);
        const user = await res.json();
        console.log(user.name);

        // try-catch문을 통해 에러를 잡을 수 있다
        // try-catch를 쓰지 않는다면 async 함수는 발생한 에러를 reject하는 Promise를 리턴함
        // 
    };
    getGitUser('aa');
}

// 정리
// 비동기 처리를 동기처럼 처리할 수 있는게 제너레이터함수인데 
// 코드가 복잡해지고 가독성도 좋지않아 ES8에서 async/await가 등장했다
// async는 언제나 Promise를 return하고
// await는 async 함수내에서만 사용가능하며 Promise객체 앞에서 사용해야한다
