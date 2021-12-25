function randomizePoints(x0,y0,r,items){
  //no random
  errorLevel = items;
  //random
  // errorLevel = 1000;


  getCircle(x0,y0,r,errorLevel);
  arrayX = pointArrayX;
  arrayY = pointArrayY;
  let randomNr = 0;

  for(var i = 0; i < errorLevel - items; i++){
    randomNr = Math.floor(Math.random()*(errorLevel - i));
    rest = arrayX.splice(randomNr);
    rest.shift();
    arrayX = arrayX.concat(rest);
    rest = [];
    rest = arrayY.splice(randomNr);
    rest.shift();
    arrayY = arrayY.concat(rest);
  }
  // console.log(arrayX,arrayY);
  pointArrayX = arrayX;
  pointArrayY = arrayY;
}
