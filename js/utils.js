function getCircle(x0,y0,r,nrPoints)
{
  for(var i = 0; i < nrPoints; i++) {
      var x = x0 + r * cos(2 * PI * i/ nrPoints);
      var y = y0 + r * sin(2 * PI * i / nrPoints);
      append(pointArrayX,x);
      append(pointArrayY,y);

      append(intersectX,x);
      append(intersectY,y);
    }
}


function getTriangle(x0, y0, r, nrPoints)
{
  var vertsX = [];
  var vertsY = [];

  // --- compute the 3 triangle vertices ---
  for (var i = 0; i < 3; i++) {
      var angle = 2 * PI * i / 3 - PI/2; // point up
      vertsX[i] = x0 + r * cos(angle);
      vertsY[i] = y0 + r * sin(angle);
  }

  var ptsPerEdge = nrPoints / 3;

  // --- distribute points along edges ---
  for (var e = 0; e < 3; e++) {

      var x1 = vertsX[e];
      var y1 = vertsY[e];

      var x2 = vertsX[(e+1) % 3];
      var y2 = vertsY[(e+1) % 3];

      for (var j = 0; j < ptsPerEdge; j++) {

          var t = j / ptsPerEdge;  // 0 → 1 along edge

          var x = x1 + (x2 - x1) * t;
          var y = y1 + (y2 - y1) * t;

          append(pointArrayXtriangle, x);
          append(pointArrayYtriangle, y);

          append(intersectXtriangle, x);
          append(intersectYtriangle, y);
      }
  }
}






function getM(x1,y1,x2,y2){
  if (x2 != x1){
    return (y2 - y1)/(x2 - x1)
  }
  else{
    return (y2 - y1)/0.000000001
  }
}
function getN(x1,y1,x2,y2){

  if (x2 != x1){
    return y1 - (x1*(y2 - y1)/(x2 - x1))
  }
  else{
    return y1 - (x1*(y2 - y1)/0.00000001)
  }
}

function displayNails(arrayX,arrayY)
{
  for(var i = 0; i < arrayX.length; i++){
    stroke('red');
    point(arrayX[i],arrayY[i]);
  }
}

function findCircleLineIntersections(r, h, k, m, n,item) {
    var a = 1 + sq(m);
    var b = -h * 2 + (m * (n - k)) * 2;
    var c = sq(h) + sq(n - k) - sq(r);
    var intersection;
    var d = sq(b) - 4 * a * c;
    if (d >= 0) {
        if (item <items/4 || item > 3*items/4){
          intersection = (-b + sqrt(sq(b) - 4 * a * c)) / (2 * a);
        }
        else{
          intersection = (-b - sqrt(sq(b) - 4 * a * c)) / (2 * a);
        }
        return intersection;
    }
    return width/2;
}

function findElipticalCircle(){
  for(var i = 0; i < items; i++) {
      m = getM(x0,y0,pointArrayX[i],pointArrayY[i]);
      n = getN(x0,y0,pointArrayX[i],pointArrayY[i]);
      x00 = findCircleLineIntersections(rmare,x0Mare,y0Mare,m,n,i);
      if (i !=items/4 && i!=3*items/4){
        append(intersectX,x00);
        append(intersectY,m*x00 + n);
      }
      if (i == items/4){
        append(intersectX,x0);
        append(intersectY,0);
      }
      if (i == 3*items/4){
        append(intersectX,x0);
        append(intersectY,0);
      }
  }
  delta1 =(intersectY[items/4 + 1] + intersectY[items/4 - 1])/2;
  delta2 = (intersectY[3*items/4 + 1] + intersectY[3*items/4 - 1])/2;
  intersectY[items/4] = delta1 + 1/300*intersectY[items/4 + 1];
  intersectY[3*items/4] = delta2 - 1/300*intersectY[3*items/4 + 1];
}

function calculateMidValues(){
    let val = sq(rmare^2 - (width/2)^2)+y0Mare

     dist = [y0Mare + val,y0Mare - val]
     console.log(dist)
     return dist
}


// function keyTyped() {
//   if (key === 's') {
//     saveCanvas('myCanvas', 'jpg');
//   }
// }
