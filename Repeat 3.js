function repeat(str, num){
  var finalString = "";
  for (num;num >0; num--){
    finalString +=str;
  }
  return finalString;
}
repeat ("yo",4);