module.exports = function toReadable (number) {
  let D=1000000;
  let R=4;
  let NumStr = ''
  if (number===0){NumStr='zero'} 
  let PartNum = 0; 
  while (PartNum!=0) {
    PartNum = Math.floor(number/D);
    R-=1;
    D = Math.floor(D/1000);
  }
  let Flag11 = false;
  
  for (let i = R; i>=1; i-- ){
    Flag11=false;
    let NumTMP = Math.floor(PartNum/100); //{выделение цифры сотен}
    switch (NumTMP) {
        case 1: NumStr +='one hundred '; break;
        case 2: NumStr +='two hundred '; break;
        case 3: NumStr +='three hundred '; break;
        case 4: NumStr +='four hundred '; break;
        case 5: NumStr +='five hundred '; break;
        case 6: NumStr +='six hundred '; break;
        case 7: NumStr +='seven hundred '; break;
        case 8: NumStr +='eight hundred '; break;
        case 9: NumStr +='nine hundred '; break;
    }
    NumTMP= Math.floor((PartNum%100)/10);// {выделение цифры десятков }
    switch (NumTMP) {
      case 1:{
        NumTMP= PartNum%100;
        switch (NumTMP) {
          case 10: NumStr +='ten '; break;
          case 11: NumStr +='eleven '; break;
          case 12: NumStr +='twelve '; break;
          case 13: NumStr +='thirteen '; break;
          case 14: NumStr +='fourteen '; break;
          case 15: NumStr +='fifteen '; break;
          case 16: NumStr +='sixteen '; break;
          case 17: NumStr +='seventeen '; break;
          case 18: NumStr +='eighteen '; break;
          case 19: NumStr +='nineteen '; break;
        }
        switch (i) {
          case 3: NumStr+='million '; break;
          case 2: NumStr+='thousand '; break;
        }
        Flag11 = true; 
        break;
      }        
      case 2: NumStr +='twenty '; break;
      case 3: NumStr +='thirty '; break;
      case 4: NumStr +='forty '; break;
      case 5: NumStr +='fifty '; break;
      case 6: NumStr +='sixty '; break;
      case 7: NumStr +='seventy '; break;
      case 8: NumStr +='eighty '; break;
      case 9: NumStr +='ninety '; break;
  }
  NumTMP= PartNum % 10; //{выделение цифры единиц}
  if  (!Flag11) {
    switch (NumTMP) {
      case 1: NumStr +='one'; break;
      case 2: NumStr +='two'; break;
      case 3: NumStr +='three'; break;
      case 4: NumStr +='four'; break;
      case 5: NumStr +='five'; break;
      case 6: NumStr +='six'; break;
      case 7: NumStr +='seven'; break;
      case 8: NumStr +='eight'; break;
      case 9: NumStr +='nine'; break;
    }
  }
  if (i>1) {
    PartNum = Math.floor((number % (D*1000)) / D);
    D = Math.floor(D /1000);
  }
  }

return NumStr.trim()
}