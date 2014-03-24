
$(document).ready(function(){
	configureDimension();
	
	$('#stepback').click(function() {
		pause();
		grid.drawLiveCells(world.stepBack());
	});
	
	$('#play').click(function() {
		play();
	});
	
	$('#pause').click(function() {
		pause();
	});

	$('#step').click(function() {
		pause();
		grid.drawLiveCells(world.step());
	});
});

function configureDimension() {
	var rootElement = document.getElementById("dimensionSetter");
	var model = {
		    initialize: function () {
		        this.dimensionConf = 12;
		    },
		    update: function () {
		    	this.yDimension = this.dimensionConf;
		    	grid = new Grid(this.dimensionConf);
		    	grid.draw();
		    	var seed = generateRandomLiveCellsSeed(this.dimensionConf, chanceOfAlive=0.5);
				grid.drawLiveCells(seed);   	
		    	world = new app.Game(this.dimensionConf, seed);
		    }
	};
	
	var tangle = new Tangle(rootElement, model);
}

function play() {
	grid.drawLiveCells(world.step());
	timer = setTimeout('play()', 200);
}

function pause() {
	if(typeof timer != "undefined") {
		clearTimeout(timer);
	}
}

Grid = function(dimension) {
	this.dimension = dimension;
	this.draw = function() {
		$grid = $('#grid');
		$grid.empty();
		var trHtml = [];
		for(var y=0; y<this.dimension; y++) {
			trHtml.push("<tr>");
			for(var x=0; x<this.dimension; x++) {
				trHtml.push("<td>&nbsp</td>");
			}
		}
		var trHtmlString = trHtml.join('');
		$grid.append($(trHtmlString));
	};
	
	this.clear = function() {
		for(var y=0; y<this.dimension; y++) {
			for(var x=0; x<this.dimension; x++) {
				var $drawableCell = this.getCell(x, y);
				$drawableCell.removeClass('alive');
			}
		}
	};
	
	this.drawLiveCells = function(liveCells) {
		this.clear();
		for(var cellRef in liveCells) {
			var $drawableCell = this.getCell(liveCells[cellRef][0], liveCells[cellRef][1]);
			$drawableCell.addClass('alive');
		}
	};

	this.getCell = function(x, y) {
		cells = $grid.find('td');
		return $(cells[y*this.dimension +x]);
	};
};
