/**
 * ㅡㅡ핵심키워드
 * 에러핸들링, try-catch-finally, Error, throw
 * 
 * ㅡㅡ개요
 */

// try-catch-finally

{ // Error 객체
    try {
        throw new Error('test');
    } catch(e) {
        console.log(e);
    }
}