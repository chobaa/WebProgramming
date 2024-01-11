// 함수의 호출.
function printName(firstname) {
    var myname = "jisu";
    return myname + " ," +  firstname;
}

function run(firstname) {
    firstname = firstname || "Youn";
    var result = printName(firstname);
    console.log(result);
 }

 run("KIM");
 run(); // 함수의 호출 순서를 간략하게 알아볼 수 있음.
 // 함수의 호출 순서를 callstack이라고 부르며, debug or 조사식을 활용하다 보면 자세하게 이해할 수 있음.