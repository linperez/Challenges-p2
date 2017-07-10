function underToCamel(underName){
  var foundUnder = false;
  var camelCaseOutput="";
  for(var i = 0; i < underName.length; i++){
   if(underName[i]=== "_"){ 
     foundUnder = true;
    }else{
      if(foundUnder){
        camelCaseOutput +=underName[i].toUpperCase();
        foundUnder = false;
      }else{
        camelCaseOutput += underName[i];
      }
    }
  }
  return camelCaseOutput;
}


underToCamel("income_tax");