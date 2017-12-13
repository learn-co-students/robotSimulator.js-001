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

	translateInstructions(instructions) {
		instructions.split("").forEach(instruction => {
			switch (instruction) {
				case "L":
					this.turnLeft();
					break;
				case "R":
					this.turnRight();
					break;
				case "A":
					this.advance();
					break;
				default:
					break;
			}
		});
	}
}
