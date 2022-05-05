function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    var a=classPoints.reduce((a,b)=>a+b)/classPoints.length
    if(a<yourPoints){
      return true
    }else{
      return false
    }
  }
  