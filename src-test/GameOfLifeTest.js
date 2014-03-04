GolTest = TestCase("GolTest");

/**
 * Key:
 * Dead cell [ ]
 * Live cell [*]
 */

/**
 * @before [ ]
 * @after  [ ]
 */
GolTest.prototype.test_afterTick_worldWithOneDeadCell_remainsDead = function() {
  
  var world = new myapp.World(liveCellCoordinates=[]);
  liveCellCoordinates = world.tick();
  assertEquals([], liveCellCoordinates);
};

/**
 * @before [*]
 * @after  [ ]
 */
GolTest.prototype.test_afterTick_worldWithOneLiveCell_becomesDead = function() {
	  var world = new myapp.World(liveCellCoordinates=[[0,0]]);
	  liveCellCoordinates = world.tick();
	  assertEquals([], liveCellCoordinates);
};

/**
 * @before [*][*]
 * @after  [ ][ ]
 */
GolTest.prototype.test_afterTick_worldWithTwoAdjacentLiveCells_becomesDead = function() {
	  var world = new myapp.World(liveCellCoordinates=[[0,0], [1,0]]);
	  liveCellCoordinates = world.tick();
	  assertEquals([], liveCellCoordinates);
};

/**
 * @before [*][*]
 * 		   [*][*]
 * @after  [*][*]
 * 		   [*][*]
 */
GolTest.prototype.test_afterTick_allCellsWithThreeLiveNeighboursSurvive = function() {
	  var world = new myapp.World(liveCellCoordinates=[[0,0], [1,0], [0,1], [1,1]]);
	  liveCellCoordinates = world.tick();
	  assertEquals([[0,0], [1,0], [0,1], [1,1]], liveCellCoordinates);
};

/**
 * @before [*][*][*]
 * @after  [ ][*][ ]
 */
GolTest.prototype.test_afterTick_threeLiveCellsInARow_middleSurvives = function() {
	  var world = new myapp.World(liveCellCoordinates=[[0,0], [1,0], [2,0]]);
	  liveCellCoordinates = world.tick();
	  assertEquals([[1,0]], liveCellCoordinates);
};

/**
 * @before [*][ ][ ]
 * 		   [*][ ][ ]
 * 		   [*][ ][ ]
 * 
 * @after  [ ][ ][ ]
 * 		   [*][ ][ ]
 * 		   [ ][ ][ ]
 */
GolTest.prototype.test_afterTick_threeLiveCellsInAColumn_middleSurvives = function() {
	  var world = new myapp.World(liveCellCoordinates=[[0,0], [0,1], [0,2]]);
	  liveCellCoordinates = world.tick();
	  assertEquals([[0,1]], liveCellCoordinates);
};

/**
 * @before [*][*]
 * 		   [*][ ]
 * @after  [*][ ]
 * 		   [ ][*]
 */
//GolTest.prototype.test_afterTick_liveCellWithTwoLiveNeighbours_survives = function() {
//	  var world = new myapp.World(liveCellCoordinates=[[0,0], [1,0], [0,1]]);
//	  liveCellCoordinates = world.tick();
//	  assertEquals([[0,0], [1,1]], liveCellCoordinates);
//};

//GolTest.prototype.test_afterTick_anotherliveCellWithTwoLiveNeighbours_survives = function() {
//	  var world = new myapp.World(liveCellCoordinates=[[0,0], [1,0], [1,1]]);
//	  liveCellCoordinates = world.tick();
//	  assertEquals([1,0], liveCellCoordinates);
//};

