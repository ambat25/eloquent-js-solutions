function min(x,y = Infinity){
 if(!isNaN(x)){
 	return Math.min(x,y) 
 }
 return "having issues to values passed, make sure you pass a value";
}
console.log(min(0,10));
// → 0
console.log(min(0, -10));
// → -10
console.log(min());
//having issues to values passed, make sure you pass a value
console.log(min(2));
//2