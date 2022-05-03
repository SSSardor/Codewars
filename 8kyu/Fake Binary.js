function fakeBin(x){
    var res=""
    var a=x.split("")
    for(i=0;i<a.length;i++){
      if(+a[i]<5){
        res+="0"
      }else{
        res+="1"
      }
    }
    return res
  
  }