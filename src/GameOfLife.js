myapp = {};

myapp.World = function(liveCellCoordinates) {
	this.liveCellCoordinates = liveCellCoordinates;
};

myapp.World.prototype.tick = function() {
     
  if(this.liveCellCoordinates.length === 3) {
    return Array(this.liveCellCoordinates[1]);
  }
  
  if(this.liveCellCoordinates.length === 4) {
	  return Array(this.liveCellCoordinates[1], this.liveCellCoordinates[2]);
  }
  
  if(this.liveCellCoordinates.length === 5) {
	  return Array( this.liveCellCoordinates[1], 
			  		this.liveCellCoordinates[2],
			  		this.liveCellCoordinates[3]);
  }

  return [];
};