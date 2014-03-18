var dimension = 12;

$(document).ready(function(){
	drawGrid(dimension);
	var seed = generateRandomLiveCellsSeed(dimension, chanceOfAlive=0.5);	
	drawLiveCells(seed);
	
	world = new app.Game(dimension, seed);
	
	$('#step').click(function() {
		drawLiveCells(world.step());
	});
	
	$('#play').click(function() {
		play();
	});
	
});

function play() {
	drawLiveCells(world.step());
	setTimeout('play()', 200);
}

function drawGrid(dimension) {
	$grid = $('#grid');
	var trHtml = [];
	for(var y=0; y<dimension; y++) {
		trHtml.push("<tr>");
		for(var x=0; x<dimension; x++) {
			trHtml.push("<td>&nbsp</td>");
		}
	}
	var trHtmlString = trHtml.join('');
	$grid.append($(trHtmlString));
}

function clearGrid() {
	for(var y=0; y<dimension; y++) {
		for(var x=0; x<dimension; x++) {
			var $drawableCell = getCell(x, y);
			$drawableCell.removeClass('alive');
		}
	}
}

function drawLiveCells(liveCells) {
	clearGrid();	
	for(var cellRef in liveCells) {
		console.log("live cell" + liveCells[cellRef]);
		var $drawableCell = getCell(liveCells[cellRef][0], liveCells[cellRef][1]);
		$drawableCell.addClass('alive');
	}
}

function getCell(x, y) {
	cells = $grid.find('td');
	return $(cells[y*dimension +x]);
}