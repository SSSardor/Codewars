// complete the function
function solution(string) {
    var res=""
    for(i=0;i<string.length;i++){
      if(string[i]==string[i].toUpperCase()){
        res+=" "+string[i]
      }else{
        res+=string[i]
      }
    }
    return res
      
  }