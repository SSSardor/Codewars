function solution (roman) {
    var res = 0;
    for (i = 0; i < roman.length; i++) {
      switch (roman[i]) {
        case 'I':
          {
            if (
              roman[i + 1] === 'V' ||
              roman[i + 1] === 'X' ||
              roman[i + 1] === 'L' ||
              roman[i + 1] === 'C'
            ) {
              res--;
            } else {
              res = res + 1;
            }
          }
          break;
        case 'V':
          {
            if (
              roman[i + 1] === 'X' ||
              roman[i + 1] === 'L' ||
              roman[i + 1] === 'C'
            ) {
              res = res - 5;
            } else {
              res = res + 5;
            }
          }
          break;
        case 'X':
          {
            {
              if (roman[i + 1] === 'L' || roman[i + 1] === 'C') {
                res = res - 10;
              } else {
                res = res + 10;
              }
            }
          }
          break;
        case 'L':
          {
            {
              if (roman[i + 1] === 'C') {
                res = res - 50;
              } else {
                res = res + 50;
              }
            }
          }
          break;
        case 'C': {
            {
                if(roman[i+1]==="D" || roman[i+1]==="M") {
                    res=res-100;
                }else{
                    res=res+100
                }
            }
        
        }
        break;
        case 'D': {
            {
                if(roman[i+1]==="M") {
                    res=res-500
                }else{
                    res=res+500
                }
            }
        
        }
        break;
        case "M":{
            {
                res=res+1000
            }

        }
        break
        default:
          console.log('Notugri kiritilgan');
      }
    }
    return res;
}