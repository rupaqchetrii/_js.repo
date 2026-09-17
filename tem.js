function temp_checker(x){
 if(x<20)
 {
    return "cold";
 }
 else if(x>=20 && x<30)
 {
    return "warm";
 }
 else{
    return "hot";
 }
} 
let result=temp_checker(25);
console.log(result);   