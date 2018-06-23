function countChar(str,chr){
    if(str && chr){
     let counter = 0;
     for(let i = 0; i < str.length; i++){
      if(str[i] === chr) counter++;
     }
      return counter;
    }
    return 'check your inputs'
  }
  const countBs = function(str){
    return countChar(str,'B');
  }
  
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerl1k",''));
  // → 4