/**
 * ㅡㅡ핵심키워드
 * 스프레드 문법, Rest 파라미터와의 구분
 * 
 * ㅡㅡ개요
 * 이터러블에 한정적으로 사용할 수 있다
 */

// 스프레드 문법 ...은 하나로 뭉쳐 있는 여러 값들의 집합을 펼쳐서 개별적인 값들의 목록을 만든다
// 이터러블에만 쓸 수 있다
// 스프레드 문법의 결과는 값이 아님, 즉 ...은 연산자가 아님 => 변수할당이 불가능함
console.log(...[1,2,3]); // 1 2 3
console.log(...'hello'); // h e l l o
console.log(...new Map(['a', '1'], ['b', '2'])); // ['a', '1'] ['b', '2']
console.log(...{a:1, b:2}); // TypeError: Found non-callable @@iterable

{ // 그럼 스프레드는 어디에 사용해야할까
    // -> 쉼표로 구분한 값의 목록을 사용하는 문맥에서만 사용할 수 있다

    // 1. 함수 호출문의 인수 목록
    const arr = [1,2,3,4];
    const max1 = Math.max(arr); // NaN Math.max의 인수는 쉼표로 구분해야한다 < 배열을 넣으며 안됨
    const max2 = Math.max(...arr); // 4

    // 2. 배열 리터럴의 요소 목록
    // 2-1. concat
    const a1 = [1,2,3,4].concat([3,4,5,6]);
    const a2 = [...[1,2,3,4], ...[3,4,5,6]];
    // 2-2. splice
    var arr1 = [1,4];
    var arr2 = [2,3];
    arr1.splice(1,0, arr2); // [1,[2,3],4];
    // 이런식으로 배열을 해체해야할 때
    const arr3 = [1,4];
    const arr4 = [2,3];
    arr3.splice(1,0, ...arr4);

    // 3. 객체 리터럴의 프로퍼티 목록
    var o = [1,2];
    var c = origin.slice();
    var o1 = [1,2];
    var c1 = [...o1];

    // 이터러블을 배열로 변환 
    function sum() {
        var args = Array.prototype.slice.call(arguments);
        return args.reduce(function(pre, cur) {
            return pre + cur;
        }, 0);
    }

    function sum2() {
        return [...arguments].reduce(function(pre, cur) {
            return pre + cur;
        }, 0);
    }

    // 사실 스프레드 문법보단 Rest파라미터를 쓰는게 좋다
    const sum3 = (...rest) => {
        rest.reduce((pre, cur) => {
            return pre + cur;
        }, 0);
    }

}

/**
 * 주의
 * Rest 파리미터랑 혼동할 수 있음
 * Rest 파라미터는 함수의 인수로 사용해서 여러개의 나뉜 인수들을 하나의 배열로 만들어 주는 것
 * function a(param1, ...params) {
 *     //여기서 params가 param1을 제외한 나머지 인수를 모아놓은 배열임
 * }
 * 
 * Rest는 나뉜걸 하나의 배열로 합치는 개념이고
 * 스프레드는 배열로 합쳐진걸 하나하나 나누는 서로 반대의 개념
 */