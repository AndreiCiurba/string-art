//point arrays
let pointArrayX = [];
let pointArrayY = [];
let intersectX = [];
let intersectY = [];

let buffer = 1;

let width = 800;
let height = 800;
let items = 64;
let r = 100   ;
let rmare = 2*r;
let totalLines = 1024;



let x0 = width/2;
let y0 = height/2;
let x0Mare = width/2 + r;
let y0Mare = height/2;

let stringColor = "#0076d1";
let backgroundColor = "#efdcba";

function refreshValues() {
  width = +document.getElementById("width").value;
  height = +document.getElementById("height").value;
  items  = +document.getElementById("nails").value;
  radius = +document.getElementById("radius").value;
  stringColor = String(document.getElementById("inputColor1").value);
  backgroundColor = String(document.getElementById("inputColor2").value);
  totalLines = +document.getElementById("linesTotal").value;
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


//TODO add timeout function

function setup() {
  createCanvas(width, height);

  //// TODO: add eliptical faature by multiplying the array refreshValues
  //with a lambda, either vertical, either horizontal


  getCircle(x0,y0,r,items);
  // findElipticalCircle();
  // randomizePoints(x0,y0,r,items);
  pointArrayX = [];
  pointArrayY = [];
  pointArrayX = intersectX;
  pointArrayY = intersectY;
}


function draw() {
  //display Nails
  background("#ddeedd");
  strokeWeight(7);

  // displayNails(pointArrayX,pointArrayY); 


  //display Lines

  strokeWeight(0.1);
  //
  // stroke("blue");
  // algorithm2x(pointArrayX,pointArrayY, items, -1, 5);
  // stroke("red");
  // algorithm2x(pointArrayX,pointArrayY, items, 0);




  stroke("#003d99");
  algorithm2x(pointArrayX,pointArrayY, items, 1, 1, totalLines);

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
  stroke("#122334");
  strokeWeight(0.1)
  // algorithmNx(pointArrayX,pointArrayY, items,500, 2048);


}
