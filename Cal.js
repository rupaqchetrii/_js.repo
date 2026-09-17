function caltotal(a) {
  let total = 0;
  for (let i = 0; i < a.length; i++) {
    total += a[i];
  }
  return total;
}
function getstatus(total,target=100) {
    if(total>=target){
        return"target reached"
    }
    else{
        return"target not reached"
    }
}
let total = caltotal([72, 85, 90])
console.log(total)