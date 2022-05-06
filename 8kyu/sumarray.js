function sumArray(array) {
    if(array==null || array==0 || array.length==1){
      return 0
    }else{
      return array.sort((a,b)=>a-b).reduce((a,b)=>a+b)-(array.sort((a,b)=>a-b)[0]+array.sort((a,b)=>a-b)[array.length-1])
      
    }
  
  }