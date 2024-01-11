var a = ['a','b','c'];
a.pp = 'd';
for(var obj of a){
    console.log(obj);
}
for(var obj in a){
    console.log(obj);
}
console.log(a.pp)
//for ~ of는 해당하는 값을, for ~ in은 index와 object의 name에 해당하는 값을 출력한다.