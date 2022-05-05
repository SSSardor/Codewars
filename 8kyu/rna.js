function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    var res="";
    for(i=0;i<dna.length;i++){
      if(dna[i]=="T"){
        res+="U"
      }else{
        res+=dna[i]
      }
    }
    return res
  }