
function findMultiples(integer, limit) {
    var res=[];
    for (let i = integer; i <= limit; i=i+integer) {
        res.push(i)
        
    }
    //your code here
    return res
    
  }