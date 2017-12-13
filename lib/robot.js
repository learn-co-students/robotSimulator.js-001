//TODO: update solution to ES6
//TODO: more starter code; maybe 1-2 functions built out for them?

class Robot {
	constructor() {
		this.validDirections = ["north", "south", "east", "west"];
		this.coordinates = [0, 0];
		this.bearing = "north";
	}

	setCoordinates(x, y) {
		this.coordinates = [x, y];
	}

	setBearing(direction) {
		if (this.validDirections.includes(direction)) {
			this.bearing = direction;
		} else {
			throw new Error("Invalid Robot Bearing");
		}
	}

	place(placement) {
		this.setCoordinates(placement.x, placement.y);
		this.setBearing(placement.direction);
	}

	turnRight() {
		switch (this.bearing) {
			case "north":
				this.setBearing("east");
				break;
			case "south":
				this.setBearing("west");
				break;
			case "east":
				this.setBearing("south");
				break;
			case "west":
				this.setBearing("north");
				break;
			default:
				break;
		}
	}

	// if (this.bearing === "north") {
	// 	this.setBearing("east");
	// } else if (this.bearing === "south") {
	// 	this.setBearing("west");
	// } else if (this.bearing === "east") {
	// 	this.setBearing("south");
	// } else if (this.bearing === "west") {
	// 	this.setBearing("north");
	// }

	turnLeft() {
		switch (this.bearing) {
			case "north":
				this.setBearing("west");
				break;
			case "south":
				this.setBearing("east");
				break;
			case "east":
				this.setBearing("north");
				break;
			case "west":
				this.setBearing("south");
				break;
			default:
				break;
		}
	}

	advance() {
		switch (this.bearing) {
			case "north":
				this.coordinates[1] += 1;
				break;
			case "south":
				this.coordinates[1] -= 1;
				break;
			case "east":
				this.coordinates[0] += 1;
				break;
			case "west":
				this.coordinates[0] -= 1;
				break;
			default:
				break;
		}
	}

	translateInstructions() {}
}
/*
"use strict";

function Robot() {
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
*/
