function alphabetPosition(text) {
    var arr=[]
    var str="abcdefghijklmnopqrstuvwxyz"
    console.log(text.match(/[a-z]/gi));
   if(text.match(/[a-z]/gi)==null){
     return ""
   }else{
    var suz= text.split(" ").join("").match(/[a-z]/gi).join("").toLowerCase()
    for (let i = 0; i < suz.length; i++) {
        arr.push(str.indexOf(suz[i])+1)
    }
   }
   
    return arr.join(" ")
  }
  console.log(alphabetPosition("234^&**(*^%^%%"));