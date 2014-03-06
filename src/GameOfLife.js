myapp = {};

myapp.World = function(dimension, liveCellCoordinates) {
	this.dimension = dimension;
	this.liveCellCoordinates = liveCellCoordinates;
};

myapp.World.prototype.tick = function() {
	// for each cell in world
	//  count number of live neighbours
	//  if(number of live cells === 3)
	//    survives
	//  else
	//    dies
	return this.liveCellCoordinates.slice(1, this.liveCellCoordinates.length-1);
};