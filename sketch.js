//point arrays
let pointArrayX = [];
let pointArrayY = [];
let intersectX = [];
let intersectY = [];

let buffer = 1;

let width = 800;
let height = 800;
let items = 48;

let r = 300;
let rmare = 2*r;



let x0 = width/2;
let y0 = height/2;
let x0Mare = width/2 + r;
let y0Mare = height/2;

let stringColor = "#e4e641";
let backgroundColor = "#111111";

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
  randomizePoints(x0,y0,r, items);
  // console.log(pointArrayX,pointArrayY);
}


function draw() {
  //display Nails
  background(backgroundColor);
  strokeWeight(7);
  displayNails(pointArrayX,pointArrayY);

  //display Lines
  console.log(color)
  stroke(stringColor);
  strokeWeight(0.06);
  algorithmNx(pointArrayX,pointArrayY, items,2);


}
