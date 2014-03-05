myapp = {};

myapp.World = function(liveCellCoordinates) {
	this.liveCellCoordinates = liveCellCoordinates;
};

myapp.World.prototype.tick = function() {
       
	return this.liveCellCoordinates.slice(1, this.liveCellCoordinates.length-1);
};