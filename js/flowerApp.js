var redRoses = new app.singleFlower({
  name : "Red Roses",
  price : 39.95,
  color : "Red",
  img : "images/redRoses.jpg",
  link : "redRose"
});

var rainbowRoses = new app.singleFlower({
  name : "Rainbow Roses",
  price : 29.95,
  color : "Orange",
  link : "rainbowRose"    
});

var heirloomRoses = new app.singleFlower({
  name : "Hairloom Roses",
  price : 19.95,
  color : "Orange",
  img : "images/heirloomRoses.jpg",
  link : "heirloomRose"
});



//var flowerGroup = new app.FlowersCollection([]);

/*
console.log(heirloomRoses.toJSON());
console.log(rainbowRoses.toJSON());
console.log(redRoses.toJSON());
*/

//rainbowRoses.set('price', 20);


var flowerGroup = new app.FlowersCollection([
  redRoses, rainbowRoses
  
]);




console.log(flowerGroup.toJSON());
flowerGroup.add(heirloomRoses);
console.log(flowerGroup.toJSON());
flowerGroup.remove(rainbowRoses);
console.log(flowerGroup.toJSON());