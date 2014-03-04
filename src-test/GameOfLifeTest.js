GolTest = TestCase("GolTest");

GolTest.prototype.test_afterTick_worldWithOneDeadCell_remainsDead = function() {
  var world = new myapp.World(liveCellCoordinates=[]);
  liveCellCoordinates = world.tick();
  assertEquals([], liveCellCoordinates);
};

GolTest.prototype.test_afterTick_worldWithOneLiveCell_becomesDead = function() {
	  var world = new myapp.World(liveCellCoordinates=[[0,0]]);
	  liveCellCoordinates = world.tick();
	  assertEquals([], liveCellCoordinates);
};

GolTest.prototype.test_afterTick_worldWithTwoAdjacentLiveCells_becomesDead = function() {
	  var world = new myapp.World(liveCellCoordinates=[[0,0], [1,0]]);
	  liveCellCoordinates = world.tick();
	  assertEquals([], liveCellCoordinates);
};

GolTest.prototype.test_afterTick_liveCellWithTwoLiveNeighbours_survives = function() {
	  var world = new myapp.World(liveCellCoordinates=[[0,0], [1,0], [0,1]]);
	  liveCellCoordinates = world.tick();
	  assertEquals([0,0], liveCellCoordinates);
};

GolTest.prototype.test_afterTick_anotherliveCellWithTwoLiveNeighbours_survives = function() {
	  var world = new myapp.World(liveCellCoordinates=[[0,0], [1,0], [1,1]]);
	  liveCellCoordinates = world.tick();
	  assertEquals([1,0], liveCellCoordinates);
};

