/*function printname(firstname){
    var myname = "jisu";
    return myname + " " + firstname;
}

console.log(printname);
console.log(printname()); // default value = undefined임을 알 수 있음. 실행오류 발생 x

console.log(printname("crong", "jisu")); // 인자가 추가로 입력되더라도 함수 실행에 오류가 발생하지는 않음.
*/

function printname(firstname){
    var result = inner();
    console.log("name is " + result);

    var inner = function(){
        return "inner value";
    }
    // make error

    function inner(){
        return "inner value"
    }
    // 함수를 선언하는 순간 함수로 받아들임 오류 x
    // 이러한 현상이 발생하는 이유 : 함수, 변수같은 값을 컴파일러가 먼저 읽는 호이스팅이 발생하는 언어이기 때문.
    console.log(typeof(inner));
}

printname();
