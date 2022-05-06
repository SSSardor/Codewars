function digPow(n, p){
    var s=[]
    var a=n.toString().split("")
    for (let i = 0; i < a.length; i++) {
      s.push((+a[i])**p)
      p++
          
    }
    var l=s.reduce((a,b)=>a+b,0)
    if((l%n==0)){
      return l/n
    }else{
      return -1
    }
    
  }