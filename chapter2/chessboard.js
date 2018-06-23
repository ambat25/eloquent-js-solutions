let size = 8, tempEven ='', tempOdd = '';
for(let i = 0; i < size; i++){
  if(i%2 == 0){
    tempEven +=' ';
  	tempOdd += '#';
  }
  else{
    tempEven +='#';
  	tempOdd += ' ';    
  }
}
for(let i = 0; i < size; i++){
  if(i%2 == 0){
    console.log(tempEven);
  }
  else{
    console.log(tempOdd);
  }
}