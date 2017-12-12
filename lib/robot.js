//TODO: update solution to ES6

"use strict";

function Robot() {
	this.coordinates = [0, 0];
	this.bearing = "north";
}

Robot.prototype.at = function(xcoord, ycoord) {
	this.coordinates = [xcoord, ycoord];
};

Robot.prototype.setOrientation = function(direction) {
	var directions = ["north", "east", "south", "west"];
	if (directions.indexOf(direction) === -1) {
		console.log(direction);
	} else {
		this.bearing = direction;
	}
};

Robot.prototype.advance = function() {
	if (this.bearing === "north") {
		this.coordinates[1] += 1;
	} else if (this.bearing === "south") {
		this.coordinates[1] -= 1;
	} else if (this.bearing === "east") {
		this.coordinates[0] += 1;
	} else if (this.bearing === "west") {
		this.coordinates[0] -= 1;
	}
};

Robot.prototype.turnLeft = function() {
	if (this.bearing === "north") {
		this.setOrientation("west");
	} else if (this.bearing === "south") {
		this.setOrientation("east");
	} else if (this.bearing === "east") {
		this.setOrientation("north");
	} else if (this.bearing === "west") {
		this.setOrientation("south");
	}
};

Robot.prototype.turnRight = function() {
	if (this.bearing === "north") {
		this.setOrientation("east");
	} else if (this.bearing === "south") {
		this.setOrientation("west");
	} else if (this.bearing === "east") {
		this.setOrientation("south");
	} else if (this.bearing === "west") {
		this.setOrientation("north");
	}
};

Robot.prototype.translateInstructions = function(s) {
	var result = [];
	s.split("").forEach(function(character) {
		if (character === "L") {
			result.push("turnLeft");
		} else if (character === "R") {
			result.push("turnRight");
		} else if (character === "A") {
			result.push("advance");
		}
	});
	return result;
};

Robot.prototype.place = function(args) {
	this.coordinates = [args.x, args.y];
	this.bearing = args.direction;
};

Robot.prototype.evaluate = function(s) {
	this.instructions(s).forEach(function(instruction) {
		this[instruction]();
	}, this);
};
