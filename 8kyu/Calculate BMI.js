function bmi(weight, height) {
    var a=(weight/(height**2))
    if(a<18.5){
      return "Underweight"
    }
     else if( a<=25.0){
      return "Normal"
    }
    else if(a<=30.0){
      return "Overweight"
    }else if(a>30){
      return "Obese"
    }
}