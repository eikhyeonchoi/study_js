/**
 * ㅡㅡ핵심키워드
 * set, map
 * 
 * ㅡㅡ개요
 */

{ // Set
    // set 객체는 중복되지 않는 유일한 값들의 집합임
    // 순서의미 없고 중복안되고 인덱스로 요소접근 불가함
    // 수학적 집합을 구현하기 위함

    // set 생성자 함수는 이터러블 객체를 인수로 전달받고 객체를 생성함
    // 중복값은 객체에 들어가지 않는다
    
    // 1. 중복요소 제거 
    const array = [1,2,3,4,55,1,1,2,35];
    const unique = (array) => [...new Set(array)];

    // 2. 요소 갯수 확인 Set.prototype.size
    const {size} = new Set([1,2,3,4,5,6,7,8,9]);
    console.log(size); // 9
    
    // 3. 요소 추가 Set.prototype.add
    const set = new Set();
    set.add(1); // add는 set객체를 리턴함
    set.add(1).add(2).add(3); // 연속 호출이 가능, 1은 이미 있으니 무시됨

    // 4. 요소 존재확인
    set.has(1); // true

    // 5. 요소 삭제 Set.prototype.delete / Set.prototype.clear
    // 존재하지 않은 값을 삭제해도 에러발생하지 않음
    // 객체를 리턴하는게 아닌 불리언을 리턴함 고로 연속 add처럼 연속적인 선언이 불가능함
    // 요소 모두 삭제는 clear() (clear는 undefined를 반환함)
    set.delete('값'); // 키가 없으므로 값 자체를 전달해야함
    set.clear(); // undefined

    // 6. 요소 순회 Set.prototype.forEach
    // 첫 파라미터: 요소 값
    // 두 번째 파라미터: 요소 값
    // 세 번째 파라미터: set 그 자체
    // 첫째, 둘째 파라미터가 같은 이유는 Array.prototype.forEach와 인터페이스 통일하기위함임
    set.forEach(function() {
    });

    // Set 객체도 이터러블이기 때문에 for...of 및 스프레드, 디스트럭처링할당이 가능함
}

{ // Map
    // 키와 값의 쌍으로 이루어진 컬렉션, 객체와 유사함
    // 이터러블임
    
    // 생성자함수는 이터러블을 인수로 전달받아 객체를 생성함 이때 이 이터러블은 키와 값의 쌍으로 이루어진 요소로 구성되어야함
    // 키가 같으면 덮어씌여진다 즉 중복값이 없다
    const m1 = new Map([['key1', 'value1'], ['key2', 'value2']]);

    // 2. 요소 갯수 확인 Map.prototype.size
    const {size} = m1;
    console.log(size); // 9

    // 3. 요소 추가 Map.prototype.set(키, 값)
    m1.set('key2', 'value2'); // set은 map객체를 리턴함
    m1.set('key2', 'value2').set('key2', 'value2').set('key2', 'value2'); // 연속 호출 가능

    // 4. 요소 취득 Map.prototype.get(키)
    m1.get('key'); // 있으면 값, 없으면 undefined 리턴

    // 5. 요소 존재여부 Map.prototype.has(키)
    m1.has('key'); // 불리언 리턴

    // 6. 요소 삭제 Map.prototype.delete(키) / Map.prototype.clear()
    // 존재하지 않은 값을 삭제해도 에러발생하지 않음
    // 객체를 리턴하는게 아닌 불리언을 리턴함 고로 연속 add처럼 연속적인 선언이 불가능함
    // 요소 모두 삭제는 clear() (clear는 undefined를 반환함)
    m1.delete('key'); // 불리언값 반환
    m1.clear(); // undefined

    // 6. 요소 순회 Map.prototype.forEach
    // 첫 파라미터: 요소 값
    // 두 번째 파라미터: 요소 값
    // 세 번째 파라미터: set 그 자체
    // 첫째, 둘째 파라미터가 같은 이유는 Array.prototype.forEach와 인터페이스 통일하기위함임
    m1.forEach(function() {
    });

    // Map.prototype.keys(): Map객체에서 요소키를 값으로 갖는 이터러블이면서 동시에 이터레이터인 객체를 반환
    // Map.prototype.value(): Map객체에서 요소값를 값으로 갖는 이터러블이면서 동시에 이터레이터인 객체를 반환
    // Map.prototype.entries(): Map객체에서 요소키,값를 값으로 갖는 이터러블이면서 동시에 이터레이터인 객체를 반환
}
