/**
 * ㅡㅡ핵심키워드
 * Module
 * 
 * ㅡㅡ개요
 */

// 어플리케이션을 구성하는 개별적요소로 재사용 가능한 코드조각을 말함
// 보통 파일 단위로 분리함, 재사용 되어야 의미가 있기 때문에 모듈은 공개가 필요한 자산에 한정해서 명시적으로 선택적 공개가 가능함 이를 export라 함
// export된 모듈은 재사용이 가능함, 모듈이 export한 자산중 일부 또는 전체를 선택해 자신의 스코프내로 불러들여 재사용하는것을 import라고함
{ // export
    // 하나하나 export
    // export function a() {}

    // 한번에 export
    // export {pi, function, object}

    // 딱 하나 export
    // export default x=>x;
}

{ // import
    // 하나하나 받기
    // import {pi, function, object} from app.js

    // 하나하나 받고 이름 변경
    // import {pi as P, function as F, object as O} from app.js

    // 한번에 받기
    // import * as entire from app.js

    // default키워드로 export했다면 임의의 이름으로 import함
    // import temp from app.js
}