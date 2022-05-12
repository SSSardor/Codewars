function removeEveryOther(arr){
    //your code here
    var a=[]
    for(i=0;i<arr.length;i=i+2){
      a.push(arr[i])
    }
    return a
  }