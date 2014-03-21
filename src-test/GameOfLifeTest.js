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
GolTest.prototype.test_worldWithOneDeadCell_afterTick_remainsDead = function() {
  
  var world = new myapp.World(1, liveCellCoordinates=[]);
  assertEquals([], world.step());
};

/**
 * @before [*]
 * @after  [ ]
 */
GolTest.prototype.test_worldWithOneLiveCell_afterTick_becomesDead = function() {
	  var world = new myapp.World(1, liveCellCoordinates=[[0,0]]);
	  assertEquals([], world.step());
};

/**
 * @before [*][*]
 * 		   [ ][ ]
 * @after  [ ][ ]
 * 		   [ ][ ]
 */
GolTest.prototype.test_twoLiveCellsInARow_afterTick_allDie = function() {
	  var world = new myapp.World(2, liveCellCoordinates=[[0,0], [1,0]]);
	  assertEquals([], world.step());
};

/**
 * @before [*][ ][ ]
 * 		   [ ][*][ ]
 * 		   [ ][ ][*]
 * @after  [ ][ ][ ]
 * 		   [ ][*][ ]
 * 		   [ ][ ][ ]
 */
GolTest.prototype.test_threeLiveCellsDiagonal_afterTick_middleSurvives = function() {
	  var world = new myapp.World(3, liveCellCoordinates=[[0,0], [1,1], [2,2]]);
	  assertEquals([[1,1]], world.step());
};

/**
 * @before [*][*][*]
 * 		   [ ][ ][ ]	
 * 		   [ ][ ][ ]
 * @after  [ ][*][ ]
 * 		   [ ][*][ ]	
 * 		   [ ][ ][ ]
 *  */
GolTest.prototype.test_threeLiveCellsInARow_afterTick_middleSurvives = function() {
	  var world = new myapp.World(3, liveCellCoordinates=[[0,0], [1,0], [2,0]]);
	  assertEquals([[1,0], [1,1]], world.step());
};

/**
 * @before [*][ ][ ]
 * 		   [*][ ][ ]
 * 		   [*][ ][ ]
 * 
 * @after  [ ][ ][ ]
 * 		   [*][*][ ]
 * 		   [ ][ ][ ]
 */
GolTest.prototype.test_threeLiveCellsInAColumn_afterTick_middleSurvives = function() {
	  var world = new myapp.World(3, liveCellCoordinates=[[0,0], [0,1], [0,2]]);
	  liveCellCoordinates = world.step();
	  assertEquals([[0,1], [1,1]], liveCellCoordinates);
};

/**
 * @before [*][*][*][*]
 * 		   [ ][ ][ ][ ]
 * 		   [ ][ ][ ][ ]
 * 		   [ ][ ][ ][ ]
 * 
 * @after  [ ][*][*][ ]
 * 		   [ ][*][*][ ]
 * 		   [ ][ ][ ][ ]
 * 		   [ ][ ][ ][ ]
 */
GolTest.prototype.test_fourLiveCellsInARow_afterTick_middleTwoSurvive = function() {
	  var world = new myapp.World(4, liveCellCoordinates=[[0,0], [1,0], [2,0], [3,0]]);
	  liveCellCoordinates = world.step();
	  assertEquals([[1,0],[2,0],[1,1],[2,1]], liveCellCoordinates);
};

/**
 * @before [*][ ][ ][ ]
 * 		   [*][ ][ ][ ]
 * 		   [*][ ][ ][ ]
 * 		   [*][ ][ ][ ]
 * 
 * @after  [ ][ ][ ][ ]
 * 		   [*][*][ ][ ]
 * 		   [*][*][ ][ ]
 * 		   [ ][ ][ ][ ]
 */
GolTest.prototype.test_fourLiveCellsInAColumn_afterTick_middleTwoSurvive = function() {
	  var world = new myapp.World(4, liveCellCoordinates=[[0,0], [0,1], [0,2], [0,3]]);
	  liveCellCoordinates = world.step();
	  assertEquals([[0,1],[1,1],[0,2],[1,2]], liveCellCoordinates);
};

/**
 * @before [*][*]
 * 		   [*][*]
 * @after  [*][*]
 * 		   [*][*]
 */
GolTest.prototype.test_twoByTwoBlockOfLiveCells_afterTick_allSurvive = function() {
	  var world = new myapp.World(2, liveCellCoordinates=[[0,0], [1,0], [0,1], [1,1]]);
	  assertEquals([[0,0], [1,0], [0,1], [1,1]], world.step());
};

/**
 * @before [*][*]
 * 		   [*][ ]
 * @after  [*][*]
 * 		   [*][*]
 */
GolTest.prototype.test_threeCelledRshape_afterTick_becomesTwoByTwoBlock = function() {
	  var world = new myapp.World(2, liveCellCoordinates=[[0,0], [1,0], [0,1]]);
	  assertEquals([[0,0], [1,0], [0,1], [1,1]], world.step());
};

/**
 * @brief  Tests a 2 step oscillating pattern called a Blinker.
 * @before [ ][*][ ]
 * 		   [ ][*][ ]
 * 		   [ ][*][ ]
 * 
 * @after  [ ][*][ ]
 * 		   [ ][*][ ]
 * 		   [ ][*][ ]
 */
GolTest.prototype.test_Blinker = function() {
	  var world = new myapp.World(3, liveCellCoordinates=[[1,0], [1,1], [1,2]]);
	  var liveCells = world.step();
	  jstestdriver.console.log("1st step", liveCells);
	  assertEquals([[0,1], [1,1], [2,1]], liveCells);
	  var liveCells = world.step();
	  jstestdriver.console.log("2nd step", liveCells);
	  assertEquals([[1,0], [1,1], [1,2]], liveCells);
};

GolTest.prototype.test_stepBackOnSeed_shouldReturnSeed = function() {
	var blinkerVerticalLine = [[1,0], [1,1], [1,2]];
	var world = new myapp.World(dimension=3, liveCellsCoordinates=blinkerVerticalLine);
	assertEquals(blinkerVerticalLine, world.stepBack());
};

GolTest.prototype.test_stepBackwardsOnce_blinker = function() {
	var blinkerVerticalLine = [[1,0], [1,1], [1,2]];
	var world = new myapp.World(dimension=3, liveCellsCoordinates=blinkerVerticalLine);
	world.step();
	assertEquals(blinkerVerticalLine, world.stepBack());
};

GolTest.prototype.test_stepBackwardsFromBlock_ToThreeCelledRshape = function() {
	var threeCelledRshape = [[0,0], [1,0], [0,1]];
	var world = new myapp.World(dimension=2, liveCellsSeed=threeCelledRshape);
	world.step();
	assertEquals(threeCelledRshape, world.stepBack());
};
