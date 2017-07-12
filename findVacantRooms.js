var hotel = ['vacant', 'occupied',  'occpied', 'vacant','vacant'];

function findVacantRooms(hotel){
  var arr = [];
  for (var index=0; index < hotel.length; index++){
  if(hotel[index]==='vacant'){
    arr.push(index);
  }
}
return arr;
}
findVacantRooms(hotel);