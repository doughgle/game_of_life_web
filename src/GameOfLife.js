myapp = {};

myapp.World = function(liveCellCoordinates) {
	this.liveCellCoordinates = liveCellCoordinates;
};

myapp.World.prototype.tick = function() {
  var newLiveCellCoordinates = new Array();
  console.log(this.liveCellCoordinates);
  
  for(var cell in this.liveCellCoordinates) {
    var liveNeighbours = this.countLiveNeighbours(this.liveCellCoordinates[cell]);
    if(liveNeighbours === 2)
    	newLiveCellCoordinates.push(this.liveCellCoordinates[cell]);
  }
      
//  if(this.liveCellCoordinates.length === 3) {
//    return [0,0];
//  }
  console.log(newLiveCellCoordinates);
  this.liveCellCoordinates = newLiveCellCoordinates;
  return this.liveCellCoordinates;
};

myapp.World.prototype.countLiveNeighbours = function(cell) {
	console.log(cell);
	x = cell[0];
	y = cell[1];
	topLeft =   	[(x-1), (y-1)];
	topMiddle = 	[(x),   (y-1)];
	topRight =  	[(x+1), (y-1)];
	left = 			[(x-1), (y)];
	right =			[(x+1), (y)];
	bottomleft = 	[(x-1), (y+1)];
	bottomMiddle = 	[(x),   (y+1)];
	bottomRight = 	[(x+1), (y+1)];

	neighbourCells = [topLeft, topMiddle,  topRight, 
	                  left,    /* cell, */ right, 
	                  bottomleft, bottomMiddle, bottomRight];
	
	var liveNeighbours = 0;
	if(this.isCellAlive(topLeft)) liveNeighbours++;
	if(this.isCellAlive(topMiddle)) liveNeighbours++;
	if(this.isCellAlive(topRight)) liveNeighbours++;
	if(this.isCellAlive(left)) liveNeighbours++;
	if(this.isCellAlive(right)) liveNeighbours++;
	if(this.isCellAlive(bottomleft)) liveNeighbours++;
	if(this.isCellAlive(bottomMiddle)) liveNeighbours++;
	if(this.isCellAlive(bottomRight)) liveNeighbours++;
	console.log(liveNeighbours);
	return liveNeighbours;
};

myapp.World.prototype.isCellAlive = function(cell) {
	for(var match in this.liveCellCoordinates) {
		if(cell === this.liveCellCoordinates[match])
		{
			return true;
		}
	};
	return false;
};