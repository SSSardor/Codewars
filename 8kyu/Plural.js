function plural(n) {
    if(n==0){
      return true
    }if(n==Infinity){
      return true
    }
    if(n.toString().length>1){
      return true
    }else{
      return false
    }
    
  }