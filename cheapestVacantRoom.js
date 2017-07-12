function findCheapestVacantRoom(arr){
  var cheapest;
  var cheapestRoom = [];
  for(var index = 0; index < arr.length; index++){
    if(arr[index]!=="occupied"){
      console.log(arr[index]);
      if(cheapest===undefined || arr[index] < cheapest){
        cheapest = arr[index];
       // cheapestRoom.push(index,cheapest);
      }
  }
}
if(cheapest){
cheapestRoom.push(arr.indexOf(cheapest),cheapest);
return cheapestRoom;
}else{
  return cheapeastRoom;
  
  
}
}

findCheapestVacantRoom([250, "occupied", 700, 175, "occupied"]);