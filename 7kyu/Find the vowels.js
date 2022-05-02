function vowelIndices(word){
    var res=[]
    var l="aouieAEIOUYy"
    for (let i = 0; i < word.length; i++) {
        if(l.includes(word[i]) ){
            res.push(i+1)
        }
        
    }
    return res

  }