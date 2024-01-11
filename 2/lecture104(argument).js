function a(){
    console.log(arguments);
    for(var i=0; i<arguments.length; i++){
        console.log(arguments[i]);
    }
}
a(1,2,3,"jisu"); // arguments는 array와 비슷하고, 여러가지 type을 담을 수 있음.

var getname = ["jisu", "crong", "soso"];
var getname2 = getname.map((name) => name.length);
//map은 기존의 배열을 이용해 새롭게 만든 함수를 return하는 기능, arrow function도 함께 테스트해보았음.
console.log(getname2);
