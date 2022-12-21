const validator = {

  maskify: function(text) {
    const cardNumb = text.length;
    let mask = "";
    if(cardNumb > 4){
      for(let i=0; i < cardNumb -4; i ++){
        mask = mask + "#";
      }
      const lastFour = text.slice(-4);
      const masked = mask + lastFour;
      return masked;
    }
    else{
      return text;
    }
  },

  isValid: function(vCard) {
    const cardNumb = vCard.toString().split("").reverse();
    const other = [];

    cardNumb.forEach((e,i) => {
      
      if(i%2 !==0){
        const evenNum = e*2;
        if(evenNum >= 10){
          other.push(evenNum.toString().split("").reduce((a,b) => parseInt(a) + parseInt(b)));
        }
        else{
          other.push(evenNum);
        }
      }
      else{
        other.push(parseInt(e));
      }
    });
    const otherSum = other.reduce((a,b) => a + b);{
      if (otherSum %10 === 0){
        return true;
      }
      else{
        return false;
      }
    }
  }
}

export default validator;
