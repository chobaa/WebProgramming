function run() {
    console.log("start");
    setTimeout(function() {
        var msg = "hello codesquad";
        console.log(msg);  //이 메시지는 즉시 실행되지 않습니다.
    }, 2000);
    console.log("end");
}

run();
console.log("this message sysout first");
// callback 함수라고 불리며, 비동기 함수의 특징은 동기적으로 실행되는 코드의 동작이 끝난 후 카운트가 시작됨.