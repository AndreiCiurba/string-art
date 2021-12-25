//point arrays
let pointArrayX = [];
let pointArrayY = [];
let intersectX = [];
let intersectY = [];

let buffer = 1;

let width = 800;
let height = 800;
let items = 49;
let r = 300;
let rmare = 2*r;



let x0 = width/2;
let y0 = height/2;
let x0Mare = width/2 + r;
let y0Mare = height/2;

let stringColor = "#0076d1";
let backgroundColor = "#faefbe";

function refreshValues() {
  width = +document.getElementById("width").value;
  height = +document.getElementById("height").value;
  items  = +document.getElementById("nails").value;
  radius = +document.getElementById("radius").value;
  stringColor = String(document.getElementById("inputColor1").value);
  backgroundColor = String(document.getElementById("inputColor2").value);
  console.log(color);
  recalculateCenters();
  setup();
}

function recalculateCenters(){
  x0 = width/2;
  y0 = height/2;
  x0Mare = width/2 + r;
  y0Mare = height/2;
  r = radius;
  rmare = 2*radius;

  //empty arrays
  pointArrayX = [];
  pointArrayY = [];
  intersectX = [];
  intersectY = [];
}




function setup() {

  createCanvas(width, height);
  // getCircle(x0,y0,r,items);
  // findElipticalCircle();
  randomizePoints(x0,y0,r,items);
  // console.log(pointArrayX,pointArrayY);
}


function draw() {
  //display Nails
  background("#d9d382");
  strokeWeight(7);
  displayNails(pointArrayX,pointArrayY);

  //display Lines

  strokeWeight(0.1);
  //
  // stroke("#003d99");
  // algorithm2x(pointArrayX,pointArrayY, items, -1);
  stroke("black");
  algorithm2x(pointArrayX,pointArrayY, items, 0);
  // stroke("#003d99");
  // algorithm2x(pointArrayX,pointArrayY, items, 1);

  //
  // stroke("black");
  // algorithm2x(pointArrayX,pointArrayY, items, 20);
  // stroke("#003d99");
  // algorithm2x(pointArrayX,pointArrayY, items, 21);

  // stroke("black");
  // algorithm2x(pointArrayX,pointArrayY, items, 40);
  // stroke("#003d99");
  // algorithm2x(pointArrayX,pointArrayY, items, 41);


  // stroke("black");
  // algorithm3x(pointArrayX,pointArrayY, items);
  // stroke("red");
  // algorithmNx(pointArrayX,pointArrayY, items,4);


}
