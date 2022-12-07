//task1,2  
function fullName(name1,name2){
    console.log(name1,"ovogtoi", name2);
}
let name_last=prompt("Ta ovog oo oruulna uu");
let name_first=prompt("Ta ner ee oruulna uu");
 fullName(name_last,name_first);

//task3 
function sum(a,b){
    return Number(a)+Number(b);
}

//task4 
function area(a,b){
    return a*b;
}

//task5 
function perimeter(a,b){
    return (Number(a)+Number(b))*2;
}

let a1=prompt("a toog oruulna uu");
let b1=prompt("b toog oruulna uu");
console.log("a bolon b toonii niilber bol", sum(a1,b1));
console.log("a bolon b taltai tegsh ontsogtin talbai bol", area(a1,b1));
console.log("a bolon b taltai tegsh ontsogtin perimeter bol", perimeter(a1,b1));
