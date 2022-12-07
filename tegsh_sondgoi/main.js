//task1,2 
const arr=[], arr_odd=[]
function arr_even(a,b){
    
    for(i = Math.min(a,b); i <= Math.max(a,b); i++){
        if(i% 2 == 0){
            arr.push(i)
        } else {
            arr_odd.push(i)
        }
    }
}
let a1=prompt("yamar negen too oruulna uu");
let b1=prompt("yamar negen too oruulna uu");

arr_even(Number(a1),Number(b1))
console.log(arr_odd);
console.log(arr);
