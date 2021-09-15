/**
 * ㅡㅡ핵심키워드
 * 디스트럭처링할당
 * 
 * ㅡㅡ개요
 * 이터러블또는 객체를 파괴해 1개 이상 변수에 할당하는 것
 */

{ // 배열 디스트럭처링 할당
    // 할당대상이 이터러블이어야 함
    // 순서대로 할당됨 기준은 당연히 인덱스임
    // 기본값을 지정할 수 있지만 할당값이 우선임
    const arr = [1,2,3,4];
    const [one,two,three,four=33] = arr;
    console.log(four);

    // 쉽게 생각해 배열의 요소를 하나하나 할당하는게 아니라 
    // 디스트럭처링 할당을 통해 한번에 하는것 
    // 아래처럼하면 너무 코드가 길다
    const a = arr[0];
    const b = arr[1];
    const c = arr[2];
}

{ // 객체 디스트럭처링 할당
    // 할당 기준은 키
    // 기본값 설정가능
    const user = {firstName: 'a', lastName: 'b'};
    const {firstName, lastName='defaultValue'} = user;
    const {firstName: newFirstName, lastName: newLastName='defaultValue'} = user;
}