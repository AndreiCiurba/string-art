function algorithm2x(arrayX,arrayY,items){
  p1=0;
  p2=0;
  startPos=0;
  startAdvance = 0;
  buffer = 0;
  numberOfAdvancedPositions = 1;
  for(var i = 0; i < 2400; i++){
    if (startAdvance == items){
        startAdvance = 0;
        startPos = (startPos + numberOfAdvancedPositions);
    }
    if (buffer >= items){
      buffer = 0;
      p1 = 0;
      p2 = 1;
    }
    else{
      if (2*buffer >= items){
        p1 = buffer;
        p2 = (2*buffer)%items;
      }
      else{
        p1 = buffer;
        p2 = 2*buffer;
      }
    }
    p1 = (startPos + p1)%items;
    p2 = (startPos + p2)%items;
    line(arrayX[p1],arrayY[p1],arrayX[p2],arrayY[p2]);
    line(arrayX[p1],arrayY[p1],arrayX[(p1 + 1)%items],arrayY[(p1 + 1)%items]);
    buffer = buffer+1;
    startAdvance = startAdvance + 1;
  }
}


function algorithm3x(arrayX,arrayY,items){
  p1=0;
  p2=0;
  startPos=0;
  startAdvance = 0;
  buffer = 0;
  numberOfAdvancedPositions = 1;
  for(var i = 0; i < 2400; i++){
    if (startAdvance == items){
        startAdvance = 0;
        startPos = (startPos + numberOfAdvancedPositions);
    }
    if (buffer >= items){
      buffer = 0;
      p1 = 0;
      p2 = 1;
    }
    else{
      if (3*buffer >= items){
        p1 = buffer;
        p2 = (3*buffer)%items;
      }
      else{
        p1 = buffer;
        p2 = 3*buffer;
      }
    }
    p1 = (startPos + p1)%items;
    p2 = (startPos + p2)%items;
    line(arrayX[p1],arrayY[p1],arrayX[p2],arrayY[p2]);
    line(arrayX[p1],arrayY[p1],arrayX[(p1 + 1)%items],arrayY[(p1 + 1)%items]);
    buffer = buffer+1;
    startAdvance = startAdvance + 1;
  }
}
function algorithmNx(arrayX,arrayY,items,n){
  p1=0;
  p2=0;
  startPos=0;
  startAdvance = 0;
  buffer = 0;
  numberOfAdvancedPositions = 1;
  for(var i = 0; i < 2400; i++){
    if (startAdvance == items){
        startAdvance = 0;
        startPos = (startPos + numberOfAdvancedPositions);
    }
    if (buffer >= items){
      buffer = 0;
      p1 = 0;
      p2 = 1;
    }
    else{
      if (n*buffer >= items){
        p1 = buffer;
        p2 = (n*buffer)%items;
      }
      else{
        p1 = buffer;
        p2 = 3*buffer;
      }
    }
    p1 = (startPos + p1)%items;
    p2 = (startPos + p2)%items;
    line(arrayX[p1],arrayY[p1],arrayX[p2],arrayY[p2]);
    line(arrayX[p1],arrayY[p1],arrayX[(p1 + 1)%items],arrayY[(p1 + 1)%items]);
    buffer = buffer+1;
    startAdvance = startAdvance + 1;
  }
}
