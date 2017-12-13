//TODO: update solution to ES6
//TODO: more starter code; maybe 1-2 functions built out for them?

"use strict";

function Robot() {
	this.coordinates = [0, 0];
	this.bearing = "north";
}

Robot.prototype.setBearing = function(direction) {
	var directions = ["north", "east", "south", "west"];
	if (directions.indexOf(direction) === -1) {
		throw new Error("Invalid Robot Bearing");
	} else {
		this.bearing = direction;
	}
};

Robot.prototype.setCoordinates = function(xcoord, ycoord) {
	this.coordinates = [xcoord, ycoord];
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
		this.setBearing("west");
	} else if (this.bearing === "south") {
		this.setBearing("east");
	} else if (this.bearing === "east") {
		this.setBearing("north");
	} else if (this.bearing === "west") {
		this.setBearing("south");
	}
};

Robot.prototype.turnRight = function() {
	if (this.bearing === "north") {
		this.setBearing("east");
	} else if (this.bearing === "south") {
		this.setBearing("west");
	} else if (this.bearing === "east") {
		this.setBearing("south");
	} else if (this.bearing === "west") {
		this.setBearing("north");
	}
};

Robot.prototype.translateInstructions = function(s) {
	// var result = [];
	s.split("").forEach(character => {
		if (character === "L") {
			this.turnLeft();
			// result.push("turnLeft");
		} else if (character === "R") {
			this.turnRight();
			// result.push("turnRight");
		} else if (character === "A") {
			this.advance();
			// result.push("advance");
		}
	});
	// return result;
};

Robot.prototype.place = function(args) {
	this.setBearing(args.direction);
	this.setCoordinates(args.x, args.y);
};

Robot.prototype.evaluate = function(s) {
	this.translateInstructions(s).forEach(function(instruction) {
		// console.log(this[instruction]);
		this[instruction]();
	}, this);
};
